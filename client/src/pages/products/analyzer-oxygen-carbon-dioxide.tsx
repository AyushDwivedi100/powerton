import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Wind } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function AnalyzerOxygenCarbonDioxide() {
  const productData: ProductDetailData = {
    id: 'analyzer-oxygen-carbon-dioxide',
    title: 'O2 & CO2 Analyzers - Process Gas Monitoring',
    shortDescription: 'Specialized oxygen and carbon dioxide analyzers for process control',
    fullDescription: 'High-precision oxygen and carbon dioxide analyzers utilizing electrochemical, paramagnetic, and infrared technologies for critical process monitoring and safety applications. Features fast response times, excellent selectivity, and robust design for industrial environments.',
    image: getProductImageSrc('gas-analyzers'),
    
    seo: {
      title: 'Oxygen & CO2 Analyzers - Process Gas Monitoring Systems',
      description: 'Professional oxygen and carbon dioxide analyzers for accurate process gas monitoring and safety applications in industrial environments',
      keywords: 'oxygen analyzers, CO2 analyzers, O2 measurement, carbon dioxide analyzers, process gas monitoring, paramagnetic analyzers',
      canonicalUrl: '/products/analyzer-oxygen-carbon-dioxide'
    },

    keyBenefits: [
      'High Selectivity & Accuracy',
      'Fast Response Time',
      'Wide Measurement Range',
      'Excellent Long-term Stability',
      'Minimal Cross-interference',
      'Reliable Safety Monitoring'
    ],

    specifications: [
      { label: 'O2 Range', value: '0-1 ppm to 0-100% vol' },
      { label: 'CO2 Range', value: '0-100 ppm to 0-100% vol' },
      { label: 'Accuracy', value: '±1% to ±2% FS' },
      { label: 'Response Time', value: '10-60 seconds T90' },
      { label: 'Operating Temperature', value: '-10°C to +50°C' },
      { label: 'Output', value: '4-20mA, 0-10V, RS485' }
    ],

    features: [
      'Paramagnetic O2 Detection',
      'NDIR CO2 Measurement',
      'Electrochemical Sensors',
      'Temperature Compensation',
      'Pressure Compensation',
      'Auto-calibration Function',
      'Multi-range Operation',
      'Explosion-proof Options'
    ],

    applications: [
      'Combustion Efficiency Monitoring',
      'Inert Gas Blanketing',
      'Process Safety Monitoring',
      'Biogas Analysis',
      'Fermentation Control',
      'Environmental Monitoring'
    ],

    industries: [
      'Power Generation',
      'Oil & Gas',
      'Chemical Processing',
      'Food & Beverage',
      'Pharmaceutical',
      'Environmental'
    ],

    certifications: [
      'ATEX Zone 1/2',
      'IECEx Certified',
      'SIL 2 Capable',
      'CE Marked',
      'FM Approved',
      'CSA Certified'
    ],

    categoryName: 'Instrumentation',
    categoryPath: '/products/instrumentation',
    subcategoryName: 'O2/CO2 Analyzers'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Wind} />;
}