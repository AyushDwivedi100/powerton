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
  position?: 'top' | 'bottom';
}

export function StockAlertSidebar({ isOpen, onToggle, headerHeight = 0, position = 'top' }: StockAlertSidebarProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [footerVisible, setFooterVisible] = useState(0); // 0 to 1, representing footer visibility
  const sidebarRef = useRef<HTMLElement>(null);

  const stockProducts = getNewestProducts(6);
  const showSidebar = shouldShowPopup();

  // Detect footer visibility for smooth transition
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (!footer) return;

      const footerRect = footer.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const triggerPoint = viewportHeight * 0.8; // Start transition when footer is 80% into view

      if (footerRect.top < viewportHeight && footerRect.top > 0) {
        // Footer is entering viewport
        const visibility = Math.max(0, Math.min(1, (viewportHeight - footerRect.top) / (viewportHeight - triggerPoint)));
        setFooterVisible(visibility);
      } else if (footerRect.top <= 0) {
        setFooterVisible(1);
      } else {
        setFooterVisible(0);
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

  // Calculate opacity and visibility based on position and footer visibility
  const topOpacity = position === 'top' ? (1 - footerVisible) : 0;
  const bottomOpacity = position === 'bottom' ? footerVisible : 0;
  const shouldRender = position === 'top' ? topOpacity > 0.01 : bottomOpacity > 0.01;

  // Only render backdrop for top sidebar
  const showBackdrop = position === 'top';
  
  // Only render toggle button for top sidebar
  const showToggleButton = position === 'top';

  return (
    <>
      {/* Backdrop - Only for top sidebar */}
      {showBackdrop && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onToggle}
              className="absolute inset-0 bg-black/20 z-30 lg:hidden"
              data-testid="backdrop-drawer"
            />
          )}
        </AnimatePresence>
      )}

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && shouldRender && (
          <motion.aside
            ref={sidebarRef}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={`absolute left-0 w-80 lg:w-96 bg-background border-r-4 border-primary shadow-xl overflow-hidden z-40 flex flex-col transition-all duration-300 ${
              position === 'bottom' ? 'bottom-0' : 'top-0'
            }`}
            style={{
              opacity: position === 'top' ? topOpacity : bottomOpacity,
              height: 'auto',
              minHeight: position === 'top' ? '600px' : `${footerVisible * 600}px`,
              maxHeight: position === 'top' 
                ? `calc(100vh - ${footerVisible * 30}vh)` 
                : `${footerVisible * 100}vh`
            }}
            data-testid={`aside-stock-alert-${position}`}
          >
            {/* Close Button - Inside Drawer */}
            <Button
              onClick={onToggle}
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 z-50 h-8 w-8 rounded-full bg-primary/10 hover:bg-primary/20 text-foreground"
              data-testid="button-close-drawer"
              aria-label="Close stock alert sidebar"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="p-3 space-y-2.5 flex-1 flex flex-col justify-center">
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

                <h3 className="text-lg font-bold text-foreground mb-0.5">
                  Premium Products
                </h3>
                <p className="text-xs text-muted-foreground mb-0.5">
                  High-quality instrumentation
                </p>
                <p className="text-xs font-semibold text-destructive">
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

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-2 space-y-1.5">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    onClick={handleCall}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 shadow-md"
                    data-testid="button-call-now"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    <div className="flex flex-col items-start">
                      <span className="text-xs font-normal">Call Now</span>
                      <span className="text-sm font-bold">+91-94627-71662</span>
                    </div>
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    onClick={handleWhatsApp}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-4 shadow-md"
                    data-testid="button-whatsapp-now"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    <div className="flex flex-col items-start">
                      <span className="text-xs font-normal">WhatsApp Now</span>
                      <span className="text-sm font-bold">+91-94627-71662</span>
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

      {/* Open Button - Shows when drawer is closed - Only for top sidebar */}
      {showToggleButton && !isOpen && (
        <motion.button
          onClick={onToggle}
          className="sticky left-0 top-1/2 -translate-y-1/2 z-[100] bg-primary text-primary-foreground px-1.5 py-2 shadow-lg hover:bg-primary/90 transition-all duration-300 rounded-r-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          data-testid="button-open-drawer"
          aria-label="Open stock alert sidebar"
        >
          <ChevronRight className="h-4 w-4" />
        </motion.button>
      )}
    </>
  );
}
