import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Monitor } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function EnclosureControlPanelCabinets() {
  const productData: ProductDetailData = {
    id: 'enclosure-control-panel-cabinets',
    title: 'Control Panel Cabinets - Industrial System Housing',
    shortDescription: 'Comprehensive cabinets for control system installations',
    fullDescription: 'Professional control panel cabinets designed for comprehensive housing of industrial control systems, PLCs, and instrumentation. Features modular design, cable management systems, and thermal management options for optimal system performance.',
    image: getProductImageSrc('control-panel-cabinets'),
    
    seo: {
      title: 'Control Panel Cabinets - Industrial System Housing Solutions',
      description: 'Professional control panel cabinets for industrial control systems with modular design and comprehensive cable management',
      keywords: 'control panel cabinets, industrial cabinets, PLC cabinets, control system housing, electrical cabinets, instrumentation cabinets',
      canonicalUrl: '/products/enclosure-control-panel-cabinets'
    },

    keyBenefits: [
      'Modular Design System',
      'Comprehensive Cable Management',
      'Thermal Management Options',
      'Easy System Integration',
      'Professional Appearance',
      'Scalable Configuration'
    ],

    specifications: [
      { label: 'Cabinet Types', value: 'Floor, Wall, Desk Mount' },
      { label: 'Height Range', value: '600mm to 2200mm' },
      { label: 'Width Range', value: '400mm to 1200mm' },
      { label: 'Depth Range', value: '200mm to 800mm' },
      { label: 'Load Capacity', value: 'Up to 1000kg' },
      { label: 'Protection Rating', value: 'IP30 to IP55' }
    ],

    features: [
      'Adjustable Mounting Rails',
      'Cable Management System',
      'Ventilation Options',
      'Locking Mechanisms',
      'Transparent Doors',
      'Interior Lighting',
      'Modular Accessories',
      'Custom Configurations'
    ],

    applications: [
      'PLC System Housing',
      'Instrumentation Panels',
      'Motor Control Centers',
      'SCADA Systems',
      'Process Control Rooms',
      'Building Automation'
    ],

    industries: [
      'Manufacturing',
      'Process Control',
      'Building Automation',
      'Water Treatment',
      'Power Generation',
      'Transportation'
    ],

    certifications: [
      'UL Listed',
      'CSA Certified',
      'IEC 60529',
      'CE Marked',
      'Seismic Qualified',
      'RoHS Compliant'
    ],

    categoryName: 'Electrical Components',
    categoryPath: '/products/electrical-components',
    subcategoryName: 'Control Panel Cabinets'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Monitor} />;
}