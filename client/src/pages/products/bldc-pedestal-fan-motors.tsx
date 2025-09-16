import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Settings } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';
import { useTranslation } from 'react-i18next';

export default function BLDCPedestalFanMotors() {
  const { t } = useTranslation(['products', 'common', 'products-data']);

  const productData: ProductDetailData = {
    id: 'bldc-pedestal-fan-motors',
    title: t('products-data:bldcTableWallFan.pedestalFan.name'),
    shortDescription: t('products-data:bldcTableWallFan.pedestalFan.description'),
    fullDescription: 'Our BLDC Pedestal Fan Motors offer premium performance with height adjustment and advanced motor technology. Features intelligent controls, LED display, and superior air circulation for versatile cooling solutions in homes, offices, and commercial spaces.',
    image: getProductImageSrc('bldc-table-fan-wall-fan-motor'),
    
    seo: {
      title: 'BLDC Pedestal Fan Motors - Adjustable & Smart | Powerton Engineering',
      description: 'Height-adjustable BLDC Pedestal Fan Motors with LED display, intelligent controls, and superior air circulation performance.',
      keywords: 'BLDC pedestal fan motor, height adjustable fan, smart pedestal fan, LED display fan motor, commercial pedestal fan, intelligent fan',
      canonicalUrl: 'https://powertonengineering.in/products/bldc-pedestal-fan-motors'
    },
    
    categoryName: 'BLDC Products',
    categoryPath: '/products/bldc',
    subcategoryName: 'Pedestal Fan Motors',
    
    keyBenefits: [
      'Height Adjustable',
      'LED Display',
      'Smart Controls',
      'Superior Air Circulation'
    ],
    
    specifications: [
      { label: 'Motor Power', value: '50-75W' },
      { label: 'Speed Rating', value: '1200-1800 RPM' },
      { label: 'Blade Size', value: '16-20 inches' },
      { label: 'Voltage', value: '48V DC' },
      { label: 'Height Range', value: '3-4.5 feet' },
      { label: 'Speed Levels', value: '8 Variable' }
    ],
    
    features: [
      'High-Performance BLDC Motor',
      'Height Adjustment Mechanism',
      'LED Digital Display',
      'Smart Remote Control',
      'Timer & Sleep Mode',
      'Tilt Function',
      'Memory Settings',
      'Safety Auto-Shut Off'
    ],
    
    applications: [
      'Living Rooms',
      'Office Spaces',
      'Conference Rooms',
      'Reception Areas',
      'Showrooms',
      'Waiting Lounges'
    ],
    
    industries: [
      'Home Appliances',
      'Commercial Buildings',
      'Office Furniture',
      'Hospitality Sector',
      'Healthcare Facilities',
      'Educational Institutions'
    ],
    
    certifications: [
      'Premium Quality Certified',
      'ISI Mark',
      'CE Approved',
      'RoHS Compliant',
      'Stability Standards Compliant'
    ],
    
    backButtonLabel: t('common:buttons.backToBldcProducts'),
    downloadButtonLabel: t('common:buttons.downloadGuide')
  };

  return <ProductDetailTemplate product={productData} heroIcon={Settings} />;
}