import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Zap } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function PowerSupplyDCRegulatedLaboratory() {
  const productData: ProductDetailData = {
    id: 'power-supply-dc-regulated-laboratory',
    title: 'DC Power Supplies - Regulated Laboratory Grade',
    shortDescription: 'Precision DC power supplies for testing and development applications',
    fullDescription: 'High-precision laboratory-grade DC power supplies providing stable, accurate voltage and current output for testing, development, and research applications. Features excellent regulation, low noise, and comprehensive protection circuits.',
    image: getProductImageSrc('dc-power-supplies'),
    
    seo: {
      title: 'Laboratory DC Power Supplies - Precision Regulated Systems',
      description: 'Professional laboratory-grade DC power supplies with precision regulation for testing and development applications',
      keywords: 'DC power supplies, laboratory power supplies, regulated power supplies, precision power, test equipment, bench power supplies',
      canonicalUrl: '/products/power-supply-dc-regulated-laboratory'
    },

    keyBenefits: [
      'High Precision Regulation',
      'Low Noise & Ripple',
      'Comprehensive Protection',
      'Digital Display & Control',
      'Remote Programming',
      'Excellent Load Regulation'
    ],

    specifications: [
      { label: 'Voltage Range', value: '0-60V to 0-1000V' },
      { label: 'Current Range', value: '0-3A to 0-100A' },
      { label: 'Regulation', value: '±0.01% + 1mV' },
      { label: 'Ripple & Noise', value: '<1mVrms' },
      { label: 'Resolution', value: '1mV, 0.1mA' },
      { label: 'Accuracy', value: '±0.05% ±5mV' }
    ],

    features: [
      'Linear Regulation',
      'Constant Voltage/Current',
      'Digital Meter Display',
      'Remote Sensing',
      'IEEE-488/USB Interface',
      'Multiple Output Models',
      'Memory Storage',
      'Tracking Capability'
    ],

    applications: [
      'R&D Testing',
      'Production Testing',
      'Device Characterization',
      'Educational Labs',
      'Quality Control',
      'Circuit Development'
    ],

    industries: [
      'Electronics Manufacturing',
      'Research & Development',
      'Educational Institutions',
      'Telecommunications',
      'Aerospace & Defense',
      'Automotive Testing'
    ],

    certifications: [
      'UL Listed',
      'CSA Certified',
      'CE Marked',
      'IEC 61010',
      'VISA Compatible',
      'RoHS Compliant'
    ],

    categoryName: 'Electrical Components',
    categoryPath: '/products/electrical-components',
    subcategoryName: 'DC Power Supplies'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Zap} />;
}