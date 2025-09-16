import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Smartphone } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function HMIMobile() {
  const productData: ProductDetailData = {
    id: 'hmi-mobile',
    title: 'Mobile HMI',
    shortDescription: 'Mobile solutions for remote process monitoring',
    fullDescription: 'Innovative mobile HMI solutions providing wireless connectivity, mobile app support, and real-time notifications. Enables remote process monitoring and control from tablets and smartphones with secure authentication and encrypted communications.',
    image: getProductImageSrc('hmi'),
    
    seo: {
      title: 'Mobile HMI - Wireless Process Monitoring Solution',
      description: 'Advanced mobile HMI solutions with wireless connectivity for remote process monitoring and control from mobile devices',
      keywords: 'mobile HMI, wireless monitoring, remote control, mobile SCADA, tablet HMI, smartphone interface',
      canonicalUrl: '/products/hmi-mobile'
    },

    keyBenefits: [
      'Wireless Connectivity',
      'Mobile App Support',
      'Remote Access Capability',
      'Real-time Notifications',
      'Secure Authentication',
      'Cross-platform Compatibility'
    ],

    specifications: [
      { label: 'Connectivity', value: 'Wi-Fi, 4G/LTE, Ethernet' },
      { label: 'Platforms', value: 'iOS, Android, Windows' },
      { label: 'Security', value: 'SSL/TLS encryption, VPN support' },
      { label: 'Operating Range', value: 'Up to 1000m wireless range' },
      { label: 'Battery Life', value: '8-12 hours typical use' },
      { label: 'Screen Size', value: '7" to 12" tablet displays' }
    ],

    features: [
      'Wireless Communication',
      'Native Mobile Apps',
      'Remote Process Access',
      'Push Notifications',
      'Offline Mode Support',
      'GPS Location Services',
      'Voice Commands',
      'Gesture Control'
    ],

    applications: [
      'Field Operations',
      'Remote Monitoring',
      'Mobile Maintenance',
      'Emergency Response',
      'Asset Inspection',
      'Data Collection'
    ],

    industries: [
      'Oil & Gas',
      'Utilities',
      'Mining',
      'Agriculture',
      'Transportation',
      'Environmental Monitoring'
    ],

    certifications: [
      'CE Certified',
      'FCC Approved',
      'IP67 Rated',
      'ATEX Zone 2',
      'IECEx Certified',
      'Cybersecurity Certified'
    ],

    categoryName: 'Automation & Control',
    categoryPath: '/products/automation',
    subcategoryName: 'HMI'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Smartphone} />;
}