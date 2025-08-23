import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Thermometer, Radio, Cpu, ToggleLeft, Gauge, FlaskConical, Zap } from 'lucide-react';

const InstrumentationComponents = () => {
  const subcategories = [
    {
      id: "sensors",
      title: "Sensors",
      description: "Temperature, pressure, position, and motion sensors for industrial automation",
      icon: Thermometer,
      features: ["Temperature Sensors", "Pressure Transmitters", "Position Sensors", "Proximity Sensors"]
    },
    {
      id: "transmitters",
      title: "Transmitters & Transducers",
      description: "Signal conversion and transmission devices for measurement applications",
      icon: Radio,
      features: ["Pressure Transmitters", "Temperature Transmitters", "Flow Transmitters", "Level Transmitters"]
    },
    {
      id: "controllers",
      title: "Controllers & Recorders",
      description: "Process controllers and data recording systems for industrial control",
      icon: Cpu,
      features: ["PLC Systems", "Process Controllers", "Data Loggers", "Control Panels"]
    },
    {
      id: "switches",
      title: "Switches & Indicators",
      description: "Industrial switches, indicators, and signaling devices",
      icon: ToggleLeft,
      features: ["Pushbutton Switches", "Selector Switches", "Indicator Lights", "Emergency Stops"]
    },
    {
      id: "valves",
      title: "Valves & Actuators",
      description: "Control valves and actuators for process control systems",
      icon: Gauge,
      features: ["Control Valves", "Pneumatic Actuators", "Electric Actuators", "Valve Positioners"]
    },
    {
      id: "analyzers",
      title: "Analyzers",
      description: "Gas, liquid, and process analyzers for quality control",
      icon: FlaskConical,
      features: ["Gas Analyzers", "Liquid Analyzers", "Process Analyzers", "Multi-parameter Systems"]
    },
    {
      id: "signal-conditioners",
      title: "Signal Conditioners",
      description: "Signal processing and conditioning equipment for measurement systems",
      icon: Zap,
      features: ["Isolation Amplifiers", "Signal Converters", "Measuring Transducers", "Noise Filters"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjAyIj4KPGNpcmNsZSBjeD0iNyIgY3k9IjciIHI9IjMiLz4KPC9nPgo8L2c+Cjwvc3ZnPg==')] opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/products">
              <Button variant="ghost" className="mb-6 hover:bg-primary/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Products
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Instrumentation Components
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              High-precision instrumentation components for accurate measurement and control in industrial processes
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="secondary">Pressure Transmitters</Badge>
              <Badge variant="secondary">Temperature Sensors</Badge>
              <Badge variant="secondary">Flow Meters</Badge>
              <Badge variant="secondary">Level Indicators</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Subcategories Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">
          Product Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
            Need Instrumentation Solutions?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our technical experts can help you select the right instrumentation components for your industrial applications.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/quote">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
                Request Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="px-8 py-3">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstrumentationComponents;