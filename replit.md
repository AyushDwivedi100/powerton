# Powerton Engineering Website

## Overview
This project is a React-based business website for Powerton Engineering Pvt. Ltd., an industrial automation, electrical components, instrumentation, and engineering services company. The website aims to showcase the company's products, services, and projects through a responsive, multi-language interface. It features a professional industrial design, optimized for SEO and fast loading times, to cater to a global clientele and enhance market presence.

## User Preferences
- Clean, professional design appropriate for industrial/engineering business
- Multi-language support for international clients
- Mobile-responsive design for accessibility
- Fast loading times with optimized assets

## System Architecture
The frontend is built with React 18, TypeScript, and Vite, utilizing Tailwind CSS with shadcn/ui for styling and Radix UI components for enhanced UI. Client-side routing is managed by Wouter, and internationalization is handled by i18next, supporting over 10 languages. Animations are implemented using Framer Motion. The project incorporates comprehensive SEO enhancements following Google's 2025 guidelines, including detailed Schema.org structured data (Product, BreadcrumbList, Service, Organization) and robust technical SEO practices. The build system uses Vite, and a custom Node.js launcher starts the Vite development server.

**Key Features:**
- Multi-language support (10+ languages)
- Responsive design for all devices
- Product catalog with 520 products across multiple categories
- Service pages and project showcase
- Contact forms and quote requests
- Professional industrial design theme
- Comprehensive SEO optimizations:
  - Unique meta titles, descriptions, and keywords for all 520 products
  - Product structured data (Schema.org) for rich snippets
  - Canonical URLs with proper path structure
  - Open Graph and Twitter Card tags
  - BreadcrumbList structured data for navigation
  - robots.txt and sitemap.xml for search engine crawling
  - Geo-location and business information meta tags
- Product detail pages with:
  - Modern glassmorphism design and scroll animations
  - High-quality AI-generated and stock images for all products
  - Horizontal three-column layout for specifications, applications, and industries
  - Proper image loading from client/public/generated_images/
- Uniform card sizes on product subcategory pages by limiting description length
- Background images in product group hero sections for visual consistency
- Corrected URL slugs and navigation links across product categories for seamless browsing

## External Dependencies
- **i18next**: For multi-language support.
- **Framer Motion**: For animations and transitions.
- **Lucide React**: For icons.
- **PHPMailer**: (Located in `public/PHPMailer/`) Potentially for server-side email handling, though the specific backend implementation is not detailed.
- **Google Search Engine**: SEO optimizations are tailored for Google's guidelines and rich snippets.

## Replit Environment Setup
- **Development Server**: Runs via `npm run dev` which starts Vite dev server on port 5000
- **Production Build**: `npm run build` builds the client and bundles the server launcher
- **Production Server**: `npm start` runs Vite preview server on port 5000
- **Host Configuration**: Vite configured with `host: 0.0.0.0` and `allowedHosts: true` for Replit proxy compatibility
- **Replit Plugins**: Integrated `@replit/vite-plugin-runtime-error-modal` for better error handling
- **Deployment**: Configured for autoscale deployment with build and start commands

## Recent Changes

### October 7, 2025 - Completed SEO and Accessibility i18n Migration
- **Replaced all remaining hardcoded English text with translation keys:**
  - Hero section: Fixed 4 aria-label attributes for accessibility statistics (aria.stats.*)
  - Service category page: Fixed SEO title/description/keywords with parameterized translation keys
  - Multiple pages: Fixed SEO metadata (news, quote, gallery, projects)
- **Updated English locale files:**
  - Added "seo" section to common.json with parameterized templates for service pages
  - Added aria.stats subsection for accessibility labels (projects, services, clients, years)
  - Added error translations and quote page SEO keys to pages.json
- **Translation implementation follows best practices:**
  - Used i18next interpolation syntax for dynamic content ({{service}}, {{description}})
  - Reused existing translation keys where possible (DRY principle)
  - All JSON files syntactically valid with proper nesting structure
- **Verification completed:**
  - Architect review confirmed all hardcoded strings replaced successfully
  - Application running without missing translation key errors
  - SEO and accessibility enhancements now fully internationalized
  - Structured data (Schema.org) kept in English for optimal search engine indexing

### October 4, 2025 - Fresh GitHub Import & Replit Setup
- **Successfully imported project from GitHub and configured for Replit environment**
- **Installation:**
  - Installed client dependencies: 298 packages
  - All dependencies verified and working correctly
- **Workflow Configuration:**
  - Configured workflow "Start application" on port 5000 with webview output type
  - Vite dev server starts successfully with `npm run dev`
  - Server binds to 0.0.0.0:5000 for Replit proxy compatibility
- **Deployment Configuration:**
  - Set up autoscale deployment target
  - Build command: `npm run build` (builds client and bundles server launcher)
  - Run command: `npm run start` (runs Vite preview server in production mode)
- **Verified Working Features:**
  - Multi-language support (i18next) with 10+ languages
  - Responsive design and Framer Motion animations
  - Wouter routing working correctly
  - SEO optimizations and structured data
  - EmailJS contact forms and quote requests
  - Product catalog with all 520 products
  - WhatsApp integration and chatbot features
- **Existing Configuration Verified:**
  - Vite config already optimized for Replit (0.0.0.0:5000, allowedHosts: true)
  - HMR (Hot Module Reload) enabled
  - Proper alias configuration (@, @assets)
  - Replit runtime error modal plugin active
- **Project Status**: Import completed successfully, application fully operational and ready for deployment

### October 4, 2025 - Completed Additional Internationalization (i18n) Implementation
- **Fixed breadcrumb navigation across 4 files:**
  - Updated about.tsx, contact.tsx, product-detail-dynamic.tsx, service-category-dynamic.tsx
  - Reused existing sitemap.pages translation keys (DRY principle)
  - All breadcrumbs now fully internationalized
- **Fixed news.tsx hardcoded statuses and technologies:**
  - Created translation keys for project statuses: Planning Phase, Contract Signed, Engineering Phase, In Progress
  - Created translation keys for technologies: IoT, Smart Sensors, City Management Systems, etc.
  - Moved data to translation function (getUpcomingProjects) to access t() outside component scope
- **Fixed projects.tsx with stable identifier-based filtering:**
  - Implemented {id, label} structure for filter options
  - Created FILTER_IDS constant with stable English identifiers matching project data
  - Fixed critical multi-language bug: filters now work correctly in all locales
  - Filter dropdowns display translated labels but compare stable IDs internally
  - Verified by architect: works consistently across all languages
- **Documented SEO structured data decision:**
  - Added code comments to home.tsx explaining why structured data remains in English
  - Structured data is machine-readable SEO metadata for search engines
  - Keeping it in English ensures optimal search engine indexing
- **Architecture decisions:**
  - Reused existing translation keys where possible (DRY principle)
  - Created helper functions to access t() outside component scope
  - Used stable identifiers for filtering to support multi-language
  - Documented exceptions (SEO metadata) with clear reasoning

### October 4, 2025 - Previous i18n Work Completed
- **Systematically replaced ALL hardcoded English strings with translation keys:**
  - Chatbot component (2383 lines): Replaced 100+ hardcoded strings with translation keys
  - Footer component: Replaced all hardcoded aria-labels (7 instances)
  - Hero section: Replaced background aria-label with translation key
- **Updated English locale files:**
  - Added 150+ new translation keys to `client/public/locales/en/chatbot.json`
  - Added 7 new aria-label keys to `client/public/locales/en/common.json`
- **Verification completed:**
  - No hardcoded English strings remain in reviewed components
  - All translation keys follow consistent naming structure
  - Application tested and running without missing translation key errors
  - Implementation ready for additional language locales (10+ languages supported)

### October 3, 2025 - Added PD Flow Meter Product Group
- Created new "PD Flow Meters" (Positive Displacement) product group with i18n support
- Added 5 real PD flow meter products from top manufacturers:
  - OVAL FLOWPET LSF41 (oval gear, Japanese manufacturer)
  - Badger Meter M1000 (nutating disc, water utilities)
  - KROHNE BM 100 (oval gear, German manufacturer)
  - KRAL VoluMeter OMG (screw flow, Austrian manufacturer)
  - Flow Technology DC-I Series (helical gear, high viscosity 0.6-1,000,000 cP)
- Implemented complete SEO optimization with unique titles, descriptions, and keywords
- Added translation keys for all products and product group (English locale)
- Fixed product-group-dynamic.tsx to properly use titleKey and descriptionKey for i18n
- All products configured with proper typeKey, specs, and translation support

### September 30, 2025
- Installed all client dependencies successfully
- Added Replit runtime error modal plugin to vite.config.ts for improved development experience
- Configured workflow "Start application" on port 5000 with webview output
- Set up deployment configuration for autoscale with proper build and start commands
- Verified application runs correctly with all features working (multi-language, responsive design, animations)
- **Completed comprehensive image management solution:**
  - Added 80+ image mappings to ensure every product detail page has an appropriate image
  - Implemented strategic asset reuse: mapped 193 unique product image keys to existing category images
  - Verification confirms 100% coverage with zero missing image mappings
  - Strategy: Generic categories (PLCs, HMI, SCADA) map to automation images; solar products to solar images; pumps to mechanical images; safety devices to safety images
  - All mappings centralized in `client/src/assets/images.ts` for maintainability
  - Product detail pages verified to display images correctly with proper layout
