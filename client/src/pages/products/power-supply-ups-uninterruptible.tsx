import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Shield } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function PowerSupplyUPSUninterruptible() {
  const productData: ProductDetailData = {
    id: 'power-supply-ups-uninterruptible',
    title: 'UPS Systems - Uninterruptible Power Supply',
    shortDescription: 'Critical power protection for sensitive electronic equipment',
    fullDescription: 'Professional uninterruptible power supply systems providing critical power protection and backup power for sensitive electronic equipment. Features battery backup, surge protection, and power conditioning for reliable operation during power disturbances.',
    image: getProductImageSrc('ups-systems'),
    
    seo: {
      title: 'UPS Uninterruptible Power Supply - Critical Power Protection',
      description: 'Professional UPS systems for critical power protection with battery backup and surge protection for sensitive equipment',
      keywords: 'UPS systems, uninterruptible power supply, battery backup, power protection, surge protection, critical power',
      canonicalUrl: '/products/power-supply-ups-uninterruptible'
    },

    keyBenefits: [
      'Critical Power Protection',
      'Battery Backup Power',
      'Surge & Spike Protection',
      'Power Conditioning',
      'Automatic Voltage Regulation',
      'Remote Monitoring Capability'
    ],

    specifications: [
      { label: 'Power Range', value: '500VA to 500kVA' },
      { label: 'Input Voltage', value: '120V to 480V AC' },
      { label: 'Backup Time', value: '5 minutes to 8 hours' },
      { label: 'Efficiency', value: 'Up to 99%' },
      { label: 'Transfer Time', value: '<4ms typical' },
      { label: 'Battery Type', value: 'VRLA, Lithium-ion' }
    ],

    features: [
      'Double Conversion Technology',
      'Automatic Voltage Regulation',
      'Battery Management System',
      'LCD Display Interface',
      'Network Monitoring Card',
      'Emergency Power Off',
      'Parallel Operation',
      'Hot-Swappable Batteries'
    ],

    applications: [
      'Data Centers',
      'Critical Control Systems',
      'Medical Equipment',
      'Laboratory Instruments',
      'Telecommunications',
      'Emergency Systems'
    ],

    industries: [
      'Information Technology',
      'Healthcare',
      'Telecommunications',
      'Financial Services',
      'Manufacturing',
      'Government'
    ],

    certifications: [
      'UL Listed',
      'FCC Part 15',
      'Energy Star',
      'IEC 62040',
      'CE Marked',
      'RoHS Compliant'
    ],

    categoryName: 'Electrical Components',
    categoryPath: '/products/electrical-components',
    subcategoryName: 'UPS Systems'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Shield} />;
}