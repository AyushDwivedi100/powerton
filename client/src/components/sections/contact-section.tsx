import ContactForm from "@/components/forms/contact-form";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { COMPANY_INFO } from "@/data/constants";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function ContactSection() {
  const { t } = useTranslation(["pages", "common"]);
  return (
    <section
      id="contact"
      className="relative py-12 md:py-16 lg:py-20 text-white overflow-hidden"
      role="main"
      aria-labelledby="contact-heading"
      aria-describedby="contact-description"
    >
      {/* Theme-aware professional background */}
      <div className="absolute inset-0">
        {/* Primary gradient - adapts to theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80 dark:from-primary/90 dark:to-primary/70"></div>

        {/* Professional geometric pattern - theme responsive */}
        <div
          className="absolute inset-0 opacity-20 dark:opacity-10"
          style={{
            backgroundImage: `
            radial-gradient(circle at 25% 25%, hsl(var(--primary) / 0.4) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, hsl(var(--secondary) / 0.4) 1px, transparent 1px),
            linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%)
          `,
            backgroundSize: "40px 40px, 40px 40px, 80px 80px, 80px 80px",
            backgroundPosition: "0 0, 20px 20px, 0 0, 40px 40px",
          }}
        ></div>

        {/* Subtle circuit board pattern for tech feel */}
        <div
          className="absolute inset-0 opacity-10 dark:opacity-5"
          style={{
            backgroundImage: `
            linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px),
            linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px)
          `,
            backgroundSize: "100px 100px",
          }}
        ></div>
      </div>

      {/* Theme-aware overlay */}
      <div className="absolute inset-0 bg-black/30 dark:bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <span className="text-secondary font-semibold text-lg">
              {t("pages:home.contact.label")}
            </span>
            <h2
              id="contact-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-3 sm:mt-4 mb-4 sm:mb-6"
            >
              {t("pages:home.contact.title")}
            </h2>
            <p
              id="contact-description"
              className="text-sm sm:text-base md:text-lg lg:text-xl opacity-90 max-w-3xl mx-auto px-2 sm:px-0"
            >
              {t("pages:home.contact.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <div>
              <h3
                className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8"
                id="contact-info-heading"
              >
                {t("pages:home.contact.getInTouch")}
              </h3>

              <div
                className="space-y-4 sm:space-y-6 mb-6 sm:mb-8"
                role="list"
                aria-labelledby="contact-info-heading"
              >
                <div className="flex items-start space-x-4" role="listitem">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      {t("pages:home.contact.methods.phone.title")}
                    </h4>
                    <div className="space-y-1">
                      <a
                        href={`tel:${COMPANY_INFO.phoneNumbers.primary}`}
                        className="opacity-90 hover:opacity-100 transition-opacity block"
                      >
                        {COMPANY_INFO.phoneNumbers.primary}
                      </a>
                      <a
                        href={`tel:${COMPANY_INFO.phoneNumbers.secondary}`}
                        className="opacity-90 hover:opacity-100 transition-opacity block"
                      >
                        {COMPANY_INFO.phoneNumbers.secondary}
                      </a>
                    </div>
                    <p className="text-sm opacity-70">
                      {t("pages:home.contact.methods.phone.description")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4" role="listitem">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      {t("pages:home.contact.methods.email.title")}
                    </h4>
                    <p className="opacity-90">{COMPANY_INFO.email}</p>
                    <p className="text-sm opacity-70">
                      {t("pages:home.contact.methods.email.description")}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4" role="listitem">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">
                      {t("pages:home.contact.methods.address.title")}
                    </h4>
                    <a
                      href="https://maps.app.goo.gl/jiap3sBYbM3r8Pn68"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-secondary transition-colors cursor-pointer block"
                      aria-label={t("common:aria.openLocation")}
                    >
                      <p className="opacity-90 hover:opacity-100">
                        {COMPANY_INFO.address.street}
                      </p>
                      <p className="opacity-90 hover:opacity-100">
                        {COMPANY_INFO.address.city},{" "}
                        {COMPANY_INFO.address.state}{" "}
                        {COMPANY_INFO.address.pincode}
                      </p>
                    </a>
                    <p className="text-sm opacity-70">
                      {t("pages:home.contact.methods.address.metro")}:{" "}
                      {COMPANY_INFO.address.landmark}
                    </p>
                  </div>
                </div>
              </div>

              <motion.div className="relative overflow-hidden rounded-xl p-6 bg-gradient-to-br from-white/95 to-blue-50/80 dark:from-slate-800/95 dark:to-slate-700/90 shadow-lg border border-slate-200/60 dark:border-slate-600/50">
                {/* Elegant background pattern */}
                <div
                  className="absolute inset-0 opacity-20 dark:opacity-10"
                  style={{
                    backgroundImage: `
                  radial-gradient(circle at 20% 20%, hsl(var(--primary) / 0.3) 1px, transparent 1px),
                  radial-gradient(circle at 80% 80%, hsl(var(--secondary) / 0.3) 1px, transparent 1px)
                `,
                    backgroundSize: "30px 30px",
                  }}
                ></div>

                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-emerald-400/5 dark:from-blue-400/10 dark:to-emerald-400/10 rounded-xl"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mr-3 shadow-lg">
                      <Clock className="w-4 h-4 text-white" />
                    </div>
                    <h4 className="font-bold text-primary dark:text-white">
                      {t("common:labels.businessHours")}
                    </h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center py-2 px-3 bg-white/50 dark:bg-slate-700/50 rounded-lg backdrop-blur-sm">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {t("common:labels.mondayToSaturday")}:
                      </span>
                      <span className="font-semibold text-primary dark:text-emerald-400">
                        {t("common:labels.workingHours")}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 px-3 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-900/30 rounded-lg">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {t("common:labels.sunday")}:
                      </span>
                      <span className="font-semibold text-orange-600 dark:text-orange-400">
                        {t("common:labels.emergencySupport")}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
