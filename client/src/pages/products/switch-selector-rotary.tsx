import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { RotateCcw } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function SwitchSelectorRotary() {
  const productData: ProductDetailData = {
    id: 'switch-selector-rotary',
    title: 'Selector Switches - Rotary Position Control',
    shortDescription: 'Multi-position rotary switches for control and selection applications',
    fullDescription: 'Professional rotary selector switches providing precise multi-position control for industrial applications. Features robust construction, multiple contact configurations, and reliable positioning for process control and equipment selection functions.',
    image: getProductImageSrc('selector-switches'),
    
    seo: {
      title: 'Rotary Selector Switches - Multi-Position Control Systems',
      description: 'Professional rotary selector switches for multi-position control with robust construction and reliable positioning',
      keywords: 'selector switches, rotary switches, multi-position switches, control switches, position selector, industrial switches',
      canonicalUrl: '/products/switch-selector-rotary'
    },

    keyBenefits: [
      'Precise Position Control',
      'Multiple Contact Configurations',
      'Robust Mechanical Design',
      'Reliable Positioning',
      'Long Mechanical Life',
      'Easy Installation'
    ],

    specifications: [
      { label: 'Positions', value: '2 to 12 positions' },
      { label: 'Contact Rating', value: '10A at 250VAC' },
      { label: 'Contact Configuration', value: '1-4 poles per position' },
      { label: 'Operating Temperature', value: '-25°C to +70°C' },
      { label: 'Mechanical Life', value: '>1,000,000 operations' },
      { label: 'Mounting Hole', value: '22mm/30mm diameter' }
    ],

    features: [
      'Spring-Return Options',
      'Maintained Positions',
      'Custom Position Angles',
      'Keyed Operation Available',
      'Contact Block System',
      'Position Indication',
      'Detent Mechanism',
      'Lockable Positions'
    ],

    applications: [
      'Equipment Mode Selection',
      'Process Control',
      'Motor Direction Control',
      'System Configuration',
      'Safety Interlocks',
      'Operational Sequencing'
    ],

    industries: [
      'Manufacturing',
      'Process Industries',
      'Material Handling',
      'Machine Tools',
      'Transportation',
      'Energy Systems'
    ],

    certifications: [
      'UL Listed',
      'CE Marked',
      'CSA Certified',
      'IEC 60947-5-1',
      'RoHS Compliant',
      'IP65 Rated'
    ],

    categoryName: 'Electrical Components',
    categoryPath: '/products/electrical-components',
    subcategoryName: 'Selector Switches'
  };

  return <ProductDetailTemplate product={productData} heroIcon={RotateCcw} />;
}