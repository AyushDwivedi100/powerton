import { Link, useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { getProductDetailBySlug } from "@/data/products-detail-pages-data";
import { useTranslation } from "react-i18next";
import { SEO } from "@/lib/seo";
import {
  generateProductData,
  generateBreadcrumbData,
} from "@/utils/seo-enhancements";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  AnimatedSection,
  useScrollAnimations,
} from "@/hooks/use-scroll-animation";
import {
  ArrowLeft,
  CheckCircle,
  Phone,
  Mail,
  Download,
  Sparkles,
  Box,
  Award,
  Zap,
  Building2,
  Shield,
} from "lucide-react";

const ProductDetailDynamic: React.FC = () => {
  const { parentSlug, subcategorySlug, groupSlug, slug } = useParams<{
    parentSlug: string;
    subcategorySlug: string;
    groupSlug: string;
    slug: string;
  }>();
  const { t } = useTranslation(["products", "common", "products-data"]);
  const productData = getProductDetailBySlug(slug!, t, groupSlug);
  useScrollAnimations();

  if (!productData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {t("common:errors.productNotFound")}
          </h1>
          <p className="text-muted-foreground mb-8">
            {t("common:errors.productNotFoundMessage")}
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

  const breadcrumbItems = [
    { name: t("common:sitemap.pages.home"), url: "/" },
    { name: t("common:sitemap.pages.allProducts"), url: "/products" },
    {
      name: productData.categoryName || t("common:labels.category"),
      url: productData.categoryPath || "/products",
    },
    { name: productData.title, url: `${productData.categoryPath}/${slug}` },
  ];

  // Extract manufacturer and brand from product specifications
  // Search for manufacturer, brand, or maker (case-insensitive)
  const manufacturerSpec = productData.specifications.find((s) => {
    const label = s.label.toLowerCase();
    return (
      label.includes("manufacturer") ||
      label.includes("brand") ||
      label.includes("maker")
    );
  });

  const manufacturer = manufacturerSpec?.value || t("common:company.name");
  const brand = manufacturerSpec?.value || t("common:seo.siteName");

  // Convert product image to absolute URL for structured data
  const productImageAbsolute = productData.image.startsWith("http")
    ? productData.image
    : `https://powertonengineering.in${productData.image}`;

  const productSchema = generateProductData({
    name: productData.title,
    description:
      productData.shortDescription || productData.fullDescription || "",
    image: productImageAbsolute,
    brand,
    manufacturer,
    category: productData.categoryName,
    specifications: productData.specifications,
  });

  const breadcrumbSchema = generateBreadcrumbData(breadcrumbItems);

  // Use product image as OG image (convert to absolute URL)
  const productOgImage = productData.image.startsWith("http")
    ? productData.image
    : `https://powertonengineering.in${productData.image}`;

  return (
    <>
      <SEO
        title={productData.seo.title}
        description={productData.seo.description}
        keywords={productData.seo.keywords}
        canonicalUrl={productData.seo.canonicalUrl}
        ogImage={productOgImage}
        structuredData={productSchema}
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className=" ">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="py-6 mx-auto px-4 sm:px-6 lg:px-36"
          >
            <Button
              variant="ghost"
              className="mb-6 hover:bg-black/10 dark:hover:bg-white/10 text-foreground hover:text-foreground group"
              asChild
              data-testid="link-back-to-parent"
            >
              <Link href={productData.categoryPath}>
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-2 transition-transform duration-300" />
                {t("common:buttons.backTo")} {productData.backLabel}
              </Link>
            </Button>
          </motion.div>

          {/* Product Hero Section */}
          <div className="mx-auto px-4 sm:px-6 lg:px-36 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 py-8 lg:py-12">
            <AnimatedSection>
              <div className="relative">
                <div className="sticky top-8">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative bg-gradient-to-br from-background via-muted/5 to-background rounded-3xl p-12 border border-border/50 backdrop-blur-sm overflow-hidden">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
                      <img
                        src={productData.image}
                        alt={productData.title}
                        className="w-full h-auto max-h-[500px] object-contain relative z-10 transform group-hover:scale-105 transition-transform duration-700"
                        data-testid="img-product"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="flex flex-col justify-center space-y-8">
                <div className="space-y-4">
                  <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight"
                  >
                    {productData.title}
                  </motion.h1>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-3"
                >
                  <Button
                    size="lg"
                    className="group shadow-lg shadow-primary/25 hover:shadow-primary/50 bg-primary hover:bg-secondary text-background dark:text-foreground hover:text-foreground dark:hover:text-background transition-all duration-300"
                    asChild
                    data-testid="button-contact"
                  >
                    <Link href="/contact">
                      <Phone className="mr-2 h-5 w-5" />
                      {t("common:buttons.contactUs")}
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 bg-blur hover:bg-secondary hover:text-background hover:border-primary/30 transition-all duration-300"
                    asChild
                    data-testid="button-quote"
                  >
                    <Link href="/quote">
                      <Mail className="mr-2 h-5 w-5" />
                      {t("common:buttons.getQuote")}
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>

          <div className="py-8 space-y-24 bg-muted mx-auto px-4 sm:px-6 lg:px-36">
            {/* Product Overview Section*/}
            {productData.fullDescription && (
              <AnimatedSection>
                <div className="max-w-4xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-xl bg-primary/10">
                      <Box className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                      {t("products:sections.overview")}
                    </h2>
                  </div>
                  <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                    {productData.fullDescription}
                  </p>
                </div>
              </AnimatedSection>
            )}

            {/* Compact Grid Section: All Specifications & Details Visible at Once */}
            <AnimatedSection>
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="p-1.5 sm:p-2 rounded-xl bg-primary/10 flex-shrink-0">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                    {t("products:sections.productDetails")}
                  </h2>
                </div>

                {/* Fully Responsive 3-Column Grid Layout - Optimized for all screen sizes */}
                <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 w-full">
                  {/* Column 1: Technical Specifications */}
                  {productData.specifications &&
                    productData.specifications.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.4 }}
                        className="space-y-2 sm:space-y-3 min-w-0"
                        data-testid="section-specifications"
                      >
                        <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                          <Award className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" />
                          <h3 className="text-lg sm:text-xl font-semibold text-foreground truncate">
                            {t("products:sections.technicalSpecifications")}
                          </h3>
                        </div>
                        {productData.specifications.map((spec, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.3, delay: index * 0.02 }}
                            className="group"
                            data-testid={`spec-${index}`}
                          >
                            <div className="p-2 sm:p-2.5 rounded-md border border-border/40 bg-gradient-to-br from-background to-muted/10 hover:border-secondary/40 hover:shadow-sm transition-all duration-300">
                              <dt className="text-sm font-medium text-muted-foreground mb-0.5 truncate">
                                {spec.label}
                              </dt>
                              <dd className="text-sm font-medium text-foreground truncate">
                                {spec.value}
                              </dd>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}

                  {/* Column 2: Features & Applications */}
                  <div className="space-y-8 sm:space-y-12">
                    {/* Key Features */}
                    {productData.keyBenefits &&
                      productData.keyBenefits.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                          className="space-y-1.5 sm:space-y-2"
                          data-testid="section-features"
                        >
                          <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" />
                            <h3 className="text-lg sm:text-xl font-semibold text-foreground truncate">
                              {t("products:sections.keyFeatures")}
                            </h3>
                          </div>
                          {productData.keyBenefits.map((benefit, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true, margin: "-50px" }}
                              transition={{
                                duration: 0.3,
                                delay: index * 0.02,
                              }}
                              className="group"
                              data-testid={`feature-${index}`}
                            >
                              <div className="p-2 sm:p-2.5 rounded-md border border-border/40 bg-gradient-to-br from-background to-muted/10 hover:border-secondary/40 hover:shadow-sm transition-all duration-300">
                                <dd className="text-sm font-medium text-foreground truncate">
                                  {benefit}
                                </dd>
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}

                    {/* Applications */}
                    {productData.applications &&
                      productData.applications.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 0.4, delay: 0.15 }}
                          className="space-y-1.5 sm:space-y-2"
                          data-testid="section-applications"
                        >
                          <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                            <Box className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" />
                            <h3 className="text-lg sm:text-xl font-semibold text-foreground truncate">
                              {t("products:sections.applications")}
                            </h3>
                          </div>
                          {productData.applications.map(
                            (application, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                  duration: 0.3,
                                  delay: index * 0.02,
                                }}
                                className="group"
                                data-testid={`application-${index}`}
                              >
                                <div className="p-2 sm:p-2.5 rounded-md border border-border/40 bg-gradient-to-br from-background to-muted/10 hover:border-secondary/40 hover:shadow-sm transition-all duration-300">
                                  <dd className="text-sm font-medium text-foreground truncate">
                                    {application}
                                  </dd>
                                </div>
                              </motion.div>
                            ),
                          )}
                        </motion.div>
                      )}
                  </div>

                  {/* Column 3: Industries & Certifications */}
                  <div className="space-y-8 sm:space-y-12">
                    {/* Industries Served */}
                    {productData.industries &&
                      productData.industries.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                          className="space-y-1.5 sm:space-y-2"
                          data-testid="section-industries"
                        >
                          <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                            <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-secondary flex-shrink-0" />
                            <h3 className="text-lg sm:text-xl font-semibold text-foreground truncate">
                              {t("products:sections.industriesServed")}
                            </h3>
                          </div>
                          {productData.industries.map((industry, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true, margin: "-50px" }}
                              transition={{
                                duration: 0.3,
                                delay: index * 0.02,
                              }}
                              className="group"
                              data-testid={`industry-${index}`}
                            >
                              <div className="p-2 sm:p-2.5 rounded-md border border-border/40 bg-gradient-to-br from-background to-muted/10 hover:border-secondary/40 hover:shadow-sm transition-all duration-300">
                                <dd className="text-sm font-medium text-foreground truncate">
                                  {industry}
                                </dd>
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}

                    {/* Certifications & Compliance */}
                    {productData.certifications &&
                      productData.certifications.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 0.4, delay: 0.25 }}
                          className="space-y-2 sm:space-y-3"
                          data-testid="section-certifications"
                        >
                          <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                            <h3 className="text-lg sm:text-xl font-semibold text-foreground truncate">
                              {t("products:sections.certificationsCompliance")}
                            </h3>
                          </div>
                          <div className="flex flex-wrap gap-1 sm:gap-1.5">
                            {productData.certifications.map((cert, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                  duration: 0.2,
                                  delay: index * 0.03,
                                }}
                                className="group"
                                data-testid={`cert-${index}`}
                              >
                                <div className="px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-full border border-green-300/40 dark:border-green-600/40 bg-green-50 dark:bg-green-950/20 font-medium text-md hover:border-green-400/60 transition-all whitespace-nowrap">
                                  {cert}
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

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
      </div>
    </>
  );
};

export default ProductDetailDynamic;
