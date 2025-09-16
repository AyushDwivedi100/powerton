import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Zap } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function CablePowerDistributionMediumVoltage() {
  const productData: ProductDetailData = {
    id: 'cable-power-distribution-medium-voltage',
    title: 'Power Distribution Cables - Medium & High Voltage',
    shortDescription: 'Heavy-duty power cables for electrical distribution systems',
    fullDescription: 'Professional power distribution cables engineered for medium and high voltage applications in industrial and utility environments. Features superior insulation systems, high current carrying capacity, and exceptional reliability for critical power transmission.',
    image: getProductImageSrc('power-cables'),
    
    seo: {
      title: 'Medium & High Voltage Power Distribution Cables',
      description: 'Professional power distribution cables for medium and high voltage applications with superior insulation and high current capacity',
      keywords: 'power distribution cables, medium voltage cables, high voltage cables, electrical distribution, power transmission, industrial cables',
      canonicalUrl: '/products/cable-power-distribution-medium-voltage'
    },

    keyBenefits: [
      'High Current Carrying Capacity',
      'Superior Insulation System',
      'Excellent Reliability',
      'Long Service Life',
      'Environmental Resistance',
      'Flexible Installation Options'
    ],

    specifications: [
      { label: 'Voltage Rating', value: '600V to 35kV' },
      { label: 'Conductor Size', value: '14 AWG to 1000 kcmil' },
      { label: 'Conductor Material', value: 'Copper, Aluminum' },
      { label: 'Insulation', value: 'XLPE, EPR, TR-XLPE' },
      { label: 'Temperature Rating', value: '75°C to 105°C' },
      { label: 'Configuration', value: 'Single, 3-conductor' }
    ],

    features: [
      'Cross-Linked Polyethylene Insulation',
      'Concentric Neutral Design',
      'Metallic Shielding',
      'UV Resistant Jacket',
      'Direct Burial Rated',
      'Pulling Eye Installation',
      'Color Coded Phases',
      'Moisture Resistant'
    ],

    applications: [
      'Utility Distribution',
      'Industrial Plants',
      'Commercial Buildings',
      'Substation Connections',
      'Underground Distribution',
      'Generator Connections'
    ],

    industries: [
      'Electric Utilities',
      'Manufacturing',
      'Data Centers',
      'Mining Operations',
      'Oil & Gas Facilities',
      'Infrastructure Projects'
    ],

    certifications: [
      'IEEE 1202',
      'ICEA S-94-649',
      'UL 1072',
      'CSA C68.10',
      'IEC 60502',
      'AEIC CS8'
    ],

    categoryName: 'Electrical Components',
    categoryPath: '/products/electrical-components',
    subcategoryName: 'Power Distribution Cables'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Zap} />;
}