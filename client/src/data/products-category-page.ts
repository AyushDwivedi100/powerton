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
import industrialToolsImage from "@assets/generated_images/Industrial_tools_equipment_workshop_19bdfbd7.png";
import instrumentationLabImage from "@assets/generated_images/Instrumentation_components_laboratory_58f97192.png";
import measurementLabImage from "@assets/generated_images/Precision_measurement_instruments_lab_b82030f8.png";
import pumpSparesImage from "@assets/generated_images/Industrial_pump_spare_parts_8de15f4f.png";
import safetyEquipmentImage from "@assets/generated_images/Industrial_safety_equipment_showcase_ef36d76c.png";
import solarMountingImage from "@assets/generated_images/Solar_mounting_systems_facility_9a3dc9bd.png";

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

export const productCategoriesData: ProductCategoryData[] = [
  {
    slug: "automation-control-systems",
    title: "Automation & Control Systems",
    description:
      "Advanced automation and control solutions for industrial process management and optimization",
    backgroundImage: automationBgImage,
    badges: ["PLCs", "SCADA", "DCS", "HMI"],
    sectionTitle: "Control System Solutions",
    gridCols: "grid-cols-1 md:grid-cols-2 lg:grid-cols-2",
    subcategories: [
      {
        id: "plcs",
        title: "PLCs (Programmable Logic Controllers)",
        description: "Industrial automation controllers for process control",
        icon: Cpu,
        features: [
          "Digital I/O",
          "Analog Processing",
          "Communication Modules",
          "Programming Software",
        ],
      },
      {
        id: "scada",
        title: "SCADA Systems",
        description: "Supervisory control and data acquisition systems",
        icon: Monitor,
        features: [
          "Real-time Monitoring",
          "Data Logging",
          "Alarm Management",
          "Remote Access",
        ],
      },
      {
        id: "dcs",
        title: "DCS (Distributed Control Systems)",
        description: "Distributed control systems for large-scale processes",
        icon: Database,
        features: [
          "Process Control",
          "Distributed Architecture",
          "Redundancy",
          "Advanced Control",
        ],
      },
      {
        id: "hmi",
        title: "HMI (Human Machine Interface)",
        description: "User interfaces for industrial control systems",
        icon: Settings,
        features: [
          "Touchscreen Displays",
          "Graphic Interface",
          "Data Visualization",
          "Operator Control",
        ],
      },
    ],
    cta: {
      title: "Need Automation Solutions?",
      description:
        "Our automation engineers can design and implement comprehensive control systems for your facility.",
      contactButtonText: "Contact Automation Experts",
    },
  },
  {
    slug: "bldc",
    title: "BLDC Motor Systems",
    description:
      "Energy-efficient brushless DC motor solutions for industrial and commercial applications",
    backgroundImage: bldcBgImage,
    badges: [
      "BLDC Motors",
      "Energy Efficient",
      "Low Maintenance",
      "Smart Control",
    ],
    sectionTitle: "BLDC Solutions",
    gridCols: "grid-cols-1 md:grid-cols-2 lg:grid-cols-2",
    subcategories: [
      {
        id: "bldc-cooler-exhaust-motor",
        title: "BLDC Cooler & Exhaust Motors",
        description:
          "High-efficiency motors for cooling and ventilation applications",
        icon: Wind,
        features: [
          "Energy Efficient",
          "Low Noise",
          "Long Life",
          "Variable Speed",
        ],
      },
      {
        id: "bldc-ceiling-fan",
        title: "BLDC Ceiling Fans",
        description:
          "Smart ceiling fans with advanced energy-saving technology",
        icon: Fan,
        features: [
          "Remote Control",
          "Energy Saving",
          "Quiet Operation",
          "Smart Features",
        ],
      },
      {
        id: "bldc-submersible-surface-pump",
        title: "BLDC Submersible & Surface Pumps",
        description: "Water pumping solutions with BLDC motor technology",
        icon: Droplet,
        features: [
          "Submersible Design",
          "High Efficiency",
          "Corrosion Resistant",
          "Solar Compatible",
        ],
      },
      {
        id: "bldc-table-fan-wall-fan-motor",
        title: "BLDC Table & Wall Fan Motors",
        description: "Compact BLDC motors for portable and wall-mounted fans",
        icon: Zap,
        features: [
          "Compact Size",
          "Energy Efficient",
          "Quiet Operation",
          "Speed Control",
        ],
      },
    ],
    cta: {
      title: "Upgrade to BLDC Technology?",
      description:
        "Our BLDC specialists can help you transition to energy-efficient brushless DC motor solutions.",
      contactButtonText: "Contact BLDC Experts",
    },
  },
  {
    slug: "electrical-accessories",
    title: "Electrical Accessories",
    description:
      "Comprehensive range of electrical components for power distribution and control systems",
    backgroundImage: electricalBgImage,
    badges: [
      "Power Distribution",
      "Control Systems",
      "Safety Components",
      "Industrial Grade",
    ],
    sectionTitle: "Electrical accessories Solutions",
    gridCols: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    subcategories: [
      {
        id: "cables-wires",
        title: "Cables & Wires",
        description:
          "Industrial cables and wires for power transmission and control applications",
        icon: Cable,
        features: [
          "Power Cables",
          "Control Cables",
          "Instrumentation Cables",
          "Communication Cables",
        ],
      },
      {
        id: "connectors-terminals",
        title: "Connectors & Terminals",
        description:
          "Electrical connectors and terminal blocks for secure connections",
        icon: Zap,
        features: [
          "Terminal Blocks",
          "Wire Connectors",
          "DIN Rail Terminals",
          "Junction Boxes",
        ],
      },
      {
        id: "circuit-breakers-fuses",
        title: "Circuit Breakers & Fuses",
        description:
          "Protection devices for electrical circuits and equipment safety",
        icon: Shield,
        features: ["MCBs", "MCCBs", "RCCBs", "Industrial Fuses"],
      },
      {
        id: "power-supplies",
        title: "Power Supplies",
        description:
          "AC/DC power supplies and converters for industrial applications",
        icon: Power,
        features: [
          "SMPS",
          "DIN Rail Power Supplies",
          "DC-DC Converters",
          "UPS Systems",
        ],
      },
      {
        id: "enclosures-cabinets",
        title: "Enclosures & Cabinets",
        description:
          "Electrical enclosures and control cabinets for equipment protection",
        icon: Shield,
        features: [
          "Control Panels",
          "Distribution Boards",
          "Junction Boxes",
          "Weatherproof Enclosures",
        ],
      },
      {
        id: "heating-elements-appliances",
        title: "Heating Elements & Appliances",
        description: "Industrial heating elements and electrical appliances",
        icon: Zap,
        features: [
          "Heating Elements",
          "Industrial Heaters",
          "Temperature Controllers",
          "Thermal Protection",
        ],
      },
    ],
    cta: {
      title: "Need Electrical Components?",
      description:
        "Our electrical engineers can help you select the right components for your power distribution and control systems.",
      contactButtonText: "Contact Our Experts",
    },
  },
  {
    slug: "industrial-measuring-tools",
    title: "Industrial & Measuring Tools",
    description:
      "Professional tools, equipment, and advanced measurement instruments for industrial maintenance, construction, manufacturing operations, and precise monitoring applications",
    backgroundImage: measurementLabImage,
    badges: [
      "Hand Tools",
      "Power Tools",
      "Digital Multimeters",
      "Calibrators",
      "Safety Gear",
    ],
    sectionTitle: "Tool & Instrument Categories",
    gridCols: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    subcategories: [
      {
        id: "hand-tools",
        title: "Hand Tools",
        description: "Professional hand tools for industrial maintenance",
        icon: Wrench,
        features: [
          "Precision Tools",
          "Durable Construction",
          "Ergonomic Design",
          "Professional Grade",
        ],
      },
      {
        id: "power-tools",
        title: "Power Tools",
        description:
          "Electric and pneumatic power tools for heavy-duty applications",
        icon: Drill,
        features: [
          "High Performance",
          "Variable Speed",
          "Cordless Options",
          "Industrial Duty",
        ],
      },
      {
        id: "cutting-tools",
        title: "Cutting Tools",
        description: "Precision cutting tools and accessories",
        icon: Scissors,
        features: [
          "Sharp Edges",
          "Durable Materials",
          "Precision Cutting",
          "Long Lasting",
        ],
      },
      {
        id: "lifting-equipment",
        title: "Lifting Equipment",
        description:
          "Hoists, cranes, and lifting accessories for material handling",
        icon: Construction,
        features: [
          "Heavy Duty",
          "Safety Certified",
          "Load Testing",
          "Various Capacities",
        ],
      },
      {
        id: "multimeters",
        title: "Multimeters",
        description:
          "Digital and analog multimeters for electrical measurements",
        icon: Zap,
        features: [
          "AC/DC Voltage",
          "Current Measurement",
          "Resistance Testing",
          "Continuity Check",
        ],
      },
      {
        id: "power-quality-analyzers",
        title: "Power Quality Analyzers",
        description: "Instruments for power quality monitoring and analysis",
        icon: Activity,
        features: [
          "Power Analysis",
          "Harmonic Detection",
          "Voltage Monitoring",
          "Energy Measurement",
        ],
      },
      {
        id: "calibration-equipment",
        title: "Calibration Equipment",
        description: "Precision calibration tools and reference standards",
        icon: Settings,
        features: [
          "Reference Standards",
          "Precision Calibration",
          "Traceability",
          "Accuracy Verification",
        ],
      },
    ],
    cta: {
      title: "Need Tools & Measurement Solutions?",
      description:
        "Our specialists can help you select the right tools and measurement instruments for your industrial applications.",
      contactButtonText: "Contact Our Experts",
    },
  },
  {
    slug: "instrumentation-accessories",
    title: "Instrumentation Accessories",
    description:
      "High-precision instrumentation accessories for accurate measurement and control in industrial processes",
    backgroundImage: instrumentationLabImage,
    badges: [
      "Pressure Transmitters",
      "Temperature Sensors",
      "Flow Meters",
      "Level Indicators",
    ],
    sectionTitle: "Product Categories",
    gridCols: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
    subcategories: [
      {
        id: "sensors-transducers",
        title: "Sensors & Transducers",
        description:
          "Industrial sensors and transducers for temperature, pressure, and flow measurement",
        icon: Thermometer,
        features: [
          "Temperature Sensors",
          "Pressure Sensors",
          "Flow Sensors",
          "Level Sensors",
        ],
      },
      {
        id: "transmitters-flow-meters",
        title: "Transmitters & Flow Meters",
        description:
          "Signal transmitters and flow meters for industrial process measurement",
        icon: Radio,
        features: [
          "Pressure Transmitters",
          "Temperature Transmitters",
          "Flow Transmitters",
          "Level Transmitters",
        ],
      },
      {
        id: "switches-indicators",
        title: "Switches & Indicators",
        description: "Industrial switches, indicators, and signaling devices",
        icon: ToggleLeft,
        features: [
          "Pushbutton Switches",
          "Selector Switches",
          "Indicator Lights",
          "Emergency Stops",
        ],
      },
      {
        id: "valves-actuators",
        title: "Valves & Actuators",
        description: "Control valves and actuators for process control systems",
        icon: Gauge,
        features: [
          "Control Valves",
          "Pneumatic Actuators",
          "Electric Actuators",
          "Valve Positioners",
        ],
      },
      {
        id: "analyzers",
        title: "Analyzers",
        description: "Gas, liquid, and process analyzers for quality control",
        icon: FlaskConical,
        features: [
          "Gas Analyzers",
          "Liquid Analyzers",
          "Process Analyzers",
          "Multi-parameter Systems",
        ],
      },
    ],
    cta: {
      title: "Need Instrumentation Solutions?",
      description:
        "Our technical experts can help you select the right instrumentation components for your industrial applications.",
      contactButtonText: "Contact Us",
    },
  },
  {
    slug: "mechanical-pumps-spares",
    title: "Mechanical Pumps & Spares",
    description:
      "Industrial pumping solutions and replacement parts for fluid handling applications",
    backgroundImage: pumpSparesImage,
    badges: [
      "Centrifugal Pumps",
      "Diaphragm Pumps",
      "Gear Pumps",
      "Spare Parts",
    ],
    sectionTitle: "Pump Solutions",
    gridCols: "grid-cols-1 md:grid-cols-2 lg:grid-cols-2",
    subcategories: [
      {
        id: "centrifugal-pumps",
        title: "Centrifugal Pumps",
        description: "High-efficiency centrifugal pumps for fluid handling",
        icon: RotateCcw,
        features: [
          "High Flow Rates",
          "Self-Priming",
          "Corrosion Resistant",
          "Energy Efficient",
        ],
      },
      {
        id: "diaphragm-pumps",
        title: "Diaphragm Pumps",
        description:
          "Positive displacement diaphragm pumps for precise flow control",
        icon: Droplet,
        features: [
          "Positive Displacement",
          "Chemical Compatibility",
          "Dry Running",
          "Pulsation Dampening",
        ],
      },
      {
        id: "gear-pumps",
        title: "Gear Pumps",
        description: "Precision gear pumps for viscous fluid applications",
        icon: Settings,
        features: [
          "High Pressure",
          "Viscous Fluids",
          "Precise Metering",
          "Compact Design",
        ],
      },
      {
        id: "pump-parts-spares",
        title: "Pump Parts & Spares",
        description:
          "Replacement parts and spare components for all pump types",
        icon: Wrench,
        features: [
          "OEM Parts",
          "Seals & Gaskets",
          "Impellers",
          "Maintenance Kits",
        ],
      },
    ],
    cta: {
      title: "Need Pump Solutions?",
      description:
        "Our pump specialists can help you select the right pumping solution for your application.",
      contactButtonText: "Contact Pump Experts",
    },
  },
  {
    slug: "safety-protective-devices",
    title: "Safety & Protective Devices",
    description:
      "Comprehensive safety and protective equipment to ensure personnel and equipment safety in industrial environments",
    backgroundImage: safetyEquipmentImage,
    badges: [
      "Surge Protection",
      "Grounding Systems",
      "Safety Relays",
      "Intrinsic Safety",
    ],
    sectionTitle: "Safety Solutions",
    gridCols: "grid-cols-1 md:grid-cols-2 lg:grid-cols-2",
    subcategories: [
      {
        id: "surge-protectors",
        title: "Surge Protectors",
        description: "Electrical surge protection devices for equipment safety",
        icon: Zap,
        features: [
          "Lightning Protection",
          "Voltage Surge Protection",
          "Equipment Safety",
          "Power Quality",
        ],
      },
      {
        id: "grounding-systems",
        title: "Grounding Systems",
        description: "Electrical grounding and earthing systems for safety",
        icon: Shield,
        features: [
          "Earth Electrodes",
          "Ground Rods",
          "Bonding Conductors",
          "Lightning Rods",
        ],
      },
      {
        id: "safety-relays-switches",
        title: "Safety Relays & Switches",
        description: "Safety control devices for emergency shutdown systems",
        icon: ShieldCheck,
        features: [
          "Emergency Stop",
          "Safety Monitoring",
          "Fail-Safe Design",
          "Certified Safety",
        ],
      },
      {
        id: "intrinsically-safe-equipment",
        title: "Intrinsically Safe Equipment",
        description: "Explosion-proof equipment for hazardous environments",
        icon: AlertTriangle,
        features: [
          "ATEX Certified",
          "Explosion Proof",
          "Hazardous Area",
          "Intrinsic Safety",
        ],
      },
      {
        id: "safety-equipment",
        title: "Safety Equipment",
        description: "Personal protective equipment and safety gear",
        icon: HardHat,
        features: [
          "PPE Compliant",
          "Safety Standards",
          "Comfort Design",
          "Durability",
        ],
      },
    ],
    cta: {
      title: "Prioritizing Safety in Your Operations?",
      description:
        "Our safety engineers can assess your facility and recommend comprehensive protective solutions.",
      contactButtonText: "Contact Safety Experts",
    },
  },
  {
    slug: "solar-products",
    title: "Solar Products",
    description:
      "Complete solar energy solutions including panels, inverters, and energy storage systems",
    backgroundImage: solarMountingImage,
    badges: ["Solar Panels", "Inverters", "Mounting Systems", "Energy Storage"],
    sectionTitle: "Solar Solutions",
    gridCols: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    subcategories: [
      {
        id: "solar-panels",
        title: "Solar Panels",
        description: "Photovoltaic panels for solar energy generation",
        icon: Sun,
        features: [
          "Monocrystalline",
          "Polycrystalline",
          "High Efficiency",
          "Weather Resistant",
        ],
      },
      {
        id: "solar-inverters",
        title: "Solar Inverters",
        description: "DC to AC power conversion for solar systems",
        icon: Zap,
        features: ["Grid-Tie", "Off-Grid", "Hybrid Systems", "MPPT Technology"],
      },
    ],
    cta: {
      title: "Ready to Go Solar?",
      description:
        "Our solar experts can design a complete solar energy system tailored to your needs.",
      contactButtonText: "Contact Solar Experts",
    },
  },
];

// Helper function to get category by slug
export const getCategoryBySlug = (
  slug: string,
): ProductCategoryData | undefined => {
  return productCategoriesData.find((category) => category.slug === slug);
};

// Get all category slugs for routing
export const getAllCategorySlugs = (): string[] => {
  return productCategoriesData.map((category) => category.slug);
};
