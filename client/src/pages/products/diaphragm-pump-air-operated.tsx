import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Droplets } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function DiaphragmPumpAirOperated() {
  const productData: ProductDetailData = {
    id: 'diaphragm-pump-air-operated',
    title: 'Air-Operated Diaphragm Pumps - Pneumatic AODD',
    shortDescription: 'Pneumatically driven diaphragm pumps for chemical and abrasive fluid applications',
    fullDescription: 'Professional air-operated double diaphragm (AODD) pumps designed for chemical transfer and handling of abrasive fluids. Features self-priming operation, dry-run capability, variable flow control, and chemical-resistant construction for reliable performance in demanding applications.',
    image: getProductImageSrc('diaphragm-pumps'),
    
    seo: {
      title: 'Air-Operated Diaphragm Pumps - Pneumatic AODD Systems',
      description: 'Professional air-operated diaphragm pumps with self-priming and dry-run capability for chemical and abrasive fluid handling',
      keywords: 'AODD pumps, air operated diaphragm pumps, pneumatic pumps, chemical transfer pumps, self-priming pumps',
      canonicalUrl: '/products/diaphragm-pump-air-operated'
    },

    keyBenefits: [
      'Self-Priming Capability',
      'Dry Run Safe Operation',
      'Chemical Resistant Construction',
      'Variable Flow Control',
      'No Electrical Requirements',
      'Portable & Versatile'
    ],

    specifications: [
      { label: 'Flow Range', value: '0.5 to 300 GPM' },
      { label: 'Head Range', value: 'Up to 200 feet' },
      { label: 'Sizes', value: '1/2" to 3" port sizes' },
      { label: 'Suction Lift', value: 'Up to 28 feet dry' },
      { label: 'Air Pressure', value: '30 to 125 PSI' },
      { label: 'Temperature Range', value: '-40°F to +400°F' }
    ],

    features: [
      'Double Diaphragm Design',
      'Air Distribution System',
      'Self-Priming Operation',
      'Stall-Safe Operation',
      'Adjustable Flow Rate',
      'Quick-Disconnect Ports',
      'Maintenance-Free Air Motor',
      'Multiple Material Options'
    ],

    applications: [
      'Chemical Transfer',
      'Paint & Coating',
      'Abrasive Slurries',
      'Dewatering',
      'Tank Emptying',
      'Drum Unloading'
    ],

    industries: [
      'Chemical Processing',
      'Mining',
      'Paint & Coatings',
      'Wastewater Treatment',
      'Construction',
      'Food & Beverage'
    ],

    certifications: [
      'ATEX Certified',
      'CE Marked',
      'FDA Compliant Materials',
      'USDA Approved',
      '3A Sanitary Standards',
      'AODD Manufacturers Association'
    ],

    categoryName: 'Pumps & Mechanical Systems',
    categoryPath: '/products/mechanical-pumps-spares',
    subcategoryName: 'Diaphragm Pumps'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Droplets} />;
}