import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { COMPANY_INFO, SERVICES, PRODUCTS, getCompanyInfo } from "@/data/constants";
import logoImage from "@assets/mainlogopowerton (1)_1755674514195.png";

export default function Footer() {
  const { t } = useTranslation(['navigation', 'common']);
  const currentYear = new Date().getFullYear();
  const companyInfo = getCompanyInfo(t);

  return (
    <footer 
      className="bg-slate-900 dark:bg-slate-950 border-t border-slate-700 dark:border-slate-800 text-slate-100 py-12" 
      role="contentinfo"
      aria-label="Company information and site navigation"
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
              <Link href="/" aria-label="Go to Powerton Engineering homepage">
                <div className="relative w-[280px] sm:w-[300px] md:w-[220px] lg:w-[240px] h-16 sm:h-18 md:h-14 overflow-hidden cursor-pointer">
                  <img 
                    src={logoImage} 
                    alt="Powerton Engineering Pvt. Ltd. - Industrial Automation & Electrical Engineering Company Logo" 
                    className="absolute inset-0 w-full h-full object-contain object-left -ml-2 sm:-ml-3 md:-ml-1"
                    loading="eager"
                    width="240"
                    height="60"
                    itemProp="logo"
                  />
                </div>
              </Link>
            </div>
            <p className="text-slate-300 dark:text-slate-400 mb-6" itemProp="description">
              {t('navigation:footer.companyDescription', 'Your trusted partner in delivering high-quality engineering solutions and services for industrial automation and electrical systems.')}
            </p>
            <meta itemProp="name" content="Powerton Engineering Pvt. Ltd." />
            <meta itemProp="url" content="https://powertonengineering.in" />
            <div className="flex space-x-4">
              <a 
                href={COMPANY_INFO.socialMedia.linkedin} 
                className="text-slate-400 hover:text-orange-400 transition-colors" 
                aria-label="Follow Powerton Engineering on LinkedIn"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href={COMPANY_INFO.socialMedia.twitter} 
                className="text-slate-400 hover:text-orange-400 transition-colors" 
                aria-label="Follow Powerton Engineering on X (formerly Twitter)"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a 
                href={COMPANY_INFO.socialMedia.facebook} 
                className="text-slate-400 hover:text-orange-400 transition-colors" 
                aria-label="Follow Powerton Engineering on Facebook"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <nav aria-label="Services navigation">
            <Link href="/services">
              <h4 className="text-lg font-semibold mb-4 text-slate-100 hover:text-primary transition-colors cursor-pointer">
                {t('navigation:footer.services', 'Services')}
              </h4>
            </Link>
            <ul className="space-y-3 text-slate-300 dark:text-slate-400">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link 
                    href={`/services/${service.id}`} 
                    className="hover:text-orange-400 transition-colors"
                  >
                    {t(`services:items.${service.id}`, service.title)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Products */}
          <nav aria-label="Products navigation">
            <Link href="/products">
              <h4 className="text-lg font-semibold mb-4 text-slate-100 hover:text-primary transition-colors cursor-pointer">
                {t('navigation:footer.products', 'Products')}
              </h4>
            </Link>
            <ul className="space-y-3 text-slate-300 dark:text-slate-400">
              {PRODUCTS.map((product) => (
                <li key={product.id}>
                  <Link 
                    href={`/products/${product.id}`} 
                    className="hover:text-orange-400 transition-colors"
                  >
                    {t(`products:items.${product.id}`, product.title)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <address itemScope itemType="https://schema.org/PostalAddress" className="not-italic">
            <Link href="/contact">
              <h4 className="text-lg font-semibold mb-4 text-slate-100 hover:text-primary transition-colors cursor-pointer">
                {t('navigation:menu.contact', 'Contact')}
              </h4>
            </Link>
            <ul className="space-y-3 text-slate-300 dark:text-slate-400" role="list">
              <li className="flex items-center" role="listitem">
                <Phone className="w-5 h-5 mr-3 text-orange-400 flex-shrink-0" aria-hidden="true" />
                <a href={`tel:${companyInfo.phone}`} className="hover:text-orange-400 transition-colors" itemProp="telephone" aria-label="Call Powerton Engineering">
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center" role="listitem">
                <Mail className="w-5 h-5 mr-3 text-orange-400 flex-shrink-0" aria-hidden="true" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-orange-400 transition-colors" itemProp="email" aria-label="Email Powerton Engineering">
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start" role="listitem">
                <MapPin className="w-5 h-5 mr-3 text-orange-400 mt-1 flex-shrink-0" aria-hidden="true" />
                <a
                  href="https://maps.app.goo.gl/jiap3sBYbM3r8Pn68"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition-colors cursor-pointer"
                  aria-label="View Powerton Engineering office location on Google Maps"
                >
                  <span itemProp="streetAddress">{companyInfo.address.street}</span><br />
                  <span itemProp="addressLocality">{companyInfo.address.city}</span>, <span itemProp="addressRegion">{companyInfo.address.state}</span> <span itemProp="postalCode">{companyInfo.address.pincode}</span>
                  <meta itemProp="addressCountry" content="IN" />
                </a>
              </li>
            </ul>
          </address>
        </div>

        <div className="border-t border-slate-700 dark:border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              {t('navigation:footer.copyright', `© ${currentYear} Powerton Engineering Pvt. Ltd. All rights reserved.`, { year: currentYear })}
            </p>
            <div className="flex items-center space-x-4 text-sm text-slate-400">
              <LanguageSwitcher />
              <ThemeToggle />
              <a href="/sitemap" className="hover:text-orange-400 transition-colors">{t('navigation:footer.sitemap', 'Sitemap')}</a>
            </div>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
}
