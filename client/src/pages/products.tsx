import { motion } from "framer-motion";
import { SEO } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  AnimatedSection,
  useScrollAnimations,
} from "@/hooks/use-scroll-animation";
import { getProducts } from "@/data/constants";
import {
  Download,
  ArrowRight,
  Star,
  CheckCircle,
  Thermometer,
  Radio,
  Cpu,
  ToggleLeft,
  Gauge,
  FlaskConical,
  Zap,
  Phone,
  Mail,
} from "lucide-react";
import { Link } from "wouter";
import { getHeroImage } from "@/assets/images";
import { useTranslation } from "react-i18next";

export default function Products() {
  useScrollAnimations();
  const { t } = useTranslation(['common', 'products', 'pages']);
  const PRODUCTS = getProducts(t);

  const getIconComponent = (iconName: string) => {
    const icons = {
      Thermometer,
      Radio,
      Cpu,
      ToggleLeft,
      Gauge,
      FlaskConical,
      Zap,
    };
    return icons[iconName as keyof typeof icons] || Thermometer;
  };

  // Map feature IDs to their corresponding product routes
  const getFeatureRoute = (featureId: string) => {
    const featureRoutes: { [key: string]: string } = {
      // Instrumentation Components features
      "pressure-transmitters": "/products/transmitters",
      "temperature-sensors": "/products/sensors",
      "flow-meters": "/products/analyzers",
      "level-indicators": "/products/switches",

      // Electrical Components features
      "circuit-breakers": "/products/circuit-breakers-fuses",
      "contactors": "/products/electrical-components",
      "relays": "/products/electrical-components",
      "power-supplies": "/products/power-supplies",

      // Measurement Instruments features
      "digital-multimeters": "/products/multimeters",
      "oscilloscopes": "/products/oscilloscopes",
      "signal-analyzers": "/products/spectrum-analyzers",
      "calibrators": "/products/calibration-equipment",

      // Solar Products features
      "solar-panels": "/products/solar-panels",
      "inverters": "/products/solar-inverters",
      "monitoring-systems": "/products/solar-products",
      "battery-storage": "/products/solar-batteries-energy-storage",

      // Automation Control Systems features
      "hmi-systems": "/products/hmi",
      "scada-software": "/products/scada",
      "industrial-networks": "/products/dcs",

      // Safety & Protective Devices features
      "safety-switches": "/products/safety-relays-switches",
      "emergency-stops": "/products/safety-relays-switches",
      "light-curtains": "/products/intrinsically-safe-equipment",
      "protective-barriers": "/products/safety-protective-devices",

      // Mechanical Pumps & Spares features
      "centrifugal-pumps": "/products/centrifugal-pumps",
      "positive-displacement-pumps": "/products/diaphragm-pumps",
      "pump-components": "/products/gear-pumps",
      "maintenance-kits": "/products/pump-parts-spares",

      // Industrial Tools & Tackles features
      "hand-tools": "/products/hand-tools",
      "power-tools": "/products/power-tools",
      "cutting-tools": "/products/cutting-tools",
      "lifting-equipment": "/products/lifting-equipment",

      // BLDC Products features
      "energy-efficient": "/products/bldc",
      "long-lifespan": "/products/bldc-ceiling-fan",
      "low-maintenance": "/products/bldc-submersible-surface-pump",
      "variable-speed-control": "/products/bldc-cooler-exhaust-motor",
    };

    return (
      featureRoutes[featureId] ||
      `/products/${featureId}`
    );
  };

  const productDetails = {
    instrumentation: {
      fullDescription:
        "Comprehensive range of precision instrumentation components for industrial monitoring and control applications.",
      specifications: [
        "High accuracy: ±0.1% to ±0.5%",
        "Operating temperature: -40°C to +85°C",
        "IP65/IP67 protection rating",
        "4-20mA, 0-10V, HART, Profibus outputs",
        "Explosion-proof variants available",
      ],
      applications: [
        "Process Control",
        "Quality Monitoring",
        "Safety Systems",
        "Environmental Monitoring",
      ],
      features: [
        "Smart Diagnostics",
        "Digital Communication",
        "Easy Calibration",
        "Long-term Stability",
      ],
    },
    electrical: {
      fullDescription:
        "Complete range of electrical components including switches, relays, contactors, and power distribution equipment for industrial applications.",
      specifications: [
        "Voltage range: 24V DC to 690V AC",
        "Current ratings: 1A to 1000A",
        "IP54 to IP67 protection",
        "IEC/IS standards compliant",
        "Temperature rated: -25°C to +70°C",
      ],
      applications: [
        "Motor Control",
        "Power Distribution",
        "Switching Applications",
        "Protection Systems",
      ],
      features: [
        "High Reliability",
        "Modular Design",
        "Easy Installation",
        "Maintenance-Free",
      ],
    },
    measurement: {
      fullDescription:
        "Advanced digital meters, analyzers, and calibration equipment for precise measurement and monitoring of electrical and process parameters.",
      specifications: [
        "Accuracy class: 0.1 to 1.0",
        "Display: Digital LCD/LED",
        "Communication: RS485, Ethernet, Wireless",
        "Data logging capability",
        "Multiple parameter measurement",
      ],
      applications: [
        "Power Quality Analysis",
        "Energy Management",
        "Process Monitoring",
        "Compliance Measurement",
      ],
      features: [
        "Real-time Monitoring",
        "Data Analytics",
        "Alarm Management",
        "Remote Access",
      ],
    },
    solar: {
      fullDescription:
        "Complete solar energy solutions including panels, inverters, monitoring systems, and grid-tie equipment for sustainable energy generation.",
      specifications: [
        "Panel efficiency: 19-22%",
        "Power range: 300W to 500W per panel",
        "Inverter efficiency: >98%",
        "25-year warranty on panels",
        "Grid-tie and off-grid solutions",
      ],
      applications: [
        "Rooftop Solar",
        "Ground Mount Systems",
        "Solar Farms",
        "Hybrid Systems",
      ],
      features: [
        "High Efficiency",
        "Weather Resistant",
        "Smart Monitoring",
        "Grid Synchronization",
      ],
    },
    automation: {
      fullDescription:
        "Advanced automation and control systems including PLCs, HMIs, SCADA solutions, and industrial communication devices.",
      specifications: [
        "I/O capacity: 16 to 2048 points",
        "Communication: Ethernet, Profibus, Modbus",
        "Programming: IEC 61131-3 compliant",
        "Operating temperature: 0°C to +60°C",
        "Redundancy options available",
      ],
      applications: [
        "Manufacturing Automation",
        "Process Control",
        "Building Management",
        "Machine Control",
      ],
      features: [
        "Flexible Programming",
        "Scalable Architecture",
        "Diagnostic Tools",
        "Remote Monitoring",
      ],
    },
    safety: {
      fullDescription:
        "Comprehensive safety and protection equipment including circuit breakers, safety relays, emergency stop systems, and protective devices.",
      specifications: [
        "Breaking capacity: 6kA to 100kA",
        "Safety integrity level: SIL 2/3",
        "Response time: <10ms",
        "Multiple protection functions",
        "Arc fault protection available",
      ],
      applications: [
        "Personnel Safety",
        "Equipment Protection",
        "Fire Safety",
        "Emergency Systems",
      ],
      features: [
        "Fail-Safe Operation",
        "Self-Monitoring",
        "Quick Response",
        "Easy Testing",
      ],
    },
    pumps: {
      fullDescription:
        "High-quality mechanical pumps, spare parts, and maintenance kits for various industrial and commercial applications.",
      specifications: [
        "Flow rate: 10 LPM to 5000 LPM",
        "Head: 10m to 500m",
        "Material: Cast iron, SS316, Bronze",
        "Temperature: -20°C to +180°C",
        "Efficiency: up to 85%",
      ],
      applications: [
        "Water Supply",
        "Chemical Processing",
        "HVAC Systems",
        "Industrial Processes",
      ],
      features: [
        "Energy Efficient",
        "Corrosion Resistant",
        "Low Maintenance",
        "Reliable Operation",
      ],
    },
    tools: {
      fullDescription:
        "Professional grade industrial tools, tackles, and maintenance equipment for various engineering and maintenance applications.",
      specifications: [
        "Material: High-grade steel/alloy",
        "Precision: ±0.1mm accuracy",
        "Operating range: Various sizes",
        "Ergonomic design",
        "Certified to international standards",
      ],
      applications: [
        "Maintenance Work",
        "Installation",
        "Calibration",
        "Testing & Commissioning",
      ],
      features: [
        "Durable Construction",
        "Ergonomic Design",
        "Precision Engineering",
        "Multi-Purpose Use",
      ],
    },
  };

  return (
    <>
      <SEO
        title={t('pages:products.seo.title')}
        description={t('pages:products.seo.description')}
        keywords="industrial products, automation equipment, electrical components, instrumentation products, solar panels, industrial pumps, measurement instruments, safety equipment"
        canonicalUrl="https://powertonengineering.in/products"
      />

      {/* Hero Section */}
      <section className="relative hero-fullscreen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat "
          style={{
            backgroundImage: `url(${getHeroImage("products", { preload: true })?.src})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              <span className="text-secondary">{t('products:title')}</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto px-2 sm:px-0">
              {t('products:subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 md:gap-4 max-w-md mx-auto px-2 sm:px-0">
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 text-lg font-semibold w-full sm:w-auto">
                <Download className="mr-2 w-5 h-5" />
                {t('common:buttons.downloadCatalog')}
              </Button>
              <Link href="/quote">
                <Button
                  variant="outline"
                  className="border-2 border-border text-foreground hover:bg-foreground hover:text-background px-8 py-3 text-lg font-semibold w-full sm:w-auto"
                >
                  {t('common:buttons.getQuote')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 sm:mb-6">
                {t('pages:products.sections.industrialProducts')}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-2 sm:px-0">
                {t('products:subtitle')}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {PRODUCTS.map((product, index) => {
              const IconComponent = getIconComponent(product.icon);

              return (
                <AnimatedSection key={product.id} animation="fade-in-up">
                  <motion.div
                    whileHover={{ y: -10, scale: 1.03 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <Card className="h-full group cursor-pointer">
                    <CardContent className="p-4 sm:p-6 md:p-8 h-full flex flex-col items-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <Link href={`/products/${product.id}`} className="block">
                        <h3 className="text-xl font-bold text-foreground mb-3 text-center group-hover:text-primary transition-colors cursor-pointer">
                          {product.title}
                        </h3>
                      </Link>
                      <p className="text-muted-foreground text-center mb-6 flex-grow">
                        {product.description}
                      </p>

                      <div className="space-y-4 mt-auto">
                        <div className="flex flex-wrap gap-2 justify-center min-h-[80px] items-center">
                          {product.features.slice(0, 4).map((feature, idx) => (
                            <Link
                              key={idx}
                              href={getFeatureRoute(`feature-${idx}`)}
                              className="inline-block"
                            >
                              <Badge
                                variant="secondary"
                                className="bg-secondary/10 text-secondary border border-secondary/20 group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-200 cursor-pointer text-sm px-3 py-1"
                                data-testid={`badge-${feature.toLowerCase().replace(/\s+/g, "-")}`}
                              >
                                {feature}
                              </Badge>
                            </Link>
                          ))}
                        </div>

                        <div className="pt-4 border-t border-border">
                          <div className="flex items-center justify-center">
                            <Link href={`/products/${product.id}`}>
                              <Button
                                variant="ghost"
                                className="text-secondary hover:bg-transparent hover:text-secondary p-0"
                              >
                                {t('common:buttons.viewDetails')}{" "}
                                <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">
                                  →
                                </span>
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('pages:products.cta.needExpertSolutions')}
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              {t('pages:products.cta.expertDescription')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 md:gap-4 max-w-md mx-auto px-2 sm:px-0">
              <Link href="/contact">
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 text-lg font-semibold w-full sm:w-auto">
                  <Phone className="mr-2 w-5 h-5" />
                  {t('common:buttons.contactExpert')}
                </Button>
              </Link>
              <Link href="/quote">
                <Button
                  variant="outline"
                  className="border-2 border-border text-foreground hover:bg-foreground hover:text-background px-8 py-3 text-lg font-semibold w-full sm:w-auto"
                >
                  <Mail className="mr-2 w-5 h-5" />
                  {t('common:buttons.getQuote')}
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
