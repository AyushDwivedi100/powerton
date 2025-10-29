import { ReactNode, useState, useEffect } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Chatbot from "@/components/chatbot/chatbot";
import FloatingContactBadges from "@/components/ui/floating-contact-badges";
import { StockAlertSidebar } from "@/components/ui/StockAlertSidebar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [headerHeight, setHeaderHeight] = useState(0);

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

      <div className="flex flex-1">
        <div className="sticky top-4 self-start">
          <StockAlertSidebar />
        </div>

        <main
          id="main-content"
          className="flex-1 max-h-screen overflow-y-auto sticky top-0"
          role="main"
          aria-label="Main content area"
        >
          {children}
        </main>
      </div>

      <Footer />


      <Chatbot />
      <FloatingContactBadges />
    </div>
  );
}
