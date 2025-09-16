import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Wifi } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function SpectrumAnalyzerAnritsuMS2720TMaster() {
  const productData: ProductDetailData = {
    id: 'spectrum-analyzer-anritsu-ms2720t-master',
    title: 'Anritsu MS2720T Spectrum Master Handheld Analyzer',
    shortDescription: 'Handheld spectrum analyzer for field measurements and maintenance',
    fullDescription: 'Professional handheld spectrum analyzer designed for field measurements, installation, and maintenance applications. Features portable design, cable and antenna testing capabilities, interference hunting tools, and comprehensive field measurement functions.',
    image: getProductImageSrc('spectrum-analyzers'),
    
    seo: {
      title: 'Anritsu MS2720T Spectrum Master Handheld Analyzer',
      description: 'Professional Anritsu MS2720T handheld spectrum analyzer for field measurements with cable testing and interference hunting',
      keywords: 'Anritsu MS2720T, Spectrum Master, handheld analyzer, field measurements, cable testing, interference hunting',
      canonicalUrl: '/products/spectrum-analyzer-anritsu-ms2720t-master'
    },

    keyBenefits: [
      'Field Portable Design',
      'Cable & Antenna Testing',
      'Interference Hunting Tools',
      'Long Battery Life',
      'Rugged Construction',
      'Easy Field Operation'
    ],

    specifications: [
      { label: 'Frequency Range', value: '9 kHz to 9 GHz' },
      { label: 'DANL', value: '-161 dBm at 1 GHz' },
      { label: 'Phase Noise', value: '-98 dBc/Hz at 10 kHz offset' },
      { label: 'Battery Life', value: '>3.5 hours continuous' },
      { label: 'Weight', value: '3.4 kg with battery' },
      { label: 'Display', value: '6.5" color LCD' }
    ],

    features: [
      'Portable Handheld Design',
      'Cable & Antenna Analysis',
      'Interference Analysis',
      'Channel Scanner',
      'GPS Location Recording',
      'Built-in Help System',
      'Data Storage & Recall',
      'PC Connectivity'
    ],

    applications: [
      'Field Measurements',
      'Site Surveys',
      'Interference Hunting',
      'Cable Testing',
      'Antenna Analysis',
      'Installation & Maintenance'
    ],

    industries: [
      'Telecommunications',
      'Broadcasting',
      'Public Safety',
      'Military & Defense',
      'Field Service',
      'RF Engineering'
    ],

    certifications: [
      'CE Marked',
      'FCC Compliant',
      'UL Listed',
      'IEC 61010',
      'MIL-PRF-28800F',
      'IP54 Rated'
    ],

    categoryName: 'Measurement Instruments',
    categoryPath: '/products/measurement-instruments',
    subcategoryName: 'Spectrum Analyzers'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Wifi} />;
}