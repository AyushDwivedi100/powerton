import { motion } from "framer-motion";
import { SEO } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  GraduationCap,
  Target,
  TrendingUp,
  Award,
  Heart,
  CheckCircle,
} from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import {
  AnimatedSection,
  useScrollAnimations,
} from "@/hooks/use-scroll-animation";
import careerHeroImage from "@assets/generated_images/engineering_workplace_career_hero.png";
import CareerApplicationForm from "@/components/forms/career-application-form";

export default function Career() {
  useScrollAnimations();
  const { t } = useTranslation(["pages", "common"]);

  const benefits = [
    {
      icon: TrendingUp,
      title: t("pages:career.benefits.careerGrowth.title"),
      description: t("pages:career.benefits.careerGrowth.description"),
    },
    {
      icon: GraduationCap,
      title: t("pages:career.benefits.learningDevelopment.title"),
      description: t("pages:career.benefits.learningDevelopment.description"),
    },
    {
      icon: Heart,
      title: t("pages:career.benefits.workLifeBalance.title"),
      description: t("pages:career.benefits.workLifeBalance.description"),
    },
    {
      icon: Users,
      title: t("pages:career.benefits.teamCulture.title"),
      description: t("pages:career.benefits.teamCulture.description"),
    },
    {
      icon: Award,
      title: t("pages:career.benefits.recognitionRewards.title"),
      description: t("pages:career.benefits.recognitionRewards.description"),
    },
    {
      icon: Target,
      title: t("pages:career.benefits.innovationFocus.title"),
      description: t("pages:career.benefits.innovationFocus.description"),
    },
  ];

  return (
    <>
      <SEO
        title={t("pages:career.seo.title")}
        description={t("pages:career.seo.description")}
        keywords={t("pages:career.seo.keywords")}
        canonicalUrl="https://powertonengineering.in/career"
      />

      {/* Hero Section */}
      <section className="relative hero-fullscreen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={careerHeroImage}
            alt={t("pages:career.hero.imageAlt")}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-blue-600/60 dark:bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-wrap-safe responsive-text">
              {t("pages:career.hero.title")}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto text-wrap-safe">
              {t("pages:career.hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-lg">
              <div className="flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-secondary mr-3" />
                <span>{t("pages:career.hero.benefits.growth")}</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-secondary mr-3" />
                <span>{t("pages:career.hero.benefits.innovation")}</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-secondary mr-3" />
                <span>{t("pages:career.hero.benefits.culture")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <AnimatedSection animation="fadeInUp" delay={0.1} duration={0.8}>
        <section className="py-12 md:py-16 lg:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                {t("pages:career.whyJoinUs.title")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {t("pages:career.whyJoinUs.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-primary/10 rounded-lg mr-4">
                          <benefit.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {benefit.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Application Form */}
      <AnimatedSection animation="fadeInUp" delay={0.2} duration={0.8}>
        <section id="application" className="py-12 md:py-16 lg:py-20 bg-muted">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <CareerApplicationForm />
          </div>
        </section>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection animation="slideInUp" delay={0.2} duration={0.9}>
        <section className="py-12 md:py-16 lg:py-20 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              {t("pages:career.cta.title")}
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              {t("pages:career.cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 gap-4 sm:space-y-0 sm:space-x-4">
              <a href="#application">
                <Button
                  data-testid="button-apply-now"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-4"
                >
                  {t("pages:career.cta.applyNow")}
                </Button>
              </a>
              <Link href="/contact">
                <Button
                  data-testid="link-view-openings"
                  variant="outline"
                  className="border-2 border-border text-foreground hover:bg-white hover:text-primary text-lg px-8 py-4"
                >
                  {t("pages:career.cta.viewOpenings")}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
