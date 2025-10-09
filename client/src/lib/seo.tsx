import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

export function SEO({
  title,
  description,
  keywords,
  ogImage = "https://powertonengineering.in/og-image.jpg",
  canonicalUrl,
  structuredData,
}: SEOProps) {
  const { t } = useTranslation("common");

  const seoTitle = title || t("seo.defaultTitle");
  const seoDescription = description || t("seo.defaultDescription");
  const seoKeywords = keywords || t("seo.defaultKeywords");

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: t("seo.companyName"),
    url: "https://powertonengineering.in",
    description: t("seo.companyDescription"),
    address: {
      "@type": "PostalAddress",
      streetAddress: t("seo.businessAddress.street"),
      addressLocality: t("seo.businessAddress.city"),
      addressRegion: t("seo.businessAddress.state"),
      postalCode: t("seo.businessAddress.postal"),
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: t("seo.contact.phone"),
      contactType: "customer service",
    },
    sameAs: [
      "https://www.linkedin.com/company/powerton-engineering",
      "https://twitter.com/powertoneng",
      "https://www.facebook.com/powertonengineering",
    ],
  };

  return (
    <Helmet>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="robots" content="index, follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
      />
      <meta name="author" content={t("seo.companyName")} />
      <meta name="theme-color" content="#1e3a8a" />
      <meta name="msapplication-TileColor" content="#1e3a8a" />

      {/* Enhanced SEO */}
      <meta name="geo.region" content="IN-UP" />
      <meta name="geo.placename" content="Noida" />
      <meta name="geo.position" content="28.5355;77.3910" />
      <meta name="ICBM" content="28.5355, 77.3910" />

      {/* Language and Content */}
      <meta httpEquiv="content-language" content="en-IN" />
      <meta name="language" content="English" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />

      {/* Open Graph Enhanced */}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta
        property="og:type"
        content={structuredData ? "product" : "website"}
      />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:url"
        content={canonicalUrl || "https://powertonengineering.in"}
      />
      <meta property="og:site_name" content={t("seo.siteName")} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card Enhanced */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content={t("seo.twitterHandle")} />
      <meta name="twitter:creator" content={t("seo.twitterHandle")} />

      {/* Additional Business Info */}
      <meta
        name="business:contact_data:street_address"
        content={t("seo.businessAddress.street")}
      />
      <meta
        name="business:contact_data:locality"
        content={t("seo.businessAddress.city")}
      />
      <meta
        name="business:contact_data:region"
        content={t("seo.businessAddress.state")}
      />
      <meta
        name="business:contact_data:postal_code"
        content={t("seo.businessAddress.postal")}
      />
      <meta
        name="business:contact_data:country_name"
        content={t("seo.businessAddress.country")}
      />
      <meta
        name="business:contact_data:phone_number"
        content={t("seo.contact.phone")}
      />
      <meta
        name="business:contact_data:email"
        content={t("seo.contact.email")}
      />

      {/* Industry & SEO Enhancement */}
      <meta name="industry" content={t("seo.businessInfo.industry")} />
      <meta name="category" content={t("seo.businessInfo.category")} />
      <meta
        name="target_audience"
        content={t("seo.businessInfo.targetAudience")}
      />
      <meta name="company_type" content={t("seo.businessInfo.companyType")} />
      <meta name="service_area" content={t("seo.businessInfo.serviceArea")} />

      {/* Performance & Mobile Optimization */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="apple-mobile-web-app-title" content={t("seo.siteName")} />
      <meta name="application-name" content={t("seo.siteName")} />

      {/* DNS Prefetch for Performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//images.unsplash.com" />
      <link rel="dns-prefetch" href="//maps.googleapis.com" />
      <link rel="dns-prefetch" href="//api.emailjs.com" />
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/assets/mainlogopowerton (1)_1755674514195.png"
        as="image"
      />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Alternate Languages */}
      <link
        rel="alternate"
        href="https://powertonengineering.in"
        hrefLang="en-in"
      />
      <link
        rel="alternate"
        href="https://powertonengineering.in"
        hrefLang="en"
      />
      <link
        rel="alternate"
        href="https://powertonengineering.in"
        hrefLang="x-default"
      />

      {/* Enhanced Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(
          structuredData || {
            "@context": "https://schema.org",
            "@graph": [
              {
                ...defaultStructuredData,
                "@type": "Organization",
                "@id": "https://powertonengineering.in/#organization",
                foundingDate: "2008",
                numberOfEmployees: "50-100",
                industry: "Industrial Automation and Electrical Engineering",
                areaServed: "India",
                knowsAbout: [
                  "Industrial Automation",
                  "Electrical Control Panels",
                  "PLC Programming",
                  "SCADA Systems",
                  "Instrumentation",
                  "Solar EPC",
                  "Process Automation",
                  "Power Systems",
                ],
              },
              {
                "@type": "LocalBusiness",
                "@id": "https://powertonengineering.in/#localbusiness",
                name: "Powerton Engineering Pvt. Ltd.",
                image: "https://powertonengineering.in/og-image.jpg",
                url: "https://powertonengineering.in/",
                telephone: "+91-94627-71662",
                email: "info@powertonengineering.com",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "F-25, F Block, Sector 6",
                  addressLocality: "Noida",
                  addressRegion: "Uttar Pradesh",
                  postalCode: "201301",
                  addressCountry: "IN",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: "28.5355",
                  longitude: "77.3910",
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.8",
                  reviewCount: "156",
                  bestRating: "5",
                },
                priceRange: "₹₹₹",
                currenciesAccepted: "INR",
                paymentAccepted: "Cash, Credit Card, Bank Transfer",
              },
              {
                "@type": "WebSite",
                "@id": "https://powertonengineering.in/#website",
                url: "https://powertonengineering.in/",
                name: "Powerton Engineering Pvt. Ltd.",
                description:
                  "Leading manufacturer of electrical control panels and industrial automation solutions",
                publisher: {
                  "@id": "https://powertonengineering.in/#organization",
                },
                potentialAction: [
                  {
                    "@type": "SearchAction",
                    target: {
                      "@type": "EntryPoint",
                      urlTemplate:
                        "https://powertonengineering.in/products?search={search_term_string}",
                    },
                    "query-input": "required name=search_term_string",
                  },
                ],
              },
            ],
          }
        )}
      </script>
    </Helmet>
  );
}
