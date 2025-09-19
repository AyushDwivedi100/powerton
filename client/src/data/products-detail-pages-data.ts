// Product catalog data structure for individual product pages
// This centralizes all product data while keeping translations in i18n files

export interface ProductSpecs {
  [key: string]: string | number;
}

export interface Product {
  id: string;
  slug: string;
  categoryKey: string;
  subcategoryKey: string;
  image: string;
  datasheetUrl?: string;
  specs: ProductSpecs;
  translationKeys: {
    title: string;
    description: string;
    featuresKey?: string;
  };
}

export interface SubCategory {
  key: string;
  translationKey: string;
  products: string[]; // Array of product IDs
}

export interface Category {
  key: string;
  translationKey: string;
  subcategories: SubCategory[];
}

// Product definitions
export const products: Product[] = [
  // BLDC Ceiling Fans
  {
    id: "bldc-smart1200",
    slug: "bldc-smart-ceiling-fan-1200",
    categoryKey: "bldc",
    subcategoryKey: "bldc-ceiling-fan",
    image: "bldc-ceiling-fan",
    specs: {
      power: "48W",
      speed: "1200 RPM",
      airflow: "210 CMM",
      efficiency: "4.375 CMM/W",
      warranty: "3 Years"
    },
    translationKeys: {
      title: "products:bldcCeilingFan.smart1200.title",
      description: "products:bldcCeilingFan.smart1200.description",
      featuresKey: "products:bldcCeilingFan.smart1200.features"
    }
  },
  {
    id: "bldc-premium1400",
    slug: "bldc-premium-ceiling-fan-1400",
    categoryKey: "bldc",
    subcategoryKey: "bldc-ceiling-fan",
    image: "bldc-ceiling-fan",
    specs: {
      power: "55W",
      speed: "1400 RPM",
      airflow: "250 CMM",
      efficiency: "4.545 CMM/W",
      warranty: "5 Years"
    },
    translationKeys: {
      title: "products:bldcCeilingFan.premium1400.title",
      description: "products:bldcCeilingFan.premium1400.description",
      featuresKey: "products:bldcCeilingFan.premium1400.features"
    }
  },
  {
    id: "bldc-commercial1500",
    slug: "bldc-commercial-ceiling-fan-1500",
    categoryKey: "bldc",
    subcategoryKey: "bldc-ceiling-fan",
    image: "bldc-ceiling-fan",
    specs: {
      power: "65W",
      speed: "1500 RPM",
      airflow: "300 CMM",
      efficiency: "4.615 CMM/W",
      warranty: "7 Years"
    },
    translationKeys: {
      title: "products:bldcCeilingFan.commercial1500.title",
      description: "products:bldcCeilingFan.commercial1500.description",
      featuresKey: "products:bldcCeilingFan.commercial1500.features"
    }
  },

  // BLDC Cooler & Exhaust Motors
  {
    id: "bldc-exhaust-fan",
    slug: "bldc-exhaust-fan-motor",
    categoryKey: "bldc",
    subcategoryKey: "bldc-cooler-exhaust-motor",
    image: "bldc-cooler-exhaust-motor",
    specs: {
      power: "25W",
      speed: "2800 RPM",
      airflow: "150 CFM",
      voltage: "12V DC",
      efficiency: "85%"
    },
    translationKeys: {
      title: "products:bldcCoolerExhaust.exhaustFan.title",
      description: "products:bldcCoolerExhaust.exhaustFan.description",
      featuresKey: "products:bldcCoolerExhaust.exhaustFan.features"
    }
  },
  {
    id: "bldc-cooler-motors",
    slug: "bldc-cooler-motors",
    categoryKey: "bldc",
    subcategoryKey: "bldc-cooler-exhaust-motor",
    image: "bldc-cooler-exhaust-motor",
    specs: {
      power: "45W",
      speed: "1800 RPM",
      airflow: "400 CFM",
      voltage: "24V DC",
      efficiency: "90%"
    },
    translationKeys: {
      title: "products:bldcCoolerExhaust.coolerMotors.title",
      description: "products:bldcCoolerExhaust.coolerMotors.description",
      featuresKey: "products:bldcCoolerExhaust.coolerMotors.features"
    }
  },
  {
    id: "bldc-ventilation",
    slug: "bldc-ventilation-system",
    categoryKey: "bldc",
    subcategoryKey: "bldc-cooler-exhaust-motor",
    image: "bldc-cooler-exhaust-motor",
    specs: {
      power: "75W",
      speed: "2400 RPM",
      airflow: "800 CFM",
      voltage: "48V DC",
      efficiency: "92%"
    },
    translationKeys: {
      title: "products:bldcCoolerExhaust.ventilation.title",
      description: "products:bldcCoolerExhaust.ventilation.description",
      featuresKey: "products:bldcCoolerExhaust.ventilation.features"
    }
  },

  // BLDC Submersible & Surface Pumps
  {
    id: "solar-bldc-submersible-1hp",
    slug: "solar-bldc-submersible-pump-1hp",
    categoryKey: "bldc",
    subcategoryKey: "bldc-submersible-surface-pump",
    image: "bldc-submersible-surface-pump",
    specs: {
      power: "1 HP",
      flow: "1800 LPH",
      head: "100 ft",
      voltage: "48V DC",
      solarCompatible: "Yes"
    },
    translationKeys: {
      title: "products:bldcPumps.solarSubmersible1hp.title",
      description: "products:bldcPumps.solarSubmersible1hp.description",
      featuresKey: "products:bldcPumps.solarSubmersible1hp.features"
    }
  },
  {
    id: "dc-surface-pump-2hp",
    slug: "dc-surface-pump-2hp",
    categoryKey: "bldc",
    subcategoryKey: "bldc-submersible-surface-pump",
    image: "bldc-submersible-surface-pump",
    specs: {
      power: "2 HP",
      flow: "3600 LPH",
      head: "150 ft",
      voltage: "72V DC",
      selfPriming: "Yes"
    },
    translationKeys: {
      title: "products:bldcPumps.dcSurface2hp.title",
      description: "products:bldcPumps.dcSurface2hp.description",
      featuresKey: "products:bldcPumps.dcSurface2hp.features"
    }
  },
  {
    id: "hybrid-bldc-pump",
    slug: "hybrid-bldc-pump-system",
    categoryKey: "bldc",
    subcategoryKey: "bldc-submersible-surface-pump",
    image: "bldc-submersible-surface-pump",
    specs: {
      power: "1.5 HP",
      flow: "2700 LPH",
      head: "120 ft",
      voltage: "48V DC / 230V AC",
      hybridOperation: "Yes"
    },
    translationKeys: {
      title: "products:bldcPumps.hybridSystem.title",
      description: "products:bldcPumps.hybridSystem.description",
      featuresKey: "products:bldcPumps.hybridSystem.features"
    }
  },

  // BLDC Table & Wall Fan Motors
  {
    id: "bldc-table-fan-motors",
    slug: "bldc-table-fan-motors",
    categoryKey: "bldc",
    subcategoryKey: "bldc-table-fan-wall-fan-motor",
    image: "bldc-table-fan-wall-fan-motor",
    specs: {
      power: "28W",
      speed: "2100 RPM",
      diameter: "400mm",
      voltage: "24V DC",
      remoteControl: "Yes"
    },
    translationKeys: {
      title: "products:bldcFans.tableFan.title",
      description: "products:bldcFans.tableFan.description",
      featuresKey: "products:bldcFans.tableFan.features"
    }
  },
  {
    id: "bldc-wall-fan-motors",
    slug: "bldc-wall-fan-motors",
    categoryKey: "bldc",
    subcategoryKey: "bldc-table-fan-wall-fan-motor",
    image: "bldc-table-fan-wall-fan-motor",
    specs: {
      power: "35W",
      speed: "1800 RPM",
      diameter: "450mm",
      voltage: "24V DC",
      oscillation: "Yes"
    },
    translationKeys: {
      title: "products:bldcFans.wallFan.title",
      description: "products:bldcFans.wallFan.description",
      featuresKey: "products:bldcFans.wallFan.features"
    }
  },
  {
    id: "bldc-pedestal-fan-motors",
    slug: "bldc-pedestal-fan-motors",
    categoryKey: "bldc",
    subcategoryKey: "bldc-table-fan-wall-fan-motor",
    image: "bldc-table-fan-wall-fan-motor",
    specs: {
      power: "42W",
      speed: "1900 RPM",
      diameter: "500mm",
      voltage: "24V DC",
      heightAdjustment: "Yes"
    },
    translationKeys: {
      title: "products:bldcFans.pedestalFan.title",
      description: "products:bldcFans.pedestalFan.description",
      featuresKey: "products:bldcFans.pedestalFan.features"
    }
  },

  // Electrical Components - Cables & Wires
  {
    id: "instrumentation-cables",
    slug: "instrumentation-cables",
    categoryKey: "electrical-components",
    subcategoryKey: "cables-wires",
    image: "cables-wires",
    specs: {
      type: "Shielded Twisted Pair",
      awg: "18-22 AWG",
      voltage: "300V",
      temperature: "-40°C to +90°C",
      shielding: "100% Coverage"
    },
    translationKeys: {
      title: "products:cablesWires.instrumentation.title",
      description: "products:cablesWires.instrumentation.description",
      featuresKey: "products:cablesWires.instrumentation.features"
    }
  },
  {
    id: "power-distribution-cables",
    slug: "power-distribution-cables",
    categoryKey: "electrical-components",
    subcategoryKey: "cables-wires",
    image: "cables-wires",
    specs: {
      type: "XLPE Insulated",
      voltage: "1kV - 33kV",
      conductor: "Copper/Aluminum",
      temperature: "90°C",
      standard: "IS 7098"
    },
    translationKeys: {
      title: "products:cablesWires.powerDistribution.title",
      description: "products:cablesWires.powerDistribution.description",
      featuresKey: "products:cablesWires.powerDistribution.features"
    }
  },
  {
    id: "communication-cables",
    slug: "communication-cables",
    categoryKey: "electrical-components",
    subcategoryKey: "cables-wires",
    image: "cables-wires",
    specs: {
      type: "Category 6A",
      bandwidth: "500 MHz",
      length: "100m",
      shielding: "F/UTP",
      standard: "TIA/EIA-568-B"
    },
    translationKeys: {
      title: "products:cablesWires.communication.title",
      description: "products:cablesWires.communication.description",
      featuresKey: "products:cablesWires.communication.features"
    }
  },

  // Circuit Breakers & Fuses
  {
    id: "mcb-circuit-breakers",
    slug: "mcb-miniature-circuit-breakers",
    categoryKey: "electrical-components",
    subcategoryKey: "circuit-breakers-fuses",
    image: "circuit-breakers-fuses",
    specs: {
      type: "MCB",
      current: "6A - 63A",
      poles: "1P, 2P, 3P, 4P",
      breakingCapacity: "10kA",
      standard: "IEC 60898"
    },
    translationKeys: {
      title: "products:circuitBreakers.mcb.title",
      description: "products:circuitBreakers.mcb.description",
      featuresKey: "products:circuitBreakers.mcb.features"
    }
  },
  {
    id: "mccb-circuit-breakers",
    slug: "mccb-molded-case-circuit-breakers",
    categoryKey: "electrical-components",
    subcategoryKey: "circuit-breakers-fuses",
    image: "circuit-breakers-fuses",
    specs: {
      type: "MCCB",
      current: "16A - 1600A",
      poles: "3P, 4P",
      breakingCapacity: "50kA",
      standard: "IEC 60947"
    },
    translationKeys: {
      title: "products:circuitBreakers.mccb.title",
      description: "products:circuitBreakers.mccb.description",
      featuresKey: "products:circuitBreakers.mccb.features"
    }
  },
  {
    id: "industrial-fuses",
    slug: "industrial-fuses",
    categoryKey: "electrical-components",
    subcategoryKey: "circuit-breakers-fuses",
    image: "circuit-breakers-fuses",
    specs: {
      type: "HRC Fuses",
      current: "2A - 800A",
      voltage: "415V - 11kV",
      breakingCapacity: "80kA",
      standard: "IEC 60269"
    },
    translationKeys: {
      title: "products:circuitBreakers.industrialFuses.title",
      description: "products:circuitBreakers.industrialFuses.description",
      featuresKey: "products:circuitBreakers.industrialFuses.features"
    }
  },

  // Connectors & Terminals
  {
    id: "terminal-blocks",
    slug: "industrial-terminal-blocks",
    categoryKey: "electrical-components",
    subcategoryKey: "connectors-terminals",
    image: "connectors-terminals",
    specs: {
      type: "Screw/Spring Clamp",
      current: "10A - 150A",
      voltage: "1000V",
      wireSize: "0.2 - 50 mm²",
      mounting: "DIN Rail"
    },
    translationKeys: {
      title: "products:connectorsTerminals.terminalBlocks.title",
      description: "products:connectorsTerminals.terminalBlocks.description",
      featuresKey: "products:connectorsTerminals.terminalBlocks.features"
    }
  },
  {
    id: "industrial-connectors",
    slug: "industrial-connectors",
    categoryKey: "electrical-components",
    subcategoryKey: "connectors-terminals",
    image: "connectors-terminals",
    specs: {
      type: "Heavy Duty",
      pins: "3-128 Pins",
      current: "16A - 400A",
      voltage: "690V",
      rating: "IP67"
    },
    translationKeys: {
      title: "products:connectorsTerminals.industrialConnectors.title",
      description: "products:connectorsTerminals.industrialConnectors.description",
      featuresKey: "products:connectorsTerminals.industrialConnectors.features"
    }
  },
  {
    id: "signal-connectors",
    slug: "signal-connectors",
    categoryKey: "electrical-components",
    subcategoryKey: "connectors-terminals",
    image: "connectors-terminals",
    specs: {
      type: "Miniature",
      pins: "2-50 Pins",
      current: "5A",
      voltage: "250V",
      shielding: "360° EMI"
    },
    translationKeys: {
      title: "products:connectorsTerminals.signalConnectors.title",
      description: "products:connectorsTerminals.signalConnectors.description",
      featuresKey: "products:connectorsTerminals.signalConnectors.features"
    }
  },

  // Instrumentation Components - Sensors
  {
    id: "sensor-temperature-rtd-thermocouple",
    slug: "sensor-temperature-rtd-thermocouple",
    categoryKey: "instrumentation-components",
    subcategoryKey: "sensors",
    image: "sensors",
    specs: {
      type: "RTD/Thermocouple",
      temperatureRange: "-200°C to +1200°C",
      accuracy: "±0.1°C to ±1.0°C",
      protectionRating: "IP65/IP67",
      responseTime: "0.5 to 30 seconds"
    },
    translationKeys: {
      title: "products:sensors.temperatureRTD.title",
      description: "products:sensors.temperatureRTD.description",
      featuresKey: "products:sensors.temperatureRTD.features"
    }
  },
  {
    id: "sensor-pressure-strain-gauge",
    slug: "sensor-pressure-strain-gauge",
    categoryKey: "instrumentation-components",
    subcategoryKey: "sensors",
    image: "sensors",
    specs: {
      type: "Strain Gauge",
      pressureRange: "0-10 bar to 0-1000 bar",
      accuracy: "±0.25%",
      output: "4-20mA, 0-10V",
      protectionRating: "IP67"
    },
    translationKeys: {
      title: "products:sensors.pressureStrainGauge.title",
      description: "products:sensors.pressureStrainGauge.description",
      featuresKey: "products:sensors.pressureStrainGauge.features"
    }
  },
  {
    id: "sensor-flow-electromagnetic-ultrasonic",
    slug: "sensor-flow-electromagnetic-ultrasonic",
    categoryKey: "instrumentation-components",
    subcategoryKey: "sensors",
    image: "sensors",
    specs: {
      type: "Electromagnetic/Ultrasonic",
      flowRange: "0.1 to 10 m/s",
      accuracy: "±0.5%",
      pipeSize: "DN15 to DN3000",
      protectionRating: "IP68"
    },
    translationKeys: {
      title: "products:sensors.flowElectromagnetic.title",
      description: "products:sensors.flowElectromagnetic.description",
      featuresKey: "products:sensors.flowElectromagnetic.features"
    }
  },

  // Transmitters
  {
    id: "transmitter-pressure-hart-communication",
    slug: "transmitter-pressure-hart-communication",
    categoryKey: "instrumentation-components",
    subcategoryKey: "transmitters",
    image: "transmitters",
    specs: {
      type: "Pressure Transmitter",
      range: "0-10 bar to 0-400 bar",
      accuracy: "±0.1%",
      output: "4-20mA + HART",
      protectionRating: "IP67"
    },
    translationKeys: {
      title: "products:transmitters.pressureHART.title",
      description: "products:transmitters.pressureHART.description",
      featuresKey: "products:transmitters.pressureHART.features"
    }
  },
  {
    id: "transmitter-temperature-wireless-monitoring",
    slug: "transmitter-temperature-wireless-monitoring",
    categoryKey: "instrumentation-components",
    subcategoryKey: "transmitters",
    image: "transmitters",
    specs: {
      type: "Wireless Temperature",
      range: "-100°C to +850°C",
      accuracy: "±0.5°C",
      batteryLife: "5+ years",
      wirelessProtocol: "WirelessHART"
    },
    translationKeys: {
      title: "products:transmitters.temperatureWireless.title",
      description: "products:transmitters.temperatureWireless.description",
      featuresKey: "products:transmitters.temperatureWireless.features"
    }
  },
  {
    id: "transmitter-level-ultrasonic-radar",
    slug: "transmitter-level-ultrasonic-radar",
    categoryKey: "instrumentation-components",
    subcategoryKey: "transmitters",
    image: "transmitters",
    specs: {
      type: "Ultrasonic/Radar",
      range: "0.3m to 40m",
      accuracy: "±3mm",
      output: "4-20mA + HART",
      protectionRating: "IP68"
    },
    translationKeys: {
      title: "products:transmitters.levelUltrasonic.title",
      description: "products:transmitters.levelUltrasonic.description",
      featuresKey: "products:transmitters.levelUltrasonic.features"
    }
  },

  // Controllers
  {
    id: "automation-controllers-recorders",
    slug: "automation-controllers-recorders",
    categoryKey: "instrumentation-components",
    subcategoryKey: "controllers",
    image: "controllers",
    specs: {
      type: "Process Controller",
      inputs: "16 Universal Inputs",
      outputs: "8 Relay/SSR Outputs",
      display: "5.7\" Color TFT",
      communication: "Ethernet, Modbus, HART"
    },
    translationKeys: {
      title: "products:controllers.automationRecorders.title",
      description: "products:controllers.automationRecorders.description",
      featuresKey: "products:controllers.automationRecorders.features"
    }
  },

  // Switches
  {
    id: "switch-pushbutton-illuminated",
    slug: "switch-pushbutton-illuminated",
    categoryKey: "instrumentation-components",
    subcategoryKey: "switches",
    image: "switches",
    specs: {
      type: "Illuminated Pushbutton",
      contactRating: "10A at 250V AC",
      illumination: "LED",
      protection: "IP65",
      mounting: "22mm"
    },
    translationKeys: {
      title: "products:switches.pushbuttonIlluminated.title",
      description: "products:switches.pushbuttonIlluminated.description",
      featuresKey: "products:switches.pushbuttonIlluminated.features"
    }
  },
  {
    id: "switch-selector-rotary",
    slug: "switch-selector-rotary",
    categoryKey: "instrumentation-components",
    subcategoryKey: "switches",
    image: "switches",
    specs: {
      type: "Rotary Selector",
      positions: "2-12 Positions",
      contactRating: "10A at 250V AC",
      operation: "Maintained/Momentary",
      mounting: "22mm"
    },
    translationKeys: {
      title: "products:switches.selectorRotary.title",
      description: "products:switches.selectorRotary.description",
      featuresKey: "products:switches.selectorRotary.features"
    }
  },
  {
    id: "switch-emergency-stop-safety",
    slug: "switch-emergency-stop-safety",
    categoryKey: "instrumentation-components",
    subcategoryKey: "switches",
    image: "switches",
    specs: {
      type: "Emergency Stop",
      contactRating: "10A at 250V AC",
      safetyCategory: "Category 4",
      reset: "Twist to Reset",
      certification: "TÜV Approved"
    },
    translationKeys: {
      title: "products:switches.emergencyStop.title",
      description: "products:switches.emergencyStop.description",
      featuresKey: "products:switches.emergencyStop.features"
    }
  },

  // Analyzers
  {
    id: "analyzer-gas-chromatography-spectrometry",
    slug: "analyzer-gas-chromatography-spectrometry",
    categoryKey: "instrumentation-components",
    subcategoryKey: "analyzers",
    image: "analyzers",
    specs: {
      type: "GC-MS",
      detectionLimit: "ppb level",
      analysisTime: "5-30 minutes",
      compounds: "VOCs, SVOCs",
      automation: "Fully Automated"
    },
    translationKeys: {
      title: "products:analyzers.gasChromatography.title",
      description: "products:analyzers.gasChromatography.description",
      featuresKey: "products:analyzers.gasChromatography.features"
    }
  },
  {
    id: "analyzer-liquid-ph-conductivity",
    slug: "analyzer-liquid-ph-conductivity",
    categoryKey: "instrumentation-components",
    subcategoryKey: "analyzers",
    image: "analyzers",
    specs: {
      type: "pH/Conductivity",
      pHRange: "0-14 pH",
      accuracy: "±0.01 pH",
      conductivityRange: "0.1 μS to 200 mS",
      temperature: "-10°C to +100°C"
    },
    translationKeys: {
      title: "products:analyzers.liquidpH.title",
      description: "products:analyzers.liquidpH.description",
      featuresKey: "products:analyzers.liquidpH.features"
    }
  },
  {
    id: "analyzer-oxygen-carbon-dioxide",
    slug: "analyzer-oxygen-carbon-dioxide",
    categoryKey: "instrumentation-components",
    subcategoryKey: "analyzers",
    image: "analyzers",
    specs: {
      type: "O2/CO2 Analyzer",
      oxygenRange: "0-100% O2",
      co2Range: "0-100% CO2",
      accuracy: "±1% FS",
      responseTime: "<30 seconds"
    },
    translationKeys: {
      title: "products:analyzers.oxygenCO2.title",
      description: "products:analyzers.oxygenCO2.description",
      featuresKey: "products:analyzers.oxygenCO2.features"
    }
  },

  // Signal Conditioners
  {
    id: "signal-conditioner-thermocouple-converter",
    slug: "signal-conditioner-thermocouple-converter",
    categoryKey: "instrumentation-components",
    subcategoryKey: "signal-conditioners",
    image: "signal-conditioners",
    specs: {
      type: "TC to 4-20mA",
      input: "J, K, T, E, R, S, B",
      output: "4-20mA",
      accuracy: "±0.1°C",
      isolation: "3kV"
    },
    translationKeys: {
      title: "products:signalConditioners.thermocoupleConverter.title",
      description: "products:signalConditioners.thermocoupleConverter.description",
      featuresKey: "products:signalConditioners.thermocoupleConverter.features"
    }
  },
  {
    id: "signal-conditioner-isolation-amplifier",
    slug: "signal-conditioner-isolation-amplifier",
    categoryKey: "instrumentation-components",
    subcategoryKey: "signal-conditioners",
    image: "signal-conditioners",
    specs: {
      type: "Isolation Amplifier",
      input: "±10V, 4-20mA",
      output: "±10V, 4-20mA",
      isolation: "4kV",
      accuracy: "±0.1%"
    },
    translationKeys: {
      title: "products:signalConditioners.isolationAmplifier.title",
      description: "products:signalConditioners.isolationAmplifier.description",
      featuresKey: "products:signalConditioners.isolationAmplifier.features"
    }
  },
  {
    id: "signal-conditioner-current-loop-converter",
    slug: "signal-conditioner-current-loop-converter",
    categoryKey: "instrumentation-components",
    subcategoryKey: "signal-conditioners",
    image: "signal-conditioners",
    specs: {
      type: "Current Loop Converter",
      input: "0-20mA, 4-20mA",
      output: "0-10V, 1-5V",
      accuracy: "±0.1%",
      loadResistance: "≤500Ω"
    },
    translationKeys: {
      title: "products:signalConditioners.currentLoop.title",
      description: "products:signalConditioners.currentLoop.description",
      featuresKey: "products:signalConditioners.currentLoop.features"
    }
  },
  {
    id: "automation-signal-conditioners",
    slug: "automation-signal-conditioners",
    categoryKey: "instrumentation-components",
    subcategoryKey: "signal-conditioners",
    image: "signal-conditioners",
    specs: {
      type: "Universal Signal Conditioner",
      input: "Multiple Types",
      output: "4-20mA, 0-10V",
      channels: "1, 2, 4, 8",
      mounting: "DIN Rail"
    },
    translationKeys: {
      title: "products:signalConditioners.automationUniversal.title",
      description: "products:signalConditioners.automationUniversal.description",
      featuresKey: "products:signalConditioners.automationUniversal.features"
    }
  },

  // Additional Electrical Components - Cables
  {
    id: "cable-instrumentation-shielded",
    slug: "cable-instrumentation-shielded",
    categoryKey: "electrical-components",
    subcategoryKey: "cables-wires",
    image: "cables-wires",
    specs: {
      type: "Instrumentation Cable",
      pairs: "1-24 Pairs",
      shielding: "Individual + Overall",
      voltage: "300V",
      temperature: "-40°C to +90°C"
    },
    translationKeys: {
      title: "products:cablesWires.instrumentationShielded.title",
      description: "products:cablesWires.instrumentationShielded.description",
      featuresKey: "products:cablesWires.instrumentationShielded.features"
    }
  },
  {
    id: "cable-power-distribution-medium-voltage",
    slug: "cable-power-distribution-medium-voltage",
    categoryKey: "electrical-components",
    subcategoryKey: "cables-wires",
    image: "cables-wires",
    specs: {
      type: "MV Power Cable",
      voltage: "11kV - 33kV",
      conductor: "XLPE",
      armoring: "SWA",
      standard: "IEC 60502"
    },
    translationKeys: {
      title: "products:cablesWires.mediumVoltage.title",
      description: "products:cablesWires.mediumVoltage.description",
      featuresKey: "products:cablesWires.mediumVoltage.features"
    }
  },
  {
    id: "cable-communication-fieldbus-ethernet",
    slug: "cable-communication-fieldbus-ethernet",
    categoryKey: "electrical-components",
    subcategoryKey: "cables-wires",
    image: "cables-wires",
    specs: {
      type: "Fieldbus/Ethernet",
      protocol: "Profibus, DeviceNet, Ethernet/IP",
      shielding: "Foil + Braid",
      impedance: "120Ω ±9%",
      category: "Cat 5e/6A"
    },
    translationKeys: {
      title: "products:cablesWires.fieldbusEthernet.title",
      description: "products:cablesWires.fieldbusEthernet.description",
      featuresKey: "products:cablesWires.fieldbusEthernet.features"
    }
  },

  // Additional Circuit Breakers
  {
    id: "circuit-breaker-mcb-miniature",
    slug: "circuit-breaker-mcb-miniature",
    categoryKey: "electrical-components",
    subcategoryKey: "circuit-breakers-fuses",
    image: "circuit-breakers-fuses",
    specs: {
      type: "MCB",
      current: "6A - 63A",
      poles: "1P, 2P, 3P, 4P",
      curve: "B, C, D",
      standard: "IEC 60898"
    },
    translationKeys: {
      title: "products:circuitBreakers.mcbMiniature.title",
      description: "products:circuitBreakers.mcbMiniature.description",
      featuresKey: "products:circuitBreakers.mcbMiniature.features"
    }
  },
  {
    id: "circuit-breaker-mccb-molded-case",
    slug: "circuit-breaker-mccb-molded-case",
    categoryKey: "electrical-components",
    subcategoryKey: "circuit-breakers-fuses",
    image: "circuit-breakers-fuses",
    specs: {
      type: "MCCB",
      current: "16A - 1600A",
      poles: "3P, 4P",
      breakingCapacity: "25-100kA",
      standard: "IEC 60947-2"
    },
    translationKeys: {
      title: "products:circuitBreakers.mccbMoldedCase.title",
      description: "products:circuitBreakers.mccbMoldedCase.description",
      featuresKey: "products:circuitBreakers.mccbMoldedCase.features"
    }
  },
  {
    id: "electrical-fuses-industrial-protection",
    slug: "electrical-fuses-industrial-protection",
    categoryKey: "electrical-components",
    subcategoryKey: "circuit-breakers-fuses",
    image: "circuit-breakers-fuses",
    specs: {
      type: "HRC Fuses",
      current: "2A - 800A",
      voltage: "415V - 11kV",
      breakingCapacity: "80-120kA",
      standard: "IEC 60269"
    },
    translationKeys: {
      title: "products:circuitBreakers.industrialFuses.title",
      description: "products:circuitBreakers.industrialFuses.description",
      featuresKey: "products:circuitBreakers.industrialFuses.features"
    }
  },

  // Additional Connectors
  {
    id: "connector-terminal-blocks-industrial",
    slug: "connector-terminal-blocks-industrial",
    categoryKey: "electrical-components",
    subcategoryKey: "connectors-terminals",
    image: "connectors-terminals",
    specs: {
      type: "Terminal Blocks",
      current: "5A - 150A",
      voltage: "1000V",
      wireSize: "0.2 - 50 mm²",
      mounting: "DIN Rail 35mm"
    },
    translationKeys: {
      title: "products:connectorsTerminals.terminalBlocksIndustrial.title",
      description: "products:connectorsTerminals.terminalBlocksIndustrial.description",
      featuresKey: "products:connectorsTerminals.terminalBlocksIndustrial.features"
    }
  },
  {
    id: "connector-industrial-heavy-duty",
    slug: "connector-industrial-heavy-duty",
    categoryKey: "electrical-components",
    subcategoryKey: "connectors-terminals",
    image: "connectors-terminals",
    specs: {
      type: "Heavy Duty Connector",
      pins: "6-128 Pins",
      current: "10A - 400A",
      voltage: "500V - 1000V",
      protection: "IP65/IP67"
    },
    translationKeys: {
      title: "products:connectorsTerminals.industrialHeavyDuty.title",
      description: "products:connectorsTerminals.industrialHeavyDuty.description",
      featuresKey: "products:connectorsTerminals.industrialHeavyDuty.features"
    }
  },
  {
    id: "connector-signal-precision-miniature",
    slug: "connector-signal-precision-miniature",
    categoryKey: "electrical-components",
    subcategoryKey: "connectors-terminals",
    image: "connectors-terminals",
    specs: {
      type: "Precision Signal",
      pins: "2-50 Pins",
      current: "3A - 5A",
      voltage: "250V",
      shielding: "360° EMI Protection"
    },
    translationKeys: {
      title: "products:connectorsTerminals.signalPrecision.title",
      description: "products:connectorsTerminals.signalPrecision.description",
      featuresKey: "products:connectorsTerminals.signalPrecision.features"
    }
  },

  // Power Supplies
  {
    id: "power-supply-dc-regulated-laboratory",
    slug: "power-supply-dc-regulated-laboratory",
    categoryKey: "electrical-components",
    subcategoryKey: "power-supplies",
    image: "power-supplies",
    specs: {
      type: "DC Regulated",
      voltage: "0-30V",
      current: "0-10A",
      regulation: "±0.01%",
      display: "Digital LED"
    },
    translationKeys: {
      title: "products:powerSupplies.dcRegulated.title",
      description: "products:powerSupplies.dcRegulated.description",
      featuresKey: "products:powerSupplies.dcRegulated.features"
    }
  },
  {
    id: "power-supply-industrial-switched-mode",
    slug: "power-supply-industrial-switched-mode",
    categoryKey: "electrical-components",
    subcategoryKey: "power-supplies",
    image: "power-supplies",
    specs: {
      type: "SMPS",
      input: "85-264V AC",
      output: "24V DC",
      power: "120W - 960W",
      efficiency: ">92%"
    },
    translationKeys: {
      title: "products:powerSupplies.industrialSMPS.title",
      description: "products:powerSupplies.industrialSMPS.description",
      featuresKey: "products:powerSupplies.industrialSMPS.features"
    }
  },
  {
    id: "power-supply-ups-uninterruptible",
    slug: "power-supply-ups-uninterruptible",
    categoryKey: "electrical-components",
    subcategoryKey: "power-supplies",
    image: "power-supplies",
    specs: {
      type: "Online UPS",
      capacity: "1kVA - 200kVA",
      efficiency: "up to 96%",
      backupTime: "15-30 minutes",
      inputVoltage: "380-480V"
    },
    translationKeys: {
      title: "products:powerSupplies.ups.title",
      description: "products:powerSupplies.ups.description",
      featuresKey: "products:powerSupplies.ups.features"
    }
  },

  // Enclosures & Cabinets
  {
    id: "enclosure-control-panel-cabinets",
    slug: "enclosure-control-panel-cabinets",
    categoryKey: "electrical-components",
    subcategoryKey: "enclosures-cabinets",
    image: "enclosures-cabinets",
    specs: {
      type: "Control Panel",
      material: "MS/SS",
      protection: "IP54/IP65",
      mounting: "Wall/Floor",
      customizable: "Yes"
    },
    translationKeys: {
      title: "products:enclosures.controlPanel.title",
      description: "products:enclosures.controlPanel.description",
      featuresKey: "products:enclosures.controlPanel.features"
    }
  },
  {
    id: "enclosure-electrical-nema-rated",
    slug: "enclosure-electrical-nema-rated",
    categoryKey: "electrical-components",
    subcategoryKey: "enclosures-cabinets",
    image: "enclosures-cabinets",
    specs: {
      type: "NEMA Enclosure",
      rating: "NEMA 4X/12",
      material: "Stainless Steel",
      gasket: "Continuous Hinge",
      certification: "UL Listed"
    },
    translationKeys: {
      title: "products:enclosures.nemaRated.title",
      description: "products:enclosures.nemaRated.description",
      featuresKey: "products:enclosures.nemaRated.features"
    }
  },
  {
    id: "enclosure-junction-boxes-weatherproof",
    slug: "enclosure-junction-boxes-weatherproof",
    categoryKey: "electrical-components",
    subcategoryKey: "enclosures-cabinets",
    image: "enclosures-cabinets",
    specs: {
      type: "Junction Box",
      material: "Polycarbonate/Aluminum",
      protection: "IP67/IP68",
      temperature: "-40°C to +120°C",
      mounting: "Wall/Pole"
    },
    translationKeys: {
      title: "products:enclosures.junctionBoxes.title",
      description: "products:enclosures.junctionBoxes.description",
      featuresKey: "products:enclosures.junctionBoxes.features"
    }
  },

  // Heating Elements & Appliances
  {
    id: "heating-element-industrial-cartridge-band",
    slug: "heating-element-industrial-cartridge-band",
    categoryKey: "electrical-components",
    subcategoryKey: "heating-elements-appliances",
    image: "heating-elements",
    specs: {
      type: "Cartridge/Band Heater",
      power: "250W - 10kW",
      temperature: "up to 750°C",
      voltage: "230V/415V",
      sheath: "Stainless Steel"
    },
    translationKeys: {
      title: "products:heating.cartridgeBand.title",
      description: "products:heating.cartridgeBand.description",
      featuresKey: "products:heating.cartridgeBand.features"
    }
  },
  {
    id: "heating-electric-ovens-furnaces",
    slug: "heating-electric-ovens-furnaces",
    categoryKey: "electrical-components",
    subcategoryKey: "heating-elements-appliances",
    image: "heating-elements",
    specs: {
      type: "Electric Oven/Furnace",
      temperature: "up to 1200°C",
      capacity: "50L - 500L",
      control: "PID Temperature Controller",
      insulation: "Ceramic Fiber"
    },
    translationKeys: {
      title: "products:heating.ovensFurnaces.title",
      description: "products:heating.ovensFurnaces.description",
      featuresKey: "products:heating.ovensFurnaces.features"
    }
  },
  {
    id: "heating-heat-tracing-systems",
    slug: "heating-heat-tracing-systems",
    categoryKey: "electrical-components",
    subcategoryKey: "heating-elements-appliances",
    image: "heating-elements",
    specs: {
      type: "Heat Tracing",
      application: "Pipe/Tank Heating",
      temperature: "-60°C to +250°C",
      power: "10-80 W/m",
      control: "Electronic Thermostat"
    },
    translationKeys: {
      title: "products:heating.heatTracing.title",
      description: "products:heating.heatTracing.description",
      featuresKey: "products:heating.heatTracing.features"
    }
  },

  // Measurement Instruments - Multimeters
  {
    id: "multimeter-fluke-87v-industrial",
    slug: "multimeter-fluke-87v-industrial",
    categoryKey: "measurement-instruments",
    subcategoryKey: "multimeters",
    image: "multimeters",
    specs: {
      type: "True RMS Digital",
      dcVoltage: "6V to 1000V",
      acVoltage: "6V to 1000V",
      dcCurrent: "60μA to 10A",
      safetyRating: "CAT IV 600V"
    },
    translationKeys: {
      title: "products:multimeters.fluke87v.title",
      description: "products:multimeters.fluke87v.description",
      featuresKey: "products:multimeters.fluke87v.features"
    }
  },
  {
    id: "multimeter-keysight-u1272a-handheld",
    slug: "multimeter-keysight-u1272a-handheld",
    categoryKey: "measurement-instruments",
    subcategoryKey: "multimeters",
    image: "multimeters",
    specs: {
      type: "Handheld Digital",
      display: "OLED",
      dcAccuracy: "0.09%",
      bandwidth: "100kHz",
      dataLogging: "10,000 readings"
    },
    translationKeys: {
      title: "products:multimeters.keysightU1272a.title",
      description: "products:multimeters.keysightU1272a.description",
      featuresKey: "products:multimeters.keysightU1272a.features"
    }
  },
  {
    id: "multimeter-yokogawa-ty720-digital",
    slug: "multimeter-yokogawa-ty720-digital",
    categoryKey: "measurement-instruments",
    subcategoryKey: "multimeters",
    image: "multimeters",
    specs: {
      type: "Portable Digital",
      dcVoltage: "200mV to 1000V",
      resolution: "10μV",
      accuracy: "±0.012%",
      functions: "9 Functions"
    },
    translationKeys: {
      title: "products:multimeters.yokogawaTY720.title",
      description: "products:multimeters.yokogawaTY720.description",
      featuresKey: "products:multimeters.yokogawaTY720.features"
    }
  },

  // Oscilloscopes
  {
    id: "oscilloscope-keysight-infiniivision-3000t-x-series",
    slug: "oscilloscope-keysight-infiniivision-3000t-x-series",
    categoryKey: "measurement-instruments",
    subcategoryKey: "oscilloscopes",
    image: "oscilloscopes",
    specs: {
      channels: "2/4 Channels",
      bandwidth: "100MHz - 1GHz",
      sampleRate: "5 GSa/s",
      memory: "4 Mpts",
      display: "8.5\" Capacitive Touch"
    },
    translationKeys: {
      title: "products:oscilloscopes.keysightInfiniivision.title",
      description: "products:oscilloscopes.keysightInfiniivision.description",
      featuresKey: "products:oscilloscopes.keysightInfiniivision.features"
    }
  },
  {
    id: "oscilloscope-rohde-schwarz-rtm3000",
    slug: "oscilloscope-rohde-schwarz-rtm3000",
    categoryKey: "measurement-instruments",
    subcategoryKey: "oscilloscopes",
    image: "oscilloscopes",
    specs: {
      channels: "2/4 Channels",
      bandwidth: "100MHz - 1GHz",
      sampleRate: "5 GSa/s",
      memory: "80 Mpts",
      display: "10.1\" Multi-touch"
    },
    translationKeys: {
      title: "products:oscilloscopes.rohdeSchwartzRTM3000.title",
      description: "products:oscilloscopes.rohdeSchwartzRTM3000.description",
      featuresKey: "products:oscilloscopes.rohdeSchwartzRTM3000.features"
    }
  },
  {
    id: "oscilloscope-tektronix-mdo3000-mixed-domain",
    slug: "oscilloscope-tektronix-mdo3000-mixed-domain",
    categoryKey: "measurement-instruments",
    subcategoryKey: "oscilloscopes",
    image: "oscilloscopes",
    specs: {
      type: "Mixed Domain",
      channels: "2/4 Analog + RF",
      bandwidth: "100MHz - 1GHz",
      rfRange: "9 kHz to 3 GHz",
      display: "9\" WVGA"
    },
    translationKeys: {
      title: "products:oscilloscopes.tektronixMDO3000.title",
      description: "products:oscilloscopes.tektronixMDO3000.description",
      featuresKey: "products:oscilloscopes.tektronixMDO3000.features"
    }
  },

  // Spectrum Analyzers
  {
    id: "spectrum-analyzer-keysight-n9020a-mxa",
    slug: "spectrum-analyzer-keysight-n9020a-mxa",
    categoryKey: "measurement-instruments",
    subcategoryKey: "spectrum-analyzers",
    image: "spectrum-analyzers",
    specs: {
      frequency: "10 Hz to 50 GHz",
      phaseNoise: "-136 dBc/Hz",
      amplitude: "-165 dBm to +30 dBm",
      display: "12.1\" Color",
      options: "Multiple Analysis"
    },
    translationKeys: {
      title: "products:spectrumAnalyzers.keysightN9020A.title",
      description: "products:spectrumAnalyzers.keysightN9020A.description",
      featuresKey: "products:spectrumAnalyzers.keysightN9020A.features"
    }
  },
  {
    id: "spectrum-analyzer-rohde-schwarz-fsw",
    slug: "spectrum-analyzer-rohde-schwarz-fsw",
    categoryKey: "measurement-instruments",
    subcategoryKey: "spectrum-analyzers",
    image: "spectrum-analyzers",
    specs: {
      frequency: "2 Hz to 67 GHz",
      phaseNoise: "-145 dBc/Hz",
      analysis: "500 MHz",
      display: "12.1\" Touch",
      accuracy: "±0.3 dB"
    },
    translationKeys: {
      title: "products:spectrumAnalyzers.rohdeSchwartzFSW.title",
      description: "products:spectrumAnalyzers.rohdeSchwartzFSW.description",
      featuresKey: "products:spectrumAnalyzers.rohdeSchwartzFSW.features"
    }
  },
  {
    id: "spectrum-analyzer-anritsu-ms2720t-master",
    slug: "spectrum-analyzer-anritsu-ms2720t-master",
    categoryKey: "measurement-instruments",
    subcategoryKey: "spectrum-analyzers",
    image: "spectrum-analyzers",
    specs: {
      type: "Handheld",
      frequency: "9 kHz to 32 GHz",
      batteryLife: "3.5 Hours",
      weight: "2.4 kg",
      display: "6.5\" Color LCD"
    },
    translationKeys: {
      title: "products:spectrumAnalyzers.anritsuMS2720T.title",
      description: "products:spectrumAnalyzers.anritsuMS2720T.description",
      featuresKey: "products:spectrumAnalyzers.anritsuMS2720T.features"
    }
  },

  // Power Quality Analyzers
  {
    id: "power-quality-analyzer-fluke-435-ii",
    slug: "power-quality-analyzer-fluke-435-ii",
    categoryKey: "measurement-instruments",
    subcategoryKey: "power-quality-analyzers",
    image: "power-quality-analyzers",
    specs: {
      voltage: "1000V/600V",
      current: "6000A",
      harmonics: "up to 50th",
      memory: "8GB",
      display: "7\" Color"
    },
    translationKeys: {
      title: "products:powerQualityAnalyzers.fluke435II.title",
      description: "products:powerQualityAnalyzers.fluke435II.description",
      featuresKey: "products:powerQualityAnalyzers.fluke435II.features"
    }
  },
  {
    id: "power-quality-analyzer-hioki-pw3390",
    slug: "power-quality-analyzer-hioki-pw3390",
    categoryKey: "measurement-instruments",
    subcategoryKey: "power-quality-analyzers",
    image: "power-quality-analyzers",
    specs: {
      voltage: "600V/1000V",
      current: "5000A",
      harmonics: "up to 500th",
      sampling: "20 kS/s",
      memory: "4GB"
    },
    translationKeys: {
      title: "products:powerQualityAnalyzers.hiokiPW3390.title",
      description: "products:powerQualityAnalyzers.hiokiPW3390.description",
      featuresKey: "products:powerQualityAnalyzers.hiokiPW3390.features"
    }
  },
  {
    id: "power-quality-analyzer-dranetz-hdpq",
    slug: "power-quality-analyzer-dranetz-hdpq",
    categoryKey: "measurement-instruments",
    subcategoryKey: "power-quality-analyzers",
    image: "power-quality-analyzers",
    specs: {
      channels: "4 Voltage + 4 Current",
      sampling: "256 samples/cycle",
      harmonics: "up to 63rd",
      memory: "8GB",
      connectivity: "Ethernet/WiFi"
    },
    translationKeys: {
      title: "products:powerQualityAnalyzers.dranetzHDPQ.title",
      description: "products:powerQualityAnalyzers.dranetzHDPQ.description",
      featuresKey: "products:powerQualityAnalyzers.dranetzHDPQ.features"
    }
  },

  // Calibration Equipment
  {
    id: "calibrator-pressure-dead-weight-tester",
    slug: "calibrator-pressure-dead-weight-tester",
    categoryKey: "measurement-instruments",
    subcategoryKey: "calibration-equipment",
    image: "calibration-equipment",
    specs: {
      type: "Dead Weight Tester",
      pressure: "up to 1000 bar",
      accuracy: "±0.02%",
      weights: "Standard Masses",
      certification: "NIST Traceable"
    },
    translationKeys: {
      title: "products:calibrationEquipment.pressureDeadWeight.title",
      description: "products:calibrationEquipment.pressureDeadWeight.description",
      featuresKey: "products:calibrationEquipment.pressureDeadWeight.features"
    }
  },
  {
    id: "calibrator-temperature-precision-reference",
    slug: "calibrator-temperature-precision-reference",
    categoryKey: "measurement-instruments",
    subcategoryKey: "calibration-equipment",
    image: "calibration-equipment",
    specs: {
      type: "Temperature Calibrator",
      range: "-100°C to +660°C",
      accuracy: "±0.02°C",
      stability: "±0.005°C",
      probes: "RTD/TC Compatible"
    },
    translationKeys: {
      title: "products:calibrationEquipment.temperaturePrecision.title",
      description: "products:calibrationEquipment.temperaturePrecision.description",
      featuresKey: "products:calibrationEquipment.temperaturePrecision.features"
    }
  },
  {
    id: "calibrator-process-multifunction",
    slug: "calibrator-process-multifunction",
    categoryKey: "measurement-instruments",
    subcategoryKey: "calibration-equipment",
    image: "calibration-equipment",
    specs: {
      type: "Multifunction",
      voltage: "±100V",
      current: "±24mA",
      resistance: "4000Ω",
      pressure: "3000 psi",
      temperature: "-200°C to +1370°C"
    },
    translationKeys: {
      title: "products:calibrationEquipment.processMultifunction.title",
      description: "products:calibrationEquipment.processMultifunction.description",
      featuresKey: "products:calibrationEquipment.processMultifunction.features"
    }
  },

  // Automation Control Systems - PLCs
  {
    id: "plc-siemens-simatic-s7-1200",
    slug: "plc-siemens-simatic-s7-1200",
    categoryKey: "automation-control-systems",
    subcategoryKey: "plcs",
    image: "plcs",
    specs: {
      type: "Compact PLC",
      cpu: "S7-1200",
      memory: "100KB",
      io: "14DI/10DO/2AI",
      communication: "Ethernet, Profinet"
    },
    translationKeys: {
      title: "products:plcs.siemensS7_1200.title",
      description: "products:plcs.siemensS7_1200.description",
      featuresKey: "products:plcs.siemensS7_1200.features"
    }
  },
  {
    id: "plc-allen-bradley-compactlogix-5380",
    slug: "plc-allen-bradley-compactlogix-5380",
    categoryKey: "automation-control-systems",
    subcategoryKey: "plcs",
    image: "plcs",
    specs: {
      type: "Compact GuardLogix",
      cpu: "5380 Series",
      memory: "3MB",
      io: "Modular I/O",
      communication: "EtherNet/IP"
    },
    translationKeys: {
      title: "products:plcs.allenBradleyCompactLogix.title",
      description: "products:plcs.allenBradleyCompactLogix.description",
      featuresKey: "products:plcs.allenBradleyCompactLogix.features"
    }
  },
  {
    id: "plc-schneider-electric-modicon-m580",
    slug: "plc-schneider-electric-modicon-m580",
    categoryKey: "automation-control-systems",
    subcategoryKey: "plcs",
    image: "plcs",
    specs: {
      type: "Modular PLC",
      cpu: "M580 Series",
      memory: "16MB",
      io: "Hot-swappable",
      communication: "Ethernet, Modbus TCP"
    },
    translationKeys: {
      title: "products:plcs.schneiderModiconM580.title",
      description: "products:plcs.schneiderModiconM580.description",
      featuresKey: "products:plcs.schneiderModiconM580.features"
    }
  },

  // SCADA Systems
  {
    id: "scada-siemens-wincc",
    slug: "scada-siemens-wincc",
    categoryKey: "automation-control-systems",
    subcategoryKey: "scada",
    image: "scada",
    specs: {
      type: "SCADA Software",
      version: "WinCC Professional",
      tags: "65,536",
      clients: "12 Clients",
      database: "SQL Server"
    },
    translationKeys: {
      title: "products:scada.siemensWinCC.title",
      description: "products:scada.siemensWinCC.description",
      featuresKey: "products:scada.siemensWinCC.features"
    }
  },
  {
    id: "scada-ge-ifix",
    slug: "scada-ge-ifix",
    categoryKey: "automation-control-systems",
    subcategoryKey: "scada",
    image: "scada",
    specs: {
      type: "SCADA/HMI",
      version: "iFIX 6.5",
      tags: "Unlimited",
      redundancy: "Hot Standby",
      connectivity: "OPC, DDE, TCP/IP"
    },
    translationKeys: {
      title: "products:scada.geIfix.title",
      description: "products:scada.geIfix.description",
      featuresKey: "products:scada.geIfix.features"
    }
  },
  {
    id: "scada-wonderware-system-platform",
    slug: "scada-wonderware-system-platform",
    categoryKey: "automation-control-systems",
    subcategoryKey: "scada",
    image: "scada",
    specs: {
      type: "SCADA Platform",
      version: "System Platform 2020",
      tags: "Unlimited",
      redundancy: "Galaxy Redundancy",
      clients: "Multiple Client Types"
    },
    translationKeys: {
      title: "products:scada.wonderwareSystemPlatform.title",
      description: "products:scada.wonderwareSystemPlatform.description",
      featuresKey: "products:scada.wonderwareSystemPlatform.features"
    }
  },

  // DCS Systems
  {
    id: "dcs-abb-system-800xa",
    slug: "dcs-abb-system-800xa",
    categoryKey: "automation-control-systems",
    subcategoryKey: "dcs",
    image: "dcs",
    specs: {
      type: "DCS System",
      version: "800xA 6.1",
      controllers: "AC 800M",
      io: "S800 I/O",
      communication: "HSE, Foundation Fieldbus"
    },
    translationKeys: {
      title: "products:dcs.abbSystem800xA.title",
      description: "products:dcs.abbSystem800xA.description",
      featuresKey: "products:dcs.abbSystem800xA.features"
    }
  },
  {
    id: "dcs-emerson-deltav",
    slug: "dcs-emerson-deltav",
    categoryKey: "automation-control-systems",
    subcategoryKey: "dcs",
    image: "dcs",
    specs: {
      type: "DCS System",
      version: "DeltaV v15",
      controllers: "M-Series",
      io: "CHARM I/O",
      communication: "HART, Foundation Fieldbus"
    },
    translationKeys: {
      title: "products:dcs.emersonDeltaV.title",
      description: "products:dcs.emersonDeltaV.description",
      featuresKey: "products:dcs.emersonDeltaV.features"
    }
  },
  {
    id: "dcs-honeywell-experion-pks",
    slug: "dcs-honeywell-experion-pks",
    categoryKey: "automation-control-systems",
    subcategoryKey: "dcs",
    image: "dcs",
    specs: {
      type: "DCS System",
      version: "Experion PKS",
      controllers: "C300 Controllers",
      io: "OneWireless I/O",
      communication: "DE, HART, Wireless"
    },
    translationKeys: {
      title: "products:dcs.honeywellExperionPKS.title",
      description: "products:dcs.honeywellExperionPKS.description",
      featuresKey: "products:dcs.honeywellExperionPKS.features"
    }
  },

  // HMI Systems
  {
    id: "hmi-panel-mount",
    slug: "hmi-panel-mount",
    categoryKey: "automation-control-systems",
    subcategoryKey: "hmi",
    image: "hmi",
    specs: {
      type: "Panel Mount HMI",
      display: "10.1\" TFT Color",
      resolution: "1280 x 800",
      memory: "1GB RAM, 8GB Flash",
      communication: "Ethernet, RS485, CAN"
    },
    translationKeys: {
      title: "products:hmi.panelMount.title",
      description: "products:hmi.panelMount.description",
      featuresKey: "products:hmi.panelMount.features"
    }
  },
  {
    id: "hmi-operator-interface-station",
    slug: "hmi-operator-interface-station",
    categoryKey: "automation-control-systems",
    subcategoryKey: "hmi",
    image: "hmi",
    specs: {
      type: "Operator Station",
      display: "21.5\" Full HD",
      processor: "Intel Core i5",
      memory: "8GB RAM, 500GB SSD",
      os: "Windows 10 IoT"
    },
    translationKeys: {
      title: "products:hmi.operatorInterface.title",
      description: "products:hmi.operatorInterface.description",
      featuresKey: "products:hmi.operatorInterface.features"
    }
  },
  {
    id: "hmi-mobile",
    slug: "hmi-mobile",
    categoryKey: "automation-control-systems",
    subcategoryKey: "hmi",
    image: "hmi",
    specs: {
      type: "Mobile HMI",
      display: "12\" Rugged Tablet",
      protection: "IP65",
      battery: "8 Hour Operation",
      connectivity: "WiFi, 4G LTE"
    },
    translationKeys: {
      title: "products:hmi.mobile.title",
      description: "products:hmi.mobile.description",
      featuresKey: "products:hmi.mobile.features"
    }
  },

  // Mechanical Pumps - Centrifugal
  {
    id: "centrifugal-pump-end-suction",
    slug: "centrifugal-pump-end-suction",
    categoryKey: "mechanical-pumps-spares",
    subcategoryKey: "centrifugal-pumps",
    image: "centrifugal-pumps",
    specs: {
      type: "End Suction",
      flow: "10-500 m³/h",
      head: "10-120 m",
      power: "0.5-75 kW",
      material: "Cast Iron/SS316"
    },
    translationKeys: {
      title: "products:centrifugalPumps.endSuction.title",
      description: "products:centrifugalPumps.endSuction.description",
      featuresKey: "products:centrifugalPumps.endSuction.features"
    }
  },
  {
    id: "centrifugal-pump-multi-stage",
    slug: "centrifugal-pump-multi-stage",
    categoryKey: "mechanical-pumps-spares",
    subcategoryKey: "centrifugal-pumps",
    image: "centrifugal-pumps",
    specs: {
      type: "Multi-stage",
      flow: "5-200 m³/h",
      head: "50-500 m",
      stages: "2-15 Stages",
      efficiency: "up to 85%"
    },
    translationKeys: {
      title: "products:centrifugalPumps.multiStage.title",
      description: "products:centrifugalPumps.multiStage.description",
      featuresKey: "products:centrifugalPumps.multiStage.features"
    }
  },
  {
    id: "centrifugal-pump-chemical-process",
    slug: "centrifugal-pump-chemical-process",
    categoryKey: "mechanical-pumps-spares",
    subcategoryKey: "centrifugal-pumps",
    image: "centrifugal-pumps",
    specs: {
      type: "Chemical Process",
      flow: "5-1000 m³/h",
      head: "20-200 m",
      material: "SS316L, Hastelloy",
      sealType: "Mechanical Seal"
    },
    translationKeys: {
      title: "products:centrifugalPumps.chemicalProcess.title",
      description: "products:centrifugalPumps.chemicalProcess.description",
      featuresKey: "products:centrifugalPumps.chemicalProcess.features"
    }
  },

  // Diaphragm Pumps
  {
    id: "diaphragm-pump-air-operated",
    slug: "diaphragm-pump-air-operated",
    categoryKey: "mechanical-pumps-spares",
    subcategoryKey: "diaphragm-pumps",
    image: "diaphragm-pumps",
    specs: {
      type: "Air Operated",
      flow: "1-200 L/min",
      pressure: "0.2-8.5 bar",
      material: "PP, PTFE, SS316",
      viscosity: "up to 1000 cP"
    },
    translationKeys: {
      title: "products:diaphragmPumps.airOperated.title",
      description: "products:diaphragmPumps.airOperated.description",
      featuresKey: "products:diaphragmPumps.airOperated.features"
    }
  },
  {
    id: "diaphragm-pump-electric-metering",
    slug: "diaphragm-pump-electric-metering",
    categoryKey: "mechanical-pumps-spares",
    subcategoryKey: "diaphragm-pumps",
    image: "diaphragm-pumps",
    specs: {
      type: "Electric Metering",
      flow: "0.1-50 L/h",
      pressure: "up to 25 bar",
      accuracy: "±1%",
      control: "4-20mA, Pulse"
    },
    translationKeys: {
      title: "products:diaphragmPumps.electricMetering.title",
      description: "products:diaphragmPumps.electricMetering.description",
      featuresKey: "products:diaphragmPumps.electricMetering.features"
    }
  },
  {
    id: "diaphragm-pump-hydraulic-high-pressure",
    slug: "diaphragm-pump-hydraulic-high-pressure",
    categoryKey: "mechanical-pumps-spares",
    subcategoryKey: "diaphragm-pumps",
    image: "diaphragm-pumps",
    specs: {
      type: "Hydraulic HP",
      flow: "10-500 L/h",
      pressure: "up to 700 bar",
      power: "5-50 kW",
      applications: "High Pressure Cleaning"
    },
    translationKeys: {
      title: "products:diaphragmPumps.hydraulicHP.title",
      description: "products:diaphragmPumps.hydraulicHP.description",
      featuresKey: "products:diaphragmPumps.hydraulicHP.features"
    }
  },

  // Gear Pumps
  {
    id: "gear-pump-external-positive-displacement",
    slug: "gear-pump-external-positive-displacement",
    categoryKey: "mechanical-pumps-spares",
    subcategoryKey: "gear-pumps",
    image: "gear-pumps",
    specs: {
      type: "External Gear",
      flow: "0.5-500 L/min",
      pressure: "up to 250 bar",
      viscosity: "1-1,000,000 cP",
      temperature: "-40°C to +200°C"
    },
    translationKeys: {
      title: "products:gearPumps.externalGear.title",
      description: "products:gearPumps.externalGear.description",
      featuresKey: "products:gearPumps.externalGear.features"
    }
  },
  {
    id: "gear-pump-internal-smooth-flow",
    slug: "gear-pump-internal-smooth-flow",
    categoryKey: "mechanical-pumps-spares",
    subcategoryKey: "gear-pumps",
    image: "gear-pumps",
    specs: {
      type: "Internal Gear",
      flow: "1-300 L/min",
      pressure: "up to 100 bar",
      viscosity: "1-500,000 cP",
      noise: "Low Noise Design"
    },
    translationKeys: {
      title: "products:gearPumps.internalGear.title",
      description: "products:gearPumps.internalGear.description",
      featuresKey: "products:gearPumps.internalGear.features"
    }
  },
  {
    id: "gear-pump-magnetic-drive-sealless",
    slug: "gear-pump-magnetic-drive-sealless",
    categoryKey: "mechanical-pumps-spares",
    subcategoryKey: "gear-pumps",
    image: "gear-pumps",
    specs: {
      type: "Magnetic Drive",
      flow: "0.2-200 L/min",
      pressure: "up to 16 bar",
      material: "SS316L, Hastelloy",
      containment: "Zero Leakage"
    },
    translationKeys: {
      title: "products:gearPumps.magneticDrive.title",
      description: "products:gearPumps.magneticDrive.description",
      featuresKey: "products:gearPumps.magneticDrive.features"
    }
  }

  // Product catalog complete!
];

// Category structure
export const categories: Category[] = [
  {
    key: "bldc",
    translationKey: "products:categories.bldc",
    subcategories: [
      {
        key: "bldc-ceiling-fan",
        translationKey: "products:subcategories.bldcCeilingFan",
        products: ["bldc-smart1200", "bldc-premium1400", "bldc-commercial1500"]
      },
      {
        key: "bldc-cooler-exhaust-motor",
        translationKey: "products:subcategories.bldcCoolerExhaust",
        products: ["bldc-exhaust-fan", "bldc-cooler-motors", "bldc-ventilation"]
      },
      {
        key: "bldc-submersible-surface-pump",
        translationKey: "products:subcategories.bldcPumps",
        products: ["solar-bldc-submersible-1hp", "dc-surface-pump-2hp", "hybrid-bldc-pump"]
      },
      {
        key: "bldc-table-fan-wall-fan-motor",
        translationKey: "products:subcategories.bldcFans",
        products: ["bldc-table-fan-motors", "bldc-wall-fan-motors", "bldc-pedestal-fan-motors"]
      }
    ]
  },
  {
    key: "instrumentation-components",
    translationKey: "products:categories.instrumentationComponents",
    subcategories: [
      {
        key: "sensors",
        translationKey: "products:subcategories.sensors",
        products: ["sensor-temperature-rtd-thermocouple", "sensor-pressure-strain-gauge", "sensor-flow-electromagnetic-ultrasonic"]
      },
      {
        key: "transmitters",
        translationKey: "products:subcategories.transmitters",
        products: ["transmitter-pressure-hart-communication", "transmitter-temperature-wireless-monitoring", "transmitter-level-ultrasonic-radar"]
      },
      {
        key: "controllers",
        translationKey: "products:subcategories.controllers",
        products: ["automation-controllers-recorders"]
      },
      {
        key: "switches",
        translationKey: "products:subcategories.switches",
        products: ["switch-pushbutton-illuminated", "switch-selector-rotary", "switch-emergency-stop-safety"]
      },
      {
        key: "valves",
        translationKey: "products:subcategories.valves",
        products: []
      },
      {
        key: "analyzers",
        translationKey: "products:subcategories.analyzers",
        products: ["analyzer-gas-chromatography-spectrometry", "analyzer-liquid-ph-conductivity", "analyzer-oxygen-carbon-dioxide"]
      },
      {
        key: "signal-conditioners",
        translationKey: "products:subcategories.signalConditioners",
        products: ["signal-conditioner-thermocouple-converter", "signal-conditioner-isolation-amplifier", "signal-conditioner-current-loop-converter", "automation-signal-conditioners"]
      }
    ]
  },
  {
    key: "electrical-components",
    translationKey: "products:categories.electricalComponents",
    subcategories: [
      {
        key: "cables-wires",
        translationKey: "products:subcategories.cablesWires",
        products: ["instrumentation-cables", "power-distribution-cables", "communication-cables", "cable-instrumentation-shielded", "cable-power-distribution-medium-voltage", "cable-communication-fieldbus-ethernet"]
      },
      {
        key: "circuit-breakers-fuses",
        translationKey: "products:subcategories.circuitBreakers",
        products: ["mcb-circuit-breakers", "mccb-circuit-breakers", "industrial-fuses", "circuit-breaker-mcb-miniature", "circuit-breaker-mccb-molded-case", "electrical-fuses-industrial-protection"]
      },
      {
        key: "connectors-terminals",
        translationKey: "products:subcategories.connectorsTerminals",
        products: ["terminal-blocks", "industrial-connectors", "signal-connectors", "connector-terminal-blocks-industrial", "connector-industrial-heavy-duty", "connector-signal-precision-miniature"]
      },
      {
        key: "power-supplies",
        translationKey: "products:subcategories.powerSupplies",
        products: ["power-supply-dc-regulated-laboratory", "power-supply-industrial-switched-mode", "power-supply-ups-uninterruptible"]
      },
      {
        key: "enclosures-cabinets",
        translationKey: "products:subcategories.enclosuresCabinets",
        products: ["enclosure-control-panel-cabinets", "enclosure-electrical-nema-rated", "enclosure-junction-boxes-weatherproof"]
      },
      {
        key: "heating-elements-appliances",
        translationKey: "products:subcategories.heatingElements",
        products: ["heating-element-industrial-cartridge-band", "heating-electric-ovens-furnaces", "heating-heat-tracing-systems"]
      }
    ]
  },
  {
    key: "measurement-instruments",
    translationKey: "products:categories.measurementInstruments",
    subcategories: [
      {
        key: "multimeters",
        translationKey: "products:subcategories.multimeters",
        products: ["multimeter-fluke-87v-industrial", "multimeter-keysight-u1272a-handheld", "multimeter-yokogawa-ty720-digital"]
      },
      {
        key: "oscilloscopes",
        translationKey: "products:subcategories.oscilloscopes",
        products: ["oscilloscope-keysight-infiniivision-3000t-x-series", "oscilloscope-rohde-schwarz-rtm3000", "oscilloscope-tektronix-mdo3000-mixed-domain"]
      },
      {
        key: "spectrum-analyzers",
        translationKey: "products:subcategories.spectrumAnalyzers",
        products: ["spectrum-analyzer-keysight-n9020a-mxa", "spectrum-analyzer-rohde-schwarz-fsw", "spectrum-analyzer-anritsu-ms2720t-master"]
      },
      {
        key: "power-quality-analyzers",
        translationKey: "products:subcategories.powerQualityAnalyzers",
        products: ["power-quality-analyzer-fluke-435-ii", "power-quality-analyzer-hioki-pw3390", "power-quality-analyzer-dranetz-hdpq"]
      },
      {
        key: "calibration-equipment",
        translationKey: "products:subcategories.calibrationEquipment",
        products: ["calibrator-pressure-dead-weight-tester", "calibrator-temperature-precision-reference", "calibrator-process-multifunction"]
      }
    ]
  },
  {
    key: "solar-products",
    translationKey: "products:categories.solarProducts",
    subcategories: [
      {
        key: "solar-panels",
        translationKey: "products:subcategories.solarPanels",
        products: []
      },
      {
        key: "solar-inverters",
        translationKey: "products:subcategories.solarInverters",
        products: []
      },
      {
        key: "mounting-structures-racking",
        translationKey: "products:subcategories.mountingStructures",
        products: []
      },
      {
        key: "solar-charge-controllers",
        translationKey: "products:subcategories.solarChargeControllers",
        products: []
      },
      {
        key: "solar-batteries-energy-storage",
        translationKey: "products:subcategories.solarBatteries",
        products: []
      }
    ]
  },
  {
    key: "automation-control-systems",
    translationKey: "products:categories.automationControl",
    subcategories: [
      {
        key: "plcs",
        translationKey: "products:subcategories.plcs",
        products: ["plc-siemens-simatic-s7-1200", "plc-allen-bradley-compactlogix-5380", "plc-schneider-electric-modicon-m580"]
      },
      {
        key: "scada",
        translationKey: "products:subcategories.scada",
        products: ["scada-siemens-wincc", "scada-ge-ifix", "scada-wonderware-system-platform"]
      },
      {
        key: "dcs",
        translationKey: "products:subcategories.dcs",
        products: ["dcs-abb-system-800xa", "dcs-emerson-deltav", "dcs-honeywell-experion-pks"]
      },
      {
        key: "hmi",
        translationKey: "products:subcategories.hmi",
        products: ["hmi-panel-mount", "hmi-operator-interface-station", "hmi-mobile"]
      }
    ]
  },
  {
    key: "safety-protective-devices",
    translationKey: "products:categories.safetyProtective",
    subcategories: [
      {
        key: "surge-protectors",
        translationKey: "products:subcategories.surgeProtectors",
        products: []
      },
      {
        key: "grounding-systems",
        translationKey: "products:subcategories.groundingSystems",
        products: []
      },
      {
        key: "safety-relays-switches",
        translationKey: "products:subcategories.safetyRelays",
        products: []
      },
      {
        key: "intrinsically-safe-equipment",
        translationKey: "products:subcategories.intrinsicallySafe",
        products: []
      }
    ]
  },
  {
    key: "mechanical-pumps-spares",
    translationKey: "products:categories.mechanicalPumps",
    subcategories: [
      {
        key: "centrifugal-pumps",
        translationKey: "products:subcategories.centrifugalPumps",
        products: ["centrifugal-pump-end-suction", "centrifugal-pump-multi-stage", "centrifugal-pump-chemical-process"]
      },
      {
        key: "diaphragm-pumps",
        translationKey: "products:subcategories.diaphragmPumps",
        products: ["diaphragm-pump-air-operated", "diaphragm-pump-electric-metering", "diaphragm-pump-hydraulic-high-pressure"]
      },
      {
        key: "gear-pumps",
        translationKey: "products:subcategories.gearPumps",
        products: ["gear-pump-external-positive-displacement", "gear-pump-internal-smooth-flow", "gear-pump-magnetic-drive-sealless"]
      },
      {
        key: "pump-parts-spares",
        translationKey: "products:subcategories.pumpPartsSpares",
        products: []
      }
    ]
  },
  {
    key: "industrial-tools-tackles",
    translationKey: "products:categories.industrialTools",
    subcategories: [
      {
        key: "hand-tools",
        translationKey: "products:subcategories.handTools",
        products: []
      },
      {
        key: "power-tools",
        translationKey: "products:subcategories.powerTools",
        products: []
      },
      {
        key: "cutting-tools",
        translationKey: "products:subcategories.cuttingTools",
        products: []
      },
      {
        key: "lifting-equipment",
        translationKey: "products:subcategories.liftingEquipment",
        products: []
      },
      {
        key: "safety-equipment",
        translationKey: "products:subcategories.safetyEquipment",
        products: []
      }
    ]
  }
];

// Utility functions
export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (categoryKey: string): Product[] => {
  return products.filter(product => product.categoryKey === categoryKey);
};

export const getProductsBySubcategory = (subcategoryKey: string): Product[] => {
  return products.filter(product => product.subcategoryKey === subcategoryKey);
};

export const getProductsForSubcategory = (subcategoryKey: string): Product[] => {
  const subcategory = categories
    .flatMap(cat => cat.subcategories)
    .find(sub => sub.key === subcategoryKey);
  
  if (!subcategory) return [];
  
  return subcategory.products
    .map(productId => getProductById(productId))
    .filter((product): product is Product => product !== undefined);
};

export const getAllProductSlugs = (): string[] => {
  return products.map(product => product.slug);
};

export const getProductImageKey = (product: Product): string => {
  return product.image;
};