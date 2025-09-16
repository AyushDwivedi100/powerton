import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Fan } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';
import { useTranslation } from 'react-i18next';

export default function BLDCTableFanMotors() {
  const { t } = useTranslation(['products', 'common', 'products-data']);

  const productData: ProductDetailData = {
    id: 'bldc-table-fan-motors',
    title: t('products-data:bldcTableWallFan.tableFan.name'),
    shortDescription: t('products-data:bldcTableWallFan.tableFan.description'),
    fullDescription: 'Our BLDC Table Fan Motors deliver exceptional performance in a compact design, perfect for table and desk fans. Features ultra-quiet operation, remote control capability, and energy-efficient technology for personal cooling comfort in homes and offices.',
    image: getProductImageSrc('bldc-table-fan-wall-fan-motor'),
    
    seo: {
      title: 'BLDC Table Fan Motors - Compact & Silent | Powerton Engineering',
      description: 'Compact BLDC Table Fan Motors with silent operation, remote control, and energy efficiency for table and desk fans.',
      keywords: 'BLDC table fan motor, compact fan motor, silent table fan, energy efficient fan motor, desk fan motor, remote control fan',
      canonicalUrl: 'https://powertonengineering.in/products/bldc-table-fan-motors'
    },
    
    categoryName: 'BLDC Products',
    categoryPath: '/products/bldc',
    subcategoryName: 'Personal Fan Motors',
    
    keyBenefits: [
      'Ultra-Compact Design',
      'Silent Operation',
      'Remote Control',
      'Energy Efficient'
    ],
    
    specifications: [
      { label: 'Motor Power', value: '20-35W' },
      { label: 'Speed Rating', value: '1800-2400 RPM' },
      { label: 'Blade Size', value: '12-16 inches' },
      { label: 'Voltage', value: '12V DC' },
      { label: 'Noise Level', value: '<30 dB' },
      { label: 'Speed Levels', value: '5 Variable' }
    ],
    
    features: [
      'Compact BLDC Motor Design',
      'Wireless Remote Control',
      'Timer Function',
      'LED Speed Indicator',
      'Touch Control Panel',
      'Sleep Mode',
      'Memory Function',
      'Oscillation Control'
    ],
    
    applications: [
      'Study Tables',
      'Office Desks',
      'Bedside Tables',
      'Computer Workstations',
      'Study Rooms',
      'Personal Workspaces'
    ],
    
    industries: [
      'Home Appliances',
      'Office Equipment',
      'Educational Furniture',
      'Consumer Electronics',
      'Personal Care',
      'Student Accommodation'
    ],
    
    certifications: [
      'Energy Star Certified',
      'ISI Mark',
      'CE Approved',
      'RoHS Compliant',
      'Low EMI Certified'
    ],
    
    backButtonLabel: t('common:buttons.backToBldcProducts'),
    downloadButtonLabel: t('common:buttons.downloadGuide')
  };

  return <ProductDetailTemplate product={productData} heroIcon={Fan} />;
}