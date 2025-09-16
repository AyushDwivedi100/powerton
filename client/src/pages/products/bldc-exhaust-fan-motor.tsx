import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Wind } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';
import { useTranslation } from 'react-i18next';

export default function BLDCExhaustFanMotor() {
  const { t } = useTranslation(['products', 'common', 'products-data']);

  const productData: ProductDetailData = {
    id: 'bldc-exhaust-fan',
    title: t('products-data:bldcCoolerExhaust.exhaustFan.name'),
    shortDescription: t('products-data:bldcCoolerExhaust.exhaustFan.description'),
    fullDescription: 'Our BLDC Exhaust Fan Motor delivers superior ventilation performance with ultra-quiet operation and exceptional energy efficiency. Designed for residential and commercial exhaust applications, featuring advanced motor control for optimal airflow management and extended service life.',
    image: getProductImageSrc('bldc-cooler-exhaust-motor'),
    
    seo: {
      title: 'BLDC Exhaust Fan Motor - Silent & Efficient Ventilation | Powerton Engineering',
      description: 'High-performance BLDC Exhaust Fan Motor with silent operation, energy efficiency, and reliable ventilation for bathrooms, kitchens, and commercial spaces.',
      keywords: 'BLDC exhaust fan, silent exhaust fan, energy efficient ventilation, bathroom exhaust fan, kitchen exhaust fan, BLDC motor',
      canonicalUrl: 'https://powertonengineering.in/products/bldc-exhaust-fan-motor'
    },
    
    categoryName: 'BLDC Products',
    categoryPath: '/products/bldc',
    subcategoryName: 'Exhaust Ventilation Systems',
    
    keyBenefits: [
      'Ultra-Silent Operation',
      'Superior Energy Efficiency',
      'Extended Motor Life',
      'Compact Design'
    ],
    
    specifications: [
      { label: 'Motor Power', value: '25W' },
      { label: 'Speed Rating', value: '2800 RPM' },
      { label: 'Air Flow', value: '150 CFM' },
      { label: 'Voltage', value: '12V DC' },
      { label: 'Efficiency', value: '85%' },
      { label: 'Noise Level', value: '<25 dB' }
    ],
    
    features: [
      'Brushless DC Motor Technology',
      'Variable Speed Control',
      'Automatic Humidity Sensor',
      'Timer Functionality',
      'Backdraft Damper',
      'Low Maintenance Design',
      'Corrosion-Resistant Housing',
      'Easy Installation System'
    ],
    
    applications: [
      'Bathroom Ventilation',
      'Kitchen Exhaust',
      'Utility Room Ventilation',
      'Commercial Restrooms',
      'Server Room Cooling',
      'Workshop Ventilation'
    ],
    
    industries: [
      'Residential Construction',
      'Commercial Buildings',
      'Hospitality Sector',
      'Healthcare Facilities',
      'Educational Buildings',
      'Industrial Facilities'
    ],
    
    certifications: [
      'Energy Star Certified',
      'ISI Mark',
      'CE Approved',
      'RoHS Compliant',
      'IP65 Rating'
    ],
    
    backButtonLabel: t('common:buttons.backToBldcProducts'),
    downloadButtonLabel: t('common:buttons.downloadGuide')
  };

  return <ProductDetailTemplate product={productData} heroIcon={Wind} />;
}