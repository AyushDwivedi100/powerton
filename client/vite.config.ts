import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import runtimeErrorModal from "@replit/vite-plugin-runtime-error-modal";
import viteCompression from "vite-plugin-compression";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorModal(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "..", "attached_assets"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5000,
    strictPort: false,
    allowedHosts: true,
    hmr: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  preview: {
    host: "0.0.0.0",
    port: 5000,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: false,
    minify: "esbuild",
    cssMinify: true,
    cssCodeSplit: true,
    modulePreload: {
      polyfill: false,
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Vendor chunks - split by library for better caching
          if (id.includes("node_modules")) {
            // React core
            if (id.includes("react") || id.includes("react-dom")) {
              return "vendor-react";
            }
            // Routing
            if (id.includes("wouter")) {
              return "vendor-router";
            }
            // State management
            if (id.includes("@tanstack/react-query")) {
              return "vendor-query";
            }
            // i18n libraries
            if (id.includes("i18next") || id.includes("react-i18next")) {
              return "vendor-i18n";
            }
            // UI libraries
            if (id.includes("framer-motion")) {
              return "vendor-animation";
            }
            if (id.includes("@radix-ui")) {
              return "vendor-ui";
            }
            if (id.includes("lucide-react")) {
              return "vendor-icons";
            }
            // Form libraries
            if (id.includes("react-hook-form") || id.includes("@hookform") || id.includes("zod")) {
              return "vendor-forms";
            }
            // Other dependencies
            return "vendor-misc";
          }
          
          // Route-based code splitting for pages
          if (id.includes("/pages/home")) {
            return "page-home";
          }
          if (id.includes("/pages/about")) {
            return "page-about";
          }
          if (id.includes("/pages/services") || id.includes("/pages/service-category")) {
            return "page-services";
          }
          if (id.includes("/pages/products") || id.includes("/pages/product-")) {
            return "page-products";
          }
          if (id.includes("/pages/projects")) {
            return "page-projects";
          }
          if (id.includes("/pages/gallery")) {
            return "page-gallery";
          }
          if (id.includes("/pages/career")) {
            return "page-career";
          }
          if (id.includes("/pages/contact")) {
            return "page-contact";
          }
          if (id.includes("/pages/quote")) {
            return "page-quote";
          }
          
          // Split large data files
          if (id.includes("/data/products-") || id.includes("/data/productImages")) {
            return "data-products";
          }
          if (id.includes("/data/services-")) {
            return "data-services";
          }
          if (id.includes("/data/projects-")) {
            return "data-projects";
          }
        },
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
    chunkSizeWarningLimit: 500,
  },
  optimizeDeps: {
    include: ["react", "react-dom", "wouter"],
    exclude: ["@replit/vite-plugin-runtime-error-modal"],
  },
});
