import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Battery } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';
import { useTranslation } from 'react-i18next';

export default function HybridBLDCPumpSystem() {
  const { t } = useTranslation(['products', 'common', 'products-data']);

  const productData: ProductDetailData = {
    id: 'hybrid-bldc-pump-system',
    title: t('products-data:bldcSubmersibleSurface.hybrid.name'),
    shortDescription: t('products-data:bldcSubmersibleSurface.hybrid.description'),
    fullDescription: 'Our Hybrid BLDC Pump System represents the ultimate in intelligent water pumping technology, seamlessly switching between solar power and grid electricity. Features advanced energy management, remote monitoring, and optimized operation for maximum efficiency and reliability.',
    image: getProductImageSrc('bldc-submersible-surface-pump'),
    
    seo: {
      title: 'Hybrid BLDC Pump System - Smart Solar & Grid Backup | Powerton Engineering',
      description: 'Intelligent Hybrid BLDC Pump System with automatic solar/grid switching, energy optimization, and remote monitoring for reliable water pumping.',
      keywords: 'hybrid pump system, solar grid pump, intelligent pump, BLDC hybrid pump, smart water pump, energy management pump',
      canonicalUrl: 'https://powertonengineering.in/products/hybrid-bldc-pump-system'
    },
    
    categoryName: 'BLDC Products',
    categoryPath: '/products/bldc',
    subcategoryName: 'Hybrid Pumping Systems',
    
    keyBenefits: [
      'Dual Power Source',
      'Intelligent Energy Management',
      'Remote Monitoring',
      'Automatic Operation'
    ],
    
    specifications: [
      { label: 'Motor Power', value: '1-3 HP Variable' },
      { label: 'Solar Input', value: '1500-4000W' },
      { label: 'Grid Input', value: '230V AC' },
      { label: 'Flow Rate', value: '2000-20000 LPH' },
      { label: 'Head Range', value: '20-150 feet' },
      { label: 'Efficiency', value: '92%' }
    ],
    
    features: [
      'Intelligent Hybrid Controller',
      'Automatic Solar/Grid Switching',
      'Energy Optimization Algorithm',
      'Remote Monitoring & Control',
      'Weather Adaptive Operation',
      'Battery Backup Compatible',
      'IoT Connectivity',
      'Predictive Maintenance'
    ],
    
    applications: [
      'Smart Agriculture',
      'Commercial Water Supply',
      'Industrial Applications',
      'Residential Complexes',
      'Water Treatment Plants',
      'Emergency Water Systems'
    ],
    
    industries: [
      'Smart Agriculture',
      'Water Management',
      'Industrial Automation',
      'Renewable Energy',
      'IoT Solutions',
      'Sustainable Technology'
    ],
    
    certifications: [
      'Energy Management Certified',
      'ISI Mark',
      'CE Approved',
      'RoHS Compliant',
      'IP65 Rating',
      'IoT Security Certified'
    ],
    
    backButtonLabel: t('common:buttons.backToBldcProducts'),
    downloadButtonLabel: t('common:buttons.downloadGuide')
  };

  return <ProductDetailTemplate product={productData} heroIcon={Battery} />;
}