import React from 'react';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Monitor, Hand, Tablet } from 'lucide-react';
import { getProductImageSrc, getProductImageAlt } from '@/assets/images';
import hmiControlImage from '@assets/generated_images/HMI_touchscreen_control_room_35274d6e.png';

const HMIPage = () => {
  const { t } = useTranslation(['products', 'common']);
  
  const products = [
    {
      nameKey: "hmi.products.panelMount.name",
      descriptionKey: "hmi.products.panelMount.description",
      featuresKey: "hmi.products.panelMount.features",
      image: getProductImageSrc('hmi')
    },
    {
      nameKey: "hmi.products.operatorInterface.name",
      descriptionKey: "hmi.products.operatorInterface.description", 
      featuresKey: "hmi.products.operatorInterface.features",
      image: getProductImageSrc('hmi')
    },
    {
      nameKey: "hmi.products.mobile.name",
      descriptionKey: "hmi.products.mobile.description",
      featuresKey: "hmi.products.mobile.features",
      image: getProductImageSrc('hmi')
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${hmiControlImage})`,
            
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="text-center">
            <Link href="/products/automation-control-systems">
              <Button variant="ghost" className="mb-6 hover:bg-white/10 text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t('hmi.navigation.backToAutomation')}
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('hmi.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {t('hmi.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="secondary">{t('hmi.badges.touchscreen')}</Badge>
              <Badge variant="secondary">{t('hmi.badges.industrialGrade')}</Badge>
              <Badge variant="secondary">{t('hmi.badges.realTimeDisplay')}</Badge>
              <Badge variant="secondary">{t('hmi.badges.multiProtocol')}</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">{t('hmi.solutionsTitle')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 hover:scale-[1.02] group cursor-pointer border border-border/50 hover:border-primary/50">
              <CardHeader className="pb-4">
                <img 
                  src={product.image}
                  alt={getProductImageAlt('hmi', t(product.nameKey), t(product.descriptionKey))}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{t(product.nameKey)}</CardTitle>
                <CardDescription className="text-muted-foreground">{t(product.descriptionKey)}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-medium text-sm text-foreground mb-3">{t('common.keyFeatures')}</h4>
                  <ul className="space-y-1">
                    {(t(product.featuresKey, { returnObjects: true }) as string[]).map((feature: string, featureIndex: number) => (
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
          <h2 className="text-3xl font-bold text-foreground mb-6">{t('hmi.cta.title')}</h2>
          <p className="text-lg text-muted-foreground mb-8">{t('hmi.cta.description')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">{t('hmi.cta.contactExperts')}</Button>
            </Link>
            <Link href="/quote">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">{t('common.requestQuote')}</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HMIPage;