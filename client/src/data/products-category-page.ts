import { TFunction } from "i18next";
import {
  LucideIcon,
  Cpu,
  Monitor,
  Settings,
  Database,
  Fan,
  Wind,
  Droplet,
  Zap,
  Cable,
  Shield,
  Power,
  Wrench,
  Drill,
  Scissors,
  Construction,
  HardHat,
  Thermometer,
  Radio,
  ToggleLeft,
  Gauge,
  FlaskConical,
  BarChart3,
  Search,
  Activity,
  RotateCcw,
  Sun,
  Home,
  Battery,
  ShieldCheck,
  AlertTriangle,
} from "lucide-react";

// Import background images
import automationBgImage from "@assets/generated_images/Industrial_PLC_Control_Panel_54555fe9.png";
import bldcBgImage from "@assets/generated_images/BLDC_Motor_Systems_a48f6e6f.png";
import electricalBgImage from "@assets/generated_images/Electrical_Components_Warehouse_31ec85d7.png";
import instrumentationLabImage from "@assets/generated_images/Instrumentation_components_laboratory_58f97192.png";
import measurementLabImage from "@assets/generated_images/Precision_measurement_instruments_lab_b82030f8.png";
import pumpSparesImage from "@assets/generated_images/Industrial_pump_spare_parts_8de15f4f.png";
import safetyEquipmentImage from "@assets/generated_images/Industrial_safety_equipment_showcase_ef36d76c.png";
import solarProductsImage from "@assets/generated_images/Solar_products_technology_showcase_82907203.png";

export interface ProductSubcategory {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export interface ProductCategoryData {
  slug: string;
  title: string;
  description: string;
  backgroundImage: string;
  badges: string[];
  sectionTitle: string;
  gridCols: string; // Tailwind grid classes
  subcategories: ProductSubcategory[];
  cta: {
    title: string;
    description: string;
    contactButtonText: string;
  };
}

// Icon mapping for subcategories
const iconMapping: Record<string, LucideIcon> = {
  "sensors-transducers": Thermometer,
  "transmitters-flow-meters": Radio,
  "switches-indicators": ToggleLeft,
  "valves-actuators": Gauge,
  analyzers: FlaskConical,
  "instrument-transformers": Zap,
  "electrical-cables": Cable,
  "instrumentation-cables": Cable,
  "connectors-terminals": Zap,
  "circuit-breakers-fuses": Shield,
  "power-supplies": Power,
  "enclosures-cabinets": Shield,
  "heating-elements-appliances": Zap,
  "contactors-relays": Zap,
  "transformers-power-devices": Power,
  "industrial-lighting": Sun,
  "solar-panels": Sun,
  "solar-inverters": Zap,
  plcs: Cpu,
  scada: Monitor,
  dcs: Database,
  hmi: Settings,
  "motor-controllers-drives": Settings,
  "surge-protectors": Zap,
  "grounding-systems": Shield,
  "safety-relays-switches": ShieldCheck,
  "intrinsically-safe-equipment": AlertTriangle,
  "safety-equipment": HardHat,
  "protection-relays": ShieldCheck,
  "centrifugal-pumps": RotateCcw,
  "diaphragm-pumps": Droplet,
  "gear-pumps": Settings,
  "pump-parts-spares": Wrench,
  "hand-tools": Wrench,
  "power-tools": Drill,
  "cutting-tools": Scissors,
  "lifting-equipment": Construction,
  multimeters: Zap,
  "power-quality-analyzers": Activity,
  "calibration-equipment": Settings,
  "panel-meters-indicators": BarChart3,
  "bldc-cooler-exhaust-motor": Wind,
  "bldc-ceiling-fan": Fan,
  "bldc-submersible-surface-pump": Droplet,
  "bldc-table-fan-wall-fan-motor": Zap,
  "io-modules": Cpu,
  "insulators-insulation-materials": Shield,
};

// Category configuration with background images and grid layouts
const categoryConfig: Record<
  string,
  { backgroundImage: string; gridCols: string }
> = {
  "instrumentation-accessories": {
    backgroundImage: instrumentationLabImage,
    gridCols: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  },
  "electrical-accessories": {
    backgroundImage: electricalBgImage,
    gridCols: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  },
  "electrical-components": {
    backgroundImage: electricalBgImage,
    gridCols: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  },
  "solar-products": {
    backgroundImage: solarProductsImage,
    gridCols: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  },
  "automation-control-systems": {
    backgroundImage: automationBgImage,
    gridCols: "grid-cols-1 md:grid-cols-2 lg:grid-cols-2",
  },
  "safety-protective-devices": {
    backgroundImage: safetyEquipmentImage,
    gridCols: "grid-cols-1 md:grid-cols-2 lg:grid-cols-2",
  },
  "mechanical-pumps-spares": {
    backgroundImage: pumpSparesImage,
    gridCols: "grid-cols-1 md:grid-cols-2 lg:grid-cols-2",
  },
  "industrial-measuring-tools": {
    backgroundImage: measurementLabImage,
    gridCols: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  },
  "bldc": {
    backgroundImage: bldcBgImage,
    gridCols: "grid-cols-1 md:grid-cols-2 lg:grid-cols-2",
  },
};

// Function to get product categories data with translations
export const getProductCategoriesData = (
  t: TFunction
): ProductCategoryData[] => {
  const categorySlugs = Object.keys(categoryConfig);

  return categorySlugs.map((slug) => {
    const categoryKey = `products-data:categories.${slug}`;
    const config = categoryConfig[slug];

    // Get subcategory data from translations
    const subcategoriesData = t(`${categoryKey}.subcategories`, {
      returnObjects: true,
    }) as Record<
      string,
      { title: string; description: string; features: string[] }
    >;

    const subcategories: ProductSubcategory[] = Object.entries(
      subcategoriesData
    ).map(([id, data]) => ({
      id,
      title: data.title,
      description: data.description,
      icon: iconMapping[id] || Settings,
      features: data.features,
    }));

    return {
      slug,
      title: t(`${categoryKey}.title`),
      description: t(`${categoryKey}.description`),
      backgroundImage: config.backgroundImage,
      badges: t(`${categoryKey}.badges`, { returnObjects: true }) as string[],
      sectionTitle: t(`${categoryKey}.sectionTitle`),
      gridCols: config.gridCols,
      subcategories,
      cta: {
        title: t(`${categoryKey}.cta.title`),
        description: t(`${categoryKey}.cta.description`),
        contactButtonText: t(`${categoryKey}.cta.contactButtonText`),
      },
    };
  });
};

// Helper function to get category by slug
export const getCategoryBySlug = (
  slug: string,
  t: TFunction
): ProductCategoryData | undefined => {
  const categories = getProductCategoriesData(t);
  return categories.find((category) => category.slug === slug);
};

// Get all category slugs for routing
export const getAllCategorySlugs = (): string[] => {
  return Object.keys(categoryConfig);
};
