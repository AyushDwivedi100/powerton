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

export const productsSubCategoryData: ProductSubCategoryData[] = [
  // Instrumentation Components
  {
    slug: "sensors",
    title: "Sensors",
    shortDescription:
      "Comprehensive range of industrial-grade sensors for automation and process control",
    fullDescription:
      "Advanced sensor solutions including proximity sensors, RTD temperature sensors, thermocouples, and pH sensors for industrial automation and process control.",
    image: sensorsBgImage,
    parentCategory: "/products-category/instrumentation-components",
    parentCategoryTitle: "Instrumentation Components",
    icon: Thermometer,
    keyBenefits: [
      "High Accuracy & Reliability",
      "Easy Integration & Configuration",
      "Reduced Maintenance Requirements",
      "Enhanced Safety Compliance",
    ],
    specifications: [
      "Operating Temperature: -40°C to +85°C",
      "Protection Rating: IP67/IP68",
      "Output Signals: 4-20mA, 0-10V, Digital",
      "Power Supply: 12-24VDC",
      "Response Time: <1ms to 10s",
      "Accuracy: ±0.1% to ±1.0% FS",
    ],
    applications: [
      "Process Control & Monitoring",
      "Environmental Monitoring",
      "Machine Condition Monitoring",
      "Safety System Integration",
      "Quality Control Systems",
      "Energy Management",
    ],
    industries: [
      "Chemical & Petrochemical",
      "Oil & Gas",
      "Power Generation",
      "Water Treatment",
      "Food & Beverage",
      "Pharmaceutical",
    ],
    features: [
      "High Precision Measurement",
      "Robust Industrial Design",
      "Wide Operating Range",
      "Multiple Output Options",
      "Easy Installation",
      "Low Maintenance",
      "Explosion-Proof Options",
      "Digital Communication",
    ],
    certifications: [
      "CE Certified",
      "ATEX Approved",
      "IECEx Certified",
      "SIL 2/3 Rated",
      "UL Listed",
      "CSA Approved",
    ],
    seo: {
      title:
        "Industrial Sensors - PNP/NPN Proximity, RTD, Thermocouples, pH Sensors | Powerton Engineering",
      description:
        "Comprehensive range of industrial-grade sensors including PNP/NPN proximity sensors, RTD temperature sensors (PT100, PT500, PT1000), thermocouples (J, K, T, S types), and pH sensors for process control.",
      keywords:
        "industrial sensors, proximity sensors, PNP sensors, NPN sensors, RTD sensors, PT100, PT500, PT1000, thermocouples, pH sensors, temperature sensors, automation sensors",
      canonicalUrl:
        "https://powertonengineering.in/products-sub-category/sensors",
    },
  },
  {
    slug: "transmitters",
    title: "Transmitters & Flow Meters",
    shortDescription:
      "Precision transmitters for pressure, temperature, flow, and level measurement",
    fullDescription:
      "Comprehensive range of industrial transmitters with advanced technologies including strain gauge, capacitive, and piezoresistive sensing with HART digital communication.",
    image: transmittersImage,
    parentCategory: "/products-category/instrumentation-components",
    parentCategoryTitle: "Instrumentation Components",
    icon: Radio,
    keyBenefits: [
      "Industry-Leading Accuracy",
      "Reduced Total Cost of Ownership",
      "Enhanced Process Optimization",
      "Improved Safety & Reliability",
    ],
    specifications: [
      "Accuracy: ±0.025% to ±0.5% FS",
      "Operating Temperature: -40°C to +125°C",
      "Process Pressure: 0 to 10,000 PSI",
      "Communication: HART, Foundation Fieldbus, Profibus",
      "Power Supply: 10.5-55VDC",
      "Protection: IP67/IP68",
    ],
    applications: [
      "Pressure Measurement",
      "Temperature Monitoring",
      "Flow Rate Control",
      "Level Detection",
      "Differential Pressure",
      "Process Control Integration",
    ],
    industries: [
      "Oil & Gas",
      "Chemical Processing",
      "Power Generation",
      "Water & Wastewater",
      "Pulp & Paper",
      "Mining & Metals",
    ],
    features: [
      "HART Communication",
      "Digital Accuracy",
      "Remote Configuration",
      "Self-Diagnostics",
      "Multivariable Options",
      "Wireless Capabilities",
      "Explosion-Proof Design",
      "Long-Term Stability",
    ],
    certifications: [
      "ATEX Certified",
      "IECEx Approved",
      "SIL 2/3 Capable",
      "FM Approved",
      "CSA Certified",
      "CE Marked",
    ],
    seo: {
      title:
        "Industrial Transmitters & Flow Meters - Pressure, Temperature, Level | Powerton Engineering",
      description:
        "Precision industrial transmitters and flow meters for pressure, temperature, flow, and level measurement. HART, Foundation Fieldbus, and wireless solutions for process control.",
      keywords:
        "industrial transmitters, flow meters, pressure transmitters, temperature transmitters, level transmitters, HART transmitters, process instrumentation",
      canonicalUrl:
        "https://powertonengineering.in/products-sub-category/transmitters",
    },
  },
  {
    slug: "switches",
    title: "Switches & Indicators",
    shortDescription:
      "Essential industrial switches for automation and control: pressure switches, level switches, limit switches, and push buttons",
    fullDescription:
      "Comprehensive range of industrial switches including pressure switches from Danfoss and Schneider Electric, level switches from Endress+Hauser and ABB, limit switches from Omron and Schneider Electric, and push buttons from leading manufacturers for reliable automation control.",
    image: switchesImage,
    parentCategory: "/products-category/instrumentation-components",
    parentCategoryTitle: "Instrumentation Components",
    icon: ToggleLeft,
    keyBenefits: [
      "High Reliability & Durability",
      "Easy Installation & Maintenance",
      "Comprehensive Safety Compliance",
      "Cost-Effective Solutions",
    ],
    specifications: [
      "Contact Rating: 10A at 250VAC",
      "Operating Temperature: -25°C to +70°C",
      "Protection Rating: IP65/IP67",
      "Mounting: 22mm/30mm Panel Cutout",
      "LED Life: >50,000 hours",
      "Contact Configuration: NO/NC/DPDT",
    ],
    applications: [
      "Control Panel Integration",
      "Emergency Stop Systems",
      "Machine Control",
      "Process Indication",
      "Safety Interlocks",
      "Status Monitoring",
    ],
    industries: [
      "Manufacturing",
      "Process Control",
      "Material Handling",
      "Packaging",
      "Food Processing",
      "Automotive",
    ],
    features: [
      "LED Illumination",
      "Multiple Colors Available",
      "Maintained/Momentary Action",
      "Vandal Resistant Design",
      "Quick Connect Terminals",
      "Modular Construction",
      "Emergency Stop Function",
      "Ergonomic Design",
    ],
    certifications: [
      "UL Listed",
      "CE Marked",
      "CSA Certified",
      "IEC 60947-5-1",
      "RoHS Compliant",
      "ISO 13850",
    ],
    seo: {
      title:
        "Industrial Switches & Indicators - Control Panel Components | Powerton Engineering",
      description:
        "Industrial-grade switches, pushbuttons, indicators, and control panel components. Emergency stops, pilot lights, selector switches for automation and control systems.",
      keywords:
        "industrial switches, pushbutton switches, control panel components, emergency stops, pilot lights, indicators, selector switches",
      canonicalUrl:
        "https://powertonengineering.in/products-sub-category/switches",
    },
  },
  {
    slug: "valves",
    title: "Valves & Actuators",
    shortDescription:
      "Essential valve solutions for industrial automation: control valves and solenoid valves",
    fullDescription:
      "Professional valve solutions featuring control valves from Fisher (Emerson) and SAMSON for precise process control, and solenoid valves from ASCO and Parker Hannifin for automated fluid control in industrial applications.",
    image: valvesImage,
    parentCategory: "/products-category/instrumentation-components",
    parentCategoryTitle: "Instrumentation Components",
    icon: Gauge,
    keyBenefits: [
      "Precise Flow Control",
      "Reliable Operation",
      "Reduced Maintenance Costs",
      "Enhanced Process Efficiency",
    ],
    specifications: [
      "Pressure Rating: ANSI 150-2500",
      "Temperature Range: -196°C to +650°C",
      'Size Range: 1/2" to 48"',
      "Materials: Stainless Steel, Carbon Steel, Alloys",
      "Actuator Types: Pneumatic, Electric, Hydraulic",
      "Control Signal: 4-20mA, 0-10V, Digital",
    ],
    applications: [
      "Flow Control",
      "Pressure Regulation",
      "Temperature Control",
      "Safety Shutdown",
      "Process Isolation",
      "Level Control",
    ],
    industries: [
      "Oil & Gas",
      "Chemical Processing",
      "Power Generation",
      "Water Treatment",
      "Pharmaceutical",
      "Pulp & Paper",
    ],
    features: [
      "High Pressure Capability",
      "Corrosion Resistant",
      "Fire-Safe Design",
      "Low Emission Technology",
      "Smart Positioning",
      "Remote Operation",
      "Fail-Safe Operation",
      "Extended Service Life",
    ],
    certifications: [
      "API 6D Certified",
      "ASME Compliant",
      "ISO 15848",
      "ATEX Approved",
      "SIL Rated",
      "Fire Test Certified",
    ],
    seo: {
      title:
        "Industrial Valves & Actuators - Control Valves, Safety Valves | Powerton Engineering",
      description:
        "Industrial control valves and actuators for process control. Ball valves, gate valves, check valves with pneumatic and electric actuators for oil, gas, and chemical applications.",
      keywords:
        "industrial valves, control valves, valve actuators, ball valves, gate valves, safety valves, process valves",
      canonicalUrl:
        "https://powertonengineering.in/products-sub-category/valves",
    },
  },

  // Electrical Components
  {
    slug: "cables-wires",
    title: "Cables & Wires",
    shortDescription:
      "Industrial cables and wires for power transmission and control applications",
    fullDescription:
      "Comprehensive range of electrical cables including power cables, control cables, instrumentation cables, and communication cables for industrial installations.",
    image: cablesWiresImage,
    parentCategory: "/products-category/electrical-components",
    parentCategoryTitle: "Electrical Components",
    icon: Cable,
    keyBenefits: [
      "High Current Carrying Capacity",
      "Excellent Insulation Properties",
      "Flame Retardant Materials",
      "Long Service Life",
    ],
    specifications: [
      "Voltage Rating: 300V to 33kV",
      "Temperature Rating: -40°C to +90°C",
      "Conductor: Copper/Aluminum",
      "Insulation: PVC, XLPE, EPR",
      "Shielding: Braid, Foil, Combination",
      "Standards: IEC, IEEE, ASTM",
    ],
    applications: [
      "Power Distribution",
      "Motor Connections",
      "Control Circuits",
      "Instrumentation",
      "Communication Networks",
      "Grounding Systems",
    ],
    industries: [
      "Power Generation",
      "Manufacturing",
      "Infrastructure",
      "Marine & Offshore",
      "Mining",
      "Transportation",
    ],
    features: [
      "Fire Resistant",
      "Oil Resistant",
      "UV Resistant",
      "Moisture Resistant",
      "Flexible Design",
      "Easy Installation",
      "Low Smoke Emission",
      "Halogen Free Options",
    ],
    certifications: [
      "IEC 60502 Certified",
      "IEEE 1202 Tested",
      "UL Listed",
      "CSA Approved",
      "CE Marked",
      "RoHS Compliant",
    ],
    seo: {
      title:
        "Industrial Cables & Wires - Power, Control, Instrumentation Cables | Powerton Engineering",
      description:
        "Industrial electrical cables and wires for power transmission, control circuits, and instrumentation. High voltage power cables, control cables, and communication cables.",
      keywords:
        "industrial cables, power cables, control cables, instrumentation cables, electrical wires, communication cables, armored cables",
      canonicalUrl:
        "https://powertonengineering.in/products-sub-category/cables-wires",
    },
  },
  {
    slug: "connectors-terminals",
    title: "Connectors & Terminals",
    shortDescription:
      "Electrical connectors and terminal blocks for secure connections",
    fullDescription:
      "Complete range of electrical connection solutions including terminal blocks, wire connectors, junction boxes, and industrial connectors for reliable electrical connections.",
    image: connectorsTerminalsImage,
    parentCategory: "/products-category/electrical-components",
    parentCategoryTitle: "Electrical Components",
    icon: Zap,
    keyBenefits: [
      "Secure Connections",
      "Easy Installation",
      "Maintenance Friendly",
      "High Current Capacity",
    ],
    specifications: [
      "Current Rating: 5A to 1000A",
      "Voltage Rating: 300V to 1000V",
      "Wire Range: 0.5mm² to 300mm²",
      "Operating Temperature: -40°C to +120°C",
      "Protection Rating: IP20 to IP68",
      "Mounting: DIN Rail, PCB, Panel",
    ],
    applications: [
      "Control Panel Wiring",
      "Distribution Boards",
      "Junction Boxes",
      "Signal Connections",
      "Power Distribution",
      "Grounding Connections",
    ],
    industries: [
      "Electrical Panels",
      "Industrial Automation",
      "Building Services",
      "Transportation",
      "Telecommunications",
      "Energy & Utilities",
    ],
    features: [
      "Screw & Spring Connections",
      "Color Coding Available",
      "Test Points",
      "Jumper Options",
      "Modular Design",
      "Safety Barriers",
      "Disconnect Options",
      "High Density",
    ],
    certifications: [
      "IEC 60947-7-1",
      "UL Listed",
      "CSA Certified",
      "VDE Approved",
      "CE Marked",
      "RoHS Compliant",
    ],
    seo: {
      title:
        "Electrical Connectors & Terminals - Terminal Blocks & Wire Connectors | Powerton Engineering",
      description:
        "Electrical connectors and terminal blocks for industrial applications. DIN rail terminals, wire connectors, junction boxes for secure electrical connections.",
      keywords:
        "electrical connectors, terminal blocks, wire connectors, DIN rail terminals, junction boxes, electrical terminals",
      canonicalUrl:
        "https://powertonengineering.in/products-sub-category/connectors-terminals",
    },
  },
  {
    slug: "circuit-breakers-fuses",
    title: "Circuit Breakers & Fuses",
    shortDescription:
      "Protection devices for electrical circuits and equipment safety",
    fullDescription:
      "Comprehensive protection solutions including miniature circuit breakers, molded case circuit breakers, and industrial fuses for electrical system protection.",
    image: circuitBreakersImage,
    parentCategory: "/products-category/electrical-components",
    parentCategoryTitle: "Electrical Components",
    icon: Shield,
    keyBenefits: [
      "Equipment Protection",
      "Personnel Safety",
      "System Reliability",
      "Code Compliance",
    ],
    specifications: [
      "Current Rating: 1A to 6300A",
      "Voltage Rating: 230V to 690V",
      "Breaking Capacity: 6kA to 150kA",
      "Trip Characteristics: B, C, D, K, Z",
      "Poles: 1, 2, 3, 4 Pole",
      "Standards: IEC 60898, IEC 60947",
    ],
    applications: [
      "Motor Protection",
      "Feeder Protection",
      "Lighting Circuits",
      "Distribution Boards",
      "Control Panels",
      "Equipment Isolation",
    ],
    industries: [
      "Power Distribution",
      "Manufacturing",
      "Commercial Buildings",
      "Infrastructure",
      "Marine Applications",
      "Renewable Energy",
    ],
    features: [
      "Overload Protection",
      "Short Circuit Protection",
      "Earth Fault Protection",
      "Remote Operation",
      "Status Indication",
      "Adjustable Settings",
      "Compact Design",
      "Easy Maintenance",
    ],
    certifications: [
      "IEC 60898 Certified",
      "IEC 60947 Compliant",
      "UL Listed",
      "CSA Approved",
      "CE Marked",
      "KEMA Tested",
    ],
    seo: {
      title:
        "Circuit Breakers & Fuses - MCB, MCCB, Industrial Fuses | Powerton Engineering",
      description:
        "Circuit breakers and fuses for electrical protection. MCB, MCCB, RCCB, and industrial fuses for power distribution and motor protection applications.",
      keywords:
        "circuit breakers, MCB, MCCB, RCCB, industrial fuses, electrical protection, power distribution, motor protection",
      canonicalUrl:
        "https://powertonengineering.in/products-sub-category/circuit-breakers-fuses",
    },
  },
  {
    slug: "power-supplies",
    title: "Power Supplies",
    shortDescription:
      "AC/DC power supplies and converters for industrial applications",
    fullDescription:
      "Industrial power supply solutions including switched-mode power supplies, uninterruptible power supplies, and DC-DC converters for reliable power distribution.",
    image: powerSuppliesImage,
    parentCategory: "/products-category/electrical-components",
    parentCategoryTitle: "Electrical Components",
    icon: Power,
    keyBenefits: [
      "Stable Output Voltage",
      "High Efficiency",
      "Compact Design",
      "Long Service Life",
    ],
    specifications: [
      "Input Voltage: 85-264VAC",
      "Output Voltage: 3.3V to 48VDC",
      "Power Rating: 5W to 3000W",
      "Efficiency: >90%",
      "Operating Temperature: -25°C to +70°C",
      "Protection: OVP, OCP, OTP, SCP",
    ],
    applications: [
      "Control Systems",
      "Instrumentation",
      "LED Lighting",
      "Motor Drives",
      "Communication Equipment",
      "Automation Systems",
    ],
    industries: [
      "Industrial Automation",
      "Telecommunications",
      "Medical Equipment",
      "Transportation",
      "Renewable Energy",
      "Defense & Aerospace",
    ],
    features: [
      "DIN Rail Mounting",
      "Wide Input Range",
      "Remote Sensing",
      "Parallel Operation",
      "Status Monitoring",
      "Conformal Coating",
      "Low Ripple & Noise",
      "Global Safety Approvals",
    ],
    certifications: [
      "IEC 62368-1",
      "UL Listed",
      "CSA Certified",
      "CE Marked",
      "FCC Class B",
      "RoHS Compliant",
    ],
    seo: {
      title:
        "Industrial Power Supplies - SMPS, UPS, DC-DC Converters | Powerton Engineering",
      description:
        "Industrial power supplies including switched-mode power supplies, UPS systems, and DC-DC converters for automation, control, and instrumentation applications.",
      keywords:
        "industrial power supplies, SMPS, UPS systems, DC-DC converters, DIN rail power supplies, industrial UPS",
      canonicalUrl:
        "https://powertonengineering.in/products-sub-category/power-supplies",
    },
  },
  {
    slug: "enclosures-cabinets",
    title: "Enclosures & Cabinets",
    shortDescription:
      "Electrical enclosures and control cabinets for equipment protection",
    fullDescription:
      "Complete range of electrical enclosures including control panels, distribution boards, and weatherproof enclosures for equipment protection and organization.",
    image: enclosuresImage,
    parentCategory: "/products-category/electrical-components",
    parentCategoryTitle: "Electrical Components",
    icon: Shield,
    keyBenefits: [
      "Equipment Protection",
      "Environmental Sealing",
      "Organized Installation",
      "Easy Maintenance Access",
    ],
    specifications: [
      "Material: Steel, Stainless Steel, Aluminum",
      "Protection Rating: IP20 to IP68",
      "Size Range: 200x300x150 to 2000x1200x600mm",
      "Wall Thickness: 1.5mm to 3mm",
      "Operating Temperature: -40°C to +70°C",
      "Standards: IEC 62208, NEMA",
    ],
    applications: [
      "Control Panels",
      "Distribution Boards",
      "Junction Boxes",
      "Instrumentation Housing",
      "Outdoor Installations",
      "Hazardous Area Applications",
    ],
    industries: [
      "Power Distribution",
      "Industrial Automation",
      "Water Treatment",
      "Oil & Gas",
      "Renewable Energy",
      "Transportation",
    ],
    features: [
      "Modular Design",
      "Mounting Rails",
      "Cable Glands",
      "Ventilation Options",
      "Locking Systems",
      "Transparent Doors",
      "Anti-Corrosion Coating",
      "Custom Configurations",
    ],
    certifications: [
      "IEC 62208",
      "NEMA Rated",
      "UL Listed",
      "CSA Approved",
      "CE Marked",
      "IP Testing Certified",
    ],
    seo: {
      title:
        "Electrical Enclosures & Cabinets - Control Panels & Distribution Boards | Powerton Engineering",
      description:
        "Electrical enclosures and cabinets for control panels, distribution boards, and equipment protection. IP65/IP66 weatherproof enclosures for industrial applications.",
      keywords:
        "electrical enclosures, control cabinets, distribution boards, weatherproof enclosures, control panels, junction boxes",
      canonicalUrl:
        "https://powertonengineering.in/products-sub-category/enclosures-cabinets",
    },
  },
  {
    slug: "heating-elements-appliances",
    title: "Heating Elements & Appliances",
    shortDescription: "Industrial heating elements and electrical appliances",
    fullDescription:
      "Comprehensive heating solutions including cartridge heaters, band heaters, immersion heaters, and industrial ovens for process heating applications.",
    image: heatingElementsImage,
    parentCategory: "/products-category/electrical-components",
    parentCategoryTitle: "Electrical Components",
    icon: Zap,
    keyBenefits: [
      "Precise Temperature Control",
      "Energy Efficient Operation",
      "Long Service Life",
      "Uniform Heat Distribution",
    ],
    specifications: [
      "Power Rating: 100W to 50kW",
      "Voltage: 120V to 480V",
      "Temperature Range: 50°C to 1200°C",
      "Sheath Material: Stainless Steel, Inconel",
      "Insulation: MgO, Ceramic",
      "Watt Density: 5-100 W/in²",
    ],
    applications: [
      "Process Heating",
      "Plastic Processing",
      "Food Processing",
      "Chemical Heating",
      "Laboratory Equipment",
      "Industrial Ovens",
    ],
    industries: [
      "Plastics & Packaging",
      "Food & Beverage",
      "Chemical Processing",
      "Semiconductor",
      "Medical Equipment",
      "Aerospace",
    ],
    features: [
      "Custom Configurations",
      "Fast Heat-Up Time",
      "Uniform Temperature",
      "Corrosion Resistant",
      "Thermocouple Options",
      "Easy Installation",
      "Temperature Controllers",
      "Safety Shutoffs",
    ],
    certifications: [
      "UL Listed",
      "CSA Certified",
      "CE Marked",
      "IEC 60519",
      "NEMA Rated",
      "RoHS Compliant",
    ],
    seo: {
      title:
        "Industrial Heating Elements & Appliances - Cartridge Heaters, Band Heaters | Powerton Engineering",
      description:
        "Industrial heating elements and appliances including cartridge heaters, band heaters, immersion heaters, and industrial ovens for process heating applications.",
      keywords:
        "industrial heating elements, cartridge heaters, band heaters, immersion heaters, industrial ovens, process heating, electric heaters",
      canonicalUrl:
        "https://powertonengineering.in/products-sub-category/heating-elements-appliances",
    },
  },

  // Measurement Instruments
  {
    slug: "multimeters",
    title: "Digital Multimeters",
    shortDescription:
      "Professional digital multimeters for electrical measurements",
    fullDescription:
      "High-precision digital multimeters for voltage, current, resistance, frequency, and capacitance measurements in industrial and laboratory applications.",
    image: multimetersImage,
    parentCategory: "/products-category/industrial-measuring-tools",
    parentCategoryTitle: "Industrial & Measuring Tools",
    icon: Activity,
    keyBenefits: [
      "High Accuracy Measurements",
      "Multiple Function Capability",
      "Data Logging Features",
      "Safety Certified",
    ],
    specifications: [
      "DC Voltage: 100mV to 1000V",
      "AC Voltage: 100mV to 750V",
      "DC Current: 100µA to 10A",
      "Resistance: 0Ω to 100MΩ",
      "Accuracy: ±0.025%",
      "Display: 50,000 count",
    ],
    applications: [
      "Electrical Testing",
      "Maintenance Work",
      "Quality Control",
      "Research & Development",
      "Field Service",
      "Educational Use",
    ],
    industries: [
      "Electrical Services",
      "Manufacturing",
      "Automotive",
      "Electronics",
      "Power Generation",
      "Telecommunications",
    ],
    features: [
      "True RMS Measurement",
      "Data Hold Function",
      "Min/Max Recording",
      "Relative Mode",
      "Auto-ranging",
      "Backlit Display",
      "Low Battery Indicator",
      "Safety Input Design",
    ],
    certifications: [
      "CAT III/IV Safety",
      "IEC 61010",
      "UL Listed",
      "CSA Approved",
      "CE Marked",
      "RoHS Compliant",
    ],
    seo: {
      title:
        "Digital Multimeters - Professional Electrical Test Equipment | Powerton Engineering",
      description:
        "Professional digital multimeters for electrical measurements. True RMS multimeters with data logging, high accuracy, and safety certifications for industrial use.",
      keywords:
        "digital multimeters, electrical test equipment, True RMS multimeters, voltage meters, current meters, resistance meters",
      canonicalUrl:
        "https://powertonengineering.in/products-sub-category/multimeters",
    },
  },

  // Solar Products
  {
    slug: "solar-panels",
    title: "Solar Panels",
    shortDescription:
      "High-efficiency photovoltaic panels for solar energy generation",
    fullDescription:
      "Premium solar panels including monocrystalline and polycrystalline modules with advanced cell technology for maximum energy conversion efficiency.",
    image: solarPanelsImage,
    parentCategory: "/products-category/solar-products",
    parentCategoryTitle: "Solar Products",
    icon: Sun,
    keyBenefits: [
      "High Energy Conversion",
      "Long Service Life",
      "Weather Resistant",
      "Low Maintenance",
    ],
    specifications: [
      "Power Output: 100W to 500W",
      "Efficiency: 17% to 22%",
      "Voltage: 12V to 48V",
      "Dimensions: Various sizes available",
      "Warranty: 25 years performance",
      "Certifications: IEC 61215, IEC 61730",
    ],
    applications: [
      "Residential Solar Systems",
      "Commercial Installations",
      "Utility Scale Projects",
      "Off-Grid Systems",
      "Solar Pumping",
      "Remote Power Applications",
    ],
    industries: [
      "Renewable Energy",
      "Residential",
      "Commercial Buildings",
      "Agriculture",
      "Telecommunications",
      "Remote Monitoring",
    ],
    features: [
      "Anti-Reflective Glass",
      "Bypass Diodes",
      "Corrosion Resistant Frame",
      "Positive Power Tolerance",
      "PID Resistance",
      "Salt Mist Resistance",
      "Ammonia Resistance",
      "UV Resistant",
    ],
    certifications: [
      "IEC 61215",
      "IEC 61730",
      "UL Listed",
      "CE Marked",
      "ISO 9001",
      "TUV Certified",
    ],
    seo: {
      title:
        "Solar Panels - High Efficiency Photovoltaic Modules | Powerton Engineering",
      description:
        "High-efficiency solar panels and photovoltaic modules for residential, commercial, and utility applications. Monocrystalline and polycrystalline solar panels.",
      keywords:
        "solar panels, photovoltaic modules, solar cells, monocrystalline panels, polycrystalline panels, solar energy systems",
      canonicalUrl:
        "https://powertonengineering.in/products-sub-category/solar-panels",
    },
  },
  {
    slug: "solar-inverters",
    title: "Solar Inverters",
    shortDescription:
      "High-efficiency solar inverters for grid-tie and hybrid applications",
    fullDescription:
      "Advanced solar inverter solutions including string inverters, central inverters, and hybrid inverters with battery storage for residential, commercial, and utility applications.",
    image: solarInvertersImage,
    parentCategory: "/products-category/solar-products",
    parentCategoryTitle: "Solar Products",
    icon: Zap,
    keyBenefits: [
      "High Efficiency Conversion",
      "Grid Support Functions",
      "Battery Integration",
      "Smart Grid Ready",
    ],
    specifications: [
      "Power Range: 1kW to 3MW",
      "Efficiency: 97.5% to 98.5%",
      "Input Voltage: 200V to 1500V DC",
      "Output Voltage: 230V/400V AC",
      "Protection: IP65/IP66",
      "Communication: Ethernet, WiFi, RS485",
    ],
    applications: [
      "Grid-Tie Solar Systems",
      "Hybrid Solar Systems",
      "Utility Scale Installations",
      "Commercial Solar",
      "Residential Solar",
      "Energy Storage Integration",
    ],
    industries: [
      "Renewable Energy",
      "Utilities",
      "Commercial Buildings",
      "Residential",
      "Industrial",
      "Agriculture",
    ],
    features: [
      "MPPT Technology",
      "Grid Monitoring",
      "Arc Fault Detection",
      "Remote Monitoring",
      "Battery Integration",
      "Backup Power",
      "Energy Management",
      "Smart Grid Ready",
    ],
    certifications: [
      "IEC 62109",
      "UL 1741",
      "IEEE 1547",
      "CE Marked",
      "Grid Code Compliant",
      "BIS Certified",
    ],
    seo: {
      title:
        "Solar Inverters - Grid-Tie & Hybrid Solar Inverters | Powerton Engineering",
      description:
        "High-efficiency solar inverters for grid-tie and hybrid applications. String inverters, central inverters with MPPT technology and battery integration.",
      keywords:
        "solar inverters, grid tie inverters, hybrid inverters, string inverters, central inverters, solar power inverters",
      canonicalUrl:
        "https://powertonengineering.in/products-sub-category/solar-inverters",
    },
  },

  // BLDC Motor Systems
  {
    slug: "bldc-ceiling-fan",
    title: "BLDC Ceiling Fans",
    shortDescription:
      "Energy-efficient brushless DC ceiling fans with smart control features",
    fullDescription:
      "Advanced BLDC ceiling fans with superior energy efficiency, low noise operation, and smart control features including remote control and variable speed settings.",
    image: bldcCeilingFanImage,
    parentCategory: "/products-category/bldc",
    parentCategoryTitle: "BLDC Motor Systems",
    icon: Fan,
    keyBenefits: [
      "75% Energy Savings",
      "Ultra-Quiet Operation",
      "Remote Control",
      "Long Service Life",
    ],
    specifications: [
      "Power Consumption: 15-35W",
      "Speed: 6-Speed Control",
      "Airflow: 200-400 CMM",
      "Noise Level: <35dB",
      "Operating Voltage: 220-240V AC",
      "Warranty: 3-5 years",
    ],
    applications: [
      "Residential Homes",
      "Commercial Spaces",
      "Hotels & Restaurants",
      "Offices",
      "Educational Institutions",
      "Healthcare Facilities",
    ],
    industries: [
      "Residential",
      "Commercial Buildings",
      "Hospitality",
      "Healthcare",
      "Educational",
      "Retail",
    ],
    features: [
      "Remote Control",
      "Variable Speed Control",
      "Timer Function",
      "Reverse Mode",
      "LED Lighting",
      "Energy Star Rated",
      "Copper Windings",
      "Aerodynamic Design",
    ],
    certifications: [
      "BEE Star Rated",
      "ISI Marked",
      "CE Certified",
      "Energy Star",
      "RoHS Compliant",
      "FCC Approved",
    ],
    seo: {
      title:
        "BLDC Ceiling Fans - Energy Efficient Smart Ceiling Fans | Powerton Engineering",
      description:
        "Energy-efficient BLDC ceiling fans with remote control, variable speed, and smart features. 75% energy savings with ultra-quiet operation and long service life.",
      keywords:
        "BLDC ceiling fans, energy efficient ceiling fans, smart ceiling fans, brushless DC fans, remote control ceiling fans",
      canonicalUrl:
        "https://powertonengineering.in/products-sub-category/bldc-ceiling-fan",
    },
  },

  // Continue with additional key categories
  {
    slug: "plcs",
    title: "PLCs (Programmable Logic Controllers)",
    shortDescription:
      "Industrial automation controllers for process control and manufacturing",
    fullDescription:
      "Advanced PLC systems with modular design, multiple communication protocols, and integrated safety functions for comprehensive industrial automation solutions.",
    image: plcsImage,
    parentCategory: "/products-category/automation-control-systems",
    parentCategoryTitle: "Automation & Control Systems",
    icon: Cpu,
    keyBenefits: [
      "Flexible Programming",
      "Modular Expansion",
      "Real-Time Control",
      "Integrated Safety",
    ],
    specifications: [
      "I/O Points: 16 to 40,000+",
      "Memory: 512KB to 64MB",
      "Programming: IEC 61131-3",
      "Communication: Ethernet, Serial, Fieldbus",
      "Operating Temperature: -25°C to +60°C",
      "Power Supply: 24VDC, 120/240VAC",
    ],
    applications: [
      "Factory Automation",
      "Process Control",
      "Material Handling",
      "Packaging Machines",
      "Water Treatment",
      "Building Automation",
    ],
    industries: [
      "Manufacturing",
      "Food & Beverage",
      "Automotive",
      "Pharmaceutical",
      "Water & Wastewater",
      "Energy & Utilities",
    ],
    features: [
      "Modular Design",
      "Hot-Swappable I/O",
      "Web-Based Programming",
      "Integrated HMI",
      "Motion Control",
      "Safety Functions",
      "Remote Access",
      "Data Logging",
    ],
    certifications: [
      "CE Marked",
      "UL Listed",
      "CSA Certified",
      "IEC 61131",
      "ATEX Approved",
      "SIL Rated",
    ],
    seo: {
      title:
        "PLCs - Programmable Logic Controllers for Industrial Automation | Powerton Engineering",
      description:
        "Industrial PLCs and programmable logic controllers for automation and process control. Siemens, Allen-Bradley, and Schneider Electric PLC systems.",
      keywords:
        "PLCs, programmable logic controllers, industrial automation, process control, factory automation, PLC programming",
      canonicalUrl: "https://powertonengineering.in/products-sub-category/plcs",
    },
  },

  {
    slug: "centrifugal-pumps",
    title: "Centrifugal Pumps",
    shortDescription:
      "High-efficiency centrifugal pumps for industrial fluid handling",
    fullDescription:
      "Robust centrifugal pumps designed for continuous operation with high flow rates, corrosion resistance, and energy-efficient performance for various industrial applications.",
    image: centrifugalPumpsImage,
    parentCategory: "/products-category/mechanical-pumps-spares",
    parentCategoryTitle: "Mechanical Pumps & Spares",
    icon: RotateCcw,
    keyBenefits: [
      "High Flow Rates",
      "Energy Efficient",
      "Low Maintenance",
      "Corrosion Resistant",
    ],
    specifications: [
      "Flow Rate: 10 to 10,000 GPM",
      "Head: 5 to 500 meters",
      "Pressure: up to 300 PSI",
      "Temperature: -20°C to +200°C",
      "Materials: Cast Iron, Stainless Steel",
      'Suction Size: 2" to 24"',
    ],
    applications: [
      "Water Supply Systems",
      "Industrial Processes",
      "HVAC Systems",
      "Fire Protection",
      "Irrigation",
      "Chemical Transfer",
    ],
    industries: [
      "Water Treatment",
      "Chemical Processing",
      "Power Generation",
      "HVAC Systems",
      "Agriculture",
      "Municipal Services",
    ],
    features: [
      "Self-Priming Options",
      "Back Pullout Design",
      "Mechanical Seals",
      "Casing Wear Rings",
      "Balanced Impellers",
      "Corrosion Resistant Coatings",
      "Variable Speed Drive Compatible",
      "API 610 Compliance",
    ],
    certifications: [
      "API 610",
      "ISO 9001",
      "CE Marked",
      "ANSI/HI Standards",
      "NSF Certified",
      "UL Listed",
    ],
    seo: {
      title:
        "Centrifugal Pumps - Industrial Water & Chemical Pumps | Powerton Engineering",
      description:
        "High-efficiency centrifugal pumps for water supply, chemical processing, and industrial applications. API 610 compliant pumps with corrosion resistant materials.",
      keywords:
        "centrifugal pumps, industrial pumps, water pumps, chemical pumps, process pumps, API 610 pumps",
      canonicalUrl:
        "https://powertonengineering.in/products-sub-category/centrifugal-pumps",
    },
  },

  // Additional BLDC Motor Systems
  {
    slug: "bldc-cooler-exhaust-motor",
    title: "BLDC Cooler & Exhaust Motors",
    shortDescription:
      "Energy-efficient BLDC motors for cooling and ventilation applications",
    fullDescription:
      "High-efficiency brushless DC motors designed for exhaust fans, cooler motors, and ventilation systems with variable speed control and smart operation features.",
    image: bldcCoolerMotorImage,
    parentCategory: "/products-category/bldc",
    parentCategoryTitle: "BLDC Motor Systems",
    icon: Wind,
    keyBenefits: [
      "High Energy Efficiency",
      "Variable Speed Control",
      "Low Noise Operation",
      "Smart Control Features",
    ],
    specifications: [
      "Power Range: 15W to 200W",
      "Speed Control: Variable",
      "Voltage: 12V/24V DC",
      "Operating Temperature: -10°C to +60°C",
      "Protection: IP54/IP65",
      "Control: PWM/Remote Control",
    ],
    applications: [
      "Exhaust Fan Systems",
      "Air Cooler Motors",
      "Ventilation Systems",
      "HVAC Applications",
      "Industrial Cooling",
      "Residential Fans",
    ],
    industries: [
      "HVAC",
      "Building Services",
      "Industrial Manufacturing",
      "Residential",
      "Commercial Buildings",
      "Data Centers",
    ],
    features: [
      "High Efficiency Motor",
      "Variable Speed Operation",
      "Remote Control Compatible",
      "Low Maintenance",
      "Quiet Operation",
      "Energy Saving",
      "Smart Control Features",
      "Compact Design",
    ],
    certifications: [
      "CE Certified",
      "RoHS Compliant",
      "Energy Star Rated",
      "IEC 60034",
      "UL Listed",
      "BIS Approved",
    ],
    seo: {
      title:
        "BLDC Cooler & Exhaust Motors - Energy Efficient Ventilation Motors | Powerton Engineering",
      description:
        "High-efficiency BLDC motors for exhaust fans, coolers, and ventilation systems. Variable speed control with energy savings and smart operation features.",
      keywords:
        "BLDC cooler motors, exhaust fan motors, ventilation motors, energy efficient motors, variable speed fans, smart cooler motors",
      canonicalUrl:
        "https://powertonengineering.in/products-sub-category/bldc-cooler-exhaust-motor",
    },
  },
  {
    slug: "bldc-submersible-surface-pump",
    title: "BLDC Submersible & Surface Pumps",
    shortDescription:
      "Solar-compatible BLDC pumps for water supply and irrigation applications",
    fullDescription:
      "Advanced BLDC pump systems including submersible and surface pumps with solar compatibility, high efficiency, and intelligent control for water supply and irrigation.",
    image: bldcSubmersiblePumpImage,
    parentCategory: "/products-category/bldc",
    parentCategoryTitle: "BLDC Motor Systems",
    icon: Droplet,
    keyBenefits: [
      "Solar Compatible Operation",
      "High Pump Efficiency",
      "Corrosion Resistant Design",
      "Smart Control System",
    ],
    specifications: [
      "Power Range: 0.5HP to 5HP",
      "Head Range: 10m to 200m",
      "Flow Rate: 500 to 10,000 LPH",
      "Operating Voltage: 24V to 48V DC",
      "Solar Compatibility: Yes",
      "Controller: Integrated MPPT",
    ],
    applications: [
      "Solar Water Pumping",
      "Irrigation Systems",
      "Domestic Water Supply",
      "Livestock Watering",
      "Remote Area Water Supply",
      "Borewell Applications",
    ],
    industries: [
      "Agriculture",
      "Solar Energy",
      "Water Supply",
      "Rural Development",
      "Irrigation",
      "Remote Communities",
    ],
    features: [
      "Solar Power Compatible",
      "High Efficiency BLDC Motor",
      "Dry Run Protection",
      "Variable Speed Control",
      "Remote Monitoring",
      "Energy Optimization",
      "Corrosion Resistant",
      "Low Maintenance",
    ],
    certifications: [
      "BIS Certified",
      "CE Marked",
      "Solar Pump Standard",
      "IP68 Rating",
      "IEC 60034",
      "ISI Mark",
    ],
    seo: {
      title:
        "BLDC Submersible & Surface Pumps - Solar Water Pumps | Powerton Engineering",
      description:
        "Solar-compatible BLDC submersible and surface pumps for irrigation and water supply. High efficiency with intelligent control and remote monitoring.",
      keywords:
        "BLDC water pumps, solar submersible pumps, solar surface pumps, irrigation pumps, BLDC pump systems, solar water pumping",
      canonicalUrl:
        "https://powertonengineering.in/products-sub-category/bldc-submersible-surface-pump",
    },
  },
  {
    slug: "bldc-table-fan-wall-fan-motor",
    title: "BLDC Table & Wall Fan Motors",
    shortDescription:
      "Compact BLDC motors for table fans, wall fans, and pedestal fans",
    fullDescription:
      "Energy-efficient BLDC motors designed for table fans, wall fans, and pedestal fans with compact design, silent operation, and remote control capabilities.",
    image: bldcTableFanImage,
    parentCategory: "/products-category/bldc",
    parentCategoryTitle: "BLDC Motor Systems",
    icon: Fan,
    keyBenefits: [
      "Compact Design",
      "Silent Operation",
      "Remote Control",
      "Energy Efficient",
    ],
    specifications: [
      "Power Range: 12W to 50W",
      "Speed Levels: 6-Speed Control",
      "Voltage: 220-240V AC",
      "Noise Level: <35dB",
      "Control: Remote/Touch Panel",
      "Timer Function: Available",
    ],
    applications: [
      "Table Fan Applications",
      "Wall Mount Fans",
      "Pedestal Fans",
      "Desk Fans",
      "Personal Cooling",
      "Office Fans",
    ],
    industries: [
      "Home Appliances",
      "Office Equipment",
      "Personal Care",
      "Electronics",
      "Consumer Goods",
      "HVAC",
    ],
    features: [
      "Compact Motor Design",
      "Silent Operation",
      "Remote Control Compatible",
      "Timer Function",
      "Height Adjustment",
      "Oscillating Function",
      "LED Display",
      "Sleep Mode",
    ],
    certifications: [
      "BIS Certified",
      "CE Marked",
      "Energy Star",
      "RoHS Compliant",
      "FCC Approved",
      "ISI Mark",
    ],
    seo: {
      title:
        "BLDC Table & Wall Fan Motors - Compact Energy Efficient Fan Motors | Powerton Engineering",
      description:
        "Compact BLDC motors for table fans, wall fans, and pedestal fans. Silent operation with remote control and energy-efficient performance.",
      keywords:
        "BLDC table fan motors, wall fan motors, pedestal fan motors, compact fan motors, energy efficient fan motors, silent fan motors",
      canonicalUrl:
        "https://powertonengineering.in/products-sub-category/bldc-table-fan-wall-fan-motor",
    },
  },

  // Additional Measurement Instruments
  {
    slug: "calibration-equipment",
    title: "Calibration Equipment",
    shortDescription:
      "Precision calibration instruments for maintaining measurement accuracy",
    fullDescription:
      "Comprehensive calibration solutions including process calibrators, temperature calibrators, and pressure calibrators for maintaining measurement accuracy and compliance.",
    image: calibrationImage,
    parentCategory: "/products-category/industrial-measuring-tools",
    parentCategoryTitle: "Industrial & Measuring Tools",
    icon: Target,
    keyBenefits: [
      "Precision Calibration",
      "Measurement Traceability",
      "Multi-Function Capability",
      "Data Logging Features",
    ],
    specifications: [
      "Accuracy: ±0.025% of reading",
      "Temperature Range: -200°C to +1000°C",
      "Pressure Range: 0 to 10,000 PSI",
      "Electrical: 0-30V, 0-25mA",
      "Communication: HART, USB",
      "Display: Large LCD with backlight",
    ],
    applications: [
      "Process Calibration",
      "Temperature Calibration",
      "Pressure Calibration",
      "Electrical Calibration",
      "Maintenance Operations",
      "Quality Assurance",
    ],
    industries: [
      "Process Industries",
      "Calibration Labs",
      "Pharmaceutical",
      "Oil & Gas",
      "Power Generation",
      "Manufacturing",
    ],
    features: [
      "Multi-Function Design",
      "High Accuracy",
      "HART Communication",
      "Data Logging",
      "Auto-stepping",
      "Portable Design",
      "Battery Operation",
      "Traceable Standards",
    ],
    certifications: [
      "NIST Traceable",
      "ISO 17025",
      "CE Marked",
      "UKAS Accredited",
      "A2LA Certified",
      "NABL Approved",
    ],
    seo: {
      title:
        "Calibration Equipment - Process & Temperature Calibrators | Powerton Engineering",
      description:
        "Precision calibration equipment for process, temperature, and pressure calibration. NIST traceable calibrators with data logging and HART communication.",
      keywords:
        "calibration equipment, process calibrators, temperature calibrators, pressure calibrators, precision calibration, NIST traceable",
      canonicalUrl:
        "https://powertonengineering.in/products-sub-category/calibration-equipment",
    },
  },

  // Additional Mechanical Pumps & Spares
  {
    slug: "diaphragm-pumps",
    title: "Diaphragm Pumps",
    shortDescription:
      "Positive displacement diaphragm pumps for chemical transfer applications",
    fullDescription:
      "Complete range of diaphragm pumps including air-operated, electric, and hydraulic models for chemical transfer, metering, and dosing applications.",
    image: diaphragmPumpsImage,
    parentCategory: "/products-category/mechanical-pumps-spares",
    parentCategoryTitle: "Mechanical Pumps & Spares",
    icon: Droplets,
    keyBenefits: [
      "Self-Priming Operation",
      "Chemical Resistant",
      "Precise Metering",
      "Dry Run Safe",
    ],
    specifications: [
      "Flow Rate: 0.1 to 2000 LPM",
      "Pressure: up to 17 bar",
      "Temperature: -40°C to +150°C",
      "Materials: PTFE, PP, SS316",
      "Suction Lift: up to 9m",
      "Viscosity: up to 50,000 cPs",
    ],
    applications: [
      "Chemical Transfer",
      "Metering & Dosing",
      "Abrasive Fluids",
      "Slurry Handling",
      "Paint & Coatings",
      "Food Processing",
    ],
    industries: [
      "Chemical Processing",
      "Water Treatment",
      "Food & Beverage",
      "Pharmaceutical",
      "Paint & Coatings",
      "Mining",
    ],
    features: [
      "Self-Priming",
      "Dry Run Safe",
      "Chemical Resistant",
      "Variable Flow",
      "Precise Metering",
      "Low Pulsation",
      "Easy Maintenance",
      "Leak-Free Operation",
    ],
    certifications: [
      "ATEX Certified",
      "CE Marked",
      "FDA Approved",
      "3A Sanitary",
      "EHEDG Certified",
      "ISO 9001",
    ],
    seo: {
      title:
        "Diaphragm Pumps - Chemical Transfer & Metering Pumps | Powerton Engineering",
      description:
        "Industrial diaphragm pumps for chemical transfer and metering applications. Self-priming, dry-run safe pumps with chemical resistant materials.",
      keywords:
        "diaphragm pumps, chemical pumps, metering pumps, dosing pumps, air operated pumps, positive displacement pumps",
      canonicalUrl:
        "https://powertonengineering.in/products-sub-category/diaphragm-pumps",
    },
  },
  {
    slug: "gear-pumps",
    title: "Gear Pumps",
    shortDescription:
      "Positive displacement gear pumps for high-viscosity fluids",
    fullDescription:
      "Precision gear pumps including external gear, internal gear, and magnetic drive models for handling viscous fluids and precise flow applications.",
    image: gearPumpsImage,
    parentCategory: "/products-category/mechanical-pumps-spares",
    parentCategoryTitle: "Mechanical Pumps & Spares",
    icon: Settings,
    keyBenefits: [
      "High Pressure Capability",
      "Viscous Fluid Handling",
      "Precise Flow Control",
      "Self-Priming Design",
    ],
    specifications: [
      "Flow Rate: 0.5 to 500 LPM",
      "Pressure: up to 250 bar",
      "Viscosity: up to 1,000,000 cPs",
      "Temperature: -10°C to +350°C",
      "Materials: Cast Iron, SS316, Bronze",
      "Accuracy: ±1% flow repeatability",
    ],
    applications: [
      "Viscous Fluid Transfer",
      "Lubrication Systems",
      "Fuel Oil Transfer",
      "Chemical Processing",
      "Food Processing",
      "Polymer Handling",
    ],
    industries: [
      "Chemical Processing",
      "Oil & Gas",
      "Food & Beverage",
      "Pharmaceutical",
      "Plastics",
      "Automotive",
    ],
    features: [
      "High Pressure",
      "Viscous Fluids",
      "Precise Flow",
      "Self-Priming",
      "Low Pulsation",
      "Gentle Handling",
      "Easy Maintenance",
      "No Mechanical Seal",
    ],
    certifications: [
      "API 676",
      "CE Marked",
      "ATEX Approved",
      "FDA Compliant",
      "3A Sanitary",
      "ISO 9001",
    ],
    seo: {
      title:
        "Gear Pumps - High Pressure Positive Displacement Pumps | Powerton Engineering",
      description:
        "Industrial gear pumps for viscous fluids and high-pressure applications. External gear, internal gear, and magnetic drive pumps for precise flow control.",
      keywords:
        "gear pumps, positive displacement pumps, viscous fluid pumps, high pressure pumps, precision pumps, industrial pumps",
      canonicalUrl:
        "https://powertonengineering.in/products-sub-category/gear-pumps",
    },
  },

  // Additional Automation & Control Systems
  {
    slug: "hmi",
    title: "Human Machine Interface (HMI)",
    shortDescription:
      "Industrial HMI panels and operator interfaces for process control",
    fullDescription:
      "Advanced HMI solutions including touchscreen panels, operator interfaces, and mobile HMI systems for industrial automation and process control applications.",
    image: hmiImage,
    parentCategory: "/products-category/automation-control-systems",
    parentCategoryTitle: "Automation & Control Systems",
    icon: Monitor,
    keyBenefits: [
      "Touchscreen Operation",
      "Industrial Grade Design",
      "Real-Time Display",
      "Multi-Protocol Support",
    ],
    specifications: [
      'Screen Size: 4" to 21"',
      "Resolution: 480x272 to 1920x1080",
      "Touch Type: Resistive/Capacitive",
      "Operating Temperature: -20°C to +70°C",
      "Protection: IP65 front panel",
      "Communication: Ethernet, Serial, USB",
    ],
    applications: [
      "Process Monitoring",
      "Machine Control",
      "Data Visualization",
      "Alarm Management",
      "Recipe Management",
      "Operator Interface",
    ],
    industries: [
      "Manufacturing",
      "Process Industries",
      "Water Treatment",
      "Power Generation",
      "Food & Beverage",
      "Pharmaceutical",
    ],
    features: [
      "Touchscreen Interface",
      "Industrial Grade",
      "Real-Time Display",
      "Multi-Protocol",
      "Web-Based Access",
      "Alarm Management",
      "Data Logging",
      "Recipe Management",
    ],
    certifications: [
      "CE Marked",
      "UL Listed",
      "FCC Class A",
      "IEC 61131",
      "NEMA 4X",
      "IP65 Rated",
    ],
    seo: {
      title:
        "Human Machine Interface (HMI) - Industrial Touchscreen Panels | Powerton Engineering",
      description:
        "Industrial HMI panels and touchscreen interfaces for process control and automation. Multi-protocol support with real-time monitoring and control.",
      keywords:
        "HMI panels, human machine interface, touchscreen panels, operator interface, industrial displays, process control HMI",
      canonicalUrl: "https://powertonengineering.in/products-sub-category/hmi",
    },
  },

  // Additional Safety & Protective Devices
  {
    slug: "safety-equipment",
    title: "Safety Equipment",
    shortDescription:
      "Industrial safety equipment and personal protective devices",
    fullDescription:
      "Comprehensive safety solutions including personal protective equipment, fall protection systems, and gas detection equipment for industrial safety compliance.",
    image: safetyEquipmentImage,
    parentCategory: "/products-category/safety-protective-devices",
    parentCategoryTitle: "Safety & Protective Devices",
    icon: HardHat,
    keyBenefits: [
      "Personnel Safety",
      "OSHA Compliance",
      "Fall Protection",
      "Gas Detection",
    ],
    specifications: [
      "Protection Standards: ANSI, EN, CSA",
      "Materials: High-impact resistant",
      "Operating Temperature: -30°C to +60°C",
      "Detection Range: 0-100% LEL",
      "Battery Life: 12+ hours",
      "Certification: ATEX, UL, CSA",
    ],
    applications: [
      "Personal Protection",
      "Fall Protection",
      "Gas Detection",
      "Emergency Response",
      "Confined Space Entry",
      "Industrial Safety",
    ],
    industries: [
      "Oil & Gas",
      "Construction",
      "Manufacturing",
      "Chemical Processing",
      "Mining",
      "Utilities",
    ],
    features: [
      "Hard Hats & Helmets",
      "Safety Glasses",
      "Hearing Protection",
      "Work Gloves",
      "Fall Protection",
      "Gas Detection",
      "Emergency Equipment",
      "Safety Training",
    ],
    certifications: [
      "ANSI Z87.1",
      "OSHA Approved",
      "EN 397",
      "CSA Z94.1",
      "ATEX Certified",
      "UL Listed",
    ],
    seo: {
      title:
        "Industrial Safety Equipment - PPE & Fall Protection | Powerton Engineering",
      description:
        "Industrial safety equipment including PPE, fall protection systems, and gas detection equipment. OSHA compliant safety solutions for workplace protection.",
      keywords:
        "safety equipment, PPE, personal protective equipment, fall protection, gas detection, industrial safety, workplace safety",
      canonicalUrl:
        "https://powertonengineering.in/products-sub-category/safety-equipment",
    },
  },
  {
    slug: "intrinsically-safe-equipment",
    title: "Intrinsically Safe Equipment",
    shortDescription:
      "Explosion-proof and intrinsically safe equipment for hazardous areas",
    fullDescription:
      "Certified intrinsically safe and explosion-proof equipment including barriers, isolators, and enclosures for hazardous location applications.",
    image: intrinsicallySafeImage,
    parentCategory: "/products-category/safety-protective-devices",
    parentCategoryTitle: "Safety & Protective Devices",
    icon: Shield,
    keyBenefits: [
      "ATEX Certified",
      "Explosion Proof",
      "Intrinsic Safety",
      "Hazardous Area Approved",
    ],
    specifications: [
      "Zone Rating: Zone 0/1/2, Div 1/2",
      "Temperature Class: T1 to T6",
      "Protection: Ex ia, Ex d, Ex e",
      "Voltage: 12V to 250V",
      "Current: 4-20mA, 0-10V",
      "Certification: ATEX, IECEx, UL",
    ],
    applications: [
      "Hazardous Area Instrumentation",
      "Signal Isolation",
      "Explosion-Proof Housing",
      "Intrinsic Safety Barriers",
      "Gas Detection Systems",
      "Emergency Shutdown",
    ],
    industries: [
      "Oil & Gas",
      "Petrochemical",
      "Chemical Processing",
      "Pharmaceutical",
      "Mining",
      "Paint & Coatings",
    ],
    features: [
      "ATEX/IECEx Certified",
      "Zone 0/1/2 Approved",
      "Galvanic Isolation",
      "Entity Concept",
      "Hart Transparency",
      "Explosion-Proof Design",
      "Intrinsic Safety",
      "Flameproof Enclosures",
    ],
    certifications: [
      "ATEX Certified",
      "IECEx Approved",
      "UL Class I Div 1",
      "CSA Certified",
      "BASEEFA Approved",
      "TIIS Certified",
    ],
    seo: {
      title:
        "Intrinsically Safe Equipment - ATEX Certified Hazardous Area Equipment | Powerton Engineering",
      description:
        "ATEX certified intrinsically safe equipment for hazardous areas. Explosion-proof barriers, isolators, and enclosures for Zone 0/1/2 applications.",
      keywords:
        "intrinsically safe equipment, ATEX certified, explosion proof, hazardous area equipment, safety barriers, Ex d enclosures",
      canonicalUrl:
        "https://powertonengineering.in/products-sub-category/intrinsically-safe-equipment",
    },
  },

  // Additional Measurement Instruments - Missing Pages
  {
    slug: "power-quality-analyzers",
    title: "Power Quality Analyzers",
    shortDescription:
      "Advanced power quality analyzers for electrical system monitoring and analysis",
    fullDescription:
      "Comprehensive power quality measurement instruments for monitoring voltage, current, harmonics, flicker, and power parameters in electrical distribution systems.",
    image: powerQualityAnalyzerImage,
    parentCategory: "/products-category/industrial-measuring-tools",
    parentCategoryTitle: "Industrial & Measuring Tools",
    icon: Activity,
    keyBenefits: [
      "Power Quality Monitoring",
      "Harmonic Analysis",
      "Energy Measurement",
      "Compliance Testing",
    ],
    specifications: [
      "Voltage Range: 10V to 1000V RMS",
      "Current Range: 1A to 6000A",
      "Frequency: 40 Hz to 70 Hz",
      "Harmonics: up to 63rd order",
      "Accuracy: Class 0.1S",
      "Memory: 8GB internal storage",
    ],
    applications: [
      "Power Quality Monitoring",
      "Energy Auditing",
      "Harmonic Analysis",
      "Load Studies",
      "Troubleshooting",
      "Compliance Testing",
    ],
    industries: [
      "Electrical Utilities",
      "Industrial Manufacturing",
      "Data Centers",
      "Healthcare Facilities",
      "Commercial Buildings",
      "Renewable Energy",
    ],
    features: [
      "Multi-channel Measurement",
      "Real-time Monitoring",
      "Waveform Capture",
      "Event Recording",
      "GPS Time Sync",
      "Web-based Interface",
      "Data Logging",
      "Alarm Management",
    ],
    certifications: [
      "IEC 61000-4-30",
      "IEEE 1159",
      "EN 50160",
      "NIST Traceable",
      "CE Marked",
      "UL Listed",
    ],
    seo: {
      title:
        "Power Quality Analyzers - Electrical System Monitoring | Powerton Engineering",
      description:
        "Advanced power quality analyzers for electrical system monitoring, harmonic analysis, and energy measurement. IEC 61000-4-30 compliant instruments.",
      keywords:
        "power quality analyzers, electrical monitoring, harmonic analysis, energy measurement, power meters, electrical testing",
      canonicalUrl:
        "https://powertonengineering.in/products-sub-category/power-quality-analyzers",
    },
  },
  {
    slug: "analyzers",
    title: "Process Analyzers",
    shortDescription:
      "Advanced gas, liquid, and process analyzers for quality control and monitoring",
    fullDescription:
      "Comprehensive range of process analyzers including gas chromatography, liquid analyzers, O2/CO2 analyzers, and specialized measurement instruments for process monitoring and quality control applications.",
    image: powerQualityAnalyzersImage,
    parentCategory: "/products-category/instrumentation-components",
    parentCategoryTitle: "Instrumentation Components",
    icon: FlaskConical,
    keyBenefits: [
      "Process Control Optimization",
      "Product Quality Assurance",
      "Regulatory Compliance",
      "Enhanced Safety Monitoring",
    ],
    specifications: [
      "Measurement Range: ppm to % levels",
      "Accuracy: ±0.5% of reading",
      "Response Time: 1-30 seconds",
      "Operating Temperature: -10°C to +60°C",
      "Output Signals: 4-20mA, Modbus, Ethernet",
      "Protection Rating: IP65/IP67",
    ],
    applications: [
      "Gas Composition Analysis",
      "Liquid Quality Monitoring",
      "Environmental Monitoring",
      "Process Optimization",
      "Quality Assurance",
      "Safety Monitoring",
    ],
    industries: [
      "Chemical Processing",
      "Oil & Gas Refining",
      "Power Generation",
      "Pharmaceuticals",
      "Water Treatment",
      "Food & Beverage",
    ],
    features: [
      "Multi-component Analysis",
      "Real-time Monitoring",
      "Automatic Calibration",
      "Data Logging",
      "Remote Diagnostics",
      "Low Maintenance",
      "Explosion-proof Options",
      "Web Interface",
    ],
    certifications: [
      "ATEX Certified",
      "IECEx Approval",
      "SIL 2 Rated",
      "FDA 21 CFR Part 11",
      "CE Marked",
      "ISO 9001",
    ],
    seo: {
      title:
        "Process Analyzers - Gas & Liquid Analysis Instruments | Powerton Engineering",
      description:
        "Advanced process analyzers for gas chromatography, liquid analysis, and O2/CO2 monitoring. Precision instruments for process control and quality assurance.",
      keywords:
        "process analyzers, gas analyzers, liquid analyzers, chromatography, O2 analyzers, CO2 analyzers, process monitoring",
      canonicalUrl:
        "https://powertonengineering.in/products-sub-category/analyzers",
    },
  },

  // Additional Automation & Control Systems - Missing Pages
  {
    slug: "scada",
    title: "SCADA Systems",
    shortDescription:
      "Supervisory Control and Data Acquisition systems for industrial automation",
    fullDescription:
      "Comprehensive SCADA solutions for real-time monitoring, control, and data acquisition in industrial processes with advanced visualization and reporting capabilities.",
    image: scadaControlRoomImage,
    parentCategory: "/products-category/automation-control-systems",
    parentCategoryTitle: "Automation & Control Systems",
    icon: Monitor,
    keyBenefits: [
      "Real-Time Monitoring",
      "Centralized Control",
      "Data Acquisition",
      "Historical Trending",
    ],
    specifications: [
      "Concurrent Users: up to 100",
      "I/O Points: unlimited",
      "Communication: Multi-protocol support",
      "Database: SQL Server, Oracle",
      "Operating System: Windows Server",
      "Redundancy: Hot standby support",
    ],
    applications: [
      "Process Monitoring",
      "Remote Control",
      "Data Logging",
      "Alarm Management",
      "Report Generation",
      "Batch Control",
    ],
    industries: [
      "Oil & Gas",
      "Water Treatment",
      "Power Generation",
      "Manufacturing",
      "Chemical Processing",
      "Transportation",
    ],
    features: [
      "Graphical Interface",
      "Real-time Displays",
      "Trend Analysis",
      "Alarm Management",
      "Recipe Management",
      "Security Features",
      "Web-based Client",
      "Mobile Access",
    ],
    certifications: [
      "IEC 61131",
      "OPC Certified",
      "ISA-95 Compliant",
      "Cyber Security",
      "FDA 21 CFR Part 11",
      "ISO 27001",
    ],
    seo: {
      title:
        "SCADA Systems - Industrial Monitoring & Control | Powerton Engineering",
      description:
        "SCADA systems for industrial automation with real-time monitoring, centralized control, and data acquisition. Multi-protocol communication support.",
      keywords:
        "SCADA systems, supervisory control, data acquisition, industrial monitoring, process control, automation systems",
      canonicalUrl:
        "https://powertonengineering.in/products-sub-category/scada",
    },
  },
  {
    slug: "dcs",
    title: "Distributed Control Systems (DCS)",
    shortDescription:
      "Distributed control systems for large-scale process automation",
    fullDescription:
      "Advanced DCS solutions for complex process control with distributed architecture, redundant communication, and integrated safety systems for critical applications.",
    image: dcsControlSystemImage,
    parentCategory: "/products-category/automation-control-systems",
    parentCategoryTitle: "Automation & Control Systems",
    icon: Database,
    keyBenefits: [
      "Distributed Architecture",
      "High Reliability",
      "Integrated Safety",
      "Scalable Design",
    ],
    specifications: [
      "Controller Nodes: up to 1000",
      "I/O Capacity: 50,000+ points",
      "Scan Time: 10ms typical",
      "Redundancy: Triple redundant",
      "Communication: High-speed Ethernet",
      "Safety Integrity: SIL 3",
    ],
    applications: [
      "Process Control",
      "Continuous Manufacturing",
      "Batch Processing",
      "Safety Systems",
      "Asset Management",
      "Performance Optimization",
    ],
    industries: [
      "Oil & Gas",
      "Chemical Processing",
      "Power Generation",
      "Pulp & Paper",
      "Pharmaceutical",
      "Petrochemical",
    ],
    features: [
      "Distributed Control",
      "Redundant Systems",
      "Advanced Control",
      "Integrated Safety",
      "Asset Management",
      "Predictive Maintenance",
      "Historical Data",
      "Engineering Tools",
    ],
    certifications: [
      "IEC 61131",
      "IEC 61508 SIL 3",
      "ISA-95 Compliant",
      "TÜV Certified",
      "Cyber Security",
      "NERC CIP",
    ],
    seo: {
      title:
        "Distributed Control Systems (DCS) - Process Automation | Powerton Engineering",
      description:
        "Advanced DCS solutions for large-scale process control with distributed architecture, redundant systems, and integrated safety features.",
      keywords:
        "DCS systems, distributed control systems, process automation, industrial control, safety systems, process control",
      canonicalUrl: "https://powertonengineering.in/products-sub-category/dcs",
    },
  },

  // Additional Safety & Protective Devices - Missing Pages
  {
    slug: "surge-protectors",
    title: "Surge Protectors",
    shortDescription:
      "Industrial surge protection devices for electrical system protection",
    fullDescription:
      "Comprehensive surge protection solutions including AC power, DC solar, and signal line protectors for safeguarding electrical equipment from transient overvoltages.",
    image: surgeProtectorsElectricalImage,
    parentCategory: "/products-category/safety-protective-devices",
    parentCategoryTitle: "Safety & Protective Devices",
    icon: Shield,
    keyBenefits: [
      "Transient Protection",
      "Equipment Safety",
      "System Reliability",
      "Lightning Protection",
    ],
    specifications: [
      "Voltage Range: 120V to 690V AC",
      "Current Rating: 15kA to 100kA",
      "Response Time: <25 nanoseconds",
      "Protection Level: Class I/II/III",
      "Operating Temperature: -40°C to +85°C",
      "Enclosure: IP20 to IP65",
    ],
    applications: [
      "Power Distribution",
      "Motor Control Centers",
      "Solar Power Systems",
      "Data Communication",
      "Control Panels",
      "Sensitive Equipment",
    ],
    industries: [
      "Power Distribution",
      "Solar Energy",
      "Telecommunications",
      "Industrial Manufacturing",
      "Data Centers",
      "Building Services",
    ],
    features: [
      "MOV Technology",
      "Status Indicators",
      "Remote Indication",
      "Quick Disconnect",
      "DIN Rail Mount",
      "Fail-Safe Design",
      "Low Leakage Current",
      "Thermal Protection",
    ],
    certifications: [
      "UL 1449",
      "IEC 61643",
      "IEEE C62.41",
      "CE Marked",
      "RoHS Compliant",
      "UL Listed",
    ],
    seo: {
      title:
        "Surge Protectors - Industrial Electrical Protection Devices | Powerton Engineering",
      description:
        "Industrial surge protection devices for AC power, DC solar, and signal line protection. UL 1449 listed surge protectors with fast response time.",
      keywords:
        "surge protectors, surge protection devices, electrical protection, lightning protection, power surge protection, industrial SPD",
      canonicalUrl:
        "https://powertonengineering.in/products-sub-category/surge-protectors",
    },
  },
  {
    slug: "grounding-systems",
    title: "Grounding Systems",
    shortDescription:
      "Industrial grounding and earthing systems for electrical safety",
    fullDescription:
      "Complete grounding and earthing solutions including ground rods, conductors, and ground monitoring systems for electrical safety and system protection.",
    image: groundingSystemsImage,
    parentCategory: "/products-category/safety-protective-devices",
    parentCategoryTitle: "Safety & Protective Devices",
    icon: Target,
    keyBenefits: [
      "Electrical Safety",
      "System Protection",
      "Fault Current Path",
      "Equipment Protection",
    ],
    specifications: [
      "Ground Rod Material: Copper-clad steel",
      "Conductor Size: #6 AWG to 750 MCM",
      "Resistance: <1 ohm typical",
      "Current Rating: up to 50kA",
      "Corrosion Resistance: Hot-dip galvanized",
      "Standards: IEEE 80, NEC Article 250",
    ],
    applications: [
      "Electrical Substations",
      "Industrial Facilities",
      "Lightning Protection",
      "Telecommunications",
      "Solar Installations",
      "Building Grounding",
    ],
    industries: [
      "Electrical Utilities",
      "Industrial Manufacturing",
      "Telecommunications",
      "Construction",
      "Solar Energy",
      "Data Centers",
    ],
    features: [
      "Copper Grounding Rods",
      "Grounding Conductors",
      "Clamps & Connectors",
      "Ground Monitoring",
      "Corrosion Protection",
      "Low Resistance",
      "Chemical Treatment",
      "Testing Equipment",
    ],
    certifications: [
      "IEEE 80",
      "NEC Compliant",
      "UL Listed",
      "ANSI Standards",
      "IEC 62305",
      "NFPA 780",
    ],
    seo: {
      title:
        "Grounding Systems - Industrial Electrical Earthing Solutions | Powerton Engineering",
      description:
        "Industrial grounding and earthing systems for electrical safety. Ground rods, conductors, and monitoring systems compliant with IEEE 80 standards.",
      keywords:
        "grounding systems, earthing systems, electrical grounding, ground rods, grounding conductors, electrical safety earthing",
      canonicalUrl:
        "https://powertonengineering.in/products-sub-category/grounding-systems",
    },
  },
  {
    slug: "safety-relays-switches",
    title: "Safety Relays & Switches",
    shortDescription:
      "Industrial safety relays and emergency stop switches for machinery safety",
    fullDescription:
      "Comprehensive safety control devices including safety relays, emergency stop switches, and safety controllers for machine safety and personnel protection.",
    image: safetyRelaysSwitchesImage,
    parentCategory: "/products-category/safety-protective-devices",
    parentCategoryTitle: "Safety & Protective Devices",
    icon: AlertTriangle,
    keyBenefits: [
      "Machine Safety",
      "Personnel Protection",
      "Emergency Shutdown",
      "Safety Compliance",
    ],
    specifications: [
      "Safety Category: Cat 3/4 to ISO 13849",
      "Contact Rating: 6A to 16A",
      "Operating Voltage: 24V DC to 230V AC",
      "Response Time: <10ms",
      "Safety Integrity: SIL 3/PLe",
      "Environmental: IP65/IP67",
    ],
    applications: [
      "Emergency Stop Circuits",
      "Safety Interlock Systems",
      "Light Curtain Interface",
      "Two-Hand Control",
      "Safety Door Monitoring",
      "Press Brake Safety",
    ],
    industries: [
      "Manufacturing",
      "Automotive",
      "Packaging",
      "Food Processing",
      "Pharmaceutical",
      "Material Handling",
    ],
    features: [
      "Dual Channel Safety",
      "Emergency Stop",
      "Safety Monitoring",
      "Diagnostic Functions",
      "Manual Reset",
      "LED Status Display",
      "Expandable Modules",
      "Safety Bus Interface",
    ],
    certifications: [
      "ISO 13849 PLe",
      "IEC 61508 SIL 3",
      "TÜV Certified",
      "CE Marked",
      "UL 508",
      "CSA Approved",
    ],
    seo: {
      title:
        "Safety Relays & Switches - Machine Safety Control Devices | Powerton Engineering",
      description:
        "Industrial safety relays and emergency stop switches for machine safety. SIL 3/PLe rated safety control devices for personnel protection.",
      keywords:
        "safety relays, safety switches, emergency stop, machine safety, safety controllers, safety devices, industrial safety",
      canonicalUrl:
        "https://powertonengineering.in/products-sub-category/safety-relays-switches",
    },
  },

  // Additional Mechanical Pumps & Spares - Missing Pages
  {
    slug: "pump-parts-spares",
    title: "Pump Parts & Spares",
    shortDescription:
      "Industrial pump spare parts and components for maintenance and repair",
    fullDescription:
      "Comprehensive range of pump spare parts including impellers, seals, bearings, and gaskets for all types of industrial pumps to ensure reliable operation and minimize downtime.",
    image: pumpSparesWarehouseImage,
    parentCategory: "/products-category/mechanical-pumps-spares",
    parentCategoryTitle: "Mechanical Pumps & Spares",
    icon: Settings,
    keyBenefits: [
      "Reduced Downtime",
      "OEM Quality Parts",
      "Wide Compatibility",
      "Cost-Effective Maintenance",
    ],
    specifications: [
      "Material: SS316, Bronze, Cast Iron",
      'Size Range: 1" to 48" diameter',
      "Temperature: -20°C to +400°C",
      "Pressure: up to 250 bar",
      "Standards: API, ANSI, DIN",
      "Quality: OEM equivalent",
    ],
    applications: [
      "Pump Maintenance",
      "Emergency Repairs",
      "Preventive Maintenance",
      "Performance Upgrades",
      "Retrofit Projects",
      "Overhaul Services",
    ],
    industries: [
      "Chemical Processing",
      "Water Treatment",
      "Oil & Gas",
      "Power Generation",
      "Mining",
      "Marine",
    ],
    features: [
      "Impellers & Casings",
      "Mechanical Seals",
      "Bearings & Bushings",
      "Gaskets & O-rings",
      "Shafts & Sleeves",
      "Wear Plates",
      "Coupling Components",
      "Motor Parts",
    ],
    certifications: [
      "API Standards",
      "ISO 9001",
      "Material Certificates",
      "Dimensional Reports",
      "Performance Testing",
      "Quality Assurance",
    ],
    seo: {
      title:
        "Pump Parts & Spares - Industrial Pump Components | Powerton Engineering",
      description:
        "Industrial pump spare parts and components for maintenance and repair. OEM quality impellers, seals, bearings, and gaskets for all pump types.",
      keywords:
        "pump spare parts, pump components, pump impellers, pump seals, pump bearings, pump maintenance parts",
      canonicalUrl:
        "https://powertonengineering.in/products-sub-category/pump-parts-spares",
    },
  },

  // Additional Industrial Tools - Missing Pages
  {
    slug: "hand-tools",
    title: "Hand Tools",
    shortDescription:
      "Professional hand tools for industrial maintenance and repair",
    fullDescription:
      "Comprehensive range of professional hand tools including wrenches, screwdrivers, pliers, and specialty tools for industrial maintenance, repair, and assembly operations.",
    image: handToolsWorkshopImage,
    parentCategory: "/products-category/industrial-measuring-tools",
    parentCategoryTitle: "Industrial & Measuring Tools",
    icon: Wrench,
    keyBenefits: [
      "Professional Grade Quality",
      "Ergonomic Design",
      "Precision Engineering",
      "Durable Construction",
    ],
    specifications: [
      "Material: Chrome Vanadium Steel",
      "Finish: Chrome plated",
      "Tolerance: ±0.1mm accuracy",
      "Hardness: 45-50 HRC",
      "Standards: ISO, DIN, ANSI",
      "Lifetime: Industrial grade",
    ],
    applications: [
      "Equipment Maintenance",
      "Assembly Operations",
      "Repair Work",
      "Installation Tasks",
      "Quality Control",
      "Field Service",
    ],
    industries: [
      "Manufacturing",
      "Automotive",
      "Aerospace",
      "Electronics",
      "Construction",
      "Maintenance Services",
    ],
    features: [
      "Adjustable Wrenches",
      "Precision Screwdrivers",
      "Professional Pliers",
      "Measuring Tools",
      "Specialty Tools",
      "Tool Sets",
      "Storage Solutions",
      "Calibrated Tools",
    ],
    certifications: [
      "ISO 9001",
      "DIN Standards",
      "ANSI B107",
      "GS Certified",
      "Professional Grade",
      "Quality Tested",
    ],
    seo: {
      title:
        "Professional Hand Tools - Industrial Maintenance Tools | Powerton Engineering",
      description:
        "Professional hand tools for industrial maintenance and repair. Chrome vanadium steel tools with precision engineering and ergonomic design.",
      keywords:
        "hand tools, professional tools, industrial tools, wrenches, screwdrivers, pliers, maintenance tools",
      canonicalUrl:
        "https://powertonengineering.in/products-sub-category/hand-tools",
    },
  },
  {
    slug: "power-tools",
    title: "Power Tools",
    shortDescription:
      "Industrial power tools for heavy-duty applications and construction",
    fullDescription:
      "Professional power tools including electric drills, grinders, sanders, and specialty power equipment for industrial applications, construction, and heavy-duty maintenance work.",
    image: powerToolsShowcaseImage,
    parentCategory: "/products-category/industrial-measuring-tools",
    parentCategoryTitle: "Industrial & Measuring Tools",
    icon: Drill,
    keyBenefits: [
      "High Performance Motors",
      "Industrial Durability",
      "Safety Features",
      "Professional Results",
    ],
    specifications: [
      "Power Range: 500W to 2500W",
      "Voltage: 110V/220V/240V",
      "Speed: Variable control",
      "Chuck Size: 6mm to 20mm",
      "Duty Cycle: Continuous operation",
      "Protection: IP54 rated",
    ],
    applications: [
      "Drilling Operations",
      "Grinding & Polishing",
      "Cutting & Shaping",
      "Surface Preparation",
      "Assembly Work",
      "Maintenance Tasks",
    ],
    industries: [
      "Construction",
      "Manufacturing",
      "Automotive",
      "Shipbuilding",
      "Metal Fabrication",
      "Maintenance Services",
    ],
    features: [
      "Electric Drills",
      "Angle Grinders",
      "Orbital Sanders",
      "Circular Saws",
      "Impact Drivers",
      "Rotary Hammers",
      "Safety Guards",
      "Variable Speed",
    ],
    certifications: [
      "CE Marked",
      "UL Listed",
      "IEC 60745",
      "OSHA Compliant",
      "Professional Grade",
      "Safety Certified",
    ],
    seo: {
      title:
        "Industrial Power Tools - Professional Electric Tools | Powerton Engineering",
      description:
        "Industrial power tools for heavy-duty applications. Professional electric drills, grinders, sanders with high-performance motors and safety features.",
      keywords:
        "power tools, industrial power tools, electric drills, grinders, sanders, professional tools, construction tools",
      canonicalUrl:
        "https://powertonengineering.in/products-sub-category/power-tools",
    },
  },
  {
    slug: "cutting-tools",
    title: "Cutting Tools",
    shortDescription:
      "Precision cutting tools for machining and industrial applications",
    fullDescription:
      "Professional cutting tools including drill bits, end mills, reamers, and specialized cutting instruments for precision machining and industrial manufacturing applications.",
    image: cuttingToolsDisplayImage,
    parentCategory: "/products-category/industrial-measuring-tools",
    parentCategoryTitle: "Industrial & Measuring Tools",
    icon: Scissors,
    keyBenefits: [
      "Precision Cutting",
      "Extended Tool Life",
      "Superior Finishes",
      "High Productivity",
    ],
    specifications: [
      "Material: HSS, Carbide, CBN",
      "Coating: TiN, TiAlN, Diamond",
      "Size Range: 0.1mm to 100mm",
      "Tolerance: ±0.005mm",
      "Hardness: 62-68 HRC",
      "Standards: ISO, DIN, ANSI",
    ],
    applications: [
      "CNC Machining",
      "Precision Drilling",
      "Milling Operations",
      "Turning Applications",
      "Reaming & Boring",
      "Surface Finishing",
    ],
    industries: [
      "Aerospace",
      "Automotive",
      "Medical Devices",
      "Electronics",
      "Precision Engineering",
      "Tool & Die Making",
    ],
    features: [
      "HSS Drill Bits",
      "Carbide End Mills",
      "Precision Reamers",
      "Threading Tools",
      "Indexable Inserts",
      "Custom Tools",
      "Coated Tools",
      "Specialty Cutters",
    ],
    certifications: [
      "ISO 9001",
      "DIN Standards",
      "ANSI B94",
      "Precision Certified",
      "Quality Tested",
      "Material Certificates",
    ],
    seo: {
      title:
        "Precision Cutting Tools - Industrial Machining Tools | Powerton Engineering",
      description:
        "Precision cutting tools for machining and industrial applications. HSS and carbide drill bits, end mills, reamers with superior performance.",
      keywords:
        "cutting tools, drill bits, end mills, precision tools, machining tools, carbide tools, HSS tools",
      canonicalUrl:
        "https://powertonengineering.in/products-sub-category/cutting-tools",
    },
  },
  {
    slug: "lifting-equipment",
    title: "Lifting Equipment",
    shortDescription:
      "Industrial lifting equipment and material handling solutions",
    fullDescription:
      "Professional lifting equipment including cranes, hoists, lifting chains, and rigging hardware for safe and efficient material handling in industrial applications.",
    image: liftingEquipmentWarehouseImage,
    parentCategory: "/products-category/industrial-measuring-tools",
    parentCategoryTitle: "Industrial & Measuring Tools",
    icon: Construction,
    keyBenefits: [
      "Safe Load Handling",
      "High Load Capacity",
      "Reliable Operation",
      "Safety Compliance",
    ],
    specifications: [
      "Capacity: 500kg to 50 tonnes",
      "Lift Height: 3m to 30m",
      "Safety Factor: 4:1 minimum",
      "Material: Alloy steel",
      "Operating Temperature: -40°C to +60°C",
      "Standards: EN, ASME, OSHA",
    ],
    applications: [
      "Material Handling",
      "Equipment Installation",
      "Maintenance Operations",
      "Construction Work",
      "Warehouse Operations",
      "Assembly Lines",
    ],
    industries: [
      "Manufacturing",
      "Construction",
      "Warehousing",
      "Shipbuilding",
      "Power Generation",
      "Heavy Industry",
    ],
    features: [
      "Electric Hoists",
      "Manual Hoists",
      "Lifting Chains",
      "Wire Rope Slings",
      "Shackles & Hardware",
      "Overhead Cranes",
      "Jib Cranes",
      "Load Blocks",
    ],
    certifications: [
      "CE Marked",
      "OSHA Compliant",
      "EN 14492",
      "ASME B30",
      "Load Tested",
      "Safety Certified",
    ],
    seo: {
      title:
        "Industrial Lifting Equipment - Cranes & Hoists | Powerton Engineering",
      description:
        "Industrial lifting equipment for safe material handling. Electric and manual hoists, lifting chains, cranes with high load capacity and safety compliance.",
      keywords:
        "lifting equipment, industrial hoists, cranes, lifting chains, material handling, rigging equipment, overhead cranes",
      canonicalUrl:
        "https://powertonengineering.in/products-sub-category/lifting-equipment",
    },
  },
];

// Helper function to get product by slug
export const getProductSubCategoryBySlug = (
  slug: string,
): ProductSubCategoryData | undefined => {
  return productsSubCategoryData.find((product) => product.slug === slug);
};

// Get all product subcategory slugs for routing
export const getAllProductSubCategorySlugs = (): string[] => {
  return productsSubCategoryData.map((product) => product.slug);
};

// Get products by parent category
export const getProductsByParentCategory = (
  parentCategory: string,
): ProductSubCategoryData[] => {
  return productsSubCategoryData.filter(
    (product) => product.parentCategory === parentCategory,
  );
};
