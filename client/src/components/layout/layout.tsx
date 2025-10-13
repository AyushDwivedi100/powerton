import Header from "./header";
import Footer from "./footer";
import Chatbot from "../chatbot/chatbot";
import FloatingContactBadges from "../ui/floating-contact-badges";
import { useTranslation } from "react-i18next";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { t } = useTranslation(["common"]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Skip to Main Content Link for Keyboard Navigation */}
      <a
        href="#main-content"
        className="skip-link"
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>
      
      <Header />
      
      <main 
        id="main-content" 
        className="flex-1" 
        role="main" 
        aria-label="Main content area"
      >
        {children}
      </main>
      
      <Footer />
      <Chatbot />
      <FloatingContactBadges />
    </div>
  );
}
