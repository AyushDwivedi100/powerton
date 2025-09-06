import { SEO } from "@/lib/seo";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { routeRegistry } from "@/lib/route-registry";
import { useMemo } from "react";
import {
  Building2,
  FileText,
  Mail,
  Package,
  Settings,
  Newspaper,
  Calculator,
  MapPin,
  Home as HomeIcon,
  User,
  Wrench,
  Briefcase,
  ChevronRight,
  TreePine,
  Activity,
  Monitor,
  Network,
  ToggleLeft,
  FlaskConical,
  Radio,
  Thermometer,
  BarChart3,
  Search,
  Cable,
  Power,
  Battery,
  Drill,
  Scissors,
  Fan,
  Wind,
  Droplets,
  Move,
  Zap,
  Gauge,
  Cpu,
  Hammer,
  Sun,
  Truck,
  ShieldCheck,
  Cog,
  Factory,
  Camera,
  Shield,
  Download,
} from "lucide-react";

// Icon mapping for dynamic routing
const iconMap: Record<string, any> = {
  Home: HomeIcon,
  User,
  Mail,
  Camera,
  Settings,
  Wrench,
  Briefcase,
  Package,
  Gauge,
  Zap,
  Activity,
  Sun,
  Cpu,
  Shield,
  Truck,
  Hammer,
  Calculator,
  Download,
  Newspaper,
  FileText,
  MapPin,
  Building2,
  Monitor,
  Network,
  ToggleLeft,
  FlaskConical,
  Radio,
  Thermometer,
  BarChart3,
  Search,
  Cable,
  Power,
  Battery,
  Drill,
  Scissors,
  Fan,
  Wind,
  Droplets,
  Move,
  Factory,
  ShieldCheck,
  Cog,
  TreePine,
};

export default function Sitemap() {
  const { t } = useTranslation(["pages", "common"]);

  // Get dynamic site structure from route registry
  const siteStructure = useMemo(() => {
    const publicRoutes = routeRegistry.getPublicRoutes();

    return {
      main: {
        section: t("sitemap.sections.mainPages", { ns: "common" }),
        icon: <HomeIcon className="w-5 h-5 text-primary" />,
        routes: publicRoutes.filter((route) => route.category === "main"),
      },
      services: {
        section: t("sitemap.sections.servicesProjects", { ns: "common" }),
        icon: <Settings className="w-5 h-5 text-primary" />,
        routes: publicRoutes.filter((route) => route.category === "services"),
      },
      products: {
        section: t("sitemap.sections.productCategories", { ns: "common" }),
        icon: <Package className="w-5 h-5 text-primary" />,
        routes: publicRoutes.filter((route) => route.category === "products"),
        categories: publicRoutes.filter(
          (route) => route.category === "product-categories",
        ),
        subcategories: publicRoutes.filter(
          (route) => route.category === "product-subcategories",
        ),
      },
      resources: {
        section: t("sitemap.sections.resourcesTools", { ns: "common" }),
        icon: <Calculator className="w-5 h-5 text-primary" />,
        routes: publicRoutes.filter((route) => route.category === "resources"),
      },
      legal: {
        section: t("sitemap.sections.legalInformation", { ns: "common" }),
        icon: <FileText className="w-5 h-5 text-primary" />,
        routes: publicRoutes.filter((route) => route.category === "legal"),
      },
    };
  }, [t]);

  const getIcon = (iconName: string, className: string = "w-4 h-4") => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? (
      <IconComponent className={className} />
    ) : (
      <Package className={className} />
    );
  };

  const renderRoute = (route: any, index: number) => (
    <Link key={index} href={route.path}>
      <div className="group block p-4 rounded-lg border border-border hover:border-primary/20 hover:bg-accent/50 transition-all duration-200 cursor-pointer">
        <div className="flex items-center gap-4">
          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
          <div className="flex-1">
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
              {t(`sitemap.pages.${route.title}`, {
                ns: "common",
                defaultValue: route.title,
              })}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t(`sitemap.descriptions.${route.description}`, {
                ns: "common",
                defaultValue: route.description,
              })}
            </p>
          </div>
          <div className="text-xs text-muted-foreground font-mono bg-muted px-2 py-1 rounded">
            {route.path}
          </div>
        </div>
      </div>
    </Link>
  );

  const renderProductCategory = (
    category: any,
    subcategories: any[],
    categoryIndex: number,
  ) => (
    <div key={categoryIndex} className="ml-4">
      {/* Category Header */}
      <div className="flex items-center gap-3 mb-4 p-3 bg-muted/50 rounded-lg">
        {getIcon(category.icon || "Package", "w-4 h-4 text-blue-600")}
        <h4 className="text-lg font-semibold text-foreground">
          {t(`sitemap.categories.${category.title}`, {
            ns: "common",
            defaultValue: category.title,
          })}
        </h4>
        <div className="flex-1 border-b border-border/30"></div>
        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
          {subcategories.length} products
        </span>
      </div>

      {/* Category Products */}
      <div className="ml-6 flex flex-col gap-2">
        {subcategories.map((product, productIndex) => (
          <Link key={productIndex} href={product.path}>
            <div className="group block p-3 rounded-lg border border-border/50 hover:border-primary/20 hover:bg-accent/30 transition-all duration-200 cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary/60 rounded-full group-hover:bg-primary group-hover:scale-125 transition-all"></div>
                <div className="flex-1 min-w-0">
                  <h5 className="font-medium text-foreground group-hover:text-primary transition-colors text-sm leading-tight">
                    {t(`sitemap.pages.${product.title}`, {
                      ns: "common",
                      defaultValue: product.title,
                    })}
                  </h5>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {t(`sitemap.descriptions.${product.description}`, {
                      ns: "common",
                      defaultValue: product.description,
                    })}
                  </p>
                </div>
                <div className="text-xs text-muted-foreground font-mono bg-muted/80 px-2 py-1 rounded shrink-0">
                  {product.path}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <SEO
        title={t('sitemap.seoTitle', { ns: 'common' })}
        description={t('sitemap.seoDescription', { ns: 'common' })}
        keywords="sitemap, website navigation, powerton engineering, industrial automation, electrical engineering, products, services, projects, site structure"
        canonicalUrl="https://powertonengineering.in/sitemap"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: t('sitemap.seoTitle', { ns: 'common' }),
          description: t('sitemap.seoDescription', { ns: 'common' }),
          publisher: {
            "@type": "Organization",
            name: t('company.name', { ns: 'common' }),
            url: "https://powertonengineering.in",
          },
          mainEntity: {
            "@type": "SiteNavigationElement",
            name: t('sitemap.seoTitle', { ns: 'common' }),
            description: t('sitemap.seoDescription', { ns: 'common' }),
          },
        }}
      />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {t('sitemap.title', { ns: 'common' })}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('sitemap.subtitle', { ns: 'common' })}
              </p>
            </div>

            {/* Page Sections */}
            <div className="space-y-8">
              {/* Main Pages */}
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  {siteStructure.main.icon}
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                    {siteStructure.main.section}
                  </h2>
                </div>
                <div className="flex flex-col gap-4">
                  {siteStructure.main.routes.map(renderRoute)}
                </div>
              </div>

              {/* Services & Projects */}
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  {siteStructure.services.icon}
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                    {siteStructure.services.section}
                  </h2>
                </div>
                <div className="flex flex-col gap-4">
                  {siteStructure.services.routes.map(renderRoute)}
                </div>
              </div>

              {/* Products */}
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  {siteStructure.products.icon}
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                    {siteStructure.products.section}
                  </h2>
                </div>

                {/* Main Product Pages */}
                <div className="flex flex-col gap-4 mb-6">
                  {siteStructure.products.routes.map(renderRoute)}
                </div>

                {/* Product Categories */}
                <div className="border-t border-border pt-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <TreePine className="w-5 h-5 text-primary" />
                    {t("quickActions.productCategories", { ns: "common" })}
                  </h3>
                  <div className="flex flex-col gap-6">
                    {siteStructure.products.categories.map(
                      (category, categoryIndex) => {
                        const subcategories =
                          siteStructure.products.subcategories.filter(
                            (subcat) => subcat.parentRoute === category.path,
                          );
                        return renderProductCategory(
                          category,
                          subcategories,
                          categoryIndex,
                        );
                      },
                    )}
                  </div>
                </div>
              </div>

              {/* Resources */}
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  {siteStructure.resources.icon}
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                    {siteStructure.resources.section}
                  </h2>
                </div>
                <div className="flex flex-col gap-4">
                  {siteStructure.resources.routes.map(renderRoute)}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-12 p-6 bg-muted rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {t("quickActions.title", { ns: "common" })}
              </h3>
              <p className="text-muted-foreground mb-4">
                {t("quickActions.subtitle", { ns: "common" })}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <div className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors cursor-pointer">
                    <Mail className="w-4 h-4 mr-2" />
                    {t("quickActions.contactUs", { ns: "common" })}
                  </div>
                </Link>
                <Link href="/quote">
                  <div className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors cursor-pointer">
                    <Calculator className="w-4 h-4 mr-2" />
                    {t("quickActions.requestQuote", { ns: "common" })}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
