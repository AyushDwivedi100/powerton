import { motion } from "framer-motion";
import { SEO } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SERVICES } from "@/data/constants";
import { AnimatedSection, useScrollAnimations } from "@/hooks/use-scroll-animation";
import { 
  Gauge, 
  Wrench, 
  Shield, 
  Settings,
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  Award,
  Truck,
  Sun,
  Hammer
} from "lucide-react";
import { Link } from "wouter";
import { getServiceHeroImage } from '@/assets/images';
import { useTranslation } from "react-i18next";

const iconMap = {
  "tools": Hammer,
  "wrench": Wrench,
  "gauge": Gauge,
  "users": Users,
  "cog": Settings,
  "truck": Truck,
  "shield": Shield,
  "sun": Sun
};

export default function TechnicalSupport() {
  useScrollAnimations();
  const { t } = useTranslation(['pages', 'common', 'services']);
  
  const service = SERVICES.find(s => s.id === "technical-support")!;
  const serviceId = "technical-support";
  const details = {
    overview: t(`services:serviceDetails.${serviceId}.overview`),
    benefits: t(`services:serviceDetails.${serviceId}.benefits`, { returnObjects: true }) as string[],
    technologies: t(`services:serviceDetails.${serviceId}.technologies`, { returnObjects: true }) as string[],
    industries: t(`services:serviceDetails.${serviceId}.industries`, { returnObjects: true }) as string[]
  };

  const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Settings;

  return (
    <>
      <SEO 
        title={`${service.title} - Powerton Engineering Services`}
        description={service.description}
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
            style={{ 
              backgroundImage: `url(${getServiceHeroImage("technical-support")?.src})`,
              
            }}
          ></div>
          <div className="absolute inset-0 bg-black/60"></div>
          
          <div className="relative z-10">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center text-white">
              <AnimatedSection animation="fadeInUp" delay={0.1} duration={0.8}>
                <div className="w-20 h-20 bg-background/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-10 h-10" />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  {service.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                  {service.description}
                </p>
                <Link href="/quote">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                    {t('common:buttons.getQuote')} <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <AnimatedSection animation="fadeInUp" delay={0.2}>
                  <Card className="mb-8">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <IconComponent className="w-6 h-6 text-primary" />
                        Service Overview
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {details.overview}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection animation="fadeInUp" delay={0.3}>
                  <Card className="mb-8">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <CheckCircle className="w-6 h-6 text-primary" />
                        Key Benefits
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {details.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection animation="fadeInUp" delay={0.4}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Settings className="w-6 h-6 text-primary" />
                        Technologies & Methods
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {details.technologies.map((tech, index) => (
                          <Badge key={index} variant="secondary" className="p-2 justify-start">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <AnimatedSection animation="fadeInLeft" delay={0.5}>
                  <Card className="mb-8">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Clock className="w-6 h-6 text-primary" />
                        Quick Facts
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{t('common:labels.responseTime')}</h4>
                        <p className="text-muted-foreground">24-48 hours for initial consultation</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{t('common:labels.availability')}</h4>
                        <p className="text-muted-foreground">{t('common:messages.availability')}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{t('common:labels.coverage')}</h4>
                        <p className="text-muted-foreground">{t('common:messages.coverage')}</p>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection animation="fadeInLeft" delay={0.6}>
                  <Card className="mb-8">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Award className="w-6 h-6 text-primary" />
                        {t('common:headings.industryApplications')}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {details.industries.map((industry, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-secondary rounded-full"></div>
                            <span className="text-muted-foreground">{industry}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection animation="fadeInLeft" delay={0.7}>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <h3 className="font-semibold text-foreground mb-3">{t('common:messages.readyToStart')}</h3>
                      <p className="text-muted-foreground mb-4">{t('common:messages.consultation')}</p>
                      <div className="space-y-3">
                        <Link href="/quote">
                          <Button className="w-full">
                            {t('common:buttons.getQuote')}
                          </Button>
                        </Link>
                        <Link href="/contact">
                          <Button variant="outline" className="w-full">
                            {t('common:buttons.contactUs')}
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <AnimatedSection animation="fadeInUp" delay={0.2}>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Related Services
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Explore our other professional services that complement {service.title.toLowerCase()}
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.filter(s => s.id !== "technical-support").slice(0, 3).map((relatedService, index) => {
                const RelatedIcon = iconMap[relatedService.icon as keyof typeof iconMap] || Settings;
                return (
                  <AnimatedSection key={relatedService.id} animation="fadeInUp" delay={0.3 + index * 0.1}>
                    <Link href={`/services-category/${relatedService.id}`}>
                      <motion.div
                        whileHover={{ y: -10, scale: 1.03 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="h-full"
                      >
                        <Card className="h-full cursor-pointer group">
                        <CardContent className="p-6">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                            <RelatedIcon className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="font-semibold text-foreground mb-2">{relatedService.title}</h3>
                          <p className="text-muted-foreground text-sm mb-4">{relatedService.description.slice(0, 100)}...</p>
                          <Button variant="ghost" className="p-0 h-auto text-secondary hover:text-secondary/80">
                            {t('common:buttons.learnMore')} <ArrowRight className="ml-1 h-4 w-4" />
                          </Button>
                        </CardContent>
                        </Card>
                      </motion.div>
                    </Link>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}