import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Fan } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';
import { useTranslation } from 'react-i18next';

export default function BLDCCommercialCeilingFan1500() {
  const { t } = useTranslation(['products', 'common', 'products-data']);

  const productData: ProductDetailData = {
    id: 'bldc-commercial1500',
    title: t('products-data:bldcCeilingFan.commercial1500.name'),
    shortDescription: t('products-data:bldcCeilingFan.commercial1500.description'),
    fullDescription: 'Our Commercial BLDC Ceiling Fan 1500 RPM is designed for heavy-duty commercial applications requiring maximum airflow and reliability. Built with industrial-grade components and advanced motor technology to deliver consistent performance in demanding environments while maintaining energy efficiency.',
    image: getProductImageSrc('bldc-ceiling-fan'),
    
    seo: {
      title: 'BLDC Commercial Ceiling Fan 1500 RPM - Heavy Duty | Powerton Engineering',
      description: 'Commercial-grade BLDC Ceiling Fan 1500 RPM designed for heavy-duty applications with maximum airflow and industrial reliability.',
      keywords: 'commercial BLDC ceiling fan, industrial ceiling fan, 1500 RPM fan, heavy duty ceiling fan, commercial grade fan, high airflow',
      canonicalUrl: 'https://powertonengineering.in/products/bldc-commercial-ceiling-fan-1500'
    },
    
    categoryName: 'BLDC Products',
    categoryPath: '/products/bldc',
    subcategoryName: 'Commercial Ceiling Fan Technology',
    
    keyBenefits: [
      'Maximum Airflow Delivery',
      'Industrial-Grade Reliability',
      'Heavy-Duty Construction',
      'Extended Warranty Protection'
    ],
    
    specifications: [
      { label: 'Motor Power', value: '65W' },
      { label: 'Speed Rating', value: '1500 RPM' },
      { label: 'Air Flow', value: '300 CMM' },
      { label: 'Efficiency', value: '4.615 CMM/W' },
      { label: 'Voltage', value: '100-240V AC' },
      { label: 'Warranty', value: '7 Years' }
    ],
    
    features: [
      'Heavy-Duty BLDC Motor',
      'Reinforced Motor Housing',
      'Commercial-Grade Bearings',
      'High-Strength Metal Blades',
      'Continuous Operation Rating',
      'Vibration-Free Design',
      'Corrosion-Resistant Finish',
      'Industrial Remote Control'
    ],
    
    applications: [
      'Commercial Buildings',
      'Industrial Facilities',
      'Large Office Spaces',
      'Retail Showrooms',
      'Warehouses',
      'Manufacturing Plants'
    ],
    
    industries: [
      'Commercial Real Estate',
      'Industrial Manufacturing',
      'Retail & Shopping',
      'Warehousing & Logistics',
      'Commercial Hospitality',
      'Educational Institutions'
    ],
    
    certifications: [
      'Energy Star Certified',
      'ISI Mark',
      'CE Approved',
      'RoHS Compliant',
      'BEE 5 Star Rating',
      'Commercial Grade Certified'
    ],
    
    backButtonLabel: t('common:buttons.backToBldcProducts'),
    downloadButtonLabel: t('common:buttons.downloadGuide')
  };

  return <ProductDetailTemplate product={productData} heroIcon={Fan} />;
}