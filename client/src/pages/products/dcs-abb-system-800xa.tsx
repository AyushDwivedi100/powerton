import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Server } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function DCSABBSystem800xA() {
  const productData: ProductDetailData = {
    id: 'dcs-abb-system-800xa',
    title: 'ABB System 800xA',
    shortDescription: 'Extended automation system for industrial processes',
    fullDescription: 'ABB System 800xA is an extended automation system providing integrated engineering, safety certified solutions, advanced cybersecurity, and comprehensive lifecycle management. Designed for large-scale industrial automation with modern digital capabilities.',
    image: getProductImageSrc('dcs'),
    
    seo: {
      title: 'ABB System 800xA - Extended Automation System',
      description: 'Advanced ABB System 800xA distributed control system with integrated engineering and cybersecurity for industrial automation',
      keywords: 'ABB System 800xA, extended automation, DCS, integrated engineering, cybersecurity, lifecycle management',
      canonicalUrl: '/products/dcs-abb-system-800xa'
    },

    keyBenefits: [
      'Integrated Engineering Environment',
      'Safety Certified Solutions',
      'Advanced Cybersecurity',
      'Comprehensive Lifecycle Management',
      'Collaborative Work Environment',
      'Flexible System Architecture'
    ],

    specifications: [
      { label: 'Controllers', value: 'AC 800M high integrity controllers' },
      { label: 'I/O Systems', value: 'S800 I/O with HART support' },
      { label: 'Communication', value: 'Industrial Ethernet, PROFIBUS' },
      { label: 'Engineering', value: 'Control Builder M engineering tool' },
      { label: 'Safety', value: 'SIL 3 certified safety functions' },
      { label: 'Redundancy', value: 'Full system redundancy available' }
    ],

    features: [
      'Object-Oriented Engineering',
      'Collaborative Workplace',
      'Integrated Safety Functions',
      'Information Management',
      'Advanced Process Control',
      'Asset Optimization',
      'Batch Management',
      'Cyber Security Protection'
    ],

    applications: [
      'Process Automation',
      'Power Plant Control',
      'Marine Automation',
      'Cement Production',
      'Mining Operations',
      'Water Treatment'
    ],

    industries: [
      'Oil, Gas & Petrochemicals',
      'Power & Water',
      'Pulp & Paper',
      'Metals & Mining',
      'Marine & Ports',
      'Cement & Minerals'
    ],

    certifications: [
      'SIL 3 Certified',
      'IEC 61508/61511',
      'ATEX/IECEx',
      'Marine DNV GL',
      'Cybersecurity IEC 62443',
      'ISO 27001'
    ],

    categoryName: 'Automation & Control',
    categoryPath: '/products/automation',
    subcategoryName: 'DCS'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Server} />;
}