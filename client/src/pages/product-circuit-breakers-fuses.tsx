import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Shield, Zap, AlertTriangle } from 'lucide-react';
import electricalBgImage from '@assets/generated_images/Electrical_Components_Warehouse_31ec85d7.png';
import { getProductImageSrc, getProductImageAlt } from '@/assets/images';
import circuitBreakersImage from '@assets/generated_images/Circuit_breakers_fuses_control_6ca48d78.png';

const CircuitBreakersFusesPage = () => {
  const products = [
    {
      name: "Miniature Circuit Breakers (MCB)",
      description: "Low voltage circuit breakers for residential and commercial use",
      features: ["B, C, D Curves", "6-63A Rating", "10kA Breaking Capacity", "DIN Rail Mount"],
image: getProductImageSrc('circuit-breakers-fuses')
    },
    {
      name: "Molded Case Circuit Breakers (MCCB)",
      description: "Industrial circuit breakers for motor and power protection",
      features: ["Adjustable Trip", "High Breaking Capacity", "Electronic Trip Units", "Up to 1600A"],
image: getProductImageSrc('circuit-breakers-fuses')
    },
    {
      name: "Industrial Fuses",
      description: "High-speed fuses for equipment protection",
      features: ["Fast Acting", "Time Delay", "High Voltage", "Ceramic Body"],
image: getProductImageSrc('circuit-breakers-fuses')
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${circuitBreakersImage})` }}
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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Circuit Breakers & Fuses</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Electrical protection devices for overcurrent and short circuit protection
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="secondary">MCB</Badge>
              <Badge variant="secondary">MCCB</Badge>
              <Badge variant="secondary">Industrial Fuses</Badge>
              <Badge variant="secondary">Overcurrent Protection</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">Protection Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 hover:scale-[1.02] group cursor-pointer border border-border/50 hover:border-primary/50">
              <CardHeader className="pb-4">
                <img 
                  src={product.image}
                  alt={getProductImageAlt('circuit-breakers-fuses', product.name, product.description)}
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
          <h2 className="text-3xl font-bold text-foreground mb-6">Need Electrical Protection?</h2>
          <p className="text-lg text-muted-foreground mb-8">Our protection specialists can help you select the right circuit breakers and fuses for your electrical systems.</p>
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

export default CircuitBreakersFusesPage;