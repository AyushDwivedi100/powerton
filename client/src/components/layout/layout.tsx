import { ReactNode, useState, useEffect, lazy, Suspense } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { StockAlertSidebar } from "@/components/ui/StockAlertSidebar";

// Lazy load heavy components that aren't immediately visible
const Chatbot = lazy(() => import("@/components/chatbot/chatbot"));
const FloatingContactBadges = lazy(() => import("@/components/ui/floating-contact-badges"));

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  // Measure header height
  useEffect(() => {
    const measureHeader = () => {
      const header = document.querySelector('header');
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };

    // Measure on mount and after a short delay to ensure DOM is ready
    measureHeader();
    const timer = setTimeout(measureHeader, 100);

    // Re-measure on window resize
    window.addEventListener('resize', measureHeader);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', measureHeader);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-primary focus:text-primary-foreground"
      >
        Skip to main content
      </a>


      <Header />

      <div className="flex flex-1 relative">
        <StockAlertSidebar 
          isOpen={isSidebarOpen} 
          onToggle={toggleSidebar}
          headerHeight={headerHeight}
          position="top"
        />

        <main
          id="main-content"
          className="flex-1 relative"
          role="main"
          aria-label="Main content area"
        >
          {children}
        </main>
      </div>

      <Footer />

      {/* Lazy load chatbot and contact badges for better initial load performance */}
      <Suspense fallback={null}>
        <Chatbot />
        <FloatingContactBadges />
      </Suspense>
    </div>
  );
}
