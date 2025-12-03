import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Link, useParams } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AnimatedSection,
  useScrollAnimations,
} from "@/hooks/use-scroll-animation";
import {
  Download,
  ArrowRight,
  Star,
  CheckCircle,
  Thermometer,
  Radio,
  Cpu,
  ToggleLeft,
  Gauge,
  FlaskConical,
  Zap,
  Phone,
  Mail,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { getCategoryBySlug } from "@/data/products-category-page";
import {
  getProductSubCategoryBySlug,
  getSubcategorySlugById,
} from "@/data/products-sub-category-pages-data";
import { useTranslation } from "react-i18next";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

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

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

// Scroll animation component
const ScrollAnimatedSection: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ProductCategoryDynamic: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation(["common", "products-data"]);
  const categoryData = getCategoryBySlug(slug!, t);

  // Create refs for scroll animations
  const heroRef = useRef(null);
  const ctaRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  // 404 handling
  if (!categoryData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {t("common:errors.categoryNotFound")}
          </h1>
          <p className="text-muted-foreground mb-8">
            {t("common:errors.categoryNotFoundMessage")}
          </p>
          <Link href="/products">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("common:buttons.backToProducts")}
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-12 md:py-16 lg:py-20 overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${categoryData.backgroundImage})`,
          }}
        />
        <div className="absolute inset-0 bg-blue-600/60 dark:bg-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={
                heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
              }
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link href="/products">
                <Button
                  variant="ghost"
                  className="mb-6 hover:bg-white/10 group"
                >
                  <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
                  {t("common:buttons.backToProducts")}
                </Button>
              </Link>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={
                heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-wrap-safe responsive-text"
            >
              {categoryData.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={
                heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto text-wrap-safe"
            >
              {categoryData.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-2 mb-8"
            >
              {Array.isArray(categoryData.badges) &&
                categoryData.badges.map((badge, index) => (
                  <Badge
                    variant="secondary"
                    className="cursor-default hover:bg-white"
                  >
                    {badge}
                  </Badge>
                ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Subcategories Section */}
      <ScrollAnimatedSection className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold text-foreground text-center mb-12"
        >
          {categoryData.sectionTitle}
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className={`grid ${categoryData.gridCols} gap-8`}
        >
          {Array.isArray(categoryData.subcategories) &&
            categoryData.subcategories.map((subcategory, index) => {
              const IconComponent = subcategory.icon;
              // Get parent category slug from subcategory data
              const subcategorySlug =
                getSubcategorySlugById(subcategory.id) || subcategory.id;
              const subcategoryData = getProductSubCategoryBySlug(
                subcategorySlug,
                t,
              );
              const parentCategorySlug =
                subcategoryData?.parentCategory.split("/").pop() ||
                categoryData.slug;
              return (
                <Link
                  key={subcategory.id}
                  href={`/products/${parentCategorySlug}/${
                    getSubcategorySlugById(subcategory.id) || subcategory.id
                  }`}
                >
                  <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    transition={{ delay: index * 0.1 }}
                    className="h-full"
                  >
                    <Card className="group cursor-pointer border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                      <CardHeader className="pb-4 flex-shrink-0">
                        <motion.div
                          className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <IconComponent className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                        </motion.div>
                        <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary dark:group-hover:text-secondary transition-colors text-center">
                          {subcategory.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground text-center">
                          {subcategory.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col">
                        <div className="space-y-2 flex-1">
                          <h4 className="font-medium text-sm text-foreground mb-3 group-hover:text-secondary">
                            {t("common:common.keyFeatures")}:
                          </h4>
                          <ul className="space-y-1">
                            {Array.isArray(subcategory.features) &&
                              subcategory.features.map(
                                (feature, featureIndex) => (
                                  <motion.li
                                    key={featureIndex}
                                    className="text-sm text-muted-foreground flex items-center group-hover:text-foreground transition-colors duration-300"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                      delay:
                                        0.5 + index * 0.1 + featureIndex * 0.05,
                                    }}
                                  >
                                    <motion.div
                                      className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"
                                      whileHover={{ scale: 1.5 }}
                                      transition={{ duration: 0.2 }}
                                    />
                                    {feature}
                                  </motion.li>
                                ),
                              )}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              );
            })}
        </motion.div>
      </ScrollAnimatedSection>

      {/* CTA Section */}
      <motion.div
        ref={ctaRef}
        initial={{ opacity: 0, y: 30 }}
        animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-primary text-white"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            {categoryData.cta.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl mb-8 opacity-90 max-w-2xl mx-auto"
          >
            {categoryData.cta.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 md:gap-4 max-w-md mx-auto px-2 sm:px-0"
          >
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 text-lg font-semibold w-full sm:w-auto shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  {categoryData.cta.contactButtonText}
                </Button>
              </motion.div>
            </Link>
            <Link href="/quote">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-border text-foreground hover:bg-foreground hover:text-background px-8 py-3 text-lg font-semibold w-full sm:w-auto shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <Mail className="mr-2 w-5 h-5" />
                  {t("common:buttons.requestQuote")}
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductCategoryDynamic;
