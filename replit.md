# Powerton Engineering Website

## Project Overview
This is a React-based business website for Powerton Engineering Pvt. Ltd., a company specializing in industrial automation, electrical components, instrumentation, and engineering services. The website features a multi-language interface (English, Hindi, Arabic, Spanish, French, and more) and showcases the company's products, services, and projects.

## Recent Changes (September 30, 2025)

### Complete Redesign of Product Detail Pages
Completely redesigned the product detail page (`client/src/pages/product-detail-dynamic.tsx`) with modern, minimal design and smooth scroll animations:

#### Design Improvements
1. **Modern Hero Section** - Two-column layout with product image on left and information on right
   - Sticky product image on desktop for better UX
   - Gradient background with subtle grid pattern
   - Clean typography with proper visual hierarchy
   - Category badge and large product title

2. **Minimal Card Design** - Clean, modern cards with subtle backgrounds
   - Border-free cards with soft shadows
   - Backdrop blur effects for depth
   - Consistent spacing and padding
   - Improved readability with better contrast

3. **Scroll Animations** - Smooth animations using Framer Motion
   - Fade-in-up animations for each section
   - Staggered animations for features and specifications
   - Parallax effect on hero section
   - Micro-interactions on hover states

4. **Enhanced Sections**
   - Key Features: Grid layout with checkmark icons and hover effects
   - Technical Specifications: Modern grid with labeled cards
   - Applications & Industries: Compact grid with bullet points
   - Certifications: Badge-style pills with animations
   - CTA Section: Gradient background with animated buttons

5. **User Experience**
   - Better button hierarchy and sizing
   - Improved mobile responsiveness
   - Enhanced hover states and transitions
   - Datasheet download button integration
   - Clear call-to-action buttons (Contact Us, Get Quote)

#### Technical Implementation
- Leveraged Framer Motion for performant animations
- Used Tailwind CSS for consistent styling
- Implemented viewport-based animation triggers
- Added parallax scrolling effects
- Optimized for performance with lazy loading

#### Files Modified
- `client/src/pages/product-detail-dynamic.tsx` - Complete redesign

### Comprehensive SEO Optimization Implementation (2025 Best Practices)
Implemented comprehensive SEO enhancements across the entire website following Google's 2025 guidelines:

#### Enhanced Structured Data (Schema.org)
1. **Product Schema** - Added detailed Product structured data to all product detail pages:
   - Brand and manufacturer information
   - Product specifications as PropertyValue objects
   - Optional pricing support (single price Offer or price range AggregateOffer)
   - Omits offers when pricing data unavailable (valid for B2B "Contact for Price" products)
   - Category and SKU information
   - Availability status

2. **Breadcrumb Navigation Schema** - Implemented BreadcrumbList on key pages:
   - Product detail pages (Home → Category → Product)
   - Service category pages (Home → Services → Category)
   - About page (Home → About Us)
   - Contact page (Home → Contact Us)
   - Improves rich snippets in search results

3. **Service Schema** - Added Service structured data to service category pages:
   - Service name, description, and URLs
   - ServiceType and areaServed information
   - Provider organization details
   - ItemList format for multiple services

4. **Organization Schema** - Enhanced existing Organization schema on home page:
   - Complete contact information
   - Address details
   - OfferCatalog with service listings

#### SEO Utility Functions
Created `client/src/utils/seo-enhancements.ts` with reusable schema generators:
- `generateBreadcrumbData()` - Creates BreadcrumbList structured data
- `generateProductData()` - Creates Product schema with optional pricing
- `generateServiceData()` - Creates Service ItemList schema
- `generateFAQData()` - Creates FAQPage schema (ready for future use)
- `generateArticleData()` - Creates Article schema (ready for future use)

#### Technical SEO
- **robots.txt** - Already well-configured with proper crawl directives
- **Meta Descriptions** - Enhanced on product, service, about, and contact pages
- **Canonical URLs** - Properly set on all pages
- **Schema Validation** - All structured data follows Google's 2025 requirements

#### Files Modified
- `client/src/utils/seo-enhancements.ts` (new) - Schema generation utilities
- `client/src/pages/product-detail-dynamic.tsx` - Product + Breadcrumb schema
- `client/src/pages/service-category-dynamic.tsx` - Service + Breadcrumb schema
- `client/src/pages/about.tsx` - Breadcrumb schema
- `client/src/pages/contact.tsx` - Breadcrumb schema

#### SEO Benefits
- Improved search engine visibility with rich snippets
- Better click-through rates from enhanced search results
- Proper structured data for Google's Knowledge Graph
- Valid schema markup passing Google's Rich Results Test
- Mobile-first optimization maintained
- B2B-friendly product markup (works without pricing)

## Recent Changes (September 30, 2025)

### Added Welding Machines Product Group to Power Tools Subcategory
- Created "Welding Machines" product group with comprehensive description covering MIG, TIG, Stick, and multi-process welding
- Added 6 real welding machines from leading manufacturers:
  1. **Lincoln Electric POWER MIG 211i** - Dual-voltage 120V/230V MIG welder, 20-211A output, 41 lbs portable
  2. **Miller Multimatic 220 AC/DC** - Multi-process (MIG, Flux-Cored, Stick, TIG AC/DC), Auto-Set Elite, MVP system
  3. **ESAB Rebel EMP 215ic** - sMIG smart MIG technology, 4.3" TFT display, 120/230V dual voltage
  4. **Lincoln Electric POWER MIG 262MP** - Professional 300A multi-process, 7" LCD, Ready.Set.Weld, aluminum capable
  5. **Miller Dynasty 210** - Advanced 210A AC/DC TIG, waveform control, wireless foot control, includes water cooler
  6. **ESAB Rebel EMP 285ic** - High-output 285A multi-process, full .045" wire range, spray transfer
- All products include real specifications, amperage ratings, processes, features, and manufacturer datasheet URLs

### Added Chop Saws (Cut-Off Saws) Product Group to Cutting Tools Subcategory
- Created "Chop Saws (Cut-Off Saws)" product group with comprehensive description covering TCT cold-cut technology
- Added 6 real chop saws from leading manufacturers:
  1. **DeWalt DW872** - 14" Multi-Cutter Saw, 15A 4HP, 1,300 RPM, 66-70T carbide TCT blade, cuts 4× faster than abrasive
  2. **Makita XWL01Z** - 36V (18V × 2) Brushless cordless, 14" blade, 3,800 RPM, tool-less fence/vise
  3. **Evolution S355MCS** - First 14" TCT saw with mitering, 46° left/right miter range, precision miter table
  4. **Evolution EVOSAW380** - 15" capacity, hi-torque gearbox, cold-cut technology, heavy-duty cast aluminum base
  5. **KAKA Industrial CHS-355** - 14" TCT, 2.2kW high-torque motor, cast aluminum base, minimal heat/burrs
  6. **Metabo HPT CC14SFS** - 14" portable, 15A 2,000W, quick-lock vise, miter to 45° either direction
- All products include blade size, motor specifications, cutting capacity, features, and manufacturer datasheet URLs
- Note: User initially said "choksa cutter" but clarified they meant "chop saw" - industrial metal cut-off saws with TCT blades

### Added On/Off Valves Product Group to Valves-Actuators Subcategory
- Created "On/Off Valves" product group with comprehensive description covering quarter-turn actuation and industrial shut-off service
- Added 6 real on/off valves from leading manufacturers:
  1. **Fisher V150 Vee-Ball** - V-notch ball valve, NPS 1-12, ASME Class 150/300, splined shaft for rotary actuators
  2. **Fisher V280** - Full-bore trunnion ball valve, up to CL900, noise attenuation, fire-safe, NACE compliant
  3. **Flowserve Worcester F519** - ASA150 flanged ball valve, 1/2"-8", BS 5351/API 6D approved, ISO 5211 actuator mounting
  4. **Flowserve Worcester Series 44** - Three-piece ball valve, ANSI B16.34, bubble-tight shutoff, advanced seal technology
  5. **Swagelok SS-43GS4** - One-piece instrumentation ball valve, 3,000 PSI, -65°F to 300°F, enhanced thermal cycling
  6. **Burkert Type 2655** - 3-piece pneumatic ball valve, Type 2050 rotary actuator, ISO 5211, DN 8-50
- All products include size, pressure ratings, valve type, actuator details, and manufacturer datasheet URLs

### Added HART Calibrator Products to Calibration Equipment
- Created "HART Calibrators" product group with comprehensive description covering HART communication protocol support
- Added 6 real HART calibrator products from leading manufacturers (Fluke, Beamex, Emerson)
- All products include real manufacturer specifications, HART protocol versions, and datasheet URLs

### Added Four New Product Groups to Multimeters Subcategory
1. **Earth Resistance Testers** (3 products)
   - Fluke 1623-2 GEO - Stakeless, 3-point, 4-point testing methods
   - Fluke 1625-2 GEO - Advanced with Automatic Frequency Control and R* measurement
   - Megger DET4TC2 - 4-terminal with ART and multiple test frequencies

2. **Phase Sequence Checkers** (3 products)
   - Fluke 9040 - Phase rotation indicator with LCD display
   - Hioki PD3259 - Digital phase detector with Bluetooth connectivity
   - Hioki PD3129-10 - Non-contact phase detector (CAT III 1000V rated)

3. **Digital Megohmmeters** (4 products)
   - Fluke 1507 - Entry-level insulation resistance tester (up to 1000V)
   - Fluke 1587 FC - 2-in-1 insulation multimeter with Fluke Connect
   - Megger MIT525 - 5kV insulation tester with data logging
   - Megger MIT1025 - 10kV professional tester (IEEE 43:2000 compliant)

4. **Milliampere Source Meters** (4 products)
   - Fluke 707 - Loop calibrator with one-handed operation
   - Fluke 715 - Volt/mA calibrator with ramp functions
   - Fluke 773 - Milliamp clamp meter (no loop breaking required)
   - Dwyer CL309A - 4-20mA loop calibrator with 24V loop supply

**All products sourced from web research of current market offerings (2024-2025)**

## Previous Changes (September 27, 2025)
- Successfully imported GitHub project and configured for Replit environment
- Installed all required dependencies (npm install completed successfully)
- Fixed tsx command issue by proper dependency installation
- Configured Vite development server for proper host binding (0.0.0.0:5000)
- Set up workflow for frontend application on port 5000 with webview output
- Configured deployment settings for autoscale production deployment
- **FIXED CRITICAL BUG**: Products dropdown menu hover behavior bug where popup would remain open after mouse left the popup area
- Updated `handlePopupLeave` function to properly check if popup itself is still hovered before closing
- Improved mouse event coordination between subcategory triggers, dropdown area, and popup menus
- Enhanced timeout management (280ms delays) and added comprehensive data attributes for event tracking
- Project is now fully imported and running successfully with all systems operational
- Translation system working (minor i18n warnings for missing product translations are non-critical)

## Project Architecture
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **Internationalization**: i18next with multiple language support
- **Routing**: Wouter for client-side routing
- **UI Components**: Radix UI components with custom styling
- **Build System**: Vite with TypeScript support
- **Server**: Custom Node.js launcher that starts Vite dev server

## Key Features
- Multi-language support (10+ languages)
- Responsive design for all devices
- Product catalog with categorization
- Service pages and project showcase
- Contact forms and quote requests
- Professional industrial design theme
- SEO optimized with proper meta tags

## Technical Stack
- **React 18.3.1** - Main frontend framework
- **TypeScript 5.9.2** - Type safety
- **Vite 5.4.19** - Build tool and dev server
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **i18next 25.5.2** - Internationalization
- **Framer Motion 11.18.2** - Animations
- **Lucide React 0.453.0** - Icon library
- **Wouter 3.7.1** - Client-side routing

## Project Structure
```
├── client/                     # Frontend React application
│   ├── src/
│   │   ├── components/         # Reusable React components
│   │   │   ├── forms/         # Contact and application forms
│   │   │   ├── layout/        # Header, footer, layout components
│   │   │   ├── sections/      # Page sections (hero, about, etc.)
│   │   │   └── ui/            # shadcn/ui components
│   │   ├── pages/             # Route pages
│   │   ├── lib/               # Utility functions and route registry
│   │   ├── hooks/             # Custom React hooks
│   │   ├── data/              # Static data and constants
│   │   └── assets/            # Static assets and images
│   ├── public/
│   │   ├── locales/           # Translation files for i18n
│   │   └── PHPMailer/         # Server-side email handling
│   └── vite.config.ts         # Vite configuration
├── server/
│   └── index.ts               # Development server launcher
├── attached_assets/           # Project assets
│   ├── downloaded_images/     # Company logos and QR codes
│   └── generated_images/      # Generated product/service images
└── package.json               # Project dependencies and scripts
```

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check` - TypeScript type checking

## Environment Configuration
- **Development**: Vite dev server on 0.0.0.0:5000
- **Production**: Vite preview server on 0.0.0.0:5000
- **Host Configuration**: Properly configured for Replit proxy with `allowedHosts: true`

## Deployment
- **Target**: Autoscale deployment for static frontend
- **Build**: `cd client && npm run build`
- **Start**: `cd client && npx vite preview --host 0.0.0.0 --port 5000`

## User Preferences
- Clean, professional design appropriate for industrial/engineering business
- Multi-language support for international clients
- Mobile-responsive design for accessibility
- Fast loading times with optimized assets