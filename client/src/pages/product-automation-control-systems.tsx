import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Cpu, Monitor, Settings, Database } from 'lucide-react';
import automationBgImage from '@assets/generated_images/Industrial_PLC_Control_Panel_54555fe9.png';
import { getHeroImage } from '@/assets/images';

const AutomationControlSystems = () => {
  const subcategories = [
    {
      id: "plcs",
      title: "PLCs (Programmable Logic Controllers)",
      description: "Industrial automation controllers for process control",
      icon: Cpu,
      features: ["Digital I/O", "Analog Processing", "Communication Modules", "Programming Software"]
    },
    {
      id: "scada",
      title: "SCADA Systems",
      description: "Supervisory control and data acquisition systems",
      icon: Monitor,
      features: ["Real-time Monitoring", "Data Logging", "Alarm Management", "Remote Access"]
    },
    {
      id: "dcs",
      title: "DCS (Distributed Control Systems)",
      description: "Distributed control systems for large-scale processes",
      icon: Database,
      features: ["Process Control", "Distributed Architecture", "Redundancy", "Advanced Control"]
    },
    {
      id: "hmi",
      title: "HMI (Human Machine Interface)",
      description: "User interfaces for industrial control systems",
      icon: Settings,
      features: ["Touchscreen Displays", "Graphic Interface", "Data Visualization", "Operator Control"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: `url(${getHeroImage('services')?.src})`,
            filter: 'blur(1px)'
          }}
        ></div>
        <div className="absolute inset-0 bg-primary/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/products">
              <Button variant="ghost" className="mb-6 hover:bg-primary/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Products
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Automation & Control Systems
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Advanced automation and control solutions for industrial process management and optimization
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="secondary">PLCs</Badge>
              <Badge variant="secondary">SCADA</Badge>
              <Badge variant="secondary">DCS</Badge>
              <Badge variant="secondary">HMI</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Subcategories Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">
          Control System Solutions
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
            Need Automation Solutions?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our automation engineers can design and implement comprehensive control systems for your facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Contact Automation Experts
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

export default AutomationControlSystems;