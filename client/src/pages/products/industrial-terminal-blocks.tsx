import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Zap } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';
import { useTranslation } from 'react-i18next';

export default function IndustrialTerminalBlocks() {
  const { t } = useTranslation(['products', 'common']);

  const productData: ProductDetailData = {
    id: 'industrial-terminal-blocks',
    title: 'Industrial Terminal Blocks - DIN Rail Connection Systems',
    shortDescription: 'Professional terminal blocks for secure electrical connections and wire management',
    fullDescription: 'Industrial-grade terminal blocks designed for secure electrical connections in control panels and electrical enclosures. Features DIN rail mounting, multiple connection methods, and excellent current capacity for professional electrical installations.',
    image: getProductImageSrc('connectors-terminals'),
    
    seo: {
      title: 'Industrial Terminal Blocks - DIN Rail Connection Systems | Powerton Engineering',
      description: 'Professional industrial terminal blocks with DIN rail mounting for secure electrical connections and wire management.',
      keywords: 'terminal blocks, DIN rail terminals, industrial terminals, electrical connections, wire management, control panel wiring',
      canonicalUrl: 'https://powertonengineering.in/products/industrial-terminal-blocks'
    },
    
    categoryName: 'Electrical Components',
    categoryPath: '/products/electrical-components',
    subcategoryName: 'Terminal Blocks',
    
    keyBenefits: [
      'DIN Rail Mounting System',
      'Multiple Connection Methods',
      'High Current Capacity',
      'Tool-Free Installation',
      'Compact Design',
      'Color-Coded Organization'
    ],
    
    specifications: [
      { label: 'Connection Type', value: 'Screw/Spring Clamp' },
      { label: 'Current Rating', value: '10A - 150A' },
      { label: 'Voltage Rating', value: '1000V' },
      { label: 'Wire Size', value: '0.2 - 50 mm²' },
      { label: 'Mounting', value: 'DIN Rail 35mm' },
      { label: 'Contact Material', value: 'Copper/Brass' }
    ],
    
    features: [
      'Spring Clamp Technology',
      'Screw Connection Options',
      'Push-In Wire Connections',
      'Jumper Bridge System',
      'Test Point Access',
      'Multiple Voltage Levels',
      'Snap-On DIN Rail Mounting',
      'Identification Options'
    ],
    
    applications: [
      'Control Panel Wiring',
      'Distribution Boards',
      'Motor Control Centers',
      'Junction Boxes',
      'Instrumentation Panels',
      'Power Distribution'
    ],
    
    industries: [
      'Manufacturing',
      'Building Automation',
      'Power Distribution',
      'Process Industries',
      'Transportation',
      'Renewable Energy'
    ],
    
    certifications: [
      'UL Listed',
      'CE Marked',
      'CSA Approved',
      'VDE Certified',
      'RoHS Compliant',
      'IEC 60947-7-1'
    ],
    
    backButtonLabel: 'Back to Electrical Components'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Zap} />;
}