import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getServices } from "@/data/constants";
import {
  Wrench,
  Gauge,
  Settings,
  Users,
  Shield,
  Truck,
  Sun,
  Hammer,
  ArrowRight,
} from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { AnimatedSection, StaggeredList } from "@/hooks/use-scroll-animation";
import { useTranslation } from "react-i18next";

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

export default function ServicesSection() {
  const { t } = useTranslation(["pages", "services", "common"]);
  return (
    <section
      id="services"
      className="relative py-12 md:py-16 lg:py-20 overflow-hidden bg-slate-50 dark:bg-slate-900/50"
      role="main"
      aria-labelledby="services-heading"
      aria-describedby="services-description"
    >
      {/* Contrasting background - different from About section */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100/80 to-blue-50/60 dark:from-slate-800/60 dark:to-slate-900/80"></div>

      {/* Different geometric pattern to distinguish from About section */}
      <div
        className="absolute inset-0 opacity-20 dark:opacity-10"
        style={{
          backgroundImage: `
          linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px),
          linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px)
        `,
          backgroundSize: "60px 60px",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp" delay={0.1} duration={0.8}>
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <motion.span
                className="text-secondary font-semibold text-sm sm:text-base md:text-lg"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {t("pages:home.services.label")}
              </motion.span>
              <motion.h2
                id="services-heading"
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2 sm:mt-4 mb-3 sm:mb-4 md:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                {t("pages:home.services.title")}
              </motion.h2>
              <motion.p
                id="services-description"
                className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-2 sm:px-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                {t("pages:home.services.description")}
              </motion.p>
            </div>
          </AnimatedSection>

          <StaggeredList
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
            stagger={0.15}
            delay={0.3}
          >
            {getServices(t).map((service, index) => {
              const IconComponent =
                iconMap[service.icon as keyof typeof iconMap] || Settings;

              return (
                <Link
                  href={`/services-category/${service.id}`}
                  key={service.id}
                >
                  <motion.div
                    key={service.id}
                    whileHover={{ y: -10, scale: 1.03 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="h-full"
                  >
                    <Card className="border border-border group h-full flex flex-col cursor-pointer">
                      <CardContent className="p-3 sm:p-4 md:p-6 lg:p-8 flex-1 flex flex-col">
                        <motion.div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                          <IconComponent
                            className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white"
                            aria-hidden="true"
                          />
                        </motion.div>

                        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">
                          {service.title}
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                          {service.description}
                        </p>

                        <motion.ul
                          className="space-y-2 mb-6"
                          initial="hidden"
                          whileInView="visible"
                          variants={{
                            visible: {
                              transition: {
                                staggerChildren: 0.1,
                              },
                            },
                          }}
                        >
                          {service.features.map((feature, featureIndex) => (
                            <motion.li
                              key={feature}
                              className="text-sm text-muted-foreground flex items-center group-hover:text-foreground transition-colors"
                              variants={{
                                hidden: { opacity: 0, x: -20 },
                                visible: { opacity: 1, x: 0 },
                              }}
                            >
                              <motion.div
                                className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"
                                whileHover={{ scale: 1.5 }}
                                transition={{ duration: 0.2 }}
                              />
                              {feature}
                            </motion.li>
                          ))}
                        </motion.ul>

                        <div className="mt-auto">
                          <Button
                            variant="ghost"
                            className="text-secondary hover:text-secondary hover:bg-transparent p-0 font-semibold transition-all duration-300"
                          >
                            {t("common:buttons.learnMore")}{" "}
                            <span className="ms-2 inline-block transition-transform duration-300 group-hover:translate-x-2 rtl:group-hover:-translate-x-2">
                              <span className="ltr:inline rtl:hidden">
                                <ArrowRight
                                  className="ms-2 w-4 h-4 sm:w-5 sm:h-5 rtl-flip"
                                  aria-hidden="true"
                                />
                              </span>
                              <span className="ltr:hidden rtl:inline">
                                <ArrowRight
                                  className="ms-2 w-4 h-4 sm:w-5 sm:h-5 rtl-flip"
                                  aria-hidden="true"
                                />
                              </span>
                            </span>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              );
            })}
          </StaggeredList>

          <AnimatedSection animation="fadeInUp" delay={0.5} duration={0.6}>
            <div className="text-center mt-12">
              <Link href="/services">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  {t("common:buttons.viewAll")} {t("navigation:services")}
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
