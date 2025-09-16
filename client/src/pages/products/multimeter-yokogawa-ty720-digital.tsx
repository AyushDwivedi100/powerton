import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { BarChart3 } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function MultimeterYokogawaTY720Digital() {
  const productData: ProductDetailData = {
    id: 'multimeter-yokogawa-ty720-digital',
    title: 'Yokogawa TY720 Digital Multimeter - Bench Laboratory',
    shortDescription: 'Bench-type digital multimeter for laboratory and precision measurement applications',
    fullDescription: 'High-precision bench-type digital multimeter designed for laboratory use and precision measurement applications. Features 6.5 digit resolution, computer interface capabilities, and multiple measurement functions for accurate and reliable results.',
    image: getProductImageSrc('multimeters'),
    
    seo: {
      title: 'Yokogawa TY720 Digital Multimeter - Laboratory Bench Meter',
      description: 'Professional Yokogawa TY720 bench digital multimeter with 6.5 digit resolution for laboratory precision measurements',
      keywords: 'Yokogawa TY720, bench multimeter, laboratory DMM, precision measurement, 6.5 digit, digital multimeter',
      canonicalUrl: '/products/multimeter-yokogawa-ty720-digital'
    },

    keyBenefits: [
      '6.5 Digit Resolution',
      'High Measurement Accuracy',
      'Computer Interface',
      'Multiple Functions',
      'Laboratory Grade Performance',
      'Reliable Long-term Stability'
    ],

    specifications: [
      { label: 'DC Voltage', value: '200mV to 1000V, ±0.004%' },
      { label: 'AC Voltage', value: '200mV to 750V, ±0.06%' },
      { label: 'DC Current', value: '200μA to 2A, ±0.01%' },
      { label: 'AC Current', value: '200μA to 2A, ±0.1%' },
      { label: 'Resistance', value: '200Ω to 200MΩ' },
      { label: 'Display', value: '6.5 digit LED display' }
    ],

    features: [
      '6.5 Digit LED Display',
      'Computer Interface (RS-232)',
      'Statistical Functions',
      'Math Functions',
      'Limit Testing',
      'Auto/Manual Range',
      'Null Function',
      'Remote Control'
    ],

    applications: [
      'Laboratory Testing',
      'Precision Measurements',
      'Calibration Standards',
      'Research & Development',
      'Quality Assurance',
      'Production Testing'
    ],

    industries: [
      'Research Laboratories',
      'Calibration Services',
      'Electronics Manufacturing',
      'Standards Organizations',
      'Educational Institutions',
      'Metrology Labs'
    ],

    certifications: [
      'UL Listed',
      'CSA Certified',
      'CE Marked',
      'IEC 61010',
      'ISO 9001',
      'NIST Traceable'
    ],

    categoryName: 'Measurement Instruments',
    categoryPath: '/products/measurement-instruments',
    subcategoryName: 'Digital Multimeters'
  };

  return <ProductDetailTemplate product={productData} heroIcon={BarChart3} />;
}