import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronUp, Package } from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { getProductsByGroup, ProductGroup } from "@/data/products-detail-pages-data";

interface ProductGroupPanelProps {
  productGroup: ProductGroup;
  parentSlug: string;
  subcategorySlug: string;
  isExpanded: boolean;
  onToggle: () => void;
}

export function ProductGroupPanel({
  productGroup,
  parentSlug,
  subcategorySlug,
  isExpanded,
  onToggle,
}: ProductGroupPanelProps) {
  const { t } = useTranslation(["products", "common", "products-data"]);

  const groupProducts = getProductsByGroup(productGroup.key);
  
  const groupSlug = productGroup.slug || productGroup.key;

  const groupTitle = productGroup.titleKey
    ? t(productGroup.titleKey, {
        defaultValue:
          productGroup.title ||
          productGroup.key.toUpperCase().replace("-", " "),
      })
    : productGroup.title || productGroup.key.toUpperCase().replace("-", " ");

  return (
    <AnimatePresence>
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="mt-4 pt-4 border-t border-border/50">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Package className="w-5 h-5 text-primary" />
                <h4 className="font-semibold text-foreground">
                  {t("products:sections.productsInGroup", { count: groupProducts.length })}
                </h4>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  onToggle();
                }}
                className="text-muted-foreground hover:text-foreground"
                data-testid={`button-collapse-${productGroup.key}`}
              >
                <ChevronUp className="w-4 h-4 mr-1" />
                {t("common:buttons.collapse")}
              </Button>
            </div>

            {groupProducts.length > 0 ? (
              <div className="bg-background border border-border rounded-lg shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                          {t("products:table.manufacturer")}
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                          {t("products:table.model")}
                        </th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                          {t("products:table.actions")}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {groupProducts.map((product) => (
                        <motion.tr
                          key={product.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2 }}
                          className="hover:bg-muted/50 transition-colors"
                          data-testid={`row-product-${product.id}`}
                        >
                          <td className="px-4 py-3 text-sm text-foreground">
                            <span data-testid={`text-manufacturer-${product.id}`}>
                              {product.specs.manufacturer ||
                                t("common:labels.notAvailable")}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm text-foreground">
                            <span
                              className="font-medium"
                              data-testid={`text-model-${product.id}`}
                            >
                              {product.specs.model || product.id}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm">
                            <Link
                              href={`/products/${parentSlug}/${subcategorySlug}/${groupSlug}/${product.slug}`}
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
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 bg-muted/30 rounded-lg">
                <p className="text-muted-foreground">
                  {t("products:messages.noProductsInGroup")}
                </p>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
