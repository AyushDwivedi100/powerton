import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Network } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function SCADAGEiFIX() {
  const productData: ProductDetailData = {
    id: 'scada-ge-ifix',
    title: 'GE iFIX SCADA',
    shortDescription: 'Advanced SCADA software for process visualization',
    fullDescription: 'GE iFIX is a powerful SCADA software solution providing advanced process graphics, comprehensive data logging, automated report generation, and extensive OPC connectivity. Engineered for high-performance industrial automation applications.',
    image: getProductImageSrc('scada'),
    
    seo: {
      title: 'GE iFIX SCADA - Advanced Process Visualization Software',
      description: 'Professional GE iFIX SCADA software with advanced graphics and comprehensive data logging for industrial automation',
      keywords: 'GE iFIX, SCADA software, process visualization, data logging, OPC connectivity, industrial graphics',
      canonicalUrl: '/products/scada-ge-ifix'
    },

    keyBenefits: [
      'Advanced Process Graphics',
      'Comprehensive Data Logging',
      'Automated Report Generation',
      'Extensive OPC Connectivity',
      'High-Performance Engine',
      'Flexible Licensing Model'
    ],

    specifications: [
      { label: 'Platform', value: 'Windows 10/11, Server 2019/2022' },
      { label: 'Tags', value: 'Up to 65,000 I/O points' },
      { label: 'Clients', value: 'Unlimited view-only clients' },
      { label: 'Communication', value: 'OPC, DDE, ActiveX, .NET' },
      { label: 'Redundancy', value: 'SCADA and database redundancy' },
      { label: 'Graphics', value: 'VBA scripting, ActiveX objects' }
    ],

    features: [
      'Dynamic Process Graphics',
      'Real-time Data Collection',
      'Historical Data Storage',
      'Report Generation Engine',
      'OPC Server/Client',
      'VBA Scripting Support',
      'Web Publishing',
      'Alarm Management'
    ],

    applications: [
      'Process Monitoring',
      'Data Acquisition',
      'Supervisory Control',
      'Equipment Monitoring',
      'Production Management',
      'Quality Assurance'
    ],

    industries: [
      'Chemical & Petrochemical',
      'Power & Utilities',
      'Oil & Gas',
      'Water & Wastewater',
      'Manufacturing',
      'Pulp & Paper'
    ],

    certifications: [
      'CE Certified',
      'UL Listed',
      'IEC 61508 SIL',
      'ISO 9001',
      'NERC CIP Compliant',
      'Cybersecurity Framework'
    ],

    categoryName: 'Automation & Control',
    categoryPath: '/products/automation',
    subcategoryName: 'SCADA'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Network} />;
}