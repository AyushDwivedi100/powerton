import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, ArrowRight, ArrowLeft, ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getNewestProducts, shouldShowPopup } from "@/data/productImages";

interface StockAlertSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  headerHeight?: number;
}

export function StockAlertSidebar({ isOpen, onToggle, headerHeight = 0 }: StockAlertSidebarProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [footerOffset, setFooterOffset] = useState(0);
  const sidebarRef = useRef<HTMLElement>(null);

  const stockProducts = getNewestProducts(6);
  const showSidebar = shouldShowPopup();

  // Detect footer visibility and adjust sidebar position
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (!footer || !sidebarRef.current) return;

      const footerRect = footer.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // If footer is visible in viewport
      if (footerRect.top < viewportHeight) {
        // Calculate how much the footer is overlapping with where the sidebar should be
        const overlap = viewportHeight - footerRect.top;
        setFooterOffset(overlap);
      } else {
        setFooterOffset(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!showSidebar || stockProducts.length === 0 || !isOpen) return;

    const autoSlideInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stockProducts.length);
    }, 3000);

    return () => clearInterval(autoSlideInterval);
  }, [showSidebar, stockProducts.length, isOpen]);

  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % stockProducts.length);
  };

  const prevProduct = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + stockProducts.length) % stockProducts.length,
    );
  };

  const handleCall = () => {
    window.location.href = "tel:+919462771662";
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/919462771662?text=Hi, I'm interested in the ready stock products",
      "_blank",
    );
  };

  if (!showSidebar || stockProducts.length === 0) return null;

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onToggle}
            className="fixed inset-0 bg-black/20 z-40 lg:hidden"
            data-testid="backdrop-drawer"
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            ref={sidebarRef}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed left-0 w-80 lg:w-96 bg-background border-r-4 border-primary shadow-xl z-50 overflow-y-auto"
            style={{
              top: `${headerHeight}px`,
              bottom: `${footerOffset}px`,
              height: 'auto'
            }}
            data-testid="aside-stock-alert"
          >

            <div className="p-4 space-y-4">
              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-block"
                >
                  <Badge className="bg-red-600 text-white text-sm px-3 py-1.5 mb-2">
                    ⚡ READY STOCK
                  </Badge>
                </motion.div>

                <h3 className="text-xl font-bold text-foreground mb-1">
                  Premium Products
                </h3>
                <p className="text-sm text-muted-foreground mb-1">
                  High-quality instrumentation
                </p>
                <p className="text-sm font-semibold text-destructive">
                  🔥 Order now!
                </p>
              </div>

              <div className="relative">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevProduct}
                    className="h-8 w-8 shrink-0"
                    data-testid="button-prev-product"
                  >
                    <ArrowLeft className="h-3 w-3" />
                  </Button>

                  <div className="flex-1">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="relative group"
                    >
                      <div className="bg-white dark:bg-gray-900 rounded-lg p-2 border-2 border-border hover:border-primary transition-colors">
                        <div className="aspect-square overflow-hidden rounded-md mb-2">
                          <img
                            src={stockProducts[currentIndex].image}
                            alt={stockProducts[currentIndex].title}
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                            data-testid={`img-stock-product-${stockProducts[currentIndex].id}`}
                          />
                        </div>
                        <h4 className="text-sm font-semibold text-foreground text-center line-clamp-2">
                          {stockProducts[currentIndex].title}
                        </h4>
                      </div>
                    </motion.div>
                  </div>

                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextProduct}
                    className="h-8 w-8 shrink-0"
                    data-testid="button-next-product"
                  >
                    <ArrowRight className="h-3 w-3" />
                  </Button>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-3 space-y-2">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    onClick={handleCall}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 shadow-md"
                    data-testid="button-call-now"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    <div className="flex flex-col items-start">
                      <span className="text-xs font-normal">Call Now</span>
                      <span className="text-base font-bold">+91-94627-71662</span>
                    </div>
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    onClick={handleWhatsApp}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-6 shadow-md"
                    data-testid="button-whatsapp-now"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    <div className="flex flex-col items-start">
                      <span className="text-xs font-normal">WhatsApp Now</span>
                      <span className="text-base font-bold">+91-94627-71662</span>
                    </div>
                  </Button>
                </motion.div>
              </div>

              <div className="text-center">
                <p className="text-xs text-muted-foreground leading-tight">
                  🚚 Same-day dispatch | ✅ ISO certified | 💯 Genuine quality
                </p>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Toggle Button - Moves with drawer */}
      <motion.button
        onClick={onToggle}
        className="fixed top-1/2 -translate-y-1/2 z-50 bg-primary text-primary-foreground p-3 shadow-lg hover:bg-primary/90 transition-colors rounded-r-lg"
        style={{ top: `calc(50% + ${headerHeight}px / 2)` }}
        animate={{ 
          left: isOpen ? 'var(--drawer-width)' : '0px',
        }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        data-testid="button-toggle-drawer"
      >
        {isOpen ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
        <style>{`
          :root {
            --drawer-width: 320px;
          }
          @media (min-width: 1024px) {
            :root {
              --drawer-width: 384px;
            }
          }
        `}</style>
      </motion.button>
    </>
  );
}
