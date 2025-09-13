import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Cable, Zap, Shield } from 'lucide-react';
import electricalBgImage from '@assets/generated_images/Electrical_Components_Warehouse_31ec85d7.png';
import { getProductImageSrc, getProductImageAlt } from '@/assets/images';
import { useTranslation } from 'react-i18next';

const CablesWiresPage = () => {
  const { t } = useTranslation(['common', 'products', 'products-data']);
  
  const products = [
    {
      name: t('products-data:cablesWires.instrumentation.name'),
      description: t('products-data:cablesWires.instrumentation.description'),
      features: t('products-data:cablesWires.instrumentation.features', { returnObjects: true }) as string[],
      image: getProductImageSrc('cables-wires')
    },
    {
      name: t('products-data:cablesWires.powerDistribution.name'),
      description: t('products-data:cablesWires.powerDistribution.description'),
      features: t('products-data:cablesWires.powerDistribution.features', { returnObjects: true }) as string[],
      image: getProductImageSrc('cables-wires')
    },
    {
      name: t('products-data:cablesWires.communication.name'),
      description: t('products-data:cablesWires.communication.description'),
      features: t('products-data:cablesWires.communication.features', { returnObjects: true }) as string[],
      image: getProductImageSrc('cables-wires')
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${electricalBgImage})`,
            
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="text-center">
            <Link href="/products/electrical-components">
              <Button variant="ghost" className="mb-6 hover:bg-white/10 text-white text-wrap-safe">
                <ArrowLeft className="me-2 h-4 w-4 rtl-flip" />
                {t('common:navigation.backToElectricalComponents')}
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-wrap-safe responsive-text">{t('products:productPages.cablesWires.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-wrap-safe responsive-text">
              {t('products:productPages.cablesWires.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="secondary">{t('common:badges.powerCables')}</Badge>
              <Badge variant="secondary">{t('common:badges.instrumentation')}</Badge>
              <Badge variant="secondary">{t('common:badges.communication')}</Badge>
              <Badge variant="secondary">{t('common:badges.shielded')}</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12 text-wrap-safe responsive-text">{t('common:headings.cableSolutions')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-safe">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 hover:scale-[1.02] group cursor-pointer border border-border/50 hover:border-primary/50">
              <CardHeader className="pb-4">
                <img 
                  src={product.image}
                  alt={getProductImageAlt('cables-wires', product.name, product.description)}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors text-wrap-safe responsive-text line-clamp-safe">{product.name}</CardTitle>
                <CardDescription className="text-muted-foreground text-wrap-safe responsive-text line-clamp-safe">{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-medium text-sm text-foreground mb-3 text-wrap-safe">{t('common:headings.keyFeatures')}:</h4>
                  <ul className="space-y-1">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center text-wrap-safe">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full me-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-wrap-safe responsive-text">{t('products:productPages.cablesWires.ctaTitle')}</h2>
          <p className="text-lg text-muted-foreground mb-8 text-wrap-safe responsive-text">{t('products:productPages.cablesWires.ctaDescription')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-wrap-safe">{t('products:productPages.cablesWires.contactExperts')}</Button>
            </Link>
            <Link href="/quote">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-wrap-safe">{t('common:buttons.requestQuote')}</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CablesWiresPage;