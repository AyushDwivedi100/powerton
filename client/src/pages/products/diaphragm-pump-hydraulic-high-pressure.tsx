import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Gauge } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function DiaphragmPumpHydraulicHighPressure() {
  const productData: ProductDetailData = {
    id: 'diaphragm-pump-hydraulic-high-pressure',
    title: 'Hydraulic Diaphragm Pumps - High Pressure Metering',
    shortDescription: 'High-pressure hydraulic diaphragm pumps for accurate dosing at extreme pressures',
    fullDescription: 'Professional hydraulic diaphragm pumps designed for high-pressure metering and dosing applications. Features leak-free operation, accurate dosing capabilities, high pressure ratings, and robust construction for demanding industrial processes requiring precise fluid injection.',
    image: getProductImageSrc('diaphragm-pumps'),
    
    seo: {
      title: 'Hydraulic Diaphragm Pumps - High Pressure Metering Systems',
      description: 'Professional hydraulic diaphragm pumps for high-pressure metering with leak-free operation and accurate dosing',
      keywords: 'hydraulic diaphragm pumps, high pressure metering pumps, hydraulic dosing pumps, leak-free pumps',
      canonicalUrl: '/products/diaphragm-pump-hydraulic-high-pressure'
    },

    keyBenefits: [
      'Ultra-High Pressure Capability',
      'Leak-Free Operation',
      'Accurate Dosing Control',
      'Low Flow Rate Capability',
      'Robust Construction',
      'Minimal Maintenance Requirements'
    ],

    specifications: [
      { label: 'Flow Range', value: '0.01 to 50 GPH' },
      { label: 'Pressure Rating', value: 'Up to 30,000 PSI' },
      { label: 'Dosing Accuracy', value: '±0.5% repeatable' },
      { label: 'Viscosity Range', value: 'Up to 10,000 cP' },
      { label: 'Temperature Range', value: '-40°F to +500°F' },
      { label: 'Turndown Ratio', value: '1000:1' }
    ],

    features: [
      'Hydraulically Actuated',
      'Metal Diaphragm Design',
      'Pressure Compensation',
      'Leak Detection Chamber',
      'Multiple Control Options',
      'Rapid Response Time',
      'Self-Contained System',
      'Corrosion Resistant'
    ],

    applications: [
      'High Pressure Injection',
      'Catalyst Dosing',
      'Additive Injection',
      'Precision Metering',
      'Chemical Reaction Control',
      'Polymer Injection'
    ],

    industries: [
      'Oil & Gas',
      'Petrochemicals',
      'Power Generation',
      'Chemical Processing',
      'Refining',
      'Enhanced Oil Recovery'
    ],

    certifications: [
      'API 675',
      'ASME Section VIII',
      'NACE MR0175',
      'ATEX Certified',
      'PED Compliant',
      'ISO 9001'
    ],

    categoryName: 'Pumps & Mechanical Systems',
    categoryPath: '/products/mechanical-pumps-spares',
    subcategoryName: 'Diaphragm Pumps'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Gauge} />;
}