import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Cable } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';
import { useTranslation } from 'react-i18next';

export default function CommunicationCables() {
  const { t } = useTranslation(['products', 'common']);

  const productData: ProductDetailData = {
    id: 'communication-cables',
    title: 'Communication Cables - High-Speed Data Transmission',
    shortDescription: 'Professional communication cables for reliable data transmission and networking',
    fullDescription: 'Advanced communication cables designed for high-speed data transmission in industrial and commercial networking applications. Features superior signal integrity, low loss characteristics, and excellent electromagnetic compatibility for reliable communication systems.',
    image: getProductImageSrc('cables-wires'),
    
    seo: {
      title: 'Communication Cables - Data Transmission & Networking | Powerton Engineering',
      description: 'Professional communication cables for high-speed data transmission, networking, and industrial communication systems.',
      keywords: 'communication cables, data cables, network cables, ethernet cables, industrial communication, data transmission',
      canonicalUrl: 'https://powertonengineering.in/products/communication-cables'
    },
    
    categoryName: 'Electrical Components',
    categoryPath: '/products/electrical-components',
    subcategoryName: 'Communication Cables',
    
    keyBenefits: [
      'High-Speed Data Transmission',
      'Superior Signal Integrity',
      'Low Electromagnetic Interference',
      'Wide Bandwidth Support',
      'Durable Construction',
      'Multiple Protocol Support'
    ],
    
    specifications: [
      { label: 'Cable Type', value: 'Category 6A' },
      { label: 'Bandwidth', value: '500 MHz' },
      { label: 'Maximum Length', value: '100m' },
      { label: 'Shielding', value: 'F/UTP' },
      { label: 'Impedance', value: '100 Ohm ±15%' },
      { label: 'Standard', value: 'TIA/EIA-568-B' }
    ],
    
    features: [
      'Category 6A Performance',
      'Foiled Twisted Pair Design',
      'Low Crosstalk Characteristics',
      'Flame Retardant Jacket',
      '10 Gigabit Ethernet Support',
      'PoE+ Compatible',
      'Easy Installation Design',
      'Color-Coded Identification'
    ],
    
    applications: [
      'Industrial Ethernet Networks',
      'Building Automation Systems',
      'Security Camera Systems',
      'VoIP Telephony',
      'Data Center Connections',
      'Office Network Infrastructure'
    ],
    
    industries: [
      'Telecommunications',
      'Data Centers',
      'Manufacturing',
      'Building Automation',
      'Security Systems',
      'Office Buildings'
    ],
    
    certifications: [
      'TIA/EIA-568-B Compliant',
      'CE Marked',
      'RoHS Compliant',
      'UL Listed',
      'ETL Verified',
      'ISO 11801 Certified'
    ],
    
    backButtonLabel: 'Back to Electrical Components'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Cable} />;
}