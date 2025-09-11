#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const LOCALES = ['ar', 'es', 'fr', 'ha', 'hi', 'pt', 'ru', 'sw', 'zh'];
const LOCALES_DIR = path.join(__dirname, '../client/public/locales');

// Helper functions
function loadJSON(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    console.error(`❌ Error loading ${filePath}:`, error.message);
    return null;
  }
}

function saveJSON(filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
    console.log(`✅ Updated: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error saving ${filePath}:`, error.message);
    return false;
  }
}

function backupInvalidFile(filePath) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const backupPath = `${filePath}.invalid.${timestamp}`;
  try {
    fs.copyFileSync(filePath, backupPath);
    console.log(`📦 Backed up invalid file: ${backupPath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error backing up ${filePath}:`, error.message);
    return false;
  }
}

function deepMergeMissing(target, source, basePath = []) {
  let addedCount = 0;
  
  if (typeof source !== 'object' || source === null) {
    return addedCount;
  }
  
  for (const [key, value] of Object.entries(source)) {
    const currentPath = [...basePath, key];
    
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      if (!target[key]) target[key] = {};
      addedCount += deepMergeMissing(target[key], value, currentPath);
    } else {
      if (target[key] === undefined) {
        target[key] = value;
        addedCount++;
        console.log(`  + Added: ${currentPath.join('.')}`);
      }
    }
  }
  
  return addedCount;
}

function getNamespaceFiles() {
  const enDir = path.join(LOCALES_DIR, 'en');
  try {
    return fs.readdirSync(enDir).filter(file => file.endsWith('.json'));
  } catch (error) {
    console.error(`❌ Error reading English locale directory: ${error.message}`);
    return [];
  }
}

function main() {
  console.log('🔄 Starting generalized i18n key synchronization...\n');
  
  // Get all namespace files from English locale
  const namespaceFiles = getNamespaceFiles();
  
  if (namespaceFiles.length === 0) {
    console.error('❌ No namespace files found in English locale');
    process.exit(1);
  }
  
  console.log('📚 Found English namespaces:', namespaceFiles.join(', '));
  console.log('🌍 Target locales:', LOCALES.join(', '));
  console.log('');
  
  let totalAdded = 0;
  const results = {};
  
  // Process each locale
  for (const locale of LOCALES) {
    console.log(`🌍 Processing locale: ${locale}`);
    results[locale] = { added: 0, files: 0, errors: 0 };
    
    // Process each namespace file
    for (const fileName of namespaceFiles) {
      const enFilePath = path.join(LOCALES_DIR, 'en', fileName);
      const localeFilePath = path.join(LOCALES_DIR, locale, fileName);
      const namespaceName = fileName.replace('.json', '');
      
      // Load English source
      const enData = loadJSON(enFilePath);
      if (!enData) {
        console.log(`  ❌ Skipping ${namespaceName} - failed to load English source`);
        results[locale].errors++;
        continue;
      }
      
      // Load or create locale file
      let localeData = loadJSON(localeFilePath);
      
      // Handle invalid JSON files
      if (localeData === null && fs.existsSync(localeFilePath)) {
        console.log(`  🔧 Invalid JSON detected in ${namespaceName}, backing up and recreating...`);
        backupInvalidFile(localeFilePath);
        localeData = {}; // Start fresh
      } else if (localeData === null) {
        console.log(`  📁 Creating missing ${namespaceName} file`);
        localeData = {};
      }
      
      // Deep merge missing keys
      const addedInFile = deepMergeMissing(localeData, enData);
      
      // Save if changes were made
      if (addedInFile > 0) {
        if (saveJSON(localeFilePath, localeData)) {
          results[locale].added += addedInFile;
          results[locale].files++;
        } else {
          results[locale].errors++;
        }
      }
      
      if (addedInFile > 0) {
        console.log(`  ✅ ${namespaceName}: added ${addedInFile} keys`);
      } else {
        console.log(`  ✅ ${namespaceName}: up to date`);
      }
    }
    
    const localeTotal = results[locale].added;
    totalAdded += localeTotal;
    
    if (localeTotal > 0) {
      console.log(`  🎯 Locale total: ${localeTotal} keys added across ${results[locale].files} files`);
    } else {
      console.log(`  🎯 Locale total: already synchronized`);
    }
    
    if (results[locale].errors > 0) {
      console.log(`  ⚠️  ${results[locale].errors} files had errors`);
    }
    console.log('');
  }
  
  // Summary
  console.log('📊 Synchronization Summary:');
  console.log(`  Total keys added: ${totalAdded}`);
  console.log(`  Namespaces processed: ${namespaceFiles.length}`);
  console.log(`  Locales processed: ${LOCALES.length}`);
  
  const errorCount = Object.values(results).reduce((sum, r) => sum + r.errors, 0);
  if (errorCount > 0) {
    console.log(`  ⚠️  Total errors: ${errorCount}`);
  }
  
  console.log('\n🎉 Synchronization complete!');
  
  if (totalAdded > 0) {
    console.log('\n💡 Note: All new keys use English text as fallbacks.');
    console.log('   Consider updating with proper translations for each language.');
    console.log('\n🔄 Restart your dev server to reload the updated translation files.');
  }
}

if (require.main === module) {
  main();
}

module.exports = { deepMergeMissing, loadJSON, saveJSON };