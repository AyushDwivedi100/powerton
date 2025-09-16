import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Gauge } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function SensorPressureStrainGauge() {
  const productData: ProductDetailData = {
    id: 'sensor-pressure-strain-gauge',
    title: 'Pressure Sensors - Strain Gauge & Piezoresistive',
    shortDescription: 'Precision pressure sensors for critical process applications',
    fullDescription: 'High-performance pressure sensors utilizing strain gauge and piezoresistive technology for accurate pressure measurement in demanding industrial environments. Features excellent stability, wide pressure ranges, and comprehensive output options for diverse applications.',
    image: getProductImageSrc('pressure-sensors'),
    
    seo: {
      title: 'Pressure Sensors - Strain Gauge & Piezoresistive Industrial Sensors',
      description: 'Professional pressure sensors with strain gauge and piezoresistive technology for accurate industrial pressure measurement and monitoring',
      keywords: 'pressure sensors, strain gauge, piezoresistive sensors, industrial pressure, process monitoring, pressure transmitters',
      canonicalUrl: '/products/sensor-pressure-strain-gauge'
    },

    keyBenefits: [
      'Exceptional Accuracy & Linearity',
      'Wide Pressure Range Coverage',
      'Superior Temperature Compensation',
      'Excellent Long-term Stability',
      'Robust Construction',
      'Multiple Output Options'
    ],

    specifications: [
      { label: 'Pressure Range', value: '0-1 bar to 0-1000 bar' },
      { label: 'Accuracy', value: '±0.1% to ±0.5% FS' },
      { label: 'Operating Temperature', value: '-40°C to +125°C' },
      { label: 'Protection Rating', value: 'IP65/IP67' },
      { label: 'Output Signal', value: '4-20mA, 0-10V, Digital' },
      { label: 'Process Connection', value: 'G1/4" to G1" threads' }
    ],

    features: [
      'Strain Gauge Technology',
      'Piezoresistive Silicon Sensors',
      'Temperature Compensation',
      'Zero & Span Adjustment',
      'Overload Protection',
      'Reverse Polarity Protection',
      'EMC Compliant',
      'HART Protocol Support'
    ],

    applications: [
      'Process Pressure Monitoring',
      'Hydraulic System Control',
      'Pneumatic Applications',
      'Tank Level Measurement',
      'Pipeline Pressure Control',
      'Compressor Monitoring'
    ],

    industries: [
      'Oil & Gas',
      'Chemical Processing',
      'Water & Wastewater',
      'Power Generation',
      'Manufacturing',
      'HVAC Systems'
    ],

    certifications: [
      'CE Certified',
      'ATEX Approved',
      'IECEx Certified',
      'SIL 2 Rated',
      'UL Listed',
      'CSA Approved'
    ],

    categoryName: 'Instrumentation',
    categoryPath: '/products/instrumentation',
    subcategoryName: 'Pressure Sensors'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Gauge} />;
}