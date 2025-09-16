import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Sun } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';
import { useTranslation } from 'react-i18next';

export default function SolarBLDCSubmersiblePump1HP() {
  const { t } = useTranslation(['products', 'common', 'products-data']);

  const productData: ProductDetailData = {
    id: 'solar-bldc-submersible-1hp',
    title: t('products-data:bldcSubmersibleSurface.solar1HP.name'),
    shortDescription: t('products-data:bldcSubmersibleSurface.solar1HP.description'),
    fullDescription: 'Our Solar BLDC Submersible Pump 1HP combines renewable solar energy with advanced brushless motor technology for sustainable water pumping solutions. Designed for agricultural irrigation, domestic water supply, and remote water systems with maximum efficiency and reliability.',
    image: getProductImageSrc('bldc-submersible-surface-pump'),
    
    seo: {
      title: 'Solar BLDC Submersible Pump 1HP - Sustainable Water Solutions | Powerton Engineering',
      description: 'Solar-powered BLDC Submersible Pump 1HP for agricultural irrigation and water supply with advanced solar technology and energy efficiency.',
      keywords: 'solar submersible pump, BLDC water pump, solar water pump, 1HP submersible pump, renewable energy pump, agricultural pump',
      canonicalUrl: 'https://powertonengineering.in/products/solar-bldc-submersible-pump-1hp'
    },
    
    categoryName: 'BLDC Products',
    categoryPath: '/products/bldc',
    subcategoryName: 'Solar Pumping Systems',
    
    keyBenefits: [
      '100% Solar Powered',
      'Zero Operating Costs',
      'Environmentally Friendly',
      'Remote Area Compatible'
    ],
    
    specifications: [
      { label: 'Motor Power', value: '1 HP (750W)' },
      { label: 'Solar Panel Requirement', value: '1200W' },
      { label: 'Head Range', value: '50-120 feet' },
      { label: 'Flow Rate', value: '1000-3000 LPH' },
      { label: 'Voltage', value: '48V DC' },
      { label: 'Efficiency', value: '85%' }
    ],
    
    features: [
      'Solar-Compatible BLDC Motor',
      'MPPT Controller Included',
      'Water-Cooled Design',
      'Dry Run Protection',
      'Soft Start Technology',
      'Corrosion-Resistant Materials',
      'Float Switch Compatible',
      'Remote Monitoring System'
    ],
    
    applications: [
      'Agricultural Irrigation',
      'Domestic Water Supply',
      'Livestock Watering',
      'Remote Water Systems',
      'Rural Water Supply',
      'Garden Irrigation'
    ],
    
    industries: [
      'Agriculture & Farming',
      'Rural Development',
      'Water Management',
      'Renewable Energy',
      'Irrigation Systems',
      'Sustainable Technology'
    ],
    
    certifications: [
      'Solar Energy Certified',
      'ISI Mark',
      'CE Approved',
      'RoHS Compliant',
      'IP68 Rating',
      'MNRE Approved'
    ],
    
    backButtonLabel: t('common:buttons.backToBldcProducts'),
    downloadButtonLabel: t('common:buttons.downloadGuide')
  };

  return <ProductDetailTemplate product={productData} heroIcon={Sun} />;
}