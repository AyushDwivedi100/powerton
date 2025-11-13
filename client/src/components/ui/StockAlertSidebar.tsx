import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, ChevronRight, X, ArrowUpRight } from "lucide-react";
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
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]"
            data-testid="backdrop-drawer"
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
            className="fixed left-0 top-0 h-screen w-[45%] min-w-[380px] max-w-[600px] bg-card border-r shadow-2xl z-[70] flex flex-col"
            data-testid="aside-stock-alert-top"
          >
            <div className="flex-1 overflow-y-auto">
              <div className="sticky top-0 bg-card z-10 px-6 py-5 border-b flex items-center justify-between">
                <div>
                  <h2 className="text-base font-semibold text-foreground">Available Stock</h2>
                  <p className="text-xs text-muted-foreground mt-0.5">Ready for immediate delivery</p>
                </div>
                <Button
                  onClick={onToggle}
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 -mr-2"
                  data-testid="button-close-drawer"
                  aria-label="Close sidebar"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="p-6 space-y-8">
                <div className="space-y-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="group"
                    >
                      <div className="relative overflow-hidden rounded-lg bg-muted/30 border">
                        <div className="aspect-square p-6 bg-gradient-to-br from-background to-muted/20">
                          <img
                            src={stockProducts[currentIndex].image}
                            alt={stockProducts[currentIndex].title}
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                            data-testid={`img-stock-product-${stockProducts[currentIndex].id}`}
                          />
                        </div>
                        <div className="absolute top-3 right-3">
                          <div className="px-2.5 py-1 bg-background/90 backdrop-blur-sm rounded-md border text-xs font-medium">
                            In Stock
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 px-1">
                        <h3 className="text-sm font-medium text-foreground leading-snug line-clamp-2 min-h-[2.5rem]">
                          {stockProducts[currentIndex].title}
                        </h3>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <div className="flex items-center justify-center gap-1.5 pt-2">
                    {stockProducts.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          idx === currentIndex 
                            ? 'w-8 bg-foreground' 
                            : 'w-1 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                        }`}
                        aria-label={`View product ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">
                    Get in Touch
                  </div>
                  
                  <Button
                    onClick={handleCall}
                    variant="default"
                    className="w-full justify-between group"
                    data-testid="button-call-now"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="h-8 w-8 rounded-md bg-background/20 flex items-center justify-center">
                        <Phone className="h-3.5 w-3.5" />
                      </div>
                      <div className="text-left">
                        <div className="text-[11px] font-normal opacity-80">Call us</div>
                        <div className="text-sm font-semibold">+91-94627-71662</div>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </Button>

                  <Button
                    onClick={handleWhatsApp}
                    variant="outline"
                    className="w-full justify-between group"
                    data-testid="button-whatsapp-now"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="h-8 w-8 rounded-md bg-green-600/10 flex items-center justify-center">
                        <Mail className="h-3.5 w-3.5 text-green-600" />
                      </div>
                      <div className="text-left">
                        <div className="text-[11px] font-normal text-muted-foreground">WhatsApp</div>
                        <div className="text-sm font-semibold text-foreground">+91-94627-71662</div>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 opacity-40 group-hover:opacity-100 transition-opacity" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="border-t bg-muted/30 px-6 py-4">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                  <span>Same-day dispatch</span>
                </div>
                <div className="h-3 w-px bg-border"></div>
                <div className="flex items-center gap-1.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                  <span>ISO certified</span>
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {!isOpen && (
        <button
          onClick={onToggle}
          className="fixed left-0 top-[40%] z-50 bg-primary text-primary-foreground px-1.5 py-6 rounded-r-lg shadow-xl group transition-all hover:bg-primary/90 hover:px-2 flex flex-col items-center gap-2"
          data-testid="button-open-drawer"
          aria-label="Open stock sidebar"
        >
          <div className="relative">
            <div className="absolute -top-1 -right-1 h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </div>
          <div className="flex flex-col items-center gap-1 writing-mode-vertical">
            <span className="text-[10px] font-bold uppercase tracking-wider whitespace-nowrap" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
              New Stock
            </span>
            <div className="w-px h-3 bg-primary-foreground/30"></div>
            <span className="text-[9px] font-medium opacity-90 whitespace-nowrap" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
              Available Now
            </span>
          </div>
        </button>
      )}
    </>
  );
}
