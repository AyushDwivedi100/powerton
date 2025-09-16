import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Zap } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function AutomationMotorDrivesVFD() {
  const productData: ProductDetailData = {
    id: 'automation-motor-drives-vfd',
    title: 'Motor Drives & VFDs',
    shortDescription: 'Variable frequency drives and motor control solutions for industrial automation',
    fullDescription: 'Advanced variable frequency drives (VFDs) and motor control solutions providing precise speed control, energy efficiency, and motor protection. Features regenerative braking, advanced motor control algorithms, and comprehensive communication capabilities for industrial automation applications.',
    image: getProductImageSrc('motor-drives'),
    
    seo: {
      title: 'Motor Drives & VFDs - Variable Frequency Drive Systems',
      description: 'Professional motor drives and VFD systems for precise motor control and energy efficiency in industrial automation',
      keywords: 'motor drives, VFD, variable frequency drives, motor control, speed control, energy efficiency, servo drives',
      canonicalUrl: '/products/automation-motor-drives-vfd'
    },

    keyBenefits: [
      'Precise Speed Control',
      'Energy Efficiency Optimization',
      'Motor Protection Features',
      'Regenerative Braking',
      'Advanced Control Algorithms',
      'Comprehensive Communication'
    ],

    specifications: [
      { label: 'Power Range', value: '0.37kW to 2.2MW' },
      { label: 'Voltage Range', value: '200V to 690V AC' },
      { label: 'Control Methods', value: 'V/Hz, Vector, DTC' },
      { label: 'Communication', value: 'Modbus, Profinet, EtherNet/IP' },
      { label: 'Protection', value: 'IP20 to IP66' },
      { label: 'Efficiency', value: 'Up to 98% efficiency' }
    ],

    features: [
      'Vector Control Technology',
      'Energy Saving Modes',
      'Built-in Safety Functions',
      'Advanced Motor Protection',
      'Regenerative Operation',
      'Multi-motor Control',
      'Remote Monitoring',
      'Predictive Maintenance'
    ],

    applications: [
      'Pump & Fan Control',
      'Conveyor Systems',
      'Compressor Control',
      'Crane & Hoist',
      'Machine Tools',
      'HVAC Systems'
    ],

    industries: [
      'Manufacturing',
      'Oil & Gas',
      'Water & Wastewater',
      'Mining',
      'HVAC',
      'Material Handling'
    ],

    certifications: [
      'CE Certified',
      'UL Listed',
      'IEC 61800',
      'SIL 3 Rated',
      'ATEX Compliant',
      'Energy Star'
    ],

    categoryName: 'Automation & Control',
    categoryPath: '/products/automation',
    subcategoryName: 'Motor Drives'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Zap} />;
}