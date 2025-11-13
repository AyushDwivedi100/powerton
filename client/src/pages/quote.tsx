import { useState } from "react";
import { motion } from "framer-motion";
import { SEO } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslation } from "react-i18next";
import FrontendQuoteForm from "@/components/forms/frontend-quote-form";
import {
  Calculator,
  CheckCircle,
  Clock,
  IndianRupee,
  ArrowRight,
  ArrowLeft,
  FileText,
  Settings,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Phone,
  Mail,
  Download,
  Star,
  Award,
} from "lucide-react";
import {
  AnimatedSection,
  useScrollAnimations,
  useScrollAnimation,
  getAnimationClass,
} from "@/hooks/use-scroll-animation";
import { getHeroImage } from "@/assets/images";
import { useLazyNamespace } from "@/lib/lazy-i18n";

interface ProjectConfig {
  projectType: string;
  industry: string;
  projectSize: string;
  timeline: string;
  budget: string;
  requirements: string[];
  additionalFeatures: string[];
  complexity: string;
  location: string;
  existingInfrastructure: string;
}

const PROJECT_TYPES = [
  {
    value: "process-automation",
    label: "processAutomation",
    basePrice: 500000,
    multiplier: 1.0,
  },
  {
    value: "power-systems",
    label: "powerControlSystems",
    basePrice: 750000,
    multiplier: 1.2,
  },
  {
    value: "instrumentation",
    label: "instrumentationControl",
    basePrice: 400000,
    multiplier: 0.8,
  },
  {
    value: "solar-solutions",
    label: "solarAutomation",
    basePrice: 600000,
    multiplier: 1.1,
  },
  {
    value: "building-automation",
    label: "buildingAutomation",
    basePrice: 350000,
    multiplier: 0.7,
  },
  {
    value: "manufacturing-automation",
    label: "manufacturingAutomation",
    basePrice: 800000,
    multiplier: 1.3,
  },
];

const INDUSTRIES = [
  { value: "manufacturing", label: "manufacturing", multiplier: 1.0 },
  { value: "power-generation", label: "powerGeneration", multiplier: 1.4 },
  { value: "oil-gas", label: "oilGas", multiplier: 1.6 },
  { value: "chemical", label: "chemicalProcessing", multiplier: 1.5 },
  { value: "water-treatment", label: "waterTreatment", multiplier: 1.2 },
  { value: "food-beverage", label: "foodBeverage", multiplier: 1.1 },
  { value: "pharmaceutical", label: "pharmaceutical", multiplier: 1.7 },
  { value: "renewable-energy", label: "renewableEnergy", multiplier: 1.3 },
];

const PROJECT_SIZES = [
  { value: "small", label: "small", multiplier: 0.5 },
  { value: "medium", label: "medium", multiplier: 1.0 },
  { value: "large", label: "large", multiplier: 2.0 },
  {
    value: "enterprise",
    label: "enterprise",
    multiplier: 4.0,
  },
];

const TIMELINES = [
  { value: "urgent", label: "urgent", multiplier: 1.3 },
  { value: "standard", label: "standard", multiplier: 1.0 },
  { value: "extended", label: "extended", multiplier: 0.9 },
  { value: "long-term", label: "longTerm", multiplier: 0.8 },
];

const REQUIREMENTS = [
  { id: "plc-programming", label: "plcProgramming", price: 50000 },
  { id: "scada-development", label: "scadaDevelopment", price: 100000 },
  { id: "hmi-design", label: "hmiDesign", price: 75000 },
  { id: "network-integration", label: "networkIntegration", price: 60000 },
  { id: "safety-systems", label: "safetySystems", price: 120000 },
  { id: "remote-monitoring", label: "remoteMonitoring", price: 80000 },
  { id: "data-analytics", label: "dataAnalytics", price: 90000 },
  { id: "mobile-app", label: "mobileApp", price: 70000 },
];

const ADDITIONAL_FEATURES = [
  { id: "redundancy", label: "redundancy", price: 150000 },
  { id: "cybersecurity", label: "cybersecurity", price: 100000 },
  { id: "iot-integration", label: "iotIntegration", price: 85000 },
  { id: "ai-ml", label: "aiMl", price: 200000 },
  {
    id: "predictive-maintenance",
    label: "predictiveMaintenance",
    price: 120000,
  },
  { id: "energy-management", label: "energyManagement", price: 110000 },
  { id: "cloud-integration", label: "cloudIntegration", price: 95000 },
  {
    id: "training-support",
    label: "trainingSupport",
    price: 80000,
  },
];

export default function Quote() {
  useLazyNamespace(["pages", "forms"]);
  const { t } = useTranslation(["pages", "common"]);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTab, setSelectedTab] = useState("quote");
  const [config, setConfig] = useState<ProjectConfig>({
    projectType: "",
    industry: "",
    projectSize: "",
    timeline: "",
    budget: "",
    requirements: [],
    additionalFeatures: [],
    complexity: "",
    location: "",
    existingInfrastructure: "",
  });

  // Initialize scroll animations
  useScrollAnimations();

  const scrollToForm = () => {
    const formSection = document.getElementById("quote-forms-section");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
    // Add a small delay to ensure tab content is rendered before scrolling
    setTimeout(() => {
      scrollToForm();
    }, 100);
  };

  const benefits = [
    {
      icon: FileText,
      title: t("pages:quote.benefits.assessment.title", "Detailed Assessment"),
      description: t(
        "pages:quote.benefits.assessment.description",
        "Comprehensive project evaluation and technical specifications",
      ),
    },
    {
      icon: Clock,
      title: t("pages:quote.benefits.response.title", "Quick Response"),
      description: t(
        "pages:quote.benefits.response.description",
        "Receive your detailed quote within 24-48 hours",
      ),
    },
    {
      icon: Users,
      title: t(
        "pages:quote.benefits.consultation.title",
        "Expert Consultation",
      ),
      description: t(
        "pages:quote.benefits.consultation.description",
        "Free technical consultation with our engineering team",
      ),
    },
    {
      icon: Star,
      title: t("pages:quote.benefits.solutions.title", "Customized Solutions"),
      description: t(
        "pages:quote.benefits.solutions.description",
        "Tailored engineering solutions for your specific requirements",
      ),
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: t("pages:quote.process.submit.title", "Submit Request"),
      description: t(
        "pages:quote.process.submit.description",
        "Fill out our comprehensive quote form or use our cost calculator",
      ),
    },
    {
      step: "02",
      title: t("pages:quote.process.review.title", "Technical Review"),
      description: t(
        "pages:quote.process.review.description",
        "Our engineering team analyzes your requirements and specifications",
      ),
    },
    {
      step: "03",
      title: t("pages:quote.process.assessment.title", "Site Assessment"),
      description: t(
        "pages:quote.process.assessment.description",
        "Optional on-site visit for complex projects (if required)",
      ),
    },
    {
      step: "04",
      title: t("pages:quote.process.quote.title", "Detailed Quote"),
      description: t(
        "pages:quote.process.quote.description",
        "Receive comprehensive pricing with timeline and deliverables",
      ),
    },
  ];

  const calculateEstimate = () => {
    let basePrice = 0;
    let totalMultiplier = 1;

    // Base price from project type
    const projectType = PROJECT_TYPES.find(
      (pt) => pt.value === config.projectType,
    );
    if (projectType) {
      basePrice = projectType.basePrice;
      totalMultiplier *= projectType.multiplier;
    }

    // Industry multiplier
    const industry = INDUSTRIES.find((ind) => ind.value === config.industry);
    if (industry) {
      totalMultiplier *= industry.multiplier;
    }

    // Project size multiplier
    const projectSize = PROJECT_SIZES.find(
      (ps) => ps.value === config.projectSize,
    );
    if (projectSize) {
      totalMultiplier *= projectSize.multiplier;
    }

    // Timeline multiplier
    const timeline = TIMELINES.find((tl) => tl.value === config.timeline);
    if (timeline) {
      totalMultiplier *= timeline.multiplier;
    }

    // Add requirements cost
    const requirementsCost = config.requirements.reduce((sum, reqId) => {
      const requirement = REQUIREMENTS.find((req) => req.id === reqId);
      return sum + (requirement?.price || 0);
    }, 0);

    // Add additional features cost
    const featuresCost = config.additionalFeatures.reduce((sum, featureId) => {
      const feature = ADDITIONAL_FEATURES.find((feat) => feat.id === featureId);
      return sum + (feature?.price || 0);
    }, 0);

    const totalCost =
      basePrice * totalMultiplier + requirementsCost + featuresCost;
    return {
      basePrice: basePrice * totalMultiplier,
      requirementsCost,
      featuresCost,
      totalCost,
      timeline: timeline?.label
        ? t(`pages:quote.timelines.${timeline.label}`)
        : "Not specified",
    };
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleRequirementChange = (requirementId: string, checked: boolean) => {
    if (checked) {
      setConfig((prev) => ({
        ...prev,
        requirements: [...prev.requirements, requirementId],
      }));
    } else {
      setConfig((prev) => ({
        ...prev,
        requirements: prev.requirements.filter((id) => id !== requirementId),
      }));
    }
  };

  const handleFeatureChange = (featureId: string, checked: boolean) => {
    if (checked) {
      setConfig((prev) => ({
        ...prev,
        additionalFeatures: [...prev.additionalFeatures, featureId],
      }));
    } else {
      setConfig((prev) => ({
        ...prev,
        additionalFeatures: prev.additionalFeatures.filter(
          (id) => id !== featureId,
        ),
      }));
    }
  };

  const estimate = calculateEstimate();
  const progress = (currentStep / 4) * 100;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Get Quote & Cost Calculator - Powerton Engineering",
    description:
      "Request a detailed quote for industrial automation, electrical control panels, and engineering solutions. Use our cost calculator for instant estimates.",
    url: "https://powertonengineering.in/quote",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://powertonengineering.in",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Get Quote",
          item: "https://powertonengineering.in/quote",
        },
      ],
    },
    mainEntity: {
      "@type": "Service",
      name: "Industrial Automation Quote Service",
      description:
        "Professional quote and cost calculation service for industrial automation, electrical control panels, and engineering solutions",
      provider: {
        "@type": "Organization",
        name: "Powerton Engineering Pvt. Ltd.",
        url: "https://powertonengineering.in",
        telephone: "+91-94627-71662",
        email: "info@powertonengineering.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "F-25, F Block, Sector 6",
          addressLocality: "Noida",
          addressRegion: "Uttar Pradesh",
          postalCode: "201301",
          addressCountry: "IN",
        },
      },
      serviceType: "Industrial Automation Consultation",
      areaServed: "India",
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: "https://powertonengineering.in/quote",
        serviceSmsNumber: "+91-94627-71662",
        servicePhone: "+91-94627-71662",
      },
    },
  };

  return (
    <>
      <SEO
        title={t("pages:quote.seo.title")}
        description={t("pages:quote.seo.description")}
        keywords={t("pages:quote.seo.keywords")}
        canonicalUrl="https://powertonengineering.in/quote"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <AnimatedSection animation="fadeInUp" delay={0.1}>
        <section className="relative hero-fullscreen overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat "
            style={{
              backgroundImage: `url(${
                getHeroImage("quote", { preload: true })?.src
              })`,
            }}
            role="img"
            aria-label={getHeroImage("quote")?.alt}
          ></div>
          <div className="absolute inset-0 bg-blue-600/60 dark:bg-black/60"></div>

          <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-white">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-wrap-safe responsive-text">
                {t("pages:quote.hero.title")}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto text-wrap-safe">
                {t("pages:quote.hero.subtitle")}
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center bg-muted/50 backdrop-blur-sm rounded-lg px-4 py-2">
                  <CheckCircle className="w-5 h-5 mr-2 text-secondary" />
                  <span className="text-sm">
                    {t("pages:quote.hero.benefits.consultation")}
                  </span>
                </div>
                <div className="flex items-center bg-muted/50 backdrop-blur-sm rounded-lg px-4 py-2">
                  <CheckCircle className="w-5 h-5 mr-2 text-secondary" />
                  <span className="text-sm">
                    {t("pages:quote.hero.benefits.response")}
                  </span>
                </div>
                <div className="flex items-center bg-muted/50 backdrop-blur-sm rounded-lg px-4 py-2">
                  <CheckCircle className="w-5 h-5 mr-2 text-secondary" />
                  <span className="text-sm">
                    {t("pages:quote.hero.benefits.estimates")}
                  </span>
                </div>
                <div className="flex items-center bg-muted/50 backdrop-blur-sm rounded-lg px-4 py-2">
                  <CheckCircle className="w-5 h-5 mr-2 text-secondary" />
                  <span className="text-sm">
                    {t("pages:quote.hero.benefits.noCosts")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Main Content with Tabs */}
      <AnimatedSection animation="fadeInUp" delay={0.2}>
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t("pages:quote.method.title")}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t("pages:quote.method.description")}
              </p>
            </div>

            <Tabs
              value={selectedTab}
              onValueChange={setSelectedTab}
              className="w-full"
              id="quote-forms-section"
            >
              <TabsList className="grid w-full grid-cols-2 max-w-lg mx-auto mb-8">
                <TabsTrigger
                  value="calculator"
                  className="flex items-center gap-2"
                >
                  <Calculator className="w-4 h-4" />
                  {t("pages:quote.method.calculator")}
                </TabsTrigger>
                <TabsTrigger value="quote" className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  {t("pages:quote.method.request")}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="calculator" className="space-y-8 relative">
                {/* Disabled Overlay */}
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-50 rounded-lg flex items-center justify-center">
                  <div className="text-center p-8 max-w-md">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calculator className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {t(
                        "pages:quote.calculator.title",
                        "Advanced Cost Calculator",
                      )}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      {t(
                        "pages:quote.calculator.description",
                        "We're putting the finishing touches on our intelligent cost estimation tool. This feature will provide instant, accurate pricing for your automation projects.",
                      )}
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center justify-center gap-2 text-primary font-medium">
                        <Clock className="w-4 h-4" />
                        <span>
                          {t(
                            "pages:quote.calculator.launchingSoon",
                            "Launching Soon",
                          )}
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {t(
                          "pages:quote.calculator.useQuoteForm",
                          "For immediate quotes, please use our detailed quote form",
                        )}
                      </div>
                      <Button
                        onClick={() => setSelectedTab("quote")}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        <span className="text-wrap-safe">
                          {t(
                            "pages:quote.calculator.getQuoteNow",
                            "Get Quote Now",
                          )}
                        </span>
                        <ArrowRight className="w-4 h-4 me-2 rtl-flip" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Configuration Steps - Visible but disabled behind overlay */}
                <div className="max-w-4xl mx-auto opacity-30 pointer-events-none">
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-foreground">
                        {t(
                          "pages:quote.calculator.projectTitle",
                          "Project Cost Calculator",
                        )}
                      </h3>
                      <Badge variant="secondary" className="px-3 py-1">
                        {t(
                          "pages:quote.calculator.stepOf",
                          "Step {{current}} of {{total}}",
                          { current: currentStep, total: 4 },
                        )}
                      </Badge>
                    </div>
                    <Progress value={progress} className="w-full" />
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Configuration Panel */}
                    <div className="lg:col-span-2">
                      <motion.div
                        whileHover={{ y: -10, scale: 1.03 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <Card className="bg-card border border-border rounded-lg shadow-sm cursor-pointer">
                          <CardHeader className="p-6">
                            <CardTitle className="text-xl md:text-2xl font-semibold text-foreground">
                              {currentStep === 1 &&
                                t("common:steps.projectTypeIndustry")}
                              {currentStep === 2 &&
                                t("common:steps.projectSpecifications")}
                              {currentStep === 3 &&
                                t("common:steps.requirementsFeatures")}
                              {currentStep === 4 &&
                                t("common:steps.additionalInformation")}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="p-6 space-y-6">
                            {/* Step 1: Project Type & Industry */}
                            {currentStep === 1 && (
                              <>
                                <div>
                                  <Label
                                    htmlFor="projectType"
                                    className="text-sm font-medium mb-2 block"
                                  >
                                    {t("common:labels.projectType")}
                                  </Label>
                                  <Select
                                    value={config.projectType}
                                    onValueChange={(value) =>
                                      setConfig((prev) => ({
                                        ...prev,
                                        projectType: value,
                                      }))
                                    }
                                  >
                                    <SelectTrigger>
                                      <SelectValue
                                        placeholder={t(
                                          "common:placeholders.selectProjectType",
                                        )}
                                      />
                                    </SelectTrigger>
                                    <SelectContent>
                                      {PROJECT_TYPES.map((type) => (
                                        <SelectItem
                                          key={type.value}
                                          value={type.value}
                                        >
                                          {t(
                                            `pages:quote.projectTypes.${type.label}`,
                                          )}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                </div>

                                <div>
                                  <Label
                                    htmlFor="industry"
                                    className="text-sm font-medium mb-2 block"
                                  >
                                    {t("common:labels.industry")}
                                  </Label>
                                  <Select
                                    value={config.industry}
                                    onValueChange={(value) =>
                                      setConfig((prev) => ({
                                        ...prev,
                                        industry: value,
                                      }))
                                    }
                                  >
                                    <SelectTrigger>
                                      <SelectValue
                                        placeholder={t(
                                          "common:placeholders.selectIndustry",
                                        )}
                                      />
                                    </SelectTrigger>
                                    <SelectContent>
                                      {INDUSTRIES.map((industry) => (
                                        <SelectItem
                                          key={industry.value}
                                          value={industry.value}
                                        >
                                          {t(
                                            `pages:quote.industries.${industry.label}`,
                                          )}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                </div>
                              </>
                            )}

                            {/* Step 2: Project Specifications */}
                            {currentStep === 2 && (
                              <>
                                <div>
                                  <Label
                                    htmlFor="projectSize"
                                    className="text-sm font-medium mb-2 block"
                                  >
                                    Project Size
                                  </Label>
                                  <Select
                                    value={config.projectSize}
                                    onValueChange={(value) =>
                                      setConfig((prev) => ({
                                        ...prev,
                                        projectSize: value,
                                      }))
                                    }
                                  >
                                    <SelectTrigger>
                                      <SelectValue
                                        placeholder={t(
                                          "common:placeholders.selectProjectSize",
                                        )}
                                      />
                                    </SelectTrigger>
                                    <SelectContent>
                                      {PROJECT_SIZES.map((size) => (
                                        <SelectItem
                                          key={size.value}
                                          value={size.value}
                                        >
                                          {t(
                                            `pages:quote.projectSizes.${size.label}`,
                                          )}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                </div>

                                <div>
                                  <Label
                                    htmlFor="timeline"
                                    className="text-sm font-medium mb-2 block"
                                  >
                                    Project Timeline
                                  </Label>
                                  <Select
                                    value={config.timeline}
                                    onValueChange={(value) =>
                                      setConfig((prev) => ({
                                        ...prev,
                                        timeline: value,
                                      }))
                                    }
                                  >
                                    <SelectTrigger>
                                      <SelectValue
                                        placeholder={t(
                                          "common:placeholders.selectTimeline",
                                        )}
                                      />
                                    </SelectTrigger>
                                    <SelectContent>
                                      {TIMELINES.map((timeline) => (
                                        <SelectItem
                                          key={timeline.value}
                                          value={timeline.value}
                                        >
                                          {t(
                                            `pages:quote.timelines.${timeline.label}`,
                                          )}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                </div>
                              </>
                            )}

                            {/* Step 3: Requirements & Features */}
                            {currentStep === 3 && (
                              <div className="space-y-6">
                                <div>
                                  <Label className="text-sm font-medium mb-4 block">
                                    Core Requirements
                                  </Label>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {REQUIREMENTS.map((requirement) => (
                                      <div
                                        key={requirement.id}
                                        className="flex items-center space-x-3"
                                      >
                                        <Checkbox
                                          id={requirement.id}
                                          checked={config.requirements.includes(
                                            requirement.id,
                                          )}
                                          onCheckedChange={(checked) =>
                                            handleRequirementChange(
                                              requirement.id,
                                              checked as boolean,
                                            )
                                          }
                                        />
                                        <div>
                                          <Label
                                            htmlFor={requirement.id}
                                            className="text-sm font-medium cursor-pointer"
                                          >
                                            {t(
                                              `pages:quote.requirements.${requirement.label}`,
                                            )}
                                          </Label>
                                          <div className="text-xs text-muted-foreground">
                                            {formatCurrency(requirement.price)}
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                <div>
                                  <Label className="text-sm font-medium mb-4 block">
                                    Additional Features
                                  </Label>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {ADDITIONAL_FEATURES.map((feature) => (
                                      <div
                                        key={feature.id}
                                        className="flex items-center space-x-3"
                                      >
                                        <Checkbox
                                          id={feature.id}
                                          checked={config.additionalFeatures.includes(
                                            feature.id,
                                          )}
                                          onCheckedChange={(checked) =>
                                            handleFeatureChange(
                                              feature.id,
                                              checked as boolean,
                                            )
                                          }
                                        />
                                        <div>
                                          <Label
                                            htmlFor={feature.id}
                                            className="text-sm font-medium cursor-pointer"
                                          >
                                            {t(
                                              `pages:quote.additionalFeatures.${feature.label}`,
                                            )}
                                          </Label>
                                          <div className="text-xs text-muted-foreground">
                                            {formatCurrency(feature.price)}
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )}

                            {/* Step 4: Additional Information */}
                            {currentStep === 4 && (
                              <>
                                <div>
                                  <Label
                                    htmlFor="location"
                                    className="text-sm font-medium mb-2 block"
                                  >
                                    Project Location
                                  </Label>
                                  <Input
                                    id="location"
                                    placeholder={t(
                                      "common:placeholders.cityState",
                                    )}
                                    value={config.location}
                                    onChange={(e) =>
                                      setConfig((prev) => ({
                                        ...prev,
                                        location: e.target.value,
                                      }))
                                    }
                                  />
                                </div>

                                <div>
                                  <Label
                                    htmlFor="existingInfrastructure"
                                    className="text-sm font-medium mb-2 block"
                                  >
                                    Existing Infrastructure
                                  </Label>
                                  <Textarea
                                    id="existingInfrastructure"
                                    placeholder={t(
                                      "common:placeholders.describeExisting",
                                    )}
                                    value={config.existingInfrastructure}
                                    onChange={(e) =>
                                      setConfig((prev) => ({
                                        ...prev,
                                        existingInfrastructure: e.target.value,
                                      }))
                                    }
                                    rows={4}
                                  />
                                </div>
                              </>
                            )}

                            {/* Navigation Buttons */}
                            <div className="flex justify-between pt-6 border-t">
                              <Button
                                variant="outline"
                                onClick={prevStep}
                                disabled={currentStep === 1}
                                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                              >
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Previous
                              </Button>
                              <Button
                                onClick={nextStep}
                                disabled={
                                  currentStep === 1 &&
                                  (!config.projectType || !config.industry)
                                }
                                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                              >
                                {currentStep === 4 ? "Complete" : "Next"}
                                {currentStep !== 4 && (
                                  <ArrowRight className="w-4 h-4 ml-2" />
                                )}
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </div>

                    {/* Cost Estimate Panel */}
                    <div>
                      <Card className="bg-card border border-border rounded-lg shadow-sm sticky top-8">
                        <CardHeader className="p-6">
                          <CardTitle className="text-xl md:text-2xl font-semibold text-foreground flex items-center">
                            <IndianRupee className="w-6 h-6 mr-2 text-secondary" />
                            {t("pages:quote.hero.estimates", {
                              defaultValue: "Cost Estimate",
                            })}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 space-y-4">
                          {config.projectType && config.industry && (
                            <>
                              <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                  <span className="text-sm text-muted-foreground">
                                    Base Project Cost:
                                  </span>
                                  <span className="font-medium">
                                    {formatCurrency(estimate.basePrice)}
                                  </span>
                                </div>

                                {estimate.requirementsCost > 0 && (
                                  <div className="flex justify-between items-center">
                                    <span className="text-sm text-muted-foreground">
                                      Requirements:
                                    </span>
                                    <span className="font-medium">
                                      {formatCurrency(
                                        estimate.requirementsCost,
                                      )}
                                    </span>
                                  </div>
                                )}

                                {estimate.featuresCost > 0 && (
                                  <div className="flex justify-between items-center">
                                    <span className="text-sm text-muted-foreground">
                                      Additional Features:
                                    </span>
                                    <span className="font-medium">
                                      {formatCurrency(estimate.featuresCost)}
                                    </span>
                                  </div>
                                )}

                                <div className="border-t pt-3">
                                  <div className="flex justify-between items-center">
                                    <span className="font-semibold text-foreground">
                                      Total Estimate:
                                    </span>
                                    <span className="text-2xl font-bold text-secondary">
                                      {formatCurrency(estimate.totalCost)}
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <div className="mt-6 p-4 bg-muted rounded-lg">
                                <div className="text-sm text-muted-foreground">
                                  <div className="flex items-center gap-2 mb-2">
                                    <Clock className="w-4 h-4" />
                                    <span>
                                      Estimated Timeline: {estimate.timeline}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-600" />
                                    <span>
                                      Includes installation & commissioning
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground mt-6">
                                <Download className="w-4 h-4 mr-2" />
                                {t("common:buttons.download")}
                                Get Detailed Quote
                              </Button>
                            </>
                          )}

                          {(!config.projectType || !config.industry) && (
                            <div className="text-center py-8">
                              <Calculator className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                              <p className="text-sm text-muted-foreground">
                                Select project type and industry to see cost
                                estimates
                              </p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
                {/* Close disabled content wrapper */}
              </TabsContent>

              <TabsContent value="quote" className="space-y-8">
                {/* Quote Form Section */}
                <div className="max-w-4xl mx-auto">
                  <Card className="bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                    <CardHeader className="p-6">
                      <CardTitle className="text-xl md:text-2xl font-semibold text-foreground">
                        {t("pages:quote.form.title")}
                      </CardTitle>
                      <p className="text-muted-foreground">
                        {t("pages:quote.form.description")}
                      </p>
                    </CardHeader>
                    <CardContent className="p-6">
                      <FrontendQuoteForm />
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </AnimatedSection>

      {/* Benefits Section */}
      <AnimatedSection animation="fadeInUp" delay={0.3}>
        <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                {t("pages:quote.benefits.title")}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t("pages:quote.benefits.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card
                    key={index}
                    className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md text-center hover:scale-[1.02] transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Process Steps */}
      <AnimatedSection animation="fadeInUp" delay={0.4}>
        <section className="py-12 md:py-16 lg:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                {t("pages:quote.process.title", "Our Quote Process")}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t(
                  "pages:quote.process.description",
                  "From initial request to detailed proposal, we ensure a smooth and transparent process.",
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="text-center">
                    <div className="relative flex items-center justify-center mb-4">
                      {/* Horizontal line behind circle - extends left and right but NOT to edges */}
                      <div className="hidden lg:block absolute left-[15%] right-[15%] top-1/2 -translate-y-1/2 z-0">
                        <div className="h-0.5 bg-gradient-to-r from-primary to-secondary opacity-30"></div>
                      </div>
                      
                      {/* Circle */}
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl relative z-10">
                        {step.step}
                      </div>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection animation="fadeInUp" delay={0.5}>
        <section className="py-12 md:py-16 lg:py-20 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t("pages:quote.cta.title", "Ready to Get Started?")}
            </h2>
            <p className="text-base md:text-lg text-primary-foreground mb-8 max-w-2xl mx-auto opacity-90">
              {t(
                "pages:quote.cta.description",
                "Contact us today for your custom engineering solution. Our team is ready to help bring your project to life.",
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-3 rounded-lg font-semibold transition-colors"
                onClick={() => handleTabChange("calculator")}
              >
                <Calculator className="w-5 h-5 mr-2" />
                {t("pages:quote.cta.tryCalculator")}
              </Button>
              <Button
                variant="outline"
                className="border-2 border-border text-foreground bg-background hover:bg-foreground hover:text-background px-6 py-3 rounded-lg font-semibold transition-all"
                onClick={() => handleTabChange("quote")}
              >
                <FileText className="w-5 h-5 mr-2" />
                {t("pages:quote.cta.requestQuote")}
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
