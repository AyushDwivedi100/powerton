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
import Contact from "@/pages/contact";
import Quote from "@/pages/quote";

import News from "@/pages/news";
import NewsArticle from "@/pages/news-article";
// Individual Service Pages
import InstallationCommissioning from "@/pages/services-category/installation-commissioning";
import MaintenanceRepair from "@/pages/services-category/maintenance-repair";
import CalibrationTesting from "@/pages/services-category/calibration-testing";
import ConsultationTraining from "@/pages/services-category/consultation-training";
import CustomSolutions from "@/pages/services-category/custom-solutions";
import SupplyChainManagement from "@/pages/services-category/supply-chain-management";
import TechnicalSupport from "@/pages/services-category/technical-support";
import SolarEPC from "@/pages/services-category/solar-epc";
import Sitemap from "@/pages/sitemap";
import PortfolioDownload from "@/pages/portfolio-download";
import Gallery from "@/pages/gallery";

import NotFound from "@/pages/not-found";

// Lazy load product category pages
const ProductInstrumentationComponents = lazy(() => import("@/pages/product-categories/instrumentation-components"));
const ProductElectricalComponents = lazy(() => import("@/pages/product-categories/electrical-components"));
const ProductMeasurementInstruments = lazy(() => import("@/pages/product-categories/measurement-instruments"));
const ProductSolarProducts = lazy(() => import("@/pages/product-categories/solar-products"));
const ProductAutomationControlSystems = lazy(() => import("@/pages/product-categories/automation-control-systems"));
const ProductSafetyProtectiveDevices = lazy(() => import("@/pages/product-categories/safety-protective-devices"));
const ProductMechanicalPumpsSpares = lazy(() => import("@/pages/product-categories/mechanical-pumps-spares"));
const ProductIndustrialToolsTackles = lazy(() => import("@/pages/product-categories/industrial-tools-tackles"));
const ProductBLDC = lazy(() => import("@/pages/product-categories/bldc"));

// Lazy load subcategory detail pages
const ProductSensors = lazy(() => import("@/pages/products-sub-category/sensors"));
const ProductTransmitters = lazy(() => import("@/pages/products-sub-category/transmitters"));
const ProductControllers = lazy(() => import("@/pages/products-sub-category/controllers"));
const ProductSwitches = lazy(() => import("@/pages/products-sub-category/switches"));
const ProductValves = lazy(() => import("@/pages/products-sub-category/valves"));
const ProductAnalyzers = lazy(() => import("@/pages/products-sub-category/analyzers"));
const ProductSignalConditioners = lazy(() => import("@/pages/products-sub-category/signal-conditioners"));
const ProductCablesWires = lazy(() => import("@/pages/products-sub-category/cables-wires"));
const ProductConnectorsTerminals = lazy(() => import("@/pages/products-sub-category/connectors-terminals"));
const ProductCircuitBreakersFuses = lazy(() => import("@/pages/products-sub-category/circuit-breakers-fuses"));
const ProductPowerSupplies = lazy(() => import("@/pages/products-sub-category/power-supplies"));
const ProductEnclosuresCabinets = lazy(() => import("@/pages/products-sub-category/enclosures-cabinets"));
const ProductHeatingElementsAppliances = lazy(() => import("@/pages/products-sub-category/heating-elements-appliances"));
const ProductMultimeters = lazy(() => import("@/pages/products-sub-category/multimeters"));
const ProductOscilloscopes = lazy(() => import("@/pages/products-sub-category/oscilloscopes"));
const ProductSpectrumAnalyzers = lazy(() => import("@/pages/products-sub-category/spectrum-analyzers"));
const ProductPowerQualityAnalyzers = lazy(() => import("@/pages/products-sub-category/power-quality-analyzers"));
const ProductCalibrationEquipment = lazy(() => import("@/pages/products-sub-category/calibration-equipment"));
const ProductSolarPanels = lazy(() => import("@/pages/products-sub-category/solar-panels"));
const ProductSolarInverters = lazy(() => import("@/pages/products-sub-category/solar-inverters"));
const ProductMountingStructuresRacking = lazy(() => import("@/pages/products-sub-category/mounting-structures-racking"));
const ProductSolarChargeControllers = lazy(() => import("@/pages/products-sub-category/solar-charge-controllers"));
const ProductSolarBatteriesEnergyStorage = lazy(() => import("@/pages/products-sub-category/solar-batteries-energy-storage"));
const ProductPLCs = lazy(() => import("@/pages/products-sub-category/plcs"));
const ProductSCADA = lazy(() => import("@/pages/products-sub-category/scada"));
const ProductDCS = lazy(() => import("@/pages/products-sub-category/dcs"));
const ProductHMI = lazy(() => import("@/pages/products-sub-category/hmi"));
const ProductSurgeProtectors = lazy(() => import("@/pages/products-sub-category/surge-protectors"));
const ProductGroundingSystems = lazy(() => import("@/pages/products-sub-category/grounding-systems"));
const ProductSafetyRelaysSwitches = lazy(() => import("@/pages/products-sub-category/safety-relays-switches"));
const ProductIntrinsicallySafeEquipment = lazy(() => import("@/pages/products-sub-category/intrinsically-safe-equipment"));
const ProductCentrifugalPumps = lazy(() => import("@/pages/products-sub-category/centrifugal-pumps"));
const ProductDiaphragmPumps = lazy(() => import("@/pages/products-sub-category/diaphragm-pumps"));
const ProductGearPumps = lazy(() => import("@/pages/products-sub-category/gear-pumps"));
const ProductPumpPartsSpares = lazy(() => import("@/pages/products-sub-category/pump-parts-spares"));
const ProductHandTools = lazy(() => import("@/pages/products-sub-category/hand-tools"));
const ProductPowerTools = lazy(() => import("@/pages/products-sub-category/power-tools"));
const ProductCuttingTools = lazy(() => import("@/pages/products-sub-category/cutting-tools"));
const ProductLiftingEquipment = lazy(() => import("@/pages/products-sub-category/lifting-equipment"));
const ProductSafetyEquipment = lazy(() => import("@/pages/products-sub-category/safety-equipment"));
const ProductBLDCCoolerExhaustMotor = lazy(() => import("@/pages/products-sub-category/bldc-cooler-exhaust-motor"));
const ProductBLDCCeilingFan = lazy(() => import("@/pages/products-sub-category/bldc-ceiling-fan"));
const ProductBLDCSubmersibleSurfacePump = lazy(() => import("@/pages/products-sub-category/bldc-submersible-surface-pump"));
const ProductBLDCTableFanWallFanMotor = lazy(() => import("@/pages/products-sub-category/bldc-table-fan-wall-fan-motor"));

// Loading component for Suspense fallback
const LoadingSpinner = () => {
  const { t } = useTranslation('common');
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-muted-foreground">{t('loading', 'Loading...')}</p>
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
                {/* Individual Service Pages */}
        <Route path="/services-category/installation-commissioning" component={InstallationCommissioning} />
        <Route path="/services-category/maintenance-repair" component={MaintenanceRepair} />
        <Route path="/services-category/calibration-testing" component={CalibrationTesting} />
        <Route path="/services-category/consultation-training" component={ConsultationTraining} />
        <Route path="/services-category/custom-solutions" component={CustomSolutions} />
        <Route path="/services-category/supply-chain-management" component={SupplyChainManagement} />
        <Route path="/services-category/technical-support" component={TechnicalSupport} />
        <Route path="/services-category/solar-epc" component={SolarEPC} />
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
