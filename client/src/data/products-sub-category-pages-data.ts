import {
  LucideIcon,
  Thermometer,
  Radio,
  Cpu,
  ToggleLeft,
  Gauge,
  FlaskConical,
  Zap,
  Cable,
  Shield,
  Power,
  HardHat,
  Activity,
  BarChart3,
  Search,
  Settings,
  RotateCcw,
  Droplet,
  Wrench,
  Hammer,
  Drill,
  Scissors,
  Construction,
  Fan,
  Wind,
  Sun,
  Battery,
  ShieldCheck,
  AlertTriangle,
  Monitor,
  Database,
  Droplets,
  Target,
} from "lucide-react";

// Import background images
import sensorsBgImage from "@assets/generated_images/Industrial_Sensors_Setup_491af3bc.png";
import transmittersImage from "@assets/generated_images/Transmitters_Electronics_Facility_2d679230.png";
import switchesImage from "@assets/generated_images/Industrial_Switches_Display_465e5621.png";
import valvesImage from "@assets/generated_images/Industrial_valves_actuators_laboratory_c6f8afe0.png";
import cablesWiresImage from "@assets/generated_images/Electrical_Components_Warehouse_31ec85d7.png";
import connectorsTerminalsImage from "@assets/generated_images/Electrical_connectors_terminals_warehouse_6cb67d77.png";
import circuitBreakersImage from "@assets/generated_images/Circuit_breakers_fuses_control_6ca48d78.png";
import powerSuppliesImage from "@assets/generated_images/Power_supplies_enclosures_lab_9fb504b1.png";
import enclosuresImage from "@assets/generated_images/Electrical_enclosures_cabinets_showroom_20aba9a2.png";
import heatingElementsImage from "@assets/generated_images/Industrial_heating_elements_workshop_0ec53057.png";
import multimetersImage from "@assets/generated_images/Measurement_instruments_product_showcase_9fe64a2b.png";
import powerQualityAnalyzersImage from "@assets/generated_images/Process_Analyzers_Laboratory_Environment_e98f5ca6.png";
import calibrationImage from "@assets/generated_images/Calibration_testing_laboratory_0ac0492b.png";
import plcsImage from "@assets/generated_images/Industrial_PLC_Control_Panel_54555fe9.png";
import scadaImage from "@assets/generated_images/SCADA_Control_Room_1f4824e2.png";
import dcsImage from "@assets/generated_images/DCS_distributed_control_system_732ce9c2.png";
import hmiImage from "@assets/generated_images/HMI_touchscreen_control_room_35274d6e.png";
import surgeProtectorsImage from "@assets/generated_images/Industrial_safety_equipment_showcase_ef36d76c.png";
import safetyRelaysImage from "@assets/generated_images/Safety_protective_devices_showcase_5e4ee724.png";
import intrinsicallySafeImage from "@assets/generated_images/Intrinsically_safe_equipment_warehouse_f23e1edb.png";
import centrifugalPumpsImage from "@assets/generated_images/Centrifugal_pump_systems_facility_c4d8567a.png";
import diaphragmPumpsImage from "@assets/generated_images/Industrial_Pumps_Systems_b0701872.png";
import gearPumpsImage from "@assets/generated_images/Industrial_Pumps_Systems_b0701872.png";
import pumpSparesImage from "@assets/generated_images/Industrial_pump_spare_parts_8de15f4f.png";
import handToolsImage from "@assets/generated_images/Industrial_Tools_Workshop_a055c619.png";
import powerToolsImage from "@assets/generated_images/Industrial_tools_equipment_workshop_19bdfbd7.png";
import cuttingToolsImage from "@assets/generated_images/Waterjet_cutting_systems_workshop_53180ed7.png";
import liftingEquipmentImage from "@assets/generated_images/Industrial_lifting_equipment_warehouse_d8f41d49.png";
import safetyEquipmentImage from "@assets/generated_images/Safety_Equipment_Display_ed04b621.png";
import bldcCeilingFanImage from "@assets/generated_images/BLDC_products_home_section_e04e1480.png";
import bldcCoolerMotorImage from "@assets/generated_images/BLDC_motor_manufacturing_facility_76f1e316.png";
import bldcSubmersiblePumpImage from "@assets/generated_images/BLDC_Motor_Systems_Showcase_3379f405.png";
import bldcTableFanImage from "@assets/generated_images/BLDC_Motor_Systems_a48f6e6f.png";
import powerQualityAnalyzerImage from "@assets/generated_images/Power_quality_analyzer_facility_be633cad.png";
import scadaControlRoomImage from "@assets/generated_images/SCADA_control_room_setup_fe115ec5.png";
import dcsControlSystemImage from "@assets/generated_images/DCS_control_system_facility_634dd84a.png";
import surgeProtectorsElectricalImage from "@assets/generated_images/Surge_protectors_electrical_showcase_ade53f8f.png";
import groundingSystemsImage from "@assets/generated_images/Grounding_systems_installation_site_70682d06.png";
import safetyRelaysSwitchesImage from "@assets/generated_images/Safety_relays_switches_display_3a5fb27b.png";
import pumpSparesWarehouseImage from "@assets/generated_images/Pump_spare_parts_warehouse_a98e9c93.png";
import handToolsWorkshopImage from "@assets/generated_images/Hand_tools_workshop_display_a78589dc.png";
import powerToolsShowcaseImage from "@assets/generated_images/Power_tools_showcase_workshop_cf5982b0.png";
import cuttingToolsDisplayImage from "@assets/generated_images/Cutting_tools_display_showcase_8c54bcfa.png";
import liftingEquipmentWarehouseImage from "@assets/generated_images/Lifting_equipment_warehouse_facility_337cd4dc.png";
import solarPanelsImage from "@assets/generated_images/Solar_products_technology_showcase_82907203.png";
import solarInvertersImage from "@assets/generated_images/Solar_Energy_Systems_b0a2f025.png";
import ioModulesImage from "@assets/generated_images/Input_Output_Modules_Display_5b91a43f.png";
import insulatorsImage from "@assets/generated_images/Electrical_Insulators_Product_Display_139f1d29.png";
import instrumentationCablesImage from "@assets/generated_images/Industrial_Instrumentation_Cables_Display_aa3222a3.png";
import instrumentTransformersImage from "@assets/generated_images/Instrument_Transformers_Professional_Display_eb6a965a.png";
import enclosuresCabinetsImage from "@assets/generated_images/Electrical_Enclosures_and_Cabinets_Display_da0e8bec.png";
import contactorsRelaysImage from "@assets/generated_images/Contactors_and_Relays_Product_Display_7f276525.png";
import protectionRelaysImage from "@assets/generated_images/Protection_Relays_Equipment_Display_df4987f5.png";
import transformersPowerDevicesImage from "@assets/generated_images/Transformers_and_Power_Devices_Display_6258bb6d.png";
import motorControllersDrivesImage from "@assets/generated_images/Motor_Controllers_and_Drives_Display_39531b9e.png";
import panelMetersIndicatorsImage from "@assets/generated_images/Panel_Meters_and_Indicators_Display_c3320940.png";
import industrialLightingImage from "@assets/generated_images/Industrial_LED_Lighting_Display_d9444854.png";

export interface ProductSubCategoryData {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  parentCategory: string;
  parentCategoryTitle: string;
  icon: LucideIcon;
  keyBenefits: string[];
  specifications: string[];
  applications: string[];
  industries: string[];
  features: string[];
  certifications: string[];
  seo: {
    title: string;
    description: string;
    keywords: string;
    canonicalUrl: string;
  };
}

export const getProductsSubCategoryData = (
  t: any
): ProductSubCategoryData[] => [
  // Instrumentation Accessories
  {
    slug: "sensors-transducers",
    title: t("products-data:subcategories.sensors-transducers.title"),
    shortDescription: t(
      "products-data:subcategories.sensors-transducers.shortDescription"
    ),
    fullDescription: t(
      "products-data:subcategories.sensors-transducers.fullDescription"
    ),
    image: sensorsBgImage,
    parentCategory: "/products/instrumentation-accessories",
    parentCategoryTitle: t(
      "products-data:subcategories.sensors-transducers.parentCategoryTitle"
    ),
    icon: Thermometer,
    keyBenefits: t(
      "products-data:subcategories.sensors-transducers.keyBenefits",
      { returnObjects: true }
    ),
    specifications: t(
      "products-data:subcategories.sensors-transducers.specifications",
      { returnObjects: true }
    ),
    applications: t(
      "products-data:subcategories.sensors-transducers.applications",
      { returnObjects: true }
    ),
    industries: t(
      "products-data:subcategories.sensors-transducers.industries",
      { returnObjects: true }
    ),
    features: t("products-data:subcategories.sensors-transducers.features", {
      returnObjects: true,
    }),
    certifications: t(
      "products-data:subcategories.sensors-transducers.certifications",
      { returnObjects: true }
    ),
    seo: {
      title: t("products-data:subcategories.sensors-transducers.seo.title"),
      description: t(
        "products-data:subcategories.sensors-transducers.seo.description"
      ),
      keywords: t(
        "products-data:subcategories.sensors-transducers.seo.keywords"
      ),
      canonicalUrl:
        "https://powertonengineering.in/products/instrumentation-accessories/sensors-transducers",
    },
  },
  {
    slug: "transmitters-flow-meters",
    title: t("products-data:subcategories.transmitters-flow-meters.title"),
    shortDescription: t(
      "products-data:subcategories.transmitters-flow-meters.shortDescription"
    ),
    fullDescription: t(
      "products-data:subcategories.transmitters-flow-meters.fullDescription"
    ),
    image: transmittersImage,
    parentCategory: "/products/instrumentation-accessories",
    parentCategoryTitle: t(
      "products-data:subcategories.transmitters-flow-meters.parentCategoryTitle"
    ),
    icon: Radio,
    keyBenefits: t(
      "products-data:subcategories.transmitters-flow-meters.keyBenefits",
      { returnObjects: true }
    ),
    specifications: t(
      "products-data:subcategories.transmitters-flow-meters.specifications",
      { returnObjects: true }
    ),
    applications: t(
      "products-data:subcategories.transmitters-flow-meters.applications",
      { returnObjects: true }
    ),
    industries: t(
      "products-data:subcategories.transmitters-flow-meters.industries",
      { returnObjects: true }
    ),
    features: t(
      "products-data:subcategories.transmitters-flow-meters.features",
      { returnObjects: true }
    ),
    certifications: t(
      "products-data:subcategories.transmitters-flow-meters.certifications",
      { returnObjects: true }
    ),
    seo: {
      title: t(
        "products-data:subcategories.transmitters-flow-meters.seo.title"
      ),
      description: t(
        "products-data:subcategories.transmitters-flow-meters.seo.description"
      ),
      keywords: t(
        "products-data:subcategories.transmitters-flow-meters.seo.keywords"
      ),
      canonicalUrl:
        "https://powertonengineering.in/products/instrumentation-accessories/transmitters-flow-meters",
    },
  },
  {
    slug: "switches-indicators",
    title: t("products-data:subcategories.switches-indicators.title"),
    shortDescription: t(
      "products-data:subcategories.switches-indicators.shortDescription"
    ),
    fullDescription: t(
      "products-data:subcategories.switches-indicators.fullDescription"
    ),
    image: switchesImage,
    parentCategory: "/products/instrumentation-accessories",
    parentCategoryTitle: t(
      "products-data:subcategories.switches-indicators.parentCategoryTitle"
    ),
    icon: ToggleLeft,
    keyBenefits: t(
      "products-data:subcategories.switches-indicators.keyBenefits",
      { returnObjects: true }
    ),
    specifications: t(
      "products-data:subcategories.switches-indicators.specifications",
      { returnObjects: true }
    ),
    applications: t(
      "products-data:subcategories.switches-indicators.applications",
      { returnObjects: true }
    ),
    industries: t(
      "products-data:subcategories.switches-indicators.industries",
      { returnObjects: true }
    ),
    features: t("products-data:subcategories.switches-indicators.features", {
      returnObjects: true,
    }),
    certifications: t(
      "products-data:subcategories.switches-indicators.certifications",
      { returnObjects: true }
    ),
    seo: {
      title: t("products-data:subcategories.switches-indicators.seo.title"),
      description: t(
        "products-data:subcategories.switches-indicators.seo.description"
      ),
      keywords: t(
        "products-data:subcategories.switches-indicators.seo.keywords"
      ),
      canonicalUrl:
        "https://powertonengineering.in/products/instrumentation-accessories/switches-indicators",
    },
  },
  {
    slug: "valves-actuators",
    title: t("products-data:subcategories.valves-actuators.title"),
    shortDescription: t(
      "products-data:subcategories.valves-actuators.shortDescription"
    ),
    fullDescription: t(
      "products-data:subcategories.valves-actuators.fullDescription"
    ),
    image: valvesImage,
    parentCategory: "/products/instrumentation-accessories",
    parentCategoryTitle: t(
      "products-data:subcategories.valves-actuators.parentCategoryTitle"
    ),
    icon: Gauge,
    keyBenefits: t("products-data:subcategories.valves-actuators.keyBenefits", {
      returnObjects: true,
    }),
    specifications: t(
      "products-data:subcategories.valves-actuators.specifications",
      { returnObjects: true }
    ),
    applications: t(
      "products-data:subcategories.valves-actuators.applications",
      { returnObjects: true }
    ),
    industries: t("products-data:subcategories.valves-actuators.industries", {
      returnObjects: true,
    }),
    features: t("products-data:subcategories.valves-actuators.features", {
      returnObjects: true,
    }),
    certifications: t(
      "products-data:subcategories.valves-actuators.certifications",
      { returnObjects: true }
    ),
    seo: {
      title: t("products-data:subcategories.valves-actuators.seo.title"),
      description: t(
        "products-data:subcategories.valves-actuators.seo.description"
      ),
      keywords: t("products-data:subcategories.valves-actuators.seo.keywords"),
      canonicalUrl:
        "https://powertonengineering.in/products/instrumentation-accessories/valves-actuators",
    },
  },
  {
    slug: "analyzers",
    title: t("products-data:subcategories.analyzers.title"),
    shortDescription: t(
      "products-data:subcategories.analyzers.shortDescription"
    ),
    fullDescription: t("products-data:subcategories.analyzers.fullDescription"),
    image: powerQualityAnalyzersImage,
    parentCategory: "/products/instrumentation-accessories",
    parentCategoryTitle: t(
      "products-data:subcategories.analyzers.parentCategoryTitle"
    ),
    icon: FlaskConical,
    keyBenefits: t("products-data:subcategories.analyzers.keyBenefits", {
      returnObjects: true,
    }),
    specifications: t("products-data:subcategories.analyzers.specifications", {
      returnObjects: true,
    }),
    applications: t("products-data:subcategories.analyzers.applications", {
      returnObjects: true,
    }),
    industries: t("products-data:subcategories.analyzers.industries", {
      returnObjects: true,
    }),
    features: t("products-data:subcategories.analyzers.features", {
      returnObjects: true,
    }),
    certifications: t("products-data:subcategories.analyzers.certifications", {
      returnObjects: true,
    }),
    seo: {
      title: t("products-data:subcategories.analyzers.seo.title"),
      description: t("products-data:subcategories.analyzers.seo.description"),
      keywords: t("products-data:subcategories.analyzers.seo.keywords"),
      canonicalUrl:
        "https://powertonengineering.in/products/instrumentation-accessories/analyzers",
    },
  },
  {
    slug: "instrument-transformers",
    title: t("products-data:subcategories.instrument-transformers.title"),
    shortDescription: t(
      "products-data:subcategories.instrument-transformers.shortDescription"
    ),
    fullDescription: t(
      "products-data:subcategories.instrument-transformers.fullDescription"
    ),
    image: instrumentTransformersImage,
    parentCategory: "/products/instrumentation-accessories",
    parentCategoryTitle: t(
      "products-data:subcategories.instrument-transformers.parentCategoryTitle"
    ),
    icon: Zap,
    keyBenefits: t("products-data:subcategories.instrument-transformers.keyBenefits", {
      returnObjects: true,
    }),
    specifications: t(
      "products-data:subcategories.instrument-transformers.specifications",
      { returnObjects: true }
    ),
    applications: t("products-data:subcategories.instrument-transformers.applications", {
      returnObjects: true,
    }),
    industries: t("products-data:subcategories.instrument-transformers.industries", {
      returnObjects: true,
    }),
    features: t("products-data:subcategories.instrument-transformers.features", {
      returnObjects: true,
    }),
    certifications: t(
      "products-data:subcategories.instrument-transformers.certifications",
      { returnObjects: true }
    ),
    seo: {
      title: t("products-data:subcategories.instrument-transformers.seo.title"),
      description: t(
        "products-data:subcategories.instrument-transformers.seo.description"
      ),
      keywords: t("products-data:subcategories.instrument-transformers.seo.keywords"),
      canonicalUrl:
        "https://powertonengineering.in/products/instrumentation-accessories/instrument-transformers",
    },
  },

  // Electrical Components
  {
    slug: "electrical-cables",
    title: t("products-data:subcategories.electrical-cables.title"),
    shortDescription: t(
      "products-data:subcategories.electrical-cables.shortDescription"
    ),
    fullDescription: t(
      "products-data:subcategories.electrical-cables.fullDescription"
    ),
    image: cablesWiresImage,
    parentCategory: "/products/electrical-components",
    parentCategoryTitle: t(
      "products-data:subcategories.electrical-cables.parentCategoryTitle"
    ),
    icon: Cable,
    keyBenefits: t("products-data:subcategories.electrical-cables.keyBenefits", {
      returnObjects: true,
    }),
    specifications: t(
      "products-data:subcategories.electrical-cables.specifications",
      { returnObjects: true }
    ),
    applications: t("products-data:subcategories.electrical-cables.applications", {
      returnObjects: true,
    }),
    industries: t("products-data:subcategories.electrical-cables.industries", {
      returnObjects: true,
    }),
    features: t("products-data:subcategories.electrical-cables.features", {
      returnObjects: true,
    }),
    certifications: t(
      "products-data:subcategories.electrical-cables.certifications",
      { returnObjects: true }
    ),
    seo: {
      title: t("products-data:subcategories.electrical-cables.seo.title"),
      description: t(
        "products-data:subcategories.electrical-cables.seo.description"
      ),
      keywords: t("products-data:subcategories.electrical-cables.seo.keywords"),
      canonicalUrl:
        "https://powertonengineering.in/products/electrical-components/electrical-cables",
    },
  },
  {
    slug: "instrumentation-cables",
    title: t("products-data:subcategories.instrumentation-cables.title"),
    shortDescription: t(
      "products-data:subcategories.instrumentation-cables.shortDescription"
    ),
    fullDescription: t(
      "products-data:subcategories.instrumentation-cables.fullDescription"
    ),
    image: instrumentationCablesImage,
    parentCategory: "/products/instrumentation-accessories",
    parentCategoryTitle: t(
      "products-data:subcategories.instrumentation-cables.parentCategoryTitle"
    ),
    icon: Cable,
    keyBenefits: t("products-data:subcategories.instrumentation-cables.keyBenefits", {
      returnObjects: true,
    }),
    specifications: t(
      "products-data:subcategories.instrumentation-cables.specifications",
      { returnObjects: true }
    ),
    applications: t("products-data:subcategories.instrumentation-cables.applications", {
      returnObjects: true,
    }),
    industries: t("products-data:subcategories.instrumentation-cables.industries", {
      returnObjects: true,
    }),
    features: t("products-data:subcategories.instrumentation-cables.features", {
      returnObjects: true,
    }),
    certifications: t(
      "products-data:subcategories.instrumentation-cables.certifications",
      { returnObjects: true }
    ),
    seo: {
      title: t("products-data:subcategories.instrumentation-cables.seo.title"),
      description: t(
        "products-data:subcategories.instrumentation-cables.seo.description"
      ),
      keywords: t("products-data:subcategories.instrumentation-cables.seo.keywords"),
      canonicalUrl:
        "https://powertonengineering.in/products/instrumentation-accessories/instrumentation-cables",
    },
  },
  {
    slug: "contactors-relays",
    title: t("products-data:subcategories.contactors-relays.title"),
    shortDescription: t(
      "products-data:subcategories.contactors-relays.shortDescription"
    ),
    fullDescription: t(
      "products-data:subcategories.contactors-relays.fullDescription"
    ),
    image: contactorsRelaysImage,
    parentCategory: "/products/electrical-accessories",
    parentCategoryTitle: t(
      "products-data:subcategories.contactors-relays.parentCategoryTitle"
    ),
    icon: Zap,
    keyBenefits: t("products-data:subcategories.contactors-relays.keyBenefits", {
      returnObjects: true,
    }),
    specifications: t(
      "products-data:subcategories.contactors-relays.specifications",
      { returnObjects: true }
    ),
    applications: t("products-data:subcategories.contactors-relays.applications", {
      returnObjects: true,
    }),
    industries: t("products-data:subcategories.contactors-relays.industries", {
      returnObjects: true,
    }),
    features: t("products-data:subcategories.contactors-relays.features", {
      returnObjects: true,
    }),
    certifications: t(
      "products-data:subcategories.contactors-relays.certifications",
      { returnObjects: true }
    ),
    seo: {
      title: t("products-data:subcategories.contactors-relays.seo.title"),
      description: t(
        "products-data:subcategories.contactors-relays.seo.description"
      ),
      keywords: t("products-data:subcategories.contactors-relays.seo.keywords"),
      canonicalUrl:
        "https://powertonengineering.in/products/electrical-accessories/contactors-relays",
    },
  },
  {
    slug: "transformers-power-devices",
    title: t("products-data:subcategories.transformers-power-devices.title"),
    shortDescription: t(
      "products-data:subcategories.transformers-power-devices.shortDescription"
    ),
    fullDescription: t(
      "products-data:subcategories.transformers-power-devices.fullDescription"
    ),
    image: transformersPowerDevicesImage,
    parentCategory: "/products/electrical-accessories",
    parentCategoryTitle: t(
      "products-data:subcategories.transformers-power-devices.parentCategoryTitle"
    ),
    icon: Power,
    keyBenefits: t("products-data:subcategories.transformers-power-devices.keyBenefits", {
      returnObjects: true,
    }),
    specifications: t(
      "products-data:subcategories.transformers-power-devices.specifications",
      { returnObjects: true }
    ),
    applications: t("products-data:subcategories.transformers-power-devices.applications", {
      returnObjects: true,
    }),
    industries: t("products-data:subcategories.transformers-power-devices.industries", {
      returnObjects: true,
    }),
    features: t("products-data:subcategories.transformers-power-devices.features", {
      returnObjects: true,
    }),
    certifications: t(
      "products-data:subcategories.transformers-power-devices.certifications",
      { returnObjects: true }
    ),
    seo: {
      title: t("products-data:subcategories.transformers-power-devices.seo.title"),
      description: t(
        "products-data:subcategories.transformers-power-devices.seo.description"
      ),
      keywords: t("products-data:subcategories.transformers-power-devices.seo.keywords"),
      canonicalUrl:
        "https://powertonengineering.in/products/electrical-accessories/transformers-power-devices",
    },
  },
  {
    slug: "industrial-lighting",
    title: t("products-data:subcategories.industrial-lighting.title"),
    shortDescription: t(
      "products-data:subcategories.industrial-lighting.shortDescription"
    ),
    fullDescription: t(
      "products-data:subcategories.industrial-lighting.fullDescription"
    ),
    image: industrialLightingImage,
    parentCategory: "/products/electrical-accessories",
    parentCategoryTitle: t(
      "products-data:subcategories.industrial-lighting.parentCategoryTitle"
    ),
    icon: Sun,
    keyBenefits: t("products-data:subcategories.industrial-lighting.keyBenefits", {
      returnObjects: true,
    }),
    specifications: t(
      "products-data:subcategories.industrial-lighting.specifications",
      { returnObjects: true }
    ),
    applications: t("products-data:subcategories.industrial-lighting.applications", {
      returnObjects: true,
    }),
    industries: t("products-data:subcategories.industrial-lighting.industries", {
      returnObjects: true,
    }),
    features: t("products-data:subcategories.industrial-lighting.features", {
      returnObjects: true,
    }),
    certifications: t(
      "products-data:subcategories.industrial-lighting.certifications",
      { returnObjects: true }
    ),
    seo: {
      title: t("products-data:subcategories.industrial-lighting.seo.title"),
      description: t(
        "products-data:subcategories.industrial-lighting.seo.description"
      ),
      keywords: t("products-data:subcategories.industrial-lighting.seo.keywords"),
      canonicalUrl:
        "https://powertonengineering.in/products/electrical-accessories/industrial-lighting",
    },
  },
  {
    slug: "connectors-terminals",
    title: t("products-data:subcategories.connectors-terminals.title"),
    shortDescription: t(
      "products-data:subcategories.connectors-terminals.shortDescription"
    ),
    fullDescription: t(
      "products-data:subcategories.connectors-terminals.fullDescription"
    ),
    image: connectorsTerminalsImage,
    parentCategory: "/products/electrical-accessories",
    parentCategoryTitle: t(
      "products-data:subcategories.connectors-terminals.parentCategoryTitle"
    ),
    icon: Zap,
    keyBenefits: t(
      "products-data:subcategories.connectors-terminals.keyBenefits",
      { returnObjects: true }
    ),
    specifications: t(
      "products-data:subcategories.connectors-terminals.specifications",
      { returnObjects: true }
    ),
    applications: t(
      "products-data:subcategories.connectors-terminals.applications",
      { returnObjects: true }
    ),
    industries: t(
      "products-data:subcategories.connectors-terminals.industries",
      { returnObjects: true }
    ),
    features: t("products-data:subcategories.connectors-terminals.features", {
      returnObjects: true,
    }),
    certifications: t(
      "products-data:subcategories.connectors-terminals.certifications",
      { returnObjects: true }
    ),
    seo: {
      title: t("products-data:subcategories.connectors-terminals.seo.title"),
      description: t(
        "products-data:subcategories.connectors-terminals.seo.description"
      ),
      keywords: t(
        "products-data:subcategories.connectors-terminals.seo.keywords"
      ),
      canonicalUrl:
        "https://powertonengineering.in/products/electrical-components/connectors-terminals",
    },
  },
  {
    slug: "circuit-breakers-fuses",
    title: t("products-data:subcategories.circuit-breakers-fuses.title"),
    shortDescription: t(
      "products-data:subcategories.circuit-breakers-fuses.shortDescription"
    ),
    fullDescription: t(
      "products-data:subcategories.circuit-breakers-fuses.fullDescription"
    ),
    image: circuitBreakersImage,
    parentCategory: "/products/electrical-accessories",
    parentCategoryTitle: t(
      "products-data:subcategories.circuit-breakers-fuses.parentCategoryTitle"
    ),
    icon: Shield,
    keyBenefits: t(
      "products-data:subcategories.circuit-breakers-fuses.keyBenefits",
      { returnObjects: true }
    ),
    specifications: t(
      "products-data:subcategories.circuit-breakers-fuses.specifications",
      { returnObjects: true }
    ),
    applications: t(
      "products-data:subcategories.circuit-breakers-fuses.applications",
      { returnObjects: true }
    ),
    industries: t(
      "products-data:subcategories.circuit-breakers-fuses.industries",
      { returnObjects: true }
    ),
    features: t("products-data:subcategories.circuit-breakers-fuses.features", {
      returnObjects: true,
    }),
    certifications: t(
      "products-data:subcategories.circuit-breakers-fuses.certifications",
      { returnObjects: true }
    ),
    seo: {
      title: t("products-data:subcategories.circuit-breakers-fuses.seo.title"),
      description: t(
        "products-data:subcategories.circuit-breakers-fuses.seo.description"
      ),
      keywords: t(
        "products-data:subcategories.circuit-breakers-fuses.seo.keywords"
      ),
      canonicalUrl:
        "https://powertonengineering.in/products/electrical-components/circuit-breakers-fuses",
    },
  },
  {
    slug: "power-supplies",
    title: t("products-data:subcategories.power-supplies.title"),
    shortDescription: t(
      "products-data:subcategories.power-supplies.shortDescription"
    ),
    fullDescription: t(
      "products-data:subcategories.power-supplies.fullDescription"
    ),
    image: powerSuppliesImage,
    parentCategory: "/products/electrical-accessories",
    parentCategoryTitle: t(
      "products-data:subcategories.power-supplies.parentCategoryTitle"
    ),
    icon: Power,
    keyBenefits: t("products-data:subcategories.power-supplies.keyBenefits", {
      returnObjects: true,
    }),
    specifications: t(
      "products-data:subcategories.power-supplies.specifications",
      { returnObjects: true }
    ),
    applications: t("products-data:subcategories.power-supplies.applications", {
      returnObjects: true,
    }),
    industries: t("products-data:subcategories.power-supplies.industries", {
      returnObjects: true,
    }),
    features: t("products-data:subcategories.power-supplies.features", {
      returnObjects: true,
    }),
    certifications: t(
      "products-data:subcategories.power-supplies.certifications",
      { returnObjects: true }
    ),
    seo: {
      title: t("products-data:subcategories.power-supplies.seo.title"),
      description: t(
        "products-data:subcategories.power-supplies.seo.description"
      ),
      keywords: t("products-data:subcategories.power-supplies.seo.keywords"),
      canonicalUrl:
        "https://powertonengineering.in/products/electrical-accessories/power-supplies",
    },
  },
  {
    slug: "enclosures-cabinets",
    title: t("products-data:subcategories.enclosures-cabinets.title"),
    shortDescription: t(
      "products-data:subcategories.enclosures-cabinets.shortDescription"
    ),
    fullDescription: t(
      "products-data:subcategories.enclosures-cabinets.fullDescription"
    ),
    image: enclosuresImage,
    parentCategory: "/products/electrical-accessories",
    parentCategoryTitle: t(
      "products-data:subcategories.enclosures-cabinets.parentCategoryTitle"
    ),
    icon: HardHat,
    keyBenefits: t(
      "products-data:subcategories.enclosures-cabinets.keyBenefits",
      { returnObjects: true }
    ),
    specifications: t(
      "products-data:subcategories.enclosures-cabinets.specifications",
      { returnObjects: true }
    ),
    applications: t(
      "products-data:subcategories.enclosures-cabinets.applications",
      { returnObjects: true }
    ),
    industries: t(
      "products-data:subcategories.enclosures-cabinets.industries",
      { returnObjects: true }
    ),
    features: t("products-data:subcategories.enclosures-cabinets.features", {
      returnObjects: true,
    }),
    certifications: t(
      "products-data:subcategories.enclosures-cabinets.certifications",
      { returnObjects: true }
    ),
    seo: {
      title: t("products-data:subcategories.enclosures-cabinets.seo.title"),
      description: t(
        "products-data:subcategories.enclosures-cabinets.seo.description"
      ),
      keywords: t(
        "products-data:subcategories.enclosures-cabinets.seo.keywords"
      ),
      canonicalUrl:
        "https://powertonengineering.in/products/electrical-accessories/enclosures-cabinets",
    },
  },
  {
    slug: "heating-elements-appliances",
    title: t("products-data:subcategories.heating-elements-appliances.title"),
    shortDescription: t(
      "products-data:subcategories.heating-elements-appliances.shortDescription"
    ),
    fullDescription: t(
      "products-data:subcategories.heating-elements-appliances.fullDescription"
    ),
    image: heatingElementsImage,
    parentCategory: "/products/electrical-accessories",
    parentCategoryTitle: t(
      "products-data:subcategories.heating-elements-appliances.parentCategoryTitle"
    ),
    icon: Activity,
    keyBenefits: t(
      "products-data:subcategories.heating-elements-appliances.keyBenefits",
      { returnObjects: true }
    ),
    specifications: t(
      "products-data:subcategories.heating-elements-appliances.specifications",
      { returnObjects: true }
    ),
    applications: t(
      "products-data:subcategories.heating-elements-appliances.applications",
      { returnObjects: true }
    ),
    industries: t(
      "products-data:subcategories.heating-elements-appliances.industries",
      { returnObjects: true }
    ),
    features: t(
      "products-data:subcategories.heating-elements-appliances.features",
      { returnObjects: true }
    ),
    certifications: t(
      "products-data:subcategories.heating-elements-appliances.certifications",
      { returnObjects: true }
    ),
    seo: {
      title: t(
        "products-data:subcategories.heating-elements-appliances.seo.title"
      ),
      description: t(
        "products-data:subcategories.heating-elements-appliances.seo.description"
      ),
      keywords: t(
        "products-data:subcategories.heating-elements-appliances.seo.keywords"
      ),
      canonicalUrl:
        "https://powertonengineering.in/products/electrical-accessories/heating-elements-appliances",
    },
  },

  // Solar Products
  {
    slug: "solar-panels",
    title: t("products-data:subcategories.solar-panels.title"),
    shortDescription: t(
      "products-data:subcategories.solar-panels.shortDescription"
    ),
    fullDescription: t(
      "products-data:subcategories.solar-panels.fullDescription"
    ),
    image: solarPanelsImage,
    parentCategory: "/products/solar-products",
    parentCategoryTitle: t(
      "products-data:subcategories.solar-panels.parentCategoryTitle"
    ),
    icon: Sun,
    keyBenefits: t("products-data:subcategories.solar-panels.keyBenefits", {
      returnObjects: true,
    }),
    specifications: t(
      "products-data:subcategories.solar-panels.specifications",
      { returnObjects: true }
    ),
    applications: t("products-data:subcategories.solar-panels.applications", {
      returnObjects: true,
    }),
    industries: t("products-data:subcategories.solar-panels.industries", {
      returnObjects: true,
    }),
    features: t("products-data:subcategories.solar-panels.features", {
      returnObjects: true,
    }),
    certifications: t(
      "products-data:subcategories.solar-panels.certifications",
      { returnObjects: true }
    ),
    seo: {
      title: t("products-data:subcategories.solar-panels.seo.title"),
      description: t(
        "products-data:subcategories.solar-panels.seo.description"
      ),
      keywords: t("products-data:subcategories.solar-panels.seo.keywords"),
      canonicalUrl:
        "https://powertonengineering.in/products/solar-products/solar-panels",
    },
  },
  {
    slug: "solar-inverters",
    title: t("products-data:subcategories.solar-inverters.title"),
    shortDescription: t(
      "products-data:subcategories.solar-inverters.shortDescription"
    ),
    fullDescription: t(
      "products-data:subcategories.solar-inverters.fullDescription"
    ),
    image: solarInvertersImage,
    parentCategory: "/products/solar-products",
    parentCategoryTitle: t(
      "products-data:subcategories.solar-inverters.parentCategoryTitle"
    ),
    icon: Battery,
    keyBenefits: t("products-data:subcategories.solar-inverters.keyBenefits", {
      returnObjects: true,
    }),
    specifications: t(
      "products-data:subcategories.solar-inverters.specifications",
      { returnObjects: true }
    ),
    applications: t(
      "products-data:subcategories.solar-inverters.applications",
      { returnObjects: true }
    ),
    industries: t("products-data:subcategories.solar-inverters.industries", {
      returnObjects: true,
    }),
    features: t("products-data:subcategories.solar-inverters.features", {
      returnObjects: true,
    }),
    certifications: t(
      "products-data:subcategories.solar-inverters.certifications",
      { returnObjects: true }
    ),
    seo: {
      title: t("products-data:subcategories.solar-inverters.seo.title"),
      description: t(
        "products-data:subcategories.solar-inverters.seo.description"
      ),
      keywords: t("products-data:subcategories.solar-inverters.seo.keywords"),
      canonicalUrl:
        "https://powertonengineering.in/products/solar-products/solar-inverters",
    },
  },

  // Automation Control Systems
  {
    slug: "plcs",
    title: t("products-data:subcategories.plcs.title"),
    shortDescription: t("products-data:subcategories.plcs.shortDescription"),
    fullDescription: t("products-data:subcategories.plcs.fullDescription"),
    image: plcsImage,
    parentCategory: "/products/automation-control-systems",
    parentCategoryTitle: t(
      "products-data:subcategories.plcs.parentCategoryTitle"
    ),
    icon: Cpu,
    keyBenefits: t("products-data:subcategories.plcs.keyBenefits", {
      returnObjects: true,
    }),
    specifications: t("products-data:subcategories.plcs.specifications", {
      returnObjects: true,
    }),
    applications: t("products-data:subcategories.plcs.applications", {
      returnObjects: true,
    }),
    industries: t("products-data:subcategories.plcs.industries", {
      returnObjects: true,
    }),
    features: t("products-data:subcategories.plcs.features", {
      returnObjects: true,
    }),
    certifications: t("products-data:subcategories.plcs.certifications", {
      returnObjects: true,
    }),
    seo: {
      title: t("products-data:subcategories.plcs.seo.title"),
      description: t("products-data:subcategories.plcs.seo.description"),
      keywords: t("products-data:subcategories.plcs.seo.keywords"),
      canonicalUrl:
        "https://powertonengineering.in/products/automation-control-systems/plcs",
    },
  },
  {
    slug: "scada",
    title: t("products-data:subcategories.scada.title"),
    shortDescription: t("products-data:subcategories.scada.shortDescription"),
    fullDescription: t("products-data:subcategories.scada.fullDescription"),
    image: scadaControlRoomImage,
    parentCategory: "/products/automation-control-systems",
    parentCategoryTitle: t(
      "products-data:subcategories.scada.parentCategoryTitle"
    ),
    icon: Monitor,
    keyBenefits: t("products-data:subcategories.scada.keyBenefits", {
      returnObjects: true,
    }),
    specifications: t("products-data:subcategories.scada.specifications", {
      returnObjects: true,
    }),
    applications: t("products-data:subcategories.scada.applications", {
      returnObjects: true,
    }),
    industries: t("products-data:subcategories.scada.industries", {
      returnObjects: true,
    }),
    features: t("products-data:subcategories.scada.features", {
      returnObjects: true,
    }),
    certifications: t("products-data:subcategories.scada.certifications", {
      returnObjects: true,
    }),
    seo: {
      title: t("products-data:subcategories.scada.seo.title"),
      description: t("products-data:subcategories.scada.seo.description"),
      keywords: t("products-data:subcategories.scada.seo.keywords"),
      canonicalUrl:
        "https://powertonengineering.in/products/automation-control-systems/scada",
    },
  },
  {
    slug: "motor-controllers-drives",
    title: t("products-data:subcategories.motor-controllers-drives.title"),
    shortDescription: t(
      "products-data:subcategories.motor-controllers-drives.shortDescription"
    ),
    fullDescription: t(
      "products-data:subcategories.motor-controllers-drives.fullDescription"
    ),
    image: motorControllersDrivesImage,
    parentCategory: "/products/automation-control-systems",
    parentCategoryTitle: t(
      "products-data:subcategories.motor-controllers-drives.parentCategoryTitle"
    ),
    icon: Activity,
    keyBenefits: t("products-data:subcategories.motor-controllers-drives.keyBenefits", {
      returnObjects: true,
    }),
    specifications: t(
      "products-data:subcategories.motor-controllers-drives.specifications",
      { returnObjects: true }
    ),
    applications: t("products-data:subcategories.motor-controllers-drives.applications", {
      returnObjects: true,
    }),
    industries: t("products-data:subcategories.motor-controllers-drives.industries", {
      returnObjects: true,
    }),
    features: t("products-data:subcategories.motor-controllers-drives.features", {
      returnObjects: true,
    }),
    certifications: t(
      "products-data:subcategories.motor-controllers-drives.certifications",
      { returnObjects: true }
    ),
    seo: {
      title: t("products-data:subcategories.motor-controllers-drives.seo.title"),
      description: t(
        "products-data:subcategories.motor-controllers-drives.seo.description"
      ),
      keywords: t("products-data:subcategories.motor-controllers-drives.seo.keywords"),
      canonicalUrl:
        "https://powertonengineering.in/products/automation-control-systems/motor-controllers-drives",
    },
  },
  {
    slug: "dcs",
    title: t("products-data:subcategories.dcs.title"),
    shortDescription: t("products-data:subcategories.dcs.shortDescription"),
    fullDescription: t("products-data:subcategories.dcs.fullDescription"),
    image: dcsControlSystemImage,
    parentCategory: "/products/automation-control-systems",
    parentCategoryTitle: t(
      "products-data:subcategories.dcs.parentCategoryTitle"
    ),
    icon: Database,
    keyBenefits: t("products-data:subcategories.dcs.keyBenefits", {
      returnObjects: true,
    }),
    specifications: t("products-data:subcategories.dcs.specifications", {
      returnObjects: true,
    }),
    applications: t("products-data:subcategories.dcs.applications", {
      returnObjects: true,
    }),
    industries: t("products-data:subcategories.dcs.industries", {
      returnObjects: true,
    }),
    features: t("products-data:subcategories.dcs.features", {
      returnObjects: true,
    }),
    certifications: t("products-data:subcategories.dcs.certifications", {
      returnObjects: true,
    }),
    seo: {
      title: t("products-data:subcategories.dcs.seo.title"),
      description: t("products-data:subcategories.dcs.seo.description"),
      keywords: t("products-data:subcategories.dcs.seo.keywords"),
      canonicalUrl:
        "https://powertonengineering.in/products/automation-control-systems/dcs",
    },
  },
  {
    slug: "hmi",
    title: t("products-data:subcategories.hmi.title"),
    shortDescription: t("products-data:subcategories.hmi.shortDescription"),
    fullDescription: t("products-data:subcategories.hmi.fullDescription"),
    image: hmiImage,
    parentCategory: "/products/automation-control-systems",
    parentCategoryTitle: t(
      "products-data:subcategories.hmi.parentCategoryTitle"
    ),
    icon: Monitor,
    keyBenefits: t("products-data:subcategories.hmi.keyBenefits", {
      returnObjects: true,
    }),
    specifications: t("products-data:subcategories.hmi.specifications", {
      returnObjects: true,
    }),
    applications: t("products-data:subcategories.hmi.applications", {
      returnObjects: true,
    }),
    industries: t("products-data:subcategories.hmi.industries", {
      returnObjects: true,
    }),
    features: t("products-data:subcategories.hmi.features", {
      returnObjects: true,
    }),
    certifications: t("products-data:subcategories.hmi.certifications", {
      returnObjects: true,
    }),
    seo: {
      title: t("products-data:subcategories.hmi.seo.title"),
      description: t("products-data:subcategories.hmi.seo.description"),
      keywords: t("products-data:subcategories.hmi.seo.keywords"),
      canonicalUrl:
        "https://powertonengineering.in/products/automation-control-systems/hmi",
    },
  },

  // Safety & Protective Devices
  {
    slug: "surge-protectors",
    title: t("products-data:subcategories.surge-protectors.title"),
    shortDescription: t(
      "products-data:subcategories.surge-protectors.shortDescription"
    ),
    fullDescription: t(
      "products-data:subcategories.surge-protectors.fullDescription"
    ),
    image: surgeProtectorsElectricalImage,
    parentCategory: "/products/safety-protective-devices",
    parentCategoryTitle: t(
      "products-data:subcategories.surge-protectors.parentCategoryTitle"
    ),
    icon: ShieldCheck,
    keyBenefits: t("products-data:subcategories.surge-protectors.keyBenefits", {
      returnObjects: true,
    }),
    specifications: t(
      "products-data:subcategories.surge-protectors.specifications",
      { returnObjects: true }
    ),
    applications: t(
      "products-data:subcategories.surge-protectors.applications",
      { returnObjects: true }
    ),
    industries: t("products-data:subcategories.surge-protectors.industries", {
      returnObjects: true,
    }),
    features: t("products-data:subcategories.surge-protectors.features", {
      returnObjects: true,
    }),
    certifications: t(
      "products-data:subcategories.surge-protectors.certifications",
      { returnObjects: true }
    ),
    seo: {
      title: t("products-data:subcategories.surge-protectors.seo.title"),
      description: t(
        "products-data:subcategories.surge-protectors.seo.description"
      ),
      keywords: t("products-data:subcategories.surge-protectors.seo.keywords"),
      canonicalUrl:
        "https://powertonengineering.in/products/safety-protective-devices/surge-protectors",
    },
  },
  {
    slug: "grounding-systems",
    title: t("products-data:subcategories.grounding-systems.title"),
    shortDescription: t(
      "products-data:subcategories.grounding-systems.shortDescription"
    ),
    fullDescription: t(
      "products-data:subcategories.grounding-systems.fullDescription"
    ),
    image: groundingSystemsImage,
    parentCategory: "/products/safety-protective-devices",
    parentCategoryTitle: t(
      "products-data:subcategories.grounding-systems.parentCategoryTitle"
    ),
    icon: Target,
    keyBenefits: t(
      "products-data:subcategories.grounding-systems.keyBenefits",
      { returnObjects: true }
    ),
    specifications: t(
      "products-data:subcategories.grounding-systems.specifications",
      { returnObjects: true }
    ),
    applications: t(
      "products-data:subcategories.grounding-systems.applications",
      { returnObjects: true }
    ),
    industries: t("products-data:subcategories.grounding-systems.industries", {
      returnObjects: true,
    }),
    features: t("products-data:subcategories.grounding-systems.features", {
      returnObjects: true,
    }),
    certifications: t(
      "products-data:subcategories.grounding-systems.certifications",
      { returnObjects: true }
    ),
    seo: {
      title: t("products-data:subcategories.grounding-systems.seo.title"),
      description: t(
        "products-data:subcategories.grounding-systems.seo.description"
      ),
      keywords: t("products-data:subcategories.grounding-systems.seo.keywords"),
      canonicalUrl:
        "https://powertonengineering.in/products/safety-protective-devices/grounding-systems",
    },
  },
  {
    slug: "safety-relays-switches",
    title: t("products-data:subcategories.safety-relays-switches.title"),
    shortDescription: t(
      "products-data:subcategories.safety-relays-switches.shortDescription"
    ),
    fullDescription: t(
      "products-data:subcategories.safety-relays-switches.fullDescription"
    ),
    image: safetyRelaysSwitchesImage,
    parentCategory: "/products/safety-protective-devices",
    parentCategoryTitle: t(
      "products-data:subcategories.safety-relays-switches.parentCategoryTitle"
    ),
    icon: AlertTriangle,
    keyBenefits: t(
      "products-data:subcategories.safety-relays-switches.keyBenefits",
      { returnObjects: true }
    ),
    specifications: t(
      "products-data:subcategories.safety-relays-switches.specifications",
      { returnObjects: true }
    ),
    applications: t(
      "products-data:subcategories.safety-relays-switches.applications",
      { returnObjects: true }
    ),
    industries: t(
      "products-data:subcategories.safety-relays-switches.industries",
      { returnObjects: true }
    ),
    features: t("products-data:subcategories.safety-relays-switches.features", {
      returnObjects: true,
    }),
    certifications: t(
      "products-data:subcategories.safety-relays-switches.certifications",
      { returnObjects: true }
    ),
    seo: {
      title: t("products-data:subcategories.safety-relays-switches.seo.title"),
      description: t(
        "products-data:subcategories.safety-relays-switches.seo.description"
      ),
      keywords: t(
        "products-data:subcategories.safety-relays-switches.seo.keywords"
      ),
      canonicalUrl:
        "https://powertonengineering.in/products/safety-protective-devices/safety-relays-switches",
    },
  },
  {
    slug: "intrinsically-safe-equipment",
    title: t("products-data:subcategories.intrinsically-safe-equipment.title"),
    shortDescription: t(
      "products-data:subcategories.intrinsically-safe-equipment.shortDescription"
    ),
    fullDescription: t(
      "products-data:subcategories.intrinsically-safe-equipment.fullDescription"
    ),
    image: intrinsicallySafeImage,
    parentCategory: "/products/safety-protective-devices",
    parentCategoryTitle: t(
      "products-data:subcategories.intrinsically-safe-equipment.parentCategoryTitle"
    ),
    icon: ShieldCheck,
    keyBenefits: t(
      "products-data:subcategories.intrinsically-safe-equipment.keyBenefits",
      { returnObjects: true }
    ),
    specifications: t(
      "products-data:subcategories.intrinsically-safe-equipment.specifications",
      { returnObjects: true }
    ),
    applications: t(
      "products-data:subcategories.intrinsically-safe-equipment.applications",
      { returnObjects: true }
    ),
    industries: t(
      "products-data:subcategories.intrinsically-safe-equipment.industries",
      { returnObjects: true }
    ),
    features: t(
      "products-data:subcategories.intrinsically-safe-equipment.features",
      { returnObjects: true }
    ),
    certifications: t(
      "products-data:subcategories.intrinsically-safe-equipment.certifications",
      { returnObjects: true }
    ),
    seo: {
      title: t(
        "products-data:subcategories.intrinsically-safe-equipment.seo.title"
      ),
      description: t(
        "products-data:subcategories.intrinsically-safe-equipment.seo.description"
      ),
      keywords: t(
        "products-data:subcategories.intrinsically-safe-equipment.seo.keywords"
      ),
      canonicalUrl:
        "https://powertonengineering.in/products/safety-protective-devices/intrinsically-safe-equipment",
    },
  },
  {
    slug: "safety-equipment",
    title: t("products-data:subcategories.safety-equipment.title"),
    shortDescription: t(
      "products-data:subcategories.safety-equipment.shortDescription"
    ),
    fullDescription: t(
      "products-data:subcategories.safety-equipment.fullDescription"
    ),
    image: safetyEquipmentImage,
    parentCategory: "/products/safety-protective-devices",
    parentCategoryTitle: t(
      "products-data:subcategories.safety-equipment.parentCategoryTitle"
    ),
    icon: Shield,
    keyBenefits: t("products-data:subcategories.safety-equipment.keyBenefits", {
      returnObjects: true,
    }),
    specifications: t(
      "products-data:subcategories.safety-equipment.specifications",
      { returnObjects: true }
    ),
    applications: t(
      "products-data:subcategories.safety-equipment.applications",
      { returnObjects: true }
    ),
    industries: t("products-data:subcategories.safety-equipment.industries", {
      returnObjects: true,
    }),
    features: t("products-data:subcategories.safety-equipment.features", {
      returnObjects: true,
    }),
    certifications: t(
      "products-data:subcategories.safety-equipment.certifications",
      { returnObjects: true }
    ),
    seo: {
      title: t("products-data:subcategories.safety-equipment.seo.title"),
      description: t(
        "products-data:subcategories.safety-equipment.seo.description"
      ),
      keywords: t("products-data:subcategories.safety-equipment.seo.keywords"),
      canonicalUrl:
        "https://powertonengineering.in/products/safety-protective-devices/safety-equipment",
    },
  },
  {
    slug: "protection-relays",
    title: t("products-data:subcategories.protection-relays.title"),
    shortDescription: t(
      "products-data:subcategories.protection-relays.shortDescription"
    ),
    fullDescription: t(
      "products-data:subcategories.protection-relays.fullDescription"
    ),
    image: protectionRelaysImage,
    parentCategory: "/products/safety-protective-devices",
    parentCategoryTitle: t(
      "products-data:subcategories.protection-relays.parentCategoryTitle"
    ),
    icon: ShieldCheck,
    keyBenefits: t("products-data:subcategories.protection-relays.keyBenefits", {
      returnObjects: true,
    }),
    specifications: t(
      "products-data:subcategories.protection-relays.specifications",
      { returnObjects: true }
    ),
    applications: t("products-data:subcategories.protection-relays.applications", {
      returnObjects: true,
    }),
    industries: t("products-data:subcategories.protection-relays.industries", {
      returnObjects: true,
    }),
    features: t("products-data:subcategories.protection-relays.features", {
      returnObjects: true,
    }),
    certifications: t(
      "products-data:subcategories.protection-relays.certifications",
      { returnObjects: true }
    ),
    seo: {
      title: t("products-data:subcategories.protection-relays.seo.title"),
      description: t(
        "products-data:subcategories.protection-relays.seo.description"
      ),
      keywords: t("products-data:subcategories.protection-relays.seo.keywords"),
      canonicalUrl:
        "https://powertonengineering.in/products/safety-protective-devices/protection-relays",
    },
  },

  // Mechanical Pumps & Spares
  {
    slug: "centrifugal-pumps",
    title: t("products-data:subcategories.centrifugal-pumps.title"),
    shortDescription: t(
      "products-data:subcategories.centrifugal-pumps.shortDescription"
    ),
    fullDescription: t(
      "products-data:subcategories.centrifugal-pumps.fullDescription"
    ),
    image: centrifugalPumpsImage,
    parentCategory: "/products/mechanical-pumps-spares",
    parentCategoryTitle: t(
      "products-data:subcategories.centrifugal-pumps.parentCategoryTitle"
    ),
    icon: RotateCcw,
    keyBenefits: t(
      "products-data:subcategories.centrifugal-pumps.keyBenefits",
      { returnObjects: true }
    ),
    specifications: t(
      "products-data:subcategories.centrifugal-pumps.specifications",
      { returnObjects: true }
    ),
    applications: t(
      "products-data:subcategories.centrifugal-pumps.applications",
      { returnObjects: true }
    ),
    industries: t("products-data:subcategories.centrifugal-pumps.industries", {
      returnObjects: true,
    }),
    features: t("products-data:subcategories.centrifugal-pumps.features", {
      returnObjects: true,
    }),
    certifications: t(
      "products-data:subcategories.centrifugal-pumps.certifications",
      { returnObjects: true }
    ),
    seo: {
      title: t("products-data:subcategories.centrifugal-pumps.seo.title"),
      description: t(
        "products-data:subcategories.centrifugal-pumps.seo.description"
      ),
      keywords: t("products-data:subcategories.centrifugal-pumps.seo.keywords"),
      canonicalUrl:
        "https://powertonengineering.in/products/mechanical-pumps-spares/centrifugal-pumps",
    },
  },
  {
    slug: "diaphragm-pumps",
    title: t("products-data:subcategories.diaphragm-pumps.title"),
    shortDescription: t(
      "products-data:subcategories.diaphragm-pumps.shortDescription"
    ),
    fullDescription: t(
      "products-data:subcategories.diaphragm-pumps.fullDescription"
    ),
    image: diaphragmPumpsImage,
    parentCategory: "/products/mechanical-pumps-spares",
    parentCategoryTitle: t(
      "products-data:subcategories.diaphragm-pumps.parentCategoryTitle"
    ),
    icon: Droplets,
    keyBenefits: t("products-data:subcategories.diaphragm-pumps.keyBenefits", {
      returnObjects: true,
    }),
    specifications: t(
      "products-data:subcategories.diaphragm-pumps.specifications",
      { returnObjects: true }
    ),
    applications: t(
      "products-data:subcategories.diaphragm-pumps.applications",
      { returnObjects: true }
    ),
    industries: t("products-data:subcategories.diaphragm-pumps.industries", {
      returnObjects: true,
    }),
    features: t("products-data:subcategories.diaphragm-pumps.features", {
      returnObjects: true,
    }),
    certifications: t(
      "products-data:subcategories.diaphragm-pumps.certifications",
      { returnObjects: true }
    ),
    seo: {
      title: t("products-data:subcategories.diaphragm-pumps.seo.title"),
      description: t(
        "products-data:subcategories.diaphragm-pumps.seo.description"
      ),
      keywords: t("products-data:subcategories.diaphragm-pumps.seo.keywords"),
      canonicalUrl:
        "https://powertonengineering.in/products/mechanical-pumps-spares/diaphragm-pumps",
    },
  },
  {
    slug: "gear-pumps",
    title: t("products-data:subcategories.gear-pumps.title"),
    shortDescription: t(
      "products-data:subcategories.gear-pumps.shortDescription"
    ),
    fullDescription: t(
      "products-data:subcategories.gear-pumps.fullDescription"
    ),
    image: gearPumpsImage,
    parentCategory: "/products/mechanical-pumps-spares",
    parentCategoryTitle: t(
      "products-data:subcategories.gear-pumps.parentCategoryTitle"
    ),
    icon: Settings,
    keyBenefits: t("products-data:subcategories.gear-pumps.keyBenefits", {
      returnObjects: true,
    }),
    specifications: t("products-data:subcategories.gear-pumps.specifications", {
      returnObjects: true,
    }),
    applications: t("products-data:subcategories.gear-pumps.applications", {
      returnObjects: true,
    }),
    industries: t("products-data:subcategories.gear-pumps.industries", {
      returnObjects: true,
    }),
    features: t("products-data:subcategories.gear-pumps.features", {
      returnObjects: true,
    }),
    certifications: t("products-data:subcategories.gear-pumps.certifications", {
      returnObjects: true,
    }),
    seo: {
      title: t("products-data:subcategories.gear-pumps.seo.title"),
      description: t("products-data:subcategories.gear-pumps.seo.description"),
      keywords: t("products-data:subcategories.gear-pumps.seo.keywords"),
      canonicalUrl:
        "https://powertonengineering.in/products/mechanical-pumps-spares/gear-pumps",
    },
  },
  {
    slug: "pump-parts-spares",
    title: t("products-data:subcategories.pump-parts-spares.title"),
    shortDescription: t(
      "products-data:subcategories.pump-parts-spares.shortDescription"
    ),
    fullDescription: t(
      "products-data:subcategories.pump-parts-spares.fullDescription"
    ),
    image: pumpSparesWarehouseImage,
    parentCategory: "/products/mechanical-pumps-spares",
    parentCategoryTitle: t(
      "products-data:subcategories.pump-parts-spares.parentCategoryTitle"
    ),
    icon: Wrench,
    keyBenefits: t(
      "products-data:subcategories.pump-parts-spares.keyBenefits",
      { returnObjects: true }
    ),
    specifications: t(
      "products-data:subcategories.pump-parts-spares.specifications",
      { returnObjects: true }
    ),
    applications: t(
      "products-data:subcategories.pump-parts-spares.applications",
      { returnObjects: true }
    ),
    industries: t("products-data:subcategories.pump-parts-spares.industries", {
      returnObjects: true,
    }),
    features: t("products-data:subcategories.pump-parts-spares.features", {
      returnObjects: true,
    }),
    certifications: t(
      "products-data:subcategories.pump-parts-spares.certifications",
      { returnObjects: true }
    ),
    seo: {
      title: t("products-data:subcategories.pump-parts-spares.seo.title"),
      description: t(
        "products-data:subcategories.pump-parts-spares.seo.description"
      ),
      keywords: t("products-data:subcategories.pump-parts-spares.seo.keywords"),
      canonicalUrl:
        "https://powertonengineering.in/products/mechanical-pumps-spares/pump-parts-spares",
    },
  },

  // Industrial Tools
  {
    slug: "hand-tools",
    title: t("products-data:subcategories.hand-tools.title"),
    shortDescription: t(
      "products-data:subcategories.hand-tools.shortDescription"
    ),
    fullDescription: t(
      "products-data:subcategories.hand-tools.fullDescription"
    ),
    image: handToolsWorkshopImage,
    parentCategory: "/products/industrial-measuring-tools",
    parentCategoryTitle: t(
      "products-data:subcategories.hand-tools.parentCategoryTitle"
    ),
    icon: Hammer,
    keyBenefits: t("products-data:subcategories.hand-tools.keyBenefits", {
      returnObjects: true,
    }),
    specifications: t("products-data:subcategories.hand-tools.specifications", {
      returnObjects: true,
    }),
    applications: t("products-data:subcategories.hand-tools.applications", {
      returnObjects: true,
    }),
    industries: t("products-data:subcategories.hand-tools.industries", {
      returnObjects: true,
    }),
    features: t("products-data:subcategories.hand-tools.features", {
      returnObjects: true,
    }),
    certifications: t("products-data:subcategories.hand-tools.certifications", {
      returnObjects: true,
    }),
    seo: {
      title: t("products-data:subcategories.hand-tools.seo.title"),
      description: t("products-data:subcategories.hand-tools.seo.description"),
      keywords: t("products-data:subcategories.hand-tools.seo.keywords"),
      canonicalUrl:
        "https://powertonengineering.in/products/industrial-measuring-tools/hand-tools",
    },
  },
  {
    slug: "power-tools",
    title: t("products-data:subcategories.power-tools.title"),
    shortDescription: t(
      "products-data:subcategories.power-tools.shortDescription"
    ),
    fullDescription: t(
      "products-data:subcategories.power-tools.fullDescription"
    ),
    image: powerToolsShowcaseImage,
    parentCategory: "/products/industrial-measuring-tools",
    parentCategoryTitle: t(
      "products-data:subcategories.power-tools.parentCategoryTitle"
    ),
    icon: Drill,
    keyBenefits: t("products-data:subcategories.power-tools.keyBenefits", {
      returnObjects: true,
    }),
    specifications: t(
      "products-data:subcategories.power-tools.specifications",
      { returnObjects: true }
    ),
    applications: t("products-data:subcategories.power-tools.applications", {
      returnObjects: true,
    }),
    industries: t("products-data:subcategories.power-tools.industries", {
      returnObjects: true,
    }),
    features: t("products-data:subcategories.power-tools.features", {
      returnObjects: true,
    }),
    certifications: t(
      "products-data:subcategories.power-tools.certifications",
      { returnObjects: true }
    ),
    seo: {
      title: t("products-data:subcategories.power-tools.seo.title"),
      description: t("products-data:subcategories.power-tools.seo.description"),
      keywords: t("products-data:subcategories.power-tools.seo.keywords"),
      canonicalUrl:
        "https://powertonengineering.in/products/industrial-measuring-tools/power-tools",
    },
  },
  {
    slug: "cutting-tools",
    title: t("products-data:subcategories.cutting-tools.title"),
    shortDescription: t(
      "products-data:subcategories.cutting-tools.shortDescription"
    ),
    fullDescription: t(
      "products-data:subcategories.cutting-tools.fullDescription"
    ),
    image: cuttingToolsDisplayImage,
    parentCategory: "/products/industrial-measuring-tools",
    parentCategoryTitle: t(
      "products-data:subcategories.cutting-tools.parentCategoryTitle"
    ),
    icon: Scissors,
    keyBenefits: t("products-data:subcategories.cutting-tools.keyBenefits", {
      returnObjects: true,
    }),
    specifications: t(
      "products-data:subcategories.cutting-tools.specifications",
      { returnObjects: true }
    ),
    applications: t("products-data:subcategories.cutting-tools.applications", {
      returnObjects: true,
    }),
    industries: t("products-data:subcategories.cutting-tools.industries", {
      returnObjects: true,
    }),
    features: t("products-data:subcategories.cutting-tools.features", {
      returnObjects: true,
    }),
    certifications: t(
      "products-data:subcategories.cutting-tools.certifications",
      { returnObjects: true }
    ),
    seo: {
      title: t("products-data:subcategories.cutting-tools.seo.title"),
      description: t(
        "products-data:subcategories.cutting-tools.seo.description"
      ),
      keywords: t("products-data:subcategories.cutting-tools.seo.keywords"),
      canonicalUrl:
        "https://powertonengineering.in/products/industrial-measuring-tools/cutting-tools",
    },
  },
  {
    slug: "lifting-equipment",
    title: t("products-data:subcategories.lifting-equipment.title"),
    shortDescription: t(
      "products-data:subcategories.lifting-equipment.shortDescription"
    ),
    fullDescription: t(
      "products-data:subcategories.lifting-equipment.fullDescription"
    ),
    image: liftingEquipmentWarehouseImage,
    parentCategory: "/products/industrial-measuring-tools",
    parentCategoryTitle: t(
      "products-data:subcategories.lifting-equipment.parentCategoryTitle"
    ),
    icon: Construction,
    keyBenefits: t(
      "products-data:subcategories.lifting-equipment.keyBenefits",
      { returnObjects: true }
    ),
    specifications: t(
      "products-data:subcategories.lifting-equipment.specifications",
      { returnObjects: true }
    ),
    applications: t(
      "products-data:subcategories.lifting-equipment.applications",
      { returnObjects: true }
    ),
    industries: t("products-data:subcategories.lifting-equipment.industries", {
      returnObjects: true,
    }),
    features: t("products-data:subcategories.lifting-equipment.features", {
      returnObjects: true,
    }),
    certifications: t(
      "products-data:subcategories.lifting-equipment.certifications",
      { returnObjects: true }
    ),
    seo: {
      title: t("products-data:subcategories.lifting-equipment.seo.title"),
      description: t(
        "products-data:subcategories.lifting-equipment.seo.description"
      ),
      keywords: t("products-data:subcategories.lifting-equipment.seo.keywords"),
      canonicalUrl:
        "https://powertonengineering.in/products/industrial-measuring-tools/lifting-equipment",
    },
  },
  {
    slug: "multimeters",
    title: t("products-data:subcategories.multimeters.title"),
    shortDescription: t(
      "products-data:subcategories.multimeters.shortDescription"
    ),
    fullDescription: t(
      "products-data:subcategories.multimeters.fullDescription"
    ),
    image: multimetersImage,
    parentCategory: "/products/industrial-measuring-tools",
    parentCategoryTitle: t(
      "products-data:subcategories.multimeters.parentCategoryTitle"
    ),
    icon: BarChart3,
    keyBenefits: t("products-data:subcategories.multimeters.keyBenefits", {
      returnObjects: true,
    }),
    specifications: t(
      "products-data:subcategories.multimeters.specifications",
      { returnObjects: true }
    ),
    applications: t("products-data:subcategories.multimeters.applications", {
      returnObjects: true,
    }),
    industries: t("products-data:subcategories.multimeters.industries", {
      returnObjects: true,
    }),
    features: t("products-data:subcategories.multimeters.features", {
      returnObjects: true,
    }),
    certifications: t(
      "products-data:subcategories.multimeters.certifications",
      { returnObjects: true }
    ),
    seo: {
      title: t("products-data:subcategories.multimeters.seo.title"),
      description: t("products-data:subcategories.multimeters.seo.description"),
      keywords: t("products-data:subcategories.multimeters.seo.keywords"),
      canonicalUrl:
        "https://powertonengineering.in/products/industrial-measuring-tools/multimeters",
    },
  },
  {
    slug: "power-quality-analyzers",
    title: t("products-data:subcategories.power-quality-analyzers.title"),
    shortDescription: t(
      "products-data:subcategories.power-quality-analyzers.shortDescription"
    ),
    fullDescription: t(
      "products-data:subcategories.power-quality-analyzers.fullDescription"
    ),
    image: powerQualityAnalyzerImage,
    parentCategory: "/products/industrial-measuring-tools",
    parentCategoryTitle: t(
      "products-data:subcategories.power-quality-analyzers.parentCategoryTitle"
    ),
    icon: Search,
    keyBenefits: t(
      "products-data:subcategories.power-quality-analyzers.keyBenefits",
      { returnObjects: true }
    ),
    specifications: t(
      "products-data:subcategories.power-quality-analyzers.specifications",
      { returnObjects: true }
    ),
    applications: t(
      "products-data:subcategories.power-quality-analyzers.applications",
      { returnObjects: true }
    ),
    industries: t(
      "products-data:subcategories.power-quality-analyzers.industries",
      { returnObjects: true }
    ),
    features: t(
      "products-data:subcategories.power-quality-analyzers.features",
      { returnObjects: true }
    ),
    certifications: t(
      "products-data:subcategories.power-quality-analyzers.certifications",
      { returnObjects: true }
    ),
    seo: {
      title: t("products-data:subcategories.power-quality-analyzers.seo.title"),
      description: t(
        "products-data:subcategories.power-quality-analyzers.seo.description"
      ),
      keywords: t(
        "products-data:subcategories.power-quality-analyzers.seo.keywords"
      ),
      canonicalUrl:
        "https://powertonengineering.in/products/industrial-measuring-tools/power-quality-analyzers",
    },
  },
  {
    slug: "calibration-equipment",
    title: t("products-data:subcategories.calibration-equipment.title"),
    shortDescription: t(
      "products-data:subcategories.calibration-equipment.shortDescription"
    ),
    fullDescription: t(
      "products-data:subcategories.calibration-equipment.fullDescription"
    ),
    image: calibrationImage,
    parentCategory: "/products/industrial-measuring-tools",
    parentCategoryTitle: t(
      "products-data:subcategories.calibration-equipment.parentCategoryTitle"
    ),
    icon: Settings,
    keyBenefits: t(
      "products-data:subcategories.calibration-equipment.keyBenefits",
      { returnObjects: true }
    ),
    specifications: t(
      "products-data:subcategories.calibration-equipment.specifications",
      { returnObjects: true }
    ),
    applications: t(
      "products-data:subcategories.calibration-equipment.applications",
      { returnObjects: true }
    ),
    industries: t(
      "products-data:subcategories.calibration-equipment.industries",
      { returnObjects: true }
    ),
    features: t("products-data:subcategories.calibration-equipment.features", {
      returnObjects: true,
    }),
    certifications: t(
      "products-data:subcategories.calibration-equipment.certifications",
      { returnObjects: true }
    ),
    seo: {
      title: t("products-data:subcategories.calibration-equipment.seo.title"),
      description: t(
        "products-data:subcategories.calibration-equipment.seo.description"
      ),
      keywords: t(
        "products-data:subcategories.calibration-equipment.seo.keywords"
      ),
      canonicalUrl:
        "https://powertonengineering.in/products/industrial-measuring-tools/calibration-equipment",
    },
  },
  {
    slug: "panel-meters-indicators",
    title: t("products-data:subcategories.panel-meters-indicators.title"),
    shortDescription: t(
      "products-data:subcategories.panel-meters-indicators.shortDescription"
    ),
    fullDescription: t(
      "products-data:subcategories.panel-meters-indicators.fullDescription"
    ),
    image: panelMetersIndicatorsImage,
    parentCategory: "/products/industrial-measuring-tools",
    parentCategoryTitle: t(
      "products-data:subcategories.panel-meters-indicators.parentCategoryTitle"
    ),
    icon: BarChart3,
    keyBenefits: t("products-data:subcategories.panel-meters-indicators.keyBenefits", {
      returnObjects: true,
    }),
    specifications: t(
      "products-data:subcategories.panel-meters-indicators.specifications",
      { returnObjects: true }
    ),
    applications: t("products-data:subcategories.panel-meters-indicators.applications", {
      returnObjects: true,
    }),
    industries: t("products-data:subcategories.panel-meters-indicators.industries", {
      returnObjects: true,
    }),
    features: t("products-data:subcategories.panel-meters-indicators.features", {
      returnObjects: true,
    }),
    certifications: t(
      "products-data:subcategories.panel-meters-indicators.certifications",
      { returnObjects: true }
    ),
    seo: {
      title: t("products-data:subcategories.panel-meters-indicators.seo.title"),
      description: t(
        "products-data:subcategories.panel-meters-indicators.seo.description"
      ),
      keywords: t("products-data:subcategories.panel-meters-indicators.seo.keywords"),
      canonicalUrl:
        "https://powertonengineering.in/products/industrial-measuring-tools/panel-meters-indicators",
    },
  },
  // I/O Modules (Automation & Control Systems)
  {
    slug: "io-modules",
    title: t("products-data:subcategories.io-modules.title"),
    shortDescription: t("products-data:subcategories.io-modules.shortDescription"),
    fullDescription: t("products-data:subcategories.io-modules.fullDescription"),
    image: ioModulesImage,
    parentCategory: "/products/automation-control-systems",
    parentCategoryTitle: t("products-data:subcategories.io-modules.parentCategoryTitle"),
    icon: Cpu,
    keyBenefits: t("products-data:subcategories.io-modules.keyBenefits", {
      returnObjects: true,
    }),
    specifications: t("products-data:subcategories.io-modules.specifications", {
      returnObjects: true,
    }),
    applications: t("products-data:subcategories.io-modules.applications", {
      returnObjects: true,
    }),
    industries: t("products-data:subcategories.io-modules.industries", {
      returnObjects: true,
    }),
    features: t("products-data:subcategories.io-modules.features", {
      returnObjects: true,
    }),
    certifications: t("products-data:subcategories.io-modules.certifications", {
      returnObjects: true,
    }),
    seo: {
      title: t("products-data:subcategories.io-modules.seo.title"),
      description: t("products-data:subcategories.io-modules.seo.description"),
      keywords: t("products-data:subcategories.io-modules.seo.keywords"),
      canonicalUrl:
        "https://powertonengineering.in/products/automation-control-systems/io-modules",
    },
  },
  // Insulators & Insulation Materials (Electrical Accessories)
  {
    slug: "insulators-insulation-materials",
    title: t("products-data:subcategories.insulators-insulation-materials.title"),
    shortDescription: t(
      "products-data:subcategories.insulators-insulation-materials.shortDescription"
    ),
    fullDescription: t(
      "products-data:subcategories.insulators-insulation-materials.fullDescription"
    ),
    image: insulatorsImage,
    parentCategory: "/products/electrical-accessories",
    parentCategoryTitle: t(
      "products-data:subcategories.insulators-insulation-materials.parentCategoryTitle"
    ),
    icon: Shield,
    keyBenefits: t("products-data:subcategories.insulators-insulation-materials.keyBenefits", {
      returnObjects: true,
    }),
    specifications: t(
      "products-data:subcategories.insulators-insulation-materials.specifications",
      {
        returnObjects: true,
      }
    ),
    applications: t("products-data:subcategories.insulators-insulation-materials.applications", {
      returnObjects: true,
    }),
    industries: t("products-data:subcategories.insulators-insulation-materials.industries", {
      returnObjects: true,
    }),
    features: t("products-data:subcategories.insulators-insulation-materials.features", {
      returnObjects: true,
    }),
    certifications: t(
      "products-data:subcategories.insulators-insulation-materials.certifications",
      {
        returnObjects: true,
      }
    ),
    seo: {
      title: t("products-data:subcategories.insulators-insulation-materials.seo.title"),
      description: t(
        "products-data:subcategories.insulators-insulation-materials.seo.description"
      ),
      keywords: t("products-data:subcategories.insulators-insulation-materials.seo.keywords"),
      canonicalUrl:
        "https://powertonengineering.in/products/electrical-accessories/insulators-insulation-materials",
    },
  },
];

// Helper function to get product by slug
export const getProductSubCategoryBySlug = (
  slug: string,
  t: any
): ProductSubCategoryData | undefined => {
  return getProductsSubCategoryData(t).find((product) => product.slug === slug);
};

// Get all product subcategory slugs for routing
export const getAllProductSubCategorySlugs = (t: any): string[] => {
  return getProductsSubCategoryData(t).map((product) => product.slug);
};

// Get products by parent category
export const getProductsByParentCategory = (
  parentCategory: string,
  t: any
): ProductSubCategoryData[] => {
  return getProductsSubCategoryData(t).filter(
    (product) => product.parentCategory === parentCategory
  );
};

// Create mapping from subcategory ID to actual slug for header navigation
export const getSubcategorySlugById = (
  subcategoryId: string
): string | null => {
  const subcategoryMapping: { [key: string]: string } = {
    sensors: "sensors-transducers",
    transmitters: "transmitters-flow-meters",
    switches: "switches-indicators",
    valves: "valves-actuators",
    analyzers: "analyzers",
    "electrical-cables": "electrical-cables",
    "connectors-terminals": "connectors-terminals",
    "circuit-breakers-fuses": "circuit-breakers-fuses",
    "power-supplies": "power-supplies",
    "enclosures-cabinets": "enclosures-cabinets",
    "heating-elements-appliances": "heating-elements-appliances",
    "solar-panels": "solar-panels",
    "solar-inverters": "solar-inverters",
    plcs: "plcs",
    scada: "scada",
    dcs: "dcs",
    hmi: "hmi",
    "surge-protectors": "surge-protectors",
    "grounding-systems": "grounding-systems",
    "safety-relays-switches": "safety-relays-switches",
    "intrinsically-safe-equipment": "intrinsically-safe-equipment",
    "safety-equipment": "safety-equipment",
    "centrifugal-pumps": "centrifugal-pumps",
    "diaphragm-pumps": "diaphragm-pumps",
    "gear-pumps": "gear-pumps",
    "pump-parts-spares": "pump-parts-spares",
    "hand-tools": "hand-tools",
    "power-tools": "power-tools",
    "cutting-tools": "cutting-tools",
    "lifting-equipment": "lifting-equipment",
    multimeters: "multimeters",
    "power-quality-analyzers": "power-quality-analyzers",
    "calibration-equipment": "calibration-equipment",
    "io-modules": "io-modules",
    "insulators-insulation-materials": "insulators-insulation-materials",
  };

  return subcategoryMapping[subcategoryId] || null;
};

// Get parent category slug from product category ID
export const getParentCategorySlug = (productCategoryId: string): string => {
  const parentCategoryMapping: { [key: string]: string } = {
    "instrumentation-accessories": "instrumentation-accessories",
    "electrical-accessories": "electrical-accessories",
    "solar-products": "solar-products",
    "automation-control-systems": "automation-control-systems",
    "safety-protective-devices": "safety-protective-devices",
    "mechanical-pumps-spares": "mechanical-pumps-spares",
    "industrial-measuring-tools": "industrial-measuring-tools",
  };

  return parentCategoryMapping[productCategoryId] || productCategoryId;
};

// Map subcategoryKey to parent category for product groups
export const getParentCategoryBySubcategoryKey = (
  subcategoryKey: string
): string => {
  const subcategoryToParentMapping: { [key: string]: string } = {
    // Instrumentation Accessories
    "sensors-transducers": "instrumentation-accessories",
    "transmitters-flow-meters": "instrumentation-accessories",
    "switches-indicators": "instrumentation-accessories",
    "valves-actuators": "instrumentation-accessories",
    analyzers: "instrumentation-accessories",
    "instrument-transformers": "instrumentation-accessories",

    // Electrical Components
    "electrical-cables": "electrical-components",
    "instrumentation-cables": "instrumentation-accessories",
    "connectors-terminals": "electrical-accessories",
    "circuit-breakers-fuses": "electrical-accessories",
    "power-supplies": "electrical-accessories",
    "enclosures-cabinets": "electrical-accessories",
    "heating-elements-appliances": "electrical-accessories",
    "contactors-relays": "electrical-accessories",
    "transformers-power-devices": "electrical-accessories",
    "led-lighting": "electrical-accessories",    

    // Solar Products
    "solar-panels": "solar-products",
    "solar-inverters": "solar-products",

    // Automation Control Systems
    plcs: "automation-control-systems",
    scada: "automation-control-systems",
    dcs: "automation-control-systems",
    hmi: "automation-control-systems",
    "motor-controllers-drives": "automation-control-systems",
    "io-modules": "automation-control-systems",

    // Electrical Accessories (continued)
    "insulators-insulation-materials": "electrical-accessories",

    // Safety Protective Devices
    "surge-protectors": "electrical-accessories",
    "grounding-systems": "electrical-accessories",
    "safety-relays-switches": "safety-protective-devices",
    "intrinsically-safe-equipment": "safety-protective-devices",
    "safety-equipment": "safety-protective-devices",
    "protection-relays": "safety-protective-devices",

    // Mechanical Pumps & Spares
    "centrifugal-pumps": "mechanical-pumps-spares",
    "diaphragm-pumps": "mechanical-pumps-spares",
    "gear-pumps": "mechanical-pumps-spares",
    "pump-parts-spares": "mechanical-pumps-spares",

    // Industrial Measuring Tools
    "hand-tools": "industrial-measuring-tools",
    "power-tools": "industrial-measuring-tools",
    "cutting-tools": "industrial-measuring-tools",
    "lifting-equipment": "industrial-measuring-tools",
    multimeters: "industrial-measuring-tools",
    "power-quality-analyzers": "industrial-measuring-tools",
    "calibration-equipment": "industrial-measuring-tools",
    "panel-meters-indicators": "industrial-measuring-tools",
  };

  return subcategoryToParentMapping[subcategoryKey] || "";
};

// Convert subcategory slug to subcategory key for product group lookup
export const getSubcategoryKeyBySlug = (subcategorySlug: string): string => {
  const subcategorySlugToKeyMapping: { [key: string]: string } = {
    "sensors-transducers": "sensors-transducers",
    "transmitters-flow-meters": "transmitters-flow-meters",
    "switches-indicators": "switches-indicators",
    "valves-actuators": "valves-actuators",
    analyzers: "analyzers",
    "instrument-transformers": "instrument-transformers",
    "electrical-cables": "electrical-cables",
    "instrumentation-cables": "instrumentation-cables",
    "connectors-terminals": "connectors-terminals",
    "circuit-breakers-fuses": "circuit-breakers-fuses",
    "power-supplies": "power-supplies",
    "enclosures-cabinets": "enclosures-cabinets",
    "heating-elements-appliances": "heating-elements-appliances",
    "contactors-relays": "contactors-relays",
    "transformers-power-devices": "transformers-power-devices",
    "led-lighting": "led-lighting",
    "solar-panels": "solar-panels",
    "solar-inverters": "solar-inverters",
    plcs: "plcs",
    scada: "scada",
    dcs: "dcs",
    hmi: "hmi",
    "surge-protectors": "surge-protectors",
    "grounding-systems": "grounding-systems",
    "safety-relays-switches": "safety-relays-switches",
    "intrinsically-safe-equipment": "intrinsically-safe-equipment",
    "safety-equipment": "safety-equipment",
    "protection-relays": "protection-relays",
    "centrifugal-pumps": "centrifugal-pumps",
    "diaphragm-pumps": "diaphragm-pumps",
    "gear-pumps": "gear-pumps",
    "pump-parts-spares": "pump-parts-spares",
    "hand-tools": "hand-tools",
    "power-tools": "power-tools",
    "cutting-tools": "cutting-tools",
    "lifting-equipment": "lifting-equipment",
    multimeters: "multimeters",
    "power-quality-analyzers": "power-quality-analyzers",
    "calibration-equipment": "calibration-equipment",
    "panel-meters-indicators": "panel-meters-indicators",
    "io-modules": "io-modules",
    "insulators-insulation-materials": "insulators-insulation-materials",
  };

  return subcategorySlugToKeyMapping[subcategorySlug] || subcategorySlug;
};
