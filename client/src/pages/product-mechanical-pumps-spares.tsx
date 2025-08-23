import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Droplet, RotateCcw, Settings, Wrench } from 'lucide-react';
import pumpSparesImage from '@assets/generated_images/Industrial_pump_spare_parts_8de15f4f.png';

const MechanicalPumpsSpares = () => {
  const subcategories = [
    {
      id: "centrifugal-pumps",
      title: "Centrifugal Pumps",
      description: "High-efficiency centrifugal pumps for fluid handling",
      icon: RotateCcw,
      features: ["High Flow Rates", "Self-Priming", "Corrosion Resistant", "Energy Efficient"]
    },
    {
      id: "diaphragm-pumps",
      title: "Diaphragm Pumps",
      description: "Positive displacement diaphragm pumps for precise flow control",
      icon: Droplet,
      features: ["Positive Displacement", "Chemical Compatibility", "Dry Running", "Pulsation Dampening"]
    },
    {
      id: "gear-pumps",
      title: "Gear Pumps",
      description: "Precision gear pumps for viscous fluid applications",
      icon: Settings,
      features: ["High Pressure", "Viscous Fluids", "Precise Metering", "Compact Design"]
    },
    {
      id: "pump-parts-spares",
      title: "Pump Parts & Spares",
      description: "Replacement parts and spare components for all pump types",
      icon: Wrench,
      features: ["OEM Parts", "Seals & Gaskets", "Impellers", "Maintenance Kits"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${pumpSparesImage})`,
            filter: 'blur(2px)'
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/products">
              <Button variant="ghost" className="mb-6 hover:bg-primary/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Products
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Mechanical Pumps & Spares
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Industrial pumping solutions and replacement parts for fluid handling applications
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="secondary">Centrifugal Pumps</Badge>
              <Badge variant="secondary">Diaphragm Pumps</Badge>
              <Badge variant="secondary">Gear Pumps</Badge>
              <Badge variant="secondary">Spare Parts</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Subcategories Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">
          Pump Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {subcategories.map((subcategory) => {
            const IconComponent = subcategory.icon;
            return (
              <Link key={subcategory.id} href={`/products/${subcategory.id}`}>
                <Card className="hover:shadow-lg transition-shadow duration-300 hover:scale-[1.02] group cursor-pointer border border-border/50 hover:border-primary/50">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors text-center">
                      {subcategory.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-center">
                      {subcategory.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-medium text-sm text-foreground mb-3">Key Features:</h4>
                      <ul className="space-y-1">
                        {subcategory.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-muted/50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Need Pump Solutions?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our pump specialists can help you select the right pumping solution for your application.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Contact Pump Experts
              </Button>
            </Link>
            <Link href="/quote">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Request Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MechanicalPumpsSpares;