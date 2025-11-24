import industrialAutomationImage from "@assets/generated_images/Industrial_Automation_Factory_54a2a6f1.png";
import powerPlantControlImage from "@assets/generated_images/Power_Plant_Control_Room_0bd716bf.png";
import engineeringTeamImage from "@assets/generated_images/Engineering_Team_Working_82b3dac7.png";
import automationProjectImage from "@assets/generated_images/Automation_Project_Showcase_c9ed4237.png";
import corporateClientImage from "@assets/generated_images/Corporate_Client_Building_10ddd5dd.png";

export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  categoryId?: string; // Stable identifier for filtering
  industry: string;
  industryId?: string; // Stable identifier for filtering
  description: string;
  location: string;
  status: string;
  statusId?: string; // Stable identifier for filtering
  year: number;
  month: string;
  featured: boolean;
  priority: number;
  image: string;
  technologies: string[];
  highlights: string[];
  results: {
    [key: string]: string;
  };
  complexity: string;
  complexityId?: string; // Stable identifier for filtering
}

// Real projects completed by Powerton Engineering
export const PROJECTS: Project[] = [
  {
    id: "sikkim-spirit-bottling",
    title: "Bottling Plant Automation & Control System",
    client: "Sikkim Spirit Pvt. Ltd.",
    category: "Process Automation",
    industry: "Beverage Manufacturing",
    description: "Complete instrumentation installation with advanced HMI, PLC, and SCADA systems for automated bottling operations. Integrated control systems ensuring precise filling, capping, and quality monitoring with real-time process visualization.",
    location: "Sikkim",
    status: "Completed",
    year: 2024,
    month: "April",
    featured: true,
    priority: 1,
    image: industrialAutomationImage,
    technologies: ["PLC Programming", "SCADA Systems", "HMI Interface", "Instrumentation", "Process Control"],
    highlights: [
      "Advanced SCADA Implementation",
      "Real-time Process Monitoring",
      "Automated Quality Control",
      "Remote System Management"
    ],
    results: {
      efficiency: "35% production efficiency improvement",
      accuracy: "99.5% filling accuracy achieved",
      uptime: "98% operational uptime"
    },
    complexity: "Advanced"
  },
  {
    id: "hindustan-cocacola-odisha",
    title: "Beverage Plant Installation & Commissioning",
    client: "Hindustan Coca-Cola Beverage Pvt. Ltd.",
    category: "Process Automation",
    industry: "Beverage Manufacturing",
    description: "Comprehensive installation and commissioning of electrical and instrumentation systems for large-scale beverage manufacturing facility. Implemented complete automation infrastructure with advanced process controls and monitoring systems.",
    location: "Odisha",
    status: "Completed",
    year: 2025,
    month: "August",
    featured: true,
    priority: 2,
    image: automationProjectImage,
    technologies: ["Installation & Commissioning", "Electrical Systems", "Instrumentation", "Control Panels", "Automation Networks"],
    highlights: [
      "Full Facility Commissioning",
      "Integrated Control Systems",
      "Process Optimization",
      "Safety System Integration"
    ],
    results: {
      timeline: "Completed on schedule",
      compliance: "100% safety standards met",
      reliability: "99.2% system reliability"
    },
    complexity: "Advanced"
  },
  {
    id: "iocl-solar-jasidih",
    title: "Solar Power Plant Electrical & Instrumentation",
    client: "Indian Oil Corporation Limited (IOCL)",
    category: "Solar Solutions",
    industry: "Renewable Energy",
    description: "Complete electrical and instrumentation setup for solar power generation facility including solar panel installation, comprehensive earthing systems, and advanced monitoring instrumentation. Grid-synchronized renewable energy solution with real-time performance tracking.",
    location: "Jasidih, Jharkhand",
    status: "Completed",
    year: 2025,
    month: "August",
    featured: false,
    priority: 3,
    image: engineeringTeamImage,
    technologies: ["Solar Panel Systems", "Earthing & Protection", "Grid Synchronization", "Electrical Infrastructure", "Monitoring Systems"],
    highlights: [
      "Solar Array Installation",
      "Advanced Earthing Systems",
      "Grid Integration",
      "Performance Monitoring"
    ],
    results: {
      capacity: "Multi-MW solar installation",
      safety: "Zero safety incidents",
      efficiency: "Optimal energy generation"
    },
    complexity: "Intermediate"
  },
  {
    id: "dalmia-sugar-distillery",
    title: "Distillery Plant Electrical & Programming",
    client: "Dalmia Sugar & Distillery",
    category: "Process Automation",
    industry: "Sugar & Distillery",
    description: "Advanced PLC programming and complete electrical & instrumentation solution for distillery operations. Implemented automated process control systems with precise temperature, pressure, and flow monitoring for optimal production efficiency.",
    location: "Hardoi, Uttar Pradesh",
    status: "Completed",
    year: 2025,
    month: "April",
    featured: false,
    priority: 4,
    image: powerPlantControlImage,
    technologies: ["PLC Programming", "Process Automation", "Electrical Systems", "Instrumentation", "Control Logic"],
    highlights: [
      "Custom PLC Programming",
      "Process Parameter Control",
      "Safety Interlocks",
      "Quality Monitoring Systems"
    ],
    results: {
      automation: "90% process automation achieved",
      consistency: "Improved product consistency",
      efficiency: "25% efficiency improvement"
    },
    complexity: "Advanced"
  },
  {
    id: "bokaro-spirit-jharkhand",
    title: "Distillery Electrical & Instrumentation",
    client: "Bokaro Spirit",
    category: "Process Automation",
    industry: "Beverage/Distillery",
    description: "Complete electrical and instrumentation package for distillery facility including power distribution, control systems, and process instrumentation. Integrated solution ensuring safe and efficient distillation operations.",
    location: "Jharkhand",
    status: "Completed",
    year: 2025,
    month: "September",
    featured: false,
    priority: 5,
    image: automationProjectImage,
    technologies: ["Electrical Infrastructure", "Process Instrumentation", "Control Systems", "Power Distribution", "Safety Systems"],
    highlights: [
      "Power Distribution Setup",
      "Instrumentation Installation",
      "Process Control Integration",
      "Safety Compliance"
    ],
    results: {
      reliability: "98% system uptime",
      safety: "Enhanced safety protocols",
      operations: "Streamlined operations"
    },
    complexity: "Intermediate"
  },
  {
    id: "vanya-steel-turbine",
    title: "Turbine Electrical & Instrumentation Systems",
    client: "Vanya Steel Pvt. Ltd.",
    category: "Power Systems",
    industry: "Steel Manufacturing",
    description: "Specialized electrical and instrumentation systems for industrial turbine operations in steel manufacturing. Complete integration of turbine control systems, monitoring equipment, and power management solutions.",
    location: "Koppal, Karnataka",
    status: "Completed",
    year: 2025,
    month: "July",
    featured: false,
    priority: 6,
    image: powerPlantControlImage,
    technologies: ["Turbine Control Systems", "Electrical Infrastructure", "Instrumentation", "Vibration Monitoring", "Power Management"],
    highlights: [
      "Turbine Control Integration",
      "Vibration Monitoring Systems",
      "Power Optimization",
      "Preventive Maintenance Setup"
    ],
    results: {
      performance: "Optimized turbine performance",
      monitoring: "Real-time condition monitoring",
      efficiency: "Improved power generation efficiency"
    },
    complexity: "Advanced"
  },
  {
    id: "reliance-ev-charging-meerut",
    title: "EV Charging Station Infrastructure",
    client: "Reliance Industries Limited",
    category: "Power Systems",
    industry: "EV Infrastructure",
    description: "End-to-end EV charging station setup including civil structure, electrical panel installation, and EV charging equipment integration. Complete infrastructure solution for modern electric vehicle charging facility.",
    location: "Meerut, Uttar Pradesh",
    status: "Completed",
    year: 2024,
    month: "August",
    featured: false,
    priority: 7,
    image: corporateClientImage,
    technologies: ["Civil Infrastructure", "EV Charging Systems", "Electrical Panels", "Power Distribution", "Smart Metering"],
    highlights: [
      "Civil Structure Construction",
      "EV Charger Installation",
      "Electrical Panel Integration",
      "Smart Charging Management"
    ],
    results: {
      capacity: "Multi-vehicle charging capability",
      efficiency: "Fast charging implementation",
      compliance: "All safety standards met"
    },
    complexity: "Intermediate"
  },
  {
    id: "bk-builder-distillery-bihar",
    title: "Distillery Plant Electrical & Instrumentation",
    client: "B.K. Builder",
    category: "Process Automation",
    industry: "Beverage/Distillery",
    description: "Comprehensive electrical and instrumentation solution for distillery plant operations. Implemented complete electrical infrastructure and process instrumentation ensuring efficient and safe production processes.",
    location: "Mokama, Patna, Bihar",
    status: "Completed",
    year: 2025,
    month: "January",
    featured: false,
    priority: 8,
    image: industrialAutomationImage,
    technologies: ["Electrical Systems", "Process Instrumentation", "Control Panels", "Distribution Systems", "Monitoring Equipment"],
    highlights: [
      "Electrical Infrastructure Setup",
      "Process Instrumentation",
      "Control Panel Installation",
      "Safety Systems Integration"
    ],
    results: {
      commissioning: "Successful commissioning",
      safety: "Enhanced safety measures",
      reliability: "High system reliability"
    },
    complexity: "Intermediate"
  },
  {
    id: "iit-bhubaneswar-stp",
    title: "Sewage Treatment Plant Automation",
    client: "IIT Bhubaneswar",
    category: "Water Systems",
    industry: "Water Treatment",
    description: "Advanced PLC-based automation system for sewage treatment plant with complete electrical and instrumentation setup. Implemented intelligent process control for efficient wastewater treatment with real-time monitoring and control.",
    location: "Bhubaneswar, Odisha",
    status: "Completed",
    year: 2024,
    month: "July",
    featured: false,
    priority: 9,
    image: automationProjectImage,
    technologies: ["PLC Systems", "Electrical Infrastructure", "Process Instrumentation", "SCADA", "Water Quality Monitoring"],
    highlights: [
      "PLC-Based Automation",
      "Process Optimization",
      "Water Quality Monitoring",
      "Remote Management System"
    ],
    results: {
      automation: "Full process automation",
      efficiency: "Improved treatment efficiency",
      monitoring: "24/7 system monitoring"
    },
    complexity: "Advanced"
  }
];

// Translation helper function for projects
export const getProjects = (t: any): Project[] => PROJECTS.map(project => ({
  ...project,
  title: t(`pages:projects.items.${project.id}.title`),
  // Translated label for display
  category: t(`pages:projects.categories.${project.category.toLowerCase().replace(/\s+/g, '-')}`),
  // Stable ID for filtering (kebab-case)
  categoryId: project.category.toLowerCase().replace(/\s+/g, '-'),
  // Translated label for display
  industry: t(`pages:projects.industries.${project.industry.toLowerCase().replace(/[\s/&]/g, '-').replace(/-+/g, '-')}`),
  // Stable ID for filtering (kebab-case, normalize multiple dashes)
  industryId: project.industry.toLowerCase().replace(/[\s/&]/g, '-').replace(/-+/g, '-'),
  description: t(`pages:projects.items.${project.id}.description`),
  // Translated label for display
  status: t(`pages:projects.status.${project.status.toLowerCase()}`),
  // Stable ID for filtering
  statusId: project.status.toLowerCase(),
  month: t(`common:months.${project.month.toLowerCase()}`),
  technologies: project.technologies.map(tech => 
    t(`pages:projects.technologies.${tech.toLowerCase().replace(/\s+/g, '')}`)
  ),
  highlights: project.highlights.map((_, index) => 
    t(`pages:projects.items.${project.id}.highlights.${index}`)
  ),
  results: Object.keys(project.results).reduce((acc, key) => ({
    ...acc,
    [key]: t(`pages:projects.items.${project.id}.results.${key}`)
  }), {}),
  // Translated label for display
  complexity: t(`pages:projects.complexity.${project.complexity.toLowerCase()}`),
  // Stable ID for filtering
  complexityId: project.complexity.toLowerCase()
}));

// Helper functions for project filtering and management
export const getFeaturedProjects = (): Project[] =>
  PROJECTS.filter((project) => project.featured).sort((a, b) => a.priority - b.priority);

export const getTranslatedFeaturedProjects = (t: any): Project[] =>
  getProjects(t).filter((project) => project.featured).sort((a, b) => a.priority - b.priority);

export const getAllProjects = (): Project[] =>
  PROJECTS.sort((a, b) => {
    // Sort by year (descending), then month (descending), then priority
    if (b.year !== a.year) return b.year - a.year;
    const monthOrder = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const aMonthIndex = monthOrder.indexOf(a.month);
    const bMonthIndex = monthOrder.indexOf(b.month);
    if (bMonthIndex !== aMonthIndex) return bMonthIndex - aMonthIndex;
    return a.priority - b.priority;
  });

export const getTranslatedAllProjects = (t: any): Project[] =>
  getProjects(t).sort((a, b) => {
    // Sort by year (descending), then month (descending), then priority
    if (b.year !== a.year) return b.year - a.year;
    const monthOrder = [
      t("common:months.january"),
      t("common:months.february"),
      t("common:months.march"),
      t("common:months.april"),
      t("common:months.may"),
      t("common:months.june"),
      t("common:months.july"),
      t("common:months.august"),
      t("common:months.september"),
      t("common:months.october"),
      t("common:months.november"),
      t("common:months.december")
    ];
    const aMonthIndex = monthOrder.indexOf(a.month);
    const bMonthIndex = monthOrder.indexOf(b.month);
    if (bMonthIndex !== aMonthIndex) return bMonthIndex - aMonthIndex;
    return a.priority - b.priority;
  });

export const getProjectsByStatus = (status: string): Project[] =>
  PROJECTS.filter((project) => project.status === status);

export const getProjectsByCategory = (category: string): Project[] =>
  PROJECTS.filter((project) => project.category === category);

export const getProjectsByIndustry = (industry: string): Project[] =>
  PROJECTS.filter((project) => project.industry === industry);

export const getProjectById = (id: string): Project | undefined =>
  PROJECTS.find((project) => project.id === id);

export const getTranslatedProjectById = (t: any, id: string): Project | undefined => {
  const projects = getProjects(t);
  return projects.find((project) => project.id === id);
};
