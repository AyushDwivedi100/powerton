import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Shield, Zap, ShieldCheck, AlertTriangle } from 'lucide-react';
import safetyEquipmentImage from '@assets/generated_images/Industrial_safety_equipment_showcase_ef36d76c.png';

const SafetyProtectiveDevices = () => {
  const subcategories = [
    {
      id: "surge-protectors",
      title: "Surge Protectors",
      description: "Electrical surge protection devices for equipment safety",
      icon: Zap,
      features: ["Lightning Protection", "Voltage Surge Protection", "Equipment Safety", "Power Quality"]
    },
    {
      id: "grounding-systems",
      title: "Grounding Systems",
      description: "Electrical grounding and earthing systems for safety",
      icon: Shield,
      features: ["Earth Electrodes", "Ground Rods", "Bonding Conductors", "Lightning Rods"]
    },
    {
      id: "safety-relays-switches",
      title: "Safety Relays & Switches",
      description: "Safety control devices for emergency shutdown systems",
      icon: ShieldCheck,
      features: ["Emergency Stop", "Safety Monitoring", "Fail-Safe Design", "Certified Safety"]
    },
    {
      id: "intrinsically-safe-equipment",
      title: "Intrinsically Safe Equipment",
      description: "Explosion-proof equipment for hazardous environments",
      icon: AlertTriangle,
      features: ["ATEX Certified", "Explosion Proof", "Hazardous Area", "Intrinsic Safety"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
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
            <Link href="/products">
              <Button variant="ghost" className="mb-6 hover:bg-primary/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Products
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Safety & Protective Devices
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Comprehensive safety and protective equipment to ensure personnel and equipment safety in industrial environments
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="secondary">Surge Protection</Badge>
              <Badge variant="secondary">Grounding Systems</Badge>
              <Badge variant="secondary">Safety Relays</Badge>
              <Badge variant="secondary">Intrinsic Safety</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Subcategories Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">
          Safety Solutions
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
            Prioritizing Safety in Your Operations?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our safety engineers can assess your facility and recommend comprehensive protective solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Contact Safety Experts
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

export default SafetyProtectiveDevices;