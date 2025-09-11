import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PROJECTS } from "@/data/constants";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";

export default function ProjectsSection() {
  const { t } = useTranslation();
  
  // Get featured projects but use translation keys for the content
  const featuredProjectIds = ["industrial-automation-demo", "power-distribution-demo"];
  const projects = PROJECTS.filter(project => featuredProjectIds.includes(project.id));
  const categoryColors = {
    "Power Systems": "bg-secondary/10 text-secondary",
    Manufacturing: "bg-primary/10 text-primary",
    Solar: "bg-secondary/10 text-secondary",
    "Water Treatment": "bg-primary/10 text-primary",
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
            {t(
              "pages:home.projects.title")}
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
            
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`ID-050: ${project.title} - ${project.description}`}
                  className="w-full h-64 object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardContent className="p-4 sm:p-6 md:p-8 flex-1 flex flex-col">
                <div className="flex items-center mb-4">
                  <Badge
                    className={`mr-4 ${
                      categoryColors[
                        project.category as keyof typeof categoryColors
                      ] || "bg-muted text-foreground"
                    }`}
                  >
                    {t(
                      `common:projectCategories.${project.category}`,
                      project.category,
                    )}
                  </Badge>
                  <span className="text-muted-foreground text-sm">
                    {t("pages:home.projects.completed")}{" "}
                    {project.year}
                  </span>
                </div>

                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground">
                    {t(`common:projects.${project.id}.title`, project.title)}
                  </h3>
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-2 py-1 ml-2 flex-shrink-0">
                    Featured
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-6">
                  {t(`common:projects.${project.id}.description`, project.description)}
                </p>

                {/* Project Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-2">
                    {t("pages:home.projects.keyFeatures")}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight, index) => {
                      // Map highlight text to translation keys
                      const highlightMapping: { [key: string]: string } = {
                        "PLC Integration": "plcIntegration",
                        "SCADA Systems": "scadaSystems", 
                        "Real-time Monitoring": "realtimeMonitoring",
                        "Process Optimization": "processOptimization",
                        "Load Balancing": "loadBalancing",
                        "Protection Systems": "protectionSystems",
                        "Energy Management": "energyManagement",
                        "Remote Control": "remoteControl"
                      };
                      
                      const translationKey = highlightMapping[highlight] || highlight.toLowerCase().replace(/\s+/g, '');
                      
                      return (
                        <span
                          key={highlight}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                        >
                          {t(`common:projects.${project.id}.highlights.${translationKey}`, highlight)}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" aria-hidden="true" />
                      {t(`common:projects.${project.id}.location`, project.location)}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" aria-hidden="true" />
                      {t(`common:projects.${project.id}.duration`, project.duration)}
                    </span>
                  </div>
                  <Link href="/projects" className="group/button">
                    <Button
                      variant="ghost"
                      className="text-secondary hover:text-secondary hover:bg-transparent font-semibold transition-all duration-300"
                    >
                      {t("pages:home.projects.viewDetails")}
                      <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">
                        →
                      </span>{" "}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center px-2 sm:px-0">
          <Link href="/projects">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 mr-2 sm:mr-4 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              {t("pages:home.projects.viewAllProjects")}
            </Button>
          </Link>
          <a href="/portfolio-download">
            <Button
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              {t("pages:home.projects.downloadPortfolio")}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
