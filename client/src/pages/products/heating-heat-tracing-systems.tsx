import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Zap } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function HeatingHeatTracingSystems() {
  const productData: ProductDetailData = {
    id: 'heating-heat-tracing-systems',
    title: 'Heat Tracing Systems - Electric Pipe & Tank Heating',
    shortDescription: 'Electric heat tracing for freeze protection and temperature maintenance',
    fullDescription: 'Advanced electric heat tracing systems providing freeze protection, temperature maintenance, and process heating for pipes, tanks, and vessels. Features self-regulating and constant wattage options with explosion-proof designs for hazardous areas.',
    image: getProductImageSrc('heat-tracing'),
    
    seo: {
      title: 'Electric Heat Tracing Systems - Pipe & Tank Heating Solutions',
      description: 'Professional electric heat tracing systems for freeze protection and temperature maintenance with self-regulating and explosion-proof options',
      keywords: 'heat tracing, electric heating cable, freeze protection, pipe heating, tank heating, self-regulating heaters',
      canonicalUrl: '/products/heating-heat-tracing-systems'
    },

    keyBenefits: [
      'Freeze Protection',
      'Temperature Maintenance',
      'Self-Regulating Technology',
      'Energy Efficient Operation',
      'Explosion-Proof Options',
      'Easy Installation'
    ],

    specifications: [
      { label: 'Power Output', value: '5W/m to 100W/m' },
      { label: 'Voltage', value: '120V to 480V' },
      { label: 'Temperature Rating', value: 'Up to 250°C' },
      { label: 'Pipe Size Range', value: '1/2" to 48" diameter' },
      { label: 'Circuit Length', value: 'Up to 1000m' },
      { label: 'Insulation', value: 'Fluoropolymer, XLPE' }
    ],

    features: [
      'Self-Regulating Output',
      'Constant Wattage Options',
      'Parallel Connection',
      'Cut-to-Length Installation',
      'Moisture Resistant',
      'Chemical Compatibility',
      'Hazardous Area Rated',
      'Digital Controls Available'
    ],

    applications: [
      'Freeze Protection',
      'Process Temperature Maintenance',
      'Tank & Vessel Heating',
      'Valve & Instrument Protection',
      'Concrete Curing',
      'Snow Melting'
    ],

    industries: [
      'Oil & Gas',
      'Chemical Processing',
      'Water Treatment',
      'Food & Beverage',
      'Pharmaceutical',
      'Power Generation'
    ],

    certifications: [
      'UL Listed',
      'CSA Certified',
      'ATEX Approved',
      'IECEx Certified',
      'FM Approved',
      'IEEE 515'
    ],

    categoryName: 'Electrical Components',
    categoryPath: '/products/electrical-components',
    subcategoryName: 'Heat Tracing Systems'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Zap} />;
}