import React from 'react';
import { Link } from 'wouter';
import { SEO } from "@/lib/seo";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Sun, Zap, Battery } from 'lucide-react';
import solarBgImage from '@assets/generated_images/Solar_Energy_Systems_b0a2f025.png';
import { getProductImageSrc, getProductImageAlt } from '@/assets/images';

const SolarPanelsPage = () => {
  const products = [
    {
      name: "Monocrystalline Solar Panels - 400W",
      description: "High-efficiency monocrystalline silicon solar panels",
      features: ["21.5% Efficiency", "25 Year Warranty", "Weather Resistant", "Anti-Reflective Coating"],
      image: getProductImageSrc('solar-panels')
    },
    {
      name: "Polycrystalline Solar Panels - 320W",
      description: "Cost-effective polycrystalline solar panel solution",
      features: ["19.2% Efficiency", "20 Year Warranty", "Durable Construction", "Easy Installation"],
      image: getProductImageSrc('solar-panels')
    },
    {
      name: "Bifacial Solar Panels - 450W",
      description: "Advanced bifacial technology for maximum energy harvest",
      features: ["Front + Back Generation", "25% More Energy", "Glass-Glass Design", "Long Lifespan"],
      image: getProductImageSrc('solar-panels')
    }
  ];

  return (
    <>
      <SEO 
        title="Solar Panels - Monocrystalline & Polycrystalline | Powerton Engineering"
        description="High-efficiency solar panels: Monocrystalline (400W), Polycrystalline (320W), and Bifacial (450W). Complete solar energy solutions with installation support across India."
        keywords="solar panels, monocrystalline solar panels, polycrystalline solar panels, bifacial solar panels, solar energy systems, renewable energy, solar installation India"
        canonicalUrl="https://powertonengineering.in/product-solar-panels"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Solar Panels",
          "description": "High-efficiency solar panel solutions for renewable energy generation",
          "category": "Solar Energy Equipment",
          "brand": {
            "@type": "Organization",
            "name": "Powerton Engineering Pvt. Ltd."
          },
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "INR",
            "seller": {
              "@type": "Organization",
              "name": "Powerton Engineering Pvt. Ltd."
            }
          }
        }}
      />

      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${solarBgImage})`,
            
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/products/solar-products">
              <Button variant="ghost" className="mb-6 hover:bg-primary/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Solar Products
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Solar Panels
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              High-efficiency photovoltaic solar panels for residential and commercial installations
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="secondary">Monocrystalline</Badge>
              <Badge variant="secondary">Polycrystalline</Badge>
              <Badge variant="secondary">Bifacial</Badge>
              <Badge variant="secondary">High Efficiency</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">
          Solar Panel Types
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 hover:scale-[1.02] group cursor-pointer border border-border/50 hover:border-primary/50">
              <CardHeader className="pb-4">
                <img 
                  src={product.image}
                  alt={getProductImageAlt('solar-panels', product.name, product.description)}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {product.description}
                </CardDescription>
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

      {/* Technical Specifications */}
      <div className="bg-muted/50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Technical Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-border/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sun className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Power Output</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Power Range: 250W - 500W</li>
                  <li>• Efficiency: 19% - 22%</li>
                  <li>• Voltage: 30V - 40V</li>
                  <li>• Current: 8A - 13A</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Temperature Coefficient: -0.35%/°C</li>
                  <li>• Operating Temperature: -40°C to +85°C</li>
                  <li>• Wind Load: 2400 Pa</li>
                  <li>• Snow Load: 5400 Pa</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border border-border/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Battery className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Durability</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 25 Year Power Warranty</li>
                  <li>• IP67 Junction Box</li>
                  <li>• Anti-Reflective Glass</li>
                  <li>• Corrosion Resistant Frame</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to Harness Solar Energy?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our solar experts can design a custom solar panel solution for your energy needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Contact Solar Experts
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
    </>
  );
};

export default SolarPanelsPage;