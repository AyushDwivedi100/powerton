#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read JSON file safely
function readJsonFile(filePath) {
    try {
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (error) {
        console.warn(`Warning: Could not read ${filePath}: ${error.message}`);
        return null;
    }
}

// Simple English detection heuristics
function looksLikeEnglish(text) {
    if (!text || typeof text !== 'string' || text.length < 3) return false;
    
    // Common English patterns
    const englishPatterns = [
        /\bthe\b/i, /\band\b/i, /\bfor\b/i, /\bwith\b/i, /\bin\b/i, /\bon\b/i, /\bat\b/i,
        /\bof\b/i, /\bto\b/i, /\bis\b/i, /\bare\b/i, /\bhas\b/i, /\bhave\b/i, /\bwill\b/i,
        /\bcan\b/i, /\bmay\b/i, /\bshould\b/i, /\bwould\b/i, /\bmust\b/i
    ];
    
    // Check if text contains common English words
    return englishPatterns.some(pattern => pattern.test(text));
}

// Recursively check for English values
function findEnglishValues(obj, prefix = '', enObj = null) {
    const results = [];
    
    if (typeof obj === 'string') {
        // Check if value exactly matches English
        const isExactEnglishMatch = enObj && obj === enObj;
        
        // Check if it looks like English using patterns
        const looksEnglish = looksLikeEnglish(obj);
        
        if (isExactEnglishMatch || looksEnglish) {
            results.push({
                key: prefix,
                value: obj,
                reason: isExactEnglishMatch ? 'exact_match' : 'english_patterns'
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
const localeDir = path.join(localesDir, 'en');
const files = fs.readdirSync(localeDir).filter(file => file.endsWith('.json'));

englishData.en = {};
for (const file of files) {
    const filePath = path.join(localeDir, file);
    const data = readJsonFile(filePath);
    if (data) {
        englishData.en[file] = data;
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
                    const value = item.value;
                    // Look for acronyms, brand names, technical terms
                    if (value.match(/\b[A-Z]{2,}\b/) || 
                        value.includes('PLC') || value.includes('SCADA') || value.includes('HMI') ||
                        value.includes('BLDC') || value.includes('VFD') || value.includes('DCS') ||
                        value.includes('PPE') || value.includes('OSHA') ||
                        value.includes('Siemens') || value.includes('Allen-Bradley') || 
                        value.includes('Schneider') || value.includes('ABB') ||
                        value.includes('LED') || value.includes('LCD') || value.includes('IP65') ||
                        value.includes('NEMA') || value.includes('UL') || value.includes('CE')) {
                        ambiguousTerms.add(value);
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
        values.slice(0, 10).forEach(item => { // Show first 10 per file
            console.log(`  ${item.key}: "${item.value}" (${item.reason})`);
        });
        if (values.length > 10) {
            console.log(`  ... and ${values.length - 10} more`);
        }
        console.log('');
    }
}

console.log(`Total English values found: ${totalEnglishValues}\n`);

// Report ambiguous terms
console.log('=== AMBIGUOUS TERMS REQUIRING CLARIFICATION ===\n');
if (ambiguousTerms.size > 0) {
    const sortedTerms = Array.from(ambiguousTerms).sort();
    console.log('The following terms may be technical acronyms, brand names, or specialized terminology:');
    sortedTerms.forEach(term => {
        console.log(`- "${term}"`);
    });
} else {
    console.log('No obvious ambiguous terms detected.');
}

console.log('\n=== END SCAN ===');