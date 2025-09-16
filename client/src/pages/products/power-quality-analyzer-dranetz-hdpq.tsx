import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { TrendingUp } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function PowerQualityAnalyzerDranetzHDPQ() {
  const productData: ProductDetailData = {
    id: 'power-quality-analyzer-dranetz-hdpq',
    title: 'Dranetz HDPQ Xplorer Power Quality Monitor',
    shortDescription: 'Advanced power quality monitoring system for continuous surveillance',
    fullDescription: 'Professional power quality monitoring system providing continuous monitoring, event recording, compliance testing, and remote access capabilities. Features advanced algorithms, comprehensive data analysis, and enterprise-level monitoring for critical electrical infrastructure.',
    image: getProductImageSrc('power-quality-analyzers'),
    
    seo: {
      title: 'Dranetz HDPQ Xplorer - Advanced Power Quality Monitoring System',
      description: 'Professional Dranetz HDPQ Xplorer power quality monitor for continuous surveillance and compliance testing',
      keywords: 'Dranetz HDPQ, power quality monitor, continuous monitoring, event recording, compliance testing, remote access',
      canonicalUrl: '/products/power-quality-analyzer-dranetz-hdpq'
    },

    keyBenefits: [
      'Continuous Monitoring',
      'Advanced Event Recording',
      'Remote Access Capability',
      'Compliance Testing',
      'Enterprise Integration',
      'Sophisticated Analysis'
    ],

    specifications: [
      { label: 'Voltage Inputs', value: '8 differential inputs' },
      { label: 'Current Inputs', value: '4 current inputs' },
      { label: 'Sampling Rate', value: '1024 samples/cycle' },
      { label: 'Frequency Range', value: '16 Hz to 3 kHz' },
      { label: 'Memory', value: '16 GB storage' },
      { label: 'Communication', value: 'Ethernet, WiFi, Cellular' }
    ],

    features: [
      'Continuous Monitoring',
      'Event Recording',
      'Compliance Testing',
      'Remote Access',
      'Web-based Interface',
      'GPS Time Synchronization',
      'Multiple Communication Options',
      'Advanced Triggering'
    ],

    applications: [
      'Utility Substation Monitoring',
      'Industrial Power Systems',
      'Data Center Power Quality',
      'Renewable Energy Integration',
      'Critical Facility Monitoring',
      'Power System Studies'
    ],

    industries: [
      'Electric Utilities',
      'Industrial Manufacturing',
      'Data Centers',
      'Healthcare Systems',
      'Government Facilities',
      'Critical Infrastructure'
    ],

    certifications: [
      'IEC 61000-4-30 Class A',
      'IEEE 1159',
      'IEC 61000-4-15',
      'CE Certified',
      'FCC Part 15',
      'NERC CIP Compliant'
    ],

    categoryName: 'Instrumentation',
    categoryPath: '/products/instrumentation',
    subcategoryName: 'Power Quality Analyzers'
  };

  return <ProductDetailTemplate product={productData} heroIcon={TrendingUp} />;
}