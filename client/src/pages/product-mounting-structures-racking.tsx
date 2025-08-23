import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Grid3X3, Settings, Shield } from 'lucide-react';
import { getProductImageSrc, getFileBaseName } from '@/assets/images';
import solarMountingImage from '@assets/generated_images/Solar_mounting_systems_facility_9a3dc9bd.png';

const MountingStructuresRackingPage = () => {
  const products = [
    {
      name: "Solar Panel Mounting Rails",
      description: "Aluminum mounting rails for solar panel installations",
      features: ["Anodized Aluminum", "Wind Load Certified", "Easy Assembly", "Corrosion Resistant"],
      image: getProductImageSrc(getFileBaseName())
    },
    {
      name: "Ground Mount Systems",
      description: "Foundation-based solar mounting structures",
      features: ["Galvanized Steel", "Adjustable Tilt", "Easy Installation", "High Wind Rating"],
      image: getProductImageSrc(getFileBaseName())
    },
    {
      name: "Roof Mount Systems",
      description: "Rooftop mounting solutions for residential and commercial",
      features: ["Waterproof Sealing", "Multiple Roof Types", "Quick Installation", "Grounding Lugs"],
      image: getProductImageSrc(getFileBaseName())
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${solarMountingImage})` }}
        />
        <div className="absolute inset-0 bg-primary/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/products/solar-products">
              <Button variant="ghost" className="mb-6 hover:bg-primary/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Solar Products
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Mounting Structures & Racking</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Solar panel mounting systems and racking solutions for secure installations
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="secondary">Ground Mount</Badge>
              <Badge variant="secondary">Roof Mount</Badge>
              <Badge variant="secondary">Tracking Systems</Badge>
              <Badge variant="secondary">Wind Certified</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">Mounting Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 hover:scale-[1.02] group cursor-pointer border border-border/50 hover:border-primary/50">
              <CardHeader className="pb-4">
                <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <Grid3X3 className="w-16 h-16 text-primary opacity-50" />
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
          <h2 className="text-3xl font-bold text-foreground mb-6">Need Solar Mounting Solutions?</h2>
          <p className="text-lg text-muted-foreground mb-8">Our mounting specialists can design secure solar panel mounting systems for your installation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">Contact Mounting Experts</Button>
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

export default MountingStructuresRackingPage;