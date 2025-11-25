import { productGroups, products } from '../client/src/data/products-detail-pages-data';

interface EmptyGroupAnalysis {
  totalGroups: number;
  groupsWithProducts: number;
  emptyGroups: number;
  emptyGroupsList: Array<{
    key: string;
    slug: string;
    subcategoryKey: string;
  }>;
  emptyGroupsBySubcategory: Record<string, number>;
}

function analyzeEmptyProductGroups(): EmptyGroupAnalysis {
  const emptyGroupsList: Array<{
    key: string;
    slug: string;
    subcategoryKey: string;
  }> = [];
  
  const emptyGroupsBySubcategory: Record<string, number> = {};
  
  // Check each product group
  productGroups.forEach((group) => {
    // Find products that belong to this group using typeKey
    const groupProducts = products.filter(
      (product) => product.typeKey === group.key
    );
    
    if (groupProducts.length === 0) {
      emptyGroupsList.push({
        key: group.key,
        slug: group.slug,
        subcategoryKey: group.subcategoryKey,
      });
      
      // Count by subcategory
      if (!emptyGroupsBySubcategory[group.subcategoryKey]) {
        emptyGroupsBySubcategory[group.subcategoryKey] = 0;
      }
      emptyGroupsBySubcategory[group.subcategoryKey]++;
    }
  });
  
  console.log(`\nTotal products in database: ${products.length}`);
  
  return {
    totalGroups: productGroups.length,
    groupsWithProducts: productGroups.length - emptyGroupsList.length,
    emptyGroups: emptyGroupsList.length,
    emptyGroupsList,
    emptyGroupsBySubcategory,
  };
}

// Run analysis
const analysis = analyzeEmptyProductGroups();

console.log('\n========================================');
console.log('EMPTY PRODUCT GROUPS ANALYSIS');
console.log('========================================\n');

console.log(`Total Product Groups: ${analysis.totalGroups}`);
console.log(`Groups With Products: ${analysis.groupsWithProducts} (${((analysis.groupsWithProducts / analysis.totalGroups) * 100).toFixed(1)}%)`);
console.log(`Empty Groups: ${analysis.emptyGroups} (${((analysis.emptyGroups / analysis.totalGroups) * 100).toFixed(1)}%)\n`);

console.log('========================================');
console.log('EMPTY GROUPS BY SUBCATEGORY');
console.log('========================================\n');

const sortedSubcategories = Object.entries(analysis.emptyGroupsBySubcategory)
  .sort(([, a], [, b]) => b - a);

sortedSubcategories.forEach(([subcategory, count]) => {
  console.log(`${subcategory}: ${count} empty groups`);
});

console.log('\n========================================');
console.log('DETAILED LIST OF EMPTY PRODUCT GROUPS');
console.log('========================================\n');

const groupedBySubcategory = analysis.emptyGroupsList.reduce((acc, group) => {
  if (!acc[group.subcategoryKey]) {
    acc[group.subcategoryKey] = [];
  }
  acc[group.subcategoryKey].push(group);
  return acc;
}, {} as Record<string, typeof analysis.emptyGroupsList>);

Object.entries(groupedBySubcategory)
  .sort(([, a], [, b]) => b.length - a.length)
  .forEach(([subcategory, groups]) => {
    console.log(`\n📦 ${subcategory.toUpperCase()} (${groups.length} empty groups):`);
    groups.forEach((group) => {
      console.log(`   - ${group.key} (slug: ${group.slug})`);
    });
  });

console.log('\n========================================\n');
