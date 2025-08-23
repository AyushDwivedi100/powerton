import { createRoot } from "react-dom/client";
import { initializePerformanceOptimizations } from "@/utils/performance";
import { setupLazyLoading } from "@/utils/image-optimization";
import { initializeAccessibilityEnhancements } from "@/utils/accessibility-enhancements";
import App from "./App";
import "./index.css";

// Global error handler to prevent unhandled promise rejections from flooding console
window.addEventListener('unhandledrejection', (event) => {
  // Log the error silently for debugging if needed, but prevent console flooding
  console.debug('Promise rejection handled gracefully:', event.reason);
  event.preventDefault(); // Prevent default error reporting
});

// Initialize performance optimizations
const cleanup = initializePerformanceOptimizations();

// Setup optimizations after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  setupLazyLoading();
  initializeAccessibilityEnhancements();
});

// Cleanup on page unload
window.addEventListener('beforeunload', cleanup);

createRoot(document.getElementById("root")!).render(<App />);
