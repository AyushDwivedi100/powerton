import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { SEO } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslation } from "react-i18next";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import projectsHeroImage from "@assets/generated_images/Automation_Project_Showcase_c9ed4237.png";
import {
  Filter,
  Search,
  MapPin,
  Calendar,
  Users,
  IndianRupee,
  CheckCircle,
  Clock,
  Building,
  Zap,
  Cog,
  Factory,
  ArrowRight,
  Download,
  Award,
  Target,
  TrendingUp,
} from "lucide-react";
import { Link } from "wouter";
import {
  useScrollAnimation,
  useStaggeredAnimation,
  getAnimationClass,
} from "@/hooks/use-scroll-animation";
import { getHeroImage } from "@/assets/images";
import {
  getAllProjects,
  getFeaturedProjects,
  Project,
} from "@/data/projects-data";

// Use centralized project data from projects-data.ts
const PORTFOLIO_PROJECTS = getAllProjects();

// Stable identifiers for filtering (must match project data)
const FILTER_IDS = {
  industries: {
    all: "All",
    beverageManufacturing: "Beverage Manufacturing",
    beverageDistillery: "Beverage/Distillery",
    sugarDistillery: "Sugar & Distillery",
    renewableEnergy: "Renewable Energy",
    evInfrastructure: "EV Infrastructure",
    steelManufacturing: "Steel Manufacturing",
    waterTreatment: "Water Treatment",
  },
  categories: {
    all: "All",
    processAutomation: "Process Automation",
    powerSystems: "Power Systems",
    solarSolutions: "Solar Solutions",
    waterSystems: "Water Systems",
  },
  statuses: {
    all: "All",
    completed: "Completed",
  },
};

// Move filter arrays inside component to access t function
const getFilterOptions = (t: any) => ({
  industries: [
    {
      id: FILTER_IDS.industries.all,
      label: t("pages:projects.filters.industries.all"),
    },
    {
      id: FILTER_IDS.industries.beverageManufacturing,
      label: t("pages:projects.filters.industries.beverageManufacturing"),
    },
    {
      id: FILTER_IDS.industries.beverageDistillery,
      label: t("pages:projects.filters.industries.beverageDistillery"),
    },
    {
      id: FILTER_IDS.industries.sugarDistillery,
      label: t("pages:projects.filters.industries.sugarDistillery"),
    },
    {
      id: FILTER_IDS.industries.renewableEnergy,
      label: t("pages:projects.filters.industries.renewableEnergy"),
    },
    {
      id: FILTER_IDS.industries.evInfrastructure,
      label: t("pages:projects.filters.industries.evInfrastructure"),
    },
    {
      id: FILTER_IDS.industries.steelManufacturing,
      label: t("pages:projects.filters.industries.steelManufacturing"),
    },
    {
      id: FILTER_IDS.industries.waterTreatment,
      label: t("pages:projects.filters.industries.waterTreatment"),
    },
  ],
  categories: [
    {
      id: FILTER_IDS.categories.all,
      label: t("pages:projects.filters.categories.all"),
    },
    {
      id: FILTER_IDS.categories.processAutomation,
      label: t("pages:projects.filters.categories.processAutomation"),
    },
    {
      id: FILTER_IDS.categories.powerSystems,
      label: t("pages:projects.filters.categories.powerSystems"),
    },
    {
      id: FILTER_IDS.categories.solarSolutions,
      label: t("pages:projects.filters.categories.solarSolutions"),
    },
    {
      id: FILTER_IDS.categories.waterSystems,
      label: t("pages:projects.filters.categories.waterSystems"),
    },
  ],
  statuses: [
    {
      id: FILTER_IDS.statuses.all,
      label: t("pages:projects.filters.statuses.all"),
    },
    {
      id: FILTER_IDS.statuses.completed,
      label: t("pages:projects.filters.statuses.completed"),
    },
  ],
});

export default function Projects() {
  const { t, i18n, ready } = useTranslation(["pages", "common"]);
  const filterOptions = getFilterOptions(t);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState(
    filterOptions.industries[0].id,
  );
  const [selectedCategory, setSelectedCategory] = useState(
    filterOptions.categories[0].id,
  );
  const [selectedStatus, setSelectedStatus] = useState(
    filterOptions.statuses[0].id,
  );
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTab, setSelectedTab] = useState("showcase");

  const filteredProjects = PORTFOLIO_PROJECTS.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.month.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.year.toString().includes(searchTerm);
    const matchesIndustry =
      selectedIndustry === FILTER_IDS.industries.all ||
      project.industry === selectedIndustry;
    const matchesCategory =
      selectedCategory === FILTER_IDS.categories.all ||
      project.category === selectedCategory;
    const matchesStatus =
      selectedStatus === FILTER_IDS.statuses.all ||
      project.status === selectedStatus;

    return matchesSearch && matchesIndustry && matchesCategory && matchesStatus;
  });

  const heroAnimation = useScrollAnimation();
  const statsAnimation = useScrollAnimation();
  const projectsAnimation = useStaggeredAnimation(filteredProjects.length);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      default:
        return <CheckCircle className="w-4 h-4 text-green-600" />;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Process Automation":
        return <Cog className="w-5 h-5" />;
      case "Power Systems":
        return <Zap className="w-5 h-5" />;
      case "Solar Solutions":
        return <Building className="w-5 h-5" />;
      case "Water Systems":
        return <Factory className="w-5 h-5" />;
      default:
        return <Cog className="w-5 h-5" />;
    }
  };

  const stats = useMemo(
    () => [
      {
        number: 50,
        suffix: "+",
        label: t("common:company.stats.projectsCompleted"),
        icon: Award,
      },
      {
        number: 45,
        suffix: "+",
        label: t("common:company.stats.clientsServed"),
        icon: Users,
      },
      {
        number: 15,
        suffix: "+",
        label: t("common:company.stats.yearsExperience"),
        icon: Calendar,
      },
      {
        number: 99,
        suffix: "%",
        label: t("common:company.stats.successRate"),
        icon: Target,
      },
    ],
    [i18n.resolvedLanguage, ready],
  );

  return (
    <>
      <SEO
        title={t("pages:projects.seo.title")}
        description={t("pages:projects.seo.description")}
        keywords={t("pages:projects.seo.keywords")}
        canonicalUrl="https://powertonengineering.in/projects"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Powerton Engineering Pvt. Ltd.",
          description:
            "Industrial automation and electrical engineering projects portfolio",
        }}
      />

      {/* Hero Section */}
      <section
        className={`relative hero-fullscreen overflow-hidden ${getAnimationClass(
          "fade-in-up",
          true,
        )}`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat "
          style={{
            backgroundImage: `url(${
              getHeroImage("projects", { preload: true })?.src
            })`,
          }}
        ></div>
        <div className="absolute inset-0 bg-blue-600/60 dark:bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-wrap-safe responsive-text">
              {t("pages:projects.hero.title")}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto text-wrap-safe">
              {t(
                "pages:projects.hero.subtitle",
                "Discover our engineering excellence through 1200+ successful projects across diverse industries, showcasing innovation, quality, and reliability.",
              )}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-3 rounded-lg font-semibold transition-colors">
                <Download className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                {t("common:buttons.downloadPortfolio")}
              </Button>
              <Link href="/contact" className="mobile-full">
                <Button
                  variant="outline"
                  className="border-2 border-border text-foreground hover:bg-foreground hover:text-background px-6 py-3 rounded-lg font-semibold transition-all"
                >
                  {t("common:buttons.discussProject")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Statistics */}
      <section
        className={`py-12 md:py-16 lg:py-20 bg-muted/30 ${getAnimationClass(
          "fade-in-up",
          true,
        )}`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-secondary mb-2">
                    <AnimatedCounter
                      target={stat.number}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content with Tabs */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t("pages:ui.projectPortfolio")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t(
                "pages:projects.portfolioDescription",
                "Explore our engineering capabilities through demonstration projects showcasing innovative solutions across various industries. Real project portfolio coming soon.",
              )}
            </p>
          </div>

          {/* Search and Filters */}
          <div className="space-y-6 filters-section">
            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder={t("common:placeholders.searchProjects")}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Filter Toggle */}
            <div className="text-center">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className={`border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 ${
                  showFilters ? "bg-primary/10" : ""
                }`}
              >
                <Filter
                  className={`mr-2 w-4 h-4 transition-transform duration-300 ${
                    showFilters ? "rotate-180" : ""
                  }`}
                />
                {showFilters
                  ? t("common:buttons.hideFilters")
                  : t("common:buttons.showFilters")}
              </Button>
            </div>

            {/* Filters */}
            <div className="overflow-hidden">
              <div
                className={`transition-all duration-300 ease-in-out ${
                  showFilters
                    ? "max-h-96 opacity-100 translate-y-0"
                    : "max-h-0 opacity-0 -translate-y-4"
                }`}
              >
                <div
                  className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-muted/50 backdrop-blur-sm rounded-lg border border-border/20 mt-4"
                  style={{ contain: "layout style" }}
                >
                  <div className="min-w-0">
                    <label className="text-sm font-medium mb-2 block">
                      {t("common:labels.industry")}
                    </label>
                    <Select
                      value={selectedIndustry}
                      onValueChange={setSelectedIndustry}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue
                          placeholder={t(
                            "common:placeholders.selectIndustryFilter",
                          )}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {filterOptions.industries.map((industry) => (
                          <SelectItem key={industry.id} value={industry.id}>
                            {industry.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="min-w-0">
                    <label className="text-sm font-medium mb-2 block">
                      {t("common:labels.category")}
                    </label>
                    <Select
                      value={selectedCategory}
                      onValueChange={setSelectedCategory}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue
                          placeholder={t("common:placeholders.selectCategory")}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {filterOptions.categories.map((category) => (
                          <SelectItem key={category.id} value={category.id}>
                            {category.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="min-w-0">
                    <label className="text-sm font-medium mb-2 block">
                      {t("common:labels.status")}
                    </label>
                    <Select
                      value={selectedStatus}
                      onValueChange={setSelectedStatus}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue
                          placeholder={t("common:placeholders.selectStatus")}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {filterOptions.statuses.map((status) => (
                          <SelectItem key={status.id} value={status.id}>
                            {status.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="text-center text-muted-foreground py-6">
            {t("pages:projects.showing", {
              count: filteredProjects.length,
              total: PORTFOLIO_PROJECTS.length,
            })}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-6 xl:gap-6">
            {filteredProjects.map((project, index) => {
              const Icon = getCategoryIcon(project.category);
              return (
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  key={project.id}
                  className={getAnimationClass("fade-in-up", true)}
                >
                  <Card className="bg-card border border-border rounded-xl shadow-sm hover:shadow-2xl cursor-pointer overflow-hidden h-full flex flex-col transition-all duration-300">
                    {/* Project Content */}
                    <div className="p-4 sm:p-6 lg:p-8 flex-1 flex flex-col space-y-4 sm:space-y-6 group">
                      {/* Header Section */}
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex items-start justify-between gap-3 sm:gap-4">
                          <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground leading-tight flex-1">
                            {t(`pages:projects.items.${project.id}.title`)}
                          </CardTitle>
                          <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2 flex-shrink-0">
                            <div className="hidden sm:block">{Icon}</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-secondary">
                          <Building className="w-4 h-4 flex-shrink-0" />
                          <span className="text-sm font-medium">
                            {t(`pages:projects.items.${project.id}.client`)}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {t(`pages:projects.items.${project.id}.description`)}
                      </p>

                      {/* Meta Information */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-sm flex-wrap">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="w-4 h-4 flex-shrink-0" />
                            <span>
                              {t(`pages:projects.items.${project.id}.location`)}
                            </span>
                          </div>
                          <span className="text-muted-foreground/40">•</span>
                          <div className="flex items-center gap-2">
                            {getStatusIcon(project.status)}
                            <span className="text-green-600 font-medium">
                              {t(
                                `pages:projects.statuses.${project.status
                                  .toLowerCase()
                                  .replace(/\s+/g, "")}`,
                              )}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 flex-shrink-0" />
                          <span>
                            {t("pages:projects.completedDate")}: {project.month}{" "}
                            {project.year}
                          </span>
                        </div>
                      </div>

                      {/* Categories */}
                      <div className="flex flex-wrap gap-3">
                        <Badge
                          variant="outline"
                          className="bg-primary/10 text-primary border-primary/20 px-3 py-1.5"
                        >
                          {t(
                            `pages:projects.categories.${project.category
                              .toLowerCase()
                              .replace(/\s+/g, "")}`,
                          )}
                        </Badge>
                        <Badge
                          variant="outline"
                          className="bg-secondary/10 text-secondary border-secondary/20 px-3 py-1.5"
                        >
                          {project.industry}
                        </Badge>
                      </div>

                      {/* Technologies - Show All */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                          <TrendingUp className="w-4 h-4 text-primary" />
                          <span>{t("pages:projects.technologiesUsed")}</span>
                        </div>
                        <div className="flex flex-wrap gap-2.5">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs bg-muted px-3 py-1.5 rounded-md text-muted-foreground group-hover:text-foreground font-medium"
                            >
                              {t(
                                `pages:projects.technologies.${tech
                                  .toLowerCase()
                                  .replace(/\s+/g, "")}`,
                              )}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="text-muted-foreground mb-4">
                {t("pages:projects.noProjectsFound")}
              </div>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedIndustry("All");
                  setSelectedCategory("All");
                  setSelectedStatus("All");
                }}
                variant="outline"
              >
                {t("pages:projects.clearFilters")}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 lg:py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t("pages:projects.cta.title")}
          </h2>
          <p className="text-base md:text-lg text-white mb-8 max-w-2xl mx-auto opacity-90">
            {t("pages:projects.cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-3 rounded-lg font-semibold transition-colors">
                {t("pages:projects.cta.getProjectQuote")}
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-2 border-border text-foreground hover:bg-foreground hover:text-background px-6 py-3 rounded-lg font-semibold transition-all"
              >
                {t("pages:projects.cta.contactTeam")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
