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
        "powerton-chatbot-last-message-id"
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
        JSON.stringify(messages)
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
        JSON.stringify(lastBotOptions)
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
          lastBotMessageId
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
        '[data-chatbot-toggle="true"]'
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
            {
              label: t("chatbot.options.careerOpportunities"),
              action: "chat",
              response: "career-options",
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
            label: t("chatbot.options.instrumentationCategory"),
            action: "page",
            page: "products/instrumentation-accessories",
          },
          {
            label: t("chatbot.options.electricalCategory"),
            action: "page",
            page: "products/electrical-accessories",
          },
          {
            label: t("chatbot.options.measuringToolsCategory"),
            action: "page",
            page: "products/industrial-measuring-tools",
          },
          {
            label: t("chatbot.options.solarCategory"),
            action: "page",
            page: "products/solar-products",
          },
          {
            label: t("chatbot.options.automationCategory"),
            action: "page",
            page: "products/automation-control-systems",
          },
          {
            label: t("chatbot.options.safetyCategory"),
            action: "page",
            page: "products/safety-protective-devices",
          },
          {
            label: t("chatbot.options.pumpsCategory"),
            action: "page",
            page: "products/mechanical-pumps-spares",
          },
          {
            label: t("chatbot.options.bldcCategory"),
            action: "page",
            page: "products/bldc",
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
            label: t("chatbot.options.installationCommissioningService"),
            action: "page",
            page: "services/installation-commissioning",
          },
          {
            label: t("chatbot.options.calibrationTestingService"),
            action: "page",
            page: "services/calibration-testing",
          },
          {
            label: t("chatbot.options.technicalSupportService"),
            action: "page",
            page: "services/technical-support",
          },
          {
            label: t("chatbot.options.customSolutionsService"),
            action: "page",
            page: "services/custom-solutions",
          },
          {
            label: t("chatbot.options.consultationTrainingService"),
            action: "page",
            page: "services/consultation-training",
          },
          {
            label: t("chatbot.options.supplyChainService"),
            action: "page",
            page: "services/supply-chain-management",
          },
          {
            label: t("chatbot.options.solarEpcService"),
            action: "page",
            page: "services/solar-epc",
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

    if (input === "career-options") {
      return {
        message: t("chatbot.responses.careerOptions"),
        options: [
          {
            label: t("chatbot.options.viewJobOpenings"),
            action: "page",
            page: "career",
          },
          {
            label: t("chatbot.options.applyForPosition"),
            action: "page",
            page: "career",
          },
          {
            label: t("chatbot.options.companyCulture"),
            action: "page",
            page: "about",
          },
          {
            label: t("chatbot.options.sendYourResume"),
            action: "external",
            url: "mailto:careers@powertonengineering.com?subject=Job Application",
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
            page: "product-electrical-cables",
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
            label: t("chatbot.options.plcControllers"),
            action: "page",
            page: "products/automation-control-systems/plcs",
          },
          {
            label: t("chatbot.options.scadaSystems"),
            action: "page",
            page: "products/automation-control-systems/scada",
          },
          {
            label: t("chatbot.options.dcsDistributedControl"),
            action: "page",
            page: "products/automation-control-systems/dcs",
          },
          {
            label: t("chatbot.options.hmiHumanMachineInterface"),
            action: "page",
            page: "products/automation-control-systems/hmi",
          },
          {
            label: t("chatbot.options.customControlPanels"),
            action: "external",
            url: "mailto:info@powertonengineering.com?subject=Custom Control Panel Request",
          },
          {
            label: t("chatbot.options.discussAutomationProject"),
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
            label: t("chatbot.options.solarPanels"),
            action: "page",
            page: "products/solar-products/solar-panels",
          },
          {
            label: t("chatbot.options.solarInverters"),
            action: "page",
            page: "products/solar-products/solar-inverters",
          },
          {
            label: t("chatbot.options.solarInstallationEpc"),
            action: "page",
            page: "services/solar-epc",
          },
          {
            label: t("chatbot.options.getCustomSolarQuote"),
            action: "external",
            url: "mailto:info@powertonengineering.com?subject=Solar Project Quote Request",
          },
          {
            label: t("chatbot.options.solarConsultation"),
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
            page: "product-solar-inverters",
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
            label: t("chatbot.options.solarEpcService"),
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
            label: t("chatbot.options.technicalConsultation"),
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
            label: t("chatbot.options.callNowWithNumber"),
            action: "external",
            url: "tel:+91-94627-71662",
          },
          {
            label: t("chatbot.options.emailUs"),
            action: "external",
            url: "mailto:info@powertonengineering.com",
          },
          {
            label: t("chatbot.options.visitOurOffice"),
            action: "external",
            url: "https://maps.app.goo.gl/jiap3sBYbM3r8Pn68",
          },
          {
            label: t("chatbot.options.contactForm"),
            action: "page",
            page: "contact",
          },
          {
            label: t("chatbot.options.requestQuote"),
            action: "page",
            page: "quote",
          },
          {
            label: t("chatbot.options.businessHours"),
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
        message: t("chatbotMessages.quoteHelp"),
        options: [
          {
            label: t("chatbot.options.requestDetailedQuote"),
            action: "page",
            page: "quote",
          },
          {
            label: t("chatbot.options.quickPhoneQuote"),
            action: "external",
            url: "tel:+91-94627-71662",
          },
          {
            label: t("chatbot.options.emailRequirements"),
            action: "external",
            url: "mailto:info@powertonengineering.com?subject=Quote Request",
          },
          {
            label: t("chatbot.options.pricingInformation"),
            action: "chat",
            response: "pricing-info",
          },
          {
            label: t("chatbot.options.customSolution"),
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
        message: t("chatbotMessages.helpAssist"),
        options: [
          {
            label: t("chatbot.options.findProducts"),
            action: "chat",
            response: "product-selection",
          },
          {
            label: t("chatbot.options.chooseServices"),
            action: "chat",
            response: "service-selection",
          },
          {
            label: t("chatbot.options.technicalSupport"),
            action: "chat",
            response: "troubleshooting",
          },
          {
            label: t("chatbot.options.talkToExpert"),
            action: "external",
            url: "tel:+91-94627-71662",
          },
          {
            label: t("chatbot.options.aboutOurCompany"),
            action: "chat",
            response: "company-info",
          },
          {
            label: t("chatbot.options.getStarted"),
            action: "page",
            page: "contact",
          },
        ],
      };
    }

    // Additional specific responses
    if (input === "business-hours") {
      return {
        message: t("chatbotMessages.businessHoursInfo"),
        options: [
          {
            label: t("chatbot.options.callDuringBusinessHours"),
            action: "external",
            url: "tel:+91-94627-71662",
          },
          {
            label: t("chatbot.options.emailAnytime"),
            action: "external",
            url: "mailto:info@powertonengineering.com",
          },
          {
            label: t("chatbot.options.visitOffice"),
            action: "external",
            url: "https://maps.app.goo.gl/jiap3sBYbM3r8Pn68",
          },
          {
            label: t("chatbot.options.emergencySupport"),
            action: "external",
            url: "tel:+91-94627-71662",
          },
          {
            label: t("chatbot.options.scheduleMeeting"),
            action: "external",
            url: "mailto:info@powertonengineering.com?subject=Meeting Request",
          },
        ],
      };
    }

    if (input === "pricing-info") {
      return {
        message: t("chatbotMessages.pricingInfo"),
        options: [
          {
            label: t("chatbot.options.getDetailedQuote"),
            action: "page",
            page: "quote",
          },
          {
            label: t("chatbot.options.discussPricing"),
            action: "external",
            url: "tel:+91-94627-71662",
          },
          {
            label: t("chatbot.options.emailRequirements"),
            action: "external",
            url: "mailto:info@powertonengineering.com?subject=Pricing Inquiry",
          },
          {
            label: t("chatbot.options.volumeDiscounts"),
            action: "external",
            url: "tel:+91-94627-71662",
          },
          {
            label: t("chatbot.options.paymentOptions"),
            action: "chat",
            response: "payment-options",
          },
        ],
      };
    }

    if (input === "achievements") {
      return {
        message: t("chatbotMessages.achievements"),
        options: [
          {
            label: t("chatbot.options.majorProjects"),
            action: "page",
            page: "projects",
          },
          {
            label: t("chatbot.options.ourClients"),
            action: "chat",
            response: "major-clients",
          },
          {
            label: t("chatbot.options.successStories"),
            action: "page",
            page: "projects",
          },
          {
            label: t("chatbot.options.whyChooseUs"),
            action: "chat",
            response: "why-choose-us",
          },
          {
            label: t("chatbot.options.discussPartnership"),
            action: "external",
            url: "tel:+91-94627-71662",
          },
          {
            label: t("chatbot.options.careerOpportunities"),
            action: "page",
            page: "career",
          },
          {
            label: t("chatbot.options.projectGallery"),
            action: "page",
            page: "gallery",
          },
          {
            label: t("chatbot.options.backToCompanyMenu"),
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
            label: t("chatbot.options.findRightProduct"),
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
            label: t("chatbot.options.aboutPowertonEngineering"),
            action: "chat",
            response: "company-info",
          },
          {
            label: t("chatbot.options.careerOpportunities"),
            action: "page",
            page: "career",
          },
          {
            label: t("chatbot.options.projectGallery"),
            action: "page",
            page: "gallery",
          },
          {
            label: t("chatbot.options.speakWithExpert"),
            action: "external",
            url: "tel:+91-94627-71662",
          },
          {
            label: t("chatbot.options.sendUsMessage"),
            action: "external",
            url: "mailto:info@powertonengineering.com",
          },
        ],
      };
    }

    if (input === "quote-tips") {
      return {
        message: t("chatbotMessages.quoteTips"),
        options: [
          {
            label: t("chatbot.options.requestDetailedQuote"),
            action: "page",
            page: "quote",
          },
          {
            label: t("chatbot.options.discussRequirements"),
            action: "external",
            url: "tel:+91-94627-71662",
          },
          {
            label: t("chatbot.options.emailSpecifications"),
            action: "external",
            url: "mailto:info@powertonengineering.com?subject=Detailed Quote Request",
          },
          {
            label: t("chatbot.options.pricingInformation"),
            action: "chat",
            response: "pricing-info",
          },
          {
            label: t("chatbot.options.backToMainMenu"),
            action: "chat",
            response: "main-menu",
          },
        ],
      };
    }

    if (input === "urgent-support") {
      return {
        message: t("chatbotMessages.urgentSupport"),
        options: [
          {
            label: t("chatbot.options.emergencyCallNow"),
            action: "external",
            url: "tel:+91-94627-71662",
          },
          {
            label: t("chatbot.options.emergencyEmail"),
            action: "external",
            url: "mailto:info@powertonengineering.com?subject=URGENT - Emergency Support Required",
          },
          {
            label: t("chatbot.options.maintenanceSupport"),
            action: "chat",
            response: "maintenance-service",
          },
          {
            label: t("chatbot.options.regularBusinessHours"),
            action: "chat",
            response: "business-hours",
          },
          {
            label: t("chatbot.options.backToMainMenu"),
            action: "chat",
            response: "main-menu",
          },
        ],
      };
    }

    if (input === "product-comparison") {
      return {
        message: t("chatbotMessages.productComparison"),
        options: [
          {
            label: t("chatbot.options.compareAutomationSystems"),
            action: "chat",
            response: "automation-category",
          },
          {
            label: t("chatbot.options.compareElectricalComponents"),
            action: "chat",
            response: "electrical-category",
          },
          {
            label: t("chatbot.options.compareSolarProducts"),
            action: "chat",
            response: "solar-category",
          },
          {
            label: t("chatbot.options.expertComparisonHelp"),
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

    if (input === "sensor-selection-help") {
      return {
        message: "Let me help you select the right sensors! Proper sensor selection is crucial for accurate measurements. What type of measurement do you need?",
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
            label: t("chatbot.options.technicalConsultation"),
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

    if (input === "electrical-selection-help") {
      return {
        message: "I'll help you choose the right electrical components! Proper selection ensures safety and performance. What electrical components do you need?",
        options: [
          {
            label: t("chatbot.options.powerSupplies"),
            action: "page",
            page: "products",
          },
          {
            label: t("chatbot.options.circuitBreakersFuses"),
            action: "page",
            page: "products",
          },
          {
            label: t("chatbot.options.cablesConnectors"),
            action: "page",
            page: "products",
          },
          {
            label: t("chatbot.options.technicalConsultation"),
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

    if (input === "control-selection-help") {
      return {
        message: "Choosing the right control system is critical for your automation success! Let me guide you through the selection process.",
        options: [
          {
            label: t("chatbot.options.plcControllers"),
            action: "page",
            page: "products",
          },
          {
            label: t("chatbot.options.scadaSystems"),
            action: "page",
            page: "products",
          },
          {
            label: t("chatbot.options.hmiHumanMachineInterface"),
            action: "page",
            page: "products",
          },
          {
            label: t("chatbot.options.technicalConsultation"),
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

    if (input === "solar-selection-help") {
      return {
        message: "Let me help you design the perfect solar system! We'll ensure optimal sizing and component selection for your energy needs.",
        options: [
          {
            label: t("chatbot.options.completeSolarSolutions"),
            action: "page",
            page: "products",
          },
          {
            label: t("chatbot.options.solarEpcService"),
            action: "page",
            page: "services",
          },
          {
            label: t("chatbot.options.getSolarQuote"),
            action: "external",
            url: "mailto:info@powertonengineering.com?subject=Solar System Design Consultation",
          },
          {
            label: t("chatbot.options.solarConsultation"),
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

    if (input === "inverter-troubleshooting") {
      return {
        message: "Inverter faults can stop your solar system. Common issues include grid synchronization problems, DC voltage issues, and component failures. Let me help you diagnose.",
        options: [
          {
            label: t("chatbot.options.solarInverters"),
            action: "page",
            page: "products",
          },
          {
            label: t("chatbot.options.emergencySupport"),
            action: "external",
            url: "tel:+91-94627-71662",
          },
          {
            label: t("chatbot.options.requestCalibrationService"),
            action: "external",
            url: "mailto:info@powertonengineering.com?subject=Inverter Troubleshooting Service",
          },
          {
            label: t("chatbot.options.backToSolarHelp"),
            action: "chat",
            response: "solar-troubleshooting",
          },
        ],
      };
    }

    if (input === "battery-troubleshooting") {
      return {
        message: "Battery storage issues can affect your energy availability. Common problems include capacity degradation, charging issues, and BMS faults. Here's how we can help.",
        options: [
          {
            label: t("chatbot.options.solarBatterySystems"),
            action: "page",
            page: "products",
          },
          {
            label: t("chatbot.options.emergencySupport"),
            action: "external",
            url: "tel:+91-94627-71662",
          },
          {
            label: t("chatbot.options.scheduleMaintenance"),
            action: "external",
            url: "mailto:info@powertonengineering.com?subject=Battery System Maintenance",
          },
          {
            label: t("chatbot.options.backToSolarHelp"),
            action: "chat",
            response: "solar-troubleshooting",
          },
        ],
      };
    }

    if (input === "monitoring-troubleshooting") {
      return {
        message: "Monitoring system problems can prevent you from tracking your solar performance. Issues often involve connectivity, sensors, or software configuration.",
        options: [
          {
            label: t("chatbot.options.browseSolarProducts"),
            action: "page",
            page: "products",
          },
          {
            label: t("chatbot.options.technicalConsultation"),
            action: "external",
            url: "tel:+91-94627-71662",
          },
          {
            label: t("chatbot.options.requestCalibrationService"),
            action: "external",
            url: "mailto:info@powertonengineering.com?subject=Monitoring System Service",
          },
          {
            label: t("chatbot.options.backToSolarHelp"),
            action: "chat",
            response: "solar-troubleshooting",
          },
        ],
      };
    }

    if (input === "why-choose-us") {
      return {
        message: "Here's why clients choose Powerton Engineering: 15+ years of experience, 500+ successful projects, expert team, quality certifications, comprehensive solutions, 24/7 support, competitive pricing, and commitment to excellence!",
        options: [
          {
            label: t("chatbot.options.ourAchievements"),
            action: "chat",
            response: "achievements",
          },
          {
            label: t("chatbot.options.majorProjects"),
            action: "page",
            page: "projects",
          },
          {
            label: t("chatbot.options.clientTestimonials"),
            action: "chat",
            response: "client-testimonials",
          },
          {
            label: t("chatbot.options.discussPartnership"),
            action: "external",
            url: "tel:+91-94627-71662",
          },
          {
            label: t("chatbot.options.backToCompanyMenu"),
            action: "chat",
            response: "company-info",
          },
        ],
      };
    }

    if (input === "team-info") {
      return {
        message: "Our team consists of experienced engineers, technicians, and support staff dedicated to delivering exceptional engineering solutions. We combine technical expertise with industry knowledge to serve you better!",
        options: [
          {
            label: t("chatbot.options.meetOurTeam"),
            action: "page",
            page: "about",
          },
          {
            label: t("chatbot.options.careerOpportunities"),
            action: "page",
            page: "career",
          },
          {
            label: t("chatbot.options.speakWithExpert"),
            action: "external",
            url: "tel:+91-94627-71662",
          },
          {
            label: t("chatbot.options.backToCompanyMenu"),
            action: "chat",
            response: "company-info",
          },
        ],
      };
    }

    if (input === "industry-solutions") {
      return {
        message: "We provide specialized solutions for various industries including pharmaceutical, power generation, oil & gas, manufacturing, chemical processing, water treatment, and renewable energy. What industry are you in?",
        options: [
          {
            label: t("chatbot.options.ourSuccessStories"),
            action: "page",
            page: "projects",
          },
          {
            label: t("chatbot.options.customSolutionsService"),
            action: "page",
            page: "services",
          },
          {
            label: t("chatbot.options.discussRequirements"),
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

    if (input === "custom-solutions") {
      return {
        message: "We specialize in custom engineering solutions tailored to your unique requirements. From design to implementation, we deliver solutions that perfectly match your needs!",
        options: [
          {
            label: t("chatbot.options.customSolutionsService"),
            action: "page",
            page: "services",
          },
          {
            label: t("chatbot.options.discussAutomationProject"),
            action: "external",
            url: "tel:+91-94627-71662",
          },
          {
            label: t("chatbot.options.requestDetailedQuote"),
            action: "page",
            page: "quote",
          },
          {
            label: t("chatbot.options.backToMainMenu"),
            action: "chat",
            response: "main-menu",
          },
        ],
      };
    }

    if (input === "product-quote") {
      return {
        message: "I can help you get a product quote! Please provide details about the products you need, quantities, and any specifications. This helps us give you accurate pricing.",
        options: [
          {
            label: t("chatbot.options.browseAllProducts"),
            action: "page",
            page: "products",
          },
          {
            label: t("chatbot.options.requestDetailedQuote"),
            action: "page",
            page: "quote",
          },
          {
            label: t("chatbot.options.quickPhoneQuote"),
            action: "external",
            url: "tel:+91-94627-71662",
          },
          {
            label: t("chatbot.options.emailRequirements"),
            action: "external",
            url: "mailto:info@powertonengineering.com?subject=Product Quote Request",
          },
          {
            label: t("chatbot.options.backToMainMenu"),
            action: "chat",
            response: "main-menu",
          },
        ],
      };
    }

    if (input === "service-quote") {
      return {
        message: "Let me help you get a service quote! Tell us about the service you need, project scope, location, and timeline. We'll provide competitive pricing for our services.",
        options: [
          {
            label: t("chatbot.options.viewAllServices"),
            action: "page",
            page: "services",
          },
          {
            label: t("chatbot.options.requestDetailedQuote"),
            action: "page",
            page: "quote",
          },
          {
            label: t("chatbot.options.discussRequirements"),
            action: "external",
            url: "tel:+91-94627-71662",
          },
          {
            label: t("chatbot.options.emailSpecifications"),
            action: "external",
            url: "mailto:info@powertonengineering.com?subject=Service Quote Request",
          },
          {
            label: t("chatbot.options.backToMainMenu"),
            action: "chat",
            response: "main-menu",
          },
        ],
      };
    }

    if (input === "project-quote") {
      return {
        message: "I can help you get a complete project quote! We need to understand your project requirements, scope, timeline, and specifications to provide accurate pricing. Let's discuss your project!",
        options: [
          {
            label: t("chatbot.options.ourSuccessStories"),
            action: "page",
            page: "projects",
          },
          {
            label: t("chatbot.options.requestDetailedQuote"),
            action: "page",
            page: "quote",
          },
          {
            label: t("chatbot.options.discussAutomationProject"),
            action: "external",
            url: "tel:+91-94627-71662",
          },
          {
            label: t("chatbot.options.emailSpecifications"),
            action: "external",
            url: "mailto:info@powertonengineering.com?subject=Complete Project Quote",
          },
          {
            label: t("chatbot.options.backToMainMenu"),
            action: "chat",
            response: "main-menu",
          },
        ],
      };
    }

    if (input === "payment-options") {
      return {
        message: "We offer flexible payment options to suit your business needs! Options include advance payment, payment against delivery, credit terms for approved clients, milestone-based payments for projects, and financing options. Contact us to discuss!",
        options: [
          {
            label: t("chatbot.options.discussPricing"),
            action: "external",
            url: "tel:+91-94627-71662",
          },
          {
            label: t("chatbot.options.requestDetailedQuote"),
            action: "page",
            page: "quote",
          },
          {
            label: t("chatbot.options.emailRequirements"),
            action: "external",
            url: "mailto:info@powertonengineering.com?subject=Payment Options Inquiry",
          },
          {
            label: t("chatbot.options.backToMainMenu"),
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
          label: t("chatbot.options.findRightProduct"),
          action: "chat",
          response: "product-selection",
        },
        {
          label: t("chatbot.options.exploreOurServices"),
          action: "chat",
          response: "service-selection",
        },
        {
          label: t("chatbot.options.technicalSupportOption"),
          action: "chat",
          response: "troubleshooting",
        },
        {
          label: t("chatbot.options.aboutPowertonEngineering"),
          action: "chat",
          response: "company-info",
        },
        {
          label: t("chatbot.options.speakWithExpert"),
          action: "external",
          url: "tel:+91-94627-71662",
        },
        {
          label: t("chatbot.options.sendUsMessage"),
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
    option: NavigationOption
  ): ChatbotResponse => {
    if (option.action === "page") {
      const pageResponses: { [key: string]: ChatbotResponse } = {
        products: {
          message: t("chatbotMessages.productsPageResponse"),
          options: [
            {
              label: t("chatbot.options.findSpecificProduct"),
              action: "chat",
              response: "product-selection",
            },
            {
              label: t("chatbot.options.getProductQuote"),
              action: "external",
              url: "mailto:info@powertonengineering.com?subject=Product Quote Request",
            },
            {
              label: t("chatbot.options.technicalConsultation"),
              action: "external",
              url: "tel:+91-94627-71662",
            },
            {
              label: t("chatbot.options.productComparison"),
              action: "chat",
              response: "product-comparison",
            },
            {
              label: t("chatbot.options.backToMainMenu"),
              action: "chat",
              response: "main-menu",
            },
          ],
        },
        services: {
          message: t("chatbotMessages.servicesPageResponse"),
          options: [
            {
              label: t("chatbot.options.installationServices"),
              action: "chat",
              response: "installation-service",
            },
            {
              label: t("chatbot.options.maintenancePrograms"),
              action: "chat",
              response: "maintenance-service",
            },
            {
              label: t("chatbot.options.calibrationServices"),
              action: "chat",
              response: "calibration-service",
            },
            {
              label: t("chatbot.options.serviceQuote"),
              action: "external",
              url: "mailto:info@powertonengineering.com?subject=Service Quote Request",
            },
            {
              label: t("chatbot.options.backToMainMenu"),
              action: "chat",
              response: "main-menu",
            },
          ],
        },
        contact: {
          message: t("chatbotMessages.contactPageResponse"),
          options: [
            {
              label: t("chatbot.options.callNow"),
              action: "external",
              url: "tel:+91-94627-71662",
            },
            {
              label: t("chatbot.options.sendEmail"),
              action: "external",
              url: "mailto:info@powertonengineering.com",
            },
            {
              label: t("chatbot.options.visitOffice"),
              action: "external",
              url: "https://maps.app.goo.gl/jiap3sBYbM3r8Pn68",
            },
            {
              label: t("chatbot.options.businessHoursOption"),
              action: "chat",
              response: "business-hours",
            },
            {
              label: t("chatbot.options.backToMainMenu"),
              action: "chat",
              response: "main-menu",
            },
          ],
        },
        about: {
          message: t("chatbotMessages.aboutPageResponse"),
          options: [
            {
              label: t("chatbot.options.ourAchievements"),
              action: "chat",
              response: "achievements",
            },
            {
              label: t("chatbot.options.ourClients"),
              action: "chat",
              response: "major-clients",
            },
            {
              label: t("chatbot.options.meetOurTeam"),
              action: "chat",
              response: "team-info",
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
        },
        projects: {
          message: t("chatbotMessages.projectsPageResponse"),
          options: [
            {
              label: t("chatbot.options.similarProjects"),
              action: "external",
              url: "mailto:info@powertonengineering.com?subject=Project Discussion",
            },
            {
              label: t("chatbot.options.viewDetailedPortfolio"),
              action: "external",
              url: "tel:+91-94627-71662",
            },
            {
              label: t("chatbot.options.clientTestimonials"),
              action: "chat",
              response: "industry-solutions",
            },
            {
              label: t("chatbot.options.customEngineering"),
              action: "chat",
              response: "custom-solutions",
            },
            {
              label: t("chatbot.options.backToMainMenu"),
              action: "chat",
              response: "main-menu",
            },
          ],
        },
        quote: {
          message: t("chatbotMessages.quotePageResponse"),
          options: [
            {
              label: t("chatbot.options.productQuote"),
              action: "chat",
              response: "product-quote",
            },
            {
              label: t("chatbot.options.serviceQuoteOption"),
              action: "chat",
              response: "service-quote",
            },
            {
              label: t("chatbot.options.projectQuote"),
              action: "chat",
              response: "project-quote",
            },
            {
              label: t("chatbot.options.quickPhoneQuote"),
              action: "external",
              url: "tel:+91-94627-71662",
            },
            {
              label: t("chatbot.options.backToMainMenu"),
              action: "chat",
              response: "main-menu",
            },
          ],
        },
      };

      return (
        pageResponses[option.page || ""] || {
          message: t("chatbotMessages.genericPageResponse"),
          options: [
            {
              label: t("chatbot.options.haveQuestions"),
              action: "chat",
              response: "help",
            },
            {
              label: t("chatbot.options.talkToExpert"),
              action: "external",
              url: "tel:+91-94627-71662",
            },
            {
              label: t("chatbot.options.backToMainMenu"),
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
          message: t("chatbotMessages.callInitiated"),
          options: [
            {
              label: t("chatbot.options.sendEmailInstead"),
              action: "external",
              url: "mailto:info@powertonengineering.com",
            },
            {
              label: t("chatbot.options.visitOurOffice"),
              action: "external",
              url: "https://maps.app.goo.gl/jiap3sBYbM3r8Pn68",
            },
            {
              label: t("chatbot.options.checkBusinessHours"),
              action: "chat",
              response: "business-hours",
            },
            {
              label: t("chatbot.options.continueChatSupport"),
              action: "chat",
              response: "help",
            },
            {
              label: t("chatbot.options.backToMainMenu"),
              action: "chat",
              response: "main-menu",
            },
          ],
        };
      } else if (option.url?.startsWith("mailto:")) {
        return {
          message: t("chatbotMessages.emailOpened"),
          options: [
            {
              label: t("chatbot.options.callForUrgentMatters"),
              action: "external",
              url: "tel:+91-94627-71662",
            },
            {
              label: t("chatbot.options.quoteRequestTips"),
              action: "chat",
              response: "quote-tips",
            },
            {
              label: t("chatbot.options.whatsConsideredUrgent"),
              action: "chat",
              response: "urgent-support",
            },
            {
              label: t("chatbot.options.continueChatSupport"),
              action: "chat",
              response: "help",
            },
            {
              label: t("chatbot.options.backToMainMenu"),
              action: "chat",
              response: "main-menu",
            },
          ],
        };
      } else {
        return {
          message: t("chatbotMessages.externalResourceOpened"),
          options: [
            {
              label: t("chatbot.options.continueOurDiscussion"),
              action: "chat",
              response: "help",
            },
            {
              label: t("chatbot.options.speakWithExpert"),
              action: "external",
              url: "tel:+91-94627-71662",
            },
            {
              label: t("chatbot.options.sendUsDetails"),
              action: "external",
              url: "mailto:info@powertonengineering.com",
            },
            {
              label: t("chatbot.options.backToMainMenu"),
              action: "chat",
              response: "main-menu",
            },
          ],
        };
      }
    }

    // Default response for other actions
    return {
      message: t("chatbotMessages.actionCompleted"),
      options: [
        {
          label: t("chatbot.options.findProducts"),
          action: "chat",
          response: "product-selection",
        },
        {
          label: t("chatbot.options.exploreOurServices"),
          action: "chat",
          response: "service-selection",
        },
        {
          label: t("chatbot.options.haveQuestions"),
          action: "chat",
          response: "help",
        },
        {
          label: t("chatbot.options.backToMainMenu"),
          action: "chat",
          response: "main-menu",
        },
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
            : "_blank"
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
