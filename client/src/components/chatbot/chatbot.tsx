import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface NavigationOption {
  label: string;
  action: "navigate" | "external" | "chat" | "page";
  target?: string;
  url?: string;
  response?: string;
  page?: string;
}

interface ChatbotResponse {
  message: string;
  options?: NavigationOption[];
}

export default function Chatbot() {
  const { t } = useTranslation("chatbot");
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [lastBotOptions, setLastBotOptions] = useState<NavigationOption[]>([]);
  const [lastBotMessageId, setLastBotMessageId] = useState<string | null>(null);
  const [headerHeight, setHeaderHeight] = useState(80);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = (force: boolean = false) => {
    if (!messagesContainerRef.current) return;

    const container = messagesContainerRef.current;
    const currentScroll = container.scrollTop;
    const maxScroll = container.scrollHeight - container.clientHeight;

    // Only auto-scroll if user is near bottom (within 50px) or forced
    const nearBottom = currentScroll >= maxScroll - 50;

    if (force || nearBottom) {
      // Simple, fast scroll - no animations or delays
      container.scrollTop = container.scrollHeight;
    }
  };

  // Load persisted conversation state on component mount
  useEffect(() => {
    try {
      const savedMessages = localStorage.getItem("powerton-chatbot-messages");
      const savedOptions = localStorage.getItem("powerton-chatbot-options");
      const savedMessageId = localStorage.getItem(
        "powerton-chatbot-last-message-id",
      );

      if (savedMessages) {
        const parsedMessages = JSON.parse(savedMessages).map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp),
        }));
        setMessages(parsedMessages);
      }

      if (savedOptions) {
        setLastBotOptions(JSON.parse(savedOptions));
      }

      if (savedMessageId) {
        setLastBotMessageId(savedMessageId);
      }
    } catch (error) {
      console.warn("Failed to load chatbot conversation:", error);
    }
    setIsInitialized(true);
  }, []);

  // Save conversation state to localStorage whenever it changes
  useEffect(() => {
    if (!isInitialized) return;

    try {
      localStorage.setItem(
        "powerton-chatbot-messages",
        JSON.stringify(messages),
      );
    } catch (error) {
      console.warn("Failed to save chatbot messages:", error);
    }
  }, [messages, isInitialized]);

  useEffect(() => {
    if (!isInitialized) return;

    try {
      localStorage.setItem(
        "powerton-chatbot-options",
        JSON.stringify(lastBotOptions),
      );
    } catch (error) {
      console.warn("Failed to save chatbot options:", error);
    }
  }, [lastBotOptions, isInitialized]);

  useEffect(() => {
    if (!isInitialized) return;

    try {
      if (lastBotMessageId) {
        localStorage.setItem(
          "powerton-chatbot-last-message-id",
          lastBotMessageId,
        );
      } else {
        localStorage.removeItem("powerton-chatbot-last-message-id");
      }
    } catch (error) {
      console.warn("Failed to save chatbot message ID:", error);
    }
  }, [lastBotMessageId, isInitialized]);

  // Auto-scroll on new messages with minimal delay
  useEffect(() => {
    if (messages.length > 0) {
      // Small delay to ensure DOM is updated, then scroll
      setTimeout(() => {
        scrollToBottom(true);
      }, 10);
    }
  }, [messages]);

  // Measure header height dynamically
  useEffect(() => {
    const measureHeaderHeight = () => {
      const header =
        document.querySelector("header") ||
        document.querySelector('[role="banner"]');
      if (header) {
        const height = header.getBoundingClientRect().height;
        setHeaderHeight(height);
      }
    };

    // Measure immediately and on next tick to catch dynamic changes
    measureHeaderHeight();
    setTimeout(measureHeaderHeight, 0);

    // Also measure when fonts load
    document.fonts.ready.then(measureHeaderHeight);

    window.addEventListener("resize", measureHeaderHeight);
    window.addEventListener("scroll", measureHeaderHeight);
    window.addEventListener("load", measureHeaderHeight);

    return () => {
      window.removeEventListener("resize", measureHeaderHeight);
      window.removeEventListener("scroll", measureHeaderHeight);
      window.removeEventListener("load", measureHeaderHeight);
    };
  }, []);

  // Re-measure header height when chatbot opens (in case header changed)
  useEffect(() => {
    if (isOpen) {
      const header =
        document.querySelector("header") ||
        document.querySelector('[role="banner"]');
      if (header) {
        const height = header.getBoundingClientRect().height;
        setHeaderHeight(height);
      }
    }
  }, [isOpen]);

  // Handle scroll management when chatbot opens/closes
  useEffect(() => {
    if (isOpen) {
      // Get current scroll position to restore later
      const scrollY = window.scrollY;

      // Disable body scroll when chatbot is open
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.documentElement.style.overflow = "hidden";

      // Auto-scroll to bottom when chat opens with proper delay
      setTimeout(() => {
        scrollToBottom();
      }, 800);
    } else {
      // Re-enable body scroll when chatbot is closed
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.documentElement.style.overflow = "";

      // Restore scroll position
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }

    // Cleanup function to ensure scroll is restored
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  // Click outside detection
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: Event) => {
      const target = event.target as Element;

      if (chatWindowRef.current?.contains(target)) {
        return;
      }

      const toggleButton = document.querySelector(
        '[data-chatbot-toggle="true"]',
      ) as Element | null;
      if (
        toggleButton &&
        (toggleButton === target || toggleButton.contains(target as Node))
      ) {
        return;
      }

      let currentElement: Element | null = target;
      while (currentElement && currentElement !== document.body) {
        if (currentElement.getAttribute("data-chatbot-toggle") === "true") {
          return;
        }
        currentElement = currentElement.parentElement;
      }

      setIsOpen(false);
    };

    const timer = setTimeout(() => {
      document.addEventListener("mousedown", handleClickOutside);
    }, 200);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Position at bottom immediately when chat opens - no scrolling
  useEffect(() => {
    if (isOpen && messagesContainerRef.current) {
      // Set to bottom immediately when chat opens
      const container = messagesContainerRef.current;
      container.scrollTop = container.scrollHeight;
    }
  }, [isOpen]);

  // Initialize with welcome message (only for new conversations)
  useEffect(() => {
    if (isOpen && isInitialized && messages.length === 0) {
      setTimeout(() => {
        addBotMessage({
          message: t("chatbot.welcomeMessage"),
          options: [
            {
              label: t("chatbot.options.findProduct"),
              action: "chat",
              response: "product-selection",
            },
            {
              label: t("chatbot.options.chooseService"),
              action: "chat",
              response: "service-selection",
            },
            {
              label: t("chatbot.options.troubleshooting"),
              action: "chat",
              response: "troubleshooting",
            },
            {
              label: t("chatbot.options.aboutCompany"),
              action: "chat",
              response: "company-info",
            },
          ],
        });
      }, 500);
    }
  }, [isOpen, isInitialized, messages.length]);

  const addMessage = (text: string, sender: "user" | "bot") => {
    const newMessage = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
    return newMessage;
  };

  const addBotMessage = (response: ChatbotResponse) => {
    setIsTyping(true);
    setTimeout(() => {
      const newMessage = addMessage(response.message, "bot");
      setIsTyping(false);

      // Store the options for the last bot message
      if (response.options) {
        setLastBotOptions(response.options);
        setLastBotMessageId(newMessage.id);
      }
      // Scroll will happen automatically via useEffect when messages update
    }, 1000);
  };

  const handleNavigation = (target: string) => {
    switch (target) {
      case "top":
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case "services":
        const servicesSection =
          document.querySelector('[data-section="services"]') ||
          document.querySelector("#services") ||
          document.querySelector(".services-section");
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "products":
        const productsSection =
          document.querySelector('[data-section="products"]') ||
          document.querySelector("#products") ||
          document.querySelector(".products-section");
        if (productsSection) {
          productsSection.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "about":
        const aboutSection =
          document.querySelector('[data-section="about"]') ||
          document.querySelector("#about") ||
          document.querySelector(".about-section");
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "projects":
        const projectsSection =
          document.querySelector('[data-section="projects"]') ||
          document.querySelector("#projects") ||
          document.querySelector(".projects-section");
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: "smooth" });
        }
        break;
      case "contact":
        const contactSection =
          document.querySelector('[data-section="contact"]') ||
          document.querySelector("#contact") ||
          document.querySelector(".contact-section");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
        break;
    }
    setIsOpen(false);
  };

  const handlePageNavigation = (page: string) => {
    window.location.href = `/${page}`;
    setIsOpen(false);
  };

  const generateResponse = (userInput: string): ChatbotResponse => {
    const input = userInput.toLowerCase();

    // Handle special chat responses first
    if (input === "product-selection") {
      return {
        message: t("chatbot.responses.productSelection"),
        options: [
          {
            label: t("chatbot.options.sensorsCategory"),
            action: "chat",
            response: "sensors-category",
          },
          {
            label: t("chatbot.options.electricalCategory"),
            action: "chat",
            response: "electrical-category",
          },
          {
            label: t("chatbot.options.automationCategory"),
            action: "chat",
            response: "automation-category",
          },
          {
            label: t("chatbot.options.solarCategory"),
            action: "chat",
            response: "solar-category",
          },
          {
            label: t("chatbot.options.safetyCategory"),
            action: "chat",
            response: "safety-category",
          },
          {
            label: t("chatbot.options.browseAllProducts"),
            action: "page",
            page: "products",
          },
        ],
      };
    }

    if (input === "service-selection") {
      return {
        message: t("chatbot.responses.serviceSelection"),
        options: [
          {
            label: t("chatbot.options.installationService"),
            action: "chat",
            response: "installation-service",
          },
          {
            label: t("chatbot.options.maintenanceService"),
            action: "chat",
            response: "maintenance-service",
          },
          {
            label: t("chatbot.options.calibrationService"),
            action: "chat",
            response: "calibration-service",
          },
          {
            label: t("chatbot.options.trainingService"),
            action: "chat",
            response: "training-service",
          },
          {
            label: t("chatbot.options.solarService"),
            action: "chat",
            response: "solar-service",
          },
          {
            label: t("chatbot.options.viewAllServices"),
            action: "page",
            page: "services",
          },
          {
            label: t("chatbot.options.backToMainMenu"),
            action: "chat",
            response: "main-menu",
          },
        ],
      };
    }

    if (input === "troubleshooting") {
      return {
        message: t("chatbot.responses.troubleshootingMain"),
        options: [
          {
            label: t("chatbot.options.electricalIssues"),
            action: "chat",
            response: "electrical-troubleshooting",
          },
          {
            label: t("chatbot.options.sensorProblems"),
            action: "chat",
            response: "sensor-troubleshooting",
          },
          {
            label: t("chatbot.options.controlSystemIssues"),
            action: "chat",
            response: "control-troubleshooting",
          },
          {
            label: t("chatbot.options.solarSystemProblems"),
            action: "chat",
            response: "solar-troubleshooting",
          },
          {
            label: t("chatbot.options.equipmentSelectionHelp"),
            action: "chat",
            response: "selection-help",
          },
          {
            label: t("chatbot.options.speakWithExpert"),
            action: "external",
            url: "tel:+91-94627-71662",
          },
          {
            label: t("chatbot.options.backToMainMenu"),
            action: "chat",
            response: "main-menu",
          },
        ],
      };
    }

    if (input === "company-info") {
      return {
        message: t("chatbot.responses.companyInfo"),
        options: [
          {
            label: t("chatbot.options.ourAchievements"),
            action: "chat",
            response: "achievements",
          },
          {
            label: t("chatbot.options.meetOurTeam"),
            action: "page",
            page: "about",
          },
          {
            label: t("chatbot.options.ourClients"),
            action: "chat",
            response: "client-testimonials",
          },
          {
            label: t("chatbot.options.visitOurOffice"),
            action: "external",
            url: "https://maps.app.goo.gl/jiap3sBYbM3r8Pn68",
          },
          {
            label: t("chatbot.options.contactUs"),
            action: "external",
            url: "tel:+91-94627-71662",
          },
          {
            label: t("chatbot.options.backToMainMenu"),
            action: "chat",
            response: "main-menu",
          },
        ],
      };
    }

    // Product Category Responses
    if (input === "sensors-category") {
      return {
        message: t("chatbot.responses.sensorsCategory"),
        options: [
          {
            label: t("chatbot.options.temperatureSensors"),
            action: "page",
            page: "product-sensors",
          },
          {
            label: t("chatbot.options.pressureTransmitters"),
            action: "page",
            page: "product-transmitters",
          },
          {
            label: t("chatbot.options.flowMeters"),
            action: "page",
            page: "product-sensors",
          },
          {
            label: t("chatbot.options.levelIndicators"),
            action: "page",
            page: "product-sensors",
          },
          {
            label: t("chatbot.options.processAnalyzers"),
            action: "page",
            page: "product-analyzers",
          },
          {
            label: t("chatbot.options.getTechnicalSpecs"),
            action: "external",
            url: "mailto:info@powertonengineering.com?subject=Sensor Technical Specifications",
          },
          {
            label: t("chatbot.options.backToProductsMenu"),
            action: "chat",
            response: "product-selection",
          },
        ],
      };
    }

    if (input === "electrical-category") {
      return {
        message: t("chatbot.responses.electricalCategory"),
        options: [
          {
            label: t("chatbot.options.circuitBreakersFuses"),
            action: "page",
            page: "product-circuit-breakers-fuses",
          },
          {
            label: t("chatbot.options.powerSupplies"),
            action: "page",
            page: "product-power-supplies",
          },
          {
            label: t("chatbot.options.cablesConnectors"),
            action: "page",
            page: "product-cables-wires",
          },
          {
            label: t("chatbot.options.enclosuresCabinets"),
            action: "page",
            page: "product-enclosures-cabinets",
          },
          {
            label: t("chatbot.options.heatingElements"),
            action: "page",
            page: "product-heating-elements-appliances",
          },
          {
            label: t("chatbot.options.getPricing"),
            action: "external",
            url: "tel:+91-94627-71662",
          },
          {
            label: t("chatbot.options.backToProductsMenu"),
            action: "chat",
            response: "product-selection",
          },
        ],
      };
    }

    if (input === "automation-category") {
      return {
        message: t("chatbot.responses.automationCategory"),
        options: [
          {
            label: "🖥️ PLCs (Programmable Logic Controllers)",
            action: "page",
            page: "products/plcs",
          },
          { label: "📊 SCADA Systems", action: "page", page: "product-scada" },
          {
            label: "🌐 DCS (Distributed Control Systems)",
            action: "page",
            page: "products/dcs",
          },
          {
            label: "👥 HMI (Human Machine Interface)",
            action: "page",
            page: "products/hmi",
          },
          {
            label: "⚙️ Custom Control Panels",
            action: "chat",
            response: "custom-panels",
          },
          {
            label: "🎯 Let's Discuss Your Project",
            action: "external",
            url: "mailto:info@powertonengineering.com?subject=Automation Project Discussion",
          },
          {
            label: t("chatbot.options.backToProductsMenu"),
            action: "chat",
            response: "product-selection",
          },
        ],
      };
    }

    if (input === "solar-category") {
      return {
        message: t("chatbot.responses.solarCategory"),
        options: [
          {
            label: "☀️ Solar Panels",
            action: "page",
            page: "product-solar-panels",
          },
          {
            label: "🔄 Solar Inverters",
            action: "page",
            page: "product-solar-inverters",
          },
          {
            label: "🔧 Solar Installation & EPC",
            action: "page",
            page: "services",
          },
          {
            label: "📋 Get Custom Solar Quote",
            action: "external",
            url: "mailto:info@powertonengineering.com?subject=Solar Project Quote Request",
          },
          {
            label: "📞 Solar Consultation",
            action: "external",
            url: "tel:+91-94627-71662",
          },
          {
            label: t("chatbot.options.backToProductsMenu"),
            action: "chat",
            response: "product-selection",
          },
        ],
      };
    }

    if (input === "safety-category") {
      return {
        message: t("chatbot.responses.safetyCategory"),
        options: [
          {
            label: "⚡ Surge Protectors",
            action: "page",
            page: "product-surge-protectors",
          },
          {
            label: "🔒 Safety Relays & Switches",
            action: "page",
            page: "product-safety-relays-switches",
          },
          {
            label: "🌍 Grounding Systems",
            action: "page",
            page: "product-grounding-systems",
          },
          {
            label: "💥 Intrinsically Safe Equipment",
            action: "page",
            page: "product-intrinsically-safe-equipment",
          },
          {
            label: "🦺 Personal Protective Equipment",
            action: "page",
            page: "product-safety-equipment",
          },
          {
            label: "📋 Safety Consultation",
            action: "external",
            url: "tel:+91-94627-71662",
          },
          {
            label: t("chatbot.options.backToProductsMenu"),
            action: "chat",
            response: "product-selection",
          },
        ],
      };
    }

    // Service Detail Responses
    if (input === "installation-service") {
      return {
        message: t("chatbot.responses.installationService"),
        options: [
          {
            label: t("chatbot.options.equipmentInstallation"),
            action: "chat",
            response: "installation-details",
          },
          {
            label: t("chatbot.options.systemIntegration"),
            action: "chat",
            response: "integration-details",
          },
          {
            label: t("chatbot.options.performanceTesting"),
            action: "chat",
            response: "testing-details",
          },
          {
            label: t("chatbot.options.complianceCertification"),
            action: "chat",
            response: "certification-details",
          },
          {
            label: t("chatbot.options.requestInstallationQuote"),
            action: "external",
            url: "mailto:info@powertonengineering.com?subject=Installation Service Quote",
          },
          {
            label: t("chatbot.options.backToServices"),
            action: "chat",
            response: "service-selection",
          },
        ],
      };
    }

    // Technical Troubleshooting Responses
    if (input === "electrical-troubleshooting") {
      return {
        message: t("chatbot.responses.electricalTroubleshooting"),
        options: [
          {
            label: t("chatbot.options.powerSupplyIssues"),
            action: "chat",
            response: "power-supply-help",
          },
          {
            label: t("chatbot.options.circuitProtectionProblems"),
            action: "chat",
            response: "circuit-protection-help",
          },
          {
            label: t("chatbot.options.groundingEarthingIssues"),
            action: "chat",
            response: "grounding-help",
          },
          {
            label: t("chatbot.options.overheatingComponents"),
            action: "chat",
            response: "overheating-help",
          },
          {
            label: t("chatbot.options.browseElectricalSolutions"),
            action: "page",
            page: "products",
          },
          {
            label: t("chatbot.options.getProfessionalDiagnosis"),
            action: "external",
            url: "mailto:info@powertonengineering.com?subject=Electrical System Diagnosis",
          },
          {
            label: t("chatbot.options.backToTroubleshooting"),
            action: "chat",
            response: "troubleshooting",
          },
        ],
      };
    }

    if (input === "sensor-troubleshooting") {
      return {
        message: t("chatbot.responses.sensorTroubleshooting"),
        options: [
          {
            label: t("chatbot.options.temperatureReadingIssues"),
            action: "chat",
            response: "temperature-sensor-help",
          },
          {
            label: t("chatbot.options.pressureMeasurementProblems"),
            action: "chat",
            response: "pressure-sensor-help",
          },
          {
            label: t("chatbot.options.flowMeasurementErrors"),
            action: "chat",
            response: "flow-sensor-help",
          },
          {
            label: t("chatbot.options.levelDetectionIssues"),
            action: "chat",
            response: "level-sensor-help",
          },
          {
            label: t("chatbot.options.exploreSensorSolutions"),
            action: "page",
            page: "products",
          },
          {
            label: t("chatbot.options.bookCalibrationService"),
            action: "external",
            url: "tel:+91-94627-71662",
          },
          {
            label: t("chatbot.options.backToTroubleshooting"),
            action: "chat",
            response: "troubleshooting",
          },
        ],
      };
    }

    if (input === "control-troubleshooting") {
      return {
        message: t("chatbot.responses.controlTroubleshooting"),
        options: [
          {
            label: t("chatbot.options.plcProgrammingIssues"),
            action: "chat",
            response: "plc-troubleshooting",
          },
          {
            label: t("chatbot.options.scadaCommunicationProblems"),
            action: "chat",
            response: "scada-troubleshooting",
          },
          {
            label: t("chatbot.options.hmiDisplayIssues"),
            action: "chat",
            response: "hmi-troubleshooting",
          },
          {
            label: t("chatbot.options.networkConnectivityProblems"),
            action: "chat",
            response: "network-troubleshooting",
          },
          {
            label: t("chatbot.options.viewControlSolutions"),
            action: "page",
            page: "products",
          },
          {
            label: t("chatbot.options.requestSystemAudit"),
            action: "external",
            url: "mailto:info@powertonengineering.com?subject=Control System Audit Request",
          },
          {
            label: t("chatbot.options.backToTroubleshooting"),
            action: "chat",
            response: "troubleshooting",
          },
        ],
      };
    }

    if (input === "solar-troubleshooting") {
      return {
        message: t("chatbot.responses.solarTroubleshooting"),
        options: [
          {
            label: t("chatbot.options.lowPowerGeneration"),
            action: "chat",
            response: "solar-performance-help",
          },
          {
            label: t("chatbot.options.inverterFaults"),
            action: "chat",
            response: "inverter-troubleshooting",
          },
          {
            label: t("chatbot.options.batteryStorageIssues"),
            action: "chat",
            response: "battery-troubleshooting",
          },
          {
            label: t("chatbot.options.monitoringSystemProblems"),
            action: "chat",
            response: "monitoring-troubleshooting",
          },
          {
            label: t("chatbot.options.browseSolarProducts"),
            action: "page",
            page: "products",
          },
          {
            label: t("chatbot.options.scheduleSolarInspection"),
            action: "external",
            url: "mailto:info@powertonengineering.com?subject=Solar System Inspection",
          },
          {
            label: t("chatbot.options.backToTroubleshooting"),
            action: "chat",
            response: "troubleshooting",
          },
        ],
      };
    }

    // Testimonials and achievements
    if (input === "client-testimonials") {
      return {
        message: t("chatbot.responses.clientTestimonials"),
        options: [
          {
            label: t("chatbot.options.ourMajorClients"),
            action: "chat",
            response: "major-clients",
          },
          {
            label: t("chatbot.options.successStories"),
            action: "page",
            page: "projects",
          },
          {
            label: t("chatbot.options.ourSuccessStories"),
            action: "page",
            page: "projects",
          },
          {
            label: t("chatbot.options.becomeOurClient"),
            action: "external",
            url: "tel:+91-94627-71662",
          },
          {
            label: t("chatbot.options.getInTouch"),
            action: "external",
            url: "mailto:info@powertonengineering.com",
          },
          {
            label: t("chatbot.options.backToCompanyMenu"),
            action: "chat",
            response: "company-info",
          },
        ],
      };
    }

    if (input === "major-clients") {
      return {
        message: t("chatbot.responses.majorClients"),
        options: [
          {
            label: t("chatbot.options.manufacturingClients"),
            action: "page",
            page: "about",
          },
          {
            label: t("chatbot.options.powerIndustryClients"),
            action: "page",
            page: "about",
          },
          {
            label: t("chatbot.options.chemicalIndustryClients"),
            action: "page",
            page: "about",
          },
          {
            label: t("chatbot.options.seeProjectPortfolio"),
            action: "page",
            page: "projects",
          },
          {
            label: t("chatbot.options.partnerWithUs"),
            action: "external",
            url: "mailto:info@powertonengineering.com?subject=Partnership Opportunity",
          },
          {
            label: t("chatbot.options.backToCompanyMenu"),
            action: "chat",
            response: "company-info",
          },
        ],
      };
    }

    // Specific troubleshooting responses
    if (input === "power-supply-help") {
      return {
        message: t("chatbot.responses.powerSupplyHelp"),
        options: [
          {
            label: t("chatbot.options.viewPowerSupplyProducts"),
            action: "page",
            page: "products",
          },
          {
            label: t("chatbot.options.requestQuoteForPowerSupply"),
            action: "external",
            url: "mailto:info@powertonengineering.com?subject=Power Supply Quote Request",
          },
          {
            label: t("chatbot.options.backToElectricalHelp"),
            action: "chat",
            response: "electrical-troubleshooting",
          },
          {
            label: t("chatbot.options.emergencyTechnicalSupport"),
            action: "external",
            url: "tel:+91-94627-71662",
          },
        ],
      };
    }

    if (input === "temperature-sensor-help") {
      return {
        message: t("chatbot.responses.temperatureSensorHelp"),
        options: [
          {
            label: t("chatbot.options.browseTemperatureSensors"),
            action: "page",
            page: "products",
          },
          {
            label: t("chatbot.options.requestCalibrationService"),
            action: "external",
            url: "mailto:info@powertonengineering.com?subject=Temperature Sensor Calibration",
          },
          {
            label: t("chatbot.options.backToSensorHelp"),
            action: "chat",
            response: "sensor-troubleshooting",
          },
          {
            label: t("chatbot.options.speakWithSensorExpert"),
            action: "external",
            url: "tel:+91-94627-71662",
          },
        ],
      };
    }

    if (input === "plc-troubleshooting") {
      return {
        message: t("chatbot.responses.plcTroubleshooting"),
        options: [
          {
            label: t("chatbot.options.viewPlcSolutions"),
            action: "page",
            page: "products",
          },
          {
            label: t("chatbot.options.requestProgrammingService"),
            action: "external",
            url: "mailto:info@powertonengineering.com?subject=PLC Programming Service",
          },
          {
            label: t("chatbot.options.backToControlHelp"),
            action: "chat",
            response: "control-troubleshooting",
          },
          {
            label: t("chatbot.options.emergencyPlcSupport"),
            action: "external",
            url: "tel:+91-94627-71662",
          },
        ],
      };
    }

    if (input === "solar-performance-help") {
      return {
        message: t("chatbot.responses.solarPerformanceHelp"),
        options: [
          {
            label: t("chatbot.options.solarSystemProducts"),
            action: "page",
            page: "products",
          },
          {
            label: t("chatbot.options.requestPerformanceAnalysis"),
            action: "external",
            url: "mailto:info@powertonengineering.com?subject=Solar Performance Analysis",
          },
          {
            label: t("chatbot.options.backToSolarHelp"),
            action: "chat",
            response: "solar-troubleshooting",
          },
          {
            label: t("chatbot.options.scheduleMaintenance"),
            action: "external",
            url: "tel:+91-94627-71662",
          },
        ],
      };
    }

    if (input === "selection-help") {
      return {
        message: t("chatbot.responses.selectionHelp"),
        options: [
          {
            label: t("chatbot.options.sensorMeasurementSelection"),
            action: "chat",
            response: "sensor-selection-help",
          },
          {
            label: t("chatbot.options.electricalComponentSelection"),
            action: "chat",
            response: "electrical-selection-help",
          },
          {
            label: t("chatbot.options.controlSystemSelection"),
            action: "chat",
            response: "control-selection-help",
          },
          {
            label: t("chatbot.options.solarSystemDesign"),
            action: "chat",
            response: "solar-selection-help",
          },
          {
            label: t("chatbot.options.browseAllProducts"),
            action: "page",
            page: "products",
          },
          {
            label: t("chatbot.options.consultationCall"),
            action: "external",
            url: "tel:+91-94627-71662",
          },
        ],
      };
    }

    // Natural language product searches with standards
    if (
      input.includes("sensor") ||
      input.includes("temperature") ||
      input.includes("pressure") ||
      input.includes("measurement")
    ) {
      return {
        message: t("chatbot.responses.sensorSearch"),
        options: [
          {
            label: t("chatbot.options.temperatureMeasurement"),
            action: "page",
            page: "products",
          },
          {
            label: t("chatbot.options.pressureMeasurement"),
            action: "page",
            page: "products",
          },
          {
            label: t("chatbot.options.flowLevelMeasurement"),
            action: "page",
            page: "products",
          },
          {
            label: t("chatbot.options.requestTechnicalQuote"),
            action: "external",
            url: "mailto:info@powertonengineering.com?subject=Sensor Technical Quote",
          },
          {
            label: t("chatbot.options.speakWithExpert"),
            action: "external",
            url: "tel:+91-94627-71662",
          },
        ],
      };
    }

    if (
      input.includes("plc") ||
      input.includes("automation") ||
      input.includes("control") ||
      input.includes("scada")
    ) {
      return {
        message: t("chatbot.responses.automationSearch"),
        options: [
          {
            label: t("chatbot.options.plcControlSystems"),
            action: "page",
            page: "products",
          },
          {
            label: t("chatbot.options.scadaHmiSolutions"),
            action: "page",
            page: "products",
          },
          {
            label: t("chatbot.options.completeAutomationPackage"),
            action: "page",
            page: "products",
          },
          {
            label: t("chatbot.options.requestCustomQuote"),
            action: "external",
            url: "mailto:info@powertonengineering.com?subject=Custom Automation Quote",
          },
          {
            label: t("chatbot.options.technicalConsultation"),
            action: "external",
            url: "tel:+91-94627-71662",
          },
        ],
      };
    }

    if (
      input.includes("solar") ||
      input.includes("renewable") ||
      input.includes("green energy") ||
      input.includes("sustainable")
    ) {
      return {
        message: t("chatbot.responses.solarSearch"),
        options: [
          {
            label: t("chatbot.options.completeSolarSolutions"),
            action: "page",
            page: "products",
          },
          {
            label: t("chatbot.options.solarBatterySystems"),
            action: "page",
            page: "products",
          },
          {
            label: t("chatbot.options.energyStorage"),
            action: "page",
            page: "product-solar-batteries-energy-storage",
          },
          {
            label: t("chatbot.options.ourSolarProjects"),
            action: "page",
            page: "projects",
          },
          {
            label: t("chatbot.options.getSolarQuote"),
            action: "external",
            url: "mailto:info@powertonengineering.com?subject=Solar Project Quote",
          },
          {
            label: t("chatbot.options.solarEpcServices"),
            action: "page",
            page: "services",
          },
        ],
      };
    }

    if (
      input.includes("pump") ||
      input.includes("motor") ||
      input.includes("bldc") ||
      input.includes("valve")
    ) {
      return {
        message: t("chatbot.responses.mechanicalSearch"),
        options: [
          {
            label: t("chatbot.options.motorsDrives"),
            action: "page",
            page: "products",
          },
          {
            label: t("chatbot.options.pumpsFluidHandling"),
            action: "page",
            page: "products",
          },
          {
            label: t("chatbot.options.valvesActuators"),
            action: "page",
            page: "products",
          },
          {
            label: t("chatbot.options.sparePartsService"),
            action: "page",
            page: "services",
          },
          {
            label: t("chatbot.options.requestEquipmentQuote"),
            action: "external",
            url: "mailto:info@powertonengineering.com?subject=Motor Pump Equipment Quote",
          },
          {
            label: "📞 Technical Consultation",
            action: "external",
            url: "tel:+91-94627-71662",
          },
        ],
      };
    }

    if (
      input.includes("calibration") ||
      input.includes("testing") ||
      input.includes("maintenance") ||
      input.includes("service")
    ) {
      return {
        message: t("chatbot.responses.serviceSearch"),
        options: [
          {
            label: t("chatbot.options.calibrationServices"),
            action: "page",
            page: "services",
          },
          {
            label: t("chatbot.options.maintenancePrograms"),
            action: "page",
            page: "services",
          },
          {
            label: t("chatbot.options.emergencySupport"),
            action: "external",
            url: "tel:+91-94627-71662",
          },
          {
            label: t("chatbot.options.trainingPrograms"),
            action: "page",
            page: "services",
          },
          {
            label: t("chatbot.options.serviceContract"),
            action: "external",
            url: "mailto:info@powertonengineering.com?subject=Service Contract Inquiry",
          },
          {
            label: t("chatbot.options.allServices"),
            action: "page",
            page: "services",
          },
        ],
      };
    }

    // Contact and support queries
    if (
      input.includes("contact") ||
      input.includes("phone") ||
      input.includes("email") ||
      input.includes("location") ||
      input.includes("address")
    ) {
      return {
        message: t("chatbot.responses.contactSearch"),
        options: [
          {
            label: "📞 Call Now (+91-94627-71662)",
            action: "external",
            url: "tel:+91-94627-71662",
          },
          {
            label: "📧 Email Us",
            action: "external",
            url: "mailto:info@powertonengineering.com",
          },
          {
            label: "📍 Visit Our Office",
            action: "external",
            url: "https://maps.app.goo.gl/jiap3sBYbM3r8Pn68",
          },
          { label: "📋 Contact Form", action: "page", page: "contact" },
          { label: "💼 Request Quote", action: "page", page: "quote" },
          {
            label: "⏰ Business Hours",
            action: "chat",
            response: "business-hours",
          },
        ],
      };
    }

    if (
      input.includes("quote") ||
      input.includes("price") ||
      input.includes("cost") ||
      input.includes("estimate") ||
      input.includes("budget")
    ) {
      return {
        message:
          "I'd be happy to help you get a customized quote! Our pricing is competitive and transparent. For accurate pricing, we'll need to understand your specific requirements. Let's connect you with our sales team for a detailed discussion.",
        options: [
          { label: "📋 Request Detailed Quote", action: "page", page: "quote" },
          {
            label: "📞 Quick Phone Quote",
            action: "external",
            url: "tel:+91-94627-71662",
          },
          {
            label: "📧 Email Requirements",
            action: "external",
            url: "mailto:info@powertonengineering.com?subject=Quote Request",
          },
          {
            label: "💰 Pricing Information",
            action: "chat",
            response: "pricing-info",
          },
          {
            label: "🎯 Custom Solution",
            action: "external",
            url: "mailto:info@powertonengineering.com?subject=Custom Solution Request",
          },
        ],
      };
    }

    // Help and general assistance
    if (
      input.includes("help") ||
      input.includes("assist") ||
      input.includes("support") ||
      input.includes("guidance")
    ) {
      return {
        message:
          "I'm here to help you every step of the way! Whether you need product selection guidance, technical specifications, service support, or just want to learn more about our company, I'm at your service. What would you like assistance with?",
        options: [
          {
            label: "🔍 Find Products",
            action: "chat",
            response: "product-selection",
          },
          {
            label: "⚙️ Choose Services",
            action: "chat",
            response: "service-selection",
          },
          {
            label: "🔧 Technical Support",
            action: "chat",
            response: "troubleshooting",
          },
          {
            label: "📞 Talk to Expert",
            action: "external",
            url: "tel:+91-94627-71662",
          },
          {
            label: "🏢 About Our Company",
            action: "chat",
            response: "company-info",
          },
          { label: "📋 Get Started", action: "page", page: "contact" },
        ],
      };
    }

    // Additional specific responses
    if (input === "business-hours") {
      return {
        message:
          "We're here when you need us! Our business hours are Monday to Saturday: 9:00 AM - 6:00 PM. We also provide emergency support on Sundays for critical situations. Located in Noida, Sector 6, F-25, F Block (nearest metro: Sector 15).",
        options: [
          {
            label: "📞 Call During Business Hours",
            action: "external",
            url: "tel:+91-94627-71662",
          },
          {
            label: "📧 Email Anytime",
            action: "external",
            url: "mailto:info@powertonengineering.com",
          },
          {
            label: "🗺️ Visit Our Office",
            action: "external",
            url: "https://maps.app.goo.gl/jiap3sBYbM3r8Pn68",
          },
          {
            label: "⚡ Emergency Support",
            action: "external",
            url: "tel:+91-94627-71662",
          },
          {
            label: "📅 Schedule Meeting",
            action: "external",
            url: "mailto:info@powertonengineering.com?subject=Meeting Request",
          },
        ],
      };
    }

    if (input === "pricing-info") {
      return {
        message:
          "Our pricing is always competitive and transparent! We believe in providing value for money with no hidden costs. Pricing depends on specifications, quantity, and project scope. For the most accurate quote, our team will assess your specific requirements.",
        options: [
          { label: "📋 Get Detailed Quote", action: "page", page: "quote" },
          {
            label: "📞 Discuss Pricing",
            action: "external",
            url: "tel:+91-94627-71662",
          },
          {
            label: "📧 Email Requirements",
            action: "external",
            url: "mailto:info@powertonengineering.com?subject=Pricing Inquiry",
          },
          {
            label: "💰 Volume Discounts",
            action: "external",
            url: "tel:+91-94627-71662",
          },
          {
            label: "🔄 Payment Options",
            action: "chat",
            response: "payment-options",
          },
        ],
      };
    }

    if (input === "achievements") {
      return {
        message:
          "We're proud of our achievements! Over 500+ successful projects completed, 50+ major clients served, 15+ years of experience, and partnerships with industry leaders like Thermax, Motherson, and Praj Industries. Our 10MW solar plant project and pharmaceutical automation systems are among our flagship achievements.",
        options: [
          { label: "🏆 Major Projects", action: "page", page: "projects" },
          {
            label: "🤝 Our Clients",
            action: "chat",
            response: "major-clients",
          },
          { label: "📈 Success Stories", action: "page", page: "projects" },
          {
            label: "🎯 Why Choose Us",
            action: "chat",
            response: "why-choose-us",
          },
          {
            label: "📞 Discuss Partnership",
            action: "external",
            url: "tel:+91-94627-71662",
          },
          {
            label: "🔙 Back to Company Menu",
            action: "chat",
            response: "company-info",
          },
        ],
      };
    }

    // Additional response handlers for navigation flows
    if (input === "main-menu") {
      return {
        message: t("chatbotMessages.mainMenu"),
        options: [
          {
            label: "🔍 Find the Right Product",
            action: "chat",
            response: "product-selection",
          },
          {
            label: "⚙️ Choose a Service",
            action: "chat",
            response: "service-selection",
          },
          {
            label: "🔧 Technical Troubleshooting",
            action: "chat",
            response: "troubleshooting",
          },
          {
            label: "💼 About Our Company",
            action: "chat",
            response: "company-info",
          },
          {
            label: "📞 Speak with Expert",
            action: "external",
            url: "tel:+91-94627-71662",
          },
          {
            label: "📧 Send Us a Message",
            action: "external",
            url: "mailto:info@powertonengineering.com",
          },
        ],
      };
    }

    if (input === "quote-tips") {
      return {
        message:
          "Here are some tips for getting the best quote: 1) Provide detailed specifications and requirements, 2) Mention quantity needed, 3) Include project timeline, 4) Specify installation location, 5) List any special requirements or certifications needed. The more details you provide, the more accurate our quote will be!",
        options: [
          { label: "📋 Request Detailed Quote", action: "page", page: "quote" },
          {
            label: "📞 Discuss Requirements",
            action: "external",
            url: "tel:+91-94627-71662",
          },
          {
            label: "📧 Email Specifications",
            action: "external",
            url: "mailto:info@powertonengineering.com?subject=Detailed Quote Request",
          },
          {
            label: "💰 Pricing Information",
            action: "chat",
            response: "pricing-info",
          },
          {
            label: "🏠 Back to Main Menu",
            action: "chat",
            response: "main-menu",
          },
        ],
      };
    }

    if (input === "urgent-support") {
      return {
        message:
          "Urgent matters include: equipment failures affecting production, safety-critical issues, emergency breakdowns, installation deadlines, and system malfunctions. For these situations, call us immediately at +91-94627-71662. We provide 24/7 emergency support for critical situations.",
        options: [
          {
            label: "📞 Emergency Call Now",
            action: "external",
            url: "tel:+91-94627-71662",
          },
          {
            label: "⚡ Emergency Email",
            action: "external",
            url: "mailto:info@powertonengineering.com?subject=URGENT - Emergency Support Required",
          },
          {
            label: "🛠️ Maintenance Support",
            action: "chat",
            response: "maintenance-service",
          },
          {
            label: "⏰ Regular Business Hours",
            action: "chat",
            response: "business-hours",
          },
          {
            label: "🏠 Back to Main Menu",
            action: "chat",
            response: "main-menu",
          },
        ],
      };
    }

    if (input === "product-comparison") {
      return {
        message:
          "I can help you compare products! Our extensive range includes sensors, automation systems, electrical components, and solar products. Tell me which specific products you're comparing or what application you need them for, and I'll guide you to the best options.",
        options: [
          {
            label: "🌡️ Compare Sensors",
            action: "chat",
            response: "sensors-category",
          },
          {
            label: "⚙️ Compare Automation Systems",
            action: "chat",
            response: "automation-category",
          },
          {
            label: "⚡ Compare Electrical Components",
            action: "chat",
            response: "electrical-category",
          },
          {
            label: "☀️ Compare Solar Products",
            action: "chat",
            response: "solar-category",
          },
          {
            label: "📞 Expert Comparison Help",
            action: "external",
            url: "tel:+91-94627-71662",
          },
          {
            label: "🏠 Back to Main Menu",
            action: "chat",
            response: "main-menu",
          },
        ],
      };
    }

    // Default intelligent response
    return {
      message: t("chatbotMessages.defaultResponse"),
      options: [
        {
          label: "🔍 Find the Right Product",
          action: "chat",
          response: "product-selection",
        },
        {
          label: "⚙️ Explore Our Services",
          action: "chat",
          response: "service-selection",
        },
        {
          label: "🔧 Technical Support",
          action: "chat",
          response: "troubleshooting",
        },
        {
          label: "💼 About Powerton Engineering",
          action: "chat",
          response: "company-info",
        },
        {
          label: "📞 Speak with Expert",
          action: "external",
          url: "tel:+91-94627-71662",
        },
        {
          label: "📧 Send Us a Message",
          action: "external",
          url: "mailto:info@powertonengineering.com",
        },
      ],
    };
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    addMessage(inputValue, "user");
    const response = generateResponse(inputValue);
    addBotMessage(response);
    setInputValue("");
  };

  // Generate contextual response based on navigation action
  const generateNavigationResponse = (
    option: NavigationOption,
  ): ChatbotResponse => {
    if (option.action === "page") {
      const pageResponses: { [key: string]: ChatbotResponse } = {
        products: {
          message:
            "Perfect! I've taken you to our products page where you can explore our extensive range of industrial automation solutions. You'll find detailed specifications, images, and technical data for each product category. Need help finding something specific or have questions about any product?",
          options: [
            {
              label: "🔍 Find Specific Product",
              action: "chat",
              response: "product-selection",
            },
            {
              label: "💰 Get Product Quote",
              action: "external",
              url: "mailto:info@powertonengineering.com?subject=Product Quote Request",
            },
            {
              label: "📞 Technical Consultation",
              action: "external",
              url: "tel:+91-94627-71662",
            },
            {
              label: "📋 Product Comparison",
              action: "chat",
              response: "product-comparison",
            },
            {
              label: "🏠 Back to Main Menu",
              action: "chat",
              response: "main-menu",
            },
          ],
        },
        services: {
          message:
            "Excellent choice! Our services page showcases our comprehensive support offerings from installation to maintenance. We're your complete engineering partner for the entire project lifecycle. What type of service support are you looking for?",
          options: [
            {
              label: "🔧 Installation Services",
              action: "chat",
              response: "installation-service",
            },
            {
              label: "🛠️ Maintenance Programs",
              action: "chat",
              response: "maintenance-service",
            },
            {
              label: "📏 Calibration Services",
              action: "chat",
              response: "calibration-service",
            },
            {
              label: "📋 Service Quote",
              action: "external",
              url: "mailto:info@powertonengineering.com?subject=Service Quote Request",
            },
            {
              label: "🏠 Back to Main Menu",
              action: "chat",
              response: "main-menu",
            },
          ],
        },
        contact: {
          message:
            "Great! The contact page has all our details including office location, phone numbers, and contact form. We're based in Noida and available Monday-Saturday. Feel free to reach out anytime! Is there anything specific you'd like to discuss with our team?",
          options: [
            {
              label: "📞 Call Now",
              action: "external",
              url: "tel:+91-94627-71662",
            },
            {
              label: "📧 Send Email",
              action: "external",
              url: "mailto:info@powertonengineering.com",
            },
            {
              label: "📍 Visit Office",
              action: "external",
              url: "https://maps.app.goo.gl/jiap3sBYbM3r8Pn68",
            },
            {
              label: "⏰ Business Hours",
              action: "chat",
              response: "business-hours",
            },
            {
              label: "🏠 Back to Main Menu",
              action: "chat",
              response: "main-menu",
            },
          ],
        },
        about: {
          message:
            "Wonderful! Our about page tells the complete story of Powerton Engineering - our journey, achievements, team, and values. With 15+ years of experience and 500+ successful projects, we're proud of our engineering excellence. Want to know more about any specific aspect?",
          options: [
            {
              label: "🏆 Our Achievements",
              action: "chat",
              response: "achievements",
            },
            {
              label: "🤝 Major Clients",
              action: "chat",
              response: "major-clients",
            },
            {
              label: "👥 Meet Our Team",
              action: "chat",
              response: "team-info",
            },
            {
              label: "📞 Connect with Leadership",
              action: "external",
              url: "tel:+91-94627-71662",
            },
            {
              label: "🏠 Back to Main Menu",
              action: "chat",
              response: "main-menu",
            },
          ],
        },
        projects: {
          message:
            "Fantastic! Our projects page showcases our portfolio of successful implementations across various industries. From 10MW solar plants to pharmaceutical automation systems, each project demonstrates our technical expertise. Interested in a similar project?",
          options: [
            {
              label: "💡 Discuss Similar Project",
              action: "external",
              url: "mailto:info@powertonengineering.com?subject=Project Discussion",
            },
            {
              label: "📋 Project Quote",
              action: "external",
              url: "tel:+91-94627-71662",
            },
            {
              label: "🏭 Industry Solutions",
              action: "chat",
              response: "industry-solutions",
            },
            {
              label: "🎯 Custom Engineering",
              action: "chat",
              response: "custom-solutions",
            },
            {
              label: "🏠 Back to Main Menu",
              action: "chat",
              response: "main-menu",
            },
          ],
        },
        quote: {
          message:
            "Perfect! Our quote page will help you get a detailed proposal tailored to your specific requirements. Our team will analyze your needs and provide competitive pricing with transparent terms. What type of solution are you looking to quote?",
          options: [
            {
              label: "📋 Product Quote",
              action: "chat",
              response: "product-quote",
            },
            {
              label: "⚙️ Service Quote",
              action: "chat",
              response: "service-quote",
            },
            {
              label: "🏗️ Project Quote",
              action: "chat",
              response: "project-quote",
            },
            {
              label: "📞 Quick Phone Quote",
              action: "external",
              url: "tel:+91-94627-71662",
            },
            {
              label: "🏠 Back to Main Menu",
              action: "chat",
              response: "main-menu",
            },
          ],
        },
      };

      return (
        pageResponses[option.page || ""] || {
          message:
            "I've directed you to the requested page. You can find all the relevant information there. Feel free to explore and let me know if you need any assistance or have questions about what you find!",
          options: [
            { label: "❓ I Have Questions", action: "chat", response: "help" },
            {
              label: "📞 Talk to Expert",
              action: "external",
              url: "tel:+91-94627-71662",
            },
            {
              label: "🏠 Back to Main Menu",
              action: "chat",
              response: "main-menu",
            },
          ],
        }
      );
    }

    if (option.action === "external") {
      if (option.url?.startsWith("tel:")) {
        return {
          message:
            "I've initiated the call for you! Our expert team is standing by to provide immediate assistance. If the call doesn't connect, you can also reach us via email or visit our office. How else can I help you today?",
          options: [
            {
              label: "📧 Send Email Instead",
              action: "external",
              url: "mailto:info@powertonengineering.com",
            },
            {
              label: "📍 Visit Our Office",
              action: "external",
              url: "https://maps.app.goo.gl/jiap3sBYbM3r8Pn68",
            },
            {
              label: "⏰ Check Business Hours",
              action: "chat",
              response: "business-hours",
            },
            {
              label: "💬 Continue Chat Support",
              action: "chat",
              response: "help",
            },
            {
              label: "🏠 Back to Main Menu",
              action: "chat",
              response: "main-menu",
            },
          ],
        };
      } else if (option.url?.startsWith("mailto:")) {
        return {
          message:
            "I've opened your email client with our address pre-filled! Please describe your requirements in detail, and our team will respond within 24 hours. For urgent matters, calling us directly is faster. What else can I assist you with?",
          options: [
            {
              label: "📞 Call for Urgent Matters",
              action: "external",
              url: "tel:+91-94627-71662",
            },
            {
              label: "📋 Quote Request Tips",
              action: "chat",
              response: "quote-tips",
            },
            {
              label: "⚡ What's Considered Urgent",
              action: "chat",
              response: "urgent-support",
            },
            {
              label: "💬 Continue Chat Support",
              action: "chat",
              response: "help",
            },
            {
              label: "🏠 Back to Main Menu",
              action: "chat",
              response: "main-menu",
            },
          ],
        };
      } else {
        return {
          message:
            "I've opened the external resource for you! You can explore the additional information there. When you're ready to continue our conversation or need further assistance, I'm here to help. What would you like to do next?",
          options: [
            {
              label: "💬 Continue Our Discussion",
              action: "chat",
              response: "help",
            },
            {
              label: "📞 Speak with Expert",
              action: "external",
              url: "tel:+91-94627-71662",
            },
            {
              label: "📧 Send Us Details",
              action: "external",
              url: "mailto:info@powertonengineering.com",
            },
            {
              label: "🏠 Back to Main Menu",
              action: "chat",
              response: "main-menu",
            },
          ],
        };
      }
    }

    // Default response for other actions
    return {
      message:
        "Action completed! I'm here to continue assisting you with any questions or requirements you might have. What would you like to explore next?",
      options: [
        {
          label: "🔍 Find Products",
          action: "chat",
          response: "product-selection",
        },
        {
          label: "⚙️ Explore Services",
          action: "chat",
          response: "service-selection",
        },
        { label: "💬 Ask Questions", action: "chat", response: "help" },
        { label: "🏠 Main Menu", action: "chat", response: "main-menu" },
      ],
    };
  };

  const handleOptionClick = (option: NavigationOption) => {
    // Clear the options first
    setLastBotOptions([]);
    setLastBotMessageId(null);

    // Add user message showing what they clicked
    addMessage(option.label, "user");

    // Generate and add bot response before performing navigation
    if (option.action === "page" || option.action === "external") {
      const response = generateNavigationResponse(option);
      addBotMessage(response);
    }

    // Perform the action with delay to allow bot response to appear
    setTimeout(() => {
      if (option.action === "navigate" && option.target) {
        handleNavigation(option.target);
      } else if (option.action === "page" && option.page) {
        handlePageNavigation(option.page);
      } else if (option.action === "external" && option.url) {
        window.open(
          option.url,
          option.url.startsWith("tel:") || option.url.startsWith("mailto:")
            ? "_self"
            : "_blank",
        );
        setIsOpen(false);
      } else if (option.action === "chat" && option.response) {
        const response = generateResponse(option.response);
        addBotMessage(response);
      }
    }, 1200); // Small delay to ensure bot response appears first
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-30"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2 }}
      >
        <Button
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();
            setIsOpen((prev) => !prev);
          }}
          className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg"
          aria-label={t("common:aria.toggleNavigation")}
          data-chatbot-toggle="true"
          data-testid="chatbot-toggle-button"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MessageCircle className="w-6 h-6 text-white" />
          )}
        </Button>
      </motion.div>

      {/* Blur Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatWindowRef}
            className="fixed right-4 left-4 sm:left-auto sm:right-6 z-30 w-auto sm:w-80 md:w-96 max-w-none"
            style={{
              top: `${headerHeight + 16}px`,
              bottom: "88px",
              height: `calc(100vh - ${headerHeight + 16}px - 88px)`,
            }}
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="shadow-2xl border border-gray-200 dark:border-gray-600 h-full flex flex-col overflow-hidden">
              <CardHeader className="bg-primary text-white rounded-t-lg py-4 px-4 flex-shrink-0">
                <CardTitle className="flex items-center justify-center gap-2 text-lg font-medium leading-none">
                  <Bot className="w-5 h-5 flex-shrink-0" />
                  <span className="flex-1 text-center">
                    {t("messages.engineeringAdvisor")}
                  </span>
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
                {/* Messages Area */}
                <div
                  ref={messagesContainerRef}
                  className="flex-1 overflow-y-scroll p-4 space-y-4 min-h-0"
                  style={{
                    scrollBehavior: "smooth",
                    height: "0px", // Force flex-1 to work with overflow
                    flexGrow: 1,
                    scrollbarWidth: "thin", // For Firefox
                    scrollbarColor: "#888 transparent", // For Firefox
                  }}
                >
                  {messages.map((message) => (
                    <div key={message.id}>
                      <div
                        className={`flex gap-2 ${
                          message.sender === "user"
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >
                        {message.sender === "bot" && (
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <Bot className="w-4 h-4 text-primary" />
                          </div>
                        )}
                        <div
                          className={`max-w-[75%] p-3 rounded-lg text-sm ${
                            message.sender === "user"
                              ? "bg-primary text-primary-foreground ml-auto"
                              : "bg-muted text-foreground dark:text-gray-200"
                          }`}
                        >
                          {message.text}
                        </div>
                        {message.sender === "user" && (
                          <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <User className="w-4 h-4 text-secondary" />
                          </div>
                        )}
                      </div>

                      {/* Options for this specific bot message */}
                      {message.sender === "bot" &&
                        lastBotMessageId === message.id &&
                        lastBotOptions.length > 0 &&
                        !isTyping && (
                          <div className="ml-10 mt-2 flex flex-wrap gap-2">
                            {lastBotOptions.map((option, index) => (
                              <Button
                                key={index}
                                onClick={() => handleOptionClick(option)}
                                variant="outline"
                                size="sm"
                                className="justify-start h-auto py-2 px-3 text-left whitespace-normal w-fit min-w-0 border-border dark:border-border dark:hover:border-border/70"
                              >
                                <span className="text-sm">{option.label}</span>
                                {option.action === "external" && (
                                  <ExternalLink className="w-3 h-3 ml-2 flex-shrink-0" />
                                )}
                              </Button>
                            ))}
                          </div>
                        )}
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex gap-2 justify-start">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-primary" />
                      </div>
                      <div className="bg-muted text-muted-foreground p-3 rounded-lg">
                        <div className="flex gap-1">
                          <div
                            className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"
                            style={{ animationDelay: "0ms" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"
                            style={{ animationDelay: "150ms" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"
                            style={{ animationDelay: "300ms" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-3 border-t border-gray-200 dark:border-gray-600 flex-shrink-0 bg-background">
                  <div className="flex gap-2">
                    <Input
                      placeholder={t("placeholders.askChatbot")}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="chatbot-input flex-1 border-gray-300 dark:border-gray-600 dark:bg-gray-800"
                    />
                    <Button onClick={handleSendMessage} size="sm">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
