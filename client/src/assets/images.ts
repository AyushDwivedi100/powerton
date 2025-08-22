// Centralized Image Management System
// Following AI-AGENT-RULES.md image ID system

// Existing asset imports
import automationProjectImage from '@assets/generated_images/Automation_Project_Showcase_c9ed4237.png';
import corporateClientImage from '@assets/generated_images/Corporate_Client_Building_10ddd5dd.png';
import engineeringTeamImage from '@assets/generated_images/Engineering_Team_Working_82b3dac7.png';
import companyLogoImage from '@assets/generated_images/Company_Logo_Design_001b8efd.png';
import industrialAutomationImage from '@assets/generated_images/Industrial_Automation_Factory_54a2a6f1.png';
import powerPlantControlImage from '@assets/generated_images/Power_Plant_Control_Room_0bd716bf.png';

// New product category images (ID-837+)
import instrumentationComponentsImage from '@assets/generated_images/Industrial_instrumentation_components_showcase_69897e6b.png';
import electricalComponentsImage from '@assets/generated_images/Electrical_components_product_showcase_2ba0ce40.png';
import measurementInstrumentsImage from '@assets/generated_images/Measurement_instruments_product_showcase_9fe64a2b.png';
import solarProductsImage from '@assets/generated_images/Solar_products_technology_showcase_82907203.png';
import automationControlSystemsImage from '@assets/generated_images/Automation_control_systems_showcase_4bbc6aa1.png';
import safetyProtectiveDevicesImage from '@assets/generated_images/Safety_protective_devices_showcase_5e4ee724.png';
import pumpsMotorsImage from '@assets/generated_images/Pumps_and_motors_showcase_798de33e.png';
import industrialToolsImage from '@assets/generated_images/Industrial_tools_and_equipment_showcase_bf6580b0.png';

// Hero background images (ID-846+)
import industrialAutomationFacilityHero from '@assets/generated_images/Industrial_Automation_Facility_Interior_32e6d2d7.png';
import engineeringServicesHero from '@assets/generated_images/Engineering_Services_Professional_Environment_d0cae776.png';
import bldcMotorSystemsHero from '@assets/generated_images/BLDC_Motor_Systems_Showcase_3379f405.png';
import industrialProjectHero from '@assets/generated_images/Industrial_Project_Construction_Site_1ae76aba.png';
import corporateOfficeHero from '@assets/generated_images/Corporate_Office_Meeting_Environment_5f01f890.png';
import technicalNewsHero from '@assets/generated_images/Technical_News_Communication_Center_d783a467.png';
import processAnalyzersHero from '@assets/generated_images/Process_Analyzers_Laboratory_Environment_e98f5ca6.png';

// Image ID mapping system following AI-AGENT-RULES.md
export const IMAGE_IDS = {
  // ID-001-002: Logo images ✓ ASSIGNED
  LOGO: 'ID-001',
  COMPANY_LOGO: 'ID-002',
  
  // ID-003-005: About section images ✓ ASSIGNED  
  ENGINEERING_TEAM: 'ID-003',
  CORPORATE_CLIENT: 'ID-004',
  AUTOMATION_PROJECT: 'ID-005',
  
  // ID-050-059: Project and product showcase images ✓ ASSIGNED
  INDUSTRIAL_AUTOMATION: 'ID-050',
  POWER_PLANT_CONTROL: 'ID-051',
  
  // ID-837-845: Product category images (NEW ASSIGNMENTS)
  INSTRUMENTATION_COMPONENTS: 'ID-837',
  ELECTRICAL_COMPONENTS: 'ID-838', 
  MEASUREMENT_INSTRUMENTS: 'ID-839',
  SOLAR_PRODUCTS: 'ID-840',
  AUTOMATION_CONTROL_SYSTEMS: 'ID-841',
  SAFETY_PROTECTIVE_DEVICES: 'ID-842',
  PUMPS_MOTORS: 'ID-843',
  INDUSTRIAL_TOOLS: 'ID-844',
  BLDC_MOTORS: 'ID-845',
  
  // ID-846+: Hero background images
  HERO_ABOUT: 'ID-846',
  HERO_SERVICES: 'ID-847', 
  HERO_BLDC: 'ID-848',
  HERO_PROJECTS: 'ID-849',
  HERO_CONTACT: 'ID-850',
  HERO_NEWS: 'ID-851',
  HERO_ANALYZERS: 'ID-852'
} as const;

// Product images mapping
export const PRODUCT_IMAGES = {
  'instrumentation-components': {
    src: instrumentationComponentsImage,
    alt: `${IMAGE_IDS.INSTRUMENTATION_COMPONENTS}: Industrial instrumentation components - High-precision components for measurement and control`,
    id: IMAGE_IDS.INSTRUMENTATION_COMPONENTS
  },
  'electrical-components': {
    src: electricalComponentsImage,
    alt: `${IMAGE_IDS.ELECTRICAL_COMPONENTS}: Electrical components - Circuit breakers, contactors, relays and power supplies`,
    id: IMAGE_IDS.ELECTRICAL_COMPONENTS
  },
  'measurement-instruments': {
    src: measurementInstrumentsImage,
    alt: `${IMAGE_IDS.MEASUREMENT_INSTRUMENTS}: Measurement instruments - Digital multimeters, oscilloscopes and analyzers`,
    id: IMAGE_IDS.MEASUREMENT_INSTRUMENTS
  },
  'solar-products': {
    src: solarProductsImage,
    alt: `${IMAGE_IDS.SOLAR_PRODUCTS}: Solar products - Solar panels, inverters and energy storage systems`,
    id: IMAGE_IDS.SOLAR_PRODUCTS
  },
  'automation-control-systems': {
    src: automationControlSystemsImage,
    alt: `${IMAGE_IDS.AUTOMATION_CONTROL_SYSTEMS}: Automation control systems - PLCs, HMI and SCADA systems`,
    id: IMAGE_IDS.AUTOMATION_CONTROL_SYSTEMS
  },
  'safety-protective-devices': {
    src: safetyProtectiveDevicesImage,
    alt: `${IMAGE_IDS.SAFETY_PROTECTIVE_DEVICES}: Safety protective devices - Emergency stops, safety switches and barriers`,
    id: IMAGE_IDS.SAFETY_PROTECTIVE_DEVICES
  },
  'pumps-motors': {
    src: pumpsMotorsImage,
    alt: `${IMAGE_IDS.PUMPS_MOTORS}: Pumps and motors - Industrial pumps, BLDC motors and drives`,
    id: IMAGE_IDS.PUMPS_MOTORS
  },
  'mechanical-pumps-spares': {
    src: pumpsMotorsImage,
    alt: `${IMAGE_IDS.PUMPS_MOTORS}: Mechanical pumps and spares - Centrifugal pumps and replacement parts`,
    id: IMAGE_IDS.PUMPS_MOTORS
  },
  'industrial-tools-tackles': {
    src: industrialToolsImage,
    alt: `${IMAGE_IDS.INDUSTRIAL_TOOLS}: Industrial tools and tackles - Professional tools and equipment`,
    id: IMAGE_IDS.INDUSTRIAL_TOOLS
  },
  'bldc': {
    src: pumpsMotorsImage,
    alt: `${IMAGE_IDS.BLDC_MOTORS}: BLDC motors - Brushless DC motor systems and controllers`,
    id: IMAGE_IDS.BLDC_MOTORS
  }
} as const;

// Legacy images (keeping existing functionality)
export const LEGACY_IMAGES = {
  automationProject: automationProjectImage,
  corporateClient: corporateClientImage, 
  engineeringTeam: engineeringTeamImage,
  companyLogo: companyLogoImage,
  industrialAutomation: industrialAutomationImage,
  powerPlantControl: powerPlantControlImage
} as const;

// Subcategory to main category mapping for product images
export const SUBCATEGORY_IMAGE_MAPPING = {
  // BLDC products
  'bldc-ceiling-fan': 'bldc',
  'bldc-cooler-exhaust-motor': 'bldc',
  'bldc-submersible-surface-pump': 'bldc',
  'bldc-table-fan-wall-fan-motor': 'bldc',
  
  // Solar products
  'solar-panels': 'solar-products',
  'solar-inverters': 'solar-products',
  'solar-charge-controllers': 'solar-products',
  'solar-batteries-energy-storage': 'solar-products',
  'mounting-structures-racking': 'solar-products',
  
  // Electrical components
  'cables-wires': 'electrical-components',
  'connectors-terminals': 'electrical-components',
  'circuit-breakers-fuses': 'electrical-components',
  'power-supplies': 'electrical-components',
  'enclosures-cabinets': 'electrical-components',
  'heating-elements-appliances': 'electrical-components',
  
  // Measurement instruments
  'multimeters': 'measurement-instruments',
  'oscilloscopes': 'measurement-instruments',
  'spectrum-analyzers': 'measurement-instruments',
  'power-quality-analyzers': 'measurement-instruments',
  'calibration-equipment': 'measurement-instruments',
  
  // Automation control systems
  'plcs': 'automation-control-systems',
  'scada': 'automation-control-systems',
  'dcs': 'automation-control-systems',
  'hmi': 'automation-control-systems',
  
  // Safety protective devices
  'surge-protectors': 'safety-protective-devices',
  'grounding-systems': 'safety-protective-devices',
  'safety-relays-switches': 'safety-protective-devices',
  'intrinsically-safe-equipment': 'safety-protective-devices',
  
  // Mechanical pumps and spares
  'centrifugal-pumps': 'mechanical-pumps-spares',
  'diaphragm-pumps': 'mechanical-pumps-spares',
  'gear-pumps': 'mechanical-pumps-spares',
  'pump-parts-spares': 'mechanical-pumps-spares',
  
  // Industrial tools and tackles
  'hand-tools': 'industrial-tools-tackles',
  'power-tools': 'industrial-tools-tackles',
  'cutting-tools': 'industrial-tools-tackles',
  'lifting-equipment': 'industrial-tools-tackles',
  'safety-equipment': 'industrial-tools-tackles'
} as const;

// Helper function to get product image by category or subcategory
export const getProductImage = (productId: string) => {
  // First try direct category match
  let image = PRODUCT_IMAGES[productId as keyof typeof PRODUCT_IMAGES];
  
  // If not found, try subcategory mapping
  if (!image && SUBCATEGORY_IMAGE_MAPPING[productId as keyof typeof SUBCATEGORY_IMAGE_MAPPING]) {
    const categoryId = SUBCATEGORY_IMAGE_MAPPING[productId as keyof typeof SUBCATEGORY_IMAGE_MAPPING];
    image = PRODUCT_IMAGES[categoryId as keyof typeof PRODUCT_IMAGES];
  }
  
  return image || null;
};

// Helper function to get image with proper alt text
export const getImageWithAlt = (productId: string, customAlt?: string) => {
  const image = getProductImage(productId);
  if (!image) return null;
  
  return {
    src: image.src,
    alt: customAlt || image.alt,
    id: image.id
  };
};

// Helper function to get product image source URL
export const getProductImageSrc = (productId: string, fallback?: string) => {
  const image = getProductImage(productId);
  return image ? image.src : (fallback || '');
};

// Helper function to create proper product image alt text with ID
export const getProductImageAlt = (productId: string, productName: string, description?: string) => {
  const image = getProductImage(productId);
  if (!image) return `Product image: ${productName}`;
  
  return `${image.id}: ${productName}${description ? ' - ' + description : ''}`;
};

// Hero background images mapping
export const HERO_IMAGES = {
  about: {
    src: industrialAutomationFacilityHero,
    alt: `${IMAGE_IDS.HERO_ABOUT}: About Powerton Engineering - Industrial automation facility interior`,
    id: IMAGE_IDS.HERO_ABOUT
  },
  services: {
    src: engineeringServicesHero,
    alt: `${IMAGE_IDS.HERO_SERVICES}: Engineering Services - Professional engineering environment`,
    id: IMAGE_IDS.HERO_SERVICES
  },
  bldc: {
    src: bldcMotorSystemsHero,
    alt: `${IMAGE_IDS.HERO_BLDC}: BLDC Motor Systems - Modern motor technology showcase`,
    id: IMAGE_IDS.HERO_BLDC
  },
  projects: {
    src: industrialProjectHero,
    alt: `${IMAGE_IDS.HERO_PROJECTS}: Industrial Projects - Construction and implementation`,
    id: IMAGE_IDS.HERO_PROJECTS
  },
  contact: {
    src: corporateOfficeHero,
    alt: `${IMAGE_IDS.HERO_CONTACT}: Contact Us - Corporate office meeting environment`,
    id: IMAGE_IDS.HERO_CONTACT
  },
  news: {
    src: technicalNewsHero,
    alt: `${IMAGE_IDS.HERO_NEWS}: News & Updates - Technical communication center`,
    id: IMAGE_IDS.HERO_NEWS
  },
  analyzers: {
    src: processAnalyzersHero,
    alt: `${IMAGE_IDS.HERO_ANALYZERS}: Process Analyzers - Laboratory measurement environment`,
    id: IMAGE_IDS.HERO_ANALYZERS
  }
} as const;

// Helper function to get hero background image
export const getHeroImage = (pageType: keyof typeof HERO_IMAGES) => {
  return HERO_IMAGES[pageType] || null;
};

// Export all images for easy access
export {
  // Existing imports
  automationProjectImage,
  corporateClientImage,
  engineeringTeamImage,
  companyLogoImage,
  industrialAutomationImage,
  powerPlantControlImage,
  
  // New product images
  instrumentationComponentsImage,
  electricalComponentsImage,
  measurementInstrumentsImage,
  solarProductsImage,
  automationControlSystemsImage,
  safetyProtectiveDevicesImage,
  pumpsMotorsImage,
  industrialToolsImage,
  
  // Hero background images
  industrialAutomationFacilityHero,
  engineeringServicesHero,
  bldcMotorSystemsHero,
  industrialProjectHero,
  corporateOfficeHero,
  technicalNewsHero,
  processAnalyzersHero
};