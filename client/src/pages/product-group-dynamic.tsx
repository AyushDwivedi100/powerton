import { useParams } from "wouter";
import { SEO } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, useInView, useAnimation } from "framer-motion";
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
import { getProductImageSrc } from "@/assets/images";
import NotFound from "@/pages/not-found";

export default function ProductGroupDynamic() {
  const { parentSlug, subcategorySlug, groupSlug } = useParams<{
    parentSlug: string;
    subcategorySlug: string;
    groupSlug: string;
  }>();
  const { t } = useTranslation(["products", "common"]);
  useScrollAnimations();

  if (!parentSlug || !subcategorySlug || !groupSlug) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Products Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The products you're looking for doesn't exist.
          </p>
          <Link href="/products">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  // Get the subcategory information
  const subcategory = getProductSubCategoryBySlug(subcategorySlug);
  if (!subcategory) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Products Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The products you're looking for doesn't exist.
          </p>
          <Link href="/products">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  // Validate that the parentSlug matches the expected parent category for this subcategory
  const expectedParentSlug = subcategory.parentCategory.split("/").pop();
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
            Products Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The products you're looking for doesn't exist.
          </p>
          <Link href={`/products/${parentSlug}/${subcategorySlug}`}>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to {subcategory.title}
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  // Map subcategorySlug to subcategoryKey (product groups use internal keys)
  const subcategoryKeyMap: { [key: string]: string } = {
    "sensors-transducers": "sensors-transducers",
    "transmitters-flow-meters": "transmitters-flow-meters",
    "switches-indicators": "switches-indicators",
    "valves-actuators": "valves-actuators",
    analyzers: "analyzers",
    "bldc-ceiling-fan": "bldc-ceiling-fan",
    "bldc-cooler-exhaust-motor": "bldc-cooler-exhaust-motor",
    "bldc-submersible-surface-pump": "bldc-submersible-surface-pump",
    "bldc-table-fan-wall-fan-motor": "bldc-table-fan-wall-fan-motor",
    "cables-wires": "cables-wires",
    "connectors-terminals": "connectors-terminals",
    "circuit-breakers-fuses": "circuit-breakers-fuses",
    multimeters: "multimeters",
    oscilloscopes: "oscilloscopes",
    "spectrum-analyzers": "spectrum-analyzers",
    "solar-panels": "solar-panels",
    "solar-inverters": "solar-inverters",
    plcs: "plcs",
    hmi: "hmi",
    scada: "scada",
    dcs: "dcs",
    "centrifugal-pumps": "centrifugal-pumps",
    "diaphragm-pumps": "diaphragm-pumps",
    "gear-pumps": "gear-pumps",
    "pump-parts-spares": "pump-parts-spares",
    "hand-tools": "hand-tools",
    "power-tools": "power-tools",
    "cutting-tools": "cutting-tools",
    "lifting-equipment": "lifting-equipment",
  };

  const subcategoryKey = subcategoryKeyMap[subcategorySlug] || subcategorySlug;

  // Get the product group information
  const productGroup = getProductGroupBySlug(subcategoryKey, groupSlug);
  if (!productGroup) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Products Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The products you're looking for doesn't exist.
          </p>
          <Link href={`/products/${parentSlug}/${subcategorySlug}`}>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to {subcategory.title}
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  // Get all products in this group
  const groupProducts = getProductsByGroup(productGroup.key);

  // Use the title and description from the ProductGroup (with translation support)
  const groupTitle = productGroup.titleKey
    ? t(productGroup.titleKey, {
        defaultValue:
          productGroup.title ||
          productGroup.key.toUpperCase().replace("-", " "),
      })
    : productGroup.title || productGroup.key.toUpperCase().replace("-", " ");

  const groupDescription = productGroup.descriptionKey
    ? t(productGroup.descriptionKey, {
        defaultValue:
          productGroup.description ||
          "High-quality products for industrial automation applications.",
      })
    : productGroup.description ||
      "High-quality products for industrial automation applications.";

  return (
    <>
      <SEO
        title={`${groupTitle} | ${subcategory.title} | Powerton Engineering`}
        description={`Browse our comprehensive range of ${groupTitle.toLowerCase()} products. ${groupDescription}`}
        keywords={`${groupTitle}, ${subcategory.title}, industrial automation, sensors, transmitters`}
        canonicalUrl={`https://powertonengineering.com/products/${parentSlug}/${subcategorySlug}/${groupSlug}`}
      />

      {/* Hero Section */}
      <section className="relative hero-fullscreen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${getProductImageSrc(productGroup.image)})`,
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
                href={`/products/${parentSlug}/${subcategorySlug}`}
                data-testid="link-back-to-subcategory"
              >
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-2 transition-transform duration-200" />
                Back to {subcategory.title}
              </Link>
            </Button>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-wrap-safe responsive-text">
              {groupTitle}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto text-wrap-safe">
              {groupDescription}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Badge
                variant="secondary"
                className="bg-white/20 text-white border-white/20 px-4 py-2 text-lg"
              >
                {groupProducts.length} Products
              </Badge>
              <Badge
                variant="secondary"
                className="bg-white/20 text-white border-white/20 px-4 py-2 text-lg"
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
                                href={`/products/${parentSlug}/${subcategorySlug}/${groupSlug}/${product.slug}`}
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
                <Link href={`/products/${parentSlug}/${subcategorySlug}`}>
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
