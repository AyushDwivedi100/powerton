import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Wrench, Settings, Hammer } from 'lucide-react';
import toolsBgImage from '@assets/generated_images/Industrial_Tools_Workshop_a055c619.png';
import { getProductImageSrc, getFileBaseName } from '@/assets/images';
import { useTranslation } from 'react-i18next';

const HandToolsPage = () => {
  const { t } = useTranslation(['products', 'common', 'products-data']);
  const products = [
    {
      name: t('products-data:handTools.wrenchSets.name'),
      description: t('products-data:handTools.wrenchSets.description'),
      features: t('products-data:handTools.wrenchSets.features', { returnObjects: true }) as string[],
      image: getProductImageSrc(getFileBaseName())
    },
    {
      name: t('products-data:handTools.screwdriverSets.name'),
      description: t('products-data:handTools.screwdriverSets.description'),
      features: t('products-data:handTools.screwdriverSets.features', { returnObjects: true }) as string[],
      image: getProductImageSrc(getFileBaseName())
    },
    {
      name: t('products-data:handTools.toolKits.name'),
      description: t('products-data:handTools.toolKits.description'),
      features: t('products-data:handTools.toolKits.features', { returnObjects: true }) as string[],
      image: getProductImageSrc(getFileBaseName())
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${toolsBgImage})`,
            
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="text-center">
            <Link href="/products/industrial-tools-tackles">
              <Button variant="ghost" className="mb-6 hover:bg-white/10 text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t('common:navigation.backToIndustrialTools')}
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('products:productPages.handTools.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {t('products:productPages.handTools.subtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="secondary">{t('common:badges.precisionTools')}</Badge>
              <Badge variant="secondary">{t('common:badges.durableConstruction')}</Badge>
              <Badge variant="secondary">{t('common:badges.ergonomicDesign')}</Badge>
              <Badge variant="secondary">{t('common:badges.professionalGrade')}</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">{t('products:productPages.handTools.sections.categories.title', 'Hand Tool Categories')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 hover:scale-[1.02] group cursor-pointer border border-border/50 hover:border-primary/50">
              <CardHeader className="pb-4">
                <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <Wrench className="w-16 h-16 text-primary opacity-50" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{product.name}</CardTitle>
                <CardDescription className="text-muted-foreground">{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-medium text-sm text-foreground mb-3">{t('products:labels.keyFeatures', 'Key Features')}:</h4>
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
          <h2 className="text-3xl font-bold text-foreground mb-6">{t('products:productPages.handTools.cta.title', 'Need Professional Hand Tools?')}</h2>
          <p className="text-lg text-muted-foreground mb-8">Our tool specialists can recommend the right hand tools for your industrial maintenance needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">Contact Tool Experts</Button>
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

export default HandToolsPage;