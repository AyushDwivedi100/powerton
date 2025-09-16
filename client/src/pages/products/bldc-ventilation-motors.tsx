import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Wind } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';
import { useTranslation } from 'react-i18next';

export default function BLDCVentilationMotors() {
  const { t } = useTranslation(['products', 'common', 'products-data']);

  const productData: ProductDetailData = {
    id: 'bldc-ventilation',
    title: t('products-data:bldcCoolerExhaust.ventilation.name'),
    shortDescription: t('products-data:bldcCoolerExhaust.ventilation.description'),
    fullDescription: 'Our BLDC Ventilation Motors deliver superior air circulation and ventilation performance with intelligent control systems. Designed for commercial and industrial ventilation applications requiring precise airflow management and energy-efficient operation.',
    image: getProductImageSrc('bldc-cooler-exhaust-motor'),
    
    seo: {
      title: 'BLDC Ventilation Motors - Smart Air Circulation | Powerton Engineering',
      description: 'Advanced BLDC Ventilation Motors for commercial and industrial applications with intelligent control and energy-efficient air circulation.',
      keywords: 'BLDC ventilation motor, commercial ventilation, industrial air circulation, smart ventilation, energy efficient HVAC, brushless ventilation',
      canonicalUrl: 'https://powertonengineering.in/products/bldc-ventilation-motors'
    },
    
    categoryName: 'BLDC Products',
    categoryPath: '/products/bldc',
    subcategoryName: 'Ventilation System Motors',
    
    keyBenefits: [
      'Intelligent Airflow Control',
      'Energy Efficient Design',
      'Low Maintenance',
      'Precise Speed Regulation'
    ],
    
    specifications: [
      { label: 'Motor Power', value: '60W' },
      { label: 'Speed Rating', value: '2200 RPM' },
      { label: 'Air Flow', value: '500 CFM' },
      { label: 'Voltage', value: '12-48V DC' },
      { label: 'Efficiency', value: '90%' },
      { label: 'Control Type', value: 'PWM Variable Speed' }
    ],
    
    features: [
      'Advanced BLDC Motor Technology',
      'Intelligent Speed Control',
      'Air Quality Sensor Integration',
      'Remote Monitoring Capability',
      'Energy Recovery System',
      'Weather-Resistant Housing',
      'Programmable Timer Functions',
      'Fault Detection System'
    ],
    
    applications: [
      'Commercial Ventilation',
      'Industrial Air Circulation',
      'HVAC Systems',
      'Clean Room Ventilation',
      'Server Room Cooling',
      'Warehouse Ventilation'
    ],
    
    industries: [
      'Commercial HVAC',
      'Industrial Manufacturing',
      'Data Centers',
      'Healthcare Facilities',
      'Pharmaceutical Manufacturing',
      'Food Processing'
    ],
    
    certifications: [
      'Energy Star Certified',
      'ISI Mark',
      'CE Approved',
      'RoHS Compliant',
      'IP67 Rating',
      'HVAC Industry Certified'
    ],
    
    backButtonLabel: t('common:buttons.backToBldcProducts'),
    downloadButtonLabel: t('common:buttons.downloadGuide')
  };

  return <ProductDetailTemplate product={productData} heroIcon={Wind} />;
}