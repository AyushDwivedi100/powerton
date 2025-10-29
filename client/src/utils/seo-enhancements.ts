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
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://powertonengineering.in${item.url}`,
    })),
  };
}

// Generate FAQ structured data
export function generateFAQData(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Generate enhanced product structured data
export function generateProductData(product: {
  name: string;
  description: string;
  image?: string;
  brand?: string;
  manufacturer?: string;
  category?: string;
  sku?: string;
  gtin?: string;
  mpn?: string;
  specifications?: Array<{ label: string; value: string }>;
  features?: string[];
  // Pricing information - optional but required for valid offers
  price?: number;
  lowPrice?: number;
  highPrice?: number;
  offerCount?: number;
  availability?: string;
}) {
  const productData: any = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: product.brand || "Powerton Engineering",
    },
    manufacturer: {
      "@type": "Organization",
      name: product.manufacturer || "Powerton Engineering Pvt. Ltd.",
      url: "https://powertonengineering.in",
    },
  };

  if (product.image) {
    productData.image = product.image;
  }

  if (product.category) {
    productData.category = product.category;
  }

  if (product.sku) {
    productData.sku = product.sku;
  }

  if (product.gtin) {
    productData.gtin = product.gtin;
  }

  if (product.mpn) {
    productData.mpn = product.mpn;
  }

  // Only add offers if we have pricing data
  // For single price products
  if (product.price !== undefined) {
    productData.offers = {
      "@type": "Offer",
      price: product.price.toString(),
      priceCurrency: "INR",
      availability: product.availability || "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Powerton Engineering Pvt. Ltd.",
      },
    };
  }
  // For price range products (multiple variants)
  else if (
    product.lowPrice !== undefined &&
    product.highPrice !== undefined &&
    product.offerCount !== undefined
  ) {
    productData.offers = {
      "@type": "AggregateOffer",
      lowPrice: product.lowPrice.toString(),
      highPrice: product.highPrice.toString(),
      priceCurrency: "INR",
      offerCount: product.offerCount,
      availability: product.availability || "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Powerton Engineering Pvt. Ltd.",
      },
    };
  }
  // If no pricing data provided, omit offers entirely (valid for B2B products)

  // Add additional specifications as properties
  if (product.specifications && product.specifications.length > 0) {
    productData.additionalProperty = product.specifications.map((spec) => ({
      "@type": "PropertyValue",
      name: spec.label,
      value: spec.value,
    }));
  }

  return productData;
}

// Generate product/service structured data
export function generateServiceData(
  services: Array<{
    name: string;
    description: string;
    url?: string;
    image?: string;
    serviceType?: string;
    areaServed?: string;
  }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "Service",
      position: index + 1,
      name: service.name,
      description: service.description,
      url: service.url
        ? `https://powertonengineering.in${service.url}`
        : undefined,
      image: service.image,
      serviceType: service.serviceType,
      areaServed: service.areaServed || "India",
      provider: {
        "@type": "Organization",
        name: "Powerton Engineering Pvt. Ltd.",
        url: "https://powertonengineering.in",
      },
    })),
  };
}

// Generate Article/BlogPosting structured data
export function generateArticleData(article: {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      "@type": "Organization",
      name: article.author || "Powerton Engineering Pvt. Ltd.",
    },
    publisher: {
      "@type": "Organization",
      name: "Powerton Engineering Pvt. Ltd.",
      logo: {
        "@type": "ImageObject",
        url: "https://powertonengineering.in/assets/mainlogopowerton (1)_1755674514195.png",
      },
    },
    image: article.image || "https://powertonengineering.in/og-image.jpg",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://powertonengineering.in${article.url}`,
    },
  };
}

// Generate local business hours
export function generateBusinessHoursData() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
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
    keywords:
      page.keywords ||
      "industrial automation, electrical engineering, control panels, India",
    ogImage: page.ogImage || "https://powertonengineering.in/og-image.jpg",
    canonicalUrl: page.canonicalUrl || "https://powertonengineering.in",
  };
}
