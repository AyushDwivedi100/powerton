import { Link, useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Download, ShoppingCart } from "lucide-react";
import { getProductDetailBySlug } from "@/data/products-detail-pages-data";
import { useTranslation } from "react-i18next";
import { SEO } from "@/lib/seo";

const ProductDetailDynamic: React.FC = () => {
  const { slug, groupSlug } = useParams<{ slug: string; groupSlug?: string }>();
  const { t } = useTranslation(["products", "common"]);
  const productData = getProductDetailBySlug(slug!, t, groupSlug);

  // 404 handling
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
              {t("common:buttons.backToProducts", { defaultValue: "Back to Products" })}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

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
        {/* Header with Back Navigation */}
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link href={productData.categoryPath}>
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-foreground"
                data-testid="button-back"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                {productData.backLabel || productData.categoryName}
              </Button>
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="lg:sticky lg:top-8 lg:h-fit">
              <img
                src={productData.image}
                alt={productData.title}
                className="w-full h-auto max-h-96 object-contain bg-muted/30 rounded-lg"
                data-testid="img-product"
              />
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              {/* Product Header */}
              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  {productData.categoryName} / {productData.subcategoryName}
                </p>
                <h1 className="text-3xl font-bold text-foreground mb-4" data-testid="text-title">
                  {productData.title}
                </h1>
                <p className="text-lg text-muted-foreground" data-testid="text-description">
                  {productData.shortDescription}
                </p>
              </div>

              {/* Key Facts */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Key Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Manufacturer:</span>
                    <span className="font-medium">Powerton Engineering</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Category:</span>
                    <span className="font-medium">{productData.categoryName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Type:</span>
                    <span className="font-medium">{productData.subcategoryName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Availability:</span>
                    <span className="font-medium text-green-600 dark:text-green-400">In Stock</span>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/quote" className="flex-1">
                  <Button className="w-full" data-testid="button-quote">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Request Quote
                  </Button>
                </Link>
                {productData.datasheetUrl && (
                  <Button
                    variant="outline"
                    className="flex-1"
                    asChild
                    data-testid="link-datasheet"
                  >
                    <a href={productData.datasheetUrl} target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-4 w-4" />
                      Download Datasheet
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-12 space-y-8">
            {/* Overview */}
            {productData.fullDescription && (
              <Card>
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {productData.fullDescription}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Key Features */}
            {productData.keyBenefits && productData.keyBenefits.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {productData.keyBenefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Technical Specifications */}
            {productData.specifications && productData.specifications.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Technical Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {productData.specifications.map((spec, index) => (
                      <div key={index} className="flex justify-between py-2 border-b border-border/50 last:border-b-0">
                        <span className="font-medium text-foreground">{spec.label}</span>
                        <span className="text-muted-foreground">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Applications */}
            {productData.applications && productData.applications.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Applications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {productData.applications.map((application, index) => (
                      <div key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{application}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Industries */}
            {productData.industries && productData.industries.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Industries</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {productData.industries.map((industry, index) => (
                      <div key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{industry}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Certifications */}
            {productData.certifications && productData.certifications.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Certifications & Compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {productData.certifications.map((cert, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Call to Action */}
          <div className="mt-12 bg-muted/50 rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Need More Information?
            </h3>
            <p className="text-muted-foreground mb-4">
              Contact our experts for detailed specifications, pricing, and technical support.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact">
                <Button variant="outline">
                  Contact Us
                </Button>
              </Link>
              <Link href="/quote">
                <Button>
                  Request Quote
                </Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ProductDetailDynamic;