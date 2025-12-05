import { useParams } from "wouter";
import { SEO } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/hooks/use-scroll-animation";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Phone,
  Mail,
  Download,
  Settings,
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

// Animation variants for cards (matching subcategory cards)
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    y: -8,
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
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
            <Link href="/products" data-testid="link-back-to-category">
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
              {t("common:buttons.backTo")}{" "}
              {product.parentCategoryTitle || t("common:buttons.products")}
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
                  <span className="ms-2 inline-block transition-transform duration-300 group-hover:translate-x-2 rtl:group-hover:-translate-x-2">
                    <span className="ltr:inline rtl:hidden">
                      <ArrowRight
                        className="ms-2 w-4 h-4 sm:w-5 sm:h-5 rtl-flip"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="ltr:hidden rtl:inline">
                      <ArrowRight
                        className="ms-2 w-4 h-4 sm:w-5 sm:h-5 rtl-flip"
                        aria-hidden="true"
                      />
                    </span>
                  </span>
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Render product groups for subcategories that have them */}
              {productGroups.length > 0 &&
                productGroups.map((group, index) => {
                  // Use the title and description from the ProductGroup
                  const groupTitle =
                    group.title || group.key.toUpperCase().replace("-", " ");
                  const groupDescription =
                    group.description ||
                    t("products-data:defaults.groupDescription");
                  // Use the subcategory's icon for all product groups, or Settings as fallback
                  const GroupIconComponent = IconComponent || Settings;

                  return (
                    <Link
                      key={group.key}
                      href={`/products/${correctParentSlug}/${slug}/${group.slug}`}
                    >
                      <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        transition={{ delay: index * 0.1 }}
                        className="h-full"
                      >
                        <Card
                          className="group cursor-pointer border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl h-full flex flex-col"
                          data-testid={`card-group-${group.key}`}
                        >
                          <CardHeader className="pb-4 flex-shrink-0">
                            <motion.div
                              className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300"
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ duration: 0.3 }}
                            >
                              <GroupIconComponent className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                            </motion.div>
                            <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary dark:group-hover:text-secondary transition-colors text-center">
                              {groupTitle}
                            </CardTitle>
                            <CardDescription className="text-muted-foreground text-center">
                              {truncateText(groupDescription)}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="flex-1 flex flex-col">
                            {group.featuredSpecs &&
                              group.featuredSpecs.length > 0 && (
                                <div className="space-y-2 flex-1">
                                  <h4 className="font-medium text-sm text-foreground mb-3 group-hover:text-secondary">
                                    {t("common:common.keyFeatures")}:
                                  </h4>
                                  <ul className="space-y-1">
                                    {group.featuredSpecs
                                      .slice(0, 4)
                                      .map((spec, specIndex) => (
                                        <motion.li
                                          key={specIndex}
                                          className="text-sm text-muted-foreground flex items-center group-hover:text-foreground transition-colors duration-300"
                                          initial={{ opacity: 0, x: -10 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{
                                            delay:
                                              0.5 +
                                              index * 0.1 +
                                              specIndex * 0.05,
                                          }}
                                        >
                                          <motion.div
                                            className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"
                                            whileHover={{ scale: 1.5 }}
                                            transition={{ duration: 0.2 }}
                                          />
                                          {spec}
                                        </motion.li>
                                      ))}
                                  </ul>
                                </div>
                              )}
                          </CardContent>
                        </Card>
                      </motion.div>
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
