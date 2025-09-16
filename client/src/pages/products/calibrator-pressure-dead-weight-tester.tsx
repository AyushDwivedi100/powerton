import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Scale } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function CalibratorPressureDeadWeightTester() {
  const productData: ProductDetailData = {
    id: 'calibrator-pressure-dead-weight-tester',
    title: 'Pressure Calibrators - Dead Weight Tester Systems',
    shortDescription: 'Primary pressure standards and dead weight tester calibration systems',
    fullDescription: 'High-accuracy pressure calibration systems using dead weight tester technology for primary pressure standards. Provides exceptional accuracy and reliability for calibrating pressure instruments, transmitters, and gauges across wide pressure ranges.',
    image: getProductImageSrc('pressure-calibrators'),
    
    seo: {
      title: 'Dead Weight Tester Pressure Calibrators - Primary Standards',
      description: 'Professional dead weight tester pressure calibrators for high-accuracy primary pressure standard calibration systems',
      keywords: 'dead weight tester, pressure calibrators, primary pressure standards, pressure calibration, hydraulic calibrators, pneumatic calibrators',
      canonicalUrl: '/products/calibrator-pressure-dead-weight-tester'
    },

    keyBenefits: [
      'Primary Pressure Standard',
      'Exceptional Accuracy',
      'Wide Pressure Range',
      'Superior Long-term Stability',
      'Traceable Calibration',
      'Automated Operation'
    ],

    specifications: [
      { label: 'Pressure Range', value: '1 kPa to 100 MPa' },
      { label: 'Accuracy', value: '±0.008% to ±0.05% FS' },
      { label: 'Pressure Medium', value: 'Air, Nitrogen, Oil' },
      { label: 'Operating Temperature', value: '15°C to 35°C' },
      { label: 'Weight Accuracy', value: 'Class M1 or better' },
      { label: 'Reproducibility', value: '±0.002% FS' }
    ],

    features: [
      'Dead Weight Technology',
      'Precision Piston-Cylinder',
      'Automated Weight Loading',
      'Digital Pressure Display',
      'Temperature Compensation',
      'Multiple Pressure Ranges',
      'Data Acquisition System',
      'Traceability Documentation'
    ],

    applications: [
      'Primary Pressure Standards',
      'Transmitter Calibration',
      'Gauge Calibration',
      'Switch Testing',
      'Laboratory Standards',
      'Quality Control'
    ],

    industries: [
      'Calibration Laboratories',
      'Oil & Gas',
      'Aerospace',
      'Nuclear Power',
      'Research Institutes',
      'Standards Organizations'
    ],

    certifications: [
      'NIST Traceable',
      'ISO/IEC 17025',
      'OIML R111 Compliant',
      'CE Certified',
      'A2LA Accredited',
      'Primary Standard'
    ],

    categoryName: 'Instrumentation',
    categoryPath: '/products/instrumentation',
    subcategoryName: 'Pressure Calibrators'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Scale} />;
}