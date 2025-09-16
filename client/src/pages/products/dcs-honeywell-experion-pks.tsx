import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Server } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function DCSHoneywellExperionPKS() {
  const productData: ProductDetailData = {
    id: 'dcs-honeywell-experion-pks',
    title: 'Honeywell Experion PKS',
    shortDescription: 'Distributed control system for process industries',
    fullDescription: 'Honeywell Experion PKS is a comprehensive distributed control system designed for process industries, featuring integrated process control, safety systems, asset management, and advanced control capabilities. Provides unified architecture for complete plant automation.',
    image: getProductImageSrc('dcs'),
    
    seo: {
      title: 'Honeywell Experion PKS - Process Control System',
      description: 'Enterprise-grade Honeywell Experion PKS distributed control system for comprehensive process automation and safety',
      keywords: 'Honeywell Experion PKS, DCS, process control, safety systems, asset management, advanced control',
      canonicalUrl: '/products/dcs-honeywell-experion-pks'
    },

    keyBenefits: [
      'Integrated Process Control',
      'Advanced Safety Systems',
      'Comprehensive Asset Management',
      'Advanced Control Strategies',
      'Unified Architecture',
      'Scalable Platform'
    ],

    specifications: [
      { label: 'Architecture', value: 'Distributed fault-tolerant system' },
      { label: 'Controllers', value: 'C300 controllers with redundancy' },
      { label: 'I/O Capacity', value: 'Up to 60,000+ I/O points' },
      { label: 'Communication', value: 'Fault Tolerant Ethernet (FTE)' },
      { label: 'Safety Rating', value: 'SIL 3 certified safety systems' },
      { label: 'Engineering', value: 'Unified Station for configuration' }
    ],

    features: [
      'Fault-Tolerant Controllers',
      'Integrated Safety Manager',
      'Advanced Process Control',
      'Asset Performance Management',
      'Unified Engineering Environment',
      'Flexible Human Machine Interface',
      'Batch & Continuous Control',
      'Predictive Diagnostics'
    ],

    applications: [
      'Oil Refining',
      'Petrochemical Processing',
      'Power Generation',
      'Pulp & Paper',
      'Chemical Manufacturing',
      'Gas Processing'
    ],

    industries: [
      'Oil & Gas',
      'Refining',
      'Petrochemicals',
      'Power & Utilities',
      'Chemicals',
      'Pulp & Paper'
    ],

    certifications: [
      'SIL 3 Certified',
      'IEC 61508',
      'IEC 61511',
      'ATEX Certified',
      'FM Approved',
      'Cybersecurity Certified'
    ],

    categoryName: 'Automation & Control',
    categoryPath: '/products/automation',
    subcategoryName: 'DCS'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Server} />;
}