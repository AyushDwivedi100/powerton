import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Fan, Zap, Settings } from 'lucide-react';
import { getProductImageSrc, getProductImageAlt, getHeroImage } from '@/assets/images';
import { useTranslation } from 'react-i18next';

const BLDCCeilingFanPage = () => {
  const { t } = useTranslation(['common', 'products', 'products-data']);
  const products = [
    {
      name: t('products-data:bldcCeilingFan.smart1200.name'),
      description: t('products-data:bldcCeilingFan.smart1200.description'),
      features: t('products-data:bldcCeilingFan.smart1200.features', { returnObjects: true }) as string[],
      image: getProductImageSrc('bldc-ceiling-fan')
    },
    {
      name: t('products-data:bldcCeilingFan.premium1400.name'),
      description: t('products-data:bldcCeilingFan.premium1400.description'),
      features: t('products-data:bldcCeilingFan.premium1400.features', { returnObjects: true }) as string[],
      image: getProductImageSrc('bldc-ceiling-fan')
    },
    {
      name: t('products-data:bldcCeilingFan.commercial1500.name'),
      description: t('products-data:bldcCeilingFan.commercial1500.description'),
      features: t('products-data:bldcCeilingFan.commercial1500.features', { returnObjects: true }) as string[],
      image: getProductImageSrc('bldc-ceiling-fan')
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: `url(${getHeroImage('bldc')?.src})`,
            
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/products/bldc">
              <Button variant="ghost" className="mb-6 hover:bg-primary/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t('common:buttons.backToBldcProducts')}
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('products:productPages.bldcCeilingFan.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {t('products:productPages.bldcCeilingFan.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="secondary">{t('common:badges.energyEfficient')}</Badge>
              <Badge variant="secondary">{t('common:badges.smartControl')}</Badge>
              <Badge variant="secondary">{t('common:badges.silentOperation')}</Badge>
              <Badge variant="secondary">{t('common:badges.longLife')}</Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">{t('common:headings.bldcCeilingFanModels')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 hover:scale-[1.02] group cursor-pointer border border-border/50 hover:border-primary/50">
              <CardHeader className="pb-4">
                <img 
                  src={product.image}
                  alt={getProductImageAlt('bldc-ceiling-fan', product.name, product.description)}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors" data-testid={`text-product-name-${index}`}>{product.name}</CardTitle>
                <CardDescription className="text-muted-foreground">{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-medium text-sm text-foreground mb-3">{t('common:headings.keyFeatures')}:</h4>
                  <ul className="space-y-1">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
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
          <h2 className="text-3xl font-bold text-foreground mb-6">{t('products:productPages.bldcCeilingFan.upgradeTitle')}</h2>
          <p className="text-lg text-muted-foreground mb-8">{t('products:productPages.bldcCeilingFan.upgradeDescription')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">{t('products:productPages.bldcCeilingFan.contactExperts')}</Button>
            </Link>
            <Link href="/quote">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">{t('common:buttons.requestQuote')}</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BLDCCeilingFanPage;