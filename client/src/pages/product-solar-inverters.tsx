import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Zap, Battery, Sun } from 'lucide-react';
import { getProductImageSrc, getProductImageAlt } from '@/assets/images';

const SolarInvertersPage = () => {
  const products = [
    {
      name: "String Inverters - 5-50kW",
      description: "High-efficiency string inverters for residential and commercial applications",
      features: ["97.5% Peak Efficiency", "MPPT Technology", "Grid Monitoring", "Arc Fault Detection"],
image: getProductImageSrc('solar-inverters')
    },
    {
      name: "Central Inverters - 100kW-3MW",
      description: "Large-scale central inverters for utility solar installations",
      features: ["98.5% Peak Efficiency", "1500V DC Input", "Grid Support Functions", "Remote Monitoring"],
image: getProductImageSrc('solar-inverters')
    },
    {
      name: "Hybrid Inverters with Battery Storage",
      description: "All-in-one solar inverters with integrated battery management",
      features: ["Battery Integration", "Backup Power", "Energy Management", "Smart Grid Ready"],
image: getProductImageSrc('solar-inverters')
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjAyIj4KPGNpcmNsZSBjeD0iNyIgY3k9IjciIHI9IjMiLz4KPC9nPgo8L2c+Cjwvc3ZnPg==')] opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/products/solar-products">
              <Button variant="ghost" className="mb-6 hover:bg-primary/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Solar Products
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Solar Inverters</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              High-efficiency DC to AC power conversion systems for solar energy applications
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="secondary">String Inverters</Badge>
              <Badge variant="secondary">Central Inverters</Badge>
              <Badge variant="secondary">Hybrid Systems</Badge>
              <Badge variant="secondary">Grid-Tie</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">Solar Inverter Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 hover:scale-[1.02] group cursor-pointer border border-border/50 hover:border-primary/50">
              <CardHeader className="pb-4">
                <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <Zap className="w-16 h-16 text-primary opacity-50" />
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
          <h2 className="text-3xl font-bold text-foreground mb-6">Need Solar Inverter Solutions?</h2>
          <p className="text-lg text-muted-foreground mb-8">Our solar engineers can design the optimal inverter system for your solar installation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">Contact Solar Experts</Button>
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

export default SolarInvertersPage;