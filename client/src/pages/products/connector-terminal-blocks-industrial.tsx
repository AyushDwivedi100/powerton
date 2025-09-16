import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Link2 } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function ConnectorTerminalBlocksIndustrial() {
  const productData: ProductDetailData = {
    id: 'connector-terminal-blocks-industrial',
    title: 'Terminal Blocks - Industrial Connection Systems',
    shortDescription: 'Reliable wire connection solutions for control panel applications',
    fullDescription: 'Professional terminal blocks providing secure and reliable wire connections for industrial control panels and electrical installations. Features multiple connection technologies, modular design, and comprehensive accessories for efficient wiring solutions.',
    image: getProductImageSrc('terminal-blocks'),
    
    seo: {
      title: 'Industrial Terminal Blocks - Wire Connection Systems',
      description: 'Professional terminal blocks for secure wire connections in industrial control panels with multiple connection technologies and modular design',
      keywords: 'terminal blocks, industrial connectors, wire connections, control panels, DIN rail terminals, electrical connections',
      canonicalUrl: '/products/connector-terminal-blocks-industrial'
    },

    keyBenefits: [
      'Secure Wire Connections',
      'Modular Design System',
      'Multiple Connection Technologies',
      'Easy Installation & Maintenance',
      'Space-Efficient Design',
      'Comprehensive Accessories'
    ],

    specifications: [
      { label: 'Current Rating', value: '6A to 150A' },
      { label: 'Voltage Rating', value: '250V to 1000V' },
      { label: 'Wire Range', value: '0.2mm² to 95mm²' },
      { label: 'Operating Temperature', value: '-40°C to +120°C' },
      { label: 'Mounting', value: '35mm DIN rail' },
      { label: 'Contact Material', value: 'Copper, Silver-plated' }
    ],

    features: [
      'Spring Clamp Technology',
      'Screw Connection Type',
      'Push-in Connection',
      'Test Point Access',
      'Jumper Connections',
      'Modular Construction',
      'Color-Coded Marking',
      'Tool-Free Operation'
    ],

    applications: [
      'Control Panel Wiring',
      'Machine Control Systems',
      'Distribution Panels',
      'Motor Control Centers',
      'Instrumentation Connections',
      'Power Distribution'
    ],

    industries: [
      'Manufacturing',
      'Process Control',
      'Building Automation',
      'Transportation',
      'Energy & Utilities',
      'Machine Building'
    ],

    certifications: [
      'UL 1059',
      'CSA C22.2',
      'IEC 60947-7-1',
      'CE Certified',
      'RoHS Compliant',
      'REACH Compliant'
    ],

    categoryName: 'Electrical Components',
    categoryPath: '/products/electrical-components',
    subcategoryName: 'Terminal Blocks'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Link2} />;
}