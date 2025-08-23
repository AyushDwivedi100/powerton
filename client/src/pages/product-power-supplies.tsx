import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Battery, Zap, Power } from 'lucide-react';
import { getProductImageSrc, getFileBaseName } from '@/assets/images';
import powerSuppliesLabImage from '@assets/generated_images/Power_supplies_enclosures_lab_9fb504b1.png';

const PowerSuppliesPage = () => {
  const products = [
    {
      name: "Switched Mode Power Supplies (SMPS)",
      description: "Efficient switching power supplies for industrial applications",
      features: ["85-265V AC Input", "12V/24V DC Output", "High Efficiency", "Compact Design"],
      image: getProductImageSrc(getFileBaseName())
    },
    {
      name: "DIN Rail Power Supplies",
      description: "Industrial power supplies for control panel mounting",
      features: ["DIN Rail Mount", "Wide Input Range", "Short Circuit Protection", "LED Status"],
      image: getProductImageSrc(getFileBaseName())
    },
    {
      name: "Uninterruptible Power Supplies (UPS)",
      description: "Backup power systems for critical applications",
      features: ["Battery Backup", "Surge Protection", "Auto Transfer", "LCD Display"],
      image: getProductImageSrc(getFileBaseName())
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${powerSuppliesLabImage})` }}
        />
        <div className="absolute inset-0 bg-primary/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/products/measurement-instruments">
              <Button variant="ghost" className="mb-6 hover:bg-primary/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Measurement Instruments
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Power Supplies</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Industrial power supplies and UPS systems for reliable power distribution
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="secondary">SMPS</Badge>
              <Badge variant="secondary">DIN Rail</Badge>
              <Badge variant="secondary">UPS Systems</Badge>
              <Badge variant="secondary">High Efficiency</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">Power Supply Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 hover:scale-[1.02] group cursor-pointer border border-border/50 hover:border-primary/50">
              <CardHeader className="pb-4">
                <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <Battery className="w-16 h-16 text-primary opacity-50" />
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
          <h2 className="text-3xl font-bold text-foreground mb-6">Need Reliable Power Solutions?</h2>
          <p className="text-lg text-muted-foreground mb-8">Our power supply specialists can design reliable power distribution systems for your industrial applications.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">Contact Power Experts</Button>
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

export default PowerSuppliesPage;