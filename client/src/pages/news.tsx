import { useState } from "react";
import { motion } from "framer-motion";
import { SEO } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  Award,
  TrendingUp,
  Target,
  Newspaper,
  Trophy,
  Rocket,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Users,
  Building,
  Zap,
  Globe,
} from "lucide-react";
import { Link } from "wouter";
import {
  useScrollAnimation,
  getAnimationClass,
} from "@/hooks/use-scroll-animation";
import { getHeroImage } from "@/assets/images";

// Company news and updates data - moved inside component

// Move inside component to use translation function
const getUpcomingProjects = (t: any) => [
  {
    id: 1,
    title: t("pages:news.upcomingProjects.smartCity.title"),
    client: t("pages:news.upcomingProjects.smartCity.client"),
    value: "₹12 Crores",
    timeline: "Q1 2025 - Q4 2025",
    description: t("pages:news.upcomingProjects.smartCity.description"),
    status: t("pages:news.projectStatuses.planningPhase"),
    technologies: [
      t("pages:news.upcomingProjects.smartCity.technologies.iot"),
      t("pages:news.upcomingProjects.smartCity.technologies.smartSensors"),
      t("pages:news.upcomingProjects.smartCity.technologies.cityManagement"),
      t("pages:news.upcomingProjects.smartCity.technologies.energyAutomation"),
    ],
  },
  {
    id: 2,
    title: t("pages:news.upcomingProjects.pharmaceutical.title"),
    client: t("pages:news.upcomingProjects.pharmaceutical.client"),
    value: "₹8 Crores",
    timeline: "Q2 2025 - Q3 2025",
    description: t("pages:news.upcomingProjects.pharmaceutical.description"),
    status: t("pages:news.projectStatuses.contractSigned"),
    technologies: [
      t("pages:news.upcomingProjects.pharmaceutical.technologies.gmpCompliance"),
      t("pages:news.upcomingProjects.pharmaceutical.technologies.batchProcessing"),
      t("pages:news.upcomingProjects.pharmaceutical.technologies.qualityControl"),
      t("pages:news.upcomingProjects.pharmaceutical.technologies.traceabilitySystems"),
    ],
  },
  {
    id: 3,
    title: t("pages:news.upcomingProjects.solarFarm.title"),
    client: t("pages:news.upcomingProjects.solarFarm.client"),
    value: "₹6 Crores",
    timeline: "Q1 2025 - Q2 2025",
    description: t("pages:news.upcomingProjects.solarFarm.description"),
    status: t("pages:news.projectStatuses.engineeringPhase"),
    technologies: [
      t("pages:news.upcomingProjects.solarFarm.technologies.solarTracking"),
      t("pages:news.upcomingProjects.solarFarm.technologies.weatherSystems"),
      t("pages:news.upcomingProjects.solarFarm.technologies.gridIntegration"),
      t("pages:news.upcomingProjects.solarFarm.technologies.remoteMonitoring"),
    ],
  },
];

export default function News() {
  const { t } = useTranslation(["common", "pages"]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTab, setSelectedTab] = useState("news");
  const heroAnimation = useScrollAnimation();

  // Get translated upcoming projects
  const UPCOMING_PROJECTS = getUpcomingProjects(t);

  // Move LATEST_NEWS inside component to access t function
  const LATEST_NEWS = [
    {
      id: 1,
      title: t("pages:news.latestNews.excellenceAward.title"),
      date: "2024-12-15",
      category: t("pages:news.latestNews.excellenceAward.category"),
      excerpt: t("pages:news.latestNews.excellenceAward.excerpt"),
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: [
        t("common:tags.award"),
        t("common:tags.recognition"),
        t("common:tags.automation"),
      ],
      featured: true,
    },
    {
      id: 2,
      title: t("pages:news.latestNews.ntpcContract.title"),
      date: "2024-12-10",
      category: t("pages:news.latestNews.ntpcContract.category"),
      excerpt: t("pages:news.latestNews.ntpcContract.excerpt"),
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: [
        t("common:tags.contract"),
        t("common:tags.powerPlant"),
        t("common:tags.ntpc"),
      ],
      featured: true,
    },
    {
      id: 3,
      title: t("pages:news.latestNews.renewableExpansion.title"),
      date: "2024-12-05",
      category: t("pages:news.latestNews.renewableExpansion.category"),
      excerpt: t("pages:news.latestNews.renewableExpansion.excerpt"),
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: [
        t("common:tags.renewableEnergy"),
        t("common:tags.expansion"),
        t("common:tags.solar"),
      ],
      featured: false,
    },
    {
      id: 4,
      title: t("pages:news.latestNews.rdFacility.title"),
      date: "2024-11-28",
      category: t("pages:news.latestNews.rdFacility.category"),
      excerpt: t("pages:news.latestNews.rdFacility.excerpt"),
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: [
        t("common:tags.rd"),
        t("common:tags.infrastructure"),
        t("common:tags.innovation"),
      ],
      featured: false,
    },
    {
      id: 5,
      title: t("pages:news.latestNews.europeanPartnership.title"),
      date: "2024-11-20",
      category: t("pages:news.latestNews.europeanPartnership.category"),
      excerpt: t("pages:news.latestNews.europeanPartnership.excerpt"),
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: [
        t("common:tags.partnership"),
        t("common:tags.technology"),
        t("common:tags.europe"),
      ],
      featured: false,
    },
    {
      id: 6,
      title: t("pages:news.latestNews.isoAchievement.title"),
      date: "2024-11-15",
      category: t("pages:news.latestNews.isoAchievement.category"),
      excerpt: t("pages:news.latestNews.isoAchievement.excerpt"),
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: [
        t("common:tags.iso"),
        t("common:tags.quality"),
        t("common:tags.certification"),
      ],
      featured: false,
    },
  ];

  const categories = [
    "all",
    t("pages:news.latestNews.excellenceAward.category"),
    t("pages:news.latestNews.ntpcContract.category"),
    t("pages:news.latestNews.renewableExpansion.category"),
    t("pages:news.latestNews.rdFacility.category"),
    t("pages:news.latestNews.europeanPartnership.category"),
    t("pages:news.latestNews.isoAchievement.category"),
  ];

  const filteredNews =
    selectedCategory === "all"
      ? LATEST_NEWS
      : LATEST_NEWS.filter((item) => item.category === selectedCategory);

  const featuredNews = LATEST_NEWS.filter((item) => item.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      Awards: "bg-accent/10 text-accent-foreground",
      Business: "bg-secondary/10 text-secondary",
      Company: "bg-primary/10 text-primary",
      Infrastructure: "bg-accent/20 text-accent-foreground",
      Partnership: "bg-primary/20 text-primary",
      Quality: "bg-secondary/20 text-secondary",
    };
    return (
      colors[category as keyof typeof colors] ||
      "bg-muted text-muted-foreground"
    );
  };

  const getStatusColor = (status: string) => {
    const colors = {
      "Planning Phase": "bg-secondary/10 text-secondary",
      "Contract Signed": "bg-primary/10 text-primary",
      "Engineering Phase": "bg-accent/10 text-accent-foreground",
      "In Progress": "bg-secondary/20 text-secondary",
    };
    return (
      colors[status as keyof typeof colors] || "bg-muted text-muted-foreground"
    );
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "News & Updates - Powerton Engineering",
    description:
      "Latest news, company updates, achievements, and future goals of Powerton Engineering - Industrial Automation Excellence",
    url: "https://powertonengineering.in/news",
    mainEntity: {
      "@type": "Organization",
      name: "Powerton Engineering Pvt. Ltd.",
      description:
        "Leading industrial automation and electrical engineering company",
    },
  };

  return (
    <>
      <SEO
        title="News & Updates - Company News, Achievements & Future Goals | Powerton Engineering"
        description="Stay updated with latest news, achievements, awards, upcoming projects, and future goals of Powerton Engineering. Leading industrial automation company's journey towards excellence."
        keywords="company news, engineering news, automation industry updates, powerton achievements, industrial automation awards, engineering excellence, company milestones"
        canonicalUrl="https://powertonengineering.in/news"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section
        className={`relative hero-fullscreen overflow-hidden ${getAnimationClass(
          "fade-in-up",
          true
        )}`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat "
          style={{
            backgroundImage: `url(${getHeroImage("news")?.src})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-blue-600/60 dark:bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-wrap-safe responsive-text">
              {t("pages:news.hero.title")} &{" "}
              <span className="text-secondary">
                {t("pages:news.hero.titleHighlight")}
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto text-wrap-safe">
              {t("pages:news.hero.subtitle")}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center bg-muted/50 backdrop-blur-sm rounded-lg px-4 py-2">
                <Award className="w-5 h-5 mr-2 text-secondary" />
                <span className="text-sm">
                  {t("pages:news.hero.badges.awardWinning")}
                </span>
              </div>
              <div className="flex items-center bg-muted/50 backdrop-blur-sm rounded-lg px-4 py-2">
                <TrendingUp className="w-5 h-5 mr-2 text-secondary" />
                <span className="text-sm">
                  {t("pages:news.hero.badges.growingStrong")}
                </span>
              </div>
              <div className="flex items-center bg-muted/50 backdrop-blur-sm rounded-lg px-4 py-2">
                <Rocket className="w-5 h-5 mr-2 text-secondary" />
                <span className="text-sm">
                  {t("pages:news.hero.badges.futureReady")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Tabs */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <Tabs
            value={selectedTab}
            onValueChange={setSelectedTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 max-w-2xl mx-auto mb-12">
              <TabsTrigger value="news" className="flex items-center gap-2">
                <Newspaper className="w-4 h-4" />
                {t("pages:news.tabs.latestNews")}
              </TabsTrigger>
              <TabsTrigger value="projects" className="flex items-center gap-2">
                <Rocket className="w-4 h-4" />
                {t("pages:news.tabs.upcomingProjects")}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="news" className="space-y-12">
              {/* Featured News */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                  {t("pages:news.sections.featuredNews")}
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {featuredNews.map((item) => (
                    <motion.div
                      key={item.id}
                      whileHover={{ y: -10, scale: 1.03 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <Card className="bg-card border border-border rounded-lg shadow-sm overflow-hidden cursor-pointer">
                        <div className="aspect-video">
                          <img
                            src={item.image}
                            alt={`ID-850: ${item.title}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardContent className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <Badge className={getCategoryColor(item.category)}>
                              {item.category}
                            </Badge>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="w-4 h-4 mr-1" />
                              {formatDate(item.date)}
                            </div>
                          </div>
                          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            {item.excerpt}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {item.tags.map((tag) => (
                              <Badge
                                key={tag}
                                variant="outline"
                                className="text-xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <a
                            href={`/news/${item.title
                              .toLowerCase()
                              .replace(/[^a-z0-9]+/g, "-")
                              .replace(/^-|-$/g, "")}`}
                          >
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                            >
                              {t("common:buttons.readMore")}
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </a>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                  {t("pages:news.sections.allNews")}
                </h2>
                <div className="flex flex-wrap gap-2 mb-8">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={
                        selectedCategory === category ? "default" : "outline"
                      }
                      onClick={() => setSelectedCategory(category)}
                      size="sm"
                      className={
                        selectedCategory === category
                          ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                          : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      }
                    >
                      {category === "all"
                        ? t("pages:news.sections.allCategories")
                        : category}
                    </Button>
                  ))}
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredNews.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card
                        key={item.id}
                        className="bg-card border border-border rounded-lg shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 overflow-hidden"
                      >
                        <div className="aspect-video">
                          <img
                            src={item.image}
                            alt={`ID-${860 + item.id}: ${item.title}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardContent className="p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className={getCategoryColor(item.category)}>
                              {item.category}
                            </Badge>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <Calendar className="w-3 h-3 mr-1" />
                              {formatDate(item.date)}
                            </div>
                          </div>
                          <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
                            {item.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                            {item.excerpt}
                          </p>
                          <a
                            href={`/news/${item.title
                              .toLowerCase()
                              .replace(/[^a-z0-9]+/g, "-")
                              .replace(/^-|-$/g, "")}`}
                          >
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                            >
                              {t("common:buttons.readMore")}
                            </Button>
                          </a>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="projects" className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                  {t("pages:news.sections.upcomingProjects")}
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Exciting projects on the horizon that demonstrate our
                  commitment to innovation and excellence.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {UPCOMING_PROJECTS.map((project) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card
                        key={project.id}
                        className="bg-card border border-border rounded-lg shadow-sm"
                      >
                        <CardHeader className="p-6">
                          <div className="flex items-start justify-between mb-2">
                            <CardTitle className="text-xl md:text-2xl font-semibold text-foreground">
                              {project.title}
                            </CardTitle>
                            <Badge className={getStatusColor(project.status)}>
                              {project.status}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Building className="w-4 h-4" />
                              <span>{project.client}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{project.timeline}</span>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="p-6 pt-0">
                          <p className="text-muted-foreground mb-4">
                            {project.description}
                          </p>
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-2xl font-bold text-secondary">
                              {project.value}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="outline"
                                className="text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 lg:py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t("pages:news.cta.title")}
          </h2>
          <p className="text-white md:text-lg mb-8 max-w-2xl mx-auto opacity-90">
            {t("pages:news.cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-3 rounded-lg font-semibold transition-colors">
                {t("common:buttons.contactUs")}
              </Button>
            </Link>
            <Link href="/projects">
              <Button
                variant="outline"
                className="border-2 border-border text-foreground hover:bg-foreground hover:text-background px-6 py-3 rounded-lg font-semibold transition-all"
              >
                {t("common:buttons.viewProjects")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
