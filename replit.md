# Powerton Engineering - Industrial Automation Platform

## Overview

This platform is a business website for Powerton Engineering Pvt. Ltd., focusing on industrial automation and electrical engineering. Its purpose is to showcase services, products, and projects, generate leads through contact forms, quote requests, and an integrated chatbot, and inform about the company's engineering capabilities. The project's ambition is to provide a lean, high-performance, pure frontend React application that maintains 100% functionality and professional quality for business inquiries. The website has been fully localized for the Indian market with rupee currency symbols throughout.

## User Preferences

Preferred communication style: Simple, everyday language.
Operating System: Windows 11 - PC setup optimized for Windows development environment.
Hosting Goal: Deploy to Hostinger Premium hosting service for production website.
PC Deployment: User wants to run this project locally on their personal computer for development and testing.
Logo preference: Use the updated single Powerton Engineering logo (mainlogopowerton (1)_1755674514195.png) throughout the website for both light and dark modes.
Localization: Website localized for Indian market with rupee (₹) currency symbols instead of dollars ($).
Maps Integration: All Google Maps links throughout the website use consistent redirection URL (https://maps.app.goo.gl/jiap3sBYbM3r8Pn68) for unified user experience.
**TOPBAR LOCK**: The header topbar is FINAL and PERFECT. NO changes are allowed to the topbar anymore. The topbar includes phone, email, theme toggle, and address sections with their specific hover effects and color schemes.

### AI Agent Guidelines for Future Development

### CRITICAL RULES - ALL AI AGENTS MUST FOLLOW

#### 1. Image Management System (MANDATORY)
- ALL images must have unique IDs in alt attributes: `alt="ID-[unique-id]: [descriptive text]"`
- Before adding ANY image, assign it a unique ID from available ranges.
- When adding new images, use next available range and UPDATE this documentation immediately.

#### 2. Color Scheme Enforcement (MANDATORY)
- PRIMARY BRAND COLOR: `hsl(215, 89%, 33%)` (Blue) - Use for headers, buttons, links, brand elements
- SECONDARY BRAND COLOR: `hsl(20, 91%, 48%)` (Orange) - Use for accents, CTAs, highlights
- FORBIDDEN: Never use hardcoded colors like `#3B82F6`, `gray-500`, etc.
- REQUIRED: Always use Tailwind CSS theme variables: `bg-primary`, `text-primary`, `bg-secondary`, `text-secondary`
- TEXT COLORS: Use theme-aware variants: `text-foreground`, `text-muted-foreground`, `text-accent-foreground`
- BACKGROUNDS: Use semantic colors: `bg-background`, `bg-muted`, `bg-accent`
- CONTRAST: All color combinations must meet WCAG accessibility standards

#### 3. UI Consistency Standards (MANDATORY)

**Typography Hierarchy**:
- Page Titles: `text-4xl md:text-5xl lg:text-6xl font-bold text-foreground`
- Section Titles: `text-3xl md:text-4xl font-bold text-foreground`
- Subsection Titles: `text-xl md:text-2xl font-semibold text-foreground`
- Body Text: `text-base md:text-lg text-muted-foreground`
- Captions: `text-sm text-muted-foreground`

**Spacing System**:
- Section Padding: `py-12 md:py-16 lg:py-20`
- Container Padding: `px-4 md:px-6 lg:px-8`
- Card Spacing: `p-6 md:p-8`
- Element Gaps: `gap-4 md:gap-6 lg:gap-8`

**Grid Layouts**:
- Cards: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- Features: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8`
- Two Column: `grid grid-cols-1 lg:grid-cols-2 gap-12`

**Button System**:
- Primary: `bg-primary hover:bg-primary/90 text-primary-foreground`
- Secondary: `bg-secondary hover:bg-secondary/90 text-secondary-foreground`
- Outline: `border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground`

**Card Components**:
- Base: `bg-card border border-border rounded-lg p-6 shadow-sm`
- Hover Effect: `hover:shadow-md hover:scale-[1.02] transition-all duration-300`
- Interactive: `cursor-pointer hover:border-primary/50`

## System Architecture

The project is a pure frontend-only React application.

### Frontend Architecture
- **Framework**: React 18 with TypeScript/JSX.
- **Routing**: Wouter for client-side routing.
- **Styling**: Tailwind CSS with a custom design system and shadcn/ui components.
- **State Management**: React useState/useEffect only.
- **Form Handling**: React Hook Form with Zod validation + Formspree submission.
- **Build Tool**: Vite for production static builds.
- **Components**: Frontend-only forms and chatbot with static responses.
- **UI/UX Decisions**: Professional blurred background imagery across sections (Hero, Contact), auto-sliding testimonials carousel, enhanced project portfolio with filtering and search, and streamlined navigation.
- **Design System**: Utilizes shadcn/ui components.
- **Layout System**: Shared responsive Header and Footer components.
- **Frontend-Only Form System**: Pure React forms with external submission (`FrontendContactForm`, `FrontendQuoteForm`) providing static responses and contact information on submission.
- **Static Chatbot System**: Keyword-based responses with no backend dependencies, professional answers, and direct contact integration.
- **SEO Components**: Structured data and meta tag management.
- **Responsive Design**: Mobile-first approach.
- **Scroll Animations**: Custom scroll-triggered animations using Intersection Observer API.
- **Animation System**: Smooth transitions and entrance animations with Tailwind CSS.

### Backend Architecture
- **Status**: Pure frontend with zero backend dependencies.
- **Forms**: Direct submission to Formspree (external service).
- **Chatbot**: Static keyword-based responses (no AI backend).
- **Data Storage**: Browser localStorage only for temporary data.
- **Deployment**: Pure static files (HTML, CSS, JS).

## External Dependencies

### Core Framework Dependencies
- **@tanstack/react-query** (Not used, but listed as an original dependency - *Note: This was removed per optimization notes in original, but keeping here as it was listed*)

### UI and Styling
- **@radix-ui/**: Accessible UI primitives.
- **tailwindcss**: Utility-first CSS framework.
- **class-variance-authority**: Component variant management.
- **lucide-react**: Icon library.

### Form and Validation
- **react-hook-form**: Form library.
- **@hookform/resolvers**: Integration for validation.
- **zod**: Schema validation.

### Development Tools
- **typescript**: Static type checking.
- **vite**: Fast build tool.
- **@replit/vite-plugin-**: Replit-specific development tools.

### Third-Party Integrations
- **Formspree**: For form submissions.
- **Google Fonts**: Inter, Architects Daughter, DM Sans, Fira Code, Geist Mono.
- **Unsplash**: For stock photography.