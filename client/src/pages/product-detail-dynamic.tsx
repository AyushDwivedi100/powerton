import React, { useRef, useEffect } from "react";
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
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Star,
  Phone,
  Mail,
  Download,
  FileText,
  Shield,
  Zap,
  Settings,
} from "lucide-react";
import { getProductDetailBySlug } from "@/data/products-detail-pages-data";
import { useTranslation } from "react-i18next";
import { SEO } from "@/lib/seo";
import {
  AnimatedSection,
  useScrollAnimations,
} from "@/hooks/use-scroll-animation";

// Enhanced Animation variants
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hover: {
    y: -8,
    scale: 1.02,
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

// Enhanced Scroll animation component
const ScrollAnimatedSection: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = "", delay = 0 }) => {
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
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: "easeOut",
            delay: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ProductDetailDynamic: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation(["products", "common", "products-data"]);
  const productData = getProductDetailBySlug(slug!, t);

  useScrollAnimations();

  // Create refs for scroll animations
  const heroRef = useRef(null);
  const overviewRef = useRef(null);
  const specsRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
  const overviewInView = useInView(overviewRef, {
    once: true,
    margin: "-100px",
  });
  const specsInView = useInView(specsRef, { once: true, margin: "-100px" });

  // 404 handling
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
            Product Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The product you're looking for doesn't exist.
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

  const HeroIcon = Settings; // Default icon for now, will be dynamic based on category later

  return (
    <>
      <SEO
        title={productData.seo.title}
        description={productData.seo.description}
        keywords={productData.seo.keywords}
        canonicalUrl={productData.seo.canonicalUrl}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: productData.title,
          description: productData.shortDescription,
          category: productData.categoryName,
          brand: {
            "@type": "Organization",
            name: "Powerton Engineering Pvt. Ltd.",
          },
          manufacturer: {
            "@type": "Organization",
            name: "Powerton Engineering Pvt. Ltd.",
          },
        }}
      />

      <div className="min-h-screen bg-background">
        {/* Compact Sales-Focused Hero */}
        <section
          ref={heroRef}
          className="relative py-8 md:py-12 lg:py-16 overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${productData.image})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            {/* Compact Navigation */}
            <div className="flex justify-between items-center mb-6">
              <Link href={productData.categoryPath}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white/80 hover:text-white hover:bg-white/10 group transition-all duration-300"
                  data-testid="button-back-to-category"
                >
                  <ArrowLeft className="mr-1 h-3 w-3 group-hover:-translate-x-1 transition-transform duration-200" />
                  {productData.categoryName}
                </Button>
              </Link>
              <Badge className="bg-secondary/20 text-secondary border-secondary/30 hover:bg-secondary hover:text-secondary-foreground transition-colors">
                ✨ Premium Quality
              </Badge>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Product Info */}
              <div className="text-left">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-4"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-secondary/20 rounded-lg backdrop-blur-sm">
                      <HeroIcon className="w-6 h-6 text-secondary" />
                    </div>
                    <span className="text-secondary text-sm font-medium">{productData.subcategoryName}</span>
                  </div>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                    {productData.title}
                  </h1>
                  <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-xl">
                    {productData.shortDescription}
                  </p>
                  
                  {/* Trust Indicators */}
                  <div className="flex items-center space-x-4 text-xs text-white/70">
                    <div className="flex items-center space-x-1">
                      <Shield className="w-3 h-3" />
                      <span>ISO Certified</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3" />
                      <span>Industrial Grade</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="w-3 h-3" />
                      <span>Warranty</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-background/95 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-secondary/30 transition-all duration-300"
              >
                <div className="text-center space-y-4">
                  <div className="text-foreground">
                    <div className="text-xs text-muted-foreground mb-1">Get Instant Quote</div>
                    <div className="text-2xl font-bold text-secondary">Free</div>
                    <div className="text-xs text-muted-foreground">Technical Consultation</div>
                  </div>
                  
                  <div className="space-y-2">
                    <Link href="/quote" className="block">
                      <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground py-3 font-semibold group">
                        Get Quote Now
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </Button>
                    </Link>
                    <Link href="/contact" className="block">
                      <Button variant="outline" size="sm" className="w-full py-2">
                        <Phone className="mr-2 w-3 h-3" />
                        Call Expert
                      </Button>
                    </Link>
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    💡 24/7 Technical Support • Fast Delivery
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Ultra-Compact Product Details */}
        <section ref={overviewRef} className="py-6 md:py-8 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <ScrollAnimatedSection>
              <div className="bg-background/95 backdrop-blur-sm rounded-2xl border border-border/50 p-4 md:p-6 hover:shadow-xl transition-all duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                  {/* Compact Product Image */}
                  <div className="lg:col-span-2">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="relative overflow-hidden rounded-xl bg-muted/50 group cursor-pointer"
                    >
                      <img
                        src={productData.image}
                        alt={`${productData.title}`}
                        className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        data-testid="img-product-main"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-2 right-2 bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-md font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        📸 View Details
                      </div>
                    </motion.div>
                  </div>

                  {/* Product Info & Benefits */}
                  <div className="lg:col-span-3 space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-xs border-secondary/30 text-secondary">
                          {productData.subcategoryName}
                        </Badge>
                        <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span>Premium Quality</span>
                        </div>
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                        Why Choose This Product?
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {productData.fullDescription}
                      </p>
                    </div>

                    {/* Compact Key Benefits */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {productData.keyBenefits
                        .slice(0, 6)
                        .map((benefit: string, index: number) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={
                              overviewInView
                                ? { opacity: 1, scale: 1 }
                                : { opacity: 0, scale: 0.9 }
                            }
                            transition={{
                              duration: 0.3,
                              delay: index * 0.05,
                            }}
                            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-secondary/5 transition-all duration-300 group cursor-default"
                          >
                            <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0 group-hover:scale-125 transition-transform" />
                            <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                              {benefit}
                            </span>
                          </motion.div>
                        ))}
                    </div>

                    {/* Inline CTA */}
                    <div className="flex flex-col sm:flex-row gap-2 pt-2">
                      <Link href="/quote" className="flex-1">
                        <Button size="sm" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground group">
                          💰 Get Best Price
                          <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                        </Button>
                      </Link>
                      {productData.datasheetUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-secondary/30 text-secondary hover:bg-secondary/10 hover:border-secondary"
                          asChild
                        >
                          <a
                            href={productData.datasheetUrl}
                            download
                            data-testid="button-download-datasheet"
                          >
                            <Download className="mr-1 w-3 h-3" />
                            Specs
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimatedSection>
          </div>
        </section>

        {/* Ultra-Compact Technical Specs */}
        <section ref={specsRef} className="py-4 md:py-6 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <ScrollAnimatedSection>
              <div className="bg-gradient-to-r from-muted/30 to-muted/20 rounded-2xl border border-border/50 p-4 md:p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg md:text-xl font-bold text-foreground flex items-center">
                    <Settings className="w-5 h-5 text-secondary mr-2" />
                    Technical Specs
                  </h3>
                  <Badge variant="outline" className="text-xs border-secondary/30 text-secondary">
                    ⚡ High Performance
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {productData.specifications.slice(0, 8).map((spec: any, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={specsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="group p-3 bg-background/80 rounded-lg border border-border/30 hover:border-secondary/40 hover:shadow-md transition-all duration-300 cursor-default"
                    >
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground mb-1 truncate" title={spec.label}>
                          {spec.label}
                        </div>
                        <div className="text-sm font-bold text-foreground group-hover:text-secondary transition-colors">
                          {spec.value}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {productData.specifications.length > 8 && (
                  <div className="mt-3 text-center">
                    <Button variant="ghost" size="sm" className="text-secondary hover:text-secondary/80">
                      <FileText className="w-3 h-3 mr-1" />
                      View All {productData.specifications.length} Specs
                    </Button>
                  </div>
                )}
              </div>
            </ScrollAnimatedSection>
          </div>
        </section>

        {/* Hyper-Compact Features & Applications */}
        <section className="py-4 md:py-6 bg-muted/10">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <ScrollAnimatedSection>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Features & Applications Combined */}
                <div className="bg-background/90 rounded-xl border border-border/50 p-4 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-bold text-foreground flex items-center">
                      <Zap className="w-4 h-4 text-secondary mr-2" />
                      Features & Applications
                    </h4>
                    <Badge variant="secondary" className="text-xs">
                      ✨ Advanced
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Features Column */}
                    <div>
                      <div className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">Key Features</div>
                      <div className="space-y-1">
                        {productData.features.slice(0, 4).map(
                          (feature: any, index: number) => (
                            <div key={index} className="flex items-center space-x-2 group hover:bg-secondary/5 p-1 rounded transition-colors cursor-default">
                              <div className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0 group-hover:scale-125 transition-transform" />
                              <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors" data-testid={`text-feature-${index}`}>
                                {feature}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                    
                    {/* Applications Column */}
                    <div>
                      <div className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">Applications</div>
                      <div className="space-y-1">
                        {productData.applications.slice(0, 4).map(
                          (application: any, index: number) => (
                            <div key={index} className="flex items-center space-x-2 group hover:bg-secondary/5 p-1 rounded transition-colors cursor-default">
                              <ArrowRight className="w-3 h-3 text-primary flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                              <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors" data-testid={`text-application-${index}`}>
                                {application}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Industries & Trust Signals */}
                <div className="bg-background/90 rounded-xl border border-border/50 p-4 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-bold text-foreground flex items-center">
                      <Shield className="w-4 h-4 text-secondary mr-2" />
                      Industries & Quality
                    </h4>
                    <Badge variant="outline" className="text-xs border-secondary/30 text-secondary">
                      🏆 Trusted
                    </Badge>
                  </div>
                  
                  <div className="space-y-3">
                    {/* Industries */}
                    <div>
                      <div className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">Serving Industries</div>
                      <div className="flex flex-wrap gap-1">
                        {productData.industries.slice(0, 6).map(
                          (industry: any, index: number) => (
                            <Badge key={index} variant="outline" className="text-xs py-0.5 px-2 hover:bg-secondary/10 transition-colors cursor-default">
                              {industry}
                            </Badge>
                          )
                        )}
                      </div>
                    </div>
                    
                    {/* Trust & Quality Indicators */}
                    <div>
                      <div className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">Quality Assurance</div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center space-x-2 p-2 bg-green-50 dark:bg-green-950/20 rounded-lg">
                          <CheckCircle className="w-3 h-3 text-green-600" />
                          <span className="text-xs text-green-700 dark:text-green-400">ISO Certified</span>
                        </div>
                        <div className="flex items-center space-x-2 p-2 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                          <Shield className="w-3 h-3 text-blue-600" />
                          <span className="text-xs text-blue-700 dark:text-blue-400">Warranty</span>
                        </div>
                        <div className="flex items-center space-x-2 p-2 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                          <Star className="w-3 h-3 text-purple-600" />
                          <span className="text-xs text-purple-700 dark:text-purple-400">Premium Grade</span>
                        </div>
                        <div className="flex items-center space-x-2 p-2 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                          <Zap className="w-3 h-3 text-orange-600" />
                          <span className="text-xs text-orange-700 dark:text-orange-400">Fast Support</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimatedSection>
          </div>
        </section>

        {/* Inline Certifications */}
        {productData.certifications &&
          productData.certifications.length > 0 && (
            <section className="py-3 bg-muted/20">
              <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <ScrollAnimatedSection>
                  <div className="bg-background/60 rounded-xl border border-border/30 p-3 text-center">
                    <div className="flex flex-wrap justify-center items-center gap-2">
                      <span className="text-xs text-muted-foreground font-medium">🏆 Certifications:</span>
                      {productData.certifications.map(
                        (cert: any, index: number) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs py-0.5 px-2 border-secondary/30 text-secondary hover:bg-secondary/10 transition-colors cursor-default"
                            data-testid={`badge-certification-${index}`}
                          >
                            {cert}
                          </Badge>
                        ),
                      )}
                    </div>
                  </div>
                </ScrollAnimatedSection>
              </div>
            </section>
          )}

        {/* Compelling Sales CTA Section */}
        <section className="py-8 md:py-12 bg-gradient-to-r from-secondary/90 via-secondary to-primary/90">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <ScrollAnimatedSection>
              <div className="bg-background/95 backdrop-blur-sm rounded-2xl border border-border/50 p-6 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                  {/* Compelling Headlines */}
                  <div className="lg:col-span-2 text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start space-x-2 mb-3">
                      <Badge className="bg-green-500 text-white border-green-500 hover:bg-green-600">
                        ✅ In Stock
                      </Badge>
                      <Badge variant="outline" className="border-secondary/30 text-secondary">
                        🚀 Fast Delivery
                      </Badge>
                      <Badge variant="outline" className="border-primary/30 text-primary">
                        💯 Best Price
                      </Badge>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      Ready to Order? Get Started Now!
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      💡 <strong>Free consultation</strong> • ⚡ <strong>Same-day quotes</strong> • 🛡️ <strong>Premium warranty</strong> • 📞 <strong>24/7 support</strong>
                    </p>
                    <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Competitive Pricing</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Shield className="w-4 h-4 text-blue-500" />
                        <span>Quality Guaranteed</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span>Expert Support</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <Link href="/quote" className="block">
                      <Button
                        size="lg"
                        className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group"
                        data-testid="button-get-quote-final"
                      >
                        💰 Get Best Quote Now
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-200" />
                      </Button>
                    </Link>
                    <div className="grid grid-cols-2 gap-2">
                      <Link href="/contact">
                        <Button
                          variant="outline"
                          className="w-full border-primary/30 text-primary hover:bg-primary/10 hover:border-primary py-2 text-sm transition-all duration-300 hover:scale-105"
                          data-testid="button-contact-expert"
                        >
                          <Phone className="mr-1 w-4 h-4" />
                          Call Expert
                        </Button>
                      </Link>
                      <Button variant="ghost" size="sm" className="text-xs text-muted-foreground hover:text-foreground">
                        <Mail className="mr-1 w-3 h-3" />
                        Email Quote
                      </Button>
                    </div>
                    <div className="text-center text-xs text-muted-foreground">
                      🔒 Secure ordering • 📄 Official quotation • ⏱️ Response within 2 hours
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimatedSection>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductDetailDynamic;
