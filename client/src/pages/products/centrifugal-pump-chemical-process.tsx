import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Zap } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function CentrifugalPumpChemicalProcess() {
  const productData: ProductDetailData = {
    id: 'centrifugal-pump-chemical-process',
    title: 'Chemical Process Pumps - Corrosion Resistant Industrial',
    shortDescription: 'Corrosion-resistant centrifugal pumps for chemical processing and aggressive fluids',
    fullDescription: 'Professional chemical process pumps designed for handling corrosive and aggressive fluids in chemical processing applications. Features corrosion-resistant materials, seal-less design options, API 610 compliance, and specialized coatings for reliable performance in harsh chemical environments.',
    image: getProductImageSrc('centrifugal-pumps'),
    
    seo: {
      title: 'Chemical Process Pumps - Corrosion Resistant Industrial Pumps',
      description: 'Professional chemical process pumps with corrosion resistance for aggressive fluids and chemical processing applications',
      keywords: 'chemical pumps, process pumps, corrosion resistant pumps, API 610 pumps, chemical processing, aggressive fluids',
      canonicalUrl: '/products/centrifugal-pump-chemical-process'
    },

    keyBenefits: [
      'Superior Corrosion Resistance',
      'Seal-less Design Options',
      'API 610 Compliance',
      'High Temperature Capability',
      'Specialized Material Construction',
      'Minimal Maintenance Requirements'
    ],

    specifications: [
      { label: 'Flow Range', value: '10 to 3000 GPM' },
      { label: 'Head Range', value: 'Up to 600 feet' },
      { label: 'Sizes', value: '1" to 20" discharge' },
      { label: 'Temperature Range', value: '-100°F to +750°F' },
      { label: 'Pressure Rating', value: 'Up to 600 PSI' },
      { label: 'Materials', value: 'Hastelloy, Titanium, PTFE Lined' }
    ],

    features: [
      'Corrosion Resistant Alloys',
      'Magnetic Drive Options',
      'Canned Motor Design',
      'PTFE/PFA Linings',
      'Containment Shell',
      'Zero Emission Design',
      'Self-Flushing Seal',
      'Easy Maintenance Access'
    ],

    applications: [
      'Chemical Processing',
      'Petrochemical Plants',
      'Acid/Caustic Handling',
      'Pharmaceutical Manufacturing',
      'Specialty Chemicals',
      'Waste Treatment'
    ],

    industries: [
      'Chemical Processing',
      'Petrochemicals',
      'Pharmaceuticals',
      'Pulp & Paper',
      'Specialty Chemicals',
      'Environmental Services'
    ],

    certifications: [
      'API 610',
      'ISO 5199',
      'ANSI B73.1M',
      'ASME Section VIII',
      'NACE MR0175',
      'ATEX Certified'
    ],

    categoryName: 'Pumps & Mechanical Systems',
    categoryPath: '/products/mechanical-pumps-spares',
    subcategoryName: 'Chemical Process Pumps'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Zap} />;
}