import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { ShieldCheck } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function CircuitBreakerMCCBMoldedCase() {
  const productData: ProductDetailData = {
    id: 'circuit-breaker-mccb-molded-case',
    title: 'MCCB - Molded Case Circuit Breakers',
    shortDescription: 'Heavy-duty circuit protection for industrial and commercial applications',
    fullDescription: 'Professional molded case circuit breakers designed for high-current applications requiring superior protection and reliability. Features adjustable trip settings, high interrupting capacity, and robust construction for demanding industrial environments.',
    image: getProductImageSrc('circuit-breakers'),
    
    seo: {
      title: 'MCCB Molded Case Circuit Breakers - Industrial Protection',
      description: 'Professional MCCB molded case circuit breakers for heavy-duty circuit protection in industrial and commercial applications',
      keywords: 'MCCB, molded case circuit breakers, industrial protection, high current protection, electrical switchgear, power distribution',
      canonicalUrl: '/products/circuit-breaker-mccb-molded-case'
    },

    keyBenefits: [
      'High Interrupting Capacity',
      'Adjustable Trip Settings',
      'Superior Arc Extinction',
      'Robust Construction',
      'Wide Current Range',
      'Advanced Protection Features'
    ],

    specifications: [
      { label: 'Current Rating', value: '15A to 1600A' },
      { label: 'Voltage Rating', value: '240V to 690V AC' },
      { label: 'Breaking Capacity', value: '25kA to 100kA' },
      { label: 'Trip Units', value: 'Thermal-Magnetic, Electronic' },
      { label: 'Poles', value: '3, 4 pole configurations' },
      { label: 'Frame Sizes', value: '100A to 1600A frames' }
    ],

    features: [
      'Electronic Trip Units',
      'Adjustable Overload Protection',
      'Short Circuit Protection',
      'Ground Fault Protection',
      'Arc Flash Reduction',
      'Communication Capabilities',
      'Zone Selective Interlocking',
      'Motor Protection Functions'
    ],

    applications: [
      'Industrial Power Distribution',
      'Motor Control Centers',
      'Switchgear Applications',
      'Generator Protection',
      'Transformer Protection',
      'Heavy Equipment Protection'
    ],

    industries: [
      'Manufacturing',
      'Oil & Gas',
      'Power Generation',
      'Mining',
      'Water Treatment',
      'Chemical Processing'
    ],

    certifications: [
      'IEC 60947-2',
      'UL 489',
      'CSA C22.2',
      'CE Certified',
      'Arc Flash Tested',
      'Seismic Qualified'
    ],

    categoryName: 'Electrical Components',
    categoryPath: '/products/electrical-components',
    subcategoryName: 'Circuit Breakers'
  };

  return <ProductDetailTemplate product={productData} heroIcon={ShieldCheck} />;
}