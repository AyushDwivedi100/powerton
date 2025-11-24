import {
  productGroups,
  products,
  categories,
} from "../client/src/data/products-detail-pages-data.js";

interface GroupAnalysis {
  totalGroups: number;
  groupsWithProducts: number;
  emptyGroups: number;
  emptyGroupsList: Array<{
    key: string;
    slug: string;
    subcategoryKey: string;
    title?: string;
  }>;
}

function analyzeProductGroups(): GroupAnalysis {
  const productCountByGroup = new Map<string, number>();

  productGroups.forEach((group) => {
    productCountByGroup.set(group.key, 0);
  });

  products.forEach((product) => {
    if (product.typeKey) {
      const currentCount = productCountByGroup.get(product.typeKey) || 0;
      productCountByGroup.set(product.typeKey, currentCount + 1);
    }
  });

  const emptyGroupsList = productGroups
    .filter((group) => (productCountByGroup.get(group.key) || 0) === 0)
    .map((group) => ({
      key: group.key,
      slug: group.slug,
      subcategoryKey: group.subcategoryKey,
      title: group.title,
    }));

  return {
    totalGroups: productGroups.length,
    groupsWithProducts: productGroups.length - emptyGroupsList.length,
    emptyGroups: emptyGroupsList.length,
    emptyGroupsList,
  };
}

function groupBySubcategory(
  emptyGroups: Array<{
    key: string;
    slug: string;
    subcategoryKey: string;
    title?: string;
  }>,
) {
  const grouped = new Map<string, typeof emptyGroups>();

  emptyGroups.forEach((group) => {
    const subcategoryGroups = grouped.get(group.subcategoryKey) || [];
    subcategoryGroups.push(group);
    grouped.set(group.subcategoryKey, subcategoryGroups);
  });

  return grouped;
}

console.log("=== Product Groups Analysis ===\n");

const analysis = analyzeProductGroups();

console.log(`Total Product Groups Defined: ${analysis.totalGroups}`);
console.log(`Groups With Products: ${analysis.groupsWithProducts}`);
console.log(`Empty Groups (No Products): ${analysis.emptyGroups}\n`);

if (analysis.emptyGroups > 0) {
  console.log("=== Empty Groups by Subcategory ===\n");

  const groupedBySubcategory = groupBySubcategory(analysis.emptyGroupsList);

  groupedBySubcategory.forEach((groups, subcategoryKey) => {
    console.log(`\n${subcategoryKey.toUpperCase()} (${groups.length} empty):`);
    groups.forEach((group) => {
      console.log(`  - ${group.key} (slug: ${group.slug})`);
    });
  });

  console.log("\n=== Empty Groups List (Full) ===\n");
  analysis.emptyGroupsList.forEach((group, index) => {
    console.log(
      `${index + 1}. ${group.key} | ${group.subcategoryKey} | ${group.slug}`,
    );
  });
}

console.log("\n=== Category Product Mapping Analysis ===\n");

let totalSubcategories = 0;
let subcategoriesWithProducts = 0;
let emptySubcategories = 0;

categories.forEach((category) => {
  category.subcategories.forEach((subcategory) => {
    totalSubcategories++;
    if (subcategory.products.length > 0) {
      subcategoriesWithProducts++;
    } else {
      emptySubcategories++;
      console.log(
        `Empty Subcategory: ${category.key} > ${subcategory.key} (products: [])`,
      );
    }
  });
});

console.log(`\nTotal Subcategories: ${totalSubcategories}`);
console.log(`Subcategories With Products: ${subcategoriesWithProducts}`);
console.log(`Empty Subcategories: ${emptySubcategories}`);

console.log("\n=== Summary ===");
console.log(
  `Product Groups: ${analysis.emptyGroups}/${analysis.totalGroups} empty`,
);
console.log(
  `Subcategories: ${emptySubcategories}/${totalSubcategories} empty`,
);
