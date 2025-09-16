import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Monitor } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function HMIPanelMount() {
  const productData: ProductDetailData = {
    id: 'hmi-panel-mount',
    title: 'Panel Mount HMI',
    shortDescription: 'Industrial touchscreen panels for process visualization',
    fullDescription: 'Advanced panel mount HMI systems featuring multi-touch capacitive displays, web-based configuration, and comprehensive alarm management. Designed for industrial environments with rugged construction and intuitive operator interfaces.',
    image: getProductImageSrc('hmi'),
    
    seo: {
      title: 'Panel Mount HMI - Industrial Touchscreen Interface',
      description: 'Professional panel mount HMI systems with multi-touch displays for industrial process visualization and control',
      keywords: 'panel mount HMI, industrial touchscreen, process visualization, operator interface, SCADA display',
      canonicalUrl: '/products/hmi-panel-mount'
    },

    keyBenefits: [
      'Multi-touch Capacitive Display',
      'Web-based Configuration',
      'Comprehensive Alarm Management',
      'Real-time Data Logging',
      'Rugged Industrial Design',
      'Multi-protocol Support'
    ],

    specifications: [
      { label: 'Display Size', value: '7" to 21.5" TFT LCD' },
      { label: 'Resolution', value: 'Up to 1920x1080 Full HD' },
      { label: 'Touch Technology', value: 'Projected Capacitive Multi-touch' },
      { label: 'Operating Temperature', value: '-10°C to +60°C' },
      { label: 'Protection Rating', value: 'IP65 front panel' },
      { label: 'Communication', value: 'Ethernet, RS232/485, USB' }
    ],

    features: [
      'Multi-touch Capacitive Display',
      'Web-based Configuration Tools',
      'Alarm Management System',
      'Historical Data Logging',
      'Recipe Management',
      'Multi-language Support',
      'VNC Remote Access',
      'Modular I/O Expansion'
    ],

    applications: [
      'Manufacturing Control',
      'Process Monitoring',
      'Machine Operation',
      'Quality Control',
      'Production Planning',
      'Equipment Status Display'
    ],

    industries: [
      'Manufacturing',
      'Food & Beverage',
      'Pharmaceutical',
      'Automotive',
      'Chemical Processing',
      'Water Treatment'
    ],

    certifications: [
      'CE Certified',
      'UL Listed',
      'FCC Class A',
      'IP65 Rating',
      'ATEX Compliant',
      'ISO 9001'
    ],

    categoryName: 'Automation & Control',
    categoryPath: '/products/automation',
    subcategoryName: 'HMI'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Monitor} />;
}