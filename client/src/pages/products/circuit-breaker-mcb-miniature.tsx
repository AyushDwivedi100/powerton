import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Shield } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function CircuitBreakerMCBMiniature() {
  const productData: ProductDetailData = {
    id: 'circuit-breaker-mcb-miniature',
    title: 'MCB - Miniature Circuit Breakers',
    shortDescription: 'Automatic protection devices for low voltage electrical circuits',
    fullDescription: 'Professional miniature circuit breakers providing automatic protection against overcurrent conditions in residential, commercial, and light industrial applications. Features fast tripping characteristics, high breaking capacity, and reliable performance for electrical safety.',
    image: getProductImageSrc('circuit-breakers'),
    
    seo: {
      title: 'MCB Miniature Circuit Breakers - Electrical Protection Devices',
      description: 'Professional MCB miniature circuit breakers for overcurrent protection in electrical circuits with fast tripping and high breaking capacity',
      keywords: 'MCB, miniature circuit breakers, electrical protection, overcurrent protection, circuit protection, electrical safety',
      canonicalUrl: '/products/circuit-breaker-mcb-miniature'
    },

    keyBenefits: [
      'Automatic Overcurrent Protection',
      'Fast Tripping Response',
      'High Breaking Capacity',
      'Easy Installation & Maintenance',
      'Compact Design',
      'Reliable Performance'
    ],

    specifications: [
      { label: 'Current Rating', value: '1A to 63A' },
      { label: 'Voltage Rating', value: '230/400V AC' },
      { label: 'Breaking Capacity', value: '6kA to 10kA' },
      { label: 'Tripping Characteristics', value: 'B, C, D curves' },
      { label: 'Poles', value: '1, 2, 3, 4 pole' },
      { label: 'Mounting', value: '35mm DIN rail' }
    ],

    features: [
      'Thermal-Magnetic Operation',
      'Arc Extinction Chamber',
      'Trip Indication Flag',
      'Quick Connect Terminals',
      'Modular Construction',
      'Test Button Function',
      'Temperature Compensation',
      'Maintenance-Free Operation'
    ],

    applications: [
      'Residential Distribution',
      'Commercial Buildings',
      'Light Industrial Applications',
      'Motor Protection',
      'Lighting Circuits',
      'Power Distribution Panels'
    ],

    industries: [
      'Residential Construction',
      'Commercial Buildings',
      'Light Manufacturing',
      'Educational Facilities',
      'Healthcare Buildings',
      'Retail Facilities'
    ],

    certifications: [
      'IEC 60898-1',
      'CE Certified',
      'UL 489',
      'CSA C22.2',
      'RoHS Compliant',
      'ISO 9001'
    ],

    categoryName: 'Electrical Components',
    categoryPath: '/products/electrical-components',
    subcategoryName: 'Circuit Breakers'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Shield} />;
}