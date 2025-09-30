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
- **Deployment**: Configured for autoscale deployment with build and start commands