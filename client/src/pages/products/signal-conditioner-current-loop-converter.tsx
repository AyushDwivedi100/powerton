import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { ArrowRightLeft } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function SignalConditionerCurrentLoopConverter() {
  const productData: ProductDetailData = {
    id: 'signal-conditioner-current-loop-converter',
    title: 'Current Loop Converters & Repeaters',
    shortDescription: 'Signal conversion and loop isolation for 4-20mA systems',
    fullDescription: 'Specialized current loop converters and signal repeaters for 4-20mA industrial control systems. Provides signal isolation, conversion, splitting, and amplification with high accuracy and excellent long-term stability for process automation applications.',
    image: getProductImageSrc('current-loop-converters'),
    
    seo: {
      title: 'Current Loop Converters & 4-20mA Signal Repeaters',
      description: 'Professional current loop converters and 4-20mA signal repeaters for industrial process control and signal isolation',
      keywords: '4-20mA converters, current loop repeaters, signal isolation, process control, loop powered, signal splitting',
      canonicalUrl: '/products/signal-conditioner-current-loop-converter'
    },

    keyBenefits: [
      'Loop-powered Operation',
      'Signal Isolation & Splitting',
      'High Accuracy Conversion',
      'Superior Stability',
      'Easy Installation',
      'Maintenance-free Operation'
    ],

    specifications: [
      { label: 'Input Range', value: '4-20mA, 0-20mA' },
      { label: 'Output Range', value: '4-20mA, 0-10V, 1-5V' },
      { label: 'Accuracy', value: '±0.1% to ±0.25% FS' },
      { label: 'Isolation', value: '1.5kV to 2.5kV' },
      { label: 'Temperature Drift', value: '±50ppm/°C' },
      { label: 'Response Time', value: '<10ms' }
    ],

    features: [
      'Loop-powered Design',
      'Signal Isolation',
      'Signal Splitting',
      'Signal Conversion',
      'HART Transparency',
      'Fail-safe Operation',
      'Compact Housing',
      'DIN Rail Mounting'
    ],

    applications: [
      '4-20mA Signal Isolation',
      'Signal Distribution',
      'Loop Extension',
      'Signal Conversion',
      'Process Monitoring',
      'Control System Interface'
    ],

    industries: [
      'Process Industries',
      'Oil & Gas',
      'Chemical Processing',
      'Water Treatment',
      'Power Generation',
      'Manufacturing'
    ],

    certifications: [
      'CE Certified',
      'UL Listed',
      'CSA Approved',
      'ATEX Certified',
      'IECEx Approved',
      'FM Approved'
    ],

    categoryName: 'Instrumentation',
    categoryPath: '/products/instrumentation',
    subcategoryName: 'Signal Conditioners'
  };

  return <ProductDetailTemplate product={productData} heroIcon={ArrowRightLeft} />;
}