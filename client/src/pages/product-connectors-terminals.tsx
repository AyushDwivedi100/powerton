import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Plug, Link2, Settings } from 'lucide-react';
import { getProductImageSrc, getProductImageAlt } from '@/assets/images';
import connectorsTerminalsImage from '@assets/generated_images/Electrical_connectors_terminals_warehouse_6cb67d77.png';

const ConnectorsTerminalsPage = () => {
  const products = [
    {
      name: "Terminal Blocks",
      description: "Industrial terminal blocks for secure wire connections",
      features: ["Spring Clamp", "Screw Type", "DIN Rail Mount", "Multiple Sizes"],
image: getProductImageSrc('connectors-terminals')
    },
    {
      name: "Industrial Connectors",
      description: "Heavy-duty connectors for industrial applications",
      features: ["IP67 Rating", "Locking Mechanism", "Multi-Pin", "Cable Glands"],
image: getProductImageSrc('connectors-terminals')
    },
    {
      name: "Signal Connectors",
      description: "Precision connectors for instrumentation signals",
      features: ["Low Noise", "Shielded Design", "Miniature Size", "High Reliability"],
image: getProductImageSrc('connectors-terminals')
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${connectorsTerminalsImage})`,
            filter: 'blur(2px)'
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/products/electrical-components">
              <Button variant="ghost" className="mb-6 hover:bg-primary/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Electrical Components
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Connectors & Terminals</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Industrial connectors and terminal blocks for reliable electrical connections
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="secondary">Terminal Blocks</Badge>
              <Badge variant="secondary">Industrial Connectors</Badge>
              <Badge variant="secondary">Signal Connectors</Badge>
              <Badge variant="secondary">IP Rated</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">Connection Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 hover:scale-[1.02] group cursor-pointer border border-border/50 hover:border-primary/50">
              <CardHeader className="pb-4">
                <img 
                  src={product.image}
                  alt={getProductImageAlt('connectors-terminals', product.name, product.description)}
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
          <h2 className="text-3xl font-bold text-foreground mb-6">Need Connection Solutions?</h2>
          <p className="text-lg text-muted-foreground mb-8">Our connection specialists can help you select reliable connectors and terminals for your applications.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">Contact Connection Experts</Button>
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

export default ConnectorsTerminalsPage;