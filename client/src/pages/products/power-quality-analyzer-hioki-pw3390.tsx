import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Activity } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function PowerQualityAnalyzerHiokiPW3390() {
  const productData: ProductDetailData = {
    id: 'power-quality-analyzer-hioki-pw3390',
    title: 'Hioki PW3390 Power Quality Analyzer',
    shortDescription: 'Portable power quality analyzer for field measurements and monitoring',
    fullDescription: 'Compact portable power quality analyzer designed for field measurements and real-time monitoring of electrical systems. Features voltage dip detection, flicker measurement, energy assessment, and comprehensive power quality analysis in a rugged handheld package.',
    image: getProductImageSrc('power-quality-analyzers'),
    
    seo: {
      title: 'Hioki PW3390 Power Quality Analyzer - Portable Field Measurement',
      description: 'Professional Hioki PW3390 portable power quality analyzer for field measurements and real-time electrical system monitoring',
      keywords: 'Hioki PW3390, portable power analyzer, field measurement, voltage dip detection, flicker measurement, energy assessment',
      canonicalUrl: '/products/power-quality-analyzer-hioki-pw3390'
    },

    keyBenefits: [
      'Portable Field Operation',
      'Real-time Analysis',
      'Battery Powered Design',
      'Intuitive User Interface',
      'Comprehensive Measurements',
      'Robust Construction'
    ],

    specifications: [
      { label: 'Voltage Range', value: '90V to 780V AC' },
      { label: 'Current Range', value: '500A AC with clamps' },
      { label: 'Frequency', value: '45 Hz to 65 Hz' },
      { label: 'Harmonics', value: 'Up to 40th order' },
      { label: 'Battery Life', value: '7 hours continuous' },
      { label: 'Display', value: '5.7" color LCD' }
    ],

    features: [
      'Voltage Dip Detection',
      'Flicker Measurement',
      'Energy Assessment',
      'Real-time Analysis',
      'Trend Recording',
      'Event Capture',
      'Waveform Display',
      'USB Data Transfer'
    ],

    applications: [
      'Field Power Quality Surveys',
      'Energy Audits',
      'Electrical Troubleshooting',
      'Load Analysis',
      'Motor Testing',
      'UPS System Evaluation'
    ],

    industries: [
      'Electrical Contractors',
      'Manufacturing',
      'Commercial Buildings',
      'Educational Facilities',
      'Healthcare',
      'Service Companies'
    ],

    certifications: [
      'IEC 61000-4-30 Class S',
      'IEC 61000-4-15',
      'CE Certified',
      'Safety CAT III 600V',
      'CAT IV 300V',
      'IP54 Rating'
    ],

    categoryName: 'Instrumentation',
    categoryPath: '/products/instrumentation',
    subcategoryName: 'Power Quality Analyzers'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Activity} />;
}