import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Radio } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function SpectrumAnalyzerKeysightN9020AMXA() {
  const productData: ProductDetailData = {
    id: 'spectrum-analyzer-keysight-n9020a-mxa',
    title: 'Keysight N9020A MXA Signal Analyzer',
    shortDescription: 'High-performance RF and microwave signal analyzer for demanding applications',
    fullDescription: 'Professional high-performance RF and microwave signal analyzer designed for demanding applications requiring exceptional measurement accuracy and speed. Features wide frequency coverage, phase noise analysis, vector analysis, and real-time spectrum analysis capabilities.',
    image: getProductImageSrc('spectrum-analyzers'),
    
    seo: {
      title: 'Keysight N9020A MXA Signal Analyzer - RF & Microwave',
      description: 'Professional Keysight N9020A MXA signal analyzer for high-performance RF and microwave measurements with phase noise analysis',
      keywords: 'Keysight N9020A, MXA signal analyzer, RF analyzer, microwave analyzer, phase noise, vector analysis, spectrum analyzer',
      canonicalUrl: '/products/spectrum-analyzer-keysight-n9020a-mxa'
    },

    keyBenefits: [
      'Wide Frequency Coverage',
      'Exceptional Phase Noise Performance',
      'Vector Signal Analysis',
      'Real-time Spectrum Analysis',
      'High Measurement Speed',
      'Superior Accuracy'
    ],

    specifications: [
      { label: 'Frequency Range', value: '9 kHz to 26.5 GHz' },
      { label: 'Phase Noise', value: '-133 dBc/Hz at 10 kHz offset' },
      { label: 'DANL', value: '-165 dBm at 1 GHz' },
      { label: 'Analysis Bandwidth', value: 'Up to 255 MHz' },
      { label: 'Measurement Speed', value: '<5 ms sweep time' },
      { label: 'Display', value: '12.1" XGA color display' }
    ],

    features: [
      'Phase Noise Optimization',
      'Vector Signal Analysis',
      'Real-time Spectrum Analysis',
      'Pulse Analysis',
      'EMI Pre-compliance',
      'Noise Figure Measurement',
      'Digital Demodulation',
      'Remote Programming'
    ],

    applications: [
      'RF Component Testing',
      'Phase Noise Measurement',
      'Radar Signal Analysis',
      'Wireless Communications',
      'Satellite Communications',
      'Microwave Design'
    ],

    industries: [
      'Aerospace & Defense',
      'Telecommunications',
      'Satellite Communications',
      'Research & Development',
      'Component Manufacturing',
      'Standards Organizations'
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

  return <ProductDetailTemplate product={productData} heroIcon={Radio} />;
}