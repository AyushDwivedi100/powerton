const fs = require('fs');

const content = fs.readFileSync('client/src/data/products-detail-pages-data.ts', 'utf8');

const productGroupsMatch = content.match(/export const productGroups: ProductGroup\[\] = \[([\s\S]*?)\];[\s]*export const products/);
const productsMatch = content.match(/export const products: Product\[\] = \[([\s\S]*?)\];/);

if (!productGroupsMatch || !productsMatch) {
  console.log('Could not find product groups or products arrays');
  process.exit(1);
}

const groupsText = productGroupsMatch[1];
const productsText = productsMatch[1];

const groupKeys = [...groupsText.matchAll(/key:\s*"([^"]+)"/g)].map(m => m[1]);

const productTypeKeys = [...productsText.matchAll(/typeKey:\s*"([^"]+)"/g)].map(m => m[1]);

const emptyGroups = groupKeys.filter(key => !productTypeKeys.includes(key));

console.log('=== ANALYSIS RESULTS ===\n');
console.log(`Total Product Groups: ${groupKeys.length}`);
console.log(`Product Groups with Products: ${groupKeys.length - emptyGroups.length}`);
console.log(`Product Groups WITHOUT Products: ${emptyGroups.length}\n`);

if (emptyGroups.length > 0) {
  console.log('=== EMPTY PRODUCT GROUPS ===\n');
  emptyGroups.forEach((group, index) => {
    console.log(`${index + 1}. ${group}`);
  });
} else {
  console.log('All product groups have at least one product!');
}