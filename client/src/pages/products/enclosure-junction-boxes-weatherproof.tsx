import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Lock } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function EnclosureJunctionBoxesWeatherproof() {
  const productData: ProductDetailData = {
    id: 'enclosure-junction-boxes-weatherproof',
    title: 'Junction Boxes - Weatherproof Cable Termination',
    shortDescription: 'Sealed enclosures for cable connections and terminations',
    fullDescription: 'Professional weatherproof junction boxes providing secure cable terminations and connections in challenging environments. Features multiple entry options, explosion-proof variants, and corrosion-resistant materials for reliable protection.',
    image: getProductImageSrc('junction-boxes'),
    
    seo: {
      title: 'Weatherproof Junction Boxes - Cable Termination Enclosures',
      description: 'Professional weatherproof junction boxes for secure cable terminations with explosion-proof options and corrosion resistance',
      keywords: 'junction boxes, weatherproof boxes, cable termination, explosion proof boxes, cable glands, IP rated boxes',
      canonicalUrl: '/products/enclosure-junction-boxes-weatherproof'
    },

    keyBenefits: [
      'Weatherproof Protection',
      'Multiple Entry Options',
      'Corrosion Resistant Materials',
      'Explosion-Proof Variants',
      'Easy Installation & Access',
      'Wide Size Range'
    ],

    specifications: [
      { label: 'Size Range', value: '100x100x75 to 600x400x200mm' },
      { label: 'Material', value: 'Aluminum, Stainless Steel, Plastic' },
      { label: 'Protection Rating', value: 'IP65, IP66, IP67' },
      { label: 'Temperature Range', value: '-40°C to +120°C' },
      { label: 'Entry Options', value: '1/2" to 4" NPT/Metric' },
      { label: 'Wall Thickness', value: '3mm to 6mm' }
    ],

    features: [
      'Pre-drilled Cable Entries',
      'Removable Terminal Plates',
      'Gasket Sealing System',
      'Stainless Steel Hardware',
      'Ground Lugs Included',
      'Tamper-Resistant Screws',
      'Cable Gland Ready',
      'Mounting Brackets'
    ],

    applications: [
      'Cable Terminations',
      'Instrument Connections',
      'Power Distribution',
      'Signal Splicing',
      'Hazardous Area Connections',
      'Outdoor Installations'
    ],

    industries: [
      'Oil & Gas',
      'Chemical Processing',
      'Water Treatment',
      'Marine Applications',
      'Mining',
      'Power Generation'
    ],

    certifications: [
      'UL Listed',
      'CSA Certified',
      'ATEX Approved',
      'IECEx Certified',
      'IP67 Rated',
      'NEMA 4X'
    ],

    categoryName: 'Electrical Components',
    categoryPath: '/products/electrical-components',
    subcategoryName: 'Junction Boxes'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Lock} />;
}