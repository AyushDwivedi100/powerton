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
  action: 'navigate' | 'external' | 'chat';
  target?: string;
  url?: string;
  response?: string;
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

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle scroll management when chatbot opens/closes
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
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
          message: "Hi! I'm your website navigation assistant. I can help you quickly find and navigate to different sections of our website. What would you like to explore?",
          options: [
            { label: "🏠 Go to Home", action: "navigate", target: "top" },
            { label: "⚙️ View Services", action: "navigate", target: "services" },
            { label: "📦 Browse Products", action: "navigate", target: "products" },
            { label: "📞 Contact Us", action: "navigate", target: "contact" }
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
  };

  const addBotMessage = (response: ChatbotResponse) => {
    setIsTyping(true);
    setTimeout(() => {
      addMessage(response.message, 'bot');
      setIsTyping(false);
      
      // Store the options for the last bot message
      if (response.options) {
        setLastBotOptions(response.options);
      }
    }, 1000);
  };

  const [lastBotOptions, setLastBotOptions] = useState<NavigationOption[]>([]);

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

  const generateResponse = (userInput: string): ChatbotResponse => {
    const input = userInput.toLowerCase();

    // Home/Main page requests
    if (input.includes('home') || input.includes('main') || input.includes('start')) {
      return {
        message: "I'll take you to the home page where you can see our company overview and featured content.",
        options: [
          { label: "🏠 Go to Home", action: "navigate", target: "top" },
          { label: "ℹ️ Learn About Us", action: "navigate", target: "about" },
          { label: "⚙️ View Services", action: "navigate", target: "services" },
          { label: "📞 Contact Info", action: "navigate", target: "contact" }
        ]
      };
    }

    // Services requests
    if (input.includes('service') || input.includes('what you do') || input.includes('capabilities')) {
      return {
        message: "Perfect! I can take you directly to our services section where you'll find detailed information about our industrial automation solutions.",
        options: [
          { label: "⚙️ View All Services", action: "navigate", target: "services" },
          { label: "📦 See Our Products", action: "navigate", target: "products" },
          { label: "💼 Request a Quote", action: "external", url: "mailto:info.powerton@gmail.com?subject=Service Quote Request" },
          { label: "📞 Call for Details", action: "external", url: "tel:+91-94627-71662" }
        ]
      };
    }

    // Products requests
    if (input.includes('product') || input.includes('catalog') || input.includes('equipment')) {
      return {
        message: "I'll navigate you to our products section where you can browse our complete catalog of industrial automation equipment and control panels.",
        options: [
          { label: "📦 Browse Products", action: "navigate", target: "products" },
          { label: "⚙️ Related Services", action: "navigate", target: "services" },
          { label: "📋 Technical Specs", action: "external", url: "mailto:info.powerton@gmail.com?subject=Product Specifications Request" },
          { label: "💰 Get Pricing", action: "external", url: "tel:+91-94627-71662" }
        ]
      };
    }

    // About/Company requests
    if (input.includes('about') || input.includes('company') || input.includes('who are you') || input.includes('team')) {
      return {
        message: "I'll take you to our About section where you can learn about our company history, mission, and the experienced team behind Powerton Engineering.",
        options: [
          { label: "ℹ️ About Our Company", action: "navigate", target: "about" },
          { label: "📊 View Our Projects", action: "navigate", target: "projects" },
          { label: "⚙️ Our Services", action: "navigate", target: "services" },
          { label: "📞 Meet the Team", action: "navigate", target: "contact" }
        ]
      };
    }

    // Projects/Portfolio requests
    if (input.includes('project') || input.includes('portfolio') || input.includes('work') || input.includes('case study')) {
      return {
        message: "I'll navigate you to our projects portfolio where you can see examples of our completed work and success stories across various industries.",
        options: [
          { label: "📊 View All Projects", action: "navigate", target: "projects" },
          { label: "🏭 Industry Solutions", action: "navigate", target: "services" },
          { label: "💼 Start Your Project", action: "external", url: "mailto:info.powerton@gmail.com?subject=New Project Inquiry" },
          { label: "📞 Discuss Project", action: "external", url: "tel:+91-94627-71662" }
        ]
      };
    }

    // Contact requests
    if (input.includes('contact') || input.includes('phone') || input.includes('email') || input.includes('location')) {
      return {
        message: "I can help you get in touch with us! Here are your options for contacting Powerton Engineering:",
        options: [
          { label: "📞 Call Now", action: "external", url: "tel:+91-94627-71662" },
          { label: "📧 Send Email", action: "external", url: "mailto:info.powerton@gmail.com" },
          { label: "🗺️ Get Directions", action: "external", url: "https://maps.app.goo.gl/jiap3sBYbM3r8Pn68" },
          { label: "📋 Contact Form", action: "navigate", target: "contact" }
        ]
      };
    }

    // Quote/Pricing requests
    if (input.includes('quote') || input.includes('price') || input.includes('cost') || input.includes('estimate')) {
      return {
        message: "I can help you get a quote! You can either fill out our contact form or reach out directly for faster service.",
        options: [
          { label: "📋 Contact Form", action: "navigate", target: "contact" },
          { label: "📞 Call for Quote", action: "external", url: "tel:+91-94627-71662" },
          { label: "📧 Email Quote Request", action: "external", url: "mailto:info.powerton@gmail.com?subject=Quote Request" },
          { label: "⚙️ View Our Services", action: "navigate", target: "services" }
        ]
      };
    }

    // General help/navigation
    if (input.includes('help') || input.includes('navigate') || input.includes('find') || input.includes('where')) {
      return {
        message: "I'm here to help you navigate our website! Choose where you'd like to go:",
        options: [
          { label: "🏠 Home Page", action: "navigate", target: "top" },
          { label: "⚙️ Our Services", action: "navigate", target: "services" },
          { label: "📦 Products", action: "navigate", target: "products" },
          { label: "📊 Projects", action: "navigate", target: "projects" },
          { label: "ℹ️ About Us", action: "navigate", target: "about" },
          { label: "📞 Contact", action: "navigate", target: "contact" }
        ]
      };
    }

    // Default response
    return {
      message: "I'm here to help you navigate our website and find the information you need. What would you like to explore?",
      options: [
        { label: "⚙️ Explore Services", action: "navigate", target: "services" },
        { label: "📦 Browse Products", action: "navigate", target: "products" },
        { label: "📊 View Projects", action: "navigate", target: "projects" },
        { label: "📞 Get in Touch", action: "navigate", target: "contact" }
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
    // Add user message showing what they clicked
    addMessage(option.label, 'user');
    
    // Perform the action
    if (option.action === 'navigate' && option.target) {
      handleNavigation(option.target);
    } else if (option.action === 'external' && option.url) {
      window.open(option.url, option.url.startsWith('tel:') || option.url.startsWith('mailto:') ? '_self' : '_blank');
      setIsOpen(false);
    } else if (option.action === 'chat' && option.response) {
      addBotMessage({ message: option.response });
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
            className="fixed bottom-24 right-6 z-40 w-80 sm:w-96 max-h-[calc(100vh-200px)]"
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="shadow-2xl border-0 h-full flex flex-col">
              <CardHeader className="bg-primary text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Bot className="w-5 h-5" />
                  Website Navigator
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col p-0">
                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-80">
                  {messages.map((message) => (
                    <div
                      key={message.id}
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

                {/* Action Options */}
                {lastBotOptions.length > 0 && !isTyping && (
                  <div className="p-3 border-t bg-muted/20">
                    <div className="grid grid-cols-1 gap-2">
                      {lastBotOptions.map((option, index) => (
                        <Button
                          key={index}
                          onClick={() => handleOptionClick(option)}
                          variant="outline"
                          size="sm"
                          className="justify-start h-auto py-2 px-3 text-left whitespace-normal"
                        >
                          <span className="text-xs">{option.label}</span>
                          {option.action === 'external' && (
                            <ExternalLink className="w-3 h-3 ml-auto flex-shrink-0" />
                          )}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input Area */}
                <div className="p-3 border-t">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Ask me anything about the website..."
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