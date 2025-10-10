import automationProjectImage from "@assets/generated_images/Automation_Project_Showcase_c9ed4237.png";
import corporateClientImage from "@assets/generated_images/Corporate_Client_Building_10ddd5dd.png";
import engineeringTeamImage from "@assets/generated_images/Engineering_Team_Working_82b3dac7.png";
import companyLogoImage from "@assets/generated_images/Company_Logo_Design_001b8efd.png";
import industrialAutomationImage from "@assets/generated_images/Industrial_Automation_Factory_54a2a6f1.png";
import powerPlantControlImage from "@assets/generated_images/Power_Plant_Control_Room_0bd716bf.png";
import { getProductImage } from "@/assets/images";
import { productGroups, ProductGroup } from "./products-detail-pages-data";

export const COMPANY_INFO = {
  name: "Powerton Engineering Pvt. Ltd.",
  tagline:
    "Your trusted partner in industrial automation and electrical engineering",
  phoneNumbers: {
    primary: "+91-94627-71662",
    secondary: "+91-82997-27291",
    combined: "+91-94627-71662 / +91-82997-27291",
  },
  email: "info@powertonengineering.com",
  address: {
    street: "F-25, F Block, Sector 6",
    city: "Noida",
    state: "Uttar Pradesh",
    pincode: "201301",
    landmark: "nearest metro-Sector 15",
  },
  businessHours: {
    weekdays: "Monday - Saturday: 9:00 AM - 6:00 PM",
    sunday: "Sunday: Emergency Support Only",
  },
  socialMedia: {
    linkedin: "#",
    twitter: "#",
    facebook: "#",
  },
  stats: {
    projectsCompleted: "500+",
    clientsServed: "200+",
    yearsExperience: "15+",
    responseTime: "2 hours",
  },
};

// Translation keys function to use in components
export const getCompanyInfo = (t: any) => ({
  name: t("common:company.name"),
  tagline: t("common:company.tagline"),
  phone: t("common:company.primaryPhone"),
  email: t("common:company.email"),
  address: {
    street: t("common:company.address.street"),
    city: t("common:company.address.city"),
    state: t("common:company.address.state"),
    pincode: t("common:company.address.pincode"),
    landmark: t("common:company.address.landmark"),
    full: t("common:company.address.full"),
  },
  businessHours: {
    weekdays: t("common:company.businessHours.weekdays"),
    sunday: t("common:company.businessHours.sunday"),
  },
  socialMedia: {
    linkedin: "#",
    twitter: "#",
    facebook: "#",
  },
  stats: {
    projectsCompleted: t("common:company.stats.projectsCompleted"),
    clientsServed: t("common:company.stats.clientsServed"),
    yearsExperience: t("common:company.stats.yearsExperience"),
    responseTime: t("common:company.stats.responseTime"),
  },
});

// Translation helper functions for all data arrays
export const getProducts = (t: any) => [
  {
    id: "instrumentation-accessories",
    title: t("products:categories.instrumentation-accessories.title"),
    description: t(
      "products:categories.instrumentation-accessories.description"
    ),
    icon: "Gauge",
    image: getProductImage("instrumentation-accessories")?.src || "",
    features: [
      t(
        "products:categories.instrumentation-accessories.features.pressure-transmitters"
      ),
      t(
        "products:categories.instrumentation-accessories.features.temperature-sensors"
      ),
      t("products:categories.instrumentation-accessories.features.flow-meters"),
      t(
        "products:categories.instrumentation-accessories.features.level-indicators"
      ),
      t("products:categories.instrumentation-accessories.features.analyzers"),
    ],
    subcategories: [
      {
        id: "sensors-transducers",
        title: "Sensors & Transducers",
        description:
          "Industrial sensors and transducers for measurement and control",
      },
      {
        id: "transmitters-flow-meters",
        title: "Transmitters & Flow Meters",
        description:
          "Industrial transmitters and flow meters for process monitoring",
      },
      {
        id: "switches-indicators",
        title: t("products:subcategories.switches.title"),
        description: t("products:subcategories.switches.description"),
      },
      {
        id: "valves-actuators",
        title: t("products:subcategories.valves.title"),
        description: t("products:subcategories.valves.description"),
      },
      {
        id: "analyzers",
        title: t("products:subcategories.analyzers.title"),
        description: t("products:subcategories.analyzers.description"),
      },
    ],
  },
  {
    id: "electrical-accessories",
    title: t("products:categories.electrical-accessories.title"),
    description: t("products:categories.electrical-accessories.description"),
    icon: "Zap",
    image: getProductImage("electrical-components")?.src || "",
    features: [
      t("products:categories.electrical-accessories.features.circuit-breakers"),
      t("products:categories.electrical-accessories.features.contactors"),
      t("products:categories.electrical-accessories.features.relays"),
      t("products:categories.electrical-accessories.features.power-supplies"),
    ],
    subcategories: [
      {
        id: "cables-wires",
        title: t("products:subcategories.cables-wires.title"),
        description: t("products:subcategories.cables-wires.description"),
      },
      {
        id: "connectors-terminals",
        title: t("products:subcategories.connectors-terminals.title"),
        description: t(
          "products:subcategories.connectors-terminals.description"
        ),
      },
      {
        id: "circuit-breakers-fuses",
        title: t("products:subcategories.circuit-breakers-fuses.title"),
        description: t(
          "products:subcategories.circuit-breakers-fuses.description"
        ),
      },
      {
        id: "power-supplies",
        title: t("products:subcategories.power-supplies.title"),
        description: t("products:subcategories.power-supplies.description"),
      },
      {
        id: "enclosures-cabinets",
        title: t("products:subcategories.enclosures-cabinets.title"),
        description: t(
          "products:subcategories.enclosures-cabinets.description"
        ),
      },
      {
        id: "heating-elements-appliances",
        title: t("products:subcategories.heating-elements-appliances.title"),
        description: t(
          "products:subcategories.heating-elements-appliances.description"
        ),
      },
    ],
  },
  {
    id: "solar-products",
    title: t("products:categories.solar-products.title"),
    description: t("products:categories.solar-products.description"),
    icon: "Sun",
    image: getProductImage("solar-products")?.src || "",
    features: [
      t("products:categories.solar-products.features.solar-panels"),
      t("products:categories.solar-products.features.inverters"),
      t("products:categories.solar-products.features.battery-storage"),
      t("products:categories.solar-products.features.monitoring-systems"),
    ],
    subcategories: [
      {
        id: "solar-panels",
        title: t("products:subcategories.solar-panels.title"),
        description: t("products:subcategories.solar-panels.description"),
      },
      {
        id: "solar-inverters",
        title: t("products:subcategories.solar-inverters.title"),
        description: t("products:subcategories.solar-inverters.description"),
      },
    ],
  },
  {
    id: "automation-control-systems",
    title: t("products:categories.automation-control-systems.title"),
    description: t(
      "products:categories.automation-control-systems.description"
    ),
    icon: "Settings",
    image: getProductImage("automation-control-systems")?.src || "",
    features: [
      t("acronyms:plc"),
      t("products:categories.automation-control-systems.features.hmi-systems"),
      t(
        "products:categories.automation-control-systems.features.scada-software"
      ),
      t(
        "products:categories.automation-control-systems.features.industrial-networks"
      ),
    ],
    subcategories: [
      {
        id: "plcs",
        title: t("products:subcategories.plcs.title"),
        description: t("products:subcategories.plcs.description"),
      },
      {
        id: "scada",
        title: t("products:subcategories.scada.title"),
        description: t("products:subcategories.scada.description"),
      },
      {
        id: "dcs",
        title: t("products:subcategories.dcs.title"),
        description: t("products:subcategories.dcs.description"),
      },
      {
        id: "hmi",
        title: t("products:subcategories.hmi.title"),
        description: t("products:subcategories.hmi.description"),
      },
    ],
  },
  {
    id: "safety-protective-devices",
    title: t("products:categories.safety-protective-devices.title"),
    description: t("products:categories.safety-protective-devices.description"),
    icon: "Shield",
    image: getProductImage("safety-protective-devices")?.src || "",
    features: [
      t(
        "products:categories.safety-protective-devices.features.safety-switches"
      ),
      t(
        "products:categories.safety-protective-devices.features.emergency-stops"
      ),
      t(
        "products:categories.safety-protective-devices.features.light-curtains"
      ),
      t(
        "products:categories.safety-protective-devices.features.protective-barriers"
      ),
    ],
    subcategories: [
      {
        id: "surge-protectors",
        title: t("products:subcategories.surge-protectors.title"),
        description: t("products:subcategories.surge-protectors.description"),
      },
      {
        id: "grounding-systems",
        title: t("products:subcategories.grounding-systems.title"),
        description: t("products:subcategories.grounding-systems.description"),
      },
      {
        id: "safety-relays-switches",
        title: t("products:subcategories.safety-relays-switches.title"),
        description: t(
          "products:subcategories.safety-relays-switches.description"
        ),
      },
      {
        id: "intrinsically-safe-equipment",
        title: t("products:subcategories.intrinsically-safe-equipment.title"),
        description: t(
          "products:subcategories.intrinsically-safe-equipment.description"
        ),
      },
      {
        id: "safety-equipment",
        title: t("products:subcategories.safety-equipment.title"),
        description: t("products:subcategories.safety-equipment.description"),
      },
    ],
  },
  {
    id: "mechanical-pumps-spares",
    title: t("products:categories.mechanical-pumps-spares.title"),
    description: t("products:categories.mechanical-pumps-spares.description"),
    icon: "Cog",
    image: getProductImage("mechanical-pumps-spares")?.src || "",
    features: [
      t(
        "products:categories.mechanical-pumps-spares.features.centrifugal-pumps"
      ),
      t(
        "products:categories.mechanical-pumps-spares.features.positive-displacement-pumps"
      ),
      t("products:categories.mechanical-pumps-spares.features.pump-components"),
      t(
        "products:categories.mechanical-pumps-spares.features.maintenance-kits"
      ),
    ],
    subcategories: [
      {
        id: "centrifugal-pumps",
        title: t("products:subcategories.centrifugal-pumps.title"),
        description: t("products:subcategories.centrifugal-pumps.description"),
      },
      {
        id: "diaphragm-pumps",
        title: t("products:subcategories.diaphragm-pumps.title"),
        description: t("products:subcategories.diaphragm-pumps.description"),
      },
      {
        id: "gear-pumps",
        title: t("products:subcategories.gear-pumps.title"),
        description: t("products:subcategories.gear-pumps.description"),
      },
      {
        id: "pump-parts-spares",
        title: t("products:subcategories.pump-parts-spares.title"),
        description: t("products:subcategories.pump-parts-spares.description"),
      },
    ],
  },
  {
    id: "industrial-measuring-tools",
    title: t("products:categories.industrial-measuring-tools.title"),
    description: t(
      "products:categories.industrial-measuring-tools.description"
    ),
    icon: "Wrench",
    image: getProductImage("measurement-instruments")?.src || "",
    features: [
      t("products:categories.industrial-measuring-tools.features.hand-tools"),
      t("products:categories.industrial-measuring-tools.features.power-tools"),
      t(
        "products:categories.industrial-measuring-tools.features.digital-multimeters"
      ),
      t(
        "products:categories.industrial-measuring-tools.features.spectrum-analyzers"
      ),
      t(
        "products:categories.industrial-measuring-tools.features.power-quality-analyzers"
      ),
      t("products:categories.industrial-measuring-tools.features.calibrators"),
    ],
    subcategories: [
      {
        id: "hand-tools",
        title: t("products:subcategories.hand-tools.title"),
        description: t("products:subcategories.hand-tools.description"),
      },
      {
        id: "power-tools",
        title: t("products:subcategories.power-tools.title"),
        description: t("products:subcategories.power-tools.description"),
      },
      {
        id: "cutting-tools",
        title: t("products:subcategories.cutting-tools.title"),
        description: t("products:subcategories.cutting-tools.description"),
      },
      {
        id: "lifting-equipment",
        title: t("products:subcategories.lifting-equipment.title"),
        description: t("products:subcategories.lifting-equipment.description"),
      },
      {
        id: "multimeters",
        title: t("products:subcategories.multimeters.title"),
        description: t("products:subcategories.multimeters.description"),
      },
      {
        id: "power-quality-analyzers",
        title: t("products:subcategories.power-quality-analyzers.title"),
        description: t(
          "products:subcategories.power-quality-analyzers.description"
        ),
      },
      {
        id: "calibration-equipment",
        title: t("products:subcategories.calibration-equipment.title"),
        description: t(
          "products:subcategories.calibration-equipment.description"
        ),
      },
    ],
  },
  {
    id: "bldc",
    title: t("products:categories.bldc.title"),
    description: t("products:categories.bldc.description"),
    icon: "Zap",
    image: getProductImage("bldc")?.src || "",
    features: [
      t("products:categories.bldc.features.energy-efficient"),
      t("products:categories.bldc.features.long-lifespan"),
      t("products:categories.bldc.features.low-maintenance"),
      t("products:categories.bldc.features.variable-speed-control"),
    ],
    subcategories: [
      {
        id: "bldc-cooler-exhaust-motor",
        title: t("products:subcategories.bldc-cooler-exhaust-motor.title"),
        description: t(
          "products:subcategories.bldc-cooler-exhaust-motor.description"
        ),
      },
      {
        id: "bldc-ceiling-fan",
        title: t("products:subcategories.bldc-ceiling-fan.title"),
        description: t("products:subcategories.bldc-ceiling-fan.description"),
      },
      {
        id: "bldc-submersible-surface-pump",
        title: t("products:subcategories.bldc-submersible-surface-pump.title"),
        description: t(
          "products:subcategories.bldc-submersible-surface-pump.description"
        ),
      },
      {
        id: "bldc-table-fan-wall-fan-motor",
        title: t("products:subcategories.bldc-table-fan-wall-fan-motor.title"),
        description: t(
          "products:subcategories.bldc-table-fan-wall-fan-motor.description"
        ),
      },
    ],
  },
];

export const getTestimonials = (t: any) => [
  {
    name: t("common:testimonials.anand.name"),
    location: t("common:testimonials.anand.location"),
    rating: 5,
    comment: t("common:testimonials.anand.comment"),
    initials: "AA",
    image: engineeringTeamImage,
  },
  {
    name: t("common:testimonials.sanjay.name"),
    location: t("common:testimonials.sanjay.location"),
    rating: 5,
    comment: t("common:testimonials.sanjay.comment"),
    initials: "SP",
    image: engineeringTeamImage,
  },
  {
    name: t("common:testimonials.rhea.name"),
    location: t("common:testimonials.rhea.location"),
    rating: 5,
    comment: t("common:testimonials.rhea.comment"),
    initials: "RS",
    image: engineeringTeamImage,
  },
  {
    name: t("common:testimonials.priya.name"),
    location: t("common:testimonials.priya.location"),
    rating: 5,
    comment: t("common:testimonials.priya.comment"),
    initials: "PM",
    image: engineeringTeamImage,
  },
  {
    name: t("common:testimonials.kavya.name"),
    location: t("common:testimonials.kavya.location"),
    rating: 5,
    comment: t("common:testimonials.kavya.comment"),
    initials: "KS",
    image: engineeringTeamImage,
  },
  {
    name: t("common:testimonials.rajesh.name"),
    location: t("common:testimonials.rajesh.location"),
    rating: 5,
    comment: t("common:testimonials.rajesh.comment"),
    initials: "RK",
    image: engineeringTeamImage,
  },
];

// Use centralized PROJECTS array instead of separate function
export const getProjects = () => getFeaturedProjects();

export const getServiceOptions = (t: any) => [
  {
    value: "installation-commissioning",
    label: t("services:items.installation-commissioning"),
  },
  {
    value: "calibration-testing",
    label: t("services:items.calibration-testing"),
  },
  { value: "technical-support", label: t("services:items.technical-support") },
  { value: "custom-solutions", label: t("services:items.custom-solutions") },
  {
    value: "consultation-training",
    label: t("services:items.consultation-training"),
  },
  {
    value: "supply-chain-management",
    label: t("services:items.supply-chain-management"),
  },
  { value: "solar-epc", label: t("services:items.solar-epc") },
];

// Translation helper function for services
export const getServices = (t: any) => [
  {
    id: "installation-commissioning",
    title: t("services:items.installation-commissioning"),
    description: t("services:descriptions.installation-commissioning"),
    icon: "tools",
    duration: t("services:durations.installation-commissioning"),
    popular: true,
    features: [
      t("services:features.installation-commissioning.plc-dcs"),
      t("services:features.installation-commissioning.system-integration"),
      t("services:features.installation-commissioning.performance-testing"),
      t(
        "services:features.installation-commissioning.compliance-certification"
      ),
    ],
  },
  {
    id: "calibration-testing",
    title: t("services:items.calibration-testing"),
    description: t("services:descriptions.calibration-testing"),
    icon: "gauge",
    duration: t("services:durations.calibration-testing"),
    features: [
      t("services:features.calibration-testing.nabl-certified"),
      t("services:features.calibration-testing.accuracy-testing"),
      t("services:features.calibration-testing.compliance"),
      t("services:features.calibration-testing.certificates"),
    ],
  },
  {
    id: "technical-support",
    title: t("services:items.technical-support"),
    description: t("services:descriptions.technical-support"),
    icon: "shield",
    duration: t("services:durations.technical-support"),
    popular: true,
    features: [
      t("services:features.technical-support.24-7-support"),
      t("services:features.technical-support.remote-diagnostics"),
      t("services:features.technical-support.onsite-response"),
      t("services:features.technical-support.emergency-hotline"),
    ],
  },
  {
    id: "custom-solutions",
    title: t("services:items.custom-solutions"),
    description: t("services:descriptions.custom-solutions"),
    icon: "cog",
    duration: t("services:durations.custom-solutions"),
    features: [
      t("services:features.custom-solutions.mcc-panels"),
      t("services:features.custom-solutions.process-automation"),
      t("services:features.custom-solutions.unique-applications"),
      t("services:features.custom-solutions.end-to-end"),
    ],
  },
  {
    id: "consultation-training",
    title: t("services:items.consultation-training"),
    description: t("services:descriptions.consultation-training"),
    icon: "users",
    duration: t("services:durations.consultation-training"),
    features: [
      t("services:features.consultation-training.plc-programming"),
      t("services:features.consultation-training.system-design"),
      t("services:features.consultation-training.isa-certified"),
      t("services:features.consultation-training.hands-on"),
    ],
  },
  {
    id: "supply-chain-management",
    title: t("services:items.supply-chain-management"),
    description: t("services:descriptions.supply-chain-management"),
    icon: "truck",
    duration: t("services:durations.supply-chain-management"),
    features: [
      t("services:features.supply-chain-management.authorized-distributors"),
      t("services:features.supply-chain-management.genuine-parts"),
      t("services:features.supply-chain-management.warranty"),
      t("services:features.supply-chain-management.express-delivery"),
    ],
  },
  {
    id: "solar-epc",
    title: t("services:items.solar-epc"),
    description: t("services:descriptions.solar-epc"),
    icon: "sun",
    duration: t("services:durations.solar-epc"),
    features: [
      t("services:features.solar-epc.mnre-approved"),
      t("services:features.solar-epc.capacity"),
      t("services:features.solar-epc.guarantee"),
      t("services:features.solar-epc.grid-connection"),
    ],
  },
];

export const getClientLogos = (t: any) => [
  {
    id: "sci-group",
    name: t("common:clients.sci-group"),
    logo: "https://logo.clearbit.com/shipindia.com",
    fallback: corporateClientImage,
  },
  {
    id: "agribio",
    name: t("common:clients.agribio"),
    logo: "https://logo.clearbit.com/agribiogermany.com",
    fallback: corporateClientImage,
  },
  {
    id: "motherson",
    name: t("common:clients.motherson"),
    logo: "https://logo.clearbit.com/motherson.com",
    fallback: corporateClientImage,
  },
  {
    id: "praj",
    name: t("common:clients.praj"),
    logo: "https://logo.clearbit.com/praj.net",
    fallback: corporateClientImage,
  },
  {
    id: "thermax",
    name: t("common:clients.thermax"),
    logo: "https://logo.clearbit.com/thermaxglobal.com",
    fallback: corporateClientImage,
  },
  {
    id: "ankur",
    name: t("common:clients.ankur"),
    logo: "https://logo.clearbit.com/ankurscientific.com",
    fallback: corporateClientImage,
  },
  {
    id: "dls",
    name: t("common:clients.dls"),
    logo: "https://dlsenvirotech.com/assets/img/logo.png",
    fallback: corporateClientImage,
  },
  {
    id: "boudh",
    name: t("common:clients.boudh"),
    logo: "https://logo.clearbit.com/boudhdistillery.com",
    fallback: corporateClientImage,
  },
  {
    id: "lokmangal",
    name: t("common:clients.lokmangal"),
    logo: "https://logo.clearbit.com/lokmangal.com",
    fallback: corporateClientImage,
  },
  {
    id: "marcuras",
    name: t("common:clients.marcuras"),
    logo: "https://logo.clearbit.com/marcuras.com",
    fallback: corporateClientImage,
  },
  {
    id: "nv-group",
    name: t("common:clients.nv-group"),
    logo: "https://www.nvgroup.co.in/cdn/shop/files/nv-logo-new.png",
    fallback: corporateClientImage,
  },
  {
    id: "anand-nv",
    name: t("common:clients.anand-nv"),
    logo: "https://www.anandnvh.com/images/logo.png",
    fallback: corporateClientImage,
  },
  {
    id: "dhanuka",
    name: t("common:clients.dhanuka"),
    logo: "https://logo.clearbit.com/dhanuka.com",
    fallback: corporateClientImage,
  },
  {
    id: "mjson",
    name: t("common:clients.mjson"),
    logo: "https://www.thecompanycheck.com/Images/default-com-logo.webp",
    fallback: corporateClientImage,
  },
  {
    id: "procient",
    name: t("common:clients.procient"),
    logo: "https://lh3.googleusercontent.com/p/AF1QipMdv-ooQHBKA6uJlgi4FbBJjERkT8iamCpM3Fih=s1360-w1360-h1020-rw",
    fallback: corporateClientImage,
  },
];

export const getClients = (t: any) => [
  t("common:clients.sci-group"),
  t("common:clients.agribio"),
  t("common:clients.motherson"),
  t("common:clients.praj"),
  t("common:clients.thermax"),
  t("common:clients.ankur"),
  t("common:clients.dls"),
  t("common:clients.boudh"),
  t("common:clients.lokmangal"),
  t("common:clients.marcuras"),
  t("common:clients.nv-group"),
  t("common:clients.anand-nv"),
  t("common:clients.dhanuka"),
  t("common:clients.mjson"),
  t("common:clients.procient"),
];

// Keep original SERVICES constant for backward compatibility - these should use getServices(t) function for translations
export const SERVICES = [
  {
    id: "installation-commissioning",
    title: "Installation and Commissioning",
    description:
      "Professional installation and commissioning services for electrical panels, PLCs, SCADA systems, and industrial equipment with complete system validation. Supports Siemens, Allen-Bradley, and Schneider technologies.",
    icon: "tools",
    duration: "1-4 weeks",
    popular: true,
    features: [
      "PLC/DCS Installation",
      "System Integration",
      "Performance Testing",
      "Compliance Certification",
    ],
  },
  {
    id: "calibration-testing",
    title: "Calibration and Testing",
    description:
      "NABL-certified precision calibration and testing services for pressure, temperature, flow instruments and control systems plus comprehensive preventive and emergency maintenance services for electrical systems and industrial automation equipment. Maintains ±0.25% accuracy standards with 2-hour emergency response.",
    icon: "gauge",
    duration: "Same day - 1 week",
    popular: true,
    features: [
      "NABL Certified Calibration",
      "±0.25% Accuracy Testing",
      "Compliance Verification",
      "Traceability Certificates",
      "Preventive Maintenance",
      "Emergency Repairs (2hr)",
      "Component Replacement",
      "System Upgrades",
    ],
  },
  {
    id: "technical-support",
    title: "Technical Support",
    description:
      "24/7/365 technical support services with remote diagnostics, on-site troubleshooting, and emergency response. Average response time: 30 minutes remotely, 4 hours on-site.",
    icon: "shield",
    duration: "Immediate - Ongoing",
    popular: true,
    features: [
      "24/7/365 Support",
      "Remote Diagnostics",
      "4hr On-site Response",
      "Emergency Hotline",
    ],
  },
  {
    id: "custom-solutions",
    title: "Custom Solutions",
    description:
      "Tailored engineering solutions for unique industrial requirements including custom MCC panels, automation systems, and process control solutions. From concept to commissioning.",
    icon: "cog",
    duration: "2-12 weeks",
    features: [
      "Custom MCC Panels",
      "Process Automation",
      "Unique Applications",
      "End-to-End Solutions",
    ],
  },
  {
    id: "consultation-training",
    title: "Consultation and Training",
    description:
      "Expert technical consultation and hands-on training programs for PLC programming, HMI development, and industrial automation. ISA-certified training modules available.",
    icon: "users",
    duration: "1-5 days",
    features: [
      "PLC Programming Training",
      "System Design Consultation",
      "ISA Certified Modules",
      "Hands-on Workshops",
    ],
  },
  {
    id: "supply-chain-management",
    title: "Supply Chain Management",
    description:
      "Comprehensive supply chain management for electrical components and spare parts. Authorized distributor network ensures genuine parts with 1-year warranty.",
    icon: "truck",
    duration: "1-7 days",
    features: [
      "Authorized Distributors",
      "Genuine Parts Only",
      "1-Year Warranty",
      "Express Delivery",
    ],
  },
  {
    id: "solar-epc",
    title: "Solar EPC",
    description:
      "Complete Solar Engineering, Procurement, and Construction services for 1kW to 1MW+ projects. MNRE-approved designs with 25-year performance guarantee.",
    icon: "sun",
    duration: "4-16 weeks",
    features: [
      "MNRE Approved Designs",
      "1kW to 1MW+ Capacity",
      "25-Year Guarantee",
      "Grid Connection Support",
    ],
  },
];

export const PRODUCTS = [
  {
    id: "instrumentation-accessories",
    title: "Instrumentation Components",
    description:
      "High-precision instrumentation components for accurate measurement and control in industrial processes.",
    icon: "Gauge",
    image: getProductImage("instrumentation-accessories")?.src || "",
    features: [
      "Pressure Transmitters",
      "Temperature Sensors",
      "Flow Meters",
      "Level Indicators",
    ],
    subcategories: [
      {
        id: "sensors",
        title: "Sensors & Transducers",
        description:
          "Temperature, pressure, position, and motion sensors and transducers for industrial automation",
      },
      {
        id: "transmitters",
        title: "Transmitters & Flow Meters",
        description:
          "Signal transmission devices and flow meters for measurement applications",
      },
      {
        id: "switches",
        title: "Switches & Indicators",
        description: "Industrial switches, indicators, and signaling devices",
      },
      {
        id: "valves",
        title: "Valves & Actuators",
        description: "Control valves and actuators for process control systems",
      },
      {
        id: "analyzers",
        title: "Analyzers",
        description: "Gas, liquid, and process analyzers for quality control",
      },
    ],
  },
  {
    id: "electrical-components",
    title: "Electrical Components",
    description:
      "Comprehensive range of electrical components for power distribution and control systems.",
    icon: "Zap",
    image: getProductImage("electrical-components")?.src || "",
    features: ["Circuit Breakers", "Contactors", "Relays", "Power Supplies"],
    subcategories: [
      {
        id: "cables-wires",
        title: "Cables & Wires",
        description:
          "Industrial cables and wires for power transmission and control applications",
      },
      {
        id: "connectors-terminals",
        title: "Connectors & Terminals",
        description:
          "Electrical connectors and terminal blocks for secure connections",
      },
      {
        id: "circuit-breakers-fuses",
        title: "Circuit Breakers & Fuses",
        description:
          "Protection devices for electrical circuits and equipment safety",
      },
      {
        id: "power-supplies",
        title: "Power Supplies",
        description:
          "AC/DC power supplies and converters for industrial applications",
      },
      {
        id: "enclosures-cabinets",
        title: "Enclosures & Cabinets",
        description:
          "Electrical enclosures and control cabinets for equipment protection",
      },
      {
        id: "heating-elements-appliances",
        title: "Heating Elements & Appliances",
        description: "Industrial heating elements and electrical appliances",
      },
    ],
  },
  {
    id: "measurement-instruments",
    title: "Measurement Instruments",
    description:
      "Advanced measurement instruments for precise monitoring and data acquisition in industrial applications.",
    icon: "Activity",
    image: getProductImage("measurement-instruments")?.src || "",
    features: ["Digital Multimeters", "Signal Analyzers", "Calibrators"],
    subcategories: [
      {
        id: "multimeters",
        title: "Multimeters",
        description:
          "Digital and analog multimeters for electrical measurements",
      },
      {
        id: "power-quality-analyzers",
        title: "Power Quality Analyzers",
        description: "Instruments for power quality monitoring and analysis",
      },
      {
        id: "calibration-equipment",
        title: "Calibration Equipment",
        description: "Precision calibration tools and reference standards",
      },
    ],
  },
  {
    id: "solar-products",
    title: "Solar Products",
    description:
      "Complete solar energy solutions including panels, inverters, and monitoring systems for sustainable power generation.",
    icon: "Sun",
    image: getProductImage("solar-products")?.src || "",
    features: [
      "Solar Panels",
      "Inverters",
      "Battery Storage",
      "Monitoring Systems",
    ],
    subcategories: [
      {
        id: "solar-panels",
        title: "Solar Panels",
        description:
          "High-efficiency photovoltaic panels for renewable energy generation",
      },
      {
        id: "solar-inverters",
        title: "Solar Inverters",
        description: "DC to AC inverters for solar power systems",
      },
    ],
  },
  {
    id: "automation-control-systems",
    title: "Automation and Control Systems",
    description:
      "Sophisticated automation and control systems for optimized industrial processes and enhanced productivity.",
    icon: "Settings",
    image: getProductImage("automation-control-systems")?.src || "",
    features: ["PLCs", "HMI Systems", "SCADA Software", "Industrial Networks"],
    subcategories: [
      {
        id: "plcs",
        title: "PLCs",
        description: "Programmable Logic Controllers for industrial automation",
      },
      {
        id: "scada",
        title: "SCADA",
        description: "Supervisory Control and Data Acquisition systems",
      },
      {
        id: "dcs",
        title: "DCS",
        description: "Distributed Control Systems for process automation",
      },
      {
        id: "hmi",
        title: "HMI",
        description: "Human Machine Interface systems for operator control",
      },
    ],
  },
  {
    id: "safety-protective-devices",
    title: "Safety and Protective Devices",
    description:
      "Critical safety and protective devices to ensure personnel safety and equipment protection in industrial environments.",
    icon: "Shield",
    image: getProductImage("safety-protective-devices")?.src || "",
    features: [
      "Safety Switches",
      "Emergency Stops",
      "Light Curtains",
      "Protective Barriers",
    ],
    subcategories: [
      {
        id: "surge-protectors",
        title: "Surge Protectors",
        description: "Electrical surge protection devices for equipment safety",
      },
      {
        id: "grounding-systems",
        title: "Grounding Systems",
        description: "Electrical grounding and earthing solutions for safety",
      },
      {
        id: "safety-relays-switches",
        title: "Safety Relays and Switches",
        description:
          "Safety-rated relays and switches for personnel protection",
      },
      {
        id: "intrinsically-safe-equipment",
        title: "Intrinsically Safe Equipment",
        description:
          "Explosion-proof and intrinsically safe devices for hazardous areas",
      },
      {
        id: "safety-equipment",
        title: "Safety Equipment",
        description: "Personal protective equipment and safety gear",
      },
    ],
  },
  {
    id: "mechanical-pumps-spares",
    title: "Mechanical Pumps and Spares",
    description:
      "High-quality mechanical pumps and spare parts for fluid handling and processing applications.",
    icon: "Cog",
    image: getProductImage("mechanical-pumps-spares")?.src || "",
    features: [
      "Centrifugal Pumps",
      "Positive Displacement Pumps",
      "Pump Components",
      "Maintenance Kits",
    ],
    subcategories: [
      {
        id: "centrifugal-pumps",
        title: "Centrifugal Pumps",
        description:
          "High-performance centrifugal pumps for fluid transfer applications",
      },
      {
        id: "diaphragm-pumps",
        title: "Diaphragm Pumps",
        description:
          "Pneumatic and electric diaphragm pumps for chemical handling",
      },
      {
        id: "gear-pumps",
        title: "Gear Pumps",
        description: "Positive displacement gear pumps for viscous fluids",
      },
      {
        id: "pump-parts-spares",
        title: "Pump Parts and Spares",
        description:
          "Replacement parts and spare components for pump maintenance",
      },
    ],
  },
  {
    id: "industrial-tools-tackles",
    title: "Industrial Tools and Tackles",
    description:
      "Professional-grade industrial tools and equipment for maintenance, installation, and operational tasks.",
    icon: "Wrench",
    image: getProductImage("industrial-tools-tackles")?.src || "",
    features: ["Hand Tools", "Power Tools", "Lifting Equipment", "Safety Gear"],
    subcategories: [
      {
        id: "hand-tools",
        title: "Hand Tools",
        description:
          "Professional hand tools for maintenance and assembly work",
      },
      {
        id: "power-tools",
        title: "Power Tools",
        description:
          "Electric and pneumatic power tools for industrial applications",
      },
      {
        id: "cutting-tools",
        title: "Cutting Tools",
        description:
          "Precision cutting tools and blades for material processing",
      },
      {
        id: "lifting-equipment",
        title: "Lifting Equipment",
        description:
          "Cranes, hoists, and lifting devices for material handling",
      },
      {
        id: "safety-equipment",
        title: "Safety Equipment",
        description: "Personal protective equipment and safety gear",
      },
    ],
  },
  {
    id: "bldc",
    title: "BLDC",
    description:
      "Brushless DC motors and control systems for high-efficiency, precision motor applications.",
    icon: "RotateCcw",
    image: getProductImage("bldc")?.src || "",
    features: ["BLDC Motors", "Motor Controllers", "Encoders", "Drive Systems"],
    subcategories: [
      {
        id: "bldc-cooler-exhaust-motor",
        title: "BLDC Cooler/Exhaust Motor",
        description:
          "Energy-efficient BLDC motors for cooling and ventilation systems",
      },
      {
        id: "bldc-ceiling-fan",
        title: "BLDC Ceiling Fan",
        description:
          "High-efficiency ceiling fans with brushless DC motor technology",
      },
      {
        id: "bldc-submersible-surface-pump",
        title: "BLDC Submersible Surface Pump",
        description: "Solar-powered BLDC pumps for water applications",
      },
      {
        id: "bldc-table-fan-wall-fan-motor",
        title: "BLDC Table Fan/Wall Fan Motor",
        description: "Compact BLDC motors for portable and wall-mounted fans",
      },
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Anand Awasthi",
    location: "West Bengal",
    rating: 5,
    comment:
      "Powerton Engineering made the process of going solar seamless and easy. Their team handled everything from start to finish, and we're thrilled with the results.",
    initials: "AA",
    image: engineeringTeamImage,
  },
  {
    name: "Sanjay Patil",
    location: "Uttar Pradesh",
    rating: 5,
    comment:
      "I am glad I chose Powerton Engineering for our installation, and I would not hesitate to recommend them to any of my friends.",
    initials: "SP",
    image: engineeringTeamImage,
  },
  {
    name: "Rhea Sharma",
    location: "Maharashtra",
    rating: 5,
    comment:
      "Excellent quality products and outstanding customer service. The technical expertise of the team is impressive and highly professional.",
    initials: "RS",
    image: engineeringTeamImage,
  },
];

export const CLIENT_LOGOS = [
  {
    id: "sci-group",
    name: "Shipping Corporation of India",
    logo: "https://logo.clearbit.com/shipindia.com",
    fallback: corporateClientImage,
  },
  {
    id: "agribio",
    name: "AgriBio Germany",
    logo: "https://logo.clearbit.com/agribiogermany.com",
    fallback: corporateClientImage,
  },
  {
    id: "motherson",
    name: "Motherson Group",
    logo: "https://logo.clearbit.com/motherson.com",
    fallback: corporateClientImage,
  },
  {
    id: "praj",
    name: "Praj Industries",
    logo: "https://logo.clearbit.com/praj.net",
    fallback: corporateClientImage,
  },
  {
    id: "thermax",
    name: "Thermax Limited",
    logo: "https://logo.clearbit.com/thermaxglobal.com",
    fallback: corporateClientImage,
  },
  {
    id: "ankur",
    name: "Ankur Scientific Energy Technologies",
    logo: "https://logo.clearbit.com/ankurscientific.com",
    fallback: corporateClientImage,
  },
  {
    id: "dls",
    name: "DLS India",
    logo: "https://dlsenvirotech.com/assets/img/logo.png",
    fallback: corporateClientImage,
  },
  {
    id: "boudh",
    name: "Boudh Distillery",
    logo: "https://logo.clearbit.com/boudhdistillery.com",
    fallback: corporateClientImage,
  },
  {
    id: "lokmangal",
    name: "Lokmangal Group",
    logo: "https://logo.clearbit.com/lokmangal.com",
    fallback: corporateClientImage,
  },
  {
    id: "marcuras",
    name: "Marcuras Water Treatment",
    logo: "https://logo.clearbit.com/marcuras.com",
    fallback: corporateClientImage,
  },
  {
    id: "nv-group",
    name: "NV Group",
    logo: "https://www.nvgroup.co.in/cdn/shop/files/nv-logo-new.png",
    fallback: corporateClientImage,
  },
  {
    id: "anand-nv",
    name: "Anand NV",
    logo: "https://www.anandnvh.com/images/logo.png",
    fallback: corporateClientImage,
  },
  {
    id: "dhanuka",
    name: "Dhanuka Agritech",
    logo: "https://logo.clearbit.com/dhanuka.com",
    fallback: corporateClientImage,
  },
  {
    id: "mjson",
    name: "MJSON",
    logo: "https://www.thecompanycheck.com/Images/default-com-logo.webp",
    fallback: corporateClientImage,
  },
  {
    id: "procient",
    name: "Procient",
    logo: "https://lh3.googleusercontent.com/p/AF1QipMdv-ooQHBKA6uJlgi4FbBJjERkT8iamCpM3Fih=s1360-w1360-h1020-rw",
    fallback: corporateClientImage,
  },
];

export const CLIENTS = [
  "SCI Group",
  "Agribio Ltd",
  "Motherson",
  "Praj Industries",
  "Thermax",
  "Ankur Scientific",
  "DLS Group",
  "Boudh Industries",
  "Lokmangal",
  "Marcuras",
  "NV Group",
  "Anand NVH",
  "Dhanuka",
  "MJSONS",
  "DKSM",
  "Procient",
  "Patel Group",
  "Regreen",
  "Muzaffarpur",
  "Safex",
  "Radice",
  "Rajshree",
  "Lahag",
];

// Centralized project management - Edit this array to control all projects throughout the website
export const PROJECTS = [
  {
    id: "industrial-automation-demo",
    title: "Demo: Industrial Automation System",
    client: "Future Manufacturing Client",
    category: "Process Automation",
    industry: "Manufacturing",
    description:
      "Demonstration of complete manufacturing automation capabilities including PLC integration, SCADA systems, and real-time monitoring solutions.",
    location: "Project Site TBD",
    duration: "12-18 months",
    budget: "₹50-75 Lakhs",
    status: "Capability Demo",
    year: 2024,
    featured: true, // Shows on home page
    priority: 1,
    image: industrialAutomationImage,
    technologies: ["PLC Programming", "SCADA", "HMI", "Industrial IoT"],
    highlights: [
      "PLC Integration",
      "SCADA Systems",
      "RealTime Monitoring",
      "Process Optimization",
    ],
    results: {
      efficiency: "Target: 40% improvement",
      downtime: "Target: 65% reduction",
      savings: "Projected: ₹2.5 Cr annually",
    },
    complexity: "Advanced",
  },
  {
    id: "power-distribution-demo",
    title: "Example: Power Distribution Control",
    client: "Future Power Partner",
    category: "Power Systems",
    industry: "Power Generation",
    description:
      "Example power distribution system showcasing automated load balancing and remote monitoring capabilities for power generation facilities.",
    location: "Various Locations",
    duration: "10-15 months",
    budget: "₹1-2 Crores",
    status: "Capability Demo",
    year: 2024,
    featured: true, // Shows on home page
    priority: 2,
    image: powerPlantControlImage,
    technologies: [
      "MCC Panels",
      "Protection Systems",
      "Energy Management",
      "Remote Monitoring",
    ],
    highlights: [
      "Load Balancing",
      "Protection Systems",
      "Energy Management",
      "Remote Control",
    ],
    results: {
      efficiency: "Target: 35% improvement",
      reliability: "Target: 99.8% uptime",
      savings: "Projected: ₹1.8 Cr annually",
    },
    complexity: "Advanced",
  },
  {
    id: "solar-plant-demo",
    title: "Sample: Solar Plant Control System",
    client: "Future Renewable Client",
    category: "Solar Solutions",
    industry: "Renewable Energy",
    description:
      "Sample solar tracking automation system demonstrating weather monitoring and grid synchronization capabilities for renewable energy projects.",
    location: "Multiple Sites",
    duration: "6-10 months",
    budget: "₹25-50 Lakhs",
    status: "Capability Demo",
    year: 2024,
    featured: false, // Projects page only
    priority: 3,
    image: engineeringTeamImage,
    technologies: [
      "Solar Inverters",
      "Grid Sync",
      "Weather Monitoring",
      "Data Analytics",
    ],
    highlights: [
      "Grid Synchronization",
      "Weather Monitoring",
      "Performance Analytics",
      "Remote Management",
    ],
    results: {
      efficiency: "Target: 25% improvement",
      generation: "Scalable MW capacity",
      roi: "Projected: 18 months payback",
    },
    complexity: "Intermediate",
  },
  {
    id: "process-control-demo",
    title: "Demo: Process Control Solution",
    client: "Future Industrial Partner",
    category: "Process Automation",
    industry: "Process Industries",
    description:
      "Demonstration of complete process automation capabilities including safety systems, environmental monitoring, and batch control for industrial applications.",
    location: "Project Site TBD",
    duration: "8-12 months",
    budget: "₹35-60 Lakhs",
    status: "Capability Demo",
    year: 2024,
    featured: false, // Projects page only
    priority: 4,
    image: automationProjectImage,
    technologies: [
      "Process Control",
      "Safety Systems",
      "Environmental Monitoring",
      "Batch Control",
    ],
    highlights: [
      "Safety Integration",
      "Environmental Monitoring",
      "Batch Processing",
      "Compliance Systems",
    ],
    results: {
      safety: "Target: Zero incidents",
      compliance: "Target: 100% regulatory",
      efficiency: "Target: 30% improvement",
    },
    complexity: "Advanced",
  },
  {
    id: "smart-factory-progress",
    title: "Demo: Smart Factory Integration",
    client: "Current Development Client",
    category: "Process Automation",
    industry: "Manufacturing",
    description:
      "Ongoing demonstration of smart factory integration showcasing IoT connectivity, predictive maintenance, and data-driven optimization for modern manufacturing.",
    location: "Development Site",
    duration: "14 months",
    budget: "₹80 Lakhs - 1 Cr",
    status: "In Progress",
    year: 2024,
    featured: false, // Projects page only
    priority: 5,
    progress: 65, // Completion percentage
    currentPhase: "System Testing & Integration",
    estimatedCompletion: "Q2 2024",
    image: corporateClientImage,
    technologies: [
      "Industrial IoT",
      "Predictive Analytics",
      "Edge Computing",
      "Digital Twins",
    ],
    highlights: [
      "IoT Integration",
      "Predictive Maintenance",
      "Data Analytics",
      "Digital Transformation",
    ],
    results: {
      connectivity: "Target: 95% equipment connected",
      prediction: "Target: 80% maintenance prediction accuracy",
      optimization: "Target: 45% operational efficiency",
    },
    complexity: "Advanced",
  },
];

// Helper functions to filter projects based on requirements
export const getFeaturedProjects = () =>
  PROJECTS.filter((project) => project.featured);
export const getAllProjects = () => PROJECTS;
export const getProjectsByStatus = (status: string) =>
  PROJECTS.filter((project) => project.status === status);
export const getProjectsByCategory = (category: string) =>
  PROJECTS.filter((project) => project.category === category);

export const SERVICE_OPTIONS = [
  {
    value: "installation-commissioning",
    label: "Installation and Commissioning",
  },
  { value: "maintenance-repair", label: "Maintenance and Repair" },
  { value: "calibration-testing", label: "Calibration and Testing" },
  { value: "consultation-training", label: "Consultation and Training" },
  { value: "custom-solutions", label: "Custom Solutions" },
  { value: "supply-chain-management", label: "Supply Chain Management" },
  { value: "technical-support", label: "Technical Support" },
  { value: "solar-epc", label: "Solar EPC" },
  { value: "other", label: "Other" },
];

// Product Groups Helper Functions for Navigation Popup Menu
export const getProductGroupsBySubcategory = (
  subcategoryKey: string
): ProductGroup[] => {
  return productGroups.filter(
    (group) => group.subcategoryKey === subcategoryKey
  );
};

// Get all product groups organized by subcategory for efficient lookup
export const getProductGroupsMap = (): Map<string, ProductGroup[]> => {
  const map = new Map<string, ProductGroup[]>();
  productGroups.forEach((group) => {
    const existing = map.get(group.subcategoryKey) || [];
    map.set(group.subcategoryKey, [...existing, group]);
  });
  return map;
};

// Check if a subcategory has any product groups
export const hasProductGroups = (subcategoryKey: string): boolean => {
  return productGroups.some((group) => group.subcategoryKey === subcategoryKey);
};
