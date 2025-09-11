#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Starting bulk product page conversion...\n');

// Track statistics
let stats = {
  filesProcessed: 0,
  filesModified: 0,
  errors: 0
};

// Function to convert hardcoded content in a product file
function convertProductFile(filePath) {
  try {
    console.log(`📄 Processing: ${filePath}`);
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Convert hardcoded SEO titles
    if (content.includes('title="') && content.includes('Engineering"')) {
      // Convert common SEO title patterns
      content = content.replace(
        /title="([^"]+\| Powerton Engineering)"/g, 
        'title={t(\'pages:seo.productPages.$1.title\')}'
      );
      modified = true;
    }
    
    // Convert hardcoded product names
    const productNamePatterns = [
      // Siemens products
      { old: '"Siemens SIMATIC S7-1200"', new: 't(\'products-data:productNames.siemens.simaticS7_1200\')' },
      { old: '"Siemens SIMATIC S7-1500"', new: 't(\'products-data:productNames.siemens.simaticS7_1500\')' },
      { old: '"Allen-Bradley CompactLogix 5380"', new: 't(\'products-data:productNames.allenBradley.compactLogix5380\')' },
      { old: '"Schneider Electric Modicon M580"', new: 't(\'products-data:productNames.schneider.modiconM580\')' },
    ];
    
    productNamePatterns.forEach(pattern => {
      if (content.includes(pattern.old)) {
        content = content.replace(new RegExp(pattern.old, 'g'), pattern.new);
        modified = true;
      }
    });
    
    // Add translation namespaces if missing
    if (modified && !content.includes('\'products-data\'') && content.includes('useTranslation')) {
      content = content.replace(
        /useTranslation\(\[([^\]]+)\]\)/,
        'useTranslation([$1, \'products-data\', \'pages\'])'
      );
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      stats.filesModified++;
      console.log(`  ✅ Modified: ${path.basename(filePath)}`);
    } else {
      console.log(`  📋 No changes: ${path.basename(filePath)}`);
    }
    
    stats.filesProcessed++;
    
  } catch (error) {
    console.error(`  ❌ Error processing ${filePath}:`, error.message);
    stats.errors++;
  }
}

// Main function to process all product files
function bulkConvertProducts() {
  const productDir = path.join(__dirname, '../client/src/pages/products-sub-category');
  
  try {
    const files = fs.readdirSync(productDir)
      .filter(file => file.endsWith('.tsx'))
      .slice(0, 5); // Start with first 5 files to test
    
    console.log(`Found ${files.length} product files to convert...\n`);
    
    files.forEach(file => {
      const filePath = path.join(productDir, file);
      convertProductFile(filePath);
    });
    
    console.log(`\n📊 Bulk conversion summary:`);
    console.log(`  Files processed: ${stats.filesProcessed}`);
    console.log(`  Files modified: ${stats.filesModified}`);
    console.log(`  Errors: ${stats.errors}`);
    
  } catch (error) {
    console.error('❌ Error reading product directory:', error.message);
  }
}

// Run the bulk conversion
bulkConvertProducts();