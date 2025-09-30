import { Link, useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getProductDetailBySlug } from "@/data/products-detail-pages-data";
import { useTranslation } from "react-i18next";
import { SEO } from "@/lib/seo";
import { generateProductData, generateBreadcrumbData } from "@/utils/seo-enhancements";
import { Helmet } from "react-helmet-async";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowLeft,
  CheckCircle,
  Phone,
  Mail,
  Download,
  ExternalLink,
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
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  if (!productData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Product Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The product you're looking for doesn't exist.
          </p>
          <Link href="/products">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("common:buttons.backToProducts", {
                defaultValue: "Back to Products",
              })}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
    { name: productData.categoryName || "Category", url: productData.categoryPath || "/products" },
    { name: productData.title, url: `${productData.categoryPath}/${slug}` }
  ];

  const productSchema = generateProductData({
    name: productData.title,
    description: productData.shortDescription || productData.fullDescription || "",
    image: productData.image,
    brand: "Powerton Engineering",
    manufacturer: "Powerton Engineering Pvt. Ltd.",
    category: productData.categoryName,
    specifications: productData.specifications,
  });

  const breadcrumbSchema = generateBreadcrumbData(breadcrumbItems);

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  };

  const staggerChildren = {
    initial: {},
    whileInView: {},
    viewport: { once: true, margin: "-50px" },
  };

  return (
    <>
      <SEO
        title={productData.seo.title}
        description={productData.seo.description}
        keywords={productData.seo.keywords}
        canonicalUrl={productData.seo.canonicalUrl}
        structuredData={productSchema}
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <div ref={containerRef} className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="py-6"
          >
            <Button
              variant="ghost"
              className="hover:bg-muted/50 group"
              asChild
              data-testid="link-back-to-parent"
            >
              <Link href={productData.categoryPath}>
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
                {productData.backLabel}
              </Link>
            </Button>
          </motion.div>

          <motion.div style={{ opacity, scale }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 py-8 lg:py-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="sticky top-8">
                  <div className="relative bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl p-8 overflow-hidden">
                    <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                    <img
                      src={productData.image}
                      alt={productData.title}
                      className="w-full h-auto max-h-[500px] object-contain relative z-10"
                      data-testid="img-product"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col justify-center space-y-6"
              >
                <div>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-sm font-medium text-primary mb-2"
                  >
                    {productData.categoryName}
                  </motion.p>
                  <motion.h1 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4"
                  >
                    {productData.title}
                  </motion.h1>
                  {productData.shortDescription && (
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="text-lg text-muted-foreground leading-relaxed"
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
                    className="group"
                    asChild
                    data-testid="button-contact"
                  >
                    <Link href="/contact">
                      <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                      Contact Us
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    asChild
                    data-testid="button-quote"
                  >
                    <Link href="/quote">
                      <Mail className="mr-2 h-5 w-5" />
                      Get Quote
                    </Link>
                  </Button>
                  {productData.datasheetUrl && (
                    <Button 
                      size="lg" 
                      variant="ghost"
                      asChild
                      data-testid="button-datasheet"
                    >
                      <a href={productData.datasheetUrl} target="_blank" rel="noopener noreferrer">
                        <Download className="mr-2 h-5 w-5" />
                        Datasheet
                      </a>
                    </Button>
                  )}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <div className="py-12 lg:py-16 space-y-12">
            {productData.fullDescription && (
              <motion.div {...fadeInUp}>
                <Card className="border-0 shadow-sm bg-card/50 backdrop-blur-sm">
                  <div className="p-6 lg:p-8">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Overview</h2>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {productData.fullDescription}
                    </p>
                  </div>
                </Card>
              </motion.div>
            )}

            {productData.keyBenefits && productData.keyBenefits.length > 0 && (
              <motion.div {...fadeInUp}>
                <Card className="border-0 shadow-sm bg-card/50 backdrop-blur-sm">
                  <div className="p-6 lg:p-8">
                    <h2 className="text-2xl font-bold text-foreground mb-6">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {productData.keyBenefits.map((benefit, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 0.5, delay: index * 0.05 }}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/30 transition-colors"
                          data-testid={`feature-${index}`}
                        >
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground leading-relaxed">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}

            {productData.specifications && productData.specifications.length > 0 && (
              <motion.div {...fadeInUp}>
                <Card className="border-0 shadow-sm bg-card/50 backdrop-blur-sm">
                  <div className="p-6 lg:p-8">
                    <h2 className="text-2xl font-bold text-foreground mb-6">Technical Specifications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {productData.specifications.map((spec, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 0.5, delay: index * 0.03 }}
                          className="p-4 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors"
                          data-testid={`spec-${index}`}
                        >
                          <dt className="text-sm font-medium text-muted-foreground mb-1">
                            {spec.label}
                          </dt>
                          <dd className="text-base font-semibold text-foreground">
                            {spec.value}
                          </dd>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}

            {productData.applications && productData.applications.length > 0 && (
              <motion.div {...fadeInUp}>
                <Card className="border-0 shadow-sm bg-card/50 backdrop-blur-sm">
                  <div className="p-6 lg:p-8">
                    <h2 className="text-2xl font-bold text-foreground mb-6">Applications</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {productData.applications.map((application, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 0.4, delay: index * 0.05 }}
                          className="flex items-center gap-2 p-3 rounded-lg bg-muted/20"
                          data-testid={`application-${index}`}
                        >
                          <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{application}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}

            {productData.industries && productData.industries.length > 0 && (
              <motion.div {...fadeInUp}>
                <Card className="border-0 shadow-sm bg-card/50 backdrop-blur-sm">
                  <div className="p-6 lg:p-8">
                    <h2 className="text-2xl font-bold text-foreground mb-6">Industries</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {productData.industries.map((industry, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 0.4, delay: index * 0.05 }}
                          className="flex items-center gap-2 p-3 rounded-lg bg-muted/20"
                          data-testid={`industry-${index}`}
                        >
                          <div className="h-2 w-2 rounded-full bg-secondary flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{industry}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}

            {productData.certifications && productData.certifications.length > 0 && (
              <motion.div {...fadeInUp}>
                <Card className="border-0 shadow-sm bg-card/50 backdrop-blur-sm">
                  <div className="p-6 lg:p-8">
                    <h2 className="text-2xl font-bold text-foreground mb-6">Certifications & Compliance</h2>
                    <div className="flex flex-wrap gap-2">
                      {productData.certifications.map((cert, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20"
                          data-testid={`cert-${index}`}
                        >
                          {cert}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}
          </div>
        </div>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative py-16 lg:py-24 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-primary"></div>
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Need More Information?
              </h2>
              <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact our experts for detailed specifications, pricing, and technical support.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 group"
                  asChild
                  data-testid="button-cta-contact"
                >
                  <Link href="/contact">
                    <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    Contact Expert
                  </Link>
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary"
                  asChild
                  data-testid="button-cta-quote"
                >
                  <Link href="/quote">
                    <Mail className="mr-2 h-5 w-5" />
                    Request Quote
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default ProductDetailDynamic;
