import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Shield } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';
import { useTranslation } from 'react-i18next';

export default function MCCBMoldedCaseCircuitBreakers() {
  const { t } = useTranslation(['products', 'common']);

  const productData: ProductDetailData = {
    id: 'mccb-circuit-breakers',
    title: 'MCCB Molded Case Circuit Breakers - Industrial Power Protection',
    shortDescription: 'Heavy-duty molded case circuit breakers for industrial power distribution',
    fullDescription: 'Professional MCCB (Molded Case Circuit Breakers) designed for heavy-duty industrial power distribution applications. Features high current capacity, adjustable trip settings, and superior breaking capacity for critical power protection in demanding environments.',
    image: getProductImageSrc('circuit-breakers-fuses'),
    
    seo: {
      title: 'MCCB Molded Case Circuit Breakers - Industrial Power Protection | Powerton Engineering',
      description: 'Heavy-duty MCCB molded case circuit breakers with high current capacity and adjustable trip settings for industrial applications.',
      keywords: 'MCCB circuit breakers, molded case breakers, industrial protection, power distribution, high current breakers, electrical protection',
      canonicalUrl: 'https://powertonengineering.in/products/mccb-molded-case-circuit-breakers'
    },
    
    categoryName: 'Electrical Components',
    categoryPath: '/products/electrical-components',
    subcategoryName: 'Circuit Breakers & Fuses',
    
    keyBenefits: [
      'High Current Capacity',
      'Adjustable Trip Settings',
      'Superior Breaking Capacity',
      'Robust Construction',
      'Selective Coordination',
      'Ground Fault Protection'
    ],
    
    specifications: [
      { label: 'Breaker Type', value: 'MCCB' },
      { label: 'Current Rating', value: '16A - 1600A' },
      { label: 'Pole Configuration', value: '3P, 4P' },
      { label: 'Breaking Capacity', value: '50kA' },
      { label: 'Voltage Rating', value: '415V/690V AC' },
      { label: 'Standard', value: 'IEC 60947' }
    ],
    
    features: [
      'Electronic Trip Units',
      'Adjustable Time Delays',
      'Ground Fault Protection',
      'Arc Flash Reduction',
      'Communication Capabilities',
      'Energy Monitoring',
      'Motor Protection Functions',
      'Selective Coordination'
    ],
    
    applications: [
      'Industrial Power Distribution',
      'Motor Control Centers',
      'Main Distribution Panels',
      'Generator Protection',
      'Transformer Protection',
      'Feeder Protection'
    ],
    
    industries: [
      'Manufacturing',
      'Power Generation',
      'Mining',
      'Oil & Gas',
      'Data Centers',
      'Commercial Buildings'
    ],
    
    certifications: [
      'IEC 60947 Compliant',
      'UL Listed',
      'CE Marked',
      'CSA Approved',
      'CCC Certified',
      'KEMA Tested'
    ],
    
    backButtonLabel: 'Back to Electrical Components'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Shield} />;
}