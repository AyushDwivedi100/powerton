import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Settings } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function AutomationControllersRecorders() {
  const productData: ProductDetailData = {
    id: 'automation-controllers-recorders',
    title: 'Controllers & Recorders',
    shortDescription: 'Advanced PLC, PAC, DCS, and SCADA systems for industrial automation',
    fullDescription: 'Comprehensive automation control systems including Programmable Logic Controllers with IEC 61131-3 programming standards and multiple communication protocols. Features modular design, hot-swappable I/O, redundancy options, and integrated safety functions for reliable industrial automation.',
    image: getProductImageSrc('controllers'),
    
    seo: {
      title: 'Industrial Controllers & Recorders - Automation Systems',
      description: 'Advanced industrial controllers and data recorders with PLC, PAC, DCS capabilities for comprehensive automation solutions',
      keywords: 'industrial controllers, data recorders, PLC systems, PAC controllers, automation hardware, IEC 61131',
      canonicalUrl: '/products/automation-controllers-recorders'
    },

    keyBenefits: [
      'Reduced Engineering Time',
      'Enhanced System Performance', 
      'Improved Operational Efficiency',
      'Integrated Safety Functions',
      'Modular Scalable Design',
      'Hot-Swappable Components'
    ],

    specifications: [
      { label: 'Programming', value: 'IEC 61131-3 Standards' },
      { label: 'I/O Capacity', value: '16 to 40,000+ points' },
      { label: 'Memory', value: '1MB to 64MB' },
      { label: 'Communication', value: 'Ethernet, Serial, Fieldbus' },
      { label: 'Operating Temperature', value: '-20°C to +60°C' },
      { label: 'Power Supply', value: '24VDC/120-240VAC' }
    ],

    features: [
      'Modular Design Architecture',
      'Hot-Swappable I/O Modules',
      'Redundancy Options',
      'Web-Based HMI Interface',
      'Real-Time Processing',
      'Integrated Safety Systems',
      'Remote Access Capability',
      'Scalable Architecture'
    ],

    applications: [
      'Process Control',
      'Factory Automation',
      'Material Handling',
      'Data Acquisition',
      'Safety Systems',
      'Motion Control'
    ],

    industries: [
      'Manufacturing',
      'Process Industries',
      'Water Treatment',
      'Building Automation',
      'Energy & Utilities',
      'Transportation'
    ],

    certifications: [
      'CE Certified',
      'UL Listed',
      'CSA Approved',
      'IEC 61508 SIL',
      'ATEX Compliant',
      'FCC Class A'
    ],

    categoryName: 'Automation & Control',
    categoryPath: '/products/automation',
    subcategoryName: 'Controllers'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Settings} />;
}