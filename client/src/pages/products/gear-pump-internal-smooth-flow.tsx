import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Droplet } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function GearPumpInternalSmoothFlow() {
  const productData: ProductDetailData = {
    id: 'gear-pump-internal-smooth-flow',
    title: 'Internal Gear Pumps - Smooth Flow Technology',
    shortDescription: 'Smooth flow internal gear pumps for gentle handling of sensitive fluids',
    fullDescription: 'Professional internal gear pumps engineered for smooth, gentle fluid handling with low pulsation characteristics. Features crescent design, self-priming operation, and excellent suction capabilities for applications requiring careful handling of shear-sensitive fluids and materials.',
    image: getProductImageSrc('gear-pumps'),
    
    seo: {
      title: 'Internal Gear Pumps - Smooth Flow Gentle Handling Systems',
      description: 'Professional internal gear pumps with smooth flow technology for gentle handling of sensitive fluids and low pulsation',
      keywords: 'internal gear pumps, smooth flow pumps, gentle handling pumps, low pulsation pumps, crescent gear pumps',
      canonicalUrl: '/products/gear-pump-internal-smooth-flow'
    },

    keyBenefits: [
      'Low Pulsation Flow',
      'Gentle Fluid Handling',
      'Self-Priming Capability',
      'Excellent Suction Performance',
      'Quiet Operation',
      'Easy Maintenance Access'
    ],

    specifications: [
      { label: 'Flow Range', value: '1 to 1000 GPM' },
      { label: 'Pressure Rating', value: 'Up to 250 PSI' },
      { label: 'Viscosity Range', value: '1 to 100,000 cP' },
      { label: 'Temperature Range', value: '-20°F to +400°F' },
      { label: 'NPSH Required', value: 'As low as 2 feet' },
      { label: 'Efficiency', value: 'Up to 85%' }
    ],

    features: [
      'Crescent Design',
      'Single Idler Gear',
      'Balanced Hydraulic Forces',
      'Renewable Wear Plates',
      'Cartridge Seal Design',
      'CIP/SIP Capability',
      'Sanitary Connections',
      'Jacketed Construction'
    ],

    applications: [
      'Food & Beverage Processing',
      'Pharmaceutical Transfer',
      'Cosmetic Manufacturing',
      'Chemical Transfer',
      'Polymer Processing',
      'Asphalt & Bitumen'
    ],

    industries: [
      'Food & Beverage',
      'Pharmaceuticals',
      'Cosmetics',
      'Chemical Processing',
      'Pulp & Paper',
      'Asphalt'
    ],

    certifications: [
      '3A Sanitary Standards',
      'FDA Compliant',
      'EHEDG Approved',
      'CE Marked',
      'USDA Accepted',
      'cGMP Compliant'
    ],

    categoryName: 'Pumps & Mechanical Systems',
    categoryPath: '/products/mechanical-pumps-spares',
    subcategoryName: 'Gear Pumps'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Droplet} />;
}