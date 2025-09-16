import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Waves } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function SensorFlowElectromagneticUltrasonic() {
  const productData: ProductDetailData = {
    id: 'sensor-flow-electromagnetic-ultrasonic',
    title: 'Flow Sensors - Electromagnetic & Ultrasonic',
    shortDescription: 'Advanced flow measurement sensors for liquid and gas applications',
    fullDescription: 'Comprehensive flow sensing solutions featuring electromagnetic and ultrasonic technologies for accurate measurement of liquid and gas flow rates. Offers non-intrusive measurement, high accuracy, and reliable performance in challenging process conditions.',
    image: getProductImageSrc('flow-sensors'),
    
    seo: {
      title: 'Flow Sensors - Electromagnetic & Ultrasonic Flow Meters',
      description: 'Professional flow sensors using electromagnetic and ultrasonic technology for accurate liquid and gas flow measurement in industrial applications',
      keywords: 'flow sensors, electromagnetic flow meters, ultrasonic flow sensors, flow measurement, process monitoring, liquid flow',
      canonicalUrl: '/products/sensor-flow-electromagnetic-ultrasonic'
    },

    keyBenefits: [
      'Non-intrusive Measurement',
      'High Accuracy & Repeatability',
      'Wide Flow Range',
      'No Pressure Drop',
      'Low Maintenance Requirements',
      'Bidirectional Flow Detection'
    ],

    specifications: [
      { label: 'Flow Range', value: '0.1 m/s to 15 m/s' },
      { label: 'Accuracy', value: '±0.5% to ±2.0% FS' },
      { label: 'Pipe Diameter', value: '25mm to 3000mm' },
      { label: 'Operating Temperature', value: '-20°C to +180°C' },
      { label: 'Protection Rating', value: 'IP67/IP68' },
      { label: 'Output Signal', value: '4-20mA, Pulse, Digital' }
    ],

    features: [
      'Electromagnetic Induction Technology',
      'Transit-time Ultrasonic Method',
      'Clamp-on Installation',
      'Battery Powered Options',
      'Data Logging Capability',
      'Multi-language Display',
      'Totalizer Function',
      'Alarm & Control Outputs'
    ],

    applications: [
      'Water & Wastewater Treatment',
      'Chemical Process Control',
      'Food & Beverage Production',
      'Oil & Gas Pipeline Monitoring',
      'HVAC System Control',
      'Mining Slurry Measurement'
    ],

    industries: [
      'Water Treatment',
      'Chemical & Petrochemical',
      'Food & Beverage',
      'Oil & Gas',
      'Mining & Minerals',
      'Pulp & Paper'
    ],

    certifications: [
      'CE Certified',
      'ATEX Approved',
      'IECEx Certified',
      'NSF Approved',
      'WRAS Certified',
      'MID Compliant'
    ],

    categoryName: 'Instrumentation',
    categoryPath: '/products/instrumentation',
    subcategoryName: 'Flow Sensors'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Waves} />;
}