import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Download,
  FileText,
  Image,
  Briefcase,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";

export default function PortfolioDownload() {
  const { t } = useTranslation(["pages", "common"]);
  const portfolioItems = [
    {
      id: 1,
      title: t("pages:portfolioDownload.items.complete.title"),
      description: t("pages:portfolioDownload.items.complete.description"),
      type: "PDF",
      size: "8.2 MB",
      pages: 45,
      categories: [
        t("pages:portfolioDownload.categories.allProjects"),
        t("pages:portfolioDownload.categories.companyOverview"),
        t("pages:portfolioDownload.categories.certifications"),
        t("pages:portfolioDownload.categories.clientTestimonials"),
      ],
    },
    {
      id: 2,
      title: t("pages:portfolioDownload.items.automation.title"),
      description: t("pages:portfolioDownload.items.automation.description"),
      type: "PDF",
      size: "6.5 MB",
      pages: 32,
      categories: [
        t("pages:portfolioDownload.categories.processAutomation"),
        t("pages:portfolioDownload.categories.controlSystems"),
        t("pages:portfolioDownload.categories.scada"),
        t("pages:portfolioDownload.categories.plcProgramming"),
      ],
    },
    {
      id: 3,
      title: t("pages:portfolioDownload.items.electrical.title"),
      description: t("pages:portfolioDownload.items.electrical.description"),
      type: "PDF",
      size: "5.8 MB",
      pages: 28,
      categories: [
        t("pages:portfolioDownload.categories.powerDistribution"),
        t("pages:portfolioDownload.categories.controlPanels"),
        t("pages:portfolioDownload.categories.motorControlCenters"),
        t("pages:portfolioDownload.categories.energyManagement"),
      ],
    },
    {
      id: 4,
      title: t("pages:portfolioDownload.items.caseStudies.title"),
      description: t("pages:portfolioDownload.items.caseStudies.description"),
      type: "PDF",
      size: "4.2 MB",
      pages: 24,
      categories: [
        t("pages:portfolioDownload.categories.caseStudies"),
        t("pages:portfolioDownload.categories.technicalSolutions"),
        t("pages:portfolioDownload.categories.roiAnalysis"),
        t("pages:portfolioDownload.categories.implementationStrategies"),
      ],
    },
  ];

  const handleDownload = (item: (typeof portfolioItems)[0]) => {
    // In a real implementation, this would trigger the actual download
    // For now, we'll show an alert
    alert(
      `${t("pages:portfolioDownload.alert.downloading")}: ${item.title}\n\n${t(
        "pages:portfolioDownload.alert.contactMessage"
      )}`
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{t("pages:portfolioDownload.seo.title")}</title>
        <meta
          name="description"
          content={t("pages:portfolioDownload.seo.description")}
        />
        <meta
          property="og:title"
          content={t("pages:portfolioDownload.seo.title")}
        />
        <meta
          property="og:description"
          content={t("pages:portfolioDownload.seo.description")}
        />
      </Helmet>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Download className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t("pages:portfolioDownload.title")}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("pages:portfolioDownload.subtitle")}
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {t("pages:portfolioDownload.features.projects.title")}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t("pages:portfolioDownload.features.projects.description")}
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <Image className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {t("pages:portfolioDownload.features.documentation.title")}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t(
                  "pages:portfolioDownload.features.documentation.description"
                )}
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {t("pages:portfolioDownload.features.results.title")}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t("pages:portfolioDownload.features.results.description")}
              </p>
            </div>
          </div>

          {/* Portfolio Items */}
          <div className="grid md:grid-cols-2 gap-6">
            {portfolioItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Card className="bg-card border border-border rounded-lg shadow-sm cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          {item.description}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                          <span className="flex items-center gap-1">
                            <FileText className="w-3 h-3" />
                            {item.type}
                          </span>
                          <span>{item.size}</span>
                          <span>
                            {item.pages} {t("pages:portfolioDownload.pages")}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-medium text-foreground mb-2">
                        {t("pages:portfolioDownload.includes")}:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.categories.map((category) => (
                          <Badge
                            key={category}
                            variant="outline"
                            className="text-xs"
                          >
                            {category}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button
                      onClick={() => handleDownload(item)}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      {t("pages:portfolioDownload.requestDownload")}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="mt-12 p-6 bg-muted rounded-lg text-center">
            <h3 className="text-lg font-semibold text-foreground mb-3">
              {t("pages:portfolioDownload.custom.title")}
            </h3>
            <p className="text-muted-foreground mb-4">
              {t("pages:portfolioDownload.custom.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <a href="/contact" className="flex items-center">
                  {t("common:buttons.contactUs")}
                </a>
              </Button>
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <a href="/quote" className="flex items-center">
                  {t("common:buttons.requestQuote")}
                </a>
              </Button>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-4 bg-card border border-border rounded-lg">
            <p className="text-xs text-muted-foreground text-center">
              <strong>{t("pages:portfolioDownload.disclaimer.note")}:</strong>{" "}
              {t("pages:portfolioDownload.disclaimer.text")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
