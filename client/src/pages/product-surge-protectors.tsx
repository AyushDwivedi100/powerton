import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Shield, Zap, AlertTriangle } from 'lucide-react';
import { getProductImageSrc, getProductImageAlt } from '@/assets/images';
import safetyEquipmentImage from '@assets/generated_images/Industrial_safety_equipment_showcase_ef36d76c.png';

const SurgeProtectorsPage = () => {
  const products = [
    {
      name: "AC Power Surge Protectors",
      description: "Transient voltage surge suppressors for AC power systems",
      features: ["Class I/II/III", "MOV Technology", "Status Indicators", "DIN Rail Mount"],
image: getProductImageSrc('surge-protectors')
    },
    {
      name: "DC Solar Surge Protectors",
      description: "DC surge protection devices for solar panel systems",
      features: ["1000V DC Rating", "Type 1+2 Protection", "Remote Indication", "Quick Disconnect"],
image: getProductImageSrc('surge-protectors')
    },
    {
      name: "Signal Line Protectors",
      description: "Surge protection for communication and control lines",
      features: ["Data Line Protection", "Low Capacitance", "Fast Response", "Multiple Channels"],
image: getProductImageSrc('surge-protectors')
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${safetyEquipmentImage})`,
            filter: 'blur(2px)'
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/products/safety-protective-devices">
              <Button variant="ghost" className="mb-6 hover:bg-primary/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Safety & Protective Devices
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Surge Protectors</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Lightning and surge protection devices for electrical systems and equipment
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="secondary">Lightning Protection</Badge>
              <Badge variant="secondary">Power Surge</Badge>
              <Badge variant="secondary">Signal Protection</Badge>
              <Badge variant="secondary">Equipment Safety</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">Surge Protection Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 hover:scale-[1.02] group cursor-pointer border border-border/50 hover:border-primary/50">
              <CardHeader className="pb-4">
                <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <Shield className="w-16 h-16 text-primary opacity-50" />
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
          <h2 className="text-3xl font-bold text-foreground mb-6">Need Surge Protection?</h2>
          <p className="text-lg text-muted-foreground mb-8">Our protection specialists can design comprehensive surge protection systems for your facility.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">Contact Protection Experts</Button>
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

export default SurgeProtectorsPage;