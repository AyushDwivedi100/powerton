import { Switch, Route } from "wouter";
import { lazy, Suspense } from "react";
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
import Contact from "@/pages/contact";
import Quote from "@/pages/quote";

import News from "@/pages/news";
import NewsArticle from "@/pages/news-article";
import ServiceDetail from "@/pages/service-detail";
import Sitemap from "@/pages/sitemap";
import TermsOfService from "@/pages/terms-of-service";
import PortfolioDownload from "@/pages/portfolio-download";
import Gallery from "@/pages/gallery";

import NotFound from "@/pages/not-found";

// Lazy load product category pages
const ProductInstrumentationComponents = lazy(() => import("@/pages/product-instrumentation-components"));
const ProductMeasurementInstruments = lazy(() => import("@/pages/product-measurement-instruments"));
const ProductSolarProducts = lazy(() => import("@/pages/product-solar-products"));
const ProductAutomationControlSystems = lazy(() => import("@/pages/product-automation-control-systems"));
const ProductSafetyProtectiveDevices = lazy(() => import("@/pages/product-safety-protective-devices"));
const ProductMechanicalPumpsSpares = lazy(() => import("@/pages/product-mechanical-pumps-spares"));
const ProductIndustrialToolsTackles = lazy(() => import("@/pages/product-industrial-tools-tackles"));
const ProductBLDC = lazy(() => import("@/pages/product-bldc"));
const ProductElectricalComponents = lazy(() => import("@/pages/product-electrical-components"));

// Lazy load subcategory detail pages
const ProductMultimeters = lazy(() => import("@/pages/product-multimeters"));
const ProductOscilloscopes = lazy(() => import("@/pages/product-oscilloscopes"));
const ProductSpectrumAnalyzers = lazy(() => import("@/pages/product-spectrum-analyzers"));
const ProductSolarPanels = lazy(() => import("@/pages/product-solar-panels"));
const ProductSolarInverters = lazy(() => import("@/pages/product-solar-inverters"));
const ProductPLCs = lazy(() => import("@/pages/product-plcs"));
const ProductSCADA = lazy(() => import("@/pages/product-scada"));
const ProductCentrifugalPumps = lazy(() => import("@/pages/product-centrifugal-pumps"));
const ProductHandTools = lazy(() => import("@/pages/product-hand-tools"));
const ProductBLDCCeilingFan = lazy(() => import("@/pages/product-bldc-ceiling-fan"));
const ProductPowerQualityAnalyzers = lazy(() => import("@/pages/product-power-quality-analyzers"));
const ProductCalibrationEquipment = lazy(() => import("@/pages/product-calibration-equipment"));
const ProductDCS = lazy(() => import("@/pages/product-dcs"));
const ProductHMI = lazy(() => import("@/pages/product-hmi"));
const ProductDiaphragmPumps = lazy(() => import("@/pages/product-diaphragm-pumps"));
const ProductPowerTools = lazy(() => import("@/pages/product-power-tools"));
const ProductBLDCSubmersibleSurfacePump = lazy(() => import("@/pages/product-bldc-submersible-surface-pump"));
const ProductCablesWires = lazy(() => import("@/pages/product-cables-wires"));

// Lazy load existing product detail pages that we know work
const ProductConnectorsTerminals = lazy(() => import("@/pages/product-connectors-terminals"));
const ProductCircuitBreakersFuses = lazy(() => import("@/pages/product-circuit-breakers-fuses"));
const ProductPowerSupplies = lazy(() => import("@/pages/product-power-supplies"));
const ProductEnclosuresCabinets = lazy(() => import("@/pages/product-enclosures-cabinets"));
const ProductHeatingElementsAppliances = lazy(() => import("@/pages/product-heating-elements-appliances"));
const ProductMountingStructuresRacking = lazy(() => import("@/pages/product-mounting-structures-racking"));
const ProductSolarChargeControllers = lazy(() => import("@/pages/product-solar-charge-controllers"));
const ProductSolarBatteriesEnergyStorage = lazy(() => import("@/pages/product-solar-batteries-energy-storage"));
const ProductSurgeProtectors = lazy(() => import("@/pages/product-surge-protectors"));
const ProductGroundingSystems = lazy(() => import("@/pages/product-grounding-systems"));
const ProductSafetyRelaysSwitches = lazy(() => import("@/pages/product-safety-relays-switches"));
const ProductIntrinsicallySafeEquipment = lazy(() => import("@/pages/product-intrinsically-safe-equipment"));
const ProductGearPumps = lazy(() => import("@/pages/product-gear-pumps"));
const ProductPumpPartsSpares = lazy(() => import("@/pages/product-pump-parts-spares"));
const ProductCuttingTools = lazy(() => import("@/pages/product-cutting-tools"));
const ProductLiftingEquipment = lazy(() => import("@/pages/product-lifting-equipment"));
const ProductSafetyEquipment = lazy(() => import("@/pages/product-safety-equipment"));
const ProductBLDCCoolerExhaustMotor = lazy(() => import("@/pages/product-bldc-cooler-exhaust-motor"));
const ProductBLDCTableFanWallFanMotor = lazy(() => import("@/pages/product-bldc-table-fan-wall-fan-motor"));

// Lazy load product detail pages
const ProductSensors = lazy(() => import("@/pages/product-sensors"));
const ProductTransmitters = lazy(() => import("@/pages/product-transmitters"));
const ProductControllers = lazy(() => import("@/pages/product-controllers"));
const ProductSwitches = lazy(() => import("@/pages/product-switches"));
const ProductValves = lazy(() => import("@/pages/product-valves"));
const ProductAnalyzers = lazy(() => import("@/pages/product-analyzers"));
const ProductSignalConditioners = lazy(() => import("@/pages/product-signal-conditioners"));

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="text-center">
      <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-muted-foreground">Loading...</p>
    </div>
  </div>
);

function Router() {
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/services/:id" component={ServiceDetail} />
        <Route path="/products" component={Products} />
        
        {/* Main Product Categories */}
        <Route path="/products/instrumentation-components" component={ProductInstrumentationComponents} />
        <Route path="/products/electrical-components" component={ProductElectricalComponents} />
        <Route path="/products/measurement-instruments" component={ProductMeasurementInstruments} />
        <Route path="/products/solar-products" component={ProductSolarProducts} />
        <Route path="/products/automation-control-systems" component={ProductAutomationControlSystems} />
        <Route path="/products/safety-protective-devices" component={ProductSafetyProtectiveDevices} />
        <Route path="/products/mechanical-pumps-spares" component={ProductMechanicalPumpsSpares} />
        <Route path="/products/industrial-tools-tackles" component={ProductIndustrialToolsTackles} />
        <Route path="/products/bldc" component={ProductBLDC} />
        
        {/* Instrumentation Components Subcategories */}
        <Route path="/products/sensors" component={ProductSensors} />
        <Route path="/products/transmitters" component={ProductTransmitters} />
        <Route path="/products/controllers" component={ProductControllers} />
        <Route path="/products/switches" component={ProductSwitches} />
        <Route path="/products/valves" component={ProductValves} />
        <Route path="/products/analyzers" component={ProductAnalyzers} />
        <Route path="/products/signal-conditioners" component={ProductSignalConditioners} />
        
        {/* Measurement Instruments Subcategories */}
        <Route path="/products/multimeters" component={ProductMultimeters} />
        <Route path="/products/oscilloscopes" component={ProductOscilloscopes} />
        <Route path="/products/spectrum-analyzers" component={ProductSpectrumAnalyzers} />
        <Route path="/products/power-quality-analyzers" component={ProductPowerQualityAnalyzers} />
        <Route path="/products/calibration-equipment" component={ProductCalibrationEquipment} />
        <Route path="/products/cables-wires" component={ProductCablesWires} />
        <Route path="/products/connectors-terminals" component={ProductConnectorsTerminals} />
        <Route path="/products/circuit-breakers-fuses" component={ProductCircuitBreakersFuses} />
        <Route path="/products/power-supplies" component={ProductPowerSupplies} />
        <Route path="/products/enclosures-cabinets" component={ProductEnclosuresCabinets} />
        <Route path="/products/heating-elements-appliances" component={ProductHeatingElementsAppliances} />
        <Route path="/products/solar-panels" component={ProductSolarPanels} />
        <Route path="/products/solar-inverters" component={ProductSolarInverters} />
        <Route path="/products/mounting-structures-racking" component={ProductMountingStructuresRacking} />
        <Route path="/products/solar-charge-controllers" component={ProductSolarChargeControllers} />
        <Route path="/products/solar-batteries-energy-storage" component={ProductSolarBatteriesEnergyStorage} />
        <Route path="/products/plcs" component={ProductPLCs} />
        <Route path="/products/scada" component={ProductSCADA} />
        <Route path="/products/dcs" component={ProductDCS} />
        <Route path="/products/hmi" component={ProductHMI} />
        <Route path="/products/surge-protectors" component={ProductSurgeProtectors} />
        <Route path="/products/grounding-systems" component={ProductGroundingSystems} />
        <Route path="/products/safety-relays-switches" component={ProductSafetyRelaysSwitches} />
        <Route path="/products/intrinsically-safe-equipment" component={ProductIntrinsicallySafeEquipment} />
        <Route path="/products/centrifugal-pumps" component={ProductCentrifugalPumps} />
        <Route path="/products/diaphragm-pumps" component={ProductDiaphragmPumps} />
        <Route path="/products/gear-pumps" component={ProductGearPumps} />
        <Route path="/products/pump-parts-spares" component={ProductPumpPartsSpares} />
        <Route path="/products/hand-tools" component={ProductHandTools} />
        <Route path="/products/power-tools" component={ProductPowerTools} />
        <Route path="/products/cutting-tools" component={ProductCuttingTools} />
        <Route path="/products/lifting-equipment" component={ProductLiftingEquipment} />
        <Route path="/products/safety-equipment" component={ProductSafetyEquipment} />
        <Route path="/products/bldc-cooler-exhaust-motor" component={ProductBLDCCoolerExhaustMotor} />
        <Route path="/products/bldc-ceiling-fan" component={ProductBLDCCeilingFan} />
        <Route path="/products/bldc-submersible-surface-pump" component={ProductBLDCSubmersibleSurfacePump} />
        <Route path="/products/bldc-table-fan-wall-fan-motor" component={ProductBLDCTableFanWallFanMotor} />
        <Route path="/projects" component={Projects} />
        <Route path="/gallery" component={Gallery} />

        <Route path="/news" component={News} />
        <Route path="/news/:slug" component={NewsArticle} />
        <Route path="/sitemap" component={Sitemap} />

        <Route path="/terms-of-service" component={TermsOfService} />
        <Route path="/portfolio-download" component={PortfolioDownload} />

        <Route path="/quote" component={Quote} />
        <Route path="/contact" component={Contact} />
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
