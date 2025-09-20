export interface ServicePageData {
  id: string;
  title: string;
  description: string;
  icon: string;
  duration: string;
  popular?: boolean;
  features: string[];
  details: {
    overview: string;
    benefits: string[];
    technologies: string[];
    industries: string[];
  };
}

export const SERVICES_CATEGORY_PAGES: ServicePageData[] = [
  {
    id: "installation-commissioning",
    title: "Installation and Commissioning",
    description: "Professional installation and commissioning services for electrical panels, PLCs, SCADA systems, and industrial equipment with complete system validation. Supports Siemens, Allen-Bradley, and Schneider technologies.",
    icon: "tools",
    duration: "1-4 weeks",
    popular: true,
    features: [
      "PLC/DCS Installation",
      "System Integration", 
      "Performance Testing",
      "Compliance Certification"
    ],
    details: {
      overview: "Complete installation and commissioning services for industrial automation systems, electrical panels, and equipment, with professional certification and testing.",
      benefits: [
        "Professional installation by certified engineers",
        "Comprehensive system testing and commissioning", 
        "Full documentation and certification",
        "Training and handover support",
        "Post-installation support and warranty"
      ],
      technologies: [
        "System installation",
        "Commissioning",
        "Testing", 
        "Certification",
        "Documentation"
      ],
      industries: [
        "Manufacturing",
        "Power generation",
        "Oil and gas",
        "Chemicals", 
        "Water treatment"
      ]
    }
  },
  {
    id: "maintenance-repair",
    title: "Maintenance and Repair", 
    description: "Comprehensive preventive and emergency maintenance services for electrical systems, control panels, and industrial automation equipment. 2-hour emergency response time guaranteed.",
    icon: "wrench",
    duration: "Same day - 1 week",
    popular: true,
    features: [
      "Preventive Maintenance",
      "Emergency Repairs (2hr)",
      "Component Replacement", 
      "System Upgrades"
    ],
    details: {
      overview: "Comprehensive preventive and emergency maintenance services for electrical systems, control panels, and industrial automation equipment designed to minimize downtime and ensure operational efficiency.",
      benefits: [
        "Reduced equipment downtime and operational costs",
        "Extended equipment lifespan through proper maintenance",
        "Improved system reliability and performance",
        "Compliance with safety and regulatory standards",
        "24/7 emergency repair services with quick response"
      ],
      technologies: [
        "Preventive maintenance",
        "Emergency repair",
        "Component replacement",
        "System diagnostics",
        "Performance optimization"
      ],
      industries: [
        "Manufacturing",
        "Process industries", 
        "Power generation",
        "Oil and gas",
        "Water treatment"
      ]
    }
  },
  {
    id: "calibration-testing",
    title: "Calibration and Testing",
    description: "NABL-certified precision calibration and testing services for pressure, temperature, flow instruments and control systems. Maintains ±0.25% accuracy standards.",
    icon: "gauge",
    duration: "2-5 days", 
    features: [
      "NABL Certified Calibration",
      "±0.25% Accuracy Testing",
      "Compliance Verification",
      "Traceability Certificates"
    ],
    details: {
      overview: "NABL-certified precision calibration and testing services for pressure, temperature, flow instruments and control systems to ensure optimal performance and regulatory compliance.",
      benefits: [
        "NABL-certified calibration services",
        "High precision testing with ±0.25% accuracy",
        "Regulatory compliance and certification",
        "Detailed calibration reports and certificates",
        "Regular calibration scheduling and tracking"
      ],
      technologies: [
        "Precision calibration",
        "Accuracy testing",
        "Compliance verification", 
        "Certificate generation",
        "Calibration tracking"
      ],
      industries: [
        "Pharmaceuticals",
        "Food and beverage",
        "Oil and gas",
        "Chemicals",
        "Manufacturing"
      ]
    }
  },
  {
    id: "technical-support",
    title: "Technical Support",
    description: "24/7/365 technical support services with remote diagnostics, on-site troubleshooting, and emergency response. Average response time: 30 minutes remotely, 4 hours on-site.",
    icon: "shield", 
    duration: "Immediate - Ongoing",
    popular: true,
    features: [
      "24/7/365 Support",
      "Remote Diagnostics",
      "4hr On-site Response",
      "Emergency Hotline"
    ],
    details: {
      overview: "24/7 technical support services for troubleshooting, remote assistance, and on-site support with quick response times for all electrical and automation systems.",
      benefits: [
        "24/7 technical support availability",
        "Remote diagnostics and troubleshooting services",
        "On-site emergency assistance when needed", 
        "Quick response times for critical issues",
        "Comprehensive issue resolution and follow-up"
      ],
      technologies: [
        "Remote diagnostics",
        "Troubleshooting",
        "On-site support",
        "System monitoring",
        "Emergency response"
      ],
      industries: [
        "All industries",
        "Critical infrastructure",
        "Process industries",
        "Manufacturing", 
        "Commercial facilities"
      ]
    }
  },
  {
    id: "custom-solutions",
    title: "Custom Solutions",
    description: "Tailored engineering solutions for unique industrial requirements including custom MCC panels, automation systems, and process control solutions. From concept to commissioning.",
    icon: "cog",
    duration: "2-12 weeks",
    features: [
      "Custom MCC Panels",
      "Process Automation", 
      "Unique Applications",
      "End-to-End Solutions"
    ],
    details: {
      overview: "Tailored engineering solutions for unique industrial requirements including custom MCC panels, automation systems, and process control solutions designed specifically for your operational needs.",
      benefits: [
        "Customized solutions for unique requirements",
        "End-to-end engineering and implementation",
        "Optimal integration with existing systems",
        "Improved operational efficiency and control",
        "Ongoing support and optimization services"
      ],
      technologies: [
        "Custom engineering",
        "MCC panel design",
        "Process automation",
        "System integration",
        "Solution optimization"
      ],
      industries: [
        "Manufacturing",
        "Process industries",
        "Power generation",
        "Oil and gas",
        "Specialized applications"
      ]
    }
  },
  {
    id: "consultation-training",
    title: "Consultation and Training",
    description: "Expert consultation services and professional training programs for PLC programming, system design, and industrial automation. ISA-certified training modules with hands-on workshops.",
    icon: "users",
    duration: "1-5 days",
    features: [
      "PLC Programming Training",
      "System Design Consultation", 
      "ISA Certified Modules",
      "Hands-On Workshops"
    ],
    details: {
      overview: "Expert consultation services and professional training programs for PLC programming, system design, and industrial automation with hands-on experience and certification.",
      benefits: [
        "Expert consultation for system optimization",
        "Professional training and certification programs",
        "Hands-on workshops and practical experience",
        "Customized training for specific requirements",
        "Ongoing support and knowledge transfer"
      ],
      technologies: [
        "PLC programming",
        "System design",
        "Training modules",
        "Hands-on workshops", 
        "Knowledge transfer"
      ],
      industries: [
        "Manufacturing",
        "Educational institutions",
        "Engineering companies",
        "Process industries",
        "System integrators"
      ]
    }
  },
  {
    id: "supply-chain-management", 
    title: "Supply Chain Management",
    description: "Comprehensive supply chain management for electrical and automation components from authorized distributors. Genuine parts with warranty and express delivery options.",
    icon: "truck",
    duration: "1-7 days",
    features: [
      "Authorized Distributors",
      "Genuine Parts Only",
      "1-Year Warranty",
      "Express Delivery"
    ],
    details: {
      overview: "Comprehensive supply chain management for electrical and automation components with guaranteed genuine parts from authorized distributors and reliable delivery services.",
      benefits: [
        "Access to genuine parts from authorized distributors",
        "Comprehensive warranty and quality assurance",
        "Fast and reliable delivery services",
        "Inventory management and planning support",
        "Cost-effective procurement solutions"
      ],
      technologies: [
        "Supply chain management",
        "Inventory control",
        "Quality assurance",
        "Logistics coordination",
        "Procurement optimization"
      ],
      industries: [
        "Manufacturing",
        "Process industries",
        "Infrastructure projects",
        "Maintenance operations",
        "System integrators"
      ]
    }
  },
  {
    id: "solar-epc",
    title: "Solar EPC Solutions", 
    description: "Complete solar Engineering, Procurement, and Construction services from 1kW to 1MW systems. MNRE-approved solutions with 25-year performance guarantee.",
    icon: "sun",
    duration: "4-16 weeks",
    features: [
      "MNRE Approved Solutions",
      "1kW to 1MW Capacity",
      "25-Year Performance Guarantee",
      "Grid Connection Support"
    ],
    details: {
      overview: "Complete solar Engineering, Procurement, and Construction services with MNRE-approved solutions ranging from 1kW to 1MW capacity and comprehensive performance guarantees.",
      benefits: [
        "MNRE-approved solar solutions and certification",
        "Complete EPC services from design to commissioning", 
        "25-year performance guarantee and support",
        "Grid connection assistance and compliance",
        "Cost-effective renewable energy solutions"
      ],
      technologies: [
        "Solar system design",
        "EPC services",
        "Grid integration",
        "Performance monitoring",
        "Maintenance services"
      ],
      industries: [
        "Commercial buildings",
        "Industrial facilities",
        "Residential complexes",
        "Agricultural applications",
        "Government projects"
      ]
    }
  }
];

// Helper function to get service data by slug
export const getServiceBySlug = (slug: string): ServicePageData | undefined => {
  return SERVICES_CATEGORY_PAGES.find(service => service.id === slug);
};

// Helper function to get all service slugs for routing
export const getAllServiceSlugs = (): string[] => {
  return SERVICES_CATEGORY_PAGES.map(service => service.id);
};