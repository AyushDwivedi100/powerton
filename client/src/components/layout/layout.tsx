import { ReactNode, useState, useEffect, lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { StockAlertSidebar } from "@/components/ui/StockAlertSidebar";

// Lazy load floating contact badges for better initial load performance
const FloatingContactBadges = lazy(
  () => import("@/components/ui/floating-contact-badges"),
);

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { t } = useTranslation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  // Auto-open sidebar on every visit
  useEffect(() => {
    // Auto-open sidebar after a short delay for better UX
    const timer = setTimeout(() => {
      setIsSidebarOpen(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  // Listen for feedback form opening and close sidebar
  useEffect(() => {
    const handleCloseSidebar = () => {
      setIsSidebarOpen(false);
    };

    window.addEventListener("closeSidebar", handleCloseSidebar);
    
    return () => {
      window.removeEventListener("closeSidebar", handleCloseSidebar);
    };
  }, []);

  // Measure header height
  useEffect(() => {
    const measureHeader = () => {
      const header = document.querySelector("header");
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };

    // Measure on mount and after a short delay to ensure DOM is ready
    measureHeader();
    const timer = setTimeout(measureHeader, 100);

    // Re-measure on window resize
    window.addEventListener("resize", measureHeader);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", measureHeader);
    };
  }, []);

  return (
    <>
      <Header/>
      <StockAlertSidebar
        isOpen={isSidebarOpen}
        onToggle={toggleSidebar}
        headerHeight={headerHeight}
        position="top"
      />
      <main
        id="main-content"
        className="flex-1 w-full"
        role="main"
        aria-label={t("common:ui.ariaLabels.mainContent")}
      >
        {children}
      </main>
      <Footer/>

      {/* Lazy load contact badges for better initial load performance */}
      <Suspense fallback={null}>
        <FloatingContactBadges />
      </Suspense>
    </>
  );
}
