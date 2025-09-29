import { Switch, Route } from "wouter";
import { lazy, Suspense } from "react";
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
import PortfolioDownload from "@/pages/portfolio-download";
import Gallery from "@/pages/gallery";
import News from "@/pages/news";
import NewsArticle from "@/pages/news-article";
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
const ProductGroupDynamic = lazy(
  () => import("@/pages/product-group-dynamic")
);

// Lazy load dynamic product detail page
const ProductDetailDynamic = lazy(
  () => import("@/pages/product-detail-dynamic")
);

// Loading component for Suspense fallback
const LoadingSpinner = () => {
  const { t } = useTranslation("common");

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-muted-foreground">{t("loading", "Loading...")}</p>
      </div>
    </div>
  );
};

function Router() {
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
            path="/products/:subcategorySlug/:groupSlug/:slug"
            component={ProductDetailDynamic}
          />

          {/* Dynamic Product Sub-Category Route (hierarchical) - moved up for priority */}
          <Route
            path="/products/:parentSlug/:slug"
            component={ProductSubCategoryDynamic}
          />

          {/* Dynamic Product Group Route */}
          <Route
            path="/products/:subcategorySlug/:groupSlug"
            component={ProductGroupDynamic}
          />

          {/* Dynamic Product Category Route (catches single-slug patterns) */}
          <Route
            path="/products/:slug"
            component={ProductCategoryDynamic}
          />

          <Route path="/projects" component={Projects} />
          <Route path="/portfolio-download" component={PortfolioDownload} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/news" component={News} />
          <Route path="/news/:slug" component={NewsArticle} />
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
