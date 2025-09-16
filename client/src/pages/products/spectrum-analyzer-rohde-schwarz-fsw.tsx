import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Search } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function SpectrumAnalyzerRohdeSchwarzFSW() {
  const productData: ProductDetailData = {
    id: 'spectrum-analyzer-rohde-schwarz-fsw',
    title: 'Rohde & Schwarz FSW Signal & Spectrum Analyzer',
    shortDescription: 'Premium signal and spectrum analyzer for demanding measurement applications',
    fullDescription: 'Premium signal and spectrum analyzer designed for the most demanding measurement applications. Features ultra-wide analysis bandwidth, exceptional dynamic range, advanced I/Q analysis, and comprehensive EMI measurement capabilities for professional RF testing.',
    image: getProductImageSrc('spectrum-analyzers'),
    
    seo: {
      title: 'Rohde & Schwarz FSW Signal & Spectrum Analyzer - Premium',
      description: 'Professional Rohde & Schwarz FSW signal and spectrum analyzer with ultra-wide bandwidth for demanding measurements',
      keywords: 'Rohde Schwarz FSW, signal analyzer, spectrum analyzer, ultra-wide bandwidth, I/Q analysis, EMI measurements',
      canonicalUrl: '/products/spectrum-analyzer-rohde-schwarz-fsw'
    },

    keyBenefits: [
      'Ultra-Wide Analysis Bandwidth',
      'Exceptional Dynamic Range',
      'Advanced I/Q Analysis',
      'Comprehensive EMI Measurements',
      'High Measurement Accuracy',
      'Professional Grade Performance'
    ],

    specifications: [
      { label: 'Frequency Range', value: '2 Hz to 67 GHz' },
      { label: 'Analysis Bandwidth', value: 'Up to 1 GHz' },
      { label: 'Phase Noise', value: '-136 dBc/Hz at 10 kHz offset' },
      { label: 'DANL', value: '-173 dBm typical' },
      { label: 'TOI', value: '+30 dBm typical' },
      { label: 'Display', value: '12.1" XGA touchscreen' }
    ],

    features: [
      '1 GHz Analysis Bandwidth',
      'Advanced Vector Analysis',
      'Real-time Analysis',
      'EMI Measurement Suite',
      'Pulse Analysis',
      'Noise Figure Measurement',
      'Digital Pre-distortion',
      'Multi-touch Operation'
    ],

    applications: [
      'Radar Signal Analysis',
      'Wideband Communications',
      'EMI/EMC Testing',
      'Component Characterization',
      'Satellite Communications',
      'Research & Development'
    ],

    industries: [
      'Aerospace & Defense',
      'Wireless Communications',
      'Automotive Testing',
      'Research Laboratories',
      'Standards Compliance',
      'Component Testing'
    ],

    certifications: [
      'CE Marked',
      'FCC Compliant',
      'UL Listed',
      'IEC 61010',
      'CISPR 11',
      'RoHS Compliant'
    ],

    categoryName: 'Measurement Instruments',
    categoryPath: '/products/measurement-instruments',
    subcategoryName: 'Spectrum Analyzers'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Search} />;
}