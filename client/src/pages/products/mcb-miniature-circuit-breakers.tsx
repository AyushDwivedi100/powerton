import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Shield } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';
import { useTranslation } from 'react-i18next';

export default function MCBMiniatureCircuitBreakers() {
  const { t } = useTranslation(['products', 'common']);

  const productData: ProductDetailData = {
    id: 'mcb-circuit-breakers',
    title: 'MCB Miniature Circuit Breakers - Residential & Commercial Protection',
    shortDescription: 'Miniature circuit breakers for overcurrent protection in low voltage applications',
    fullDescription: 'Professional MCB (Miniature Circuit Breakers) designed for overcurrent protection in residential and commercial electrical installations. Features compact design, reliable tripping characteristics, and excellent breaking capacity for safe electrical distribution.',
    image: getProductImageSrc('circuit-breakers-fuses'),
    
    seo: {
      title: 'MCB Miniature Circuit Breakers - Overcurrent Protection | Powerton Engineering',
      description: 'Professional MCB miniature circuit breakers with reliable overcurrent protection for residential and commercial applications.',
      keywords: 'MCB circuit breakers, miniature circuit breakers, overcurrent protection, electrical safety, residential protection, commercial protection',
      canonicalUrl: 'https://powertonengineering.in/products/mcb-miniature-circuit-breakers'
    },
    
    categoryName: 'Electrical Components',
    categoryPath: '/products/electrical-components',
    subcategoryName: 'Circuit Breakers & Fuses',
    
    keyBenefits: [
      'Compact Design',
      'Reliable Protection',
      'Easy Installation',
      'Visual Trip Indication',
      'High Breaking Capacity',
      'Long Service Life'
    ],
    
    specifications: [
      { label: 'Breaker Type', value: 'MCB' },
      { label: 'Current Rating', value: '6A - 63A' },
      { label: 'Pole Configuration', value: '1P, 2P, 3P, 4P' },
      { label: 'Breaking Capacity', value: '10kA' },
      { label: 'Voltage Rating', value: '230/400V AC' },
      { label: 'Standard', value: 'IEC 60898' }
    ],
    
    features: [
      'Thermal-Magnetic Trip',
      'DIN Rail Mounting',
      'Modular Construction',
      'Arc Fault Protection',
      'Short Circuit Protection',
      'Visual Trip Indicator',
      'Quick Connect Terminals',
      'Busbar Connection'
    ],
    
    applications: [
      'Residential Distribution',
      'Commercial Buildings',
      'Industrial Panels',
      'Motor Protection',
      'Lighting Circuits',
      'Power Distribution'
    ],
    
    industries: [
      'Residential Construction',
      'Commercial Buildings',
      'Manufacturing',
      'Healthcare Facilities',
      'Educational Institutions',
      'Hospitality'
    ],
    
    certifications: [
      'IEC 60898 Compliant',
      'CE Marked',
      'UL Listed',
      'CSA Approved',
      'BIS Certified',
      'RoHS Compliant'
    ],
    
    backButtonLabel: 'Back to Electrical Components'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Shield} />;
}