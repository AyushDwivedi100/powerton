import { motion } from "framer-motion";
import { SEO } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  AnimatedSection,
  useScrollAnimations,
} from "@/hooks/use-scroll-animation";
import { getProducts } from "@/data/constants";
import {
  Download,
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
import { useToast } from "@/hooks/use-toast";
import { useLazyNamespace } from "@/lib/lazy-i18n";

export default function Products() {
  useScrollAnimations();
  useLazyNamespace(["products", "pages"]);
  const { t } = useTranslation(["common", "products", "pages"]);
  const { toast } = useToast();
  const PRODUCTS = getProducts(t);

  const handleDownloadCatalog = () => {
    const link = document.createElement("a");
    link.href = "/pdfs/Powerton-Product-Catalogue.pdf";
    link.download = "Powerton-Product-Catalogue.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: t("common:messages.downloadStarted"),
      description: t("common:messages.catalogDownloading"),
      duration: 3000,
    });
  };

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

      // Electrical Accessories features
      "circuit-breakers": "/products/circuit-breakers-fuses",
      contactors: "/products/electrical-accessories",
      relays: "/products/electrical-accessories",
      "power-supplies": "/products/power-supplies",

      // Measurement Instruments features
      "digital-multimeters": "/products/multimeters",
      calibrators: "/products/calibration-equipment",

      // Solar Products features
      "solar-panels": "/products/solar-panels",
      inverters: "/products/solar-inverters",

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
    };

    return featureRoutes[featureId] || `/products/${featureId}`;
  };

  const productDetails = {
    instrumentation: {
      fullDescription: t(
        "products:productDetails.instrumentation.fullDescription",
      ),
      specifications: [
        t(
          "products:productDetails.instrumentation.specifications.highAccuracy",
        ),
        t(
          "products:productDetails.instrumentation.specifications.operatingTemperature",
        ),
        t(
          "products:productDetails.instrumentation.specifications.protectionRating",
        ),
        t("products:productDetails.instrumentation.specifications.outputTypes"),
        t(
          "products:productDetails.instrumentation.specifications.explosionProof",
        ),
      ],
      applications: [
        t(
          "products:productDetails.instrumentation.applications.processControl",
        ),
        t(
          "products:productDetails.instrumentation.applications.qualityMonitoring",
        ),
        t("products:productDetails.instrumentation.applications.safetySystems"),
        t(
          "products:productDetails.instrumentation.applications.environmentalMonitoring",
        ),
      ],
      features: [
        t("products:productDetails.instrumentation.features.smartDiagnostics"),
        t(
          "products:productDetails.instrumentation.features.digitalCommunication",
        ),
        t("products:productDetails.instrumentation.features.easyCalibration"),
        t("products:productDetails.instrumentation.features.longTermStability"),
      ],
    },
    electrical: {
      fullDescription: t("products:productDetails.electrical.fullDescription"),
      specifications: [
        t("products:productDetails.electrical.specifications.voltageRange"),
        t("products:productDetails.electrical.specifications.currentRatings"),
        t("products:productDetails.electrical.specifications.protectionLevel"),
        t(
          "products:productDetails.electrical.specifications.standardsCompliant",
        ),
        t("products:productDetails.electrical.specifications.temperatureRated"),
      ],
      applications: [
        t("products:productDetails.electrical.applications.motorControl"),
        t("products:productDetails.electrical.applications.powerDistribution"),
        t(
          "products:productDetails.electrical.applications.switchingApplications",
        ),
        t("products:productDetails.electrical.applications.protectionSystems"),
      ],
      features: [
        t("products:productDetails.electrical.features.highReliability"),
        t("products:productDetails.electrical.features.modularDesign"),
        t("products:productDetails.electrical.features.easyInstallation"),
        t("products:productDetails.electrical.features.maintenanceFree"),
      ],
    },
    measurement: {
      fullDescription: t("products:productDetails.measurement.fullDescription"),
      specifications: [
        t("products:productDetails.measurement.specifications.accuracyClass"),
        t("products:productDetails.measurement.specifications.displayType"),
        t(
          "products:productDetails.measurement.specifications.communicationOptions",
        ),
        t("products:productDetails.measurement.specifications.dataLogging"),
        t(
          "products:productDetails.measurement.specifications.multipleParameter",
        ),
      ],
      applications: [
        t(
          "products:productDetails.measurement.applications.powerQualityAnalysis",
        ),
        t("products:productDetails.measurement.applications.energyManagement"),
        t("products:productDetails.measurement.applications.processMonitoring"),
        t(
          "products:productDetails.measurement.applications.complianceMeasurement",
        ),
      ],
      features: [
        t("products:productDetails.measurement.features.realTimeMonitoring"),
        t("products:productDetails.measurement.features.dataAnalytics"),
        t("products:productDetails.measurement.features.alarmManagement"),
        t("products:productDetails.measurement.features.remoteAccess"),
      ],
    },
    solar: {
      fullDescription: t("products:productDetails.solar.fullDescription"),
      specifications: [
        t("products:productDetails.solar.specifications.panelEfficiency"),
        t("products:productDetails.solar.specifications.powerRange"),
        t("products:productDetails.solar.specifications.inverterEfficiency"),
        t("products:productDetails.solar.specifications.warranty"),
        t("products:productDetails.solar.specifications.gridOptions"),
      ],
      applications: [
        t("products:productDetails.solar.applications.rooftopSolar"),
        t("products:productDetails.solar.applications.groundMountSystems"),
        t("products:productDetails.solar.applications.solarFarms"),
        t("products:productDetails.solar.applications.hybridSystems"),
      ],
      features: [
        t("products:productDetails.solar.features.highEfficiency"),
        t("products:productDetails.solar.features.weatherResistant"),
        t("products:productDetails.solar.features.smartMonitoring"),
        t("products:productDetails.solar.features.gridSynchronization"),
      ],
    },
    automation: {
      fullDescription: t("products:productDetails.automation.fullDescription"),
      specifications: [
        t("products:productDetails.automation.specifications.ioCapacity"),
        t(
          "products:productDetails.automation.specifications.communicationProtocols",
        ),
        t(
          "products:productDetails.automation.specifications.programmingStandards",
        ),
        t(
          "products:productDetails.automation.specifications.operatingTemperature",
        ),
        t(
          "products:productDetails.automation.specifications.redundancyOptions",
        ),
      ],
      applications: [
        t(
          "products:productDetails.automation.applications.manufacturingAutomation",
        ),
        t("products:productDetails.automation.applications.processControl"),
        t("products:productDetails.automation.applications.buildingManagement"),
        t("products:productDetails.automation.applications.machineControl"),
      ],
      features: [
        t("products:productDetails.automation.features.flexibleProgramming"),
        t("products:productDetails.automation.features.scalableArchitecture"),
        t("products:productDetails.automation.features.diagnosticTools"),
        t("products:productDetails.automation.features.remoteMonitoring"),
      ],
    },
    safety: {
      fullDescription: t("products:productDetails.safety.fullDescription"),
      specifications: [
        t("products:productDetails.safety.specifications.breakingCapacity"),
        t("products:productDetails.safety.specifications.safetyIntegrityLevel"),
        t("products:productDetails.safety.specifications.responseTime"),
        t(
          "products:productDetails.safety.specifications.multipleProtectionFunctions",
        ),
        t("products:productDetails.safety.specifications.arcFaultProtection"),
      ],
      applications: [
        t("products:productDetails.safety.applications.personnelSafety"),
        t("products:productDetails.safety.applications.equipmentProtection"),
        t("products:productDetails.safety.applications.fireSafety"),
        t("products:productDetails.safety.applications.emergencySystems"),
      ],
      features: [
        t("products:productDetails.safety.features.failSafeOperation"),
        t("products:productDetails.safety.features.selfMonitoring"),
        t("products:productDetails.safety.features.quickResponse"),
        t("products:productDetails.safety.features.easyTesting"),
      ],
    },
    pumps: {
      fullDescription: t("products:productDetails.pumps.fullDescription"),
      specifications: [
        t("products:productDetails.pumps.specifications.flowRate"),
        t("products:productDetails.pumps.specifications.head"),
        t("products:productDetails.pumps.specifications.materials"),
        t("products:productDetails.pumps.specifications.temperatureRange"),
        t("products:productDetails.pumps.specifications.efficiency"),
      ],
      applications: [
        t("products:productDetails.pumps.applications.waterSupply"),
        t("products:productDetails.pumps.applications.chemicalProcessing"),
        t("products:productDetails.pumps.applications.hvacSystems"),
        t("products:productDetails.pumps.applications.industrialProcesses"),
      ],
      features: [
        t("products:productDetails.pumps.features.energyEfficient"),
        t("products:productDetails.pumps.features.corrosionResistant"),
        t("products:productDetails.pumps.features.lowMaintenance"),
        t("products:productDetails.pumps.features.reliableOperation"),
      ],
    },
    tools: {
      fullDescription: t("products:productDetails.tools.fullDescription"),
      specifications: [
        t("products:productDetails.tools.specifications.material"),
        t("products:productDetails.tools.specifications.precision"),
        t("products:productDetails.tools.specifications.operatingRange"),
        t("products:productDetails.tools.specifications.ergonomicDesign"),
        t("products:productDetails.tools.specifications.certifiedStandards"),
      ],
      applications: [
        t("products:productDetails.tools.applications.maintenanceWork"),
        t("products:productDetails.tools.applications.installation"),
        t("products:productDetails.tools.applications.calibration"),
        t("products:productDetails.tools.applications.testingCommissioning"),
      ],
      features: [
        t("products:productDetails.tools.features.durableConstruction"),
        t("products:productDetails.tools.features.ergonomicDesign"),
        t("products:productDetails.tools.features.precisionEngineering"),
        t("products:productDetails.tools.features.multiPurposeUse"),
      ],
    },
  };

  return (
    <>
      <SEO
        title={t("pages:products.seo.title")}
        description={t("pages:products.seo.description")}
        keywords={t("pages:products.seo.keywords")}
        canonicalUrl="https://powertonengineering.in/products"
      />

      {/* Hero Section */}
      <section className="relative hero-fullscreen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat "
          style={{
            backgroundImage: `url(${
              getHeroImage("products", { preload: true })?.src
            })`,
          }}
        ></div>
        <div className="absolute inset-0 bg-blue-600/60 dark:bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-wrap-safe responsive-text">
                {t("products:title")}
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto text-wrap-safe">
              {t("products:subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 md:gap-4 max-w-md mx-auto px-2 sm:px-0">
              <Button
                onClick={handleDownloadCatalog}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 text-lg font-semibold w-full sm:w-auto"
              >
                <Download className="mr-2 w-5 h-5" />
                {t("common:buttons.downloadCatalog")}
              </Button>
              <Link href="/quote">
                <Button
                  variant="outline"
                  className="border-2 border-border text-foreground hover:bg-foreground hover:text-background px-8 py-3 text-lg font-semibold w-full sm:w-auto"
                >
                  {t("common:buttons.getQuote")}
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
                {t("pages:products.sections.industrialProducts")}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto px-2 sm:px-0">
                {t("products:subtitle")}
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
                    className="h-full"
                  >
                    <Link href={`/products/${product.id}`}>
                      <Card className="h-full group cursor-pointer flex flex-col">
                        <CardContent className="p-4 sm:p-6 md:p-8 flex-1 flex flex-col items-center">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex-shrink-0">
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-foreground mb-3 text-center group-hover:text-secondary transition-colors cursor-pointer">
                            {product.title}
                          </h3>
                          <p className="text-muted-foreground text-center mb-6 flex-1">
                            {product.description}
                          </p>

                          <div className="space-y-4 mt-auto w-full">
                            <div className="flex flex-wrap gap-2 justify-center min-h-[80px] items-center">
                              {product.features
                                .slice(0, 4)
                                .map((feature, idx) => (
                                  <Badge
                                    key={`${product.id}-feature-${idx}`}
                                    variant="secondary"
                                    className="bg-secondary/10 text-secondary border border-secondary/20  group-hover:text-foreground transition-all duration-200 cursor-pointer text-sm px-3 py-1 shadow-md hover:shadow-lg"
                                    data-testid={`badge-${feature
                                      .toLowerCase()
                                      .replace(/\s+/g, "-")}`}
                                  >
                                    {feature}
                                  </Badge>
                                ))}
                            </div>

                            <div className="pt-4 border-t border-border">
                              <div className="flex items-center justify-center">
                                <Button
                                  variant="ghost"
                                  className="text-secondary hover:bg-transparent hover:text-secondary p-0"
                                >
                                  {t("common:buttons.viewDetails")}{" "}
                                  <span className="ms-2 inline-block transition-transform duration-300 group-hover:translate-x-2 rtl:group-hover:-translate-x-2">
                                    <span className="ltr:inline rtl:hidden">
                                      →
                                    </span>
                                    <span className="ltr:hidden rtl:inline">
                                      ←
                                    </span>
                                  </span>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
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
              {t("pages:products.cta.needExpertSolutions")}
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              {t("pages:products.cta.expertDescription")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 md:gap-4 max-w-md mx-auto px-2 sm:px-0">
              <Link href="/contact">
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 text-lg font-semibold w-full sm:w-auto">
                  <Phone className="mr-2 w-5 h-5" />
                  {t("common:buttons.contactExpert")}
                </Button>
              </Link>
              <Link href="/quote">
                <Button
                  variant="outline"
                  className="border-2 border-border text-foreground hover:bg-foreground hover:text-background px-8 py-3 text-lg font-semibold w-full sm:w-auto"
                >
                  <Mail className="mr-2 w-5 h-5" />
                  {t("common:buttons.getQuote")}
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
