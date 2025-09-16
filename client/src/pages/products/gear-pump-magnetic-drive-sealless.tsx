import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { RotateCcw } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function GearPumpMagneticDriveSealless() {
  const productData: ProductDetailData = {
    id: 'gear-pump-magnetic-drive-sealless',
    title: 'Magnetic Drive Gear Pumps - Seal-less Chemical Systems',
    shortDescription: 'Seal-less magnetic drive gear pumps for chemical applications and zero emission requirements',
    fullDescription: 'Professional magnetic drive gear pumps designed for chemical applications requiring zero emission operation. Features seal-less design, magnetic coupling technology, leak-free operation, and chemical-resistant construction for safe handling of hazardous and toxic fluids.',
    image: getProductImageSrc('gear-pumps'),
    
    seo: {
      title: 'Magnetic Drive Gear Pumps - Seal-less Chemical Systems',
      description: 'Professional magnetic drive gear pumps with seal-less design for leak-free chemical handling and zero emission applications',
      keywords: 'magnetic drive pumps, sealless pumps, chemical gear pumps, leak-free pumps, zero emission pumps, mag drive pumps',
      canonicalUrl: '/products/gear-pump-magnetic-drive-sealless'
    },

    keyBenefits: [
      'Zero Emission Operation',
      'Leak-Free Design',
      'Chemical Resistance',
      'High Temperature Capability',
      'No Mechanical Seal Maintenance',
      'Safe Fluid Handling'
    ],

    specifications: [
      { label: 'Flow Range', value: '0.5 to 200 GPM' },
      { label: 'Pressure Rating', value: 'Up to 175 PSI' },
      { label: 'Temperature Range', value: '-100°F to +500°F' },
      { label: 'Viscosity Range', value: '1 to 50,000 cP' },
      { label: 'Materials', value: 'Hastelloy, Titanium, PEEK' },
      { label: 'Containment Shell', value: 'ASME Section VIII' }
    ],

    features: [
      'Magnetic Coupling Drive',
      'Containment Shell',
      'No Dynamic Seals',
      'Corrosion Resistant Alloys',
      'Dry-Run Protection',
      'Temperature Monitoring',
      'Secondary Containment',
      'Easy Maintenance'
    ],

    applications: [
      'Chemical Processing',
      'Hazardous Fluid Transfer',
      'Pharmaceutical Manufacturing',
      'Electronic Chemical Supply',
      'Specialty Chemical Handling',
      'Waste Chemical Treatment'
    ],

    industries: [
      'Chemical Processing',
      'Pharmaceuticals',
      'Semiconductor',
      'Specialty Chemicals',
      'Petrochemicals',
      'Environmental Services'
    ],

    certifications: [
      'ASME Section VIII',
      'API 685',
      'ANSI B73.3M',
      'CE Marked',
      'ATEX Certified',
      'ISO 5199'
    ],

    categoryName: 'Pumps & Mechanical Systems',
    categoryPath: '/products/mechanical-pumps-spares',
    subcategoryName: 'Gear Pumps'
  };

  return <ProductDetailTemplate product={productData} heroIcon={RotateCcw} />;
}