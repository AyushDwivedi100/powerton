import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Thermometer } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function SignalConditionerThermocoupleConverter() {
  const productData: ProductDetailData = {
    id: 'signal-conditioner-thermocouple-converter',
    title: 'Thermocouple & RTD Signal Converters',
    shortDescription: 'Temperature signal conditioning with cold junction compensation',
    fullDescription: 'Advanced thermocouple and RTD signal conditioners providing accurate temperature measurement with automatic cold junction compensation, linearization, and signal conversion. Features high accuracy, excellent noise rejection, and comprehensive diagnostics for temperature applications.',
    image: getProductImageSrc('temperature-converters'),
    
    seo: {
      title: 'Thermocouple & RTD Signal Converters - Temperature Conditioning',
      description: 'Professional thermocouple and RTD signal converters with cold junction compensation for accurate temperature measurement',
      keywords: 'thermocouple converters, RTD converters, temperature signal conditioning, cold junction compensation, temperature transmitters',
      canonicalUrl: '/products/signal-conditioner-thermocouple-converter'
    },

    keyBenefits: [
      'Cold Junction Compensation',
      'Automatic Linearization',
      'High Accuracy & Stability',
      'Comprehensive Diagnostics',
      'Multiple Sensor Types',
      'Easy Configuration'
    ],

    specifications: [
      { label: 'Sensor Types', value: 'J, K, T, E, R, S, B, N, Pt100' },
      { label: 'Temperature Range', value: '-200°C to +1820°C' },
      { label: 'Accuracy', value: '±0.1°C to ±1.0°C' },
      { label: 'Output', value: '4-20mA, 0-10V, HART' },
      { label: 'CJC Accuracy', value: '±0.5°C' },
      { label: 'Response Time', value: '100ms to 10s' }
    ],

    features: [
      'Automatic CJC',
      'Polynomial Linearization',
      'Sensor Break Detection',
      'Upscale/Downscale Indication',
      'HART Communication',
      'Local Display Option',
      'Configurable Alarms',
      'Universal Input'
    ],

    applications: [
      'Temperature Monitoring',
      'Process Control',
      'Furnace & Oven Control',
      'Heat Treatment',
      'HVAC Systems',
      'Laboratory Applications'
    ],

    industries: [
      'Steel & Metals',
      'Glass & Ceramics',
      'Food & Beverage',
      'Chemical Processing',
      'Power Generation',
      'Aerospace'
    ],

    certifications: [
      'CE Certified',
      'UL Listed',
      'CSA Approved',
      'ATEX Certified',
      'SIL 2 Capable',
      'IEC 60751'
    ],

    categoryName: 'Instrumentation',
    categoryPath: '/products/instrumentation',
    subcategoryName: 'Signal Conditioners'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Thermometer} />;
}