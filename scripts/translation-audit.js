#!/usr/bin/env node

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const LANGUAGES = ['en', 'zh', 'hi', 'es', 'ar', 'fr', 'pt', 'ru', 'sw', 'ha'];
const NAMESPACES = ['common', 'navigation', 'pages', 'services', 'products', 'forms'];

// Function to recursively flatten nested JSON objects
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

// Function to get value from nested object using dot notation
function getValue(obj, path) {
  return path.split('.').reduce((current, key) => current && current[key], obj);
}

// Function to set value in nested object using dot notation
function setValue(obj, path, value) {
  const keys = path.split('.');
  const lastKey = keys.pop();
  let current = obj;
  
  for (const key of keys) {
    if (!(key in current) || typeof current[key] !== 'object') {
      current[key] = {};
    }
    current = current[key];
  }
  
  current[lastKey] = value;
}

// Load all locale files
function loadLocaleFiles() {
  const locales = {};
  
  for (const lang of LANGUAGES) {
    locales[lang] = {};
    
    for (const ns of NAMESPACES) {
      const filePath = `client/public/locales/${lang}/${ns}.json`;
      
      try {
        if (existsSync(filePath)) {
          const content = readFileSync(filePath, 'utf-8');
          locales[lang][ns] = JSON.parse(content);
        } else {
          console.warn(`⚠️  Missing file: ${filePath}`);
          locales[lang][ns] = {};
        }
      } catch (error) {
        console.error(`❌ Error loading ${filePath}:`, error.message);
        locales[lang][ns] = {};
      }
    }
  }
  
  return locales;
}

// Analyze translation completeness
function analyzeTranslations() {
  console.log('🔍 Analyzing translation completeness across all languages...\n');
  
  const locales = loadLocaleFiles();
  const report = {
    timestamp: new Date().toISOString(),
    summary: {},
    missingKeys: {},
    statistics: {},
    recommendations: []
  };

  // Use English as the source of truth
  const englishKeys = {};
  for (const ns of NAMESPACES) {
    englishKeys[ns] = flattenKeys(locales.en[ns] || {});
  }

  // Calculate missing keys for each language
  for (const lang of LANGUAGES) {
    if (lang === 'en') continue;
    
    report.missingKeys[lang] = {};
    let totalMissing = 0;
    let totalKeys = 0;
    
    for (const ns of NAMESPACES) {
      const enKeys = englishKeys[ns];
      const langKeys = flattenKeys(locales[lang][ns] || {});
      const missing = enKeys.filter(key => !langKeys.includes(key));
      
      report.missingKeys[lang][ns] = missing;
      totalMissing += missing.length;
      totalKeys += enKeys.length;
    }
    
    const completeness = totalKeys > 0 ? Math.round(((totalKeys - totalMissing) / totalKeys) * 100) : 0;
    
    report.statistics[lang] = {
      totalKeys,
      missingKeys: totalMissing,
      completeness: `${completeness}%`,
      status: completeness >= 95 ? 'Complete' : completeness >= 80 ? 'Good' : completeness >= 60 ? 'Needs Work' : 'Critical'
    };
  }

  // Add English statistics
  let totalEnKeys = 0;
  for (const ns of NAMESPACES) {
    totalEnKeys += englishKeys[ns].length;
  }
  
  report.statistics.en = {
    totalKeys: totalEnKeys,
    missingKeys: 0,
    completeness: '100%',
    status: 'Complete (Source)'
  };

  // Generate recommendations
  const languagesByStatus = {
    critical: [],
    needsWork: [],
    good: [],
    complete: []
  };

  for (const [lang, stats] of Object.entries(report.statistics)) {
    if (lang === 'en') continue;
    
    const completeness = parseInt(stats.completeness);
    if (completeness < 60) languagesByStatus.critical.push(lang);
    else if (completeness < 80) languagesByStatus.needsWork.push(lang);
    else if (completeness < 95) languagesByStatus.good.push(lang);
    else languagesByStatus.complete.push(lang);
  }

  if (languagesByStatus.critical.length > 0) {
    report.recommendations.push(`🚨 Critical: Languages ${languagesByStatus.critical.join(', ')} need immediate attention (< 60% complete)`);
  }
  
  if (languagesByStatus.needsWork.length > 0) {
    report.recommendations.push(`⚠️  Priority: Languages ${languagesByStatus.needsWork.join(', ')} need significant work (60-79% complete)`);
  }
  
  if (languagesByStatus.good.length > 0) {
    report.recommendations.push(`👍 Good: Languages ${languagesByStatus.good.join(', ')} are mostly complete (80-94% complete)`);
  }
  
  if (languagesByStatus.complete.length > 0) {
    report.recommendations.push(`✅ Excellent: Languages ${languagesByStatus.complete.join(', ')} are complete (95%+ complete)`);
  }

  return report;
}

// Generate missing translation templates
function generateMissingTranslations(report, createFiles = false) {
  console.log('📝 Generating missing translation templates...\n');
  
  const locales = loadLocaleFiles();
  
  for (const [lang, namespaces] of Object.entries(report.missingKeys)) {
    for (const [ns, missingKeys] of Object.entries(namespaces)) {
      if (missingKeys.length === 0) continue;
      
      console.log(`\n📄 ${lang}/${ns}.json - ${missingKeys.length} missing keys:`);
      
      const template = {};
      
      for (const key of missingKeys) {
        const englishValue = getValue(locales.en[ns], key);
        if (englishValue) {
          setValue(template, key, `[TRANSLATE] ${englishValue}`);
          console.log(`   ${key}: "${englishValue}"`);
        }
      }
      
      if (createFiles && Object.keys(template).length > 0) {
        const templatePath = `client/public/locales/${lang}/${ns}_missing.json`;
        writeFileSync(templatePath, JSON.stringify(template, null, 2));
        console.log(`   → Template saved: ${templatePath}`);
      }
    }
  }
}

// Display summary report
function displayReport(report) {
  console.log('📊 TRANSLATION COMPLETENESS REPORT');
  console.log('='.repeat(50));
  
  // Summary table
  console.log('\n🌍 Language Summary:');
  console.log('-'.repeat(50));
  console.log('Lang  | Keys   | Missing | Complete | Status');
  console.log('-'.repeat(50));
  
  for (const lang of LANGUAGES) {
    const stats = report.statistics[lang];
    const flag = lang === 'en' ? '🇺🇸' : lang === 'zh' ? '🇨🇳' : lang === 'hi' ? '🇮🇳' : 
                  lang === 'es' ? '🇪🇸' : lang === 'ar' ? '🇸🇦' : lang === 'fr' ? '🇫🇷' :
                  lang === 'pt' ? '🇵🇹' : lang === 'ru' ? '🇷🇺' : lang === 'sw' ? '🇹🇿' : 
                  lang === 'ha' ? '🇳🇬' : '🏁';
    
    const statusIcon = stats.status === 'Complete' || stats.status === 'Complete (Source)' ? '✅' :
                       stats.status === 'Good' ? '👍' :
                       stats.status === 'Needs Work' ? '⚠️' :
                       '🚨';
    
    console.log(`${flag} ${lang.toUpperCase().padEnd(3)} | ${stats.totalKeys.toString().padEnd(6)} | ${stats.missingKeys.toString().padEnd(7)} | ${stats.completeness.padEnd(8)} | ${statusIcon} ${stats.status}`);
  }
  
  // Recommendations
  if (report.recommendations.length > 0) {
    console.log('\n📋 Recommendations:');
    console.log('-'.repeat(50));
    report.recommendations.forEach(rec => console.log(rec));
  }
  
  console.log(`\n📄 Full report saved to: translation-audit-report.json`);
  console.log(`⏰ Report generated: ${new Date().toLocaleString()}`);
}

// Main execution
function main() {
  const report = analyzeTranslations();
  
  // Save detailed report
  writeFileSync('translation-audit-report.json', JSON.stringify(report, null, 2));
  
  // Display summary
  displayReport(report);
  
  // Show most critical missing translations
  console.log('\n🔥 Most Critical Missing Translations:');
  console.log('-'.repeat(50));
  
  let hasEssentialMissing = false;
  const essentialKeys = ['nav.', 'buttons.', 'messages.', 'contact.', 'quote.'];
  
  for (const [lang, namespaces] of Object.entries(report.missingKeys)) {
    for (const [ns, missingKeys] of Object.entries(namespaces)) {
      const criticalMissing = missingKeys.filter(key => 
        essentialKeys.some(essential => key.startsWith(essential))
      );
      
      if (criticalMissing.length > 0) {
        console.log(`\n🚨 ${lang}/${ns}.json:`);
        criticalMissing.slice(0, 5).forEach(key => console.log(`   • ${key}`));
        if (criticalMissing.length > 5) {
          console.log(`   ... and ${criticalMissing.length - 5} more`);
        }
        hasEssentialMissing = true;
      }
    }
  }
  
  if (!hasEssentialMissing) {
    console.log('✅ No critical UI translations missing!');
  }
  
  console.log('\n💡 To generate missing translation templates:');
  console.log('   node scripts/translation-audit.js --generate-templates');
}

// Check for command line arguments
const args = process.argv.slice(2);
const generateTemplates = args.includes('--generate-templates');

if (generateTemplates) {
  const report = analyzeTranslations();
  generateMissingTranslations(report, true);
} else {
  main();
}