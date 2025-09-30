# Powerton Engineering Website

## Project Overview
This is a React-based business website for Powerton Engineering Pvt. Ltd., a company specializing in industrial automation, electrical components, instrumentation, and engineering services. The website features a multi-language interface (English, Hindi, Arabic, Spanish, French, and more) and showcases the company's products, services, and projects.

## Recent Changes (September 30, 2025)
- **Added HART Calibrator Products**: New product group added to Calibration Equipment subcategory
  - Created "HART Calibrators" product group with comprehensive description covering HART communication protocol support
  - Added 6 real HART calibrator products from leading manufacturers:
    - Fluke 754 Documenting Process Calibrator with HART (HART 5, 6, 7 support)
    - Fluke 709H Precision Loop Calibrator with HART (data logging capability)
    - Fluke 154 HART Field Communicator (Android tablet-based with WirelessHART)
    - Beamex MC6 Advanced Field Calibrator (modular system with intrinsically safe version)
    - Emerson AMS Trex Communicator (current generation HART communicator)
    - Emerson AMS 475 Field Communicator (legacy product for reference)
  - All products include real manufacturer specifications, HART protocol versions, and datasheet URLs
  - Products sourced from web research of current market offerings (2024-2025)

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