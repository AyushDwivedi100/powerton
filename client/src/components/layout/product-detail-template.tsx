import React from 'react';
import { SEO } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import { AnimatedSection, useScrollAnimations } from "@/hooks/use-scroll-animation";
import { 
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Star,
  Phone,
  Mail,
  Download,
  FileText,
  Settings,
  Shield,
  Zap
} from "lucide-react";
import { Link } from "wouter";

export interface ProductDetailData {
  // Basic Product Info
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  
  // SEO Data
  seo: {
    title: string;
    description: string;
    keywords: string;
    canonicalUrl: string;
  };
  
  // Navigation
  categoryName: string;
  categoryPath: string;
  subcategoryName: string;
  
  // Product Details
  keyBenefits: string[];
  specifications: Array<{
    label: string;
    value: string;
  }>;
  features: string[];
  applications: string[];
  industries: string[];
  certifications?: string[];
  
  // Optional Technical Data
  technicalSpecs?: Record<string, string>;
  relatedProducts?: Array<{
    name: string;
    path: string;
  }>;
  
  // Optional UI customization
  backButtonLabel?: string;
  downloadButtonLabel?: string;
  datasheetUrl?: string;
}

interface ProductDetailTemplateProps {
  product: ProductDetailData;
  heroIcon?: React.ComponentType<{ className?: string }>;
}

export function ProductDetailTemplate({ product, heroIcon: HeroIcon = Settings }: ProductDetailTemplateProps) {
  const { t } = useTranslation(['products', 'common']);
  useScrollAnimations();

  return (
    <>
      <SEO
        title={product.seo.title}
        description={product.seo.description}
        keywords={product.seo.keywords}
        canonicalUrl={product.seo.canonicalUrl}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": product.title,
          "description": product.shortDescription,
          "category": product.categoryName,
          "brand": {
            "@type": "Organization",
            "name": "Powerton Engineering Pvt. Ltd."
          },
          "manufacturer": {
            "@type": "Organization",
            "name": "Powerton Engineering Pvt. Ltd."
          }
        }}
      />

      {/* Hero Section */}
      <section className="relative hero-fullscreen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: `url(${product.image})`
          }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-white">
          <div className="text-center">
            <Link href={product.categoryPath}>
              <Button 
                variant="ghost" 
                className="mb-6 hover:bg-white/10 text-white"
                aria-label={product.backButtonLabel || `${t('common:buttons.backTo')} ${product.categoryName}`}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                {product.backButtonLabel || `${t('common:buttons.backTo')} ${product.categoryName}`}
              </Button>
            </Link>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <HeroIcon className="w-16 h-16 text-secondary mr-4" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                {product.title}
              </h1>
            </div>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              {product.shortDescription}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <Link href="/quote">
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 text-lg font-semibold w-full sm:w-auto">
                  {t('common:buttons.getQuote')} <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  className="border-2 border-border text-white hover:bg-background hover:text-foreground px-8 py-3 text-lg font-semibold w-full sm:w-auto"
                >
                  {t('common:buttons.contactUs')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-in-left">
              <img 
                src={product.image}
                alt={`${product.title} - ${product.shortDescription}`}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-right">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                {product.subcategoryName}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {product.fullDescription}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {product.keyBenefits.slice(0, 4).map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-4">
                {(product.datasheetUrl || product.downloadButtonLabel) && (
                  <Button className="bg-primary hover:bg-primary/90">
                    <Download className="mr-2 w-4 h-4" />
                    {product.downloadButtonLabel || t('common:buttons.downloadGuide')}
                  </Button>
                )}
                <Link href="/contact">
                  <Button variant="outline">
                    <Phone className="mr-2 w-4 h-4" />
                    {t('common:buttons.expertConsultation')}
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                {t('common:sections.technicalSpecifications')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('common:sections.specificationDescription')}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.specifications.map((spec, index) => (
              <AnimatedSection key={index} animation="fade-in-up" delay={index * 0.1}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <FileText className="w-8 h-8 text-primary mr-3" />
                      <h3 className="text-lg font-semibold">{spec.label}</h3>
                    </div>
                    <p className="text-muted-foreground">{spec.value}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                {t('common:sections.keyFeatures')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('common:sections.featuresDescription')}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.features.map((feature, index) => (
              <AnimatedSection key={index} animation="fade-in-up" delay={index * 0.1}>
                <div className="flex items-center p-4 bg-muted rounded-lg">
                  <Star className="w-6 h-6 text-yellow-500 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Applications & Industries */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Applications */}
            <AnimatedSection animation="fade-in-left">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="w-6 h-6 text-primary mr-3" />
                    {t('common:sections.applications')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-3">
                    {product.applications.map((application, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{application}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Industries */}
            <AnimatedSection animation="fade-in-right">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="w-6 h-6 text-primary mr-3" />
                    {t('common:sections.industries')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-3">
                    {product.industries.map((industry, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{industry}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Certifications (if available) */}
      {product.certifications && product.certifications.length > 0 && (
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <AnimatedSection animation="fade-in-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  {t('common:sections.certifications')}
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {t('common:sections.certificationsDescription')}
                </p>
              </div>
            </AnimatedSection>

            <div className="flex flex-wrap justify-center gap-4">
              {product.certifications.map((cert, index) => (
                <AnimatedSection key={index} animation="fade-in-up" delay={index * 0.1}>
                  <Badge variant="outline" className="px-4 py-2 text-sm">
                    {cert}
                  </Badge>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Products (if available) */}
      {product.relatedProducts && product.relatedProducts.length > 0 && (
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <AnimatedSection animation="fade-in-up">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  {t('common:sections.relatedProducts')}
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {t('common:sections.relatedProductsDescription')}
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.relatedProducts.map((relatedProduct, index) => (
                <AnimatedSection key={index} animation="fade-in-up" delay={index * 0.1}>
                  <Link href={relatedProduct.path}>
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-2">{relatedProduct.name}</h3>
                        <div className="flex items-center text-primary">
                          <span className="text-sm">{t('common:buttons.viewDetails')}</span>
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('common:sections.contactTitle')}
              </h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                {t('common:sections.contactDescription')}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                <Link href="/quote">
                  <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 text-lg font-semibold w-full sm:w-auto">
                    <FileText className="mr-2 w-5 h-5" />
                    {t('common:buttons.requestQuote')}
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button 
                    variant="outline" 
                    className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg font-semibold w-full sm:w-auto"
                  >
                    <Phone className="mr-2 w-5 h-5" />
                    {t('common:buttons.speakExpert')}
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

export default ProductDetailTemplate;