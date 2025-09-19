import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Zap } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';
import { useTranslation } from 'react-i18next';

export default function IndustrialConnectors() {
  const { t } = useTranslation(['products', 'common']);

  const productData: ProductDetailData = {
    id: 'industrial-connectors',
    title: 'Industrial Connectors - Heavy-Duty Power & Signal',
    shortDescription: 'Robust industrial connectors for reliable power and signal connections',
    fullDescription: 'Heavy-duty industrial connectors designed for harsh environments requiring reliable electrical connections. Features robust construction, high current capacity, and excellent environmental protection for critical industrial applications.',
    image: getProductImageSrc('connectors-terminals'),
    
    seo: {
      title: 'Industrial Connectors - Heavy-Duty Power & Signal Connections | Powerton Engineering',
      description: 'Robust industrial connectors with high current capacity and environmental protection for reliable electrical connections.',
      keywords: 'industrial connectors, heavy duty connectors, power connectors, signal connectors, electrical connectors, IP67 connectors',
      canonicalUrl: 'https://powertonengineering.in/products/industrial-connectors'
    },
    
    categoryName: 'Electrical Components',
    categoryPath: '/products/electrical-components',
    subcategoryName: 'Industrial Connectors',
    
    keyBenefits: [
      'Heavy-Duty Construction',
      'High Current Capacity',
      'Environmental Protection',
      'Quick Connection System',
      'Vibration Resistant',
      'Wide Operating Temperature'
    ],
    
    specifications: [
      { label: 'Connector Type', value: 'Heavy Duty' },
      { label: 'Pin Configuration', value: '3-128 Pins' },
      { label: 'Current Rating', value: '16A - 400A' },
      { label: 'Voltage Rating', value: '690V' },
      { label: 'Protection Rating', value: 'IP67' },
      { label: 'Operating Temperature', value: '-40°C to +125°C' }
    ],
    
    features: [
      'Bayonet Locking System',
      'Gold-Plated Contacts',
      'Integrated Cable Clamping',
      'Push-Pull Coupling',
      'Keying Options Available',
      'EMI/RFI Shielding',
      'Corrosion Resistant',
      'Tool-Free Assembly'
    ],
    
    applications: [
      'Industrial Machinery',
      'Power Distribution',
      'Motor Connections',
      'Control Cabinet Wiring',
      'Outdoor Installations',
      'Mobile Equipment'
    ],
    
    industries: [
      'Manufacturing',
      'Construction Equipment',
      'Marine Applications',
      'Mining Equipment',
      'Railway Systems',
      'Renewable Energy'
    ],
    
    certifications: [
      'IEC 60309 Compliant',
      'UL Listed',
      'CE Marked',
      'IP67 Rated',
      'RoHS Compliant',
      'CSA Approved'
    ],
    
    backButtonLabel: 'Back to Electrical Components'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Zap} />;
}