import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Thermometer } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function SensorTemperatureRTDThermocouple() {
  const productData: ProductDetailData = {
    id: 'sensor-temperature-rtd-thermocouple',
    title: 'Temperature Sensors - RTD & Thermocouple',
    shortDescription: 'High-precision temperature sensors for industrial process monitoring',
    fullDescription: 'Advanced temperature sensing solutions including RTD (Resistance Temperature Detectors) and thermocouple sensors with excellent accuracy, stability, and wide temperature ranges. Designed for harsh industrial environments with robust construction and superior performance characteristics.',
    image: getProductImageSrc('temperature-sensors'),
    
    seo: {
      title: 'Temperature Sensors - RTD & Thermocouple Industrial Sensors',
      description: 'Professional temperature sensors including RTD and thermocouple sensors for accurate industrial temperature monitoring and process control',
      keywords: 'temperature sensors, RTD sensors, thermocouple sensors, industrial temperature, process monitoring, Pt100, Pt1000',
      canonicalUrl: '/products/sensor-temperature-rtd-thermocouple'
    },

    keyBenefits: [
      'High Precision & Accuracy',
      'Wide Temperature Range',
      'Excellent Long-term Stability',
      'Robust Industrial Design',
      'Easy Installation & Calibration',
      'Superior Repeatability'
    ],

    specifications: [
      { label: 'Temperature Range', value: '-200°C to +1200°C' },
      { label: 'Accuracy', value: '±0.1°C to ±1.0°C' },
      { label: 'Response Time', value: '0.5 to 30 seconds' },
      { label: 'Protection Rating', value: 'IP65/IP67/IP68' },
      { label: 'Output Signal', value: 'mV, Ohm, 4-20mA' },
      { label: 'Process Connection', value: '1/2" to 2" NPT/BSP' }
    ],

    features: [
      'Pt100/Pt1000 RTD Elements',
      'Type J, K, T, E, R, S Thermocouples',
      'Explosion-Proof Options',
      'Vibration & Shock Resistant',
      'Corrosion Resistant Materials',
      'Digital Output Options',
      'HART Communication',
      'SIL 2/3 Safety Certified'
    ],

    applications: [
      'Process Temperature Monitoring',
      'Reactor Temperature Control',
      'Furnace & Oven Applications',
      'Pipeline Temperature Measurement',
      'Tank & Vessel Monitoring',
      'HVAC System Control'
    ],

    industries: [
      'Chemical & Petrochemical',
      'Oil & Gas',
      'Power Generation',
      'Food & Beverage',
      'Pharmaceutical',
      'Steel & Metals'
    ],

    certifications: [
      'ATEX Certified',
      'IECEx Approved',
      'SIL 2/3 Rated',
      'CE Marked',
      'FM Approved',
      'CSA Certified'
    ],

    categoryName: 'Instrumentation',
    categoryPath: '/products/instrumentation',
    subcategoryName: 'Temperature Sensors'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Thermometer} />;
}