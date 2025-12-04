import { motion } from "framer-motion";
import { SEO } from "@/lib/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ContactForm from "@/components/forms/contact-form";
import {
  useScrollAnimations,
  getAnimationClass,
} from "@/hooks/use-scroll-animation";
import { useTheme } from "@/hooks/use-theme";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import contactHeroImage from "@assets/generated_images/Contact_Center_Industrial_Office_456e0bfc.png";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  User,
  Building,
  Headphones,
  Globe,
  CheckCircle,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/constants";
import { Helmet } from "react-helmet-async";
import { generateBreadcrumbData } from "@/utils/seo-enhancements";
import { useLazyNamespace } from "@/lib/lazy-i18n";

export default function Contact() {
  useScrollAnimations();
  const { theme } = useTheme();
  useLazyNamespace(["pages", "forms"]);
  const { t } = useTranslation(["pages", "common"]);
  const [mapKey, setMapKey] = useState(0);

  // Force map reload when theme changes
  useEffect(() => {
    setMapKey((prev) => prev + 1);
  }, [theme]);

  // Map URLs for different themes
  const getMapUrl = () => {
    const baseUrl =
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.888135884717!2d77.32128569999999!3d28.593032799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a4f6733aa1%3A0xb30528d5ec04212e!2sPowerton%20Engineering%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1755780257863!5m2!1sen!2sin";

    if (theme === "dark") {
      return `${baseUrl}&style=feature:all|element:geometry|color:0x1e1e1e&style=feature:all|element:labels.text.fill|color:0x9e9e9e&style=feature:all|element:labels.text.stroke|color:0x1e1e1e&style=feature:administrative|element:geometry|color:0x444444&style=feature:landscape|element:geometry|color:0x2b2b2b&style=feature:poi|element:geometry|color:0x2b2b2b&style=feature:poi|element:labels.text.fill|color:0x9e9e9e&style=feature:road|element:geometry|color:0x444444&style=feature:road|element:labels.text.fill|color:0x9e9e9e&style=feature:road.highway|element:geometry|color:0x555555&style=feature:transit|element:geometry|color:0x2b2b2b&style=feature:water|element:geometry|color:0x0f1419&style=feature:water|element:labels.text.fill|color:0x9e9e9e`;
    }

    return baseUrl;
  };

  const contactMethods = [
    {
      icon: Phone,
      title: t("pages:contact.contactMethods.phone.title"),
      subtitle: t("pages:contact.contactMethods.phone.subtitle"),
      content: {
        marketing: COMPANY_INFO.phoneNumbers.marketing,
        primary: COMPANY_INFO.phoneNumbers.primary,
        secondary: COMPANY_INFO.phoneNumbers.secondary,
      },
      action: `tel:${COMPANY_INFO.phoneNumbers.marketing}`,
      description: t("pages:contact.contactMethods.phone.description"),
    },
    {
      icon: Mail,
      title: t("pages:contact.contactMethods.email.title"),
      subtitle: t("pages:contact.contactMethods.email.subtitle"),
      content: COMPANY_INFO.email,
      action: `mailto:${COMPANY_INFO.email}`,
      description: t("pages:contact.contactMethods.email.description"),
    },
    {
      icon: MessageCircle,
      title: t("pages:contact.contactMethods.whatsapp.title"),
      subtitle: t("pages:contact.contactMethods.whatsapp.subtitle"),
      content: {
        marketing: COMPANY_INFO.phoneNumbers.marketing,
        primary: COMPANY_INFO.phoneNumbers.primary,
        secondary: COMPANY_INFO.phoneNumbers.secondary,
      },
      action: `https://wa.me/${COMPANY_INFO.phoneNumbers.marketing.replace(/[^0-9]/g, "")}`,
      description: t("pages:contact.contactMethods.whatsapp.description"),
    },
    {
      icon: MapPin,
      title: t("pages:contact.contactMethods.visit.title"),
      subtitle: t("pages:contact.contactMethods.visit.subtitle"),
      content: `${COMPANY_INFO.address.city}, ${COMPANY_INFO.address.state}`,
      action: "https://maps.app.goo.gl/jiap3sBYbM3r8Pn68",
      description: t("pages:contact.contactMethods.visit.description"),
    },
  ];

  const officeLocations = [
    {
      name: t("pages:contact.office.name"),
      address: COMPANY_INFO.address.street,
      city: `${COMPANY_INFO.address.city}, ${COMPANY_INFO.address.state} ${COMPANY_INFO.address.pincode}`,
      landmark: COMPANY_INFO.address.landmark,
      phoneNumbers: {
        marketing: COMPANY_INFO.phoneNumbers.marketing,
        primary: COMPANY_INFO.phoneNumbers.primary,
        secondary: COMPANY_INFO.phoneNumbers.secondary,
      },
      email: COMPANY_INFO.email,
      hours: t("pages:contact.office.hours"),
    },
  ];

  const supportServices = [
    {
      icon: Headphones,
      title: t("pages:contact.services.technical.title"),
      description: t("pages:contact.services.technical.description"),
    },
    {
      icon: User,
      title: t("pages:contact.services.customer.title"),
      description: t("pages:contact.services.customer.description"),
    },
    {
      icon: Building,
      title: t("pages:contact.services.onsite.title"),
      description: t("pages:contact.services.onsite.description"),
    },
    {
      icon: Globe,
      title: t("pages:contact.services.remote.title"),
      description: t("pages:contact.services.remote.description"),
    },
  ];

  // Generate breadcrumb schema
  const breadcrumbItems = [
    { name: t("common:sitemap.pages.home"), url: "/" },
    { name: t("common:sitemap.pages.contact"), url: "/contact" },
  ];
  const breadcrumbSchema = generateBreadcrumbData(breadcrumbItems);

  return (
    <>
      <SEO
        title={t("pages:contact.seo.title")}
        description={t("pages:contact.seo.description")}
        keywords={t("pages:contact.seo.keywords")}
        canonicalUrl="https://powertonengineering.in/contact"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section
        className={`relative hero-fullscreen overflow-hidden ${getAnimationClass(
          "fade-in-up",
          true,
        )}`}
      >
        <div className="absolute inset-0">
          <img
            src={contactHeroImage}
            alt={t("common:altTexts.contactBackground")}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-blue-600/60 dark:bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-wrap-safe responsive-text">
              {t("pages:contact.hero.title")}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto text-wrap-safe">
              {t("pages:contact.hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-base md:text-lg">
              <div className="flex items-center justify-center sm:justify-start">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-secondary me-2 md:me-3 flex-shrink-0 rtl-flip" />
                <span className="text-wrap-safe">
                  {t("pages:contact.hero.benefits.consultation")}
                </span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-secondary me-2 md:me-3 flex-shrink-0 rtl-flip" />
                <span className="text-wrap-safe">
                  {t("pages:contact.hero.benefits.support")}
                </span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-secondary me-2 md:me-3 flex-shrink-0 rtl-flip" />
                <span className="text-wrap-safe">
                  {t("pages:contact.hero.benefits.experience")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 md:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              {t("pages:contact.methods.title")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("pages:contact.methods.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={method.title}
                  whileHover={{ y: -10, scale: 1.03 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Card className="text-center border-none shadow-lg cursor-pointer group">
                    <CardContent className="p-6 overflow-hidden">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {method.title}
                      </h3>
                      <p className="text-sm text-secondary font-medium mb-3">
                        {method.subtitle}
                      </p>
                      {typeof method.content === "object" &&
                      "marketing" in method.content ? (
                        <div className="space-y-2 mb-3">
                          <a
                            href={
                              method.icon === MessageCircle
                                ? `https://wa.me/${method.content.marketing.replace(
                                    /[^0-9]/g,
                                    "",
                                  )}?text=${encodeURIComponent(
                                    t("pages:contact.whatsapp.defaultMessage"),
                                  )}`
                                : `tel:${method.content.marketing}`
                            }
                            target={
                              method.icon === MessageCircle
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              method.icon === MessageCircle
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="text-base font-semibold text-primary hover:text-secondary transition-colors break-words flex items-center justify-center"
                            data-testid="link-methods-phone-marketing"
                          >
                            <Phone className="w-4 h-4 mr-2" />
                            {method.content.marketing}
                            <span className="text-xs text-muted-foreground ms-1">
                              ({t("common:company.marketingTeam")})
                            </span>
                          </a>
                          <a
                            href={
                              method.icon === MessageCircle
                                ? `https://wa.me/${method.content.primary.replace(
                                    /[^0-9]/g,
                                    "",
                                  )}?text=${encodeURIComponent(
                                    t("pages:contact.whatsapp.defaultMessage"),
                                  )}`
                                : `tel:${method.content.primary}`
                            }
                            target={
                              method.icon === MessageCircle
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              method.icon === MessageCircle
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="text-base font-semibold text-primary hover:text-secondary transition-colors break-words flex items-center justify-center"
                          >
                            <Phone className="w-4 h-4 mr-2" />
                            {method.content.primary}
                          </a>
                          <a
                            href={
                              method.icon === MessageCircle
                                ? `https://wa.me/${method.content.secondary.replace(
                                    /[^0-9]/g,
                                    "",
                                  )}?text=${encodeURIComponent(
                                    t("pages:contact.whatsapp.defaultMessage"),
                                  )}`
                                : `tel:${method.content.secondary}`
                            }
                            target={
                              method.icon === MessageCircle
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              method.icon === MessageCircle
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="text-base font-semibold text-primary hover:text-secondary transition-colors break-words flex items-center justify-center"
                          >
                            <Phone className="w-4 h-4 mr-2" />
                            {method.content.secondary}
                          </a>
                        </div>
                      ) : (
                        <a
                          href={method.action}
                          className="text-lg font-semibold text-primary hover:text-secondary transition-colors block mb-3 break-words overflow-hidden"
                          style={{ wordBreak: "break-all" }}
                        >
                          {String(method.content)}
                        </a>
                      )}
                      <p className="text-sm text-muted-foreground">
                        {method.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Forms */}
      <section className="py-12 md:py-16 lg:py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              {t("pages:contact.form.title")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("pages:contact.form.subtitle")}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  {t("pages:contact.formSection.title")}
                </CardTitle>
                <p className="text-muted-foreground text-center">
                  {t("pages:contact.formSection.description")}
                </p>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Office Details and Map Section - Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 mb-12 md:mb-16 lg:mb-20">
            {/* Visit Our Office Section */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-6 sm:mb-8">
                {t("pages:contact.sections.visitOffice")}
              </h2>

              {officeLocations.map((location) => (
                <Card
                  key={location.name}
                  className="mb-6 border-none shadow-lg"
                >
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">
                      {location.name}
                    </h3>

                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-start">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                        <div className="min-w-0 flex-1">
                          <p className="text-sm sm:text-base text-muted-foreground break-words">
                            {location.address}
                          </p>
                          <p className="text-sm sm:text-base text-muted-foreground break-words">
                            {location.city}
                          </p>
                          <p className="text-xs sm:text-sm text-muted-foreground break-words">
                            {location.landmark}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2 sm:mr-3 flex-shrink-0" />
                          <span className="text-sm sm:text-base font-medium text-muted-foreground">
                            {t("common:headings.phoneNumbers")}
                          </span>
                        </div>
                        <div className="ml-6 sm:ml-8 space-y-1">
                          <a
                            href={`tel:${location.phoneNumbers.marketing}`}
                            className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors block"
                            data-testid="link-office-phone-marketing"
                          >
                            {location.phoneNumbers.marketing}
                            <span className="text-xs text-muted-foreground ms-1">
                              ({t("common:company.marketingTeam")})
                            </span>
                          </a>
                          <a
                            href={`tel:${location.phoneNumbers.primary}`}
                            className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors block"
                          >
                            {location.phoneNumbers.primary}
                          </a>
                          <a
                            href={`tel:${location.phoneNumbers.secondary}`}
                            className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors block"
                          >
                            {location.phoneNumbers.secondary}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2 sm:mr-3 flex-shrink-0" />
                        <a
                          href={`mailto:${location.email}`}
                          className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors break-all"
                        >
                          {location.email}
                        </a>
                      </div>

                      <div className="flex items-center">
                        <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2 sm:mr-3 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-muted-foreground">
                          {location.hours}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-border">
                      <a
                        href="https://maps.app.goo.gl/jiap3sBYbM3r8Pn68"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm sm:text-base text-secondary hover:text-secondary/80 font-medium transition-colors"
                      >
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        {t("pages:contact.sections.getDirections")}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Office Location Map Section */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-6 sm:mb-8">
                {t("pages:contact.sections.officeLocation")}
              </h2>

              {/* Google Maps Embed */}
              <Card className="border-none shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative w-full h-72 sm:h-80 md:h-[352px] lg:h-[370px] xl:h-[395px]">
                    <iframe
                      key={mapKey}
                      src={getMapUrl()}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full transition-all duration-300"
                      title={t("pages:contact.map.title")}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Support Services Section - Full Width Below */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-6 sm:mb-8 text-center">
              {t("pages:contact.sections.supportServices")}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {supportServices.map((service) => {
                const Icon = service.icon;
                return (
                  <Card key={service.title} className="border-none shadow-lg">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-col items-center text-center mb-3 sm:mb-4">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                          <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-foreground leading-tight mb-2">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-sm sm:text-base text-muted-foreground text-center">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Emergency Support */}
            <Card className="mt-8 sm:mt-12 bg-gradient-to-br from-primary to-blue-800 text-white border-none">
              <CardContent className="p-6 sm:p-8 text-center">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                  {t("pages:contact.emergency.title")}
                </h3>
                <p className="mb-4 sm:mb-6 opacity-90 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
                  {t("pages:contact.emergency.description")}
                </p>
                <a
                  href={`tel:${COMPANY_INFO.phoneNumbers.primary}`}
                  className="inline-flex items-center bg-secondary hover:bg-secondary/90 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                  {t("pages:contact.emergency.hotline")}
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-12 md:py-16 lg:py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
              {t("pages:contact.sections.businessHours")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-none shadow-lg">
              <CardContent className="p-8">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {t("pages:contact.businessHours.regular.title")}
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>{t("pages:contact.businessHours.regular.days")}</p>
                  <p className="font-semibold">
                    {t("pages:contact.businessHours.regular.time")}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardContent className="p-8">
                <Phone className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {t("pages:contact.businessHours.emergency.title")}
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    {t("pages:contact.businessHours.emergency.availability")}
                  </p>
                  <p className="font-semibold">
                    {t("pages:contact.businessHours.emergency.days")}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardContent className="p-8">
                <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {t("pages:contact.businessHours.email.title")}
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>{t("pages:contact.businessHours.email.time")}</p>
                  <p className="font-semibold">
                    {t("pages:contact.businessHours.email.guarantee")}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
