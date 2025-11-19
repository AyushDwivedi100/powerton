import { motion } from "framer-motion";
import { SEO } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Users,
  Award,
  Globe,
  Target,
  Eye,
  Trophy,
  FileText,
  ExternalLink,
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
import { Helmet } from "react-helmet-async";
import { generateBreadcrumbData } from "@/utils/seo-enhancements";

export default function About() {
  useScrollAnimations();
  const { t } = useTranslation(["pages", "common"]);

  const ACHIEVEMENTS = [
    {
      year: t("pages:about.achievements.2024.year"),
      awards: [
        t("pages:about.achievements.2024.awards.0"),
        t("pages:about.achievements.2024.awards.1"),
        t("pages:about.achievements.2024.awards.2"),
        t("pages:about.achievements.2024.awards.3"),
      ],
    },
    {
      year: t("pages:about.achievements.2023.year"),
      awards: [
        t("pages:about.achievements.2023.awards.0"),
        t("pages:about.achievements.2023.awards.1"),
        t("pages:about.achievements.2023.awards.2"),
        t("pages:about.achievements.2023.awards.3"),
      ],
    },
    {
      year: t("pages:about.achievements.2022.year"),
      awards: [
        t("pages:about.achievements.2022.awards.0"),
        t("pages:about.achievements.2022.awards.1"),
        t("pages:about.achievements.2022.awards.2"),
      ],
    },
  ];

  const values = [
    {
      icon: Target,
      title: t("pages:about.values.quality.title"),
      description: t("pages:about.values.quality.description"),
    },
    {
      icon: Users,
      title: t("pages:about.values.customer.title"),
      description: t("pages:about.values.customer.description"),
    },
    {
      icon: Award,
      title: t("pages:about.values.innovation.title"),
      description: t("pages:about.values.innovation.description"),
    },
    {
      icon: Globe,
      title: t("pages:about.values.reliability.title"),
      description: t("pages:about.values.reliability.description"),
    },
  ];

  const certifications = [
    t("pages:about.certifications.iso9001"),
    t("pages:about.certifications.iso14001"),
    t("pages:about.certifications.ohsas18001"),
    t("pages:about.certifications.ceMarking"),
    t("pages:about.certifications.ulListed"),
    t("pages:about.certifications.cpriApproved"),
  ];

  const teamStats = [
    {
      number: 50,
      suffix: "+",
      label: t("common:company.stats.projectsCompleted"),
    },
    { number: 45, suffix: "+", label: t("common:company.stats.clientsServed") },
    {
      number: 15,
      suffix: "+",
      label: t("common:company.stats.yearsExperience"),
    },
    {
      number: null,
      displayValue: "24/7",
      label: t("common:company.stats.support"),
    },
  ];

  // Generate breadcrumb schema
  const breadcrumbItems = [
    { name: t("common:sitemap.pages.home"), url: "/" },
    { name: t("common:sitemap.pages.aboutUs"), url: "/about" },
  ];
  const breadcrumbSchema = generateBreadcrumbData(breadcrumbItems);

  return (
    <>
      <SEO
        title={t("pages:about.seo.title")}
        description={t("pages:about.seo.description")}
        keywords={t("pages:about.seo.keywords")}
        canonicalUrl="https://powertonengineering.in/about"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative hero-fullscreen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${
              getHeroImage("about", { preload: true })?.src
            })`,
          }}
        ></div>
        <div className="absolute inset-0 bg-blue-600/60 dark:bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-wrap-safe responsive-text">
              {t("pages:about.hero.title")}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto text-wrap-safe">
              {t("pages:about.hero.subtitle")}
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
                  {t("pages:about.story.title")}
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {t("pages:about.story.description1")}
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {t("pages:about.story.description2")}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {teamStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="text-center p-4 bg-muted rounded-lg"
                    >
                      <div className="text-2xl font-bold text-secondary mb-2">
                        {stat.number ? (
                          <AnimatedCounter
                            target={stat.number}
                            suffix={stat.suffix}
                          />
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
                  alt={t(
                    "common:altTexts.aboutBackground",
                    "ID-004: Powerton Engineering industrial automation facility with modern control systems"
                  )}
                  className="rounded-xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Government A Class Contractor Certificates */}
      <AnimatedSection animation="fadeInUp" delay={0.15} duration={0.8}>
        <section className="py-12 md:py-16 lg:py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                {t("pages:about.licenses.title")}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t("pages:about.licenses.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Card className="border-none shadow-lg h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <FileText className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {t("pages:about.licenses.upAClass")}
                        </h3>
                        <Badge variant="secondary" className="mb-4">
                          {t("pages:about.licenses.AClassBadge")}
                        </Badge>
                      </div>
                    </div>
                    <a
                      href="/certificates/up-license-a-class.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                      data-testid="link-up-license-view"
                    >
                      <Button
                        variant="default"
                        className="w-full"
                        data-testid="button-view-up-license"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {t("pages:about.licenses.viewLicense")}
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Card className="border-none shadow-lg h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <FileText className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {t("pages:about.licenses.gjAClass")}
                        </h3>
                        <Badge variant="secondary" className="mb-4">
                          {t("pages:about.licenses.AClassBadge")}
                        </Badge>
                      </div>
                    </div>
                    <a
                      href="/certificates/pepl-license-2.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                      data-testid="link-state-license-view"
                    >
                      <Button
                        variant="default"
                        className="w-full"
                        data-testid="button-view-state-license"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {t("pages:about.licenses.viewLicense")}
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Mission & Vision */}
      <AnimatedSection animation="fadeInLeft" delay={0.2} duration={0.9}>
        <section className="py-12 md:py-16 lg:py-20 bg-background">
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
                        {t("pages:about.mission.title")}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {t("pages:about.mission.description")}
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
                        {t("pages:about.vision.title")}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {t("pages:about.vision.description")}
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
        <section className="py-12 md:py-16 lg:py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                {t("pages:about.coreValues.title")}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t("pages:about.coreValues.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch grid-equal-rows">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    whileHover={{ y: -10, scale: 1.03 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="h-full"
                  >
                    <Card className="text-center border-none shadow-lg cursor-pointer h-full min-h-[280px]">
                      <CardContent className="p-8 flex flex-col h-full justify-between">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-6">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-4">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground flex-grow">
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
        <section className="py-12 md:py-16 lg:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                {t("pages:about.certifications.title")}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t("pages:about.certifications.subtitle")}
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

      {/* Awards & Achievements */}
      <AnimatedSection animation="fadeInLeft" delay={0.15} duration={0.7}>
        <section className="py-12 md:py-16 lg:py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                {t("pages:about.achievements.title")}
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                {t("pages:about.achievements.subtitle")}
              </p>
            </div>

            <div className="space-y-8">
              {ACHIEVEMENTS.map((yearData) => (
                <motion.div
                  key={yearData.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card
                    key={yearData.year}
                    className="bg-card border border-border rounded-lg shadow-sm"
                  >
                    <CardHeader className="p-6">
                      <CardTitle className="text-2xl font-bold text-primary flex items-center gap-2">
                        <Trophy className="w-6 h-6 text-secondary" />
                        {yearData.year}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 pt-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {yearData.awards.map((award, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-3 p-4 bg-muted rounded-lg"
                          >
                            <Award className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                            <span className="text-foreground font-medium">
                              {award}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
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
              {t("pages:about.cta.title")}
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              {t("pages:about.cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 gap-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact">
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-4">
                  {t("pages:about.cta.startProject")}
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  className="border-2 border-border text-foreground text-lg px-8 py-4"
                >
                  {t("pages:about.cta.exploreServices")}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
