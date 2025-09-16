import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Server } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function DCSEmersonDeltaV() {
  const productData: ProductDetailData = {
    id: 'dcs-emerson-deltav',
    title: 'Emerson DeltaV',
    shortDescription: 'Modern DCS with digital transformation capabilities',
    fullDescription: 'Emerson DeltaV is a modern distributed control system featuring digital twin technology, predictive analytics, wireless integration, and cloud connectivity. Designed for digital transformation with advanced analytics and operational intelligence.',
    image: getProductImageSrc('dcs'),
    
    seo: {
      title: 'Emerson DeltaV - Modern Digital Control System',
      description: 'Advanced Emerson DeltaV DCS with digital twin technology and predictive analytics for modern process automation',
      keywords: 'Emerson DeltaV, digital DCS, digital twin, predictive analytics, wireless integration, cloud connectivity',
      canonicalUrl: '/products/dcs-emerson-deltav'
    },

    keyBenefits: [
      'Digital Twin Technology',
      'Predictive Analytics',
      'Wireless Integration',
      'Cloud Connectivity',
      'Modern User Experience',
      'Simplified Engineering'
    ],

    specifications: [
      { label: 'Controllers', value: 'DeltaV controllers with CHARM I/O' },
      { label: 'Wireless', value: 'WirelessHART field devices' },
      { label: 'Mobile', value: 'DeltaV Mobile for tablets/phones' },
      { label: 'Analytics', value: 'Built-in predictive analytics' },
      { label: 'Safety', value: 'SIS with SIL 3 capabilities' },
      { label: 'Engineering', value: 'DeltaV Operate user interface' }
    ],

    features: [
      'Smart Digital Architecture',
      'Wireless Field Device Integration',
      'Mobile Operations Support',
      'Advanced Analytics Engine',
      'Safety Instrumented Systems',
      'Modular Configuration',
      'Live Enterprise Integration',
      'Cybersecurity Protection'
    ],

    applications: [
      'Continuous Process Control',
      'Batch Processing',
      'Safety Applications',
      'Asset Management',
      'Predictive Maintenance',
      'Operational Analytics'
    ],

    industries: [
      'Chemical & Petrochemical',
      'Oil & Gas',
      'Pharmaceutical',
      'Power Generation',
      'Food & Beverage',
      'Life Sciences'
    ],

    certifications: [
      'SIL 3/SIL 4 Certified',
      'IEC 61508/61511',
      'ATEX/FM/CSA',
      'Cybersecurity IEC 62443',
      'FIPS 140-2',
      'Common Criteria'
    ],

    categoryName: 'Automation & Control',
    categoryPath: '/products/automation',
    subcategoryName: 'DCS'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Server} />;
}