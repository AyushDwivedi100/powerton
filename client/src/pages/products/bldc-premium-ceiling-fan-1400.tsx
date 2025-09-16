import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Fan } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';
import { useTranslation } from 'react-i18next';

export default function BLDCPremiumCeilingFan1400() {
  const { t } = useTranslation(['products', 'common', 'products-data']);

  const productData: ProductDetailData = {
    id: 'bldc-premium1400',
    title: t('products-data:bldcCeilingFan.premium1400.name'),
    shortDescription: t('products-data:bldcCeilingFan.premium1400.description'),
    fullDescription: 'The Premium BLDC Ceiling Fan 1400 RPM represents the pinnacle of ceiling fan technology with advanced features and superior build quality. Engineered for enhanced performance with higher airflow delivery while maintaining exceptional energy efficiency for premium residential and commercial applications.',
    image: getProductImageSrc('bldc-ceiling-fan'),
    
    seo: {
      title: 'BLDC Premium Ceiling Fan 1400 RPM - Advanced Features | Powerton Engineering',
      description: 'Premium BLDC Ceiling Fan 1400 RPM with advanced smart features, superior airflow, and energy-efficient brushless motor technology.',
      keywords: 'premium BLDC ceiling fan, 1400 RPM ceiling fan, advanced ceiling fan, smart ceiling fan, high airflow fan, energy efficient',
      canonicalUrl: 'https://powertonengineering.in/products/bldc-premium-ceiling-fan-1400'
    },
    
    categoryName: 'BLDC Products',
    categoryPath: '/products/bldc',
    subcategoryName: 'Premium Ceiling Fan Technology',
    
    keyBenefits: [
      'Superior Airflow Performance',
      'Advanced Smart Controls',
      'Premium Build Quality',
      'Extended Warranty Coverage'
    ],
    
    specifications: [
      { label: 'Motor Power', value: '55W' },
      { label: 'Speed Rating', value: '1400 RPM' },
      { label: 'Air Flow', value: '250 CMM' },
      { label: 'Efficiency', value: '4.545 CMM/W' },
      { label: 'Voltage', value: '100-240V AC' },
      { label: 'Warranty', value: '5 Years' }
    ],
    
    features: [
      'High-Performance BLDC Motor',
      'Smart WiFi Connectivity',
      'Mobile App Control',
      'Voice Assistant Compatible',
      'Premium Remote Control',
      'Aerodynamic High-Efficiency Blades',
      'Anti-Dust Coating',
      'Temperature Sensor Integration'
    ],
    
    applications: [
      'Premium Residential Spaces',
      'Master Bedrooms',
      'Large Living Areas',
      'Executive Offices',
      'Conference Rooms',
      'Luxury Hotels'
    ],
    
    industries: [
      'Premium Residential',
      'Luxury Hospitality',
      'Corporate Offices',
      'High-End Retail',
      'Premium Healthcare',
      'Upscale Educational'
    ],
    
    certifications: [
      'Energy Star Certified',
      'ISI Mark',
      'CE Approved',
      'RoHS Compliant',
      'BEE 5 Star Rating',
      'WiFi Alliance Certified'
    ],
    
    backButtonLabel: t('common:buttons.backToBldcProducts'),
    downloadButtonLabel: t('common:buttons.downloadGuide')
  };

  return <ProductDetailTemplate product={productData} heroIcon={Fan} />;
}