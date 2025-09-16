import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Cpu } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';
import { useTranslation } from 'react-i18next';

export default function PLCAllenBradleyCompactLogix5380() {
  const { t } = useTranslation(['products', 'common', 'products-data']);

  const productData: ProductDetailData = {
    id: 'plc-allen-bradley-compactlogix-5380',
    title: 'Allen-Bradley CompactLogix 5380',
    shortDescription: 'High-performance PLC with integrated safety capabilities',
    fullDescription: 'The Allen-Bradley CompactLogix 5380 is a high-performance PLC controller featuring integrated safety capabilities, EtherNet/IP communication, and Studio 5000 programming environment. Designed for complex automation applications with excellent motion control integration.',
    image: getProductImageSrc('plcs'),
    
    seo: {
      title: 'Allen-Bradley CompactLogix 5380 PLC - Industrial Controller',
      description: 'Advanced Allen-Bradley CompactLogix 5380 PLC with integrated safety and motion control for industrial automation',
      keywords: 'Allen Bradley PLC, CompactLogix 5380, industrial controller, Studio 5000, EtherNet/IP',
      canonicalUrl: '/products/plc-allen-bradley-compactlogix-5380'
    },

    keyBenefits: [
      'Integrated Safety Capabilities',
      'EtherNet/IP Communication',
      'Studio 5000 Programming',
      'Motion Control Integration',
      'High-Speed Processing',
      'Scalable I/O System'
    ],

    specifications: [
      { label: 'CPU Type', value: 'Dual-core ARM processor' },
      { label: 'Memory', value: '10 MB user memory' },
      { label: 'I/O Capacity', value: 'Up to 4096 points' },
      { label: 'Communication', value: 'EtherNet/IP, DeviceNet' },
      { label: 'Safety Rating', value: 'SIL 3 / PLe / Cat 4' },
      { label: 'Programming', value: 'Studio 5000 Logix Designer' }
    ],

    features: [
      'Integrated Safety Functions',
      'EtherNet/IP Communication',
      'Studio 5000 Programming',
      'Motion Control Integration', 
      'High-Speed Processing',
      'Scalable I/O System'
    ],

    applications: [
      'Complex Manufacturing',
      'Motion Control Systems',
      'Safety Applications',
      'Process Integration',
      'Material Handling',
      'Packaging Machinery'
    ],

    industries: [
      'Automotive',
      'Packaging',
      'Material Handling',
      'Food & Beverage',
      'Consumer Products',
      'Life Sciences'
    ],

    certifications: [
      'CE Certified',
      'UL Listed',
      'CSA Approved',
      'SIL 3 Rated',
      'TÜV Certified',
      'FCC Class A'
    ],

    categoryName: 'Automation & Control',
    categoryPath: '/products/automation',
    subcategoryName: 'PLCs'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Cpu} />;
}