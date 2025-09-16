import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Gauge } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function MultimeterFluke87VIndustrial() {
  const productData: ProductDetailData = {
    id: 'multimeter-fluke-87v-industrial',
    title: 'Fluke 87V Industrial Multimeter - True RMS Digital',
    shortDescription: 'True RMS digital multimeter for industrial applications and troubleshooting',
    fullDescription: 'Professional True RMS digital multimeter designed for industrial applications requiring accurate measurements in the presence of variable frequency drives and other non-linear loads. Features advanced troubleshooting capabilities, CAT IV safety rating, and rugged construction.',
    image: getProductImageSrc('multimeters'),
    
    seo: {
      title: 'Fluke 87V Industrial Multimeter - True RMS Digital Meter',
      description: 'Professional Fluke 87V True RMS digital multimeter for industrial applications with CAT IV safety rating and advanced troubleshooting',
      keywords: 'Fluke 87V, industrial multimeter, True RMS, digital multimeter, electrical testing, CAT IV safety, industrial troubleshooting',
      canonicalUrl: '/products/multimeter-fluke-87v-industrial'
    },

    keyBenefits: [
      'True RMS Measurements',
      'CAT IV 600V Safety Rating',
      'Temperature Measurement',
      'Frequency Counter Function',
      'Industrial Grade Construction',
      'Advanced Troubleshooting Features'
    ],

    specifications: [
      { label: 'DC Voltage', value: '6V to 1000V, ±0.05%' },
      { label: 'AC Voltage', value: '6V to 1000V, ±0.7%' },
      { label: 'DC Current', value: '60μA to 10A, ±0.15%' },
      { label: 'AC Current', value: '60μA to 10A, ±1.0%' },
      { label: 'Resistance', value: '600Ω to 50MΩ' },
      { label: 'Safety Rating', value: 'CAT IV 600V, CAT III 1000V' }
    ],

    features: [
      'True RMS AC Voltage/Current',
      'Temperature Measurement',
      'Frequency Counter',
      'Duty Cycle Measurement',
      'Diode Test & Continuity',
      'Min/Max/Average Recording',
      'Peak Capture',
      'Relative Mode'
    ],

    applications: [
      'Industrial Troubleshooting',
      'Motor Drive Testing',
      'Power Quality Analysis',
      'HVAC Systems',
      'Process Control',
      'Electrical Maintenance'
    ],

    industries: [
      'Manufacturing',
      'Power Generation',
      'Oil & Gas',
      'Mining',
      'Water Treatment',
      'Building Automation'
    ],

    certifications: [
      'UL Listed',
      'CSA Certified',
      'CE Marked',
      'CAT IV 600V Rated',
      'IEC 61010',
      'RoHS Compliant'
    ],

    categoryName: 'Measurement Instruments',
    categoryPath: '/products/measurement-instruments',
    subcategoryName: 'Digital Multimeters'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Gauge} />;
}