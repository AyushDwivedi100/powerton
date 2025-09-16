import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Wind } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';
import { useTranslation } from 'react-i18next';

export default function BLDCWallFanMotors() {
  const { t } = useTranslation(['products', 'common', 'products-data']);

  const productData: ProductDetailData = {
    id: 'bldc-wall-fan-motors',
    title: t('products-data:bldcTableWallFan.wallFan.name'),
    shortDescription: t('products-data:bldcTableWallFan.wallFan.description'),
    fullDescription: 'Our BLDC Wall Fan Motors combine space-saving wall-mount design with advanced brushless motor technology. Features oscillating function, multi-speed control, and energy-efficient operation for effective air circulation in residential and commercial spaces.',
    image: getProductImageSrc('bldc-table-fan-wall-fan-motor'),
    
    seo: {
      title: 'BLDC Wall Fan Motors - Space-Saving & Efficient | Powerton Engineering',
      description: 'Wall-mounted BLDC Fan Motors with oscillating function, speed control, and energy-efficient operation for effective air circulation.',
      keywords: 'BLDC wall fan motor, wall mounted fan, oscillating wall fan, space saving fan motor, energy efficient wall fan, commercial wall fan',
      canonicalUrl: 'https://powertonengineering.in/products/bldc-wall-fan-motors'
    },
    
    categoryName: 'BLDC Products',
    categoryPath: '/products/bldc',
    subcategoryName: 'Wall-Mounted Fan Motors',
    
    keyBenefits: [
      'Space-Saving Design',
      'Oscillating Function',
      'Multi-Speed Control',
      'Easy Installation'
    ],
    
    specifications: [
      { label: 'Motor Power', value: '40-60W' },
      { label: 'Speed Rating', value: '1400-2000 RPM' },
      { label: 'Blade Size', value: '16-20 inches' },
      { label: 'Voltage', value: '24V DC' },
      { label: 'Oscillation Angle', value: '90-180 degrees' },
      { label: 'Speed Levels', value: '6 Variable' }
    ],
    
    features: [
      'Wall-Mount BLDC Motor',
      'Horizontal Oscillation',
      'Remote Control Operation',
      'Digital Display Panel',
      'Timer Function',
      'Pull Cord Control',
      'Adjustable Tilt Angle',
      'Safety Guard Protection'
    ],
    
    applications: [
      'Residential Wall Mounting',
      'Office Spaces',
      'Commercial Buildings',
      'Workshops',
      'Retail Stores',
      'Waiting Areas'
    ],
    
    industries: [
      'Residential Construction',
      'Commercial Buildings',
      'Retail & Hospitality',
      'Office Environments',
      'Industrial Facilities',
      'Public Spaces'
    ],
    
    certifications: [
      'Wall Mount Safety Certified',
      'ISI Mark',
      'CE Approved',
      'RoHS Compliant',
      'Safety Standards Compliant'
    ],
    
    backButtonLabel: t('common:buttons.backToBldcProducts'),
    downloadButtonLabel: t('common:buttons.downloadGuide')
  };

  return <ProductDetailTemplate product={productData} heroIcon={Wind} />;
}