import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Cpu } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';
import { useTranslation } from 'react-i18next';

export default function PLCSiemensSimaticS71200() {
  const { t } = useTranslation(['products', 'common', 'products-data']);

  const productData: ProductDetailData = {
    id: 'plc-siemens-simatic-s7-1200',
    title: 'Siemens SIMATIC S7-1200',
    shortDescription: 'Compact modular PLC for small to medium automation applications',
    fullDescription: 'The Siemens SIMATIC S7-1200 is a compact, modular PLC designed for small to medium automation applications. It features integrated digital and analog I/O, multiple communication protocols, and comprehensive programming capabilities with TIA Portal for efficient automation solutions.',
    image: getProductImageSrc('plcs'),
    
    seo: {
      title: 'Siemens SIMATIC S7-1200 PLC - Programmable Logic Controller',
      description: 'High-performance Siemens SIMATIC S7-1200 PLC for industrial automation with integrated I/O and Ethernet connectivity',
      keywords: 'Siemens PLC, SIMATIC S7-1200, programmable logic controller, industrial automation, TIA Portal',
      canonicalUrl: '/products/plc-siemens-simatic-s7-1200'
    },

    keyBenefits: [
      'Integrated Digital and Analog I/O',
      'Built-in Ethernet Communication',
      'TIA Portal Programming Environment',
      'Failsafe Technology Available',
      'Compact Modular Design',
      'Cost-Effective Solution'
    ],

    specifications: [
      { label: 'CPU Performance', value: '0.1 μs/instruction' },
      { label: 'Memory', value: '50 KB work memory' },
      { label: 'Digital I/O', value: 'Up to 1223 points' },
      { label: 'Analog I/O', value: 'Up to 223 channels' },
      { label: 'Communication', value: 'Ethernet, Profinet, Modbus' },
      { label: 'Programming', value: 'TIA Portal, Ladder Logic, FBD' }
    ],

    features: [
      'Integrated Digital and Analog I/O',
      'Built-in Ethernet Communication', 
      'TIA Portal Programming Environment',
      'Failsafe Technology Available',
      'Compact Modular Design',
      'Multiple Communication Protocols'
    ],

    applications: [
      'Manufacturing Automation',
      'Process Control',
      'Material Handling',
      'Machine Control',
      'Building Automation',
      'Water Treatment'
    ],

    industries: [
      'Manufacturing',
      'Automotive',
      'Food & Beverage',
      'Water & Wastewater',
      'Building Management',
      'Energy Management'
    ],

    certifications: [
      'CE Certified',
      'UL Listed',
      'CSA Approved',
      'IEC 61131-3',
      'ATEX Compliant',
      'FCC Class A'
    ],

    categoryName: 'Automation & Control',
    categoryPath: '/products/automation',
    subcategoryName: 'PLCs'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Cpu} />;
}