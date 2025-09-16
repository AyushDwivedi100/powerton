import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Wifi } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function CableCommunicationFieldbusEthernet() {
  const productData: ProductDetailData = {
    id: 'cable-communication-fieldbus-ethernet',
    title: 'Communication Cables - Fieldbus & Industrial Ethernet',
    shortDescription: 'Specialized cables for industrial communication networks',
    fullDescription: 'Advanced communication cables designed for industrial fieldbus and Ethernet networks including PROFIBUS, DeviceNet, EtherNet/IP, and PROFINET. Features optimized electrical characteristics, EMI immunity, and rugged construction for reliable data transmission.',
    image: getProductImageSrc('communication-cables'),
    
    seo: {
      title: 'Industrial Communication Cables - Fieldbus & Ethernet Networks',
      description: 'Professional communication cables for industrial fieldbus and Ethernet networks with EMI immunity and optimized electrical characteristics',
      keywords: 'communication cables, fieldbus cables, industrial ethernet, PROFIBUS, DeviceNet, EtherNet/IP, PROFINET, data cables',
      canonicalUrl: '/products/cable-communication-fieldbus-ethernet'
    },

    keyBenefits: [
      'Optimized Electrical Characteristics',
      'Superior EMI Immunity',
      'High Data Transmission Rate',
      'Rugged Industrial Construction',
      'Multiple Protocol Support',
      'Easy Installation & Termination'
    ],

    specifications: [
      { label: 'Protocols', value: 'PROFIBUS, DeviceNet, Ethernet/IP' },
      { label: 'Data Rate', value: 'Up to 1 Gbps' },
      { label: 'Impedance', value: '100Ω ± 15Ω (differential)' },
      { label: 'Capacitance', value: '<30 pF/m' },
      { label: 'Temperature Range', value: '-40°C to +80°C' },
      { label: 'Bend Radius', value: '4 x cable diameter' }
    ],

    features: [
      'Twisted Pair Construction',
      'Low Smoke Zero Halogen Jacket',
      'Drain Wire for Grounding',
      'Color-Coded Conductors',
      'Halogen-Free Materials',
      'Sunlight Resistant',
      'Flexible Design',
      'European Bus Standards'
    ],

    applications: [
      'Factory Automation',
      'Process Control Networks',
      'Machine-to-Machine Communication',
      'Building Automation',
      'Industrial IoT Connections',
      'Distributed Control Systems'
    ],

    industries: [
      'Manufacturing',
      'Automotive',
      'Food & Beverage',
      'Pharmaceutical',
      'Material Handling',
      'Process Industries'
    ],

    certifications: [
      'PROFIBUS Certified',
      'DeviceNet Approved',
      'EtherNet/IP Compliant',
      'CE Marked',
      'UL Listed',
      'CSA Certified'
    ],

    categoryName: 'Electrical Components',
    categoryPath: '/products/electrical-components',
    subcategoryName: 'Communication Cables'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Wifi} />;
}