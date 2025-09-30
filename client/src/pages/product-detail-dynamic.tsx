import { Link, useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getProductDetailBySlug } from "@/data/products-detail-pages-data";
import { useTranslation } from "react-i18next";
import { SEO } from "@/lib/seo";
import { generateProductData, generateBreadcrumbData } from "@/utils/seo-enhancements";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Star,
  Phone,
  Mail,
  Download,
  ShoppingCart,
  Eye,
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
              {t("common:buttons.backToProducts", {
                defaultValue: "Back to Products",
              })}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Generate breadcrumb schema
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
    { name: productData.categoryName || "Category", url: productData.categoryPath || "/products" },
    { name: productData.title, url: `${productData.categoryPath}/${slug}` }
  ];

  // Generate enhanced product schema
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

      <div className="grid grid-cols-1 gap-8">
        <Button
          variant="ghost"
          className="mb-6 hover:bg-black/10 dark:hover:bg-white/10 hover:text-foreground group"
          asChild
        >
          <Link
            href={productData.categoryPath}
            data-testid="link-back-to-parent"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-2 transition-transform duration-200" />
            {productData.backLabel}
          </Link>
        </Button>
        {/* Product Image */}
        <div className="lg:sticky lg:top-8 lg:h-fit">
          <img
            src={productData.image}
            alt={productData.title}
            className="w-full h-auto max-h-96 object-contain bg-muted/30 rounded-lg"
            data-testid="img-product"
          />
        </div>
      </div>

      <div className="min-h-screen bg-background">
        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
            {productData.specifications &&
              productData.specifications.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Technical Specifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {productData.specifications.map((spec, index) => (
                        <div
                          key={index}
                          className="flex justify-between py-2 border-b border-border/50 last:border-b-0"
                        >
                          <span className="font-medium text-foreground">
                            {spec.label}
                          </span>
                          <span className="text-muted-foreground">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

            {/* Applications */}
            {productData.applications &&
              productData.applications.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Applications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {productData.applications.map((application, index) => (
                        <div key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            {application}
                          </span>
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
                        <span className="text-muted-foreground">
                          {industry}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Certifications */}
            {productData.certifications &&
              productData.certifications.length > 0 && (
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
        </main>

        {/* Call to Action */}
        <section className="py-12 md:py-16 lg:py-20 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Need More Information?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Contact our experts for detailed specifications, pricing, and
              technical support.
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
      </div>
    </>
  );
};

export default ProductDetailDynamic;
