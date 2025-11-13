import { motion } from "framer-motion";
import { SEO } from "@/lib/seo";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Users,
  Building2,
  Wrench,
  Package,
  ZoomIn,
  Calendar,
  MapPin,
  Award,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  AnimatedSection,
  useScrollAnimations,
} from "@/hooks/use-scroll-animation";
import { useState } from "react";
import { getAllProductsForGallery } from "@/data/productImages";
// Using a professional engineering team image from the existing assets
import galleryHeroImage from "@assets/generated_images/Engineering_Team_Working_82b3dac7.png";

export default function Gallery() {
  useScrollAnimations();
  const { t } = useTranslation(["pages", "common"]);
  const [activeTab, setActiveTab] = useState<
    "company" | "projects" | "products"
  >("company");

  // Company and Employee Images Data
  const companyImages = [
    {
      id: 1,
      title: t("gallery.company.images.modernFacility.title"),
      description: t("gallery.company.images.modernFacility.description"),
      category: t("gallery.company.categories.facility"),
      year: "2024",
    },
    {
      id: 2,
      title: t("gallery.company.images.expertTeam.title"),
      description: t("gallery.company.images.expertTeam.description"),
      category: t("gallery.company.categories.team"),
      year: "2024",
    },
    {
      id: 3,
      title: t("gallery.company.images.qualityLab.title"),
      description: t("gallery.company.images.qualityLab.description"),
      category: t("gallery.company.categories.facility"),
      year: "2024",
    },
    {
      id: 4,
      title: t("gallery.company.images.trainingCenter.title"),
      description: t("gallery.company.images.trainingCenter.description"),
      category: t("gallery.company.categories.training"),
      year: "2024",
    },
    {
      id: 5,
      title: t("gallery.company.images.supportCenter.title"),
      description: t("gallery.company.images.supportCenter.description"),
      category: t("gallery.company.categories.support"),
      year: "2024",
    },
    {
      id: 6,
      title: t("gallery.company.images.rdWing.title"),
      description: t("gallery.company.images.rdWing.description"),
      category: t("gallery.company.categories.rd"),
      year: "2024",
    },
  ];

  // Project Images Data
  const projectImages = [
    {
      id: 1,
      title: t("gallery.projects.images.controlPanel.title"),
      description: t("gallery.projects.images.controlPanel.description"),
      location: t("products:locations.delhiNcr"),
      year: "2024",
      category: t("gallery.projects.categories.automation"),
      client: t("gallery.projects.images.controlPanel.client"),
    },
    {
      id: 2,
      title: t("gallery.projects.images.solarPlant.title"),
      description: t("gallery.projects.images.solarPlant.description"),
      location: t("products:locations.rajasthan"),
      year: "2024",
      category: t("gallery.projects.categories.solarEpc"),
      client: t("gallery.projects.images.solarPlant.client"),
    },
    {
      id: 3,
      title: t("gallery.projects.images.scadaSystem.title"),
      description: t("gallery.projects.images.scadaSystem.description"),
      location: t("products:locations.uttarPradesh"),
      year: "2023",
      category: t("gallery.projects.categories.scada"),
      client: t("gallery.projects.images.scadaSystem.client"),
    },
    {
      id: 4,
      title: t("gallery.projects.images.instrumentation.title"),
      description: t("gallery.projects.images.instrumentation.description"),
      location: t("products:locations.gujarat"),
      year: "2023",
      category: t("gallery.projects.categories.instrumentation"),
      client: t("gallery.projects.images.instrumentation.client"),
    },
    {
      id: 5,
      title: t("gallery.projects.images.plcProgramming.title"),
      description: t("gallery.projects.images.plcProgramming.description"),
      location: t("products:locations.maharashtra"),
      year: "2024",
      category: t("gallery.projects.categories.plcProgramming"),
      client: t("gallery.projects.images.plcProgramming.client"),
    },
    {
      id: 6,
      title: t("gallery.projects.images.electricalPanel.title"),
      description: t("gallery.projects.images.electricalPanel.description"),
      location: t("products:locations.haryana"),
      year: "2023",
      category: t("gallery.projects.categories.electrical"),
      client: t("gallery.projects.images.electricalPanel.client"),
    },
  ];

  // Product Images Data - Automatically loaded from centralized data source
  // Shows ALL products (including old ones) - sorted by newest first
  const productImages = getAllProductsForGallery().map((product, index) => ({
    id: index + 1,
    title: product.title,
    description: `${product.category} - High-quality industrial product`,
    category: product.category,
    brand: product.title.split(" ")[0], // Extract brand from title
    image: product.image,
  }));

  const tabs = [
    {
      id: "company" as const,
      label: t("gallery.tabs.company"),
      icon: Users,
      count: companyImages.length,
    },
    {
      id: "projects" as const,
      label: t("gallery.tabs.projects"),
      icon: Building2,
      count: projectImages.length,
    },
    {
      id: "products" as const,
      label: t("gallery.tabs.products"),
      icon: Package,
      count: productImages.length,
    },
  ];

  const ImageCard = ({
    image,
    type,
  }: {
    image: any;
    type: "company" | "projects" | "products";
  }) => (
    <motion.div
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Card className="group bg-card border border-border overflow-hidden cursor-pointer" data-testid={`card-gallery-${type}-${image.id}`}>
        <div className="relative">
          {/* Image or placeholder */}
          {type === "products" && image.image ? (
            <div className="w-full h-48 overflow-hidden bg-white dark:bg-gray-900">
              <img 
                src={image.image} 
                alt={image.title}
                className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                data-testid={`img-product-${image.id}`}
              />
            </div>
          ) : (
            <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <div className="text-center p-4">
                <ZoomIn className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">
                  {t("products:gallery.imagePlaceholder")}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {t("products:gallery.actualImages")}
                </p>
              </div>
            </div>
          )}
          <div className="absolute top-3 right-3">
            <Badge
              variant="secondary"
              className="bg-background/90 text-secondary"
            >
              {type === "company" && image.category}
              {type === "projects" && image.category}
              {type === "products" && image.category}
            </Badge>
          </div>
        </div>

        <CardContent className="p-4">
          <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-secondary transition-colors">
            {image.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-3">
            {image.description}
          </p>

          <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
            {type === "company" && (
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{image.year}</span>
              </div>
            )}

            {type === "projects" && (
              <>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span>{image.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{image.year}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Building2 className="w-3 h-3" />
                  <span>{image.client}</span>
                </div>
              </>
            )}

            {type === "products" && (
              <div className="flex items-center gap-1">
                <Award className="w-3 h-3" />
                <span>{image.brand}</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <>
      <SEO
        title={t("pages:gallery.seo.title")}
        description={t("pages:gallery.seo.description")}
        keywords={t("pages:gallery.seo.keywords")}
        canonicalUrl="https://powertonengineering.in/gallery"
      />

      {/* Hero Section */}
      <section className="relative hero-fullscreen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat "
          style={{
            backgroundImage: `url(${galleryHeroImage})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-blue-600/60 dark:bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-white text-center">
          <AnimatedSection animation="fadeInUp" delay={0.1} duration={0.8}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-wrap-safe responsive-text">
              {t("pages:gallery.hero.title")}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto text-wrap-safe">
              {t("pages:gallery.hero.subtitle")}
            </p>
            <div className="flex justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-secondary" />
                <span>{t("common:buttons.expertTeam", "Expert Team")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-secondary" />
                <span>
                  {t(
                    "common:buttons.successfulProjects",
                    "Successful Projects"
                  )}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Package className="w-5 h-5 text-secondary" />
                <span>
                  {t("common:buttons.qualityProducts", "Quality Products")}
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery Tabs */}
      <section className="py-12 md:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Tab Navigation */}
          <AnimatedSection animation="fadeInUp" delay={0.2} duration={0.8}>
            <div className="flex justify-center mb-12">
              <div className="flex bg-muted p-1 rounded-lg">
                {tabs.map((tab) => (
                  <Button
                    key={tab.id}
                    variant={activeTab === tab.id ? "default" : "ghost"}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                      activeTab === tab.id
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "hover:bg-background hover:text-foreground"
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span className="sm:hidden">{tab.label.split(" ")[0]}</span>
                    <Badge variant="secondary" className="ml-1 text-xs">
                      {tab.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Tab Content */}
          <AnimatedSection animation="fadeIn" delay={0.3} duration={0.8}>
            {/* Company & Team Tab */}
            {activeTab === "company" && (
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {t("gallery.sections.company.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {t("gallery.sections.company.description")}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {companyImages.map((image) => (
                    <ImageCard key={image.id} image={image} type="company" />
                  ))}
                </div>
              </div>
            )}

            {/* Projects Tab */}
            {activeTab === "projects" && (
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {t("gallery.sections.projects.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {t("gallery.sections.projects.description")}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projectImages.map((image) => (
                    <ImageCard key={image.id} image={image} type="projects" />
                  ))}
                </div>
              </div>
            )}

            {/* Products Tab */}
            {activeTab === "products" && (
              <div>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {t("gallery.sections.products.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {t("gallery.sections.products.description")}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {productImages.map((image) => (
                    <ImageCard key={image.id} image={image} type="products" />
                  ))}
                </div>
              </div>
            )}
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
