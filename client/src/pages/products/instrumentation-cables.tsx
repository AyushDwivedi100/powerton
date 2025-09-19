import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Cable } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';
import { useTranslation } from 'react-i18next';

export default function InstrumentationCables() {
  const { t } = useTranslation(['products', 'common']);

  const productData: ProductDetailData = {
    id: 'instrumentation-cables',
    title: 'Instrumentation Cables - Precision Signal Transmission',
    shortDescription: 'High-quality instrumentation cables for accurate measurement and control signals',
    fullDescription: 'Professional instrumentation cables designed for precise signal transmission in industrial measurement and control applications. Features shielded twisted pair construction, excellent noise rejection, and superior signal integrity for critical instrumentation systems.',
    image: getProductImageSrc('cables-wires'),
    
    seo: {
      title: 'Instrumentation Cables - Precision Signal Transmission | Powerton Engineering',
      description: 'High-quality instrumentation cables with shielded construction for accurate measurement and control signal transmission.',
      keywords: 'instrumentation cables, shielded twisted pair, signal cables, measurement cables, control cables, industrial cables',
      canonicalUrl: 'https://powertonengineering.in/products/instrumentation-cables'
    },
    
    categoryName: 'Electrical Components',
    categoryPath: '/products/electrical-components',
    subcategoryName: 'Instrumentation Cables',
    
    keyBenefits: [
      'Superior Signal Integrity',
      'Excellent Noise Immunity',
      'Wide Temperature Range',
      'Chemical Resistant',
      'Flexible Installation',
      'Long Service Life'
    ],
    
    specifications: [
      { label: 'Cable Type', value: 'Shielded Twisted Pair' },
      { label: 'Conductor Size', value: '18-22 AWG' },
      { label: 'Voltage Rating', value: '300V' },
      { label: 'Temperature Range', value: '-40°C to +90°C' },
      { label: 'Shielding', value: '100% Coverage' },
      { label: 'Insulation', value: 'PE/PVC/XLPE' }
    ],
    
    features: [
      'Shielded Twisted Pair Design',
      'Low Capacitance Construction',
      'Drain Wire Configuration',
      'Color-Coded Identification',
      'Flame Retardant Jacket',
      'Oil & Chemical Resistant',
      'Flexible Stranding',
      'Multiple Pair Options'
    ],
    
    applications: [
      'Process Control Systems',
      'Instrumentation Loops',
      'Sensor Connections',
      'Transmitter Wiring',
      'Analyzer Connections',
      'Control Room Wiring'
    ],
    
    industries: [
      'Oil & Gas',
      'Chemical Processing',
      'Power Generation',
      'Water Treatment',
      'Manufacturing',
      'Pharmaceutical'
    ],
    
    certifications: [
      'UL Listed',
      'CSA Certified',
      'CE Marked',
      'IEC 60502',
      'NFPA 70',
      'RoHS Compliant'
    ],
    
    backButtonLabel: 'Back to Electrical Components'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Cable} />;
}