import React from 'react';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Thermometer, Radio, Cpu, ToggleLeft, Gauge, FlaskConical, Zap } from 'lucide-react';
import instrumentationLabImage from '@assets/generated_images/Instrumentation_components_laboratory_58f97192.png';

const InstrumentationComponents = () => {
  const { t } = useTranslation(['common', 'products', 'products-data']);
  
  const subcategories = [
    {
      id: "sensors",
      title: t('products-data:instrumentation.sensors.title'),
      description: t('products-data:instrumentation.sensors.shortDescription'),
      icon: Thermometer,
      features: t('products-data:instrumentation.sensors.specifications', { returnObjects: true }) as string[]
    },
    {
      id: "transmitters",
      title: t('products-data:instrumentation.transmitters.title'),
      description: t('products-data:instrumentation.transmitters.shortDescription'),
      icon: Radio,
      features: t('products-data:instrumentation.transmitters.specifications', { returnObjects: true }) as string[]
    },
    {
      id: "controllers",
      title: t('common:aria.controllerSystems', 'Controllers & Recorders'),
      description: t('common:aria.controllerDescription', 'Process controllers and data recording systems for industrial control'),
      icon: Cpu,
      features: [t('common:aria.plcSystems', 'PLC Systems'), t('common:aria.processControllers', 'Process Controllers'), t('common:aria.dataLoggers', 'Data Loggers'), t('common:aria.controlPanels', 'Control Panels')]
    },
    {
      id: "switches",
      title: t('common:aria.switchesIndicators', 'Switches & Indicators'),
      description: t('common:aria.switchesDescription', 'Industrial switches, indicators, and signaling devices'),
      icon: ToggleLeft,
      features: [t('common:aria.pushbuttonSwitches', 'Pushbutton Switches'), t('common:aria.selectorSwitches', 'Selector Switches'), t('common:aria.indicatorLights', 'Indicator Lights'), t('common:aria.emergencyStops', 'Emergency Stops')]
    },
    {
      id: "valves",
      title: t('common:aria.valvesActuators', 'Valves & Actuators'),
      description: t('common:aria.valvesDescription', 'Control valves and actuators for process control systems'),
      icon: Gauge,
      features: [t('common:aria.controlValves', 'Control Valves'), t('common:aria.pneumaticActuators', 'Pneumatic Actuators'), t('common:aria.electricActuators', 'Electric Actuators'), t('common:aria.valvePositioners', 'Valve Positioners')]
    },
    {
      id: "analyzers",
      title: t('common:aria.analyzers', 'Analyzers'),
      description: t('common:aria.analyzersDescription', 'Gas, liquid, and process analyzers for quality control'),
      icon: FlaskConical,
      features: [t('common:aria.gasAnalyzers', 'Gas Analyzers'), t('common:aria.liquidAnalyzers', 'Liquid Analyzers'), t('common:aria.processAnalyzers', 'Process Analyzers'), t('common:aria.multiParameterSystems', 'Multi-parameter Systems')]
    },
    {
      id: "signal-conditioners",
      title: t('common:aria.signalConditioners', 'Signal Conditioners'),
      description: t('common:aria.signalConditionersDescription', 'Signal processing and conditioning equipment for measurement systems'),
      icon: Zap,
      features: [t('common:aria.isolationAmplifiers', 'Isolation Amplifiers'), t('common:aria.signalConverters', 'Signal Converters'), t('common:aria.measuringTransducers', 'Measuring Transducers'), t('common:aria.noiseFilters', 'Noise Filters')]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${instrumentationLabImage})`,
            
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