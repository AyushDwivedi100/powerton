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

// Dynamic Service Category Page
import ServiceCategoryPage from "@/pages/ServiceCategoryPage";
import CentrifugalPumpChemicalProcess from "./pages/products/centrifugal-pump-chemical-process";

// Lazy load dynamic product category page
const ProductCategoryDynamic = lazy(
  () => import("@/pages/product-category-dynamic")
);

// Lazy load subcategory detail pages
const ProductSensors = lazy(
  () => import("@/pages/products-sub-category/sensors")
);
const ProductTransmitters = lazy(
  () => import("@/pages/products-sub-category/transmitters")
);
const ProductControllers = lazy(
  () => import("@/pages/products-sub-category/controllers")
);
const ProductSwitches = lazy(
  () => import("@/pages/products-sub-category/switches")
);
const ProductValves = lazy(
  () => import("@/pages/products-sub-category/valves")
);
const ProductAnalyzers = lazy(
  () => import("@/pages/products-sub-category/analyzers")
);
const ProductSignalConditioners = lazy(
  () => import("@/pages/products-sub-category/signal-conditioners")
);
const ProductCablesWires = lazy(
  () => import("@/pages/products-sub-category/cables-wires")
);
const ProductConnectorsTerminals = lazy(
  () => import("@/pages/products-sub-category/connectors-terminals")
);
const ProductCircuitBreakersFuses = lazy(
  () => import("@/pages/products-sub-category/circuit-breakers-fuses")
);
const ProductPowerSupplies = lazy(
  () => import("@/pages/products-sub-category/power-supplies")
);
const ProductEnclosuresCabinets = lazy(
  () => import("@/pages/products-sub-category/enclosures-cabinets")
);
const ProductHeatingElementsAppliances = lazy(
  () => import("@/pages/products-sub-category/heating-elements-appliances")
);
const ProductMultimeters = lazy(
  () => import("@/pages/products-sub-category/multimeters")
);
const ProductOscilloscopes = lazy(
  () => import("@/pages/products-sub-category/oscilloscopes")
);
const ProductSpectrumAnalyzers = lazy(
  () => import("@/pages/products-sub-category/spectrum-analyzers")
);
const ProductPowerQualityAnalyzers = lazy(
  () => import("@/pages/products-sub-category/power-quality-analyzers")
);
const ProductCalibrationEquipment = lazy(
  () => import("@/pages/products-sub-category/calibration-equipment")
);
const ProductSolarPanels = lazy(
  () => import("@/pages/products-sub-category/solar-panels")
);
const ProductSolarInverters = lazy(
  () => import("@/pages/products-sub-category/solar-inverters")
);
const ProductMountingStructuresRacking = lazy(
  () => import("@/pages/products-sub-category/mounting-structures-racking")
);
const ProductSolarChargeControllers = lazy(
  () => import("@/pages/products-sub-category/solar-charge-controllers")
);
const ProductSolarBatteriesEnergyStorage = lazy(
  () => import("@/pages/products-sub-category/solar-batteries-energy-storage")
);
const ProductPLCs = lazy(() => import("@/pages/products-sub-category/plcs"));
const ProductSCADA = lazy(() => import("@/pages/products-sub-category/scada"));
const ProductDCS = lazy(() => import("@/pages/products-sub-category/dcs"));
const ProductHMI = lazy(() => import("@/pages/products-sub-category/hmi"));
const ProductSurgeProtectors = lazy(
  () => import("@/pages/products-sub-category/surge-protectors")
);
const ProductGroundingSystems = lazy(
  () => import("@/pages/products-sub-category/grounding-systems")
);
const ProductSafetyRelaysSwitches = lazy(
  () => import("@/pages/products-sub-category/safety-relays-switches")
);
const ProductIntrinsicallySafeEquipment = lazy(
  () => import("@/pages/products-sub-category/intrinsically-safe-equipment")
);
const ProductCentrifugalPumps = lazy(
  () => import("@/pages/products-sub-category/centrifugal-pumps")
);
const ProductDiaphragmPumps = lazy(
  () => import("@/pages/products-sub-category/diaphragm-pumps")
);
const ProductGearPumps = lazy(
  () => import("@/pages/products-sub-category/gear-pumps")
);
const ProductPumpPartsSpares = lazy(
  () => import("@/pages/products-sub-category/pump-parts-spares")
);
const ProductHandTools = lazy(
  () => import("@/pages/products-sub-category/hand-tools")
);
const ProductPowerTools = lazy(
  () => import("@/pages/products-sub-category/power-tools")
);
const ProductCuttingTools = lazy(
  () => import("@/pages/products-sub-category/cutting-tools")
);
const ProductLiftingEquipment = lazy(
  () => import("@/pages/products-sub-category/lifting-equipment")
);
const ProductSafetyEquipment = lazy(
  () => import("@/pages/products-sub-category/safety-equipment")
);
const ProductBLDCCoolerExhaustMotor = lazy(
  () => import("@/pages/products-sub-category/bldc-cooler-exhaust-motor")
);
const ProductBLDCCeilingFan = lazy(
  () => import("@/pages/products-sub-category/bldc-ceiling-fan")
);
const ProductBLDCSubmersibleSurfacePump = lazy(
  () => import("@/pages/products-sub-category/bldc-submersible-surface-pump")
);
const ProductBLDCTableFanWallFanMotor = lazy(
  () => import("@/pages/products-sub-category/bldc-table-fan-wall-fan-motor")
);

// Lazy load individual product detail pages
const analyzerGasChromatographySpectrometry = lazy(
  () => import("@/pages/products/analyzer-gas-chromatography-spectrometry")
);
const analyzerLiquidPhConductivity = lazy(
  () => import("@/pages/products/analyzer-liquid-ph-conductivity")
);
const analyzerOxygenCarbonDioxide = lazy(
  () => import("@/pages/products/analyzer-oxygen-carbon-dioxide")
);
const automationControllersRecorders = lazy(
  () => import("@/pages/products/automation-controllers-recorders")
);
const automationMotorDrivesVfd = lazy(
  () => import("@/pages/products/automation-motor-drives-vfd")
);
const automationSignalConditioners = lazy(
  () => import("@/pages/products/automation-signal-conditioners")
);
const bldcCommercialCeilingFan1500 = lazy(
  () => import("@/pages/products/bldc-commercial-ceiling-fan-1500")
);
const bldcCoolerMotors = lazy(
  () => import("@/pages/products/bldc-cooler-motors")
);
const bldcExhaustFanMotor = lazy(
  () => import("@/pages/products/bldc-exhaust-fan-motor")
);
const bldcPedestalFanMotors = lazy(
  () => import("@/pages/products/bldc-pedestal-fan-motors")
);
const bldcPremiumCeilingFan1400 = lazy(
  () => import("@/pages/products/bldc-premium-ceiling-fan-1400")
);
const bldcSmartCeilingFan1200 = lazy(
  () => import("@/pages/products/bldc-smart-ceiling-fan-1200")
);
const bldcTableFanMotors = lazy(
  () => import("@/pages/products/bldc-table-fan-motors")
);
const bldcVentilationMotors = lazy(
  () => import("@/pages/products/bldc-ventilation-motors")
);
const BLDCVentilationSystem = lazy(
  () => import("@/pages/products/bldc-ventilation-system")
);
const bldcWallFanMotors = lazy(
  () => import("@/pages/products/bldc-wall-fan-motors")
);
const cableCommunicationFieldbusEthernet = lazy(
  () => import("@/pages/products/cable-communication-fieldbus-ethernet")
);
const cableInstrumentationShielded = lazy(
  () => import("@/pages/products/cable-instrumentation-shielded")
);
const cablePowerDistributionMedium = lazy(
  () => import("@/pages/products/cable-power-distribution-medium-voltage")
);
const calibratorPressureDeadWeight = lazy(
  () => import("@/pages/products/calibrator-pressure-dead-weight-tester")
);
const calibratorProcessMultifunction = lazy(
  () => import("@/pages/products/calibrator-process-multifunction")
);
const calibratorTempraturePrecision = lazy(
  () => import("@/pages/products/calibrator-temperature-precision-reference")
);

const centrifugalPumpChemicalProcess = lazy(
  () => import("@/pages/products/centrifugal-pump-chemical-process")
);
const centrifugalPumpEndSuction = lazy(
  () => import("@/pages/products/centrifugal-pump-end-suction")
);
const centrifugalPumpMultiStage = lazy(
  () => import("@/pages/products/centrifugal-pump-multi-stage")
);
const circuitBreakerMcbMiniature = lazy(
  () => import("@/pages/products/circuit-breaker-mcb-miniature")
);
const circuitBreakerMccbMoldedCase = lazy(
  () => import("@/pages/products/circuit-breaker-mccb-molded-case")
);
const communicationCables = lazy(
  () => import("@/pages/products/communication-cables")
);
const connectorIndustrialHeavyDuty = lazy(
  () => import("@/pages/products/connector-industrial-heavy-duty")
);
const connectorSignalPrecisionMiniature = lazy(
  () => import("@/pages/products/connector-signal-precision-miniature")
);
const connectorTerminalBlocksIndustrial = lazy(
  () => import("@/pages/products/connector-terminal-blocks-industrial")
);
const dcSurfacePump2hp = lazy(
  () => import("@/pages/products/dc-surface-pump-2hp")
);
const dcsAbbSystem800xa = lazy(
  () => import("@/pages/products/dcs-abb-system-800xa")
);
const dcsEmersonDeltav = lazy(
  () => import("@/pages/products/dcs-emerson-deltav")
);
const dcsHoneywellExperionPks = lazy(
  () => import("@/pages/products/dcs-honeywell-experion-pks")
);
const diaphragmPumpAirOperated = lazy(
  () => import("@/pages/products/diaphragm-pump-air-operated")
);
const diaphragmPumpElectricMetering = lazy(
  () => import("@/pages/products/diaphragm-pump-electric-metering")
);
const diaphragmPumpHydraulicHighPressure = lazy(
  () => import("@/pages/products/diaphragm-pump-hydraulic-high-pressure")
);
const ElectricalFusesIndustrialProtection = lazy(
  () => import("@/pages/products/electrical-fuses-industrial-protection")
);
const enclosureControlPanelCabinets = lazy(
  () => import("@/pages/products/enclosure-control-panel-cabinets")
);
const enclosureElectricalNemaRated = lazy(
  () => import("@/pages/products/enclosure-electrical-nema-rated")
);
const enclosureJunctionBoxesWeatherproof = lazy(
  () => import("@/pages/products/enclosure-junction-boxes-weatherproof")
);
const gearPumpExternalPositiveDisplacement = lazy(
  () => import("@/pages/products/gear-pump-external-positive-displacement")
);
const gearPumpInternalSmoothFlow = lazy(
  () => import("@/pages/products/gear-pump-internal-smooth-flow")
);
const gearPumpMagneticDriveSealless = lazy(
  () => import("@/pages/products/gear-pump-magnetic-drive-sealless")
);
const heatingElectricOvensFurnaces = lazy(
  () => import("@/pages/products/heating-electric-ovens-furnaces")
);
const heatingElementIndustrialCartridgeBand = lazy(
  () => import("@/pages/products/heating-element-industrial-cartridge-band")
);
const heatingHeatTracingSystems = lazy(
  () => import("@/pages/products/heating-heat-tracing-systems")
);
const hmiMobile = lazy(() => import("@/pages/products/hmi-mobile"));
const hmiOperatorInterfaceStation = lazy(
  () => import("@/pages/products/hmi-operator-interface-station")
);
const hmiPanelMount = lazy(() => import("@/pages/products/hmi-panel-mount"));
const hybridBldcPumpSystem = lazy(
  () => import("@/pages/products/hybrid-bldc-pump-system")
);
const industrialConnectors = lazy(
  () => import("@/pages/products/industrial-connectors")
);
const industrialFuses = lazy(() => import("@/pages/products/industrial-fuses"));
const industrialTerminalBlocks = lazy(
  () => import("@/pages/products/industrial-terminal-blocks")
);
const instrumentationCables = lazy(
  () => import("@/pages/products/instrumentation-cables")
);
const mcbMiniatureCircuitBreakers = lazy(
  () => import("@/pages/products/mcb-miniature-circuit-breakers")
);
const mccbMoldedCaseCircuitBreakers = lazy(
  () => import("@/pages/products/mccb-molded-case-circuit-breakers")
);
const multimeterFluke87vIndustrial = lazy(
  () => import("@/pages/products/multimeter-fluke-87v-industrial")
);
const multimeterKeysightu1272aHandheld = lazy(
  () => import("@/pages/products/multimeter-keysight-u1272a-handheld")
);
const multimeterYokogawaty720Digital = lazy(
  () => import("@/pages/products/multimeter-yokogawa-ty720-digital")
);
const oscilloscopeKeysightInfiniivision3000tXSeries = lazy(
  () =>
    import(
      "@/pages/products/oscilloscope-keysight-infiniivision-3000t-x-series"
    )
);
const oscilloscopeRohdeSchwarzRtm3000 = lazy(
  () => import("@/pages/products/oscilloscope-rohde-schwarz-rtm3000")
);
const oscilloscopeTektronixMdo3000MixedDomain = lazy(
  () => import("@/pages/products/oscilloscope-tektronix-mdo3000-mixed-domain")
);
const plcAllenBradleyCompactlogix5380 = lazy(
  () => import("@/pages/products/plc-allen-bradley-compactlogix-5380")
);
const plcSchneiderElectricModiconm580 = lazy(
  () => import("@/pages/products/plc-schneider-electric-modicon-m580")
);
const plcSiemensSimaticS71200 = lazy(
  () => import("@/pages/products/plc-siemens-simatic-s7-1200")
);
const powerDistributionCables = lazy(
  () => import("@/pages/products/power-distribution-cables")
);
const powerQualityAnalyzerDranetzhdpq = lazy(
  () => import("@/pages/products/power-quality-analyzer-dranetz-hdpq")
);
const powerQualityAnalyzerFluke435Ii = lazy(
  () => import("@/pages/products/power-quality-analyzer-fluke-435-ii")
);
const powerQualityAnalyzerHiokiPw3390 = lazy(
  () => import("@/pages/products/power-quality-analyzer-hioki-pw3390")
);
const powerSupplyDcRegulatedLaboratory = lazy(
  () => import("@/pages/products/power-supply-dc-regulated-laboratory")
);
const powerSupplyIndustrialSwitchedMode = lazy(
  () => import("@/pages/products/power-supply-industrial-switched-mode")
);
const powerSupplyUpsUninterruptible = lazy(
  () => import("@/pages/products/power-supply-ups-uninterruptible")
);
const scadaGeIfix = lazy(() => import("@/pages/products/scada-ge-ifix"));
const scadaSiemensWincc = lazy(
  () => import("@/pages/products/scada-siemens-wincc")
);
const scadaWonderwareSystemPlatform = lazy(
  () => import("@/pages/products/scada-wonderware-system-platform")
);
const sensorFlowElectromagneticUltrasonic = lazy(
  () => import("@/pages/products/sensor-flow-electromagnetic-ultrasonic")
);
const sensorPressureStrainGauge = lazy(
  () => import("@/pages/products/sensor-pressure-strain-gauge")
);
const sensorTemperatureRtdThermocouple = lazy(
  () => import("@/pages/products/sensor-temperature-rtd-thermocouple")
);
const signalConditionerCurrentLoopConverter = lazy(
  () => import("@/pages/products/signal-conditioner-current-loop-converter")
);
const signalConditionerIsolation = lazy(
  () => import("@/pages/products/signal-conditioner-isolation-amplifier")
);
const signalConditionerThermocouple = lazy(
  () => import("@/pages/products/signal-conditioner-thermocouple-converter")
);
const SignalConnectors = lazy(
  () => import("@/pages/products/signal-connectors")
);
const solarBldcSubmersiblePump1hp = lazy(
  () => import("@/pages/products/solar-bldc-submersible-pump-1hp")
);
const spectrumAnalyzerAnritsuMs2720tMaster = lazy(
  () => import("@/pages/products/spectrum-analyzer-anritsu-ms2720t-master")
);
const spectrumAnalyzerKeysightn9020aMxa = lazy(
  () => import("@/pages/products/spectrum-analyzer-keysight-n9020a-mxa")
);
const spectrumAnalyzerRohdeSchwarzFsw = lazy(
  () => import("@/pages/products/spectrum-analyzer-rohde-schwarz-fsw")
);
const switchEmergencyStopSafety = lazy(
  () => import("@/pages/products/switch-emergency-stop-safety")
);
const switchPushbuttonIlluminated = lazy(
  () => import("@/pages/products/switch-pushbutton-illuminated")
);
const switchSelectorRotary = lazy(
  () => import("@/pages/products/switch-selector-rotary")
);
const transmitterLevelUltrasonicRadar = lazy(
  () => import("@/pages/products/transmitter-level-ultrasonic-radar")
);
const transmitterPressureHartCommunication = lazy(
  () => import("@/pages/products/transmitter-pressure-hart-communication")
);
const transmitterTemperatureWirelessMonitoring = lazy(
  () => import("@/pages/products/transmitter-temperature-wireless-monitoring")
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

          {/* Dynamic Product Category Route */}
          <Route 
            path="/products-category/:slug" 
            component={ProductCategoryDynamic} 
          />

          {/* Instrumentation Components Subcategories */}
          <Route path="/products/sensors" component={ProductSensors} />
          <Route
            path="/products/transmitters"
            component={ProductTransmitters}
          />
          <Route path="/products/controllers" component={ProductControllers} />
          <Route path="/products/switches" component={ProductSwitches} />
          <Route path="/products/valves" component={ProductValves} />
          <Route path="/products/analyzers" component={ProductAnalyzers} />
          <Route
            path="/products/signal-conditioners"
            component={ProductSignalConditioners}
          />

          {/* Electrical Components Subcategories */}
          <Route path="/products/cables-wires" component={ProductCablesWires} />
          <Route
            path="/products/connectors-terminals"
            component={ProductConnectorsTerminals}
          />
          <Route
            path="/products/circuit-breakers-fuses"
            component={ProductCircuitBreakersFuses}
          />
          <Route
            path="/products/power-supplies"
            component={ProductPowerSupplies}
          />
          <Route
            path="/products/enclosures-cabinets"
            component={ProductEnclosuresCabinets}
          />
          <Route
            path="/products/heating-elements-appliances"
            component={ProductHeatingElementsAppliances}
          />

          {/* Measurement Instruments Subcategories */}
          <Route path="/products/multimeters" component={ProductMultimeters} />
          <Route
            path="/products/oscilloscopes"
            component={ProductOscilloscopes}
          />
          <Route
            path="/products/spectrum-analyzers"
            component={ProductSpectrumAnalyzers}
          />
          <Route
            path="/products/power-quality-analyzers"
            component={ProductPowerQualityAnalyzers}
          />
          <Route
            path="/products/calibration-equipment"
            component={ProductCalibrationEquipment}
          />

          {/* Solar Products Subcategories */}
          <Route path="/products/solar-panels" component={ProductSolarPanels} />
          <Route
            path="/products/solar-inverters"
            component={ProductSolarInverters}
          />
          <Route
            path="/products/mounting-structures-racking"
            component={ProductMountingStructuresRacking}
          />
          <Route
            path="/products/solar-charge-controllers"
            component={ProductSolarChargeControllers}
          />
          <Route
            path="/products/solar-batteries-energy-storage"
            component={ProductSolarBatteriesEnergyStorage}
          />

          {/* Automation Control Systems Subcategories */}
          <Route path="/products/plcs" component={ProductPLCs} />
          <Route path="/products/scada" component={ProductSCADA} />
          <Route path="/products/dcs" component={ProductDCS} />
          <Route path="/products/hmi" component={ProductHMI} />

          {/* Safety Protective Devices Subcategories */}
          <Route
            path="/products/surge-protectors"
            component={ProductSurgeProtectors}
          />
          <Route
            path="/products/grounding-systems"
            component={ProductGroundingSystems}
          />
          <Route
            path="/products/safety-relays-switches"
            component={ProductSafetyRelaysSwitches}
          />
          <Route
            path="/products/intrinsically-safe-equipment"
            component={ProductIntrinsicallySafeEquipment}
          />

          {/* Mechanical Pumps & Spares Subcategories */}
          <Route
            path="/products/centrifugal-pumps"
            component={ProductCentrifugalPumps}
          />
          <Route
            path="/products/diaphragm-pumps"
            component={ProductDiaphragmPumps}
          />
          <Route path="/products/gear-pumps" component={ProductGearPumps} />
          <Route
            path="/products/pump-parts-spares"
            component={ProductPumpPartsSpares}
          />

          {/* Industrial Tools & Tackles Subcategories */}
          <Route path="/products/hand-tools" component={ProductHandTools} />
          <Route path="/products/power-tools" component={ProductPowerTools} />
          <Route
            path="/products/cutting-tools"
            component={ProductCuttingTools}
          />
          <Route
            path="/products/lifting-equipment"
            component={ProductLiftingEquipment}
          />
          <Route
            path="/products/safety-equipment"
            component={ProductSafetyEquipment}
          />

          {/* BLDC Subcategories */}
          <Route
            path="/products/bldc-cooler-exhaust-motor"
            component={ProductBLDCCoolerExhaustMotor}
          />
          <Route
            path="/products/bldc-ceiling-fan"
            component={ProductBLDCCeilingFan}
          />
          <Route
            path="/products/bldc-submersible-surface-pump"
            component={ProductBLDCSubmersibleSurfacePump}
          />
          <Route
            path="/products/bldc-table-fan-wall-fan-motor"
            component={ProductBLDCTableFanWallFanMotor}
          />

          {/* Individual Product Detail Pages */}
          <Route
            path="/products/analyzer-gas-chromatography-spectrometry"
            component={analyzerGasChromatographySpectrometry}
          />
          <Route
            path="/products/analyzer-liquid-ph-conductivity"
            component={analyzerLiquidPhConductivity}
          />
          <Route
            path="/products/analyzer-oxygen-carbon-dioxide"
            component={analyzerOxygenCarbonDioxide}
          />
          <Route
            path="/products/automation-controllers-recorders"
            component={automationControllersRecorders}
          />
          <Route
            path="/products/automation-motor-drives-vfd"
            component={automationMotorDrivesVfd}
          />
          <Route
            path="/products/automation-signal-conditioners"
            component={automationSignalConditioners}
          />
          <Route
            path="/products/bldc-commercial-ceiling-fan-1500"
            component={bldcCommercialCeilingFan1500}
          />
          <Route
            path="/products/bldc-cooler-motors"
            component={bldcCoolerMotors}
          />
          <Route
            path="/products/bldc-exhaust-fan-motor"
            component={bldcExhaustFanMotor}
          />
          <Route
            path="/products/bldc-pedestal-fan-motors"
            component={bldcPedestalFanMotors}
          />
          <Route
            path="/products/bldc-premium-ceiling-fan-1400"
            component={bldcPremiumCeilingFan1400}
          />
          <Route
            path="/products/bldc-smart-ceiling-fan-1200"
            component={bldcSmartCeilingFan1200}
          />
          <Route
            path="/products/bldc-table-fan-motors"
            component={bldcTableFanMotors}
          />
          <Route
            path="/products/bldc-ventilation-motors"
            component={bldcVentilationMotors}
          />
          <Route
            path="/products/bldc-ventilation-system"
            component={BLDCVentilationSystem}
          />
          <Route
            path="/products/bldc-wall-fan-motors"
            component={bldcWallFanMotors}
          />
          <Route
            path="/products/cable-communication-fieldbus-ethernet"
            component={cableCommunicationFieldbusEthernet}
          />
          <Route
            path="/products/cable-instrumentation-shielded"
            component={cableInstrumentationShielded}
          />
          <Route
            path="/products/cable-power-distribution-medium-voltage"
            component={cablePowerDistributionMedium}
          />
          <Route
            path="/products/calibrator-pressure-dead-weight-tester"
            component={calibratorPressureDeadWeight}
          />
          <Route
            path="/products/calibrator-process-multifunction"
            component={calibratorProcessMultifunction}
          />
          <Route
            path="/products/calibrator-temperature-precision-reference"
            component={calibratorTempraturePrecision}
          />
          <Route
            path="/products/centrifugal-pump-chemical-process"
            component={centrifugalPumpChemicalProcess}
          />
          <Route
            path="/products/centrifugal-pump-end-suction"
            component={centrifugalPumpEndSuction}
          />
          <Route
            path="/products/centrifugal-pump-multi-stage"
            component={centrifugalPumpMultiStage}
          />
          <Route
            path="/products/circuit-breaker-mcb-miniature"
            component={circuitBreakerMcbMiniature}
          />
          <Route
            path="/products/circuit-breaker-mccb-molded-case"
            component={circuitBreakerMccbMoldedCase}
          />
          <Route
            path="/products/communication-cables"
            component={communicationCables}
          />
          <Route
            path="/products/connector-industrial-heavy-duty"
            component={connectorIndustrialHeavyDuty}
          />
          <Route
            path="/products/connector-signal-precision-miniature"
            component={connectorSignalPrecisionMiniature}
          />
          <Route
            path="/products/connector-terminal-blocks-industrial"
            component={connectorTerminalBlocksIndustrial}
          />
          <Route
            path="/products/dc-surface-pump-2hp"
            component={dcSurfacePump2hp}
          />
          <Route
            path="/products/dcs-abb-system-800xa"
            component={dcsAbbSystem800xa}
          />
          <Route
            path="/products/dcs-emerson-deltav"
            component={dcsEmersonDeltav}
          />
          <Route
            path="/products/dcs-honeywell-experion-pks"
            component={dcsHoneywellExperionPks}
          />
          <Route
            path="/products/diaphragm-pump-air-operated"
            component={diaphragmPumpAirOperated}
          />
          <Route
            path="/products/diaphragm-pump-electric-metering"
            component={diaphragmPumpElectricMetering}
          />
          <Route
            path="/products/diaphragm-pump-hydraulic-high-pressure"
            component={diaphragmPumpHydraulicHighPressure}
          />
          <Route
            path="/products/electrical-fuses-industrial-protection"
            component={ElectricalFusesIndustrialProtection}
          />
          <Route
            path="/products/enclosure-control-panel-cabinets"
            component={enclosureControlPanelCabinets}
          />
          <Route
            path="/products/enclosure-electrical-nema-rated"
            component={enclosureElectricalNemaRated}
          />
          <Route
            path="/products/enclosure-junction-boxes-weatherproof"
            component={enclosureJunctionBoxesWeatherproof}
          />
          <Route
            path="/products/gear-pump-external-positive-displacement"
            component={gearPumpExternalPositiveDisplacement}
          />
          <Route
            path="/products/gear-pump-internal-smooth-flow"
            component={gearPumpInternalSmoothFlow}
          />
          <Route
            path="/products/gear-pump-magnetic-drive-sealless"
            component={gearPumpMagneticDriveSealless}
          />
          <Route
            path="/products/heating-electric-ovens-furnaces"
            component={heatingElectricOvensFurnaces}
          />
          <Route
            path="/products/heating-element-industrial-cartridge-band"
            component={heatingElementIndustrialCartridgeBand}
          />
          <Route
            path="/products/heating-heat-tracing-systems"
            component={heatingHeatTracingSystems}
          />
          <Route path="/products/hmi-mobile" component={hmiMobile} />
          <Route
            path="/products/hmi-operator-interface-station"
            component={hmiOperatorInterfaceStation}
          />
          <Route path="/products/hmi-panel-mount" component={hmiPanelMount} />
          <Route
            path="/products/hybrid-bldc-pump-system"
            component={hybridBldcPumpSystem}
          />
          <Route
            path="/products/industrial-connectors"
            component={industrialConnectors}
          />
          <Route
            path="/products/industrial-fuses"
            component={industrialFuses}
          />
          <Route
            path="/products/industrial-terminal-blocks"
            component={industrialTerminalBlocks}
          />
          <Route
            path="/products/instrumentation-cables"
            component={instrumentationCables}
          />
          <Route
            path="/products/mcb-miniature-circuit-breakers"
            component={mcbMiniatureCircuitBreakers}
          />
          <Route
            path="/products/mccb-molded-case-circuit-breakers"
            component={mccbMoldedCaseCircuitBreakers}
          />
          <Route
            path="/products/multimeter-fluke-87v-industrial"
            component={multimeterFluke87vIndustrial}
          />
          <Route
            path="/products/multimeter-keysight-u1272a-handheld"
            component={multimeterKeysightu1272aHandheld}
          />
          <Route
            path="/products/multimeter-yokogawa-ty720-digital"
            component={multimeterYokogawaty720Digital}
          />
          <Route
            path="/products/oscilloscope-keysight-infiniivision-3000t-x-series"
            component={oscilloscopeKeysightInfiniivision3000tXSeries}
          />
          <Route
            path="/products/oscilloscope-rohde-schwarz-rtm3000"
            component={oscilloscopeRohdeSchwarzRtm3000}
          />
          <Route
            path="/products/oscilloscope-tektronix-mdo3000-mixed-domain"
            component={oscilloscopeTektronixMdo3000MixedDomain}
          />
          <Route
            path="/products/plc-allen-bradley-compactlogix-5380"
            component={plcAllenBradleyCompactlogix5380}
          />
          <Route
            path="/products/plc-schneider-electric-modicon-m580"
            component={plcSchneiderElectricModiconm580}
          />
          <Route
            path="/products/plc-siemens-simatic-s7-1200"
            component={plcSiemensSimaticS71200}
          />
          <Route
            path="/products/power-distribution-cables"
            component={powerDistributionCables}
          />
          <Route
            path="/products/power-quality-analyzer-dranetz-hdpq"
            component={powerQualityAnalyzerDranetzhdpq}
          />
          <Route
            path="/products/power-quality-analyzer-fluke-435-ii"
            component={powerQualityAnalyzerFluke435Ii}
          />
          <Route
            path="/products/power-quality-analyzer-hioki-pw3390"
            component={powerQualityAnalyzerHiokiPw3390}
          />
          <Route
            path="/products/power-supply-dc-regulated-laboratory"
            component={powerSupplyDcRegulatedLaboratory}
          />
          <Route
            path="/products/power-supply-industrial-switched-mode"
            component={powerSupplyIndustrialSwitchedMode}
          />
          <Route
            path="/products/power-supply-ups-uninterruptible"
            component={powerSupplyUpsUninterruptible}
          />
          <Route path="/products/scada-ge-ifix" component={scadaGeIfix} />
          <Route
            path="/products/scada-siemens-wincc"
            component={scadaSiemensWincc}
          />
          <Route
            path="/products/scada-wonderware-system-platform"
            component={scadaWonderwareSystemPlatform}
          />
          <Route
            path="/products/sensor-flow-electromagnetic-ultrasonic"
            component={sensorFlowElectromagneticUltrasonic}
          />
          <Route
            path="/products/sensor-pressure-strain-gauge"
            component={sensorPressureStrainGauge}
          />
          <Route
            path="/products/sensor-temperature-rtd-thermocouple"
            component={sensorTemperatureRtdThermocouple}
          />
          <Route
            path="/products/signal-conditioner-current-loop-converter"
            component={signalConditionerCurrentLoopConverter}
          />
          <Route
            path="/products/signal-conditioner-isolation-amplifier"
            component={signalConditionerIsolation}
          />
          <Route
            path="/products/signal-conditioner-thermocouple-converter"
            component={signalConditionerThermocouple}
          />
          <Route
            path="/products/signal-connectors"
            component={SignalConnectors}
          />
          <Route
            path="/products/solar-bldc-submersible-pump-1hp"
            component={solarBldcSubmersiblePump1hp}
          />
          <Route
            path="/products/spectrum-analyzer-anritsu-ms2720t-master"
            component={spectrumAnalyzerAnritsuMs2720tMaster}
          />
          <Route
            path="/products/spectrum-analyzer-keysight-n9020a-mxa"
            component={spectrumAnalyzerKeysightn9020aMxa}
          />
          <Route
            path="/products/spectrum-analyzer-rohde-schwarz-fsw"
            component={spectrumAnalyzerRohdeSchwarzFsw}
          />
          <Route
            path="/products/switch-emergency-stop-safety"
            component={switchEmergencyStopSafety}
          />
          <Route
            path="/products/switch-pushbutton-illuminated"
            component={switchPushbuttonIlluminated}
          />
          <Route
            path="/products/switch-selector-rotary"
            component={switchSelectorRotary}
          />
          <Route
            path="/products/transmitter-level-ultrasonic-radar"
            component={transmitterLevelUltrasonicRadar}
          />
          <Route
            path="/products/transmitter-pressure-hart-communication"
            component={transmitterPressureHartCommunication}
          />
          <Route
            path="/products/transmitter-temperature-wireless-monitoring"
            component={transmitterTemperatureWirelessMonitoring}
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
