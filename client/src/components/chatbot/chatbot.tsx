import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Search, ArrowRight, Home, Info, Settings, Package, FolderOpen, Phone, FileText, MapPin, Mail, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationItem {
  id: string;
  title: string;
  description: string;
  icon: any;
  action: () => void;
  category: 'main' | 'contact' | 'info';
}

interface QuickAction {
  id: string;
  label: string;
  icon: any;
  action: () => void;
  color: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<'all' | 'main' | 'contact' | 'info'>('all');
  const chatWindowRef = useRef<HTMLDivElement>(null);

  // Navigation items that actually navigate the website
  const navigationItems: NavigationItem[] = [
    {
      id: 'home',
      title: 'Home Page',
      description: 'Return to main page overview',
      icon: Home,
      category: 'main',
      action: () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsOpen(false);
      }
    },
    {
      id: 'about',
      title: 'About Us',
      description: 'Learn about our company story',
      icon: Info,
      category: 'main',
      action: () => {
        const aboutSection = document.querySelector('[data-section="about"]') || 
                           document.querySelector('#about') ||
                           document.querySelector('.about-section');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false);
        }
      }
    },
    {
      id: 'services',
      title: 'Our Services',
      description: 'Explore our engineering solutions',
      icon: Settings,
      category: 'main',
      action: () => {
        const servicesSection = document.querySelector('[data-section="services"]') || 
                              document.querySelector('#services') ||
                              document.querySelector('.services-section');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false);
        }
      }
    },
    {
      id: 'products',
      title: 'Products',
      description: 'Browse our product catalog',
      icon: Package,
      category: 'main',
      action: () => {
        const productsSection = document.querySelector('[data-section="products"]') || 
                              document.querySelector('#products') ||
                              document.querySelector('.products-section');
        if (productsSection) {
          productsSection.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false);
        }
      }
    },
    {
      id: 'projects',
      title: 'Projects Portfolio',
      description: 'View our completed projects',
      icon: FolderOpen,
      category: 'main',
      action: () => {
        const projectsSection = document.querySelector('[data-section="projects"]') || 
                              document.querySelector('#projects') ||
                              document.querySelector('.projects-section');
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false);
        }
      }
    },
    {
      id: 'contact',
      title: 'Contact Us',
      description: 'Get in touch with our team',
      icon: Phone,
      category: 'contact',
      action: () => {
        const contactSection = document.querySelector('[data-section="contact"]') || 
                             document.querySelector('#contact') ||
                             document.querySelector('.contact-section');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false);
        }
      }
    },
    {
      id: 'quote',
      title: 'Request Quote',
      description: 'Get pricing for your project',
      icon: FileText,
      category: 'contact',
      action: () => {
        const quoteForm = document.querySelector('[data-section="quote"]') || 
                         document.querySelector('#quote') ||
                         document.querySelector('.quote-form');
        if (quoteForm) {
          quoteForm.scrollIntoView({ behavior: 'smooth' });
          setIsOpen(false);
        } else {
          // Fallback to contact section
          const contactSection = document.querySelector('[data-section="contact"]');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
          }
        }
      }
    }
  ];

  // Quick action buttons for immediate actions
  const quickActions: QuickAction[] = [
    {
      id: 'call',
      label: 'Call Now',
      icon: Phone,
      color: 'bg-green-500 hover:bg-green-600',
      action: () => {
        window.open('tel:+91-94627-71662', '_self');
      }
    },
    {
      id: 'email',
      label: 'Send Email',
      icon: Mail,
      color: 'bg-blue-500 hover:bg-blue-600',
      action: () => {
        window.open('mailto:info.powerton@gmail.com', '_self');
      }
    },
    {
      id: 'location',
      label: 'Get Directions',
      icon: MapPin,
      color: 'bg-red-500 hover:bg-red-600',
      action: () => {
        window.open('https://maps.app.goo.gl/jiap3sBYbM3r8Pn68', '_blank');
      }
    }
  ];

  // Filter navigation items based on search and category
  const filteredItems = navigationItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Handle click outside to close
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

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [isOpen]);

  return (
    <>
      {/* Navigation Assistant Toggle Button */}
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
          data-testid="navigation-assistant-toggle"
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

      {/* Navigation Assistant Panel */}
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
            <Card className="shadow-2xl border-0 h-full">
              <CardHeader className="bg-primary text-white rounded-t-lg pb-4">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <MessageCircle className="w-5 h-5" />
                  Website Navigator
                </CardTitle>
                <p className="text-primary-foreground/80 text-sm">
                  Find what you're looking for quickly
                </p>
              </CardHeader>
              
              <CardContent className="p-0 h-full">
                {/* Search Bar */}
                <div className="p-4 border-b">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Search website sections..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  
                  {/* Category Filters */}
                  <div className="flex gap-2 mt-3">
                    {[
                      { key: 'all', label: 'All' },
                      { key: 'main', label: 'Pages' },
                      { key: 'contact', label: 'Contact' }
                    ].map((category) => (
                      <Button
                        key={category.key}
                        variant={activeCategory === category.key ? "default" : "outline"}
                        size="sm"
                        onClick={() => setActiveCategory(category.key as any)}
                        className="text-xs"
                      >
                        {category.label}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="p-4 border-b bg-muted/30">
                  <h4 className="text-sm font-semibold mb-3 text-muted-foreground">Quick Actions</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {quickActions.map((action) => (
                      <Button
                        key={action.id}
                        onClick={action.action}
                        className={`${action.color} text-white p-3 h-auto flex flex-col items-center gap-1`}
                        size="sm"
                      >
                        <action.icon className="w-4 h-4" />
                        <span className="text-xs">{action.label}</span>
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Navigation Items */}
                <div className="max-h-80 overflow-y-auto">
                  {filteredItems.length === 0 ? (
                    <div className="p-4 text-center text-muted-foreground">
                      <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
                      <p className="text-sm">No sections found</p>
                      <p className="text-xs">Try adjusting your search</p>
                    </div>
                  ) : (
                    <div className="p-2">
                      {filteredItems.map((item, index) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="mb-2"
                        >
                          <Button
                            onClick={item.action}
                            variant="ghost"
                            className="w-full justify-start h-auto p-3 hover:bg-muted/50"
                          >
                            <div className="flex items-center gap-3 w-full">
                              <div className="p-2 bg-primary/10 rounded-lg">
                                <item.icon className="w-4 h-4 text-primary" />
                              </div>
                              <div className="flex-1 text-left">
                                <p className="font-medium text-sm">{item.title}</p>
                                <p className="text-xs text-muted-foreground">{item.description}</p>
                              </div>
                              <ArrowRight className="w-4 h-4 text-muted-foreground" />
                            </div>
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="p-3 border-t bg-muted/20">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>Available 24/7 for navigation help</span>
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