import { useState, useEffect, useRef, useMemo, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  MessageSquare,
  ChevronRight,
  ChevronLeft,
  X,
  Package,
  Clock,
  Shield,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { getAllProductsForStockAlert, shouldShowPopup } from "@/data/productImages";
import { useRTL } from "@/hooks/use-rtl";

interface StockAlertSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  headerHeight?: number;
  position?: "top" | "bottom";
}

export const StockAlertSidebar = memo(function StockAlertSidebar({
  isOpen,
  onToggle,
  position = "top",
}: StockAlertSidebarProps) {
  const { t } = useTranslation();
  const isRtl = useRTL();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoCycling, setIsAutoCycling] = useState(true);
  const sidebarRef = useRef<HTMLElement>(null);

  const stockProducts = useMemo(() => getAllProductsForStockAlert(), []);
  const showSidebar = useMemo(() => shouldShowPopup(), []);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add("scroll-locked");
    } else {
      document.documentElement.classList.remove("scroll-locked");
    }

    return () => {
      document.documentElement.classList.remove("scroll-locked");
    };
  }, [isOpen]);

  useEffect(() => {
    if (!showSidebar || stockProducts.length === 0 || !isOpen || !isAutoCycling) return;

    const autoSlideInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stockProducts.length);
    }, 5000);

    return () => clearInterval(autoSlideInterval);
  }, [showSidebar, stockProducts.length, isOpen, isAutoCycling]);

  const handlePrevious = () => {
    setIsAutoCycling(false);
    setCurrentIndex((prev) => (prev - 1 + stockProducts.length) % stockProducts.length);
  };

  const handleNext = () => {
    setIsAutoCycling(false);
    setCurrentIndex((prev) => (prev + 1) % stockProducts.length);
  };

  const handleDotClick = (idx: number) => {
    setIsAutoCycling(false);
    setCurrentIndex(idx);
  };

  const handleCall = () => {
    window.location.href = "tel:+919462771662";
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/919462771662?text=Hi, I'm interested in your premium products",
      "_blank",
    );
  };

  if (!showSidebar || stockProducts.length === 0 || position !== "top")
    return null;

  const currentProduct = stockProducts[currentIndex];

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onToggle}
            className="fixed inset-0 bg-black/40 z-[60]"
            data-testid="backdrop-drawer"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.aside
            ref={sidebarRef}
            initial={{ x: isRtl ? "100%" : "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: isRtl ? "100%" : "-100%" }}
            transition={{
              type: "tween",
              duration: 0.2,
              ease: [0.4, 0, 0.2, 1],
            }}
            className={`fixed top-0 h-screen w-[45%] min-w-[380px] max-w-[600px] bg-background shadow-2xl z-[70] flex flex-col ${
              isRtl ? "right-0 border-l" : "left-0 border-r"
            } border-border`}
            style={{ 
              willChange: 'transform'
            }}
            data-testid="aside-stock-alert-top"
            role="complementary"
            aria-label={t("common:ui.ariaLabels.availableStockSidebar")}
          >
            <div 
              className="flex-1 overflow-y-auto overscroll-contain"
              style={{
                contain: 'paint',
                willChange: 'scroll-position',
                transform: 'translate3d(0, 0, 0)',
              }}
            >
              <div className="sticky top-0 bg-background z-10 px-4 sm:px-6 py-4 sm:py-5 border-b border-border">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Package
                        className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0"
                        aria-hidden="true"
                      />
                      <h2 className="text-sm sm:text-base font-semibold text-foreground tracking-tight truncate">
                        {t("common:ui.stockAlert.availableStock")}
                      </h2>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {t("common:ui.stockAlert.productsReady", { count: stockProducts.length })}
                    </p>
                  </div>
                  <Button
                    onClick={onToggle}
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 flex-shrink-0"
                    data-testid="button-close-drawer"
                    aria-label={t("common:ui.ariaLabels.closeStockSidebar")}
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">{t("common:ui.ariaLabels.closeStockSidebar")}</span>
                  </Button>
                </div>
              </div>

              <div className="p-4 sm:p-6 space-y-6 sm:space-y-8">
                <div className="space-y-4">
                  <div className="group">
                    <div className="relative overflow-hidden rounded-lg bg-muted/20 border border-border">
                      <div className="aspect-square p-6 sm:p-8">
                        <img
                          key={currentProduct.id}
                          src={currentProduct.image}
                          alt={`${currentProduct.title} - ${t("common:ui.stockAlert.inStock")}`}
                          className="w-full h-full object-contain"
                          style={{ 
                            transform: 'translate3d(0, 0, 0)',
                            transition: 'opacity 0.2s ease-out'
                          }}
                          data-testid={`img-stock-product-${currentProduct.id}`}
                          loading="eager"
                        />
                      </div>
                      <div className="absolute top-3 right-3">
                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-500/10 rounded-lg border border-green-500/20">
                          <div
                            className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"
                            aria-hidden="true"
                          ></div>
                          <span className="text-xs font-semibold text-green-700 dark:text-green-400">
                            {t("common:ui.stockAlert.inStock")}
                          </span>
                        </div>
                      </div>
                      
                      <Button
                        onClick={handlePrevious}
                        variant="ghost"
                        size="icon"
                        className="absolute left-2 top-1/2 -translate-y-1/2 h-9 w-9 bg-background/80 backdrop-blur-sm border border-border shadow-lg"
                        data-testid="button-previous-product"
                        aria-label={t("common:ui.ariaLabels.previousProduct")}
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </Button>
                      
                      <Button
                        onClick={handleNext}
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 bg-background/80 backdrop-blur-sm border border-border shadow-lg"
                        data-testid="button-next-product"
                        aria-label={t("common:ui.ariaLabels.nextProduct")}
                      >
                        <ChevronRight className="h-5 w-5" />
                      </Button>
                    </div>

                    <div className="mt-4 px-1">
                      <h3 className="text-sm sm:text-base font-semibold text-foreground leading-snug line-clamp-2 min-h-[2.5rem]">
                        {currentProduct.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        Product {currentIndex + 1} of {stockProducts.length}
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex items-center justify-center gap-2 pt-2 overflow-x-auto pb-2"
                    role="group"
                    aria-label={t("common:ui.ariaLabels.productNavigation")}
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  >
                    {stockProducts.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleDotClick(idx)}
                        className={`h-1.5 rounded-full transition-all duration-200 flex-shrink-0 ${
                          idx === currentIndex
                            ? "w-8 bg-primary"
                            : "w-1.5 bg-muted-foreground"
                        }`}
                        aria-label={t("common:ui.ariaLabels.viewProductOf", { current: idx + 1, total: stockProducts.length })}
                        aria-current={idx === currentIndex ? "true" : "false"}
                        data-testid={`button-product-nav-${idx}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-px flex-1 bg-border" aria-hidden="true"></div>
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      {t("common:ui.stockAlert.contactUs")}
                    </span>
                    <div className="h-px flex-1 bg-border" aria-hidden="true"></div>
                  </div>

                  <Button
                    onClick={handleCall}
                    variant="default"
                    className="w-full justify-start gap-3 h-auto py-3 px-4 group"
                    data-testid="button-call-now"
                    aria-label={t("common:ui.ariaLabels.callUs", { phone: "+91-94627-71662" })}
                  >
                    <div className="h-10 w-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div className="text-left flex-1 min-w-0">
                      <div className="text-[10px] sm:text-[11px] font-medium opacity-90 uppercase tracking-wide">
                        {t("common:ui.stockAlert.directCall")}
                      </div>
                      <div className="text-xs sm:text-sm font-bold truncate">
                        +91-94627-71662
                      </div>
                    </div>
                  </Button>

                  <Button
                    onClick={handleWhatsApp}
                    variant="outline"
                    className="w-full justify-start gap-3 h-auto py-3 px-4 bg-green-50/50 dark:bg-green-950/20 border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/40 group"
                    data-testid="button-whatsapp-now"
                    aria-label={t("common:ui.ariaLabels.whatsappUs", { phone: "+91-94627-71662" })}
                  >
                    <div className="h-10 w-10 rounded-lg bg-green-600/15 flex items-center justify-center flex-shrink-0">
                      <MessageSquare
                        className="h-4 w-4 text-green-600 dark:text-green-500"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="text-left flex-1 min-w-0">
                      <div className="text-[10px] sm:text-[11px] font-medium text-green-700 dark:text-green-400 uppercase tracking-wide">
                        {t("common:ui.stockAlert.whatsapp")}
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-foreground truncate">
                        +91-94627-71662
                      </div>
                    </div>
                  </Button>
                </div>
              </div>
            </div>

            <div className="border-t border-border bg-muted/30 px-4 sm:px-6 py-3 sm:py-4">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] sm:text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Clock
                    className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-green-600 dark:text-green-500 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="font-medium">{t("common:ui.stockAlert.sameDayDispatch")}</span>
                </div>
                <div
                  className="h-3 w-px bg-border flex-shrink-0"
                  aria-hidden="true"
                ></div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Shield
                    className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-blue-600 dark:text-blue-500 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="font-medium">{t("common:ui.stockAlert.isoCertified")}</span>
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {!isOpen && (
        <button
          onClick={onToggle}
          className={`fixed top-[30%] z-50 bg-primary text-primary-foreground px-1 py-7 shadow-lg group transition-all hover:bg-primary/90 hover:px-2.5 flex flex-col items-center gap-2 border-t border-b border-primary-foreground/20 ${
            isRtl 
              ? "right-0 rounded-l-xl border-l" 
              : "left-0 rounded-r-xl border-r"
          }`}
          data-testid="button-open-drawer"
          aria-label={t("common:ui.ariaLabels.openStockSidebar")}
          style={{ transform: 'translate3d(0, 0, 0)' }}
        >
          <div className="relative">
            <div
              className={`absolute -top-1 h-2 w-2 bg-green-400 rounded-full animate-pulse ${
                isRtl ? "-left-1" : "-right-1"
              }`}
              aria-hidden="true"
            ></div>
            {isRtl ? (
              <ChevronLeft
                className="h-4 w-4 transition-transform group-hover:-translate-x-1"
                aria-hidden="true"
              />
            ) : (
              <ChevronRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            )}
          </div>
          <div className="flex flex-col items-center gap-1.5 writing-mode-vertical">
            <Package className="h-3.5 w-3.5 mb-1" aria-hidden="true" />
            <span
              className="text-[10px] font-bold uppercase tracking-wider whitespace-nowrap"
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            >
              {t("common:ui.stockAlert.newStock")}
            </span>
            <div
              className="w-px h-4 bg-primary-foreground/30 my-1"
              aria-hidden="true"
            ></div>
            <span
              className="text-[9px] font-semibold opacity-95 whitespace-nowrap"
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            >
              {t("common:ui.stockAlert.viewProducts")}
            </span>
          </div>
          <span className="sr-only">
            {t("common:ui.ariaLabels.clickViewStock")}
          </span>
        </button>
      )}
    </>
  );
});
