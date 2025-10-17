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
      
      const categorySlug = subcategoryData?.parentCategory.split('/').pop() || '';
      
      // Apply category filter
      if (categoryFilter && categorySlug !== categoryFilter) return;
      
      results.push({
        id: group.key,
        type: 'productGroup',
        title,
        description: description.slice(0, 150) + (description.length > 150 ? '...' : ''),
        image: group.image,
        url: `/products/${categorySlug}/${group.subcategoryKey}/${group.slug}`,
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
 * Search result cache for performance optimization
 * Stores recent search results to avoid re-computation
 */
const searchCache = new Map<string, { results: SearchResult[], timestamp: number }>();
const CACHE_MAX_SIZE = 100; // Maximum number of cached searches
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes cache lifetime

/**
 * Clear expired cache entries
 */
function clearExpiredCache() {
  const now = Date.now();
  const keysToDelete: string[] = [];
  
  searchCache.forEach((value, key) => {
    if (now - value.timestamp > CACHE_TTL) {
      keysToDelete.push(key);
    }
  });
  
  keysToDelete.forEach(key => searchCache.delete(key));
}

/**
 * Main search function with caching
 */
export function searchAll(options: SearchOptions, t: TFunction): SearchResult[] {
  const { query, category, subcategory, sortBy = 'relevance', limit } = options;
  
  // Return empty if query is too short
  if (query.trim().length < 2) {
    return [];
  }
  
  // Create cache key from search options
  const cacheKey = JSON.stringify({ 
    query: query.toLowerCase().trim(), 
    category, 
    subcategory, 
    sortBy, 
    limit 
  });
  
  // Check cache first
  const cached = searchCache.get(cacheKey);
  if (cached && (Date.now() - cached.timestamp) < CACHE_TTL) {
    return cached.results;
  }
  
  // Perform search
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
  
  // Store in cache
  searchCache.set(cacheKey, { results: allResults, timestamp: Date.now() });
  
  // Manage cache size - remove oldest entry if cache is too large
  if (searchCache.size > CACHE_MAX_SIZE) {
    const firstKey = searchCache.keys().next().value;
    if (firstKey) {
      searchCache.delete(firstKey);
    }
  }
  
  // Periodically clear expired entries
  if (Math.random() < 0.1) { // 10% chance on each search
    clearExpiredCache();
  }
  
  return allResults;
}

/**
 * Clear the search cache (useful when product data changes)
 */
export function clearSearchCache() {
  searchCache.clear();
}

/**
 * Get popular search suggestions (localized)
 */
export function getSearchSuggestions(t: TFunction): string[] {
  return [
    t('products:categories.instrumentation-accessories.features.pressure-transmitters', 'Pressure Transmitters'),
    t('products:categories.instrumentation-accessories.features.temperature-sensors', 'Temperature Sensors'),
    t('products:categories.instrumentation-accessories.features.flow-meters', 'Flow Meters'),
    t('products:categories.automation-control-systems.features.plc-systems', 'PLC Systems'),
    t('products:categories.automation-control-systems.features.scada-software', 'SCADA'),
    t('products:categories.electrical-accessories.features.circuit-breakers', 'Circuit Breakers'),
    t('products:categories.solar-products.features.solar-panels', 'Solar Panels'),
    t('products:categories.bldc.features.energy-efficient', 'BLDC Motors'),
    t('products:categories.mechanical-pumps-spares.features.centrifugal-pumps', 'Pumps'),
    t('products:categories.industrial-measuring-tools.features.digital-multimeters', 'Multimeters')
  ];
}
