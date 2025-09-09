import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Shield, Zap, ShieldCheck, AlertTriangle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import safetyEquipmentImage from '@assets/generated_images/Industrial_safety_equipment_showcase_ef36d76c.png';

const SafetyProtectiveDevices = () => {
  const { t } = useTranslation(['products', 'common']);
  const subcategories = [
    {
      id: "surge-protectors",
      title: t('products:features.safetyDevices.surgeProtectors.title', 'Surge Protectors'),
      description: t('products:features.safetyDevices.surgeProtectors.description', 'Electrical surge protection devices for equipment safety'),
      icon: Zap,
      features: [t('products:features.safetyDevices.surgeProtectors.features.lightning', 'Lightning Protection'), t('products:features.safetyDevices.surgeProtectors.features.voltage', 'Voltage Surge Protection'), t('products:features.safetyDevices.surgeProtectors.features.equipment', 'Equipment Safety'), t('products:features.safetyDevices.surgeProtectors.features.power', 'Power Quality')]
    },
    {
      id: "grounding-systems",
      title: t('products:features.safetyDevices.groundingSystems.title', 'Grounding Systems'),
      description: t('products:features.safetyDevices.groundingSystems.description', 'Electrical grounding and earthing systems for safety'),
      icon: Shield,
      features: [t('products:features.safetyDevices.groundingSystems.features.electrodes', 'Earth Electrodes'), t('products:features.safetyDevices.groundingSystems.features.rods', 'Ground Rods'), t('products:features.safetyDevices.groundingSystems.features.conductors', 'Bonding Conductors'), t('products:features.safetyDevices.groundingSystems.features.lightning', 'Lightning Rods')]
    },
    {
      id: "safety-relays-switches",
      title: t('products:features.safetyDevices.safetyRelays.title', 'Safety Relays & Switches'),
      description: t('products:features.safetyDevices.safetyRelays.description', 'Safety control devices for emergency shutdown systems'),
      icon: ShieldCheck,
      features: [t('products:features.safetyDevices.safetyRelays.features.emergency', 'Emergency Stop'), t('products:features.safetyDevices.safetyRelays.features.monitoring', 'Safety Monitoring'), t('products:features.safetyDevices.safetyRelays.features.failSafe', 'Fail-Safe Design'), t('products:features.safetyDevices.safetyRelays.features.certified', 'Certified Safety')]
    },
    {
      id: "intrinsically-safe-equipment",
      title: t('products:features.safetyDevices.intrinsicallySafe.title', 'Intrinsically Safe Equipment'),
      description: t('products:features.safetyDevices.intrinsicallySafe.description', 'Explosion-proof equipment for hazardous environments'),
      icon: AlertTriangle,
      features: [t('products:features.safetyDevices.intrinsicallySafe.features.atex', 'ATEX Certified'), t('products:features.safetyDevices.intrinsicallySafe.features.explosion', 'Explosion Proof'), t('products:features.safetyDevices.intrinsicallySafe.features.hazardous', 'Hazardous Area'), t('products:features.safetyDevices.intrinsicallySafe.features.intrinsic', 'Intrinsic Safety')]
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
              {t('products:productPages.safetyProtective.title', 'Safety & Protective Devices')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {t('products:productPages.safetyProtective.description', 'Comprehensive safety and protective equipment to ensure personnel and equipment safety in industrial environments')}
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge variant="secondary">{t('products:features.safetyDevices.badges.surgeProtection', 'Surge Protection')}</Badge>
              <Badge variant="secondary">{t('products:features.safetyDevices.badges.groundingSystems', 'Grounding Systems')}</Badge>
              <Badge variant="secondary">{t('products:features.safetyDevices.badges.safetyRelays', 'Safety Relays')}</Badge>
              <Badge variant="secondary">{t('products:features.safetyDevices.badges.intrinsicSafety', 'Intrinsic Safety')}</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Subcategories Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">
          {t('products:productPages.safetyProtective.sectionsTitle', 'Safety Solutions')}
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
                      <h4 className="font-medium text-sm text-foreground mb-3">{t('products:common.keyFeatures', 'Key Features')}:</h4>
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
            {t('products:productPages.safetyProtective.cta.title', 'Prioritizing Safety in Your Operations?')}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t('products:productPages.safetyProtective.cta.description', 'Our safety engineers can assess your facility and recommend comprehensive protective solutions.')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                {t('products:productPages.safetyProtective.cta.contactButton', 'Contact Safety Experts')}
              </Button>
            </Link>
            <Link href="/quote">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                {t('common:buttons.requestQuote', 'Request Quote')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyProtectiveDevices;