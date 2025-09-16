import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { FlaskConical } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function AnalyzerGasChromatographySpectrometry() {
  const productData: ProductDetailData = {
    id: 'analyzer-gas-chromatography-spectrometry',
    title: 'Gas Analyzers - Chromatography & Spectrometry',
    shortDescription: 'Advanced gas analysis systems for process optimization and environmental monitoring',
    fullDescription: 'Comprehensive gas analysis solutions utilizing gas chromatography and mass spectrometry technologies for precise identification and quantification of gas components. Features real-time monitoring, multi-component analysis, and superior accuracy for critical process applications.',
    image: getProductImageSrc('gas-analyzers'),
    
    seo: {
      title: 'Gas Chromatography & Spectrometry Analyzers - Process Gas Analysis',
      description: 'Professional gas analyzers using chromatography and spectrometry for accurate process gas analysis and environmental monitoring',
      keywords: 'gas analyzers, gas chromatography, mass spectrometry, process gas analysis, environmental monitoring, GC-MS',
      canonicalUrl: '/products/analyzer-gas-chromatography-spectrometry'
    },

    keyBenefits: [
      'Multi-component Analysis',
      'Real-time Monitoring',
      'Superior Accuracy & Precision',
      'Low Detection Limits',
      'Automated Operation',
      'Comprehensive Data Logging'
    ],

    specifications: [
      { label: 'Detection Range', value: 'ppb to % levels' },
      { label: 'Accuracy', value: '±0.5% to ±2% of reading' },
      { label: 'Response Time', value: '30 seconds to 5 minutes' },
      { label: 'Operating Temperature', value: '-10°C to +50°C' },
      { label: 'Sample Flow', value: '10-200 ml/min' },
      { label: 'Power Supply', value: '100-240V AC, 50/60Hz' }
    ],

    features: [
      'Tunable Diode Laser Technology',
      'Fourier Transform Infrared',
      'Thermal Conductivity Detection',
      'Flame Ionization Detection',
      'Automatic Calibration',
      'Multi-stream Sampling',
      'Remote Diagnostics',
      'Advanced Data Analysis'
    ],

    applications: [
      'Process Gas Monitoring',
      'Stack Emission Analysis',
      'Ambient Air Quality',
      'Natural Gas Analysis',
      'Refinery Gas Analysis',
      'Safety Gas Detection'
    ],

    industries: [
      'Oil & Gas Refining',
      'Chemical Processing',
      'Environmental Monitoring',
      'Power Generation',
      'Petrochemical',
      'Natural Gas Processing'
    ],

    certifications: [
      'EPA Approved',
      'ATEX Certified',
      'IECEx Approved',
      'SIL 2 Capable',
      'CE Marked',
      'FCC Compliant'
    ],

    categoryName: 'Instrumentation',
    categoryPath: '/products/instrumentation',
    subcategoryName: 'Gas Analyzers'
  };

  return <ProductDetailTemplate product={productData} heroIcon={FlaskConical} />;
}