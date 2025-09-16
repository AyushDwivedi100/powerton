import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Activity } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function OscilloscopeKeysightInfiniiVision3000TX() {
  const productData: ProductDetailData = {
    id: 'oscilloscope-keysight-infiniivision-3000t-x-series',
    title: 'Keysight InfiniiVision 3000T X-Series Oscilloscope',
    shortDescription: 'Touch-enabled oscilloscope for education and R&D applications',
    fullDescription: 'Advanced touch-enabled oscilloscope designed for education and research applications. Features multi-touch interface, zone triggering, built-in waveform generator, and comprehensive protocol decoding for modern electronic design and debug.',
    image: getProductImageSrc('oscilloscopes'),
    
    seo: {
      title: 'Keysight InfiniiVision 3000T X-Series Touch Oscilloscope',
      description: 'Professional Keysight InfiniiVision 3000T X-Series oscilloscope with multi-touch interface for education and R&D',
      keywords: 'Keysight 3000T, touch oscilloscope, multi-touch interface, zone triggering, waveform generator, protocol decode',
      canonicalUrl: '/products/oscilloscope-keysight-infiniivision-3000t-x-series'
    },

    keyBenefits: [
      'Multi-Touch Interface',
      'Zone Triggering Technology',
      'Built-in Waveform Generator',
      'Protocol Decode Capability',
      'Educational Features',
      'Intuitive Operation'
    ],

    specifications: [
      { label: 'Bandwidth', value: '100 MHz to 1 GHz' },
      { label: 'Sample Rate', value: 'Up to 5 GS/s' },
      { label: 'Channels', value: '2 or 4 analog channels' },
      { label: 'Memory Depth', value: 'Up to 2 Mpts' },
      { label: 'Display', value: '8.5" capacitive touch screen' },
      { label: 'Waveform Generator', value: '20 MHz function generator' }
    ],

    features: [
      'Multi-Touch Gesture Control',
      'Zone Triggering',
      'WaveGen Function Generator',
      'Protocol Decode & Triggering',
      'Segmented Memory',
      'Digital Channels (optional)',
      'Automated Measurements',
      'Lab Automation Software'
    ],

    applications: [
      'Electronics Education',
      'Circuit Design & Debug',
      'Power Electronics',
      'Embedded System Design',
      'Communication Circuits',
      'Student Laboratories'
    ],

    industries: [
      'Educational Institutions',
      'Electronics Design',
      'Research Laboratories',
      'Training Centers',
      'Product Development',
      'Prototyping'
    ],

    certifications: [
      'UL Listed',
      'CE Marked',
      'CSA Certified',
      'IEC 61010',
      'RoHS Compliant',
      'Energy Star'
    ],

    categoryName: 'Measurement Instruments',
    categoryPath: '/products/measurement-instruments',
    subcategoryName: 'Oscilloscopes'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Activity} />;
}