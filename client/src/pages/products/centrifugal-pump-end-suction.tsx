import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { RotateCcw } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function CentrifugalPumpEndSuction() {
  const productData: ProductDetailData = {
    id: 'centrifugal-pump-end-suction',
    title: 'End Suction Centrifugal Pumps - Single Stage Industrial',
    shortDescription: 'Single-stage end suction centrifugal pumps for general industrial applications',
    fullDescription: 'Professional single-stage end suction centrifugal pumps designed for general industrial fluid handling applications. Features robust construction, high efficiency impellers, and reliable performance for water supply, HVAC, and industrial process applications.',
    image: getProductImageSrc('centrifugal-pumps'),
    
    seo: {
      title: 'End Suction Centrifugal Pumps - Single Stage Industrial Pumps',
      description: 'Professional end suction centrifugal pumps for industrial applications with robust construction and high efficiency',
      keywords: 'end suction pumps, centrifugal pumps, industrial pumps, single stage pumps, water pumps, HVAC pumps',
      canonicalUrl: '/products/centrifugal-pump-end-suction'
    },

    keyBenefits: [
      'High Hydraulic Efficiency',
      'Robust Construction',
      'Easy Installation & Maintenance',
      'Wide Flow & Head Range',
      'ANSI/ISO Standards Compliance',
      'Cost-Effective Solution'
    ],

    specifications: [
      { label: 'Flow Range', value: '10 to 5000 GPM' },
      { label: 'Head Range', value: 'Up to 400 feet' },
      { label: 'Sizes', value: '1" to 24" discharge' },
      { label: 'Pressure Rating', value: '150 to 300 PSI' },
      { label: 'Temperature Range', value: '-20°F to +200°F' },
      { label: 'Materials', value: 'Cast Iron, Bronze, Stainless Steel' }
    ],

    features: [
      'Back Pull-Out Design',
      'Self-Venting Casing',
      'Renewable Wear Rings',
      'Mechanical Seal Standard',
      'Flexible Coupling',
      'Standard Motor Mounting',
      'Replaceable Impeller',
      'Corrosion Resistant Coatings'
    ],

    applications: [
      'Water Supply Systems',
      'HVAC Circulation',
      'Industrial Processes',
      'Fire Protection',
      'Irrigation Systems',
      'Boiler Feed Applications'
    ],

    industries: [
      'Water & Wastewater',
      'HVAC Systems',
      'Manufacturing',
      'Building Services',
      'Agriculture',
      'Power Generation'
    ],

    certifications: [
      'ANSI B73.1',
      'ISO 2858',
      'UL Listed',
      'FM Approved',
      'NSF Certified',
      'ASME B31.3'
    ],

    categoryName: 'Pumps & Mechanical Systems',
    categoryPath: '/products/mechanical-pumps-spares',
    subcategoryName: 'Centrifugal Pumps'
  };

  return <ProductDetailTemplate product={productData} heroIcon={RotateCcw} />;
}