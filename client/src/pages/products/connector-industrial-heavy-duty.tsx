import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Plug } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function ConnectorIndustrialHeavyDuty() {
  const productData: ProductDetailData = {
    id: 'connector-industrial-heavy-duty',
    title: 'Industrial Heavy-Duty Connectors',
    shortDescription: 'Robust connectors for harsh industrial environments',
    fullDescription: 'Professional heavy-duty industrial connectors designed for demanding applications requiring reliable power and signal connections. Features rugged construction, IP protection ratings, and secure locking mechanisms for critical industrial connections.',
    image: getProductImageSrc('industrial-connectors'),
    
    seo: {
      title: 'Heavy-Duty Industrial Connectors - Power & Signal Connections',
      description: 'Professional heavy-duty industrial connectors for reliable power and signal connections in harsh environments with IP protection',
      keywords: 'industrial connectors, heavy duty connectors, power connectors, signal connectors, IP67 connectors, waterproof connectors',
      canonicalUrl: '/products/connector-industrial-heavy-duty'
    },

    keyBenefits: [
      'Rugged Construction',
      'High IP Protection Ratings',
      'Secure Locking Mechanisms',
      'Wide Temperature Range',
      'Chemical Resistance',
      'Vibration & Shock Resistant'
    ],

    specifications: [
      { label: 'Current Rating', value: '10A to 400A' },
      { label: 'Voltage Rating', value: '250V to 1000V' },
      { label: 'Contact Count', value: '2 to 128 contacts' },
      { label: 'Protection Rating', value: 'IP65, IP67, IP68' },
      { label: 'Operating Temperature', value: '-40°C to +125°C' },
      { label: 'Mating Cycles', value: '>500 cycles' }
    ],

    features: [
      'Bayonet Locking System',
      'Color-Coded Housings',
      'Gasket Sealing System',
      'Gold-Plated Contacts',
      'Cable Strain Relief',
      'Modular Insert System',
      'Quick Connect/Disconnect',
      'Panel Mount Options'
    ],

    applications: [
      'Factory Automation',
      'Machine Tools',
      'Material Handling',
      'Outdoor Equipment',
      'Mobile Applications',
      'Marine & Offshore'
    ],

    industries: [
      'Manufacturing',
      'Transportation',
      'Marine & Offshore',
      'Mining',
      'Construction Equipment',
      'Renewable Energy'
    ],

    certifications: [
      'UL Listed',
      'CSA Certified',
      'IEC 61984',
      'CE Marked',
      'IP67/IP68 Rated',
      'ATEX Approved'
    ],

    categoryName: 'Electrical Components',
    categoryPath: '/products/electrical-components',
    subcategoryName: 'Industrial Connectors'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Plug} />;
}