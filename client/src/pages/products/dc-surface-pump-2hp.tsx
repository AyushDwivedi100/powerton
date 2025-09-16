import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Zap } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';
import { useTranslation } from 'react-i18next';

export default function DCSurfacePump2HP() {
  const { t } = useTranslation(['products', 'common', 'products-data']);

  const productData: ProductDetailData = {
    id: 'dc-surface-pump-2hp',
    title: t('products-data:bldcSubmersibleSurface.surface2HP.name'),
    shortDescription: t('products-data:bldcSubmersibleSurface.surface2HP.description'),
    fullDescription: 'Our DC Surface Pump 2HP delivers powerful water pumping performance with advanced BLDC motor technology. Designed for high-flow irrigation applications, featuring self-priming capability and intelligent protection systems for reliable operation in agricultural and commercial settings.',
    image: getProductImageSrc('bldc-submersible-surface-pump'),
    
    seo: {
      title: 'DC Surface Pump 2HP - High Efficiency Irrigation | Powerton Engineering',
      description: 'High-performance DC Surface Pump 2HP with BLDC motor technology for irrigation, featuring self-priming and variable speed control.',
      keywords: 'DC surface pump, BLDC surface pump, 2HP irrigation pump, self-priming pump, agricultural pump, high efficiency pump',
      canonicalUrl: 'https://powertonengineering.in/products/dc-surface-pump-2hp'
    },
    
    categoryName: 'BLDC Products',
    categoryPath: '/products/bldc',
    subcategoryName: 'Surface Pumping Systems',
    
    keyBenefits: [
      'High Flow Rate',
      'Self-Priming Design',
      'Variable Speed Control',
      'Dry Run Protection'
    ],
    
    specifications: [
      { label: 'Motor Power', value: '2 HP (1500W)' },
      { label: 'Head Range', value: '30-80 feet' },
      { label: 'Flow Rate', value: '5000-15000 LPH' },
      { label: 'Voltage', value: '48V DC' },
      { label: 'Efficiency', value: '88%' },
      { label: 'Suction Head', value: '25 feet' }
    ],
    
    features: [
      'High-Power BLDC Motor',
      'Self-Priming Capability',
      'Variable Speed Drive',
      'Dry Run Protection',
      'Thermal Overload Protection',
      'Stainless Steel Impeller',
      'Cast Iron Volute',
      'Electronic Controller'
    ],
    
    applications: [
      'Agricultural Irrigation',
      'Industrial Water Supply',
      'Commercial Buildings',
      'Fire Fighting Systems',
      'Water Transfer',
      'Pressure Boosting'
    ],
    
    industries: [
      'Agriculture & Irrigation',
      'Industrial Water Systems',
      'Commercial Buildings',
      'Fire Safety Systems',
      'Water Treatment',
      'Construction'
    ],
    
    certifications: [
      'Energy Efficiency Certified',
      'ISI Mark',
      'CE Approved',
      'RoHS Compliant',
      'IP54 Rating'
    ],
    
    backButtonLabel: t('common:buttons.backToBldcProducts'),
    downloadButtonLabel: t('common:buttons.downloadGuide')
  };

  return <ProductDetailTemplate product={productData} heroIcon={Zap} />;
}