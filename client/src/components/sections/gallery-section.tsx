import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export default function GallerySection() {
  const { t } = useTranslation(["pages", "common"]);
  const galleryImages = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      title: t("pages:gallery.projects.controlPanel.title"),
      category: t("pages:gallery.categories.electricalSystems"),
      description: t("pages:gallery.projects.controlPanel.description"),
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      title: t("pages:gallery.projects.processAutomation.title"),
      category: t("pages:gallery.categories.automation"),
      description: t("pages:gallery.projects.processAutomation.description"),
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      title: t("pages:gallery.projects.safetySystem.title"),
      category: t("pages:gallery.categories.safetyProtection"),
      description: t("pages:gallery.projects.safetySystem.description"),
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1508615070457-7baeba4003ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      title: t("pages:gallery.projects.solarPower.title"),
      category: t("pages:gallery.categories.renewableEnergy"),
      description: t("pages:gallery.projects.solarPower.description"),
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      title: t("pages:gallery.projects.instrumentation.title"),
      category: t("pages:gallery.categories.measurementSystems"),
      description: t("pages:gallery.projects.instrumentation.description"),
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      title: t("pages:gallery.projects.pumpStation.title"),
      category: t("pages:gallery.categories.mechanicalSystems"),
      description: t("pages:gallery.projects.pumpStation.description"),
    },
  ];

  const categoryColors = {
    [t("pages:gallery.categories.electricalSystems")]:
      "bg-primary/10 text-primary border-primary/20",
    [t("pages:gallery.categories.automation")]:
      "bg-secondary/10 text-secondary border-secondary/20",
    [t("pages:gallery.categories.safetyProtection")]:
      "bg-destructive/10 text-destructive border-destructive/20",
    [t("pages:gallery.categories.renewableEnergy")]:
      "bg-accent/10 text-accent-foreground border-accent/20",
    [t("pages:gallery.categories.measurementSystems")]:
      "bg-primary/15 text-primary border-primary/30",
    [t("pages:gallery.categories.mechanicalSystems")]:
      "bg-secondary/15 text-secondary border-secondary/30",
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/30" role="main">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-secondary font-semibold text-responsive-sm">
            {t("pages:gallery.section.label")}
          </span>
          <h2 className="text-responsive-xl font-bold text-primary mt-2 sm:mt-4 mb-4 sm:mb-6">
            {t("pages:gallery.section.title")}
          </h2>
          <p className="text-responsive-base text-foreground/70 max-w-3xl mx-auto">
            {t("pages:gallery.section.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12">
          {galleryImages.map((item) => (
            <Card
              key={item.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 card-hover border-none"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={`${item.title} - ${item.description}`}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white">
                    <Badge
                      className={`mb-2 ${
                        categoryColors[
                          item.category as keyof typeof categoryColors
                        ] || "bg-muted text-muted-foreground"
                      }`}
                    >
                      {item.category}
                    </Badge>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                </div>

                {/* View Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-background/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Statistics Row */}
        <div className="bg-background border border-border rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 mb-8 sm:mb-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2">
                <AnimatedCounter target={250} suffix="+" />
              </div>
              <div className="text-foreground/70 text-xs sm:text-sm lg:text-base">
                {t("pages:gallery.stats.projectsCompleted")}
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2">
                <AnimatedCounter target={150} suffix="+" />
              </div>
              <div className="text-foreground/70 text-xs sm:text-sm lg:text-base">
                {t("common:company.stats.clientsServed")}
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2">
                <AnimatedCounter target={15} suffix="+" />
              </div>
              <div className="text-foreground/70 text-xs sm:text-sm lg:text-base">
                {t("common:company.stats.yearsExperience")}
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2">
                <AnimatedCounter target={50} suffix="+" />
              </div>
              <div className="text-foreground/70 text-xs sm:text-sm lg:text-base">
                {t("common:company.stats.citiesServed")}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center items-center">
          <Link href="/projects">
            <Button className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
              {t("common:buttons.viewAll")} {t("navigation:projects")}
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
