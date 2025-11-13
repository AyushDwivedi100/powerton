import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, ChevronRight, ChevronLeft, X, Package, Truck, Award, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getNewestProducts, shouldShowPopup } from "@/data/productImages";

interface StockAlertSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  headerHeight?: number;
  position?: 'top' | 'bottom';
}

export function StockAlertSidebar({ isOpen, onToggle, headerHeight = 0, position = 'top' }: StockAlertSidebarProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [footerVisible, setFooterVisible] = useState(0);
  const sidebarRef = useRef<HTMLElement>(null);

  const stockProducts = getNewestProducts(6);
  const showSidebar = shouldShowPopup();

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (!footer) return;

      const footerRect = footer.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const triggerPoint = viewportHeight * 0.8;

      if (footerRect.top < viewportHeight && footerRect.top > 0) {
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
    }, 4000);

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

  const topOpacity = position === 'top' ? (1 - footerVisible) : 0;
  const bottomOpacity = position === 'bottom' ? footerVisible : 0;
  const shouldRender = position === 'top' ? topOpacity > 0.01 : bottomOpacity > 0.01;

  const showBackdrop = position === 'top';
  const showToggleButton = position === 'top';

  return (
    <>
      {showBackdrop && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onToggle}
              className="absolute inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
              data-testid="backdrop-drawer"
            />
          )}
        </AnimatePresence>
      )}

      <AnimatePresence>
        {isOpen && shouldRender && (
          <motion.aside
            ref={sidebarRef}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className={`absolute left-0 w-80 lg:w-[22rem] bg-card shadow-2xl overflow-hidden z-40 flex flex-col transition-all duration-300 ${
              position === 'bottom' ? 'bottom-0' : 'top-0'
            }`}
            style={{
              opacity: position === 'top' ? topOpacity : bottomOpacity,
              height: 'auto',
              minHeight: position === 'top' ? '600px' : `${footerVisible * 600}px`,
              maxHeight: position === 'top' 
                ? `calc(100vh - ${footerVisible * 30}vh)` 
                : `${footerVisible * 100}vh`,
              borderRight: '1px solid hsl(var(--border))'
            }}
            data-testid={`aside-stock-alert-${position}`}
          >
            <Button
              onClick={onToggle}
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-50 rounded-md"
              data-testid="button-close-drawer"
              aria-label="Close stock alert sidebar"
            >
              <X className="h-4 w-4" />
            </Button>

            <div className="p-6 space-y-6 flex-1 flex flex-col">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-primary/10 rounded-md">
                    <Package className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <Badge variant="secondary" className="text-xs font-medium">
                      IN STOCK NOW
                    </Badge>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    Premium Products
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    High-quality industrial instrumentation available for immediate delivery
                  </p>
                </div>
              </div>

              <Separator />

              <div className="flex-1 space-y-4">
                <div className="relative">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="bg-background rounded-md border overflow-hidden hover-elevate">
                        <div className="aspect-square overflow-hidden bg-muted/50">
                          <img
                            src={stockProducts[currentIndex].image}
                            alt={stockProducts[currentIndex].title}
                            className="w-full h-full object-contain p-4"
                            data-testid={`img-stock-product-${stockProducts[currentIndex].id}`}
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="text-sm font-medium text-foreground line-clamp-2 min-h-[2.5rem]">
                            {stockProducts[currentIndex].title}
                          </h4>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <div className="flex items-center justify-between gap-2 mt-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={prevProduct}
                      className="h-9 w-9"
                      data-testid="button-prev-product"
                      aria-label="Previous product"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>

                    <div className="flex gap-1.5">
                      {stockProducts.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentIndex(idx)}
                          className={`h-1.5 rounded-full transition-all ${
                            idx === currentIndex 
                              ? 'w-6 bg-primary' 
                              : 'w-1.5 bg-muted-foreground/30'
                          }`}
                          aria-label={`Go to product ${idx + 1}`}
                        />
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      size="icon"
                      onClick={nextProduct}
                      className="h-9 w-9"
                      data-testid="button-next-product"
                      aria-label="Next product"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Truck className="h-4 w-4" />
                    <span>Same-day dispatch</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Award className="h-4 w-4" />
                    <span>ISO certified quality</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>100% genuine products</span>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Contact us for immediate assistance
                </p>
                
                <div className="space-y-2">
                  <Button
                    onClick={handleCall}
                    variant="default"
                    className="w-full justify-start gap-3 h-auto py-3"
                    data-testid="button-call-now"
                  >
                    <div className="p-1.5 bg-background/20 rounded-md">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div className="flex flex-col items-start text-left">
                      <span className="text-xs font-normal opacity-90">Call Now</span>
                      <span className="text-sm font-semibold">+91-94627-71662</span>
                    </div>
                  </Button>

                  <Button
                    onClick={handleWhatsApp}
                    variant="outline"
                    className="w-full justify-start gap-3 h-auto py-3 bg-green-600/10 border-green-600/20 hover:bg-green-600/20 text-foreground"
                    data-testid="button-whatsapp-now"
                  >
                    <div className="p-1.5 bg-green-600/20 rounded-md">
                      <MessageCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="flex flex-col items-start text-left">
                      <span className="text-xs font-normal text-muted-foreground">WhatsApp</span>
                      <span className="text-sm font-semibold">+91-94627-71662</span>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {showToggleButton && !isOpen && (
        <motion.button
          onClick={onToggle}
          className="fixed left-0 top-1/2 -translate-y-1/2 z-[100] bg-primary text-primary-foreground px-2 py-4 shadow-lg rounded-r-md"
          whileHover={{ x: 2 }}
          whileTap={{ scale: 0.95 }}
          data-testid="button-open-drawer"
          aria-label="Open stock alert sidebar"
        >
          <ChevronRight className="h-5 w-5" />
        </motion.button>
      )}
    </>
  );
}
