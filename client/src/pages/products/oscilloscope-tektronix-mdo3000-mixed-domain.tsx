import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { BarChart3 } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function OscilloscopeTektronixMDO3000MixedDomain() {
  const productData: ProductDetailData = {
    id: 'oscilloscope-tektronix-mdo3000-mixed-domain',
    title: 'Tektronix MDO3000 Mixed Domain Oscilloscope',
    shortDescription: 'Multi-domain oscilloscope with time and frequency analysis capabilities',
    fullDescription: 'Advanced mixed domain oscilloscope combining traditional time domain analysis with integrated spectrum analyzer capabilities. Features 4-channel analog inputs, RF spectrum analysis, protocol analysis, and advanced triggering for comprehensive signal analysis.',
    image: getProductImageSrc('oscilloscopes'),
    
    seo: {
      title: 'Tektronix MDO3000 Mixed Domain Oscilloscope - Time & Frequency',
      description: 'Professional Tektronix MDO3000 mixed domain oscilloscope with integrated spectrum analyzer for time and frequency domain analysis',
      keywords: 'Tektronix MDO3000, mixed domain oscilloscope, spectrum analyzer, RF analysis, protocol analysis, time domain',
      canonicalUrl: '/products/oscilloscope-tektronix-mdo3000-mixed-domain'
    },

    keyBenefits: [
      'Multi-Domain Analysis',
      '4-Channel Analog Inputs',
      'Integrated RF Spectrum Analysis',
      'Protocol Analysis Capability',
      'Advanced Triggering Options',
      'Comprehensive Signal Analysis'
    ],

    specifications: [
      { label: 'Bandwidth', value: '100 MHz to 1 GHz' },
      { label: 'Sample Rate', value: 'Up to 5 GS/s' },
      { label: 'Channels', value: '4 analog + 16 digital' },
      { label: 'Memory Depth', value: 'Up to 20 Mpts' },
      { label: 'RF Frequency Range', value: '9 kHz to 3 GHz' },
      { label: 'Display', value: '9" WVGA color display' }
    ],

    features: [
      'Integrated Spectrum Analyzer',
      'Protocol Analysis',
      'Advanced Triggering',
      'Mixed Signal Capability',
      'Time-Correlated Analysis',
      'Digital Phosphor Technology',
      'Automated Measurements',
      'Windows-based Analysis'
    ],

    applications: [
      'RF Circuit Design',
      'EMI/EMC Testing',
      'Power Electronics',
      'Embedded System Debug',
      'Communication Systems',
      'Signal Integrity Analysis'
    ],

    industries: [
      'Electronics Design',
      'Telecommunications',
      'Aerospace & Defense',
      'Automotive',
      'Research & Development',
      'Education'
    ],

    certifications: [
      'UL Listed',
      'CE Marked',
      'FCC Compliant',
      'IEC 61010',
      'RoHS Compliant',
      'ISO 9001'
    ],

    categoryName: 'Measurement Instruments',
    categoryPath: '/products/measurement-instruments',
    subcategoryName: 'Oscilloscopes'
  };

  return <ProductDetailTemplate product={productData} heroIcon={BarChart3} />;
}