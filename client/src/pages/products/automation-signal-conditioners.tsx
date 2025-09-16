import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Zap } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function AutomationSignalConditioners() {
  const productData: ProductDetailData = {
    id: 'automation-signal-conditioners',
    title: 'Signal Conditioners',
    shortDescription: 'Isolation amplifiers and signal conditioning solutions for industrial automation',
    fullDescription: 'Advanced signal conditioning solutions including isolation amplifiers, signal converters, and measuring transducers with galvanic isolation up to 2.5kV. Features SIL 2/3 functional safety certification, HART communication support, and universal input/output options for industrial applications.',
    image: getProductImageSrc('signal-conditioners'),
    
    seo: {
      title: 'Industrial Signal Conditioners - Isolation Amplifiers',
      description: 'Professional signal conditioners and isolation amplifiers with galvanic isolation for industrial automation applications',
      keywords: 'signal conditioners, isolation amplifiers, galvanic isolation, HART communication, SIL safety, signal converters',
      canonicalUrl: '/products/automation-signal-conditioners'
    },

    keyBenefits: [
      'Enhanced Signal Integrity',
      'Improved Safety & Protection',
      'Reduced Installation Time',
      'Flexible Configuration',
      'Galvanic Isolation',
      'Universal I/O Options'
    ],

    specifications: [
      { label: 'Isolation Voltage', value: '300V to 2.5kV test voltage' },
      { label: 'Signal Types', value: '0-20mA, 4-20mA, 0-10V, ±10V' },
      { label: 'Accuracy', value: '0.5% at 25°C' },
      { label: 'Bandwidth', value: 'Up to 400kHz' },
      { label: 'Mounting', value: 'DIN rail 6mm to 22.5mm width' },
      { label: 'Power', value: '24-110V DC / 110-230V AC' }
    ],

    features: [
      'SIL 2/3 Functional Safety Certified',
      'HART Communication Support',
      'Smartphone App Configuration',
      'Pluggable Connection Technology',
      'Universal Input/Output Options',
      'Ex Zone Compliance',
      'High Isolation Voltage',
      'Compact DIN Rail Design'
    ],

    applications: [
      'Process Control Systems',
      'Data Acquisition',
      'Ground Loop Elimination',
      'Noise Filtering',
      'Safety Circuits',
      'Hazardous Area Interfaces'
    ],

    industries: [
      'Process Control',
      'Power Generation',
      'Automotive',
      'Aerospace',
      'Medical Equipment',
      'Railway Systems'
    ],

    certifications: [
      'SIL 2/3 Certified',
      'EN 61508',
      'ATEX/IECEx',
      'UL Listed',
      'CSA Approved',
      'Ex Zone Certified'
    ],

    categoryName: 'Automation & Control',
    categoryPath: '/products/automation',
    subcategoryName: 'Signal Conditioning'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Zap} />;
}