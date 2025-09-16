import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Monitor } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function HMIOperatorInterfaceStation() {
  const productData: ProductDetailData = {
    id: 'hmi-operator-interface-station',
    title: 'Operator Interface Station',
    shortDescription: 'Advanced operator workstations for process control',
    fullDescription: 'Professional operator interface stations with high-resolution displays, multi-protocol support, and advanced data analysis capabilities. Engineered for mission-critical control room applications with ergonomic design and reliable performance.',
    image: getProductImageSrc('hmi'),
    
    seo: {
      title: 'Operator Interface Station - Advanced HMI Workstation',
      description: 'Professional operator interface stations with high-resolution displays for advanced process control and monitoring',
      keywords: 'operator interface, HMI workstation, process control, control room, SCADA operator station',
      canonicalUrl: '/products/hmi-operator-interface-station'
    },

    keyBenefits: [
      'High-Resolution Display',
      'Multi-protocol Support',
      'Historical Trending',
      'Advanced Report Generation',
      'Ergonomic Design',
      'Redundant Communication'
    ],

    specifications: [
      { label: 'Display Type', value: '24" to 32" LED/LCD' },
      { label: 'Resolution', value: '1920x1080 to 4K UHD' },
      { label: 'CPU', value: 'Intel Core i5/i7 Industrial PC' },
      { label: 'Memory', value: '8GB to 32GB RAM' },
      { label: 'Storage', value: 'SSD 256GB to 1TB' },
      { label: 'Operating System', value: 'Windows 10 IoT/Linux' }
    ],

    features: [
      'High-Resolution Display',
      'Multi-protocol Communication',
      'Historical Data Trending',
      'Comprehensive Report Generation',
      'User Management System',
      'Alarm Acknowledgment',
      'Recipe Management',
      'Backup & Recovery'
    ],

    applications: [
      'Control Room Operations',
      'Process Supervision',
      'Production Management',
      'Quality Monitoring',
      'Asset Management',
      'Performance Analysis'
    ],

    industries: [
      'Oil & Gas',
      'Power Generation',
      'Chemical Processing',
      'Water & Wastewater',
      'Mining & Metals',
      'Pulp & Paper'
    ],

    certifications: [
      'CE Certified',
      'UL Listed',
      'FCC Class A',
      'NEMA 4X Available',
      'IEC 61508 SIL',
      'ISO 27001'
    ],

    categoryName: 'Automation & Control',
    categoryPath: '/products/automation',
    subcategoryName: 'HMI'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Monitor} />;
}