#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Starting comprehensive hardcoded content conversion...\n');

// Track statistics
let stats = {
  filesProcessed: 0,
  keysAdded: 0,
  filesModified: 0,
  errors: 0
};

// Helper function to add keys to English locale file
function addKeysToEnglishFile(namespace, keys) {
  const filePath = path.join(__dirname, `../client/public/locales/en/${namespace}.json`);
  try {
    const existing = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // Deep merge keys
    function deepMerge(target, source) {
      for (const [key, value] of Object.entries(source)) {
        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
          if (!target[key]) target[key] = {};
          deepMerge(target[key], value);
        } else {
          if (target[key] === undefined) {
            target[key] = value;
            stats.keysAdded++;
            console.log(`  + Added key: ${key}`);
          }
        }
      }
    }
    
    deepMerge(existing, keys);
    
    fs.writeFileSync(filePath, JSON.stringify(existing, null, 2) + '\n', 'utf8');
    console.log(`✅ Updated ${namespace}.json with new keys`);
    return true;
  } catch (error) {
    console.error(`❌ Error updating ${namespace}.json:`, error.message);
    stats.errors++;
    return false;
  }
}

// Main conversion function
function convertHardcodedContent() {
  
  console.log('📊 Phase 1: Converting product sub-category pages...\n');
  
  // First, let's add some essential SEO keys that will be used across all product pages
  const productSeoKeys = {
    seo: {
      productPages: {
        plcs: {
          title: "PLCs (Programmable Logic Controllers) - Industrial Automation | Powerton Engineering",
          description: "High-quality PLCs from leading manufacturers: Siemens SIMATIC, Allen-Bradley CompactLogix, Schneider Modicon. Expert PLC programming, installation & support across India.",
          keywords: "PLCs, programmable logic controllers, Siemens SIMATIC, Allen-Bradley CompactLogix, Schneider Modicon, industrial automation controllers, PLC programming, factory automation"
        },
        solarPanels: {
          title: "Solar Panels - Monocrystalline & Polycrystalline | Powerton Engineering", 
          description: "High-efficiency solar panels: Monocrystalline (400W), Polycrystalline (320W), and Bifacial (450W). Complete solar energy solutions with installation support across India.",
          keywords: "solar panels, monocrystalline solar panels, polycrystalline solar panels, bifacial solar panels, solar energy systems, renewable energy, solar installation India"
        },
        scada: {
          title: "SCADA Systems - Industrial Monitoring & Control | Powerton Engineering",
          description: "Advanced SCADA systems for real-time monitoring, data acquisition, and process control. Complete SCADA solutions with HMI integration and remote access capabilities.",
          keywords: "SCADA systems, supervisory control, data acquisition, industrial monitoring, process control, HMI integration, remote monitoring, SCADA software"
        }
      }
    }
  };

  // Add product name keys
  const productNames = {
    productNames: {
      siemens: {
        simaticS7_1200: "Siemens SIMATIC S7-1200",
        simaticS7_1500: "Siemens SIMATIC S7-1500", 
        logoSeries: "Siemens LOGO! Series"
      },
      allenBradley: {
        compactLogix5380: "Allen-Bradley CompactLogix 5380",
        micrologix1400: "Allen-Bradley MicroLogix 1400",
        controlLogix5580: "Allen-Bradley ControlLogix 5580"
      },
      schneider: {
        modiconM580: "Schneider Electric Modicon M580",
        modiconM340: "Schneider Electric Modicon M340",
        zelio: "Schneider Electric Zelio Logic"
      },
      solar: {
        monocrystalline400W: "Monocrystalline Solar Panels - 400W",
        polycrystalline320W: "Polycrystalline Solar Panels - 320W", 
        bifacial450W: "Bifacial Solar Panels - 450W"
      }
    }
  };

  // Add service details keys
  const serviceDetails = {
    serviceDetails: {
      technicalSupport: {
        overview: "24/7 technical support services for troubleshooting, remote assistance, and on-site support for all electrical and automation systems with rapid response times.",
        benefits: [
          "24/7 technical support availability",
          "Remote diagnostic and troubleshooting services", 
          "On-site emergency support when needed",
          "Rapid response times for critical issues",
          "Comprehensive problem resolution and follow-up"
        ],
        technologies: ["Remote Diagnostics", "Troubleshooting", "On-site Support", "System Monitoring", "Emergency Response"],
        industries: ["All Industries", "Critical Infrastructure", "Process Industries", "Manufacturing", "Commercial Facilities"]
      },
      installationCommissioning: {
        overview: "Complete installation and commissioning services for industrial automation systems, electrical panels, and instrumentation with professional certification and testing.",
        benefits: [
          "Professional installation by certified engineers",
          "Comprehensive system testing and commissioning",
          "Complete documentation and certification",
          "Training and handover support",
          "Post-installation support and warranty"
        ],
        technologies: ["System Installation", "Commissioning", "Testing", "Certification", "Documentation"],
        industries: ["Manufacturing", "Power Generation", "Oil & Gas", "Chemical", "Water Treatment"]
      }
    }
  };

  // Add UI text keys
  const uiTextKeys = {
    ui: {
      ariaLabels: {
        callUs: "Call us at {{phone}}",
        goToHomepage: "Go to Powerton Engineering homepage",
        followLinkedIn: "Follow Powerton Engineering on LinkedIn",
        followTwitter: "Follow Powerton Engineering on X (formerly Twitter)",
        followFacebook: "Follow Powerton Engineering on Facebook",
        toggleMobileMenu: "Toggle mobile menu",
        closeMobileMenu: "Close mobile menu",
        openMobileMenu: "Open mobile menu"
      },
      altTexts: {
        companyLogo: "Powerton Engineering Company Logo",
        heroImage: "Industrial automation and electrical engineering solutions",
        productImage: "Product image for {{productName}}"
      }
    }
  };

  console.log('📝 Adding keys to English locale files...');
  
  // Add all keys to appropriate files
  addKeysToEnglishFile('pages', productSeoKeys);
  addKeysToEnglishFile('products-data', productNames);  
  addKeysToEnglishFile('services', serviceDetails);
  addKeysToEnglishFile('common', uiTextKeys);

  console.log(`\n📊 Initial conversion complete:`);
  console.log(`  Keys added: ${stats.keysAdded}`);
  console.log(`  Files processed: ${stats.filesProcessed}`);
  console.log(`  Errors: ${stats.errors}\n`);
  
  console.log('🔄 Next: Run i18n-sync to propagate keys to all languages');
}

// Run the conversion
convertHardcodedContent();