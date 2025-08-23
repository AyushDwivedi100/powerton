import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Fan, Zap, Settings } from 'lucide-react';
import { getProductImageSrc, getProductImageAlt, getHeroImage } from '@/assets/images';

const BLDCCeilingFanPage = () => {
  const products = [
    {
      name: "Smart BLDC Ceiling Fan - 1200mm",
      description: "Energy-efficient smart ceiling fan with remote control",
      features: ["28W Power Consumption", "Remote Control", "5 Speed Settings", "Timer Function"],
      image: getProductImageSrc('bldc-ceiling-fan')
    },
    {
      name: "Premium BLDC Ceiling Fan - 1400mm",
      description: "High-performance ceiling fan with LED lighting",
      features: ["35W Power Consumption", "LED Light Integrated", "Reversible Motor", "Silent Operation"],
      image: getProductImageSrc('bldc-ceiling-fan')
    },
    {
      name: "Commercial BLDC Ceiling Fan - 1500mm",
      description: "Heavy-duty ceiling fan for commercial applications",
      features: ["45W Power Consumption", "Heavy-Duty Motor", "High Air Flow", "Durable Construction"],
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
            filter: 'blur(2px)'
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/products/bldc">
              <Button variant="ghost" className="mb-6 hover:bg-primary/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to BLDC Products
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">BLDC Ceiling Fans</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Energy-efficient brushless DC ceiling fans with smart features and superior performance
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="secondary">Energy Efficient</Badge>
              <Badge variant="secondary">Smart Control</Badge>
              <Badge variant="secondary">Silent Operation</Badge>
              <Badge variant="secondary">Long Life</Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">BLDC Ceiling Fan Models</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 hover:scale-[1.02] group cursor-pointer border border-border/50 hover:border-primary/50">
              <CardHeader className="pb-4">
                <img 
                  src={product.image}
                  alt={getProductImageAlt('bldc-ceiling-fan', product.name, product.description)}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  loading="lazy"
                />
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors" data-testid={`text-product-name-${index}`}>{product.name}</CardTitle>
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
          <h2 className="text-3xl font-bold text-foreground mb-6">Upgrade to BLDC Ceiling Fans?</h2>
          <p className="text-lg text-muted-foreground mb-8">Our BLDC specialists can help you choose energy-efficient ceiling fan solutions for your space.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">Contact BLDC Experts</Button>
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

export default BLDCCeilingFanPage;