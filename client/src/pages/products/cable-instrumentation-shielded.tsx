import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Cable } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function CableInstrumentationShielded() {
  const productData: ProductDetailData = {
    id: 'cable-instrumentation-shielded',
    title: 'Instrumentation Cables - Shielded Signal Transmission',
    shortDescription: 'High-performance shielded cables for accurate signal transmission',
    fullDescription: 'Professional instrumentation cables designed for accurate transmission of measurement and control signals in industrial environments. Features superior shielding, low noise characteristics, and excellent interference rejection for critical instrumentation applications.',
    image: getProductImageSrc('instrumentation-cables'),
    
    seo: {
      title: 'Instrumentation Cables - Shielded Signal Transmission Systems',
      description: 'Professional instrumentation cables with superior shielding for accurate signal transmission in industrial measurement and control applications',
      keywords: 'instrumentation cables, shielded cables, signal transmission, control cables, measurement cables, industrial cables',
      canonicalUrl: '/products/cable-instrumentation-shielded'
    },

    keyBenefits: [
      'Superior Signal Integrity',
      'Excellent Noise Rejection',
      'High Flexibility & Durability',
      'Wide Temperature Range',
      'Chemical Resistance',
      'Multi-pair Configurations'
    ],

    specifications: [
      { label: 'Conductor Material', value: 'Tinned copper, stranded' },
      { label: 'Insulation', value: 'PE, PVC, XLPE' },
      { label: 'Shielding', value: 'Aluminum foil + drain wire' },
      { label: 'Temperature Range', value: '-40°C to +105°C' },
      { label: 'Voltage Rating', value: '300V to 600V' },
      { label: 'Pair Count', value: '1 to 37 pairs' }
    ],

    features: [
      'Individual Pair Shielding',
      'Overall Shield Protection',
      'Low Capacitance Design',
      'Flame Retardant Jacket',
      'Oil & Chemical Resistant',
      'Direct Burial Options',
      'Armored Constructions',
      'Color-Coded Identification'
    ],

    applications: [
      'Process Control Systems',
      'Instrumentation Loops',
      'Sensor Connections',
      'Analyzer Wiring',
      'Control Room Interconnections',
      'Field Device Communications'
    ],

    industries: [
      'Oil & Gas',
      'Chemical Processing',
      'Power Generation',
      'Water Treatment',
      'Manufacturing',
      'Pharmaceutical'
    ],

    certifications: [
      'UL Listed',
      'CSA Certified',
      'CE Marked',
      'IEC 60502',
      'NFPA 70',
      'RoHS Compliant'
    ],

    categoryName: 'Electrical Components',
    categoryPath: '/products/electrical-components',
    subcategoryName: 'Instrumentation Cables'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Cable} />;
}