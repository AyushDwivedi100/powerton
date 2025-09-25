// Additional SEO enhancements for better search engine visibility

export interface BreadcrumbItem {
  name: string;
  url: string;
}

// Generate breadcrumb structured data
export function generateBreadcrumbData(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

// Generate FAQ structured data
export function generateFAQData(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// Generate product/service structured data
export function generateServiceData(services: Array<{
  name: string;
  description: string;
  url?: string;
  image?: string;
}>) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((service, index) => ({
      "@type": "Service",
      "position": index + 1,
      "name": service.name,
      "description": service.description,
      "url": service.url,
      "image": service.image
    }))
  };
}

// Generate local business hours
export function generateBusinessHoursData() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification", 
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "14:00"
      }
    ]
  };
}

// Meta tag helpers
export function generateMetaTags(page: {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}) {
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords || "industrial automation, electrical engineering, control panels, India",
    ogImage: page.ogImage || "https://powertonengineering.in/og-image.jpg",
    canonicalUrl: page.canonicalUrl || "https://powertonengineering.in"
  };
}