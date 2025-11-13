import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageSquare, ChevronRight, X, Package, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getNewestProducts, shouldShowPopup } from "@/data/productImages";

interface StockAlertSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  headerHeight?: number;
  position?: 'top' | 'bottom';
}

export function StockAlertSidebar({ isOpen, onToggle, position = 'top' }: StockAlertSidebarProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sidebarRef = useRef<HTMLElement>(null);

  const stockProducts = getNewestProducts(6);
  const showSidebar = shouldShowPopup();

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
    }

    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!showSidebar || stockProducts.length === 0 || !isOpen) return;

    const autoSlideInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stockProducts.length);
    }, 5000);

    return () => clearInterval(autoSlideInterval);
  }, [showSidebar, stockProducts.length, isOpen]);

  const handleCall = () => {
    window.location.href = "tel:+919462771662";
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/919462771662?text=Hi, I'm interested in your premium products",
      "_blank",
    );
  };

  if (!showSidebar || stockProducts.length === 0 || position !== 'top') return null;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onToggle}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[60]"
            data-testid="backdrop-drawer"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.aside
            ref={sidebarRef}
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ 
              type: "spring", 
              damping: 25, 
              stiffness: 200,
              opacity: { duration: 0.2 }
            }}
            className="fixed left-0 top-0 h-screen w-[45%] min-w-[380px] max-w-[600px] bg-background border-r border-border/50 shadow-2xl z-[70] flex flex-col"
            data-testid="aside-stock-alert-top"
            role="complementary"
            aria-label="Available stock products sidebar"
          >
            <div className="flex-1 overflow-y-auto">
              <div className="sticky top-0 bg-gradient-to-b from-background to-background/95 backdrop-blur-sm z-10 px-4 sm:px-6 py-4 sm:py-5 border-b border-border/50">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Package className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" aria-hidden="true" />
                      <h2 className="text-sm sm:text-base font-semibold text-foreground tracking-tight truncate">
                        Available Stock
                      </h2>
                    </div>
                    <p className="text-xs text-muted-foreground">Premium products ready for dispatch</p>
                  </div>
                  <Button
                    onClick={onToggle}
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 flex-shrink-0 hover-elevate"
                    data-testid="button-close-drawer"
                    aria-label="Close available stock sidebar"
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close sidebar</span>
                  </Button>
                </div>
              </div>

              <div className="p-4 sm:p-6 space-y-6 sm:space-y-8">
                <div className="space-y-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="group"
                    >
                      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-muted/30 via-background to-muted/20 border border-border/50 shadow-sm">
                        <div className="aspect-square p-6 sm:p-8">
                          <img
                            src={stockProducts[currentIndex].image}
                            alt={`${stockProducts[currentIndex].title} - Available in stock`}
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                            data-testid={`img-stock-product-${stockProducts[currentIndex].id}`}
                            loading="lazy"
                          />
                        </div>
                        <div className="absolute top-3 right-3">
                          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-500/10 backdrop-blur-sm rounded-lg border border-green-500/20">
                            <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" aria-hidden="true"></div>
                            <span className="text-xs font-semibold text-green-700 dark:text-green-400">In Stock</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 px-1">
                        <h3 className="text-sm sm:text-base font-semibold text-foreground leading-snug line-clamp-2 min-h-[2.5rem]">
                          {stockProducts[currentIndex].title}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1">Product {currentIndex + 1} of {stockProducts.length}</p>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <div className="flex items-center justify-center gap-2 pt-2" role="group" aria-label="Product navigation">
                    {stockProducts.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 hover-elevate ${
                          idx === currentIndex 
                            ? 'w-8 bg-primary' 
                            : 'w-1.5 bg-muted-foreground/30'
                        }`}
                        aria-label={`View product ${idx + 1} of ${stockProducts.length}`}
                        aria-current={idx === currentIndex ? 'true' : 'false'}
                        data-testid={`button-product-nav-${idx}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" aria-hidden="true"></div>
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Contact Us</span>
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" aria-hidden="true"></div>
                  </div>
                  
                  <Button
                    onClick={handleCall}
                    variant="default"
                    className="w-full justify-start gap-3 h-auto py-3 px-4 group"
                    data-testid="button-call-now"
                    aria-label="Call us at +91-94627-71662"
                  >
                    <div className="h-10 w-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div className="text-left flex-1 min-w-0">
                      <div className="text-[10px] sm:text-[11px] font-medium opacity-90 uppercase tracking-wide">Direct Call</div>
                      <div className="text-xs sm:text-sm font-bold truncate">+91-94627-71662</div>
                    </div>
                  </Button>

                  <Button
                    onClick={handleWhatsApp}
                    variant="outline"
                    className="w-full justify-start gap-3 h-auto py-3 px-4 bg-green-50/50 dark:bg-green-950/20 border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-950/40 group"
                    data-testid="button-whatsapp-now"
                    aria-label="Message us on WhatsApp at +91-94627-71662"
                  >
                    <div className="h-10 w-10 rounded-lg bg-green-600/15 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="h-4 w-4 text-green-600 dark:text-green-500" aria-hidden="true" />
                    </div>
                    <div className="text-left flex-1 min-w-0">
                      <div className="text-[10px] sm:text-[11px] font-medium text-green-700 dark:text-green-400 uppercase tracking-wide">WhatsApp</div>
                      <div className="text-xs sm:text-sm font-bold text-foreground truncate">+91-94627-71662</div>
                    </div>
                  </Button>
                </div>
              </div>
            </div>

            <div className="border-t border-border/50 bg-gradient-to-b from-muted/20 to-muted/40 px-4 sm:px-6 py-3 sm:py-4">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] sm:text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Clock className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-green-600 dark:text-green-500 flex-shrink-0" aria-hidden="true" />
                  <span className="font-medium">Same-day dispatch</span>
                </div>
                <div className="h-3 w-px bg-border flex-shrink-0" aria-hidden="true"></div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Shield className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-blue-600 dark:text-blue-500 flex-shrink-0" aria-hidden="true" />
                  <span className="font-medium">ISO certified</span>
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {!isOpen && (
        <button
          onClick={onToggle}
          className="fixed left-0 top-[40%] z-50 bg-primary text-primary-foreground px-2 py-7 rounded-r-xl shadow-2xl group transition-all hover:bg-primary/90 hover:px-2.5 hover:shadow-3xl flex flex-col items-center gap-2 border-r border-t border-b border-primary-foreground/20"
          data-testid="button-open-drawer"
          aria-label="Open available stock sidebar to view products"
        >
          <div className="relative">
            <div className="absolute -top-1 -right-1 h-2 w-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true"></div>
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </div>
          <div className="flex flex-col items-center gap-1.5 writing-mode-vertical">
            <Package className="h-3.5 w-3.5 mb-1" aria-hidden="true" />
            <span className="text-[10px] font-bold uppercase tracking-wider whitespace-nowrap" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
              New Stock
            </span>
            <div className="w-px h-4 bg-primary-foreground/30 my-1" aria-hidden="true"></div>
            <span className="text-[9px] font-semibold opacity-95 whitespace-nowrap" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
              View Products
            </span>
          </div>
          <span className="sr-only">Click to view available stock products</span>
        </button>
      )}
    </>
  );
}
