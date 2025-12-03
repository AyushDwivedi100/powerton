import { motion } from "framer-motion";
import { SEO } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getServices } from "@/data/constants";
import {
  getServiceBySlug,
  SERVICES_CATEGORY_PAGES,
} from "@/data/services-category-pages";
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
} from "lucide-react";
import { Link, useParams } from "wouter";
import { getServiceHeroImage } from "@/assets/images";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { generateBreadcrumbData } from "@/utils/seo-enhancements";

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

export default function ServiceCategoryPage() {
  useScrollAnimations();
  const { t } = useTranslation(["pages", "common", "services"]);
  const params = useParams();
  const slug = params.slug as string;

  // Get service data from our new data file
  const serviceData = getServiceBySlug(slug);

  // Also get the basic service info from constants for backward compatibility
  const services = getServices(t);
  const service = services.find((s) => s.id === slug);

  // Handle 404 case
  if (!serviceData || !service) {
    return (
      <>
        <SEO
          title={t("common:errors.serviceNotFoundTitle")}
          description={t("common:errors.serviceNotFoundDescription")}
        />
        <div
          className="min-h-screen bg-background flex items-center justify-center"
          role="main"
          id="main-content"
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {t("common:errors.serviceNotFound")}
            </h1>
            <p className="text-muted-foreground mb-8">
              {t("common:errors.serviceNotFoundMessage")}
            </p>
            <Link href="/services">
              <Button>
                {t("common:buttons.viewAllServices")}{" "}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </>
    );
  }

  const IconComponent =
    iconMap[serviceData.icon as keyof typeof iconMap] || Settings;

  // Generate breadcrumb schema for services
  const breadcrumbItems = [
    { name: t("common:sitemap.pages.home"), url: "/" },
    { name: t("common:sitemap.pages.ourServices"), url: "/services" },
    { name: serviceData.title, url: `/services-category/${slug}` },
  ];

  // Generate Service schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceData.title,
    description: serviceData.description,
    provider: {
      "@type": "Organization",
      name: "Powerton Engineering Pvt. Ltd.",
      url: "https://powertonengineering.in",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    serviceType: serviceData.title,
    url: `https://powertonengineering.in/services-category/${slug}`,
  };

  const breadcrumbSchema = generateBreadcrumbData(breadcrumbItems);

  return (
    <>
      <SEO
        title={t("common:seo.servicePageTitle", { service: serviceData.title })}
        description={t("common:seo.servicePageDescription", {
          service: serviceData.title,
          description: serviceData.description,
        })}
        keywords={t("common:seo.servicePageKeywords", {
          service: serviceData.title,
        })}
        canonicalUrl={`https://powertonengineering.in/services-category/${slug}`}
        structuredData={serviceSchema}
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background" role="main" id="main-content">
        {/* Hero Section */}
        <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${
                getServiceHeroImage(serviceData.id as any)?.src
              })`,
            }}
          ></div>
          <div className="absolute inset-0 bg-blue-600/60 dark:bg-black/60"></div>

          <div className="relative z-10">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center text-white">
              <AnimatedSection animation="fadeInUp" delay={0.1} duration={0.8}>
                <div className="w-20 h-20 bg-background/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-10 h-10" />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-wrap-safe responsive-text">
                  {t(serviceData.title)}
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto text-wrap-safe">
                  {t(serviceData.description)}
                </p>
                <Link href="/quote">
                  <Button
                    size="lg"
                    className="bg-secondary group hover:bg-secondary/90 text-white"
                    data-testid="button-get-quote"
                  >
                    {t("common:buttons.getQuote")}{" "}
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
                  <Card className="mb-8" data-testid="card-service-overview">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <IconComponent className="w-6 h-6 text-primary" />
                        {t("common:headings.servicesOverview")}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p
                        className="text-muted-foreground leading-relaxed"
                        data-testid="text-overview"
                      >
                        {t(serviceData.details.overview)}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection animation="fadeInUp" delay={0.3}>
                  <Card className="mb-8" data-testid="card-key-benefits">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <CheckCircle className="w-6 h-6 text-primary" />
                        {t("common:headings.keyBenefits")}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {serviceData.details.benefits.map((benefit, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3"
                            data-testid={`benefit-item-${index}`}
                          >
                            <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">
                              {t(benefit)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection animation="fadeInUp" delay={0.4}>
                  <Card data-testid="card-technologies">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Settings className="w-6 h-6 text-primary" />
                        {t("common:headings.technologiesAndMethods")}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {serviceData.details.technologies.map((tech, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="p-2 justify-start"
                            data-testid={`tech-badge-${index}`}
                          >
                            {t(tech)}
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
                  <Card className="mb-8" data-testid="card-quick-facts">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Clock className="w-6 h-6 text-primary" />
                        {t("common:headings.quickFacts")}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">
                          {t("common:labels.responseTime")}
                        </h4>
                        <p className="text-muted-foreground">
                          {t("common:messages.responseTime")}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">
                          {t("common:labels.availability")}
                        </h4>
                        <p className="text-muted-foreground">
                          {t("common:messages.availability")}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection animation="fadeInLeft" delay={0.6}>
                  <Card
                    className="mb-8"
                    data-testid="card-industry-applications"
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Award className="w-6 h-6 text-primary" />
                        {t("common:headings.industryApplications")}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {serviceData.details.industries.map(
                          (industry, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2"
                              data-testid={`industry-item-${index}`}
                            >
                              <div className="w-2 h-2 bg-secondary rounded-full"></div>
                              <span className="text-muted-foreground">
                                {t(industry)}
                              </span>
                            </div>
                          ),
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection animation="fadeInLeft" delay={0.7}>
                  <Card data-testid="card-ready-to-start">
                    <CardContent className="p-6 text-center">
                      <h3 className="font-semibold text-foreground mb-3">
                        {t("common:messages.readyToStart")}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {t("common:messages.requestConsultation")}
                      </p>
                      <div className="flex flex-col gap-3">
                        <Link href="/quote">
                          <Button
                            className="w-full"
                            data-testid="button-sidebar-get-quote"
                          >
                            {t("common:buttons.getQuote")}
                          </Button>
                        </Link>
                        <Link href="/contact">
                          <Button
                            variant="outline"
                            className="w-full"
                            data-testid="button-contact-us"
                          >
                            {t("common:buttons.contactUs")}
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
                  {t("common:headings.relatedServices")}
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Explore our other professional services that complement{" "}
                  {t(serviceData.title)}
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(() => {
                // Get current service index
                const currentIndex = SERVICES_CATEGORY_PAGES.findIndex(
                  (s) => s.id === serviceData.id,
                );
                const totalServices = SERVICES_CATEGORY_PAGES.length;

                // Use circular logic to get next 3 services, ensuring all services are reachable
                const relatedServices = [];
                for (let i = 1; i <= 3; i++) {
                  const nextIndex = (currentIndex + i) % totalServices;
                  relatedServices.push(SERVICES_CATEGORY_PAGES[nextIndex]);
                }

                return relatedServices.map((relatedService, index) => {
                  const RelatedIcon =
                    iconMap[relatedService.icon as keyof typeof iconMap] ||
                    Settings;
                  return (
                    <AnimatedSection
                      key={relatedService.id}
                      animation="fadeInUp"
                      delay={0.3 + index * 0.1}
                      className={index === 2 ? "hidden lg:block" : ""}
                    >
                      <Link href={`/services-category/${relatedService.id}`}>
                        <motion.div
                          key={service.id}
                          whileHover={{ y: -10, scale: 1.03 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="h-full"
                        >
                          <Card
                            className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer group"
                            data-testid={`card-related-service-${relatedService.id}`}
                          >
                            <CardContent className="p-6">
                              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                <RelatedIcon className="w-6 h-6 text-primary" />
                              </div>
                              <h3 className="font-semibold text-foreground mb-2">
                                {t(relatedService.title)}
                              </h3>
                              <p className="text-muted-foreground text-sm mb-4">
                                {t(relatedService.description).slice(0, 100)}...
                              </p>
                              <Button
                                variant="ghost"
                                className="text-secondary hover:bg-transparent hover:text-secondary p-0 font-semibold transition-all duration-300 w-full justify-center"
                              >
                                {t("common:buttons.learnMore")}
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
                            </CardContent>
                          </Card>
                        </motion.div>
                      </Link>
                    </AnimatedSection>
                  );
                });
              })()}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
