// Migration Integrity Checker
// This script validates the completeness of the product data migration

const fs = require('fs');

function analyzeOldFile() {
  const oldFileContent = fs.readFileSync('client/src/data/products-detail-pages-data-old.ts', 'utf8');
  
  // Count categories
  const categoryMatches = oldFileContent.match(/key: "[\w-]+",\s*translationKey: "products:categories/g) || [];
  console.log(`Old file categories: ${categoryMatches.length}`);
  
  // Count product groups  
  const groupMatches = oldFileContent.match(/export const productGroups: ProductGroup\[\] = \[([\s\S]*?)\];/);
  if (groupMatches) {
    const groupContent = groupMatches[1];
    const groups = groupContent.match(/\{\s*key: "[\w-]+"/g) || [];
    console.log(`Old file product groups: ${groups.length}`);
  }
  
  // Count products
  const productMatches = oldFileContent.match(/export const products: Product\[\] = \[([\s\S]*?)\];/);
  if (productMatches) {
    const productContent = productMatches[1];
    const products = productContent.match(/\{\s*id: "[\w-]+"/g) || [];
    console.log(`Old file products: ${products.length}`);
  }
  
  // Count translation keys
  const translationKeys = oldFileContent.match(/translationKey[s]?:/g) || [];
  console.log(`Old file translation keys: ${translationKeys.length}`);
  
  return {
    categories: categoryMatches.length,
    groups: groupMatches ? (groupMatches[1].match(/\{\s*key: "[\w-]+"/g) || []).length : 0,
    products: productMatches ? (productMatches[1].match(/\{\s*id: "[\w-]+"/g) || []).length : 0,
    translationKeys: translationKeys.length
  };
}

function analyzeNewFile() {
  try {
    const newFileContent = fs.readFileSync('client/src/data/products-detail-pages-data.ts', 'utf8');
    
    // Simple counts without extracting full object
    // Count top-level categories by finding main category keys
    const categoryPattern = /"([\w-]+)": {\s*"key": "\1",\s*"title":/g;
    const categoryMatches = [...newFileContent.matchAll(categoryPattern)];
    console.log(`New file categories: ${categoryMatches.length}`);
    
    // Count subcategories 
    const subcategoryMatches = newFileContent.match(/"key": "[\w-]+",\s*"title": "[^"]+",\s*"description": "[^"]+",\s*"productGroups":/g) || [];
    console.log(`New file subcategories: ${subcategoryMatches.length}`);
    
    // Count product groups
    const groupMatches = newFileContent.match(/"key": "[\w-]+",\s*"slug": "[\w-]+",\s*"title": "[^"]+",\s*"description": "[^"]+",\s*"image":/g) || [];
    console.log(`New file product groups: ${groupMatches.length}`);
    
    // Count unique product IDs
    const productIdMatches = newFileContent.match(/"id": "([^"]+)"/g) || [];
    const uniqueProductIds = new Set(productIdMatches.map(match => match.match(/"id": "([^"]+)"/)[1]));
    console.log(`New file products: ${uniqueProductIds.size}`);
    
    // Check for translation keys (should be 0)
    const translationKeys = newFileContent.match(/translationKey[s]?:/g) || [];
    console.log(`New file translation keys: ${translationKeys.length}`);
    
    // Check for slug duplicates
    const slugMatches = newFileContent.match(/"slug": "([^"]+)"/g) || [];
    const slugs = slugMatches.map(match => match.match(/"slug": "([^"]+)"/)[1]);
    const uniqueSlugs = new Set(slugs);
    if (slugs.length !== uniqueSlugs.size) {
      console.log(`⚠️  Warning: ${slugs.length - uniqueSlugs.size} duplicate slugs found`);
    }
    
    return {
      categories: categoryMatches.length,
      subcategories: subcategoryMatches.length, 
      groups: groupMatches.length,
      products: uniqueProductIds.size,
      translationKeys: translationKeys.length
    };
  } catch (error) {
    console.log('New file not found or error reading:', error.message);
    return null;
  }
}

function main() {
  console.log('=== Migration Integrity Check ===\n');
  
  const oldStats = analyzeOldFile();
  const newStats = analyzeNewFile();
  
  console.log('\n=== Comparison ===');
  console.log(`Categories: Old(${oldStats.categories}) vs New(${newStats?.categories || 0})`);
  console.log(`Product Groups: Old(${oldStats.groups}) vs New(${newStats?.groups || 0})`);
  console.log(`Products: Old(${oldStats.products}) vs New(${newStats?.products || 0})`);
  console.log(`Translation Keys: Old(${oldStats.translationKeys}) vs New(${newStats?.translationKeys || 0})`);
  
  console.log('\n=== Migration Status ===');
  if (!newStats) {
    console.log('❌ New file not found - migration not started');
  } else if (newStats.translationKeys > 0) {
    console.log('❌ Translation keys still present - migration incomplete');
  } else if (newStats.products < oldStats.products * 0.9) {
    console.log('❌ Significant data loss detected - migration incomplete');
  } else if (newStats.products >= oldStats.products * 0.9) {
    console.log('✅ Migration appears complete');
  }
}

main();