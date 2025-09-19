import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Zap } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';
import { useTranslation } from 'react-i18next';

export default function SignalConnectors() {
  const { t } = useTranslation(['products', 'common']);

  const productData: ProductDetailData = {
    id: 'signal-connectors',
    title: 'Signal Connectors - Precision Miniature Connections',
    shortDescription: 'High-precision miniature connectors for signal transmission and instrumentation',
    fullDescription: 'Precision miniature connectors designed for accurate signal transmission in instrumentation and control applications. Features excellent electrical performance, compact design, and superior EMI shielding for critical signal connections.',
    image: getProductImageSrc('connectors-terminals'),
    
    seo: {
      title: 'Signal Connectors - Precision Miniature Signal Connections | Powerton Engineering',
      description: 'High-precision miniature signal connectors with excellent electrical performance and EMI shielding for instrumentation applications.',
      keywords: 'signal connectors, miniature connectors, precision connectors, instrumentation connectors, low voltage connectors, EMI shielding',
      canonicalUrl: 'https://powertonengineering.in/products/signal-connectors'
    },
    
    categoryName: 'Electrical Components',
    categoryPath: '/products/electrical-components',
    subcategoryName: 'Signal Connectors',
    
    keyBenefits: [
      'High Signal Integrity',
      'Compact Design',
      'Superior EMI Shielding',
      'Low Contact Resistance',
      'Easy Assembly',
      'Reliable Performance'
    ],
    
    specifications: [
      { label: 'Connector Type', value: 'Miniature' },
      { label: 'Pin Configuration', value: '2-50 Pins' },
      { label: 'Current Rating', value: '5A' },
      { label: 'Voltage Rating', value: '250V' },
      { label: 'EMI Shielding', value: '360° EMI Protection' },
      { label: 'Contact Material', value: 'Gold Plated' }
    ],
    
    features: [
      '360° EMI Shielding',
      'Gold-Plated Contacts',
      'Low Profile Design',
      'Color-Coded Housings',
      'Positive Locking System',
      'Cable Strain Relief',
      'PCB Mount Options',
      'High Density Configuration'
    ],
    
    applications: [
      'Instrumentation Systems',
      'Data Acquisition',
      'Signal Processing',
      'Test Equipment',
      'Control Systems',
      'Medical Devices'
    ],
    
    industries: [
      'Instrumentation',
      'Test & Measurement',
      'Medical Devices',
      'Industrial Automation',
      'Telecommunications',
      'Aerospace'
    ],
    
    certifications: [
      'UL Listed',
      'CE Marked',
      'RoHS Compliant',
      'IPC Standards',
      'MIL-STD Qualified',
      'ISO 9001 Certified'
    ],
    
    backButtonLabel: 'Back to Electrical Components'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Zap} />;
}