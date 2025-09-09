import { motion } from "framer-motion";
import { SEO } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Users,
  Award,
  Globe,
  Target,
  Eye,
  Heart,
} from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { COMPANY_INFO } from "@/data/constants";
import { getHeroImage } from "@/assets/images";
import {
  AnimatedSection,
  useScrollAnimations,
} from "@/hooks/use-scroll-animation";
import industryFacilityImage from "@assets/generated_images/Industrial_automation_facility_interior_3c4562ec.png";

export default function About() {
  useScrollAnimations();
  const { t } = useTranslation(['pages', 'common']);

  const values = [
    {
      icon: Target,
      title: t('pages:about.values.quality.title', 'Quality Excellence'),
      description: t('pages:about.values.quality.description', 'Commitment to delivering superior quality in every project and service we provide.'),
    },
    {
      icon: Users,
      title: t('pages:about.values.customer.title', 'Customer Focus'),
      description: t('pages:about.values.customer.description', 'Dedicated to understanding and exceeding our customers\' expectations and requirements.'),
    },
    {
      icon: Award,
      title: t('pages:about.values.innovation.title', 'Innovation'),
      description: t('pages:about.values.innovation.description', 'Continuously adopting latest technologies and innovative solutions for complex challenges.'),
    },
    {
      icon: Globe,
      title: t('pages:about.values.reliability.title', 'Reliability'),
      description: t('pages:about.values.reliability.description', 'Building dependable systems and maintaining long-term partnerships with our clients.'),
    },
  ];

  const certifications = [
    t('pages:about.certifications.iso9001'),
    t('pages:about.certifications.iso14001'), 
    t('pages:about.certifications.ohsas18001'),
    t('pages:about.certifications.ceMarking'),
    t('pages:about.certifications.ulListed'),
    t('pages:about.certifications.cpriApproved'),
  ];

  const teamStats = [
    { number: 50, suffix: "+", label: t('pages:about.stats.engineers') },
    { number: 25, suffix: "+", label: t('pages:about.stats.staff') },
    { number: 15, suffix: "+", label: t('pages:about.stats.experience') },
    { number: null, displayValue: "24/7", label: t('pages:about.stats.support') },
  ];

  return (
    <>
      <SEO
        title="About Powerton Engineering - 15+ Years of Industrial Automation Excellence"
        description="Learn about Powerton Engineering's journey in industrial automation, electrical engineering, and instrumentation solutions. Expert team serving industries across India since 2008."
        keywords={t('pages:about.seo.keywords', 'about powerton engineering, industrial automation company, electrical engineering company, instrumentation services, automation experts India')}
        canonicalUrl="https://powertonengineering.in/about"
      />

      {/* Hero Section */}
      <section className="relative hero-fullscreen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${getHeroImage("about", { preload: true })?.src})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {t('pages:about.hero.title')}
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              {t('pages:about.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <AnimatedSection animation="fadeInUp" delay={0.1} duration={0.8}>
        <section className="py-12 md:py-16 lg:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                  {t('pages:about.story.title')}
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {t('pages:about.story.description1')}
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {t('pages:about.story.description2')}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {teamStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="text-center p-4 bg-muted rounded-lg"
                    >
                      <div className="text-2xl font-bold text-secondary mb-2">
                        {stat.number ? (
                          <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                        ) : (
                          stat.displayValue
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <img
                  src={industryFacilityImage}
                  alt={t('common:altTexts.aboutBackground', 'ID-004: Powerton Engineering industrial automation facility with modern control systems')}
                  className="rounded-xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Mission & Vision */}
      <AnimatedSection animation="fadeInLeft" delay={0.2} duration={0.9}>
        <section className="py-12 md:py-16 lg:py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Card className="border-none shadow-lg cursor-pointer">
                  <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">
                      {t('pages:about.mission.title')}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('pages:about.mission.description')}
                  </p>
                </CardContent>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Card className="border-none shadow-lg cursor-pointer">
                  <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mr-4">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">
                      {t('pages:about.vision.title')}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('pages:about.vision.description')}
                  </p>
                </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Core Values */}
      <AnimatedSection animation="scaleIn" delay={0.15} duration={0.7}>
        <section className="py-12 md:py-16 lg:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                {t('pages:about.coreValues.title')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t('pages:about.coreValues.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    whileHover={{ y: -10, scale: 1.03 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <Card className="text-center border-none shadow-lg cursor-pointer">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-6">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-4">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {value.description}
                      </p>
                    </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Certifications & Standards */}
      <AnimatedSection animation="fadeInRight" delay={0.1} duration={0.8}>
        <section className="py-12 md:py-16 lg:py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Certifications & Quality Standards
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our commitment to quality is validated by industry-recognized
                certifications and compliance standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="flex items-center p-4 bg-card border rounded-lg shadow"
                >
                  <CheckCircle className="w-6 h-6 text-secondary mr-4 flex-shrink-0" />
                  <span className="font-medium text-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection animation="slideInUp" delay={0.2} duration={0.9}>
        <section className="py-12 md:py-16 lg:py-20 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Partner with Powerton Engineering
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Ready to transform your industrial operations with our expert
              engineering solutions? Let's discuss your project requirements and
              deliver excellence together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact">
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-4">
                  Start Your Project
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  className="border-2 border-border text-foreground text-lg px-8 py-4"
                >
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
