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
    marketing: "+91-92119-91243",
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
    linkedin: "https://www.linkedin.com/company/powerton-engineering/",
    twitter: "#",
    facebook: "https://www.facebook.com/PowertonEngineering/",
    youtube: "https://youtube.com/@powertonengineering7485?si=SpJesD7qxsYVGEiH",
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
    linkedin: "https://www.linkedin.com/company/powerton-engineering/",
    twitter: "#",
    facebook: "https://www.facebook.com/PowertonEngineering/",
    youtube: "https://youtube.com/@powertonengineering7485?si=SpJesD7qxsYVGEiH",
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
      "products:categories.instrumentation-accessories.description",
    ),
    icon: "Gauge",
    image: getProductImage("instrumentation-accessories")?.src || "",
    features: [
      t(
        "products:categories.instrumentation-accessories.features.pressure-transmitters",
      ),
      t(
        "products:categories.instrumentation-accessories.features.temperature-sensors",
      ),
      t("products:categories.instrumentation-accessories.features.flow-meters"),
      t(
        "products:categories.instrumentation-accessories.features.level-indicators",
      ),
      t("products:categories.instrumentation-accessories.features.analyzers"),
    ],
    subcategories: [
      {
        id: "sensors-transducers",
        title: t("products:subcategories.sensors-transducers.title"),
        description: t(
          "products:subcategories.sensors-transducers.description",
        ),
      },
      {
        id: "transmitters-flow-meters",
        title: t("products:subcategories.transmitters-flow-meters.title"),
        description: t(
          "products:subcategories.transmitters-flow-meters.description",
        ),
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
      {
        id: "instrument-transformers",
        title: t("products:subcategories.instrument-transformers.title"),
        description: t(
          "products:subcategories.instrument-transformers.description",
        ),
      },
      {
        id: "instrumentation-cables",
        title: t("products:subcategories.instrumentation-cables.title"),
        description: t(
          "products:subcategories.instrumentation-cables.description",
        ),
      },
    ],
  },
  {
    id: "electrical-accessories",
    title: t("products:categories.electrical-accessories.title"),
    description: t("products:categories.electrical-accessories.description"),
    icon: "Zap",
    image: getProductImage("electrical-accessories")?.src || "",
    features: [
      t("products:categories.electrical-accessories.features.circuit-breakers"),
      t("products:categories.electrical-accessories.features.contactors"),
      t("products:categories.electrical-accessories.features.relays"),
      t("products:categories.electrical-accessories.features.power-supplies"),
    ],
    subcategories: [
      {
        id: "electrical-cables",
        title: t("products:subcategories.electrical-cables.title"),
        description: t("products:subcategories.electrical-cables.description"),
      },
      {
        id: "connectors-terminals",
        title: t("products:subcategories.connectors-terminals.title"),
        description: t(
          "products:subcategories.connectors-terminals.description",
        ),
      },
      {
        id: "circuit-breakers-fuses",
        title: t("products:subcategories.circuit-breakers-fuses.title"),
        description: t(
          "products:subcategories.circuit-breakers-fuses.description",
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
          "products:subcategories.enclosures-cabinets.description",
        ),
      },
      {
        id: "heating-elements-appliances",
        title: t("products:subcategories.heating-elements-appliances.title"),
        description: t(
          "products:subcategories.heating-elements-appliances.description",
        ),
      },
      {
        id: "contactors-relays",
        title: t("products:subcategories.contactors-relays.title"),
        description: t("products:subcategories.contactors-relays.description"),
      },
      {
        id: "transformers-power-devices",
        title: t("products:subcategories.transformers-power-devices.title"),
        description: t(
          "products:subcategories.transformers-power-devices.description",
        ),
      },
      {
        id: "industrial-lighting",
        title: t("products:subcategories.industrial-lighting.title"),
        description: t(
          "products:subcategories.industrial-lighting.description",
        ),
      },
      {
        id: "insulators-insulation-materials",
        title: t(
          "products:subcategories.insulators-insulation-materials.title",
        ),
        description: t(
          "products:subcategories.insulators-insulation-materials.description",
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
      "products:categories.automation-control-systems.description",
    ),
    icon: "Settings",
    image: getProductImage("automation-control-systems")?.src || "",
    features: [
      t("acronyms:plc"),
      t("products:categories.automation-control-systems.features.hmi-systems"),
      t(
        "products:categories.automation-control-systems.features.scada-software",
      ),
      t(
        "products:categories.automation-control-systems.features.industrial-networks",
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
      {
        id: "motor-controllers-drives",
        title: t("products:subcategories.motor-controllers-drives.title"),
        description: t(
          "products:subcategories.motor-controllers-drives.description",
        ),
      },
      {
        id: "io-modules",
        title: t("products:subcategories.io-modules.title"),
        description: t("products:subcategories.io-modules.description"),
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
        "products:categories.safety-protective-devices.features.safety-switches",
      ),
      t(
        "products:categories.safety-protective-devices.features.emergency-stops",
      ),
      t(
        "products:categories.safety-protective-devices.features.light-curtains",
      ),
      t(
        "products:categories.safety-protective-devices.features.protective-barriers",
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
          "products:subcategories.safety-relays-switches.description",
        ),
      },
      {
        id: "intrinsically-safe-equipment",
        title: t("products:subcategories.intrinsically-safe-equipment.title"),
        description: t(
          "products:subcategories.intrinsically-safe-equipment.description",
        ),
      },
      {
        id: "safety-equipment",
        title: t("products:subcategories.safety-equipment.title"),
        description: t("products:subcategories.safety-equipment.description"),
      },
      {
        id: "protection-relays",
        title: t("products:subcategories.protection-relays.title"),
        description: t("products:subcategories.protection-relays.description"),
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
        "products:categories.mechanical-pumps-spares.features.centrifugal-pumps",
      ),
      t(
        "products:categories.mechanical-pumps-spares.features.positive-displacement-pumps",
      ),
      t("products:categories.mechanical-pumps-spares.features.pump-components"),
      t(
        "products:categories.mechanical-pumps-spares.features.maintenance-kits",
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
      "products:categories.industrial-measuring-tools.description",
    ),
    icon: "Wrench",
    image: getProductImage("measurement-instruments")?.src || "",
    features: [
      t("products:categories.industrial-measuring-tools.features.hand-tools"),
      t("products:categories.industrial-measuring-tools.features.power-tools"),
      t(
        "products:categories.industrial-measuring-tools.features.digital-multimeters",
      ),
      t(
        "products:categories.industrial-measuring-tools.features.power-quality-analyzers",
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
          "products:subcategories.power-quality-analyzers.description",
        ),
      },
      {
        id: "calibration-equipment",
        title: t("products:subcategories.calibration-equipment.title"),
        description: t(
          "products:subcategories.calibration-equipment.description",
        ),
      },
      {
        id: "panel-meters-indicators",
        title: t("products:subcategories.panel-meters-indicators.title"),
        description: t(
          "products:subcategories.panel-meters-indicators.description",
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
        "services:features.installation-commissioning.compliance-certification",
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
    id: "agribio",
    name: t("common:clients.agribio"),
    logo: "https://abil.co.in/img/logo.png",
    fallback: corporateClientImage,
  },
  {
    id: "motherson",
    name: t("common:clients.motherson"),
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQHJdjrU_Eu0BQ/company-logo_200_200/company-logo_200_200/0/1630572287113/mothersongroup_logo?e=1767225600&v=beta&t=-BuL0oXMgDyrdsmaR2bfvuOhcCn1vjQ-GS6tPjPaKEg",
    fallback: corporateClientImage,
  },
  {
    id: "praj",
    name: t("common:clients.praj"),
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e7/Praj_industries_logo.svg/1200px-Praj_industries_logo.svg.png",
    fallback: corporateClientImage,
  },
  {
    id: "thermax",
    name: t("common:clients.thermax"),
    logo: "https://www.thermaxglobal.com/wp-content/uploads/2020/09/Thermax-Europe-UK.jpg",
    fallback: corporateClientImage,
  },
  {
    id: "ankur",
    name: t("common:clients.ankur"),
    logo: "https://www.ankurscientific.com/image/logo.png",
    fallback: corporateClientImage,
  },
  {
    id: "dls",
    name: t("common:clients.dls"),
    logo: "https://dlsenvirotech.com/assets/dls-envirotech-logo-BvPrpv-6.png",
    fallback: corporateClientImage,
  },
  {
    id: "boudh",
    name: t("common:clients.boudh"),
    logo: "https://www.boudhdistillery.com/img/logo.png",
    fallback: corporateClientImage,
  },
  {
    id: "lokmangal",
    name: t("common:clients.lokmangal"),
    logo: "https://lokmangal.com/assets/img/logo/Lokmangal.png",
    fallback: corporateClientImage,
  },
  {
    id: "marcuras",
    name: t("common:clients.marcuras"),
    logo: "https://www.marcuras.com/images/hex0.jpg",
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
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQFZTGIYB6h79w/company-logo_200_200/company-logo_200_200/0/1633449703985?e=2147483647&v=beta&t=T8hWi_ctrtJfkpPmqbar3YWxB8HIS8KTB0h7WJfCZrU",
    fallback: corporateClientImage,
  },
  {
    id: "excel",
    name: t("common:clients.excel"),
    logo: "https://www.regreenexcel.com/images/regreen-logo.svg",
    fallback: corporateClientImage,
  },
  {
    id: "procient",
    name: t("common:clients.procient"),
    logo: "https://lh3.googleusercontent.com/p/AF1QipMdv-ooQHBKA6uJlgi4FbBJjERkT8iamCpM3Fih=s1360-w1360-h1020-rw",
    fallback: corporateClientImage,
  },
  {
    id: "lugazi",
    name: t("common:clients.lugazi"),
    logo: "https://www.mehtagroup.com/lugazi.png",
    fallback: corporateClientImage,
  },
  {
    id: "kribhco",
    name: t("common:clients.kribhco"),
    logo: "https://www.kribhco.net/assets/img/logo.png",
    fallback: corporateClientImage,
  },
  {
    id: "muzaffarpur",
    name: t("common:clients.muzaffarpur"),
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXWQML1K08ci0sFeMXf9HMN_qGj4JgvZo4tg&s",
    fallback: corporateClientImage,
  },
  {
    id: "globusSpirits",
    name: t("common:clients.globusSpirits"),
    logo: "https://www.globusspirits.com/images/logo_top.png",
    fallback: corporateClientImage,
  },
  {
    id: "proIndustries",
    name: t("common:clients.proIndustries"),
    logo: "https://static.wixstatic.com/media/ebe177_b9af4e9dc4c046369e55843e2abeb141~mv2.png/v1/fill/w_584,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/PRO%20LOGO%20(1)_PNG.png",
    fallback: corporateClientImage,
  },
  {
    id: "bottmac",
    name: t("common:clients.bottmac"),
    logo: "https://media.licdn.com/dms/image/v2/C560BAQGu8nWec9PPvQ/company-logo_200_200/company-logo_200_200/0/1638790723298/bottmac_india_pvt_ltd_logo?e=1767225600&v=beta&t=gp6bp7soUo51EO-up26_ZFJPSRDp_fC-OARMZdCe10s",
    fallback: corporateClientImage,
  },
  {
    id: "patelAgri",
    name: t("common:clients.patelAgri"),
    logo: "https://patelgroupofindustries.com/wp-content/uploads/2024/08/patel-agriculture-Dangro-logo.webp",
    fallback: corporateClientImage,
  },
  {
    id: "reps",
    name: t("common:clients.reps"),
    logo: "https://media.licdn.com/dms/image/v2/D560BAQHTpVOIMVfOlg/company-logo_200_200/company-logo_200_200/0/1709290380885/reps_en_tech_logo?e=2147483647&v=beta&t=sNm_ueYrkyHAwOsB7J8-HkKqrw_c8T5wWU1ETse6tro",
    fallback: corporateClientImage,
  },
  {
    id: "bkBuilder",
    name: t("common:clients.bkBuilder"),
    logo: "http://bkbuilders.in/images/logo-3-min.png",
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

// Product Groups Helper Functions for Navigation Popup Menu
export const getProductGroupsBySubcategory = (
  subcategoryKey: string,
): ProductGroup[] => {
  return productGroups.filter(
    (group) => group.subcategoryKey === subcategoryKey,
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
