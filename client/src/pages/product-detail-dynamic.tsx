import { Link, useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  const { t } = useTranslation(["products", "common"]);
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="py-6"
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 py-8 lg:py-12">
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

                  {productData.shortDescription && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-xl text-muted-foreground leading-relaxed"
                    >
                      {productData.shortDescription}
                    </motion.p>
                  )}
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

          <div className="py-16 lg:py-24 space-y-24">
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

            {/* Compact Tabbed Section: All Specifications & Compliance Info */}
            <AnimatedSection>
              <div className="max-w-4xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 rounded-xl bg-primary/10">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                    {t("products:sections.productDetails")}
                  </h2>
                </div>

                <Tabs defaultValue="specifications" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-2 mb-6 h-auto p-1 bg-muted">
                    <TabsTrigger
                      value="specifications"
                      className="flex items-center gap-2 text-xs md:text-sm"
                      data-testid="tab-specifications"
                    >
                      <Award className="w-4 h-4" />
                      <span className="hidden sm:inline">
                        {t("products:sections.technicalSpecifications")}
                      </span>
                      <span className="sm:hidden">Specs</span>
                    </TabsTrigger>

                    <TabsTrigger
                      value="features"
                      className="flex items-center gap-2 text-xs md:text-sm"
                      data-testid="tab-features"
                    >
                      <CheckCircle className="w-4 h-4" />
                      <span className="hidden sm:inline">
                        {t("products:sections.keyFeatures")}
                      </span>
                      <span className="sm:hidden">Features</span>
                    </TabsTrigger>

                    <TabsTrigger
                      value="applications"
                      className="flex items-center gap-2 text-xs md:text-sm"
                      data-testid="tab-applications"
                    >
                      <Box className="w-4 h-4" />
                      <span className="hidden sm:inline">
                        {t("products:sections.applications")}
                      </span>
                      <span className="sm:hidden">Apps</span>
                    </TabsTrigger>

                    <TabsTrigger
                      value="industries"
                      className="flex items-center gap-2 text-xs md:text-sm"
                      data-testid="tab-industries"
                    >
                      <Building2 className="w-4 h-4" />
                      <span className="hidden sm:inline">
                        {t("products:sections.industriesServed")}
                      </span>
                      <span className="sm:hidden">Industries</span>
                    </TabsTrigger>

                    <TabsTrigger
                      value="certifications"
                      className="flex items-center gap-2 text-xs md:text-sm"
                      data-testid="tab-certifications"
                    >
                      <Shield className="w-4 h-4" />
                      <span className="hidden sm:inline">
                        {t("products:sections.certificationsCompliance")}
                      </span>
                      <span className="sm:hidden">Certs</span>
                    </TabsTrigger>
                  </TabsList>

                  {/* Specifications Tab */}
                  {productData.specifications &&
                    productData.specifications.length > 0 && (
                      <TabsContent
                        value="specifications"
                        className="space-y-4"
                        data-testid="content-specifications"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
                              <div className="p-3 rounded-lg border border-border/50 bg-gradient-to-br from-background to-muted/20 hover:border-secondary/30 hover:shadow-md hover:shadow-secondary/5 transition-all duration-300">
                                <dt className="text-xs font-medium text-muted-foreground mb-1">
                                  {spec.label}
                                </dt>
                                <dd className="text-sm font-semibold text-foreground group-hover:text-secondary transition-colors truncate">
                                  {spec.value}
                                </dd>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </TabsContent>
                    )}

                  {/* Features Tab */}
                  {productData.keyBenefits &&
                    productData.keyBenefits.length > 0 && (
                      <TabsContent
                        value="features"
                        className="space-y-3"
                        data-testid="content-features"
                      >
                        {productData.keyBenefits.map((benefit, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.3, delay: index * 0.02 }}
                            className="group"
                            data-testid={`feature-${index}`}
                          >
                            <div className="flex items-start gap-3 p-3 rounded-lg border border-border/50 bg-background/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300">
                              <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-1.5 group-hover:scale-125 transition-transform"></div>
                              <span className="text-sm text-foreground leading-relaxed">
                                {benefit}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </TabsContent>
                    )}

                  {/* Applications Tab */}
                  {productData.applications &&
                    productData.applications.length > 0 && (
                      <TabsContent
                        value="applications"
                        className="space-y-3"
                        data-testid="content-applications"
                      >
                        {productData.applications.map((application, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.3, delay: index * 0.02 }}
                            className="group"
                            data-testid={`application-${index}`}
                          >
                            <div className="flex items-start gap-3 p-3 rounded-lg border border-border/50 bg-background/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300">
                              <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-1.5 group-hover:scale-125 transition-transform"></div>
                              <span className="text-sm text-foreground">
                                {application}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </TabsContent>
                    )}

                  {/* Industries Tab */}
                  {productData.industries &&
                    productData.industries.length > 0 && (
                      <TabsContent
                        value="industries"
                        className="space-y-3"
                        data-testid="content-industries"
                      >
                        {productData.industries.map((industry, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.3, delay: index * 0.02 }}
                            className="group"
                            data-testid={`industry-${index}`}
                          >
                            <div className="flex items-start gap-3 p-3 rounded-lg border border-border/50 bg-background/50 hover:border-secondary/30 hover:bg-secondary/5 transition-all duration-300">
                              <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-1.5 group-hover:scale-125 transition-transform"></div>
                              <span className="text-sm text-foreground">
                                {industry}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </TabsContent>
                    )}

                  {/* Certifications Tab */}
                  {productData.certifications &&
                    productData.certifications.length > 0 && (
                      <TabsContent
                        value="certifications"
                        className="space-y-3"
                        data-testid="content-certifications"
                      >
                        <div className="flex flex-wrap gap-2">
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
                              <div className="px-4 py-2 rounded-full border border-primary/30 bg-primary/5 font-medium text-sm hover:border-primary/50 hover:bg-primary/10 hover:scale-105 transition-all duration-300">
                                {cert}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </TabsContent>
                    )}
                </Tabs>
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
