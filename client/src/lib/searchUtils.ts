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
 * Calculate string similarity using Levenshtein distance (fuzzy matching)
 */
function calculateSimilarity(str1: string, str2: string): number {
  const len1 = str1.length;
  const len2 = str2.length;
  
  if (len1 === 0) return len2;
  if (len2 === 0) return len1;
  
  const matrix: number[][] = [];
  
  for (let i = 0; i <= len1; i++) {
    matrix[i] = [i];
  }
  
  for (let j = 0; j <= len2; j++) {
    matrix[0][j] = j;
  }
  
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }
  
  const distance = matrix[len1][len2];
  const maxLen = Math.max(len1, len2);
  return ((maxLen - distance) / maxLen) * 100;
}

/**
 * Calculate relevance score based on query match with fuzzy matching
 */
function calculateRelevance(searchText: string, query: string): number {
  const lowerSearchText = searchText.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const queryWords = lowerQuery.split(/\s+/).filter(w => w.length > 0);
  const searchWords = lowerSearchText.split(/\s+/).filter(w => w.length > 0);
  
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
  
  // Word-by-word matching with fuzzy search
  queryWords.forEach(queryWord => {
    let bestMatch = 0;
    
    // Exact word match
    if (lowerSearchText.includes(queryWord)) {
      score += 15;
    }
    
    // Check if query word is part of any search word
    searchWords.forEach(searchWord => {
      // Exact word match
      if (searchWord === queryWord) {
        score += 10;
      }
      // Starts with query word
      else if (searchWord.startsWith(queryWord)) {
        score += 8;
      }
      // Contains query word
      else if (searchWord.includes(queryWord)) {
        score += 6;
      }
      // Fuzzy match for typos (only for words 4+ characters)
      else if (queryWord.length >= 4) {
        const similarity = calculateSimilarity(searchWord, queryWord);
        
        // High similarity (80%+) - likely a typo
        if (similarity >= 80) {
          bestMatch = Math.max(bestMatch, 7);
        }
        // Medium similarity (70-80%) - possible match
        else if (similarity >= 70) {
          bestMatch = Math.max(bestMatch, 5);
        }
        // Low similarity (60-70%) - weak match
        else if (similarity >= 60) {
          bestMatch = Math.max(bestMatch, 3);
        }
      }
      
      // Partial word matching (for compound words)
      if (queryWord.length >= 3) {
        for (let i = 0; i <= searchWord.length - queryWord.length; i++) {
          const substring = searchWord.substring(i, i + queryWord.length);
          if (substring === queryWord) {
            score += 4;
            break;
          }
        }
      }
    });
    
    score += bestMatch;
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
    
    // Get manufacturer for enhanced search
    const manufacturer = product.specs?.manufacturer as string || '';
    const model = product.specs?.model as string || '';
    
    // Search in title, description, manufacturer, model, and specs
    let searchableText = `${title} ${description} ${manufacturer} ${model}`;
    
    // Add all specs to searchable text
    if (product.specs) {
      Object.entries(product.specs).forEach(([key, value]) => {
        searchableText += ` ${key} ${value}`;
      });
    }
    
    // Calculate base relevance score
    let relevanceScore = calculateRelevance(searchableText, query);
    
    // Boost score if manufacturer matches (manufacturers are important search criteria)
    if (manufacturer) {
      const manufacturerScore = calculateRelevance(manufacturer, query);
      if (manufacturerScore > 0) {
        relevanceScore += manufacturerScore * 1.5; // 1.5x boost for manufacturer matches
      }
    }
    
    // Boost score if model matches
    if (model) {
      const modelScore = calculateRelevance(model, query);
      if (modelScore > 0) {
        relevanceScore += modelScore * 1.3; // 1.3x boost for model matches
      }
    }
    
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
        manufacturer: manufacturer,
        model: model,
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
    t('products:categories.mechanical-pumps-spares.features.centrifugal-pumps', 'Pumps'),
    t('products:categories.industrial-measuring-tools.features.digital-multimeters', 'Multimeters')
  ];
}
