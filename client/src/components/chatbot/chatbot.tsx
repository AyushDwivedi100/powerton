import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Message shape: { id, text, sender: 'user'|'bot', timestamp }
// ChatbotResponse shape: { message, suggestions? }

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatbotResponse {
  message: string;
  suggestions?: string[];
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

  // Store scroll position using useRef to persist across renders
  const scrollPositionRef = useRef(0);

  // Handle scroll management when chatbot opens/closes
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      scrollPositionRef.current = window.scrollY;
      
      // Prevent body scroll but keep current position visible
      document.body.style.overflow = 'hidden';
      
      return () => {
        // Restore scrolling
        document.body.style.overflow = '';
        
        // Don't restore scroll position automatically - let it stay where it is
        // This prevents the jarring jump back to original position
      };
    }
  }, [isOpen]);

  // Separate effect for click outside detection
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: Event) => {
      const target = event.target as Element;
      
      // Check if click is inside chatbot window
      if (chatWindowRef.current?.contains(target)) {
        return;
      }
      
      // Check if click is on toggle button or its children (more thorough check)
      const toggleButton = document.querySelector('[data-chatbot-toggle="true"]') as Element | null;
      if (toggleButton && (toggleButton === target || toggleButton.contains(target as Node))) {
        return;
      }
      
      // Check for any parent elements that might be the toggle button
      let currentElement: Element | null = target;
      while (currentElement && currentElement !== document.body) {
        if (currentElement.getAttribute('data-chatbot-toggle') === 'true') {
          return;
        }
        currentElement = currentElement.parentElement;
      }
      
      // Click is outside - close chatbot
      setIsOpen(false);
    };

    // Add small delay to prevent immediate triggering and ensure button click is processed first
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
          message: "Hi! I'm your website navigation assistant. I'm here to help you find exactly what you're looking for on our website. How can I guide you today?",
          suggestions: [
            "Show me your services",
            "Find contact information",
            "Browse product catalog",
            "See company projects"
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
    }, 1000);
  };

  const generateResponse = (userInput: string): ChatbotResponse => {
    const input = userInput.toLowerCase();

    // Home page navigation
    if (input.includes('home') || input.includes('main page') || input.includes('homepage')) {
      return {
        message: "🏠 **Home Page**\n\nThe home page gives you a complete overview of Powerton Engineering. Here you'll find:\n\n• Company introduction and mission\n• Featured services highlights\n• Latest projects showcase\n• Quick access to all main sections\n\nYou're likely already on the home page. Would you like me to guide you to a specific section?",
        suggestions: ["Go to Services", "View About Us", "See Our Projects", "Contact Information"]
      };
    }

    // Services page navigation
    if (input.includes('service') || input.includes('what you do') || input.includes('capabilities')) {
      return {
        message: "⚙️ **Services Section**\n\nTo explore our services, look for the 'Services' section on our website. You'll find detailed information about:\n\n• Industrial Automation Solutions\n• Process Control Systems\n• Electrical Panel Design & Manufacturing\n• SCADA & HMI Development\n• Instrumentation Services\n\nEach service has detailed descriptions, applications, and examples. Navigate to the Services section to learn more!",
        suggestions: ["Find Services Section", "About Process Automation", "Electrical Panels Info", "Request Quote"]
      };
    }

    // About page navigation
    if (input.includes('about') || input.includes('company') || input.includes('who are you') || input.includes('team')) {
      return {
        message: "📋 **About Us Section**\n\nTo learn about our company, head to the 'About' section where you'll discover:\n\n• Our company history and mission\n• Leadership team information\n• Company values and approach\n• Industry experience and expertise\n• Why choose Powerton Engineering\n\nThis section gives you a complete picture of who we are and what drives us!",
        suggestions: ["Find About Section", "Company History", "Meet Our Team", "Our Mission"]
      };
    }

    // Products page navigation
    if (input.includes('product') || input.includes('catalog') || input.includes('equipment') || input.includes('manufacture')) {
      return {
        message: "🔧 **Products Section**\n\nTo browse our product catalog, navigate to the 'Products' section. You'll find:\n\n• Control Panels & Switchgear\n• Motor Control Centers (MCC)\n• Distribution Boards\n• Automation Components\n• Custom Manufacturing Options\n\nEach product category includes specifications, applications, and imagery. Perfect for understanding our manufacturing capabilities!",
        suggestions: ["Browse Products", "Control Panels", "Motor Control Centers", "Custom Solutions"]
      };
    }

    // Projects/Portfolio navigation
    if (input.includes('project') || input.includes('portfolio') || input.includes('work') || input.includes('experience') || input.includes('case study')) {
      return {
        message: "📊 **Projects Portfolio**\n\nTo see our work examples, visit the 'Projects' section. Here you'll find:\n\n• Completed project showcases\n• Industry-specific case studies\n• Before/after project photos\n• Client testimonials\n• Project timelines and outcomes\n\nThis section demonstrates our practical experience across various industries!",
        suggestions: ["View All Projects", "Industry Projects", "Client Testimonials", "Project Gallery"]
      };
    }

    // Contact page navigation
    if (input.includes('contact') || input.includes('phone') || input.includes('email') || input.includes('address') || input.includes('location') || input.includes('reach')) {
      return {
        message: "📞 **Contact Information**\n\nTo get in touch with us, check the 'Contact' section or use the contact details in the header:\n\n• **Phone:** +91-94627-71662\n• **Email:** info.powerton@gmail.com\n• **Address:** Noida, Uttar Pradesh\n\nYou'll also find a contact form for detailed inquiries and our location on Google Maps!",
        suggestions: ["Find Contact Form", "Call Now", "Send Email", "Get Directions"]
      };
    }

    // Quote/pricing navigation
    if (input.includes('quote') || input.includes('price') || input.includes('cost') || input.includes('estimate') || input.includes('inquiry')) {
      return {
        message: "💼 **Request a Quote**\n\nTo get pricing information, you have several options:\n\n• Look for 'Request Quote' buttons throughout the site\n• Use the contact form with your project details\n• Call directly at +91-94627-71662\n• Email us at info.powerton@gmail.com\n\nFor the best quote, provide detailed project requirements including scope, timeline, and specifications!",
        suggestions: ["Find Quote Form", "Contact for Pricing", "Project Requirements", "Call for Quote"]
      };
    }

    // General navigation help
    if (input.includes('navigate') || input.includes('find') || input.includes('where') || input.includes('menu') || input.includes('page') || input.includes('section')) {
      return {
        message: "🧭 **Website Navigation Guide**\n\nOur website is organized into these main sections:\n\n🏠 **Home** - Overview and highlights\n📋 **About** - Company information\n⚙️ **Services** - What we offer\n🔧 **Products** - Our catalog\n📊 **Projects** - Portfolio showcase\n📞 **Contact** - Get in touch\n\nYou can find navigation links in the header menu. What specific section interests you most?",
        suggestions: ["Services Overview", "Product Catalog", "Project Portfolio", "Contact Info"]
      };
    }

    // Theme/appearance help
    if (input.includes('theme') || input.includes('dark') || input.includes('light') || input.includes('color') || input.includes('appearance')) {
      return {
        message: "🌓 **Theme Settings**\n\nYou can switch between light and dark themes using the theme toggle button. Look for:\n\n• Moon/Sun icon in the top-right corner\n• Theme switcher in the header area\n\nThis lets you choose the viewing mode that's most comfortable for you!",
        suggestions: ["Find Theme Toggle", "Light Mode", "Dark Mode", "Navigation Help"]
      };
    }

    // Default navigation assistance
    return {
      message: "🤔 **Need Navigation Help?**\n\nI'm here to help you find your way around our website! I can guide you to:\n\n• **Services** - What we offer\n• **Products** - Our catalog\n• **Projects** - Portfolio examples\n• **About** - Company info\n• **Contact** - Get in touch\n\nJust tell me what you're looking for, and I'll point you in the right direction!",
      suggestions: ["Show Services", "Browse Products", "View Projects", "Contact Info"]
    };
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    addMessage(inputValue, 'user');
    const response = generateResponse(inputValue);
    addBotMessage(response);
    setInputValue("");
  };

  const handleSuggestionClick = (suggestion: string) => {
    addMessage(suggestion, 'user');
    const response = generateResponse(suggestion);
    addBotMessage(response);
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
          onMouseDown={(e) => {
            e.stopPropagation();
          }}
          className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg"
          aria-label="Toggle chat"
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
            <Card className="shadow-2xl border-0">
              <CardHeader className="bg-primary text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Bot className="w-5 h-5" />
                  Powerton Assistant
                  <span className="ml-auto text-xs bg-secondary px-2 py-1 rounded-full">
                    Online
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex flex-col max-h-[calc(100vh-280px)]">
                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted min-h-[280px] max-h-[380px] scroll-smooth chatbot-messages">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.sender === 'user'
                            ? 'bg-primary text-white'
                            : 'bg-background text-foreground shadow-sm border'
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          {message.sender === 'bot' && (
                            <Bot className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                          )}
                          {message.sender === 'user' && (
                            <User className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                          )}
                          <div className="whitespace-pre-line text-sm">
                            {message.text}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Typing indicator */}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-background p-3 rounded-lg shadow-sm border max-w-[80%]">
                        <div className="flex items-center gap-2">
                          <Bot className="w-4 h-4 text-primary" />
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Show suggestions if the last message has them */}
                  {messages.length > 0 && !isTyping && (
                    <div className="flex flex-wrap gap-2">
                      {["Our Services", "Get Quote", "Contact Us", "View Projects"].map((suggestion) => (
                        <button
                          key={suggestion}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="text-xs bg-card border border-border hover:border-primary hover:text-primary px-3 py-1 rounded-full transition-colors"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 border-t bg-background rounded-b-lg">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Ask about our services..."
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="flex-1"
                    />
                    <Button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim()}
                      size="icon"
                      className="bg-primary hover:bg-primary/90"
                    >
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