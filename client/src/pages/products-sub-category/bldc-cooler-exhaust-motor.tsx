import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Wind, Fan, Zap } from 'lucide-react';
import { getProductImageSrc, getProductImageAlt, getHeroImage } from '@/assets/images';
import { useTranslation } from 'react-i18next';

const BLDCCoolerExhaustMotorPage = () => {
  const { t } = useTranslation(['common', 'products', 'products-data']);
  const products = [
    {
      name: t('products-data:bldcCoolerExhaust.exhaustFan.name'),
      description: t('products-data:bldcCoolerExhaust.exhaustFan.description'),
      features: t('products-data:bldcCoolerExhaust.exhaustFan.features', { returnObjects: true }) as string[],
      image: getProductImageSrc('bldc-cooler-exhaust-motor')
    },
    {
      name: t('products-data:bldcCoolerExhaust.coolerMotors.name'),
      description: t('products-data:bldcCoolerExhaust.coolerMotors.description'),
      features: t('products-data:bldcCoolerExhaust.coolerMotors.features', { returnObjects: true }) as string[],
      image: getProductImageSrc('bldc-cooler-exhaust-motor')
    },
    {
      name: t('products-data:bldcCoolerExhaust.ventilation.name'),
      description: t('products-data:bldcCoolerExhaust.ventilation.description'),
      features: t('products-data:bldcCoolerExhaust.ventilation.features', { returnObjects: true }) as string[],
      image: getProductImageSrc('bldc-cooler-exhaust-motor')
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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('products:productPages.bldcCoolerExhaust.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {t('products:productPages.bldcCoolerExhaust.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="secondary">{t('common:products.badges.highEfficiency')}</Badge>
              <Badge variant="secondary">{t('common:products.badges.variableSpeed')}</Badge>
              <Badge variant="secondary">{t('common:products.badges.lowNoise')}</Badge>
              <Badge variant="secondary">{t('common:products.badges.smartControl')}</Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">{t('common:products.sections.applications', { product: 'BLDC Motor' })}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 hover:scale-[1.02] group cursor-pointer border border-border/50 hover:border-primary/50">
              <CardHeader className="pb-4">
                <img 
                  src={product.image}
                  alt={getProductImageAlt('bldc-cooler-exhaust-motor', product.name, product.description)}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{product.name}</CardTitle>
                <CardDescription className="text-muted-foreground">{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-medium text-sm text-foreground mb-3">{t('common:products.sections.keyFeatures')}</h4>
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
          <h2 className="text-3xl font-bold text-foreground mb-6">Need BLDC Motor Solutions?</h2>
          <p className="text-lg text-muted-foreground mb-8">Our BLDC motor specialists can provide efficient motor solutions for your cooling and ventilation needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">Contact Motor Experts</Button>
            </Link>
            <Link href="/quote">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">Request Quote</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BLDCCoolerExhaustMotorPage;