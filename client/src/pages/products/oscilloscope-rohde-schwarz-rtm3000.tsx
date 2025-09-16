import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Zap } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function OscilloscopeRohdeSchwarzRTM3000() {
  const productData: ProductDetailData = {
    id: 'oscilloscope-rohde-schwarz-rtm3000',
    title: 'Rohde & Schwarz RTM3000 High-Performance Oscilloscope',
    shortDescription: 'High-performance oscilloscope for debugging and development applications',
    fullDescription: 'Professional high-performance oscilloscope designed for demanding debugging and development applications. Features 10-bit ADC resolution, digital trigger system, comprehensive history function, and advanced mask testing capabilities for precise signal analysis.',
    image: getProductImageSrc('oscilloscopes'),
    
    seo: {
      title: 'Rohde & Schwarz RTM3000 High-Performance Oscilloscope',
      description: 'Professional Rohde & Schwarz RTM3000 oscilloscope with 10-bit ADC and digital trigger for high-performance debugging',
      keywords: 'Rohde Schwarz RTM3000, high performance oscilloscope, 10-bit ADC, digital trigger, mask testing, debugging',
      canonicalUrl: '/products/oscilloscope-rohde-schwarz-rtm3000'
    },

    keyBenefits: [
      '10-bit ADC Resolution',
      'Digital Trigger System',
      'Comprehensive History Function',
      'Advanced Mask Testing',
      'High Signal Fidelity',
      'Professional Debug Features'
    ],

    specifications: [
      { label: 'Bandwidth', value: '100 MHz to 1 GHz' },
      { label: 'Sample Rate', value: 'Up to 5 GS/s' },
      { label: 'ADC Resolution', value: '10-bit vertical resolution' },
      { label: 'Channels', value: '2 or 4 analog channels' },
      { label: 'Memory Depth', value: 'Up to 80 Mpts' },
      { label: 'Display', value: '10.1" capacitive touchscreen' }
    ],

    features: [
      '10-bit ADC Technology',
      'Digital Trigger System',
      'History & Search Function',
      'Mask Testing',
      'QuickMeas Cursors',
      'Mixed Signal Capability',
      'Advanced Math Functions',
      'Remote Control Interface'
    ],

    applications: [
      'Circuit Debugging',
      'Signal Integrity Analysis',
      'Power Electronics Design',
      'High-Speed Digital Design',
      'Automotive Electronics',
      'Compliance Testing'
    ],

    industries: [
      'Electronics Design',
      'Automotive',
      'Aerospace & Defense',
      'Telecommunications',
      'Industrial Electronics',
      'Test & Measurement'
    ],

    certifications: [
      'CE Marked',
      'UL Listed',
      'CSA Certified',
      'IEC 61010',
      'FCC Compliant',
      'RoHS Compliant'
    ],

    categoryName: 'Measurement Instruments',
    categoryPath: '/products/measurement-instruments',
    subcategoryName: 'Oscilloscopes'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Zap} />;
}