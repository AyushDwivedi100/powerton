import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Wind } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';
import { useTranslation } from 'react-i18next';

export default function BLDCVentilationSystem() {
  const { t } = useTranslation(['products', 'common']);

  const productData: ProductDetailData = {
    id: 'bldc-ventilation',
    title: 'BLDC Ventilation Motors - High-Efficiency Air Movement',
    shortDescription: 'Advanced BLDC ventilation systems for industrial and commercial air circulation',
    fullDescription: 'High-performance BLDC ventilation motors designed for industrial and commercial air circulation applications. Features advanced brushless DC technology with superior energy efficiency, variable speed control, and robust construction for continuous operation in demanding environments.',
    image: getProductImageSrc('bldc-cooler-exhaust-motor'),
    
    seo: {
      title: 'BLDC Ventilation Motors - Industrial Air Circulation Systems | Powerton Engineering',
      description: 'High-efficiency BLDC ventilation motors with variable speed control for industrial and commercial air circulation applications.',
      keywords: 'BLDC ventilation motors, industrial ventilation, air circulation, brushless DC motors, energy efficient ventilation',
      canonicalUrl: 'https://powertonengineering.in/products/bldc-ventilation-system'
    },
    
    categoryName: 'BLDC Products',
    categoryPath: '/products/bldc',
    subcategoryName: 'BLDC Ventilation Systems',
    
    keyBenefits: [
      'High Energy Efficiency (92%)',
      'Variable Speed Control',
      'Continuous Operation Rating',
      'Low Noise Operation',
      'Maintenance-Free Design',
      'Advanced Motor Protection'
    ],
    
    specifications: [
      { label: 'Motor Power', value: '75W' },
      { label: 'Speed Rating', value: '2400 RPM' },
      { label: 'Air Flow', value: '800 CFM' },
      { label: 'Supply Voltage', value: '48V DC' },
      { label: 'Efficiency', value: '92%' },
      { label: 'Protection Rating', value: 'IP54' }
    ],
    
    features: [
      'Brushless DC Technology',
      'Electronic Speed Control',
      'Soft Start Function',
      'Overload Protection',
      'Temperature Monitoring',
      'Remote Control Ready',
      'Variable Airflow Control',
      'Energy-Efficient Design'
    ],
    
    applications: [
      'Industrial Ventilation',
      'Commercial HVAC Systems',
      'Warehouse Air Circulation',
      'Manufacturing Plant Ventilation',
      'Data Center Cooling',
      'Clean Room Applications'
    ],
    
    industries: [
      'Manufacturing',
      'Commercial Buildings',
      'Data Centers',
      'Warehousing',
      'Healthcare Facilities',
      'Clean Room Technology'
    ],
    
    certifications: [
      'Energy Star Certified',
      'CE Marked',
      'RoHS Compliant',
      'IP54 Rated',
      'UL Listed',
      'CSA Approved'
    ],
    
    backButtonLabel: t('common:buttons.backToBldcProducts')
  };

  return <ProductDetailTemplate product={productData} heroIcon={Wind} />;
}