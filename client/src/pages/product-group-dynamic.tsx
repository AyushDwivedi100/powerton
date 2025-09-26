import { useParams } from "wouter";
import { SEO } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  AnimatedSection,
  useScrollAnimations,
} from "@/hooks/use-scroll-animation";
import { ArrowLeft, Phone, Mail, ExternalLink, FileText } from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import {
  getProductGroupBySlug,
  getProductsByGroup,
} from "@/data/products-detail-pages-data";
import { getProductSubCategoryBySlug } from "@/data/products-sub-category-pages-data";
import NotFound from "@/pages/not-found";

export default function ProductGroupDynamic() {
  const { subcategorySlug, groupSlug } = useParams<{
    subcategorySlug: string;
    groupSlug: string;
  }>();
  const { t } = useTranslation(["products", "common"]);
  useScrollAnimations();

  if (!subcategorySlug || !groupSlug) {
    return <NotFound />;
  }

  // Get the subcategory information
  const subcategory = getProductSubCategoryBySlug(subcategorySlug);
  if (!subcategory) {
    return <NotFound />;
  }

  // Get the product group information
  const productGroup = getProductGroupBySlug(subcategorySlug, groupSlug);
  if (!productGroup) {
    return <NotFound />;
  }

  // Get all products in this group
  const groupProducts = getProductsByGroup(productGroup.key);

  // Use the title and description from the ProductGroup
  const groupTitle =
    productGroup.title || productGroup.key.toUpperCase().replace("-", " ");
  const groupDescription =
    productGroup.description ||
    "High-quality products for industrial automation applications.";

  return (
    <>
      <SEO
        title={`${groupTitle} | ${subcategory.title} | Powerton Engineering`}
        description={`Browse our comprehensive range of ${groupTitle.toLowerCase()} products. ${groupDescription}`}
        keywords={`${groupTitle}, ${subcategory.title}, industrial automation, sensors, transmitters`}
        canonicalUrl={`https://powertonengineering.com/products/${subcategorySlug}/${groupSlug}`}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/90 to-primary py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-white">
          <div className="text-center text-foreground">
            <Button
              variant="ghost"
              className="mb-6 hover:bg-black/10 dark:hover:bg-white/10 hover:text-foreground group"
              asChild
            >
              <Link
                href={`/products-sub-category/${subcategorySlug}`}
                data-testid="link-back-to-subcategory"
              >
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-2 transition-transform duration-200" />
                Back to {subcategory.title}
              </Link>
            </Button>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {groupTitle}
            </h1>
            <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto mb-8">
              {groupDescription}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Badge
                variant="secondary"
                className="bg-black/20 dark:bg-white/20 text-foreground border-black/20 dark:border-white/20 px-4 py-2 text-lg"
              >
                {groupProducts.length} Products
              </Badge>
              <Badge
                variant="secondary"
                className="bg-black/20 dark:bg-white/20 text-foreground border-black/20 dark:border-white/20 px-4 py-2 text-lg"
              >
                {subcategory.title}
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Products Table Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("products:sections.allProducts", {
                  defaultValue: "All Products",
                })}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Complete list of {groupTitle.toLowerCase()} products with
                specifications
              </p>
            </div>

            {groupProducts.length > 0 ? (
              <div className="bg-white dark:bg-card border border-border rounded-lg shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                          Manufacturer
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                          Model
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                          Type
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {groupProducts.map((product, index) => (
                        <tr
                          key={product.id}
                          className="hover:bg-muted/50 transition-colors"
                          data-testid={`row-product-${product.id}`}
                        >
                          <td className="px-6 py-4 text-sm text-foreground">
                            <span
                              data-testid={`text-manufacturer-${product.id}`}
                            >
                              {product.specs.manufacturer || "N/A"}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-foreground">
                            <span
                              className="font-medium"
                              data-testid={`text-model-${product.id}`}
                            >
                              {product.specs.model || product.id}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-muted-foreground">
                            <span data-testid={`text-type-${product.id}`}>
                              {product.specs.type || "Industrial Product"}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm">
                            <div className="flex gap-2">
                              <Link
                                href={`/products/${subcategorySlug}/${groupSlug}/${product.slug}`}
                              >
                                <Button
                                  size="sm"
                                  variant="outline"
                                  data-testid={`button-view-detail-${product.id}`}
                                >
                                  <ExternalLink className="mr-1 h-3 w-3" />
                                  View
                                </Button>
                              </Link>
                              {product.datasheetUrl && (
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  asChild
                                  data-testid={`button-datasheet-${product.id}`}
                                >
                                  <a
                                    href={product.datasheetUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <FileText className="mr-1 h-3 w-3" />
                                    Datasheet
                                  </a>
                                </Button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No products found in this group.
                </p>
                <Link href={`/products/${subcategorySlug}`}>
                  <Button className="mt-4">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to {subcategory.title}
                  </Button>
                </Link>
              </div>
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-12 md:py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t("common:sections.needAssistance", {
                defaultValue: "Need Technical Assistance?",
              })}
            </h2>
            <p className="text-lg text-white max-w-2xl mx-auto mb-8">
              Our experts are here to help you select the right{" "}
              {groupTitle.toLowerCase()} for your application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  data-testid="button-contact-experts"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 text-lg font-semibold w-full sm:w-auto"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  {t("common:buttons.contactExperts", {
                    defaultValue: "Contact Our Experts",
                  })}
                </Button>
              </Link>
              <Link href="/quote">
                <Button
                  variant="outline"
                  size="lg"
                  data-testid="button-get-quote"
                  className="border-2 border-border text-foreground hover:bg-foreground hover:text-background px-8 py-3 text-lg font-semibold w-full sm:w-auto"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  {t("common:buttons.getQuote", {
                    defaultValue: "Get Quote",
                  })}
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
