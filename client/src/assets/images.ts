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
import companyLogoImage from '@assets/downloaded_images/main-logo-powerton.png';
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
import bldcHomeImage from '@assets/generated_images/BLDC_products_home_section_e04e1480.png';

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

// Product-specific images for sensors and transmitters
import proximitySesorImage from '@assets/generated_images/PNP_proximity_sensor_industrial_769713a2.png';
import rtdTemperatureSensorImage from '@assets/generated_images/RTD_temperature_sensor_industrial_9892ebfa.png';
import thermocoupleTemperatureSensorImage from '@assets/generated_images/Thermocouple_temperature_sensor_industrial_eda275f6.png';
import phSensorImage from '@assets/generated_images/pH_sensor_industrial_measurement_9c3260ae.png';
import loadCellImage from '@assets/generated_images/Load_cell_force_transducer_3b31c1d3.png';
import pressureTransmitterImage from '@assets/generated_images/Pressure_transmitter_industrial_automation_bb913552.png';
import flowMeterImage from '@assets/generated_images/Electromagnetic_flow_meter_industrial_1d02737a.png';
import levelTransmitterImage from '@assets/generated_images/Radar_level_transmitter_industrial_ffed4463.png';
import photoelectricSensorImage from '@assets/generated_images/Photoelectric_sensor_industrial_automation_c798d5aa.png';

// Specific product images for individual product types
import npnProximitySensorImage from '@assets/generated_images/NPN_proximity_sensor_black_6e0a73a1.png';
import pt100RtdSensorImage from '@assets/generated_images/PT100_RTD_sensor_probe_14f7e01d.png';
import pt500RtdSensorImage from '@assets/generated_images/PT500_RTD_compact_sensor_0bc68a6f.png';
import pt1000RtdSensorImage from '@assets/generated_images/PT1000_RTD_modern_design_b88fc674.png';
import typeJThermocoupleImage from '@assets/generated_images/Type_J_thermocouple_sensor_42532a66.png';
import typeTThermocoupleImage from '@assets/generated_images/Type_T_thermocouple_precision_6432158c.png';
import typeSThermocoupleImage from '@assets/generated_images/Type_S_thermocouple_platinum_c51b2d37.png';
import typeNThermocoupleImage from '@assets/generated_images/Type_N_thermocouple_industrial_a502c921.png';
import typeRThermocoupleImage from '@assets/generated_images/Type_R_thermocouple_platinum_premium_9cf8b105.png';
import compressionLoadCellImage from '@assets/generated_images/Compression_load_cell_industrial_c9c79f04.png';
import smartPressureTransmitterImage from '@assets/generated_images/Smart_pressure_transmitter_digital_43be9f40.png';
import electromagneticFlowMeterImage from '@assets/generated_images/Electromagnetic_flow_meter_flanged_250d2c40.png';
import radarLevelTransmitterImage from '@assets/generated_images/Radar_level_transmitter_antenna_f6e645a7.png';
import phSensorGlassImage from '@assets/generated_images/pH_sensor_glass_electrode_b39b5e79.png';
import photoelectricThroughBeamImage from '@assets/generated_images/Photoelectric_sensor_through-beam_c17580f6.png';
import safetyProximitySensorImage from '@assets/generated_images/Safety_proximity_sensor_yellow_1a3b7ac2.png';
import laserPhotoelectricSensorImage from '@assets/generated_images/Laser_photoelectric_sensor_precision_6899d990.png';
import retroreflectiveSensorImage from '@assets/generated_images/Retroreflective_sensor_cubic_design_b1a7d7ab.png';

// New transmitter and flow meter stock images
import dpTransmitterImage from '@assets/stock_images/industrial_pressure__0f9690ef.jpg';
import pTypeTransmitterImage from '@assets/stock_images/industrial_pressure__717f5f0e.jpg';
import rsTransmitterImage from '@assets/stock_images/industrial_pressure__4a527507.jpg';
import magneticFlowMeterImage from '@assets/stock_images/industrial_electroma_7065d7a2.jpg';
// Using available fallback images for missing assets
import massFlowMeterImage from '@assets/stock_images/industrial_electroma_7065d7a2.jpg';
import vortexFlowMeterImage from '@assets/stock_images/industrial_pressure__0f9690ef.jpg';
import pdFlowMeterImage from '@assets/stock_images/industrial_pressure__717f5f0e.jpg';

// Circuit breaker images
import rccbImage from '@assets/generated_images/RCCB_industrial_electrical_device_7d6444e2.png';
import acbImage from '@assets/generated_images/ACB_air_circuit_breaker_01e20a8c.png';
import vcbImage from '@assets/generated_images/VCB_vacuum_circuit_breaker_d6b1217e.png';

// Service-specific hero background images (ID-856+)
import installationCommissioningHero from '@assets/generated_images/Installation_commissioning_service_background_a1bcbda4.png';
import maintenanceRepairHero from '@assets/generated_images/Maintenance_repair_service_background_f0334dc5.png';
import calibrationTestingHero from '@assets/generated_images/Calibration_testing_service_background_a45cbbb0.png';
import consultationTrainingHero from '@assets/generated_images/Consultation_training_service_background_dc1b08c8.png';
import customSolutionsHero from '@assets/generated_images/Custom_solutions_service_background_d4165975.png';
import supplyChainManagementHero from '@assets/generated_images/Supply_chain_management_service_background_bd132a49.png';
import technicalSupportHero from '@assets/generated_images/Technical_support_service_background_2987f5ae.png';
import solarEpcHero from '@assets/generated_images/Solar_EPC_service_background_dd79a3fb.png';
import quotePageHero from '@assets/generated_images/Industrial_engineering_office_workspace_37d65e8d.png';

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
  SENSORS: 'ID-050',
  TRANSMITTERS: 'ID-051',
  
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
  HERO_SOLAR_EPC: 'ID-863',
  HERO_QUOTE: 'ID-864',
  
  // Specific product images (ID-901-925)
  NPN_PROXIMITY_SENSOR: 'ID-901',
  PT100_RTD_SENSOR: 'ID-902',
  PT500_RTD_SENSOR: 'ID-903',
  PT1000_RTD_SENSOR: 'ID-904',
  TYPE_J_THERMOCOUPLE: 'ID-905',
  TYPE_T_THERMOCOUPLE: 'ID-906',
  TYPE_S_THERMOCOUPLE: 'ID-907',
  TYPE_N_THERMOCOUPLE: 'ID-908',
  TYPE_R_THERMOCOUPLE: 'ID-909',
  COMPRESSION_LOAD_CELL: 'ID-910',
  SMART_PRESSURE_TRANSMITTER: 'ID-911',
  ELECTROMAGNETIC_FLOW_METER: 'ID-912',
  RADAR_LEVEL_TRANSMITTER: 'ID-913',
  PH_SENSOR_GLASS: 'ID-914',
  PHOTOELECTRIC_THROUGH_BEAM: 'ID-915',
  SAFETY_PROXIMITY_SENSOR: 'ID-916',
  LASER_PHOTOELECTRIC_SENSOR: 'ID-917',
  RETROREFLECTIVE_SENSOR: 'ID-918',
  
  // New transmitter and flow meter types (ID-919-925)
  DP_TRANSMITTER: 'ID-919',
  P_TYPE_TRANSMITTER: 'ID-920',
  RS_TRANSMITTER: 'ID-921',
  MAGNETIC_FLOW_METER: 'ID-922',
  MASS_FLOW_METER: 'ID-923',
  VORTEX_FLOW_METER: 'ID-924',
  PD_FLOW_METER: 'ID-925',
  
  // Circuit breaker types (ID-926-928)
  RCCB_CIRCUIT_BREAKER: 'ID-926',
  ACB_CIRCUIT_BREAKER: 'ID-927',
  VCB_CIRCUIT_BREAKER: 'ID-928'
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
  'instrumentation-accessories': {
    src: instrumentationComponentsImage,
    alt: `${IMAGE_IDS.INSTRUMENTATION_COMPONENTS}: Industrial instrumentation components - High-precision components for measurement and control`,
    id: IMAGE_IDS.INSTRUMENTATION_COMPONENTS
  },
  'electrical-components': {
    src: electricalComponentsImage,
    alt: `${IMAGE_IDS.ELECTRICAL_COMPONENTS}: Electrical components - Circuit breakers, contactors, relays and power supplies`,
    id: IMAGE_IDS.ELECTRICAL_COMPONENTS
  },
  'industrial-measuring-tools': {
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
  'bldc': {
    src: bldcHomeImage,
    alt: `${IMAGE_IDS.BLDC_MOTORS}: BLDC motors - Brushless DC motor systems and controllers`,
    id: IMAGE_IDS.BLDC_MOTORS
  },
  'sensors': {
    src: proximitySesorImage,
    alt: `${IMAGE_IDS.SENSORS}: Industrial sensors - PNP/NPN proximity, RTD, thermocouples, pH sensors`,
    id: IMAGE_IDS.SENSORS
  },
  'transmitters': {
    src: pressureTransmitterImage,
    alt: `${IMAGE_IDS.TRANSMITTERS}: Industrial transmitters - Pressure, temperature, flow, level transmitters`,
    id: IMAGE_IDS.TRANSMITTERS
  },
  
  // Specific sensor product images
  'pnp-proximity-sensor': {
    src: proximitySesorImage,
    alt: `${IMAGE_IDS.SENSORS}: PNP proximity sensor - Industrial automation sensor for position detection`,
    id: IMAGE_IDS.SENSORS
  },
  'npn-proximity-sensor': {
    src: npnProximitySensorImage,
    alt: `${IMAGE_IDS.NPN_PROXIMITY_SENSOR}: NPN proximity sensor - Black M18 threaded industrial automation sensor`,
    id: IMAGE_IDS.NPN_PROXIMITY_SENSOR
  },
  'pt100-rtd-sensor': {
    src: pt100RtdSensorImage,
    alt: `${IMAGE_IDS.PT100_RTD_SENSOR}: PT100 RTD sensor - Precision temperature sensor with stainless steel probe`,
    id: IMAGE_IDS.PT100_RTD_SENSOR
  },
  'pt500-rtd-sensor': {
    src: pt500RtdSensorImage,
    alt: `${IMAGE_IDS.PT500_RTD_SENSOR}: PT500 RTD sensor - Compact temperature sensor for industrial automation`,
    id: IMAGE_IDS.PT500_RTD_SENSOR
  },
  'pt1000-rtd-sensor': {
    src: pt1000RtdSensorImage,
    alt: `${IMAGE_IDS.PT1000_RTD_SENSOR}: PT1000 RTD sensor - Modern 2-wire temperature sensor for HVAC applications`,
    id: IMAGE_IDS.PT1000_RTD_SENSOR
  },
  'type-j-thermocouple': {
    src: typeJThermocoupleImage,
    alt: `${IMAGE_IDS.TYPE_J_THERMOCOUPLE}: Type J thermocouple - Iron-constantan high temperature sensor`,
    id: IMAGE_IDS.TYPE_J_THERMOCOUPLE
  },
  'type-t-thermocouple': {
    src: typeTThermocoupleImage,
    alt: `${IMAGE_IDS.TYPE_T_THERMOCOUPLE}: Type T thermocouple - Copper-constantan precision low temperature sensor`,
    id: IMAGE_IDS.TYPE_T_THERMOCOUPLE
  },
  'type-s-thermocouple': {
    src: typeSThermocoupleImage,
    alt: `${IMAGE_IDS.TYPE_S_THERMOCOUPLE}: Type S thermocouple - Platinum-rhodium ultra-high precision sensor`,
    id: IMAGE_IDS.TYPE_S_THERMOCOUPLE
  },
  'type-n-thermocouple': {
    src: typeNThermocoupleImage,
    alt: `${IMAGE_IDS.TYPE_N_THERMOCOUPLE}: Type N thermocouple - Nicrosil-nisil industrial process sensor`,
    id: IMAGE_IDS.TYPE_N_THERMOCOUPLE
  },
  'type-r-thermocouple': {
    src: typeRThermocoupleImage,
    alt: `${IMAGE_IDS.TYPE_R_THERMOCOUPLE}: Type R thermocouple - Premium platinum laboratory precision sensor`,
    id: IMAGE_IDS.TYPE_R_THERMOCOUPLE
  },
  'compression-load-cell': {
    src: compressionLoadCellImage,
    alt: `${IMAGE_IDS.COMPRESSION_LOAD_CELL}: Compression load cell - Heavy-duty industrial weighing force transducer`,
    id: IMAGE_IDS.COMPRESSION_LOAD_CELL
  },
  'smart-pressure-transmitter': {
    src: smartPressureTransmitterImage,
    alt: `${IMAGE_IDS.SMART_PRESSURE_TRANSMITTER}: Smart pressure transmitter - Digital transmitter with HART communication`,
    id: IMAGE_IDS.SMART_PRESSURE_TRANSMITTER
  },
  'electromagnetic-flow-meter': {
    src: electromagneticFlowMeterImage,
    alt: `${IMAGE_IDS.ELECTROMAGNETIC_FLOW_METER}: Electromagnetic flow meter - Flanged industrial flow measurement device`,
    id: IMAGE_IDS.ELECTROMAGNETIC_FLOW_METER
  },
  'radar-level-transmitter': {
    src: radarLevelTransmitterImage,
    alt: `${IMAGE_IDS.RADAR_LEVEL_TRANSMITTER}: Radar level transmitter - 80 GHz non-contact level measurement sensor`,
    id: IMAGE_IDS.RADAR_LEVEL_TRANSMITTER
  },
  'ph-sensor-glass': {
    src: phSensorGlassImage,
    alt: `${IMAGE_IDS.PH_SENSOR_GLASS}: pH sensor - Glass electrode laboratory grade liquid analysis sensor`,
    id: IMAGE_IDS.PH_SENSOR_GLASS
  },
  'photoelectric-through-beam': {
    src: photoelectricThroughBeamImage,
    alt: `${IMAGE_IDS.PHOTOELECTRIC_THROUGH_BEAM}: Photoelectric sensor - Through-beam red LED long-range detection`,
    id: IMAGE_IDS.PHOTOELECTRIC_THROUGH_BEAM
  },
  'safety-proximity-sensor': {
    src: safetyProximitySensorImage,
    alt: `${IMAGE_IDS.SAFETY_PROXIMITY_SENSOR}: Safety proximity sensor - Yellow TÜV certified dual channel sensor`,
    id: IMAGE_IDS.SAFETY_PROXIMITY_SENSOR
  },
  'laser-photoelectric-sensor': {
    src: laserPhotoelectricSensorImage,
    alt: `${IMAGE_IDS.LASER_PHOTOELECTRIC_SENSOR}: Laser photoelectric sensor - Class 1 laser precision automation sensor`,
    id: IMAGE_IDS.LASER_PHOTOELECTRIC_SENSOR
  },
  'retroreflective-sensor': {
    src: retroreflectiveSensorImage,
    alt: `${IMAGE_IDS.RETROREFLECTIVE_SENSOR}: Retroreflective sensor - IR LED cubic design IP69K harsh environment`,
    id: IMAGE_IDS.RETROREFLECTIVE_SENSOR
  },
  
  // DP Type Transmitters
  'rosemount-3051cd-dp-transmitter': {
    src: dpTransmitterImage,
    alt: `${IMAGE_IDS.DP_TRANSMITTER}: Rosemount 3051CD DP transmitter - Coplanar differential pressure transmitter with HART communication`,
    id: IMAGE_IDS.DP_TRANSMITTER
  },
  'endress-hauser-deltabar-pmd75-dp': {
    src: dpTransmitterImage,
    alt: `${IMAGE_IDS.DP_TRANSMITTER}: Endress+Hauser Deltabar PMD75 - Digital differential pressure transmitter with PROFIBUS communication`,
    id: IMAGE_IDS.DP_TRANSMITTER
  },
  'yokogawa-eja110e-dp-transmitter': {
    src: dpTransmitterImage,
    alt: `${IMAGE_IDS.DP_TRANSMITTER}: Yokogawa EJA110E DP transmitter - Multivariable differential pressure transmitter with FOUNDATION Fieldbus`,
    id: IMAGE_IDS.DP_TRANSMITTER
  },
  'honeywell-stt950-dp-transmitter': {
    src: dpTransmitterImage,
    alt: `${IMAGE_IDS.DP_TRANSMITTER}: Honeywell STT950 DP transmitter - SmartLine differential pressure transmitter with advanced diagnostics`,
    id: IMAGE_IDS.DP_TRANSMITTER
  },
  
  // P Type Transmitters
  'siemens-sitrans-p320-pressure': {
    src: pTypeTransmitterImage,
    alt: `${IMAGE_IDS.P_TYPE_TRANSMITTER}: Siemens SITRANS P320 - Absolute and gauge pressure transmitter with ceramic sensor`,
    id: IMAGE_IDS.P_TYPE_TRANSMITTER
  },
  'abb-2600t-series-pressure': {
    src: pTypeTransmitterImage,
    alt: `${IMAGE_IDS.P_TYPE_TRANSMITTER}: ABB 2600T Series - High-performance pressure transmitter with silicon resonant sensor`,
    id: IMAGE_IDS.P_TYPE_TRANSMITTER
  },
  'wika-a10-pressure-transmitter': {
    src: pTypeTransmitterImage,
    alt: `${IMAGE_IDS.P_TYPE_TRANSMITTER}: WIKA A-10 pressure transmitter - Compact general purpose pressure transmitter`,
    id: IMAGE_IDS.P_TYPE_TRANSMITTER
  },
  'fuji-fcx-aii-pressure': {
    src: pTypeTransmitterImage,
    alt: `${IMAGE_IDS.P_TYPE_TRANSMITTER}: Fuji Electric FCX-AII - Intelligent pressure transmitter with digital communication`,
    id: IMAGE_IDS.P_TYPE_TRANSMITTER
  },
  
  // RS Type Transmitters (Remote Seal)
  'rosemount-3051s-remote-seal': {
    src: rsTransmitterImage,
    alt: `${IMAGE_IDS.RS_TRANSMITTER}: Rosemount 3051S - Remote seal pressure transmitter for extreme applications`,
    id: IMAGE_IDS.RS_TRANSMITTER
  },
  'endress-hauser-cerabar-s-remote': {
    src: rsTransmitterImage,
    alt: `${IMAGE_IDS.RS_TRANSMITTER}: Endress+Hauser Cerabar S - Remote seal pressure transmitter with ceramic sensor`,
    id: IMAGE_IDS.RS_TRANSMITTER
  },
  'yokogawa-eja430e-remote-seal': {
    src: rsTransmitterImage,
    alt: `${IMAGE_IDS.RS_TRANSMITTER}: Yokogawa EJA430E - Remote seal gauge pressure transmitter with DPharp sensor`,
    id: IMAGE_IDS.RS_TRANSMITTER
  },
  'honeywell-stt850-remote-seal': {
    src: rsTransmitterImage,
    alt: `${IMAGE_IDS.RS_TRANSMITTER}: Honeywell STT850 - SmartLine remote seal pressure transmitter`,
    id: IMAGE_IDS.RS_TRANSMITTER
  },
  
  // Magnetic Flow Meters
  'endress-hauser-promag-w400': {
    src: magneticFlowMeterImage,
    alt: `${IMAGE_IDS.MAGNETIC_FLOW_METER}: Endress+Hauser Promag W400 - Electromagnetic flow meter for water and wastewater applications`,
    id: IMAGE_IDS.MAGNETIC_FLOW_METER
  },
  'rosemount-8750w-magnetic-flowmeter': {
    src: magneticFlowMeterImage,
    alt: `${IMAGE_IDS.MAGNETIC_FLOW_METER}: Rosemount 8750W - Wafer-style magnetic flow meter with advanced diagnostics`,
    id: IMAGE_IDS.MAGNETIC_FLOW_METER
  },
  'abb-procesmaster-fem300': {
    src: magneticFlowMeterImage,
    alt: `${IMAGE_IDS.MAGNETIC_FLOW_METER}: ABB ProcessMaster FEM300 - Electromagnetic flow meter for process applications`,
    id: IMAGE_IDS.MAGNETIC_FLOW_METER
  },
  'yokogawa-admag-axf-magnetic': {
    src: magneticFlowMeterImage,
    alt: `${IMAGE_IDS.MAGNETIC_FLOW_METER}: Yokogawa ADMAG AXF - Two-wire magnetic flow meter with dual frequency excitation`,
    id: IMAGE_IDS.MAGNETIC_FLOW_METER
  },
  
  // Mass Flow Meters
  'emerson-micro-motion-cmf300': {
    src: massFlowMeterImage,
    alt: `${IMAGE_IDS.MASS_FLOW_METER}: Emerson Micro Motion CMF300 - Coriolis mass flow meter with high accuracy`,
    id: IMAGE_IDS.MASS_FLOW_METER
  },
  'endress-hauser-promass-83f': {
    src: massFlowMeterImage,
    alt: `${IMAGE_IDS.MASS_FLOW_METER}: Endress+Hauser Promass 83F - Coriolis mass flow meter for liquid applications`,
    id: IMAGE_IDS.MASS_FLOW_METER
  },
  'abb-sensyflow-cmf300': {
    src: massFlowMeterImage,
    alt: `${IMAGE_IDS.MASS_FLOW_METER}: ABB SensyFlow CMF300 - Compact Coriolis mass flow meter`,
    id: IMAGE_IDS.MASS_FLOW_METER
  },
  'yokogawa-rotamass-rccs33': {
    src: massFlowMeterImage,
    alt: `${IMAGE_IDS.MASS_FLOW_METER}: Yokogawa ROTAMASS RCCS33 - Multi-variable Coriolis mass flow meter`,
    id: IMAGE_IDS.MASS_FLOW_METER
  },
  
  // Vortex Flow Meters
  'endress-hauser-prowirl-f200': {
    src: vortexFlowMeterImage,
    alt: `${IMAGE_IDS.VORTEX_FLOW_METER}: Endress+Hauser Prowirl F200 - Vortex flow meter for steam and gas applications`,
    id: IMAGE_IDS.VORTEX_FLOW_METER
  },
  'rosemount-8800d-vortex': {
    src: vortexFlowMeterImage,
    alt: `${IMAGE_IDS.VORTEX_FLOW_METER}: Rosemount 8800D - Dual sensor vortex flow meter with advanced signal processing`,
    id: IMAGE_IDS.VORTEX_FLOW_METER
  },
  'yokogawa-digitalyewflo-avf': {
    src: vortexFlowMeterImage,
    alt: `${IMAGE_IDS.VORTEX_FLOW_METER}: Yokogawa digitalYEWFLO AVF - Vortex flow meter with spectral signal processing`,
    id: IMAGE_IDS.VORTEX_FLOW_METER
  },
  'abb-swirl-meter-fsv450': {
    src: vortexFlowMeterImage,
    alt: `${IMAGE_IDS.VORTEX_FLOW_METER}: ABB Swirl Meter FSV450 - Vortex flow meter for challenging applications`,
    id: IMAGE_IDS.VORTEX_FLOW_METER
  },
  
  // Volumetric Flow Meters
  'endress-hauser-proline-t-mass-83a': {
    src: massFlowMeterImage,
    alt: `${IMAGE_IDS.MASS_FLOW_METER}: Endress+Hauser Proline t-mass 83A - Thermal mass flow meter for gas applications`,
    id: IMAGE_IDS.MASS_FLOW_METER
  },
  'sierra-instruments-640s-mass': {
    src: massFlowMeterImage,
    alt: `${IMAGE_IDS.MASS_FLOW_METER}: Sierra Instruments 640S - Thermal mass flow meter with DebugMode technology`,
    id: IMAGE_IDS.MASS_FLOW_METER
  },
  'bronkhorst-in-flow-f230': {
    src: massFlowMeterImage,
    alt: `${IMAGE_IDS.MASS_FLOW_METER}: Bronkhorst IN-FLOW F230 - Ultrasonic liquid flow meter`,
    id: IMAGE_IDS.MASS_FLOW_METER
  },
  
  // PD Flow Meters
  'oval-flowpet-lsf41': {
    src: pdFlowMeterImage,
    alt: `${IMAGE_IDS.PD_FLOW_METER}: Oval FLOWPET LSF41 - Positive displacement flow meter for liquid applications`,
    id: IMAGE_IDS.PD_FLOW_METER
  },
  'badger-meter-m1000': {
    src: pdFlowMeterImage,
    alt: `${IMAGE_IDS.PD_FLOW_METER}: Badger Meter M1000 - Nutating disc positive displacement meter`,
    id: IMAGE_IDS.PD_FLOW_METER
  },
  'krohne-bm100-pd-meter': {
    src: pdFlowMeterImage,
    alt: `${IMAGE_IDS.PD_FLOW_METER}: KROHNE BM100 - Positive displacement flow meter with oval gear`,
    id: IMAGE_IDS.PD_FLOW_METER
  },
  'kral-volumeter-omg': {
    src: pdFlowMeterImage,
    alt: `${IMAGE_IDS.PD_FLOW_METER}: KRAL Volumeter OMG - Screw-type positive displacement flow meter`,
    id: IMAGE_IDS.PD_FLOW_METER
  },

  // Missing product group image mappings
  'rtd-temperature-sensor': {
    src: rtdTemperatureSensorImage,
    alt: `${IMAGE_IDS.SENSORS}: RTD temperature sensor - Industrial precision temperature measurement`,
    id: IMAGE_IDS.SENSORS
  },
  'thermocouple-temperature-sensor': {
    src: thermocoupleTemperatureSensorImage,
    alt: `${IMAGE_IDS.SENSORS}: Thermocouple temperature sensor - High temperature measurement`,
    id: IMAGE_IDS.SENSORS
  },
  'load-cell': {
    src: loadCellImage,
    alt: `${IMAGE_IDS.SENSORS}: Load cell - Force and weight measurement sensor`,
    id: IMAGE_IDS.SENSORS
  },
  'ph-sensor': {
    src: phSensorImage,
    alt: `${IMAGE_IDS.SENSORS}: pH sensor - Industrial liquid measurement sensor`,
    id: IMAGE_IDS.SENSORS
  },
  'dp-transmitter-rosemount': {
    src: dpTransmitterImage,
    alt: `${IMAGE_IDS.TRANSMITTERS}: Differential pressure transmitter - Rosemount series`,
    id: IMAGE_IDS.TRANSMITTERS
  },
  'p-transmitter-siemens': {
    src: pTypeTransmitterImage,
    alt: `${IMAGE_IDS.TRANSMITTERS}: Pressure transmitter - Siemens series`,
    id: IMAGE_IDS.TRANSMITTERS
  },
  'rs-transmitter-rosemount': {
    src: rsTransmitterImage,
    alt: `${IMAGE_IDS.TRANSMITTERS}: Remote seal transmitter - Rosemount series`,
    id: IMAGE_IDS.TRANSMITTERS
  },
  'magnetic-flowmeter-endress': {
    src: magneticFlowMeterImage,
    alt: `${IMAGE_IDS.TRANSMITTERS}: Magnetic flow meter - Endress+Hauser series`,
    id: IMAGE_IDS.TRANSMITTERS
  },
  'coriolis-flowmeter-endress': {
    src: massFlowMeterImage,
    alt: `${IMAGE_IDS.TRANSMITTERS}: Coriolis flow meter - Endress+Hauser series`,
    id: IMAGE_IDS.TRANSMITTERS
  },
  'vortex-flowmeter-yokogawa': {
    src: vortexFlowMeterImage,
    alt: `${IMAGE_IDS.TRANSMITTERS}: Vortex flow meter - Yokogawa series`,
    id: IMAGE_IDS.TRANSMITTERS
  },
  'volumetric-flowmeter-abb': {
    src: massFlowMeterImage,
    alt: `${IMAGE_IDS.TRANSMITTERS}: Volumetric flow meter - ABB series`,
    id: IMAGE_IDS.TRANSMITTERS
  },
  
  // Circuit breaker images
  'rccb': {
    src: rccbImage,
    alt: `${IMAGE_IDS.RCCB_CIRCUIT_BREAKER}: RCCB residual current circuit breaker - Earth leakage protection device for electrical safety`,
    id: IMAGE_IDS.RCCB_CIRCUIT_BREAKER
  },
  'acb': {
    src: acbImage,
    alt: `${IMAGE_IDS.ACB_CIRCUIT_BREAKER}: ACB air circuit breaker - High-capacity industrial electrical distribution protection`,
    id: IMAGE_IDS.ACB_CIRCUIT_BREAKER
  },
  'vcb': {
    src: vcbImage,
    alt: `${IMAGE_IDS.VCB_CIRCUIT_BREAKER}: VCB vacuum circuit breaker - Medium voltage electrical equipment with superior arc quenching`,
    id: IMAGE_IDS.VCB_CIRCUIT_BREAKER
  },
  'gas-analyzer': {
    src: processAnalyzersHero,
    alt: `${IMAGE_IDS.HERO_ANALYZERS}: Gas analyzer - Industrial gas analysis equipment`,
    id: IMAGE_IDS.HERO_ANALYZERS
  },
  'liquid-analyzer': {
    src: processAnalyzersHero,
    alt: `${IMAGE_IDS.HERO_ANALYZERS}: Liquid analyzer - Industrial liquid analysis equipment`,
    id: IMAGE_IDS.HERO_ANALYZERS
  },
  'process-analyzer': {
    src: processAnalyzersHero,
    alt: `${IMAGE_IDS.HERO_ANALYZERS}: Process analyzer - Industrial process analysis equipment`,
    id: IMAGE_IDS.HERO_ANALYZERS
  },

  // Switches and indicators
  'pressure-switch': {
    src: proximitySesorImage,
    alt: `${IMAGE_IDS.SENSORS}: Pressure switch - Industrial pressure control switch`,
    id: IMAGE_IDS.SENSORS
  },
  'level-switch': {
    src: proximitySesorImage,
    alt: `${IMAGE_IDS.SENSORS}: Level switch - Industrial level detection switch`,
    id: IMAGE_IDS.SENSORS
  },
  'limit-switch': {
    src: proximitySesorImage,
    alt: `${IMAGE_IDS.SENSORS}: Limit switch - Industrial position control switch`,
    id: IMAGE_IDS.SENSORS
  },
  'push-button': {
    src: proximitySesorImage,
    alt: `${IMAGE_IDS.SENSORS}: Push button - Industrial control panel button`,
    id: IMAGE_IDS.SENSORS
  },

  // Valves and actuators
  'control-valve': {
    src: pressureTransmitterImage,
    alt: `${IMAGE_IDS.TRANSMITTERS}: Control valve - Industrial flow control valve`,
    id: IMAGE_IDS.TRANSMITTERS
  },
  'solenoid-valve': {
    src: pressureTransmitterImage,
    alt: `${IMAGE_IDS.TRANSMITTERS}: Solenoid valve - Automated fluid control valve`,
    id: IMAGE_IDS.TRANSMITTERS
  },

  // BLDC Motor products
  'bldc-ceiling-fan': {
    src: bldcHomeImage,
    alt: `${IMAGE_IDS.BLDC_MOTORS}: BLDC ceiling fan - Energy efficient brushless DC ceiling fan`,
    id: IMAGE_IDS.BLDC_MOTORS
  },
  'bldc-exhaust-motor': {
    src: bldcHomeImage,
    alt: `${IMAGE_IDS.BLDC_MOTORS}: BLDC exhaust motor - Energy efficient ventilation motor`,
    id: IMAGE_IDS.BLDC_MOTORS
  },
  'bldc-cooler-motor': {
    src: bldcHomeImage,
    alt: `${IMAGE_IDS.BLDC_MOTORS}: BLDC cooler motor - Energy efficient cooling system motor`,
    id: IMAGE_IDS.BLDC_MOTORS
  },
  'bldc-ventilation-motor': {
    src: bldcHomeImage,
    alt: `${IMAGE_IDS.BLDC_MOTORS}: BLDC ventilation motor - Energy efficient air circulation motor`,
    id: IMAGE_IDS.BLDC_MOTORS
  },
  'bldc-submersible-pump': {
    src: bldcHomeImage,
    alt: `${IMAGE_IDS.BLDC_MOTORS}: BLDC submersible pump - Energy efficient water pump`,
    id: IMAGE_IDS.BLDC_MOTORS
  },
  'bldc-surface-pump': {
    src: bldcHomeImage,
    alt: `${IMAGE_IDS.BLDC_MOTORS}: BLDC surface pump - Energy efficient surface water pump`,
    id: IMAGE_IDS.BLDC_MOTORS
  },
  'bldc-hybrid-pump': {
    src: bldcHomeImage,
    alt: `${IMAGE_IDS.BLDC_MOTORS}: BLDC hybrid pump - Solar compatible water pump`,
    id: IMAGE_IDS.BLDC_MOTORS
  },
  'bldc-table-fan-motor': {
    src: bldcHomeImage,
    alt: `${IMAGE_IDS.BLDC_MOTORS}: BLDC table fan motor - Energy efficient personal cooling motor`,
    id: IMAGE_IDS.BLDC_MOTORS
  },
  'bldc-wall-fan-motor': {
    src: bldcHomeImage,
    alt: `${IMAGE_IDS.BLDC_MOTORS}: BLDC wall fan motor - Energy efficient wall mounted fan motor`,
    id: IMAGE_IDS.BLDC_MOTORS
  },
  'bldc-pedestal-fan-motor': {
    src: bldcHomeImage,
    alt: `${IMAGE_IDS.BLDC_MOTORS}: BLDC pedestal fan motor - Energy efficient pedestal fan motor`,
    id: IMAGE_IDS.BLDC_MOTORS
  },

  // Electrical components
  'power-cable': {
    src: electricalComponentsImage,
    alt: `${IMAGE_IDS.ELECTRICAL_COMPONENTS}: Power cable - Industrial power transmission cable`,
    id: IMAGE_IDS.ELECTRICAL_COMPONENTS
  },
  'control-cable': {
    src: electricalComponentsImage,
    alt: `${IMAGE_IDS.ELECTRICAL_COMPONENTS}: Control cable - Industrial control system cable`,
    id: IMAGE_IDS.ELECTRICAL_COMPONENTS
  },
  'instrumentation-cable': {
    src: electricalComponentsImage,
    alt: `${IMAGE_IDS.ELECTRICAL_COMPONENTS}: Instrumentation cable - Industrial measurement cable`,
    id: IMAGE_IDS.ELECTRICAL_COMPONENTS
  },
  'terminal-block': {
    src: electricalComponentsImage,
    alt: `${IMAGE_IDS.ELECTRICAL_COMPONENTS}: Terminal block - Electrical connection terminal`,
    id: IMAGE_IDS.ELECTRICAL_COMPONENTS
  },
  'electrical-connector': {
    src: electricalComponentsImage,
    alt: `${IMAGE_IDS.ELECTRICAL_COMPONENTS}: Electrical connector - Industrial electrical connector`,
    id: IMAGE_IDS.ELECTRICAL_COMPONENTS
  },
  'industrial-plug': {
    src: electricalComponentsImage,
    alt: `${IMAGE_IDS.ELECTRICAL_COMPONENTS}: Industrial plug - Heavy duty electrical plug`,
    id: IMAGE_IDS.ELECTRICAL_COMPONENTS
  },
  'mcb': {
    src: electricalComponentsImage,
    alt: `${IMAGE_IDS.ELECTRICAL_COMPONENTS}: MCB - Miniature circuit breaker`,
    id: IMAGE_IDS.ELECTRICAL_COMPONENTS
  },
  'mccb': {
    src: electricalComponentsImage,
    alt: `${IMAGE_IDS.ELECTRICAL_COMPONENTS}: MCCB - Molded case circuit breaker`,
    id: IMAGE_IDS.ELECTRICAL_COMPONENTS
  },
  'fuse': {
    src: electricalComponentsImage,
    alt: `${IMAGE_IDS.ELECTRICAL_COMPONENTS}: Fuse - Electrical protection fuse`,
    id: IMAGE_IDS.ELECTRICAL_COMPONENTS
  },
  'ac-dc-converter': {
    src: electricalComponentsImage,
    alt: `${IMAGE_IDS.ELECTRICAL_COMPONENTS}: AC-DC converter - Power supply converter`,
    id: IMAGE_IDS.ELECTRICAL_COMPONENTS
  },
  'dc-dc-converter': {
    src: electricalComponentsImage,
    alt: `${IMAGE_IDS.ELECTRICAL_COMPONENTS}: DC-DC converter - DC power converter`,
    id: IMAGE_IDS.ELECTRICAL_COMPONENTS
  },
  'ups': {
    src: electricalComponentsImage,
    alt: `${IMAGE_IDS.ELECTRICAL_COMPONENTS}: UPS - Uninterruptible power supply`,
    id: IMAGE_IDS.ELECTRICAL_COMPONENTS
  },
  'electrical-cabinet': {
    src: electricalComponentsImage,
    alt: `${IMAGE_IDS.ELECTRICAL_COMPONENTS}: Electrical cabinet - Industrial electrical enclosure`,
    id: IMAGE_IDS.ELECTRICAL_COMPONENTS
  },
  'junction-box': {
    src: electricalComponentsImage,
    alt: `${IMAGE_IDS.ELECTRICAL_COMPONENTS}: Junction box - Electrical connection box`,
    id: IMAGE_IDS.ELECTRICAL_COMPONENTS
  },
  'din-rail-enclosure': {
    src: electricalComponentsImage,
    alt: `${IMAGE_IDS.ELECTRICAL_COMPONENTS}: DIN rail enclosure - Modular electrical enclosure`,
    id: IMAGE_IDS.ELECTRICAL_COMPONENTS
  },
  'heating-coil': {
    src: electricalComponentsImage,
    alt: `${IMAGE_IDS.ELECTRICAL_COMPONENTS}: Heating coil - Industrial heating element`,
    id: IMAGE_IDS.ELECTRICAL_COMPONENTS
  },
  'heating-element': {
    src: electricalComponentsImage,
    alt: `${IMAGE_IDS.ELECTRICAL_COMPONENTS}: Heating element - Electric heating component`,
    id: IMAGE_IDS.ELECTRICAL_COMPONENTS
  },
  'industrial-heater': {
    src: electricalComponentsImage,
    alt: `${IMAGE_IDS.ELECTRICAL_COMPONENTS}: Industrial heater - Process heating equipment`,
    id: IMAGE_IDS.ELECTRICAL_COMPONENTS
  },

  // Measurement instruments
  'digital-multimeter': {
    src: measurementInstrumentsImage,
    alt: `${IMAGE_IDS.MEASUREMENT_INSTRUMENTS}: Digital multimeter - Precision electrical measurement`,
    id: IMAGE_IDS.MEASUREMENT_INSTRUMENTS
  },
  'clamp-meter': {
    src: measurementInstrumentsImage,
    alt: `${IMAGE_IDS.MEASUREMENT_INSTRUMENTS}: Clamp meter - Non-contact current measurement`,
    id: IMAGE_IDS.MEASUREMENT_INSTRUMENTS
  },
  'bench-multimeter': {
    src: measurementInstrumentsImage,
    alt: `${IMAGE_IDS.MEASUREMENT_INSTRUMENTS}: Bench multimeter - Laboratory grade measurement`,
    id: IMAGE_IDS.MEASUREMENT_INSTRUMENTS
  },
  'digital-oscilloscope': {
    src: measurementInstrumentsImage,
    alt: `${IMAGE_IDS.MEASUREMENT_INSTRUMENTS}: Digital oscilloscope - Signal analysis instrument`,
    id: IMAGE_IDS.MEASUREMENT_INSTRUMENTS
  },
  'mixed-signal-oscilloscope': {
    src: measurementInstrumentsImage,
    alt: `${IMAGE_IDS.MEASUREMENT_INSTRUMENTS}: Mixed signal oscilloscope - Analog and digital analysis`,
    id: IMAGE_IDS.MEASUREMENT_INSTRUMENTS
  },
  'portable-oscilloscope': {
    src: measurementInstrumentsImage,
    alt: `${IMAGE_IDS.MEASUREMENT_INSTRUMENTS}: Portable oscilloscope - Field measurement scope`,
    id: IMAGE_IDS.MEASUREMENT_INSTRUMENTS
  },
  'rf-spectrum-analyzer': {
    src: measurementInstrumentsImage,
    alt: `${IMAGE_IDS.MEASUREMENT_INSTRUMENTS}: RF spectrum analyzer - Radio frequency analysis`,
    id: IMAGE_IDS.MEASUREMENT_INSTRUMENTS
  },
  'audio-spectrum-analyzer': {
    src: measurementInstrumentsImage,
    alt: `${IMAGE_IDS.MEASUREMENT_INSTRUMENTS}: Audio spectrum analyzer - Audio signal analysis`,
    id: IMAGE_IDS.MEASUREMENT_INSTRUMENTS
  },
  'real-time-analyzer': {
    src: measurementInstrumentsImage,
    alt: `${IMAGE_IDS.MEASUREMENT_INSTRUMENTS}: Real-time analyzer - Live signal processing`,
    id: IMAGE_IDS.MEASUREMENT_INSTRUMENTS
  },
  'power-meter': {
    src: measurementInstrumentsImage,
    alt: `${IMAGE_IDS.MEASUREMENT_INSTRUMENTS}: Power meter - Electrical power measurement`,
    id: IMAGE_IDS.MEASUREMENT_INSTRUMENTS
  },
  'harmonic-analyzer': {
    src: measurementInstrumentsImage,
    alt: `${IMAGE_IDS.MEASUREMENT_INSTRUMENTS}: Harmonic analyzer - Power quality analysis`,
    id: IMAGE_IDS.MEASUREMENT_INSTRUMENTS
  },
  'energy-logger': {
    src: measurementInstrumentsImage,
    alt: `${IMAGE_IDS.MEASUREMENT_INSTRUMENTS}: Energy logger - Power consumption monitoring`,
    id: IMAGE_IDS.MEASUREMENT_INSTRUMENTS
  },
  'calibration-instrument': {
    src: measurementInstrumentsImage,
    alt: `${IMAGE_IDS.MEASUREMENT_INSTRUMENTS}: Calibration instrument - Precision calibration tool`,
    id: IMAGE_IDS.MEASUREMENT_INSTRUMENTS
  },
  'calibration-standard': {
    src: measurementInstrumentsImage,
    alt: `${IMAGE_IDS.MEASUREMENT_INSTRUMENTS}: Calibration standard - Reference standard instrument`,
    id: IMAGE_IDS.MEASUREMENT_INSTRUMENTS
  },
  'test-equipment': {
    src: measurementInstrumentsImage,
    alt: `${IMAGE_IDS.MEASUREMENT_INSTRUMENTS}: Test equipment - Electronic testing instruments`,
    id: IMAGE_IDS.MEASUREMENT_INSTRUMENTS
  },
  'multimeters': {
    src: measurementInstrumentsImage,
    alt: `${IMAGE_IDS.MEASUREMENT_INSTRUMENTS}: Multimeters - Electrical measurement devices`,
    id: IMAGE_IDS.MEASUREMENT_INSTRUMENTS
  },

  // Industrial tools
  'mechanical-tools': {
    src: industrialToolsImage,
    alt: `${IMAGE_IDS.INDUSTRIAL_TOOLS}: Mechanical tools - Industrial hand tools`,
    id: IMAGE_IDS.INDUSTRIAL_TOOLS
  },
  'electrical-tools': {
    src: industrialToolsImage,
    alt: `${IMAGE_IDS.INDUSTRIAL_TOOLS}: Electrical tools - Electrical work tools`,
    id: IMAGE_IDS.INDUSTRIAL_TOOLS
  },
  'precision-tools': {
    src: industrialToolsImage,
    alt: `${IMAGE_IDS.INDUSTRIAL_TOOLS}: Precision tools - Precision measurement tools`,
    id: IMAGE_IDS.INDUSTRIAL_TOOLS
  },
  'electric-drill': {
    src: industrialToolsImage,
    alt: `${IMAGE_IDS.INDUSTRIAL_TOOLS}: Electric drill - Industrial drilling tool`,
    id: IMAGE_IDS.INDUSTRIAL_TOOLS
  },
  'angle-grinder': {
    src: industrialToolsImage,
    alt: `${IMAGE_IDS.INDUSTRIAL_TOOLS}: Angle grinder - Industrial cutting and grinding tool`,
    id: IMAGE_IDS.INDUSTRIAL_TOOLS
  },
  'impact-driver': {
    src: industrialToolsImage,
    alt: `${IMAGE_IDS.INDUSTRIAL_TOOLS}: Impact driver - Heavy duty fastening tool`,
    id: IMAGE_IDS.INDUSTRIAL_TOOLS
  },
  'cutting-blade': {
    src: industrialToolsImage,
    alt: `${IMAGE_IDS.INDUSTRIAL_TOOLS}: Cutting blade - Industrial cutting disc`,
    id: IMAGE_IDS.INDUSTRIAL_TOOLS
  },
  'drill-bit': {
    src: industrialToolsImage,
    alt: `${IMAGE_IDS.INDUSTRIAL_TOOLS}: Drill bit - Industrial drilling bit`,
    id: IMAGE_IDS.INDUSTRIAL_TOOLS
  },
  'milling-cutter': {
    src: industrialToolsImage,
    alt: `${IMAGE_IDS.INDUSTRIAL_TOOLS}: Milling cutter - CNC milling tool`,
    id: IMAGE_IDS.INDUSTRIAL_TOOLS
  },
  'chain-hoist': {
    src: industrialToolsImage,
    alt: `${IMAGE_IDS.INDUSTRIAL_TOOLS}: Chain hoist - Material lifting equipment`,
    id: IMAGE_IDS.INDUSTRIAL_TOOLS
  },
  'wire-rope-hoist': {
    src: industrialToolsImage,
    alt: `${IMAGE_IDS.INDUSTRIAL_TOOLS}: Wire rope hoist - Heavy lifting equipment`,
    id: IMAGE_IDS.INDUSTRIAL_TOOLS
  },
  'jib-crane': {
    src: industrialToolsImage,
    alt: `${IMAGE_IDS.INDUSTRIAL_TOOLS}: Jib crane - Material handling crane`,
    id: IMAGE_IDS.INDUSTRIAL_TOOLS
  },
  'ppe': {
    src: safetyProtectiveDevicesImage,
    alt: `${IMAGE_IDS.SAFETY_PROTECTIVE_DEVICES}: PPE - Personal protective equipment`,
    id: IMAGE_IDS.SAFETY_PROTECTIVE_DEVICES
  },
  'safety-barrier': {
    src: safetyProtectiveDevicesImage,
    alt: `${IMAGE_IDS.SAFETY_PROTECTIVE_DEVICES}: Safety barrier - Industrial safety barrier`,
    id: IMAGE_IDS.SAFETY_PROTECTIVE_DEVICES
  },
  'emergency-equipment': {
    src: safetyProtectiveDevicesImage,
    alt: `${IMAGE_IDS.SAFETY_PROTECTIVE_DEVICES}: Emergency equipment - Safety emergency equipment`,
    id: IMAGE_IDS.SAFETY_PROTECTIVE_DEVICES
  },
  'hand-tools': {
    src: industrialToolsImage,
    alt: `${IMAGE_IDS.INDUSTRIAL_TOOLS}: Hand tools - Professional hand tools`,
    id: IMAGE_IDS.INDUSTRIAL_TOOLS
  },
  'power-tools': {
    src: industrialToolsImage,
    alt: `${IMAGE_IDS.INDUSTRIAL_TOOLS}: Power tools - Electric and pneumatic tools`,
    id: IMAGE_IDS.INDUSTRIAL_TOOLS
  },
  'cutting-tools': {
    src: industrialToolsImage,
    alt: `${IMAGE_IDS.INDUSTRIAL_TOOLS}: Cutting tools - Industrial cutting equipment`,
    id: IMAGE_IDS.INDUSTRIAL_TOOLS
  },
  'lifting-equipment': {
    src: industrialToolsImage,
    alt: `${IMAGE_IDS.INDUSTRIAL_TOOLS}: Lifting equipment - Material handling equipment`,
    id: IMAGE_IDS.INDUSTRIAL_TOOLS
  },
  'safety-equipment': {
    src: safetyProtectiveDevicesImage,
    alt: `${IMAGE_IDS.SAFETY_PROTECTIVE_DEVICES}: Safety equipment - Industrial safety equipment`,
    id: IMAGE_IDS.SAFETY_PROTECTIVE_DEVICES
  },

  // Solar products
  'monocrystalline-panel': {
    src: solarProductsImage,
    alt: `${IMAGE_IDS.SOLAR_PRODUCTS}: Monocrystalline panel - High efficiency solar panel`,
    id: IMAGE_IDS.SOLAR_PRODUCTS
  },
  'polycrystalline-panel': {
    src: solarProductsImage,
    alt: `${IMAGE_IDS.SOLAR_PRODUCTS}: Polycrystalline panel - Cost effective solar panel`,
    id: IMAGE_IDS.SOLAR_PRODUCTS
  },
  'thin-film-panel': {
    src: solarProductsImage,
    alt: `${IMAGE_IDS.SOLAR_PRODUCTS}: Thin film panel - Flexible solar panel technology`,
    id: IMAGE_IDS.SOLAR_PRODUCTS
  },
  'string-inverter': {
    src: solarProductsImage,
    alt: `${IMAGE_IDS.SOLAR_PRODUCTS}: String inverter - Solar DC to AC inverter`,
    id: IMAGE_IDS.SOLAR_PRODUCTS
  },
  'micro-inverter': {
    src: solarProductsImage,
    alt: `${IMAGE_IDS.SOLAR_PRODUCTS}: Micro inverter - Module level power electronics`,
    id: IMAGE_IDS.SOLAR_PRODUCTS
  },
  'power-optimizer': {
    src: solarProductsImage,
    alt: `${IMAGE_IDS.SOLAR_PRODUCTS}: Power optimizer - Solar panel optimization`,
    id: IMAGE_IDS.SOLAR_PRODUCTS
  },

  // Automation control systems
  'modular-plc': {
    src: automationControlSystemsImage,
    alt: `${IMAGE_IDS.AUTOMATION_CONTROL_SYSTEMS}: Modular PLC - Programmable logic controller`,
    id: IMAGE_IDS.AUTOMATION_CONTROL_SYSTEMS
  },
  'compact-plc': {
    src: automationControlSystemsImage,
    alt: `${IMAGE_IDS.AUTOMATION_CONTROL_SYSTEMS}: Compact PLC - Small form factor PLC`,
    id: IMAGE_IDS.AUTOMATION_CONTROL_SYSTEMS
  },
  'micro-plc': {
    src: automationControlSystemsImage,
    alt: `${IMAGE_IDS.AUTOMATION_CONTROL_SYSTEMS}: Micro PLC - Ultra compact PLC`,
    id: IMAGE_IDS.AUTOMATION_CONTROL_SYSTEMS
  },
  'scada-software': {
    src: automationControlSystemsImage,
    alt: `${IMAGE_IDS.AUTOMATION_CONTROL_SYSTEMS}: SCADA software - Supervisory control software`,
    id: IMAGE_IDS.AUTOMATION_CONTROL_SYSTEMS
  },
  'scada-hardware': {
    src: automationControlSystemsImage,
    alt: `${IMAGE_IDS.AUTOMATION_CONTROL_SYSTEMS}: SCADA hardware - Control system hardware`,
    id: IMAGE_IDS.AUTOMATION_CONTROL_SYSTEMS
  },
  'scada-gateway': {
    src: automationControlSystemsImage,
    alt: `${IMAGE_IDS.AUTOMATION_CONTROL_SYSTEMS}: SCADA gateway - Communication gateway`,
    id: IMAGE_IDS.AUTOMATION_CONTROL_SYSTEMS
  },
  'dcs-controller': {
    src: automationControlSystemsImage,
    alt: `${IMAGE_IDS.AUTOMATION_CONTROL_SYSTEMS}: DCS controller - Distributed control system`,
    id: IMAGE_IDS.AUTOMATION_CONTROL_SYSTEMS
  },
  'dcs-operator-station': {
    src: automationControlSystemsImage,
    alt: `${IMAGE_IDS.AUTOMATION_CONTROL_SYSTEMS}: DCS operator station - Control room station`,
    id: IMAGE_IDS.AUTOMATION_CONTROL_SYSTEMS
  },
  'dcs-engineering-station': {
    src: automationControlSystemsImage,
    alt: `${IMAGE_IDS.AUTOMATION_CONTROL_SYSTEMS}: DCS engineering station - Configuration workstation`,
    id: IMAGE_IDS.AUTOMATION_CONTROL_SYSTEMS
  },
  'touchscreen-hmi': {
    src: automationControlSystemsImage,
    alt: `${IMAGE_IDS.AUTOMATION_CONTROL_SYSTEMS}: Touchscreen HMI - Human machine interface`,
    id: IMAGE_IDS.AUTOMATION_CONTROL_SYSTEMS
  },
  'panel-mount-hmi': {
    src: automationControlSystemsImage,
    alt: `${IMAGE_IDS.AUTOMATION_CONTROL_SYSTEMS}: Panel mount HMI - Industrial control panel`,
    id: IMAGE_IDS.AUTOMATION_CONTROL_SYSTEMS
  },
  'mobile-hmi': {
    src: automationControlSystemsImage,
    alt: `${IMAGE_IDS.AUTOMATION_CONTROL_SYSTEMS}: Mobile HMI - Portable operator interface`,
    id: IMAGE_IDS.AUTOMATION_CONTROL_SYSTEMS
  },

  // Pumps and motors
  'centrifugal-pumps': {
    src: pumpsMotorsImage,
    alt: `${IMAGE_IDS.PUMPS_MOTORS}: Centrifugal pumps - Industrial fluid pumps`,
    id: IMAGE_IDS.PUMPS_MOTORS
  },
  'pump-parts-spares': {
    src: pumpsMotorsImage,
    alt: `${IMAGE_IDS.PUMPS_MOTORS}: Pump parts spares - Replacement pump components`,
    id: IMAGE_IDS.PUMPS_MOTORS
  },
  'heating-elements': {
    src: electricalComponentsImage,
    alt: `${IMAGE_IDS.ELECTRICAL_COMPONENTS}: Heating elements - Industrial heating components`,
    id: IMAGE_IDS.ELECTRICAL_COMPONENTS
  },

  // Generic fallback
  'default-product': {
    src: instrumentationComponentsImage,
    alt: `${IMAGE_IDS.INSTRUMENTATION_COMPONENTS}: Industrial product - High quality industrial equipment`,
    id: IMAGE_IDS.INSTRUMENTATION_COMPONENTS
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
  
  // Electrical components
  'cables-wires': 'electrical-components',
  'connectors-terminals': 'electrical-components',
  'circuit-breakers-fuses': 'electrical-components',
  'power-supplies': 'electrical-components',
  'enclosures-cabinets': 'electrical-components',
  'heating-elements-appliances': 'electrical-components',
  
  // Industrial & Measuring Tools
  'multimeters': 'industrial-measuring-tools',
  'power-quality-analyzers': 'industrial-measuring-tools',
  'calibration-equipment': 'industrial-measuring-tools',
  
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
  
  'hand-tools': 'industrial-measuring-tools',
  'power-tools': 'industrial-measuring-tools',
  'cutting-tools': 'industrial-measuring-tools',
  'lifting-equipment': 'industrial-measuring-tools',
  'safety-equipment': 'industrial-measuring-tools',
  
  // Sensors and transmitters
  'sensors': 'sensors',
  'transmitters': 'transmitters'
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
  },
  quote: {
    src: quotePageHero,
    alt: `${IMAGE_IDS.HERO_QUOTE}: Get Quote - Professional industrial engineering office workspace with technical documents`,
    id: IMAGE_IDS.HERO_QUOTE
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