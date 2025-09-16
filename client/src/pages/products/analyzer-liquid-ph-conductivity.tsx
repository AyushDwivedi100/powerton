import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Droplets } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function AnalyzerLiquidpHConductivity() {
  const productData: ProductDetailData = {
    id: 'analyzer-liquid-ph-conductivity',
    title: 'Liquid Analyzers - pH & Conductivity Systems',
    shortDescription: 'Precision liquid analysis for pH, conductivity, and water quality monitoring',
    fullDescription: 'Advanced liquid analysis systems providing accurate measurement of pH, conductivity, dissolved oxygen, turbidity, and other critical water quality parameters. Designed for continuous online monitoring with automatic calibration and compensation features.',
    image: getProductImageSrc('liquid-analyzers'),
    
    seo: {
      title: 'pH & Conductivity Liquid Analyzers - Water Quality Monitoring',
      description: 'Professional liquid analyzers for pH, conductivity, and water quality monitoring with automatic calibration and compensation',
      keywords: 'liquid analyzers, pH analyzers, conductivity analyzers, water quality, pH measurement, conductivity measurement',
      canonicalUrl: '/products/analyzer-liquid-ph-conductivity'
    },

    keyBenefits: [
      'Continuous Online Monitoring',
      'Automatic Temperature Compensation',
      'Self-calibrating Systems',
      'Wide Measurement Range',
      'Minimal Maintenance Requirements',
      'Superior Long-term Stability'
    ],

    specifications: [
      { label: 'pH Range', value: '0 to 14 pH units' },
      { label: 'pH Accuracy', value: '±0.01 to ±0.1 pH' },
      { label: 'Conductivity Range', value: '0.01 µS/cm to 2000 mS/cm' },
      { label: 'Conductivity Accuracy', value: '±0.5% to ±2% FS' },
      { label: 'Operating Temperature', value: '0°C to +80°C' },
      { label: 'Output', value: '4-20mA, HART, Modbus' }
    ],

    features: [
      'Digital ISFET pH Sensors',
      'Inductive Conductivity Sensors',
      'Automatic Buffer Recognition',
      'Temperature Compensation',
      'Self-diagnostic Functions',
      'Multiple Parameter Display',
      'Data Logging Capability',
      'Remote Monitoring'
    ],

    applications: [
      'Water Treatment Processes',
      'Chemical Process Control',
      'Food & Beverage Quality',
      'Pharmaceutical Manufacturing',
      'Environmental Monitoring',
      'Swimming Pool Management'
    ],

    industries: [
      'Water & Wastewater',
      'Food & Beverage',
      'Chemical Processing',
      'Pharmaceutical',
      'Power Generation',
      'Pulp & Paper'
    ],

    certifications: [
      'CE Certified',
      'FDA Compliant',
      'NSF Approved',
      'ATEX Certified',
      'IP67/IP68 Rated',
      'ISO 9001'
    ],

    categoryName: 'Instrumentation',
    categoryPath: '/products/instrumentation',
    subcategoryName: 'Liquid Analyzers'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Droplets} />;
}