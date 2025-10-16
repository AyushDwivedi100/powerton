import { products, productGroups, Product, ProductGroup } from "@/data/products-detail-pages-data";
import { getProductsSubCategoryData } from "@/data/products-sub-category-pages-data";
import { TFunction } from "i18next";

export interface SearchResult {
  id: string;
  type: 'product' | 'productGroup' | 'subcategory';
  title: string;
  description: string;
  image?: string;
  url: string;
  category?: string;
  subcategory?: string;
  manufacturer?: string;
  model?: string;
  relevanceScore: number;
}

interface SearchOptions {
  query: string;
  category?: string;
  subcategory?: string;
  sortBy?: 'relevance' | 'name-az' | 'name-za';
  limit?: number;
}

/**
 * Calculate relevance score based on query match
 */
function calculateRelevance(searchText: string, query: string): number {
  const lowerSearchText = searchText.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const queryWords = lowerQuery.split(' ').filter(w => w.length > 0);
  
  let score = 0;
  
  // Exact match gets highest score
  if (lowerSearchText === lowerQuery) {
    score += 100;
  }
  
  // Contains full query
  if (lowerSearchText.includes(lowerQuery)) {
    score += 50;
  }
  
  // Starts with query
  if (lowerSearchText.startsWith(lowerQuery)) {
    score += 30;
  }
  
  // Word matches
  queryWords.forEach(word => {
    if (lowerSearchText.includes(word)) {
      score += 10;
    }
    if (lowerSearchText.split(' ').includes(word)) {
      score += 5;
    }
  });
  
  return score;
}

/**
 * Search through products
 */
function searchProducts(query: string, t: TFunction, categoryFilter?: string, subcategoryFilter?: string): SearchResult[] {
  const results: SearchResult[] = [];
  
  products.forEach(product => {
    // Apply filters
    if (categoryFilter && product.categoryKey !== categoryFilter) return;
    if (subcategoryFilter && product.subcategoryKey !== subcategoryFilter) return;
    
    // Get translated title and description
    const title = product.translationKeys?.title 
      ? t(product.translationKeys.title) 
      : product.title || '';
    const description = product.translationKeys?.description
      ? t(product.translationKeys.description)
      : product.description || '';
    
    // Search in title, description, and specs
    let searchableText = `${title} ${description}`;
    
    // Add specs to searchable text
    if (product.specs) {
      Object.entries(product.specs).forEach(([key, value]) => {
        searchableText += ` ${key} ${value}`;
      });
    }
    
    const relevanceScore = calculateRelevance(searchableText, query);
    
    if (relevanceScore > 0) {
      results.push({
        id: product.id,
        type: 'product',
        title,
        description: description.slice(0, 150) + (description.length > 150 ? '...' : ''),
        image: product.image,
        url: `/products/${product.categoryKey}/${product.subcategoryKey}/${product.typeKey}/${product.slug}`,
        category: product.categoryKey,
        subcategory: product.subcategoryKey,
        manufacturer: product.specs?.manufacturer as string,
        model: product.specs?.model as string,
        relevanceScore
      });
    }
  });
  
  return results;
}

/**
 * Search through product groups
 */
function searchProductGroups(query: string, t: TFunction, categoryFilter?: string, subcategoryFilter?: string): SearchResult[] {
  const results: SearchResult[] = [];
  
  productGroups.forEach(group => {
    // Apply filters
    if (subcategoryFilter && group.subcategoryKey !== subcategoryFilter) return;
    
    // Get translated title and description
    const title = group.titleKey ? t(group.titleKey) : group.title || '';
    const description = group.descriptionKey ? t(group.descriptionKey) : group.description || '';
    
    const searchableText = `${title} ${description}`;
    const relevanceScore = calculateRelevance(searchableText, query);
    
    if (relevanceScore > 0) {
      // Find category for this subcategory
      const subcategoryData = getProductsSubCategoryData(t).find(
        sub => sub.slug === group.subcategoryKey
      );
      
      results.push({
        id: group.key,
        type: 'productGroup',
        title,
        description: description.slice(0, 150) + (description.length > 150 ? '...' : ''),
        image: group.image,
        url: `/products/${subcategoryData?.parentCategory.split('/').pop()}/${group.subcategoryKey}#${group.slug}`,
        subcategory: group.subcategoryKey,
        relevanceScore
      });
    }
  });
  
  return results;
}

/**
 * Search through subcategories
 */
function searchSubcategories(query: string, t: TFunction, categoryFilter?: string): SearchResult[] {
  const results: SearchResult[] = [];
  const subcategories = getProductsSubCategoryData(t);
  
  subcategories.forEach(subcategory => {
    const searchableText = `${subcategory.title} ${subcategory.shortDescription} ${subcategory.fullDescription}`;
    const relevanceScore = calculateRelevance(searchableText, query);
    
    if (relevanceScore > 0) {
      const categorySlug = subcategory.parentCategory.split('/').pop() || '';
      
      // Apply category filter
      if (categoryFilter && categorySlug !== categoryFilter) return;
      
      results.push({
        id: subcategory.slug,
        type: 'subcategory',
        title: subcategory.title,
        description: subcategory.shortDescription,
        image: subcategory.image,
        url: `/products/${categorySlug}/${subcategory.slug}`,
        category: categorySlug,
        relevanceScore
      });
    }
  });
  
  return results;
}

/**
 * Main search function
 */
export function searchAll(options: SearchOptions, t: TFunction): SearchResult[] {
  const { query, category, subcategory, sortBy = 'relevance', limit } = options;
  
  // Return empty if query is too short
  if (query.trim().length < 2) {
    return [];
  }
  
  // Search all data sources
  const productResults = searchProducts(query, t, category, subcategory);
  const groupResults = searchProductGroups(query, t, category, subcategory);
  const subcategoryResults = searchSubcategories(query, t, category);
  
  // Combine results
  let allResults = [...productResults, ...groupResults, ...subcategoryResults];
  
  // Sort results
  if (sortBy === 'relevance') {
    allResults.sort((a, b) => b.relevanceScore - a.relevanceScore);
  } else if (sortBy === 'name-az') {
    allResults.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortBy === 'name-za') {
    allResults.sort((a, b) => b.title.localeCompare(a.title));
  }
  
  // Apply limit if specified
  if (limit && limit > 0) {
    allResults = allResults.slice(0, limit);
  }
  
  return allResults;
}

/**
 * Get popular search suggestions
 */
export function getSearchSuggestions(t: TFunction): string[] {
  return [
    'Pressure Transmitters',
    'Temperature Sensors',
    'Flow Meters',
    'PLC Systems',
    'SCADA',
    'Circuit Breakers',
    'Solar Panels',
    'BLDC Motors',
    'Pumps',
    'Multimeters'
  ];
}
