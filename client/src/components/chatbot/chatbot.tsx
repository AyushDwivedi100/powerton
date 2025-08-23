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
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    // Add a small delay to ensure the DOM has updated
    setTimeout(() => {
      if (messagesContainerRef.current) {
        messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
      }
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, 100);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Measure header height dynamically
  useEffect(() => {
    const measureHeaderHeight = () => {
      const header = document.querySelector('header') || document.querySelector('[role="banner"]');
      if (header) {
        setHeaderHeight(header.getBoundingClientRect().height);
      }
    };

    measureHeaderHeight();
    window.addEventListener('resize', measureHeaderHeight);
    window.addEventListener('scroll', measureHeaderHeight);

    return () => {
      window.removeEventListener('resize', measureHeaderHeight);
      window.removeEventListener('scroll', measureHeaderHeight);
    };
  }, []);

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

  // Initialize with welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage({
          message: "Hello! I'm your personal engineering advisor from Powerton Engineering. I'm here to help you find exactly what you need for your industrial automation project. Whether you're looking for specific products, services, or technical guidance, I'll make sure you get the perfect solution. What can I help you with today?",
          options: [
            { label: "🔍 Find the Right Product", action: "chat", response: "product-selection" },
            { label: "⚙️ Choose a Service", action: "chat", response: "service-selection" },
            { label: "🏭 Industry Solutions", action: "chat", response: "industry-solutions" },
            { label: "💼 About Our Company", action: "chat", response: "company-info" }
          ]
        });
      }, 500);
    }
  }, [isOpen, messages.length]);

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
    }, 1000);
  };

  const [lastBotOptions, setLastBotOptions] = useState<NavigationOption[]>([]);
  const [lastBotMessageId, setLastBotMessageId] = useState<string | null>(null);
  const [headerHeight, setHeaderHeight] = useState(80);

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
          { label: "📋 View All Services", action: "page", page: "services" }
        ]
      };
    }

    if (input === 'industry-solutions') {
      return {
        message: "We serve diverse industries with tailored solutions. Which industry matches your requirements?",
        options: [
          { label: "🛢️ Oil & Gas", action: "chat", response: "oil-gas-industry" },
          { label: "⚗️ Chemical & Petrochemical", action: "chat", response: "chemical-industry" },
          { label: "⚡ Power Generation", action: "chat", response: "power-industry" },
          { label: "💧 Water Treatment", action: "chat", response: "water-industry" },
          { label: "🍕 Food & Beverage", action: "chat", response: "food-industry" },
          { label: "💊 Pharmaceutical", action: "chat", response: "pharma-industry" },
          { label: "📊 See Our Projects", action: "page", page: "projects" }
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
          { label: "📞 Contact Us", action: "external", url: "tel:+91-94627-71662" }
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
          { label: "📧 Get Technical Specs", action: "external", url: "mailto:info.powerton@gmail.com?subject=Sensor Technical Specifications" }
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
          { label: "💰 Get Pricing", action: "external", url: "tel:+91-94627-71662" }
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
          { label: "🎯 Let's Discuss Your Project", action: "external", url: "mailto:info.powerton@gmail.com?subject=Automation Project Discussion" }
        ]
      };
    }

    if (input === 'solar-category') {
      return {
        message: "Fantastic! Solar energy is the future! We provide complete solar solutions from panels to inverters, batteries, and monitoring systems. Perfect for sustainable and cost-effective power generation.",
        options: [
          { label: "☀️ Solar Panels", action: "page", page: "product-solar-panels" },
          { label: "🔄 Solar Inverters", action: "page", page: "product-solar-inverters" },
          { label: "🔋 Battery Storage Systems", action: "page", page: "product-solar-batteries-energy-storage" },
          { label: "🏗️ Mounting Structures", action: "page", page: "product-mounting-structures-racking" },
          { label: "🎛️ Charge Controllers", action: "page", page: "product-solar-charge-controllers" },
          { label: "📋 Get Solar Quote", action: "external", url: "mailto:info.powerton@gmail.com?subject=Solar Project Quote Request" }
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
          { label: "📋 Safety Consultation", action: "external", url: "tel:+91-94627-71662" }
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

    // Industry-specific responses
    if (input === 'oil-gas-industry') {
      return {
        message: "Oil & Gas is one of our core specialties! We understand the critical nature of your operations and provide explosion-proof equipment, high-accuracy measurement instruments, and safety systems certified for hazardous environments.",
        options: [
          { label: "💥 Explosion-Proof Equipment", action: "page", page: "product-intrinsically-safe-equipment" },
          { label: "📊 Process Control Systems", action: "page", page: "product-controllers" },
          { label: "🛡️ Safety Shutdown Systems", action: "page", page: "product-safety-relays-switches" },
          { label: "🔍 Gas Analyzers", action: "page", page: "product-analyzers" },
          { label: "📈 View Oil & Gas Projects", action: "page", page: "projects" },
          { label: "💼 Discuss Your Project", action: "external", url: "mailto:info.powerton@gmail.com?subject=Oil Gas Project Discussion" }
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
          { label: "🎯 Industries We Serve", action: "chat", response: "industry-solutions" },
          { label: "📞 Become Our Client", action: "external", url: "tel:+91-94627-71662" },
          { label: "📧 Get in Touch", action: "external", url: "mailto:info.powerton@gmail.com" }
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
          { label: "🤝 Partner With Us", action: "external", url: "mailto:info.powerton@gmail.com?subject=Partnership Opportunity" }
        ]
      };
    }

    // Natural language product searches
    if (input.includes('sensor') || input.includes('temperature') || input.includes('pressure') || input.includes('measurement')) {
      return {
        message: "I can help you find the right sensors! We offer high-precision sensors for temperature (-40°C to +125°C), pressure (vacuum to 7500 PSI), flow, and level measurement. All with industry-leading accuracy and reliability.",
        options: [
          { label: "🌡️ Temperature Sensors", action: "page", page: "product-sensors" },
          { label: "📊 Pressure Transmitters", action: "page", page: "product-transmitters" },
          { label: "🔄 Flow Measurement", action: "page", page: "product-sensors" },
          { label: "📏 Level Sensors", action: "page", page: "product-sensors" },
          { label: "📧 Get Technical Specifications", action: "external", url: "mailto:info.powerton@gmail.com?subject=Sensor Technical Specifications" },
          { label: "☎️ Speak with Expert", action: "external", url: "tel:+91-94627-71662" }
        ]
      };
    }

    if (input.includes('plc') || input.includes('automation') || input.includes('control') || input.includes('scada')) {
      return {
        message: "Automation is our expertise! Our control systems include PLCs with sub-millisecond response times, SCADA for real-time monitoring, and DCS for complex process control. Perfect for optimizing your operations!",
        options: [
          { label: "🖥️ PLC Systems", action: "page", page: "product-plcs" },
          { label: "📊 SCADA Solutions", action: "page", page: "product-scada" },
          { label: "🌐 DCS Systems", action: "page", page: "product-dcs" },
          { label: "👥 HMI Interfaces", action: "page", page: "product-hmi" },
          { label: "🎯 Custom Automation Project", action: "external", url: "mailto:info.powerton@gmail.com?subject=Custom Automation Project" },
          { label: "📞 Technical Consultation", action: "external", url: "tel:+91-94627-71662" }
        ]
      };
    }

    if (input.includes('solar') || input.includes('renewable') || input.includes('green energy') || input.includes('sustainable')) {
      return {
        message: "Going solar is a smart decision! We provide complete EPC services for solar projects from 1kW to 10MW+. Our solutions include high-efficiency panels, smart inverters, battery storage, and comprehensive monitoring systems.",
        options: [
          { label: "☀️ Solar Panel Systems", action: "page", page: "product-solar-panels" },
          { label: "🔄 Solar Inverters", action: "page", page: "product-solar-inverters" },
          { label: "🔋 Energy Storage", action: "page", page: "product-solar-batteries-energy-storage" },
          { label: "📊 Our Solar Projects", action: "page", page: "projects" },
          { label: "💰 Get Solar Quote", action: "external", url: "mailto:info.powerton@gmail.com?subject=Solar Project Quote" },
          { label: "🌟 Solar EPC Services", action: "page", page: "services" }
        ]
      };
    }

    if (input.includes('pump') || input.includes('motor') || input.includes('bldc') || input.includes('valve')) {
      return {
        message: "Great choice! Our mechanical solutions include high-efficiency BLDC motors, centrifugal pumps, gear pumps, and automated valve systems. Perfect for fluid handling and processing applications.",
        options: [
          { label: "🔄 BLDC Motors", action: "page", page: "product-bldc" },
          { label: "💧 Centrifugal Pumps", action: "page", page: "product-centrifugal-pumps" },
          { label: "⚙️ Gear Pumps", action: "page", page: "product-gear-pumps" },
          { label: "🔧 Valve Systems", action: "page", page: "product-valves" },
          { label: "🛠️ Pump Spares", action: "page", page: "product-pump-parts-spares" },
          { label: "📞 Application Guidance", action: "external", url: "tel:+91-94627-71662" }
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
          { label: "🏭 Industry Solutions", action: "chat", response: "industry-solutions" },
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
          { label: "📞 Discuss Partnership", action: "external", url: "tel:+91-94627-71662" }
        ]
      };
    }

    // Default intelligent response
    return {
      message: "Thank you for reaching out! I'm here to help you find the perfect industrial automation solution. At Powerton Engineering, we believe every customer deserves personalized attention and expert guidance. What specific challenge or requirement can I help you with today?",
      options: [
        { label: "🔍 Find the Right Product", action: "chat", response: "product-selection" },
        { label: "⚙️ Explore Our Services", action: "chat", response: "service-selection" },
        { label: "🏭 Industry-Specific Solutions", action: "chat", response: "industry-solutions" },
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

  const handleOptionClick = (option: NavigationOption) => {
    // Clear the options first
    setLastBotOptions([]);
    setLastBotMessageId(null);
    
    // Add user message showing what they clicked
    addMessage(option.label, 'user');
    
    // Perform the action
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
            className="fixed right-4 left-4 sm:left-auto sm:right-6 z-40 w-full sm:w-80 md:w-96 max-w-sm sm:max-w-none"
            style={{ 
              top: `${headerHeight + 16}px`, 
              bottom: '5rem', 
              height: 'auto',
              maxHeight: `calc(100vh - ${headerHeight + 16}px - 5rem)`
            }}
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="shadow-2xl border-0 h-full flex flex-col overflow-hidden">
              <CardHeader className="bg-primary text-white rounded-t-lg py-4 px-4 flex-shrink-0">
                <CardTitle className="flex items-center justify-center gap-2 text-lg font-medium leading-none">
                  <Bot className="w-5 h-5 flex-shrink-0" />
                  <span className="flex-1 text-center">Engineering Advisor</span>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col p-0">
                {/* Messages Area */}
                <div ref={messagesContainerRef}
                     className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0 max-h-80 scroll-smooth"
                     style={{ scrollBehavior: 'smooth' }}>
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
                              : 'bg-muted text-muted-foreground'
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
                        <div className="ml-10 mt-2 space-y-1.5">
                          {lastBotOptions.map((option, index) => (
                            <Button
                              key={index}
                              onClick={() => handleOptionClick(option)}
                              variant="outline"
                              size="sm"
                              className="justify-start h-auto py-2 px-3 text-left whitespace-normal w-fit min-w-0"
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
                <div className="p-3 border-t">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Ask me about products, services, or technical help..."
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="flex-1"
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