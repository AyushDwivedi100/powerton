import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Network } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function SCADASiemensWinCC() {
  const productData: ProductDetailData = {
    id: 'scada-siemens-wincc',
    title: 'Siemens WinCC SCADA',
    shortDescription: 'Industrial SCADA system for monitoring and control',
    fullDescription: 'Siemens WinCC is a comprehensive SCADA system integrated with TIA Portal, offering web client support, mobile access, and redundancy options. Provides seamless integration with Siemens automation components for complete industrial solutions.',
    image: getProductImageSrc('scada'),
    
    seo: {
      title: 'Siemens WinCC SCADA - TIA Portal Integrated System',
      description: 'Professional Siemens WinCC SCADA system with TIA Portal integration and mobile access for industrial automation',
      keywords: 'Siemens WinCC, TIA Portal, SCADA system, industrial monitoring, mobile SCADA, redundancy',
      canonicalUrl: '/products/scada-siemens-wincc'
    },

    keyBenefits: [
      'TIA Portal Integration',
      'Web Client Support',
      'Mobile Access Capability',
      'Redundancy Options',
      'Unified Engineering',
      'Scalable Architecture'
    ],

    specifications: [
      { label: 'Platform', value: 'Windows 10/11, Server 2019/2022' },
      { label: 'Tags', value: 'Up to 262,144 process tags' },
      { label: 'Clients', value: 'Up to 32 operator stations' },
      { label: 'Communication', value: 'Profinet, Profibus, OPC UA' },
      { label: 'Redundancy', value: 'Server and client redundancy' },
      { label: 'Integration', value: 'Full TIA Portal compatibility' }
    ],

    features: [
      'TIA Portal Engineering',
      'Web-based Visualization',
      'Mobile Client Support',
      'System Redundancy',
      'Unified Data Management',
      'Integrated Diagnostics',
      'Recipe Management',
      'User Administration'
    ],

    applications: [
      'Process Automation',
      'Manufacturing Control',
      'Infrastructure Monitoring',
      'Energy Management',
      'Building Automation',
      'Transportation Systems'
    ],

    industries: [
      'Automotive',
      'Chemical Processing',
      'Food & Beverage',
      'Pharmaceutical',
      'Power & Energy',
      'Water Treatment'
    ],

    certifications: [
      'CE Certified',
      'UL Listed',
      'IEC 62443',
      'ISO 27001',
      'TÜV Certified',
      'FIPS 140-2'
    ],

    categoryName: 'Automation & Control',
    categoryPath: '/products/automation',
    subcategoryName: 'SCADA'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Network} />;
}