// Image handling will use direct string keys that resolve to paths at render time

export interface ProductSpecs {
  [key: string]: string | number;
}

export interface Product {
  id: string;
  slug: string;
  image: string;
  datasheetUrl?: string;
  title: string;
  description: string;
  features: string[];
  specs: ProductSpecs;
}

export interface ProductGroup {
  key: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  icon?: string;
  featuredSpecs: string[];
  products: Product[];
}

export interface SubCategory {
  key: string;
  title: string;
  description: string;
  productGroups: ProductGroup[];
}

export interface Category {
  key: string;
  title: string;
  description: string;
  subcategories: SubCategory[];
}

// Unified Product Data Structure
export const productCatalog: { [categoryKey: string]: Category } = {
  "instrumentation-components": {
    key: "instrumentation-components",
    title: "Instrumentation Components",
    description: "Advanced instrumentation and process control components for industrial automation, including sensors, transmitters, analyzers, and control devices from leading manufacturers.",
    subcategories: [
      {
        key: "sensors",
        title: "Sensors & Transducers",
        description: "High-precision sensors for temperature, pressure, level, and proximity detection in industrial applications.",
        productGroups: [
          {
            key: "pnp",
            slug: "pnp-proximity-sensors",
            title: "PNP Proximity Sensors",
            description: "PNP output proximity sensors for position detection and automated switching in industrial machinery and conveyor systems.",
            image: "pnp-proximity-sensor",
            featuredSpecs: ["manufacturer", "model", "type"],
            products: [
              {
                id: "sick-im18-08bps-zc1",
                slug: "sick-im18-08bps-zc1-proximity-sensor",
                image: "pnp-proximity-sensor",
                title: "SICK IM18-08BPS-ZC1 PNP Proximity Sensor",
                description: "Inductive proximity sensor with M18 housing, 8mm sensing distance, and PNP output for position detection in automation systems.",
                features: [
                  "M18 threaded housing for easy installation",
                  "8mm sensing distance for precise detection",
                  "PNP output with LED status indicator",
                  "IP67 protection rating for harsh environments",
                  "10-30V DC operating voltage range"
                ],
                specs: {
                  manufacturer: "SICK",
                  model: "IM18-08BPS-ZC1",
                  type: "Inductive PNP",
                  sensingDistance: "8mm",
                  voltage: "10-30V DC",
                  output: "PNP NO",
                  housing: "M18x1 threaded",
                  ipRating: "IP67"
                }
              },
              {
                id: "pepperl-fuchs-nbn8-12gm50-e2",
                slug: "pepperl-fuchs-nbn8-12gm50-e2-proximity-sensor",
                image: "pnp-proximity-sensor",
                title: "Pepperl+Fuchs NBN8-12GM50-E2 PNP Proximity Sensor",
                description: "Compact M8 inductive proximity sensor with 2mm sensing distance and extended sensing range for precise positioning applications.",
                features: [
                  "M8 compact housing design",
                  "2mm sensing distance for precise detection",
                  "Extended sensing range technology",
                  "PNP output with short-circuit protection",
                  "Temperature range: -25°C to +70°C"
                ],
                specs: {
                  manufacturer: "Pepperl+Fuchs",
                  model: "NBN8-12GM50-E2",
                  type: "Inductive PNP",
                  sensingDistance: "2mm",
                  voltage: "10-30V DC",
                  output: "PNP NO",
                  housing: "M8x1 threaded",
                  temperature: "-25°C to +70°C"
                }
              }
            ]
          },
          {
            key: "npn",
            slug: "npn-proximity-sensors", 
            title: "NPN Proximity Sensors",
            description: "NPN output proximity sensors for reliable object detection and positioning in industrial automation applications.",
            image: "npn-proximity-sensor",
            featuredSpecs: ["manufacturer", "model", "type"],
            products: [
              {
                id: "omron-e2e-x5me1",
                slug: "omron-e2e-x5me1-proximity-sensor",
                image: "npn-proximity-sensor",
                title: "Omron E2E-X5ME1 NPN Proximity Sensor",
                description: "Compact inductive proximity sensor with M12 housing, 5mm sensing distance, and NPN output for precise position detection.",
                features: [
                  "M12 compact housing design",
                  "5mm sensing distance",
                  "NPN output with built-in LED indicator",
                  "IP67 waterproof rating",
                  "12-24V DC operating voltage"
                ],
                specs: {
                  manufacturer: "Omron",
                  model: "E2E-X5ME1",
                  type: "Inductive NPN",
                  sensingDistance: "5mm",
                  voltage: "12-24V DC",
                  output: "NPN NO",
                  housing: "M12x1 threaded",
                  ipRating: "IP67"
                }
              },
              {
                id: "turck-bi4-m12-ap6x",
                slug: "turck-bi4-m12-ap6x-proximity-sensor",
                image: "npn-proximity-sensor",
                title: "Turck BI4-M12-AP6X NPN Proximity Sensor",
                description: "Inductive proximity sensor with M12 housing, 4mm sensing distance, and NPN output for general automation applications.",
                features: [
                  "M12 threaded metal housing",
                  "4mm sensing distance",
                  "NPN normally open output",
                  "LED status indication",
                  "IP67 protection class"
                ],
                specs: {
                  manufacturer: "Turck",
                  model: "BI4-M12-AP6X",
                  type: "Inductive NPN",
                  sensingDistance: "4mm",
                  voltage: "10-30V DC",
                  output: "NPN NO",
                  housing: "M12x1 threaded",
                  ipRating: "IP67"
                }
              }
            ]
          },
          {
            key: "rtd",
            slug: "rtd-temperature-sensors",
            title: "RTD Temperature Sensors", 
            description: "Resistance Temperature Detectors (RTD) for accurate temperature measurement in industrial processes and HVAC systems.",
            image: "rtd-temperature-sensor",
            featuredSpecs: ["manufacturer", "model", "type"],
            products: [
              {
                id: "wika-tr10-a",
                slug: "wika-tr10-a-rtd-sensor",
                image: "rtd-temperature-sensor",
                title: "WIKA TR10-A RTD Temperature Sensor",
                description: "High-accuracy Pt100 RTD temperature sensor with stainless steel construction for industrial temperature measurement.",
                features: [
                  "Pt100 RTD element for high accuracy",
                  "Stainless steel 316L construction",
                  "Temperature range: -200°C to +600°C",
                  "3-wire or 4-wire connection options",
                  "DIN Class A accuracy"
                ],
                specs: {
                  manufacturer: "WIKA",
                  model: "TR10-A",
                  type: "Pt100 RTD",
                  temperatureRange: "-200°C to +600°C",
                  accuracy: "DIN Class A",
                  material: "Stainless Steel 316L",
                  connection: "3/4-wire",
                  processConnection: "1/2\" NPT"
                }
              },
              {
                id: "rosemount-78-rtd",
                slug: "rosemount-78-rtd-temperature-sensor",
                image: "rtd-temperature-sensor",
                title: "Rosemount 78 RTD Temperature Sensor",
                description: "Industrial RTD temperature sensor with spring-loaded design for accurate and reliable temperature measurement in process applications.",
                features: [
                  "Spring-loaded design reduces vibration effects",
                  "Pt100 element with ±0.1°C accuracy",
                  "Dual element design for redundancy",
                  "316L stainless steel construction",
                  "Temperature range: -200°C to +500°C"
                ],
                specs: {
                  manufacturer: "Rosemount",
                  model: "78",
                  type: "Pt100 RTD",
                  temperatureRange: "-200°C to +500°C",
                  accuracy: "±0.1°C",
                  material: "316L Stainless Steel",
                  design: "Spring-loaded",
                  element: "Dual"
                }
              }
            ]
          },
          {
            key: "thermocouples",
            slug: "thermocouple-sensors",
            title: "Thermocouple Sensors",
            description: "Thermocouple temperature sensors for high-temperature measurements in industrial processes and furnace applications.",
            image: "thermocouple-temperature-sensor",
            featuredSpecs: ["manufacturer", "model", "type"],
            products: [
              {
                id: "omega-tj36-cass-116u-6",
                slug: "omega-tj36-cass-116u-6-thermocouple",
                image: "thermocouple-temperature-sensor",
                title: "Omega TJ36-CASS-116U-6 Type J Thermocouple",
                description: "Type J thermocouple with stainless steel sheath and ungrounded junction for general purpose temperature measurement.",
                features: [
                  "Type J (Iron-Constantan) thermocouple",
                  "Stainless steel 316 sheath",
                  "Ungrounded junction for electrical isolation",
                  "Temperature range: 0°C to 750°C",
                  "Fast response time"
                ],
                specs: {
                  manufacturer: "Omega",
                  model: "TJ36-CASS-116U-6",
                  type: "Type J Thermocouple",
                  temperatureRange: "0°C to 750°C",
                  junction: "Ungrounded",
                  sheath: "316 Stainless Steel",
                  diameter: "1/16 inch",
                  length: "6 inches"
                }
              }
            ]
          }
        ]
      },
      {
        key: "transmitters",
        title: "Transmitters & Flow Meters",
        description: "Smart transmitters and flow meters for pressure, differential pressure, and flow measurement in industrial processes.",
        productGroups: [
          {
            key: "dp-type-transmitter",
            slug: "dp-type-transmitters",
            title: "Differential Pressure Transmitters",
            description: "High-accuracy differential pressure transmitters for flow, level, and pressure measurement in industrial applications.",
            image: "dp-transmitter-rosemount",
            featuredSpecs: ["manufacturer", "model", "type"],
            products: [
              {
                id: "rosemount-3051cd",
                slug: "rosemount-3051cd-dp-transmitter",
                image: "dp-transmitter-rosemount",
                title: "Rosemount 3051CD Differential Pressure Transmitter",
                description: "Industry-leading differential pressure transmitter with advanced diagnostics and superior performance for critical measurements.",
                features: [
                  "±0.04% accuracy with 5-year stability",
                  "Advanced diagnostics and predictive maintenance",
                  "HART communication protocol",
                  "Wide measurement range: 0.3 inH2O to 2,000 psi",
                  "Temperature compensation from -40°F to 185°F"
                ],
                specs: {
                  manufacturer: "Rosemount",
                  model: "3051CD",
                  type: "Differential Pressure",
                  accuracy: "±0.04%",
                  range: "0.3 inH2O to 2,000 psi",
                  protocol: "HART",
                  temperature: "-40°F to 185°F",
                  output: "4-20 mA"
                }
              },
              {
                id: "abb-266dst",
                slug: "abb-266dst-dp-transmitter",
                image: "dp-transmitter-rosemount",
                title: "ABB 266DST Differential Pressure Transmitter",
                description: "Smart differential pressure transmitter with digital communication and advanced diagnostics for process measurement.",
                features: [
                  "±0.05% accuracy",
                  "HART and FOUNDATION Fieldbus communication",
                  "Advanced diagnostics",
                  "Modular design for easy maintenance",
                  "Temperature range: -40°C to +85°C"
                ],
                specs: {
                  manufacturer: "ABB",
                  model: "266DST",
                  type: "Differential Pressure",
                  accuracy: "±0.05%",
                  range: "1 mbar to 130 bar",
                  protocol: "HART/Fieldbus",
                  temperature: "-40°C to +85°C",
                  output: "4-20 mA"
                }
              }
            ]
          },
          {
            key: "magnetic-flow-meter",
            slug: "magnetic-flow-meters",
            title: "Magnetic Flow Meters",
            description: "Electromagnetic flow meters for accurate measurement of conductive liquids in water, wastewater, and chemical applications.",
            image: "magnetic-flowmeter-endress",
            featuredSpecs: ["manufacturer", "model", "type"],
            products: [
              {
                id: "endress-promag-50w",
                slug: "endress-promag-50w-magnetic-flowmeter",
                image: "magnetic-flowmeter-endress",
                title: "Endress+Hauser Promag 50W Electromagnetic Flowmeter",
                description: "Compact electromagnetic flowmeter for water and wastewater applications with excellent accuracy and reliability.",
                features: [
                  "±0.2% of reading accuracy",
                  "Compact wafer design for easy installation",
                  "No pressure loss or moving parts",
                  "Suitable for conductive liquids >5 µS/cm",
                  "Temperature range: -10°C to +180°C"
                ],
                specs: {
                  manufacturer: "Endress+Hauser",
                  model: "Promag 50W",
                  type: "Electromagnetic",
                  accuracy: "±0.2% of reading",
                  conductivity: ">5 µS/cm",
                  temperature: "-10°C to +180°C",
                  pressure: "40 bar",
                  sizes: "DN15 to DN600"
                }
              },
              {
                id: "abb-flowmaster-fep311",
                slug: "abb-flowmaster-fep311-magnetic-flowmeter",
                image: "magnetic-flowmeter-endress",
                title: "ABB FlowMaster FEP311 Electromagnetic Flowmeter",
                description: "High-performance electromagnetic flowmeter with advanced signal processing for challenging applications.",
                features: [
                  "±0.2% of rate accuracy",
                  "Advanced digital signal processing",
                  "Multi-electrode design",
                  "HART communication",
                  "Self-diagnostics and validation"
                ],
                specs: {
                  manufacturer: "ABB",
                  model: "FlowMaster FEP311",
                  type: "Electromagnetic",
                  accuracy: "±0.2% of rate",
                  conductivity: ">5 µS/cm",
                  temperature: "-25°C to +180°C",
                  pressure: "40 bar",
                  communication: "HART"
                }
              }
            ]
          }
        ]
      },
      {
        key: "switches",
        title: "Switches & Indicators",
        description: "Industrial switches for pressure, level, temperature, and position detection with reliable switching performance.",
        productGroups: [
          {
            key: "pressure-switches",
            slug: "pressure-switches",
            title: "Pressure Switches",
            description: "Industrial pressure switches for accurate pressure monitoring and control in automation systems from leading manufacturers.",
            image: "pressure-switch",
            featuredSpecs: ["manufacturer", "model", "pressureRange", "temperature"],
            products: [
              {
                id: "danfoss-kp36",
                slug: "danfoss-kp36-pressure-switch",
                image: "pressure-switch",
                title: "Danfoss KP36 Pressure Switch",
                description: "Industrial pressure switch with snap-action electrical contacts for reliable operation in steam, air, and liquid media applications.",
                features: [
                  "SPDT contact system for reliable switching",
                  "Manual trip function for testing",
                  "Operating temperature: -40°F to 175°F",
                  "Adjustable differential pressure settings",
                  "Suitable for gaseous and liquid media"
                ],
                specs: {
                  manufacturer: "Danfoss",
                  model: "KP36",
                  pressureRange: "0.2-30 bar",
                  temperature: "-40°F to 175°F (-40°C to 79°C)",
                  contacts: "SPDT",
                  resetType: "Automatic/Manual",
                  connection: "1/4\" NPT",
                  media: "Steam, Air, Liquid"
                }
              },
              {
                id: "schneider-9013fsg2j24m4",
                slug: "schneider-9013fsg2j24m4-pumptrol",
                image: "pressure-switch",
                title: "Schneider Electric 9013FSG2J24M4 Pumptrol Switch",
                description: "Square D Pumptrol pressure switch with low-pressure cut-off for pump applications up to 1.5 HP.",
                features: [
                  "40-60 PSI pressure setting",
                  "15-30 PSI adjustable differential",
                  "Low-pressure cut-off protection",
                  "NEMA 1/IP20 enclosure",
                  "UL Listed, CSA Certified"
                ],
                specs: {
                  manufacturer: "Schneider Electric",
                  model: "9013FSG2J24M4",
                  pressureRange: "20-65 PSI",
                  differential: "15-30 PSI",
                  connection: "1/4\" NPSF",
                  enclosure: "NEMA 1/IP20",
                  application: "Pumps ≤1.5 HP"
                }
              }
            ]
          },
          {
            key: "level-switches",
            slug: "level-switches",
            title: "Level Switches",
            description: "Point-level detection switches using tuning fork, float, and capacitive technologies for reliable liquid and bulk solid level monitoring.",
            image: "level-switch",
            featuredSpecs: ["manufacturer", "model", "technology", "application"],
            products: [
              {
                id: "endress-ftl31",
                slug: "endress-ftl31-liquiphant",
                image: "level-switch",
                title: "Endress+Hauser FTL31 Liquiphant Level Switch",
                description: "Tuning fork point-level switch for liquid level detection with active sensor technology for overfill prevention and pump protection.",
                features: [
                  "Tuning fork technology with piezoelectric drive",
                  "Active sensor technology ensures device functionality",
                  "No adjustment needed for different media",
                  "G1 process connection thread",
                  "Over 6 million installed worldwide"
                ],
                specs: {
                  manufacturer: "Endress+Hauser",
                  model: "FTL31",
                  technology: "Tuning Fork",
                  supplyVoltage: "10-30 VDC",
                  processConnection: "G1 thread",
                  application: "Overfill prevention, Pump protection",
                  mediaType: "Liquids"
                }
              },
              {
                id: "abb-ls-series",
                slug: "abb-ls-series-mechanical",
                image: "level-switch",
                title: "ABB LS Series Mechanical Level Switch",
                description: "Rugged mechanical float level switch with hermetically sealed switching mechanism for reliable liquid point-level detection.",
                features: [
                  "Most rugged design in industrial marketplace",
                  "One-step switch point adjustment",
                  "Hermetically sealed dual compartment switching",
                  "Available in flanged or insertion models",
                  "Over 100 configurations available"
                ],
                specs: {
                  manufacturer: "ABB",
                  model: "LS Series",
                  technology: "Mechanical Float",
                  contactType: "SPDT",
                  application: "Liquid level detection",
                  mounting: "Flanged/Insertion",
                  configurations: "100+"
                }
              }
            ]
          }
        ]
      },
      {
        key: "analyzers",
        title: "Analyzers",
        description: "Process and gas analyzers for chemical composition analysis, environmental monitoring, and quality control in industrial applications.",
        productGroups: [
          {
            key: "gas-analyzers",
            slug: "gas-analyzers",
            title: "Gas Analyzers",
            description: "Advanced gas analyzers for real-time monitoring of gas composition in industrial processes, environmental applications, and safety systems.",
            image: "gas-analyzer",
            featuredSpecs: ["manufacturer", "model", "type"],
            products: [
              {
                id: "abb-uras26",
                slug: "abb-uras26-gas-analyzer",
                image: "gas-analyzer",
                title: "ABB URAS26 NDIR Gas Analyzer",
                description: "Non-dispersive infrared gas analyzer for continuous monitoring of CO, CO2, SO2, NO, and other gases in industrial processes.",
                features: [
                  "NDIR technology for high selectivity",
                  "Single or dual-beam operation",
                  "Measuring ranges from ppm to %",
                  "Digital signal processing",
                  "Modbus RTU communication"
                ],
                specs: {
                  manufacturer: "ABB",
                  model: "URAS26",
                  type: "NDIR",
                  gases: "CO, CO2, SO2, NO, CH4",
                  range: "ppm to %",
                  accuracy: "±1% of span",
                  response: "<10 seconds",
                  communication: "Modbus RTU"
                }
              }
            ]
          }
        ]
      }
    ]
  },
  "electrical-components": {
    key: "electrical-components",
    title: "Electrical Components",
    description: "Comprehensive range of electrical components including cables, connectors, circuit protection, power supplies, and control devices for industrial applications.",
    subcategories: [
      {
        key: "cables-wires",
        title: "Cables & Wires",
        description: "Industrial-grade cables and wires for power transmission, control signals, and instrumentation in harsh environments.",
        productGroups: [
          {
            key: "power-cables",
            slug: "power-cables",
            title: "Power Cables",
            description: "Heavy-duty power cables for electrical distribution and motor connections in industrial facilities and automation systems.",
            image: "power-cable",
            featuredSpecs: ["conductor", "voltage", "insulation"],
            products: [
              {
                id: "southwire-soow-12-3",
                slug: "southwire-soow-12-3-power-cable",
                image: "power-cable",
                title: "Southwire SOOW 12 AWG 3-Conductor Power Cable",
                description: "Flexible power cable with oil-resistant jacket for portable equipment and temporary installations in industrial environments.",
                features: [
                  "Oil and water resistant jacket",
                  "Stranded copper conductors",
                  "600V voltage rating",
                  "Temperature range: -40°C to +90°C",
                  "UL Listed, CSA Certified"
                ],
                specs: {
                  manufacturer: "Southwire",
                  model: "SOOW 12/3",
                  conductor: "12 AWG stranded copper",
                  voltage: "600V",
                  insulation: "Thermoset rubber",
                  jacket: "Oil resistant neoprene",
                  temperature: "-40°C to +90°C"
                }
              }
            ]
          },
          {
            key: "control-cables",
            slug: "control-cables",
            title: "Control Cables",
            description: "Multi-conductor control cables for automation systems, motor control, and instrumentation applications.",
            image: "control-cable",
            featuredSpecs: ["conductor", "voltage", "shielding"],
            products: [
              {
                id: "belden-9842-control-cable",
                slug: "belden-9842-control-cable",
                image: "control-cable",
                title: "Belden 9842 Multi-Conductor Control Cable",
                description: "24 AWG multi-conductor control cable with overall shield for industrial automation and control applications.",
                features: [
                  "24 AWG stranded tinned copper conductors",
                  "PVC insulation with numbered conductors",
                  "Overall aluminum foil shield",
                  "PVC jacket for flexibility",
                  "300V voltage rating"
                ],
                specs: {
                  manufacturer: "Belden",
                  model: "9842",
                  conductor: "24 AWG stranded tinned copper",
                  voltage: "300V",
                  shielding: "Aluminum foil",
                  jacket: "PVC",
                  conductors: "2-25 pair options"
                }
              }
            ]
          }
        ]
      },
      {
        key: "circuit-breakers-fuses",
        title: "Circuit Breakers & Fuses",
        description: "Circuit protection devices including miniature circuit breakers, molded case breakers, and fuses for electrical safety.",
        productGroups: [
          {
            key: "miniature-circuit-breakers",
            slug: "miniature-circuit-breakers",
            title: "Miniature Circuit Breakers (MCB)",
            description: "Compact circuit breakers for overload and short-circuit protection in low-voltage electrical distribution systems.",
            image: "mcb",
            featuredSpecs: ["current", "voltage", "poles"],
            products: [
              {
                id: "abb-s201-c20",
                slug: "abb-s201-c20-mcb",
                image: "mcb",
                title: "ABB S201-C20 Miniature Circuit Breaker",
                description: "Single-pole MCB with 20A rating and C-curve for general lighting and power distribution applications.",
                features: [
                  "20A current rating",
                  "C-curve trip characteristic",
                  "6kA breaking capacity",
                  "DIN rail mounting",
                  "Thermal-magnetic operation"
                ],
                specs: {
                  manufacturer: "ABB",
                  model: "S201-C20",
                  current: "20A",
                  voltage: "230/400V AC",
                  poles: "1",
                  breakingCapacity: "6kA",
                  curve: "C"
                }
              },
              {
                id: "schneider-c60n-c32",
                slug: "schneider-c60n-c32-mcb",
                image: "mcb",
                title: "Schneider Electric C60N C32 MCB",
                description: "Single-pole miniature circuit breaker with 32A rating for residential and commercial electrical protection.",
                features: [
                  "32A current rating",
                  "C-curve trip characteristic",
                  "6kA breaking capacity",
                  "Multi 9 DIN rail mounting",
                  "IEC 60898 compliant"
                ],
                specs: {
                  manufacturer: "Schneider Electric",
                  model: "C60N C32",
                  current: "32A",
                  voltage: "230/400V AC",
                  poles: "1",
                  breakingCapacity: "6kA",
                  standard: "IEC 60898"
                }
              }
            ]
          }
        ]
      }
    ]
  },
  "bldc-motor-systems": {
    key: "bldc-motor-systems", 
    title: "BLDC Motor Systems",
    description: "Brushless DC motor systems for energy-efficient applications including ceiling fans, pumps, and ventilation systems.",
    subcategories: [
      {
        key: "bldc-ceiling-fan",
        title: "BLDC Ceiling Fans",
        description: "Energy-efficient brushless DC ceiling fans with variable speed control and smart features for residential and commercial applications.",
        productGroups: [
          {
            key: "premium-ceiling-fans",
            slug: "premium-ceiling-fans",
            title: "Premium BLDC Ceiling Fans",
            description: "High-end BLDC ceiling fans with advanced features, smart controls, and superior energy efficiency for premium applications.",
            image: "bldc-ceiling-fan",
            featuredSpecs: ["power", "speed", "airflow"],
            products: [
              {
                id: "crompton-energion-1200mm",
                slug: "crompton-energion-1200mm-bldc-fan",
                image: "bldc-ceiling-fan",
                title: "Crompton Energion 1200mm BLDC Ceiling Fan",
                description: "Premium BLDC ceiling fan with remote control, 6-speed settings, and 65% energy savings compared to conventional fans.",
                features: [
                  "65% energy savings vs conventional fans",
                  "6-speed remote control operation",
                  "Noiseless operation under 35dB",
                  "Aerodynamically designed blades",
                  "5-year motor warranty"
                ],
                specs: {
                  manufacturer: "Crompton",
                  model: "Energion 1200mm",
                  power: "28W",
                  speed: "340 RPM",
                  airflow: "230 CMM",
                  size: "1200mm (48\")",
                  voltage: "220-240V AC"
                }
              },
              {
                id: "orient-aeroquiet-1200mm",
                slug: "orient-aeroquiet-1200mm-bldc-fan",
                image: "bldc-ceiling-fan",
                title: "Orient AeroQuiet 1200mm BLDC Ceiling Fan",
                description: "Silent BLDC ceiling fan with aerodynamic blade design and energy-efficient motor for residential applications.",
                features: [
                  "Silent operation with <35dB noise level",
                  "Aerodynamic blade design for maximum airflow",
                  "Remote control with 6-speed settings",
                  "70% energy savings",
                  "3-year comprehensive warranty"
                ],
                specs: {
                  manufacturer: "Orient",
                  model: "AeroQuiet 1200mm",
                  power: "26W",
                  speed: "350 RPM",
                  airflow: "240 CMM",
                  size: "1200mm (48\")",
                  voltage: "220-240V AC"
                }
              }
            ]
          }
        ]
      },
      {
        key: "bldc-submersible-surface-pump",
        title: "BLDC Submersible & Surface Pumps",
        description: "Energy-efficient BLDC motor pumps for water supply, irrigation, and agricultural applications.",
        productGroups: [
          {
            key: "submersible-pumps",
            slug: "submersible-pumps",
            title: "BLDC Submersible Pumps",
            description: "Solar-compatible BLDC submersible pumps for water supply and irrigation with high efficiency and reliability.",
            image: "bldc-submersible-pump",
            featuredSpecs: ["power", "head", "flow"],
            products: [
              {
                id: "crompton-bldc-sub-1hp",
                slug: "crompton-bldc-submersible-1hp",
                image: "bldc-submersible-pump",
                title: "Crompton BLDC Submersible Pump 1HP",
                description: "Solar-compatible BLDC submersible pump with 1HP motor for efficient water pumping in agricultural applications.",
                features: [
                  "Solar panel compatible operation",
                  "High-efficiency BLDC motor",
                  "Stainless steel impeller and diffuser",
                  "Dry run protection",
                  "Low maintenance design"
                ],
                specs: {
                  manufacturer: "Crompton",
                  model: "BLDC Submersible 1HP",
                  power: "750W",
                  head: "60 meters",
                  flow: "40 LPM",
                  voltage: "48V DC",
                  efficiency: "85%"
                }
              }
            ]
          }
        ]
      }
    ]
  },
  "automation-control-systems": {
    key: "automation-control-systems",
    title: "Automation & Control Systems", 
    description: "Advanced automation and control systems including PLCs, HMIs, SCADA systems, and distributed control systems for industrial automation.",
    subcategories: [
      {
        key: "plcs",
        title: "Programmable Logic Controllers (PLCs)",
        description: "Industrial PLCs for automation control, from compact modules to high-performance systems for complex applications.",
        productGroups: [
          {
            key: "compact-plcs",
            slug: "compact-plcs",
            title: "Compact PLCs",
            description: "Small form-factor PLCs for space-constrained applications with integrated I/O and communication capabilities.",
            image: "compact-plc",
            featuredSpecs: ["io", "memory", "communication"],
            products: [
              {
                id: "siemens-s7-1200-cpu1214c",
                slug: "siemens-s7-1200-cpu1214c",
                image: "compact-plc",
                title: "Siemens S7-1200 CPU1214C Compact PLC",
                description: "Compact PLC with integrated digital and analog I/O, Ethernet communication, and TIA Portal programming environment.",
                features: [
                  "14 digital inputs, 10 digital outputs",
                  "2 analog inputs built-in",
                  "Integrated Ethernet port",
                  "Expandable with signal modules",
                  "TIA Portal programming software"
                ],
                specs: {
                  manufacturer: "Siemens",
                  model: "6ES7 214-1BG40-0XB0",
                  io: "14 DI / 10 DO / 2 AI",
                  memory: "100KB work memory",
                  communication: "Ethernet, RS485",
                  voltage: "24V DC",
                  programming: "TIA Portal"
                }
              },
              {
                id: "allen-bradley-micrologix-1100",
                slug: "allen-bradley-micrologix-1100",
                image: "compact-plc",
                title: "Allen-Bradley MicroLogix 1100 Compact PLC",
                description: "Entry-level compact PLC with built-in I/O and communication for small automation applications.",
                features: [
                  "10 digital inputs, 6 relay outputs",
                  "Built-in RS-232 communication",
                  "Real-time clock",
                  "RSLogix 500 programming software",
                  "Compact DIN rail mounting"
                ],
                specs: {
                  manufacturer: "Allen-Bradley",
                  model: "1763-L16BWA",
                  io: "10 DI / 6 DO",
                  memory: "4K words",
                  communication: "RS-232",
                  voltage: "120/240V AC",
                  programming: "RSLogix 500"
                }
              }
            ]
          }
        ]
      },
      {
        key: "hmi",
        title: "Human Machine Interface (HMI)",
        description: "Touchscreen HMI panels and operator interfaces for industrial automation and process visualization.",
        productGroups: [
          {
            key: "touchscreen-hmis",
            slug: "touchscreen-hmis",
            title: "Touchscreen HMI Panels",
            description: "Industrial touchscreen HMI panels for process visualization, control, and monitoring applications.",
            image: "touchscreen-hmi",
            featuredSpecs: ["size", "resolution", "communication"],
            products: [
              {
                id: "siemens-ktp700-basic",
                slug: "siemens-ktp700-basic-hmi",
                image: "touchscreen-hmi",
                title: "Siemens KTP700 Basic HMI Panel",
                description: "7-inch touchscreen HMI panel with TFT display and integrated communication for basic visualization applications.",
                features: [
                  "7-inch TFT color display",
                  "Resistive touch operation",
                  "800x480 pixel resolution",
                  "Ethernet and RS485 communication",
                  "WinCC Basic software included"
                ],
                specs: {
                  manufacturer: "Siemens",
                  model: "6AV2 123-2DB03-0AX0",
                  size: "7 inch",
                  resolution: "800x480",
                  communication: "Ethernet, RS485",
                  voltage: "24V DC",
                  software: "WinCC Basic"
                }
              }
            ]
          }
        ]
      }
    ]
  },
  "mechanical-pumps-spares": {
    key: "mechanical-pumps-spares",
    title: "Mechanical Pumps & Spares",
    description: "Industrial pumps and spare parts for fluid handling, water supply, and process applications.",
    subcategories: [
      {
        key: "centrifugal-pumps",
        title: "Centrifugal Pumps",
        description: "Centrifugal pumps for general water supply, HVAC, and industrial fluid handling applications.",
        productGroups: [
          {
            key: "end-suction-pumps",
            slug: "end-suction-pumps",
            title: "End Suction Centrifugal Pumps",
            description: "Single-stage end suction centrifugal pumps for general water supply and industrial applications.",
            image: "centrifugal-pump",
            featuredSpecs: ["flow", "head", "power"],
            products: [
              {
                id: "grundfos-nb32-125-315",
                slug: "grundfos-nb32-125-315",
                image: "centrifugal-pump",
                title: "Grundfos NB32-125.1/315 End Suction Pump",
                description: "Single-stage end suction centrifugal pump with bronze fitted construction for general water supply applications.",
                features: [
                  "Bronze fitted for corrosion resistance",
                  "Close-coupled design",
                  "Cast iron volute and bracket",
                  "Mechanical seal",
                  "Standard flanged connections"
                ],
                specs: {
                  manufacturer: "Grundfos",
                  model: "NB32-125.1/315",
                  flow: "32 m³/h",
                  head: "125 meters",
                  power: "15 kW",
                  suction: "100mm",
                  discharge: "80mm"
                }
              }
            ]
          }
        ]
      }
    ]
  }
};

// Utility functions for the new structure
export const getAllCategories = (): Category[] => {
  return Object.values(productCatalog);
};

export const getCategoryByKey = (categoryKey: string): Category | undefined => {
  return productCatalog[categoryKey];
};

export const getSubcategoryByKey = (categoryKey: string, subcategoryKey: string): SubCategory | undefined => {
  const category = productCatalog[categoryKey];
  return category?.subcategories.find(sub => sub.key === subcategoryKey);
};

export const getProductGroupByKey = (categoryKey: string, subcategoryKey: string, groupKey: string): ProductGroup | undefined => {
  const subcategory = getSubcategoryByKey(categoryKey, subcategoryKey);
  return subcategory?.productGroups.find(group => group.key === groupKey);
};

export const getProductById = (productId: string): Product | undefined => {
  for (const category of Object.values(productCatalog)) {
    for (const subcategory of category.subcategories) {
      for (const group of subcategory.productGroups) {
        const product = group.products.find(p => p.id === productId);
        if (product) return product;
      }
    }
  }
  return undefined;
};

export const getProductBySlug = (slug: string): Product | undefined => {
  for (const category of Object.values(productCatalog)) {
    for (const subcategory of category.subcategories) {
      for (const group of subcategory.productGroups) {
        const product = group.products.find(p => p.slug === slug);
        if (product) return product;
      }
    }
  }
  return undefined;
};

export const getProductsByCategory = (categoryKey: string): Product[] => {
  const category = productCatalog[categoryKey];
  if (!category) return [];
  
  const products: Product[] = [];
  for (const subcategory of category.subcategories) {
    for (const group of subcategory.productGroups) {
      products.push(...group.products);
    }
  }
  return products;
};

export const getProductsBySubcategory = (categoryKey: string, subcategoryKey: string): Product[] => {
  const subcategory = getSubcategoryByKey(categoryKey, subcategoryKey);
  if (!subcategory) return [];
  
  const products: Product[] = [];
  for (const group of subcategory.productGroups) {
    products.push(...group.products);
  }
  return products;
};

export const getProductsByGroup = (categoryKey: string, subcategoryKey: string, groupKey: string): Product[] => {
  const group = getProductGroupByKey(categoryKey, subcategoryKey, groupKey);
  return group?.products || [];
};

export const getAllProductSlugs = (): string[] => {
  const slugs: string[] = [];
  for (const category of Object.values(productCatalog)) {
    for (const subcategory of category.subcategories) {
      for (const group of subcategory.productGroups) {
        for (const product of group.products) {
          slugs.push(product.slug);
        }
      }
    }
  }
  return slugs;
};

export const getAllProductGroupSlugs = (): string[] => {
  const slugs: string[] = [];
  for (const category of Object.values(productCatalog)) {
    for (const subcategory of category.subcategories) {
      for (const group of subcategory.productGroups) {
        slugs.push(group.slug);
      }
    }
  }
  return slugs;
};

export const getGroupsForSubcategory = (categoryKey: string, subcategoryKey: string): ProductGroup[] => {
  const subcategory = getSubcategoryByKey(categoryKey, subcategoryKey);
  return subcategory?.productGroups || [];
};

export const getProductGroupBySlug = (subcategoryKey: string, groupSlug: string): ProductGroup | undefined => {
  for (const category of Object.values(productCatalog)) {
    const subcategory = category.subcategories.find(sub => sub.key === subcategoryKey);
    if (subcategory) {
      const group = subcategory.productGroups.find(g => g.slug === groupSlug);
      if (group) return group;
    }
  }
  return undefined;
};

// Enhanced product detail function with full context
export const getProductDetailBySlug = (slug: string, t?: any, groupSlug?: string) => {
  let foundProduct: Product | undefined;
  let foundCategory: Category | undefined;
  let foundSubcategory: SubCategory | undefined;
  let foundGroup: ProductGroup | undefined;

  for (const category of Object.values(productCatalog)) {
    for (const subcategory of category.subcategories) {
      for (const group of subcategory.productGroups) {
        const product = group.products.find(p => p.slug === slug);
        if (product) {
          foundProduct = product;
          foundCategory = category;
          foundSubcategory = subcategory;
          foundGroup = group;
          break;
        }
      }
      if (foundProduct) break;
    }
    if (foundProduct) break;
  }

  if (!foundProduct || !foundCategory || !foundSubcategory || !foundGroup) {
    return null;
  }

  // Transform specs into specifications array
  const specifications = Object.entries(foundProduct.specs).map(([key, value]) => ({
    label: key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase()),
    value: value.toString(),
  }));

  return {
    id: foundProduct.id,
    slug: foundProduct.slug,
    title: foundProduct.title,
    shortDescription: foundProduct.description,
    fullDescription: foundProduct.description,
    categoryName: foundCategory.title,
    subcategoryName: foundSubcategory.title,
    groupName: foundGroup.title,
    categoryPath: `/products/${foundCategory.key}/${foundSubcategory.key}`,
    backLabel: foundSubcategory.title,
    image: `/generated_images/${foundProduct.image}.png`,
    specifications,
    features: foundProduct.features,
    keyBenefits: foundProduct.features.slice(0, 4),
    applications: [
      "Industrial Automation",
      "Manufacturing",
      "Process Control",
      "Quality Assurance",
    ],
    industries: [
      "Manufacturing",
      "Automotive", 
      "Pharmaceutical",
      "Food & Beverage",
    ],
    certifications: ["ISO 9001", "CE Marking"],
    datasheetUrl: foundProduct.datasheetUrl,
    seo: {
      title: `${foundProduct.title} | Powerton Engineering`,
      description: foundProduct.description.substring(0, 160),
      keywords: `${foundProduct.title}, ${foundCategory.key}, ${foundSubcategory.key}, industrial automation`,
      canonicalUrl: `https://powertonengineering.com/products/detail/${slug}`,
    },
  };
};

export const getProductImageKey = (product: Product): string => {
  return product.image;
};

// Backward compatibility functions for existing code
export const getProductsForSubcategory = (subcategoryKey: string): Product[] => {
  // For backward compatibility, search across all categories
  for (const category of Object.values(productCatalog)) {
    const subcategory = category.subcategories.find(sub => sub.key === subcategoryKey);
    if (subcategory) {
      return getProductsBySubcategory(category.key, subcategory.key);
    }
  }
  return [];
};

export const getProductsForSubcategoryPage = (subcategoryKey: string, minCount: number = 6): Product[] => {
  let subcategoryProducts = getProductsForSubcategory(subcategoryKey);
  
  // If we have enough products, return all of them
  if (subcategoryProducts.length >= minCount) {
    return subcategoryProducts;
  }

  // For now, just return what we have - in a real scenario you might want to generate more
  return subcategoryProducts;
};

export const getProductsForGroupPage = (groupKey: string): Product[] => {
  // For backward compatibility, search across all categories
  for (const category of Object.values(productCatalog)) {
    for (const subcategory of category.subcategories) {
      const group = subcategory.productGroups.find(g => g.key === groupKey);
      if (group) {
        return group.products;
      }
    }
  }
  return [];
};

// Legacy compatibility - for old code that expects these arrays
export const productGroups: ProductGroup[] = [];
export const products: Product[] = [];
export const categories: Category[] = [];

// Populate legacy arrays from new structure for backward compatibility
for (const category of Object.values(productCatalog)) {
  categories.push(category);
  for (const subcategory of category.subcategories) {
    for (const group of subcategory.productGroups) {
      productGroups.push(group);
      products.push(...group.products);
    }
  }
}