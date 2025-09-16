import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { BarChart3 } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function TransmitterLevelUltrasonicRadar() {
  const productData: ProductDetailData = {
    id: 'transmitter-level-ultrasonic-radar',
    title: 'Level Transmitters - Ultrasonic & Radar Technology',
    shortDescription: 'Non-contact level measurement with ultrasonic and radar technology',
    fullDescription: 'Advanced level transmitters utilizing ultrasonic and radar technologies for accurate, non-contact level measurement of liquids, solids, and slurries. Provides reliable measurement regardless of media properties, temperature, or vapor conditions.',
    image: getProductImageSrc('level-transmitters'),
    
    seo: {
      title: 'Ultrasonic & Radar Level Transmitters - Non-contact Measurement',
      description: 'Professional ultrasonic and radar level transmitters for accurate non-contact measurement of liquids, solids, and slurries',
      keywords: 'ultrasonic level transmitters, radar level transmitters, non-contact level, tank level measurement, guided wave radar',
      canonicalUrl: '/products/transmitter-level-ultrasonic-radar'
    },

    keyBenefits: [
      'Non-contact Measurement',
      'Media-independent Operation',
      'High Accuracy & Reliability',
      'No Maintenance Requirements',
      'Wide Range Capability',
      'Harsh Environment Performance'
    ],

    specifications: [
      { label: 'Measurement Range', value: '0.3m to 35m' },
      { label: 'Accuracy', value: '±1mm to ±3mm' },
      { label: 'Operating Temperature', value: '-40°C to +200°C' },
      { label: 'Process Pressure', value: 'Vacuum to 40 bar' },
      { label: 'Frequency', value: '26 GHz, 80 GHz radar' },
      { label: 'Output', value: '4-20mA, HART, Profibus' }
    ],

    features: [
      'Frequency Modulated Radar',
      'Guided Wave Radar Option',
      'Echo Tracking Algorithm',
      'False Echo Suppression',
      'Advanced Signal Processing',
      'Multi-echo Evaluation',
      'Built-in Linearization',
      'Graphical Setup Interface'
    ],

    applications: [
      'Tank Level Monitoring',
      'Silo & Bin Measurement',
      'Open Channel Flow',
      'Interface Level Detection',
      'Slurry & Solid Materials',
      'Waste Water Treatment'
    ],

    industries: [
      'Chemical & Petrochemical',
      'Oil & Gas',
      'Water & Wastewater',
      'Food & Beverage',
      'Mining & Minerals',
      'Power Generation'
    ],

    certifications: [
      'SIL 2/3 Certified',
      'ATEX/IECEx Approved',
      'FCC/ETSI Compliant',
      'ASME B31.3',
      'PED Directive',
      'WHG Approved'
    ],

    categoryName: 'Instrumentation',
    categoryPath: '/products/instrumentation',
    subcategoryName: 'Level Transmitters'
  };

  return <ProductDetailTemplate product={productData} heroIcon={BarChart3} />;
}