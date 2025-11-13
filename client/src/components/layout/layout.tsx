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
          className="flex-1 transition-all duration-300 ease-in-out relative"
          style={{
            marginLeft: isSidebarOpen ? 'var(--drawer-width, 320px)' : '0px'
          }}
          role="main"
          aria-label="Main content area"
        >
          {children}
        </main>
      </div>
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

      <Footer />


      <Chatbot />
      <FloatingContactBadges />
    </div>
  );
}
