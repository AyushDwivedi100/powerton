import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { ToggleLeft } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function SwitchPushbuttonIlluminated() {
  const productData: ProductDetailData = {
    id: 'switch-pushbutton-illuminated',
    title: 'Illuminated Pushbutton Switches',
    shortDescription: 'LED illuminated pushbuttons for control panel applications',
    fullDescription: 'Professional illuminated pushbutton switches featuring LED technology for enhanced visibility and operator feedback. Designed for industrial control panels with multiple colors, maintained/momentary action, and rugged construction for reliable operation.',
    image: getProductImageSrc('pushbutton-switches'),
    
    seo: {
      title: 'Illuminated Pushbutton Switches - LED Control Panel Components',
      description: 'Professional illuminated pushbutton switches with LED technology for industrial control panels and operator interfaces',
      keywords: 'illuminated pushbuttons, LED switches, control panel switches, industrial switches, operator interface, pushbutton controls',
      canonicalUrl: '/products/switch-pushbutton-illuminated'
    },

    keyBenefits: [
      'LED Illumination Technology',
      'Multiple Color Options',
      'Maintained/Momentary Action',
      'Rugged Industrial Design',
      'Easy Installation & Maintenance',
      'Long Service Life'
    ],

    specifications: [
      { label: 'Contact Rating', value: '10A at 250VAC' },
      { label: 'LED Life', value: '>50,000 hours' },
      { label: 'Operating Temperature', value: '-25°C to +70°C' },
      { label: 'Protection Rating', value: 'IP65/IP67' },
      { label: 'Mounting Hole', value: '22mm/30mm diameter' },
      { label: 'Contact Configuration', value: 'NO/NC/DPDT' }
    ],

    features: [
      'LED Ring Illumination',
      'Multiple Color Options',
      'Vandal Resistant Design',
      'Quick Connect Terminals',
      'Modular Construction',
      'Ergonomic Operation',
      'Self-Cleaning Contacts',
      'Custom Legends Available'
    ],

    applications: [
      'Control Panel Integration',
      'Machine Control Systems',
      'Process Control',
      'Equipment Start/Stop',
      'Status Indication',
      'Safety Applications'
    ],

    industries: [
      'Manufacturing',
      'Process Control',
      'Material Handling',
      'Packaging',
      'Food Processing',
      'Automotive'
    ],

    certifications: [
      'UL Listed',
      'CE Marked',
      'CSA Certified',
      'IEC 60947-5-1',
      'RoHS Compliant',
      'IP65/IP67 Rated'
    ],

    categoryName: 'Electrical Components',
    categoryPath: '/products/electrical-components',
    subcategoryName: 'Pushbutton Switches'
  };

  return <ProductDetailTemplate product={productData} heroIcon={ToggleLeft} />;
}