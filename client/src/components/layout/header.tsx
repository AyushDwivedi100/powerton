import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { createPortal } from "react-dom";
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
import {
  Menu,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Settings,
  Zap,
  Thermometer,
  Gauge,
  Wrench,
  Package,
  Activity,
  Cpu,
  Factory,
  Cog,
  FlameKindling,
  Droplets,
  Hammer,
  Truck,
  Search,
} from "lucide-react";
import {
  COMPANY_INFO,
  getProducts,
  getProductGroupsBySubcategory,
  hasProductGroups,
  getServices,
} from "@/data/constants";
import {
  getSubcategorySlugById,
  getParentCategorySlug,
  getParentCategoryBySubcategoryKey,
  getSubcategoryKeyBySlug,
} from "@/data/products-sub-category-pages-data";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { SearchDialog } from "@/components/ui/search-dialog";
import { useRTLClasses } from "@/hooks/use-rtl";
import { cn } from "@/lib/utils";
import mainLogoPowerton from "@assets/logos/main-logo-powerton.png";

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
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Product Groups Popup State
  const [hoveredSubcategory, setHoveredSubcategory] = useState<string | null>(
    null,
  );
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  // Use refs instead of state for timers to prevent re-renders and race conditions
  const popupTimerRef = useRef<number | null>(null);
  const productsTimerRef = useRef<number | null>(null);

  // Navigation lock to prevent menu reopening after navigation (persistent ref)
  const navigationLockRef = useRef(false);

  // Hover state tracking for reliable popup management
  const isSubcategoryHoveredRef = useRef(false);
  const isPopupHoveredRef = useRef(false);

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

  // Helper functions for timer management
  const clearTimer = (timerRef: React.MutableRefObject<number | null>) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const openWithDelay = (
    timerRef: React.MutableRefObject<number | null>,
    ms: number,
    fn: () => void,
  ) => {
    clearTimer(timerRef);
    timerRef.current = window.setTimeout(fn, ms);
  };

  const closeWithDelay = (
    timerRef: React.MutableRefObject<number | null>,
    ms: number,
    fn: () => void,
  ) => {
    clearTimer(timerRef);
    timerRef.current = window.setTimeout(fn, ms);
  };

  // Cleanup timers on component unmount
  useEffect(() => {
    return () => {
      clearTimer(popupTimerRef);
      clearTimer(productsTimerRef);
    };
  }, []);

  // Close all dropdowns when route changes
  useEffect(() => {
    // Clear all timers and close menus immediately
    clearTimer(popupTimerRef);
    clearTimer(productsTimerRef);

    setIsServicesDropdownOpen(false);
    setIsProductsDropdownOpen(false);
    setHoveredSubcategory(null);
    setIsOpen(false);
    setIsMobileServicesOpen(false);
    setIsMobileProductsOpen(false);

    // Extended navigation lock (300ms) to prevent reopening after navigation
    navigationLockRef.current = true;
    const releaseLock = setTimeout(() => {
      navigationLockRef.current = false;
    }, 300);

    return () => {
      clearTimeout(releaseLock);
    };
  }, [location]); // Trigger when location changes

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

  // Memoize navigation data to prevent recreation on every render
  const navigation = useMemo(() => [
    { name: t("navigation:menu.about"), href: "/about" },
    { name: t("navigation:menu.projects"), href: "/projects" },
    { name: t("navigation:menu.gallery"), href: "/gallery" },
    { name: t("navigation:menu.career"), href: "/career" },
    { name: t("navigation:menu.contact"), href: "/contact" },
  ], [t]);

  // Memoize services and products data
  const servicesData = useMemo(() => getServices(t), [t]);
  const productsData = useMemo(() => getProducts(t), [t]);

  const isActive = useCallback((href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && href !== "#" && location.startsWith(href)) return true;
    return false;
  }, [location]);

  // Unified dropdown controller functions
  const openProductsDropdown = () => {
    if (navigationLockRef.current) return;
    clearTimer(productsTimerRef);
    // Add delay before opening dropdown to prevent instant popup
    openWithDelay(productsTimerRef, 200, () => {
      setIsProductsDropdownOpen(true);
    });
  };

  const closeProductsDropdown = () => {
    // Close dropdown with delay, allow cancellation if hover returns
    closeWithDelay(productsTimerRef, 220, () => {
      setIsProductsDropdownOpen(false);
      setHoveredSubcategory(null);
    });
  };

  // Hover and focus handlers for product groups popup
  const handleSubcategoryHover = (
    subcategoryId: string,
    event: React.MouseEvent | React.FocusEvent,
  ) => {
    // Don't show popup if navigation is locked
    if (navigationLockRef.current) return;

    // Mark subcategory as hovered and clear any existing popup timer
    isSubcategoryHoveredRef.current = true;
    clearTimer(popupTimerRef);

    // Convert subcategory ID to key for product group lookup
    const subcategorySlug =
      getSubcategorySlugById(subcategoryId) || subcategoryId;
    const subcategoryKey = getSubcategoryKeyBySlug(subcategorySlug);

    if (!hasProductGroups(subcategoryKey)) {
      // If no product groups, hide popup immediately
      setHoveredSubcategory(null);
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const popupWidth = 350; // Popup width
    const popupHeight = 400; // Estimated popup height

    // Get mouse position if it's a mouse event
    let mouseX = 0;
    let mouseY = 0;
    if ("clientX" in event) {
      mouseX = event.clientX;
      mouseY = event.clientY;
    }

    // Position popup right beside the hovered subcategory item with minimal gap
    let xPosition = rect.right + 1; // Almost touching the subcategory item
    let yPosition = rect.top - 10; // Position slightly above to center with subcategory text

    // Adjust position to keep popup within viewport
    if (xPosition + popupWidth > viewportWidth) {
      xPosition = rect.left - popupWidth - 1; // Position to the left with minimal gap
    }
    if (yPosition + popupHeight > viewportHeight) {
      yPosition = viewportHeight - popupHeight - 20;
    }
    if (xPosition < 10) xPosition = 10;
    if (yPosition < 10) yPosition = 10;

    // Update position and show popup with delay to prevent instant appearance
    openWithDelay(popupTimerRef, 250, () => {
      setPopupPosition({
        x: xPosition,
        y: yPosition,
      });
      setHoveredSubcategory(subcategoryId);
    });
  };

  const handleSubcategoryLeave = (event?: React.MouseEvent) => {
    // Mark subcategory as no longer hovered
    isSubcategoryHoveredRef.current = false;

    // Start timer to close popup, will be cancelled if mouse enters popup
    closeWithDelay(popupTimerRef, 200, () => {
      // Only close if neither subcategory nor popup is hovered
      if (!isSubcategoryHoveredRef.current && !isPopupHoveredRef.current) {
        setHoveredSubcategory(null);
      }
    });
  };

  const handleSubcategoryBlur = (event: React.FocusEvent) => {
    // Check if focus is moving to the popup or another subcategory
    const relatedTarget = event.relatedTarget as Element;
    if (
      relatedTarget &&
      (relatedTarget.closest('[data-testid^="product-group-"]') ||
        relatedTarget.closest('[data-testid^="subcategory-"]') ||
        relatedTarget.closest('[data-dropdown-area="products"]'))
    ) {
      return; // Don't close if focus is moving to popup, subcategory, or dropdown
    }

    // Close popup with delay for keyboard navigation
    closeWithDelay(popupTimerRef, 200, () => {
      setHoveredSubcategory(null);
    });
  };

  const handlePopupHover = () => {
    // Mark popup as hovered and cancel any pending close timeout
    isPopupHoveredRef.current = true;
    clearTimer(popupTimerRef);
  };

  const handlePopupLeave = (event?: React.MouseEvent) => {
    // Mark popup as no longer hovered
    isPopupHoveredRef.current = false;

    // Start timer to close popup, will be cancelled if mouse enters subcategory
    closeWithDelay(popupTimerRef, 200, () => {
      // Only close if neither popup nor subcategory is hovered
      if (!isPopupHoveredRef.current && !isSubcategoryHoveredRef.current) {
        setHoveredSubcategory(null);
      }
    });
  };

  // Products dropdown trigger handlers
  const handleProductsDropdownEnter = () => {
    openProductsDropdown();
  };

  const handleProductsDropdownLeave = (event?: React.MouseEvent) => {
    // Check if mouse is moving to safe areas
    if (event && event.relatedTarget) {
      const relatedTarget = event.relatedTarget as Element;
      if (
        relatedTarget &&
        typeof relatedTarget.closest === "function" &&
        (relatedTarget.closest('[data-popup-area="true"]') ||
          relatedTarget.closest('[data-testid^="subcategory-"]') ||
          relatedTarget.closest('[data-dropdown-area="products"]'))
      ) {
        return;
      }
    }

    closeProductsDropdown();
  };

  // Handle keyboard events
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      setHoveredSubcategory(null);
    }
  };

  // Get appropriate icon for product groups
  const getProductGroupIcon = (groupKey: string) => {
    const iconProps = { className: "w-5 h-5 text-blue-600 dark:text-blue-400" };

    // Heating and thermal related
    if (groupKey.includes("heating") || groupKey.includes("thermal")) {
      return <FlameKindling {...iconProps} />;
    }
    // Electrical and automation
    if (
      groupKey.includes("plc") ||
      groupKey.includes("inverter") ||
      groupKey.includes("electrical")
    ) {
      return <Cpu {...iconProps} />;
    }
    // Sensors and transmitters
    if (groupKey.includes("transmitter") || groupKey.includes("sensor")) {
      return <Activity {...iconProps} />;
    }
    // Flow meters and measurement
    if (groupKey.includes("flow") || groupKey.includes("meter")) {
      return <Gauge {...iconProps} />;
    }
    // Pumps and fluid handling
    if (groupKey.includes("pump")) {
      return <Droplets {...iconProps} />;
    }
    // Tools and equipment
    if (groupKey.includes("tool")) {
      return <Hammer {...iconProps} />;
    }
    // Motors and drives
    if (groupKey.includes("motor") || groupKey.includes("drive")) {
      return <Zap {...iconProps} />;
    }
    // Industrial equipment
    if (groupKey.includes("industrial")) {
      return <Factory {...iconProps} />;
    }
    // Safety and protection
    if (groupKey.includes("safety") || groupKey.includes("protection")) {
      return <Settings {...iconProps} />;
    }
    // General equipment/components
    return <Package {...iconProps} />;
  };

  return (
    <header
      className="bg-background border-b border-border shadow-sm"
      role="banner"
    >
      {/* Top bar - Optimized with CSS animations instead of Framer Motion */}
      <div className="bg-primary text-white header-top-bar py-2 animate-in fade-in slide-in-from-top-2 duration-300">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 flex flex-row justify-center sm:justify-between items-center gap-4 sm:gap-0 text-base md:text-sm container-safe-no-overflow">
          <div className={cn(
              "flex items-center gap-4 sm:gap-6 md:gap-8 flex-wrap flex-safe",
              rtl.justifyStart,
            )}>
            <div className="flex items-center gap-2 md:gap-3">
              <a
                href={`tel:${COMPANY_INFO.phoneNumbers.primary}`}
                className="flex items-center hover:text-secondary transition-colors shrink-0"
                aria-label={t("common:ui.ariaLabels.callUs", {
                  phone: COMPANY_INFO.phoneNumbers.primary,
                })}
              >
                <Phone
                  className="w-4 h-4 sm:w-5 sm:h-5 text-secondary shrink-0 rtl-flip me-1"
                  aria-hidden="true"
                />
                <span className="text-wrap-safe text-sm md:text-base">
                  {COMPANY_INFO.phoneNumbers.primary}
                </span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phoneNumbers.secondary}`}
                className="flex items-center hover:text-secondary transition-colors shrink-0"
                aria-label={t("common:ui.ariaLabels.callUs", {
                  phone: COMPANY_INFO.phoneNumbers.secondary,
                })}
              >
                <Phone
                  className="w-4 h-4 sm:w-5 sm:h-5 text-secondary shrink-0 rtl-flip me-1"
                  aria-hidden="true"
                />
                <span className="text-wrap-safe text-sm md:text-base">
                  {COMPANY_INFO.phoneNumbers.secondary}
                </span>
              </a>
            </div>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center hover:text-secondary transition-colors shrink-0"
              aria-label={t("common:ui.ariaLabels.emailUs", {
                email: COMPANY_INFO.email,
              })}
            >
              <Mail
                className="w-4 h-4 sm:w-5 sm:h-5 text-secondary shrink-0 rtl-flip me-1"
                aria-hidden="true"
              />
              <span className="text-wrap-safe text-base md:text-sm">
                {COMPANY_INFO.email}
              </span>
            </a>
          </div>
          <div className="flex items-center gap-3 lg:gap-4">
            {/* Language Switcher and Theme Toggle in Top Bar */}
            <div className="flex items-center gap-2">
              <button
                data-testid="button-open-search"
                onClick={() => setIsSearchOpen(true)}
                className="p-1 rounded-md bg-accent/10 hover:bg-accent/20 transition-colors text-white hover:text-secondary"
                aria-label={t("common:buttons.search")}
              >
                <Search className="h-5 w-5" />
              </button>
              <div className="p-1 rounded-md bg-accent/10 hover:bg-accent/20 transition-colors">
                <LanguageSwitcher />
              </div>
              <div className="p-1 rounded-md bg-accent/10 hover:bg-accent/20 transition-colors">
                <ThemeToggle />
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/jiap3sBYbM3r8Pn68"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center hover:text-secondary transition-colors cursor-pointer"
              aria-label={t("common:ui.ariaLabels.openLocation")}
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
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav
        className="max-w-7xl mx-auto px-2 md:px-4 lg:px-6 xl:px-8"
        role="navigation"
        aria-label={t("common:ui.ariaLabels.mainNavigation")}
      >
        <div className="flex justify-between items-center py-3 sm:py-4">
          <div className="animate-in fade-in slide-in-from-left-2 duration-500">
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
          </div>

          {/* Desktop navigation - Optimized with CSS animations */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8 flex-safe animate-in fade-in slide-in-from-top-1 duration-500">
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
                    </motion.div>

                    {/* Services Dropdown Content - Rendered via Portal */}
                    {createPortal(
                        <div
                          className={`transition-all duration-200 fixed left-1/2 -translate-x-1/2 z-[9999] ${
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
                                {servicesData.map((service) => (
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
                        </div>,
                        document.body
                      )}

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
                        onPointerEnter={handleProductsDropdownEnter}
                        onPointerLeave={handleProductsDropdownLeave}
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
                    </motion.div>

                    {/* Products Dropdown Content - Rendered via Portal */}
                    {createPortal(
                      <div
                        className={`transition-all duration-200 fixed left-1/2 -translate-x-1/2 z-[9999] ${
                          isProductsDropdownOpen
                            ? "opacity-100 visible"
                            : "opacity-0 invisible"
                        }`}
                        style={{ top: `calc(${headerHeight}px - 1rem)` }}
                        onPointerEnter={handleProductsDropdownEnter}
                        onPointerLeave={handleProductsDropdownLeave}
                        data-dropdown-area="products"
                      >
                        <div
                          className="w-max max-w-[95vw] max-h-[70vh] bg-popover border-2 border-slate-300 dark:border-slate-600 rounded-md shadow-lg overflow-y-auto"
                          onClick={(e) => {
                            // Close only popup when clicking on empty space (not on menu items or the dropdown itself)
                            const target = e.target as Element;
                            const clickedOnMenuItem =
                              target.closest("a") ||
                              target.closest('[data-testid^="subcategory-"]') ||
                              target.closest('[role="button"]') ||
                              target.tagName.toLowerCase() === "button";
                            if (!clickedOnMenuItem) {
                              e.stopPropagation();
                              // Only close the popup, not the entire dropdown
                              setHoveredSubcategory(null);
                            }
                          }}
                        >
                          <div className="p-4 lg:p-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-4">
                              {productsData.map((product) => (
                                <div key={product.id} className="flex-safe">
                                  <Link
                                    href={`/products/${product.id}`}
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
                                          <div
                                            key={subcategory.id}
                                            className="relative"
                                            onPointerEnter={(e) =>
                                              handleSubcategoryHover(
                                                subcategory.id,
                                                e,
                                              )
                                            }
                                            onPointerLeave={(e) =>
                                              handleSubcategoryLeave(e)
                                            }
                                          >
                                            <Link
                                              href={`/products/${product.id}/${subcategory.id}`}
                                              className={`block px-2 lg:px-3 py-1 lg:py-2 rounded-sm hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-foreground cursor-pointer transition-colors text-xs lg:text-sm border-primary/40 hover:border-secondary bs-2 ${
                                                hasProductGroups(subcategory.id)
                                                  ? "hover:bg-blue-50 dark:hover:bg-blue-900/20 focus:bg-blue-50 dark:focus:bg-blue-900/20"
                                                  : ""
                                              }`}
                                              onClick={() =>
                                                setIsProductsDropdownOpen(false)
                                              }
                                              onFocus={(e) =>
                                                handleSubcategoryHover(
                                                  subcategory.id,
                                                  e,
                                                )
                                              }
                                              onBlur={handleSubcategoryBlur}
                                              onKeyDown={handleKeyDown}
                                              data-testid={`subcategory-${subcategory.id}`}
                                            >
                                              <div className="font-medium text-foreground responsive-text flex items-center justify-between text-wrap-safe">
                                                {String(
                                                  t(
                                                    `products:subcategories.${subcategory.id}.title`,
                                                    subcategory.title,
                                                  ),
                                                )}
                                              </div>
                                            </Link>
                                          </div>
                                        ),
                                      )}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>,
                      document.body
                    )}

                    {/* Product Groups Popup - Rendered via Portal */}
                    {createPortal(
                      <AnimatePresence>
                        {hoveredSubcategory && (
                          <motion.div
                            initial={{
                              opacity: 0,
                              scaleX: 0.3,
                              scaleY: 0.8,
                              x: -20,
                            }}
                            animate={{ opacity: 1, scaleX: 1, scaleY: 1, x: 0 }}
                            onPointerEnter={handlePopupHover}
                            onPointerLeave={handlePopupLeave}
                            data-popup-area="true"
                            exit={{
                              opacity: 0,
                              scaleX: 0.3,
                              scaleY: 0.8,
                              x: -20,
                            }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="fixed z-[10000] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl pointer-events-auto"
                            style={{
                              left: popupPosition.x,
                              top: popupPosition.y,
                              transformOrigin: "left center",
                              maxWidth: "400px",
                              minWidth: "300px",
                              maxHeight: "500px",
                            }}
                          >
                            <div className="p-4 max-h-[500px] overflow-y-auto">
                              <div className="space-y-2 ">
                                {getProductGroupsBySubcategory(
                                  hoveredSubcategory,
                                ).map((group) => (
                                  <Link
                                    key={group.key}
                                    href={`/products/${getParentCategoryBySubcategoryKey(
                                      group.subcategoryKey,
                                    )}/${group.subcategoryKey}/${group.slug}`}
                                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group border-rounded border-transparent hover:border-gray-200 dark:hover:border-gray-700 bg-blue-500/10 dark:bg-blue-900/20"
                                    onClick={() => {
                                      setIsProductsDropdownOpen(false);
                                      setHoveredSubcategory(null);
                                    }}
                                    data-testid={`product-group-${group.key}`}
                                  >
                                    <div className="flex-1 min-w-0">
                                      <h4 className="font-medium text-sm text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {group.titleKey
                                          ? t(group.titleKey)
                                          : group.title || "Product Group"}
                                      </h4>
                                    </div>
                                    <div className="text-blue-500 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                      <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M9 5l7 7-7 7"
                                        />
                                      </svg>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>,
                      document.body
                    )}
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
                      {item.name}
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
            <div className="ml-2">
              <Link href="/quote">
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-4 lg:px-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  {t("common:buttons.getQuote")}
                </Button>
              </Link>
            </div>
          </div>

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
                                    {getServices(t).map((service) => (
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
                                          href={`/products/${product.id}`}
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
                                                  href={`/products/${product.id}/${subcategory.id}`}
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

      {/* Search Dialog */}
      <SearchDialog open={isSearchOpen} onOpenChange={setIsSearchOpen} />
    </header>
  );
}
