#!/usr/bin/env node

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

const LANGUAGES = ['en', 'zh', 'hi', 'es', 'ar', 'fr', 'pt', 'ru', 'sw', 'ha'];
const NAMESPACES = ['common', 'navigation', 'pages', 'services', 'products', 'forms'];

// Patterns to find hardcoded English strings
const HARDCODED_PATTERNS = [
  // JSX text content
  /"[A-Z][a-zA-Z\s.,!?'-]*"/g,
  // String literals that look like UI text
  /'[A-Z][a-zA-Z\s.,!?'-]*'/g,
  // Common hardcoded patterns
  /placeholder\s*=\s*["'][A-Z][^"']*["']/g,
  /title\s*=\s*["'][A-Z][^"']*["']/g,
  /aria-label\s*=\s*["'][A-Z][^"']*["']/g,
  /alt\s*=\s*["'][A-Z][^"']*["']/g,
];

// Pattern to find translation function calls
const TRANSLATION_PATTERNS = [
  /t\(\s*['"`]([^'"`]+)['"`]/g,
  /\{t\(\s*['"`]([^'"`]+)['"`]/g,
];

function scanFile(filePath) {
  try {
    const content = readFileSync(filePath, 'utf-8');
    const results = {
      hardcodedStrings: [],
      translationKeys: [],
      filePath
    };

    // Find hardcoded strings
    HARDCODED_PATTERNS.forEach((pattern, index) => {
      let match;
      while ((match = pattern.exec(content)) !== null) {
        const lineNumber = content.substring(0, match.index).split('\n').length;
        const text = match[0];
        
        // Skip if it looks like code/imports/exports/technical strings
        if (!/^["'][A-Z][a-zA-Z\s.,!?'-]+["']$/.test(text) &&
            !/^(placeholder|title|aria-label|alt)\s*=/.test(match[0])) {
          continue;
        }
        
        results.hardcodedStrings.push({
          text: text,
          line: lineNumber,
          context: content.split('\n')[lineNumber - 1]?.trim() || '',
          pattern: index
        });
      }
    });

    // Find existing translation keys
    TRANSLATION_PATTERNS.forEach(pattern => {
      let match;
      while ((match = pattern.exec(content)) !== null) {
        const lineNumber = content.substring(0, match.index).split('\n').length;
        results.translationKeys.push({
          key: match[1],
          line: lineNumber,
          context: content.split('\n')[lineNumber - 1]?.trim() || ''
        });
      }
    });

    return results;
  } catch (error) {
    console.error(`Error scanning ${filePath}:`, error.message);
    return null;
  }
}

function scanDirectory(dirPath, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  const results = [];
  
  function traverse(currentPath) {
    const items = readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = join(currentPath, item);
      const stat = statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other irrelevant directories
        if (!['node_modules', '.git', 'dist', 'build'].includes(item)) {
          traverse(fullPath);
        }
      } else if (extensions.includes(extname(item))) {
        const scanResult = scanFile(fullPath);
        if (scanResult && (scanResult.hardcodedStrings.length > 0 || scanResult.translationKeys.length > 0)) {
          results.push(scanResult);
        }
      }
    }
  }
  
  traverse(dirPath);
  return results;
}

function analyzeTranslationCompleteness() {
  const analysis = {
    languages: {},
    missingKeys: {},
    stats: {}
  };

  // Load all locale files
  for (const lang of LANGUAGES) {
    analysis.languages[lang] = {};
    
    for (const ns of NAMESPACES) {
      try {
        const filePath = `client/public/locales/${lang}/${ns}.json`;
        const content = readFileSync(filePath, 'utf-8');
        analysis.languages[lang][ns] = JSON.parse(content);
      } catch (error) {
        console.warn(`Warning: Could not load ${lang}/${ns}.json`);
        analysis.languages[lang][ns] = {};
      }
    }
  }

  // Find missing keys by comparing all languages to English
  const enKeys = analysis.languages.en;
  
  for (const lang of LANGUAGES) {
    if (lang === 'en') continue;
    
    analysis.missingKeys[lang] = {};
    
    for (const ns of NAMESPACES) {
      analysis.missingKeys[lang][ns] = [];
      const enNsKeys = flattenKeys(enKeys[ns] || {});
      const langNsKeys = flattenKeys(analysis.languages[lang][ns] || {});
      
      for (const key of enNsKeys) {
        if (!langNsKeys.includes(key)) {
          analysis.missingKeys[lang][ns].push(key);
        }
      }
    }
  }

  // Calculate statistics
  for (const lang of LANGUAGES) {
    let totalKeys = 0;
    let missingCount = 0;
    
    for (const ns of NAMESPACES) {
      const enKeys = flattenKeys(analysis.languages.en[ns] || {});
      totalKeys += enKeys.length;
      
      if (lang !== 'en') {
        missingCount += (analysis.missingKeys[lang][ns] || []).length;
      }
    }
    
    analysis.stats[lang] = {
      totalKeys,
      missingKeys: lang === 'en' ? 0 : missingCount,
      completeness: lang === 'en' ? 100 : Math.round(((totalKeys - missingCount) / totalKeys) * 100)
    };
  }

  return analysis;
}

function flattenKeys(obj, prefix = '') {
  let keys = [];
  
  for (const key in obj) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      keys = keys.concat(flattenKeys(obj[key], fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  
  return keys;
}

function generateReport() {
  console.log('🔍 Analyzing i18n usage and translation completeness...\n');

  // Scan codebase for hardcoded strings and translation keys
  const codebaseResults = scanDirectory('client/src');
  
  // Analyze translation completeness
  const translationAnalysis = analyzeTranslationCompleteness();
  
  const report = {
    timestamp: new Date().toISOString(),
    codebaseAnalysis: {
      filesScanned: codebaseResults.length,
      totalHardcodedStrings: codebaseResults.reduce((sum, file) => sum + file.hardcodedStrings.length, 0),
      totalTranslationKeys: codebaseResults.reduce((sum, file) => sum + file.translationKeys.length, 0),
      files: codebaseResults
    },
    translationCompleteness: translationAnalysis
  };

  // Write detailed report to file
  writeFileSync('i18n-analysis-report.json', JSON.stringify(report, null, 2));
  
  // Display summary
  console.log('📊 SUMMARY');
  console.log('='.repeat(50));
  console.log(`📁 Files scanned: ${report.codebaseAnalysis.filesScanned}`);
  console.log(`🔤 Hardcoded strings found: ${report.codebaseAnalysis.totalHardcodedStrings}`);
  console.log(`🌐 Translation keys used: ${report.codebaseAnalysis.totalTranslationKeys}`);
  
  console.log('\n🌍 TRANSLATION COMPLETENESS');
  console.log('='.repeat(50));
  for (const [lang, stats] of Object.entries(translationAnalysis.stats)) {
    const flag = lang === 'en' ? '🇺🇸' : lang === 'zh' ? '🇨🇳' : lang === 'hi' ? '🇮🇳' : 
                  lang === 'es' ? '🇪🇸' : lang === 'ar' ? '🇸🇦' : lang === 'fr' ? '🇫🇷' :
                  lang === 'pt' ? '🇵🇹' : lang === 'ru' ? '🇷🇺' : lang === 'sw' ? '🇹🇿' : 
                  lang === 'ha' ? '🇳🇬' : '🏁';
    console.log(`${flag} ${lang.toUpperCase()}: ${stats.completeness}% (${stats.totalKeys - stats.missingKeys}/${stats.totalKeys} keys)`);
  }

  if (report.codebaseAnalysis.totalHardcodedStrings > 0) {
    console.log('\n⚠️  HARDCODED STRINGS FOUND');
    console.log('='.repeat(50));
    
    codebaseResults.forEach(file => {
      if (file.hardcodedStrings.length > 0) {
        console.log(`\n📄 ${file.filePath}`);
        file.hardcodedStrings.forEach(str => {
          console.log(`   Line ${str.line}: ${str.text}`);
          console.log(`   Context: ${str.context}`);
        });
      }
    });
  }

  console.log(`\n✅ Detailed report saved to: i18n-analysis-report.json`);
  return report;
}

// Run the analysis
generateReport();