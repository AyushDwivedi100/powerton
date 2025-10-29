// Performance optimization utilities

// Critical resource loading
export function loadCriticalResources() {
  // Preload critical fonts
  const criticalFonts = [
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
  ];

  criticalFonts.forEach((font) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "style";
    link.href = font;
    document.head.appendChild(link);
  });
}

// Resource prefetching for better navigation
export function prefetchRoutes(routes: string[]) {
  if ("requestIdleCallback" in window) {
    requestIdleCallback(() => {
      routes.forEach((route) => {
        const link = document.createElement("link");
        link.rel = "prefetch";
        link.href = route;
        document.head.appendChild(link);
      });
    });
  }
}

// Performance metrics collection
export function collectPerformanceMetrics() {
  if ("performance" in window && "getEntriesByType" in performance) {
    const navigation = performance.getEntriesByType(
      "navigation"
    )[0] as PerformanceNavigationTiming;
    const paint = performance.getEntriesByType("paint");

    const metrics = {
      // Core Web Vitals approximation
      domContentLoaded:
        navigation.domContentLoadedEventEnd -
        navigation.domContentLoadedEventStart,
      loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
      firstContentfulPaint:
        paint.find((p) => p.name === "first-contentful-paint")?.startTime || 0,
      // Network timing
      dns: navigation.domainLookupEnd - navigation.domainLookupStart,
      connect: navigation.connectEnd - navigation.connectStart,
      request: navigation.responseStart - navigation.requestStart,
      response: navigation.responseEnd - navigation.responseStart,
    };

    return metrics;
  }
  return null;
}

// Optimize font loading
export function optimizeFontLoading() {
  // Add font-display: swap to improve loading performance
  const style = document.createElement("style");
  style.textContent = `
    @font-face {
      font-family: 'Inter';
      font-display: swap;
    }
  `;
  document.head.appendChild(style);
}

// Service Worker registration for caching
export function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      // Note: Service worker would need to be implemented separately
      // This is a placeholder for future implementation
      console.log("Service Worker support detected");
    });
  }
}

// Memory optimization
export function optimizeMemoryUsage() {
  // Clean up unused event listeners
  const cleanupFunctions: Array<() => void> = [];

  // Debounced resize handler
  let resizeTimeout: NodeJS.Timeout;
  const handleResize = () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      window.dispatchEvent(new Event("optimizedResize"));
    }, 250);
  };

  window.addEventListener("resize", handleResize, { passive: true });
  cleanupFunctions.push(() =>
    window.removeEventListener("resize", handleResize)
  );

  return () => {
    cleanupFunctions.forEach((cleanup) => cleanup());
  };
}

// Initialize all performance optimizations
export function initializePerformanceOptimizations() {
  // Load critical resources
  loadCriticalResources();

  // Optimize font loading
  optimizeFontLoading();

  // Setup memory optimization
  const cleanupMemory = optimizeMemoryUsage();

  // Prefetch important routes
  prefetchRoutes(["/services", "/products", "/contact"]);

  // Return cleanup function
  return cleanupMemory;
}
