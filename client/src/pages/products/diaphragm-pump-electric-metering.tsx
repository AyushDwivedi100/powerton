import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Settings } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function DiaphragmPumpElectricMetering() {
  const productData: ProductDetailData = {
    id: 'diaphragm-pump-electric-metering',
    title: 'Electric Diaphragm Pumps - Precision Metering Systems',
    shortDescription: 'Motor-driven diaphragm pumps for precise chemical dosing and metering applications',
    fullDescription: 'Professional electric diaphragm metering pumps designed for precise chemical dosing and injection applications. Features accurate flow control, low pulsation design, digital controls, and chemical-resistant materials for reliable performance in water treatment and process control applications.',
    image: getProductImageSrc('diaphragm-pumps'),
    
    seo: {
      title: 'Electric Diaphragm Metering Pumps - Precision Chemical Dosing',
      description: 'Professional electric diaphragm metering pumps for precise chemical dosing with digital controls and low pulsation',
      keywords: 'metering pumps, electric diaphragm pumps, chemical dosing pumps, precision pumps, injection pumps',
      canonicalUrl: '/products/diaphragm-pump-electric-metering'
    },

    keyBenefits: [
      'Precise Flow Metering',
      'Low Pulsation Design',
      'Digital Control Systems',
      'Easy Maintenance Access',
      'Chemical Compatibility',
      'Reliable Dosing Accuracy'
    ],

    specifications: [
      { label: 'Flow Range', value: '0.1 to 100 GPH' },
      { label: 'Pressure Rating', value: 'Up to 3000 PSI' },
      { label: 'Accuracy', value: '±1% of set point' },
      { label: 'Turndown Ratio', value: '100:1' },
      { label: 'Power Supply', value: '115/230V, 50/60Hz' },
      { label: 'Control Signal', value: '4-20mA, 0-10V, Pulse' }
    ],

    features: [
      'Microprocessor Control',
      'LCD Display Interface',
      'Remote Control Capability',
      'Leak Detection System',
      'Automatic Priming',
      'Pressure Relief Valve',
      'Multiple Head Materials',
      'Self-Diagnostics'
    ],

    applications: [
      'Water Treatment',
      'Chemical Dosing',
      'pH Control',
      'Disinfection Systems',
      'Process Control',
      'Laboratory Applications'
    ],

    industries: [
      'Water & Wastewater',
      'Chemical Processing',
      'Power Generation',
      'Pulp & Paper',
      'Food & Beverage',
      'Pharmaceutical'
    ],

    certifications: [
      'UL Listed',
      'CSA Certified',
      'CE Marked',
      'NSF Certified',
      'FDA Compliant',
      'NEMA 4X Enclosure'
    ],

    categoryName: 'Pumps & Mechanical Systems',
    categoryPath: '/products/mechanical-pumps-spares',
    subcategoryName: 'Diaphragm Pumps'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Settings} />;
}