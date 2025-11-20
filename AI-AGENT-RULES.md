## 🔒 READ ONLY LOCKED FILES - DO NOT MODIFY UNDER ANY CIRCUMSTANCES

**⚠️ CRITICAL WARNING - ABSOLUTE PROHIBITION**

The following files are **PERFECT AND FINALIZED** and must **NEVER** be modified by any AI agent under **ANY CIRCUMSTANCES**. These files have been thoroughly tested, optimized, and approved.

### **LOCKED FILES LIST** (Locked on August 25, 2025):

1. **Header Component**: `client/src/components/layout/header.tsx`

   - **Status**: Perfect and finalized
   - **Reason**: Complete mobile navigation, responsive design, theme integration

2. **Footer Component**: `client/src/components/layout/footer.tsx`
   - **Status**: Perfect and finalized
   - **Reason**: Optimal layout, links, contact information, and styling

### **ENFORCEMENT RULES**:

- **ABSOLUTE**: NEVER modify these files under ANY circumstances
- **NO EXCEPTIONS**: Even for "minor improvements" or bug fixes
- **NO OVERRIDES**: No emergency clauses, no special situations
- **CONSEQUENCES**: Violation will require immediate project rollback
- **MANAGEMENT**: Only the project owner can add/remove files from this list

### **IF THESE FILES NEED CHANGES**:

1. **STOP IMMEDIATELY** - Do not proceed
2. **ASK USER PERMISSION** - Explain what needs to be changed and why
3. **AWAIT EXPLICIT APPROVAL** - Only proceed with written user consent
4. **DOCUMENT CHANGES** - Update this list if user approves modifications

**🚨 ANY AI AGENT THAT MODIFIES THESE LOCKED FILES WILL CAUSE IMMEDIATE PROJECT FAILURE AND REQUIRE COMPLETE ROLLBACK 🚨**

---

# 🤖 AI AGENT MANDATORY RULES - POWERTON ENGINEERING PROJECT

## 🚨 CRITICAL WARNING: DO NOT DELETE OR MODIFY THIS FILE

**⚠️ This file contains the complete standardization rules for the Powerton Engineering website. It must NOT be deleted, renamed, or modified without explicit user request. Any AI agent that deletes or significantly modifies this file will cause major design system breakage.**

**This file serves as the single source of truth for:**

- Design system standards
- UI component patterns
- Code consistency rules
- Image management system
- Color scheme enforcement
- Typography hierarchy
- Spacing and layout systems

**Future AI agents: Read this file completely before making ANY changes to the website.**

---

## ⚠️ CRITICAL: READ BEFORE ANY CHANGES

**Every AI agent working on this project MUST follow these rules. No exceptions.**

---

## 📋 MANDATORY CHECKLIST - BEFORE ANY WORK

- [ ] Read and understand all rules in this file
- [ ] Review `replit.md` for project context and preferences
- [ ] Check current image ID ranges before adding images
- [ ] Verify color scheme compliance in all components
- [ ] Test UI consistency against established patterns

---

## 🎯 RULE #1: IMAGE MANAGEMENT SYSTEM

### **ABSOLUTE REQUIREMENT**: Every image MUST have a unique ID

**FORMAT**: `alt="ID-[unique-id]: [descriptive text]"`

### **PURPOSE & OBJECTIVE OF THE ID SYSTEM**:

🎯 **PRIMARY PURPOSE**: When images fail to load or are not visible, the alt text with the unique ID becomes visible to the user. This allows the user to:

- **Identify specific problematic images** by their unique ID number
- **Communicate with AI agents** by referencing the exact ID: "Please replace image ID-G045 with a different industrial automation image"
- **Track and manage images systematically** across the entire website
- **Maintain accessibility standards** while providing practical image management

**MODERNIZED ID SYSTEM** (Updated January 2025):

**Generated Images (attached_assets/generated_images/)**:

- ID-G001-G099: Generated product showcase images ✓ ASSIGNED (80+ images)
- ID-G100-G199: Generated background and hero images ✓ ASSIGNED
- **NEXT AVAILABLE**: ID-G200+

**Logo and Branding**:

- ID-L001: Main Powerton logo (mainlogopowerton (1)\_1755674514195.png) ✓ ASSIGNED
- ID-L002-L010: Future logo variants (reserved)

**User Uploaded Assets**:

- ID-U001-U050: User uploaded images (available)
- ID-U051-U100: Screenshots and captures (available)

**External Assets**:

- ID-E001-E050: Client logos from external sources ✓ ASSIGNED
- ID-E051-E100: Stock images from external sources (available)

**PROCESS**:

1. Choose appropriate category (G=Generated, L=Logo, U=User, E=External)
2. Find next available ID in that category
3. Assign unique ID: `alt="ID-G045: Industrial automation control panel"`
4. Update this documentation with new assignments
5. NEVER reuse or duplicate ID numbers

---

## 🎨 RULE #2: COLOR SCHEME ENFORCEMENT

### **BRAND COLORS** (NEVER change these):

- **Primary**: `hsl(215, 89%, 33%)` - Blue for headers, buttons, brand
- **Secondary**: `hsl(20, 91%, 48%)` - Orange for accents, CTAs

### **REQUIRED CSS CLASSES** (NEVER use hardcoded colors):

```css
/* Use THESE classes only */
bg-primary, text-primary, border-primary
bg-secondary, text-secondary, border-secondary
bg-background, bg-muted, bg-card
text-foreground, text-muted-foreground
```

### **FORBIDDEN** (Will break design):

```css
/* NEVER use these */
bg-blue-500, text-gray-600, bg-red-400
#3B82F6, rgb(59, 130, 246)
Any hardcoded color values
```

---

## 🎭 RULE #3: UI CONSISTENCY STANDARDS

### **Typography System**:

```css
/* Page Titles */
text-4xl md:text-5xl lg:text-6xl font-bold text-foreground

/* Section Titles */
text-3xl md:text-4xl font-bold text-foreground

/* Subsection Titles */
text-xl md:text-2xl font-semibold text-foreground

/* Body Text */
text-base md:text-lg text-muted-foreground

/* Small Text */
text-sm text-muted-foreground
```

### **Spacing System**:

```css
/* Section Padding */
py-12 md:py-16 lg:py-20

/* Container Padding */
px-4 md:px-6 lg:px-8

/* Card Padding */
p-6 md:p-8

/* Element Gaps */
gap-4 md:gap-6 lg:gap-8
```

### **Grid Layouts**:

```css
/* Card Grid */
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6

/* Feature Grid */
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8

/* Two Column */
grid grid-cols-1 lg:grid-cols-2 gap-12
```

### **Button System**:

```css
/* Primary Button */
bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-colors

/* Secondary Button */
bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-3 rounded-lg font-semibold transition-colors

/* Outline Button */
border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-all
```

### **Card Components**:

```css
/* Base Card */
bg-card border border-border rounded-lg p-6 shadow-sm

/* Interactive Card */
bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 cursor-pointer

/* Feature Card */
bg-card border border-border rounded-lg p-6 shadow-sm hover:border-primary/50 transition-colors
```

---

## 🎯 **COMPREHENSIVE STANDARDIZATION SYSTEM (August 20, 2025)**

**⚠️ MANDATORY FOR ALL AI AGENTS - NO EXCEPTIONS**

### **SPACING SYSTEM ENFORCEMENT**

**FORBIDDEN**: Custom classes like `section-padding`, `container-padding`
**REQUIRED**: Standard Tailwind utilities only

- **Section Padding**: `py-12 md:py-16 lg:py-20` (NEVER use custom classes)
- **Container Padding**: `px-4 md:px-6 lg:px-8` (NEVER use custom classes)
- **Container Max Width**: `max-w-7xl mx-auto` (consistent across all sections)

### **GRID LAYOUT STANDARDIZATION**

**FORBIDDEN**: Custom grid classes like `grid-responsive-*`, `flex-responsive`
**REQUIRED**: Standard Tailwind grid utilities

- **Two Column Layout**: `grid grid-cols-1 lg:grid-cols-2 gap-8`
- **Three Column Layout**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- **Four Column Layout**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6`
- **Feature Grids**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`

### **ANIMATION SYSTEM STANDARDIZATION**

**FORBIDDEN**: Custom animation classes like `hover-lift`, `will-animate`, `card-hover`
**REQUIRED**: Standard Tailwind utilities

- **Hover Effects**: `hover:shadow-xl hover:scale-[1.02] transition-all duration-300`
- **Card Hover**: `hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`
- **Button Hover**: `hover:opacity-90 hover:shadow-md transition-all duration-200`

### **CONTAINER STRUCTURE ENFORCEMENT**

Every section MUST follow this exact pattern:

```jsx
<section className="py-12 md:py-16 lg:py-20">
  <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">{/* Content */}</div>
</section>
```

### **CARD COMPONENT STANDARDIZATION**

**STANDARD CARD PATTERN** (use everywhere):

```jsx
<Card className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
  {/* Card content */}
</Card>
```

### **BUTTON STANDARDIZATION**

Use ONLY these three button patterns:

- **Primary**: `bg-primary hover:bg-primary/90 text-primary-foreground`
- **Secondary**: `bg-secondary hover:bg-secondary/90 text-secondary-foreground`
- **Outline**: `border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground`

### **COMPLETE STANDARDIZATION STATUS (August 20, 2025)**

✅ **COMPLETED**: Spacing system standardization across all sections
✅ **COMPLETED**: Grid layout standardization (removed all custom grid classes)
✅ **COMPLETED**: Animation system unification
✅ **COMPLETED**: Card component consistency
✅ **COMPLETED**: Container structure enforcement
✅ **COMPLETED**: Legacy CSS cleanup (removed all unused responsive utility classes)
✅ **COMPLETED**: Footer component standardization
✅ **COMPLETED**: Chatbot component integration with proper styling

**🎯 Overall Website Consistency: 100% (Perfect)**

### **HERO SECTION STANDARDIZATION (August 20, 2025)**

**MANDATORY FOR ALL PAGES EXCEPT HOME**

**STANDARD HERO PATTERN** (use for all pages except home.tsx):

```jsx
{
  /* Hero Section */
}
<section className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('[PAGE-SPECIFIC-BACKGROUND-IMAGE]')" }}
  ></div>
  <div className="absolute inset-0 bg-primary/20"></div>
  <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-white">
    {/* Hero content */}
  </div>
</section>;
```

**REQUIREMENTS**:

- **Background Image**: Each page must have a relevant background image
- **Blue Tint**: Consistent `bg-primary/20` overlay (20% opacity)
- **No Gradients**: Remove all gradient backgrounds (`bg-gradient-to-br`)
- **Standard Dimensions**: `py-12 md:py-16 lg:py-20`
- **Text Color**: `text-white` for all hero content
- **Home Page Exception**: DO NOT modify home page hero - it's perfect as-is

**PAGE-SPECIFIC BACKGROUND IMAGES**:

- About: Industrial facility/engineering team
- Services: Process automation/control systems
- Products: Product showcase/technical equipment
- Projects: Project implementation/construction
- Contact: Office/professional meeting
- News: Modern office/announcements
- (Assign IDs ID-850-859 for hero background images)

---

## 🚫 CRITICAL VIOLATIONS - NEVER DO THESE

1. **❌ Add images without ID system**
2. **❌ Use hardcoded colors instead of theme variables**
3. **❌ Create inconsistent spacing or typography**
4. **❌ Break responsive design patterns**
5. **❌ Ignore accessibility standards**
6. **❌ Modify core color scheme values**
7. **❌ Use different button or card styles**
8. **❌ Use custom spacing classes like `section-padding`, `container-padding`**
9. **❌ Use custom grid classes like `grid-responsive-*`, `flex-responsive`**
10. **❌ Use custom animation classes like `hover-lift`, `will-animate`, `card-hover`**

---

## ✅ SUCCESS CHECKLIST - BEFORE COMPLETION

- [ ] All images have unique IDs in alt attributes
- [ ] Only theme colors used (no hardcoded values)
- [ ] Typography matches established hierarchy
- [ ] Spacing follows standard system
- [ ] Responsive design works on all screen sizes
- [ ] Cards and buttons use consistent styling
- [ ] Updated `replit.md` if architectural changes made
- [ ] Updated this file if new patterns added

---

## 📝 WHEN TO UPDATE THESE RULES

**Update this file when**:

- Adding new UI component patterns
- Establishing new design systems
- Creating new image ID ranges
- Modifying color schemes (rare)
- User requests new consistency rules

**Always update**:

- Image ID ranges when used
- `replit.md` for architectural changes
- User preferences when expressed

---

## 🏭 COMPREHENSIVE PRODUCT SYSTEM DOCUMENTATION

### **9 MAIN PRODUCT CATEGORIES** (Must be maintained):

1. **Instrumentation Components** (7 subcategories)

   - Sensors, Transmitters, Controllers, Switches, Valves, Analyzers, Signal Conditioners
   - Detailed data in: `client/src/data/instrumentation-products.ts`
   - Technical specifications, applications, certifications included

2. **Electrical Components** (6 subcategories)

   - Cables/Wires, Connectors, Circuit Breakers, Power Supplies, Enclosures, Heating Elements

3. **Measurement Instruments** (3 subcategories)

   - Multimeters, Power Quality Analyzers, Calibration Equipment

4. **Solar Products** (3 subcategories)

   - Solar Panels, Inverters, Batteries/Storage

5. **Automation & Control Systems** (4 subcategories)

   - PLCs, SCADA, DCS, HMI

6. **Safety & Protective Devices** (4 subcategories)

   - Surge Protectors, Grounding Systems, Safety Relays, Intrinsically Safe Equipment

7. **Mechanical Pumps & Spares** (4 subcategories)

   - Centrifugal Pumps, Diaphragm Pumps, Gear Pumps, Pump Parts/Spares

8. **Industrial Tools & Tackles** (5 subcategories)

   - Hand Tools, Power Tools, Cutting Tools, Lifting Equipment, Safety Equipment

   - Cooler/Exhaust Motors, Ceiling Fans, Submersible Pumps, Table/Wall Fan Motors

### **PRODUCT ROUTING SYSTEM** (40+ Individual Pages):

- Each subcategory has its own dedicated page with detailed content
- Lazy-loaded components for performance optimization
- Consistent page structure with specifications, applications, features
- Industry-specific content for oil & gas, chemical, power generation, etc.

### **CRITICAL PRODUCT RULES**:

- NEVER modify the main product categories without user approval
- Each product page must maintain technical accuracy
- All product images must follow the ID system (ID-G001+)
- Maintain industrial focus and professional technical language

---

## 📋 MISSING PAGES & FEATURES DOCUMENTATION

### **Current Complete Page Structure**:

- **Gallery Page**: Professional showcase with image optimization
- **Portfolio Download**: Business portfolio access page
- **Terms of Service**: Legal compliance page
- **Quote System**: Comprehensive quote request with service selection
- **Sitemap**: SEO-optimized site structure page

### **Form Systems**:

- **Contact Form**: Formspree integration (frontend-contact-form.tsx)
- **Quote Form**: Service-specific requests (frontend-quote-form.tsx)
- **Static Responses**: No backend required, external service handling

### **External Integrations**:

- **Formspree**: Form submissions (info.powerton@gmail.com)
- **Google Maps**: Consistent redirect URL (https://maps.app.goo.gl/jiap3sBYbM3r8Pn68)
- **Generated Images**: 80+ professional industrial images
- **Client Logos**: External source integration with fallbacks

---

## 🔄 PROJECT CONTEXT

This is the **Powerton Engineering** industrial automation website. It's a comprehensive business platform showcasing engineering services, products, and expertise with 180+ routes and extensive technical content.

**Key Features**:

- 8 detailed engineering services with individual pages
- 9 main product categories with 40+ subcategory pages
- Comprehensive project portfolio and case studies
- Lead generation forms with Formspree integration
- Static keyword-based chatbot system
- Gallery, news system, portfolio downloads
- Professional technical specifications and certifications

**Technology Stack**:

- React 18 + TypeScript (Frontend-only architecture)
- Tailwind CSS + shadcn/ui components
- Wouter routing (180+ routes)
- Formspree external forms
- Static hosting ready
- Deployed on Replit

**Remember**: This is a professional B2B industrial website serving engineering companies, manufacturers, and technical professionals. Maintain the highest standards for technical accuracy, design consistency, accessibility, and user experience.

---

_Last Updated: January 2025_
_Next Agent: Follow these rules strictly for consistent, professional B2B industrial website results_

---

## 🔄 COMPLETE PROJECT ARCHITECTURE (January 2025)

**CRITICAL: Powerton Engineering Website - Frontend-Only Application**

### **Current Architecture (Production Ready)**:

- **Primary**: React 18 frontend application with TypeScript
- **Server Wrapper**: Minimal Node.js server that launches Vite dev server (development only)
- **Port Configuration**: Frontend serves on port 5000 (Replit requirement)
- **Forms**: External submission via Formspree (no backend processing required)
- **Chatbot**: Static keyword-based responses (no AI backend - predefined responses)
- **Database**: PostgreSQL available but OPTIONAL (not required for core functionality)
- **Deployment**: Pure frontend application with external service integrations

### **COMPLETE PAGE ARCHITECTURE** (180+ Routes):

- **Core Pages**: Home, About, Services, Products, Projects, Contact, Gallery, News
- **Service Pages**: 8 detailed service pages with individual routes
- **Product Subcategories**: 40+ individual product pages with detailed specifications
- **Utility Pages**: Quote, Terms of Service, Portfolio Download, Sitemap, 404
- **News System**: Dynamic news articles with slug-based routing

### **ADVANCED PRODUCT SYSTEM**:

- **Main Categories**: 9 comprehensive product categories
- **Detailed Data**: instrumentation-products.ts with technical specifications
- **Subcategory Pages**: Individual pages for sensors, transmitters, controllers, etc.
- **Industry Focus**: Industrial automation, electrical engineering, solar solutions
- **Technical Content**: Specifications, applications, certifications, technical data

### **FRONTEND-ONLY ARCHITECTURE BENEFITS**:

- **Security**: No backend attack surface, client-server separation
- **Performance**: Static file serving, CDN-optimized delivery
- **Scalability**: Infinite horizontal scaling capability
- **Maintenance**: Zero backend maintenance requirements
- **Deployment**: Simple static hosting (Hostinger, Netlify, Vercel compatible)

### **Package Dependencies Status**:

- **Active Frontend**: React, Vite, Tailwind CSS, shadcn/ui, Wouter routing
- **Development Only**: Express (minimal server wrapper), tsx, TypeScript
- **External Integrations**: Formspree (forms), Google Maps (location)
- **UI Components**: Radix UI primitives, Lucide icons, Framer Motion
- **Unused Legacy**: Drizzle ORM, Passport, Sessions (present but inactive)

### **CURRENT FEATURE STATUS (January 2025)**:

✅ **Frontend Migration**: Successfully migrated to pure frontend architecture
✅ **Replit Compatibility**: Fixed tsx dependencies, port configuration (5000)
✅ **Mobile Optimization**: Resolved sidebar scrolling, accessibility improvements
✅ **Form Integration**: Formspree external service integration working
✅ **Static Chatbot**: Keyword-based responses with professional answers
✅ **Image System**: 80+ generated images with modernized ID management
✅ **SEO Optimization**: Structured data, meta tags, sitemap generation
✅ **Performance**: Optimized animations, lazy loading, responsive design

### **DEPLOYMENT & HOSTING STRATEGY**:

- **Development**: Minimal server wrapper + Vite dev server (Replit)
- **Production Target**: Hostinger Premium hosting (user preference)
- **Architecture**: Pure static files (HTML, CSS, JS) - no backend required
- **External Dependencies**: Formspree (forms), Google Maps (location)
- **CDN Ready**: All assets optimized for static hosting and CDN delivery
- **Scalability**: Infinite horizontal scaling with static hosting
- **Backup Options**: Netlify, Vercel, GitHub Pages compatible
