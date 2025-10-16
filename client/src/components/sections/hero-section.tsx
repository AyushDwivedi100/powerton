import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { StaggeredList } from "@/hooks/use-scroll-animation";
import { getHeroImage } from "@/assets/images";
import { useTranslation } from "react-i18next";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export default function HeroSection() {
  const { t } = useTranslation(["common", "pages"]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      id="home"
      className="relative py-12 md:py-16 lg:py-20 overflow-hidden"
      role="banner"
      aria-labelledby="hero-heading"
      aria-describedby="hero-description"
    >
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${
            getHeroImage("home", { preload: true })?.src
          })`,
        }}
        role="img"
        aria-label={t("common:ui.altTexts.heroBackground")}
      ></div>

      {/* Theme-aware overlay */}
      <div className="absolute inset-0 bg-blue-600/60 dark:bg-black/60"></div>

      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-32">
        <motion.div
          className="max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            id="hero-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight text-white dark:text-white"
            variants={itemVariants}
          >
            {t("pages:home.hero.title.main")}{" "}
            <span className="text-secondary">
              {t("pages:home.hero.title.highlight")}
            </span>
          </motion.h1>

          <motion.p
            id="hero-description"
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 sm:mb-6 md:mb-8 text-white/90 dark:text-white/90 leading-relaxed"
            variants={itemVariants}
          >
            {t("pages:home.hero.subtitle")}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-12"
            variants={containerVariants}
          >
            <motion.div variants={buttonVariants}>
              <Link href="/services" className="w-full sm:w-auto">
                <Button
                  className="bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground w-full sm:w-auto text-xs sm:text-sm md:text-base lg:text-lg px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 transition-all duration-200"
                  aria-label={t("common:aria.exploreServices")}
                >
                  <span className="text-wrap-safe">
                    {t("pages:home.hero.buttons.exploreServices")}
                  </span>
                  <ArrowRight
                    className="ms-2 w-4 h-4 sm:w-5 sm:h-5 rtl-flip"
                    aria-hidden="true"
                  />
                </Button>
              </Link>
            </motion.div>
            <motion.div variants={buttonVariants}>
              <Link href="/quote" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto text-xs sm:text-sm md:text-base lg:text-lg px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 border-border text-white hover:bg-white hover:text-primary dark:border-border dark:text-white dark:hover:bg-white dark:hover:text-primary transition-all duration-300 bg-white/10"
                  aria-label={t("common:aria.requestConsultation")}
                >
                  <span className="text-wrap-safe">
                    {t("pages:home.hero.buttons.requestConsultation")}
                  </span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Key Features */}
          <StaggeredList
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            stagger={0.15}
            role="list"
            aria-label={t("common:aria.companyHighlights")}
          >
            <div className="flex items-center gap-3" role="listitem">
              <CheckCircle
                className="w-6 h-6 text-secondary flex-shrink-0"
                aria-hidden="true"
              />
              <span className="text-lg text-white">
                {t("pages:home.hero.features.experience")}
              </span>
            </div>
            <div className="flex items-center gap-3" role="listitem">
              <CheckCircle
                className="w-6 h-6 text-secondary flex-shrink-0"
                aria-hidden="true"
              />
              <span className="text-lg text-white">
                {t("pages:home.hero.features.support")}
              </span>
            </div>
            <div className="flex items-center gap-3" role="listitem">
              <CheckCircle
                className="w-6 h-6 text-secondary flex-shrink-0"
                aria-hidden="true"
              />
              <span className="text-lg text-white">
                {t("pages:home.hero.features.service")}
              </span>
            </div>
          </StaggeredList>
        </motion.div>
      </div>

      {/* Stats Section - fully theme responsive */}
      <motion.div
        className="relative bg-white/10 dark:bg-black/20 border-t border-border/20 dark:border-border/10"
        initial="hidden"
        animate="visible"
        variants={statsVariants}
        role="region"
        aria-labelledby="stats-heading"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">
          <h2 id="stats-heading" className="sr-only">
            {t("pages:home.hero.stats.heading")}
          </h2>
          <StaggeredList
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
            stagger={0.1}
            delay={0.3}
            role="list"
            aria-label={t("common:aria.performanceStats")}
          >
            <div role="listitem">
              <div
                className="text-3xl lg:text-4xl font-bold text-secondary mb-2"
                aria-label={t("common:aria.stats.experienceYears")}
              >
                <AnimatedCounter target={15} suffix="+" />
              </div>
              <div className="text-sm lg:text-base text-white/90">
                {t("common:company.stats.yearsExperience")}
              </div>
            </div>
            <div role="listitem">
              <div
                className="text-3xl lg:text-4xl font-bold text-secondary mb-2"
                aria-label={t("common:aria.stats.projectsCompleted")}
              >
                <AnimatedCounter target={50} suffix="+" />
              </div>
              <div className="text-sm lg:text-base text-white/90">
                {t("common:company.stats.projectsCompleted")}
              </div>
            </div>
            <div role="listitem">
              <div
                className="text-3xl lg:text-4xl font-bold text-secondary mb-2"
                aria-label={t("common:aria.stats.happyClients")}
              >
                <AnimatedCounter target={45} suffix="+" />
              </div>
              <div className="text-sm lg:text-base text-white/90">
                {t("common:company.stats.clientsServed")}
              </div>
            </div>
            <div role="listitem">
              <div
                className="text-3xl lg:text-4xl font-bold text-secondary mb-2"
                aria-label={t("common:aria.stats.support")}
              >
                <span>24/7</span>
              </div>
              <div className="text-sm lg:text-base text-white/90">
                {t("common:company.stats.support")}
              </div>
            </div>
          </StaggeredList>
        </div>
      </motion.div>
    </section>
  );
}
