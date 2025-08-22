import automationProjectImage from '@assets/generated_images/Automation_Project_Showcase_c9ed4237.png';
import corporateClientImage from '@assets/generated_images/Corporate_Client_Building_10ddd5dd.png';
import engineeringTeamImage from '@assets/generated_images/Engineering_Team_Working_82b3dac7.png';
import companyLogoImage from '@assets/generated_images/Company_Logo_Design_001b8efd.png';
import industrialAutomationImage from '@assets/generated_images/Industrial_Automation_Factory_54a2a6f1.png';
import powerPlantControlImage from '@assets/generated_images/Power_Plant_Control_Room_0bd716bf.png';
import { getProductImage } from '@/assets/images';

export const COMPANY_INFO = {
  name: "Powerton Engineering Pvt. Ltd.",
  tagline: "Your trusted partner in industrial automation and electrical engineering",
  phone: "+91-94627-71662",
  email: "info.powerton@gmail.com",
  address: {
    street: "2nd Floor, F-25, F Block, Sector 6",
    city: "Noida",
    state: "Uttar Pradesh",
    pincode: "201301",
    landmark: "nearest metro-Sector 15"
  },
  businessHours: {
    weekdays: "Monday - Saturday: 9:00 AM - 6:00 PM",
    sunday: "Sunday: Emergency Support Only"
  },
  socialMedia: {
    linkedin: "#",
    twitter: "#",
    facebook: "#"
  }
};

export const SERVICES = [
  {
    id: "installation-commissioning",
    title: "Installation and Commissioning",
    description: "Professional installation and commissioning services for electrical panels, control systems, and industrial equipment with complete system validation.",
    icon: "tools",
    features: ["Equipment Installation", "System Integration", "Performance Testing", "Compliance Certification"]
  },
  {
    id: "maintenance-repair",
    title: "Maintenance and Repair",
    description: "Comprehensive maintenance and repair services for electrical systems, control panels, and industrial equipment to ensure optimal performance.",
    icon: "wrench",
    features: ["Preventive Maintenance", "Emergency Repairs", "Component Replacement", "System Upgrades"]
  },
  {
    id: "calibration-testing",
    title: "Calibration and Testing",
    description: "Precision calibration and testing services for instruments, meters, and control systems to maintain accuracy and compliance standards.",
    icon: "gauge",
    features: ["Instrument Calibration", "Performance Testing", "Compliance Verification", "Accuracy Certification"]
  },
  {
    id: "consultation-training",
    title: "Consultation and Training",
    description: "Expert technical consultation and comprehensive training programs for electrical systems, automation, and industrial engineering solutions.",
    icon: "users",
    features: ["Technical Consultation", "Training Programs", "System Design", "Best Practices"]
  },
  {
    id: "custom-solutions",
    title: "Custom Solutions",
    description: "Tailored engineering solutions designed specifically for unique industrial requirements, including custom control panels and automation systems.",
    icon: "cog",
    features: ["Custom Design", "Specialized Solutions", "Unique Requirements", "Scalable Systems"]
  },
  {
    id: "supply-chain-management",
    title: "Supply Chain Management",
    description: "Comprehensive supply chain management services for electrical components, spare parts, and industrial equipment with reliable sourcing.",
    icon: "truck",
    features: ["Component Sourcing", "Inventory Management", "Quality Assurance", "Timely Delivery"]
  },
  {
    id: "technical-support",
    title: "Technical Support",
    description: "24/7 technical support services for troubleshooting, remote assistance, and on-site support for all electrical and automation systems.",
    icon: "shield",
    features: ["24/7 Support", "Remote Assistance", "On-site Support", "Emergency Response"]
  },
  {
    id: "solar-epc",
    title: "Solar EPC",
    description: "Complete Engineering, Procurement, and Construction services for solar power projects including design, installation, and commissioning.",
    icon: "sun",
    features: ["Solar Design", "Project Management", "Installation", "Grid Connection"]
  }
];

export const PRODUCTS = [
  {
    id: "instrumentation-components",
    title: "Instrumentation Components",
    description: "High-precision instrumentation components for accurate measurement and control in industrial processes.",
    icon: "Gauge",
    image: getProductImage("instrumentation-components")?.src || "",
    features: [
      "Pressure Transmitters",
      "Temperature Sensors",
      "Flow Meters",
      "Level Indicators"
    ],
    subcategories: [
      {
        id: "sensors",
        title: "Sensors",
        description: "Temperature, pressure, position, and motion sensors for industrial automation"
      },
      {
        id: "transmitters",
        title: "Transmitters & Transducers",
        description: "Signal conversion and transmission devices for measurement applications"
      },
      {
        id: "controllers",
        title: "Controllers & Recorders",
        description: "Process controllers and data recording systems for industrial control"
      },
      {
        id: "switches",
        title: "Switches & Indicators",
        description: "Industrial switches, indicators, and signaling devices"
      },
      {
        id: "valves",
        title: "Valves & Actuators",
        description: "Control valves and actuators for process control systems"
      },
      {
        id: "analyzers",
        title: "Analyzers",
        description: "Gas, liquid, and process analyzers for quality control"
      },
      {
        id: "signal-conditioners",
        title: "Signal Conditioners",
        description: "Signal processing and conditioning equipment for measurement systems"
      }
    ]
  },
  {
    id: "electrical-components",
    title: "Electrical Components",
    description: "Comprehensive range of electrical components for power distribution and control systems.",
    icon: "Zap",
    image: getProductImage("electrical-components")?.src || "",
    features: [
      "Circuit Breakers",
      "Contactors",
      "Relays",
      "Power Supplies"
    ],
    subcategories: [
      {
        id: "cables-wires",
        title: "Cables & Wires",
        description: "Industrial cables and wires for power transmission and control applications"
      },
      {
        id: "connectors-terminals",
        title: "Connectors & Terminals",
        description: "Electrical connectors and terminal blocks for secure connections"
      },
      {
        id: "circuit-breakers-fuses",
        title: "Circuit Breakers & Fuses",
        description: "Protection devices for electrical circuits and equipment safety"
      },
      {
        id: "power-supplies",
        title: "Power Supplies",
        description: "AC/DC power supplies and converters for industrial applications"
      },
      {
        id: "enclosures-cabinets",
        title: "Enclosures & Cabinets",
        description: "Electrical enclosures and control cabinets for equipment protection"
      },
      {
        id: "heating-elements-appliances",
        title: "Heating Elements & Appliances",
        description: "Industrial heating elements and electrical appliances"
      }
    ]
  },
  {
    id: "measurement-instruments",
    title: "Measurement Instruments",
    description: "Advanced measurement instruments for precise monitoring and data acquisition in industrial applications.",
    icon: "Activity",
    image: getProductImage("measurement-instruments")?.src || "",
    features: [
      "Digital Multimeters",
      "Oscilloscopes",
      "Signal Analyzers",
      "Calibrators"
    ],
    subcategories: [
      {
        id: "multimeters",
        title: "Multimeters",
        description: "Digital and analog multimeters for electrical measurements"
      },
      {
        id: "oscilloscopes",
        title: "Oscilloscopes",
        description: "Digital storage oscilloscopes for waveform analysis"
      },
      {
        id: "spectrum-analyzers",
        title: "Spectrum Analyzers",
        description: "RF and microwave spectrum analyzers for signal analysis"
      },
      {
        id: "power-quality-analyzers",
        title: "Power Quality Analyzers",
        description: "Instruments for power quality monitoring and analysis"
      },
      {
        id: "calibration-equipment",
        title: "Calibration Equipment",
        description: "Precision calibration tools and reference standards"
      }
    ]
  },
  {
    id: "solar-products",
    title: "Solar Products",
    description: "Complete solar energy solutions including panels, inverters, and monitoring systems for sustainable power generation.",
    icon: "Sun",
    image: getProductImage("solar-products")?.src || "",
    features: [
      "Solar Panels",
      "Inverters",
      "Battery Storage",
      "Monitoring Systems"
    ],
    subcategories: [
      {
        id: "solar-panels",
        title: "Solar Panels",
        description: "High-efficiency photovoltaic panels for renewable energy generation"
      },
      {
        id: "solar-inverters",
        title: "Solar Inverters",
        description: "DC to AC inverters for solar power systems"
      },
      {
        id: "mounting-structures-racking",
        title: "Mounting Structures and Racking Systems",
        description: "Structural mounting solutions for solar panel installations"
      },
      {
        id: "solar-charge-controllers",
        title: "Solar Charge Controllers",
        description: "MPPT and PWM charge controllers for battery charging"
      },
      {
        id: "solar-batteries-energy-storage",
        title: "Solar Batteries and Energy Storage Systems",
        description: "Battery storage solutions for solar energy systems"
      }
    ]
  },
  {
    id: "automation-control-systems",
    title: "Automation and Control Systems",
    description: "Sophisticated automation and control systems for optimized industrial processes and enhanced productivity.",
    icon: "Settings",
    image: getProductImage("automation-control-systems")?.src || "",
    features: [
      "PLCs",
      "HMI Systems",
      "SCADA Software",
      "Industrial Networks"
    ],
    subcategories: [
      {
        id: "plcs",
        title: "PLCs",
        description: "Programmable Logic Controllers for industrial automation"
      },
      {
        id: "scada",
        title: "SCADA",
        description: "Supervisory Control and Data Acquisition systems"
      },
      {
        id: "dcs",
        title: "DCS",
        description: "Distributed Control Systems for process automation"
      },
      {
        id: "hmi",
        title: "HMI",
        description: "Human Machine Interface systems for operator control"
      }
    ]
  },
  {
    id: "safety-protective-devices",
    title: "Safety and Protective Devices",
    description: "Critical safety and protective devices to ensure personnel safety and equipment protection in industrial environments.",
    icon: "Shield",
    image: getProductImage("safety-protective-devices")?.src || "",
    features: [
      "Safety Switches",
      "Emergency Stops",
      "Light Curtains",
      "Protective Barriers"
    ],
    subcategories: [
      {
        id: "surge-protectors",
        title: "Surge Protectors",
        description: "Electrical surge protection devices for equipment safety"
      },
      {
        id: "grounding-systems",
        title: "Grounding Systems",
        description: "Electrical grounding and earthing solutions for safety"
      },
      {
        id: "safety-relays-switches",
        title: "Safety Relays and Switches",
        description: "Safety-rated relays and switches for personnel protection"
      },
      {
        id: "intrinsically-safe-equipment",
        title: "Intrinsically Safe Equipment",
        description: "Explosion-proof and intrinsically safe devices for hazardous areas"
      }
    ]
  },
  {
    id: "mechanical-pumps-spares",
    title: "Mechanical Pumps and Spares",
    description: "High-quality mechanical pumps and spare parts for fluid handling and processing applications.",
    icon: "Cog",
    image: getProductImage("mechanical-pumps-spares")?.src || "",
    features: [
      "Centrifugal Pumps",
      "Positive Displacement Pumps",
      "Pump Components",
      "Maintenance Kits"
    ],
    subcategories: [
      {
        id: "centrifugal-pumps",
        title: "Centrifugal Pumps",
        description: "High-performance centrifugal pumps for fluid transfer applications"
      },
      {
        id: "diaphragm-pumps",
        title: "Diaphragm Pumps",
        description: "Pneumatic and electric diaphragm pumps for chemical handling"
      },
      {
        id: "gear-pumps",
        title: "Gear Pumps",
        description: "Positive displacement gear pumps for viscous fluids"
      },
      {
        id: "pump-parts-spares",
        title: "Pump Parts and Spares",
        description: "Replacement parts and spare components for pump maintenance"
      }
    ]
  },
  {
    id: "industrial-tools-tackles",
    title: "Industrial Tools and Tackles",
    description: "Professional-grade industrial tools and equipment for maintenance, installation, and operational tasks.",
    icon: "Wrench",
    image: getProductImage("industrial-tools-tackles")?.src || "",
    features: [
      "Hand Tools",
      "Power Tools",
      "Lifting Equipment",
      "Safety Gear"
    ],
    subcategories: [
      {
        id: "hand-tools",
        title: "Hand Tools",
        description: "Professional hand tools for maintenance and assembly work"
      },
      {
        id: "power-tools",
        title: "Power Tools",
        description: "Electric and pneumatic power tools for industrial applications"
      },
      {
        id: "cutting-tools",
        title: "Cutting Tools",
        description: "Precision cutting tools and blades for material processing"
      },
      {
        id: "lifting-equipment",
        title: "Lifting Equipment",
        description: "Cranes, hoists, and lifting devices for material handling"
      },
      {
        id: "safety-equipment",
        title: "Safety Equipment",
        description: "Personal protective equipment and safety gear"
      }
    ]
  },
  {
    id: "bldc",
    title: "BLDC",
    description: "Brushless DC motors and control systems for high-efficiency, precision motor applications.",
    icon: "RotateCcw",
    image: getProductImage("bldc")?.src || "",
    features: [
      "BLDC Motors",
      "Motor Controllers",
      "Encoders",
      "Drive Systems"
    ],
    subcategories: [
      {
        id: "bldc-cooler-exhaust-motor",
        title: "BLDC Cooler/Exhaust Motor",
        description: "Energy-efficient BLDC motors for cooling and ventilation systems"
      },
      {
        id: "bldc-ceiling-fan",
        title: "BLDC Ceiling Fan",
        description: "High-efficiency ceiling fans with brushless DC motor technology"
      },
      {
        id: "bldc-submersible-surface-pump",
        title: "BLDC Submersible Surface Pump",
        description: "Solar-powered BLDC pumps for water applications"
      },
      {
        id: "bldc-table-fan-wall-fan-motor",
        title: "BLDC Table Fan/Wall Fan Motor",
        description: "Compact BLDC motors for portable and wall-mounted fans"
      }
    ]
  }
];

export const TESTIMONIALS = [
  {
    name: "Anand Awasthi",
    location: "West Bengal",
    rating: 5,
    comment: "Powerton Engineering made the process of going solar seamless and easy. Their team handled everything from start to finish, and we're thrilled with the results.",
    initials: "AA",
    image: engineeringTeamImage
  },
  {
    name: "Sanjay Patil",
    location: "Uttar Pradesh", 
    rating: 5,
    comment: "I am glad I chose Powerton Engineering for our installation, and I would not hesitate to recommend them to any of my friends.",
    initials: "SP",
    image: engineeringTeamImage
  },
  {
    name: "Rhea Sharma",
    location: "Maharashtra",
    rating: 5,
    comment: "Excellent quality products and outstanding customer service. The technical expertise of the team is impressive and highly professional.",
    initials: "RS",
    image: engineeringTeamImage
  }
];

export const CLIENT_LOGOS = [
  {
    id: "sci-group",
    name: "SCI Group",
    logo: "https://logo.clearbit.com/scigrp.com",
    fallback: corporateClientImage
  },
  {
    id: "agribio",
    name: "Agribio Ltd",
    logo: "https://logo.clearbit.com/agribiogermany.com",
    fallback: corporateClientImage
  },
  {
    id: "motherson",
    name: "Motherson",
    logo: "https://logo.clearbit.com/motherson.com",
    fallback: corporateClientImage
  },
  {
    id: "praj",
    name: "Praj Industries",
    logo: "https://logo.clearbit.com/praj.net",
    fallback: corporateClientImage
  },
  {
    id: "thermax",
    name: "Thermax",
    logo: "https://logo.clearbit.com/thermaxglobal.com",
    fallback: corporateClientImage
  },
  {
    id: "ankur",
    name: "Ankur Scientific",
    logo: "https://logo.clearbit.com/ankurscientific.com",
    fallback: corporateClientImage
  },
  {
    id: "dls",
    name: "DLS Group",
    logo: "https://logo.clearbit.com/dlsindia.co.in",
    fallback: corporateClientImage
  },
  {
    id: "boudh",
    name: "Boudh Industries",
    logo: "https://logo.clearbit.com/boudhindustries.com",
    fallback: corporateClientImage
  },
  {
    id: "lokmangal",
    name: "Lokmangal",
    logo: "https://logo.clearbit.com/lokmangal.com",
    fallback: corporateClientImage
  },
  {
    id: "marcuras",
    name: "Marcuras",
    logo: "https://logo.clearbit.com/marcuras.com",
    fallback: corporateClientImage
  },
  {
    id: "nv-group",
    name: "NV Group",
    logo: "https://logo.clearbit.com/nvgroup.com",
    fallback: corporateClientImage
  },
  {
    id: "anand-nv",
    name: "Anand NV",
    logo: "https://logo.clearbit.com/anandnv.com",
    fallback: corporateClientImage
  },
  {
    id: "dhanuka",
    name: "Dhanuka Agritech",
    logo: "https://logo.clearbit.com/dhanuka.com",
    fallback: corporateClientImage
  },
  {
    id: "mjson",
    name: "MJSON",
    logo: "https://logo.clearbit.com/mjson.com",
    fallback: corporateClientImage
  },
  {
    id: "procient",
    name: "Procient",
    logo: "https://logo.clearbit.com/procient.com",
    fallback: corporateClientImage
  }
];

export const CLIENTS = [
  "SCI Group", "Agribio Ltd", "Motherson", "Praj Industries", "Thermax", "Ankur Scientific",
  "DLS Group", "Boudh Industries", "Lokmangal", "Marcuras", "NV Group", "Anand NVH",
  "Dhanuka", "MJSONS", "DKSM", "Procient", "Patel Group", "Regreen", "Muzaffarpur",
  "Safex", "Radice", "Rajshree", "Lahag"
];

export const PROJECTS = [
  {
    id: "thermal-plant",
    title: "Thermal Power Plant Automation",
    category: "Power Plant",
    description: "Complete automation solution for 250MW thermal power plant including control panels, SCADA systems, and safety interlocks.",
    location: "Uttar Pradesh",
    duration: "12 months",
    year: "2023",
    image: powerPlantControlImage,
    highlights: ["SCADA Implementation", "Safety Systems", "Control Panels", "Performance Monitoring"]
  },
  {
    id: "pharma-plant",
    title: "Pharmaceutical Plant Control System",
    category: "Manufacturing",
    description: "Advanced process control and monitoring system for pharmaceutical manufacturing with FDA compliance and data integrity features.",
    location: "Maharashtra",
    duration: "8 months",
    year: "2023",
    image: industrialAutomationImage,
    highlights: ["FDA Compliance", "Data Integrity", "Process Control", "Quality Monitoring"]
  },
  {
    id: "solar-plant",
    title: "10MW Solar Power Installation",
    category: "Solar",
    description: "Complete design and installation of grid-connected solar power plant with monitoring systems and grid synchronization equipment.",
    location: "Rajasthan",
    duration: "6 months",
    year: "2023",
    image: engineeringTeamImage,
    highlights: ["Grid Connection", "Monitoring Systems", "Performance Optimization", "Maintenance Planning"]
  },
  {
    id: "water-treatment",
    title: "Municipal Water Treatment Automation",
    category: "Water Treatment",
    description: "Automated control system for water treatment plant serving 500,000 residents with real-time monitoring and quality control.",
    location: "West Bengal",
    duration: "10 months",
    year: "2022",
    image: automationProjectImage,
    highlights: ["Real-time Monitoring", "Quality Control", "Automated Operations", "Remote Management"]
  }
];

export const SERVICE_OPTIONS = [
  { value: "installation-commissioning", label: "Installation and Commissioning" },
  { value: "maintenance-repair", label: "Maintenance and Repair" },
  { value: "calibration-testing", label: "Calibration and Testing" },
  { value: "consultation-training", label: "Consultation and Training" },
  { value: "custom-solutions", label: "Custom Solutions" },
  { value: "supply-chain-management", label: "Supply Chain Management" },
  { value: "technical-support", label: "Technical Support" },
  { value: "solar-epc", label: "Solar EPC" },
  { value: "other", label: "Other" }
];
