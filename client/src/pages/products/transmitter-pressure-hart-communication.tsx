import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Radio } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function TransmitterPressureHARTCommunication() {
  const productData: ProductDetailData = {
    id: 'transmitter-pressure-hart-communication',
    title: 'Pressure Transmitters with HART Communication',
    shortDescription: 'Smart pressure transmitters with digital HART protocol integration',
    fullDescription: 'Advanced pressure transmitters featuring HART digital communication protocol for enhanced diagnostics, remote configuration, and superior process control. Combines analog 4-20mA output with digital communication overlay for comprehensive process instrumentation solutions.',
    image: getProductImageSrc('pressure-transmitters'),
    
    seo: {
      title: 'HART Pressure Transmitters - Smart Digital Process Control',
      description: 'Professional HART pressure transmitters with digital communication for advanced process control, remote diagnostics, and configuration',
      keywords: 'HART pressure transmitters, digital pressure transmitters, smart transmitters, process control, 4-20mA HART',
      canonicalUrl: '/products/transmitter-pressure-hart-communication'
    },

    keyBenefits: [
      'Digital Communication Capability',
      'Remote Configuration & Diagnostics',
      'Superior Accuracy & Stability',
      'Advanced Process Control',
      'Reduced Maintenance Costs',
      'Enhanced Process Visibility'
    ],

    specifications: [
      { label: 'Pressure Range', value: '0-1 mbar to 0-1000 bar' },
      { label: 'Accuracy', value: '±0.025% to ±0.1% FS' },
      { label: 'Operating Temperature', value: '-40°C to +125°C' },
      { label: 'Output', value: '4-20mA + HART digital' },
      { label: 'Power Supply', value: '10.5-55V DC' },
      { label: 'Protection Rating', value: 'IP67/IP68' }
    ],

    features: [
      'HART 7 Protocol Support',
      'Multi-drop Communication',
      'Remote Configuration',
      'Advanced Diagnostics',
      'Burst Mode Capability',
      'Wireless HART Ready',
      'Local Zero & Span',
      'Process Variable Mapping'
    ],

    applications: [
      'Process Pressure Monitoring',
      'Tank Level Measurement',
      'Flow Rate Calculation',
      'Differential Pressure',
      'Vacuum Monitoring',
      'Custody Transfer'
    ],

    industries: [
      'Oil & Gas',
      'Chemical Processing',
      'Power Generation',
      'Water Treatment',
      'Pharmaceutical',
      'Food & Beverage'
    ],

    certifications: [
      'HART Certified',
      'ATEX Approved',
      'IECEx Certified',
      'SIL 2/3 Capable',
      'FM Approved',
      'CSA Certified'
    ],

    categoryName: 'Instrumentation',
    categoryPath: '/products/instrumentation',
    subcategoryName: 'Pressure Transmitters'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Radio} />;
}