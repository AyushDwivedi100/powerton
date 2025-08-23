import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, RotateCcw, Droplet, Zap } from 'lucide-react';
import pumpsBgImage from '@assets/generated_images/Industrial_Pumps_Systems_b0701872.png';
import { getProductImageSrc, getProductImageAlt } from '@/assets/images';

const CentrifugalPumpsPage = () => {
  const products = [
    {
      name: "End Suction Centrifugal Pumps",
      description: "Single-stage end suction pumps for general applications",
      features: ["Flow: 10-5000 GPM", "Head: up to 400 ft", "Cast Iron/Stainless Steel", "ANSI/ISO Standards"],
image: getProductImageSrc('centrifugal-pumps')
    },
    {
      name: "Multi-Stage Centrifugal Pumps",
      description: "High-pressure multi-stage pumps for demanding applications",
      features: ["High Pressure Capability", "Compact Design", "Energy Efficient", "Balanced Impellers"],
image: getProductImageSrc('centrifugal-pumps')
    },
    {
      name: "Chemical Process Pumps",
      description: "Corrosion-resistant pumps for chemical processing",
      features: ["Corrosion Resistant", "Seal-less Design Options", "API 610 Compliant", "High Temperature"],
image: getProductImageSrc('centrifugal-pumps')
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${pumpsBgImage})`,
            filter: 'blur(2px)'
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="text-center">
            <Link href="/products/mechanical-pumps-spares">
              <Button variant="ghost" className="mb-6 hover:bg-white/10 text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Mechanical Pumps & Spares
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Centrifugal Pumps</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              High-efficiency centrifugal pumps for industrial fluid handling applications
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="secondary">High Flow Rates</Badge>
              <Badge variant="secondary">Energy Efficient</Badge>
              <Badge variant="secondary">Self-Priming</Badge>
              <Badge variant="secondary">Corrosion Resistant</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">Centrifugal Pump Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 hover:scale-[1.02] group cursor-pointer border border-border/50 hover:border-primary/50">
              <CardHeader className="pb-4">
                <img 
                  src={product.image}
                  alt={getProductImageAlt('centrifugal-pumps', product.name, product.description)}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  loading="lazy"
                />
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
          <h2 className="text-3xl font-bold text-foreground mb-6">Need Centrifugal Pump Solutions?</h2>
          <p className="text-lg text-muted-foreground mb-8">Our pump engineers can help you select the right centrifugal pump for your application requirements.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">Contact Pump Experts</Button>
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

export default CentrifugalPumpsPage;