import { Switch, Route, useLocation } from "wouter";
import { lazy, Suspense, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@/hooks/use-theme";

// Layout
import Layout from "@/components/layout/layout";

// Pages
import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import Products from "@/pages/products";
import Projects from "@/pages/projects";
import Gallery from "@/pages/gallery";
import Career from "@/pages/career";
import Contact from "@/pages/contact";
import Quote from "@/pages/quote";
import Sitemap from "@/pages/sitemap";
import NotFound from "@/pages/not-found";

// Lazy load dynamic service category page
const ServiceCategoryPage = lazy(
  () => import("@/pages/service-category-dynamic")
);

// Lazy load dynamic product category page
const ProductCategoryDynamic = lazy(
  () => import("@/pages/product-category-dynamic")
);

// Lazy load dynamic product sub-category page
const ProductSubCategoryDynamic = lazy(
  () => import("@/pages/products-sub-category-dynamic")
);

// Lazy load dynamic product group page
const ProductGroupDynamic = lazy(() => import("@/pages/product-group-dynamic"));

// Lazy load dynamic product detail page
const ProductDetailDynamic = lazy(
  () => import("@/pages/product-detail-dynamic")
);

// Loading component for Suspense fallback
const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
};

function Router() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location]);

  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />

          {/* Dynamic Service Category Pages */}
          <Route
            path="/services-category/:slug"
            component={ServiceCategoryPage}
          />

          {/* Product Detail with Group Context Route (most specific first) */}
          <Route
            path="/products/:parentSlug/:subcategorySlug/:groupSlug/:slug"
            component={ProductDetailDynamic}
          />

          {/* Dynamic Product Group Route (hierarchical) - 3 segments */}
          <Route
            path="/products/:parentSlug/:subcategorySlug/:groupSlug"
            component={ProductGroupDynamic}
          />

          {/* Dynamic Product Sub-Category Route (hierarchical) - 2 segments */}
          <Route
            path="/products/:parentSlug/:slug"
            component={ProductSubCategoryDynamic}
          />

          {/* Dynamic Product Category Route (catches single-slug patterns) */}
          <Route path="/products/:slug" component={ProductCategoryDynamic} />

          <Route path="/projects" component={Projects} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/career" component={Career} />
          <Route path="/contact" component={Contact} />
          <Route path="/quote" component={Quote} />

          <Route path="/sitemap" component={Sitemap} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Layout>
  );
}

function App() {
  const { ready } = useTranslation();

  if (!ready) {
    return <LoadingSpinner />;
  }

  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="system" storageKey="powerton-ui-theme">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
