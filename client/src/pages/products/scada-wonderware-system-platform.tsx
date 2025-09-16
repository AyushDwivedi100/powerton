import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Network } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function SCADAWonderwareSystemPlatform() {
  const productData: ProductDetailData = {
    id: 'scada-wonderware-system-platform',
    title: 'Wonderware System Platform',
    shortDescription: 'Comprehensive SCADA platform for industrial automation',
    fullDescription: 'The Wonderware System Platform is a comprehensive SCADA solution providing real-time data acquisition, historical trending, alarm management, and web-based HMI capabilities. Designed for enterprise-wide automation with scalable architecture and advanced analytics.',
    image: getProductImageSrc('scada'),
    
    seo: {
      title: 'Wonderware System Platform - Enterprise SCADA Solution',
      description: 'Professional Wonderware System Platform SCADA software for real-time data acquisition and industrial process control',
      keywords: 'Wonderware SCADA, System Platform, industrial automation, real-time monitoring, HMI software',
      canonicalUrl: '/products/scada-wonderware-system-platform'
    },

    keyBenefits: [
      'Real-time Data Acquisition',
      'Historical Trending',
      'Comprehensive Alarm Management',
      'Web-based HMI Interface',
      'Scalable Architecture',
      'Advanced Analytics'
    ],

    specifications: [
      { label: 'Platform', value: 'Windows Server 2016/2019/2022' },
      { label: 'Database', value: 'SQL Server, Oracle, MySQL' },
      { label: 'Communication', value: 'OPC, Modbus, Ethernet/IP' },
      { label: 'Client Support', value: 'Up to 1000+ concurrent users' },
      { label: 'Redundancy', value: 'Hot standby server support' },
      { label: 'Security', value: 'Role-based access control' }
    ],

    features: [
      'Real-time Data Processing',
      'Historical Data Management',
      'Alarm & Event Management',
      'Web-based Visualization',
      'Recipe Management',
      'Batch Processing',
      'Report Generation',
      'Mobile Access'
    ],

    applications: [
      'Manufacturing Execution',
      'Process Control',
      'Energy Management',
      'Asset Monitoring',
      'Quality Control',
      'Regulatory Compliance'
    ],

    industries: [
      'Oil & Gas',
      'Chemical Processing',
      'Power Generation',
      'Water Treatment',
      'Manufacturing',
      'Food & Beverage'
    ],

    certifications: [
      'CE Certified',
      'UL Listed',
      'ISO 27001',
      'IEC 62443',
      'NERC CIP',
      'FDA 21 CFR Part 11'
    ],

    categoryName: 'Automation & Control',
    categoryPath: '/products/automation',
    subcategoryName: 'SCADA'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Network} />;
}