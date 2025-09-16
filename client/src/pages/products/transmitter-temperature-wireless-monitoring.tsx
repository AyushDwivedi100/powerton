import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Wifi } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function TransmitterTemperatureWirelessMonitoring() {
  const productData: ProductDetailData = {
    id: 'transmitter-temperature-wireless-monitoring',
    title: 'Wireless Temperature Transmitters',
    shortDescription: 'Battery-powered wireless temperature monitoring solutions',
    fullDescription: 'Innovative wireless temperature transmitters providing cable-free installation and monitoring for remote or difficult-to-access locations. Features long battery life, robust wireless communication, and comprehensive temperature measurement capabilities for enhanced process flexibility.',
    image: getProductImageSrc('wireless-transmitters'),
    
    seo: {
      title: 'Wireless Temperature Transmitters - Battery Powered Monitoring',
      description: 'Professional wireless temperature transmitters with battery power for remote monitoring and cable-free installation',
      keywords: 'wireless temperature transmitters, battery powered transmitters, wireless monitoring, remote temperature, WirelessHART',
      canonicalUrl: '/products/transmitter-temperature-wireless-monitoring'
    },

    keyBenefits: [
      'Cable-free Installation',
      'Extended Battery Life',
      'Wireless Self-organizing Network',
      'Remote Monitoring Capability',
      'Reduced Installation Costs',
      'Enhanced Safety & Flexibility'
    ],

    specifications: [
      { label: 'Temperature Range', value: '-200°C to +850°C' },
      { label: 'Accuracy', value: '±0.5°C to ±2.0°C' },
      { label: 'Battery Life', value: '10+ years typical' },
      { label: 'Wireless Range', value: 'Up to 500m line-of-sight' },
      { label: 'Communication', value: 'WirelessHART, LoRaWAN' },
      { label: 'Protection Rating', value: 'IP67/IP68' }
    ],

    features: [
      'WirelessHART Technology',
      'Self-organizing Mesh Network',
      'Battery Status Monitoring',
      'Configurable Update Rates',
      'Advanced Security Features',
      'Remote Diagnostics',
      'Multiple Sensor Inputs',
      'Low Power Consumption'
    ],

    applications: [
      'Remote Asset Monitoring',
      'Tank & Vessel Temperature',
      'Pipeline Monitoring',
      'Storage Area Monitoring',
      'Rotating Equipment',
      'Environmental Monitoring'
    ],

    industries: [
      'Oil & Gas',
      'Chemical & Petrochemical',
      'Power Generation',
      'Mining & Metals',
      'Water & Wastewater',
      'Agriculture'
    ],

    certifications: [
      'WirelessHART Certified',
      'ATEX Zone 0/1',
      'IECEx Certified',
      'FCC Approved',
      'CE Marked',
      'ISA Security Compliant'
    ],

    categoryName: 'Instrumentation',
    categoryPath: '/products/instrumentation',
    subcategoryName: 'Temperature Transmitters'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Wifi} />;
}