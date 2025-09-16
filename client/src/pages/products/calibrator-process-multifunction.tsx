import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Settings2 } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function CalibratorProcessMultifunction() {
  const productData: ProductDetailData = {
    id: 'calibrator-process-multifunction',
    title: 'Process Calibrators - Multifunction Systems',
    shortDescription: 'Comprehensive multifunction calibrators for process instrumentation',
    fullDescription: 'Advanced multifunction process calibrators providing comprehensive calibration capabilities for pressure, temperature, electrical signals, and process loops. Features high accuracy, multiple source and measurement functions, and HART communication support for complete instrument calibration.',
    image: getProductImageSrc('process-calibrators'),
    
    seo: {
      title: 'Multifunction Process Calibrators - Instrument Calibration Systems',
      description: 'Professional multifunction process calibrators for comprehensive pressure, temperature, and electrical signal calibration with HART support',
      keywords: 'process calibrators, multifunction calibrators, instrument calibration, pressure calibration, temperature calibration, HART calibrators',
      canonicalUrl: '/products/calibrator-process-multifunction'
    },

    keyBenefits: [
      'Multi-parameter Calibration',
      'High Accuracy & Precision',
      'HART Communication Support',
      'Automated Calibration Procedures',
      'Comprehensive Documentation',
      'Portable Design'
    ],

    specifications: [
      { label: 'Pressure Range', value: '-95 kPa to 10 MPa' },
      { label: 'Pressure Accuracy', value: '±0.025% of reading' },
      { label: 'Temperature Range', value: '-100°C to +1372°C' },
      { label: 'Electrical Accuracy', value: '±0.01% of reading' },
      { label: 'HART Protocol', value: 'HART 5/6/7 compliant' },
      { label: 'Battery Life', value: '24+ hours typical' }
    ],

    features: [
      'Multi-function Capability',
      'HART Communicator',
      'Automated Calibration',
      'Data Logging & Documentation',
      'Switch Test Function',
      'Loop Power Supply',
      'Digital Multimeter',
      'Rugged Construction'
    ],

    applications: [
      'Transmitter Calibration',
      'Control Valve Testing',
      'Temperature Sensor Verification',
      'Switch Testing',
      'Loop Troubleshooting',
      'Field Instrument Maintenance'
    ],

    industries: [
      'Oil & Gas',
      'Chemical Processing',
      'Power Generation',
      'Water Treatment',
      'Pharmaceutical',
      'Manufacturing'
    ],

    certifications: [
      'ISO 9001 Certified',
      'NIST Traceable',
      'CE Marked',
      'CSA Approved',
      'ATEX Intrinsically Safe',
      'IP67 Rated'
    ],

    categoryName: 'Instrumentation',
    categoryPath: '/products/instrumentation',
    subcategoryName: 'Process Calibrators'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Settings2} />;
}