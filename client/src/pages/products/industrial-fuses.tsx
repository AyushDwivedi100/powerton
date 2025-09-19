import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Shield } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';
import { useTranslation } from 'react-i18next';

export default function IndustrialFuses() {
  const { t } = useTranslation(['products', 'common']);

  const productData: ProductDetailData = {
    id: 'industrial-fuses',
    title: 'Industrial Fuses - HRC Protection Systems',
    shortDescription: 'High-rupturing capacity fuses for industrial electrical protection',
    fullDescription: 'Professional HRC (High Rupturing Capacity) fuses designed for industrial electrical protection applications. Features superior arc-quenching capability, high breaking capacity, and reliable overcurrent protection for critical electrical systems.',
    image: getProductImageSrc('circuit-breakers-fuses'),
    
    seo: {
      title: 'Industrial HRC Fuses - High Rupturing Capacity Protection | Powerton Engineering',
      description: 'Professional HRC industrial fuses with high breaking capacity for reliable overcurrent protection in industrial applications.',
      keywords: 'industrial fuses, HRC fuses, high rupturing capacity, overcurrent protection, electrical protection, power fuses',
      canonicalUrl: 'https://powertonengineering.in/products/industrial-fuses'
    },
    
    categoryName: 'Electrical Components',
    categoryPath: '/products/electrical-components',
    subcategoryName: 'Industrial Fuses',
    
    keyBenefits: [
      'High Rupturing Capacity',
      'Superior Arc Quenching',
      'Fast Acting Protection',
      'Wide Current Range',
      'Long Service Life',
      'High Voltage Capability'
    ],
    
    specifications: [
      { label: 'Fuse Type', value: 'HRC Fuses' },
      { label: 'Current Range', value: '2A - 800A' },
      { label: 'Voltage Rating', value: '415V - 11kV' },
      { label: 'Breaking Capacity', value: '80kA' },
      { label: 'Standard', value: 'IEC 60269' },
      { label: 'Time Characteristics', value: 'gG, aM, gR' }
    ],
    
    features: [
      'Ceramic Body Construction',
      'Silver Sand Arc-Quenching',
      'High Breaking Capacity',
      'Current Limiting Action',
      'Dual Element Design',
      'Indicator Options',
      'Multiple Time Characteristics',
      'Temperature Stable'
    ],
    
    applications: [
      'Motor Protection',
      'Power Distribution',
      'Transformer Protection',
      'Generator Protection',
      'Industrial Feeders',
      'Renewable Energy Systems'
    ],
    
    industries: [
      'Power Generation',
      'Manufacturing',
      'Mining',
      'Oil & Gas',
      'Marine Applications',
      'Data Centers'
    ],
    
    certifications: [
      'IEC 60269 Compliant',
      'UL Listed',
      'CE Marked',
      'CSA Approved',
      'VDE Tested',
      'KEMA Certified'
    ],
    
    backButtonLabel: 'Back to Electrical Components'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Shield} />;
}