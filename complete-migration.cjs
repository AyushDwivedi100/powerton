// Complete Product Data Migration Script
// Extracts all data from old flat structure and generates new hierarchical structure

const fs = require('fs');

// Translation key to English mapping (comprehensive mapping)
const translations = {
  // Categories
  "products:categories.instrumentationComponents": "Instrumentation Components",
  "products:categories.electricalComponents": "Electrical Components", 
  "products:categories.solarProducts": "Solar Products",
  "products:categories.bldc": "BLDC Motor Systems",
  "products:categories.automationControlSystems": "Automation & Control Systems",
  "products:categories.safetyProtectiveDevices": "Safety & Protective Devices",
  "products:categories.mechanicalPumpsSpares": "Mechanical Pumps & Spares",
  "products:categories.industrialMeasuringTools": "Industrial & Measuring Tools",

  // Subcategories  
  "products:subcategories.sensors": "Sensors & Transducers",
  "products:subcategories.transmitters": "Transmitters & Flow Meters",
  "products:subcategories.switches": "Switches & Indicators",
  "products:subcategories.valves": "Valves & Actuators",
  "products:subcategories.analyzers": "Analyzers",
  "products:subcategories.cablesWires": "Cables & Wires",
  "products:subcategories.connectorsTerminals": "Connectors & Terminals",
  "products:subcategories.circuitBreakers": "Circuit Breakers & Fuses",
  "products:subcategories.powerSupplies": "Power Supplies",
  "products:subcategories.enclosures": "Enclosures & Cabinets",
  "products:subcategories.heatingElements": "Heating Elements",
  "products:subcategories.solarPanels": "Solar Panels",
  "products:subcategories.solarInverters": "Solar Inverters",
  "products:subcategories.bldcCeilingFan": "BLDC Ceiling Fans",
  "products:subcategories.plcs": "PLCs",
  "products:subcategories.surgeProtectors": "Surge Protectors",
  "products:subcategories.centrifugalPumps": "Centrifugal Pumps",
  "products:subcategories.multimeters": "Multimeters",

  // Product Groups (comprehensive mapping)
  "products:groups.pnp.title": "PNP Proximity Sensors",
  "products:groups.pnp.description": "PNP output proximity sensors for position detection and automated switching",
  "products:groups.npn.title": "NPN Proximity Sensors", 
  "products:groups.npn.description": "NPN output proximity sensors for reliable object detection and positioning",
  "products:groups.rtd.title": "RTD Temperature Sensors",
  "products:groups.rtd.description": "Resistance Temperature Detectors for accurate temperature measurement",
  "products:groups.thermocouples.title": "Thermocouple Sensors",
  "products:groups.thermocouples.description": "Thermocouple temperature sensors for high-temperature measurements",
  "products:groups.loadCell.title": "Load Cell Sensors",
  "products:groups.loadCell.description": "Precision load cells and force transducers for weight measurement",
  "products:groups.phSensors.title": "pH Sensors",
  "products:groups.phSensors.description": "pH sensors and electrodes for accurate pH measurement",
  "products:groups.dpTypeTransmitter.title": "Differential Pressure Transmitters",
  "products:groups.dpTypeTransmitter.description": "High-accuracy differential pressure transmitters for flow and level measurement",
  "products:groups.pTypeTransmitter.title": "Pressure Transmitters",
  "products:groups.pTypeTransmitter.description": "Absolute and gauge pressure transmitters for accurate pressure measurement"
};

function translateKey(key) {
  if (translations[key]) {
    return translations[key];
  }
  
  // Generate meaningful English from key structure
  const cleanKey = key.replace(/^products:/, '');
  const parts = cleanKey.split('.');
  
  if (parts.length >= 2) {
    const lastPart = parts[parts.length - 1];
    // Convert camelCase to Title Case
    return lastPart.replace(/([A-Z])/g, ' $1')
                  .replace(/^./, str => str.toUpperCase())
                  .trim();
  }
  
  return cleanKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()).trim();
}

function generateProductTitle(id, specs) {
  const manufacturer = specs.manufacturer || '';
  const model = specs.model || id.toUpperCase();
  const type = specs.type || '';
  
  return `${manufacturer} ${model} ${type}`.trim();
}

function generateProductDescription(title, specs) {
  const type = specs.type || '';
  const application = specs.application || 'industrial applications';
  
  return `${type} with advanced features for reliable performance in ${application}.`;
}

function generateProductFeatures(specs) {
  const features = [];
  
  if (specs.accuracy) features.push(`±${specs.accuracy} accuracy`);
  if (specs.voltage) features.push(`${specs.voltage} operating voltage`);
  if (specs.temperature) features.push(`Operating temperature: ${specs.temperature}`);
  if (specs.ipRating) features.push(`${specs.ipRating} protection rating`);
  if (specs.communication) features.push(`${specs.communication} communication`);
  
  // Add generic features if none found
  if (features.length === 0) {
    features.push("Industrial grade construction", "Reliable performance", "Easy installation");
  }
  
  return features;
}

function extractDataFromOldFile() {
  const content = fs.readFileSync('client/src/data/products-detail-pages-data-old.ts', 'utf8');
  
  // Extract categories - find the array and parse it properly
  const categoryMatch = content.match(/export const categories: Category\[\] = \[([\s\S]*?)\];\s*$/m);
  const categories = [];
  if (categoryMatch) {
    const categoryContent = categoryMatch[1];
    
    // Split into individual category objects by finding complete object blocks
    let depth = 0;
    let currentObject = '';
    let inString = false;
    let escapeNext = false;
    
    for (let i = 0; i < categoryContent.length; i++) {
      const char = categoryContent[i];
      
      if (escapeNext) {
        escapeNext = false;
        currentObject += char;
        continue;
      }
      
      if (char === '\\') {
        escapeNext = true;
        currentObject += char;
        continue;
      }
      
      if (char === '"' && !escapeNext) {
        inString = !inString;
      }
      
      if (!inString) {
        if (char === '{') depth++;
        if (char === '}') depth--;
      }
      
      currentObject += char;
      
      if (!inString && depth === 0 && char === '}') {
        // Found complete object, parse it
        const keyMatch = currentObject.match(/key:\s*"([^"]+)"/);
        const translationMatch = currentObject.match(/translationKey:\s*"([^"]+)"/);
        const subcategoriesMatch = currentObject.match(/subcategories:\s*\[([\s\S]*?)\]/);
        
        if (keyMatch && translationMatch) {
          const subcategories = [];
          if (subcategoriesMatch) {
            const subContent = subcategoriesMatch[1];
            
            // Parse subcategories
            let subDepth = 0;
            let currentSub = '';
            let subInString = false;
            let subEscapeNext = false;
            
            for (let j = 0; j < subContent.length; j++) {
              const subChar = subContent[j];
              
              if (subEscapeNext) {
                subEscapeNext = false;
                currentSub += subChar;
                continue;
              }
              
              if (subChar === '\\') {
                subEscapeNext = true;
                currentSub += subChar;
                continue;
              }
              
              if (subChar === '"' && !subEscapeNext) {
                subInString = !subInString;
              }
              
              if (!subInString) {
                if (subChar === '{') subDepth++;
                if (subChar === '}') subDepth--;
              }
              
              currentSub += subChar;
              
              if (!subInString && subDepth === 0 && subChar === '}') {
                const subKeyMatch = currentSub.match(/key:\s*"([^"]+)"/);
                const subTranslationMatch = currentSub.match(/translationKey:\s*"([^"]+)"/);
                
                if (subKeyMatch && subTranslationMatch) {
                  subcategories.push({
                    key: subKeyMatch[1],
                    translationKey: subTranslationMatch[1]
                  });
                }
                
                currentSub = '';
              }
            }
          }
          
          categories.push({
            key: keyMatch[1],
            translationKey: translationMatch[1],
            subcategories
          });
        }
        
        currentObject = '';
      }
    }
  }
  
  // Extract product groups
  const groupMatch = content.match(/export const productGroups: ProductGroup\[\] = \[([\s\S]*?)\];/);
  const productGroups = [];
  if (groupMatch) {
    const groupContent = groupMatch[1];
    const groupMatches = groupContent.match(/\{\s*key: "([^"]+)",[\s\S]*?\}/g);
    
    if (groupMatches) {
      groupMatches.forEach(match => {
        const keyMatch = match.match(/key: "([^"]+)"/);
        const slugMatch = match.match(/slug: "([^"]+)"/);
        const titleKeyMatch = match.match(/titleKey: "([^"]+)"/);
        const descriptionKeyMatch = match.match(/descriptionKey: "([^"]+)"/);
        const subcategoryMatch = match.match(/subcategoryKey: "([^"]+)"/);
        const imageMatch = match.match(/image: "([^"]+)"/);
        const featuredSpecsMatch = match.match(/featuredSpecs: \[([\s\S]*?)\]/);
        
        if (keyMatch && slugMatch && subcategoryMatch) {
          const featuredSpecs = [];
          if (featuredSpecsMatch) {
            const specsContent = featuredSpecsMatch[1];
            const specMatches = specsContent.match(/"([^"]+)"/g);
            if (specMatches) {
              featuredSpecs.push(...specMatches.map(s => s.replace(/"/g, '')));
            }
          }
          
          productGroups.push({
            key: keyMatch[1],
            slug: slugMatch[1],
            titleKey: titleKeyMatch ? titleKeyMatch[1] : '',
            descriptionKey: descriptionKeyMatch ? descriptionKeyMatch[1] : '',
            subcategoryKey: subcategoryMatch[1],
            image: imageMatch ? imageMatch[1] : '',
            featuredSpecs
          });
        }
      });
    }
  }
  
  // Extract products
  const productMatch = content.match(/export const products: Product\[\] = \[([\s\S]*?)\];/);
  const products = [];
  if (productMatch) {
    const productContent = productMatch[1];
    const productMatches = productContent.match(/\{\s*id: "([^"]+)",[\s\S]*?\}/g);
    
    if (productMatches) {
      productMatches.forEach(match => {
        const idMatch = match.match(/id: "([^"]+)"/);
        const slugMatch = match.match(/slug: "([^"]+)"/);
        const categoryMatch = match.match(/categoryKey: "([^"]+)"/);
        const subcategoryMatch = match.match(/subcategoryKey: "([^"]+)"/);
        const typeMatch = match.match(/typeKey: "([^"]+)"/);
        const imageMatch = match.match(/image: "([^"]+)"/);
        const datasheetMatch = match.match(/datasheetUrl: "([^"]+)"/);
        const specsMatch = match.match(/specs: \{([\s\S]*?)\}/);
        
        if (idMatch && slugMatch && categoryMatch && subcategoryMatch) {
          const specs = {};
          if (specsMatch) {
            const specsContent = specsMatch[1];
            const specLines = specsContent.split(',');
            specLines.forEach(line => {
              const specMatch = line.match(/(\w+): "([^"]+)"/);
              if (specMatch) {
                specs[specMatch[1]] = specMatch[2];
              }
            });
          }
          
          products.push({
            id: idMatch[1],
            slug: slugMatch[1],
            categoryKey: categoryMatch[1],
            subcategoryKey: subcategoryMatch[1],
            typeKey: typeMatch ? typeMatch[1] : undefined,
            image: imageMatch ? imageMatch[1] : '',
            datasheetUrl: datasheetMatch ? datasheetMatch[1] : undefined,
            specs
          });
        }
      });
    }
  }
  
  return { categories, productGroups, products };
}

function generateNewHierarchicalStructure(data) {
  const { categories, productGroups, products } = data;
  
  console.log(`Processing ${categories.length} categories, ${productGroups.length} groups, ${products.length} products`);
  
  const catalog = {};
  
  // Build hierarchy
  categories.forEach(category => {
    const categoryData = {
      key: category.key,
      title: translateKey(category.translationKey),
      description: translateKey(category.translationKey + '.description'),
      subcategories: []
    };
    
    category.subcategories.forEach(subcategory => {
      const subcategoryData = {
        key: subcategory.key,
        title: translateKey(subcategory.translationKey),
        description: translateKey(subcategory.translationKey + '.description'),
        productGroups: []
      };
      
      // Find product groups for this subcategory
      const subcategoryGroups = productGroups.filter(group => group.subcategoryKey === subcategory.key);
      
      subcategoryGroups.forEach(group => {
        const groupData = {
          key: group.key,
          slug: group.slug,
          title: translateKey(group.titleKey),
          description: translateKey(group.descriptionKey),
          image: group.image,
          featuredSpecs: group.featuredSpecs || [],
          products: []
        };
        
        // Find products for this group - match by category, subcategory, and group key
        const groupProducts = products.filter(product => {
          // Match by category and subcategory first
          if (product.categoryKey !== category.key || product.subcategoryKey !== subcategory.key) {
            return false;
          }
          
          // Try to match by typeKey first
          if (product.typeKey === group.key) {
            return true;
          }
          
          // If no typeKey, try to match by product ID patterns or specs
          const productId = product.id.toLowerCase();
          const groupKey = group.key.toLowerCase();
          
          // Check if product ID contains group key pattern
          if (productId.includes(groupKey) || 
              productId.includes(groupKey.replace('-', '')) ||
              productId.includes(groupKey.replace(/([A-Z])/g, '-$1').toLowerCase())) {
            return true;
          }
          
          // Check specs for matching patterns
          if (product.specs && product.specs.type) {
            const specType = product.specs.type.toLowerCase();
            if (specType.includes(groupKey) || groupKey.includes(specType)) {
              return true;
            }
          }
          
          return false;
        });
        
        groupProducts.forEach(product => {
          const productData = {
            id: product.id,
            slug: product.slug,
            image: product.image,
            title: generateProductTitle(product.id, product.specs),
            description: generateProductDescription(generateProductTitle(product.id, product.specs), product.specs),
            features: generateProductFeatures(product.specs),
            specs: product.specs
          };
          
          if (product.datasheetUrl) {
            productData.datasheetUrl = product.datasheetUrl;
          }
          
          groupData.products.push(productData);
        });
        
        subcategoryData.productGroups.push(groupData);
      });
      
      categoryData.subcategories.push(subcategoryData);
    });
    
    catalog[category.key] = categoryData;
  });
  
  return catalog;
}

function generateNewFileContent(catalog) {
  const interfaces = `// Image handling will use direct string keys that resolve to paths at render time

export interface ProductSpecs {
  [key: string]: string | number;
}

export interface Product {
  id: string;
  slug: string;
  image: string;
  datasheetUrl?: string;
  title: string;
  description: string;
  features: string[];
  specs: ProductSpecs;
}

export interface ProductGroup {
  key: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  icon?: string;
  featuredSpecs: string[];
  products: Product[];
}

export interface SubCategory {
  key: string;
  title: string;
  description: string;
  productGroups: ProductGroup[];
}

export interface Category {
  key: string;
  title: string;
  description: string;
  subcategories: SubCategory[];
}

// Unified Product Data Structure
export const productCatalog: { [categoryKey: string]: Category } = ${JSON.stringify(catalog, null, 2)};

// Utility Functions
export const getProductBySlug = (slug: string): Product | undefined => {
  for (const category of Object.values(productCatalog)) {
    for (const subcategory of category.subcategories) {
      for (const productGroup of subcategory.productGroups) {
        const product = productGroup.products.find(p => p.slug === slug);
        if (product) return product;
      }
    }
  }
  return undefined;
};

export const getProductById = (id: string): Product | undefined => {
  for (const category of Object.values(productCatalog)) {
    for (const subcategory of category.subcategories) {
      for (const productGroup of subcategory.productGroups) {
        const product = productGroup.products.find(p => p.id === id);
        if (product) return product;
      }
    }
  }
  return undefined;
};

export const getProductsByCategory = (categoryKey: string): Product[] => {
  const category = productCatalog[categoryKey];
  if (!category) return [];
  
  const products: Product[] = [];
  for (const subcategory of category.subcategories) {
    for (const productGroup of subcategory.productGroups) {
      products.push(...productGroup.products);
    }
  }
  return products;
};

export const getProductsBySubcategory = (categoryKey: string, subcategoryKey: string): Product[] => {
  const category = productCatalog[categoryKey];
  if (!category) return [];
  
  const subcategory = category.subcategories.find(sub => sub.key === subcategoryKey);
  if (!subcategory) return [];
  
  const products: Product[] = [];
  for (const productGroup of subcategory.productGroups) {
    products.push(...productGroup.products);
  }
  return products;
};

export const getProductGroupBySlug = (categoryKey: string, subcategoryKey: string, groupSlug: string): ProductGroup | undefined => {
  const category = productCatalog[categoryKey];
  if (!category) return undefined;
  
  const subcategory = category.subcategories.find(sub => sub.key === subcategoryKey);
  if (!subcategory) return undefined;
  
  return subcategory.productGroups.find(group => group.slug === groupSlug);
};

export const getAllProductSlugs = (): string[] => {
  const slugs: string[] = [];
  for (const category of Object.values(productCatalog)) {
    for (const subcategory of category.subcategories) {
      for (const productGroup of subcategory.productGroups) {
        for (const product of productGroup.products) {
          slugs.push(product.slug);
        }
      }
    }
  }
  return slugs;
};

export const getAllCategorySlugs = (): string[] => {
  return Object.keys(productCatalog);
};

export const getAllSubcategorySlugs = (): Array<{category: string, subcategory: string}> => {
  const slugs: Array<{category: string, subcategory: string}> = [];
  for (const [categoryKey, category] of Object.entries(productCatalog)) {
    for (const subcategory of category.subcategories) {
      slugs.push({category: categoryKey, subcategory: subcategory.key});
    }
  }
  return slugs;
};

export const getAllProductGroupSlugs = (): Array<{category: string, subcategory: string, group: string}> => {
  const slugs: Array<{category: string, subcategory: string, group: string}> = [];
  for (const [categoryKey, category] of Object.entries(productCatalog)) {
    for (const subcategory of category.subcategories) {
      for (const productGroup of subcategory.productGroups) {
        slugs.push({
          category: categoryKey, 
          subcategory: subcategory.key, 
          group: productGroup.slug
        });
      }
    }
  }
  return slugs;
};`;
  
  return interfaces;
}

function main() {
  console.log('Starting complete product data migration...');
  
  try {
    const data = extractDataFromOldFile();
    console.log(`Extracted ${data.categories.length} categories, ${data.productGroups.length} groups, ${data.products.length} products`);
    
    const catalog = generateNewHierarchicalStructure(data);
    console.log(`Generated hierarchical catalog with ${Object.keys(catalog).length} categories`);
    
    const newFileContent = generateNewFileContent(catalog);
    
    // Backup current file if it exists
    if (fs.existsSync('client/src/data/products-detail-pages-data.ts')) {
      fs.copyFileSync('client/src/data/products-detail-pages-data.ts', 'client/src/data/products-detail-pages-data.ts.backup');
      console.log('Backed up existing file');
    }
    
    fs.writeFileSync('client/src/data/products-detail-pages-data.ts', newFileContent);
    console.log('Generated new hierarchical product catalog file');
    
    console.log('Migration completed successfully!');
    
  } catch (error) {
    console.error('Migration failed:', error.message);
  }
}

main();