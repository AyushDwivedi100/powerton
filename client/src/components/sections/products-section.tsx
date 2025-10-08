import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getProducts } from "@/data/constants";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { AnimatedSection, StaggeredList } from "@/hooks/use-scroll-animation";
import { useTranslation } from "react-i18next";

export default function ProductsSection() {
  const { t } = useTranslation(["pages", "products", "common"]);
  return (
    <section
      id="products"
      className="py-12 md:py-16 lg:py-20 bg-muted"
      role="main"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp" delay={0.1} duration={0.8}>
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <motion.span
              className="text-secondary font-semibold text-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t("pages:home.products.label")}
            </motion.span>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-3 sm:mt-4 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {t("pages:home.products.title")}
            </motion.h2>
            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {t("pages:home.products.description")}
            </motion.p>
          </div>
        </AnimatedSection>

        <StaggeredList
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 items-stretch"
          stagger={0.12}
          delay={0.3}
        >
          {getProducts(t).map((product, index) => (
            <Link
              href={`/products/${product.id}`}
              key={product.id}
              className="group/button"
            >
              <motion.div
                key={product.id}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="h-full"
              >
                <Card className="overflow-hidden group hover:shadow-xl hover:scale-[1.02] transition-all duration-300 h-full flex flex-col">
                  <motion.div
                    className="relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.img
                      src={product.image}
                      alt={`ID-050: ${product.title} - ${product.description}`}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  </motion.div>

                  <CardContent className="p-4 sm:p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 flex-1">
                      {product.description}
                    </p>
                    <div className="mt-auto">
                      <Button
                        variant="ghost"
                        className="text-secondary hover:text-secondary hover:bg-transparent p-0 font-medium transition-all duration-300"
                      >
                        {t("pages:home.products.viewProducts")}
                        <span className="ms-2 inline-block transition-transform duration-300 group-hover:translate-x-2 rtl:group-hover:-translate-x-2">
                          <span className="ltr:inline rtl:hidden">→</span>
                          <span className="ltr:hidden rtl:inline">←</span>
                        </span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>
          ))}
        </StaggeredList>

        <AnimatedSection animation="fadeInUp" delay={0.4} duration={0.6}>
          <div className="text-center">
            <Link href="/products">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-4 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                {t("pages:home.products.viewCatalog")}
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
