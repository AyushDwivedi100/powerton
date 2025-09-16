import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Fan } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';
import { useTranslation } from 'react-i18next';

export default function BLDCSmartCeilingFan1200() {
  const { t } = useTranslation(['products', 'common', 'products-data']);

  const productData: ProductDetailData = {
    id: 'bldc-smart1200',
    title: t('products-data:bldcCeilingFan.smart1200.name'),
    shortDescription: t('products-data:bldcCeilingFan.smart1200.description'),
    fullDescription: 'Our Smart BLDC Ceiling Fan 1200 RPM combines cutting-edge brushless DC motor technology with intelligent features for optimal energy efficiency and comfort. Designed for residential and light commercial applications, this fan delivers superior performance while consuming up to 65% less energy than traditional fans.',
    image: getProductImageSrc('bldc-ceiling-fan'),
    
    seo: {
      title: 'BLDC Smart Ceiling Fan 1200 RPM - Energy Efficient | Powerton Engineering',
      description: 'High-efficiency BLDC Smart Ceiling Fan 1200 RPM with remote control, timer function, and energy-saving technology. Perfect for homes and offices.',
      keywords: 'BLDC ceiling fan, smart ceiling fan, energy efficient fan, 1200 RPM ceiling fan, brushless DC motor fan, remote control fan',
      canonicalUrl: 'https://powertonengineering.in/products/bldc-smart-ceiling-fan-1200'
    },
    
    categoryName: 'BLDC Products',
    categoryPath: '/products/bldc',
    subcategoryName: 'Smart Ceiling Fan Technology',
    
    keyBenefits: [
      'Up to 65% Energy Savings',
      'Smart Remote Control',
      'Silent Operation',
      'Long Service Life'
    ],
    
    specifications: [
      { label: 'Motor Power', value: '48W' },
      { label: 'Speed Rating', value: '1200 RPM' },
      { label: 'Air Flow', value: '210 CMM' },
      { label: 'Efficiency', value: '4.375 CMM/W' },
      { label: 'Voltage', value: '100-240V AC' },
      { label: 'Warranty', value: '3 Years' }
    ],
    
    features: [
      'Brushless DC Motor Technology',
      'Smart Remote Control with Timer',
      'Variable Speed Control',
      'Reverse Direction Feature',
      'LED Indicator Display',
      'Energy Star Rated',
      'Copper Winding Motor',
      'Aerodynamic Blade Design'
    ],
    
    applications: [
      'Residential Bedrooms',
      'Living Rooms',
      'Office Spaces',
      'Study Rooms',
      'Guest Rooms',
      'Small Commercial Spaces'
    ],
    
    industries: [
      'Residential Construction',
      'Interior Design',
      'Hospitality',
      'Office Buildings',
      'Educational Institutions',
      'Healthcare Facilities'
    ],
    
    certifications: [
      'Energy Star Certified',
      'ISI Mark',
      'CE Approved',
      'RoHS Compliant',
      'BEE 5 Star Rating'
    ],
    
    backButtonLabel: t('common:buttons.backToBldcProducts'),
    downloadButtonLabel: t('common:buttons.downloadGuide')
  };

  return <ProductDetailTemplate product={productData} heroIcon={Fan} />;
}