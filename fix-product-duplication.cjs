const fs = require('fs');

// Script to fix product duplication in the migration
function fixProductDuplication() {
  console.log('=== Fixing Product Duplication ===\n');
  
  // Read the migration script
  let migrationScript = fs.readFileSync('complete-migration.cjs', 'utf8');
  
  // Add product tracking to prevent duplicates
  const trackingCode = `
  // Track products across all groups to prevent duplication
  const globalProcessedProducts = new Set();
  `;
  
  // Insert tracking at the beginning of the processing function
  const insertPoint = 'Processing 8 categories, 130 groups, 307 products';
  const insertIndex = migrationScript.indexOf('console.log(`Processing');
  
  if (insertIndex !== -1) {
    migrationScript = migrationScript.slice(0, insertIndex) + 
                     trackingCode + 
                     migrationScript.slice(insertIndex);
  }
  
  // Modify product assignment to check for duplicates
  const originalProductAssignment = `        groupProducts.forEach(product => {
          // Generate unique slug by combining product slug with ID suffix
          const uniqueSlug = \`\${product.slug}-\${product.id.slice(-6)}\`;
          
          const productData = {`;
  
  const newProductAssignment = `        groupProducts.forEach(product => {
          // Skip if product already processed
          if (globalProcessedProducts.has(product.id)) {
            return;
          }
          globalProcessedProducts.add(product.id);
          
          // Generate unique slug by combining product slug with ID suffix
          const uniqueSlug = \`\${product.slug}-\${product.id.slice(-6)}\`;
          
          const productData = {`;
  
  migrationScript = migrationScript.replace(originalProductAssignment, newProductAssignment);
  
  // Also fix fallback group product assignment
  const originalFallbackAssignment = `          products.forEach(product => {
            // Generate unique slug by combining product slug with ID suffix
            const uniqueSlug = \`\${product.slug}-\${product.id.slice(-6)}\`;
            
            const productData = {`;
  
  const newFallbackAssignment = `          products.forEach(product => {
            // Skip if product already processed
            if (globalProcessedProducts.has(product.id)) {
              return;
            }
            globalProcessedProducts.add(product.id);
            
            // Generate unique slug by combining product slug with ID suffix
            const uniqueSlug = \`\${product.slug}-\${product.id.slice(-6)}\`;
            
            const productData = {`;
  
  migrationScript = migrationScript.replace(originalFallbackAssignment, newFallbackAssignment);
  
  // Write the fixed migration script
  fs.writeFileSync('complete-migration-fixed.cjs', migrationScript);
  
  console.log('✅ Created fixed migration script: complete-migration-fixed.cjs');
  console.log('📝 Changes made:');
  console.log('  - Added global product tracking to prevent duplicates');
  console.log('  - Modified product assignment in regular groups');
  console.log('  - Modified product assignment in fallback groups');
  console.log('  - Each product will now appear only once in the final catalog');
}

fixProductDuplication();