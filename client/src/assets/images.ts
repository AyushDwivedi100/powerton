/**
 * Modern Image Management System v2.0
 * 
 * Features:
 * - Type-safe image handling with TypeScript
 * - Automatic ID generation and tracking
 * - Performance optimizations (lazy loading, srcset)
 * - Accessibility enhancements
 * - Error handling and fallbacks
 * - Image metadata tracking
 * - Modern helper functions
 * 
 * Following AI-AGENT-RULES.md image ID system
 */

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
import industrialFacilityHero from '@assets/generated_images/Industrial_facility_hero_background_e1a1fcd5.png';
import darkIndustrialFacilityHero from '@assets/generated_images/Dark_industrial_facility_hero_c9350380.png';
import productsShowcaseHero from '@assets/generated_images/Products_showcase_hero_background_5d7918eb.png';
import newsCenterHero from '@assets/generated_images/News_center_hero_background_65d5b056.png';

// Service-specific hero background images (ID-856+)
import installationCommissioningHero from '@assets/generated_images/Installation_commissioning_service_background_a1bcbda4.png';
import maintenanceRepairHero from '@assets/generated_images/Maintenance_repair_service_background_f0334dc5.png';
import calibrationTestingHero from '@assets/generated_images/Calibration_testing_service_background_a45cbbb0.png';
import consultationTrainingHero from '@assets/generated_images/Consultation_training_service_background_dc1b08c8.png';
import customSolutionsHero from '@assets/generated_images/Custom_solutions_service_background_d4165975.png';
import supplyChainManagementHero from '@assets/generated_images/Supply_chain_management_service_background_bd132a49.png';
import technicalSupportHero from '@assets/generated_images/Technical_support_service_background_2987f5ae.png';
import solarEpcHero from '@assets/generated_images/Solar_EPC_service_background_dd79a3fb.png';

// Image category types for better organization
export type ImageCategory = 
  | 'logo' 
  | 'hero' 
  | 'product' 
  | 'service' 
  | 'project' 
  | 'team' 
  | 'facility' 
  | 'generic';

export type ImageFormat = 'webp' | 'png' | 'jpg' | 'svg';

export type ImageSize = 'thumbnail' | 'small' | 'medium' | 'large' | 'xlarge' | 'hero';

// Enhanced image metadata interface
export interface ImageMetadata {
  readonly id: string;
  readonly src: string;
  readonly alt: string;
  readonly category: ImageCategory;
  readonly format?: ImageFormat;
  readonly dimensions?: { width: number; height: number };
  readonly fileSize?: string;
  readonly optimized?: boolean;
  readonly loading?: 'eager' | 'lazy';
  readonly sizes?: string;
  readonly srcSet?: string;
}

// Modern ID management with automatic tracking
export const IMAGE_ID_RANGES = {
  LOGO: { start: 1, end: 10, prefix: 'ID-' },
  ABOUT: { start: 11, end: 20, prefix: 'ID-' },
  SERVICES: { start: 21, end: 40, prefix: 'ID-' },
  PRODUCTS: { start: 41, end: 100, prefix: 'ID-' },
  PROJECTS: { start: 101, end: 150, prefix: 'ID-' },
  HERO: { start: 846, end: 900, prefix: 'ID-' },
  GENERATED: { start: 901, end: 9999, prefix: 'ID-' }
} as const;

// Enhanced Image ID mapping with metadata
export const IMAGE_IDS = {
  // Logo images (ID-001-010)
  LOGO: 'ID-001',
  COMPANY_LOGO: 'ID-002',
  
  // About section images (ID-011-020)  
  ENGINEERING_TEAM: 'ID-011',
  CORPORATE_CLIENT: 'ID-012',
  AUTOMATION_PROJECT: 'ID-013',
  INDUSTRIAL_AUTOMATION: 'ID-014',
  POWER_PLANT_CONTROL: 'ID-015',
  
  // Product category images (ID-041-100)
  INSTRUMENTATION_COMPONENTS: 'ID-041',
  ELECTRICAL_COMPONENTS: 'ID-042', 
  MEASUREMENT_INSTRUMENTS: 'ID-043',
  SOLAR_PRODUCTS: 'ID-044',
  AUTOMATION_CONTROL_SYSTEMS: 'ID-045',
  SAFETY_PROTECTIVE_DEVICES: 'ID-046',
  PUMPS_MOTORS: 'ID-047',
  INDUSTRIAL_TOOLS: 'ID-048',
  BLDC_MOTORS: 'ID-049',
  
  // Hero background images (ID-846-900)
  HERO_HOME: 'ID-846',
  HERO_ABOUT: 'ID-847',
  HERO_SERVICES: 'ID-848', 
  HERO_PRODUCTS: 'ID-849',
  HERO_BLDC: 'ID-850',
  HERO_PROJECTS: 'ID-851',
  HERO_CONTACT: 'ID-852',
  HERO_NEWS: 'ID-853',
  HERO_ANALYZERS: 'ID-854',
  
  // Service-specific hero images (ID-856-863)
  HERO_INSTALLATION_COMMISSIONING: 'ID-856',
  HERO_MAINTENANCE_REPAIR: 'ID-857',
  HERO_CALIBRATION_TESTING: 'ID-858',
  HERO_CONSULTATION_TRAINING: 'ID-859',
  HERO_CUSTOM_SOLUTIONS: 'ID-860',
  HERO_SUPPLY_CHAIN_MANAGEMENT: 'ID-861',
  HERO_TECHNICAL_SUPPORT: 'ID-862',
  HERO_SOLAR_EPC: 'ID-863'
} as const;

// Next available ID tracker
export const NEXT_AVAILABLE_IDS = {
  LOGO: 3,
  ABOUT: 16,
  SERVICES: 21,
  PRODUCTS: 50,
  PROJECTS: 101,
  HERO: 864,
  GENERATED: 901
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

// Modern helper functions with enhanced features

/**
 * Get product image with enhanced error handling and fallbacks
 */
export const getProductImage = (productId: string): ImageMetadata | null => {
  // Direct category match
  let image = PRODUCT_IMAGES[productId as keyof typeof PRODUCT_IMAGES];
  
  // Subcategory mapping fallback
  if (!image && SUBCATEGORY_IMAGE_MAPPING[productId as keyof typeof SUBCATEGORY_IMAGE_MAPPING]) {
    const categoryId = SUBCATEGORY_IMAGE_MAPPING[productId as keyof typeof SUBCATEGORY_IMAGE_MAPPING];
    image = PRODUCT_IMAGES[categoryId as keyof typeof PRODUCT_IMAGES];
  }
  
  return image ? {
    ...image,
    category: 'product',
    loading: 'lazy',
    optimized: true
  } as ImageMetadata : null;
};

/**
 * Enhanced image retrieval with customization options
 */
export const getImageWithOptions = (
  productId: string, 
  options: {
    customAlt?: string;
    loading?: 'eager' | 'lazy';
    sizes?: string;
    className?: string;
  } = {}
): ImageMetadata | null => {
  const image = getProductImage(productId);
  if (!image) return null;
  
  return {
    ...image,
    alt: options.customAlt || image.alt,
    loading: options.loading || 'lazy',
    sizes: options.sizes,
  };
};

/**
 * Get optimized image source with fallback
 */
export const getOptimizedImageSrc = (
  productId: string, 
  size: ImageSize = 'medium',
  fallback: string = '/images/placeholder.png'
): string => {
  const image = getProductImage(productId);
  return image?.src || fallback;
};

/**
 * Generate SEO-optimized alt text with proper ID format
 */
export const generateImageAlt = (
  imageId: string,
  productName: string, 
  description?: string,
  context?: string
): string => {
  const baseAlt = `${imageId}: ${productName}`;
  const descriptionPart = description ? ` - ${description}` : '';
  const contextPart = context ? ` | ${context}` : '';
  
  return `${baseAlt}${descriptionPart}${contextPart}`;
};

/**
 * Image preloader utility for performance
 */
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Batch preload multiple images
 */
export const preloadImages = async (srcs: string[]): Promise<void> => {
  try {
    await Promise.all(srcs.map(preloadImage));
  } catch (error) {
    console.warn('Some images failed to preload:', error);
  }
};

// Hero background images mapping
export const HERO_IMAGES = {
  home: {
    src: darkIndustrialFacilityHero,
    alt: `${IMAGE_IDS.HERO_HOME}: Powerton Engineering - Dark industrial automation facility with dramatic lighting`,
    id: IMAGE_IDS.HERO_HOME
  },
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
  products: {
    src: productsShowcaseHero,
    alt: `${IMAGE_IDS.HERO_PRODUCTS}: Products Showcase - Industrial equipment and components`,
    id: IMAGE_IDS.HERO_PRODUCTS
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
    src: newsCenterHero,
    alt: `${IMAGE_IDS.HERO_NEWS}: News & Updates - Corporate news and information center`,
    id: IMAGE_IDS.HERO_NEWS
  },
  analyzers: {
    src: processAnalyzersHero,
    alt: `${IMAGE_IDS.HERO_ANALYZERS}: Process Analyzers - Laboratory measurement environment`,
    id: IMAGE_IDS.HERO_ANALYZERS
  }
} as const;

// Service-specific hero images mapping
export const SERVICE_HERO_IMAGES = {
  'installation-commissioning': {
    src: installationCommissioningHero,
    alt: `${IMAGE_IDS.HERO_INSTALLATION_COMMISSIONING}: Installation and Commissioning - Professional engineering installation services`,
    id: IMAGE_IDS.HERO_INSTALLATION_COMMISSIONING
  },
  'maintenance-repair': {
    src: maintenanceRepairHero,
    alt: `${IMAGE_IDS.HERO_MAINTENANCE_REPAIR}: Maintenance and Repair - Industrial maintenance and repair services`,
    id: IMAGE_IDS.HERO_MAINTENANCE_REPAIR
  },
  'calibration-testing': {
    src: calibrationTestingHero,
    alt: `${IMAGE_IDS.HERO_CALIBRATION_TESTING}: Calibration and Testing - Precision calibration and testing services`,
    id: IMAGE_IDS.HERO_CALIBRATION_TESTING
  },
  'consultation-training': {
    src: consultationTrainingHero,
    alt: `${IMAGE_IDS.HERO_CONSULTATION_TRAINING}: Consultation and Training - Expert technical consultation and training`,
    id: IMAGE_IDS.HERO_CONSULTATION_TRAINING
  },
  'custom-solutions': {
    src: customSolutionsHero,
    alt: `${IMAGE_IDS.HERO_CUSTOM_SOLUTIONS}: Custom Solutions - Tailored engineering solutions and systems`,
    id: IMAGE_IDS.HERO_CUSTOM_SOLUTIONS
  },
  'supply-chain-management': {
    src: supplyChainManagementHero,
    alt: `${IMAGE_IDS.HERO_SUPPLY_CHAIN_MANAGEMENT}: Supply Chain Management - Component sourcing and logistics`,
    id: IMAGE_IDS.HERO_SUPPLY_CHAIN_MANAGEMENT
  },
  'technical-support': {
    src: technicalSupportHero,
    alt: `${IMAGE_IDS.HERO_TECHNICAL_SUPPORT}: Technical Support - 24/7 technical assistance and troubleshooting`,
    id: IMAGE_IDS.HERO_TECHNICAL_SUPPORT
  },
  'solar-epc': {
    src: solarEpcHero,
    alt: `${IMAGE_IDS.HERO_SOLAR_EPC}: Solar EPC - Complete solar engineering, procurement and construction`,
    id: IMAGE_IDS.HERO_SOLAR_EPC
  }
} as const;

/**
 * Enhanced hero image retrieval with optimization
 */
export const getHeroImage = (
  pageType: keyof typeof HERO_IMAGES,
  options: {
    preload?: boolean;
    quality?: 'low' | 'medium' | 'high';
  } = {}
): ImageMetadata | null => {
  const heroImage = HERO_IMAGES[pageType];
  if (!heroImage) return null;
  
  const enhancedImage: ImageMetadata = {
    ...heroImage,
    category: 'hero',
    loading: options.preload ? 'eager' : 'lazy',
    optimized: true,
    sizes: '100vw',
    dimensions: { width: 1920, height: 1080 }
  };
  
  // Preload if requested
  if (options.preload) {
    preloadImage(heroImage.src).catch(console.warn);
  }
  
  return enhancedImage;
};

/**
 * Get service-specific hero image with optimization
 */
export const getServiceHeroImage = (
  serviceId: keyof typeof SERVICE_HERO_IMAGES,
  options: {
    preload?: boolean;
    quality?: 'low' | 'medium' | 'high';
  } = {}
): ImageMetadata | null => {
  const heroImage = SERVICE_HERO_IMAGES[serviceId];
  if (!heroImage) return null;
  
  const enhancedImage: ImageMetadata = {
    ...heroImage,
    category: 'service',
    loading: options.preload ? 'eager' : 'lazy',
    optimized: true,
    sizes: '100vw',
    dimensions: { width: 1920, height: 1080 }
  };
  
  // Preload if requested
  if (options.preload) {
    preloadImage(heroImage.src).catch(console.warn);
  }
  
  return enhancedImage;
};

/**
 * Generate image component props
 */
export const generateImageProps = (
  image: ImageMetadata | null,
  additionalProps: Record<string, any> = {}
) => {
  if (!image) return { src: '/images/placeholder.png', alt: 'Image not found' };
  
  return {
    src: image.src,
    alt: image.alt,
    loading: image.loading || 'lazy',
    sizes: image.sizes,
    width: image.dimensions?.width,
    height: image.dimensions?.height,
    ...additionalProps
  };
};

// Advanced Image Management Utilities

/**
 * Image Manager Class for centralized image handling
 */
export class ImageManager {
  private static instance: ImageManager;
  private preloadedImages: Set<string> = new Set();
  private imageCache: Map<string, ImageMetadata> = new Map();
  
  static getInstance(): ImageManager {
    if (!ImageManager.instance) {
      ImageManager.instance = new ImageManager();
    }
    return ImageManager.instance;
  }
  
  /**
   * Preload critical images for better performance
   */
  async preloadCriticalImages(): Promise<void> {
    const criticalImages = [
      HERO_IMAGES.home.src,
      HERO_IMAGES.about.src,
      HERO_IMAGES.services.src
    ];
    
    await preloadImages(criticalImages);
    criticalImages.forEach(src => this.preloadedImages.add(src));
  }
  
  /**
   * Check if image is preloaded
   */
  isPreloaded(src: string): boolean {
    return this.preloadedImages.has(src);
  }
  
  /**
   * Get optimized image with caching
   */
  getOptimizedImage(id: string, options: Record<string, any> = {}): ImageMetadata | null {
    const cacheKey = `${id}-${JSON.stringify(options)}`;
    
    if (this.imageCache.has(cacheKey)) {
      return this.imageCache.get(cacheKey)!;
    }
    
    const image = getProductImage(id);
    if (image) {
      const optimizedImage = { ...image, ...options };
      this.imageCache.set(cacheKey, optimizedImage);
      return optimizedImage;
    }
    
    return null;
  }
  
  /**
   * Clear image cache
   */
  clearCache(): void {
    this.imageCache.clear();
  }
}

// Modern image registry for better organization
export const IMAGE_REGISTRY = {
  // Legacy images (for backward compatibility)
  legacy: {
    automationProject: automationProjectImage,
    corporateClient: corporateClientImage,
    engineeringTeam: engineeringTeamImage,
    companyLogo: companyLogoImage,
    industrialAutomation: industrialAutomationImage,
    powerPlantControl: powerPlantControlImage
  },
  
  // Product category images
  products: {
    instrumentationComponents: instrumentationComponentsImage,
    electricalComponents: electricalComponentsImage,
    measurementInstruments: measurementInstrumentsImage,
    solarProducts: solarProductsImage,
    automationControlSystems: automationControlSystemsImage,
    safetyProtectiveDevices: safetyProtectiveDevicesImage,
    pumpsMotors: pumpsMotorsImage,
    industrialTools: industrialToolsImage
  },
  
  // Hero background images
  heroes: {
    industrial: industrialFacilityHero,
    darkIndustrial: darkIndustrialFacilityHero,
    automation: industrialAutomationFacilityHero,
    services: engineeringServicesHero,
    products: productsShowcaseHero,
    bldc: bldcMotorSystemsHero,
    projects: industrialProjectHero,
    corporate: corporateOfficeHero,
    newsCenter: newsCenterHero,
    technicalNews: technicalNewsHero,
    analyzers: processAnalyzersHero
  },
  
  // Service-specific hero images
  serviceHeroes: {
    installationCommissioning: installationCommissioningHero,
    maintenanceRepair: maintenanceRepairHero,
    calibrationTesting: calibrationTestingHero,
    consultationTraining: consultationTrainingHero,
    customSolutions: customSolutionsHero,
    supplyChainManagement: supplyChainManagementHero,
    technicalSupport: technicalSupportHero,
    solarEpc: solarEpcHero
  }
} as const;

// Initialize singleton instance
export const imageManager = ImageManager.getInstance();

// Modern utility functions for common image operations
export const ImageUtils = {
  /**
   * Generate responsive image srcSet
   */
  generateSrcSet: (baseSrc: string, sizes: number[]): string => {
    return sizes.map(size => `${baseSrc}?w=${size} ${size}w`).join(', ');
  },
  
  /**
   * Get image format from URL
   */
  getImageFormat: (src: string): ImageFormat => {
    const extension = src.split('.').pop()?.toLowerCase();
    switch (extension) {
      case 'webp': return 'webp';
      case 'jpg':
      case 'jpeg': return 'jpg';
      case 'svg': return 'svg';
      default: return 'png';
    }
  },
  
  /**
   * Validate image ID format
   */
  validateImageId: (id: string): boolean => {
    return /^ID-\d{3,4}$/.test(id);
  },
  
  /**
   * Get next available ID in range
   */
  getNextId: (category: keyof typeof IMAGE_ID_RANGES): string => {
    const range = IMAGE_ID_RANGES[category];
    const nextNum = NEXT_AVAILABLE_IDS[category as keyof typeof NEXT_AVAILABLE_IDS];
    return `${range.prefix}${nextNum.toString().padStart(3, '0')}`;
  }
};

// Export all images with modern structure for backward compatibility
export {
  // Existing imports
  automationProjectImage,
  corporateClientImage,
  engineeringTeamImage,
  companyLogoImage,
  industrialAutomationImage,
  powerPlantControlImage,
  
  // Product images
  instrumentationComponentsImage,
  electricalComponentsImage,
  measurementInstrumentsImage,
  solarProductsImage,
  automationControlSystemsImage,
  safetyProtectiveDevicesImage,
  pumpsMotorsImage,
  industrialToolsImage,
  
  // Hero background images
  industrialFacilityHero,
  darkIndustrialFacilityHero,
  industrialAutomationFacilityHero,
  engineeringServicesHero,
  productsShowcaseHero,
  bldcMotorSystemsHero,
  industrialProjectHero,
  corporateOfficeHero,
  newsCenterHero,
  technicalNewsHero,
  processAnalyzersHero,
  
  // Service-specific hero images
  installationCommissioningHero,
  maintenanceRepairHero,
  calibrationTestingHero,
  consultationTrainingHero,
  customSolutionsHero,
  supplyChainManagementHero,
  technicalSupportHero,
  solarEpcHero
};

// Legacy compatibility functions for backward compatibility
/**
 * @deprecated Use getProductImage() instead
 */
export const getProductImageSrc = (productId: string): string => {
  const image = getProductImage(productId);
  return image?.src || '/images/placeholder.png';
};

/**
 * @deprecated Use getProductImage() instead
 */
export const getProductImageAlt = (productId: string, productName?: string, productDescription?: string): string => {
  const image = getProductImage(productId);
  if (image) {
    return image.alt;
  }
  
  // Fallback for when image is not found
  if (productName && productDescription) {
    return `${productId}: ${productName} - ${productDescription}`;
  } else if (productName) {
    return `${productId}: ${productName}`;
  }
  return `Product image for ${productId}`;
};

/**
 * Get file base name from current file path
 */
export const getFileBaseName = (): string => {
  // This function extracts the filename from the current module
  // Since we can't access import.meta.url in all contexts, we'll use a fallback
  try {
    const stack = new Error().stack;
    if (stack) {
      const match = stack.match(/product-([^/]+)\.tsx/);
      if (match) {
        return match[1];
      }
    }
  } catch (e) {
    // Fallback - return empty string
  }
  return '';
};

// Performance optimization: Initialize critical images preloading
if (typeof window !== 'undefined') {
  // Preload hero images after page load for better UX
  window.addEventListener('load', () => {
    imageManager.preloadCriticalImages().catch(console.warn);
  });
}