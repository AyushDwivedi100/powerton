import { SEO } from "@/lib/seo";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import {
  Building2,
  FileText,
  Mail,
  Package,
  Settings,
  Calculator,
  MapPin,
  Home as HomeIcon,
  User,
  Wrench,
  Briefcase,
  ChevronRight,
  TreePine,
  Activity,
  Monitor,
  Network,
  ToggleLeft,
  FlaskConical,
  Radio,
  Thermometer,
  BarChart3,
  Search,
  Cable,
  Power,
  Battery,
  Drill,
  Scissors,
  Fan,
  Wind,
  Droplets,
  Move,
  Zap,
  Gauge,
  Cpu,
  Hammer,
  Sun,
  Truck,
  ShieldCheck,
  Cog,
  Factory,
  Camera,
  Shield,
  Download,
} from "lucide-react";

// Types for static sitemap data
interface SitemapItem {
  path: string;
  title: string;
  description: string;
  icon?: string;
}

interface ProductCategory {
  path: string;
  title: string;
  description: string;
  icon?: string;
  products: SitemapItem[];
}

// Static route data
const MAIN_ROUTES: SitemapItem[] = [
  {
    path: "/",
    title: "home",
    description: "homeDescription",
  },
  {
    path: "/about",
    title: "aboutUs",
    description: "aboutUsDescription",
  },
  {
    path: "/services",
    title: "services",
    description: "servicesDescription",
  },
  {
    path: "/products",
    title: "products",
    description: "productsDescription",
  },
  {
    path: "/projects",
    title: "projects",
    description: "projectsDescription",
  },
  {
    path: "/gallery",
    title: "gallery",
    description: "galleryDescription",
  },
  {
    path: "/career",
    title: "career",
    description: "careerDescription",
  },
  {
    path: "/contact",
    title: "contact",
    description: "contactDescription",
  },
  {
    path: "/getquote",
    title: "getquote",
    description: "getquoteDescription",
  },
];

const SERVICE_ROUTES: SitemapItem[] = [
  {
    path: "/services-category/installation-commissioning",
    title: "installationCommissioning",
    description: "installationCommissioningDescription",
  },
  {
    path: "/services-category/maintenance-repair",
    title: "maintenanceRepair",
    description: "maintenanceRepairDescription",
  },
  {
    path: "/services-category/calibration-testing",
    title: "calibrationTesting",
    description: "calibrationTestingDescription",
  },
  {
    path: "/services-category/technical-support",
    title: "technicalSupport",
    description: "technicalSupportDescription",
  },
  {
    path: "/services-category/custom-solutions",
    title: "customSolutions",
    description: "customSolutionsDescription",
  },
  {
    path: "/services-category/consultation-training",
    title: "consultationTraining",
    description: "consultationTrainingDescription",
  },
  {
    path: "/services-category/supply-chain-management",
    title: "supplyChainManagement",
    description: "supplyChainManagementDescription",
  },
  {
    path: "/services-category/solar-epc",
    title: "solarEPC",
    description: "solarEPCDescription",
  },
];

const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    path: "/products/instrumentation-accessories",
    title: "instrumentationAccessories",
    description: "instrumentationAccessoriesDescription",
    icon: "Gauge",
    products: [
      {
        path: "/products/instrumentation-accessories/sensors-transducers",
        title: "sensors",
        description: "sensorsDescription",
        icon: "Thermometer",
      },
      {
        path: "/products/instrumentation-accessories/transmitters-flow-meters",
        title: "transmitters",
        description: "transmittersDescription",
        icon: "Radio",
      },
      {
        path: "/products/instrumentation-accessories/switches-indicators",
        title: "switches",
        description: "switchesDescription",
        icon: "ToggleLeft",
      },
      {
        path: "/products/instrumentation-accessories/valves-actuators",
        title: "valves",
        description: "valvesDescription",
        icon: "Gauge",
      },
      {
        path: "/products/instrumentation-accessories/analyzers",
        title: "analyzers",
        description: "analyzersDescription",
        icon: "FlaskConical",
      },
    ],
  },
  {
    path: "/products/electrical-accessories",
    title: "electricalAccessories",
    description: "electricalAccessoriesDescription",
    icon: "Zap",
    products: [
      {
        path: "/products/electrical-accessories/electrical-cables",
        title: "electricalCables",
        description: "electricalCablesDescription",
        icon: "Cable",
      },
      {
        path: "/products/electrical-accessories/connectors-terminals",
        title: "connectorsTerminals",
        description: "connectorsTerminalsDescription",
        icon: "Zap",
      },
      {
        path: "/products/electrical-accessories/circuit-breakers-fuses",
        title: "circuitBreakersFuses",
        description: "circuitBreakersFusesDescription",
        icon: "Shield",
      },
      {
        path: "/products/electrical-accessories/power-supplies",
        title: "powerSupplies",
        description: "powerSuppliesDescription",
        icon: "Power",
      },
      {
        path: "/products/electrical-accessories/enclosures-cabinets",
        title: "enclosuresCabinets",
        description: "enclosuresCabinetsDescription",
        icon: "Shield",
      },
      {
        path: "/products/electrical-accessories/heating-elements-appliances",
        title: "heatingElementsAppliances",
        description: "heatingElementsAppliancesDescription",
        icon: "Zap",
      },
      {
        path: "/products/electrical-accessories/surge-protectors",
        title: "surgeProtectors",
        description: "surgeProtectorsDescription",
        icon: "Zap",
      },
      {
        path: "/products/electrical-accessories/grounding-systems",
        title: "groundingSystems",
        description: "groundingSystemsDescription",
        icon: "Zap",
      },
    ],
  },
  {
    path: "/products/industrial-measuring-tools",
    title: "industrialMeasuringTools",
    description: "industrialMeasuringToolsDescription",
    icon: "Activity",
    products: [
      {
        path: "/products/industrial-measuring-tools/multimeters",
        title: "multimeters",
        description: "multimetersDescription",
        icon: "Zap",
      },
      {
        path: "/products/industrial-measuring-tools/power-quality-analyzers",
        title: "powerQualityAnalyzers",
        description: "powerQualityAnalyzersDescription",
        icon: "Activity",
      },
      {
        path: "/products/industrial-measuring-tools/calibration-equipment",
        title: "calibrationEquipment",
        description: "calibrationEquipmentDescription",
        icon: "Settings",
      },
    ],
  },
  {
    path: "/products/solar-products",
    title: "solarProducts",
    description: "solarProductsDescription",
    icon: "Sun",
    products: [
      {
        path: "/products/solar-products/solar-panels",
        title: "solarPanels",
        description: "solarPanelsDescription",
        icon: "Sun",
      },
      {
        path: "/products/solar-products/solar-inverters",
        title: "solarInverters",
        description: "solarInvertersDescription",
        icon: "Zap",
      },
    ],
  },
  {
    path: "/products/automation-control-systems",
    title: "automationControlSystems",
    description: "automationControlSystemsDescription",
    icon: "Cpu",
    products: [
      {
        path: "/products/automation-control-systems/plcs",
        title: "plcs",
        description: "plcsDescription",
        icon: "Cpu",
      },
      {
        path: "/products/automation-control-systems/scada",
        title: "scada",
        description: "scadaDescription",
        icon: "Monitor",
      },
      {
        path: "/products/automation-control-systems/dcs",
        title: "dcs",
        description: "dcsDescription",
        icon: "Network",
      },
      {
        path: "/products/automation-control-systems/hmi",
        title: "hmi",
        description: "hmiDescription",
        icon: "Monitor",
      },
    ],
  },
  {
    path: "/products/safety-protective-devices",
    title: "safetyProtectiveDevices",
    description: "safetyProtectiveDevicesDescription",
    icon: "Shield",
    products: [
      {
        path: "/products/safety-protective-devices/safety-equipment",
        title: "safetyEquipment",
        description: "safetyEquipmentDescription",
        icon: "Shield",
      },
      {
        path: "/products/safety-protective-devices/safety-relays-switches",
        title: "safetyRelaysSwitches",
        description: "safetyRelaysSwitchesDescription",
        icon: "ToggleLeft",
      },
      {
        path: "/products/safety-protective-devices/intrinsically-safe-equipment",
        title: "intrinsicallySafeEquipment",
        description: "intrinsicallySafeEquipmentDescription",
        icon: "ShieldCheck",
      },
    ],
  },
  {
    path: "/products/mechanical-pumps-spares",
    title: "mechanicalPumpsSpares",
    description: "mechanicalPumpsSparesDescription",
    icon: "Truck",
    products: [
      {
        path: "/products/mechanical-pumps-spares/centrifugal-pumps",
        title: "centrifugalPumps",
        description: "centrifugalPumpsDescription",
        icon: "Truck",
      },
      {
        path: "/products/mechanical-pumps-spares/diaphragm-pumps",
        title: "diaphragmPumps",
        description: "diaphragmPumpsDescription",
        icon: "Truck",
      },
      {
        path: "/products/mechanical-pumps-spares/gear-pumps",
        title: "gearPumps",
        description: "gearPumpsDescription",
        icon: "Cog",
      },
      {
        path: "/products/mechanical-pumps-spares/pump-parts-spares",
        title: "pumpPartsSpares",
        description: "pumpPartsSparesDescription",
        icon: "Wrench",
      },
    ],
  },
  {
    path: "/products/industrial-measuring-tools",
    title: "industrialMeasuringTools",
    description: "industrialMeasuringToolsDescription",
    icon: "Hammer",
    products: [
      {
        path: "/products/industrial-measuring-tools/hand-tools",
        title: "handTools",
        description: "handToolsDescription",
        icon: "Hammer",
      },
      {
        path: "/products/industrial-measuring-tools/power-tools",
        title: "powerTools",
        description: "powerToolsDescription",
        icon: "Drill",
      },
      {
        path: "/products/industrial-measuring-tools/cutting-tools",
        title: "cuttingTools",
        description: "cuttingToolsDescription",
        icon: "Scissors",
      },
      {
        path: "/products/industrial-measuring-tools/lifting-equipment",
        title: "liftingEquipment",
        description: "liftingEquipmentDescription",
        icon: "Move",
      },
    ],
  },
];

const RESOURCES_ROUTES: SitemapItem[] = [
  {
    path: "/quote",
    title: "requestQuote",
    description: "requestQuoteDescription",
    icon: "Calculator",
  },
  {
    path: "/portfolio-download",
    title: "downloadPortfolio",
    description: "downloadPortfolioDescription",
    icon: "Download",
  },
];

const LEGAL_ROUTES: SitemapItem[] = [
  {
    path: "/sitemap",
    title: "sitemap",
    description: "sitemapDescription",
    icon: "MapPin",
  },
];

// Icon mapping for static routing
const iconMap: Record<string, any> = {
  Home: HomeIcon,
  User,
  Mail,
  Camera,
  Settings,
  Wrench,
  Briefcase,
  Package,
  Gauge,
  Zap,
  Activity,
  Sun,
  Cpu,
  Shield,
  Truck,
  Hammer,
  Calculator,
  Download,
  FileText,
  MapPin,
  Building2,
  Monitor,
  Network,
  ToggleLeft,
  FlaskConical,
  Radio,
  Thermometer,
  BarChart3,
  Search,
  Cable,
  Power,
  Battery,
  Drill,
  Scissors,
  Fan,
  Wind,
  Droplets,
  Move,
  Factory,
  ShieldCheck,
  Cog,
  TreePine,
};

export default function Sitemap() {
  const { t } = useTranslation(["pages", "common"]);

  // Static site structure
  const siteStructure = {
    main: {
      section: t("sitemap.sections.mainPages", { ns: "common" }),
      icon: <HomeIcon className="w-5 h-5 text-primary" />,
      routes: MAIN_ROUTES,
    },
    services: {
      section: t("sitemap.sections.servicesProjects", { ns: "common" }),
      icon: <Settings className="w-5 h-5 text-primary" />,
      routes: SERVICE_ROUTES,
    },
    products: {
      section: t("sitemap.sections.productCategories", { ns: "common" }),
      icon: <Package className="w-5 h-5 text-primary" />,
      routes: [
        {
          path: "/products",
          title: "allProducts",
          description: "allProductsDescription",
          icon: "Package",
        },
      ],
      categories: PRODUCT_CATEGORIES,
    },
  };

  const getIcon = (iconName: string, className: string = "w-4 h-4") => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? (
      <IconComponent className={className} />
    ) : (
      <Package className={className} />
    );
  };

  const renderRoute = (route: any, index: number) => (
    <Link key={index} href={route.path}>
      <div className="group block p-4 rounded-lg border border-border hover:border-primary/20 hover:bg-accent/50 transition-all duration-200 cursor-pointer">
        <div className="flex items-center gap-4">
          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all rtl-flip" />
          <div className="flex-1">
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
              {t(`sitemap.pages.${route.title}`, {
                ns: "common",
              })}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t(`sitemap.descriptions.${route.description}`, {
                ns: "common",
              })}
            </p>
          </div>
          <div className="text-xs text-muted-foreground font-mono bg-muted px-2 py-1 rounded">
            {route.path}
          </div>
        </div>
      </div>
    </Link>
  );

  const renderProductCategory = (
    category: ProductCategory,
    categoryIndex: number,
  ) => (
    <div key={categoryIndex} className="ml-4">
      {/* Category Header */}
      <div className="flex items-center gap-3 mb-4 p-3 bg-muted/50 rounded-lg">
        {getIcon(category.icon || "Package", "w-4 h-4 text-blue-600")}
        <h4 className="text-lg font-semibold text-foreground">
          {t(`sitemap.categories.${category.title}`, {
            ns: "common",
            defaultValue: category.title,
          })}
        </h4>
        <div className="flex-1 border-b border-border/30"></div>
        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
          {category.products.length}{" "}
          {t("common:nav.products", { ns: "common" }).toLowerCase()}
        </span>
      </div>

      {/* Category Products */}
      <div className="ml-6 flex flex-col gap-2">
        {category.products.map((product, productIndex) => (
          <Link key={productIndex} href={product.path}>
            <div className="group block p-3 rounded-lg border border-border/50 hover:border-primary/20 hover:bg-accent/30 transition-all duration-200 cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary/60 rounded-full group-hover:bg-primary group-hover:scale-125 transition-all"></div>
                <div className="flex-1 min-w-0">
                  <h5 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm leading-tight">
                    {t(`sitemap.pages.${product.title}`, {
                      ns: "common",
                      defaultValue: product.title,
                    })}
                  </h5>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {t(`sitemap.descriptions.${product.description}`, {
                      ns: "common",
                      defaultValue: product.description,
                    })}
                  </p>
                </div>
                <div className="text-xs text-muted-foreground font-mono bg-muted/80 px-2 py-1 rounded shrink-0">
                  {product.path}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <SEO
        title={t("sitemap.seoTitle", { ns: "common" })}
        description={t("sitemap.seoDescription", { ns: "common" })}
        keywords={t("pages:sitemap.seo.keywords")}
        canonicalUrl="https://powertonengineering.in/sitemap"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: t("sitemap.seoTitle", { ns: "common" }),
          description: t("sitemap.seoDescription", { ns: "common" }),
          publisher: {
            "@type": "Organization",
            name: t("company.name", { ns: "common" }),
            url: "https://powertonengineering.in",
          },
          mainEntity: {
            "@type": "SiteNavigationElement",
            name: t("sitemap.seoTitle", { ns: "common" }),
            description: t("sitemap.seoDescription", { ns: "common" }),
          },
        }}
      />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {t("sitemap.title", { ns: "common" })}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("sitemap.description", { ns: "common" })}
              </p>
            </div>

            {/* Page Sections */}
            <div className="space-y-8">
              {/* Main Pages */}
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  {siteStructure.main.icon}
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                    {siteStructure.main.section}
                  </h2>
                </div>
                <div className="flex flex-col gap-4">
                  {siteStructure.main.routes.map(renderRoute)}
                </div>
              </div>

              {/* Services & Projects */}
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  {siteStructure.services.icon}
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                    {siteStructure.services.section}
                  </h2>
                </div>
                <div className="flex flex-col gap-4">
                  {siteStructure.services.routes.map(renderRoute)}
                </div>
              </div>

              {/* Products */}
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  {siteStructure.products.icon}
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                    {siteStructure.products.section}
                  </h2>
                </div>

                {/* Main Product Pages */}
                <div className="flex flex-col gap-4 mb-6">
                  {siteStructure.products.routes.map(renderRoute)}
                </div>

                {/* Product Categories */}
                <div className="border-t border-border pt-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <TreePine className="w-5 h-5 text-primary" />
                    {t("quickActions.productCategories", { ns: "common" })}
                  </h3>
                  <div className="flex flex-col gap-6">
                    {siteStructure.products.categories.map(
                      (category, categoryIndex) =>
                        renderProductCategory(category, categoryIndex),
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-12 p-6 bg-muted rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {t("quickActions.title", { ns: "common" })}
              </h3>
              <p className="text-muted-foreground mb-4">
                {t("quickActions.subtitle", { ns: "common" })}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <div className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors cursor-pointer">
                    <Mail className="w-4 h-4 mr-2" />
                    {t("quickActions.contactUs", { ns: "common" })}
                  </div>
                </Link>
                <Link href="/quote">
                  <div className="inline-flex items-center justify-center px-6 py-3 border-2 border-foreground hover:border-primary text-foreground hover:bg-primary hover:text-white rounded-lg transition-colors cursor-pointer">
                    <Calculator className="w-4 h-4 mr-2" />
                    {t("quickActions.requestQuote", { ns: "common" })}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
