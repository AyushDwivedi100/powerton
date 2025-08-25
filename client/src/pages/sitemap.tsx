import { SEO } from "@/lib/seo";
import { Link } from "wouter";
import { 
  Building2, 
  FileText, 
  Mail, 
  Package, 
  Settings, 
  Newspaper, 
  Calculator, 
  MapPin,
  Home as HomeIcon,
  User,
  Wrench,
  Briefcase,
  FolderOpen,
  Phone,
  Quote,
  Download,
  Shield,
  FileStack,
  ChevronRight,
  Globe,
  Zap,
  Gauge,
  Cpu,
  Hammer,
  Sun,
  Truck,
  ShieldCheck,
  Cog,
  Factory,
  Camera,
  TreePine
} from "lucide-react";

export default function Sitemap() {
  const sitePages = [
    {
      section: "Main Pages",
      icon: <HomeIcon className="w-5 h-5 text-primary" />,
      pages: [
        { path: "/", label: "Home", description: "Welcome to Powerton Engineering - Industrial Automation Solutions" },
        { path: "/about", label: "About Us", description: "Learn about our company, mission, and expertise" },
        { path: "/contact", label: "Contact", description: "Get in touch with our engineering team" },
        { path: "/gallery", label: "Gallery", description: "View our project gallery and installations" }
      ]
    },
    {
      section: "Services & Projects",
      icon: <Settings className="w-5 h-5 text-primary" />,
      pages: [
        { path: "/services", label: "Our Services", description: "Industrial automation and electrical engineering services" },
        { path: "/service-detail", label: "Service Details", description: "Detailed information about specific services" },
        { path: "/projects", label: "Projects", description: "Portfolio of completed industrial automation projects" }
      ]
    },
    {
      section: "Product Categories",
      icon: <Package className="w-5 h-5 text-primary" />,
      pages: [
        { path: "/products", label: "All Products", description: "Complete catalog of industrial automation products" }
      ],
      children: [
        {
          category: "Automation & Control Systems",
          icon: <Factory className="w-4 h-4 text-blue-600" />,
          pages: [
            { path: "/product-automation-control-systems", label: "Automation Control Systems", description: "Industrial automation and control solutions" },
            { path: "/product-dcs", label: "DCS (Distributed Control Systems)", description: "Advanced distributed control systems" },
            { path: "/product-hmi", label: "HMI (Human Machine Interface)", description: "Interactive control interfaces" },
            { path: "/product-plcs", label: "PLCs (Programmable Logic Controllers)", description: "Industrial programmable logic controllers" },
            { path: "/product-scada", label: "SCADA Systems", description: "Supervisory control and data acquisition systems" },
            { path: "/product-controllers", label: "Controllers", description: "Various industrial controllers and devices" }
          ]
        },
        {
          category: "BLDC Motor Systems",
          icon: <Zap className="w-4 h-4 text-green-600" />,
          pages: [
            { path: "/product-bldc", label: "BLDC Motors Overview", description: "Brushless DC motor solutions" },
            { path: "/product-bldc-ceiling-fan", label: "BLDC Ceiling Fan Motors", description: "Energy-efficient ceiling fan motors" },
            { path: "/product-bldc-cooler-exhaust-motor", label: "BLDC Cooler & Exhaust Motors", description: "Cooler and exhaust fan motor solutions" },
            { path: "/product-bldc-submersible-surface-pump", label: "BLDC Submersible & Surface Pumps", description: "High-efficiency pump motor systems" },
            { path: "/product-bldc-table-fan-wall-fan-motor", label: "BLDC Table & Wall Fan Motors", description: "Compact fan motor solutions" }
          ]
        },
        {
          category: "Electrical Components",
          icon: <Zap className="w-4 h-4 text-yellow-600" />,
          pages: [
            { path: "/product-electrical-components", label: "Electrical Components Overview", description: "Complete electrical component solutions" },
            { path: "/product-cables-wires", label: "Cables & Wires", description: "Industrial cables and wiring solutions" },
            { path: "/product-circuit-breakers-fuses", label: "Circuit Breakers & Fuses", description: "Electrical protection devices" },
            { path: "/product-connectors-terminals", label: "Connectors & Terminals", description: "Electrical connectors and terminal blocks" },
            { path: "/product-power-supplies", label: "Power Supplies", description: "Industrial power supply units" },
            { path: "/product-surge-protectors", label: "Surge Protectors", description: "Electrical surge protection devices" },
            { path: "/product-grounding-systems", label: "Grounding Systems", description: "Electrical grounding and earthing solutions" },
            { path: "/product-enclosures-cabinets", label: "Enclosures & Cabinets", description: "Electrical enclosures and control cabinets" }
          ]
        },
        {
          category: "Measurement & Instrumentation",
          icon: <Gauge className="w-4 h-4 text-purple-600" />,
          pages: [
            { path: "/product-measurement-instruments", label: "Measurement Instruments", description: "Precision measurement and testing equipment" },
            { path: "/product-analyzers", label: "Analyzers", description: "Advanced analytical instruments" },
            { path: "/product-calibration-equipment", label: "Calibration Equipment", description: "Precision calibration tools and standards" },
            { path: "/product-multimeters", label: "Multimeters", description: "Digital and analog multimeters" },
            { path: "/product-oscilloscopes", label: "Oscilloscopes", description: "Digital oscilloscopes and signal analyzers" },
            { path: "/product-power-quality-analyzers", label: "Power Quality Analyzers", description: "Power quality monitoring equipment" },
            { path: "/product-spectrum-analyzers", label: "Spectrum Analyzers", description: "RF and signal spectrum analyzers" },
            { path: "/product-sensors", label: "Sensors", description: "Industrial sensors and transducers" },
            { path: "/product-transmitters", label: "Transmitters", description: "Signal transmitters and conditioners" },
            { path: "/product-signal-conditioners", label: "Signal Conditioners", description: "Signal conditioning equipment" }
          ]
        },
        {
          category: "Industrial Tools & Equipment",
          icon: <Hammer className="w-4 h-4 text-orange-600" />,
          pages: [
            { path: "/product-industrial-tools-tackles", label: "Industrial Tools & Tackles", description: "Comprehensive industrial tools and equipment" },
            { path: "/product-hand-tools", label: "Hand Tools", description: "Professional hand tools for industrial use" },
            { path: "/product-power-tools", label: "Power Tools", description: "Electric and pneumatic power tools" },
            { path: "/product-cutting-tools", label: "Cutting Tools", description: "Industrial cutting and machining tools" },
            { path: "/product-lifting-equipment", label: "Lifting Equipment", description: "Cranes, hoists, and lifting solutions" }
          ]
        },
        {
          category: "Pumps & Fluid Systems",
          icon: <Truck className="w-4 h-4 text-blue-500" />,
          pages: [
            { path: "/product-centrifugal-pumps", label: "Centrifugal Pumps", description: "Industrial centrifugal pump systems" },
            { path: "/product-diaphragm-pumps", label: "Diaphragm Pumps", description: "Positive displacement diaphragm pumps" },
            { path: "/product-gear-pumps", label: "Gear Pumps", description: "Precision gear pump solutions" },
            { path: "/product-mechanical-pumps-spares", label: "Mechanical Pumps & Spares", description: "Mechanical pump systems and spare parts" },
            { path: "/product-pump-parts-spares", label: "Pump Parts & Spares", description: "Replacement parts and pump accessories" },
            { path: "/product-valves", label: "Valves", description: "Industrial valves and flow control devices" }
          ]
        },
        {
          category: "Solar & Renewable Energy",
          icon: <Sun className="w-4 h-4 text-yellow-500" />,
          pages: [
            { path: "/product-solar-products", label: "Solar Products Overview", description: "Complete solar energy solutions" },
            { path: "/product-solar-panels", label: "Solar Panels", description: "High-efficiency photovoltaic panels" },
            { path: "/product-solar-inverters", label: "Solar Inverters", description: "Grid-tie and off-grid solar inverters" },
            { path: "/product-solar-charge-controllers", label: "Solar Charge Controllers", description: "MPPT and PWM charge controllers" },
            { path: "/product-solar-batteries-energy-storage", label: "Solar Batteries & Energy Storage", description: "Battery storage systems for solar installations" }
          ]
        },
        {
          category: "Safety & Protection",
          icon: <ShieldCheck className="w-4 h-4 text-red-600" />,
          pages: [
            { path: "/product-safety-equipment", label: "Safety Equipment", description: "Industrial safety and protection equipment" },
            { path: "/product-safety-protective-devices", label: "Safety Protective Devices", description: "Personal and equipment protection devices" },
            { path: "/product-safety-relays-switches", label: "Safety Relays & Switches", description: "Safety control relays and emergency switches" },
            { path: "/product-intrinsically-safe-equipment", label: "Intrinsically Safe Equipment", description: "Explosion-proof and intrinsically safe devices" }
          ]
        },
        {
          category: "Structural & Mounting",
          icon: <Building2 className="w-4 h-4 text-gray-600" />,
          pages: [
            { path: "/product-mounting-structures-racking", label: "Mounting Structures & Racking", description: "Industrial mounting and racking systems" },
            { path: "/product-heating-elements-appliances", label: "Heating Elements & Appliances", description: "Industrial heating solutions and appliances" }
          ]
        },
        {
          category: "Network & Communication",
          icon: <Globe className="w-4 h-4 text-indigo-600" />,
          pages: [
            { path: "/product-switches", label: "Network Switches", description: "Industrial Ethernet and network switches" }
          ]
        }
      ]
    },
    {
      section: "Resources & Tools",
      icon: <Calculator className="w-5 h-5 text-primary" />,
      pages: [
        { path: "/quote", label: "Request Quote", description: "Get a detailed quote for your project" },
        { path: "/portfolio-download", label: "Download Portfolio", description: "Download project portfolios and documentation" },
        { path: "/news", label: "News & Updates", description: "Latest news and company updates" },
        { path: "/news-article", label: "News Articles", description: "Individual news articles and updates" }
      ]
    },
    {
      section: "Legal & Information",
      icon: <FileText className="w-5 h-5 text-primary" />,
      pages: [
        { path: "/terms-of-service", label: "Terms of Service", description: "Terms and conditions for using our services" },
        { path: "/sitemap", label: "Sitemap", description: "Complete site navigation and page structure" }
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Sitemap - Powerton Engineering | Complete Website Navigation"
        description="Complete sitemap of Powerton Engineering website. Navigate through all our industrial automation services, products, projects, resources, and engineering solutions. Find any page quickly."
        keywords="sitemap, website navigation, powerton engineering, industrial automation, electrical engineering, products, services, projects, site structure"
        canonicalUrl="https://powertonengineering.in/sitemap"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Sitemap - Powerton Engineering",
          "description": "Complete website navigation and page structure for Powerton Engineering",
          "publisher": {
            "@type": "Organization",
            "name": "Powerton Engineering Pvt. Ltd.",
            "url": "https://powertonengineering.in"
          },
          "mainEntity": {
            "@type": "SiteNavigationElement",
            "name": "Powerton Engineering Website Navigation",
            "description": "Complete navigation structure for industrial automation website"
          }
        }}
      />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Sitemap
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find all pages on our website. Click any page title to visit it directly.
            </p>
          </div>

          {/* Page Sections */}
          <div className="space-y-8">
            {sitePages.map((section, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  {section.icon}
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                    {section.section}
                  </h2>
                </div>
                
                {/* Main Pages for this section */}
                <div className="grid gap-4 mb-6">
                  {section.pages.map((page, pageIndex) => (
                    <Link key={pageIndex} href={page.path}>
                      <div className="group block p-4 rounded-lg border border-border hover:border-primary/20 hover:bg-accent/50 transition-all duration-200 cursor-pointer">
                        <div className="flex items-center gap-4">
                          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                              {page.label}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {page.description}
                            </p>
                          </div>
                          <div className="text-xs text-muted-foreground font-mono bg-muted px-2 py-1 rounded">
                            {page.path}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Product Categories (Children) */}
                {section.children && (
                  <div className="border-t border-border pt-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <TreePine className="w-5 h-5 text-primary" />
                      Product Categories
                    </h3>
                    <div className="space-y-6">
                      {section.children.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="ml-4">
                          {/* Category Header */}
                          <div className="flex items-center gap-3 mb-4 p-3 bg-muted/50 rounded-lg">
                            {category.icon}
                            <h4 className="text-lg font-semibold text-foreground">
                              {category.category}
                            </h4>
                            <div className="flex-1 border-b border-border/30"></div>
                            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                              {category.pages.length} products
                            </span>
                          </div>
                          
                          {/* Category Products */}
                          <div className="ml-6 space-y-2">
                            {category.pages.map((product, productIndex) => (
                              <Link key={productIndex} href={product.path}>
                                <div className="group block p-3 rounded-lg border border-border/50 hover:border-primary/20 hover:bg-accent/30 transition-all duration-200 cursor-pointer">
                                  <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-primary/60 rounded-full group-hover:bg-primary group-hover:scale-125 transition-all"></div>
                                    <div className="flex-1 min-w-0">
                                      <h5 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm leading-tight">
                                        {product.label}
                                      </h5>
                                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                                        {product.description}
                                      </p>
                                    </div>
                                    <div className="text-xs text-muted-foreground font-mono bg-muted/80 px-2 py-1 rounded shrink-0">
                                      {product.path.replace('/product-', '/')}
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mt-12 p-6 bg-muted rounded-lg">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Need Help Finding Something?
            </h3>
            <p className="text-muted-foreground mb-4">
              Can't find what you're looking for? Contact us directly or use our intelligent chatbot available on every page.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <div className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors cursor-pointer">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Us
                </div>
              </Link>
              <Link href="/quote">
                <div className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors cursor-pointer">
                  <Calculator className="w-4 h-4 mr-2" />
                  Request Quote
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}