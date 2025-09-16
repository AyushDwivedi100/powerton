import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Fan } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';
import { useTranslation } from 'react-i18next';

export default function BLDCCoolerMotors() {
  const { t } = useTranslation(['products', 'common', 'products-data']);

  const productData: ProductDetailData = {
    id: 'bldc-cooler-motors',
    title: t('products-data:bldcCoolerExhaust.coolerMotors.name'),
    shortDescription: t('products-data:bldcCoolerExhaust.coolerMotors.description'),
    fullDescription: 'Our BLDC Cooler Motors provide efficient cooling solutions with advanced brushless technology for air coolers and cooling systems. Engineered for continuous operation with variable speed control and superior energy efficiency for residential and commercial cooling applications.',
    image: getProductImageSrc('bldc-cooler-exhaust-motor'),
    
    seo: {
      title: 'BLDC Cooler Motors - Energy Efficient Cooling | Powerton Engineering',
      description: 'High-performance BLDC Cooler Motors for air coolers with variable speed control, energy efficiency, and reliable cooling performance.',
      keywords: 'BLDC cooler motor, energy efficient cooler, air cooler motor, variable speed cooler, brushless cooling motor, BLDC technology',
      canonicalUrl: 'https://powertonengineering.in/products/bldc-cooler-motors'
    },
    
    categoryName: 'BLDC Products',
    categoryPath: '/products/bldc',
    subcategoryName: 'Cooling System Motors',
    
    keyBenefits: [
      'Variable Speed Control',
      'Energy Efficient Operation',
      'Quiet Performance',
      'Long Service Life'
    ],
    
    specifications: [
      { label: 'Motor Power', value: '45W' },
      { label: 'Speed Rating', value: '1800 RPM' },
      { label: 'Air Flow', value: '400 CFM' },
      { label: 'Voltage', value: '24V DC' },
      { label: 'Efficiency', value: '88%' },
      { label: 'Speed Control', value: 'Variable 0-100%' }
    ],
    
    features: [
      'Brushless DC Motor Technology',
      'Variable Speed Drive',
      'Thermal Protection',
      'Reverse Direction Capability',
      'Remote Control Compatible',
      'Water-Resistant Design',
      'Low Vibration Operation',
      'Smart Temperature Control'
    ],
    
    applications: [
      'Desert Air Coolers',
      'Evaporative Coolers',
      'Industrial Cooling',
      'Commercial Coolers',
      'Outdoor Cooling Systems',
      'Greenhouse Cooling'
    ],
    
    industries: [
      'HVAC Systems',
      'Industrial Cooling',
      'Agricultural Applications',
      'Commercial Buildings',
      'Outdoor Events',
      'Manufacturing Facilities'
    ],
    
    certifications: [
      'Energy Star Certified',
      'ISI Mark',
      'CE Approved',
      'RoHS Compliant',
      'IP54 Rating'
    ],
    
    backButtonLabel: t('common:buttons.backToBldcProducts'),
    downloadButtonLabel: t('common:buttons.downloadGuide')
  };

  return <ProductDetailTemplate product={productData} heroIcon={Fan} />;
}