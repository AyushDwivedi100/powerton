import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Zap } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function ElectricalFusesIndustrialProtection() {
  const productData: ProductDetailData = {
    id: 'electrical-fuses-industrial-protection',
    title: 'Industrial Fuses - Electrical Protection Systems',
    shortDescription: 'High-performance fuses for motor, transformer, and circuit protection',
    fullDescription: 'Professional industrial fuses providing fast-acting protection for motors, transformers, and electrical circuits. Features high interrupting ratings, current-limiting characteristics, and specialized designs for various industrial applications.',
    image: getProductImageSrc('electrical-fuses'),
    
    seo: {
      title: 'Industrial Electrical Fuses - Motor & Transformer Protection',
      description: 'Professional industrial fuses for motor, transformer, and circuit protection with high interrupting ratings and current-limiting characteristics',
      keywords: 'industrial fuses, motor protection fuses, transformer fuses, electrical protection, high voltage fuses, current limiting fuses',
      canonicalUrl: '/products/electrical-fuses-industrial-protection'
    },

    keyBenefits: [
      'Fast-Acting Protection',
      'High Interrupting Capacity',
      'Current-Limiting Characteristics',
      'Wide Application Range',
      'Reliable Performance',
      'Cost-Effective Protection'
    ],

    specifications: [
      { label: 'Current Rating', value: '1A to 800A' },
      { label: 'Voltage Rating', value: '250V to 38kV' },
      { label: 'Interrupting Capacity', value: 'Up to 200kA' },
      { label: 'Fuse Types', value: 'Class J, T, RK1, RK5, CC' },
      { label: 'Time-Current', value: 'Fast-acting, Time-delay' },
      { label: 'Operating Temperature', value: '-40°C to +40°C' }
    ],

    features: [
      'Current-Limiting Design',
      'High-Grade Silver Sand',
      'Ceramic Body Construction',
      'Dual-Element Design',
      'Arc-Quenching Technology',
      'Indicating Fuses Available',
      'Rejection Features',
      'UL Recognition'
    ],

    applications: [
      'Motor Protection',
      'Transformer Protection',
      'Feeder Circuit Protection',
      'Power Distribution',
      'Control Circuit Protection',
      'Lighting Protection'
    ],

    industries: [
      'Manufacturing',
      'Power Generation',
      'Oil & Gas',
      'Mining',
      'Water Treatment',
      'Chemical Processing'
    ],

    certifications: [
      'UL Listed',
      'CSA Certified',
      'IEC 60269',
      'CE Marked',
      'RoHS Compliant',
      'ISO 9001'
    ],

    categoryName: 'Electrical Components',
    categoryPath: '/products/electrical-components',
    subcategoryName: 'Electrical Fuses'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Zap} />;
}