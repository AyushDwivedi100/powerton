import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Cable, Zap, Shield } from 'lucide-react';
import electricalBgImage from '@assets/generated_images/Electrical_Components_Warehouse_31ec85d7.png';
import { getProductImageSrc, getProductImageAlt } from '@/assets/images';

const CablesWiresPage = () => {
  const products = [
    {
      name: "Instrumentation Cables",
      description: "Low voltage cables for instrumentation and control applications",
      features: ["Shielded Construction", "Moisture Resistant", "Temperature Rated", "Multiple Pairs"],
      image: getProductImageSrc('cables-wires')
    },
    {
      name: "Power Distribution Cables",
      description: "High voltage cables for power transmission and distribution",
      features: ["XLPE Insulation", "Armored Construction", "Fire Resistant", "High Current Rating"],
      image: getProductImageSrc('cables-wires')
    },
    {
      name: "Communication Cables",
      description: "Data transmission cables for industrial communication networks",
      features: ["Cat5e/Cat6", "Fiber Optic", "Industrial Grade", "EMI Shielding"],
      image: getProductImageSrc('cables-wires')
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${electricalBgImage})`,
            filter: 'blur(2px)'
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/products/measurement-instruments">
              <Button variant="ghost" className="mb-6 hover:bg-primary/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Measurement Instruments
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Cables & Wires</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Industrial cables and wires for power transmission, instrumentation, and data communication
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="secondary">Power Cables</Badge>
              <Badge variant="secondary">Instrumentation</Badge>
              <Badge variant="secondary">Communication</Badge>
              <Badge variant="secondary">Shielded</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">Cable Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 hover:scale-[1.02] group cursor-pointer border border-border/50 hover:border-primary/50">
              <CardHeader className="pb-4">
                <img 
                  src={product.image}
                  alt={getProductImageAlt('cables-wires', product.name, product.description)}
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
          <h2 className="text-3xl font-bold text-foreground mb-6">Need Cable Solutions?</h2>
          <p className="text-lg text-muted-foreground mb-8">Our cable specialists can help you select the right cables for your electrical and instrumentation needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">Contact Cable Experts</Button>
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

export default CablesWiresPage;