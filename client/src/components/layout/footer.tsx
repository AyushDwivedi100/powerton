import { Link } from "wouter";
import { Phone, Mail, MapPin, Map } from "lucide-react";
import { useTranslation } from "react-i18next";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { Button } from "@/components/ui/button";
import {
  COMPANY_INFO,
  getProducts,
  getCompanyInfo,
  getServices,
} from "@/data/constants";
import { cn } from "@/lib/utils";
import mainLogoPowerton from "@assets/logos/main-logo-powerton.png";

export default function Footer() {
  const { t } = useTranslation(["navigation", "common"]);
  const currentYear = new Date().getFullYear();
  const companyInfo = getCompanyInfo(t);

  return (
    <footer
      className="bg-slate-900 dark:bg-slate-950 border-t border-slate-700 dark:border-slate-800 text-slate-100 py-12"
      role="contentinfo"
      aria-label={t("common:ui.ariaLabels.footerInfo")}
      itemScope
      itemType="https://schema.org/Organization"
    >
      {/* Content */}
      <div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div itemScope itemType="https://schema.org/Organization">
              <div className="mb-4">
                <Link
                  href="/"
                  aria-label={t("common:ui.ariaLabels.goToHomepage")}
                >
                  <div className="relative w-[280px] sm:w-[300px] md:w-[220px] lg:w-[240px] h-16 sm:h-18 md:h-14 overflow-hidden cursor-pointer">
                    <img
                      src={mainLogoPowerton}
                      alt={t("common:ui.altTexts.companyLogo")}
                      className="absolute inset-0 w-full h-full object-contain object-inline-start"
                      loading="eager"
                      width="240"
                      height="60"
                      itemProp="logo"
                    />
                  </div>
                </Link>
              </div>
              <p
                className="text-slate-300 dark:text-slate-400 mb-6 text-wrap-safe responsive-text"
                itemProp="description"
              >
                {t("navigation:footer.companyDescription")}
              </p>
              <meta itemProp="name" content="Powerton Engineering Pvt. Ltd." />
              <meta itemProp="url" content="https://powertonengineering.in" />
              <div className="flex gap-4 flex-safe">
                <a
                  href={COMPANY_INFO.socialMedia.linkedin}
                  className="text-slate-400 hover:text-orange-400 transition-colors"
                  aria-label={t("common:ui.ariaLabels.followLinkedIn")}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href={COMPANY_INFO.socialMedia.twitter}
                  className="text-slate-400 hover:text-orange-400 transition-colors"
                  aria-label={t("common:ui.ariaLabels.followTwitter")}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href={COMPANY_INFO.socialMedia.facebook}
                  className="text-slate-400 hover:text-orange-400 transition-colors"
                  aria-label={t("common:ui.ariaLabels.followFacebook")}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href={COMPANY_INFO.socialMedia.youtube}
                  className="text-slate-400 hover:text-orange-400 transition-colors"
                  aria-label={t("common:ui.ariaLabels.followYouTube")}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Services */}
            <nav aria-label={t("common:ui.ariaLabels.servicesNav")}>
              <Link href="/services">
                <h4 className="text-lg font-semibold mb-4 text-slate-100 hover:text-primary transition-colors cursor-pointer">
                  {t("navigation:footer.services")}
                </h4>
              </Link>
              <ul className="space-y-3 text-slate-300 dark:text-slate-400">
                {getServices(t).map((service) => (
                  <li key={service.id}>
                    <Link
                      href={`/services-category/${service.id}`}
                      className="hover:text-orange-400 transition-colors text-wrap-safe"
                    >
                      {t(`services:items.${service.id}`, service.title)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Products */}
            <nav aria-label={t("common:ui.ariaLabels.productsNav")}>
              <Link href="/products">
                <h4 className="text-lg font-semibold mb-4 text-slate-100 hover:text-primary transition-colors cursor-pointer">
                  {t("navigation:footer.products")}
                </h4>
              </Link>
              <ul className="space-y-3 text-slate-300 dark:text-slate-400">
                {getProducts(t).map((product) => (
                  <li key={product.id}>
                    <Link
                      href={`/products/${product.id}`}
                      className="hover:text-orange-400 transition-colors text-wrap-safe"
                    >
                      {String(
                        t(
                          `products:categories.${product.id}.title`,
                          product.title,
                        ),
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact Info */}
            <address
              itemScope
              itemType="https://schema.org/PostalAddress"
              className="not-italic"
            >
              <Link href="/contact">
                <h4 className="text-lg font-semibold mb-4 text-slate-100 hover:text-primary transition-colors cursor-pointer">
                  {t("navigation:menu.contact")}
                </h4>
              </Link>
              <ul
                className="space-y-3 text-slate-300 dark:text-slate-400"
                role="list"
              >
                <li className="space-y-2" role="listitem">
                  <div className="flex items-center">
                    <Phone
                      className="w-5 h-5 text-orange-400 flex-shrink-0 me-3 rtl-flip"
                      aria-hidden="true"
                    />
                    <span className=" font-medium text-wrap-safe responsive-text">
                      {t("common:headings.phoneNumbers")}
                    </span>
                  </div>
                  <div className="space-y-1 ms-8">
                    <div>
                      <a
                        href={`tel:${COMPANY_INFO.phoneNumbers.primary}`}
                        className="hover:text-orange-400 transition-colors block text-wrap-safe"
                        itemProp="telephone"
                        aria-label={t("common:ui.ariaLabels.callPrimary")}
                      >
                        {COMPANY_INFO.phoneNumbers.primary}
                      </a>
                    </div>
                    <div>
                      <a
                        href={`tel:${COMPANY_INFO.phoneNumbers.secondary}`}
                        className="hover:text-orange-400 transition-colors block text-wrap-safe"
                        itemProp="telephone"
                        aria-label={t("common:ui.ariaLabels.callSecondary")}
                      >
                        {COMPANY_INFO.phoneNumbers.secondary}
                      </a>
                    </div>
                  </div>
                </li>
                <li className="flex items-center" role="listitem">
                  <Mail
                    className="w-5 h-5 text-orange-400 flex-shrink-0 me-3 rtl-flip"
                    aria-hidden="true"
                  />
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="hover:text-orange-400 transition-colors text-wrap-safe"
                    itemProp="email"
                    aria-label={t("common:ui.ariaLabels.emailPowerton")}
                  >
                    {companyInfo.email}
                  </a>
                </li>
                <li className="flex items-start" role="listitem">
                  <MapPin
                    className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0 me-3 rtl-flip"
                    aria-hidden="true"
                  />
                  <a
                    href="https://maps.app.goo.gl/jiap3sBYbM3r8Pn68"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orange-400 transition-colors cursor-pointer text-wrap-safe"
                    aria-label={t("common:ui.ariaLabels.viewOfficeLocation")}
                  >
                    <span itemProp="streetAddress">
                      {companyInfo.address.street}
                    </span>
                    <br />
                    <span itemProp="addressLocality">
                      {companyInfo.address.city}
                    </span>
                    ,{" "}
                    <span itemProp="addressRegion">
                      {companyInfo.address.state}
                    </span>{" "}
                    <span itemProp="postalCode">
                      {companyInfo.address.pincode}
                    </span>
                    <meta itemProp="addressCountry" content="IN" />
                  </a>
                </li>
              </ul>
            </address>
          </div>

          <div className="border-t border-slate-700 dark:border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center">
              <p className="text-slate-400 text-sm mb-4 md:mb-0">
                {t(
                  "navigation:footer.copyright",
                  `© ${currentYear} Powerton Engineering Pvt. Ltd. All rights reserved.`,
                  { year: currentYear },
                )}
              </p>
              <div className="flex items-center gap-4 text-sm text-slate-400 flex-safe">
                <LanguageSwitcher />
                <ThemeToggle />
                <Link href="/sitemap" data-testid="link-sitemap">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-9 w-auto px-3 min-w-0"
                    data-testid="button-sitemap"
                  >
                    <Map className="h-4 w-4 me-1" />
                    <span className="text-sm font-medium">
                      {t("navigation:footer.sitemap", "Sitemap")}
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
