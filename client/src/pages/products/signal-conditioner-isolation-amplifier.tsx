import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Zap } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function SignalConditionerIsolationAmplifier() {
  const productData: ProductDetailData = {
    id: 'signal-conditioner-isolation-amplifier',
    title: 'Isolation Amplifiers & Signal Converters',
    shortDescription: 'Galvanic isolation and signal conditioning for industrial measurement',
    fullDescription: 'Professional isolation amplifiers providing galvanic isolation, signal amplification, and noise filtering for critical industrial measurement applications. Features high isolation voltage, excellent common-mode rejection, and superior signal integrity for demanding environments.',
    image: getProductImageSrc('isolation-amplifiers'),
    
    seo: {
      title: 'Isolation Amplifiers & Signal Converters - Industrial Signal Conditioning',
      description: 'Professional isolation amplifiers and signal converters with galvanic isolation for industrial measurement and signal conditioning',
      keywords: 'isolation amplifiers, signal converters, galvanic isolation, signal conditioning, common mode rejection, noise filtering',
      canonicalUrl: '/products/signal-conditioner-isolation-amplifier'
    },

    keyBenefits: [
      'Galvanic Isolation Protection',
      'Superior Signal Integrity',
      'Excellent Noise Rejection',
      'Wide Input Signal Range',
      'High Accuracy & Linearity',
      'Compact DIN Rail Design'
    ],

    specifications: [
      { label: 'Isolation Voltage', value: '1.5kV to 4kV test voltage' },
      { label: 'Input Range', value: '±10mV to ±50V DC' },
      { label: 'Output Range', value: '4-20mA, 0-10V, ±10V' },
      { label: 'Accuracy', value: '±0.1% to ±0.5% FS' },
      { label: 'Bandwidth', value: 'DC to 10kHz' },
      { label: 'Power Supply', value: '24V DC, 115/230V AC' }
    ],

    features: [
      'Transformer Coupling Isolation',
      'Common Mode Rejection',
      'Linearization Function',
      'Zero & Span Adjustment',
      'LED Status Indicators',
      'Pluggable Terminals',
      'Wide Temperature Range',
      'EMC Compliant Design'
    ],

    applications: [
      'Sensor Signal Isolation',
      'Ground Loop Elimination',
      'Noise Filtering',
      'Signal Level Conversion',
      'Process Safety Systems',
      'Data Acquisition'
    ],

    industries: [
      'Process Control',
      'Power Generation',
      'Chemical Processing',
      'Oil & Gas',
      'Water Treatment',
      'Manufacturing'
    ],

    certifications: [
      'CE Certified',
      'UL Listed',
      'CSA Approved',
      'IEC 61010',
      'ATEX Approved',
      'SIL 2/3 Capable'
    ],

    categoryName: 'Instrumentation',
    categoryPath: '/products/instrumentation',
    subcategoryName: 'Signal Conditioners'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Zap} />;
}