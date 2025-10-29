import { ReactElement } from "react";

export interface RouteInfo {
  path: string;
  title: string;
  description: string;
  category: string;
  icon?: string;
  hideFromSitemap?: boolean;
  isDynamic?: boolean;
  parentRoute?: string;
}

class RouteRegistry {
  private routes: Map<string, RouteInfo> = new Map();

  register(route: RouteInfo): void {
    this.routes.set(route.path, route);
  }

  registerMultiple(routes: RouteInfo[]): void {
    routes.forEach((route) => this.register(route));
  }

  getRoute(path: string): RouteInfo | undefined {
    return this.routes.get(path);
  }

  getAllRoutes(): RouteInfo[] {
    return Array.from(this.routes.values());
  }

  getRoutesByCategory(category: string): RouteInfo[] {
    return Array.from(this.routes.values()).filter(
      (route) => route.category === category
    );
  }

  getCategories(): string[] {
    const categories = new Set<string>();
    this.routes.forEach((route) => categories.add(route.category));
    return Array.from(categories);
  }

  getPublicRoutes(): RouteInfo[] {
    return Array.from(this.routes.values()).filter(
      (route) => !route.hideFromSitemap
    );
  }

  clear(): void {
    this.routes.clear();
  }
}

export const routeRegistry = new RouteRegistry();

// Register all routes from the application
export function initializeRoutes(): void {
  const routes: RouteInfo[] = [
    // Main Pages
    {
      path: "/",
      title: "home",
      description: "homeDescription",
      category: "main",
      icon: "Home",
    },
    {
      path: "/about",
      title: "aboutUs",
      description: "aboutUsDescription",
      category: "main",
      icon: "User",
    },
    {
      path: "/contact",
      title: "contact",
      description: "contactDescription",
      category: "main",
      icon: "Mail",
    },
    {
      path: "/gallery",
      title: "gallery",
      description: "galleryDescription",
      category: "main",
      icon: "Camera",
    },

    // Services & Projects
    {
      path: "/services",
      title: "ourServices",
      description: "ourServicesDescription",
      category: "services",
      icon: "Settings",
    },
    // Individual Service Routes
    {
      path: "/services-category/installation-commissioning",
      title: "installationCommissioning",
      description: "installationCommissioningDescription",
      category: "services",
      icon: "Wrench",
    },
    {
      path: "/services-category/calibration-testing",
      title: "calibrationTesting",
      description: "calibrationTestingDescription",
      category: "services",
      icon: "Gauge",
    },
    {
      path: "/services-category/consultation-training",
      title: "consultationTraining",
      description: "consultationTrainingDescription",
      category: "services",
      icon: "Users",
    },
    {
      path: "/services-category/custom-solutions",
      title: "customSolutions",
      description: "customSolutionsDescription",
      category: "services",
      icon: "Settings",
    },
    {
      path: "/services-category/supply-chain-management",
      title: "supplyChainManagement",
      description: "supplyChainManagementDescription",
      category: "services",
      icon: "Truck",
    },
    {
      path: "/services-category/technical-support",
      title: "technicalSupport",
      description: "technicalSupportDescription",
      category: "services",
      icon: "Shield",
    },
    {
      path: "/services-category/solar-epc",
      title: "solarEPC",
      description: "solarEPCDescription",
      category: "services",
      icon: "Sun",
    },
    {
      path: "/projects",
      title: "projects",
      description: "projectsDescription",
      category: "services",
      icon: "Briefcase",
    },

    // Products Overview
    {
      path: "/products",
      title: "allProducts",
      description: "allProductsDescription",
      category: "products",
      icon: "Package",
    },

    // Main Product Categories
    {
      path: "/products/instrumentation-accessories",
      title: "instrumentationAccessories",
      description: "instrumentationAccessoriesDescription",
      category: "product-categories",
      icon: "Gauge",
      parentRoute: "/products",
    },
    {
      path: "/products/electrical-components",
      title: "electricalComponents",
      description: "electricalComponentsDescription",
      category: "product-categories",
      icon: "Zap",
      parentRoute: "/products",
    },
    {
      path: "/products/industrial-measuring-tools",
      title: "industrialMeasuringTools",
      description: "industrialMeasuringToolsDescription",
      category: "product-categories",
      icon: "Activity",
      parentRoute: "/products",
    },
    {
      path: "/products/solar-products",
      title: "solarProducts",
      description: "solarProductsDescription",
      category: "product-categories",
      icon: "Sun",
      parentRoute: "/products",
    },
    {
      path: "/products/automation-control-systems",
      title: "automationControlSystems",
      description: "automationControlSystemsDescription",
      category: "product-categories",
      icon: "Cpu",
      parentRoute: "/products",
    },
    {
      path: "/products/safety-protective-devices",
      title: "safetyProtectiveDevices",
      description: "safetyProtectiveDevicesDescription",
      category: "product-categories",
      icon: "Shield",
      parentRoute: "/products",
    },
    {
      path: "/products/mechanical-pumps-spares",
      title: "mechanicalPumpsSpares",
      description: "mechanicalPumpsSparesDescription",
      category: "product-categories",
      icon: "Truck",
      parentRoute: "/products",
    },
    {
      path: "/products/industrial-measuring-tools",
      title: "industrialMeasuringTools",
      description: "industrialMeasuringToolsDescription",
      category: "product-categories",
      icon: "Hammer",
      parentRoute: "/products",
    },
    {
      path: "/products/bldc",
      title: "bldcMotors",
      description: "bldcMotorsDescription",
      category: "product-categories",
      icon: "Zap",
      parentRoute: "/products",
    },

    // Instrumentation Accessories Subcategories
    {
      path: "/products/instrumentation-accessories/sensors-transducers",
      title: "sensors",
      description: "sensorsDescription",
      category: "product-subcategories",
      icon: "Thermometer",
      parentRoute: "/products/instrumentation-accessories",
    },
    {
      path: "/products/instrumentation-accessories/transmitters-flow-meters",
      title: "transmitters",
      description: "transmittersDescription",
      category: "product-subcategories",
      icon: "Radio",
      parentRoute: "/products/instrumentation-accessories",
    },
    {
      path: "/products/instrumentation-accessories/switches-indicators",
      title: "switches",
      description: "switchesDescription",
      category: "product-subcategories",
      icon: "ToggleLeft",
      parentRoute: "/products/instrumentation-accessories",
    },
    {
      path: "/products/instrumentation-accessories/valves-actuators",
      title: "valves",
      description: "valvesDescription",
      category: "product-subcategories",
      icon: "Gauge",
      parentRoute: "/products/instrumentation-accessories",
    },
    {
      path: "/products/instrumentation-accessories/analyzers",
      title: "analyzers",
      description: "analyzersDescription",
      category: "product-subcategories",
      icon: "FlaskConical",
      parentRoute: "/products/instrumentation-accessories",
    },
    {
      path: "/products/instrumentation-accessories/instrumentation-cables",
      title: "instrumentationCables",
      description: "instrumentationCablesDescription",
      category: "product-subcategories",
      icon: "Cable",
      parentRoute: "/products/instrumentation-accessories",
    },

    // Measurement Instruments Subcategories
    {
      path: "/products/industrial-measuring-tools/multimeters",
      title: "multimeters",
      description: "multimetersDescription",
      category: "product-subcategories",
      icon: "Zap",
      parentRoute: "/products/industrial-measuring-tools",
    },
    {
      path: "/products/industrial-measuring-tools/power-quality-analyzers",
      title: "powerQualityAnalyzers",
      description: "powerQualityAnalyzersDescription",
      category: "product-subcategories",
      icon: "Activity",
      parentRoute: "/products/industrial-measuring-tools",
    },
    {
      path: "/products/industrial-measuring-tools/calibration-equipment",
      title: "calibrationEquipment",
      description: "calibrationEquipmentDescription",
      category: "product-subcategories",
      icon: "Settings",
      parentRoute: "/products/industrial-measuring-tools",
    },

    // Electrical Components Subcategories
    {
      path: "/products/electrical-components/electrical-cables",
      title: "electricalCables",
      description: "electricalCablesDescription",
      category: "product-subcategories",
      icon: "Cable",
      parentRoute: "/products/electrical-components",
    },
    {
      path: "/products/electrical-components/connectors-terminals",
      title: "connectorsTerminals",
      description: "connectorsTerminalsDescription",
      category: "product-subcategories",
      icon: "Zap",
      parentRoute: "/products/electrical-components",
    },
    {
      path: "/products/electrical-components/circuit-breakers-fuses",
      title: "circuitBreakersFuses",
      description: "circuitBreakersFusesDescription",
      category: "product-subcategories",
      icon: "Shield",
      parentRoute: "/products/electrical-components",
    },
    {
      path: "/products/electrical-components/power-supplies",
      title: "powerSupplies",
      description: "powerSuppliesDescription",
      category: "product-subcategories",
      icon: "Power",
      parentRoute: "/products/electrical-components",
    },
    {
      path: "/products/electrical-components/enclosures-cabinets",
      title: "enclosuresCabinets",
      description: "enclosuresCabinetsDescription",
      category: "product-subcategories",
      icon: "Shield",
      parentRoute: "/products/electrical-components",
    },
    {
      path: "/products/electrical-components/heating-elements-appliances",
      title: "heatingElementsAppliances",
      description: "heatingElementsAppliancesDescription",
      category: "product-subcategories",
      icon: "Zap",
      parentRoute: "/products/electrical-components",
    },

    // Solar Products Subcategories
    {
      path: "/products/solar-products/solar-panels",
      title: "solarPanels",
      description: "solarPanelsDescription",
      category: "product-subcategories",
      icon: "Sun",
      parentRoute: "/products/solar-products",
    },
    {
      path: "/products/solar-products/solar-inverters",
      title: "solarInverters",
      description: "solarInvertersDescription",
      category: "product-subcategories",
      icon: "Zap",
      parentRoute: "/products/solar-products",
    },

    // Automation Control Systems Subcategories
    {
      path: "/products/automation-control-systems/plcs",
      title: "plcs",
      description: "plcsDescription",
      category: "product-subcategories",
      icon: "Cpu",
      parentRoute: "/products/automation-control-systems",
    },
    {
      path: "/products/automation-control-systems/scada",
      title: "scada",
      description: "scadaDescription",
      category: "product-subcategories",
      icon: "Monitor",
      parentRoute: "/products/automation-control-systems",
    },
    {
      path: "/products/automation-control-systems/dcs",
      title: "dcs",
      description: "dcsDescription",
      category: "product-subcategories",
      icon: "Network",
      parentRoute: "/products/automation-control-systems",
    },
    {
      path: "/products/automation-control-systems/hmi",
      title: "hmi",
      description: "hmiDescription",
      category: "product-subcategories",
      icon: "Monitor",
      parentRoute: "/products/automation-control-systems",
    },

    // Safety & Protection Subcategories
    {
      path: "/products/safety-protective-devices/safety-equipment",
      title: "safetyEquipment",
      description: "safetyEquipmentDescription",
      category: "product-subcategories",
      icon: "Shield",
      parentRoute: "/products/safety-protective-devices",
    },
    {
      path: "/products/safety-protective-devices/safety-relays-switches",
      title: "safetyRelaysSwitches",
      description: "safetyRelaysSwitchesDescription",
      category: "product-subcategories",
      icon: "ToggleLeft",
      parentRoute: "/products/safety-protective-devices",
    },
    {
      path: "/products/safety-protective-devices/intrinsically-safe-equipment",
      title: "intrinsicallySafeEquipment",
      description: "intrinsicallySafeEquipmentDescription",
      category: "product-subcategories",
      icon: "ShieldCheck",
      parentRoute: "/products/safety-protective-devices",
    },
    {
      path: "/products/electrical-components/surge-protectors",
      title: "surgeProtectors",
      description: "surgeProtectorsDescription",
      category: "product-subcategories",
      icon: "Zap",
      parentRoute: "/products/electrical-components",
    },
    {
      path: "/products/electrical-components/grounding-systems",
      title: "groundingSystems",
      description: "groundingSystemsDescription",
      category: "product-subcategories",
      icon: "Zap",
      parentRoute: "/products/electrical-components",
    },

    // Pumps & Mechanical Subcategories
    {
      path: "/products/mechanical-pumps-spares/centrifugal-pumps",
      title: "centrifugalPumps",
      description: "centrifugalPumpsDescription",
      category: "product-subcategories",
      icon: "Truck",
      parentRoute: "/products/mechanical-pumps-spares",
    },
    {
      path: "/products/mechanical-pumps-spares/diaphragm-pumps",
      title: "diaphragmPumps",
      description: "diaphragmPumpsDescription",
      category: "product-subcategories",
      icon: "Truck",
      parentRoute: "/products/mechanical-pumps-spares",
    },
    {
      path: "/products/mechanical-pumps-spares/gear-pumps",
      title: "gearPumps",
      description: "gearPumpsDescription",
      category: "product-subcategories",
      icon: "Cog",
      parentRoute: "/products/mechanical-pumps-spares",
    },
    {
      path: "/products/mechanical-pumps-spares/pump-parts-spares",
      title: "pumpPartsSpares",
      description: "pumpPartsSparesDescription",
      category: "product-subcategories",
      icon: "Wrench",
      parentRoute: "/products/mechanical-pumps-spares",
    },

    // Industrial Tools Subcategories
    {
      path: "/products/industrial-measuring-tools/hand-tools",
      title: "handTools",
      description: "handToolsDescription",
      category: "product-subcategories",
      icon: "Hammer",
      parentRoute: "/products/industrial-measuring-tools",
    },
    {
      path: "/products/industrial-measuring-tools/power-tools",
      title: "powerTools",
      description: "powerToolsDescription",
      category: "product-subcategories",
      icon: "Drill",
      parentRoute: "/products/industrial-measuring-tools",
    },
    {
      path: "/products/industrial-measuring-tools/cutting-tools",
      title: "cuttingTools",
      description: "cuttingToolsDescription",
      category: "product-subcategories",
      icon: "Scissors",
      parentRoute: "/products/industrial-measuring-tools",
    },
    {
      path: "/products/industrial-measuring-tools/lifting-equipment",
      title: "liftingEquipment",
      description: "liftingEquipmentDescription",
      category: "product-subcategories",
      icon: "Move",
      parentRoute: "/products/industrial-measuring-tools",
    },

    // BLDC Motor Subcategories
    {
      path: "/products/bldc/bldc-ceiling-fan",
      title: "bldcCeilingFan",
      description: "bldcCeilingFanDescription",
      category: "product-subcategories",
      icon: "Fan",
      parentRoute: "/products/bldc",
    },
    {
      path: "/products/bldc/bldc-cooler-exhaust-motor",
      title: "bldcCoolerExhaustMotor",
      description: "bldcCoolerExhaustMotorDescription",
      category: "product-subcategories",
      icon: "Wind",
      parentRoute: "/products/bldc",
    },
    {
      path: "/products/bldc/bldc-submersible-surface-pump",
      title: "bldcSubmersibleSurfacePump",
      description: "bldcSubmersibleSurfacePumpDescription",
      category: "product-subcategories",
      icon: "Droplets",
      parentRoute: "/products/bldc",
    },
    {
      path: "/products/bldc/bldc-table-fan-wall-fan-motor",
      title: "bldcTableFanWallFanMotor",
      description: "bldcTableFanWallFanMotorDescription",
      category: "product-subcategories",
      icon: "Fan",
      parentRoute: "/products/bldc",
    },

    // Resources & Tools
    {
      path: "/quote",
      title: "requestQuote",
      description: "requestQuoteDescription",
      category: "resources",
      icon: "Calculator",
    },
    {
      path: "/products/:parentSlug/:slug",
      title: "productSubCategories",
      description: "productSubCategoriesDescription",
      category: "product-subcategories",
      icon: "Package",
      isDynamic: true,
      hideFromSitemap: true,
    },

    // Legal & Information
    // Note: /terms-of-service route doesn't exist in App.tsx, hiding for now
    // {
    //   path: "/terms-of-service",
    //   title: "termsOfService",
    //   description: "termsOfServiceDescription",
    //   category: "legal",
    //   icon: "FileText"
    // },
    {
      path: "/sitemap",
      title: "sitemap",
      description: "sitemapDescription",
      category: "legal",
      icon: "MapPin",
    },
  ];

  routeRegistry.registerMultiple(routes);
}

// Auto-initialize routes when module is imported
initializeRoutes();
