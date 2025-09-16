import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { AlertTriangle } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function SwitchEmergencyStopSafety() {
  const productData: ProductDetailData = {
    id: 'switch-emergency-stop-safety',
    title: 'Emergency Stop Switches - Safety Systems',
    shortDescription: 'Safety-rated emergency stop switches for machine protection',
    fullDescription: 'Professional emergency stop switches designed for critical safety applications in industrial machinery. Features positive opening contacts, safety ratings, and robust construction for reliable emergency shutdown protection in hazardous situations.',
    image: getProductImageSrc('emergency-stop-switches'),
    
    seo: {
      title: 'Emergency Stop Safety Switches - Machine Protection Systems',
      description: 'Professional emergency stop switches with safety ratings for critical machine protection and emergency shutdown applications',
      keywords: 'emergency stop switches, safety switches, e-stop, machine safety, emergency shutdown, positive opening contacts',
      canonicalUrl: '/products/switch-emergency-stop-safety'
    },

    keyBenefits: [
      'Safety-Rated Performance',
      'Positive Opening Contacts',
      'Immediate Machine Shutdown',
      'Fail-Safe Operation',
      'High Visibility Design',
      'Compliance with Safety Standards'
    ],

    specifications: [
      { label: 'Safety Rating', value: 'Cat 4, PLe, SIL 3' },
      { label: 'Contact Type', value: 'Positive opening NC' },
      { label: 'Contact Rating', value: '10A at 250VAC' },
      { label: 'Operating Force', value: '3-40N activation' },
      { label: 'Button Diameter', value: '40mm/60mm' },
      { label: 'Protection Rating', value: 'IP65/IP67' }
    ],

    features: [
      'Mushroom Head Design',
      'Twist-to-Release Operation',
      'Positive Guided Contacts',
      'Red Color Standard',
      'Pull-to-Release Options',
      'Yellow Background Plate',
      'Direct Opening Action',
      'Auxiliary Contact Blocks'
    ],

    applications: [
      'Machine Safety Systems',
      'Emergency Shutdown',
      'Personnel Protection',
      'Equipment Safeguarding',
      'Process Safety',
      'Conveyor Systems'
    ],

    industries: [
      'Manufacturing',
      'Material Handling',
      'Packaging',
      'Automotive',
      'Food Processing',
      'Robotics'
    ],

    certifications: [
      'UL Listed',
      'CE Marked',
      'TÜV Certified',
      'IEC 60947-5-5',
      'ISO 13850',
      'EN 418'
    ],

    categoryName: 'Electrical Components',
    categoryPath: '/products/electrical-components',
    subcategoryName: 'Emergency Stop Switches'
  };

  return <ProductDetailTemplate product={productData} heroIcon={AlertTriangle} />;
}