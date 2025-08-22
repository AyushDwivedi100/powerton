import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Menu, Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import { COMPANY_INFO, SERVICES, PRODUCTS } from "@/data/constants";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "@assets/mainlogopowerton (1)_1755674514195.png";

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(100);

  // Hide body scrollbar when mobile sidebar is open
  useEffect(() => {
    const rootElement = document.getElementById("root");

    if (isOpen) {
      document.body.classList.add("sidebar-open");
      document.documentElement.classList.add("sidebar-open");
      if (rootElement) rootElement.classList.add("sidebar-open");
    } else {
      document.body.classList.remove("sidebar-open");
      document.documentElement.classList.remove("sidebar-open");
      if (rootElement) rootElement.classList.remove("sidebar-open");
    }

    // Cleanup function to restore scrollbar when component unmounts
    return () => {
      document.body.classList.remove("sidebar-open");
      document.documentElement.classList.remove("sidebar-open");
      if (rootElement) rootElement.classList.remove("sidebar-open");
    };
  }, [isOpen]);

  // Handle click outside to close products dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.products-dropdown-container')) {
        setIsProductsDropdownOpen(false);
      }
    };

    if (isProductsDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProductsDropdownOpen]);

  // Calculate header height for dropdown positioning
  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.querySelector('header[role="banner"]');
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    
    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
    };
  }, []);

  const navigation = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Gallery", href: "/gallery" },
    { name: "News & Updates", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && href !== "#" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <header
      className="bg-background border-b border-border shadow-sm sticky top-0 z-50"
      role="banner"
    >
      {/* Top bar */}
      <motion.div
        className="bg-primary text-white py-1 sm:py-2 header-top-bar"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 flex flex-col sm:flex-row sm:justify-between items-center gap-3 sm:gap-0 text-xs sm:text-sm py-1">
          <motion.div
            className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center sm:justify-start w-full sm:w-auto"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2,
                },
              },
            }}
          >
            <motion.a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center hover:text-secondary transition-colors hover-scale shrink-0"
              aria-label="Call us"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Phone
                className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-secondary shrink-0"
                aria-hidden="true"
              />
              <span className="hidden sm:inline whitespace-nowrap">
                {COMPANY_INFO.phone}
              </span>
              <span className="sm:hidden">Call</span>
            </motion.a>
            <motion.a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center hover:text-secondary transition-colors hover-scale shrink-0"
              aria-label="Email us"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Mail
                className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-secondary shrink-0"
                aria-hidden="true"
              />
              <span className="hidden md:inline whitespace-nowrap text-xs md:text-sm">
                {COMPANY_INFO.email}
              </span>
              <span className="md:hidden">Email</span>
            </motion.a>
          </motion.div>
          <motion.a
            href="https://maps.app.goo.gl/jiap3sBYbM3r8Pn68"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center hover:text-secondary transition-colors cursor-pointer hover-scale"
            aria-label="Open office location in Google Maps"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="flex items-center">
              <MapPin
                className="w-4 h-4 mr-2 text-secondary"
                aria-hidden="true"
              />
              <span className="text-xs lg:text-sm">
                {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} -
                Serving All India
              </span>
            </span>
          </motion.a>
        </div>
      </motion.div>

      {/* Main navigation */}
      <nav
        className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex justify-between items-center py-3 sm:py-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/" className="flex items-center ml-4">
              <div className="relative w-[160px] sm:w-[180px] md:w-[220px] h-10 sm:h-12 md:h-14 overflow-hidden mr-8">
                <img
                  src={logoImage}
                  alt="ID-001: Powerton Engineering Pvt. Ltd. logo"
                  className="absolute inset-0 w-full h-full object-contain"
                  loading="eager"
                />
              </div>
            </Link>
          </motion.div>

          {/* Desktop navigation */}
          <motion.div
            className="hidden lg:flex items-center space-x-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {navigation.map((item, index) => {
              if (item.name === "About") {
                return (
                  <React.Fragment key={item.name}>
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={`text-foreground hover:text-primary transition-colors font-medium relative ${
                          isActive(item.href) ? "text-primary" : ""
                        }`}
                      >
                        <motion.span
                          whileHover={{ y: -2 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.name}
                        </motion.span>
                        {isActive(item.href) && (
                          <motion.div
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                            layoutId="activeNav"
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </Link>
                    </motion.div>

                    {/* Services Dropdown */}
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.4 + (index + 1) * 0.1,
                      }}
                      className="relative group"
                    >
                      <div
                        className={`text-foreground hover:text-primary transition-colors font-medium relative flex items-center gap-1 cursor-pointer ${
                          isActive("/services") ? "text-primary" : ""
                        }`}
                      >
                        <Link href="/services" className="hover:text-primary">
                          Services
                        </Link>
                        <ChevronDown className="h-4 w-4" />
                        {isActive("/services") && (
                          <motion.div
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                            layoutId="activeNav"
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </div>

                      {/* Hover Dropdown Content */}
                      <div className="absolute top-full -left-16 w-96 bg-popover border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 mt-4">
                        <div className="p-1">
                          {SERVICES.map((service) => (
                            <Link
                              key={service.id}
                              href={`/services/${service.id}`}
                              className="block px-2 py-1.5 rounded-sm hover:bg-accent hover:text-accent-foreground cursor-pointer transition-colors"
                            >
                              <div className="flex flex-col">
                                <div className="font-medium text-foreground">
                                  {service.title}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  {service.description.slice(0, 80)}...
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    {/* Products Dropdown */}
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.5 + (index + 1) * 0.1,
                      }}
                      className="relative products-dropdown-container"
                    >
                      <div
                        className={`text-foreground hover:text-primary transition-colors font-medium relative flex items-center gap-1 cursor-pointer ${
                          isActive("/products") ? "text-primary" : ""
                        }`}
                        onMouseEnter={() => setIsProductsDropdownOpen(true)}
                        onMouseLeave={() => setIsProductsDropdownOpen(false)}
                        onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                      >
                        <Link href="/products" className="hover:text-primary">
                          Products
                        </Link>
                        <ChevronDown className="h-4 w-4" />
                        {isActive("/products") && (
                          <motion.div
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                            layoutId="activeNav"
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </div>

                      {/* Dropdown Content */}
                      <div 
                        className={`transition-all duration-200 fixed left-1/2 -translate-x-1/2 z-50 ${
                          isProductsDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                        }`} 
                        style={{top: `calc(${headerHeight}px - 1rem)`}}
                        onMouseEnter={() => setIsProductsDropdownOpen(true)}
                        onMouseLeave={() => setIsProductsDropdownOpen(false)}
                      >
                        <div className="w-max max-w-[95vw] max-h-[70vh] bg-popover border border-border rounded-md shadow-lg overflow-y-auto">
                          <div className="p-4 lg:p-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7 4xl:grid-cols-8 5xl:grid-cols-9 gap-3 lg:gap-4 max-w-none">
                              {PRODUCTS.map((product) => (
                                <div
                                  key={product.id}
                                  className="min-w-0 flex-shrink-0"
                                >
                                  <Link
                                    href={`/products/${product.id}`}
                                    className="block px-3 lg:px-4 py-2 lg:py-3 rounded-md hover:bg-accent hover:text-accent-foreground cursor-pointer transition-colors border border-border/50 mb-2"
                                    onClick={() => setIsProductsDropdownOpen(false)}
                                  >
                                    <div className="font-semibold text-foreground text-sm lg:text-base line-clamp-2">
                                      {product.title}
                                    </div>
                                  </Link>

                                  {/* Show subcategories for products that have them */}
                                  {product.subcategories && (
                                    <div className="ml-2 lg:ml-4 space-y-1">
                                      {product.subcategories.map((subcategory) => (
                                        <Link
                                          key={subcategory.id}
                                          href={`/products/${subcategory.id}`}
                                          className="block px-2 lg:px-3 py-1 lg:py-2 rounded-sm hover:bg-muted hover:text-foreground cursor-pointer transition-colors text-xs lg:text-sm border-l-2 border-secondary/30 hover:border-secondary"
                                          onClick={() => setIsProductsDropdownOpen(false)}
                                        >
                                          <div className="font-medium text-foreground line-clamp-1">
                                            {subcategory.title}
                                          </div>
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </React.Fragment>
                );
              }

              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + (index + 1) * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`text-foreground hover:text-primary transition-colors font-medium relative ${
                      isActive(item.href) ? "text-primary" : ""
                    }`}
                  >
                    <motion.span
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.name}
                    </motion.span>
                    {isActive(item.href) && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                        layoutId="activeNav"
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="ml-2"
            >
              <Link href="/quote">
                <Button className="btn-secondary hover-lift">Get Quote</Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Mobile navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden hover-scale"
                >
                  <motion.div
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                  <span className="sr-only">Open mobile menu</span>
                </Button>
              </motion.div>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] overflow-y-auto"
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">
                Main navigation menu for Powerton Engineering website
              </SheetDescription>
              <AnimatePresence>
                <motion.nav
                  className="flex flex-col space-y-4 mt-8 pb-8"
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                    },
                    closed: {
                      transition: {
                        staggerChildren: 0.05,
                        staggerDirection: -1,
                      },
                    },
                  }}
                >
                  {navigation.map((item) => {
                    if (item.name === "About") {
                      return (
                        <React.Fragment key={item.name}>
                          <motion.div
                            variants={{
                              open: { opacity: 1, x: 0 },
                              closed: { opacity: 0, x: -20 },
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <Link
                              href={item.href}
                              className={`text-lg font-medium transition-colors hover-scale block ${
                                isActive(item.href)
                                  ? "text-primary"
                                  : "text-foreground hover:text-primary"
                              }`}
                              onClick={() => setIsOpen(false)}
                            >
                              <motion.span
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                              >
                                {item.name}
                              </motion.span>
                            </Link>
                          </motion.div>

                          {/* Services Mobile Menu */}
                          <motion.div
                            variants={{
                              open: { opacity: 1, x: 0 },
                              closed: { opacity: 0, x: -20 },
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="space-y-2">
                              <div
                                className={`text-lg font-medium transition-colors hover-scale cursor-pointer flex items-center justify-between ${
                                  isActive("/services")
                                    ? "text-primary"
                                    : "text-foreground hover:text-primary"
                                }`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setIsMobileServicesOpen(
                                    !isMobileServicesOpen,
                                  );
                                }}
                              >
                                <motion.span
                                  whileHover={{ x: 5 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  Services
                                </motion.span>
                                <motion.div
                                  animate={{
                                    rotate: isMobileServicesOpen ? 180 : 0,
                                  }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <ChevronDown className="h-4 w-4" />
                                </motion.div>
                              </div>

                              <AnimatePresence>
                                {isMobileServicesOpen && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="ml-4 space-y-2 overflow-hidden"
                                  >
                                    {SERVICES.map((service) => (
                                      <Link
                                        key={service.id}
                                        href={`/services/${service.id}`}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors block py-1"
                                        onClick={() => {
                                          setIsOpen(false);
                                          setIsMobileServicesOpen(false);
                                        }}
                                      >
                                        {service.title}
                                      </Link>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          </motion.div>

                          {/* Products Mobile Menu */}
                          <motion.div
                            variants={{
                              open: { opacity: 1, x: 0 },
                              closed: { opacity: 0, x: -20 },
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="space-y-2">
                              <div
                                className={`text-lg font-medium transition-colors hover-scale cursor-pointer flex items-center justify-between ${
                                  isActive("/products")
                                    ? "text-primary"
                                    : "text-foreground hover:text-primary"
                                }`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setIsMobileProductsOpen(
                                    !isMobileProductsOpen,
                                  );
                                }}
                              >
                                <motion.span
                                  whileHover={{ x: 5 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  Products
                                </motion.span>
                                <motion.div
                                  animate={{
                                    rotate: isMobileProductsOpen ? 180 : 0,
                                  }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <ChevronDown className="h-4 w-4" />
                                </motion.div>
                              </div>

                              <AnimatePresence>
                                {isMobileProductsOpen && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="ml-4 space-y-2 overflow-hidden"
                                  >
                                    {PRODUCTS.map((product) => (
                                      <div key={product.id}>
                                        <Link
                                          href={`/products/${product.id}`}
                                          className="text-sm text-muted-foreground hover:text-primary transition-colors block py-1 font-medium"
                                          onClick={() => {
                                            setIsOpen(false);
                                            setIsMobileProductsOpen(false);
                                          }}
                                        >
                                          {product.title}
                                        </Link>

                                        {/* Show subcategories for products that have them */}
                                        {product.subcategories && (
                                          <div className="ml-3 mt-1 space-y-1">
                                            {product.subcategories.map(
                                              (subcategory) => (
                                                <Link
                                                  key={subcategory.id}
                                                  href={`/products/${subcategory.id}`}
                                                  className="text-xs text-muted-foreground hover:text-secondary transition-colors block py-1 border-l-2 border-secondary/30 pl-2"
                                                  onClick={() => {
                                                    setIsOpen(false);
                                                    setIsMobileProductsOpen(
                                                      false,
                                                    );
                                                  }}
                                                >
                                                  {subcategory.title}
                                                </Link>
                                              ),
                                            )}
                                          </div>
                                        )}
                                      </div>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          </motion.div>
                        </React.Fragment>
                      );
                    }

                    return (
                      <motion.div
                        key={item.name}
                        variants={{
                          open: { opacity: 1, x: 0 },
                          closed: { opacity: 0, x: -20 },
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Link
                          href={item.href}
                          className={`text-lg font-medium transition-colors hover-scale block ${
                            isActive(item.href)
                              ? "text-primary"
                              : "text-foreground hover:text-primary"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          <motion.span
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.name}
                          </motion.span>
                        </Link>
                      </motion.div>
                    );
                  })}
                  <motion.div
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: -20 },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link href="/quote" onClick={() => setIsOpen(false)}>
                      <Button className="btn-secondary w-full mt-4 hover-lift">
                        Get Quote
                      </Button>
                    </Link>

                    {/* Contact details below Get Quote button in mobile navigation */}
                    <div className="mt-4 p-4 bg-muted/50 rounded-lg border border-border">
                      <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center">
                        <Phone className="w-4 h-4 mr-2 text-secondary" />
                        Contact Us
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 mr-3 text-secondary flex-shrink-0" />
                          <a
                            href={`tel:${COMPANY_INFO.phone}`}
                            className="text-sm text-foreground hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {COMPANY_INFO.phone}
                          </a>
                        </div>
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 mr-3 text-secondary flex-shrink-0" />
                          <a
                            href={`mailto:${COMPANY_INFO.email}`}
                            className="text-sm text-foreground hover:text-primary transition-colors break-all"
                            onClick={() => setIsOpen(false)}
                          >
                            {COMPANY_INFO.email}
                          </a>
                        </div>
                        <a
                          href="https://maps.app.goo.gl/jiap3sBYbM3r8Pn68"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start hover:bg-muted/70 p-2 -m-2 rounded-md transition-colors cursor-pointer"
                          onClick={() => setIsOpen(false)}
                          aria-label="Open office location in Google Maps"
                        >
                          <MapPin className="w-4 h-4 mr-3 text-secondary flex-shrink-0 mt-0.5" />
                          <div className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            <div>{COMPANY_INFO.address.street}</div>
                            <div>
                              {COMPANY_INFO.address.city},{" "}
                              {COMPANY_INFO.address.state}
                            </div>
                            <div>{COMPANY_INFO.address.pincode}</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </motion.nav>
              </AnimatePresence>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
