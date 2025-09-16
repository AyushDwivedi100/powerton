import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Target } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function CalibratorTemperaturePrecisionReference() {
  const productData: ProductDetailData = {
    id: 'calibrator-temperature-precision-reference',
    title: 'Temperature Calibrators - Precision Reference Standards',
    shortDescription: 'High-precision temperature calibration references and dry-well systems',
    fullDescription: 'Professional temperature calibration systems including dry-well calibrators, temperature baths, and precision reference thermometers. Provides superior accuracy and stability for calibrating temperature sensors, transmitters, and recording instruments.',
    image: getProductImageSrc('temperature-calibrators'),
    
    seo: {
      title: 'Precision Temperature Calibrators - Reference Standards & Dry Wells',
      description: 'Professional temperature calibrators with precision reference standards for accurate sensor and transmitter calibration',
      keywords: 'temperature calibrators, dry well calibrators, temperature reference, precision calibration, RTD calibration, thermocouple calibration',
      canonicalUrl: '/products/calibrator-temperature-precision-reference'
    },

    keyBenefits: [
      'Superior Temperature Stability',
      'Wide Temperature Range',
      'Fast Stabilization Time',
      'High Accuracy Standards',
      'Multiple Sensor Compatibility',
      'Automated Calibration Cycles'
    ],

    specifications: [
      { label: 'Temperature Range', value: '-45°C to +1200°C' },
      { label: 'Stability', value: '±0.02°C to ±0.1°C' },
      { label: 'Accuracy', value: '±0.05°C to ±0.5°C' },
      { label: 'Stabilization Time', value: '3-15 minutes' },
      { label: 'Well Depth', value: '150mm to 200mm' },
      { label: 'Insert Diameter', value: '6.35mm to 25.4mm' }
    ],

    features: [
      'Dry-well Technology',
      'Precision Reference Probe',
      'Auto-tuning Temperature Control',
      'Multiple Insert Options',
      'Programmable Set Points',
      'Data Logging Capability',
      'Switch Test Function',
      'Portable Design'
    ],

    applications: [
      'RTD Calibration',
      'Thermocouple Verification',
      'Temperature Switch Testing',
      'Transmitter Calibration',
      'Sensor Characterization',
      'Quality Control Testing'
    ],

    industries: [
      'Calibration Laboratories',
      'Pharmaceutical',
      'Food & Beverage',
      'Chemical Processing',
      'Aerospace',
      'Automotive'
    ],

    certifications: [
      'NIST Traceable',
      'ISO/IEC 17025',
      'CE Certified',
      'A2LA Accredited',
      'NVLAP Recognized',
      'ITS-90 Compliant'
    ],

    categoryName: 'Instrumentation',
    categoryPath: '/products/instrumentation',
    subcategoryName: 'Temperature Calibrators'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Target} />;
}