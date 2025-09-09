import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, TrendingUp, Settings, Wrench } from 'lucide-react';
import { getProductImageSrc, getFileBaseName } from '@/assets/images';
import liftingEquipmentImage from '@assets/generated_images/Professional_lifting_rigging_warehouse_7bbe822e.png';
import { useTranslation } from 'react-i18next';

const LiftingEquipmentPage = () => {
  const { t } = useTranslation(['common', 'products']);
  
  const products = [
    {
      name: "Chain Hoists & Slings",
      description: "Manual and electric chain hoists for heavy lifting",
      features: ["1-20 Ton Capacity", "Electric/Manual", "Safety Hooks", "Overload Protection"],
      image: getProductImageSrc(getFileBaseName())
    },
    {
      name: "Wire Rope & Cables",
      description: "High-strength wire rope for lifting applications",
      features: ["Galvanized Steel", "Multiple Lay Types", "Various Diameters", "IWRC Core"],
      image: getProductImageSrc(getFileBaseName())
    },
    {
      name: "Lifting Hardware",
      description: "Shackles, hooks, and rigging hardware",
      features: ["Stainless Steel", "Safety Pins", "Load Rated", "ANSI/ASME Standards"],
      image: getProductImageSrc(getFileBaseName())
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${liftingEquipmentImage})`,
            
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="text-center">
            <Link href="/products/industrial-tools-tackles">
              <Button variant="ghost" className="mb-6 hover:bg-white/10 text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t('common:buttons.backTo', 'Back to {{category}}', { category: 'Industrial Tools & Tackles' })}
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{t('products:productPages.liftingEquipment.title', 'Lifting Equipment')}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Industrial lifting and rigging equipment for safe material handling operations
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="secondary">{t('products:badges.chainHoists', 'Chain Hoists')}</Badge>
              <Badge variant="secondary">{t('products:badges.wireRope', 'Wire Rope')}</Badge>
              <Badge variant="secondary">{t('products:badges.riggingHardware', 'Rigging Hardware')}</Badge>
              <Badge variant="secondary">{t('products:badges.loadRated', 'Load Rated')}</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">Lifting Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 hover:scale-[1.02] group cursor-pointer border border-border/50 hover:border-primary/50">
              <CardHeader className="pb-4">
                <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <TrendingUp className="w-16 h-16 text-primary opacity-50" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{product.name}</CardTitle>
                <CardDescription className="text-muted-foreground">{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-medium text-sm text-foreground mb-3">Key Features:</h4>
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
          <h2 className="text-3xl font-bold text-foreground mb-6">Need Lifting Solutions?</h2>
          <p className="text-lg text-muted-foreground mb-8">Our lifting specialists can help you select safe and reliable lifting equipment for your operations.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">Contact Lifting Experts</Button>
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

export default LiftingEquipmentPage;