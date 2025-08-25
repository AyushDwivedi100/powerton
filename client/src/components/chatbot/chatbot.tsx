import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Bot, User, Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface NavigationOption {
  label: string;
  action: 'navigate' | 'external' | 'chat' | 'page';
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
      const savedMessages = localStorage.getItem('powerton-chatbot-messages');
      const savedOptions = localStorage.getItem('powerton-chatbot-options');
      const savedMessageId = localStorage.getItem('powerton-chatbot-last-message-id');
      
      if (savedMessages) {
        const parsedMessages = JSON.parse(savedMessages).map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
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
      console.warn('Failed to load chatbot conversation:', error);
    }
    setIsInitialized(true);
  }, []);

  // Save conversation state to localStorage whenever it changes
  useEffect(() => {
    if (!isInitialized) return;
    
    try {
      localStorage.setItem('powerton-chatbot-messages', JSON.stringify(messages));
    } catch (error) {
      console.warn('Failed to save chatbot messages:', error);
    }
  }, [messages, isInitialized]);

  useEffect(() => {
    if (!isInitialized) return;
    
    try {
      localStorage.setItem('powerton-chatbot-options', JSON.stringify(lastBotOptions));
    } catch (error) {
      console.warn('Failed to save chatbot options:', error);
    }
  }, [lastBotOptions, isInitialized]);

  useEffect(() => {
    if (!isInitialized) return;
    
    try {
      if (lastBotMessageId) {
        localStorage.setItem('powerton-chatbot-last-message-id', lastBotMessageId);
      } else {
        localStorage.removeItem('powerton-chatbot-last-message-id');
      }
    } catch (error) {
      console.warn('Failed to save chatbot message ID:', error);
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
      const header = document.querySelector('header') || document.querySelector('[role="banner"]');
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

    window.addEventListener('resize', measureHeaderHeight);
    window.addEventListener('scroll', measureHeaderHeight);
    window.addEventListener('load', measureHeaderHeight);

    return () => {
      window.removeEventListener('resize', measureHeaderHeight);
      window.removeEventListener('scroll', measureHeaderHeight);
      window.removeEventListener('load', measureHeaderHeight);
    };
  }, []);

  // Re-measure header height when chatbot opens (in case header changed)
  useEffect(() => {
    if (isOpen) {
      const header = document.querySelector('header') || document.querySelector('[role="banner"]');
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
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.documentElement.style.overflow = 'hidden';
      
      // Auto-scroll to bottom when chat opens with proper delay
      setTimeout(() => {
        scrollToBottom();
      }, 800);
    } else {
      // Re-enable body scroll when chatbot is closed
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.documentElement.style.overflow = '';
      
      // Restore scroll position
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
    
    // Cleanup function to ensure scroll is restored
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.documentElement.style.overflow = '';
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
      
      const toggleButton = document.querySelector('[data-chatbot-toggle="true"]') as Element | null;
      if (toggleButton && (toggleButton === target || toggleButton.contains(target as Node))) {
        return;
      }
      
      let currentElement: Element | null = target;
      while (currentElement && currentElement !== document.body) {
        if (currentElement.getAttribute('data-chatbot-toggle') === 'true') {
          return;
        }
        currentElement = currentElement.parentElement;
      }
      
      setIsOpen(false);
    };

    const timer = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 200);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleClickOutside);
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
          message: "Hello! I'm your technical advisor from Powerton Engineering. I'm here to help you find the right industrial automation solutions for your project. Whether you need specific products, services, or technical troubleshooting support, I'll guide you to the perfect solution. What can I help you with today?",
          options: [
            { label: "🔍 Find the Right Product", action: "chat", response: "product-selection" },
            { label: "⚙️ Choose a Service", action: "chat", response: "service-selection" },
            { label: "🔧 Technical Troubleshooting", action: "chat", response: "troubleshooting" },
            { label: "💼 About Our Company", action: "chat", response: "company-info" }
          ]
        });
      }, 500);
    }
  }, [isOpen, isInitialized, messages.length]);

  const addMessage = (text: string, sender: 'user' | 'bot') => {
    const newMessage = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
    return newMessage;
  };

  const addBotMessage = (response: ChatbotResponse) => {
    setIsTyping(true);
    setTimeout(() => {
      const newMessage = addMessage(response.message, 'bot');
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
      case 'top':
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'services':
        const servicesSection = document.querySelector('[data-section="services"]') || 
                              document.querySelector('#services') ||
                              document.querySelector('.services-section');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      case 'products':
        const productsSection = document.querySelector('[data-section="products"]') || 
                              document.querySelector('#products') ||
                              document.querySelector('.products-section');
        if (productsSection) {
          productsSection.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      case 'about':
        const aboutSection = document.querySelector('[data-section="about"]') || 
                           document.querySelector('#about') ||
                           document.querySelector('.about-section');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      case 'projects':
        const projectsSection = document.querySelector('[data-section="projects"]') || 
                              document.querySelector('#projects') ||
                              document.querySelector('.projects-section');
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      case 'contact':
        const contactSection = document.querySelector('[data-section="contact"]') || 
                             document.querySelector('#contact') ||
                             document.querySelector('.contact-section');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
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
    if (input === 'product-selection') {
      return {
        message: "I'd love to help you find the perfect product! Our portfolio includes over 100+ industrial automation components. Let me understand your needs better:",
        options: [
          { label: "🌡️ Sensors & Measurement", action: "chat", response: "sensors-category" },
          { label: "⚡ Electrical Components", action: "chat", response: "electrical-category" },
          { label: "🔧 Automation Systems", action: "chat", response: "automation-category" },
          { label: "☀️ Solar Products", action: "chat", response: "solar-category" },
          { label: "🛡️ Safety & Protection", action: "chat", response: "safety-category" },
          { label: "🔍 Browse All Products", action: "page", page: "products" }
        ]
      };
    }

    if (input === 'service-selection') {
      return {
        message: "Excellent! At Powerton Engineering, we offer comprehensive services designed to support your entire project lifecycle. What type of support do you need?",
        options: [
          { label: "🔧 Installation & Commissioning", action: "chat", response: "installation-service" },
          { label: "🛠️ Maintenance & Repair", action: "chat", response: "maintenance-service" },
          { label: "📏 Calibration & Testing", action: "chat", response: "calibration-service" },
          { label: "🎓 Training & Consultation", action: "chat", response: "training-service" },
          { label: "☀️ Solar EPC Projects", action: "chat", response: "solar-service" },
          { label: "📋 View All Services", action: "page", page: "services" },
          { label: "🏠 Back to Main Menu", action: "chat", response: "main-menu" }
        ]
      };
    }

    if (input === 'troubleshooting') {
      return {
        message: "I'm here to help diagnose your technical issues! Whether it's equipment malfunction, performance problems, or compatibility concerns, let's identify the problem and find the right solution:",
        options: [
          { label: "⚡ Electrical Issues", action: "chat", response: "electrical-troubleshooting" },
          { label: "🌡️ Sensor/Measurement Problems", action: "chat", response: "sensor-troubleshooting" },
          { label: "🖥️ Control System Issues", action: "chat", response: "control-troubleshooting" },
          { label: "☀️ Solar System Problems", action: "chat", response: "solar-troubleshooting" },
          { label: "🔍 Equipment Selection Help", action: "chat", response: "selection-help" },
          { label: "📞 Speak with Technical Expert", action: "external", url: "tel:+91-94627-71662" },
          { label: "🏠 Back to Main Menu", action: "chat", response: "main-menu" }
        ]
      };
    }

    if (input === 'company-info') {
      return {
        message: "I'm proud to represent Powerton Engineering Pvt. Ltd.! We're your trusted partner with over a decade of experience in industrial automation. Our commitment to quality and customer satisfaction has earned us partnerships with major companies like Thermax, Motherson, and Praj Industries. We're based in Noida and serve clients across India.",
        options: [
          { label: "🏆 Our Achievements", action: "chat", response: "achievements" },
          { label: "👥 Meet Our Team", action: "page", page: "about" },
          { label: "🤝 Our Clients", action: "chat", response: "client-testimonials" },
          { label: "📍 Visit Our Office", action: "external", url: "https://maps.app.goo.gl/jiap3sBYbM3r8Pn68" },
          { label: "📞 Contact Us", action: "external", url: "tel:+91-94627-71662" },
          { label: "🏠 Back to Main Menu", action: "chat", response: "main-menu" }
        ]
      };
    }

    // Product Category Responses
    if (input === 'sensors-category') {
      return {
        message: "Perfect choice! Our sensor portfolio includes precision instruments for temperature, pressure, flow, and level measurement. These are essential for process control and monitoring. Which specific type interests you?",
        options: [
          { label: "🌡️ Temperature Sensors", action: "page", page: "product-sensors" },
          { label: "📡 Pressure Transmitters", action: "page", page: "product-transmitters" },
          { label: "🔄 Flow Meters", action: "page", page: "product-sensors" },
          { label: "📊 Level Indicators", action: "page", page: "product-sensors" },
          { label: "🔬 Process Analyzers", action: "page", page: "product-analyzers" },
          { label: "📧 Get Technical Specs", action: "external", url: "mailto:info.powerton@gmail.com?subject=Sensor Technical Specifications" },
          { label: "🔙 Back to Products Menu", action: "chat", response: "product-selection" }
        ]
      };
    }

    if (input === 'electrical-category') {
      return {
        message: "Excellent! Our electrical components ensure safe and reliable power distribution. From circuit breakers to power supplies, we have everything for your electrical infrastructure.",
        options: [
          { label: "🔌 Circuit Breakers & Fuses", action: "page", page: "product-circuit-breakers-fuses" },
          { label: "⚡ Power Supplies", action: "page", page: "product-power-supplies" },
          { label: "🔗 Cables & Connectors", action: "page", page: "product-cables-wires" },
          { label: "📦 Enclosures & Cabinets", action: "page", page: "product-enclosures-cabinets" },
          { label: "🌡️ Heating Elements", action: "page", page: "product-heating-elements-appliances" },
          { label: "💰 Get Pricing", action: "external", url: "tel:+91-94627-71662" },
          { label: "🔙 Back to Products Menu", action: "chat", response: "product-selection" }
        ]
      };
    }

    if (input === 'automation-category') {
      return {
        message: "Smart choice! Our automation systems include PLCs, SCADA, DCS, and HMI solutions that optimize your industrial processes and boost productivity.",
        options: [
          { label: "🖥️ PLCs (Programmable Logic Controllers)", action: "page", page: "product-plcs" },
          { label: "📊 SCADA Systems", action: "page", page: "product-scada" },
          { label: "🌐 DCS (Distributed Control Systems)", action: "page", page: "product-dcs" },
          { label: "👥 HMI (Human Machine Interface)", action: "page", page: "product-hmi" },
          { label: "⚙️ Custom Control Panels", action: "chat", response: "custom-panels" },
          { label: "🎯 Let's Discuss Your Project", action: "external", url: "mailto:info.powerton@gmail.com?subject=Automation Project Discussion" },
          { label: "🔙 Back to Products Menu", action: "chat", response: "product-selection" }
        ]
      };
    }

    if (input === 'solar-category') {
      return {
        message: "Fantastic! Solar energy is the future! We provide complete solar solutions from panels to inverters, batteries, and monitoring systems. Perfect for sustainable and cost-effective power generation.",
        options: [
          { label: "☀️ Solar Panels", action: "page", page: "product-solar-panels" },
          { label: "🔄 Solar Inverters", action: "page", page: "product-solar-inverters" },
          { label: "🔧 Solar Installation & EPC", action: "page", page: "services" },
          { label: "📋 Get Custom Solar Quote", action: "external", url: "mailto:info.powerton@gmail.com?subject=Solar Project Quote Request" },
          { label: "📞 Solar Consultation", action: "external", url: "tel:+91-94627-71662" },
          { label: "🔙 Back to Products Menu", action: "chat", response: "product-selection" }
        ]
      };
    }

    if (input === 'safety-category') {
      return {
        message: "Safety first! That's our motto. Our safety and protective devices ensure personnel protection and equipment security in industrial environments.",
        options: [
          { label: "⚡ Surge Protectors", action: "page", page: "product-surge-protectors" },
          { label: "🔒 Safety Relays & Switches", action: "page", page: "product-safety-relays-switches" },
          { label: "🌍 Grounding Systems", action: "page", page: "product-grounding-systems" },
          { label: "💥 Intrinsically Safe Equipment", action: "page", page: "product-intrinsically-safe-equipment" },
          { label: "🦺 Personal Protective Equipment", action: "page", page: "product-safety-equipment" },
          { label: "📋 Safety Consultation", action: "external", url: "tel:+91-94627-71662" },
          { label: "🔙 Back to Products Menu", action: "chat", response: "product-selection" }
        ]
      };
    }

    // Service Detail Responses
    if (input === 'installation-service') {
      return {
        message: "Our installation and commissioning service ensures your equipment is set up perfectly from day one. We handle everything from site preparation to final testing and validation, with complete compliance certification.",
        options: [
          { label: "⚙️ Equipment Installation", action: "chat", response: "installation-details" },
          { label: "🔧 System Integration", action: "chat", response: "integration-details" },
          { label: "✅ Performance Testing", action: "chat", response: "testing-details" },
          { label: "📜 Compliance Certification", action: "chat", response: "certification-details" },
          { label: "📋 Request Installation Quote", action: "external", url: "mailto:info.powerton@gmail.com?subject=Installation Service Quote" },
          { label: "🔙 Back to Services", action: "chat", response: "service-selection" }
        ]
      };
    }

    // Technical Troubleshooting Responses
    if (input === 'electrical-troubleshooting') {
      return {
        message: "Electrical issues can be complex! Common problems include power fluctuations, circuit overloads, grounding issues, and component failures. Our solutions comply with IEC 60204 and IS 732 standards for industrial electrical safety. What specific electrical problem are you experiencing?",
        options: [
          { label: "⚡ Power Supply Issues", action: "chat", response: "power-supply-help" },
          { label: "🔌 Circuit Protection Problems", action: "chat", response: "circuit-protection-help" },
          { label: "🌍 Grounding & Earthing Issues", action: "chat", response: "grounding-help" },
          { label: "🔥 Overheating Components", action: "chat", response: "overheating-help" },
          { label: "🔍 Browse Electrical Solutions", action: "page", page: "products" },
          { label: "📧 Get Professional Diagnosis", action: "external", url: "mailto:info.powerton@gmail.com?subject=Electrical System Diagnosis" },
          { label: "🔙 Back to Troubleshooting Menu", action: "chat", response: "troubleshooting" }
        ]
      };
    }

    if (input === 'sensor-troubleshooting') {
      return {
        message: "Sensor and measurement problems often involve calibration drift, signal interference, or environmental factors. Our instruments meet ASTM and ISA standards for industrial measurement accuracy. What measurement issue are you facing?",
        options: [
          { label: "🌡️ Temperature Reading Issues", action: "chat", response: "temperature-sensor-help" },
          { label: "📊 Pressure Measurement Problems", action: "chat", response: "pressure-sensor-help" },
          { label: "🔄 Flow Measurement Errors", action: "chat", response: "flow-sensor-help" },
          { label: "📏 Level Detection Issues", action: "chat", response: "level-sensor-help" },
          { label: "🔍 Explore Sensor Solutions", action: "page", page: "products" },
          { label: "📞 Book Calibration Service", action: "external", url: "tel:+91-94627-71662" },
          { label: "🔙 Back to Troubleshooting Menu", action: "chat", response: "troubleshooting" }
        ]
      };
    }

    if (input === 'control-troubleshooting') {
      return {
        message: "Control system issues can disrupt entire operations! Common problems include communication failures, logic errors, HMI malfunctions, and integration issues. Our systems follow IEC 61131 PLC programming standards. What control problem needs attention?",
        options: [
          { label: "🖥️ PLC Programming Issues", action: "chat", response: "plc-troubleshooting" },
          { label: "📊 SCADA Communication Problems", action: "chat", response: "scada-troubleshooting" },
          { label: "👥 HMI Display Issues", action: "chat", response: "hmi-troubleshooting" },
          { label: "🔗 Network Connectivity Problems", action: "chat", response: "network-troubleshooting" },
          { label: "🔍 View Control Solutions", action: "page", page: "products" },
          { label: "🎯 Request System Audit", action: "external", url: "mailto:info.powerton@gmail.com?subject=Control System Audit Request" },
          { label: "🔙 Back to Troubleshooting Menu", action: "chat", response: "troubleshooting" }
        ]
      };
    }

    if (input === 'solar-troubleshooting') {
      return {
        message: "Solar system problems can significantly impact energy generation! Issues often include inverter faults, panel degradation, battery problems, or monitoring failures. Our solutions comply with CEA and MNRE guidelines. What solar issue needs fixing?",
        options: [
          { label: "☀️ Low Power Generation", action: "chat", response: "solar-performance-help" },
          { label: "🔄 Inverter Faults", action: "chat", response: "inverter-troubleshooting" },
          { label: "🔋 Battery Storage Issues", action: "chat", response: "battery-troubleshooting" },
          { label: "📊 Monitoring System Problems", action: "chat", response: "monitoring-troubleshooting" },
          { label: "🔍 Browse Solar Products", action: "page", page: "products" },
          { label: "📋 Schedule Solar Inspection", action: "external", url: "mailto:info.powerton@gmail.com?subject=Solar System Inspection" },
          { label: "🔙 Back to Troubleshooting Menu", action: "chat", response: "troubleshooting" }
        ]
      };
    }

    // Testimonials and achievements
    if (input === 'client-testimonials') {
      return {
        message: "Our customers love working with us! Anand Awasthi from West Bengal says: 'Powerton Engineering made the process seamless and easy.' Sanjay Patil from UP states: 'I would not hesitate to recommend them to any of my friends.' We've successfully served 50+ major clients across India.",
        options: [
          { label: "🏆 Our Major Clients", action: "chat", response: "major-clients" },
          { label: "📊 Success Stories", action: "page", page: "projects" },
          { label: "🎯 Our Success Stories", action: "page", page: "projects" },
          { label: "📞 Become Our Client", action: "external", url: "tel:+91-94627-71662" },
          { label: "📧 Get in Touch", action: "external", url: "mailto:info.powerton@gmail.com" },
          { label: "🔙 Back to Company Menu", action: "chat", response: "company-info" }
        ]
      };
    }

    if (input === 'major-clients') {
      return {
        message: "We're proud to work with industry leaders! Our clients include Thermax, Motherson, Praj Industries, SCI Group, Agribio Ltd, DLS Group, Ankur Scientific, and many more. Each partnership strengthens our expertise and commitment to excellence.",
        options: [
          { label: "🏭 Manufacturing Clients", action: "page", page: "about" },
          { label: "⚡ Power Industry Clients", action: "page", page: "about" },
          { label: "⚗️ Chemical Industry Clients", action: "page", page: "about" },
          { label: "📈 See Project Portfolio", action: "page", page: "projects" },
          { label: "🤝 Partner With Us", action: "external", url: "mailto:info.powerton@gmail.com?subject=Partnership Opportunity" },
          { label: "🔙 Back to Company Menu", action: "chat", response: "company-info" }
        ]
      };
    }

    // Specific troubleshooting responses
    if (input === 'power-supply-help') {
      return {
        message: "Power supply issues often stem from voltage fluctuations, load imbalances, or component aging. Check for proper voltage regulation, adequate current capacity, and thermal management. Our power supplies meet IEC 60950 safety standards. Need a replacement or upgrade?",
        options: [
          { label: "⚡ View Power Supply Products", action: "page", page: "products" },
          { label: "📋 Request Quote for Power Supply", action: "external", url: "mailto:info.powerton@gmail.com?subject=Power Supply Quote Request" },
          { label: "🔄 Back to Electrical Help", action: "chat", response: "electrical-troubleshooting" },
          { label: "📞 Emergency Technical Support", action: "external", url: "tel:+91-94627-71662" }
        ]
      };
    }

    if (input === 'temperature-sensor-help') {
      return {
        message: "Temperature sensor issues include drift, response lag, or environmental interference. Check for proper calibration (±0.1°C accuracy), adequate thermal coupling, and EMI shielding. Our sensors comply with ASTM E1137 standards. What's the specific temperature range and application?",
        options: [
          { label: "🌡️ Browse Temperature Sensors", action: "page", page: "products" },
          { label: "🔧 Request Calibration Service", action: "external", url: "mailto:info.powerton@gmail.com?subject=Temperature Sensor Calibration" },
          { label: "🔄 Back to Sensor Help", action: "chat", response: "sensor-troubleshooting" },
          { label: "📞 Speak with Sensor Expert", action: "external", url: "tel:+91-94627-71662" }
        ]
      };
    }

    if (input === 'plc-troubleshooting') {
      return {
        message: "PLC issues range from programming errors to hardware failures. Check I/O status, communication links, and program logic. Our systems follow IEC 61131-3 standards for programming languages and IEC 61508 for functional safety. What specific PLC problem are you experiencing?",
        options: [
          { label: "🖥️ View PLC Solutions", action: "page", page: "products" },
          { label: "💻 Request Programming Service", action: "external", url: "mailto:info.powerton@gmail.com?subject=PLC Programming Service" },
          { label: "🔄 Back to Control Help", action: "chat", response: "control-troubleshooting" },
          { label: "🚨 Emergency PLC Support", action: "external", url: "tel:+91-94627-71662" }
        ]
      };
    }

    if (input === 'solar-performance-help') {
      return {
        message: "Low solar generation can result from panel soiling, shading, inverter issues, or degradation. Check panel cleanliness, system monitoring, and compare against expected performance (typically 80% after 25 years). Our systems meet IEC 61215 and IEC 61730 standards. What's your current performance vs expected?",
        options: [
          { label: "☀️ Solar System Products", action: "page", page: "products" },
          { label: "📊 Request Performance Analysis", action: "external", url: "mailto:info.powerton@gmail.com?subject=Solar Performance Analysis" },
          { label: "🔄 Back to Solar Help", action: "chat", response: "solar-troubleshooting" },
          { label: "🔧 Schedule Maintenance", action: "external", url: "tel:+91-94627-71662" }
        ]
      };
    }

    if (input === 'selection-help') {
      return {
        message: "Choosing the right equipment is crucial for project success! I can help you navigate technical specifications, compatibility requirements, and industry standards to find the perfect solution. What type of equipment or system are you trying to select?",
        options: [
          { label: "🌡️ Sensor & Measurement Selection", action: "chat", response: "sensor-selection-help" },
          { label: "⚡ Electrical Component Selection", action: "chat", response: "electrical-selection-help" },
          { label: "🖥️ Control System Selection", action: "chat", response: "control-selection-help" },
          { label: "☀️ Solar System Design", action: "chat", response: "solar-selection-help" },
          { label: "🔍 Browse All Products", action: "page", page: "products" },
          { label: "📞 Consultation Call", action: "external", url: "tel:+91-94627-71662" }
        ]
      };
    }

    // Natural language product searches with standards
    if (input.includes('sensor') || input.includes('temperature') || input.includes('pressure') || input.includes('measurement')) {
      return {
        message: "I can help you find the right sensors! We offer precision instruments with high accuracy: temperature (-40°C to +125°C), pressure (vacuum to 7500 PSI), flow, and level measurement. All certified to ASTM, ISA, and IEC standards for industrial applications. Visit our products page for detailed specifications.",
        options: [
          { label: "🌡️ Temperature Measurement", action: "page", page: "products" },
          { label: "📊 Pressure Measurement", action: "page", page: "products" },
          { label: "🔄 Flow & Level Measurement", action: "page", page: "products" },
          { label: "📋 Request Technical Quote", action: "external", url: "mailto:info.powerton@gmail.com?subject=Sensor Technical Quote" },
          { label: "📞 Speak with Expert", action: "external", url: "tel:+91-94627-71662" }
        ]
      };
    }

    if (input.includes('plc') || input.includes('automation') || input.includes('control') || input.includes('scada')) {
      return {
        message: "Automation is our specialty! Our control systems feature PLCs with sub-millisecond response times, SCADA for real-time monitoring, and DCS for complex processes. All systems comply with IEC 61131-3 programming standards and IEC 61508 safety requirements. Visit our products page to explore detailed specifications and get a custom quote.",
        options: [
          { label: "🖥️ PLC & Control Systems", action: "page", page: "products" },
          { label: "📊 SCADA & HMI Solutions", action: "page", page: "products" },
          { label: "🌐 Complete Automation Package", action: "page", page: "products" },
          { label: "📋 Request Custom Quote", action: "external", url: "mailto:info.powerton@gmail.com?subject=Custom Automation Quote" },
          { label: "📞 Technical Consultation", action: "external", url: "tel:+91-94627-71662" }
        ]
      };
    }

    if (input.includes('solar') || input.includes('renewable') || input.includes('green energy') || input.includes('sustainable')) {
      return {
        message: "Solar energy is the future! We provide complete EPC services for projects from 1kW to 10MW+, all meeting CEA technical standards and MNRE guidelines. Our solutions include high-efficiency panels, smart inverters, battery storage, and monitoring systems. Visit our products page for detailed specifications and request a customized quote.",
        options: [
          { label: "☀️ Complete Solar Solutions", action: "page", page: "products" },
          { label: "🔋 Solar + Battery Systems", action: "page", page: "products" },
          { label: "🔋 Energy Storage", action: "page", page: "product-solar-batteries-energy-storage" },
          { label: "📊 Our Solar Projects", action: "page", page: "projects" },
          { label: "💰 Get Solar Quote", action: "external", url: "mailto:info.powerton@gmail.com?subject=Solar Project Quote" },
          { label: "🌟 Solar EPC Services", action: "page", page: "services" }
        ]
      };
    }

    if (input.includes('pump') || input.includes('motor') || input.includes('bldc') || input.includes('valve')) {
      return {
        message: "Excellent choice! Our mechanical solutions include high-efficiency BLDC motors, centrifugal pumps, gear pumps, and automated valve systems meeting IE3/IE4 efficiency standards and API specifications. Visit our products page for detailed technical specifications and request a custom quote for your application.",
        options: [
          { label: "🔄 Motors & Drives", action: "page", page: "products" },
          { label: "💧 Pumps & Fluid Handling", action: "page", page: "products" },
          { label: "🔧 Valves & Actuators", action: "page", page: "products" },
          { label: "🛠️ Spare Parts & Service", action: "page", page: "services" },
          { label: "📋 Request Equipment Quote", action: "external", url: "mailto:info.powerton@gmail.com?subject=Motor Pump Equipment Quote" },
          { label: "📞 Technical Consultation", action: "external", url: "tel:+91-94627-71662" }
        ]
      };
    }

    if (input.includes('calibration') || input.includes('testing') || input.includes('maintenance') || input.includes('service')) {
      return {
        message: "Our service team is here to support you! We offer precision calibration, comprehensive testing, preventive maintenance, and 24/7 technical support to keep your systems running at peak performance.",
        options: [
          { label: "📏 Calibration Services", action: "page", page: "services" },
          { label: "🔧 Maintenance Programs", action: "page", page: "services" },
          { label: "⚡ Emergency Support", action: "external", url: "tel:+91-94627-71662" },
          { label: "📚 Training Programs", action: "page", page: "services" },
          { label: "💼 Service Contract", action: "external", url: "mailto:info.powerton@gmail.com?subject=Service Contract Inquiry" },
          { label: "🔍 All Services", action: "page", page: "services" }
        ]
      };
    }

    // Contact and support queries
    if (input.includes('contact') || input.includes('phone') || input.includes('email') || input.includes('location') || input.includes('address')) {
      return {
        message: "I'm here to connect you with our team! We're located in Noida, Sector 6, and available Monday-Saturday (9 AM - 6 PM). For immediate assistance, call us or visit our office. We're always happy to help!",
        options: [
          { label: "📞 Call Now (+91-94627-71662)", action: "external", url: "tel:+91-94627-71662" },
          { label: "📧 Email Us", action: "external", url: "mailto:info.powerton@gmail.com" },
          { label: "📍 Visit Our Office", action: "external", url: "https://maps.app.goo.gl/jiap3sBYbM3r8Pn68" },
          { label: "📋 Contact Form", action: "page", page: "contact" },
          { label: "💼 Request Quote", action: "page", page: "quote" },
          { label: "⏰ Business Hours", action: "chat", response: "business-hours" }
        ]
      };
    }

    if (input.includes('quote') || input.includes('price') || input.includes('cost') || input.includes('estimate') || input.includes('budget')) {
      return {
        message: "I'd be happy to help you get a customized quote! Our pricing is competitive and transparent. For accurate pricing, we'll need to understand your specific requirements. Let's connect you with our sales team for a detailed discussion.",
        options: [
          { label: "📋 Request Detailed Quote", action: "page", page: "quote" },
          { label: "📞 Quick Phone Quote", action: "external", url: "tel:+91-94627-71662" },
          { label: "📧 Email Requirements", action: "external", url: "mailto:info.powerton@gmail.com?subject=Quote Request" },
          { label: "💰 Pricing Information", action: "chat", response: "pricing-info" },
          { label: "🎯 Custom Solution", action: "external", url: "mailto:info.powerton@gmail.com?subject=Custom Solution Request" }
        ]
      };
    }

    // Help and general assistance
    if (input.includes('help') || input.includes('assist') || input.includes('support') || input.includes('guidance')) {
      return {
        message: "I'm here to help you every step of the way! Whether you need product selection guidance, technical specifications, service support, or just want to learn more about our company, I'm at your service. What would you like assistance with?",
        options: [
          { label: "🔍 Find Products", action: "chat", response: "product-selection" },
          { label: "⚙️ Choose Services", action: "chat", response: "service-selection" },
          { label: "🔧 Technical Support", action: "chat", response: "troubleshooting" },
          { label: "📞 Talk to Expert", action: "external", url: "tel:+91-94627-71662" },
          { label: "🏢 About Our Company", action: "chat", response: "company-info" },
          { label: "📋 Get Started", action: "page", page: "contact" }
        ]
      };
    }

    // Additional specific responses
    if (input === 'business-hours') {
      return {
        message: "We're here when you need us! Our business hours are Monday to Saturday: 9:00 AM - 6:00 PM. We also provide emergency support on Sundays for critical situations. Located in Noida, Sector 6, F-25, F Block (nearest metro: Sector 15).",
        options: [
          { label: "📞 Call During Business Hours", action: "external", url: "tel:+91-94627-71662" },
          { label: "📧 Email Anytime", action: "external", url: "mailto:info.powerton@gmail.com" },
          { label: "🗺️ Visit Our Office", action: "external", url: "https://maps.app.goo.gl/jiap3sBYbM3r8Pn68" },
          { label: "⚡ Emergency Support", action: "external", url: "tel:+91-94627-71662" },
          { label: "📅 Schedule Meeting", action: "external", url: "mailto:info.powerton@gmail.com?subject=Meeting Request" }
        ]
      };
    }

    if (input === 'pricing-info') {
      return {
        message: "Our pricing is always competitive and transparent! We believe in providing value for money with no hidden costs. Pricing depends on specifications, quantity, and project scope. For the most accurate quote, our team will assess your specific requirements.",
        options: [
          { label: "📋 Get Detailed Quote", action: "page", page: "quote" },
          { label: "📞 Discuss Pricing", action: "external", url: "tel:+91-94627-71662" },
          { label: "📧 Email Requirements", action: "external", url: "mailto:info.powerton@gmail.com?subject=Pricing Inquiry" },
          { label: "💰 Volume Discounts", action: "external", url: "tel:+91-94627-71662" },
          { label: "🔄 Payment Options", action: "chat", response: "payment-options" }
        ]
      };
    }

    if (input === 'achievements') {
      return {
        message: "We're proud of our achievements! Over 500+ successful projects completed, 50+ major clients served, 15+ years of experience, and partnerships with industry leaders like Thermax, Motherson, and Praj Industries. Our 10MW solar plant project and pharmaceutical automation systems are among our flagship achievements.",
        options: [
          { label: "🏆 Major Projects", action: "page", page: "projects" },
          { label: "🤝 Our Clients", action: "chat", response: "major-clients" },
          { label: "📈 Success Stories", action: "page", page: "projects" },
          { label: "🎯 Why Choose Us", action: "chat", response: "why-choose-us" },
          { label: "📞 Discuss Partnership", action: "external", url: "tel:+91-94627-71662" },
          { label: "🔙 Back to Company Menu", action: "chat", response: "company-info" }
        ]
      };
    }

    // Additional response handlers for navigation flows
    if (input === 'main-menu') {
      return {
        message: "Welcome back to the main menu! I'm here to help you with any industrial automation needs. Whether you're looking for products, services, technical support, or company information, I'll guide you to the right solution. What can I help you with?",
        options: [
          { label: "🔍 Find the Right Product", action: "chat", response: "product-selection" },
          { label: "⚙️ Choose a Service", action: "chat", response: "service-selection" },
          { label: "🔧 Technical Troubleshooting", action: "chat", response: "troubleshooting" },
          { label: "💼 About Our Company", action: "chat", response: "company-info" },
          { label: "📞 Speak with Expert", action: "external", url: "tel:+91-94627-71662" },
          { label: "📧 Send Us a Message", action: "external", url: "mailto:info.powerton@gmail.com" }
        ]
      };
    }

    if (input === 'quote-tips') {
      return {
        message: "Here are some tips for getting the best quote: 1) Provide detailed specifications and requirements, 2) Mention quantity needed, 3) Include project timeline, 4) Specify installation location, 5) List any special requirements or certifications needed. The more details you provide, the more accurate our quote will be!",
        options: [
          { label: "📋 Request Detailed Quote", action: "page", page: "quote" },
          { label: "📞 Discuss Requirements", action: "external", url: "tel:+91-94627-71662" },
          { label: "📧 Email Specifications", action: "external", url: "mailto:info.powerton@gmail.com?subject=Detailed Quote Request" },
          { label: "💰 Pricing Information", action: "chat", response: "pricing-info" },
          { label: "🏠 Back to Main Menu", action: "chat", response: "main-menu" }
        ]
      };
    }

    if (input === 'urgent-support') {
      return {
        message: "Urgent matters include: equipment failures affecting production, safety-critical issues, emergency breakdowns, installation deadlines, and system malfunctions. For these situations, call us immediately at +91-94627-71662. We provide 24/7 emergency support for critical situations.",
        options: [
          { label: "📞 Emergency Call Now", action: "external", url: "tel:+91-94627-71662" },
          { label: "⚡ Emergency Email", action: "external", url: "mailto:info.powerton@gmail.com?subject=URGENT - Emergency Support Required" },
          { label: "🛠️ Maintenance Support", action: "chat", response: "maintenance-service" },
          { label: "⏰ Regular Business Hours", action: "chat", response: "business-hours" },
          { label: "🏠 Back to Main Menu", action: "chat", response: "main-menu" }
        ]
      };
    }

    if (input === 'product-comparison') {
      return {
        message: "I can help you compare products! Our extensive range includes sensors, automation systems, electrical components, and solar products. Tell me which specific products you're comparing or what application you need them for, and I'll guide you to the best options.",
        options: [
          { label: "🌡️ Compare Sensors", action: "chat", response: "sensors-category" },
          { label: "⚙️ Compare Automation Systems", action: "chat", response: "automation-category" },
          { label: "⚡ Compare Electrical Components", action: "chat", response: "electrical-category" },
          { label: "☀️ Compare Solar Products", action: "chat", response: "solar-category" },
          { label: "📞 Expert Comparison Help", action: "external", url: "tel:+91-94627-71662" },
          { label: "🏠 Back to Main Menu", action: "chat", response: "main-menu" }
        ]
      };
    }

    // Default intelligent response
    return {
      message: "Thank you for reaching out! I'm here to help you find the perfect industrial automation solution. At Powerton Engineering, we believe every customer deserves personalized attention and expert guidance. What specific challenge or requirement can I help you with today?",
      options: [
        { label: "🔍 Find the Right Product", action: "chat", response: "product-selection" },
        { label: "⚙️ Explore Our Services", action: "chat", response: "service-selection" },
        { label: "🔧 Technical Support", action: "chat", response: "troubleshooting" },
        { label: "💼 About Powerton Engineering", action: "chat", response: "company-info" },
        { label: "📞 Speak with Expert", action: "external", url: "tel:+91-94627-71662" },
        { label: "📧 Send Us a Message", action: "external", url: "mailto:info.powerton@gmail.com" }
      ]
    };
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    addMessage(inputValue, 'user');
    const response = generateResponse(inputValue);
    addBotMessage(response);
    setInputValue("");
  };

  // Generate contextual response based on navigation action
  const generateNavigationResponse = (option: NavigationOption): ChatbotResponse => {
    if (option.action === 'page') {
      const pageResponses: { [key: string]: ChatbotResponse } = {
        'products': {
          message: "Perfect! I've taken you to our products page where you can explore our extensive range of industrial automation solutions. You'll find detailed specifications, images, and technical data for each product category. Need help finding something specific or have questions about any product?",
          options: [
            { label: "🔍 Find Specific Product", action: "chat", response: "product-selection" },
            { label: "💰 Get Product Quote", action: "external", url: "mailto:info.powerton@gmail.com?subject=Product Quote Request" },
            { label: "📞 Technical Consultation", action: "external", url: "tel:+91-94627-71662" },
            { label: "📋 Product Comparison", action: "chat", response: "product-comparison" },
            { label: "🏠 Back to Main Menu", action: "chat", response: "main-menu" }
          ]
        },
        'services': {
          message: "Excellent choice! Our services page showcases our comprehensive support offerings from installation to maintenance. We're your complete engineering partner for the entire project lifecycle. What type of service support are you looking for?",
          options: [
            { label: "🔧 Installation Services", action: "chat", response: "installation-service" },
            { label: "🛠️ Maintenance Programs", action: "chat", response: "maintenance-service" },
            { label: "📏 Calibration Services", action: "chat", response: "calibration-service" },
            { label: "📋 Service Quote", action: "external", url: "mailto:info.powerton@gmail.com?subject=Service Quote Request" },
            { label: "🏠 Back to Main Menu", action: "chat", response: "main-menu" }
          ]
        },
        'contact': {
          message: "Great! The contact page has all our details including office location, phone numbers, and contact form. We're based in Noida and available Monday-Saturday. Feel free to reach out anytime! Is there anything specific you'd like to discuss with our team?",
          options: [
            { label: "📞 Call Now", action: "external", url: "tel:+91-94627-71662" },
            { label: "📧 Send Email", action: "external", url: "mailto:info.powerton@gmail.com" },
            { label: "📍 Visit Office", action: "external", url: "https://maps.app.goo.gl/jiap3sBYbM3r8Pn68" },
            { label: "⏰ Business Hours", action: "chat", response: "business-hours" },
            { label: "🏠 Back to Main Menu", action: "chat", response: "main-menu" }
          ]
        },
        'about': {
          message: "Wonderful! Our about page tells the complete story of Powerton Engineering - our journey, achievements, team, and values. With 15+ years of experience and 500+ successful projects, we're proud of our engineering excellence. Want to know more about any specific aspect?",
          options: [
            { label: "🏆 Our Achievements", action: "chat", response: "achievements" },
            { label: "🤝 Major Clients", action: "chat", response: "major-clients" },
            { label: "👥 Meet Our Team", action: "chat", response: "team-info" },
            { label: "📞 Connect with Leadership", action: "external", url: "tel:+91-94627-71662" },
            { label: "🏠 Back to Main Menu", action: "chat", response: "main-menu" }
          ]
        },
        'projects': {
          message: "Fantastic! Our projects page showcases our portfolio of successful implementations across various industries. From 10MW solar plants to pharmaceutical automation systems, each project demonstrates our technical expertise. Interested in a similar project?",
          options: [
            { label: "💡 Discuss Similar Project", action: "external", url: "mailto:info.powerton@gmail.com?subject=Project Discussion" },
            { label: "📋 Project Quote", action: "external", url: "tel:+91-94627-71662" },
            { label: "🏭 Industry Solutions", action: "chat", response: "industry-solutions" },
            { label: "🎯 Custom Engineering", action: "chat", response: "custom-solutions" },
            { label: "🏠 Back to Main Menu", action: "chat", response: "main-menu" }
          ]
        },
        'quote': {
          message: "Perfect! Our quote page will help you get a detailed proposal tailored to your specific requirements. Our team will analyze your needs and provide competitive pricing with transparent terms. What type of solution are you looking to quote?",
          options: [
            { label: "📋 Product Quote", action: "chat", response: "product-quote" },
            { label: "⚙️ Service Quote", action: "chat", response: "service-quote" },
            { label: "🏗️ Project Quote", action: "chat", response: "project-quote" },
            { label: "📞 Quick Phone Quote", action: "external", url: "tel:+91-94627-71662" },
            { label: "🏠 Back to Main Menu", action: "chat", response: "main-menu" }
          ]
        }
      };

      return pageResponses[option.page || ''] || {
        message: "I've directed you to the requested page. You can find all the relevant information there. Feel free to explore and let me know if you need any assistance or have questions about what you find!",
        options: [
          { label: "❓ I Have Questions", action: "chat", response: "help" },
          { label: "📞 Talk to Expert", action: "external", url: "tel:+91-94627-71662" },
          { label: "🏠 Back to Main Menu", action: "chat", response: "main-menu" }
        ]
      };
    }

    if (option.action === 'external') {
      if (option.url?.startsWith('tel:')) {
        return {
          message: "I've initiated the call for you! Our expert team is standing by to provide immediate assistance. If the call doesn't connect, you can also reach us via email or visit our office. How else can I help you today?",
          options: [
            { label: "📧 Send Email Instead", action: "external", url: "mailto:info.powerton@gmail.com" },
            { label: "📍 Visit Our Office", action: "external", url: "https://maps.app.goo.gl/jiap3sBYbM3r8Pn68" },
            { label: "⏰ Check Business Hours", action: "chat", response: "business-hours" },
            { label: "💬 Continue Chat Support", action: "chat", response: "help" },
            { label: "🏠 Back to Main Menu", action: "chat", response: "main-menu" }
          ]
        };
      } else if (option.url?.startsWith('mailto:')) {
        return {
          message: "I've opened your email client with our address pre-filled! Please describe your requirements in detail, and our team will respond within 24 hours. For urgent matters, calling us directly is faster. What else can I assist you with?",
          options: [
            { label: "📞 Call for Urgent Matters", action: "external", url: "tel:+91-94627-71662" },
            { label: "📋 Quote Request Tips", action: "chat", response: "quote-tips" },
            { label: "⚡ What's Considered Urgent", action: "chat", response: "urgent-support" },
            { label: "💬 Continue Chat Support", action: "chat", response: "help" },
            { label: "🏠 Back to Main Menu", action: "chat", response: "main-menu" }
          ]
        };
      } else {
        return {
          message: "I've opened the external resource for you! You can explore the additional information there. When you're ready to continue our conversation or need further assistance, I'm here to help. What would you like to do next?",
          options: [
            { label: "💬 Continue Our Discussion", action: "chat", response: "help" },
            { label: "📞 Speak with Expert", action: "external", url: "tel:+91-94627-71662" },
            { label: "📧 Send Us Details", action: "external", url: "mailto:info.powerton@gmail.com" },
            { label: "🏠 Back to Main Menu", action: "chat", response: "main-menu" }
          ]
        };
      }
    }

    // Default response for other actions
    return {
      message: "Action completed! I'm here to continue assisting you with any questions or requirements you might have. What would you like to explore next?",
      options: [
        { label: "🔍 Find Products", action: "chat", response: "product-selection" },
        { label: "⚙️ Explore Services", action: "chat", response: "service-selection" },
        { label: "💬 Ask Questions", action: "chat", response: "help" },
        { label: "🏠 Main Menu", action: "chat", response: "main-menu" }
      ]
    };
  };

  const handleOptionClick = (option: NavigationOption) => {
    // Clear the options first
    setLastBotOptions([]);
    setLastBotMessageId(null);
    
    // Add user message showing what they clicked
    addMessage(option.label, 'user');
    
    // Generate and add bot response before performing navigation
    if (option.action === 'page' || option.action === 'external') {
      const response = generateNavigationResponse(option);
      addBotMessage(response);
    }
    
    // Perform the action with delay to allow bot response to appear
    setTimeout(() => {
      if (option.action === 'navigate' && option.target) {
        handleNavigation(option.target);
      } else if (option.action === 'page' && option.page) {
        handlePageNavigation(option.page);
      } else if (option.action === 'external' && option.url) {
        window.open(option.url, option.url.startsWith('tel:') || option.url.startsWith('mailto:') ? '_self' : '_blank');
        setIsOpen(false);
      } else if (option.action === 'chat' && option.response) {
        const response = generateResponse(option.response);
        addBotMessage(response);
      }
    }, 1200); // Small delay to ensure bot response appears first
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2 }}
      >
        <Button
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();
            setIsOpen(prev => !prev);
          }}
          className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg"
          aria-label="Toggle navigation assistant"
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
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
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
            className="fixed right-4 left-4 sm:left-auto sm:right-6 z-40 w-auto sm:w-80 md:w-96 max-w-none"
            style={{ 
              top: `${headerHeight + 16}px`, 
              bottom: '88px',
              height: `calc(100vh - ${headerHeight + 16}px - 88px)`
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
                  <span className="flex-1 text-center">Engineering Advisor</span>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
                {/* Messages Area */}
                <div ref={messagesContainerRef}
                     className="flex-1 overflow-y-scroll p-4 space-y-4 min-h-0"
                     style={{ 
                       scrollBehavior: 'smooth',
                       height: '0px', // Force flex-1 to work with overflow
                       flexGrow: 1,
                       scrollbarWidth: 'thin', // For Firefox
                       scrollbarColor: '#888 transparent' // For Firefox
                     }}>
                  {messages.map((message) => (
                    <div key={message.id}>
                      <div
                        className={`flex gap-2 ${
                          message.sender === 'user' ? 'justify-end' : 'justify-start'
                        }`}
                      >
                        {message.sender === 'bot' && (
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <Bot className="w-4 h-4 text-primary" />
                          </div>
                        )}
                        <div
                          className={`max-w-[75%] p-3 rounded-lg text-sm ${
                            message.sender === 'user'
                              ? 'bg-primary text-primary-foreground ml-auto'
                              : 'bg-muted text-foreground dark:text-gray-200'
                          }`}
                        >
                          {message.text}
                        </div>
                        {message.sender === 'user' && (
                          <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <User className="w-4 h-4 text-secondary" />
                          </div>
                        )}
                      </div>
                      
                      {/* Options for this specific bot message */}
                      {message.sender === 'bot' && lastBotMessageId === message.id && lastBotOptions.length > 0 && !isTyping && (
                        <div className="ml-10 mt-2 flex flex-wrap gap-2">
                          {lastBotOptions.map((option, index) => (
                            <Button
                              key={index}
                              onClick={() => handleOptionClick(option)}
                              variant="outline"
                              size="sm"
                              className="justify-start h-auto py-2 px-3 text-left whitespace-normal w-fit min-w-0 border-gray-300 dark:border-gray-600 dark:hover:border-gray-500"
                            >
                              <span className="text-sm">{option.label}</span>
                              {option.action === 'external' && (
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
                          <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                          <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                          <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
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
                      placeholder="Ask me about products, services, or technical help..."
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