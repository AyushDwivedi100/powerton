import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { BarChart3 } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function PowerQualityAnalyzerFluke435II() {
  const productData: ProductDetailData = {
    id: 'power-quality-analyzer-fluke-435-ii',
    title: 'Fluke 435-II Power Quality Analyzer',
    shortDescription: 'Three-phase power quality analyzer for comprehensive electrical system analysis',
    fullDescription: 'Professional three-phase power quality analyzer providing comprehensive measurement and analysis of electrical power systems. Features advanced harmonics analysis, transient capture, power logging, and voltage quality assessment for troubleshooting and monitoring electrical installations.',
    image: getProductImageSrc('power-quality-analyzers'),
    
    seo: {
      title: 'Fluke 435-II Power Quality Analyzer - Three-Phase Electrical Analysis',
      description: 'Professional Fluke 435-II power quality analyzer for comprehensive three-phase electrical system analysis and power monitoring',
      keywords: 'Fluke 435-II, power quality analyzer, three-phase analyzer, harmonics analysis, power monitoring, electrical troubleshooting',
      canonicalUrl: '/products/power-quality-analyzer-fluke-435-ii'
    },

    keyBenefits: [
      'Comprehensive Power Analysis',
      'Advanced Harmonics Detection',
      'Transient Capture & Analysis',
      'Long-term Data Logging',
      'Easy-to-use Interface',
      'Professional Reporting'
    ],

    specifications: [
      { label: 'Voltage Range', value: '1000V AC (phase-phase)' },
      { label: 'Current Range', value: '20kA AC with clamps' },
      { label: 'Frequency Range', value: '42.5 Hz to 69 Hz' },
      { label: 'Harmonics', value: 'Up to 50th harmonic' },
      { label: 'Memory', value: '8 GB internal memory' },
      { label: 'Display', value: '7" color touchscreen' }
    ],

    features: [
      'Three-phase Measurement',
      'Harmonics & Interharmonics',
      'Voltage Dips & Swells',
      'Transient Detection',
      'Power & Energy Logging',
      'Flicker Analysis',
      'Unbalance Measurement',
      'PowerLog Function'
    ],

    applications: [
      'Power Quality Troubleshooting',
      'Energy Efficiency Studies',
      'Harmonics Analysis',
      'Load Studies',
      'Predictive Maintenance',
      'Compliance Testing'
    ],

    industries: [
      'Utilities',
      'Manufacturing',
      'Data Centers',
      'Healthcare Facilities',
      'Commercial Buildings',
      'Industrial Plants'
    ],

    certifications: [
      'IEC 61000-4-30 Class A',
      'IEC 61000-4-15',
      'IEC 61000-4-7',
      'CE Certified',
      'Safety CAT IV 600V',
      'CAT III 1000V'
    ],

    categoryName: 'Instrumentation',
    categoryPath: '/products/instrumentation',
    subcategoryName: 'Power Quality Analyzers'
  };

  return <ProductDetailTemplate product={productData} heroIcon={BarChart3} />;
}