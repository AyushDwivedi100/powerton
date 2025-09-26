import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Menu, Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import { COMPANY_INFO, SERVICES, getProducts } from "@/data/constants";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { useRTLClasses } from "@/hooks/use-rtl";
import { cn } from "@/lib/utils";
import mainLogoPowerton from "@assets/downloaded_images/main-logo-powerton.png";

export default function Header() {
  const { t } = useTranslation(["navigation", "common"]);
  const rtl = useRTLClasses();
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
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

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest(".services-dropdown-container")) {
        setIsServicesDropdownOpen(false);
      }
      if (!target.closest(".products-dropdown-container")) {
        setIsProductsDropdownOpen(false);
      }
    };

    if (isServicesDropdownOpen || isProductsDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isServicesDropdownOpen, isProductsDropdownOpen]);

  // Calculate header height for dropdown positioning
  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.querySelector('header[role="banner"]');
      if (header) {
        setHeaderHeight((header as HTMLElement).offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);

  const navigation = [
    { name: t("navigation:menu.about"), href: "/about" },
    { name: t("navigation:menu.projects"), href: "/projects" },
    { name: t("navigation:menu.gallery"), href: "/gallery" },
    { name: t("navigation:menu.news"), href: "/news" },
    { name: t("navigation:menu.career"), href: "/career" },
    { name: t("navigation:menu.contact"), href: "/contact" },
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
        className="bg-primary text-white header-top-bar py-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 flex flex-row justify-center sm:justify-between items-center gap-4 sm:gap-0 text-base md:text-sm container-safe">
          <motion.div
            className={cn(
              "flex items-center gap-4 sm:gap-6 md:gap-8 flex-wrap flex-safe",
              rtl.justifyStart,
            )}
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
            <motion.div
              className="flex items-center gap-2 md:gap-3"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <motion.a
                href={`tel:${COMPANY_INFO.phoneNumbers.primary}`}
                className="flex items-center hover:text-secondary transition-colors hover-scale shrink-0"
                aria-label={t("common:ui.ariaLabels.callUs", {
                  phone: COMPANY_INFO.phoneNumbers.primary,
                })}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Phone
                  className="w-4 h-4 sm:w-5 sm:h-5 text-secondary shrink-0 rtl-flip me-1"
                  aria-hidden="true"
                />
                <span className="text-wrap-safe text-sm md:text-base">
                  {COMPANY_INFO.phoneNumbers.primary}
                </span>
              </motion.a>

              <motion.a
                href={`tel:${COMPANY_INFO.phoneNumbers.secondary}`}
                className="flex items-center hover:text-secondary transition-colors hover-scale shrink-0"
                aria-label={t("common:ui.ariaLabels.callUs", {
                  phone: COMPANY_INFO.phoneNumbers.secondary,
                })}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Phone
                  className="w-4 h-4 sm:w-5 sm:h-5 text-secondary shrink-0 rtl-flip me-1"
                  aria-hidden="true"
                />
                <span className="text-wrap-safe text-sm md:text-base">
                  {COMPANY_INFO.phoneNumbers.secondary}
                </span>
              </motion.a>
            </motion.div>
            <motion.a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center hover:text-secondary transition-colors hover-scale shrink-0"
              aria-label={t("common:ui.ariaLabels.emailUs", {
                email: COMPANY_INFO.email,
              })}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Mail
                className="w-4 h-4 sm:w-5 sm:h-5 text-secondary shrink-0 rtl-flip me-1"
                aria-hidden="true"
              />
              <span className="text-wrap-safe text-base md:text-sm">
                {COMPANY_INFO.email}
              </span>
            </motion.a>
          </motion.div>
          <div className="flex items-center gap-3 lg:gap-4">
            {/* Language Switcher and Theme Toggle in Top Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="flex items-center gap-2"
            >
              <div className="p-1 rounded-md bg-accent/10 hover:bg-accent/20 transition-colors">
                <LanguageSwitcher />
              </div>
              <div className="p-1 rounded-md bg-accent/10 hover:bg-accent/20 transition-colors">
                <ThemeToggle />
              </div>
            </motion.div>

            <motion.a
              href="https://maps.app.goo.gl/jiap3sBYbM3r8Pn68"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center hover:text-secondary transition-colors cursor-pointer hover-scale"
              aria-label={t("common:ui.ariaLabels.openLocation")}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="flex items-center">
                <MapPin
                  className="w-5 h-5 text-secondary rtl-flip me-2"
                  aria-hidden="true"
                />
                <span className="text-wrap-safe text-base md:text-sm">
                  {t("common:company.address.city")},{" "}
                  {t("common:company.address.state")} -
                  {t("navigation:header.servingWorldwide")}
                </span>
              </span>
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Main navigation */}
      <nav
        className="max-w-7xl mx-auto px-2 md:px-4 lg:px-6 xl:px-8"
        role="navigation"
        aria-label={t("common:ui.ariaLabels.mainNavigation")}
      >
        <div className="flex justify-between items-center py-3 sm:py-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/" className="flex items-center ms-2 lg:ms-4">
              <div className="relative w-[190px] sm:w-[200px] md:w-[190px] lg:w-[200px] xl:w-[220px] h-12 sm:h-13 md:h-12 lg:h-13 xl:h-14 overflow-hidden me-4 lg:me-6 xl:me-8">
                <img
                  src={mainLogoPowerton}
                  alt={t("common:altTexts.companyLogo")}
                  className="absolute inset-0 w-full h-full object-contain"
                  loading="eager"
                />
              </div>
            </Link>
          </motion.div>

          {/* Desktop navigation */}
          <motion.div
            className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8 flex-safe"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {navigation.map((item, index) => {
              if (item.href === "/about") {
                return (
                  <React.Fragment key={item.name}>
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={`text-foreground font-medium relative whitespace-nowrap group hover:text-secondary transition-colors duration-200 ${
                          isActive(item.href) ? "text-secondary" : ""
                        }`}
                      >
                        <span>{item.name}</span>
                        {/* Active page indicator */}
                        {isActive(item.href) && (
                          <motion.div
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary"
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
                      className="relative services-dropdown-container"
                    >
                      <div
                        className={`text-foreground font-medium relative flex items-center gap-1 cursor-pointer group hover:text-secondary transition-colors duration-200 ${
                          isActive("/services") ? "text-secondary" : ""
                        }`}
                        onMouseEnter={() => setIsServicesDropdownOpen(true)}
                        onMouseLeave={() => setIsServicesDropdownOpen(false)}
                        onClick={() =>
                          setIsServicesDropdownOpen(!isServicesDropdownOpen)
                        }
                      >
                        <Link href="/services">
                          {t("navigation:dropdowns.services")}
                        </Link>
                        <ChevronDown className="h-4 w-4 rtl-flip" />
                        {/* Active page indicator */}
                        {isActive("/services") && (
                          <motion.div
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary"
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
                          isServicesDropdownOpen
                            ? "opacity-100 visible"
                            : "opacity-0 invisible"
                        }`}
                        style={{ top: `calc(${headerHeight}px - 1rem)` }}
                        onMouseEnter={() => setIsServicesDropdownOpen(true)}
                        onMouseLeave={() => setIsServicesDropdownOpen(false)}
                      >
                        <div className="w-max max-w-[95vw] max-h-[90vh] bg-popover border-2 border-slate-300 dark:border-slate-600 rounded-md shadow-lg overflow-y-auto">
                          <div className="p-6 lg:p-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 items-stretch">
                              {SERVICES.map((service) => (
                                <Link
                                  key={service.id}
                                  href={`/services-category/${service.id}`}
                                  className="block px-4 py-4 lg:py-6 rounded-sm hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-foreground cursor-pointer transition-colors border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 flex-safe min-h-[120px] lg:min-h-[140px]"
                                  onClick={() =>
                                    setIsServicesDropdownOpen(false)
                                  }
                                >
                                  <div className="flex flex-col h-full justify-between">
                                    <div className="font-semibold text-foreground text-sm lg:text-base line-clamp-safe mb-2 responsive-text">
                                      {t(`services:items.${service.id}`)}
                                    </div>
                                    <div className="text-xs lg:text-sm text-muted-foreground line-clamp-safe mt-auto responsive-text">
                                      {t(`services:descriptions.${service.id}`)}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
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
                        className={`text-foreground font-medium relative flex items-center gap-1 cursor-pointer group hover:text-secondary transition-colors duration-200 ${
                          isActive("/products") ? "text-secondary" : ""
                        }`}
                        onMouseEnter={() => setIsProductsDropdownOpen(true)}
                        onMouseLeave={() => setIsProductsDropdownOpen(false)}
                        onClick={() =>
                          setIsProductsDropdownOpen(!isProductsDropdownOpen)
                        }
                      >
                        <Link href="/products">
                          {t("navigation:dropdowns.products", "Products")}
                        </Link>
                        <ChevronDown className="h-4 w-4 rtl-flip" />
                        {/* Active page indicator */}
                        {isActive("/products") && (
                          <motion.div
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary"
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
                          isProductsDropdownOpen
                            ? "opacity-100 visible"
                            : "opacity-0 invisible"
                        }`}
                        style={{ top: `calc(${headerHeight}px - 1rem)` }}
                        onMouseEnter={() => setIsProductsDropdownOpen(true)}
                        onMouseLeave={() => setIsProductsDropdownOpen(false)}
                      >
                        <div className="w-max max-w-[95vw] max-h-[70vh] bg-popover border-2 border-slate-300 dark:border-slate-600 rounded-md shadow-lg overflow-y-auto">
                          <div className="p-4 lg:p-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-4">
                              {getProducts(t).map((product) => (
                                <div key={product.id} className="flex-safe">
                                  <Link
                                    href={`/products-category/${product.id}`}
                                    className="block px-3 lg:px-4 py-2 lg:py-3 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-foreground cursor-pointer transition-colors border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 mb-2"
                                    onClick={() =>
                                      setIsProductsDropdownOpen(false)
                                    }
                                  >
                                    <div className="font-semibold text-foreground text-sm lg:text-base line-clamp-safe responsive-text">
                                      {String(
                                        t(
                                          `products:items.${product.id}`,
                                          product.title,
                                        ),
                                      )}
                                    </div>
                                  </Link>

                                  {/* Show subcategories for products that have them */}
                                  {product.subcategories && (
                                    <div className="space-y-1 ms-2 lg:ms-4">
                                      {product.subcategories.map(
                                        (subcategory) => (
                                          <Link
                                            key={subcategory.id}
                                            href={`/products-sub-category/${subcategory.id}`}
                                            className="block px-2 lg:px-3 py-1 lg:py-2 rounded-sm hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-foreground cursor-pointer transition-colors text-xs lg:text-sm border-primary/40 hover:border-secondary bs-2"
                                            onClick={() =>
                                              setIsProductsDropdownOpen(false)
                                            }
                                          >
                                            <div className="font-medium text-foreground text-safe responsive-text">
                                              {String(
                                                t(
                                                  `products:subcategories.${subcategory.id}.title`,
                                                  subcategory.title,
                                                ),
                                              )}
                                            </div>
                                          </Link>
                                        ),
                                      )}
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
                    className={`text-foreground font-medium relative whitespace-nowrap group hover:text-secondary transition-colors duration-200 ${
                      isActive(item.href) ? "text-secondary" : ""
                    }`}
                  >
                    <span>
                      <span className="xl:hidden">
                        {item.name === "News & Updates"
                          ? t("navigation:menu.news")
                          : item.name}
                      </span>
                      <span className="hidden xl:inline">{item.name}</span>
                    </span>
                    {/* Active page indicator */}
                    {isActive(item.href) && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary"
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
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-4 lg:px-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  {t("common:buttons.getQuote")}
                </Button>
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
                className="mr-4"
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
                    <Menu className="w-7 h-7" />
                  </motion.div>
                  <span className="sr-only">
                    {t("navigation:mobile.openMobileMenu")}
                  </span>
                </Button>
              </motion.div>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] overflow-y-auto"
            >
              <SheetTitle className="sr-only">
                {t("navigation:mobile.navigationMenu")}
              </SheetTitle>
              <SheetDescription className="sr-only">
                {t("navigation:mobile.menuDescription")}
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
                    if (item.href === "/about") {
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
                                  ? "text-secondary"
                                  : "text-foreground hover:text-secondary"
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
                                    ? "text-secondary"
                                    : "text-foreground hover:text-secondary"
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
                                  {t("navigation:dropdowns.services")}
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
                                    className="ms-4 space-y-2 overflow-hidden container-safe"
                                  >
                                    {SERVICES.map((service) => (
                                      <Link
                                        key={service.id}
                                        href={`/services-category/${service.id}`}
                                        className="text-sm text-muted-foreground hover:text-secondary transition-colors block py-1 text-wrap-safe"
                                        onClick={() => {
                                          setIsOpen(false);
                                          setIsMobileServicesOpen(false);
                                        }}
                                      >
                                        {t(`services:items.${service.id}`)}
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
                                    ? "text-secondary"
                                    : "text-foreground hover:text-secondary"
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
                                  {t("navigation:dropdowns.products")}
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
                                    className="ms-4 space-y-2 overflow-hidden container-safe"
                                  >
                                    {getProducts(t).map((product) => (
                                      <div key={product.id}>
                                        <Link
                                          href={`/products-category/${product.id}`}
                                          className="text-sm text-muted-foreground hover:text-secondary transition-colors block py-1 font-medium text-wrap-safe"
                                          onClick={() => {
                                            setIsOpen(false);
                                            setIsMobileProductsOpen(false);
                                          }}
                                        >
                                          {String(
                                            t(
                                              `products:items.${product.id}`,
                                              product.title,
                                            ),
                                          )}
                                        </Link>

                                        {/* Show subcategories for products that have them */}
                                        {product.subcategories && (
                                          <div className="ms-3 mt-1 space-y-1">
                                            {product.subcategories.map(
                                              (subcategory) => (
                                                <Link
                                                  key={subcategory.id}
                                                  href={`/products-sub-category/${subcategory.id}`}
                                                  className="text-xs text-muted-foreground hover:text-secondary transition-colors block py-1 border-secondary/30 hover:border-secondary ps-2 bs-2 text-wrap-safe"
                                                  onClick={() => {
                                                    setIsOpen(false);
                                                    setIsMobileProductsOpen(
                                                      false,
                                                    );
                                                  }}
                                                >
                                                  {String(
                                                    t(
                                                      `products:subcategories.${subcategory.id}.title`,
                                                      subcategory.title,
                                                    ),
                                                  )}
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
                              ? "text-secondary"
                              : "text-foreground hover:text-secondary"
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
                    className="flex flex-col gap-3"
                  >
                    <Link href="/quote" onClick={() => setIsOpen(false)}>
                      <Button className="btn-secondary w-full hover-lift">
                        {t("common:buttons.getQuote")}
                      </Button>
                    </Link>

                    {/* Contact details below Get Quote button in mobile navigation */}
                    <div className="mt-4 p-4 bg-muted/50 rounded-lg border border-slate-200 dark:border-slate-700">
                      <h4 className="text-sm font-semibold text-foreground mb-3">
                        {t("common:buttons.contactUs")}
                      </h4>
                      <div className="space-y-3">
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Phone className="w-4 h-4 me-3 text-secondary flex-shrink-0 rtl-flip" />
                            <a
                              href={`tel:${COMPANY_INFO.phoneNumbers.primary}`}
                              className="text-sm text-foreground hover:text-secondary transition-colors text-wrap-safe"
                              onClick={() => setIsOpen(false)}
                            >
                              {COMPANY_INFO.phoneNumbers.primary}
                            </a>
                          </div>
                          <div className="flex items-center">
                            <Phone className="w-4 h-4 me-3 text-secondary flex-shrink-0 rtl-flip" />
                            <a
                              href={`tel:${COMPANY_INFO.phoneNumbers.secondary}`}
                              className="text-sm text-foreground hover:text-secondary transition-colors text-wrap-safe"
                              onClick={() => setIsOpen(false)}
                            >
                              {COMPANY_INFO.phoneNumbers.secondary}
                            </a>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 me-3 text-secondary flex-shrink-0 rtl-flip" />
                          <a
                            href={`mailto:${COMPANY_INFO.email}`}
                            className="text-sm text-foreground hover:text-secondary transition-colors text-wrap-safe"
                            onClick={() => setIsOpen(false)}
                          >
                            {COMPANY_INFO.email}
                          </a>
                        </div>
                        <a
                          href="https://maps.app.goo.gl/jiap3sBYbM3r8Pn68"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start transition-colors cursor-pointer"
                          onClick={() => setIsOpen(false)}
                          aria-label={t("common:ui.ariaLabels.openLocation")}
                        >
                          <MapPin className="w-4 h-4 me-3 text-secondary flex-shrink-0 mt-0.5 rtl-flip" />
                          <div className="text-sm text-foreground hover:text-secondary transition-colors text-wrap-safe">
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
