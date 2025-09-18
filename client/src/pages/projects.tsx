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
import { PROJECTS, getAllProjects } from "@/data/constants";

// Use centralized project data from constants.ts
const PORTFOLIO_PROJECTS = getAllProjects();

const INDUSTRIES = [
  "All",
  "Manufacturing",
  "Power Generation",
  "Renewable Energy",
  "Process Industries",
];
const CATEGORIES = [
  "All",
  "Process Automation",
  "Power Systems",
  "Solar Solutions",
];
const STATUSES = ["All", "Capability Demo", "In Progress", "Completed"];

export default function Projects() {
  const { t, i18n, ready } = useTranslation(["pages", "common"]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTab, setSelectedTab] = useState("showcase");

  const filteredProjects = PORTFOLIO_PROJECTS.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry =
      selectedIndustry === "All" || project.industry === selectedIndustry;
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesStatus =
      selectedStatus === "All" || project.status === selectedStatus;

    return matchesSearch && matchesIndustry && matchesCategory && matchesStatus;
  });

  const heroAnimation = useScrollAnimation();
  const statsAnimation = useScrollAnimation();
  const projectsAnimation = useStaggeredAnimation(filteredProjects.length);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "In Progress":
        return <Clock className="w-4 h-4 text-orange-500" />;
      case "Capability Demo":
        return <Target className="w-4 h-4 text-blue-600" />;
      default:
        return null;
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
        number: 25,
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
        number: 98,
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
        title="Engineering Projects & Portfolio - Industrial Automation Cases | Powerton Engineering"
        description="Explore our engineering capabilities through demonstration projects showcasing industrial automation, power systems, solar solutions, and process control expertise. Featured projects highlight our core competencies."
        keywords="engineering projects, automation projects, power plant automation, manufacturing automation, solar projects, water treatment automation, industrial projects India, project portfolio"
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
        className={`relative hero-fullscreen overflow-hidden ${getAnimationClass("fade-in-up", true)}`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat "
          style={{
            backgroundImage: `url(${getHeroImage("projects", { preload: true })?.src})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              {t("pages:projects.hero.title")}
            </h1>
            <p className="text-base md:text-lg mb-6 sm:mb-8 opacity-90">
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
        className={`py-12 md:py-16 lg:py-20 bg-muted/30 ${getAnimationClass("fade-in-up", true)}`}
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

          <Tabs
            value={selectedTab}
            onValueChange={setSelectedTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
              <TabsTrigger value="portfolio">
                {t("ui.projectPortfolio")}
              </TabsTrigger>
              <TabsTrigger value="showcase">
                {t("ui.featuredProjects")}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="portfolio" className="space-y-8">
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
                      className={`mr-2 w-4 h-4 transition-transform duration-300 ${showFilters ? "rotate-180" : ""}`}
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
                            {INDUSTRIES.map((industry) => (
                              <SelectItem key={industry} value={industry}>
                                {industry}
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
                              placeholder={t(
                                "common:placeholders.selectCategory",
                              )}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            {CATEGORIES.map((category) => (
                              <SelectItem key={category} value={category}>
                                {category}
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
                              placeholder={t(
                                "common:placeholders.selectStatus",
                              )}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            {STATUSES.map((status) => (
                              <SelectItem key={status} value={status}>
                                {status}
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
              <div className="text-center text-muted-foreground">
                {t("pages:projects.showing", {
                  count: filteredProjects.length,
                  total: PORTFOLIO_PROJECTS.length,
                })}
              </div>

              {/* Project Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => {
                  const Icon = getCategoryIcon(project.category);
                  return (
                    <motion.div
                      whileHover={{ y: -10, scale: 1.03 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      key={project.id}
                      className={getAnimationClass("fade-in-up", true)}
                    >
                      <Card className="bg-card border border-border rounded-lg p-8 shadow-sm hover:shadow-xl cursor-pointer">
                        <div className="aspect-video rounded-lg overflow-hidden mb-4">
                          <img
                            src={project.image}
                            alt={`ID-${200 + project.id}: ${project.title} project showcase`}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <CardHeader className="p-0 mb-4">
                          <div className="flex items-start justify-between mb-2">
                            <CardTitle className="text-xl md:text-2xl font-semibold text-foreground line-clamp-2">
                              {t(`pages:projects.items.${project.id}.title`)}
                            </CardTitle>
                            <div className="flex items-center gap-2 ml-2">
                              {project.featured && (
                                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-2 py-1">
                                  {t("pages:projects.featured")}
                                </Badge>
                              )}
                              {Icon}
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Building className="w-4 h-4" />
                            <span>
                              {t(`pages:projects.items.${project.id}.client`)}
                            </span>
                          </div>
                        </CardHeader>

                        <CardContent className="p-0 space-y-5">
                          <p className="text-base text-muted-foreground line-clamp-3 leading-relaxed">
                            {t(
                              `pages:projects.items.${project.id}.description`,
                            )}
                          </p>

                          <div className="space-y-4">
                            <div className="flex items-center justify-between text-sm">
                              <div className="flex items-center gap-1 text-muted-foreground">
                                <MapPin className="w-4 h-4" />
                                <span>
                                  {t(
                                    `pages:projects.items.${project.id}.location`,
                                  )}
                                </span>
                              </div>
                              <div className="flex items-center gap-1">
                                {getStatusIcon(project.status)}
                                <span
                                  className={`text-sm ${project.status === "Completed" ? "text-green-600" : "text-primary"}`}
                                >
                                  {t(
                                    `pages:projects.statuses.${project.status.toLowerCase().replace(/\s+/g, "")}`,
                                  )}
                                </span>
                              </div>
                            </div>

                            <div className="flex items-center justify-between text-sm">
                              <div className="flex items-center gap-1 text-muted-foreground">
                                <Calendar className="w-4 h-4" />
                                <span>
                                  {t(
                                    `pages:projects.items.${project.id}.duration`,
                                  )}
                                </span>
                              </div>
                              <div className="flex items-center gap-1 text-muted-foreground">
                                <span>{project.year}</span>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-3">
                              <Badge
                                variant="outline"
                                className="text-xs bg-primary/10 text-primary px-2 py-1 rounded group-hover:text-foreground transition-colors"
                              >
                                {t(
                                  `pages:projects.categories.${project.category.toLowerCase().replace(/\s+/g, "")}`,
                                )}
                              </Badge>
                              <Badge
                                variant="outline"
                                className="text-xs bg-primary/10 text-primary px-2 py-1 rounded group-hover:text-foreground transition-colors"
                              >
                                {project.year}
                              </Badge>
                            </div>

                            <div className="flex flex-wrap gap-2">
                              {project.technologies.slice(0, 3).map((tech) => (
                                <Badge
                                  key={tech}
                                  variant="outline"
                                  className="text-xs bg-primary/10 text-primary px-2 py-1 rounded group-hover:text-foreground transition-colors"
                                >
                                  {t(
                                    `pages:projects.technologies.${tech.toLowerCase().replace(/\s+/g, "")}`,
                                  )}
                                </Badge>
                              ))}
                              {project.technologies.length > 3 && (
                                <Badge
                                  variant="outline"
                                  className="text-sm px-3 py-1 bg-muted/50"
                                >
                                  {t(
                                    "pages:projects.moreItems",
                                    "+{{count}} more",
                                    { count: project.technologies.length - 3 },
                                  )}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </CardContent>
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
            </TabsContent>

            <TabsContent value="showcase" className="space-y-8">
              {/* Featured Projects Showcase */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {PROJECTS.filter((project) => project.featured).map(
                  (project: any) => (
                    <motion.div
                      whileHover={{ y: -10, scale: 1.03 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      key={project.id}
                    >
                      <Card className="bg-card border border-border rounded-lg shadow-sm overflow-hidden hover:shadow-xl cursor-pointer group">
                        <div className="aspect-video">
                          <img
                            src={project.image}
                            alt={`ID-${250 + project.id}: ${project.title} featured project`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardContent className="p-8">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                              {t(`pages:projects.items.${project.id}.title`)}
                            </h3>
                            <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-2 py-1 ml-2">
                              {t("pages:projects.featured")}
                            </Badge>
                          </div>
                          <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                            {t(
                              `pages:projects.items.${project.id}.description`,
                            )}
                          </p>

                          <div className="space-y-4 mb-6">
                            <h4 className="font-semibold text-foreground text-base">
                              Key Features:
                            </h4>
                            <div className="flex flex-wrap gap-3">
                              {project.highlights.map(
                                (highlight: string, index: number) => (
                                  <Badge
                                    key={index}
                                    variant="outline"
                                    className="text-sm px-4 py-2 bg-gray-100 text-gray-800 hover:bg-gray-200 cursor-pointer transition-colors border-gray-300"
                                  >
                                    {t(
                                      `pages:projects.highlights.${highlight.toLowerCase().replace(/\s+/g, "")}`,
                                    )}
                                  </Badge>
                                ),
                              )}
                            </div>
                          </div>

                          <div className="space-y-5 text-base text-muted-foreground">
                            <div className="flex items-start gap-4">
                              <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                              <span className="leading-relaxed text-base">
                                {t(
                                  `pages:projects.items.${project.id}.location`,
                                )}
                              </span>
                            </div>
                            <div className="flex items-start gap-4">
                              <TrendingUp className="w-5 h-5 flex-shrink-0 mt-0.5" />
                              <span className="leading-relaxed text-base">
                                {t(
                                  `pages:projects.items.${project.id}.duration`,
                                )}
                              </span>
                            </div>
                          </div>
                          <Button
                            className="text-secondary bg-transparent hover:bg-transparent hover:text-secondary p-0 font-semibold transition-all duration-300 w-full justify-center"
                            size="sm"
                          >
                            {t("common:buttons.learnMore")}
                            <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">
                              →
                            </span>{" "}
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ),
                )}
              </div>
            </TabsContent>
          </Tabs>
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
