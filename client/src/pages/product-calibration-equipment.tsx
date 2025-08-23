import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Settings, CheckCircle, Target } from 'lucide-react';
import calibrationBgImage from '@assets/generated_images/Measurement_Instruments_Laboratory_a811e77b.png';
import { getProductImageSrc, getProductImageAlt } from '@/assets/images';
import calibrationLabImage from '@assets/generated_images/Calibration_testing_laboratory_0ac0492b.png';

const CalibrationEquipmentPage = () => {
  const products = [
    {
      name: "Process Calibrators",
      description: "Multi-function calibrators for pressure, temperature, and electrical signals",
      features: ["Multi-Function", "High Accuracy", "HART Communication", "Data Logging"],
image: getProductImageSrc('calibration-equipment')
    },
    {
      name: "Temperature Calibrators",
      description: "Precision temperature calibration equipment",
      features: ["RTD/TC Simulation", "Precision References", "Portable Design", "Auto-stepping"],
image: getProductImageSrc('calibration-equipment')
    },
    {
      name: "Pressure Calibrators",
      description: "Hydraulic and pneumatic pressure calibration systems",
      features: ["High Pressure Range", "Dead Weight Testers", "Pressure Standards", "Automated Testing"],
image: getProductImageSrc('calibration-equipment')
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${calibrationLabImage})` }}
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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Calibration Equipment</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Precision calibration instruments for maintaining measurement accuracy and compliance
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="secondary">Precision Calibration</Badge>
              <Badge variant="secondary">Traceability</Badge>
              <Badge variant="secondary">Multi-Function</Badge>
              <Badge variant="secondary">Data Logging</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">Calibration Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 hover:scale-[1.02] group cursor-pointer border border-border/50 hover:border-primary/50">
              <CardHeader className="pb-4">
                <img 
                  src={product.image}
                  alt={getProductImageAlt('calibration-equipment', product.name, product.description)}
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
          <h2 className="text-3xl font-bold text-foreground mb-6">Need Calibration Services?</h2>
          <p className="text-lg text-muted-foreground mb-8">Our calibration specialists can provide equipment and services to maintain your measurement accuracy.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">Contact Calibration Experts</Button>
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

export default CalibrationEquipmentPage;