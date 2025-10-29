import { createRoot } from "react-dom/client";
import { initializePerformanceOptimizations } from "@/utils/performance";
import {
  setupLazyLoading,
  preloadCriticalImages,
} from "@/utils/image-optimization";
import { initializeAccessibilityEnhancements } from "@/utils/accessibility-enhancements";
import { HERO_IMAGES } from "@/assets/images";
import App from "./App";
import "./lib/i18n"; // Initialize i18n
import "./index.css";

// Global error handler to prevent unhandled promise rejections from flooding console
window.addEventListener("unhandledrejection", (event) => {
  // Log the error silently for debugging if needed, but prevent console flooding
  console.debug("Promise rejection handled gracefully:", event.reason);
  event.preventDefault(); // Prevent default error reporting
});

// Initialize performance optimizations early
const cleanup = initializePerformanceOptimizations();

// Preload critical images immediately (above-the-fold content)
const criticalImages = [
  HERO_IMAGES.home.src,
  HERO_IMAGES.about.src,
  HERO_IMAGES.services.src,
  HERO_IMAGES.products.src,
];
preloadCriticalImages(criticalImages);

// Setup optimizations after DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  setupLazyLoading();
  initializeAccessibilityEnhancements();
});

// Cleanup on page unload
window.addEventListener("beforeunload", cleanup);

createRoot(document.getElementById("root")!).render(<App />);
