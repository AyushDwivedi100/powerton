import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Droplets, Settings, RotateCcw } from 'lucide-react';
import { getProductImageSrc, getFileBaseName } from '@/assets/images';

const DiaphragmPumpsPage = () => {
  const products = [
    {
      name: "Air-Operated Diaphragm Pumps",
      description: "Pneumatically driven diaphragm pumps for chemical applications",
      features: ["Self-Priming", "Dry Run Safe", "Chemical Resistant", "Variable Flow"],
      image: getProductImageSrc(getFileBaseName())
    },
    {
      name: "Electric Diaphragm Pumps",
      description: "Motor-driven diaphragm pumps for precise metering",
      features: ["Precise Metering", "Low Pulsation", "Digital Control", "Easy Maintenance"],
      image: getProductImageSrc(getFileBaseName())
    },
    {
      name: "Hydraulic Diaphragm Pumps",
      description: "High-pressure diaphragm pumps for demanding applications",
      features: ["High Pressure", "Low Flow Rates", "Accurate Dosing", "Leak-Free Operation"],
      image: getProductImageSrc(getFileBaseName())
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjAyIj4KPGNpcmNsZSBjeD0iNyIgY3k9IjciIHI9IjMiLz4KPC9nPgo8L2c+Cjwvc3ZnPg==')] opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/products/mechanical-pumps-spares">
              <Button variant="ghost" className="mb-6 hover:bg-primary/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Mechanical Pumps & Spares
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Diaphragm Pumps</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Positive displacement diaphragm pumps for chemical transfer and metering applications
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="secondary">Self-Priming</Badge>
              <Badge variant="secondary">Chemical Resistant</Badge>
              <Badge variant="secondary">Precise Metering</Badge>
              <Badge variant="secondary">Dry Run Safe</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">Diaphragm Pump Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 hover:scale-[1.02] group cursor-pointer border border-border/50 hover:border-primary/50">
              <CardHeader className="pb-4">
                <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <Droplets className="w-16 h-16 text-primary opacity-50" />
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
          <h2 className="text-3xl font-bold text-foreground mb-6">Need Diaphragm Pump Solutions?</h2>
          <p className="text-lg text-muted-foreground mb-8">Our pump engineers can help you select the right diaphragm pump for your chemical handling needs.</p>
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

export default DiaphragmPumpsPage;