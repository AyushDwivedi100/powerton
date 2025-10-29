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
    title: "services:categories.installation-commissioning",
    description: "services:descriptions.installation-commissioning",
    icon: "tools",
    duration: "services:durations.installation-commissioning",
    popular: true,
    features: [
      "services:features.installation-commissioning.plc-dcs",
      "services:features.installation-commissioning.system-integration",
      "services:features.installation-commissioning.performance-testing",
      "services:features.installation-commissioning.compliance-certification",
    ],
    details: {
      overview: "services:serviceDetails.installationCommissioning.overview",
      benefits: [
        "services:serviceDetails.installationCommissioning.benefits.0",
        "services:serviceDetails.installationCommissioning.benefits.1",
        "services:serviceDetails.installationCommissioning.benefits.2",
        "services:serviceDetails.installationCommissioning.benefits.3",
        "services:serviceDetails.installationCommissioning.benefits.4",
      ],
      technologies: [
        "services:serviceDetails.installationCommissioning.technologies.0",
        "services:serviceDetails.installationCommissioning.technologies.1",
        "services:serviceDetails.installationCommissioning.technologies.2",
        "services:serviceDetails.installationCommissioning.technologies.3",
        "services:serviceDetails.installationCommissioning.technologies.4",
      ],
      industries: [
        "services:serviceDetails.installationCommissioning.industries.0",
        "services:serviceDetails.installationCommissioning.industries.1",
        "services:serviceDetails.installationCommissioning.industries.2",
        "services:serviceDetails.installationCommissioning.industries.3",
        "services:serviceDetails.installationCommissioning.industries.4",
        "services:serviceDetails.installationCommissioning.industries.5",
        "services:serviceDetails.installationCommissioning.industries.6",
        "services:serviceDetails.installationCommissioning.industries.7",
        "services:serviceDetails.installationCommissioning.industries.8",
        "services:serviceDetails.installationCommissioning.industries.9",
        "services:serviceDetails.installationCommissioning.industries.10",
        "services:serviceDetails.installationCommissioning.industries.11",
      ],
    },
  },
  {
    id: "calibration-testing",
    title: "services:categories.calibration-testing",
    description: "services:descriptions.calibration-testing",
    icon: "gauge",
    duration: "services:durations.calibration-testing",
    popular: true,
    features: [
      "services:features.calibration-testing.nabl-certified",
      "services:features.calibration-testing.accuracy-testing",
      "services:features.calibration-testing.compliance",
      "services:features.calibration-testing.certificates",
      "services:features.calibration-testing.preventive",
      "services:features.calibration-testing.emergency",
      "services:features.calibration-testing.replacement",
      "services:features.calibration-testing.upgrades",
    ],
    details: {
      overview: "services:serviceDetails.calibrationTesting.overview",
      benefits: [
        "services:serviceDetails.calibrationTesting.benefits.0",
        "services:serviceDetails.calibrationTesting.benefits.1",
        "services:serviceDetails.calibrationTesting.benefits.2",
        "services:serviceDetails.calibrationTesting.benefits.3",
        "services:serviceDetails.calibrationTesting.benefits.4",
        "services:serviceDetails.calibrationTesting.benefits.5",
        "services:serviceDetails.calibrationTesting.benefits.6",
        "services:serviceDetails.calibrationTesting.benefits.7",
        "services:serviceDetails.calibrationTesting.benefits.8",
        "services:serviceDetails.calibrationTesting.benefits.9",
      ],
      technologies: [
        "services:serviceDetails.calibrationTesting.technologies.0",
        "services:serviceDetails.calibrationTesting.technologies.1",
        "services:serviceDetails.calibrationTesting.technologies.2",
        "services:serviceDetails.calibrationTesting.technologies.3",
        "services:serviceDetails.calibrationTesting.technologies.4",
        "services:serviceDetails.calibrationTesting.technologies.5",
        "services:serviceDetails.calibrationTesting.technologies.6",
        "services:serviceDetails.calibrationTesting.technologies.7",
        "services:serviceDetails.calibrationTesting.technologies.8",
        "services:serviceDetails.calibrationTesting.technologies.9",
      ],
      industries: [
        "services:serviceDetails.calibrationTesting.industries.0",
        "services:serviceDetails.calibrationTesting.industries.1",
        "services:serviceDetails.calibrationTesting.industries.2",
        "services:serviceDetails.calibrationTesting.industries.3",
        "services:serviceDetails.calibrationTesting.industries.4",
        "services:serviceDetails.calibrationTesting.industries.5",
        "services:serviceDetails.calibrationTesting.industries.6",
        "services:serviceDetails.calibrationTesting.industries.7",
        "services:serviceDetails.calibrationTesting.industries.8",
        "services:serviceDetails.calibrationTesting.industries.9",
      ],
    },
  },
  {
    id: "technical-support",
    title: "services:categories.technical-support",
    description: "services:descriptions.technical-support",
    icon: "shield",
    duration: "services:durations.technical-support",
    popular: true,
    features: [
      "services:features.technicalSupport.24-7-support",
      "services:features.technicalSupport.remote-diagnostics",
      "services:features.technicalSupport.onsite-response",
      "services:features.technicalSupport.emergency-hotline",
    ],
    details: {
      overview: "services:serviceDetails.technicalSupport.overview",
      benefits: [
        "services:serviceDetails.technicalSupport.benefits.0",
        "services:serviceDetails.technicalSupport.benefits.1",
        "services:serviceDetails.technicalSupport.benefits.2",
        "services:serviceDetails.technicalSupport.benefits.3",
        "services:serviceDetails.technicalSupport.benefits.4",
      ],
      technologies: [
        "services:serviceDetails.technicalSupport.technologies.0",
        "services:serviceDetails.technicalSupport.technologies.1",
        "services:serviceDetails.technicalSupport.technologies.2",
        "services:serviceDetails.technicalSupport.technologies.3",
        "services:serviceDetails.technicalSupport.technologies.4",
      ],
      industries: [
        "services:serviceDetails.technicalSupport.industries.0",
        "services:serviceDetails.technicalSupport.industries.1",
        "services:serviceDetails.technicalSupport.industries.2",
        "services:serviceDetails.technicalSupport.industries.3",
        "services:serviceDetails.technicalSupport.industries.4",
      ],
    },
  },
  {
    id: "custom-solutions",
    title: "services:categories.custom-solutions",
    description: "services:descriptions.custom-solutions",
    icon: "cog",
    duration: "services:durations.custom-solutions",
    features: [
      "services:features.customSolutions.mcc-panels",
      "services:features.customSolutions.process-automation",
      "services:features.customSolutions.unique-applications",
      "services:features.customSolutions.end-to-end",
    ],
    details: {
      overview: "services:serviceDetails.customSolutions.overview",
      benefits: [
        "services:serviceDetails.customSolutions.benefits.0",
        "services:serviceDetails.customSolutions.benefits.1",
        "services:serviceDetails.customSolutions.benefits.2",
        "services:serviceDetails.customSolutions.benefits.3",
        "services:serviceDetails.customSolutions.benefits.4",
      ],
      technologies: [
        "services:serviceDetails.customSolutions.technologies.0",
        "services:serviceDetails.customSolutions.technologies.1",
        "services:serviceDetails.customSolutions.technologies.2",
        "services:serviceDetails.customSolutions.technologies.3",
        "services:serviceDetails.customSolutions.technologies.4",
      ],
      industries: [
        "services:serviceDetails.customSolutions.industries.0",
        "services:serviceDetails.customSolutions.industries.1",
        "services:serviceDetails.customSolutions.industries.2",
        "services:serviceDetails.customSolutions.industries.3",
        "services:serviceDetails.customSolutions.industries.4",
      ],
    },
  },
  {
    id: "consultation-training",
    title: "services:categories.consultation-training",
    description: "services:descriptions.consultation-training",
    icon: "users",
    duration: "services:durations.consultation-training",
    features: [
      "services:features.consultationTraining.plc-programming",
      "services:features.consultationTraining.system-design",
      "services:features.consultationTraining.isa-certified",
      "services:features.consultationTraining.hands-on",
    ],
    details: {
      overview: "services:serviceDetails.consultationTraining.overview",
      benefits: [
        "services:serviceDetails.consultationTraining.benefits.0",
        "services:serviceDetails.consultationTraining.benefits.1",
        "services:serviceDetails.consultationTraining.benefits.2",
        "services:serviceDetails.consultationTraining.benefits.3",
        "services:serviceDetails.consultationTraining.benefits.4",
      ],
      technologies: [
        "services:serviceDetails.consultationTraining.technologies.0",
        "services:serviceDetails.consultationTraining.technologies.1",
        "services:serviceDetails.consultationTraining.technologies.2",
        "services:serviceDetails.consultationTraining.technologies.3",
        "services:serviceDetails.consultationTraining.technologies.4",
      ],
      industries: [
        "services:serviceDetails.consultationTraining.industries.0",
        "services:serviceDetails.consultationTraining.industries.1",
        "services:serviceDetails.consultationTraining.industries.2",
        "services:serviceDetails.consultationTraining.industries.3",
        "services:serviceDetails.consultationTraining.industries.4",
      ],
    },
  },
  {
    id: "supply-chain-management",
    title: "services:categories.supply-chain-management",
    description: "services:descriptions.supply-chain-management",
    icon: "truck",
    duration: "services:durations.supply-chain-management",
    features: [
      "services:features.supply-chain-management.authorized-distributors",
      "services:features.supply-chain-management.genuine-parts",
      "services:features.supply-chain-management.warranty",
      "services:features.supply-chain-management.express-delivery",
    ],
    details: {
      overview: "services:serviceDetails.supplyChainManagement.overview",
      benefits: [
        "services:serviceDetails.supplyChainManagement.benefits.0",
        "services:serviceDetails.supplyChainManagement.benefits.1",
        "services:serviceDetails.supplyChainManagement.benefits.2",
        "services:serviceDetails.supplyChainManagement.benefits.3",
        "services:serviceDetails.supplyChainManagement.benefits.4",
      ],
      technologies: [
        "services:serviceDetails.supplyChainManagement.technologies.0",
        "services:serviceDetails.supplyChainManagement.technologies.1",
        "services:serviceDetails.supplyChainManagement.technologies.2",
        "services:serviceDetails.supplyChainManagement.technologies.3",
        "services:serviceDetails.supplyChainManagement.technologies.4",
      ],
      industries: [
        "services:serviceDetails.supplyChainManagement.industries.0",
        "services:serviceDetails.supplyChainManagement.industries.1",
        "services:serviceDetails.supplyChainManagement.industries.2",
        "services:serviceDetails.supplyChainManagement.industries.3",
        "services:serviceDetails.supplyChainManagement.industries.4",
      ],
    },
  },
  {
    id: "solar-epc",
    title: "services:categories.solar-epc",
    description: "services:descriptions.solar-epc",
    icon: "sun",
    duration: "services:durations.solar-epc",
    features: [
      "services:features.solar-epc.mnre-approved",
      "services:features.solar-epc.capacity",
      "services:features.solar-epc.guarantee",
      "services:features.solar-epc.grid-connection",
    ],
    details: {
      overview: "services:serviceDetails.solarEpc.overview",
      benefits: [
        "services:serviceDetails.solarEpc.benefits.0",
        "services:serviceDetails.solarEpc.benefits.1",
        "services:serviceDetails.solarEpc.benefits.2",
        "services:serviceDetails.solarEpc.benefits.3",
        "services:serviceDetails.solarEpc.benefits.4",
      ],
      technologies: [
        "services:serviceDetails.solarEpc.technologies.0",
        "services:serviceDetails.solarEpc.technologies.1",
        "services:serviceDetails.solarEpc.technologies.2",
        "services:serviceDetails.solarEpc.technologies.3",
        "services:serviceDetails.solarEpc.technologies.4",
      ],
      industries: [
        "services:serviceDetails.solarEpc.industries.0",
        "services:serviceDetails.solarEpc.industries.1",
        "services:serviceDetails.solarEpc.industries.2",
        "services:serviceDetails.solarEpc.industries.3",
        "services:serviceDetails.solarEpc.industries.4",
      ],
    },
  },
];

// Helper function to get service data by slug
export const getServiceBySlug = (slug: string): ServicePageData | undefined => {
  return SERVICES_CATEGORY_PAGES.find((service) => service.id === slug);
};

// Helper function to get all service slugs for routing
export const getAllServiceSlugs = (): string[] => {
  return SERVICES_CATEGORY_PAGES.map((service) => service.id);
};
