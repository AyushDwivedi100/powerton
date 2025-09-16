import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Activity } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function MultimeterKeysightU1272AHandheld() {
  const productData: ProductDetailData = {
    id: 'multimeter-keysight-u1272a-handheld',
    title: 'Keysight U1272A Handheld DMM - High Precision Digital',
    shortDescription: 'High-precision handheld digital multimeter with data logging capabilities',
    fullDescription: 'Advanced handheld digital multimeter offering high precision measurements with data logging, Bluetooth connectivity, and exceptional accuracy for field service and laboratory applications. Features dual display, advanced analysis functions, and rugged design.',
    image: getProductImageSrc('multimeters'),
    
    seo: {
      title: 'Keysight U1272A Handheld Digital Multimeter - High Precision',
      description: 'Professional Keysight U1272A handheld digital multimeter with high precision, data logging, and Bluetooth connectivity',
      keywords: 'Keysight U1272A, handheld multimeter, digital multimeter, precision measurement, data logging, Bluetooth DMM',
      canonicalUrl: '/products/multimeter-keysight-u1272a-handheld'
    },

    keyBenefits: [
      'High Precision Measurements',
      '4.5 Digit Display Resolution',
      'Data Logging Capability',
      'Bluetooth Connectivity',
      'Dual Display Function',
      'IP54 Environmental Rating'
    ],

    specifications: [
      { label: 'DC Voltage', value: '50mV to 1000V, ±0.025%' },
      { label: 'AC Voltage', value: '50mV to 750V, ±0.3%' },
      { label: 'DC Current', value: '500μA to 10A, ±0.06%' },
      { label: 'AC Current', value: '500μA to 10A, ±0.5%' },
      { label: 'Resistance', value: '500Ω to 50MΩ' },
      { label: 'Display', value: '4.5 digit dual display' }
    ],

    features: [
      'Dual Display',
      'Data Logging (10,000 readings)',
      'Bluetooth Connectivity',
      'Statistical Functions',
      'Harmonic Ratio',
      'Low Pass Filter',
      'Auto Range/Hold',
      'Backlit Display'
    ],

    applications: [
      'Field Service',
      'R&D Testing',
      'Quality Control',
      'Production Testing',
      'Educational Labs',
      'Calibration Services'
    ],

    industries: [
      'Electronics Manufacturing',
      'Telecommunications',
      'Automotive Testing',
      'Aerospace & Defense',
      'Educational Institutions',
      'Service & Repair'
    ],

    certifications: [
      'UL Listed',
      'CSA Certified',
      'CE Marked',
      'CAT III 1000V',
      'IEC 61010',
      'IP54 Rated'
    ],

    categoryName: 'Measurement Instruments',
    categoryPath: '/products/measurement-instruments',
    subcategoryName: 'Digital Multimeters'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Activity} />;
}