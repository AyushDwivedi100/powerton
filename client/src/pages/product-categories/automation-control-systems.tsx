import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Cpu, Monitor, Settings, Database } from 'lucide-react';
import automationBgImage from '@assets/generated_images/Industrial_PLC_Control_Panel_54555fe9.png';
import { getHeroImage } from '@/assets/images';

const AutomationControlSystems = () => {
  const { t } = useTranslation(['products', 'common']);
  const subcategories = [
    {
      id: "plcs",
      title: t('products:subcategories.plcs.title', 'PLCs (Programmable Logic Controllers)'),
      description: t('products:subcategories.plcs.description', 'Industrial automation controllers for process control'),
      icon: Cpu,
      features: [t('products:features.digitalIO', 'Digital I/O'), t('products:features.analogProcessing', 'Analog Processing'), t('products:features.communicationModules', 'Communication Modules'), t('products:features.programmingSoftware', 'Programming Software')]
    },
    {
      id: "scada",
      title: t('products:subcategories.scada.title', 'SCADA Systems'),
      description: t('products:subcategories.scada.description', 'Supervisory control and data acquisition systems'),
      icon: Monitor,
      features: [t('products:features.realtimeMonitoring', 'Real-time Monitoring'), t('products:features.dataLogging', 'Data Logging'), t('products:features.alarmManagement', 'Alarm Management'), t('products:features.remoteAccess', 'Remote Access')]
    },
    {
      id: "dcs",
      title: t('products:subcategories.dcs.title', 'DCS (Distributed Control Systems)'),
      description: t('products:subcategories.dcs.description', 'Distributed control systems for large-scale processes'),
      icon: Database,
      features: [t('products:features.processControl', 'Process Control'), t('products:features.distributedArchitecture', 'Distributed Architecture'), t('products:features.redundancy', 'Redundancy'), t('products:features.advancedControl', 'Advanced Control')]
    },
    {
      id: "hmi",
      title: t('products:subcategories.hmi.title', 'HMI (Human Machine Interface)'),
      description: t('products:subcategories.hmi.description', 'User interfaces for industrial control systems'),
      icon: Settings,
      features: [t('products:features.touchscreenDisplays', 'Touchscreen Displays'), t('products:features.graphicInterface', 'Graphic Interface'), t('products:features.dataVisualization', 'Data Visualization'), t('products:features.operatorControl', 'Operator Control')]
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
            
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/products">
              <Button variant="ghost" className="mb-6 hover:bg-primary/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t('backToProducts', 'Back to Products')}
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('products:automationControl.title', 'Automation & Control Systems')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {t('products:automationControl.subtitle', 'Advanced automation and control solutions for industrial process management and optimization')}
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="secondary">{t('products:badges.plcs', 'PLCs')}</Badge>
              <Badge variant="secondary">{t('products:badges.scada', 'SCADA')}</Badge>
              <Badge variant="secondary">{t('products:badges.dcs', 'DCS')}</Badge>
              <Badge variant="secondary">{t('products:badges.hmi', 'HMI')}</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Subcategories Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">
          {t('products:sections.controlSystemSolutions', 'Control System Solutions')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {subcategories.map((subcategory) => {
            const IconComponent = subcategory.icon;
            return (
              <Link key={subcategory.id} href={`/products/${subcategory.id}`}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.03 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Card className="group cursor-pointer border border-border/50">
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
                      <h4 className="font-medium text-sm text-foreground mb-3">{t('products:sections.keyFeatures', 'Key Features:')} </h4>
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
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-muted/50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            {t('products:cta.needAutomationSolutions', 'Need Automation Solutions?')}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t('products:cta.engineersDescription', 'Our automation engineers can design and implement comprehensive control systems for your facility.')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                {t('products:cta.contactAutomationExperts', 'Contact Automation Experts')}
              </Button>
            </Link>
            <Link href="/quote">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                {t('products:cta.requestQuote', 'Request Quote')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationControlSystems;