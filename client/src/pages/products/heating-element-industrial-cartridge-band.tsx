import React from 'react';
import { ProductDetailTemplate, ProductDetailData } from '@/components/layout/product-detail-template';
import { Flame } from 'lucide-react';
import { getProductImageSrc } from '@/assets/images';

export default function HeatingElementIndustrialCartridgeBand() {
  const productData: ProductDetailData = {
    id: 'heating-element-industrial-cartridge-band',
    title: 'Industrial Heating Elements - Cartridge & Band Heaters',
    shortDescription: 'Custom heating elements for industrial process applications',
    fullDescription: 'Professional industrial heating elements including cartridge heaters and band heaters designed for precise temperature control in manufacturing processes. Features high watt density, uniform heat distribution, and long service life for demanding applications.',
    image: getProductImageSrc('heating-elements'),
    
    seo: {
      title: 'Industrial Heating Elements - Cartridge & Band Heaters',
      description: 'Professional cartridge and band heating elements for industrial processes with high watt density and uniform heat distribution',
      keywords: 'heating elements, cartridge heaters, band heaters, industrial heaters, process heating, electric heaters',
      canonicalUrl: '/products/heating-element-industrial-cartridge-band'
    },

    keyBenefits: [
      'High Watt Density',
      'Uniform Heat Distribution',
      'Custom Configurations',
      'Long Service Life',
      'Fast Heat-up Time',
      'Precise Temperature Control'
    ],

    specifications: [
      { label: 'Power Range', value: '100W to 10kW' },
      { label: 'Voltage', value: '120V to 480V' },
      { label: 'Temperature Range', value: 'Up to 900°C' },
      { label: 'Diameter Range', value: '6mm to 32mm (cartridge)' },
      { label: 'Band Width', value: '25mm to 150mm' },
      { label: 'Sheath Material', value: 'Stainless Steel, Incoloy' }
    ],

    features: [
      'MgO Insulation',
      'Nickel-Chrome Resistance Wire',
      'Swaged Construction',
      'Thermocouple Integration',
      'High Temperature Leads',
      'Moisture Resistant',
      'Custom Terminations',
      'Fast Response Time'
    ],

    applications: [
      'Plastic Processing',
      'Die Heating',
      'Mold Temperature Control',
      'Extruder Heating',
      'Hot Runner Systems',
      'Laboratory Equipment'
    ],

    industries: [
      'Plastics & Rubber',
      'Packaging',
      'Automotive',
      'Aerospace',
      'Medical Devices',
      'Food Processing'
    ],

    certifications: [
      'UL Listed',
      'CSA Certified',
      'CE Marked',
      'IEC 60335',
      'RoHS Compliant',
      'ISO 9001'
    ],

    categoryName: 'Electrical Components',
    categoryPath: '/products/electrical-components',
    subcategoryName: 'Heating Elements'
  };

  return <ProductDetailTemplate product={productData} heroIcon={Flame} />;
}