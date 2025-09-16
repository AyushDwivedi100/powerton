import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Radio } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function ConnectorSignalPrecisionMiniature() {
  const productData: ProductDetailData = {
    id: 'connector-signal-precision-miniature',
    title: 'Signal Connectors - Precision Miniature Systems',
    shortDescription: 'High-density connectors for instrumentation and data applications',
    fullDescription: 'Advanced precision signal connectors designed for high-density instrumentation and data transmission applications. Features low noise characteristics, excellent signal integrity, and miniature form factors for space-critical installations.',
    image: getProductImageSrc('signal-connectors'),
    
    seo: {
      title: 'Precision Signal Connectors - Miniature Instrumentation Systems',
      description: 'Professional precision signal connectors for high-density instrumentation and data transmission with excellent signal integrity',
      keywords: 'signal connectors, precision connectors, miniature connectors, instrumentation connectors, data connectors, low noise connectors',
      canonicalUrl: '/products/connector-signal-precision-miniature'
    },

    keyBenefits: [
      'High Signal Integrity',
      'Low Noise Characteristics',
      'Miniature Form Factor',
      'High Contact Density',
      'Excellent Repeatability',
      'Superior Reliability'
    ],

    specifications: [
      { label: 'Contact Pitch', value: '0.8mm to 2.54mm' },
      { label: 'Contact Count', value: '2 to 200 contacts' },
      { label: 'Current Rating', value: '1A to 5A per contact' },
      { label: 'Voltage Rating', value: '50V to 500V' },
      { label: 'Operating Temperature', value: '-55°C to +125°C' },
      { label: 'Mating Cycles', value: '>1000 cycles' }
    ],

    features: [
      'Gold-Plated Contacts',
      'Shielded Construction',
      'Precision Machined Housings',
      'Low Profile Design',
      'Positive Locking',
      'PCB Mount Options',
      'Cable Assembly Ready',
      'EMI/RFI Protection'
    ],

    applications: [
      'Instrumentation Systems',
      'Data Acquisition',
      'Test & Measurement',
      'Aerospace Applications',
      'Medical Equipment',
      'Laboratory Instruments'
    ],

    industries: [
      'Instrumentation',
      'Aerospace & Defense',
      'Medical Devices',
      'Test & Measurement',
      'Research & Development',
      'Telecommunications'
    ],

    certifications: [
      'UL Listed',
      'CSA Certified',
      'MIL-DTL-38999',
      'IEC 61076',
      'RoHS Compliant',
      'REACH Compliant'
    ],

    categoryName: 'Electrical Components',
    categoryPath: '/products/electrical-components',
    subcategoryName: 'Signal Connectors'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Radio} />;
}