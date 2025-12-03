import { useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PDFViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title?: string;
}

export function PDFViewerModal({
  isOpen,
  onClose,
  pdfUrl,
  title,
}: PDFViewerModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const wasOpenRef = useRef(false);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen && !wasOpenRef.current) {
      previousActiveElementRef.current = document.activeElement as HTMLElement;
      wasOpenRef.current = true;
    }
    
    if (!isOpen && wasOpenRef.current) {
      wasOpenRef.current = false;
      const elementToFocus = previousActiveElementRef.current;
      if (elementToFocus && document.body.contains(elementToFocus)) {
        requestAnimationFrame(() => {
          elementToFocus.focus();
        });
      }
      previousActiveElementRef.current = null;
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      
      const timer = setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);

      return () => {
        clearTimeout(timer);
        document.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "unset";
      };
    }
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={onClose}
          role="presentation"
          data-testid="pdf-modal-backdrop"
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />
          
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-[95vw] h-[90vh] max-w-6xl bg-background rounded-lg shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? "pdf-modal-title" : undefined}
            data-testid="pdf-modal-content"
          >
            <div className="flex items-center justify-between p-4 border-b bg-card">
              {title && (
                <h2 
                  id="pdf-modal-title" 
                  className="text-lg font-semibold text-foreground" 
                  data-testid="pdf-modal-title"
                >
                  {title}
                </h2>
              )}
              <Button
                ref={closeButtonRef}
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="ml-auto"
                aria-label="Close PDF viewer"
                data-testid="button-close-pdf-modal"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="w-full h-[calc(90vh-65px)]">
              <iframe
                src={pdfUrl}
                className="w-full h-full border-0"
                title={title || "PDF Document"}
                data-testid="pdf-modal-iframe"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
