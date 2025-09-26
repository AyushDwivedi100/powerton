const fs = require('fs');

// Load both files for comparison
function loadOldProducts() {
  const oldFile = fs.readFileSync('client/src/data/products-detail-pages-data-old.ts', 'utf8');
  
  // Extract products from old format - look for all id fields
  const productMatches = [...oldFile.matchAll(/"id": "([^"]+)"/g)];
  const productIds = productMatches.map(match => match[1]);
  
  console.log(`Old file: ${productIds.length} products`);
  return productIds.map(id => ({ id, source: 'old' }));
}

function loadNewProducts() {
  const newFile = fs.readFileSync('client/src/data/products-detail-pages-data.ts', 'utf8');
  
  // Extract products from new format
  const productMatches = newFile.matchAll(/"id": "([^"]+)"/g);
  const slugMatches = newFile.matchAll(/"slug": "([^"]+)"/g);
  
  const productIds = [...productMatches].map(m => m[1]);
  const slugs = [...slugMatches].map(m => m[1]);
  
  console.log(`New file: ${productIds.length} total product ID entries`);
  console.log(`New file: ${slugs.length} total slug entries`);
  
  // Check for product ID duplicates
  const idCounts = {};
  productIds.forEach(id => {
    idCounts[id] = (idCounts[id] || 0) + 1;
  });
  
  const duplicateIds = Object.entries(idCounts).filter(([id, count]) => count > 1);
  const uniqueProductIds = Object.keys(idCounts);
  
  console.log(`Unique product IDs: ${uniqueProductIds.length}`);
  console.log(`Duplicate product IDs: ${duplicateIds.length}`);
  
  if (duplicateIds.length > 0) {
    console.log('Sample duplicate product IDs:');
    duplicateIds.slice(0, 5).forEach(([id, count]) => {
      console.log(`  ${id}: ${count} times`);
    });
  }
  
  // Check for slug duplicates
  const slugCounts = {};
  slugs.forEach(slug => {
    slugCounts[slug] = (slugCounts[slug] || 0) + 1;
  });
  
  const duplicateSlugs = Object.entries(slugCounts).filter(([slug, count]) => count > 1);
  console.log(`Duplicate slugs: ${duplicateSlugs.length}`);
  
  if (duplicateSlugs.length > 0) {
    console.log('Sample duplicate slugs:');
    duplicateSlugs.slice(0, 5).forEach(([slug, count]) => {
      console.log(`  ${slug}: ${count} times`);
    });
  }
  
  return uniqueProductIds.map(id => ({ id, source: 'new' }));
}

function compareProducts() {
  console.log('=== Product Diagnostic ===\n');
  
  const oldProducts = loadOldProducts();
  const newProducts = loadNewProducts();
  
  const oldIds = new Set(oldProducts.map(p => p.id));
  const newIds = new Set(newProducts.map(p => p.id));
  
  const missing = [...oldIds].filter(id => !newIds.has(id));
  const added = [...newIds].filter(id => !oldIds.has(id));
  
  console.log(`\n=== Missing Products (${missing.length}) ===`);
  missing.slice(0, 10).forEach(id => console.log(`  ${id}`));
  if (missing.length > 10) console.log(`  ... and ${missing.length - 10} more`);
  
  console.log(`\n=== Added Products (${added.length}) ===`);
  added.slice(0, 10).forEach(id => console.log(`  ${id}`));
  if (added.length > 10) console.log(`  ... and ${added.length - 10} more`);
  
  console.log(`\n=== Summary ===`);
  console.log(`Old: ${oldProducts.length} products`);
  console.log(`New: ${newProducts.length} products`);
  console.log(`Missing: ${missing.length}`);
  console.log(`Added: ${added.length}`);
  console.log(`Net change: ${newProducts.length - oldProducts.length}`);
}

compareProducts();