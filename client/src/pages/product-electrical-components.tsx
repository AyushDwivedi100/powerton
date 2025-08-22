import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Zap, Shield, Cable, Power } from 'lucide-react';
import electricalBgImage from '@assets/generated_images/Electrical_Components_Warehouse_31ec85d7.png';

const ElectricalComponents = () => {
  const subcategories = [
    {
      id: "cables-wires",
      title: "Cables & Wires",
      description: "Industrial cables and wires for power transmission and control applications",
      icon: Cable,
      features: ["Power Cables", "Control Cables", "Instrumentation Cables", "Communication Cables"]
    },
    {
      id: "connectors-terminals",
      title: "Connectors & Terminals",
      description: "Electrical connectors and terminal blocks for secure connections",
      icon: Zap,
      features: ["Terminal Blocks", "Wire Connectors", "DIN Rail Terminals", "Junction Boxes"]
    },
    {
      id: "circuit-breakers-fuses",
      title: "Circuit Breakers & Fuses",
      description: "Protection devices for electrical circuits and equipment safety",
      icon: Shield,
      features: ["MCBs", "MCCBs", "RCCBs", "Industrial Fuses"]
    },
    {
      id: "power-supplies",
      title: "Power Supplies",
      description: "AC/DC power supplies and converters for industrial applications",
      icon: Power,
      features: ["SMPS", "DIN Rail Power Supplies", "DC-DC Converters", "UPS Systems"]
    },
    {
      id: "enclosures-cabinets",
      title: "Enclosures & Cabinets",
      description: "Electrical enclosures and control cabinets for equipment protection",
      icon: Shield,
      features: ["Control Panels", "Distribution Boards", "Junction Boxes", "Weatherproof Enclosures"]
    },
    {
      id: "heating-elements-appliances",
      title: "Heating Elements & Appliances",
      description: "Industrial heating elements and electrical appliances",
      icon: Zap,
      features: ["Heating Elements", "Industrial Heaters", "Temperature Controllers", "Thermal Protection"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${electricalBgImage})` }}
        />
        <div className="absolute inset-0 bg-primary/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/products">
              <Button variant="ghost" className="mb-6 hover:bg-primary/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Products
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Electrical Components
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Comprehensive range of electrical components for power distribution and control systems
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="secondary">Power Distribution</Badge>
              <Badge variant="secondary">Control Systems</Badge>
              <Badge variant="secondary">Safety Components</Badge>
              <Badge variant="secondary">Industrial Grade</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Subcategories Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">
          Electrical Component Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <CardDescription className="text-center text-muted-foreground">
                      {subcategory.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {subcategory.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Need Electrical Components?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our electrical engineers can help you select the right components for your power distribution and control systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Contact Our Experts
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

export default ElectricalComponents;