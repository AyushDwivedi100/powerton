import React from 'react';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Flame, Zap, Thermometer } from 'lucide-react';
import { getProductImageSrc, getFileBaseName } from '@/assets/images';
import heatingElementsImage from '@assets/generated_images/Industrial_heating_elements_workshop_0ec53057.png';

const HeatingElementsAppliancesPage = () => {
  const { t } = useTranslation(['products', 'common']);
  const products = [
    {
      name: "Industrial Heating Elements",
      description: "Custom heating elements for industrial processes",
      features: ["Cartridge Heaters", "Band Heaters", "Immersion Heaters", "High Temperature"],
      image: getProductImageSrc(getFileBaseName())
    },
    {
      name: "Electric Ovens & Furnaces",
      description: "Industrial electric heating equipment",
      features: ["Precise Temperature Control", "Uniform Heating", "Energy Efficient", "Custom Sizes"],
      image: getProductImageSrc(getFileBaseName())
    },
    {
      name: "Heat Tracing Systems",
      description: "Electric heat tracing for pipe and tank heating",
      features: ["Self-Regulating", "Constant Wattage", "Explosion Proof", "Freeze Protection"],
      image: getProductImageSrc(getFileBaseName())
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${heatingElementsImage})`,
            
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/products/measurement-instruments">
              <Button variant="ghost" className="mb-6 hover:bg-primary/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t('products:navigation.backToMeasurementInstruments')}
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('products:heatingElementsAppliances.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {t('products:heatingElementsAppliances.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="secondary">{t('common:badges.heatingElements')}</Badge>
              <Badge variant="secondary">{t('common:badges.industrialOvens')}</Badge>
              <Badge variant="secondary">{t('common:badges.heatTracing')}</Badge>
              <Badge variant="secondary">{t('common:badges.temperatureControl')}</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">{t('common:sections.heatingSolutions')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 hover:scale-[1.02] group cursor-pointer border border-border/50 hover:border-primary/50">
              <CardHeader className="pb-4">
                <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <Flame className="w-16 h-16 text-primary opacity-50" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{product.name}</CardTitle>
                <CardDescription className="text-muted-foreground">{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-medium text-sm text-foreground mb-3">{t('common:labels.keyFeatures')}:</h4>
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
          <h2 className="text-3xl font-bold text-foreground mb-6">{t('pages:products.cta.needHeatingSolutions')}</h2>
          <p className="text-lg text-muted-foreground mb-8">{t('pages:products.cta.heatingDescription')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">{t('pages:products.cta.contactHeatingExperts')}</Button>
            </Link>
            <Link href="/quote">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">{t('pages:products.cta.requestQuote')}</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeatingElementsAppliancesPage;