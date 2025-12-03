import { useParams } from "wouter";
import { SEO } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/hooks/use-scroll-animation";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Phone,
  Mail,
  Download,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { getProductSubCategoryBySlug } from "@/data/products-sub-category-pages-data";
import { getGroupsForSubcategory } from "@/data/products-detail-pages-data";
import { getProductImageSrc } from "@/assets/images";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

// Utility function to truncate text by word count
const truncateText = (text: string, maxWords: number = 20): string => {
  const words = text.split(" ");
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(" ") + "...";
};

export default function ProductSubCategoryDynamic() {
  const { parentSlug, slug } = useParams<{
    parentSlug: string;
    slug: string;
  }>();
  const { t } = useTranslation(["products", "common", "products-data"]);
  useScrollAnimation();

  if (!slug || !parentSlug) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {t("common:errors.subCategoryNotFound")}
          </h1>
          <p className="text-muted-foreground mb-8">
            {t("common:errors.subCategoryNotFoundMessage")}
          </p>
          <Button
            variant="ghost"
            className="bg-primary hover:bg-primary/90 text-primary-foreground group"
            asChild
          >
            <Link href="/products" data-testid="link-back-to-category">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-2 transition-transform duration-300" />
              {t("common:buttons.backToProducts")}
            </Link>
          </Button>
        </motion.div>
      </div>
    );
  }

  const product = getProductSubCategoryBySlug(slug, t);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {t("common:errors.subCategoryNotFound")}
          </h1>
          <p className="text-muted-foreground mb-8">
            {t("common:errors.subCategoryNotFoundMessage")}
          </p>
          <Button
            variant="ghost"
            className="bg-primary hover:bg-primary/90 text-primary-foreground group"
            asChild
          >
            <Link
              href="/products"
              data-testid="link-back-to-category"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-2 transition-transform duration-300" />
              {t("common:buttons.backToProducts")}
            </Link>
          </Button>
        </motion.div>
      </div>
    );
  }

  const expectedParentSlug = product.parentCategory?.split("/").pop() || "";

  // Use expectedParentSlug instead of parentSlug from URL params to avoid empty/incorrect slugs
  const correctParentSlug = expectedParentSlug || parentSlug;

  if (parentSlug !== expectedParentSlug) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {t("common:errors.subCategoryNotFound")}
          </h1>
          <p className="text-muted-foreground mb-8">
            {t("common:errors.subCategoryNotFoundMessage")}
          </p>
          <Button
            variant="ghost"
            className="bg-primary hover:bg-primary/90 text-primary-foreground group"
            asChild
          >
            <Link
              href={product.parentCategory || "/products"}
              data-testid="link-back-to-category"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-2 transition-transform duration-300" />
              {t("common:buttons.backTo")} {product.parentCategoryTitle || t("common:buttons.products")}
            </Link>
          </Button>
        </motion.div>
      </div>
    );
  }

  const IconComponent = product.icon;

  // Get product groups for this subcategory
  const productGroups = getGroupsForSubcategory(slug);

  return (
    <>
      <SEO
        title={product.seo.title}
        description={product.seo.description}
        keywords={product.seo.keywords}
        canonicalUrl={product.seo.canonicalUrl}
      />

      {/* Hero Section */}
      <section className="relative hero-fullscreen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${product.image})`,
          }}
        />
        <div className="absolute inset-0 bg-blue-600/60 dark:bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-white">
          <div className="text-center">
            <Button
              variant="ghost"
              className="mb-6 hover:bg-white/10 text-white group"
              asChild
            >
              <Link
                href={product.parentCategory}
                data-testid="link-back-to-category"
              >
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-2 transition-transform duration-200" />
                {t("common:buttons.backTo")} {product.parentCategoryTitle}
              </Link>
            </Button>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <IconComponent className="w-16 h-16 text-secondary mr-4" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-wrap-safe responsive-text">
                {product.title}
              </h1>
            </div>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto text-wrap-safe">
              {product.shortDescription}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <Link href="/quote">
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 text-lg font-semibold w-full sm:w-auto group">
                  {t("common:buttons.getQuote")}{" "}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-3 transition-transform duration-200" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-2 border-border text-foreground hover:bg-foreground hover:text-background px-8 py-3 text-lg font-semibold w-full sm:w-auto"
                >
                  {t("common:buttons.contactUs")}{" "}
                  <Phone className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("products:sections.products")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {t("products:sections.productsDescription")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Render product groups for subcategories that have them */}
              {productGroups.length > 0 &&
                productGroups.map((group, index) => {
                  // Use the title and description from the ProductGroup
                  const groupTitle =
                    group.title || group.key.toUpperCase().replace("-", " ");
                  const groupDescription =
                    group.description ||
                    t("products-data:defaults.groupDescription");

                  return (
                    <Link
                      key={group.key}
                      href={`/products/${correctParentSlug}/${slug}/${group.slug}`}
                    >
                      <Card
                        className="group hover:shadow-lg transition-all duration-300"
                        data-testid={`card-group-${group.key}`}
                      >
                        <div className="relative overflow-hidden rounded-t-lg">
                          <img
                            src={getProductImageSrc(group.image)}
                            alt={`${groupTitle} - ${groupDescription}`}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                            data-testid={`img-group-${group.key}`}
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                        </div>

                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary dark:group-hover:text-secondary  transition-colors">
                            {groupTitle}
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            {truncateText(groupDescription)}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}

              {/* Empty state when no product groups exist */}
              {productGroups.length === 0 && (
                <div className="col-span-full text-center py-12">
                  <div className="text-muted-foreground text-lg mb-4">
                    {t("products:messages.noProductGroups")}
                  </div>
                  <Link href="/products">
                    <Button variant="outline">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      {t("common:buttons.backToProducts")}
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Compact Overview Section */}
      <section className="py-4 bg-background/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-background/80 backdrop-blur-sm rounded-2xl border border-border/50 p-6 md:p-8 hover:shadow-lg transition-all duration-500 hover:border-secondary/20 group">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                <div className="lg:col-span-2 space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-secondary transition-colors">
                    {t("products:sections.professionalGrade")}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {product.fullDescription}
                  </p>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-secondary">
                      {t("products:sections.keyBenefits")}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {Array.isArray(product.keyBenefits) &&
                        product.keyBenefits.map((benefit, index) => (
                          <div
                            key={index}
                            className="flex items-center text-sm text-muted-foreground group-hover:text-foreground hover:bg-secondary/5 p-2 rounded-lg transition-all duration-300 group cursor-default"
                          >
                            <CheckCircle className="w-4 h-4 text-secondary mr-2 flex-shrink-0 group-hover:scale-110 transition-transform" />
                            {benefit}
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
                <div className="lg:pl-4">
                  <Card className="border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-md">
                    <CardContent className="p-4 md:p-6 text-center">
                      <h3 className="text-lg font-bold mb-3 text-foreground">
                        {t("products:sections.professionalConsultation")}
                      </h3>
                      <div className="mb-4">
                        <div className="text-2xl font-bold text-secondary">
                          {t("common:labels.free")}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {t("products:sections.technicalConsultation")}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Link href="/quote" className="block">
                          <Button
                            size="sm"
                            className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground py-2 text-sm"
                          >
                            Request Quote <Download className="ml-1 w-3 h-3" />
                          </Button>
                        </Link>
                        <Link href="/contact" className="block">
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full py-2 text-sm"
                          >
                            Contact <Mail className="ml-1 w-3 h-3" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Compact Applications & Industries */}
      <section className="py-4 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Applications */}
              <div className="bg-gradient-to-br from-background to-muted/30 rounded-xl border border-border/50 p-4 md:p-6 hover:shadow-md hover:border-secondary/20 transition-all duration-500 group">
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-4 group-hover:text-secondary transition-colors">
                  {t("products:sections.applications")}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {Array.isArray(product.applications) &&
                    product.applications.map((application, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-secondary/5 transition-all duration-300 cursor-default group/item"
                      >
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                        <span className="text-md text-muted-foreground group-hover:text-foreground transition-colors">
                          {application}
                        </span>
                      </div>
                    ))}
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="bg-gradient-to-br from-background to-muted/30 rounded-xl border border-border/50 p-4 md:p-6 hover:shadow-md hover:border-secondary/20 transition-all duration-500 group">
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-4 group-hover:text-secondary transition-colors">
                  {t("products:sections.technicalSpecifications")}
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {Array.isArray(product.specifications) &&
                    product.specifications.map((spec, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 p-1 rounded-lg hover:bg-secondary/5 transition-all duration-300 cursor-default group/item"
                      >
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                        <span className="text-md text-muted-foreground group-hover:text-foreground transition-colors">
                          {spec}
                        </span>
                      </div>
                    ))}
                </div>
              </div>

              {/* Industries */}
              <div className="bg-gradient-to-br from-background to-muted/30 rounded-xl border border-border/50 p-4 md:p-6 hover:shadow-md hover:border-secondary/20 transition-all duration-500 group">
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-4 group-hover:text-secondary transition-colors">
                  {t("products:sections.industriesServed")}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {Array.isArray(product.industries) &&
                    product.industries.map((industry, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 p-3 rounded-lg hover:bg-secondary/5 transition-all duration-300 cursor-default group/item"
                      >
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                        <span className="text-md text-muted-foreground group-hover:text-foreground transition-colors">
                          {industry}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Compact Features & Certifications */}
      <section className="pb-16 py-4 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-background/90 backdrop-blur-sm rounded-2xl border border-border/50 p-4 md:p-6 hover:shadow-lg transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 group">
                {/* Features */}
                <div className="lg:col-span-2">
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-4 group-hover:text-secondary">
                    {t("products:sections.keyFeatures")}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {Array.isArray(product.features) &&
                      product.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-2 p-1 rounded-lg hover:bg-secondary/5 transition-all duration-300 cursor-default"
                        >
                          <CheckCircle className="w-3 h-3 text-secondary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                          <span className="text-md text-muted-foreground group-hover:text-foreground transition-colors">
                            {feature}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Certifications */}
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-4 group-hover:text-secondary">
                    {t("products:sections.certifications")}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1">
                      {Array.isArray(product.certifications) &&
                        product.certifications.map((certification, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs text-muted-foreground group-hover:text-foreground py-1 px-2 hover:bg-secondary/10 hover:border-secondary/30 transition-colors cursor-default"
                          >
                            {certification}
                          </Badge>
                        ))}
                    </div>
                    <div className="p-3 bg-gradient-to-r from-secondary/5 to-primary/5 rounded-lg border-l-3 border-l-secondary hover:border-l-primary transition-colors">
                      <h4 className="text-md font-semibold text-foreground mb-1 group-hover:text-secondary">
                        {t("products:sections.qualityAssurance")}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground">
                        {t("products:sections.qualityAssuranceDescription")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Call to Action */}
      <AnimatedSection animation="slideInUp" delay={0.2} duration={0.9}>
        <section className="py-12 md:py-16 lg:py-20 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              {t("products:sections.needMoreOptions")}
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              {t("products:sections.customSolutions")}
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
                  {t("common:buttons.requestCustomQuote")}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </>
  );
}
