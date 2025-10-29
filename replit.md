# Powerton Engineering Website

## Overview
This project is a React-based business website for Powerton Engineering Pvt. Ltd., specializing in industrial automation, electrical components, instrumentation, and engineering services. The website aims to showcase the company's offerings through a responsive, multi-language interface with a professional industrial design. Key objectives include enhancing market presence, catering to a global clientele, and providing an optimized user experience with fast loading times and robust SEO.

## User Preferences
- Clean, professional design appropriate for industrial/engineering business
- Multi-language support for international clients
- Mobile-responsive design for accessibility (WCAG 2.1 Level AA compliant)
- Fast loading times with optimized assets
- Bulletproof responsiveness at every corner across all devices
- Comprehensive ARIA labels for excellent screen reader support

## System Architecture
The website's frontend is developed using React 18, TypeScript, and Vite. Styling is managed with Tailwind CSS and shadcn/ui, leveraging Radix UI components. Client-side routing is handled by Wouter, and i18next provides internationalization support for over 10 languages. Framer Motion is used for animations.

**Key Features:**
- **Multi-language Support:** Over 10 languages are supported through i18next (English, Hindi, French, Spanish, Portuguese, Russian, Chinese, Arabic, Swahili, Hausa).
- **Responsive Design:** Bulletproof responsiveness optimized for all devices (320px-4K screens) using Tailwind's responsive utilities with supplementary CSS classes for edge cases.
- **Accessibility (WCAG 2.1 AA):** Comprehensive ARIA labels, skip-to-main-content link, enhanced focus indicators, semantic HTML5 landmarks, and keyboard navigation support.
- **Product Catalog:** Features 520 products across **8 main categories** (Instrumentation Components, Electrical Components, Industrial Measuring Tools, Solar Products, Automation & Control Systems, Safety & Protective Devices, Mechanical Pumps & Spares, BLDC Motors) with detailed product pages, including modern glassmorphism design, scroll animations, AI-generated/stock images, and a three-column layout for specifications, applications, and industries.
- **Services & Projects Showcase:** Dedicated sections for 7 company services and past projects.
- **Career Portal:** Comprehensive career page with benefits, culture, and application form integrated with scroll-to-application CTA.
- **News & Updates:** Dedicated news page featuring company achievements, upcoming projects, and industry updates.
- **Contact & Quote Forms:** Functionality for inquiries and quote requests.
- **Professional Industrial Design:** Thematic design consistent with an industrial engineering company.
- **Comprehensive SEO:** Implements Google's 2025 guidelines, including Schema.org structured data (Product, BreadcrumbList, Service, Organization, WebPage), unique meta titles/descriptions/keywords for all products, canonical URLs, Open Graph/Twitter Card tags, robots.txt (updated Oct 2025), sitemap.xml (includes all pages with lastmod 2025-10-14), and geo-location metadata.
- **Intelligent Chatbot:** AI-powered chatbot aligned with website structure, offering navigation to 8 product categories, 7 services, career opportunities, and technical support.
- **Image Management:** Centralized mapping for product images ensuring comprehensive coverage and appropriate visuals for each product.
- **Build System:** Uses Vite for development and production builds, with a custom Node.js launcher for the development server.

## External Dependencies
- **i18next**: For multi-language support and internationalization.
- **Framer Motion**: For declarative animations and transitions.
- **Lucide React**: For icon sets.
- **PHPMailer**: (Located in `public/PHPMailer/`) Potentially for server-side email handling.
- **Google Search Engine**: SEO optimizations are specifically tailored for Google's indexing and rich snippets features.

## Recent Changes
- **Image Uniqueness Achievement (October 16, 2025)**: Successfully eliminated all duplicate subcategory images across the entire website. Generated 9 new unique custom images to replace duplicates in: Instrumentation Cables, Instrument Transformers, Industrial Lighting, Contactors & Relays, Transformers & Power Devices, Motor Controllers & Drives, Protection Relays, and Panel Meters & Indicators. All 47 subcategories now feature completely unique, accurate, and professionally generated imagery that accurately represents each product category.