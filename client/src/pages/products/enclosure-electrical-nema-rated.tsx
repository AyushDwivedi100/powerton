import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Box } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function EnclosureElectricalNEMARated() {
  const productData: ProductDetailData = {
    id: 'enclosure-electrical-nema-rated',
    title: 'Electrical Enclosures - NEMA Rated Protection',
    shortDescription: 'Weather-resistant enclosures for electrical equipment protection',
    fullDescription: 'Professional NEMA-rated electrical enclosures providing superior protection for electrical equipment in harsh environments. Features corrosion-resistant construction, gasket sealing, and multiple mounting options for indoor and outdoor applications.',
    image: getProductImageSrc('electrical-enclosures'),
    
    seo: {
      title: 'NEMA Rated Electrical Enclosures - Weather Resistant Protection',
      description: 'Professional NEMA rated electrical enclosures with weather resistant protection for electrical equipment in harsh environments',
      keywords: 'NEMA enclosures, electrical enclosures, weather resistant, IP rated enclosures, stainless steel enclosures, outdoor enclosures',
      canonicalUrl: '/products/enclosure-electrical-nema-rated'
    },

    keyBenefits: [
      'Superior Weather Protection',
      'Corrosion Resistant Construction',
      'Multiple NEMA Ratings',
      'Gasket Sealing System',
      'Easy Installation & Access',
      'Customization Options Available'
    ],

    specifications: [
      { label: 'NEMA Ratings', value: 'NEMA 1, 3R, 4, 4X, 12' },
      { label: 'Material', value: 'Carbon Steel, Stainless Steel' },
      { label: 'Size Range', value: '6"x6"x4" to 72"x72"x18"' },
      { label: 'Thickness', value: '14 to 11 gauge steel' },
      { label: 'Operating Temperature', value: '-40°C to +85°C' },
      { label: 'IP Rating', value: 'IP54 to IP66 equivalent' }
    ],

    features: [
      'Continuous Hinge Design',
      'Quarter-Turn Latches',
      'Removable Mounting Plate',
      'Grounding Hardware',
      'Knockouts Pre-punched',
      'Powder Coat Finish',
      'Padlockable Handles',
      'Tamper-Resistant Design'
    ],

    applications: [
      'Outdoor Electrical Equipment',
      'Industrial Control Systems',
      'Power Distribution',
      'Instrumentation Housing',
      'Motor Control Centers',
      'Switchgear Applications'
    ],

    industries: [
      'Utilities',
      'Manufacturing',
      'Oil & Gas',
      'Water Treatment',
      'Telecommunications',
      'Transportation'
    ],

    certifications: [
      'UL Listed',
      'CSA Certified',
      'NEMA Standards',
      'IEC 60529',
      'CE Marked',
      'RoHS Compliant'
    ],

    categoryName: 'Electrical Components',
    categoryPath: '/products/electrical-components',
    subcategoryName: 'Electrical Enclosures'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Box} />;
}