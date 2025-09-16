import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Thermometer } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function HeatingElectricOvensFurnaces() {
  const productData: ProductDetailData = {
    id: 'heating-electric-ovens-furnaces',
    title: 'Electric Ovens & Furnaces - Industrial Heating Equipment',
    shortDescription: 'Electric heating equipment for industrial processes and heat treatment',
    fullDescription: 'Professional electric ovens and furnaces designed for industrial heating applications including heat treatment, drying, curing, and annealing. Features precise temperature control, uniform heating, energy efficiency, and custom configurations for specific processes.',
    image: getProductImageSrc('electric-ovens'),
    
    seo: {
      title: 'Electric Industrial Ovens & Furnaces - Heat Treatment Equipment',
      description: 'Professional electric ovens and furnaces for industrial heating, heat treatment, and process applications with precise temperature control',
      keywords: 'electric ovens, industrial furnaces, heat treatment, electric heating equipment, industrial ovens, process heating',
      canonicalUrl: '/products/heating-electric-ovens-furnaces'
    },

    keyBenefits: [
      'Precise Temperature Control',
      'Uniform Heating Distribution',
      'Energy Efficient Operation',
      'Custom Configurations',
      'Advanced Control Systems',
      'Reliable Performance'
    ],

    specifications: [
      { label: 'Temperature Range', value: 'Ambient to 1200°C' },
      { label: 'Chamber Volume', value: '0.1 to 100 cubic feet' },
      { label: 'Power Rating', value: '1kW to 100kW' },
      { label: 'Voltage', value: '208V to 480V, 3-phase' },
      { label: 'Temperature Uniformity', value: '±5°C to ±15°C' },
      { label: 'Insulation', value: 'Fiber, brick, ceramic' }
    ],

    features: [
      'Digital Temperature Controllers',
      'Programmable Profiles',
      'Multiple Zone Control',
      'Over-temperature Protection',
      'Air Circulation Systems',
      'Atmosphere Control',
      'Data Logging Capability',
      'Safety Interlocks'
    ],

    applications: [
      'Heat Treatment',
      'Stress Relieving',
      'Annealing',
      'Tempering',
      'Drying & Curing',
      'Laboratory Testing'
    ],

    industries: [
      'Aerospace',
      'Automotive',
      'Electronics',
      'Tool & Die',
      'Medical Devices',
      'Research & Development'
    ],

    certifications: [
      'UL Listed',
      'CSA Certified',
      'CE Marked',
      'NFPA 86',
      'AMS Standards',
      'ISO 9001'
    ],

    categoryName: 'Electrical Components',
    categoryPath: '/products/electrical-components',
    subcategoryName: 'Electric Ovens & Furnaces'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Thermometer} />;
}