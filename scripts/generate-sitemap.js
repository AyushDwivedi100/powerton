#!/usr/bin/env node
/**
 * Generate comprehensive sitemap.xml for Powerton Engineering website
 * Includes all product pages, service pages, and main navigation pages
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🗺️  Generating sitemap.xml...');

// Read products data file
const productsFilePath = join(__dirname, '../client/src/data/products-detail-pages-data.ts');
const productsContent = readFileSync(productsFilePath, 'utf-8');

// Parse products line by line to handle multi-line objects
const lines = productsContent.split('\n');
const products = [];
let currentProduct = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  
  // Detect start of new product object
  if (line.startsWith('id:')) {
    currentProduct = {};
  }
  
  // Extract slug
  if (currentProduct && line.startsWith('slug:')) {
    const slugMatch = line.match(/slug:\s*"([^"]+)"/);
    if (slugMatch) currentProduct.slug = slugMatch[1];
  }
  
  // Extract categoryKey
  if (currentProduct && line.startsWith('categoryKey:')) {
    const catMatch = line.match(/categoryKey:\s*"([^"]+)"/);
    if (catMatch) currentProduct.categoryKey = catMatch[1];
  }
  
  // Extract subcategoryKey
  if (currentProduct && line.startsWith('subcategoryKey:')) {
    const subMatch = line.match(/subcategoryKey:\s*"([^"]+)"/);
    if (subMatch) currentProduct.subcategoryKey = subMatch[1];
  }
  
  // Extract typeKey (optional)
  if (currentProduct && line.startsWith('typeKey:')) {
    const typeMatch = line.match(/typeKey:\s*"([^"]+)"/);
    if (typeMatch) currentProduct.typeKey = typeMatch[1];
  }
  
  // Detect end of product object (when we hit a closing brace followed by comma or next opening brace)
  if (currentProduct && line === '},') {
    // Product object is complete - typeKey is optional, use subcategoryKey as fallback
    if (currentProduct.slug && currentProduct.categoryKey && currentProduct.subcategoryKey) {
      // Use typeKey if available, otherwise use subcategoryKey
      if (!currentProduct.typeKey) {
        currentProduct.typeKey = currentProduct.subcategoryKey;
      }
      products.push({...currentProduct});
    }
    currentProduct = null;
  }
}

console.log(`✓ Found ${products.length} products`);

const today = new Date().toISOString().split('T')[0];

// Generate sitemap XML
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <!-- Main Pages -->
  <url>
    <loc>https://powertonengineering.in/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://powertonengineering.in/about</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://powertonengineering.in/services</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://powertonengineering.in/products</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://powertonengineering.in/projects</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://powertonengineering.in/gallery</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://powertonengineering.in/contact</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://powertonengineering.in/quote</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Product Detail Pages -->
`;

// Add all product URLs
products.forEach(product => {
  const url = `https://powertonengineering.in/products/${product.categoryKey}/${product.subcategoryKey}/${product.typeKey}/${product.slug}`;
  sitemap += `  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
});

sitemap += '</urlset>\n';

// Write sitemap to client/public/
const sitemapPath = join(__dirname, '../client/public/sitemap.xml');
writeFileSync(sitemapPath, sitemap, 'utf-8');

console.log(`✓ Sitemap generated successfully!`);
console.log(`✓ Total URLs: ${products.length + 8}`);
console.log(`✓ Output: client/public/sitemap.xml`);
