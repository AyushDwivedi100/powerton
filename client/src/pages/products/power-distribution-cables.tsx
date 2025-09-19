import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Cable } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';
import { useTranslation } from 'react-i18next';

export default function PowerDistributionCables() {
  const { t } = useTranslation(['products', 'common']);

  const productData: ProductDetailData = {
    id: 'power-distribution-cables',
    title: 'Power Distribution Cables - Medium & High Voltage Systems',
    shortDescription: 'Professional power cables for electrical distribution and transmission systems',
    fullDescription: 'High-quality power distribution cables designed for medium and high voltage electrical systems. Features XLPE insulation, excellent electrical properties, and robust construction for reliable power transmission in utility and industrial applications.',
    image: getProductImageSrc('cables-wires'),
    
    seo: {
      title: 'Power Distribution Cables - Medium & High Voltage | Powerton Engineering',
      description: 'Professional power distribution cables with XLPE insulation for medium and high voltage electrical transmission systems.',
      keywords: 'power cables, distribution cables, XLPE cables, medium voltage, high voltage, electrical transmission, utility cables',
      canonicalUrl: 'https://powertonengineering.in/products/power-distribution-cables'
    },
    
    categoryName: 'Electrical Components',
    categoryPath: '/products/electrical-components',
    subcategoryName: 'Power Distribution Cables',
    
    keyBenefits: [
      'XLPE Insulation Technology',
      'High Current Capacity',
      'Excellent Electrical Properties',
      'Environmental Resistance',
      'Long Service Life',
      'Wide Voltage Range'
    ],
    
    specifications: [
      { label: 'Cable Type', value: 'XLPE Insulated' },
      { label: 'Voltage Range', value: '1kV - 33kV' },
      { label: 'Conductor Material', value: 'Copper/Aluminum' },
      { label: 'Operating Temperature', value: '90°C' },
      { label: 'Standard', value: 'IS 7098' },
      { label: 'Conductor Size', value: '1.5mm² - 1000mm²' }
    ],
    
    features: [
      'XLPE Cross-Linked Insulation',
      'Copper/Aluminum Conductors',
      'PVC Outer Sheath',
      'Armored Options Available',
      'Direct Burial Capability',
      'UV Resistant Jacket',
      'Flame Retardant Properties',
      'Water Resistant Design'
    ],
    
    applications: [
      'Utility Power Distribution',
      'Industrial Plant Wiring',
      'Underground Distribution',
      'Overhead Transmission',
      'Substation Connections',
      'Renewable Energy Systems'
    ],
    
    industries: [
      'Electrical Utilities',
      'Power Generation',
      'Industrial Manufacturing',
      'Mining',
      'Oil & Gas',
      'Renewable Energy'
    ],
    
    certifications: [
      'IS 7098 Compliant',
      'IEC 60502 Certified',
      'CE Marked',
      'BIS Approved',
      'CPRI Tested',
      'RoHS Compliant'
    ],
    
    backButtonLabel: 'Back to Electrical Components'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Cable} />;
}