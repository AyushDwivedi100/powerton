import { motion } from "framer-motion";
import { SEO } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getServices, getCompanyInfo } from "@/data/constants";
import {
  AnimatedSection,
  useScrollAnimations,
} from "@/hooks/use-scroll-animation";
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
  Hammer,
  Star,
  Timer,
  Phone,
  MessageSquare,
} from "lucide-react";
import { Link } from "wouter";
import { getHeroImage } from "@/assets/images";
import { useTranslation } from "react-i18next";
import { useLazyNamespace } from "@/lib/lazy-i18n";

const iconMap = {
  tools: Hammer,
  wrench: Wrench,
  gauge: Gauge,
  users: Users,
  cog: Settings,
  truck: Truck,
  shield: Shield,
  sun: Sun,
};

export default function Services() {
  useScrollAnimations();
  useLazyNamespace(["pages", "services"]);
  const { t } = useTranslation(["pages", "services", "common"]);
  const services = getServices(t);
  const companyInfo = getCompanyInfo(t);

  return (
    <>
      <SEO
        title={t("pages:services.seo.title")}
        description={t("pages:services.seo.description")}
        keywords={t("pages:services.seo.keywords")}
        canonicalUrl="https://powertonengineering.in/services"
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative hero-fullscreen overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${
                getHeroImage("services", { preload: true })?.src
              })`,
            }}
          ></div>
          <div className="absolute inset-0 bg-blue-600/60 dark:bg-black/60"></div>

          <div className="relative z-10">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center text-white">
              <AnimatedSection animation="fadeInUp" delay={0.1} duration={0.8}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-wrap-safe responsive-text">
                  {t("pages:services.hero.title")}
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto text-wrap-safe">
                  {t("pages:services.hero.subtitle")}
                </p>
                <Link href="/quote">
                  <Button
                    size="lg"
                    className="bg-secondary hover:bg-secondary/90 text-white text-wrap-safe"
                  >
                    {t("common:buttons.getQuote")}{" "}
                    <ArrowRight className="ms-2 h-5 w-5 rtl-flip" />
                  </Button>
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <AnimatedSection animation="fadeInUp" delay={0.2}>
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {t("services:title")}
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-wrap-safe responsive-text">
                  {t("services:subtitle")}
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 items-stretch flex-safe">
              {services.map((service, index) => {
                const IconComponent =
                  iconMap[service.icon as keyof typeof iconMap] || Settings;

                return (
                  <AnimatedSection
                    key={service.id}
                    animation="fadeInUp"
                    delay={0.3 + index * 0.1}
                    className="h-full"
                  >
                    <Link href={`/services-category/${service.id}`}>
                      <motion.div
                        whileHover={{ y: -10, scale: 1.03 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="h-full"
                      >
                        <Card className="w-full h-full cursor-pointer group border-border flex flex-col relative overflow-hidden">
                          {/* Popular Badge */}
                          {service.popular && (
                            <div className="absolute top-4 right-4 z-10">
                              <Badge className="bg-secondary text-white text-xs px-2 py-1 flex items-center gap-1 shadow-md hover:shadow-lg">
                                <Star className="w-3 h-3" />
                                {t("common:labels.popular")}
                              </Badge>
                            </div>
                          )}

                          <CardHeader className="pb-4 pt-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                              <IconComponent className="w-8 h-8 text-white" />
                            </div>
                            <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary dark:group-hover:text-secondary transition-colors mb-2 text-wrap-safe responsive-text line-clamp-safe">
                              {service.title}
                            </CardTitle>
                          </CardHeader>

                          <CardContent className="flex-1 flex flex-col">
                            <p className="text-muted-foreground mb-6 leading-relaxed text-sm text-wrap-safe responsive-text line-clamp-safe">
                              {service.description}
                            </p>

                            <div className="space-y-3 mb-6 flex-1">
                              <h4 className="font-semibold text-foreground text-sm text-wrap-safe">
                                {t("common:labels.keyFeatures")}:
                              </h4>
                              <ul className="space-y-2">
                                {service.features.map(
                                  (feature, featureIndex) => (
                                    <li
                                      key={featureIndex}
                                      className="flex items-start text-sm text-muted-foreground"
                                    >
                                      <CheckCircle className="w-4 h-4 text-secondary me-2 flex-shrink-0 mt-0.5 rtl-flip" />
                                      <span className="group-hover:text-foreground transition-colors text-wrap-safe">
                                        {feature}
                                      </span>
                                    </li>
                                  ),
                                )}
                              </ul>
                            </div>

                            <div className="mt-auto space-y-3 pt-4">
                              <div className="flex gap-2">
                                <Link
                                  href={`/quote`}
                                  className="flex-1"
                                >
                                  <Button
                                    size="sm"
                                    className="w-full bg-primary hover:bg-primary/90 text-xs text-wrap-safe text-white"
                                  >
                                    {t("common:buttons.quickQuote")}
                                  </Button>
                                </Link>
                                <Link href={`tel:${companyInfo.phone}`}>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="px-3"
                                  >
                                    <Phone className="w-4 h-4" />
                                  </Button>
                                </Link>
                              </div>

                              <Button
                                variant="ghost"
                                className="text-secondary hover:bg-transparent hover:text-secondary p-0 font-semibold transition-all duration-300 w-full justify-center"
                              >
                                {t("common:buttons.learnMore")}
                                <span className="ms-2 inline-block transition-transform duration-300 group-hover:translate-x-2 rtl:group-hover:-translate-x-2">
                                  <span className="ltr:inline rtl:hidden">
                                    →
                                  </span>
                                  <span className="ltr:hidden rtl:inline">
                                    ←
                                  </span>
                                </span>
                              </Button>
                            </div>
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

        {/* Why Choose Us */}
        <section className="py-16 md:py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <AnimatedSection animation="fadeInUp" delay={0.2}>
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {t("pages:services.whyChoose.title")}
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                  {t("pages:services.whyChoose.description", {
                    yearsExperience: companyInfo.stats.yearsExperience,
                  })}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">
                      {companyInfo.stats.projectsCompleted}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t("common:labels.projectsCompleted")}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">
                      {companyInfo.stats.clientsServed}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t("common:labels.satisfiedClients")}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">
                      {companyInfo.stats.yearsExperience}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t("common:labels.yearsExperience")}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">
                      {companyInfo.stats.responseTime}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {t("common:labels.responseTime")}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch grid-equal-rows">
              <AnimatedSection animation="fadeInUp" delay={0.3} className="h-full">
                <Card className="text-center border-border h-full min-h-[220px]">
                  <CardContent className="p-6 flex flex-col h-full justify-between">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {t("pages:services.benefits.expertTeam.title")}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {t("pages:services.benefits.expertTeam.description")}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={0.4} className="h-full">
                <Card className="text-center border-border h-full min-h-[220px]">
                  <CardContent className="p-6 flex flex-col h-full justify-between">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {t("pages:services.benefits.rapidResponse.title")}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {t("pages:services.benefits.rapidResponse.description")}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={0.5} className="h-full">
                <Card className="text-center border-border h-full min-h-[220px]">
                  <CardContent className="p-6 flex flex-col h-full justify-between">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {t("pages:services.benefits.qualityAssured.title")}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {t("pages:services.benefits.qualityAssured.description")}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={0.6} className="h-full">
                <Card className="text-center border-border h-full min-h-[220px]">
                  <CardContent className="p-6 flex flex-col h-full justify-between">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {t("pages:services.benefits.clientFocused.title")}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {t("pages:services.benefits.clientFocused.description")}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-20 bg-primary">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
            <AnimatedSection animation="fadeInUp" delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {t("pages:services.cta.title")}
              </h2>
              <p className="text-white mb-8 text-lg">
                {t("pages:services.cta.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/quote">
                  <Button
                    size="lg"
                    className="bg-foreground text-background border-border hover:bg-primary/90 hover:scale-105 transition-all duration-300"
                  >
                    <span className="text-wrap-safe">
                      {t("common:buttons.getQuote")}
                    </span>{" "}
                    <ArrowRight className="me-2 h-5 w-5 rtl-flip" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="hover:scale-105 transition-all duration-300"
                  >
                    <MessageSquare className="me-2 h-5 w-5 rtl-flip" />
                    <span className="text-wrap-safe">
                      {t("common:buttons.contactUs")}
                    </span>
                  </Button>
                </Link>
                <Link href={`tel:${companyInfo.phone}`}>
                  <Button
                    size="lg"
                    variant="secondary"
                    className="hover:scale-105 transition-all duration-300"
                  >
                    <Phone className="me-2 h-5 w-5 rtl-flip" />
                    <span className="text-wrap-safe">
                      {t("common:buttons.callNow")}
                    </span>
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </>
  );
}
