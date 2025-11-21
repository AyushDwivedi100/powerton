import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getTranslatedFeaturedProjects } from "@/data/projects-data";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";

export default function ProjectsSection() {
  const { t } = useTranslation();

  // Get translated featured projects
  const projects = getTranslatedFeaturedProjects(t);
  // Use stable IDs for badge colors
  const categoryColors: Record<string, string> = {
    "power-systems": "bg-secondary/10 text-secondary",
    "process-automation": "bg-primary/10 text-primary",
    "solar-solutions": "bg-secondary/10 text-secondary",
    "water-systems": "bg-primary/10 text-primary",
  };

  return (
    <section
      id="projects"
      className="py-12 md:py-16 lg:py-20 bg-muted"
      role="main"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <span className="text-secondary font-semibold text-lg">
            {t("pages:home.projects.label")}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-3 sm:mt-4 mb-4 sm:mb-6">
            {t("pages:home.projects.title")}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2 sm:px-0">
            {t("pages:home.projects.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {projects.slice(0, 4).map((project) => (
            <motion.div
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              key={project.id}
            >
              <Card className="overflow-hidden group bg-card border border-border rounded-lg p-6 shadow-sm cursor-pointer h-full flex flex-col">
                <CardContent className="p-4 sm:p-6 md:p-8 flex-1 flex flex-col">
                  <div className="flex items-center mb-4">
                    <Badge
                      className={`mr-4 ${
                        categoryColors[project.categoryId || ''] || "bg-muted text-foreground"
                      }`}
                    >
                      {project.category}
                    </Badge>
                    <span className="text-muted-foreground text-sm">
                      {t("pages:home.projects.completed")} {project.month} {project.year}
                    </span>
                  </div>

                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-2 py-1 ml-2 flex-shrink-0">
                      {t("pages:home.projects.featured")}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {project.description}
                  </p>

                  {/* Project Highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-2">
                      {t("pages:home.projects.keyFeatures")}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.slice(0, 3).map((highlight, index) => (
                        <span
                          key={index}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded group-hover:text-foreground transition-colors"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-6 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <MapPin
                          className="w-4 h-4 mr-2 text-primary flex-shrink-0"
                          aria-hidden="true"
                        />
                        <span className="font-medium">
                          {project.location}
                        </span>
                      </span>
                      <span className="flex items-center">
                        <Calendar
                          className="w-4 h-4 mr-2 text-primary flex-shrink-0"
                          aria-hidden="true"
                        />
                        <span className="font-medium">
                          {project.client}
                        </span>
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center px-2 sm:px-0">
          <Link href="/projects">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              {t("pages:home.projects.viewAllProjects")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
