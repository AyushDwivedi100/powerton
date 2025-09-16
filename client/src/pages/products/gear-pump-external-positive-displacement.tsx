import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Settings } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function GearPumpExternalPositiveDisplacement() {
  const productData: ProductDetailData = {
    id: 'gear-pump-external-positive-displacement',
    title: 'External Gear Pumps - Positive Displacement Systems',
    shortDescription: 'Positive displacement external gear pumps for viscous fluids and precise flow applications',
    fullDescription: 'Professional external gear pumps designed for handling viscous fluids and applications requiring precise flow control. Features high-pressure capability, robust gear construction, excellent volumetric efficiency, and reliable performance for demanding industrial fluid transfer applications.',
    image: getProductImageSrc('gear-pumps'),
    
    seo: {
      title: 'External Gear Pumps - Positive Displacement Industrial Systems',
      description: 'Professional external gear pumps for viscous fluids with high-pressure capability and precise flow control',
      keywords: 'external gear pumps, positive displacement pumps, viscous fluid pumps, high pressure gear pumps, industrial pumps',
      canonicalUrl: '/products/gear-pump-external-positive-displacement'
    },

    keyBenefits: [
      'High Pressure Capability',
      'Excellent for Viscous Fluids',
      'Precise Flow Control',
      'Robust Construction',
      'High Volumetric Efficiency',
      'Self-Priming Operation'
    ],

    specifications: [
      { label: 'Flow Range', value: '0.5 to 500 GPM' },
      { label: 'Pressure Rating', value: 'Up to 3000 PSI' },
      { label: 'Viscosity Range', value: '1 to 1,000,000 cP' },
      { label: 'Temperature Range', value: '-40°F to +600°F' },
      { label: 'Speeds', value: '100 to 3600 RPM' },
      { label: 'Materials', value: 'Cast Iron, Steel, Stainless Steel' }
    ],

    features: [
      'External Gear Design',
      'Precision Ground Gears',
      'Replaceable Bushings',
      'Mechanical Seal Options',
      'Relief Valve Protection',
      'Heating Jacket Available',
      'Multiple Port Configurations',
      'Bi-Directional Operation'
    ],

    applications: [
      'Viscous Fluid Transfer',
      'Lubrication Systems',
      'Fuel Oil Transfer',
      'Chemical Processing',
      'Food Processing',
      'Adhesive Pumping'
    ],

    industries: [
      'Chemical Processing',
      'Food & Beverage',
      'Petroleum',
      'Plastics & Polymers',
      'Paint & Coatings',
      'Lubrication Systems'
    ],

    certifications: [
      'API 676',
      'ANSI B73.3',
      'CE Marked',
      'ATEX Certified',
      '3A Sanitary',
      'FDA Compliant'
    ],

    categoryName: 'Pumps & Mechanical Systems',
    categoryPath: '/products/mechanical-pumps-spares',
    subcategoryName: 'Gear Pumps'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Settings} />;
}