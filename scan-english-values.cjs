#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const franc = require('franc');

// Language detection helper
function detectLanguage(text) {
    if (!text || text.length < 3) return 'unknown';
    return franc(text);
}

// Read JSON file safely
function readJsonFile(filePath) {
    try {
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (error) {
        console.warn(`Warning: Could not read ${filePath}: ${error.message}`);
        return null;
    }
}

// Recursively check for English values
function findEnglishValues(obj, prefix = '', enObj = null) {
    const results = [];
    
    if (typeof obj === 'string') {
        // Check if value exactly matches English
        const isExactEnglishMatch = enObj && obj === enObj;
        
        // Check if language detection says it's English (for strings > 3 chars)
        const detectedLang = detectLanguage(obj);
        const isDetectedEnglish = obj.length > 3 && (detectedLang === 'eng' || detectedLang === 'en');
        
        if (isExactEnglishMatch || isDetectedEnglish) {
            results.push({
                key: prefix,
                value: obj,
                reason: isExactEnglishMatch ? 'exact_match' : 'detected_english'
            });
        }
    } else if (typeof obj === 'object' && obj !== null) {
        for (const [key, value] of Object.entries(obj)) {
            const newPrefix = prefix ? `${prefix}.${key}` : key;
            const enValue = enObj && typeof enObj === 'object' ? enObj[key] : null;
            results.push(...findEnglishValues(value, newPrefix, enValue));
        }
    }
    
    return results;
}

// Get all locale directories
const localesDir = 'client/public/locales';
const allLocales = fs.readdirSync(localesDir).filter(dir => 
    fs.statSync(path.join(localesDir, dir)).isDirectory()
);

const nonEnglishLocales = allLocales.filter(locale => locale !== 'en');

console.log('=== SCANNING FOR ENGLISH VALUES IN NON-ENGLISH LOCALE FILES ===\n');

const results = {};
const ambiguousTerms = new Set();
const englishData = {};

// Load all English files first
for (const locale of ['en']) {
    const localeDir = path.join(localesDir, locale);
    const files = fs.readdirSync(localeDir).filter(file => file.endsWith('.json'));
    
    englishData[locale] = {};
    for (const file of files) {
        const filePath = path.join(localeDir, file);
        const data = readJsonFile(filePath);
        if (data) {
            englishData[locale][file] = data;
        }
    }
}

// Scan each non-English locale
for (const locale of nonEnglishLocales) {
    console.log(`Scanning locale: ${locale}`);
    results[locale] = {};
    
    const localeDir = path.join(localesDir, locale);
    if (!fs.existsSync(localeDir)) {
        console.log(`  Directory not found: ${localeDir}`);
        continue;
    }
    
    const files = fs.readdirSync(localeDir).filter(file => file.endsWith('.json'));
    
    for (const file of files) {
        const filePath = path.join(localeDir, file);
        const data = readJsonFile(filePath);
        const enData = englishData.en[file];
        
        if (data && enData) {
            const englishValues = findEnglishValues(data, '', enData);
            
            if (englishValues.length > 0) {
                results[locale][file] = englishValues;
                console.log(`  ${file}: ${englishValues.length} English values found`);
                
                // Collect potential ambiguous terms
                englishValues.forEach(item => {
                    const value = item.value.toLowerCase();
                    // Look for acronyms, brand names, technical terms
                    if (value.match(/\b[A-Z]{2,}\b/) || 
                        value.includes('PLC') || value.includes('SCADA') || value.includes('HMI') ||
                        value.includes('BLDC') || value.includes('VFD') || value.includes('DCS') ||
                        value.includes('PPE') || value.includes('OSHA') ||
                        value.includes('Siemens') || value.includes('Allen-Bradley') || 
                        value.includes('Schneider') || value.includes('ABB')) {
                        ambiguousTerms.add(item.value);
                    }
                });
            }
        }
    }
}

// Generate report
console.log('\n=== DETECTION RESULTS ===\n');

let totalEnglishValues = 0;
for (const [locale, files] of Object.entries(results)) {
    for (const [file, values] of Object.entries(files)) {
        totalEnglishValues += values.length;
        console.log(`${locale}/${file}:`);
        values.forEach(item => {
            console.log(`  ${item.key}: "${item.value}" (${item.reason})`);
        });
        console.log('');
    }
}

console.log(`Total English values found: ${totalEnglishValues}\n`);

// Report ambiguous terms
console.log('=== AMBIGUOUS TERMS REQUIRING CLARIFICATION ===\n');
if (ambiguousTerms.size > 0) {
    const sortedTerms = Array.from(ambiguousTerms).sort();
    sortedTerms.forEach(term => {
        console.log(`- "${term}"`);
    });
} else {
    console.log('No obvious ambiguous terms detected.');
}

console.log('\n=== END SCAN ===');