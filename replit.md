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
- **Header Product Navigation Fix (December 5, 2025)**: Fixed header dropdown popup links for product groups. Previously, clicking a product group in the header popup navigated to non-existent `/products/{parent}/{subcategory}/{group}` URLs. Now correctly routes to `/products/{parent}/{subcategory}?group={groupSlug}` with automatic expansion of the targeted product group. The subcategory page reads the query parameter and auto-expands the corresponding accordion section with smooth scrolling. Search results also use the same URL pattern for consistency.
- **Unique Product Hero Images System (December 3, 2025)**: Implemented comprehensive hero image system with 120+ unique hero images for all product subcategories and product groups. Added PRODUCT_HERO_IMAGES mapping in images.ts covering: all instrumentation subcategories (sensors-transducers, transmitters-flow-meters, switches-indicators, valves-actuators, analyzers, instrument-transformers), all electrical subcategories (cables, connectors, breakers, power supplies, enclosures), solar subcategories, automation subcategories (PLCs, SCADA, DCS, HMI, VFDs), safety subcategories (surge protectors, grounding systems, intrinsically safe equipment), pumps subcategories (centrifugal, diaphragm, gear, spares), tools subcategories (hand, power, cutting, lifting), and measurement subcategories (multimeters, analyzers, calibration equipment, panel meters, IO modules). Also includes 50+ product group hero images for specific product types. Each image has unique ID (ID-1100 to ID-1400) and uses the getProductHeroImage() function for retrieval.
- **Complete Product Coverage Achievement (November 20, 2025)**: Successfully added 87 new products to ensure every product group displays at least one product. The website now features 285 total products (increased from 198) across all 189 product groups with zero empty groups remaining. New additions include: air-operated/electric/hydraulic diaphragm pumps, gear pumps, multi-stage centrifugal pumps, analog/digital meters, power factor meters, energy loggers, motor protection relays, voltage monitoring relays, earthing cables/strips, multicore cables, shielded pair cables (1P/2P/8P), PVC duct, DC/signal surge protectors, terminal blocks, relay boards, grounding equipment, insulators, safety barriers, intrinsically safe devices, explosion-proof equipment, emergency lights, diode units, DOL starters, DCS controllers/engineering/operator stations, I/O cards, mobile/panel HMIs, SCADA gateways/hardware/software, potential transformers, pump impellers/casings/seals/bearings, jib cranes, wire rope hoists, drill bits, cutting blades, milling cutters, impact drivers, mechanical/electrical/precision tools, test equipment, pedestal/table/wall fan motors, flameproof/weatherproof flood lights, high-bay lights, street lights, vessel lights, well-glass lights, and solar power optimizers. All products feature complete specifications from industry-leading manufacturers (Graco, Grundfos, Viking Pump, Selec, Schneider Electric, Fluke, Siemens, Phoenix Contact, ABB, SKF, Konecranes, Bosch, DeWalt, Milwaukee, GEDORE, Mitutoyo, etc.).
- **Image Uniqueness Achievement (October 16, 2025)**: Successfully eliminated all duplicate subcategory images across the entire website. Generated 9 new unique custom images to replace duplicates in: Instrumentation Cables, Instrument Transformers, Industrial Lighting, Contactors & Relays, Transformers & Power Devices, Motor Controllers & Drives, Protection Relays, and Panel Meters & Indicators. All 47 subcategories now feature completely unique, accurate, and professionally generated imagery that accurately represents each product category.