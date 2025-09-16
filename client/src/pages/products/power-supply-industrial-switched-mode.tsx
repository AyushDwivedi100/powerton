import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Battery } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function PowerSupplyIndustrialSwitchedMode() {
  const productData: ProductDetailData = {
    id: 'power-supply-industrial-switched-mode',
    title: 'Industrial Power Supplies - Switched Mode Technology',
    shortDescription: 'High-efficiency power supplies for industrial automation systems',
    fullDescription: 'Professional switched-mode power supplies designed for industrial automation and control systems. Features high efficiency, wide input voltage range, and robust construction for reliable operation in demanding industrial environments.',
    image: getProductImageSrc('power-supplies'),
    
    seo: {
      title: 'Industrial Switched Mode Power Supplies - Automation Systems',
      description: 'Professional industrial switched-mode power supplies with high efficiency for automation and control systems',
      keywords: 'industrial power supplies, switched mode power supplies, DIN rail power supplies, automation power, SMPS',
      canonicalUrl: '/products/power-supply-industrial-switched-mode'
    },

    keyBenefits: [
      'High Efficiency Operation',
      'Wide Input Voltage Range',
      'Compact DIN Rail Design',
      'Excellent Regulation',
      'Robust Construction',
      'Low Heat Generation'
    ],

    specifications: [
      { label: 'Output Power', value: '15W to 960W' },
      { label: 'Output Voltage', value: '5V, 12V, 24V, 48V DC' },
      { label: 'Input Voltage', value: '85-264V AC worldwide' },
      { label: 'Efficiency', value: 'Up to 96%' },
      { label: 'Operating Temperature', value: '-25°C to +70°C' },
      { label: 'Mounting', value: 'DIN rail 35mm' }
    ],

    features: [
      'Switch Mode Technology',
      'Active Power Factor Correction',
      'Short Circuit Protection',
      'Overvoltage Protection',
      'LED Status Indication',
      'Wide Temperature Range',
      'Low Ripple & Noise',
      'Parallel Operation'
    ],

    applications: [
      'Industrial Automation',
      'PLC Systems',
      'Control Panels',
      'Instrumentation',
      'Machine Control',
      'Building Automation'
    ],

    industries: [
      'Manufacturing',
      'Process Control',
      'Building Automation',
      'Transportation',
      'Energy & Utilities',
      'Machine Building'
    ],

    certifications: [
      'UL Listed',
      'CSA Certified',
      'CE Marked',
      'IEC 61204',
      'Energy Star',
      'RoHS Compliant'
    ],

    categoryName: 'Electrical Components',
    categoryPath: '/products/electrical-components',
    subcategoryName: 'Industrial Power Supplies'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Battery} />;
}