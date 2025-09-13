// Product catalog data structure for individual product pages
// This centralizes all product data while keeping translations in i18n files

export interface ProductSpecs {
  [key: string]: string | number;
}

export interface Product {
  id: string;
  slug: string;
  categoryKey: string;
  subcategoryKey: string;
  image: string;
  datasheetUrl?: string;
  specs: ProductSpecs;
  translationKeys: {
    title: string;
    description: string;
    featuresKey?: string;
  };
}

export interface SubCategory {
  key: string;
  translationKey: string;
  products: string[]; // Array of product IDs
}

export interface Category {
  key: string;
  translationKey: string;
  subcategories: SubCategory[];
}

// Product definitions
export const products: Product[] = [
  // BLDC Ceiling Fans
  {
    id: "bldc-smart1200",
    slug: "bldc-smart-ceiling-fan-1200",
    categoryKey: "bldc",
    subcategoryKey: "bldc-ceiling-fan",
    image: "bldc-ceiling-fan",
    specs: {
      power: "48W",
      speed: "1200 RPM",
      airflow: "210 CMM",
      efficiency: "4.375 CMM/W",
      warranty: "3 Years"
    },
    translationKeys: {
      title: "products:bldcCeilingFan.smart1200.title",
      description: "products:bldcCeilingFan.smart1200.description",
      featuresKey: "products:bldcCeilingFan.smart1200.features"
    }
  },
  {
    id: "bldc-premium1400",
    slug: "bldc-premium-ceiling-fan-1400",
    categoryKey: "bldc",
    subcategoryKey: "bldc-ceiling-fan",
    image: "bldc-ceiling-fan",
    specs: {
      power: "55W",
      speed: "1400 RPM",
      airflow: "250 CMM",
      efficiency: "4.545 CMM/W",
      warranty: "5 Years"
    },
    translationKeys: {
      title: "products:bldcCeilingFan.premium1400.title",
      description: "products:bldcCeilingFan.premium1400.description",
      featuresKey: "products:bldcCeilingFan.premium1400.features"
    }
  },
  {
    id: "bldc-commercial1500",
    slug: "bldc-commercial-ceiling-fan-1500",
    categoryKey: "bldc",
    subcategoryKey: "bldc-ceiling-fan",
    image: "bldc-ceiling-fan",
    specs: {
      power: "65W",
      speed: "1500 RPM",
      airflow: "300 CMM",
      efficiency: "4.615 CMM/W",
      warranty: "7 Years"
    },
    translationKeys: {
      title: "products:bldcCeilingFan.commercial1500.title",
      description: "products:bldcCeilingFan.commercial1500.description",
      featuresKey: "products:bldcCeilingFan.commercial1500.features"
    }
  },

  // BLDC Cooler & Exhaust Motors
  {
    id: "bldc-exhaust-fan",
    slug: "bldc-exhaust-fan-motor",
    categoryKey: "bldc",
    subcategoryKey: "bldc-cooler-exhaust-motor",
    image: "bldc-cooler-exhaust-motor",
    specs: {
      power: "25W",
      speed: "2800 RPM",
      airflow: "150 CFM",
      voltage: "12V DC",
      efficiency: "85%"
    },
    translationKeys: {
      title: "products:bldcCoolerExhaust.exhaustFan.title",
      description: "products:bldcCoolerExhaust.exhaustFan.description",
      featuresKey: "products:bldcCoolerExhaust.exhaustFan.features"
    }
  },
  {
    id: "bldc-cooler-motors",
    slug: "bldc-cooler-motors",
    categoryKey: "bldc",
    subcategoryKey: "bldc-cooler-exhaust-motor",
    image: "bldc-cooler-exhaust-motor",
    specs: {
      power: "45W",
      speed: "1800 RPM",
      airflow: "400 CFM",
      voltage: "24V DC",
      efficiency: "90%"
    },
    translationKeys: {
      title: "products:bldcCoolerExhaust.coolerMotors.title",
      description: "products:bldcCoolerExhaust.coolerMotors.description",
      featuresKey: "products:bldcCoolerExhaust.coolerMotors.features"
    }
  },
  {
    id: "bldc-ventilation",
    slug: "bldc-ventilation-system",
    categoryKey: "bldc",
    subcategoryKey: "bldc-cooler-exhaust-motor",
    image: "bldc-cooler-exhaust-motor",
    specs: {
      power: "75W",
      speed: "2400 RPM",
      airflow: "800 CFM",
      voltage: "48V DC",
      efficiency: "92%"
    },
    translationKeys: {
      title: "products:bldcCoolerExhaust.ventilation.title",
      description: "products:bldcCoolerExhaust.ventilation.description",
      featuresKey: "products:bldcCoolerExhaust.ventilation.features"
    }
  },

  // BLDC Submersible & Surface Pumps
  {
    id: "solar-bldc-submersible-1hp",
    slug: "solar-bldc-submersible-pump-1hp",
    categoryKey: "bldc",
    subcategoryKey: "bldc-submersible-surface-pump",
    image: "bldc-submersible-surface-pump",
    specs: {
      power: "1 HP",
      flow: "1800 LPH",
      head: "100 ft",
      voltage: "48V DC",
      solarCompatible: "Yes"
    },
    translationKeys: {
      title: "products:bldcPumps.solarSubmersible1hp.title",
      description: "products:bldcPumps.solarSubmersible1hp.description",
      featuresKey: "products:bldcPumps.solarSubmersible1hp.features"
    }
  },
  {
    id: "dc-surface-pump-2hp",
    slug: "dc-surface-pump-2hp",
    categoryKey: "bldc",
    subcategoryKey: "bldc-submersible-surface-pump",
    image: "bldc-submersible-surface-pump",
    specs: {
      power: "2 HP",
      flow: "3600 LPH",
      head: "150 ft",
      voltage: "72V DC",
      selfPriming: "Yes"
    },
    translationKeys: {
      title: "products:bldcPumps.dcSurface2hp.title",
      description: "products:bldcPumps.dcSurface2hp.description",
      featuresKey: "products:bldcPumps.dcSurface2hp.features"
    }
  },
  {
    id: "hybrid-bldc-pump",
    slug: "hybrid-bldc-pump-system",
    categoryKey: "bldc",
    subcategoryKey: "bldc-submersible-surface-pump",
    image: "bldc-submersible-surface-pump",
    specs: {
      power: "1.5 HP",
      flow: "2700 LPH",
      head: "120 ft",
      voltage: "48V DC / 230V AC",
      hybridOperation: "Yes"
    },
    translationKeys: {
      title: "products:bldcPumps.hybridSystem.title",
      description: "products:bldcPumps.hybridSystem.description",
      featuresKey: "products:bldcPumps.hybridSystem.features"
    }
  },

  // BLDC Table & Wall Fan Motors
  {
    id: "bldc-table-fan-motors",
    slug: "bldc-table-fan-motors",
    categoryKey: "bldc",
    subcategoryKey: "bldc-table-fan-wall-fan-motor",
    image: "bldc-table-fan-wall-fan-motor",
    specs: {
      power: "28W",
      speed: "2100 RPM",
      diameter: "400mm",
      voltage: "24V DC",
      remoteControl: "Yes"
    },
    translationKeys: {
      title: "products:bldcFans.tableFan.title",
      description: "products:bldcFans.tableFan.description",
      featuresKey: "products:bldcFans.tableFan.features"
    }
  },
  {
    id: "bldc-wall-fan-motors",
    slug: "bldc-wall-fan-motors",
    categoryKey: "bldc",
    subcategoryKey: "bldc-table-fan-wall-fan-motor",
    image: "bldc-table-fan-wall-fan-motor",
    specs: {
      power: "35W",
      speed: "1800 RPM",
      diameter: "450mm",
      voltage: "24V DC",
      oscillation: "Yes"
    },
    translationKeys: {
      title: "products:bldcFans.wallFan.title",
      description: "products:bldcFans.wallFan.description",
      featuresKey: "products:bldcFans.wallFan.features"
    }
  },
  {
    id: "bldc-pedestal-fan-motors",
    slug: "bldc-pedestal-fan-motors",
    categoryKey: "bldc",
    subcategoryKey: "bldc-table-fan-wall-fan-motor",
    image: "bldc-table-fan-wall-fan-motor",
    specs: {
      power: "42W",
      speed: "1900 RPM",
      diameter: "500mm",
      voltage: "24V DC",
      heightAdjustment: "Yes"
    },
    translationKeys: {
      title: "products:bldcFans.pedestalFan.title",
      description: "products:bldcFans.pedestalFan.description",
      featuresKey: "products:bldcFans.pedestalFan.features"
    }
  },

  // Electrical Components - Cables & Wires
  {
    id: "instrumentation-cables",
    slug: "instrumentation-cables",
    categoryKey: "electrical-components",
    subcategoryKey: "cables-wires",
    image: "cables-wires",
    specs: {
      type: "Shielded Twisted Pair",
      awg: "18-22 AWG",
      voltage: "300V",
      temperature: "-40°C to +90°C",
      shielding: "100% Coverage"
    },
    translationKeys: {
      title: "products:cablesWires.instrumentation.title",
      description: "products:cablesWires.instrumentation.description",
      featuresKey: "products:cablesWires.instrumentation.features"
    }
  },
  {
    id: "power-distribution-cables",
    slug: "power-distribution-cables",
    categoryKey: "electrical-components",
    subcategoryKey: "cables-wires",
    image: "cables-wires",
    specs: {
      type: "XLPE Insulated",
      voltage: "1kV - 33kV",
      conductor: "Copper/Aluminum",
      temperature: "90°C",
      standard: "IS 7098"
    },
    translationKeys: {
      title: "products:cablesWires.powerDistribution.title",
      description: "products:cablesWires.powerDistribution.description",
      featuresKey: "products:cablesWires.powerDistribution.features"
    }
  },
  {
    id: "communication-cables",
    slug: "communication-cables",
    categoryKey: "electrical-components",
    subcategoryKey: "cables-wires",
    image: "cables-wires",
    specs: {
      type: "Category 6A",
      bandwidth: "500 MHz",
      length: "100m",
      shielding: "F/UTP",
      standard: "TIA/EIA-568-B"
    },
    translationKeys: {
      title: "products:cablesWires.communication.title",
      description: "products:cablesWires.communication.description",
      featuresKey: "products:cablesWires.communication.features"
    }
  },

  // Circuit Breakers & Fuses
  {
    id: "mcb-circuit-breakers",
    slug: "mcb-miniature-circuit-breakers",
    categoryKey: "electrical-components",
    subcategoryKey: "circuit-breakers-fuses",
    image: "circuit-breakers-fuses",
    specs: {
      type: "MCB",
      current: "6A - 63A",
      poles: "1P, 2P, 3P, 4P",
      breakingCapacity: "10kA",
      standard: "IEC 60898"
    },
    translationKeys: {
      title: "products:circuitBreakers.mcb.title",
      description: "products:circuitBreakers.mcb.description",
      featuresKey: "products:circuitBreakers.mcb.features"
    }
  },
  {
    id: "mccb-circuit-breakers",
    slug: "mccb-molded-case-circuit-breakers",
    categoryKey: "electrical-components",
    subcategoryKey: "circuit-breakers-fuses",
    image: "circuit-breakers-fuses",
    specs: {
      type: "MCCB",
      current: "16A - 1600A",
      poles: "3P, 4P",
      breakingCapacity: "50kA",
      standard: "IEC 60947"
    },
    translationKeys: {
      title: "products:circuitBreakers.mccb.title",
      description: "products:circuitBreakers.mccb.description",
      featuresKey: "products:circuitBreakers.mccb.features"
    }
  },
  {
    id: "industrial-fuses",
    slug: "industrial-fuses",
    categoryKey: "electrical-components",
    subcategoryKey: "circuit-breakers-fuses",
    image: "circuit-breakers-fuses",
    specs: {
      type: "HRC Fuses",
      current: "2A - 800A",
      voltage: "415V - 11kV",
      breakingCapacity: "80kA",
      standard: "IEC 60269"
    },
    translationKeys: {
      title: "products:circuitBreakers.industrialFuses.title",
      description: "products:circuitBreakers.industrialFuses.description",
      featuresKey: "products:circuitBreakers.industrialFuses.features"
    }
  },

  // Connectors & Terminals
  {
    id: "terminal-blocks",
    slug: "industrial-terminal-blocks",
    categoryKey: "electrical-components",
    subcategoryKey: "connectors-terminals",
    image: "connectors-terminals",
    specs: {
      type: "Screw/Spring Clamp",
      current: "10A - 150A",
      voltage: "1000V",
      wireSize: "0.2 - 50 mm²",
      mounting: "DIN Rail"
    },
    translationKeys: {
      title: "products:connectorsTerminals.terminalBlocks.title",
      description: "products:connectorsTerminals.terminalBlocks.description",
      featuresKey: "products:connectorsTerminals.terminalBlocks.features"
    }
  },
  {
    id: "industrial-connectors",
    slug: "industrial-connectors",
    categoryKey: "electrical-components",
    subcategoryKey: "connectors-terminals",
    image: "connectors-terminals",
    specs: {
      type: "Heavy Duty",
      pins: "3-128 Pins",
      current: "16A - 400A",
      voltage: "690V",
      rating: "IP67"
    },
    translationKeys: {
      title: "products:connectorsTerminals.industrialConnectors.title",
      description: "products:connectorsTerminals.industrialConnectors.description",
      featuresKey: "products:connectorsTerminals.industrialConnectors.features"
    }
  },
  {
    id: "signal-connectors",
    slug: "signal-connectors",
    categoryKey: "electrical-components",
    subcategoryKey: "connectors-terminals",
    image: "connectors-terminals",
    specs: {
      type: "Miniature",
      pins: "2-50 Pins",
      current: "5A",
      voltage: "250V",
      shielding: "360° EMI"
    },
    translationKeys: {
      title: "products:connectorsTerminals.signalConnectors.title",
      description: "products:connectorsTerminals.signalConnectors.description",
      featuresKey: "products:connectorsTerminals.signalConnectors.features"
    }
  }

  // Continue with more products as needed...
];

// Category structure
export const categories: Category[] = [
  {
    key: "bldc",
    translationKey: "products:categories.bldc",
    subcategories: [
      {
        key: "bldc-ceiling-fan",
        translationKey: "products:subcategories.bldcCeilingFan",
        products: ["bldc-smart1200", "bldc-premium1400", "bldc-commercial1500"]
      },
      {
        key: "bldc-cooler-exhaust-motor",
        translationKey: "products:subcategories.bldcCoolerExhaust",
        products: ["bldc-exhaust-fan", "bldc-cooler-motors", "bldc-ventilation"]
      },
      {
        key: "bldc-submersible-surface-pump",
        translationKey: "products:subcategories.bldcPumps",
        products: ["solar-bldc-submersible-1hp", "dc-surface-pump-2hp", "hybrid-bldc-pump"]
      },
      {
        key: "bldc-table-fan-wall-fan-motor",
        translationKey: "products:subcategories.bldcFans",
        products: ["bldc-table-fan-motors", "bldc-wall-fan-motors", "bldc-pedestal-fan-motors"]
      }
    ]
  },
  {
    key: "electrical-components",
    translationKey: "products:categories.electricalComponents",
    subcategories: [
      {
        key: "cables-wires",
        translationKey: "products:subcategories.cablesWires",
        products: ["instrumentation-cables", "power-distribution-cables", "communication-cables"]
      },
      {
        key: "circuit-breakers-fuses",
        translationKey: "products:subcategories.circuitBreakers",
        products: ["mcb-circuit-breakers", "mccb-circuit-breakers", "industrial-fuses"]
      },
      {
        key: "connectors-terminals",
        translationKey: "products:subcategories.connectorsTerminals",
        products: ["terminal-blocks", "industrial-connectors", "signal-connectors"]
      }
    ]
  }
];

// Utility functions
export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (categoryKey: string): Product[] => {
  return products.filter(product => product.categoryKey === categoryKey);
};

export const getProductsBySubcategory = (subcategoryKey: string): Product[] => {
  return products.filter(product => product.subcategoryKey === subcategoryKey);
};

export const getProductsForSubcategory = (subcategoryKey: string): Product[] => {
  const subcategory = categories
    .flatMap(cat => cat.subcategories)
    .find(sub => sub.key === subcategoryKey);
  
  if (!subcategory) return [];
  
  return subcategory.products
    .map(productId => getProductById(productId))
    .filter((product): product is Product => product !== undefined);
};

export const getAllProductSlugs = (): string[] => {
  return products.map(product => product.slug);
};

export const getProductImageKey = (product: Product): string => {
  return product.image;
};