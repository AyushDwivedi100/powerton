import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Zap, BarChart3, Search, Activity, Settings } from 'lucide-react';
import measurementLabImage from '@assets/generated_images/Precision_measurement_instruments_lab_b82030f8.png';

const MeasurementInstruments = () => {
  const subcategories = [
    {
      id: "multimeters",
      title: "Multimeters",
      description: "Digital and analog multimeters for electrical measurements",
      icon: Zap,
      features: ["AC/DC Voltage", "Current Measurement", "Resistance Testing", "Continuity Check"]
    },
    {
      id: "oscilloscopes",
      title: "Oscilloscopes",
      description: "Digital storage oscilloscopes for waveform analysis",
      icon: BarChart3,
      features: ["Waveform Analysis", "Signal Capture", "Frequency Measurement", "Trigger Functions"]
    },
    {
      id: "spectrum-analyzers",
      title: "Spectrum Analyzers",
      description: "RF and microwave spectrum analyzers for signal analysis",
      icon: Search,
      features: ["Frequency Analysis", "Signal Strength", "Harmonic Detection", "RF Testing"]
    },
    {
      id: "power-quality-analyzers",
      title: "Power Quality Analyzers",
      description: "Instruments for power quality monitoring and analysis",
      icon: Activity,
      features: ["Power Analysis", "Harmonic Detection", "Voltage Monitoring", "Energy Measurement"]
    },
    {
      id: "calibration-equipment",
      title: "Calibration Equipment",
      description: "Precision calibration tools and reference standards",
      icon: Settings,
      features: ["Reference Standards", "Precision Calibration", "Traceability", "Accuracy Verification"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative hero-fullscreen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: `url(${measurementLabImage})`,
            filter: 'blur(2px)'
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <Link href="/products">
              <Button variant="ghost" className="mb-6 hover:bg-background/10 text-white border-border">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Products
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-secondary">Measurement</span> Instruments
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Advanced measurement instruments for precise monitoring and data acquisition in industrial applications
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="secondary" className="bg-secondary/20 text-white border border-secondary/20">Digital Multimeters</Badge>
              <Badge variant="secondary" className="bg-secondary/20 text-white border border-secondary/20">Oscilloscopes</Badge>
              <Badge variant="secondary" className="bg-secondary/20 text-white border border-secondary/20">Signal Analyzers</Badge>
              <Badge variant="secondary" className="bg-secondary/20 text-white border border-secondary/20">Calibrators</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Subcategories Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">
          Product Categories
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
            Need Measurement Solutions?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our measurement specialists can help you select the right instruments for your application.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Contact Experts
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

export default MeasurementInstruments;