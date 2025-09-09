/**
 * Dynamic XML Sitemap Generator
 * Generates sitemap.xml based on route registry data
 */

import { routeRegistry, initializeRoutes, type RouteInfo } from './route-registry';

export interface SitemapConfig {
  baseUrl: string;
  defaultChangeFreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  defaultPriority: number;
}

const DEFAULT_CONFIG: SitemapConfig = {
  baseUrl: 'https://powertonengineering.in',
  defaultChangeFreq: 'monthly',
  defaultPriority: 0.5,
};

/**
 * Priority and change frequency rules based on route category
 */
const CATEGORY_RULES: Record<string, { priority: number; changefreq: string }> = {
  main: { priority: 0.9, changefreq: 'weekly' },
  services: { priority: 0.9, changefreq: 'weekly' },
  'product-categories': { priority: 0.8, changefreq: 'monthly' },
  'product-subcategories': { priority: 0.7, changefreq: 'monthly' },
  resources: { priority: 0.6, changefreq: 'monthly' },
  legal: { priority: 0.4, changefreq: 'yearly' },
  news: { priority: 0.7, changefreq: 'weekly' },
};

/**
 * Special priority rules for specific paths
 */
const PATH_RULES: Record<string, { priority: number; changefreq: string }> = {
  '/': { priority: 1.0, changefreq: 'weekly' },
  '/about': { priority: 0.9, changefreq: 'monthly' },
  '/contact': { priority: 0.9, changefreq: 'monthly' },
  '/services': { priority: 0.9, changefreq: 'weekly' },
  '/products': { priority: 0.9, changefreq: 'weekly' },
  '/projects': { priority: 0.8, changefreq: 'weekly' },
  '/quote': { priority: 0.8, changefreq: 'monthly' },
};

/**
 * Get SEO metadata for a route
 */
function getRouteMetadata(route: RouteInfo): { priority: number; changefreq: string } {
  // Check for specific path rules first
  if (PATH_RULES[route.path]) {
    return PATH_RULES[route.path];
  }

  // Use category rules
  if (CATEGORY_RULES[route.category]) {
    return CATEGORY_RULES[route.category];
  }

  // Default fallback
  return {
    priority: DEFAULT_CONFIG.defaultPriority,
    changefreq: DEFAULT_CONFIG.defaultChangeFreq,
  };
}

/**
 * Generate current timestamp in ISO format for lastmod
 */
function getCurrentTimestamp(): string {
  return new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
}

/**
 * Escape XML special characters
 */
function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Generate URL entry for sitemap
 */
function generateUrlEntry(route: RouteInfo, config: SitemapConfig): string {
  const metadata = getRouteMetadata(route);
  const url = `${config.baseUrl}${route.path}`;
  const lastmod = getCurrentTimestamp();

  return `  <url>
    <loc>${escapeXml(url)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${metadata.changefreq}</changefreq>
    <priority>${metadata.priority.toFixed(1)}</priority>
  </url>`;
}

/**
 * Generate complete XML sitemap
 */
export function generateSitemap(config: SitemapConfig = DEFAULT_CONFIG): string {
  // Initialize routes to ensure registry is populated
  initializeRoutes();

  // Get all public routes (excluding hidden ones)
  const publicRoutes = routeRegistry.getPublicRoutes();

  // Sort routes by priority (highest first) and then by path
  const sortedRoutes = publicRoutes.sort((a, b) => {
    const metaA = getRouteMetadata(a);
    const metaB = getRouteMetadata(b);

    // First sort by priority (descending)
    if (metaA.priority !== metaB.priority) {
      return metaB.priority - metaA.priority;
    }

    // Then sort by path (ascending)
    return a.path.localeCompare(b.path);
  });

  // Generate XML header
  const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">`;

  // Generate URL entries
  const urlEntries = sortedRoutes.map(route => generateUrlEntry(route, config));

  // Generate XML footer
  const xmlFooter = `</urlset>`;

  // Combine all parts
  return [xmlHeader, '', ...urlEntries, '', xmlFooter].join('\n');
}

/**
 * Generate sitemap and write to file
 */
export async function generateSitemapFile(
  outputPath: string = 'public/sitemap.xml',
  config: SitemapConfig = DEFAULT_CONFIG
): Promise<void> {
  const sitemapContent = generateSitemap(config);
  
  // For browser/Node.js compatibility
  if (typeof window === 'undefined') {
    // Node.js environment (build time)
    const fs = await import('fs');
    const path = await import('path');
    
    const fullPath = path.resolve(outputPath);
    fs.writeFileSync(fullPath, sitemapContent, 'utf-8');
    console.log(`✅ Sitemap generated successfully: ${fullPath}`);
    console.log(`📊 Total routes: ${routeRegistry.getAllRoutes().length}`);
    console.log(`🔗 Public routes: ${routeRegistry.getPublicRoutes().length}`);
  } else {
    // Browser environment - return content for processing
    console.log('📋 Sitemap content generated:', sitemapContent.slice(0, 200) + '...');
  }
}

/**
 * Get sitemap statistics
 */
export function getSitemapStats(): {
  totalRoutes: number;
  publicRoutes: number;
  categories: string[];
  lastGenerated: string;
} {
  initializeRoutes();
  
  return {
    totalRoutes: routeRegistry.getAllRoutes().length,
    publicRoutes: routeRegistry.getPublicRoutes().length,
    categories: routeRegistry.getCategories(),
    lastGenerated: getCurrentTimestamp(),
  };
}

/**
 * Validate sitemap against route registry
 */
export function validateSitemap(): {
  isValid: boolean;
  errors: string[];
  warnings: string[];
} {
  const errors: string[] = [];
  const warnings: string[] = [];

  try {
    initializeRoutes();
    const publicRoutes = routeRegistry.getPublicRoutes();

    if (publicRoutes.length === 0) {
      errors.push('No public routes found in registry');
    }

    // Check for duplicate paths
    const pathCounts = new Map<string, number>();
    publicRoutes.forEach(route => {
      const count = pathCounts.get(route.path) || 0;
      pathCounts.set(route.path, count + 1);
    });

    pathCounts.forEach((count, path) => {
      if (count > 1) {
        errors.push(`Duplicate path found: ${path} (${count} occurrences)`);
      }
    });

    // Check for missing required fields
    publicRoutes.forEach(route => {
      if (!route.path) {
        errors.push(`Route missing path: ${JSON.stringify(route)}`);
      }
      if (!route.title) {
        warnings.push(`Route missing title: ${route.path}`);
      }
      if (!route.description) {
        warnings.push(`Route missing description: ${route.path}`);
      }
    });

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
    };
  } catch (error) {
    return {
      isValid: false,
      errors: [`Validation failed: ${error instanceof Error ? error.message : String(error)}`],
      warnings: [],
    };
  }
}