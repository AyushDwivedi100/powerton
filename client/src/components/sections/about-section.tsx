import { Button } from "@/components/ui/button";
import { Cog, Wrench, Sun, Settings } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { AnimatedSection, StaggeredList } from "@/hooks/use-scroll-animation";
import { useTranslation } from "react-i18next";

export default function AboutSection() {
  const { t } = useTranslation();
  const features = [
    {
      icon: Cog,
      title: t("pages:home.about.features.electrical.title"),
      description: t("pages:home.about.features.electrical.description"),
    },
    {
      icon: Wrench,
      title: t("pages:home.about.features.mechanical.title"),
      description: t("pages:home.about.features.mechanical.description"),
    },
    {
      icon: Sun,
      title: t("pages:home.about.features.solar.title"),
      description: t("pages:home.about.features.solar.description"),
    },
    {
      icon: Settings,
      title: t("pages:home.about.features.tools.title"),
      description: t("pages:home.about.features.tools.description"),
    },
  ];

  return (
    <section
      id="about"
      className="relative py-12 md:py-16 lg:py-20 bg-background dark:bg-background overflow-hidden"
      role="main"
      aria-labelledby="about-heading"
      aria-describedby="about-description"
    >
      {/* Clean theme-aware background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/20 to-muted/10 dark:from-muted/10 dark:to-muted/5"></div>

      {/* Subtle pattern overlay - theme responsive */}
      <div
        className="absolute inset-0 opacity-30 dark:opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, hsl(var(--primary) / 0.1) 1px, transparent 0)",
          backgroundSize: "50px 50px",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
            <AnimatedSection
              animation="fadeInLeft"
              delay={0.2}
              duration={0.8}
              className="order-2 lg:order-1"
            >
              <motion.div
                className="relative rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary to-primary/80 p-8 text-white"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Professional engineering visual */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40 rounded-lg"></div>
                  <div className="relative bg-white/10 rounded-lg p-6 border border-border/20">
                    <div className="text-center">
                      <div className="w-16 h-16 !bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Cog
                          className="w-8 h-8 text-white"
                          aria-hidden="true"
                        />
                      </div>
                      <h3
                        className="text-xl font-bold mb-2"
                        id="about-visual-heading"
                      >
                        {t("pages:home.about.visualHeading")}
                      </h3>
                      <p className="text-white/90 text-sm">
                        {t("pages:home.about.visualDescription")}
                      </p>
                    </div>

                    {/* Visual elements representing engineering work */}
                    <div className="mt-6 grid grid-cols-3 gap-3">
                      <div className="h-8 bg-white/20 rounded flex items-center justify-center">
                        <Settings className="w-4 h-4 text-white/80" />
                      </div>
                      <div className="h-8 bg-white/20 rounded flex items-center justify-center">
                        <Wrench className="w-4 h-4 text-white/80" />
                      </div>
                      <div className="h-8 bg-white/20 rounded flex items-center justify-center">
                        <Sun className="w-4 h-4 text-white/80" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection
              animation="fadeInRight"
              delay={0.1}
              duration={0.8}
              className="order-1 lg:order-2"
            >
              <motion.span
                className="text-secondary dark:text-secondary font-semibold text-sm md:text-base"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {t("pages:home.about.label")}
              </motion.span>
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground dark:text-foreground mt-3 sm:mt-4 md:mt-6 mb-4 sm:mb-6 md:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                {t("pages:home.about.title")}
              </motion.h2>
              <motion.p
                className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground dark:text-muted-foreground mb-4 sm:mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
              >
                {t("pages:home.about.description")}
              </motion.p>

              <StaggeredList
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8"
                stagger={0.15}
                delay={0.6}
              >
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.title}
                      className="flex items-start space-x-3 hover:scale-[1.02] transition-all duration-300"
                    >
                      <motion.div
                        className="flex-shrink-0 w-8 h-8 bg-secondary dark:bg-secondary rounded-full flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Icon
                          className="w-4 h-4 text-white dark:text-white"
                          aria-hidden="true"
                        />
                      </motion.div>
                      <div>
                        <h3 className="font-semibold text-foreground dark:text-foreground">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground dark:text-muted-foreground text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </StaggeredList>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <Link href="/about">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground dark:bg-primary dark:hover:bg-primary/90 dark:text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-all duration-200">
                    {t("pages:home.about.button", "Learn More About Us")}
                  </Button>
                </Link>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
