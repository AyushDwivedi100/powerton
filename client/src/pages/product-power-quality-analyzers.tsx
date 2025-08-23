import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, BarChart3, Zap, Activity } from 'lucide-react';
import { getProductImageSrc, getFileBaseName } from '@/assets/images';
import measurementInstrumentsImage from '@assets/generated_images/Measurement_instruments_laboratory_b7c98e24.png';

const PowerQualityAnalyzersPage = () => {
  const products = [
    {
      name: "Fluke 435-II Power Quality Analyzer",
      description: "Three-phase power quality analyzer for comprehensive power system analysis",
      features: ["Three-Phase Measurement", "Harmonics Analysis", "Transient Capture", "Power Logging"],
      image: getProductImageSrc(getFileBaseName())
    },
    {
      name: "Hioki PW3390 Power Quality Analyzer",
      description: "Portable power quality analyzer for field measurements",
      features: ["Voltage Dip Detection", "Flicker Measurement", "Energy Assessment", "Real-time Analysis"],
      image: getProductImageSrc(getFileBaseName())
    },
    {
      name: "Dranetz HDPQ Xplorer",
      description: "Advanced power quality monitoring system",
      features: ["Continuous Monitoring", "Event Recording", "Compliance Testing", "Remote Access"],
      image: getProductImageSrc(getFileBaseName())
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${measurementInstrumentsImage})`,
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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Power Quality Analyzers</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Advanced power quality analyzers for electrical system monitoring and troubleshooting
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="secondary">Harmonics Analysis</Badge>
              <Badge variant="secondary">Voltage Quality</Badge>
              <Badge variant="secondary">Energy Monitoring</Badge>
              <Badge variant="secondary">Transient Detection</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">Power Quality Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 hover:scale-[1.02] group cursor-pointer border border-border/50 hover:border-primary/50">
              <CardHeader className="pb-4">
                <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <BarChart3 className="w-16 h-16 text-primary opacity-50" />
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
          <h2 className="text-3xl font-bold text-foreground mb-6">Need Power Quality Analysis?</h2>
          <p className="text-lg text-muted-foreground mb-8">Our power quality experts can help you monitor and improve your electrical system performance.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">Contact Power Experts</Button>
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

export default PowerQualityAnalyzersPage;