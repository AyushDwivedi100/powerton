import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Cpu } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';
import { useTranslation } from 'react-i18next';

export default function PLCSchneiderElectricModiconM580() {
  const { t } = useTranslation(['products', 'common', 'products-data']);

  const productData: ProductDetailData = {
    id: 'plc-schneider-electric-modicon-m580',
    title: 'Schneider Electric Modicon M580',
    shortDescription: 'Enterprise PLC platform with hot standby redundancy',
    fullDescription: 'The Schneider Electric Modicon M580 is a high-performance PLC platform featuring hot standby redundancy, Ethernet communication, and Unity Pro programming. Designed for mission-critical applications requiring maximum uptime and cybersecurity.',
    image: getProductImageSrc('plcs'),
    
    seo: {
      title: 'Schneider Electric Modicon M580 PLC - High-Performance Controller',
      description: 'Enterprise-grade Schneider Electric Modicon M580 PLC with hot standby redundancy and advanced cybersecurity',
      keywords: 'Schneider Electric PLC, Modicon M580, hot standby PLC, Unity Pro, cybersecurity PLC',
      canonicalUrl: '/products/plc-schneider-electric-modicon-m580'
    },

    keyBenefits: [
      'Hot Standby Redundancy',
      'Ethernet Backbone Architecture',
      'Unity Pro Programming Environment',
      'Advanced Cybersecurity Features',
      'High Availability Design',
      'Scalable Performance'
    ],

    specifications: [
      { label: 'CPU Performance', value: '1 GHz dual-core processor' },
      { label: 'Memory', value: '64 MB application memory' },
      { label: 'I/O Capacity', value: 'Up to 15,000 points' },
      { label: 'Communication', value: 'Ethernet Modbus TCP/IP' },
      { label: 'Redundancy', value: 'Hot standby CPU' },
      { label: 'Programming', value: 'Unity Pro XL' }
    ],

    features: [
      'Hot Standby Redundancy',
      'Ethernet Backbone Architecture',
      'Unity Pro Programming',
      'Advanced Cybersecurity Features',
      'High Availability Design',
      'Scalable Performance'
    ],

    applications: [
      'Process Industries',
      'Critical Infrastructure',
      'Water Treatment',
      'Oil & Gas',
      'Power Generation',
      'Manufacturing'
    ],

    industries: [
      'Oil & Gas',
      'Water & Wastewater',
      'Power & Utilities',
      'Chemical Processing',
      'Mining & Metals',
      'Transportation'
    ],

    certifications: [
      'CE Certified',
      'UL Listed',
      'CSA Approved',
      'IEC 61508 SIL',
      'ATEX Certified',
      'Cybersecurity Certified'
    ],

    categoryName: 'Automation & Control',
    categoryPath: '/products/automation',
    subcategoryName: 'PLCs'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Cpu} />;
}