import { useParams } from "wouter";
import { SEO } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  AnimatedSection,
  useScrollAnimations,
} from "@/hooks/use-scroll-animation";
import { ArrowLeft, Phone, Mail, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import {
  getProductGroupBySlug,
  getProductsByGroup,
} from "@/data/products-detail-pages-data";
import { getProductSubCategoryBySlug } from "@/data/products-sub-category-pages-data";
import { getProductImageSrc } from "@/assets/images";

export default function ProductGroupDynamic() {
  const { parentSlug, subcategorySlug, groupSlug } = useParams<{
    parentSlug: string;
    subcategorySlug: string;
    groupSlug: string;
  }>();
  const { t } = useTranslation(["products", "common", "products-data"]);
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
            {t("common:errors.productsNotFound")}
          </h1>
          <p className="text-muted-foreground mb-8">
            {t("common:errors.productsNotFoundMessage")}
          </p>
          <Link href="/products">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-2 transition-transform duration-300" />
              {t("common:buttons.backToProducts")}
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  // Get the subcategory information
  const subcategory = getProductSubCategoryBySlug(subcategorySlug, t);
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
            {t("common:errors.productsNotFound")}
          </h1>
          <p className="text-muted-foreground mb-8">
            {t("common:errors.productsNotFoundMessage")}
          </p>
          <Link href="/products">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-2 transition-transform duration-300" />
              {t("common:buttons.backToProducts")}
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  // Validate that the parentSlug matches the expected parent category for this subcategory
  const expectedParentSlug = subcategory.parentCategory.split("/").pop();

  // Use expectedParentSlug instead of parentSlug from URL params to avoid empty/incorrect slugs
  const correctParentSlug = expectedParentSlug || parentSlug;

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
            {t("common:errors.productsNotFound")}
          </h1>
          <p className="text-muted-foreground mb-8">
            {t("common:errors.productsNotFoundMessage")}
          </p>
          <Link href={`/products/${correctParentSlug}/${subcategorySlug}`}>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-2 transition-transform duration-300" />
              {t("common:buttons.backToProducts")}
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
    "instrument-transformers": "instrument-transformers",
    "bldc-ceiling-fan": "bldc-ceiling-fan",
    "bldc-cooler-exhaust-motor": "bldc-cooler-exhaust-motor",
    "bldc-submersible-surface-pump": "bldc-submersible-surface-pump",
    "bldc-table-fan-wall-fan-motor": "bldc-table-fan-wall-fan-motor",
    "electrical-cables": "electrical-cables",
    "instrumentation-cables": "instrumentation-cables",
    "contactors-relays": "contactors-relays",
    "transformers-power-devices": "transformers-power-devices",
    "industrial-lighting": "industrial-lighting",
    "connectors-terminals": "connectors-terminals",
    "circuit-breakers-fuses": "circuit-breakers-fuses",
    "motor-controllers-drives": "motor-controllers-drives",
    "panel-meters-indicators": "panel-meters-indicators",
    "protection-relays": "protection-relays",
    multimeters: "multimeters",
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
    "io-modules": "io-modules",
    "insulators-insulation-materials": "insulators-insulation-materials",
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
            {t("common:errors.productsNotFound")}
          </h1>
          <p className="text-muted-foreground mb-8">
            {t("common:errors.productsNotFoundMessage")}
          </p>
          <Link href={`/products/${correctParentSlug}/${subcategorySlug}`}>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("common:buttons.backTo", { category: subcategory.title })}
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
          t("products-data:defaults.groupDescription"),
      })
    : productGroup.description || t("products-data:defaults.groupDescription");

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
                href={`/products/${correctParentSlug}/${subcategorySlug}`}
                data-testid="link-back-to-subcategory"
              >
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-2 transition-transform duration-200" />
                {t("common:buttons.backTo")} {subcategory.title}
              </Link>
            </Button>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-wrap-safe responsive-text">
              {groupTitle}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto text-wrap-safe">
              {groupDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Products Table Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("products:sections.allProducts")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {t("products:sections.completeListDescription", {
                  groupTitle: groupTitle.toLowerCase(),
                })}
              </p>
            </div>

            {groupProducts.length > 0 ? (
              <div className="bg-white dark:bg-card border border-border rounded-lg shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                          {t("products:table.manufacturer")}
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                          {t("products:table.model")}
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                          {t("products:table.type")}
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                          {t("products:table.actions")}
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
                              {product.specs.manufacturer ||
                                t("common:labels.notAvailable")}
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
                              {product.specs.type ||
                                t("products-data:industrialProduct")}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm">
                            <div className="flex gap-2">
                              <Link
                                href={`/products/${correctParentSlug}/${subcategorySlug}/${groupSlug}/${product.slug}`}
                              >
                                <Button
                                  size="sm"
                                  variant="outline"
                                  data-testid={`button-view-detail-${product.id}`}
                                >
                                  <ExternalLink className="mr-1 h-3 w-3" />
                                  {t("common:buttons.view")}
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
                  {t("products:messages.noProductsInGroup")}
                </p>
                <Link
                  href={`/products/${correctParentSlug}/${subcategorySlug}`}
                >
                  <Button className="mt-4">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {t("common:buttons.backTo", {
                      category: subcategory.title,
                    })}
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
              {t("common:sections.needAssistance")}
            </h2>
            <p className="text-lg text-white max-w-2xl mx-auto mb-8">
              {t("products:sections.expertsHelpDescription", {
                groupTitle: groupTitle.toLowerCase(),
              })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  data-testid="button-contact-experts"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 text-lg font-semibold w-full sm:w-auto"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  {t("common:buttons.contactExperts")}
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
                  {t("common:buttons.getQuote")}
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
