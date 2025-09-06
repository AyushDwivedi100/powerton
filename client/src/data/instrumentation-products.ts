// Instrumentation Components - Detailed Product Data
// Based on comprehensive research from leading industrial automation sources

import sensorsImage from '@assets/generated_images/Industrial_Sensors_Laboratory_dbb325a1.png';
import transmittersImage from '@assets/generated_images/Transmitters_Electronics_Facility_2d679230.png';
import switchesImage from '@assets/generated_images/Industrial_Switches_Display_465e5621.png';
import valvesImage from '@assets/generated_images/Industrial_Valves_Warehouse_7aa158de.png';
import analyzersImage from '@assets/generated_images/Measurement_Instruments_Laboratory_a811e77b.png';
import signalConditionersImage from '@assets/generated_images/Signal_Processing_Laboratory_d26b0005.png';

export interface InstrumentationProduct {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  category: 'sensors' | 'transmitters' | 'controllers' | 'switches' | 'valves' | 'analyzers' | 'signal-conditioners';
  specifications: string[];
  applications: string[];
  features: string[];
  keyBenefits: string[];
  industries: string[];
  certifications: string[];
  technicalData: {
    operatingTemp: string;
    protection: string;
    communication: string[];
    accuracy: string;
    power: string;
  };
}

export const INSTRUMENTATION_PRODUCTS: InstrumentationProduct[] = [
  // SENSORS
  {
    id: 'sensors',
    title: 'Industrial Sensors',
    shortDescription: 'Comprehensive range of industrial-grade sensors for automation and process control',
    fullDescription: 'Advanced sensor solutions including temperature, pressure, position, motion, flow, level, proximity, and specialized sensors. Our sensor portfolio features digital temperature sensors with silicon-based ICs, pressure sensors for water conservancy and industrial applications, position sensors with MEMS technology, and vision sensors with image processing systems for quality control.',
    image: sensorsImage,
    category: 'sensors',
    specifications: [
      'Temperature Range: -40°C to +125°C',
      'Pressure Range: Vacuum to 7500 PSI',
      'Signal Output: 4-20mA, 0-10V, Digital (USB, PNP/NPN)',
      'Resolution: Up to 24-bit for high precision',
      'Response Time: <10ms for critical applications',
      'IP Protection: IP65/IP67/IP69K ratings available'
    ],
    applications: [
      'Process Control & Monitoring',
      'Manufacturing Automation',
      'Quality Control Systems',
      'Safety & Security Systems',
      'Environmental Monitoring',
      'Predictive Maintenance'
    ],
    features: [
      'Industry 4.0 Ready with IoT Connectivity',
      'Self-Diagnostics & Calibration',
      'Multiple Communication Protocols',
      'Explosion-Proof Variants Available',
      'Extended Temperature Stability',
      'Low Power Consumption'
    ],
    keyBenefits: [
      'High Accuracy & Reliability',
      'Easy Integration & Configuration',
      'Reduced Maintenance Requirements',
      'Enhanced Safety Compliance',
      'Long-Term Stability',
      'Cost-Effective Operation'
    ],
    industries: [
      'Oil & Gas',
      'Chemical & Petrochemical',
      'Power Generation',
      'Water Treatment',
      'Food & Beverage',
      'Automotive Manufacturing'
    ],
    certifications: ['CE', 'UL', 'CSA', 'ATEX', 'IECEx', 'SIL 2/3'],
    technicalData: {
      operatingTemp: '-40°C to +125°C',
      protection: 'IP65/IP67/IP69K',
      communication: ['4-20mA', 'HART', 'Modbus', 'Ethernet', 'Wireless'],
      accuracy: '±0.1% to ±0.5% of span',
      power: '24V DC, 115/230V AC, Loop-powered'
    }
  },

  // TRANSMITTERS & TRANSDUCERS
  {
    id: 'transmitters',
    title: 'Transmitters & Transducers',
    shortDescription: 'Precision transmitters for pressure, temperature, flow, and level measurement',
    fullDescription: 'Comprehensive range of industrial transmitters including pressure transmitters (gauge, absolute, differential), temperature transmitters, flow measurement devices, and multivariable transmitters. Features advanced technologies like strain gauge, capacitive, and piezoresistive sensing with HART digital communication. Market leaders like Emerson Rosemount, ABB, Yokogawa, and Honeywell provide reliable solutions for process industries.',
    image: transmittersImage,
    category: 'transmitters',
    specifications: [
      'Accuracy: ±0.05% to ±0.25% of span',
      'Stability: 5-year ±0.1% span stability',
      'Operating Range: Up to 7,500 PSI pressure',
      'Rangeability: Up to 400:1 turndown ratio',
      'Output: 4-20mA + HART digital',
      'Multivariable: Pressure, flow, temperature in one device'
    ],
    applications: [
      'Pipeline Monitoring',
      'Process Control',
      'Tank Level Measurement',
      'Flow Measurement',
      'Safety Systems',
      'Regulatory Compliance'
    ],
    features: [
      'Smart Diagnostics & Predictive Maintenance',
      'Coplanar Technology for Easy Installation',
      'Remote Seal Capability',
      'Wireless HART Options',
      'Temperature Compensation',
      'Self-Diagnostics'
    ],
    keyBenefits: [
      'Industry-Leading Accuracy',
      'Reduced Total Cost of Ownership',
      'Enhanced Process Optimization',
      'Simplified Installation & Commissioning',
      'Improved Safety & Reliability',
      'Future-Ready Connectivity'
    ],
    industries: [
      'Oil & Gas Refining',
      'Chemical Processing',
      'Water & Wastewater',
      'Power Generation',
      'Pulp & Paper',
      'Food & Beverage'
    ],
    certifications: ['SIL 2/3', 'ATEX', 'IECEx', 'FM', 'CSA', 'NEPSI'],
    technicalData: {
      operatingTemp: '-40°C to +185°C',
      protection: 'IP65/IP67',
      communication: ['HART', 'Foundation Fieldbus', 'Profibus', 'Wireless'],
      accuracy: '±0.05% to ±0.25%',
      power: '10.5-55V DC Loop-powered'
    }
  },

  // CONTROLLERS & RECORDERS
  {
    id: 'controllers',
    title: 'Controllers & Recorders',
    shortDescription: 'Advanced PLC, PAC, DCS, and SCADA systems for industrial automation',
    fullDescription: 'Comprehensive automation control systems including Programmable Logic Controllers (PLCs), Programmable Automation Controllers (PACs), Distributed Control Systems (DCS), and SCADA solutions. Features IEC 61131-3 programming standards with languages including Ladder Logic, Structured Text, and Function Block Diagrams. Leading brands include Siemens SIMATIC, Rockwell Allen-Bradley, Schneider Electric, and ABB systems.',
    image: analyzersImage,
    category: 'controllers',
    specifications: [
      'I/O Capacity: 16 to 2048+ points',
      'Processing Speed: Sub-millisecond cycle times',
      'Memory: Up to 32MB program and data memory',
      'Communication: Multiple protocol support',
      'Programming: IEC 61131-3 compliant languages',
      'Redundancy: Hot-standby options available'
    ],
    applications: [
      'Manufacturing Automation',
      'Process Control',
      'Building Management',
      'Machine Control',
      'Batch Processing',
      'Motion Control'
    ],
    features: [
      'Flexible Programming Environment',
      'Scalable Architecture',
      'Integrated Diagnostics',
      'Web-based Configuration',
      'Real-time Data Exchange',
      'Cybersecurity Built-in'
    ],
    keyBenefits: [
      'Reduced Engineering Time',
      'Enhanced System Performance',
      'Improved Operational Efficiency',
      'Lower Maintenance Costs',
      'Future-Proof Technology',
      'Integrated Safety Functions'
    ],
    industries: [
      'Automotive Manufacturing',
      'Chemical Processing',
      'Power Generation',
      'Water Treatment',
      'Food Processing',
      'Pharmaceutical'
    ],
    certifications: ['CE', 'UL', 'CSA', 'SIL 2/3', 'ATEX', 'IECEx'],
    technicalData: {
      operatingTemp: '0°C to +60°C',
      protection: 'IP20 to IP67',
      communication: ['Ethernet/IP', 'Profibus', 'Modbus', 'OPC UA'],
      accuracy: 'Sub-millisecond precision',
      power: '24V DC, 120/240V AC'
    }
  },

  // SWITCHES & INDICATORS
  {
    id: 'switches',
    title: 'Switches & Indicators',
    shortDescription: 'Industrial-grade switches, pushbuttons, indicators, and control panel components',
    fullDescription: 'Complete range of industrial control components including pushbuttons (16mm, 22mm, 30mm), selector switches, emergency stops, pilot lights, and stack lights. Features include momentary and maintained contacts, LED illumination, multiple colors, IP65/IP67 protection, and compliance with safety standards. Leading manufacturers include Siemens SIRIUS, Omron M22N series, Rockwell 800 series, and Schneider Harmony series.',
    image: switchesImage,
    category: 'switches',
    specifications: [
      'Contact Rating: 6A 240VAC, 10A 120VAC',
      'Mounting Diameters: 16mm, 22mm, 30mm',
      'Protection: IP65/IP67 standard',
      'Illumination: LED technology, multiple colors',
      'Contact Types: Single/Double break, NO/NC',
      'Operating Temperature: -40°C to +85°C'
    ],
    applications: [
      'Control Panels',
      'Machine Operators',
      'Emergency Systems',
      'Process Control',
      'Safety Systems',
      'Status Indication'
    ],
    features: [
      'Modular Contact Blocks',
      'Anti-vandal Designs',
      'Capacitive Touch Technology',
      'Self-Monitoring Diagnostics',
      'Quick-connect Terminals',
      'Ergonomic Operation'
    ],
    keyBenefits: [
      'High Reliability & Durability',
      'Easy Installation & Maintenance',
      'Comprehensive Safety Compliance',
      'Flexible Configuration Options',
      'Long Service Life',
      'Cost-Effective Solutions'
    ],
    industries: [
      'Manufacturing',
      'Power Distribution',
      'Building Automation',
      'Transportation',
      'Mining',
      'Marine Applications'
    ],
    certifications: ['UL', 'CSA', 'CE', 'IEC 60947-5-1', 'NFPA 70E'],
    technicalData: {
      operatingTemp: '-40°C to +85°C',
      protection: 'IP65/IP67/IP69K',
      communication: ['Hardwired', 'Digital I/O', 'Network Interfaces'],
      accuracy: '±0.1mm mechanical precision',
      power: '24V DC/AC, 120/240V AC'
    }
  },

  // VALVES & ACTUATORS
  {
    id: 'valves',
    title: 'Valves & Actuators',
    shortDescription: 'Industrial valve automation solutions with pneumatic, electric, and hydraulic actuators',
    fullDescription: 'Comprehensive valve automation portfolio including quarter-turn and linear valves with pneumatic, electric, and hydraulic actuators. Features smart technologies with IoT connectivity, condition monitoring, predictive maintenance, and SIL3 certification. Market valued at $30.79 billion by 2032, with electric actuators showing fastest growth due to precision and digital integration capabilities.',
    image: valvesImage,
    category: 'valves',
    specifications: [
      'Valve Types: Ball, Butterfly, Globe, Gate, Control',
      'Actuator Types: Pneumatic, Electric, Hydraulic',
      'Torque Range: 10 Nm to 100,000+ Nm',
      'Operating Pressure: Vacuum to 10,000+ PSI',
      'Flow Coefficients: Cv 0.1 to 20,000+',
      'Control Accuracy: ±1% of full scale'
    ],
    applications: [
      'Process Control',
      'Flow Regulation',
      'Safety Shutdown Systems',
      'On/Off Control',
      'Throttling Applications',
      'Emergency Isolation'
    ],
    features: [
      'Smart Positioners with HART/Foundation Fieldbus',
      'Fail-Safe Operation (Fail Open/Closed)',
      'Position Feedback & Diagnostics',
      'Manual Override Capability',
      'Explosion-Proof Designs',
      'Self-Optimizing Control'
    ],
    keyBenefits: [
      'Precise Flow Control',
      'Enhanced Safety & Reliability',
      'Reduced Energy Consumption',
      'Predictive Maintenance Capability',
      'Improved Process Efficiency',
      'Lower Operating Costs'
    ],
    industries: [
      'Oil & Gas',
      'Chemical & Petrochemical',
      'Power Generation',
      'Water Treatment',
      'Mining',
      'Food & Beverage'
    ],
    certifications: ['SIL 2/3', 'ATEX', 'IECEx', 'API', 'ANSI', 'ISO 15848'],
    technicalData: {
      operatingTemp: '-46°C to +538°C',
      protection: 'IP65/IP67/IP68',
      communication: ['4-20mA', 'HART', 'Foundation Fieldbus', 'Profibus'],
      accuracy: '±1% of full scale',
      power: '24V DC, 120/240V AC, Pneumatic 3-15 PSI'
    }
  },

  // ANALYZERS
  {
    id: 'analyzers',
    title: 'Process Analyzers',
    shortDescription: 'Advanced gas and liquid analyzers for industrial process measurement and monitoring',
    fullDescription: 'Comprehensive process analyzer solutions including gas analyzers, liquid analyzers, and multi-parameter measurement systems. Features Tunable Diode Laser (TDL) technology, spectroscopy methods, and electrochemical sensors for measuring O₂, CO₂, CO, H₂S, NH₃, pH, conductivity, TOC, and more. Market growing at 6.5% CAGR with strong demand from oil & gas, chemical, pharmaceutical, and environmental monitoring sectors.',
    image: analyzersImage,
    category: 'analyzers',
    specifications: [
      'Gas Analysis: O₂, CO₂, CO, H₂S, NH₃, CH₄, NOx, SO₂',
      'Liquid Analysis: pH, Conductivity, TOC, Turbidity, DO',
      'Measurement Range: ppm to % concentration levels',
      'Accuracy: ±1% to ±5% of reading',
      'Response Time: <60 seconds for most parameters',
      'Calibration: Automatic or manual options'
    ],
    applications: [
      'Process Optimization',
      'Emissions Monitoring',
      'Quality Control',
      'Environmental Compliance',
      'Safety Monitoring',
      'Regulatory Reporting'
    ],
    features: [
      'Multi-Parameter Measurement',
      'Self-Diagnostics & Auto-Calibration',
      'Intrinsically Safe Designs',
      'Remote Monitoring Capability',
      'Data Logging & Trending',
      'Alarm Management'
    ],
    keyBenefits: [
      'Improved Process Control',
      'Enhanced Product Quality',
      'Regulatory Compliance',
      'Reduced Operating Costs',
      'Enhanced Safety',
      'Environmental Protection'
    ],
    industries: [
      'Oil & Gas Refining',
      'Chemical Processing',
      'Pharmaceuticals',
      'Water Treatment',
      'Power Generation',
      'Environmental Monitoring'
    ],
    certifications: ['ATEX', 'IECEx', 'FM', 'CSA', 'EPA Methods', 'ISO 17025'],
    technicalData: {
      operatingTemp: '-20°C to +60°C',
      protection: 'IP65/IP66',
      communication: ['4-20mA', 'Modbus', 'Ethernet', 'Wireless'],
      accuracy: '±1% to ±5% of reading',
      power: '24V DC, 115/230V AC'
    }
  },

  // SIGNAL CONDITIONERS
  {
    id: 'signal-conditioners',
    title: 'Signal Conditioners',
    shortDescription: 'Isolation amplifiers and signal conditioning solutions for industrial automation',
    fullDescription: 'Advanced signal conditioning solutions including isolation amplifiers, signal converters, and measuring transducers. Features galvanic isolation up to 2.5kV, signal amplification from mV to standard levels (0-10V, 4-20mA), noise filtering, and safety protection. Market projected to reach $1.6 billion by 2030 with CAGR of 5.8%, driven by IoT and automation system demands.',
    image: signalConditionersImage,
    category: 'signal-conditioners',
    specifications: [
      'Isolation Voltage: 300V to 2.5kV test voltage',
      'Signal Types: 0-20mA, 4-20mA, 0-10V, ±10V, mV ranges',
      'Accuracy: 0.5% at 25°C, <50PPM/°C drift',
      'Bandwidth: Up to 400kHz for specialized applications',
      'Mounting: DIN rail (6mm to 22.5mm width)',
      'Power: 24-110V DC / 110-230V AC options'
    ],
    applications: [
      'Process Control Systems',
      'Data Acquisition',
      'Ground Loop Elimination',
      'Noise Filtering',
      'Safety Circuits',
      'Hazardous Area Interfaces'
    ],
    features: [
      'SIL 2/3 Functional Safety Certified',
      'HART Communication Support',
      'Smartphone App Configuration',
      'Pluggable Connection Technology',
      'Universal Input/Output Options',
      'Ex Zone Compliance'
    ],
    keyBenefits: [
      'Enhanced Signal Integrity',
      'Improved Safety & Protection',
      'Reduced Installation Time',
      'Lower Maintenance Requirements',
      'Flexible Configuration',
      'Compact Space-Saving Design'
    ],
    industries: [
      'Process Control',
      'Power Generation',
      'Automotive',
      'Aerospace',
      'Medical Equipment',
      'Railway Systems'
    ],
    certifications: ['SIL 2/3', 'EN 61508', 'ATEX', 'IECEx', 'UL', 'CSA'],
    technicalData: {
      operatingTemp: '-40°C to +85°C',
      protection: 'IP20 (DIN rail), IP65/IP67 (field mount)',
      communication: ['4-20mA', 'HART', 'Modbus', 'Digital I/O'],
      accuracy: '0.5% at 25°C',
      power: '24-110V DC, 110-230V AC'
    }
  }
];

// Category definitions for navigation and filtering
export const INSTRUMENTATION_CATEGORIES = [
  {
    id: 'sensors',
    name: 'Sensors',
    description: 'Temperature, pressure, position, flow, and specialized sensors',
    icon: 'Thermometer',
    color: 'bg-blue-500'
  },
  {
    id: 'transmitters',
    name: 'Transmitters & Transducers',
    description: 'Precision measurement and signal transmission devices',
    icon: 'Radio',
    color: 'bg-green-500'
  },
  {
    id: 'controllers',
    name: 'Controllers & Recorders',
    description: 'PLC, PAC, DCS, and SCADA automation systems',
    icon: 'Cpu',
    color: 'bg-purple-500'
  },
  {
    id: 'switches',
    name: 'Switches & Indicators',
    description: 'Control panel components and operator interfaces',
    icon: 'ToggleLeft',
    color: 'bg-orange-500'
  },
  {
    id: 'valves',
    name: 'Valves & Actuators',
    description: 'Automated valve solutions with smart actuators',
    icon: 'Gauge',
    color: 'bg-red-500'
  },
  {
    id: 'analyzers',
    name: 'Process Analyzers',
    description: 'Gas and liquid analysis systems',
    icon: 'FlaskConical',
    color: 'bg-teal-500'
  },
  {
    id: 'signal-conditioners',
    name: 'Signal Conditioners',
    description: 'Isolation amplifiers and signal processing',
    icon: 'Zap',
    color: 'bg-indigo-500'
  }
];

export const getInstrumentationProduct = (id: string): InstrumentationProduct | undefined => {
  return INSTRUMENTATION_PRODUCTS.find(product => product.id === id);
};

export const getInstrumentationProductsByCategory = (category: string): InstrumentationProduct[] => {
  return INSTRUMENTATION_PRODUCTS.filter(product => product.category === category);
};