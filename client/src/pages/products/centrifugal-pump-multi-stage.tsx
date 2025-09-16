import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Droplet } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function CentrifugalPumpMultiStage() {
  const productData: ProductDetailData = {
    id: 'centrifugal-pump-multi-stage',
    title: 'Multi-Stage Centrifugal Pumps - High Pressure Applications',
    shortDescription: 'High-pressure multi-stage centrifugal pumps for demanding industrial applications',
    fullDescription: 'Professional multi-stage centrifugal pumps engineered for high-pressure applications requiring superior head capabilities. Features multiple impellers in series, compact design, energy-efficient operation, and balanced hydraulics for reliable performance in demanding industrial processes.',
    image: getProductImageSrc('centrifugal-pumps'),
    
    seo: {
      title: 'Multi-Stage Centrifugal Pumps - High Pressure Industrial Systems',
      description: 'Professional multi-stage centrifugal pumps for high-pressure applications with energy-efficient design and compact construction',
      keywords: 'multi-stage pumps, high pressure pumps, centrifugal pumps, industrial pumps, boiler feed pumps, pressure boosting',
      canonicalUrl: '/products/centrifugal-pump-multi-stage'
    },

    keyBenefits: [
      'High Pressure Capability',
      'Compact Design Footprint',
      'Energy Efficient Operation',
      'Balanced Impeller Design',
      'Reduced NPSH Requirements',
      'Modular Construction'
    ],

    specifications: [
      { label: 'Flow Range', value: '5 to 1000 GPM' },
      { label: 'Head Range', value: 'Up to 2000 feet' },
      { label: 'Stages', value: '2 to 12 stages' },
      { label: 'Pressure Rating', value: 'Up to 1500 PSI' },
      { label: 'Temperature Range', value: '-20°F to +400°F' },
      { label: 'Materials', value: 'Stainless Steel, Duplex, Bronze' }
    ],

    features: [
      'Multiple Impellers in Series',
      'Diffuser Type Construction',
      'Cartridge Mechanical Seal',
      'Precision Balanced Rotors',
      'Modular Stage Design',
      'Self-Centering Impellers',
      'Renewable Wear Components',
      'Optimized Hydraulics'
    ],

    applications: [
      'High Pressure Water Supply',
      'Boiler Feed Systems',
      'Pressure Boosting',
      'RO System Feed',
      'High-Rise Buildings',
      'Industrial Processes'
    ],

    industries: [
      'Power Generation',
      'Water Treatment',
      'Oil & Gas',
      'Chemical Processing',
      'Mining',
      'Marine Applications'
    ],

    certifications: [
      'ANSI B73.1',
      'API 610',
      'ISO 5199',
      'ASME Section VIII',
      'CE Marked',
      'NACE MR0175'
    ],

    categoryName: 'Pumps & Mechanical Systems',
    categoryPath: '/products/mechanical-pumps-spares',
    subcategoryName: 'Centrifugal Pumps'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Droplet} />;
}