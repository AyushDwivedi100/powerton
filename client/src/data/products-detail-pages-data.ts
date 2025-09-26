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
    "key": "instrumentation-components",
    "title": "Instrumentation Components",
    "description": "Advanced instrumentation components for industrial applications",
    "subcategories": [
      {
        "key": "switches-indicators",
        "title": "Switches & Indicators",
        "description": "Professional switches indicators for industrial applications",
        "productGroups": [
          {
            "key": "pressure-switches",
            "slug": "pressure-switches",
            "title": "Pressure switches",
            "description": "Professional pressure switches for industrial applications.",
            "image": "pressure-switch",
            "featuredSpecs": [
              "manufacturer",
              "model",
              "pressureRange",
              "temperature"
            ],
            "products": [
              {
                "id": "danfoss-kp36",
                "slug": "danfoss-kp36-pressure-switch-s-kp36",
                "image": "pressure-switch",
                "title": "Danfoss KP36",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Operating temperature: -40°F to 175°F (-40°C to 79°C)"
                ],
                "specs": {
                  "manufacturer": "Danfoss",
                  "model": "KP36",
                  "pressureRange": "0.2-30 bar",
                  "temperature": "-40°F to 175°F (-40°C to 79°C)",
                  "contacts": "SPDT",
                  "resetType": "Automatic/Manual"
                }
              },
              {
                "id": "schneider-9013fsg2j24m4",
                "slug": "schneider-9013fsg2j24m4-pumptrol-2j24m4",
                "image": "pressure-switch",
                "title": "Schneider Electric 9013FSG2J24M4",
                "description": "Product with advanced features for reliable performance in Pumps ≤1.5 HP.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "manufacturer": "Schneider Electric",
                  "model": "9013FSG2J24M4",
                  "pressureRange": "20-65 PSI",
                  "differential": "15-30 PSI",
                  "enclosure": "NEMA 1/IP20",
                  "application": "Pumps ≤1.5 HP"
                }
              }
            ]
          },
          {
            "key": "level-switches",
            "slug": "level-switches",
            "title": "Level switches",
            "description": "Professional level switches for industrial applications.",
            "image": "level-switch",
            "featuredSpecs": [
              "manufacturer",
              "model",
              "technology",
              "application"
            ],
            "products": [
              {
                "id": "endress-ftl31",
                "slug": "endress-ftl31-liquiphant--ftl31",
                "image": "level-switch",
                "title": "Endress+Hauser FTL31",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "manufacturer": "Endress+Hauser",
                  "model": "FTL31",
                  "technology": "Tuning Fork",
                  "supplyVoltage": "10-30 VDC",
                  "processConnection": "G1 thread",
                  "mediaType": "Liquids"
                }
              },
              {
                "id": "abb-ls-series",
                "slug": "abb-ls-series-mechanical-series",
                "image": "level-switch",
                "title": "ABB LS Series",
                "description": "Product with advanced features for reliable performance in Liquid level detection.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "manufacturer": "ABB",
                  "model": "LS Series",
                  "technology": "Mechanical Float",
                  "contactType": "SPDT",
                  "application": "Liquid level detection",
                  "mounting": "Flanged/Insertion",
                  "configurations": "100+"
                }
              }
            ]
          },
          {
            "key": "limit-switches",
            "slug": "limit-switches",
            "title": "Limit switches",
            "description": "Professional limit switches for industrial applications.",
            "image": "limit-switch",
            "featuredSpecs": [
              "manufacturer",
              "model",
              "actuatorType",
              "ipRating"
            ],
            "products": [
              {
                "id": "omron-wlca12-y",
                "slug": "omron-wlca12-y-limit-switch-ca12-y",
                "image": "limit-switch",
                "title": "Omron WLCA12-Y",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "IP67 protection rating"
                ],
                "specs": {
                  "manufacturer": "Omron",
                  "model": "WLCA12-Y",
                  "housingMaterial": "Die-cast metal",
                  "ipRating": "IP67",
                  "currentRating": "10A",
                  "voltageRating": "500V AC",
                  "actuatorType": "Adjustable roller lever"
                }
              },
              {
                "id": "schneider-xcmd21f0l1",
                "slug": "schneider-xcmd21f0l1-osisense-21f0l1",
                "image": "limit-switch",
                "title": "Schneider Electric XCMD21F0L1",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "manufacturer": "Schneider Electric",
                  "model": "XCMD21F0L1",
                  "series": "OsiSense XC Standard",
                  "actuatorType": "Flexible roller lever",
                  "contactConfig": "1NO + 1NC",
                  "currentRating": "10A",
                  "voltageRating": "240V AC"
                }
              }
            ]
          },
          {
            "key": "push-buttons",
            "slug": "push-buttons",
            "title": "Push buttons",
            "description": "Professional push buttons for industrial applications.",
            "image": "push-button",
            "featuredSpecs": [
              "manufacturer",
              "model",
              "size",
              "contactType"
            ],
            "products": [
              {
                "id": "schneider-xb4ba21",
                "slug": "schneider-xb4ba21-harmony-pushbutton-b4ba21",
                "image": "push-button",
                "title": "Schneider Electric XB4BA21",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "IP66/IP67 protection rating"
                ],
                "specs": {
                  "manufacturer": "Schneider Electric",
                  "model": "XB4BA21",
                  "series": "Harmony XB4",
                  "size": "22mm",
                  "contactType": "1NO + 1NC",
                  "ipRating": "IP66/IP67"
                }
              },
              {
                "id": "eaton-m22-dr-r",
                "slug": "eaton-m22-dr-r-pushbutton-2-dr-r",
                "image": "push-button",
                "title": "Eaton M22-DR-R",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "IP65/66/67 protection rating"
                ],
                "specs": {
                  "manufacturer": "Eaton",
                  "model": "M22-DR-R",
                  "series": "M22 Modular",
                  "size": "22mm",
                  "color": "Red",
                  "ipRating": "IP65/66/67"
                }
              }
            ]
          },
          {
            "key": "miscellaneous",
            "slug": "miscellaneous-switches-indicators",
            "title": "Other switches indicators",
            "description": "Additional switches indicators products for specialized industrial applications.",
            "image": "miscellaneous",
            "featuredSpecs": [
              "manufacturer",
              "model",
              "type"
            ],
            "products": [
              {
                "id": "switch-pushbutton-illuminated",
                "slug": "switch-pushbutton-illuminated-inated",
                "image": "switches",
                "title": "SWITCH-PUSHBUTTON-ILLUMINATED Illuminated Pushbutton",
                "description": "Illuminated Pushbutton with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "Illuminated Pushbutton",
                  "contactRating": "10A at 250V AC",
                  "illumination": "LED",
                  "protection": "IP65",
                  "mounting": "22mm"
                }
              },
              {
                "id": "switch-selector-rotary",
                "slug": "switch-selector-rotary-rotary",
                "image": "switches",
                "title": "SWITCH-SELECTOR-ROTARY Rotary Selector",
                "description": "Rotary Selector with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "Rotary Selector",
                  "positions": "2-12 Positions",
                  "contactRating": "10A at 250V AC",
                  "operation": "Maintained/Momentary",
                  "mounting": "22mm"
                }
              },
              {
                "id": "switch-emergency-stop-safety",
                "slug": "switch-emergency-stop-safety-safety",
                "image": "switches",
                "title": "SWITCH-EMERGENCY-STOP-SAFETY Emergency Stop",
                "description": "Emergency Stop with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "Emergency Stop",
                  "contactRating": "10A at 250V AC",
                  "safetyCategory": "Category 4",
                  "reset": "Twist to Reset",
                  "certification": "TÜV Approved"
                }
              }
            ]
          }
        ]
      },
      {
        "key": "valves-actuators",
        "title": "Valves & Actuators",
        "description": "Professional valves actuators for industrial applications",
        "productGroups": [
          {
            "key": "control-valves",
            "slug": "control-valves",
            "title": "Control valves",
            "description": "Professional control valves for industrial applications.",
            "image": "control-valve",
            "featuredSpecs": [
              "manufacturer",
              "model",
              "valveType",
              "cvValue"
            ],
            "products": [
              {
                "id": "fisher-ed-control-valve",
                "slug": "fisher-ed-easye-control-valve--valve",
                "image": "control-valve",
                "title": "Fisher (Emerson) easy-e™ ED",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "manufacturer": "Fisher (Emerson)",
                  "model": "easy-e™ ED",
                  "cvValue": "0.1 to 2500",
                  "pressureRating": "ANSI 150-2500",
                  "materials": "Carbon steel to exotic alloys"
                }
              },
              {
                "id": "samson-3241-globe-valve",
                "slug": "samson-3241-pneumatic-globe-valve--valve",
                "image": "control-valve",
                "title": "SAMSON Type 3241",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "manufacturer": "SAMSON",
                  "model": "Type 3241",
                  "leakageClass": "Class VI (IEC: IV-S2)"
                }
              }
            ]
          },
          {
            "key": "solenoid-valves",
            "slug": "solenoid-valves",
            "title": "Solenoid valves",
            "description": "Professional solenoid valves for industrial applications.",
            "image": "solenoid-valve",
            "featuredSpecs": [
              "manufacturer",
              "model",
              "portSize",
              "pressure"
            ],
            "products": [
              {
                "id": "asco-8262h112dc24",
                "slug": "asco-8262h112dc24-solenoid-valve-12dc24",
                "image": "solenoid-valve",
                "title": "ASCO (Emerson) 8262H112DC24",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "24V DC operating voltage"
                ],
                "specs": {
                  "manufacturer": "ASCO (Emerson)",
                  "model": "8262H112DC24",
                  "series": "8262/8263",
                  "voltage": "24V DC",
                  "pressure": "0-125 PSI",
                  "construction": "Stainless steel"
                }
              },
              {
                "id": "parker-s4a-solenoid-valve",
                "slug": "parker-s4a-refrigeration-solenoid-valve--valve",
                "image": "solenoid-valve",
                "title": "Parker Hannifin S4A Series",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "manufacturer": "Parker Hannifin",
                  "model": "S4A Series",
                  "pressureRating": "Up to 700 PSI",
                  "temperatureRange": "-40°F to 120°F"
                }
              }
            ]
          },
          {
            "key": "miscellaneous",
            "slug": "miscellaneous-valves-actuators",
            "title": "Other valves actuators",
            "description": "Additional valves actuators products for specialized industrial applications.",
            "image": "miscellaneous",
            "featuredSpecs": [
              "manufacturer",
              "model",
              "type"
            ],
            "products": [
              {
                "id": "valve-ball-two-piece-stainless",
                "slug": "valve-ball-two-piece-stainless-inless",
                "image": "valves",
                "title": "VALVE-BALL-TWO-PIECE-STAINLESS",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Operating temperature: -20°F to +450°F"
                ],
                "specs": {
                  "size": "1/4 to 4 inch",
                  "material": "316 Stainless Steel",
                  "pressure": "1000 PSI WOG",
                  "temperature": "-20°F to +450°F",
                  "actuatorReady": "ISO 5211 mounting pad"
                }
              },
              {
                "id": "valve-butterfly-wafer-type",
                "slug": "valve-butterfly-wafer-type-r-type",
                "image": "valves",
                "title": "VALVE-BUTTERFLY-WAFER-TYPE",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Operating temperature: -40°F to +250°F"
                ],
                "specs": {
                  "size": "2 to 24 inch",
                  "discMaterial": "316 SS with EPDM seat",
                  "pressure": "150/300 PSI",
                  "temperature": "-40°F to +250°F",
                  "actuator": "Pneumatic or Electric"
                }
              },
              {
                "id": "valve-gate-rising-stem",
                "slug": "valve-gate-rising-stem-g-stem",
                "image": "valves",
                "title": "VALVE-GATE-RISING-STEM",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Operating temperature: -29°F to +800°F"
                ],
                "specs": {
                  "size": "1/2 to 12 inch",
                  "pressure": "150 to 2500 PSI",
                  "temperature": "-29°F to +800°F"
                }
              },
              {
                "id": "valve-globe-angle-pattern",
                "slug": "valve-globe-angle-pattern-attern",
                "image": "valves",
                "title": "VALVE-GLOBE-ANGLE-PATTERN",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Operating temperature: -20°F to +800°F"
                ],
                "specs": {
                  "size": "1/2 to 8 inch",
                  "trim": "13% Chrome hardened",
                  "pressure": "150 to 1500 PSI",
                  "temperature": "-20°F to +800°F",
                  "flowCharacteristic": "Linear or Equal Percentage"
                }
              },
              {
                "id": "valve-check-swing-type",
                "slug": "valve-check-swing-type-g-type",
                "image": "valves",
                "title": "VALVE-CHECK-SWING-TYPE",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Operating temperature: -20°F to +450°F"
                ],
                "specs": {
                  "size": "2 to 24 inch",
                  "pressure": "125 to 600 PSI",
                  "temperature": "-20°F to +450°F",
                  "installation": "Horizontal pipe runs"
                }
              },
              {
                "id": "valve-safety-relief-spring",
                "slug": "valve-safety-relief-spring-spring",
                "image": "valves",
                "title": "VALVE-SAFETY-RELIEF-SPRING",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Operating temperature: -20°F to +800°F"
                ],
                "specs": {
                  "size": "1/2 to 8 inch",
                  "setPressure": "15 to 6000 PSI",
                  "temperature": "-20°F to +800°F",
                  "capacity": "ASME Section VIII"
                }
              }
            ]
          }
        ]
      },
      {
        "key": "sensors-transducers",
        "title": "Sensors & Transducers",
        "description": "Professional sensors transducers for industrial applications",
        "productGroups": [
          {
            "key": "pnp",
            "slug": "pnp-proximity-sensors",
            "title": "PNP Proximity Sensors",
            "description": "PNP output proximity sensors for position detection and automated switching",
            "image": "pnp-proximity-sensor",
            "featuredSpecs": [
              "manufacturer",
              "model",
              "type"
            ],
            "products": [
              {
                "id": "omron-e2e-x5me1-pnp-proximity",
                "slug": "omron-e2e-x5me1-pnp-proximity-sensor-ximity",
                "image": "sensors",
                "title": "Omron E2E-X5ME1 PNP Inductive Proximity Sensor",
                "description": "PNP Inductive Proximity Sensor with advanced features for reliable performance in industrial applications.",
                "features": [
                  "12-24VDC operating voltage"
                ],
                "specs": {
                  "type": "PNP Inductive Proximity Sensor",
                  "manufacturer": "Omron",
                  "model": "E2E-X5ME1",
                  "sensingDistance": "5mm",
                  "outputType": "PNP NO/NC",
                  "voltage": "12-24VDC",
                  "current": "200mA max",
                  "frequency": "1000Hz",
                  "protectionRating": "IP67",
                  "operatingTemp": "-25°C to +70°C",
                  "connectionType": "M12 Connector"
                }
              },
              {
                "id": "pepperl-fuchs-nbb5-18gm60-e2-pnp",
                "slug": "pepperl-fuchs-nbb5-18gm60-e2-pnp-sensor-e2-pnp",
                "image": "sensors",
                "title": "Pepperl+Fuchs NBB5-18GM60-E2 PNP Inductive Proximity Sensor",
                "description": "PNP Inductive Proximity Sensor with advanced features for reliable performance in industrial applications.",
                "features": [
                  "10-30VDC operating voltage"
                ],
                "specs": {
                  "type": "PNP Inductive Proximity Sensor",
                  "manufacturer": "Pepperl+Fuchs",
                  "model": "NBB5-18GM60-E2",
                  "sensingDistance": "5mm",
                  "outputType": "PNP NO",
                  "voltage": "10-30VDC",
                  "current": "200mA max",
                  "frequency": "5000Hz",
                  "protectionRating": "IP68",
                  "operatingTemp": "-25°C to +70°C",
                  "connectionType": "2m Cable"
                }
              },
              {
                "id": "sick-im12-04bns-zw1-npn",
                "slug": "sick-im12-04bns-zw1-npn-proximity-w1-npn",
                "image": "npn-proximity-sensor",
                "title": "Sick IM12-04BNS-ZW1 NPN Inductive Proximity Sensor",
                "description": "NPN Inductive Proximity Sensor with advanced features for reliable performance in industrial applications.",
                "features": [
                  "10-30VDC operating voltage"
                ],
                "specs": {
                  "type": "NPN Inductive Proximity Sensor",
                  "manufacturer": "Sick",
                  "model": "IM12-04BNS-ZW1",
                  "sensingDistance": "4mm",
                  "outputType": "NPN NO",
                  "voltage": "10-30VDC",
                  "current": "200mA max",
                  "frequency": "2000Hz",
                  "protectionRating": "IP67",
                  "operatingTemp": "-25°C to +70°C",
                  "connectionType": "M12 Connector"
                }
              },
              {
                "id": "balluff-bes-516-370-e4-c-pu-03-pnp",
                "slug": "balluff-bes-516-370-e4-c-pu-03-pnp-03-pnp",
                "image": "sensors",
                "title": "Balluff BES 516-370-E4-C-PU-03 PNP Inductive Proximity Sensor",
                "description": "PNP Inductive Proximity Sensor with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "PNP Inductive Proximity Sensor",
                  "manufacturer": "Balluff",
                  "model": "BES 516-370-E4-C-PU-03",
                  "sensingDistance": "4mm",
                  "outputType": "PNP (NO/NC)",
                  "housing": "M18 x 1",
                  "protectionRating": "IP67",
                  "operatingVoltage": "10-30VDC",
                  "outputCurrent": "100mA",
                  "operatingTemp": "-25°C to +70°C"
                }
              },
              {
                "id": "telemecanique-xs618b1pam12-pnp",
                "slug": "telemecanique-xs618b1pam12-pnp-12-pnp",
                "image": "sensors",
                "title": "Telemecanique (Schneider) XS618B1PAM12 PNP Inductive Proximity Sensor",
                "description": "PNP Inductive Proximity Sensor with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "PNP Inductive Proximity Sensor",
                  "manufacturer": "Telemecanique (Schneider)",
                  "model": "XS618B1PAM12",
                  "sensingDistance": "8mm",
                  "outputType": "PNP (NO)",
                  "housing": "M18 x 1",
                  "protectionRating": "IP67",
                  "operatingVoltage": "12-24VDC",
                  "outputCurrent": "200mA",
                  "operatingTemp": "-25°C to +70°C"
                }
              },
              {
                "id": "baumer-ifrm-08p1501-proximity",
                "slug": "baumer-ifrm-08p1501-proximity-ximity",
                "image": "sensors",
                "title": "Baumer IFRM 08P1501/S35L PNP Inductive Proximity Sensor",
                "description": "PNP Inductive Proximity Sensor with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "PNP Inductive Proximity Sensor",
                  "manufacturer": "Baumer",
                  "model": "IFRM 08P1501/S35L",
                  "sensingDistance": "1.5mm",
                  "outputType": "PNP (NO)",
                  "housing": "M8 x 1",
                  "protectionRating": "IP67",
                  "operatingVoltage": "10-30VDC",
                  "outputCurrent": "200mA",
                  "operatingTemp": "-25°C to +70°C"
                }
              }
            ]
          },
          {
            "key": "npn",
            "slug": "npn-proximity-sensors",
            "title": "NPN Proximity Sensors",
            "description": "NPN output proximity sensors for reliable object detection and positioning",
            "image": "npn-proximity-sensor",
            "featuredSpecs": [
              "manufacturer",
              "model",
              "type"
            ],
            "products": [
              {
                "id": "turck-bi5-g18-an6x-npn",
                "slug": "turck-bi5-g18-an6x-npn-sensor-6x-npn",
                "image": "sensors",
                "title": "Turck BI5-G18-AN6X NPN Inductive Proximity Sensor",
                "description": "NPN Inductive Proximity Sensor with advanced features for reliable performance in industrial applications.",
                "features": [
                  "10-30VDC operating voltage"
                ],
                "specs": {
                  "type": "NPN Inductive Proximity Sensor",
                  "manufacturer": "Turck",
                  "model": "BI5-G18-AN6X",
                  "sensingDistance": "5mm",
                  "outputType": "NPN NO/NC",
                  "voltage": "10-30VDC",
                  "current": "200mA max",
                  "frequency": "3000Hz",
                  "protectionRating": "IP67",
                  "operatingTemp": "-25°C to +70°C",
                  "connectionType": "2m PVC Cable"
                }
              },
              {
                "id": "ifm-ig5854-igkfpkg-npn",
                "slug": "ifm-ig5854-igkfpkg-npn-kg-npn",
                "image": "sensors",
                "title": "IFM IG5854 (IGKFPKG) NPN Inductive Proximity Sensor",
                "description": "NPN Inductive Proximity Sensor with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "NPN Inductive Proximity Sensor",
                  "manufacturer": "IFM",
                  "model": "IG5854 (IGKFPKG)",
                  "sensingDistance": "8mm",
                  "outputType": "NPN (NO)",
                  "housing": "M18 x 1",
                  "protectionRating": "IP68/IP69K",
                  "operatingVoltage": "10-36VDC",
                  "outputCurrent": "200mA",
                  "operatingTemp": "-40°C to +85°C"
                }
              }
            ]
          },
          {
            "key": "rtd",
            "slug": "rtd-temperature-sensors",
            "title": "RTD Temperature Sensors",
            "description": "Resistance Temperature Detectors for accurate temperature measurement",
            "image": "rtd-temperature-sensor",
            "featuredSpecs": [
              "manufacturer",
              "model",
              "type"
            ],
            "products": [
              {
                "id": "wika-tr10-pt100-rtd",
                "slug": "wika-tr10-pt100-rtd-sensor-00-rtd",
                "image": "pt100-rtd-sensor",
                "title": "Wika TR10-A PT100 RTD Temperature Sensor",
                "description": "PT100 RTD Temperature Sensor with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±Class A (±0.15°C at 0°C) accuracy"
                ],
                "specs": {
                  "type": "PT100 RTD Temperature Sensor",
                  "manufacturer": "Wika",
                  "model": "TR10-A",
                  "elementType": "PT100 (3850ppm/K)",
                  "temperatureRange": "-200°C to +600°C",
                  "accuracy": "Class A (±0.15°C at 0°C)",
                  "responseTime": "T90 < 8s",
                  "protectionRating": "IP65"
                }
              },
              {
                "id": "rosemount-78s-pt500-rtd",
                "slug": "rosemount-78s-pt500-rtd-sensor-00-rtd",
                "image": "sensors",
                "title": "Rosemount (Emerson) 78S PT500 RTD Temperature Sensor",
                "description": "PT500 RTD Temperature Sensor with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±Class A (±0.3°C at 0°C) accuracy"
                ],
                "specs": {
                  "type": "PT500 RTD Temperature Sensor",
                  "manufacturer": "Rosemount (Emerson)",
                  "model": "78S",
                  "elementType": "PT500 (3850ppm/K)",
                  "temperatureRange": "-200°C to +500°C",
                  "accuracy": "Class A (±0.3°C at 0°C)",
                  "responseTime": "T90 < 5s",
                  "protectionRating": "IP68"
                }
              },
              {
                "id": "omega-rtd-pt1000-probe",
                "slug": "omega-rtd-pt1000-probe-sensor--probe",
                "image": "pt1000-rtd-sensor",
                "title": "Omega Engineering RTD-2-PT1000-1/8-6-E PT1000 RTD Temperature Sensor",
                "description": "PT1000 RTD Temperature Sensor with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±Class A (±0.3°C at 0°C) accuracy"
                ],
                "specs": {
                  "type": "PT1000 RTD Temperature Sensor",
                  "manufacturer": "Omega Engineering",
                  "model": "RTD-2-PT1000-1/8-6-E",
                  "elementType": "PT1000 (3850ppm/K)",
                  "temperatureRange": "-200°C to +650°C",
                  "accuracy": "Class A (±0.3°C at 0°C)",
                  "responseTime": "T90 < 12s",
                  "protectionRating": "IP65",
                  "probeLength": "6 inches",
                  "probeDiameter": "1/8 inch"
                }
              },
              {
                "id": "jumo-902820-pt100-rtd",
                "slug": "jumo-902820-pt100-rtd-00-rtd",
                "image": "sensors",
                "title": "JUMO 902820/10 PT100 RTD Temperature Sensor",
                "description": "PT100 RTD Temperature Sensor with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±Class A (±0.15°C) accuracy"
                ],
                "specs": {
                  "type": "PT100 RTD Temperature Sensor",
                  "manufacturer": "JUMO",
                  "model": "902820/10",
                  "element": "PT100",
                  "accuracy": "Class A (±0.15°C)",
                  "configuration": "3-Wire",
                  "material": "316L Stainless Steel",
                  "temperatureRange": "-200°C to +600°C",
                  "responseTime": "T90 = 3s in water",
                  "protectionRating": "IP65"
                }
              },
              {
                "id": "heraeus-m222-pt1000-rtd",
                "slug": "heraeus-m222-pt1000-rtd-00-rtd",
                "image": "sensors",
                "title": "Heraeus M222 PT1000 RTD Temperature Sensor",
                "description": "PT1000 RTD Temperature Sensor with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±Class A (±0.15°C) accuracy"
                ],
                "specs": {
                  "type": "PT1000 RTD Temperature Sensor",
                  "manufacturer": "Heraeus",
                  "model": "M222",
                  "element": "PT1000",
                  "accuracy": "Class A (±0.15°C)",
                  "configuration": "2-Wire",
                  "material": "316SS Probe",
                  "temperatureRange": "-200°C to +600°C",
                  "responseTime": "T90 = 1.5s in water",
                  "protectionRating": "IP68"
                }
              },
              {
                "id": "abb-tem104-pt100-rtd",
                "slug": "abb-tem104-pt100-rtd-00-rtd",
                "image": "pt100-rtd-sensor",
                "title": "ABB TEM104 PT100 RTD Temperature Sensor",
                "description": "PT100 RTD Temperature Sensor with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±Class A (±0.15°C) accuracy"
                ],
                "specs": {
                  "type": "PT100 RTD Temperature Sensor",
                  "manufacturer": "ABB",
                  "model": "TEM104",
                  "element": "PT100",
                  "accuracy": "Class A (±0.15°C)",
                  "configuration": "3-Wire",
                  "material": "316 Stainless Steel",
                  "temperatureRange": "-200°C to +600°C",
                  "responseTime": "T90 = 5s in water",
                  "protectionRating": "IP65"
                }
              },
              {
                "id": "honeywell-t775-pt1000-rtd",
                "slug": "honeywell-t775-pt1000-rtd-00-rtd",
                "image": "pt1000-rtd-sensor",
                "title": "Honeywell T775A2009 PT1000 RTD Temperature Sensor",
                "description": "PT1000 RTD Temperature Sensor with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±Class A (±0.15°C) accuracy"
                ],
                "specs": {
                  "type": "PT1000 RTD Temperature Sensor",
                  "manufacturer": "Honeywell",
                  "model": "T775A2009",
                  "element": "PT1000",
                  "accuracy": "Class A (±0.15°C)",
                  "configuration": "2-Wire",
                  "material": "Brass Housing",
                  "temperatureRange": "-40°C to +120°C",
                  "responseTime": "T90 = 30s in air",
                  "protectionRating": "IP54"
                }
              },
              {
                "id": "fluke-5627a-pt25-rtd",
                "slug": "fluke-5627a-pt25-rtd-25-rtd",
                "image": "sensors",
                "title": "Fluke Calibration 5627A PT25 RTD Temperature Sensor",
                "description": "PT25 RTD Temperature Sensor with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±0.003°C at 0°C accuracy"
                ],
                "specs": {
                  "type": "PT25 RTD Temperature Sensor",
                  "manufacturer": "Fluke Calibration",
                  "model": "5627A",
                  "element": "PT25",
                  "accuracy": "±0.003°C at 0°C",
                  "configuration": "4-Wire",
                  "material": "Inconel Sheath",
                  "temperatureRange": "-196°C to +420°C",
                  "responseTime": "T90 = 0.8s in water",
                  "protectionRating": "IP65"
                }
              }
            ]
          },
          {
            "key": "thermocouples",
            "slug": "thermocouple-sensors",
            "title": "Thermocouple Sensors",
            "description": "Thermocouple temperature sensors for high-temperature measurements",
            "image": "thermocouple-temperature-sensor",
            "featuredSpecs": [
              "manufacturer",
              "model",
              "type"
            ],
            "products": [
              {
                "id": "tc-ltd-type-k-thermocouple",
                "slug": "tc-ltd-type-k-thermocouple-sensor-couple",
                "image": "sensors",
                "title": "TC Ltd TC-K-1/8-6-SMP-CC Type K Thermocouple",
                "description": "Type K Thermocouple with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±1.1°C or ±0.4% accuracy"
                ],
                "specs": {
                  "type": "Type K Thermocouple",
                  "manufacturer": "TC Ltd",
                  "model": "TC-K-1/8-6-SMP-CC",
                  "thermocoupleType": "K (Chromel-Alumel)",
                  "temperatureRange": "-200°C to +1200°C",
                  "accuracy": "±1.1°C or ±0.4%",
                  "responseTime": "T90 < 0.5s",
                  "protectionRating": "IP65",
                  "probeLength": "6 inches",
                  "probeDiameter": "1/8 inch",
                  "junctionType": "Grounded",
                  "cableLength": "2m",
                  "certification": "ANSI MC96.1"
                }
              },
              {
                "id": "omega-type-j-thermocouple",
                "slug": "omega-type-j-thermocouple-sensor-couple",
                "image": "sensors",
                "title": "Omega Engineering JMQSS-1/8U-6 Type J Thermocouple",
                "description": "Type J Thermocouple with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±1.1°C or ±0.4% accuracy"
                ],
                "specs": {
                  "type": "Type J Thermocouple",
                  "manufacturer": "Omega Engineering",
                  "model": "JMQSS-1/8U-6",
                  "thermocoupleType": "J (Iron-Constantan)",
                  "temperatureRange": "-210°C to +760°C",
                  "accuracy": "±1.1°C or ±0.4%",
                  "responseTime": "T90 < 0.4s",
                  "protectionRating": "IP65",
                  "probeLength": "6 inches",
                  "probeDiameter": "1/8 inch",
                  "junctionType": "Ungrounded",
                  "cableLength": "3m"
                }
              },
              {
                "id": "wika-type-t-thermocouple",
                "slug": "wika-type-t-thermocouple-sensor-couple",
                "image": "sensors",
                "title": "Wika TC50-T Type T Thermocouple",
                "description": "Type T Thermocouple with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±0.5°C or ±0.4% accuracy"
                ],
                "specs": {
                  "type": "Type T Thermocouple",
                  "manufacturer": "Wika",
                  "model": "TC50-T",
                  "thermocoupleType": "T (Copper-Constantan)",
                  "temperatureRange": "-250°C to +400°C",
                  "accuracy": "±0.5°C or ±0.4%",
                  "responseTime": "T90 < 1s",
                  "protectionRating": "IP67",
                  "probeLength": "150mm",
                  "probeDiameter": "6mm",
                  "junctionType": "Grounded",
                  "cableLength": "5m"
                }
              },
              {
                "id": "omega-stc-type-s-thermocouple",
                "slug": "omega-stc-type-s-thermocouple-sensor-couple",
                "image": "sensors",
                "title": "Omega Engineering STC-S-1/8-6 Type S Thermocouple",
                "description": "Type S Thermocouple with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±1.0°C or ±0.25% accuracy"
                ],
                "specs": {
                  "type": "Type S Thermocouple",
                  "manufacturer": "Omega Engineering",
                  "model": "STC-S-1/8-6",
                  "thermocoupleType": "S (Platinum-Rhodium)",
                  "temperatureRange": "0°C to +1600°C",
                  "accuracy": "±1.0°C or ±0.25%",
                  "responseTime": "T90 < 5s",
                  "protectionRating": "IP65",
                  "probeLength": "6 inches",
                  "probeDiameter": "1/8 inch",
                  "junctionType": "Ungrounded",
                  "cableLength": "2m"
                }
              }
            ]
          },
          {
            "key": "load-cell",
            "slug": "load-cell-sensors",
            "title": "Load Cell Sensors",
            "description": "Precision load cells and force transducers for weight measurement",
            "image": "load-cell",
            "featuredSpecs": [
              "manufacturer",
              "model",
              "type"
            ],
            "products": []
          },
          {
            "key": "ph-sensors",
            "slug": "ph-sensors",
            "title": "pH Sensors",
            "description": "pH sensors and electrodes for accurate pH measurement",
            "image": "ph-sensor",
            "featuredSpecs": [
              "manufacturer",
              "model",
              "type"
            ],
            "products": [
              {
                "id": "yokogawa-ph450g-ph-sensor",
                "slug": "yokogawa-ph450g-ph-sensor-sensor",
                "image": "sensors",
                "title": "Yokogawa PH450G pH Sensor",
                "description": "pH Sensor with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±0.1 pH accuracy",
                  "Operating temperature: 0-100°C"
                ],
                "specs": {
                  "type": "pH Sensor",
                  "manufacturer": "Yokogawa",
                  "model": "PH450G",
                  "phRange": "0-14 pH",
                  "accuracy": "±0.1 pH",
                  "temperature": "0-100°C",
                  "pressure": "0.7 MPa max",
                  "material": "Glass Electrode",
                  "junction": "Double Junction"
                }
              },
              {
                "id": "hamilton-polilyte-plus-ph-sensor",
                "slug": "hamilton-polilyte-plus-ph-sensor-sensor",
                "image": "sensors",
                "title": "Hamilton PoliLyte Plus VP pH Sensor",
                "description": "pH Sensor with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±0.05 pH accuracy",
                  "Operating temperature: 0-130°C"
                ],
                "specs": {
                  "type": "pH Sensor",
                  "manufacturer": "Hamilton",
                  "model": "PoliLyte Plus VP",
                  "phRange": "0-14 pH",
                  "accuracy": "±0.05 pH",
                  "temperature": "0-130°C",
                  "pressure": "6 bar max",
                  "material": "PEEK Body",
                  "junction": "Open Junction"
                }
              }
            ]
          },
          {
            "key": "miscellaneous",
            "slug": "miscellaneous-sensors-transducers",
            "title": "Other sensors transducers",
            "description": "Additional sensors transducers products for specialized industrial applications.",
            "image": "miscellaneous",
            "featuredSpecs": [
              "manufacturer",
              "model",
              "type"
            ],
            "products": [
              {
                "id": "endress-hauser-cps11d-ph-sensor",
                "slug": "endress-hauser-cps11d-ph-sensor-sensor",
                "image": "sensors",
                "title": "Endress+Hauser CPS11D Digital pH Sensor",
                "description": "Digital pH Sensor with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±0.05 pH accuracy"
                ],
                "specs": {
                  "type": "Digital pH Sensor",
                  "manufacturer": "Endress+Hauser",
                  "model": "CPS11D",
                  "phRange": "0-14 pH",
                  "accuracy": "±0.05 pH",
                  "temperatureRange": "0-80°C",
                  "tempCompensation": "Automatic (Pt1000)",
                  "protectionRating": "IP68",
                  "processConnection": "PG13.5",
                  "cableLength": "10m",
                  "diaphragm": "PTFE",
                  "electrolyte": "Polymer gel"
                }
              },
              {
                "id": "hach-phd-sc-ph-sensor",
                "slug": "hach-phd-sc-ph-sensor-sensor",
                "image": "sensors",
                "title": "Hach pHD sc Differential pH Sensor",
                "description": "Differential pH Sensor with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±0.02 pH accuracy"
                ],
                "specs": {
                  "type": "Differential pH Sensor",
                  "manufacturer": "Hach",
                  "model": "pHD sc",
                  "phRange": "0-14 pH",
                  "accuracy": "±0.02 pH",
                  "temperatureRange": "0-100°C",
                  "tempCompensation": "Automatic (NTC)",
                  "protectionRating": "IP68",
                  "cableLength": "15m",
                  "diaphragm": "Ceramic",
                  "electrolyte": "Liquid KCl"
                }
              },
              {
                "id": "watlow-type-k-thermocouple",
                "slug": "watlow-type-k-thermocouple-couple",
                "image": "sensors",
                "title": "Watlow 630A Type K Thermocouple",
                "description": "Type K Thermocouple with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±1.1°C (±2.2°F) accuracy"
                ],
                "specs": {
                  "type": "Type K Thermocouple",
                  "manufacturer": "Watlow",
                  "model": "630A",
                  "thermocoupleType": "K (Chromel-Alumel)",
                  "accuracy": "±1.1°C (±2.2°F)",
                  "temperatureRange": "-200°C to +1260°C",
                  "responseTime": "0.5s typical",
                  "protection": "Grounded/Ungrounded/Exposed",
                  "sheath": "316SS"
                }
              },
              {
                "id": "pilz-psen-op4h-proximity",
                "slug": "pilz-psen-op4h-proximity-ximity",
                "image": "sensors",
                "title": "Pilz PSEN op4H Safety Proximity Sensor",
                "description": "Safety Proximity Sensor with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "Safety Proximity Sensor",
                  "manufacturer": "Pilz",
                  "model": "PSEN op4H",
                  "sensingDistance": "4mm",
                  "outputType": "Safety (OSSD)",
                  "housing": "M18 x 1",
                  "protectionRating": "IP67",
                  "operatingVoltage": "24VDC",
                  "safetyCategory": "Cat. 4 / PLe",
                  "operatingTemp": "-25°C to +70°C"
                }
              },
              {
                "id": "euchner-ces-a-bhn-proximity",
                "slug": "euchner-ces-a-bhn-proximity-ximity",
                "image": "sensors",
                "title": "Euchner CES-A-BHN Inductive Proximity Sensor",
                "description": "Inductive Proximity Sensor with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "Inductive Proximity Sensor",
                  "manufacturer": "Euchner",
                  "model": "CES-A-BHN",
                  "sensingDistance": "8mm",
                  "outputType": "PNP/NPN (NO/NC)",
                  "housing": "M18 x 1",
                  "protectionRating": "IP67",
                  "operatingVoltage": "10-30VDC",
                  "outputCurrent": "200mA",
                  "operatingTemp": "-25°C to +70°C"
                }
              },
              {
                "id": "leuze-is-212mm-proximity",
                "slug": "leuze-is-212mm-proximity-ximity",
                "image": "sensors",
                "title": "Leuze IS 212MM/4NO-8E0 Inductive Proximity Sensor",
                "description": "Inductive Proximity Sensor with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "Inductive Proximity Sensor",
                  "manufacturer": "Leuze",
                  "model": "IS 212MM/4NO-8E0",
                  "sensingDistance": "8mm",
                  "outputType": "NPN (NO)",
                  "housing": "M12 x 1",
                  "protectionRating": "IP67",
                  "operatingVoltage": "10-30VDC",
                  "outputCurrent": "100mA",
                  "operatingTemp": "-25°C to +70°C"
                }
              },
              {
                "id": "eurotherm-t2750-type-n-thermocouple",
                "slug": "eurotherm-t2750-type-n-thermocouple-couple",
                "image": "sensors",
                "title": "Eurotherm T2750 Type N Thermocouple",
                "description": "Type N Thermocouple with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±1.1°C (±2.2°F) accuracy"
                ],
                "specs": {
                  "type": "Type N Thermocouple",
                  "manufacturer": "Eurotherm",
                  "model": "T2750",
                  "thermocoupleType": "N (Nicrosil-Nisil)",
                  "accuracy": "±1.1°C (±2.2°F)",
                  "temperatureRange": "0°C to +1300°C",
                  "responseTime": "1s typical",
                  "protection": "Grounded Junction",
                  "sheath": "Inconel 600"
                }
              },
              {
                "id": "pyromation-r2ma-type-r-thermocouple",
                "slug": "pyromation-r2ma-type-r-thermocouple-couple",
                "image": "sensors",
                "title": "Pyromation R2MA Type R Thermocouple",
                "description": "Type R Thermocouple with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±1.0°C (±1.8°F) accuracy"
                ],
                "specs": {
                  "type": "Type R Thermocouple",
                  "manufacturer": "Pyromation",
                  "model": "R2MA",
                  "thermocoupleType": "R (Pt-13%Rh)",
                  "accuracy": "±1.0°C (±1.8°F)",
                  "temperatureRange": "0°C to +1600°C",
                  "responseTime": "2s typical",
                  "protection": "Ungrounded Junction",
                  "sheath": "Platinum"
                }
              },
              {
                "id": "sensorex-s272cd-ph-sensor",
                "slug": "sensorex-s272cd-ph-sensor-sensor",
                "image": "sensors",
                "title": "Sensorex S272CD pH/ORP Combination Sensor",
                "description": "pH/ORP Combination Sensor with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±0.1 pH accuracy",
                  "Operating temperature: 0-80°C"
                ],
                "specs": {
                  "type": "pH/ORP Combination Sensor",
                  "manufacturer": "Sensorex",
                  "model": "S272CD",
                  "phRange": "0-14 pH",
                  "accuracy": "±0.1 pH",
                  "temperature": "0-80°C",
                  "pressure": "6 bar max",
                  "material": "Epoxy Body",
                  "junction": "Double Junction"
                }
              },
              {
                "id": "banner-qs18vn6d-photoelectric",
                "slug": "banner-qs18vn6d-photoelectric-ectric",
                "image": "sensors",
                "title": "Banner Engineering QS18VN6D Photoelectric Sensor",
                "description": "Photoelectric Sensor with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "Photoelectric Sensor",
                  "manufacturer": "Banner Engineering",
                  "model": "QS18VN6D",
                  "sensingMode": "Diffuse (NO)",
                  "sensingRange": "300mm",
                  "lightSource": "Visible Red LED",
                  "outputType": "DC 3-Wire NPN",
                  "housing": "M18 x 1",
                  "protectionRating": "IP67",
                  "operatingVoltage": "10-30VDC",
                  "operatingTemp": "-40°C to +70°C"
                }
              },
              {
                "id": "keyence-pz-g41cn-photoelectric",
                "slug": "keyence-pz-g41cn-photoelectric-ectric",
                "image": "sensors",
                "title": "Keyence PZ-G41CN Laser Photoelectric Sensor",
                "description": "Laser Photoelectric Sensor with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "Laser Photoelectric Sensor",
                  "manufacturer": "Keyence",
                  "model": "PZ-G41CN",
                  "sensingMode": "Through-beam",
                  "sensingRange": "15m",
                  "lightSource": "Class 1 Laser",
                  "outputType": "NPN/PNP Selectable",
                  "housing": "M18 Threaded",
                  "protectionRating": "IP67",
                  "operatingVoltage": "12-24VDC",
                  "operatingTemp": "-25°C to +55°C"
                }
              },
              {
                "id": "wenglor-og2a103-photoelectric",
                "slug": "wenglor-og2a103-photoelectric-ectric",
                "image": "sensors",
                "title": "Wenglor OG2A103 Retroreflective Photoelectric Sensor",
                "description": "Retroreflective Photoelectric Sensor with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "Retroreflective Photoelectric Sensor",
                  "manufacturer": "Wenglor",
                  "model": "OG2A103",
                  "sensingMode": "Retroreflective (NO)",
                  "sensingRange": "4m with reflector",
                  "lightSource": "Infrared LED",
                  "outputType": "PNP",
                  "housing": "Cubic",
                  "protectionRating": "IP69K",
                  "operatingVoltage": "10-30VDC",
                  "operatingTemp": "-40°C to +60°C"
                }
              }
            ]
          }
        ]
      },
      {
        "key": "transmitters-flow-meters",
        "title": "Transmitters & Flow Meters",
        "description": "Professional transmitters flow meters for industrial applications",
        "productGroups": [
          {
            "key": "dp-type-transmitter",
            "slug": "dp-type-transmitters",
            "title": "Differential Pressure Transmitters",
            "description": "High-accuracy differential pressure transmitters for flow and level measurement",
            "image": "dp-transmitter-rosemount",
            "featuredSpecs": [
              "manufacturer",
              "model",
              "type"
            ],
            "products": [
              {
                "id": "rosemount-3051cd-dp-transmitter",
                "slug": "rosemount-3051cd-dp-transmitter-mitter",
                "image": "dp-transmitter-rosemount",
                "title": "Emerson/Rosemount 3051CD Smart Differential Pressure Transmitter",
                "description": "Smart Differential Pressure Transmitter with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±0.04% of span accuracy"
                ],
                "specs": {
                  "type": "Smart Differential Pressure Transmitter",
                  "manufacturer": "Emerson/Rosemount",
                  "model": "3051CD",
                  "pressureRange": "0-2.5 kPa to 0-10 MPa",
                  "accuracy": "±0.04% of span",
                  "stability": "±0.125% for 5 years",
                  "operatingTemp": "-40°C to +85°C",
                  "processTemp": "-40°C to +120°C",
                  "protectionRating": "IP67",
                  "powerSupply": "10.5-55VDC",
                  "materials": "316L SST wetted parts"
                }
              },
              {
                "id": "endress-hauser-deltabar-pmd75-dp",
                "slug": "endress-hauser-deltabar-pmd75-dp-d75-dp",
                "image": "dp-transmitter-endress",
                "title": "Endress+Hauser Deltabar PMD75 HART DP Transmitter with Remote Seals",
                "description": "HART DP Transmitter with Remote Seals with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±0.05% of span accuracy"
                ],
                "specs": {
                  "type": "HART DP Transmitter with Remote Seals",
                  "manufacturer": "Endress+Hauser",
                  "model": "Deltabar PMD75",
                  "pressureRange": "0-100 Pa to 0-4 MPa",
                  "accuracy": "±0.05% of span",
                  "stability": "±0.1% for 10 years",
                  "operatingTemp": "-40°C to +85°C",
                  "processTemp": "-90°C to +400°C (with remote seals)",
                  "protectionRating": "IP68",
                  "powerSupply": "10.5-45VDC"
                }
              },
              {
                "id": "yokogawa-eja110e-dp-transmitter",
                "slug": "yokogawa-eja110e-dp-transmitter-mitter",
                "image": "dp-transmitter-yokogawa",
                "title": "Yokogawa EJA110E DPharp Digital DP Transmitter",
                "description": "DPharp Digital DP Transmitter with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±0.04% of span accuracy"
                ],
                "specs": {
                  "type": "DPharp Digital DP Transmitter",
                  "manufacturer": "Yokogawa",
                  "model": "EJA110E",
                  "pressureRange": "0-500 Pa to 0-10 MPa",
                  "accuracy": "±0.04% of span",
                  "stability": "±0.1% for 10 years",
                  "operatingTemp": "-40°C to +85°C",
                  "processTemp": "-40°C to +120°C",
                  "protectionRating": "IP67",
                  "powerSupply": "10.5-55VDC"
                }
              },
              {
                "id": "honeywell-stt950-dp-transmitter",
                "slug": "honeywell-stt950-dp-transmitter-mitter",
                "image": "dp-transmitter-honeywell",
                "title": "Honeywell STT950 Smart Differential Pressure Transmitter",
                "description": "Smart Differential Pressure Transmitter with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±0.04% of span accuracy"
                ],
                "specs": {
                  "type": "Smart Differential Pressure Transmitter",
                  "manufacturer": "Honeywell",
                  "model": "STT950",
                  "pressureRange": "0-249 Pa to 0-13.8 MPa",
                  "accuracy": "±0.04% of span",
                  "stability": "±0.125% for 5 years",
                  "operatingTemp": "-40°C to +85°C",
                  "processTemp": "-40°C to +121°C",
                  "protectionRating": "IP67",
                  "powerSupply": "10.5-55VDC"
                }
              },
              {
                "id": "wika-a10-pressure-transmitter",
                "slug": "wika-a10-pressure-transmitter-mitter",
                "image": "p-transmitter-wika",
                "title": "WIKA A-10 General Purpose Pressure Transmitter",
                "description": "General Purpose Pressure Transmitter with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±0.25% of span accuracy"
                ],
                "specs": {
                  "type": "General Purpose Pressure Transmitter",
                  "manufacturer": "WIKA",
                  "model": "A-10",
                  "pressureRange": "0-1 bar to 0-1000 bar",
                  "accuracy": "±0.25% of span",
                  "stability": "±0.1% per year",
                  "operatingTemp": "-40°C to +85°C",
                  "processTemp": "-40°C to +125°C",
                  "protectionRating": "IP65",
                  "powerSupply": "8-30VDC",
                  "materials": "Stainless steel 316L"
                }
              },
              {
                "id": "rosemount-5408-level-transmitter",
                "slug": "rosemount-5408-level-transmitter-mitter",
                "image": "transmitters",
                "title": "Rosemount (Emerson) 5408 Non-Contact Radar Level Transmitter",
                "description": "Non-Contact Radar Level Transmitter with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±2mm accuracy"
                ],
                "specs": {
                  "type": "Non-Contact Radar Level Transmitter",
                  "manufacturer": "Rosemount (Emerson)",
                  "model": "5408",
                  "measurementRange": "0.2m to 40m",
                  "accuracy": "±2mm",
                  "output": "4-20mA + HART",
                  "frequency": "78 GHz",
                  "protectionRating": "IP66/IP68",
                  "powerSupply": "11-42VDC",
                  "processConnection": "DN50 to DN200 flange",
                  "operatingTemp": "-40°C to +200°C"
                }
              },
              {
                "id": "honeywell-st3000-pressure-transmitter",
                "slug": "honeywell-st3000-pressure-transmitter-mitter",
                "image": "transmitters",
                "title": "Honeywell ST3000 Smart Pressure Transmitter",
                "description": "Smart Pressure Transmitter with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±0.075% accuracy",
                  "Operating temperature: -40°C to +85°C"
                ],
                "specs": {
                  "type": "Smart Pressure Transmitter",
                  "manufacturer": "Honeywell",
                  "model": "ST3000",
                  "pressureRange": "0-6000 psi",
                  "accuracy": "±0.075%",
                  "stability": "±0.125% for 5 years",
                  "temperature": "-40°C to +85°C",
                  "protection": "IP66/67"
                }
              },
              {
                "id": "abb-266-pressure-transmitter",
                "slug": "abb-266-pressure-transmitter-mitter",
                "image": "transmitters",
                "title": "ABB 266 Absolute/Gauge Pressure Transmitter",
                "description": "Absolute/Gauge Pressure Transmitter with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±0.055% accuracy",
                  "Operating temperature: -40°C to +85°C"
                ],
                "specs": {
                  "type": "Absolute/Gauge Pressure Transmitter",
                  "manufacturer": "ABB",
                  "model": "266",
                  "pressureRange": "0-690 bar",
                  "accuracy": "±0.055%",
                  "stability": "±0.1% for 10 years",
                  "temperature": "-40°C to +85°C",
                  "protection": "IP66/67"
                }
              },
              {
                "id": "siemens-sitrans-p-pressure-transmitter",
                "slug": "siemens-sitrans-p-pressure-transmitter-mitter",
                "image": "transmitters",
                "title": "Siemens SITRANS P320/420 Smart Pressure Transmitter",
                "description": "Smart Pressure Transmitter with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±0.075% accuracy",
                  "Operating temperature: -40°C to +85°C"
                ],
                "specs": {
                  "type": "Smart Pressure Transmitter",
                  "manufacturer": "Siemens",
                  "model": "SITRANS P320/420",
                  "pressureRange": "0-1000 bar",
                  "accuracy": "±0.075%",
                  "stability": "±0.1% for 5 years",
                  "temperature": "-40°C to +85°C",
                  "protection": "IP67"
                }
              },
              {
                "id": "yokogawa-eja-pressure-transmitter",
                "slug": "yokogawa-eja-pressure-transmitter-mitter",
                "image": "transmitters",
                "title": "Yokogawa EJA110A DPharp Pressure Transmitter",
                "description": "DPharp Pressure Transmitter with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±0.055% accuracy",
                  "Operating temperature: -40°C to +85°C"
                ],
                "specs": {
                  "type": "DPharp Pressure Transmitter",
                  "manufacturer": "Yokogawa",
                  "model": "EJA110A",
                  "pressureRange": "0-500 kPa",
                  "accuracy": "±0.055%",
                  "stability": "±0.1% for 10 years",
                  "temperature": "-40°C to +85°C",
                  "protection": "IP67"
                }
              }
            ]
          },
          {
            "key": "p-type-transmitter",
            "slug": "p-type-transmitters",
            "title": "Pressure Transmitters",
            "description": "Absolute and gauge pressure transmitters for accurate pressure measurement",
            "image": "p-transmitter-siemens",
            "featuredSpecs": [
              "manufacturer",
              "model",
              "type"
            ],
            "products": [
              {
                "id": "siemens-sitrans-p320-pressure",
                "slug": "siemens-sitrans-p320-pressure-essure",
                "image": "p-transmitter-siemens",
                "title": "Siemens SITRANS P320 Absolute/Gauge Pressure Transmitter",
                "description": "Absolute/Gauge Pressure Transmitter with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±0.075% of span accuracy"
                ],
                "specs": {
                  "type": "Absolute/Gauge Pressure Transmitter",
                  "manufacturer": "Siemens",
                  "model": "SITRANS P320",
                  "pressureRange": "0-1 kPa to 0-70 MPa",
                  "accuracy": "±0.075% of span",
                  "stability": "±0.1% for 5 years",
                  "operatingTemp": "-40°C to +85°C",
                  "processTemp": "-40°C to +125°C",
                  "protectionRating": "IP67",
                  "powerSupply": "10.8-45VDC",
                  "materials": "316L SST wetted parts"
                }
              },
              {
                "id": "abb-2600t-series-pressure",
                "slug": "abb-2600t-series-pressure-essure",
                "image": "p-transmitter-abb",
                "title": "ABB 2600T Series Gauge/Absolute Pressure Transmitter",
                "description": "Gauge/Absolute Pressure Transmitter with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±0.04% of span accuracy"
                ],
                "specs": {
                  "type": "Gauge/Absolute Pressure Transmitter",
                  "manufacturer": "ABB",
                  "model": "2600T Series",
                  "pressureRange": "0-100 kPa to 0-100 MPa",
                  "accuracy": "±0.04% of span",
                  "stability": "±0.1% for 5 years",
                  "operatingTemp": "-40°C to +85°C",
                  "processTemp": "-40°C to +121°C",
                  "protectionRating": "IP67",
                  "powerSupply": "10.5-55VDC"
                }
              },
              {
                "id": "fuji-fcx-aii-pressure",
                "slug": "fuji-fcx-aii-pressure-essure",
                "image": "p-transmitter-fuji",
                "title": "Fuji Electric FCX-AII Series Smart Pressure Transmitter",
                "description": "Smart Pressure Transmitter with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±0.065% of span accuracy"
                ],
                "specs": {
                  "type": "Smart Pressure Transmitter",
                  "manufacturer": "Fuji Electric",
                  "model": "FCX-AII Series",
                  "pressureRange": "0-10 kPa to 0-10 MPa",
                  "accuracy": "±0.065% of span",
                  "stability": "±0.1% for 5 years",
                  "operatingTemp": "-40°C to +85°C",
                  "processTemp": "-40°C to +120°C",
                  "protectionRating": "IP67",
                  "powerSupply": "10.5-45VDC"
                }
              }
            ]
          },
          {
            "key": "rs-type-transmitter",
            "slug": "rs-type-transmitters",
            "title": "Title",
            "description": "Description",
            "image": "rs-transmitter-rosemount",
            "featuredSpecs": [
              "manufacturer",
              "model",
              "type"
            ],
            "products": [
              {
                "id": "rosemount-3051s-remote-seal",
                "slug": "rosemount-3051s-remote-seal-e-seal",
                "image": "rs-transmitter-rosemount",
                "title": "Emerson/Rosemount 3051S with Remote Seals Remote Seal Pressure Transmitter",
                "description": "Remote Seal Pressure Transmitter with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±0.04% of span (including remote seal effects) accuracy"
                ],
                "specs": {
                  "type": "Remote Seal Pressure Transmitter",
                  "manufacturer": "Emerson/Rosemount",
                  "model": "3051S with Remote Seals",
                  "pressureRange": "0-1.2 kPa to 0-69 MPa",
                  "accuracy": "±0.04% of span (including remote seal effects)",
                  "stability": "±0.125% for 5 years",
                  "operatingTemp": "-40°C to +85°C (electronics)",
                  "processTemp": "-196°C to +400°C (remote seal)",
                  "protectionRating": "IP67",
                  "powerSupply": "10.5-55VDC",
                  "capillaryLength": "Up to 30 meters",
                  "flushMount": "Available"
                }
              },
              {
                "id": "endress-hauser-cerabar-s-remote",
                "slug": "endress-hauser-cerabar-s-remote-remote",
                "image": "rs-transmitter-endress",
                "title": "Endress+Hauser Cerabar S PMC71 with Remote Seals Ceramic Remote Seal Transmitter",
                "description": "Ceramic Remote Seal Transmitter with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±0.075% of span (including remote seal) accuracy"
                ],
                "specs": {
                  "type": "Ceramic Remote Seal Transmitter",
                  "manufacturer": "Endress+Hauser",
                  "model": "Cerabar S PMC71 with Remote Seals",
                  "pressureRange": "0-100 Pa to 0-100 MPa",
                  "accuracy": "±0.075% of span (including remote seal)",
                  "stability": "±0.1% for 10 years",
                  "operatingTemp": "-40°C to +85°C (electronics)",
                  "processTemp": "-90°C to +400°C (remote seal)",
                  "protectionRating": "IP68",
                  "powerSupply": "10.5-45VDC",
                  "capillaryLength": "Up to 50 meters",
                  "flushMount": "Available"
                }
              },
              {
                "id": "yokogawa-eja430e-remote-seal",
                "slug": "yokogawa-eja430e-remote-seal-e-seal",
                "image": "rs-transmitter-yokogawa",
                "title": "Yokogawa EJA430E with Remote Seals DPharp Remote Seal Transmitter",
                "description": "DPharp Remote Seal Transmitter with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±0.04% of span (including remote seal effects) accuracy"
                ],
                "specs": {
                  "type": "DPharp Remote Seal Transmitter",
                  "manufacturer": "Yokogawa",
                  "model": "EJA430E with Remote Seals",
                  "pressureRange": "0-2 kPa to 0-50 MPa",
                  "accuracy": "±0.04% of span (including remote seal effects)",
                  "stability": "±0.1% for 10 years",
                  "operatingTemp": "-40°C to +85°C (electronics)",
                  "processTemp": "-200°C to +400°C (remote seal)",
                  "protectionRating": "IP67",
                  "powerSupply": "10.5-55VDC",
                  "capillaryLength": "Up to 30 meters",
                  "flushMount": "Available"
                }
              },
              {
                "id": "honeywell-stt850-remote-seal",
                "slug": "honeywell-stt850-remote-seal-e-seal",
                "image": "rs-transmitter-honeywell",
                "title": "Honeywell STT850 with Remote Seals Smart Remote Seal Transmitter",
                "description": "Smart Remote Seal Transmitter with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±0.04% of span (including remote seal) accuracy"
                ],
                "specs": {
                  "type": "Smart Remote Seal Transmitter",
                  "manufacturer": "Honeywell",
                  "model": "STT850 with Remote Seals",
                  "pressureRange": "0-1.25 kPa to 0-69 MPa",
                  "accuracy": "±0.04% of span (including remote seal)",
                  "stability": "±0.125% for 5 years",
                  "operatingTemp": "-40°C to +85°C (electronics)",
                  "processTemp": "-73°C to +400°C (remote seal)",
                  "protectionRating": "IP67",
                  "powerSupply": "10.5-55VDC",
                  "capillaryLength": "Up to 30 meters",
                  "flushMount": "Available"
                }
              }
            ]
          },
          {
            "key": "magnetic-flow-meter",
            "slug": "magnetic-flow-meters",
            "title": "Title",
            "description": "Description",
            "image": "magnetic-flowmeter-endress",
            "featuredSpecs": [
              "manufacturer",
              "model",
              "type"
            ],
            "products": [
              {
                "id": "endress-hauser-promag-w400",
                "slug": "endress-hauser-promag-w400-g-w400",
                "image": "magnetic-flowmeter-endress",
                "title": "Endress+Hauser Promag W 400 Electromagnetic Flow Meter",
                "description": "Electromagnetic Flow Meter with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±0.2% of reading (±2 mm/s) accuracy"
                ],
                "specs": {
                  "type": "Electromagnetic Flow Meter",
                  "manufacturer": "Endress+Hauser",
                  "model": "Promag W 400",
                  "flowVelocity": "0.01 to 15 m/s",
                  "accuracy": "±0.2% of reading (±2 mm/s)",
                  "repeatability": "±0.05% of reading",
                  "operatingTemp": "-40°C to +60°C (transmitter)",
                  "processTemp": "-25°C to +180°C (sensor)"
                }
              },
              {
                "id": "rosemount-8750w-magnetic-flowmeter",
                "slug": "rosemount-8750w-magnetic-flowmeter-wmeter",
                "image": "magnetic-flowmeter-rosemount",
                "title": "Emerson/Rosemount 8750W Magnetic Flow Meter with Advanced Diagnostics",
                "description": "Magnetic Flow Meter with Advanced Diagnostics with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±0.25% of reading (±1.5 mm/s) accuracy"
                ],
                "specs": {
                  "type": "Magnetic Flow Meter with Advanced Diagnostics",
                  "manufacturer": "Emerson/Rosemount",
                  "model": "8750W",
                  "flowVelocity": "0.03 to 15 m/s",
                  "accuracy": "±0.25% of reading (±1.5 mm/s)",
                  "repeatability": "±0.05% of reading",
                  "operatingTemp": "-40°C to +60°C (transmitter)",
                  "processTemp": "-40°C to +180°C (sensor)"
                }
              },
              {
                "id": "abb-procesmaster-fem300",
                "slug": "abb-procesmaster-fem300-fem300",
                "image": "magnetic-flowmeter-abb",
                "title": "ABB ProcessMaster FEM300 Electromagnetic Flow Meter",
                "description": "Electromagnetic Flow Meter with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±0.2% of reading (±2 mm/s) accuracy"
                ],
                "specs": {
                  "type": "Electromagnetic Flow Meter",
                  "manufacturer": "ABB",
                  "model": "ProcessMaster FEM300",
                  "flowVelocity": "0.01 to 15 m/s",
                  "accuracy": "±0.2% of reading (±2 mm/s)",
                  "repeatability": "±0.05% of reading",
                  "operatingTemp": "-25°C to +60°C (transmitter)",
                  "processTemp": "-10°C to +180°C (sensor)"
                }
              },
              {
                "id": "yokogawa-admag-axf-magnetic",
                "slug": "yokogawa-admag-axf-magnetic-gnetic",
                "image": "magnetic-flowmeter-yokogawa",
                "title": "Yokogawa ADMAG AXF Magnetic Flow Meter with Dual Frequency Excitation",
                "description": "Magnetic Flow Meter with Dual Frequency Excitation with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±0.25% of reading (±1.5 mm/s) accuracy"
                ],
                "specs": {
                  "type": "Magnetic Flow Meter with Dual Frequency Excitation",
                  "manufacturer": "Yokogawa",
                  "model": "ADMAG AXF",
                  "flowVelocity": "0.01 to 15 m/s",
                  "accuracy": "±0.25% of reading (±1.5 mm/s)",
                  "repeatability": "±0.05% of reading",
                  "operatingTemp": "-20°C to +60°C (transmitter)",
                  "processTemp": "-10°C to +180°C (sensor)"
                }
              },
              {
                "id": "abb-swirl-meter-fsv450",
                "slug": "abb-swirl-meter-fsv450-fsv450",
                "image": "vortex-flowmeter-abb",
                "title": "ABB Swirl Meter FSV450 Swirl (Vortex) Flow Meter",
                "description": "Swirl (Vortex) Flow Meter with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "Swirl (Vortex) Flow Meter",
                  "manufacturer": "ABB",
                  "model": "Swirl Meter FSV450",
                  "repeatability": "±0.15% of reading",
                  "operatingTemp": "-40°C to +60°C (transmitter)",
                  "processTemp": "-200°C to +400°C (sensor)",
                  "protectionRating": "IP67",
                  "powerSupply": "10.5-55VDC"
                }
              },
              {
                "id": "bronkhorst-in-flow-f230",
                "slug": "bronkhorst-in-flow-f230-w-f230",
                "image": "volumetric-flowmeter-bronkhorst",
                "title": "Bronkhorst IN-FLOW F-230 Ultrasonic Gas/Liquid Flow Meter",
                "description": "Ultrasonic Gas/Liquid Flow Meter with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±0.5% of reading ±0.1% of full scale accuracy"
                ],
                "specs": {
                  "type": "Ultrasonic Gas/Liquid Flow Meter",
                  "manufacturer": "Bronkhorst",
                  "model": "IN-FLOW F-230",
                  "accuracy": "±0.5% of reading ±0.1% of full scale",
                  "repeatability": "±0.2% of reading",
                  "operatingTemp": "-10°C to +60°C (transmitter)",
                  "processTemp": "-40°C to +180°C (sensor)",
                  "protectionRating": "IP65",
                  "powerSupply": "15-35VDC"
                }
              },
              {
                "id": "badger-meter-m1000",
                "slug": "badger-meter-m1000--m1000",
                "image": "pd-flowmeter-badger",
                "title": "Badger Meter M1000 Nutating Disc Positive Displacement Flow Meter",
                "description": "Positive Displacement Flow Meter with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±0.5% of reading accuracy"
                ],
                "specs": {
                  "type": "Positive Displacement Flow Meter",
                  "manufacturer": "Badger Meter",
                  "model": "M1000 Nutating Disc",
                  "flowRange": "0.125-400 GPM (depending on size)",
                  "accuracy": "±0.5% of reading",
                  "repeatability": "±0.1% of reading",
                  "operatingTemp": "-20°C to +70°C",
                  "processTemp": "0°C to +93°C",
                  "protectionRating": "IP68",
                  "powerSupply": "Battery/External 12-24VDC"
                }
              },
              {
                "id": "krohne-bm100-pd-meter",
                "slug": "krohne-bm100-pd-meter--meter",
                "image": "pd-flowmeter-krohne",
                "title": "KROHNE BM 100 Positive Displacement Oval Gear Flow Meter",
                "description": "Positive Displacement Oval Gear Flow Meter with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±0.2% of reading accuracy"
                ],
                "specs": {
                  "type": "Positive Displacement Oval Gear Flow Meter",
                  "manufacturer": "KROHNE",
                  "model": "BM 100",
                  "flowRange": "0.15-3000 L/min (depending on size)",
                  "accuracy": "±0.2% of reading",
                  "repeatability": "±0.05% of reading",
                  "operatingTemp": "-20°C to +60°C (transmitter)",
                  "processTemp": "-40°C to +200°C (meter)",
                  "protectionRating": "IP67",
                  "powerSupply": "12-35VDC"
                }
              },
              {
                "id": "krohne-optiflux-flow-meter",
                "slug": "krohne-optiflux-flow-meter--meter",
                "image": "transmitters",
                "title": "KROHNE OPTIFLUX 4300 Electromagnetic Flow Meter",
                "description": "Electromagnetic Flow Meter with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±0.5% of reading accuracy",
                  "Operating temperature: -40°C to +180°C"
                ],
                "specs": {
                  "type": "Electromagnetic Flow Meter",
                  "manufacturer": "KROHNE",
                  "model": "OPTIFLUX 4300",
                  "flowRange": "0.01-15 m/s",
                  "accuracy": "±0.5% of reading",
                  "conductivity": "≥5 µS/cm",
                  "pressure": "40 bar",
                  "temperature": "-40°C to +180°C"
                }
              }
            ]
          },
          {
            "key": "mass-flow-meter",
            "slug": "mass-flow-meters",
            "title": "Title",
            "description": "Description",
            "image": "coriolis-flowmeter-endress",
            "featuredSpecs": [
              "manufacturer",
              "model",
              "type"
            ],
            "products": [
              {
                "id": "emerson-micro-motion-cmf300",
                "slug": "emerson-micro-motion-cmf300-cmf300",
                "image": "mass-flowmeter-emerson",
                "title": "Emerson/Micro Motion CMF300 with MVD Multi-Variable Transmitter Coriolis Mass Flow Meter",
                "description": "Coriolis Mass Flow Meter with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±0.05% of reading (mass flow) accuracy"
                ],
                "specs": {
                  "type": "Coriolis Mass Flow Meter",
                  "manufacturer": "Emerson/Micro Motion",
                  "model": "CMF300 with MVD Multi-Variable Transmitter",
                  "flowRate": "0-2700 kg/min (depending on size)",
                  "accuracy": "±0.05% of reading (mass flow)",
                  "repeatability": "±0.02% of reading",
                  "operatingTemp": "-40°C to +60°C (transmitter)",
                  "processTemp": "-240°C to +350°C (sensor)"
                }
              },
              {
                "id": "endress-hauser-promass-83f",
                "slug": "endress-hauser-promass-83f-ss-83f",
                "image": "mass-flowmeter-endress",
                "title": "Endress+Hauser Promass 83F Coriolis Mass Flow Meter",
                "description": "Coriolis Mass Flow Meter with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±0.05% of reading (mass flow) accuracy"
                ],
                "specs": {
                  "type": "Coriolis Mass Flow Meter",
                  "manufacturer": "Endress+Hauser",
                  "model": "Promass 83F",
                  "flowRate": "0-2200 kg/min (depending on size)",
                  "accuracy": "±0.05% of reading (mass flow)",
                  "repeatability": "±0.02% of reading",
                  "operatingTemp": "-40°C to +60°C (transmitter)",
                  "processTemp": "-200°C to +350°C (sensor)"
                }
              },
              {
                "id": "abb-sensyflow-cmf300",
                "slug": "abb-sensyflow-cmf300-cmf300",
                "image": "mass-flowmeter-abb",
                "title": "ABB SensyFlow CMF300 Coriolis Mass Flow Meter",
                "description": "Coriolis Mass Flow Meter with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±0.05% of reading (mass flow) accuracy"
                ],
                "specs": {
                  "type": "Coriolis Mass Flow Meter",
                  "manufacturer": "ABB",
                  "model": "SensyFlow CMF300",
                  "flowRate": "0-3000 kg/min (depending on size)",
                  "accuracy": "±0.05% of reading (mass flow)",
                  "repeatability": "±0.02% of reading",
                  "operatingTemp": "-40°C to +60°C (transmitter)",
                  "processTemp": "-200°C to +350°C (sensor)"
                }
              },
              {
                "id": "yokogawa-rotamass-rccs33",
                "slug": "yokogawa-rotamass-rccs33-rccs33",
                "image": "mass-flowmeter-yokogawa",
                "title": "Yokogawa ROTAMASS RCCS33 Coriolis Mass Flow Meter",
                "description": "Coriolis Mass Flow Meter with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±0.05% of reading (mass flow) accuracy"
                ],
                "specs": {
                  "type": "Coriolis Mass Flow Meter",
                  "manufacturer": "Yokogawa",
                  "model": "ROTAMASS RCCS33",
                  "flowRate": "0-1800 kg/min (depending on size)",
                  "accuracy": "±0.05% of reading (mass flow)",
                  "repeatability": "±0.02% of reading",
                  "operatingTemp": "-30°C to +60°C (transmitter)",
                  "processTemp": "-240°C to +350°C (sensor)"
                }
              },
              {
                "id": "endress-hauser-proline-t-mass-83a",
                "slug": "endress-hauser-proline-t-mass-83a-ss-83a",
                "image": "volumetric-flowmeter-endress",
                "title": "Endress+Hauser Proline t-mass 83A Thermal Mass/Volumetric Flow Meter",
                "description": "Thermal Mass/Volumetric Flow Meter with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±1.5% of measured value ±0.3% of full scale accuracy"
                ],
                "specs": {
                  "type": "Thermal Mass/Volumetric Flow Meter",
                  "manufacturer": "Endress+Hauser",
                  "model": "Proline t-mass 83A",
                  "accuracy": "±1.5% of measured value ±0.3% of full scale",
                  "repeatability": "±0.5% of measured value",
                  "operatingTemp": "-40°C to +60°C (transmitter)",
                  "processTemp": "-40°C to +200°C (sensor)",
                  "powerSupply": "10.5-55VDC"
                }
              },
              {
                "id": "sierra-instruments-640s-mass",
                "slug": "sierra-instruments-640s-mass-s-mass",
                "image": "volumetric-flowmeter-sierra",
                "title": "Sierra Instruments 640S QuadraTherm Thermal Mass Flow Meter",
                "description": "Thermal Mass Flow Meter with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±1.0% of reading ±0.5% of full scale accuracy"
                ],
                "specs": {
                  "type": "Thermal Mass Flow Meter",
                  "manufacturer": "Sierra Instruments",
                  "model": "640S QuadraTherm",
                  "flowRange": "0-20 SFPS to 0-500 SFPS",
                  "accuracy": "±1.0% of reading ±0.5% of full scale",
                  "repeatability": "±0.2% of reading",
                  "operatingTemp": "-40°C to +60°C (transmitter)",
                  "processTemp": "-40°C to +232°C (sensor)",
                  "protectionRating": "IP67",
                  "powerSupply": "12-35VDC"
                }
              }
            ]
          },
          {
            "key": "vortex-flow-meter",
            "slug": "vortex-flow-meters",
            "title": "Title",
            "description": "Description",
            "image": "vortex-flowmeter-yokogawa",
            "featuredSpecs": [
              "manufacturer",
              "model",
              "type"
            ],
            "products": [
              {
                "id": "endress-hauser-prowirl-f200",
                "slug": "endress-hauser-prowirl-f200-l-f200",
                "image": "vortex-flowmeter-endress",
                "title": "Endress+Hauser Prowirl F 200 Vortex Flow Meter",
                "description": "Vortex Flow Meter with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "Vortex Flow Meter",
                  "manufacturer": "Endress+Hauser",
                  "model": "Prowirl F 200",
                  "repeatability": "±0.2% of reading",
                  "operatingTemp": "-40°C to +60°C (transmitter)",
                  "processTemp": "-200°C to +400°C (sensor)",
                  "powerSupply": "10.5-55VDC"
                }
              },
              {
                "id": "rosemount-8800d-vortex",
                "slug": "rosemount-8800d-vortex-vortex",
                "image": "vortex-flowmeter-rosemount",
                "title": "Emerson/Rosemount 8800D Vortex Flow Meter with Multivariable Output",
                "description": "Vortex Flow Meter with Multivariable Output with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "Vortex Flow Meter with Multivariable Output",
                  "manufacturer": "Emerson/Rosemount",
                  "model": "8800D",
                  "repeatability": "±0.1% of reading",
                  "operatingTemp": "-40°C to +60°C (transmitter)",
                  "processTemp": "-196°C to +400°C (sensor)",
                  "protectionRating": "IP67",
                  "powerSupply": "10.5-55VDC"
                }
              },
              {
                "id": "yokogawa-digitalyewflo-avf",
                "slug": "yokogawa-digitalyewflo-avf-lo-avf",
                "image": "vortex-flowmeter-yokogawa",
                "title": "Yokogawa digitalYEWFLO AVF Digital Vortex Flow Meter",
                "description": "Digital Vortex Flow Meter with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "Digital Vortex Flow Meter",
                  "manufacturer": "Yokogawa",
                  "model": "digitalYEWFLO AVF",
                  "repeatability": "±0.2% of reading",
                  "operatingTemp": "-40°C to +60°C (transmitter)",
                  "processTemp": "-196°C to +400°C (sensor)",
                  "protectionRating": "IP67",
                  "powerSupply": "10.5-55VDC"
                }
              }
            ]
          },
          {
            "key": "volumetric-flow-meter",
            "slug": "volumetric-flow-meters",
            "title": "Title",
            "description": "Description",
            "image": "volumetric-flowmeter-abb",
            "featuredSpecs": [
              "manufacturer",
              "model",
              "type"
            ],
            "products": []
          },
          {
            "key": "miscellaneous",
            "slug": "miscellaneous-transmitters-flow-meters",
            "title": "Other transmitters flow meters",
            "description": "Additional transmitters flow meters products for specialized industrial applications.",
            "image": "miscellaneous",
            "featuredSpecs": [
              "manufacturer",
              "model",
              "type"
            ],
            "products": [
              {
                "id": "oval-flowpet-lsf41",
                "slug": "oval-flowpet-lsf41--lsf41",
                "image": "pd-flowmeter-oval",
                "title": "OVAL Corporation FLOWPET LSF41 Positive Displacement Flow Meter (PD)",
                "description": "Positive Displacement Flow Meter (PD) with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±0.1% of reading accuracy"
                ],
                "specs": {
                  "type": "Positive Displacement Flow Meter (PD)",
                  "manufacturer": "OVAL Corporation",
                  "model": "FLOWPET LSF41",
                  "flowRange": "0.05-1500 L/min (depending on size)",
                  "accuracy": "±0.1% of reading",
                  "repeatability": "±0.02% of reading",
                  "operatingTemp": "-20°C to +60°C (transmitter)",
                  "processTemp": "-20°C to +120°C (meter)",
                  "protectionRating": "IP67",
                  "powerSupply": "12-35VDC"
                }
              },
              {
                "id": "kral-volumeter-omg",
                "slug": "kral-volumeter-omg-er-omg",
                "image": "pd-flowmeter-kral",
                "title": "KRAL AG VoluMeter OMG Positive Displacement Screw Flow Meter",
                "description": "Positive Displacement Screw Flow Meter with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±0.1% of reading accuracy"
                ],
                "specs": {
                  "type": "Positive Displacement Screw Flow Meter",
                  "manufacturer": "KRAL AG",
                  "model": "VoluMeter OMG",
                  "flowRange": "0.5-1200 L/min (depending on size)",
                  "accuracy": "±0.1% of reading",
                  "repeatability": "±0.02% of reading",
                  "operatingTemp": "-20°C to +60°C (transmitter)",
                  "processTemp": "-40°C to +200°C (meter)",
                  "protectionRating": "IP67",
                  "powerSupply": "12-35VDC"
                }
              },
              {
                "id": "endress-hauser-fmr20-radar-level",
                "slug": "endress-hauser-fmr20-radar-level--level",
                "image": "transmitters",
                "title": "Endress+Hauser Micropilot FMR20 Radar Level Transmitter",
                "description": "Radar Level Transmitter with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±3mm accuracy"
                ],
                "specs": {
                  "type": "Radar Level Transmitter",
                  "manufacturer": "Endress+Hauser",
                  "model": "Micropilot FMR20",
                  "measurementRange": "0.4m to 35m",
                  "accuracy": "±3mm",
                  "output": "4-20mA + HART",
                  "frequency": "26 GHz",
                  "protectionRating": "IP67",
                  "powerSupply": "11-36VDC",
                  "operatingTemp": "-40°C to +150°C"
                }
              },
              {
                "id": "endress-hauser-liquiline-m-cm42",
                "slug": "endress-hauser-liquiline-m-cm42-m-cm42",
                "image": "transmitters",
                "title": "Endress+Hauser Liquiline M CM42 Universal Analytical Transmitter",
                "description": "Universal Analytical Transmitter with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±0.02 pH accuracy"
                ],
                "specs": {
                  "type": "Universal Analytical Transmitter",
                  "manufacturer": "Endress+Hauser",
                  "model": "Liquiline M CM42",
                  "accuracy": "±0.02 pH",
                  "output": "4-20mA + HART",
                  "display": "4-line backlit LCD",
                  "powerSupply": "20-253VAC / 20-55VDC",
                  "protectionRating": "IP66/IP67",
                  "operatingTemp": "-20°C to +60°C",
                  "mounting": "Wall/Panel/Pipe Mount"
                }
              },
              {
                "id": "rosemount-wireless-1420-gateway",
                "slug": "rosemount-wireless-1420-gateway-ateway",
                "image": "transmitters",
                "title": "Rosemount (Emerson) 1420 Wireless Gateway",
                "description": "Wireless Gateway with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "Wireless Gateway",
                  "manufacturer": "Rosemount (Emerson)",
                  "model": "1420",
                  "protocol": "WirelessHART",
                  "deviceCapacity": "100 field devices",
                  "range": "Up to 500m line-of-sight",
                  "powerSupply": "24VDC ±10%",
                  "protectionRating": "IP66",
                  "operatingTemp": "-40°C to +85°C",
                  "antennaGain": "2.1 dBi"
                }
              },
              {
                "id": "flintec-pc2-load-cell",
                "slug": "flintec-pc2-load-cell-d-cell",
                "image": "transmitters",
                "title": "Flintec PC2 Compression Load Cell",
                "description": "Compression Load Cell with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±C3 (0.02%) accuracy",
                  "Operating temperature: -30°C to +70°C"
                ],
                "specs": {
                  "type": "Compression Load Cell",
                  "manufacturer": "Flintec",
                  "model": "PC2",
                  "capacity": "0.5t-50t",
                  "accuracy": "C3 (0.02%)",
                  "material": "Tool Steel",
                  "protection": "IP67",
                  "temperature": "-30°C to +70°C",
                  "excitation": "5-15VDC"
                }
              },
              {
                "id": "vega-vegapuls-radar-level",
                "slug": "vega-vegapuls-radar-level--level",
                "image": "transmitters",
                "title": "VEGA VEGAPULS 64 Radar Level Transmitter",
                "description": "Radar Level Transmitter with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±2 mm accuracy",
                  "Operating temperature: -196°C to +450°C"
                ],
                "specs": {
                  "type": "Radar Level Transmitter",
                  "manufacturer": "VEGA",
                  "model": "VEGAPULS 64",
                  "frequency": "80 GHz",
                  "range": "30 m",
                  "accuracy": "±2 mm",
                  "beamAngle": "3°",
                  "temperature": "-196°C to +450°C",
                  "pressure": "-1 to +160 bar"
                }
              }
            ]
          }
        ]
      },
      {
        "key": "analyzers-process-gas",
        "title": "Analyzers",
        "description": "Professional analyzers process gas for industrial applications",
        "productGroups": [
          {
            "key": "process-analyzers",
            "slug": "process-analyzers",
            "title": "Title",
            "description": "Description",
            "image": "process-analyzer",
            "featuredSpecs": [
              "manufacturer",
              "model",
              "type"
            ],
            "products": []
          },
          {
            "key": "gas-analyzers",
            "slug": "gas-analyzers",
            "title": "Title",
            "description": "Description",
            "image": "gas-analyzer",
            "featuredSpecs": [
              "manufacturer",
              "model",
              "type"
            ],
            "products": [
              {
                "id": "analyzer-gas-chromatography-spectrometry",
                "slug": "analyzer-gas-chromatography-spectrometry-ometry",
                "image": "analyzers",
                "title": "ANALYZER-GAS-CHROMATOGRAPHY-SPECTROMETRY GC-MS",
                "description": "GC-MS with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "GC-MS",
                  "detectionLimit": "ppb level",
                  "analysisTime": "5-30 minutes",
                  "automation": "Fully Automated"
                }
              },
              {
                "id": "nova-multi-gas-co2-analyzer",
                "slug": "nova-multi-gas-co2-analyzer-alyzer",
                "image": "analyzers",
                "title": "Nova Analytical Systems Multi-Gas CO2",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "manufacturer": "Nova Analytical Systems",
                  "model": "Multi-Gas CO2",
                  "technology": "NDIR + Correction Algorithms",
                  "correction": "5-gas algorithm",
                  "pressure": "Up to 350 kPa (50 psig)"
                }
              }
            ]
          },
          {
            "key": "liquid-analyzers",
            "slug": "liquid-analyzers",
            "title": "Title",
            "description": "Description",
            "image": "liquid-analyzer",
            "featuredSpecs": [
              "manufacturer",
              "model",
              "type"
            ],
            "products": [
              {
                "id": "analyzer-liquid-ph-conductivity",
                "slug": "analyzer-liquid-ph-conductivity-tivity",
                "image": "analyzers",
                "title": "ANALYZER-LIQUID-PH-CONDUCTIVITY pH/Conductivity",
                "description": "pH/Conductivity with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±0.01 pH accuracy",
                  "Operating temperature: -10°C to +100°C"
                ],
                "specs": {
                  "type": "pH/Conductivity",
                  "pHRange": "0-14 pH",
                  "accuracy": "±0.01 pH",
                  "conductivityRange": "0.1 μS to 200 mS",
                  "temperature": "-10°C to +100°C"
                }
              }
            ]
          },
          {
            "key": "oxygen-gas-analyzers",
            "slug": "oxygen-gas-analyzers",
            "title": "Oxygen gas analyzers",
            "description": "Professional oxygen gas analyzers for industrial applications.",
            "image": "gas-analyzer",
            "featuredSpecs": [
              "manufacturer",
              "model",
              "technology",
              "range"
            ],
            "products": [
              {
                "id": "analyzer-oxygen-carbon-dioxide",
                "slug": "analyzer-oxygen-carbon-dioxide-ioxide",
                "image": "analyzers",
                "title": "ANALYZER-OXYGEN-CARBON-DIOXIDE O2/CO2 Analyzer",
                "description": "O2/CO2 Analyzer with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±1% FS accuracy"
                ],
                "specs": {
                  "type": "O2/CO2 Analyzer",
                  "oxygenRange": "0-100% O2",
                  "co2Range": "0-100% CO2",
                  "accuracy": "±1% FS",
                  "responseTime": "<30 seconds"
                }
              },
              {
                "id": "systech-ec900-oxygen-analyzer",
                "slug": "systech-ec900-oxygen-analyzer-alyzer",
                "image": "analyzers",
                "title": "Systech (Industrial Physics) EC900 Series",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±2% of reading accuracy",
                  "Operating temperature: -10°C to +60°C"
                ],
                "specs": {
                  "manufacturer": "Systech (Industrial Physics)",
                  "model": "EC900 Series",
                  "technology": "Electrochemical",
                  "range": "20 ppm to 100% O2",
                  "accuracy": "±2% of reading",
                  "responseTime": "90 seconds (T90)",
                  "temperature": "-10°C to +60°C"
                }
              },
              {
                "id": "panametrics-xmo2pro-oxygen-analyzer",
                "slug": "panametrics-xmo2pro-oxygen-analyzer-alyzer",
                "image": "analyzers",
                "title": "Panametrics (Baker Hughes) XMO2pro",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±0.5% FS accuracy"
                ],
                "specs": {
                  "manufacturer": "Panametrics (Baker Hughes)",
                  "model": "XMO2pro",
                  "technology": "Paramagnetic",
                  "range": "0-100% O2",
                  "accuracy": "±0.5% FS",
                  "responseTime": "<30 seconds",
                  "certification": "SIL 2 certified"
                }
              },
              {
                "id": "endress-hauser-oxy5500-analyzer",
                "slug": "endress-hauser-oxy5500-analyzer-alyzer",
                "image": "analyzers",
                "title": "Endress+Hauser OXY5500",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±1% of reading accuracy"
                ],
                "specs": {
                  "manufacturer": "Endress+Hauser",
                  "model": "OXY5500",
                  "technology": "Quenched Fluorescence",
                  "range": "0-100% O2",
                  "accuracy": "±1% of reading",
                  "protection": "IP66/IP67"
                }
              }
            ]
          },
          {
            "key": "nitrogen-gas-analyzers",
            "slug": "nitrogen-gas-analyzers",
            "title": "Nitrogen gas analyzers",
            "description": "Professional nitrogen gas analyzers for industrial applications.",
            "image": "gas-analyzer",
            "featuredSpecs": [
              "manufacturer",
              "model",
              "technology",
              "range"
            ],
            "products": [
              {
                "id": "leco-onh836-nitrogen-analyzer",
                "slug": "leco-onh836-nitrogen-analyzer-alyzer",
                "image": "analyzers",
                "title": "LECO Corporation ONH836",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±0.5% relative accuracy"
                ],
                "specs": {
                  "manufacturer": "LECO Corporation",
                  "model": "ONH836",
                  "technology": "Inert Gas Fusion + NDIR/TC",
                  "analysisTime": "2-4 minutes",
                  "accuracy": "±0.5% relative"
                }
              },
              {
                "id": "horiba-emga-nitrogen-analyzer",
                "slug": "horiba-emga-nitrogen-analyzer-alyzer",
                "image": "analyzers",
                "title": "HORIBA Scientific EMGA Series",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "manufacturer": "HORIBA Scientific",
                  "model": "EMGA Series",
                  "technology": "High-frequency Combustion",
                  "industry": "Steel Industry",
                  "analysisType": "Trace Analysis",
                  "detectionLimit": "ppm levels"
                }
              }
            ]
          },
          {
            "key": "hydrogen-gas-analyzers",
            "slug": "hydrogen-gas-analyzers",
            "title": "Hydrogen gas analyzers",
            "description": "Professional hydrogen gas analyzers for industrial applications.",
            "image": "gas-analyzer",
            "featuredSpecs": [
              "manufacturer",
              "model",
              "technology",
              "range"
            ],
            "products": [
              {
                "id": "nova-h2-thermal-conductivity-analyzer",
                "slug": "nova-h2-thermal-conductivity-analyzer-alyzer",
                "image": "analyzers",
                "title": "Nova Analytical Systems H2 Analyzer Series",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "manufacturer": "Nova Analytical Systems",
                  "model": "H2 Analyzer Series",
                  "technology": "Thermal Conductivity",
                  "range": "0-100% H2 (binary mixtures)",
                  "safetyRange": "4-74% in air",
                  "power": "60-300W"
                }
              },
              {
                "id": "endress-hauser-ss2100-hydrogen-analyzer",
                "slug": "endress-hauser-ss2100-hydrogen-analyzer-alyzer",
                "image": "analyzers",
                "title": "Endress+Hauser SS2100a",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "manufacturer": "Endress+Hauser",
                  "model": "SS2100a",
                  "technology": "TDLAS"
                }
              }
            ]
          },
          {
            "key": "carbon-dioxide-gas-analyzers",
            "slug": "carbon-dioxide-gas-analyzers",
            "title": "Carbon dioxide gas analyzers",
            "description": "Professional carbon dioxide gas analyzers for industrial applications.",
            "image": "gas-analyzer",
            "featuredSpecs": [
              "manufacturer",
              "model",
              "technology",
              "range"
            ],
            "products": [
              {
                "id": "endress-hauser-ss2100-co2-analyzer",
                "slug": "endress-hauser-ss2100-co2-analyzer-alyzer",
                "image": "analyzers",
                "title": "Endress+Hauser SS2100 CO2",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±1% of reading accuracy"
                ],
                "specs": {
                  "manufacturer": "Endress+Hauser",
                  "model": "SS2100 CO2",
                  "technology": "NDIR",
                  "range": "0-10 ppmv to 0-20% volume",
                  "accuracy": "±1% of reading",
                  "responseTime": "T90 < 60 seconds"
                }
              }
            ]
          },
          {
            "key": "cod-analyzers",
            "slug": "cod-analyzers",
            "title": "Cod analyzers",
            "description": "Professional cod analyzers for industrial applications.",
            "image": "liquid-analyzer",
            "featuredSpecs": [
              "manufacturer",
              "model",
              "method",
              "range"
            ],
            "products": [
              {
                "id": "hach-ez-series-cod-analyzer",
                "slug": "hach-ez-series-cod-analyzer-alyzer",
                "image": "analyzers",
                "title": "Hach (Danaher) EZ Series COD",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±5-10% relative accuracy"
                ],
                "specs": {
                  "manufacturer": "Hach (Danaher)",
                  "model": "EZ Series COD",
                  "method": "Dichromate",
                  "analysisTime": "2 hours",
                  "accuracy": "±5-10% relative",
                  "reagents": "TNTplus vials"
                }
              },
              {
                "id": "mantech-pecod-l50-analyzer",
                "slug": "mantech-pecod-l50-analyzer-alyzer",
                "image": "analyzers",
                "title": "MANTECH Inc. PeCOD L50",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "manufacturer": "MANTECH Inc.",
                  "model": "PeCOD L50",
                  "method": "UV-activated TiO2",
                  "analysisTime": "10 minutes",
                  "chemicals": "Chemical-free",
                  "approval": "MOECC Method E3515",
                  "weight": "Benchtop model"
                }
              },
              {
                "id": "lar-quickcodlab-analyzer",
                "slug": "lar-quickcodlab-analyzer-alyzer",
                "image": "analyzers",
                "title": "LAR Process Analysers QuickCODlab",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±3% accuracy"
                ],
                "specs": {
                  "manufacturer": "LAR Process Analysers",
                  "model": "QuickCODlab",
                  "method": "Thermal Combustion",
                  "analysisTime": "3 minutes",
                  "catalyst": "Catalyst-free",
                  "accuracy": "±3%"
                }
              }
            ]
          },
          {
            "key": "bod-analyzers",
            "slug": "bod-analyzers",
            "title": "Bod analyzers",
            "description": "Professional bod analyzers for industrial applications.",
            "image": "liquid-analyzer",
            "featuredSpecs": [
              "manufacturer",
              "model",
              "bottles",
              "analysis"
            ],
            "products": [
              {
                "id": "mantech-am400-bod-analyzer",
                "slug": "mantech-am400-bod-analyzer-alyzer",
                "image": "analyzers",
                "title": "MANTECH Inc. AM400 BOD Analyzer",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "manufacturer": "MANTECH Inc.",
                  "model": "AM400 BOD Analyzer",
                  "bottles": "12-108 positions",
                  "analysisTime": "90 seconds per bottle",
                  "probes": "Single/Dual/Triple DO",
                  "software": "BOD Pro Windows 10/11"
                }
              },
              {
                "id": "hach-bodtrak-ii-analyzer",
                "slug": "hach-bodtrak-ii-analyzer-alyzer",
                "image": "analyzers",
                "title": "Hach Company BODTrak II Respirometric",
                "description": "Respirometric with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "manufacturer": "Hach Company",
                  "model": "BODTrak II",
                  "type": "Respirometric",
                  "analysisTime": "2-3 days",
                  "technology": "LDO (Luminescent DO)",
                  "probes": "IntelliCAL LBOD101",
                  "stirring": "Integrated"
                }
              },
              {
                "id": "ysi-2900-bod-analyzer",
                "slug": "ysi-2900-bod-analyzer-alyzer",
                "image": "analyzers",
                "title": "YSI/Xylem Analytics YSI 2900 Two-chemistry analyzer",
                "description": "Two-chemistry analyzer with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Operating temperature: 20°C ± 1°C controlled"
                ],
                "specs": {
                  "manufacturer": "YSI/Xylem Analytics",
                  "model": "YSI 2900",
                  "type": "Two-chemistry analyzer",
                  "dataRetrieval": "USB",
                  "bottles": "Standard 300mL BOD",
                  "temperature": "20°C ± 1°C controlled"
                }
              }
            ]
          }
        ]
      }
    ]
  },
  "bldc": {
    "key": "bldc",
    "title": "BLDC Motor Systems",
    "description": "Advanced bldc for industrial applications",
    "subcategories": [
      {
        "key": "bldc-ceiling-fan",
        "title": "Bldc",
        "description": "Professional bldc ceiling fan for industrial applications",
        "productGroups": [
          {
            "key": "standard-ceiling-fans",
            "slug": "standard-ceiling-fans",
            "title": "Title",
            "description": "Description",
            "image": "bldc-ceiling-fan",
            "featuredSpecs": [
              "power",
              "speed",
              "airflow"
            ],
            "products": []
          },
          {
            "key": "premium-ceiling-fans",
            "slug": "premium-ceiling-fans",
            "title": "Title",
            "description": "Description",
            "image": "bldc-ceiling-fan",
            "featuredSpecs": [
              "power",
              "speed",
              "airflow"
            ],
            "products": []
          },
          {
            "key": "commercial-ceiling-fans",
            "slug": "commercial-ceiling-fans",
            "title": "Title",
            "description": "Description",
            "image": "bldc-ceiling-fan",
            "featuredSpecs": [
              "power",
              "speed",
              "airflow"
            ],
            "products": []
          },
          {
            "key": "miscellaneous",
            "slug": "miscellaneous-bldc-ceiling-fan",
            "title": "Other bldc ceiling fan",
            "description": "Additional bldc ceiling fan products for specialized industrial applications.",
            "image": "miscellaneous",
            "featuredSpecs": [
              "manufacturer",
              "model",
              "type"
            ],
            "products": [
              {
                "id": "bldc-smart1200",
                "slug": "bldc-smart-ceiling-fan-1200-rt1200",
                "image": "bldc-ceiling-fan",
                "title": "BLDC-SMART1200",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "100-240V AC operating voltage"
                ],
                "specs": {
                  "power": "48W",
                  "speed": "1200 RPM",
                  "airflow": "210 CMM",
                  "efficiency": "4.375 CMM/W",
                  "voltage": "100-240V AC",
                  "sweepDiameter": "1200mm",
                  "warranty": "3 Years",
                  "energyRating": "5 Star",
                  "remoteControl": "Yes",
                  "reversible": "Yes"
                }
              },
              {
                "id": "bldc-premium1400",
                "slug": "bldc-premium-ceiling-fan-1400-um1400",
                "image": "bldc-ceiling-fan",
                "title": "BLDC-PREMIUM1400",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "100-240V AC operating voltage"
                ],
                "specs": {
                  "power": "55W",
                  "speed": "1400 RPM",
                  "airflow": "250 CMM",
                  "efficiency": "4.545 CMM/W",
                  "voltage": "100-240V AC",
                  "sweepDiameter": "1400mm",
                  "warranty": "5 Years",
                  "energyRating": "5 Star",
                  "remoteControl": "Yes",
                  "reversible": "Yes"
                }
              },
              {
                "id": "bldc-commercial1500",
                "slug": "bldc-commercial-ceiling-fan-1500-al1500",
                "image": "bldc-ceiling-fan",
                "title": "BLDC-COMMERCIAL1500",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "100-240V AC operating voltage"
                ],
                "specs": {
                  "power": "65W",
                  "speed": "1500 RPM",
                  "airflow": "300 CMM",
                  "efficiency": "4.615 CMM/W",
                  "voltage": "100-240V AC",
                  "sweepDiameter": "1500mm",
                  "warranty": "7 Years",
                  "energyRating": "5 Star",
                  "remoteControl": "Yes",
                  "reversible": "Yes"
                }
              },
              {
                "id": "bldc-deluxe1600",
                "slug": "bldc-deluxe-ceiling-fan-1600-xe1600",
                "image": "bldc-ceiling-fan",
                "title": "BLDC-DELUXE1600",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "100-240V AC operating voltage"
                ],
                "specs": {
                  "power": "72W",
                  "speed": "1600 RPM",
                  "airflow": "350 CMM",
                  "efficiency": "4.86 CMM/W",
                  "voltage": "100-240V AC",
                  "sweepDiameter": "1600mm",
                  "warranty": "10 Years",
                  "energyRating": "5 Star",
                  "remoteControl": "Yes",
                  "reversible": "Yes"
                }
              },
              {
                "id": "bldc-industrial1800",
                "slug": "bldc-industrial-ceiling-fan-1800-al1800",
                "image": "bldc-ceiling-fan",
                "title": "BLDC-INDUSTRIAL1800",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "100-240V AC operating voltage"
                ],
                "specs": {
                  "power": "85W",
                  "speed": "1800 RPM",
                  "airflow": "420 CMM",
                  "efficiency": "4.94 CMM/W",
                  "voltage": "100-240V AC",
                  "sweepDiameter": "1800mm",
                  "warranty": "5 Years",
                  "energyRating": "5 Star",
                  "remoteControl": "Yes",
                  "reversible": "Yes"
                }
              },
              {
                "id": "bldc-economy900",
                "slug": "bldc-economy-ceiling-fan-900-omy900",
                "image": "bldc-ceiling-fan",
                "title": "BLDC-ECONOMY900",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "100-240V AC operating voltage"
                ],
                "specs": {
                  "power": "35W",
                  "speed": "900 RPM",
                  "airflow": "180 CMM",
                  "efficiency": "5.14 CMM/W",
                  "voltage": "100-240V AC",
                  "sweepDiameter": "900mm",
                  "warranty": "2 Years",
                  "energyRating": "5 Star",
                  "remoteControl": "Optional",
                  "reversible": "Yes"
                }
              }
            ]
          }
        ]
      },
      {
        "key": "bldc-cooler-exhaust-motor",
        "title": "Bldc",
        "description": "Professional bldc cooler exhaust motor for industrial applications",
        "productGroups": [
          {
            "key": "exhaust-fan-motors",
            "slug": "exhaust-fan-motors",
            "title": "Title",
            "description": "Description",
            "image": "bldc-exhaust-motor",
            "featuredSpecs": [
              "power",
              "voltage",
              "efficiency"
            ],
            "products": [
              {
                "id": "bldc-exhaust-fan-motor",
                "slug": "bldc-exhaust-fan-motor--motor",
                "image": "bldc-cooler-exhaust-motor",
                "title": "BLDC-EXHAUST-FAN-MOTOR",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "12V DC operating voltage"
                ],
                "specs": {
                  "power": "25W",
                  "speed": "2800 RPM",
                  "airflow": "150 CFM",
                  "voltage": "12V DC",
                  "efficiency": "85%",
                  "bearingType": "Ball Bearing",
                  "protectionClass": "IP44",
                  "operatingTemp": "-10°C to +60°C",
                  "warranty": "2 Years"
                }
              },
              {
                "id": "bldc-cooler-motors",
                "slug": "bldc-cooler-motors-motors",
                "image": "bldc-cooler-exhaust-motor",
                "title": "BLDC-COOLER-MOTORS",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "24V DC operating voltage"
                ],
                "specs": {
                  "power": "45W",
                  "speed": "1800 RPM",
                  "airflow": "400 CFM",
                  "voltage": "24V DC",
                  "efficiency": "90%",
                  "bearingType": "Ball Bearing",
                  "protectionClass": "IP54",
                  "operatingTemp": "-10°C to +70°C",
                  "warranty": "3 Years"
                }
              },
              {
                "id": "bldc-ventilation-motors",
                "slug": "bldc-ventilation-motors-motors",
                "image": "bldc-cooler-exhaust-motor",
                "title": "BLDC-VENTILATION-MOTORS",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "24V DC operating voltage"
                ],
                "specs": {
                  "power": "35W",
                  "speed": "2200 RPM",
                  "airflow": "280 CFM",
                  "voltage": "24V DC",
                  "efficiency": "88%",
                  "bearingType": "Sleeve Bearing",
                  "protectionClass": "IP44",
                  "operatingTemp": "-5°C to +55°C",
                  "warranty": "2 Years"
                }
              },
              {
                "id": "bldc-industrial-exhaust",
                "slug": "bldc-industrial-exhaust-fan-xhaust",
                "image": "bldc-cooler-exhaust-motor",
                "title": "BLDC-INDUSTRIAL-EXHAUST",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "48V DC operating voltage"
                ],
                "specs": {
                  "power": "120W",
                  "speed": "3200 RPM",
                  "airflow": "1200 CFM",
                  "voltage": "48V DC",
                  "efficiency": "94%",
                  "bearingType": "Ball Bearing",
                  "protectionClass": "IP67",
                  "operatingTemp": "-30°C to +85°C",
                  "warranty": "5 Years"
                }
              }
            ]
          },
          {
            "key": "cooler-motors",
            "slug": "cooler-motors",
            "title": "Title",
            "description": "Description",
            "image": "bldc-cooler-motor",
            "featuredSpecs": [
              "power",
              "voltage",
              "efficiency"
            ],
            "products": [
              {
                "id": "bldc-mini-cooler",
                "slug": "bldc-mini-cooler-motor-cooler",
                "image": "bldc-cooler-exhaust-motor",
                "title": "BLDC-MINI-COOLER",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "12V DC operating voltage"
                ],
                "specs": {
                  "power": "15W",
                  "speed": "1500 RPM",
                  "airflow": "90 CFM",
                  "voltage": "12V DC",
                  "efficiency": "82%",
                  "bearingType": "Sleeve Bearing",
                  "protectionClass": "IP40",
                  "operatingTemp": "0°C to +50°C",
                  "warranty": "1 Year"
                }
              }
            ]
          },
          {
            "key": "ventilation-motors",
            "slug": "ventilation-motors",
            "title": "Title",
            "description": "Description",
            "image": "bldc-ventilation-motor",
            "featuredSpecs": [
              "power",
              "voltage",
              "efficiency"
            ],
            "products": [
              {
                "id": "bldc-ventilation-system",
                "slug": "bldc-ventilation-system-system",
                "image": "bldc-cooler-exhaust-motor",
                "title": "BLDC-VENTILATION-SYSTEM",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "48V DC operating voltage"
                ],
                "specs": {
                  "power": "75W",
                  "speed": "2400 RPM",
                  "airflow": "800 CFM",
                  "voltage": "48V DC",
                  "efficiency": "92%",
                  "bearingType": "Ball Bearing",
                  "protectionClass": "IP65",
                  "operatingTemp": "-20°C to +80°C",
                  "warranty": "5 Years"
                }
              }
            ]
          }
        ]
      },
      {
        "key": "bldc-submersible-surface-pump",
        "title": "Bldc",
        "description": "Professional bldc submersible surface pump for industrial applications",
        "productGroups": [
          {
            "key": "submersible-pumps",
            "slug": "submersible-pumps",
            "title": "Title",
            "description": "Description",
            "image": "bldc-submersible-pump",
            "featuredSpecs": [
              "power",
              "head",
              "flow"
            ],
            "products": [
              {
                "id": "solar-bldc-submersible-1hp",
                "slug": "solar-bldc-submersible-pump-1hp-le-1hp",
                "image": "bldc-submersible-surface-pump",
                "title": "SOLAR-BLDC-SUBMERSIBLE-1HP",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "48V DC operating voltage"
                ],
                "specs": {
                  "power": "1 HP",
                  "flow": "1800 LPH",
                  "head": "100 ft",
                  "voltage": "48V DC",
                  "solarCompatible": "Yes"
                }
              }
            ]
          },
          {
            "key": "surface-pumps",
            "slug": "surface-pumps",
            "title": "Title",
            "description": "Description",
            "image": "bldc-surface-pump",
            "featuredSpecs": [
              "power",
              "head",
              "flow"
            ],
            "products": [
              {
                "id": "dc-surface-pump-2hp",
                "slug": "dc-surface-pump-2hp-mp-2hp",
                "image": "bldc-submersible-surface-pump",
                "title": "DC-SURFACE-PUMP-2HP",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "72V DC operating voltage"
                ],
                "specs": {
                  "power": "2 HP",
                  "flow": "3600 LPH",
                  "head": "150 ft",
                  "voltage": "72V DC",
                  "selfPriming": "Yes"
                }
              }
            ]
          },
          {
            "key": "hybrid-pumps",
            "slug": "hybrid-pumps",
            "title": "Title",
            "description": "Description",
            "image": "bldc-hybrid-pump",
            "featuredSpecs": [
              "power",
              "head",
              "flow"
            ],
            "products": [
              {
                "id": "hybrid-bldc-pump",
                "slug": "hybrid-bldc-pump-system-c-pump",
                "image": "bldc-submersible-surface-pump",
                "title": "HYBRID-BLDC-PUMP",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "48V DC / 230V AC operating voltage"
                ],
                "specs": {
                  "power": "1.5 HP",
                  "flow": "2700 LPH",
                  "head": "120 ft",
                  "voltage": "48V DC / 230V AC",
                  "hybridOperation": "Yes"
                }
              }
            ]
          }
        ]
      },
      {
        "key": "bldc-table-fan-wall-fan-motor",
        "title": "Bldc",
        "description": "Professional bldc table fan wall fan motor for industrial applications",
        "productGroups": [
          {
            "key": "table-fan-motors",
            "slug": "table-fan-motors",
            "title": "Title",
            "description": "Description",
            "image": "bldc-table-fan-motor",
            "featuredSpecs": [
              "power",
              "speed",
              "voltage"
            ],
            "products": [
              {
                "id": "bldc-table-fan-motors",
                "slug": "bldc-table-fan-motors-motors",
                "image": "bldc-table-fan-wall-fan-motor",
                "title": "BLDC-TABLE-FAN-MOTORS",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "24V DC operating voltage"
                ],
                "specs": {
                  "power": "28W",
                  "speed": "2100 RPM",
                  "diameter": "400mm",
                  "voltage": "24V DC",
                  "remoteControl": "Yes"
                }
              },
              {
                "id": "bldc-wall-fan-motors",
                "slug": "bldc-wall-fan-motors-motors",
                "image": "bldc-table-fan-wall-fan-motor",
                "title": "BLDC-WALL-FAN-MOTORS",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "24V DC operating voltage"
                ],
                "specs": {
                  "power": "35W",
                  "speed": "1800 RPM",
                  "diameter": "450mm",
                  "voltage": "24V DC",
                  "oscillation": "Yes"
                }
              },
              {
                "id": "bldc-pedestal-fan-motors",
                "slug": "bldc-pedestal-fan-motors-motors",
                "image": "bldc-table-fan-wall-fan-motor",
                "title": "BLDC-PEDESTAL-FAN-MOTORS",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "24V DC operating voltage"
                ],
                "specs": {
                  "power": "42W",
                  "speed": "1900 RPM",
                  "diameter": "500mm",
                  "voltage": "24V DC",
                  "heightAdjustment": "Yes"
                }
              }
            ]
          },
          {
            "key": "wall-fan-motors",
            "slug": "wall-fan-motors",
            "title": "Title",
            "description": "Description",
            "image": "bldc-wall-fan-motor",
            "featuredSpecs": [
              "power",
              "speed",
              "voltage"
            ],
            "products": []
          },
          {
            "key": "pedestal-fan-motors",
            "slug": "pedestal-fan-motors",
            "title": "Title",
            "description": "Description",
            "image": "bldc-pedestal-fan-motor",
            "featuredSpecs": [
              "power",
              "speed",
              "voltage"
            ],
            "products": []
          }
        ]
      }
    ]
  },
  "electrical-components": {
    "key": "electrical-components",
    "title": "Electrical Components",
    "description": "Advanced electrical components for industrial applications",
    "subcategories": [
      {
        "key": "cables-wires",
        "title": "Cables",
        "description": "Professional cables wires for industrial applications",
        "productGroups": [
          {
            "key": "power-cables",
            "slug": "power-cables",
            "title": "Title",
            "description": "Description",
            "image": "power-cable",
            "featuredSpecs": [
              "conductor",
              "voltage",
              "insulation"
            ],
            "products": [
              {
                "id": "instrumentation-cables",
                "slug": "instrumentation-cables-cables",
                "image": "cables-wires",
                "title": "INSTRUMENTATION-CABLES Shielded Twisted Pair",
                "description": "Shielded Twisted Pair with advanced features for reliable performance in industrial applications.",
                "features": [
                  "300V operating voltage",
                  "Operating temperature: -40°C to +90°C"
                ],
                "specs": {
                  "type": "Shielded Twisted Pair",
                  "awg": "18-22 AWG",
                  "voltage": "300V",
                  "temperature": "-40°C to +90°C",
                  "shielding": "100% Coverage"
                }
              },
              {
                "id": "power-distribution-cables",
                "slug": "power-distribution-cables-cables",
                "image": "cables-wires",
                "title": "POWER-DISTRIBUTION-CABLES XLPE Insulated",
                "description": "XLPE Insulated with advanced features for reliable performance in industrial applications.",
                "features": [
                  "1kV - 33kV operating voltage",
                  "Operating temperature: 90°C"
                ],
                "specs": {
                  "type": "XLPE Insulated",
                  "voltage": "1kV - 33kV",
                  "conductor": "Copper/Aluminum",
                  "temperature": "90°C",
                  "standard": "IS 7098"
                }
              },
              {
                "id": "communication-cables",
                "slug": "communication-cables-cables",
                "image": "cables-wires",
                "title": "COMMUNICATION-CABLES Category 6A",
                "description": "Category 6A with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "Category 6A",
                  "bandwidth": "500 MHz",
                  "length": "100m",
                  "shielding": "F/UTP",
                  "standard": "TIA/EIA-568-B"
                }
              },
              {
                "id": "cable-power-distribution-medium-voltage",
                "slug": "cable-power-distribution-medium-voltage-oltage",
                "image": "cables-wires",
                "title": "CABLE-POWER-DISTRIBUTION-MEDIUM-VOLTAGE MV Power Cable",
                "description": "MV Power Cable with advanced features for reliable performance in industrial applications.",
                "features": [
                  "11kV - 33kV operating voltage"
                ],
                "specs": {
                  "type": "MV Power Cable",
                  "voltage": "11kV - 33kV",
                  "conductor": "XLPE",
                  "armoring": "SWA",
                  "standard": "IEC 60502"
                }
              }
            ]
          },
          {
            "key": "control-cables",
            "slug": "control-cables",
            "title": "Title",
            "description": "Description",
            "image": "control-cable",
            "featuredSpecs": [
              "conductor",
              "voltage",
              "shielding"
            ],
            "products": []
          },
          {
            "key": "instrumentation-cables",
            "slug": "instrumentation-cables",
            "title": "Title",
            "description": "Description",
            "image": "instrumentation-cable",
            "featuredSpecs": [
              "conductor",
              "voltage",
              "shielding"
            ],
            "products": [
              {
                "id": "cable-instrumentation-shielded",
                "slug": "cable-instrumentation-shielded-ielded",
                "image": "cables-wires",
                "title": "CABLE-INSTRUMENTATION-SHIELDED Instrumentation Cable",
                "description": "Instrumentation Cable with advanced features for reliable performance in industrial applications.",
                "features": [
                  "300V operating voltage",
                  "Operating temperature: -40°C to +90°C"
                ],
                "specs": {
                  "type": "Instrumentation Cable",
                  "pairs": "1-24 Pairs",
                  "shielding": "Individual + Overall",
                  "voltage": "300V",
                  "temperature": "-40°C to +90°C"
                }
              }
            ]
          },
          {
            "key": "miscellaneous",
            "slug": "miscellaneous-cables-wires",
            "title": "Other cables wires",
            "description": "Additional cables wires products for specialized industrial applications.",
            "image": "miscellaneous",
            "featuredSpecs": [
              "manufacturer",
              "model",
              "type"
            ],
            "products": [
              {
                "id": "cable-communication-fieldbus-ethernet",
                "slug": "cable-communication-fieldbus-ethernet-hernet",
                "image": "cables-wires",
                "title": "CABLE-COMMUNICATION-FIELDBUS-ETHERNET Fieldbus/Ethernet",
                "description": "Fieldbus/Ethernet with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "Fieldbus/Ethernet",
                  "shielding": "Foil + Braid",
                  "impedance": "120Ω ±9%",
                  "category": "Cat 5e/6A"
                }
              }
            ]
          }
        ]
      },
      {
        "key": "circuit-breakers-fuses",
        "title": "Circuit",
        "description": "Professional circuit breakers fuses for industrial applications",
        "productGroups": [
          {
            "key": "miniature-circuit-breakers",
            "slug": "miniature-circuit-breakers",
            "title": "Title",
            "description": "Description",
            "image": "mcb",
            "featuredSpecs": [
              "current",
              "voltage",
              "poles"
            ],
            "products": [
              {
                "id": "mcb-circuit-breakers",
                "slug": "mcb-miniature-circuit-breakers-eakers",
                "image": "circuit-breakers-fuses",
                "title": "MCB-CIRCUIT-BREAKERS MCB",
                "description": "MCB with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "MCB",
                  "current": "6A - 63A",
                  "breakingCapacity": "10kA",
                  "standard": "IEC 60898"
                }
              },
              {
                "id": "mccb-circuit-breakers",
                "slug": "mccb-molded-case-circuit-breakers-eakers",
                "image": "circuit-breakers-fuses",
                "title": "MCCB-CIRCUIT-BREAKERS MCCB",
                "description": "MCCB with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "MCCB",
                  "current": "16A - 1600A",
                  "breakingCapacity": "50kA",
                  "standard": "IEC 60947"
                }
              },
              {
                "id": "circuit-breaker-mcb-miniature",
                "slug": "circuit-breaker-mcb-miniature-iature",
                "image": "circuit-breakers-fuses",
                "title": "CIRCUIT-BREAKER-MCB-MINIATURE MCB",
                "description": "MCB with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "MCB",
                  "current": "6A - 63A",
                  "standard": "IEC 60898"
                }
              },
              {
                "id": "circuit-breaker-mccb-molded-case",
                "slug": "circuit-breaker-mccb-molded-case-d-case",
                "image": "circuit-breakers-fuses",
                "title": "CIRCUIT-BREAKER-MCCB-MOLDED-CASE MCCB",
                "description": "MCCB with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "MCCB",
                  "current": "16A - 1600A",
                  "breakingCapacity": "25-100kA",
                  "standard": "IEC 60947-2"
                }
              }
            ]
          },
          {
            "key": "molded-case-breakers",
            "slug": "molded-case-breakers",
            "title": "Title",
            "description": "Description",
            "image": "mccb",
            "featuredSpecs": [
              "current",
              "voltage",
              "breaking"
            ],
            "products": []
          },
          {
            "key": "fuses-holders",
            "slug": "fuses-holders",
            "title": "Title",
            "description": "Description",
            "image": "fuse",
            "featuredSpecs": [
              "current",
              "voltage",
              "type"
            ],
            "products": [
              {
                "id": "industrial-fuses",
                "slug": "industrial-fuses--fuses",
                "image": "circuit-breakers-fuses",
                "title": "INDUSTRIAL-FUSES HRC Fuses",
                "description": "HRC Fuses with advanced features for reliable performance in industrial applications.",
                "features": [
                  "415V - 11kV operating voltage"
                ],
                "specs": {
                  "type": "HRC Fuses",
                  "current": "2A - 800A",
                  "voltage": "415V - 11kV",
                  "breakingCapacity": "80kA",
                  "standard": "IEC 60269"
                }
              },
              {
                "id": "electrical-fuses-industrial-protection",
                "slug": "electrical-fuses-industrial-protection-ection",
                "image": "circuit-breakers-fuses",
                "title": "ELECTRICAL-FUSES-INDUSTRIAL-PROTECTION HRC Fuses",
                "description": "HRC Fuses with advanced features for reliable performance in industrial applications.",
                "features": [
                  "415V - 11kV operating voltage"
                ],
                "specs": {
                  "type": "HRC Fuses",
                  "current": "2A - 800A",
                  "voltage": "415V - 11kV",
                  "breakingCapacity": "80-120kA",
                  "standard": "IEC 60269"
                }
              }
            ]
          }
        ]
      },
      {
        "key": "connectors-terminals",
        "title": "Connectors",
        "description": "Professional connectors terminals for industrial applications",
        "productGroups": [
          {
            "key": "terminal-blocks",
            "slug": "terminal-blocks",
            "title": "Title",
            "description": "Description",
            "image": "terminal-block",
            "featuredSpecs": [
              "current",
              "voltage",
              "connection"
            ],
            "products": [
              {
                "id": "terminal-blocks",
                "slug": "industrial-terminal-blocks-blocks",
                "image": "connectors-terminals",
                "title": "TERMINAL-BLOCKS Screw/Spring Clamp",
                "description": "Screw/Spring Clamp with advanced features for reliable performance in industrial applications.",
                "features": [
                  "1000V operating voltage"
                ],
                "specs": {
                  "type": "Screw/Spring Clamp",
                  "current": "10A - 150A",
                  "voltage": "1000V",
                  "wireSize": "0.2 - 50 mm²",
                  "mounting": "DIN Rail"
                }
              },
              {
                "id": "connector-terminal-blocks-industrial",
                "slug": "connector-terminal-blocks-industrial-strial",
                "image": "connectors-terminals",
                "title": "CONNECTOR-TERMINAL-BLOCKS-INDUSTRIAL Terminal Blocks",
                "description": "Terminal Blocks with advanced features for reliable performance in industrial applications.",
                "features": [
                  "1000V operating voltage"
                ],
                "specs": {
                  "type": "Terminal Blocks",
                  "current": "5A - 150A",
                  "voltage": "1000V",
                  "wireSize": "0.2 - 50 mm²",
                  "mounting": "DIN Rail 35mm"
                }
              }
            ]
          },
          {
            "key": "electrical-connectors",
            "slug": "electrical-connectors",
            "title": "Title",
            "description": "Description",
            "image": "electrical-connector",
            "featuredSpecs": [
              "current",
              "voltage",
              "type"
            ],
            "products": [
              {
                "id": "industrial-connectors",
                "slug": "industrial-connectors-ectors",
                "image": "connectors-terminals",
                "title": "INDUSTRIAL-CONNECTORS Heavy Duty",
                "description": "Heavy Duty with advanced features for reliable performance in industrial applications.",
                "features": [
                  "690V operating voltage"
                ],
                "specs": {
                  "type": "Heavy Duty",
                  "pins": "3-128 Pins",
                  "current": "16A - 400A",
                  "voltage": "690V",
                  "rating": "IP67"
                }
              },
              {
                "id": "signal-connectors",
                "slug": "signal-connectors-ectors",
                "image": "connectors-terminals",
                "title": "SIGNAL-CONNECTORS Miniature",
                "description": "Miniature with advanced features for reliable performance in industrial applications.",
                "features": [
                  "250V operating voltage"
                ],
                "specs": {
                  "type": "Miniature",
                  "pins": "2-50 Pins",
                  "current": "5A",
                  "voltage": "250V",
                  "shielding": "360° EMI"
                }
              }
            ]
          },
          {
            "key": "industrial-plugs",
            "slug": "industrial-plugs",
            "title": "Title",
            "description": "Description",
            "image": "industrial-plug",
            "featuredSpecs": [
              "current",
              "voltage",
              "protection"
            ],
            "products": [
              {
                "id": "connector-industrial-heavy-duty",
                "slug": "connector-industrial-heavy-duty-y-duty",
                "image": "connectors-terminals",
                "title": "CONNECTOR-INDUSTRIAL-HEAVY-DUTY Heavy Duty Connector",
                "description": "Heavy Duty Connector with advanced features for reliable performance in industrial applications.",
                "features": [
                  "500V - 1000V operating voltage"
                ],
                "specs": {
                  "type": "Heavy Duty Connector",
                  "pins": "6-128 Pins",
                  "current": "10A - 400A",
                  "voltage": "500V - 1000V",
                  "protection": "IP65/IP67"
                }
              }
            ]
          },
          {
            "key": "miscellaneous",
            "slug": "miscellaneous-connectors-terminals",
            "title": "Other connectors terminals",
            "description": "Additional connectors terminals products for specialized industrial applications.",
            "image": "miscellaneous",
            "featuredSpecs": [
              "manufacturer",
              "model",
              "type"
            ],
            "products": [
              {
                "id": "connector-signal-precision-miniature",
                "slug": "connector-signal-precision-miniature-iature",
                "image": "connectors-terminals",
                "title": "CONNECTOR-SIGNAL-PRECISION-MINIATURE Precision Signal",
                "description": "Precision Signal with advanced features for reliable performance in industrial applications.",
                "features": [
                  "250V operating voltage"
                ],
                "specs": {
                  "type": "Precision Signal",
                  "pins": "2-50 Pins",
                  "current": "3A - 5A",
                  "voltage": "250V",
                  "shielding": "360° EMI Protection"
                }
              }
            ]
          }
        ]
      },
      {
        "key": "power-supplies",
        "title": "Power",
        "description": "Professional power supplies for industrial applications",
        "productGroups": [
          {
            "key": "ac-dc-converters",
            "slug": "ac-dc-converters",
            "title": "Title",
            "description": "Description",
            "image": "ac-dc-converter",
            "featuredSpecs": [
              "input",
              "output",
              "power"
            ],
            "products": []
          },
          {
            "key": "dc-dc-converters",
            "slug": "dc-dc-converters",
            "title": "Title",
            "description": "Description",
            "image": "dc-dc-converter",
            "featuredSpecs": [
              "input",
              "output",
              "power"
            ],
            "products": []
          },
          {
            "key": "ups-systems",
            "slug": "ups-systems",
            "title": "Title",
            "description": "Description",
            "image": "ups",
            "featuredSpecs": [
              "power",
              "backup",
              "efficiency"
            ],
            "products": [
              {
                "id": "power-supply-ups-uninterruptible",
                "slug": "power-supply-ups-uninterruptible-ptible",
                "image": "power-supplies",
                "title": "POWER-SUPPLY-UPS-UNINTERRUPTIBLE Online UPS",
                "description": "Online UPS with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "Online UPS",
                  "capacity": "1kVA - 200kVA",
                  "efficiency": "up to 96%",
                  "backupTime": "15-30 minutes",
                  "inputVoltage": "380-480V"
                }
              }
            ]
          },
          {
            "key": "miscellaneous",
            "slug": "miscellaneous-power-supplies",
            "title": "Other power supplies",
            "description": "Additional power supplies products for specialized industrial applications.",
            "image": "miscellaneous",
            "featuredSpecs": [
              "manufacturer",
              "model",
              "type"
            ],
            "products": [
              {
                "id": "power-supply-dc-regulated-laboratory",
                "slug": "power-supply-dc-regulated-laboratory-ratory",
                "image": "power-supplies",
                "title": "POWER-SUPPLY-DC-REGULATED-LABORATORY DC Regulated",
                "description": "DC Regulated with advanced features for reliable performance in industrial applications.",
                "features": [
                  "0-30V operating voltage"
                ],
                "specs": {
                  "type": "DC Regulated",
                  "voltage": "0-30V",
                  "current": "0-10A",
                  "regulation": "±0.01%",
                  "display": "Digital LED"
                }
              },
              {
                "id": "power-supply-industrial-switched-mode",
                "slug": "power-supply-industrial-switched-mode-d-mode",
                "image": "power-supplies",
                "title": "POWER-SUPPLY-INDUSTRIAL-SWITCHED-MODE SMPS",
                "description": "SMPS with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "SMPS",
                  "input": "85-264V AC",
                  "output": "24V DC",
                  "power": "120W - 960W",
                  "efficiency": ">92%"
                }
              }
            ]
          }
        ]
      },
      {
        "key": "enclosures-cabinets",
        "title": "Enclosures & Cabinets",
        "description": "Professional enclosures cabinets for industrial applications",
        "productGroups": [
          {
            "key": "electrical-cabinets",
            "slug": "electrical-cabinets",
            "title": "Title",
            "description": "Description",
            "image": "electrical-cabinet",
            "featuredSpecs": [
              "dimensions",
              "material",
              "protection"
            ],
            "products": [
              {
                "id": "enclosure-control-panel-cabinets",
                "slug": "enclosure-control-panel-cabinets-binets",
                "image": "enclosures-cabinets",
                "title": "ENCLOSURE-CONTROL-PANEL-CABINETS Control Panel",
                "description": "Control Panel with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "Control Panel",
                  "material": "MS/SS",
                  "protection": "IP54/IP65",
                  "mounting": "Wall/Floor",
                  "customizable": "Yes"
                }
              },
              {
                "id": "enclosure-electrical-nema-rated",
                "slug": "enclosure-electrical-nema-rated--rated",
                "image": "enclosures-cabinets",
                "title": "ENCLOSURE-ELECTRICAL-NEMA-RATED NEMA Enclosure",
                "description": "NEMA Enclosure with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "NEMA Enclosure",
                  "rating": "NEMA 4X/12",
                  "material": "Stainless Steel",
                  "gasket": "Continuous Hinge",
                  "certification": "UL Listed"
                }
              }
            ]
          },
          {
            "key": "junction-boxes",
            "slug": "junction-boxes",
            "title": "Title",
            "description": "Description",
            "image": "junction-box",
            "featuredSpecs": [
              "dimensions",
              "material",
              "protection"
            ],
            "products": [
              {
                "id": "enclosure-junction-boxes-weatherproof",
                "slug": "enclosure-junction-boxes-weatherproof-rproof",
                "image": "enclosures-cabinets",
                "title": "ENCLOSURE-JUNCTION-BOXES-WEATHERPROOF Junction Box",
                "description": "Junction Box with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Operating temperature: -40°C to +120°C"
                ],
                "specs": {
                  "type": "Junction Box",
                  "material": "Polycarbonate/Aluminum",
                  "protection": "IP67/IP68",
                  "temperature": "-40°C to +120°C",
                  "mounting": "Wall/Pole"
                }
              }
            ]
          },
          {
            "key": "din-rail-enclosures",
            "slug": "din-rail-enclosures",
            "title": "Title",
            "description": "Description",
            "image": "din-rail-enclosure",
            "featuredSpecs": [
              "modules",
              "dimensions",
              "material"
            ],
            "products": []
          }
        ]
      },
      {
        "key": "heating-elements-appliances",
        "title": "Heating",
        "description": "Professional heating elements appliances for industrial applications",
        "productGroups": [
          {
            "key": "heating-coils",
            "slug": "heating-coils",
            "title": "Title",
            "description": "Description",
            "image": "heating-coil",
            "featuredSpecs": [
              "power",
              "voltage",
              "temperature"
            ],
            "products": [
              {
                "id": "heating-element-industrial-cartridge-band",
                "slug": "heating-element-industrial-cartridge-band-e-band",
                "image": "heating-elements",
                "title": "HEATING-ELEMENT-INDUSTRIAL-CARTRIDGE-BAND Cartridge/Band Heater",
                "description": "Cartridge/Band Heater with advanced features for reliable performance in industrial applications.",
                "features": [
                  "230V/415V operating voltage",
                  "Operating temperature: up to 750°C"
                ],
                "specs": {
                  "type": "Cartridge/Band Heater",
                  "power": "250W - 10kW",
                  "temperature": "up to 750°C",
                  "voltage": "230V/415V",
                  "sheath": "Stainless Steel"
                }
              },
              {
                "id": "heating-electric-ovens-furnaces",
                "slug": "heating-electric-ovens-furnaces-rnaces",
                "image": "heating-elements",
                "title": "HEATING-ELECTRIC-OVENS-FURNACES Electric Oven/Furnace",
                "description": "Electric Oven/Furnace with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Operating temperature: up to 1200°C"
                ],
                "specs": {
                  "type": "Electric Oven/Furnace",
                  "temperature": "up to 1200°C",
                  "capacity": "50L - 500L",
                  "control": "PID Temperature Controller",
                  "insulation": "Ceramic Fiber"
                }
              },
              {
                "id": "heating-heat-tracing-systems",
                "slug": "heating-heat-tracing-systems-ystems",
                "image": "heating-elements",
                "title": "HEATING-HEAT-TRACING-SYSTEMS Heat Tracing",
                "description": "Heat Tracing with advanced features for reliable performance in Pipe/Tank Heating.",
                "features": [
                  "Operating temperature: -60°C to +250°C"
                ],
                "specs": {
                  "type": "Heat Tracing",
                  "application": "Pipe/Tank Heating",
                  "temperature": "-60°C to +250°C",
                  "power": "10-80 W/m",
                  "control": "Electronic Thermostat"
                }
              },
              {
                "id": "heating-immersion-heater-flanged",
                "slug": "heating-immersion-heater-flanged-langed",
                "image": "heating-elements",
                "title": "HEATING-IMMERSION-HEATER-FLANGED",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "powerRange": "1kW to 500kW",
                  "flangeDiameter": "2 inch to 24 inch",
                  "elementLength": "12 inch to 120 inch",
                  "maxTemp": "650°C",
                  "wattDensity": "15-60 W/sq inch"
                }
              },
              {
                "id": "heating-strip-heater-mica",
                "slug": "heating-strip-heater-mica-r-mica",
                "image": "heating-elements",
                "title": "HEATING-STRIP-HEATER-MICA",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "powerRange": "50W to 5kW",
                  "width": "1 inch to 12 inch",
                  "length": "2 inch to 48 inch",
                  "maxTemp": "400°C"
                }
              },
              {
                "id": "heating-coil-heater-air-duct",
                "slug": "heating-coil-heater-air-duct-r-duct",
                "image": "heating-elements",
                "title": "HEATING-COIL-HEATER-AIR-DUCT",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "powerRange": "1kW to 200kW",
                  "coilDiameter": "6 inch to 48 inch",
                  "airflow": "100 CFM to 10000 CFM",
                  "maxTemp": "700°C"
                }
              }
            ]
          },
          {
            "key": "heating-elements",
            "slug": "heating-elements",
            "title": "Title",
            "description": "Description",
            "image": "heating-element",
            "featuredSpecs": [
              "power",
              "voltage",
              "temperature"
            ],
            "products": []
          },
          {
            "key": "industrial-heaters",
            "slug": "industrial-heaters",
            "title": "Title",
            "description": "Description",
            "image": "industrial-heater",
            "featuredSpecs": [
              "power",
              "voltage",
              "application"
            ],
            "products": []
          }
        ]
      }
    ]
  },
  "industrial-measuring-tools": {
    "key": "industrial-measuring-tools",
    "title": "Industrial & Measuring Tools",
    "description": "Advanced industrial measuring tools for industrial applications",
    "subcategories": [
      {
        "key": "multimeters",
        "title": "Multimeters",
        "description": "Professional multimeters for industrial applications",
        "productGroups": [
          {
            "key": "digital-multimeters",
            "slug": "digital-multimeters",
            "title": "Title",
            "description": "Description",
            "image": "digital-multimeter",
            "featuredSpecs": [
              "accuracy",
              "range",
              "features"
            ],
            "products": [
              {
                "id": "multimeter-yokogawa-ty720-digital",
                "slug": "multimeter-yokogawa-ty720-digital-igital",
                "image": "multimeters",
                "title": "MULTIMETER-YOKOGAWA-TY720-DIGITAL Portable Digital",
                "description": "Portable Digital with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±0.012% accuracy"
                ],
                "specs": {
                  "type": "Portable Digital",
                  "dcVoltage": "200mV to 1000V",
                  "resolution": "10μV",
                  "accuracy": "±0.012%",
                  "functions": "9 Functions"
                }
              }
            ]
          },
          {
            "key": "clamp-meters",
            "slug": "clamp-meters",
            "title": "Title",
            "description": "Description",
            "image": "clamp-meter",
            "featuredSpecs": [
              "current",
              "voltage",
              "jaw"
            ],
            "products": [
              {
                "id": "multimeter-hioki-dt4282-clamp",
                "slug": "multimeter-hioki-dt4282-clamp--clamp",
                "image": "multimeters",
                "title": "MULTIMETER-HIOKI-DT4282-CLAMP",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "acCurrent": "40A to 1000A clamp",
                  "dcCurrent": "40A to 1000A clamp",
                  "resistance": "600Ω to 60MΩ",
                  "frequency": "40Hz to 1kHz"
                }
              }
            ]
          },
          {
            "key": "bench-multimeters",
            "slug": "bench-multimeters",
            "title": "Title",
            "description": "Description",
            "image": "bench-multimeter",
            "featuredSpecs": [
              "accuracy",
              "resolution",
              "features"
            ],
            "products": [
              {
                "id": "multimeter-tektronix-dmm4050-bench",
                "slug": "multimeter-tektronix-dmm4050-bench--bench",
                "image": "multimeters",
                "title": "MULTIMETER-TEKTRONIX-DMM4050-BENCH",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "resistance": "100Ω to 100MΩ",
                  "digitDisplay": "6.5 digit resolution",
                  "certification": "CAT II 600V"
                }
              }
            ]
          },
          {
            "key": "miscellaneous",
            "slug": "miscellaneous-multimeters",
            "title": "Other multimeters",
            "description": "Additional multimeters products for specialized industrial applications.",
            "image": "miscellaneous",
            "featuredSpecs": [
              "manufacturer",
              "model",
              "type"
            ],
            "products": [
              {
                "id": "multimeter-fluke-87v-industrial",
                "slug": "multimeter-fluke-87v-industrial-strial",
                "image": "multimeters",
                "title": "MULTIMETER-FLUKE-87V-INDUSTRIAL True RMS Digital",
                "description": "True RMS Digital with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "True RMS Digital",
                  "dcVoltage": "6V to 1000V",
                  "acVoltage": "6V to 1000V",
                  "dcCurrent": "60μA to 10A",
                  "safetyRating": "CAT IV 600V"
                }
              },
              {
                "id": "multimeter-keysight-u1272a-handheld",
                "slug": "multimeter-keysight-u1272a-handheld-ndheld",
                "image": "multimeters",
                "title": "MULTIMETER-KEYSIGHT-U1272A-HANDHELD Handheld Digital",
                "description": "Handheld Digital with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "Handheld Digital",
                  "display": "OLED",
                  "dcAccuracy": "0.09%",
                  "bandwidth": "100kHz"
                }
              },
              {
                "id": "multimeter-amprobe-am-570-industrial",
                "slug": "multimeter-amprobe-am-570-industrial-strial",
                "image": "multimeters",
                "title": "MULTIMETER-AMPROBE-AM-570-INDUSTRIAL",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Operating temperature: -50°C to +1000°C"
                ],
                "specs": {
                  "resistance": "600Ω to 40MΩ",
                  "temperature": "-50°C to +1000°C"
                }
              }
            ]
          }
        ]
      },
      {
        "key": "power-quality-analyzers",
        "title": "Power",
        "description": "Professional power quality analyzers for industrial applications",
        "productGroups": [
          {
            "key": "power-meters",
            "slug": "power-meters",
            "title": "Title",
            "description": "Description",
            "image": "power-meter",
            "featuredSpecs": [
              "accuracy",
              "phases",
              "parameters"
            ],
            "products": [
              {
                "id": "power-quality-analyzer-fluke-435-ii",
                "slug": "power-quality-analyzer-fluke-435-ii-435-ii",
                "image": "power-quality-analyzers",
                "title": "POWER-QUALITY-ANALYZER-FLUKE-435-II",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "1000V/600V operating voltage"
                ],
                "specs": {
                  "voltage": "1000V/600V",
                  "current": "6000A",
                  "harmonics": "up to 50th",
                  "memory": "8GB"
                }
              },
              {
                "id": "power-quality-analyzer-hioki-pw3390",
                "slug": "power-quality-analyzer-hioki-pw3390-pw3390",
                "image": "power-quality-analyzers",
                "title": "POWER-QUALITY-ANALYZER-HIOKI-PW3390",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "600V/1000V operating voltage"
                ],
                "specs": {
                  "voltage": "600V/1000V",
                  "current": "5000A",
                  "harmonics": "up to 500th",
                  "sampling": "20 kS/s",
                  "memory": "4GB"
                }
              },
              {
                "id": "power-quality-analyzer-dranetz-hdpq",
                "slug": "power-quality-analyzer-dranetz-hdpq-z-hdpq",
                "image": "power-quality-analyzers",
                "title": "POWER-QUALITY-ANALYZER-DRANETZ-HDPQ",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "channels": "4 Voltage + 4 Current",
                  "sampling": "256 samples/cycle",
                  "harmonics": "up to 63rd",
                  "memory": "8GB",
                  "connectivity": "Ethernet/WiFi"
                }
              }
            ]
          },
          {
            "key": "harmonic-analyzers",
            "slug": "harmonic-analyzers",
            "title": "Title",
            "description": "Description",
            "image": "harmonic-analyzer",
            "featuredSpecs": [
              "harmonics",
              "phases",
              "memory"
            ],
            "products": []
          },
          {
            "key": "energy-loggers",
            "slug": "energy-loggers",
            "title": "Title",
            "description": "Description",
            "image": "energy-logger",
            "featuredSpecs": [
              "channels",
              "memory",
              "communication"
            ],
            "products": []
          }
        ]
      },
      {
        "key": "calibration-equipment",
        "title": "Calibration",
        "description": "Professional calibration equipment for industrial applications",
        "productGroups": [
          {
            "key": "calibration-instruments",
            "slug": "calibration-instruments",
            "title": "Title",
            "description": "Description",
            "image": "calibration-instrument",
            "featuredSpecs": [
              "accuracy",
              "range",
              "standards"
            ],
            "products": []
          },
          {
            "key": "calibration-standards",
            "slug": "calibration-standards",
            "title": "Title",
            "description": "Description",
            "image": "calibration-standard",
            "featuredSpecs": [
              "accuracy",
              "stability",
              "traceability"
            ],
            "products": []
          },
          {
            "key": "test-equipment",
            "slug": "test-equipment",
            "title": "Title",
            "description": "Description",
            "image": "test-equipment",
            "featuredSpecs": [
              "function",
              "accuracy",
              "portability"
            ],
            "products": []
          },
          {
            "key": "miscellaneous",
            "slug": "miscellaneous-calibration-equipment",
            "title": "Other calibration equipment",
            "description": "Additional calibration equipment products for specialized industrial applications.",
            "image": "miscellaneous",
            "featuredSpecs": [
              "manufacturer",
              "model",
              "type"
            ],
            "products": [
              {
                "id": "calibrator-pressure-dead-weight-tester",
                "slug": "calibrator-pressure-dead-weight-tester-tester",
                "image": "calibration-equipment",
                "title": "CALIBRATOR-PRESSURE-DEAD-WEIGHT-TESTER Dead Weight Tester",
                "description": "Dead Weight Tester with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±0.02% accuracy"
                ],
                "specs": {
                  "type": "Dead Weight Tester",
                  "pressure": "up to 1000 bar",
                  "accuracy": "±0.02%",
                  "weights": "Standard Masses",
                  "certification": "NIST Traceable"
                }
              },
              {
                "id": "calibrator-temperature-precision-reference",
                "slug": "calibrator-temperature-precision-reference-erence",
                "image": "calibration-equipment",
                "title": "CALIBRATOR-TEMPERATURE-PRECISION-REFERENCE Temperature Calibrator",
                "description": "Temperature Calibrator with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±0.02°C accuracy"
                ],
                "specs": {
                  "type": "Temperature Calibrator",
                  "range": "-100°C to +660°C",
                  "accuracy": "±0.02°C",
                  "stability": "±0.005°C",
                  "probes": "RTD/TC Compatible"
                }
              },
              {
                "id": "calibrator-process-multifunction",
                "slug": "calibrator-process-multifunction-nction",
                "image": "calibration-equipment",
                "title": "CALIBRATOR-PROCESS-MULTIFUNCTION Multifunction",
                "description": "Multifunction with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±100V operating voltage",
                  "Operating temperature: -200°C to +1370°C"
                ],
                "specs": {
                  "type": "Multifunction",
                  "voltage": "±100V",
                  "current": "±24mA",
                  "resistance": "4000Ω",
                  "pressure": "3000 psi",
                  "temperature": "-200°C to +1370°C"
                }
              }
            ]
          }
        ]
      },
      {
        "key": "hand-tools",
        "title": "Hand",
        "description": "Professional hand tools for industrial applications",
        "productGroups": [
          {
            "key": "mechanical-tools",
            "slug": "mechanical-tools",
            "title": "Title",
            "description": "Description",
            "image": "mechanical-tools",
            "featuredSpecs": [
              "material",
              "size",
              "application"
            ],
            "products": []
          },
          {
            "key": "electrical-tools",
            "slug": "electrical-tools",
            "title": "Title",
            "description": "Description",
            "image": "electrical-tools",
            "featuredSpecs": [
              "insulation",
              "voltage",
              "material"
            ],
            "products": []
          },
          {
            "key": "precision-tools",
            "slug": "precision-tools",
            "title": "Title",
            "description": "Description",
            "image": "precision-tools",
            "featuredSpecs": [
              "tolerance",
              "material",
              "accuracy"
            ],
            "products": [
              {
                "id": "hand-tool-precision-screwdriver-set",
                "slug": "hand-tool-precision-screwdriver-set-er-set",
                "image": "hand-tools",
                "title": "HAND-TOOL-PRECISION-SCREWDRIVER-SET",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "pieces": "32 piece electronics set",
                  "sizes": "0.8mm to 6mm",
                  "shaftMaterial": "S2 Steel",
                  "handle": "Ergonomic anti-slip grip",
                  "magneticTips": "Yes",
                  "certification": "RoHS Compliant"
                }
              }
            ]
          },
          {
            "key": "miscellaneous",
            "slug": "miscellaneous-hand-tools",
            "title": "Other hand tools",
            "description": "Additional hand tools products for specialized industrial applications.",
            "image": "miscellaneous",
            "featuredSpecs": [
              "manufacturer",
              "model",
              "type"
            ],
            "products": [
              {
                "id": "hand-tool-adjustable-wrench-set",
                "slug": "hand-tool-adjustable-wrench-set-ch-set",
                "image": "hand-tools",
                "title": "HAND-TOOL-ADJUSTABLE-WRENCH-SET",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "material": "Chrome Vanadium Steel",
                  "finish": "Chrome plated",
                  "jawCapacity": "25mm to 50mm",
                  "torqueRating": "100-200 ft-lbs",
                  "standard": "ASME B107.8"
                }
              },
              {
                "id": "hand-tool-socket-set-metric-imperial",
                "slug": "hand-tool-socket-set-metric-imperial-perial",
                "image": "hand-tools",
                "title": "HAND-TOOL-SOCKET-SET-METRIC-IMPERIAL",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "pieces": "120 piece complete set",
                  "material": "Chrome Vanadium Steel",
                  "ratchetType": "72-tooth fine tooth",
                  "caseType": "Blow molded case",
                  "certification": "ANSI/ASME B107"
                }
              },
              {
                "id": "hand-tool-combination-pliers-set",
                "slug": "hand-tool-combination-pliers-set-rs-set",
                "image": "hand-tools",
                "title": "HAND-TOOL-COMBINATION-PLIERS-SET",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "pieces": "4 piece pliers set",
                  "material": "High Carbon Steel",
                  "jawHardness": "HRC 58-62",
                  "certification": "ANSI/ASME B107.13"
                }
              },
              {
                "id": "hand-tool-measuring-tape-industrial",
                "slug": "hand-tool-measuring-tape-industrial-strial",
                "image": "hand-tools",
                "title": "HAND-TOOL-MEASURING-TAPE-INDUSTRIAL",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "length": "25 feet / 7.5 meters",
                  "blade": "1 inch wide steel",
                  "markings": "Imperial and metric",
                  "standout": "11 feet",
                  "housing": "Impact resistant ABS",
                  "hook": "Magnetic end hook",
                  "certification": "NIST Class II"
                }
              },
              {
                "id": "hand-tool-torque-wrench-calibrated",
                "slug": "hand-tool-torque-wrench-calibrated-brated",
                "image": "hand-tools",
                "title": "HAND-TOOL-TORQUE-WRENCH-CALIBRATED",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±3% accuracy"
                ],
                "specs": {
                  "range": "10-150 ft-lbs",
                  "driveSize": "1/2 inch",
                  "accuracy": "±3%",
                  "direction": "Clockwise and counterclockwise",
                  "calibration": "Certificate included",
                  "handle": "Ergonomic comfort grip"
                }
              }
            ]
          }
        ]
      },
      {
        "key": "power-tools",
        "title": "Power",
        "description": "Professional power tools for industrial applications",
        "productGroups": [
          {
            "key": "electric-drills",
            "slug": "electric-drills",
            "title": "Title",
            "description": "Description",
            "image": "electric-drill",
            "featuredSpecs": [
              "power",
              "chuck",
              "speed"
            ],
            "products": []
          },
          {
            "key": "angle-grinders",
            "slug": "angle-grinders",
            "title": "Title",
            "description": "Description",
            "image": "angle-grinder",
            "featuredSpecs": [
              "power",
              "disc",
              "speed"
            ],
            "products": [
              {
                "id": "power-tool-angle-grinder-industrial",
                "slug": "power-tool-angle-grinder-industrial-strial",
                "image": "power-tools",
                "title": "POWER-TOOL-ANGLE-GRINDER-INDUSTRIAL",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "discSize": "4.5 inch / 115mm",
                  "power": "11 Amp / 820W motor",
                  "spindle": "5/8-11 threaded",
                  "guard": "Adjustable guard",
                  "handle": "Side handle included"
                }
              }
            ]
          },
          {
            "key": "impact-drivers",
            "slug": "impact-drivers",
            "title": "Title",
            "description": "Description",
            "image": "impact-driver",
            "featuredSpecs": [
              "torque",
              "power",
              "battery"
            ],
            "products": [
              {
                "id": "power-tool-impact-wrench-pneumatic",
                "slug": "power-tool-impact-wrench-pneumatic-umatic",
                "image": "power-tools",
                "title": "POWER-TOOL-IMPACT-WRENCH-PNEUMATIC",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "driveSize": "1/2 inch square",
                  "maxTorque": "1200 ft-lbs",
                  "airConsumption": "5.5 CFM at 90 PSI",
                  "weight": "4.2 lbs",
                  "hoseConnection": "1/4 inch NPT",
                  "material": "Aluminum housing",
                  "certification": "OSHA Compliant"
                }
              }
            ]
          },
          {
            "key": "miscellaneous",
            "slug": "miscellaneous-power-tools",
            "title": "Other power tools",
            "description": "Additional power tools products for specialized industrial applications.",
            "image": "miscellaneous",
            "featuredSpecs": [
              "manufacturer",
              "model",
              "type"
            ],
            "products": [
              {
                "id": "Power Tool Cordless Drill Driver Set",
                "slug": "power-tool-cordless-drill-driver-set-er Set",
                "image": "power-tools",
                "title": "POWER TOOL CORDLESS DRILL DRIVER SET",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "20V Max Lithium-ion operating voltage"
                ],
                "specs": {
                  "voltage": "20V Max Lithium-ion",
                  "chuckSize": "1/2 inch keyless",
                  "torqueSettings": "24 position clutch",
                  "maxTorque": "650 in-lbs",
                  "batteryLife": "2.0Ah battery",
                  "chargeTime": "30 minutes fast charge"
                }
              },
              {
                "id": "power-tool-reciprocating-saw-cordless",
                "slug": "power-tool-reciprocating-saw-cordless-rdless",
                "image": "power-tools",
                "title": "POWER-TOOL-RECIPROCATING-SAW-CORDLESS",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "18V Lithium-ion operating voltage"
                ],
                "specs": {
                  "voltage": "18V Lithium-ion",
                  "strokeLength": "1.125 inch",
                  "strokesPerMinute": "0-3000 SPM",
                  "bladeClamp": "Tool-free blade change",
                  "batteryLife": "4.0Ah extended runtime",
                  "weight": "7.5 lbs with battery",
                  "certification": "UL Listed"
                }
              },
              {
                "id": "power-tool-circular-saw-cordless",
                "slug": "power-tool-circular-saw-cordless-rdless",
                "image": "power-tools",
                "title": "POWER-TOOL-CIRCULAR-SAW-CORDLESS",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "20V Max Lithium-ion operating voltage"
                ],
                "specs": {
                  "voltage": "20V Max Lithium-ion",
                  "bladeSize": "7.25 inch",
                  "cuttingDepth": "2.625 inch at 90°",
                  "bevelCapacity": "0°-57°",
                  "magnesiumShoe": "Lightweight base",
                  "laser": "Laser cutting guide"
                }
              },
              {
                "id": "power-tool-rotary-hammer-sds-plus",
                "slug": "power-tool-rotary-hammer-sds-plus-s-plus",
                "image": "power-tools",
                "title": "POWER-TOOL-ROTARY-HAMMER-SDS-PLUS",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "chuckType": "SDS-Plus",
                  "drilling": "1 inch in concrete",
                  "impactEnergy": "3.5 ft-lbs",
                  "power": "8.5 Amp motor",
                  "vibrationControl": "Active vibration control"
                }
              }
            ]
          }
        ]
      },
      {
        "key": "cutting-tools",
        "title": "Cutting",
        "description": "Professional cutting tools for industrial applications",
        "productGroups": [
          {
            "key": "cutting-blades",
            "slug": "cutting-blades",
            "title": "Title",
            "description": "Description",
            "image": "cutting-blade",
            "featuredSpecs": [
              "material",
              "diameter",
              "thickness"
            ],
            "products": [
              {
                "id": "cutting-tool-end-mill-carbide",
                "slug": "cutting-tool-end-mill-carbide-arbide",
                "image": "cutting-tools",
                "title": "CUTTING-TOOL-END-MILL-CARBIDE",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "material": "Solid Carbide",
                  "coating": "TiAlN Multi-layer",
                  "diameter": "1/16 to 1 inch",
                  "shankType": "Straight shank",
                  "helixAngle": "30° variable helix",
                  "certification": "ISO 9001 Quality"
                }
              },
              {
                "id": "cutting-tool-drill-bit-set-hss",
                "slug": "cutting-tool-drill-bit-set-hss-et-hss",
                "image": "cutting-tools",
                "title": "CUTTING-TOOL-DRILL-BIT-SET-HSS",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "material": "High Speed Steel (HSS)",
                  "sizes": "1/16 to 1/2 inch by 64ths",
                  "pieces": "29 piece set",
                  "pointAngle": "135° self-centering",
                  "surface": "Black oxide finish",
                  "chuck": "Round shank",
                  "certification": "ANSI B94.11M"
                }
              },
              {
                "id": "cutting-tool-lathe-insert-carbide",
                "slug": "cutting-tool-lathe-insert-carbide-arbide",
                "image": "cutting-tools",
                "title": "CUTTING-TOOL-LATHE-INSERT-CARBIDE",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "grade": "C5/C6 Carbide",
                  "coating": "CVD Multi-layer",
                  "chipBreaker": "Universal PM geometry",
                  "tolerance": "±0.005 inch",
                  "certification": "ISO 1832 Standard"
                }
              },
              {
                "id": "cutting-tool-milling-cutter-face",
                "slug": "cutting-tool-milling-cutter-face-r-face",
                "image": "cutting-tools",
                "title": "CUTTING-TOOL-MILLING-CUTTER-FACE",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "diameter": "2 to 6 inch",
                  "insertType": "APKT 1003 carbide",
                  "insertSeats": "6 to 16 inserts",
                  "material": "Steel and cast iron",
                  "coating": "TiN coated inserts"
                }
              },
              {
                "id": "cutting-tool-bandsaw-blade-bimetal",
                "slug": "cutting-tool-bandsaw-blade-bimetal-imetal",
                "image": "cutting-tools",
                "title": "CUTTING-TOOL-BANDSAW-BLADE-BIMETAL",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "width": "1/2 to 2 inch",
                  "thickness": "0.025 to 0.063 inch",
                  "tpi": "3 to 24 teeth per inch",
                  "length": "Custom lengths available",
                  "certification": "ISO 2428 Standard"
                }
              },
              {
                "id": "cutting-tool-threading-tap-set",
                "slug": "cutting-tool-threading-tap-set-ap-set",
                "image": "cutting-tools",
                "title": "CUTTING-TOOL-THREADING-TAP-SET",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "material": "High Carbon Steel",
                  "coating": "Black oxide",
                  "wrench": "Tap wrench included",
                  "certification": "ANSI B94.9"
                }
              }
            ]
          },
          {
            "key": "drill-bits",
            "slug": "drill-bits",
            "title": "Title",
            "description": "Description",
            "image": "drill-bit",
            "featuredSpecs": [
              "material",
              "diameter",
              "coating"
            ],
            "products": []
          },
          {
            "key": "milling-cutters",
            "slug": "milling-cutters",
            "title": "Title",
            "description": "Description",
            "image": "milling-cutter",
            "featuredSpecs": [
              "material",
              "diameter",
              "flutes"
            ],
            "products": []
          }
        ]
      },
      {
        "key": "lifting-equipment",
        "title": "Lifting",
        "description": "Professional lifting equipment for industrial applications",
        "productGroups": [
          {
            "key": "chain-hoists",
            "slug": "chain-hoists",
            "title": "Title",
            "description": "Description",
            "image": "chain-hoist",
            "featuredSpecs": [
              "capacity",
              "lift",
              "operation"
            ],
            "products": [
              {
                "id": "lifting-chain-hoist-manual",
                "slug": "lifting-chain-hoist-manual-manual",
                "image": "lifting-equipment",
                "title": "LIFTING-CHAIN-HOIST-MANUAL",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "capacity": "1/2 to 10 tons",
                  "liftHeight": "10 to 20 feet standard",
                  "chainGrade": "Grade 80 alloy steel",
                  "hooks": "Forged steel with safety latches",
                  "loadBlock": "Drop-forged steel",
                  "efficiency": "95% mechanical advantage"
                }
              },
              {
                "id": "lifting-electric-chain-hoist",
                "slug": "lifting-electric-chain-hoist--hoist",
                "image": "lifting-equipment",
                "title": "LIFTING-ELECTRIC-CHAIN-HOIST",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "capacity": "1/4 to 20 tons",
                  "liftSpeed": "8 to 32 FPM",
                  "controlVoltage": "24V pendant control",
                  "dutyRating": "H4 continuous duty",
                  "chainGrade": "Grade 80 heat treated"
                }
              }
            ]
          },
          {
            "key": "wire-rope-hoists",
            "slug": "wire-rope-hoists",
            "title": "Title",
            "description": "Description",
            "image": "wire-rope-hoist",
            "featuredSpecs": [
              "capacity",
              "lift",
              "speed"
            ],
            "products": [
              {
                "id": "lifting-wire-rope-slings",
                "slug": "lifting-wire-rope-slings-slings",
                "image": "lifting-equipment",
                "title": "LIFTING-WIRE-ROPE-SLINGS",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "construction": "6x19 and 6x37 IWRC",
                  "diameter": "1/4 to 2 inch",
                  "length": "6 to 50 feet",
                  "capacity": "1/2 to 50 tons",
                  "safety": "5:1 design factor"
                }
              }
            ]
          },
          {
            "key": "jib-cranes",
            "slug": "jib-cranes",
            "title": "Title",
            "description": "Description",
            "image": "jib-crane",
            "featuredSpecs": [
              "capacity",
              "reach",
              "rotation"
            ],
            "products": [
              {
                "id": "lifting-jib-crane-wall-mounted",
                "slug": "lifting-jib-crane-wall-mounted-ounted",
                "image": "lifting-equipment",
                "title": "LIFTING-JIB-CRANE-WALL-MOUNTED",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "capacity": "1/8 to 5 tons",
                  "reach": "8 to 30 feet",
                  "rotation": "180° to 360°",
                  "mounting": "Wall bracket or column",
                  "hoist": "Electric chain hoist",
                  "boom": "Structural steel I-beam"
                }
              }
            ]
          },
          {
            "key": "miscellaneous",
            "slug": "miscellaneous-lifting-equipment",
            "title": "Other lifting equipment",
            "description": "Additional lifting equipment products for specialized industrial applications.",
            "image": "miscellaneous",
            "featuredSpecs": [
              "manufacturer",
              "model",
              "type"
            ],
            "products": [
              {
                "id": "lifting-overhead-bridge-crane",
                "slug": "lifting-overhead-bridge-crane--crane",
                "image": "lifting-equipment",
                "title": "LIFTING-OVERHEAD-BRIDGE-CRANE",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "capacity": "1 to 100 tons",
                  "span": "10 to 100 feet",
                  "liftHeight": "20 to 50 feet",
                  "trolleyType": "Electric wire rope hoist",
                  "bridgeTravel": "Variable frequency drive",
                  "controls": "Radio remote or pendant"
                }
              },
              {
                "id": "lifting-beam-spreader-adjustable",
                "slug": "lifting-beam-spreader-adjustable-stable",
                "image": "lifting-equipment",
                "title": "LIFTING-BEAM-SPREADER-ADJUSTABLE",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "capacity": "1 to 75 tons",
                  "adjustment": "Telescopic or modular",
                  "span": "4 to 50 feet adjustable",
                  "material": "High strength steel",
                  "safetyFactor": "3:1 design factor"
                }
              }
            ]
          }
        ]
      },
      {
        "key": "safety-equipment",
        "title": "Safety",
        "description": "Professional safety equipment for industrial applications",
        "productGroups": [
          {
            "key": "personal-protective-equipment",
            "slug": "personal-protective-equipment",
            "title": "Title",
            "description": "Description",
            "image": "ppe",
            "featuredSpecs": [
              "standard",
              "material",
              "protection"
            ],
            "products": [
              {
                "id": "safety-personal-fall-protection",
                "slug": "safety-personal-fall-protection-ection",
                "image": "safety-equipment",
                "title": "SAFETY-PERSONAL-FALL-PROTECTION",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "harnessType": "Full body safety harness",
                  "lanyardLength": "6 feet with shock absorber",
                  "capacity": "310 lbs max weight",
                  "buckles": "Auto-locking buckles",
                  "dRings": "Dorsal and side D-rings",
                  "webbing": "High strength polyester"
                }
              }
            ]
          },
          {
            "key": "safety-barriers",
            "slug": "safety-barriers",
            "title": "Title",
            "description": "Description",
            "image": "safety-barrier",
            "featuredSpecs": [
              "height",
              "material",
              "application"
            ],
            "products": [
              {
                "id": "safety-hard-hat-class-e",
                "slug": "safety-hard-hat-class-e-lass-e",
                "image": "safety-equipment",
                "title": "SAFETY-HARD-HAT-CLASS-E",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "material": "High density polyethylene",
                  "suspension": "4-point pin-lock suspension",
                  "adjustment": "Ratchet headband",
                  "ventilation": "Slotted ventilation"
                }
              },
              {
                "id": "safety-glasses-wraparound",
                "slug": "safety-glasses-wraparound-around",
                "image": "safety-equipment",
                "title": "SAFETY-GLASSES-WRAPAROUND",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "lensType": "Polycarbonate wraparound",
                  "protection": "99.9% UV protection",
                  "impact": "High velocity impact rated",
                  "temple": "Adjustable temple length",
                  "bridge": "Universal nose bridge"
                }
              },
              {
                "id": "safety-work-gloves-cut-resistant",
                "slug": "safety-work-gloves-cut-resistant-istant",
                "image": "safety-equipment",
                "title": "SAFETY-WORK-GLOVES-CUT-RESISTANT",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "cutLevel": "ANSI A4 cut resistance",
                  "material": "HPPE with nitrile palm",
                  "thickness": "13 gauge knit liner",
                  "grip": "Micro-foam nitrile coating",
                  "sizing": "S through 2XL",
                  "washable": "Machine washable"
                }
              },
              {
                "id": "safety-respirator-half-face",
                "slug": "safety-respirator-half-face-f-face",
                "image": "safety-equipment",
                "title": "SAFETY-RESPIRATOR-HALF-FACE Half-face reusable respirator",
                "description": "Half-face reusable respirator with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "Half-face reusable respirator",
                  "filterType": "P100 particulate filters",
                  "material": "Soft silicone facepiece",
                  "valves": "Low breathing resistance",
                  "straps": "4-point headstrap system"
                }
              },
              {
                "id": "safety-steel-toe-boots",
                "slug": "safety-steel-toe-boots--boots",
                "image": "safety-equipment",
                "title": "SAFETY-STEEL-TOE-BOOTS",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "sole": "Oil and slip resistant",
                  "upper": "Full grain leather",
                  "lining": "Moisture-wicking fabric",
                  "insulation": "Thinsulate 400g"
                }
              }
            ]
          },
          {
            "key": "emergency-equipment",
            "slug": "emergency-equipment",
            "title": "Title",
            "description": "Description",
            "image": "emergency-equipment",
            "featuredSpecs": [
              "type",
              "capacity",
              "standards"
            ],
            "products": []
          }
        ]
      }
    ]
  },
  "automation-control-systems": {
    "key": "automation-control-systems",
    "title": "Automation & Control Systems",
    "description": "Advanced automation control systems for industrial applications",
    "subcategories": [
      {
        "key": "plcs",
        "title": "PLCs",
        "description": "Professional plcs for industrial applications",
        "productGroups": [
          {
            "key": "modular-plcs",
            "slug": "modular-plcs",
            "title": "Title",
            "description": "Description",
            "image": "modular-plc",
            "featuredSpecs": [
              "io",
              "memory",
              "communication"
            ],
            "products": [
              {
                "id": "plc-schneider-electric-modicon-m580",
                "slug": "plc-schneider-electric-modicon-m580-n-m580",
                "image": "plcs",
                "title": "PLC-SCHNEIDER-ELECTRIC-MODICON-M580 Modular PLC",
                "description": "Modular PLC with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "Modular PLC",
                  "cpu": "M580 Series",
                  "memory": "16MB",
                  "io": "Hot-swappable"
                }
              }
            ]
          },
          {
            "key": "compact-plcs",
            "slug": "compact-plcs",
            "title": "Title",
            "description": "Description",
            "image": "compact-plc",
            "featuredSpecs": [
              "io",
              "memory",
              "size"
            ],
            "products": [
              {
                "id": "plc-siemens-simatic-s7-1200",
                "slug": "plc-siemens-simatic-s7-1200-7-1200",
                "image": "plcs",
                "title": "PLC-SIEMENS-SIMATIC-S7-1200 Compact PLC",
                "description": "Compact PLC with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "Compact PLC",
                  "cpu": "S7-1200",
                  "memory": "100KB",
                  "io": "14DI/10DO/2AI"
                }
              }
            ]
          },
          {
            "key": "micro-plcs",
            "slug": "micro-plcs",
            "title": "Title",
            "description": "Description",
            "image": "micro-plc",
            "featuredSpecs": [
              "io",
              "memory",
              "applications"
            ],
            "products": []
          },
          {
            "key": "miscellaneous",
            "slug": "miscellaneous-plcs",
            "title": "Other plcs",
            "description": "Additional plcs products for specialized industrial applications.",
            "image": "miscellaneous",
            "featuredSpecs": [
              "manufacturer",
              "model",
              "type"
            ],
            "products": [
              {
                "id": "plc-allen-bradley-compactlogix-5380",
                "slug": "plc-allen-bradley-compactlogix-5380-x-5380",
                "image": "plcs",
                "title": "PLC-ALLEN-BRADLEY-COMPACTLOGIX-5380 Compact GuardLogix",
                "description": "Compact GuardLogix with advanced features for reliable performance in industrial applications.",
                "features": [
                  "EtherNet/IP communication"
                ],
                "specs": {
                  "type": "Compact GuardLogix",
                  "cpu": "5380 Series",
                  "memory": "3MB",
                  "io": "Modular I/O",
                  "communication": "EtherNet/IP"
                }
              },
              {
                "id": "plc-rockwell-controllogix-l82e",
                "slug": "plc-rockwell-controllogix-l82e-x-l82e",
                "image": "plcs",
                "title": "PLC-ROCKWELL-CONTROLLOGIX-L82E",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "processor": "1.5 GHz Dual-Core",
                  "memory": "10 MB",
                  "programming": "Studio 5000",
                  "safety": "SIL 3 capable"
                }
              },
              {
                "id": "plc-mitsubishi-fx5u",
                "slug": "plc-mitsubishi-fx5u-i-fx5u",
                "image": "plcs",
                "title": "PLC-MITSUBISHI-FX5U",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "processor": "ARM Cortex-A9",
                  "memory": "256 KB",
                  "ioPoints": "Up to 384 points",
                  "programming": "GX Works3",
                  "expansionSlots": "8 expansion slots"
                }
              },
              {
                "id": "plc-omron-nx1p2",
                "slug": "plc-omron-nx1p2--nx1p2",
                "image": "plcs",
                "title": "PLC-OMRON-NX1P2",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "processor": "ARM Cortex-A9 800MHz",
                  "memory": "32 MB",
                  "ioCapacity": "Up to 2560 points",
                  "programming": "Sysmac Studio",
                  "motionControl": "32 axes control"
                }
              }
            ]
          }
        ]
      },
      {
        "key": "scada",
        "title": "Scada",
        "description": "Professional scada for industrial applications",
        "productGroups": [
          {
            "key": "scada-software",
            "slug": "scada-software",
            "title": "Title",
            "description": "Description",
            "image": "scada-software",
            "featuredSpecs": [
              "tags",
              "clients",
              "features"
            ],
            "products": [
              {
                "id": "scada-siemens-wincc",
                "slug": "scada-siemens-wincc--wincc",
                "image": "scada",
                "title": "SCADA-SIEMENS-WINCC SCADA Software",
                "description": "SCADA Software with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "SCADA Software",
                  "version": "WinCC Professional",
                  "clients": "12 Clients",
                  "database": "SQL Server"
                }
              },
              {
                "id": "scada-ge-ifix",
                "slug": "scada-ge-ifix-e-ifix",
                "image": "scada",
                "title": "SCADA-GE-IFIX SCADA/HMI",
                "description": "SCADA/HMI with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "SCADA/HMI",
                  "version": "iFIX 6.5",
                  "tags": "Unlimited",
                  "redundancy": "Hot Standby"
                }
              },
              {
                "id": "scada-wonderware-system-platform",
                "slug": "scada-wonderware-system-platform-atform",
                "image": "scada",
                "title": "SCADA-WONDERWARE-SYSTEM-PLATFORM SCADA Platform",
                "description": "SCADA Platform with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "SCADA Platform",
                  "version": "System Platform 2020",
                  "tags": "Unlimited",
                  "redundancy": "Galaxy Redundancy",
                  "clients": "Multiple Client Types"
                }
              },
              {
                "id": "scada-rockwell-factorytalk-view",
                "slug": "scada-rockwell-factorytalk-view-k-view",
                "image": "scada",
                "title": "SCADA-ROCKWELL-FACTORYTALK-VIEW",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "platform": "Windows 10/Server 2019",
                  "clients": "Up to 100 clients",
                  "integration": "Studio 5000 integrated",
                  "security": "FactoryTalk Security"
                }
              },
              {
                "id": "scada-schneider-vijeo-citect",
                "slug": "scada-schneider-vijeo-citect-citect",
                "image": "scada",
                "title": "SCADA-SCHNEIDER-VIJEO-CITECT",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "platform": "Windows 10/Server 2016",
                  "tags": "Unlimited I/O points",
                  "clients": "Unlimited display clients",
                  "redundancy": "Primary/Standby servers",
                  "webClient": "HTML5 thin client"
                }
              },
              {
                "id": "scada-inductive-automation-ignition",
                "slug": "scada-inductive-automation-ignition-nition",
                "image": "scada",
                "title": "SCADA-INDUCTIVE-AUTOMATION-IGNITION",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "OPC-UA native communication"
                ],
                "specs": {
                  "platform": "Cross-platform Java",
                  "tags": "Unlimited tag licensing",
                  "clients": "Unlimited web clients",
                  "communication": "OPC-UA native",
                  "mobilePlatform": "Native mobile apps"
                }
              }
            ]
          },
          {
            "key": "scada-hardware",
            "slug": "scada-hardware",
            "title": "Title",
            "description": "Description",
            "image": "scada-hardware",
            "featuredSpecs": [
              "performance",
              "redundancy",
              "connectivity"
            ],
            "products": []
          },
          {
            "key": "scada-gateways",
            "slug": "scada-gateways",
            "title": "Title",
            "description": "Description",
            "image": "scada-gateway",
            "featuredSpecs": [
              "protocols",
              "ports",
              "conversion"
            ],
            "products": []
          }
        ]
      },
      {
        "key": "dcs",
        "title": "Dcs",
        "description": "Professional dcs for industrial applications",
        "productGroups": [
          {
            "key": "dcs-controllers",
            "slug": "dcs-controllers",
            "title": "Title",
            "description": "Description",
            "image": "dcs-controller",
            "featuredSpecs": [
              "io",
              "redundancy",
              "performance"
            ],
            "products": [
              {
                "id": "dcs-abb-system-800xa",
                "slug": "dcs-abb-system-800xa--800xa",
                "image": "dcs",
                "title": "DCS-ABB-SYSTEM-800XA DCS System",
                "description": "DCS System with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "DCS System",
                  "version": "800xA 6.1",
                  "controllers": "AC 800M",
                  "io": "S800 I/O"
                }
              },
              {
                "id": "dcs-emerson-deltav",
                "slug": "dcs-emerson-deltav-deltav",
                "image": "dcs",
                "title": "DCS-EMERSON-DELTAV DCS System",
                "description": "DCS System with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "DCS System",
                  "version": "DeltaV v15",
                  "controllers": "M-Series",
                  "io": "CHARM I/O"
                }
              },
              {
                "id": "dcs-honeywell-experion-pks",
                "slug": "dcs-honeywell-experion-pks-on-pks",
                "image": "dcs",
                "title": "DCS-HONEYWELL-EXPERION-PKS DCS System",
                "description": "DCS System with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "DCS System",
                  "version": "Experion PKS",
                  "controllers": "C300 Controllers",
                  "io": "OneWireless I/O"
                }
              },
              {
                "id": "dcs-yokogawa-centum-vp",
                "slug": "dcs-yokogawa-centum-vp-tum-vp",
                "image": "dcs",
                "title": "DCS-YOKOGAWA-CENTUM-VP",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Vnet/IP control network communication"
                ],
                "specs": {
                  "controllers": "FCS Field Control Station",
                  "ioSystems": "Remote I/O and Fieldbus",
                  "communication": "Vnet/IP control network",
                  "engineering": "Engineering Station",
                  "safety": "ProSafe-RS safety system",
                  "operatorInterface": "HIS Human Interface Station"
                }
              },
              {
                "id": "dcs-schneider-foxboro-evo",
                "slug": "dcs-schneider-foxboro-evo-ro-evo",
                "image": "dcs",
                "title": "DCS-SCHNEIDER-FOXBORO-EVO",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Mesh control network communication"
                ],
                "specs": {
                  "controllers": "FBM Fieldbus Modules",
                  "ioSystems": "Distributed I/O architecture",
                  "communication": "Mesh control network",
                  "engineering": "Control Core Services",
                  "safety": "Triconex safety system",
                  "workstations": "EWS Engineering Workstation"
                }
              },
              {
                "id": "dcs-ge-mark-vie",
                "slug": "dcs-ge-mark-vie-rk-vie",
                "image": "dcs",
                "title": "DCS-GE-MARK-VIE",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Ethernet network communication"
                ],
                "specs": {
                  "controllers": "Mark VIe control modules",
                  "ioSystems": "Simplex and TMR I/O",
                  "communication": "Ethernet network",
                  "engineering": "ToolboxST software",
                  "safety": "Triple redundant architecture",
                  "applications": "Turbine control specialist"
                }
              }
            ]
          },
          {
            "key": "dcs-operator-stations",
            "slug": "dcs-operator-stations",
            "title": "Title",
            "description": "Description",
            "image": "dcs-operator-station",
            "featuredSpecs": [
              "displays",
              "performance",
              "redundancy"
            ],
            "products": []
          },
          {
            "key": "dcs-engineering-stations",
            "slug": "dcs-engineering-stations",
            "title": "Title",
            "description": "Description",
            "image": "dcs-engineering-station",
            "featuredSpecs": [
              "software",
              "performance",
              "tools"
            ],
            "products": []
          }
        ]
      },
      {
        "key": "hmi",
        "title": "Hmi",
        "description": "Professional hmi for industrial applications",
        "productGroups": [
          {
            "key": "touchscreen-hmis",
            "slug": "touchscreen-hmis",
            "title": "Title",
            "description": "Description",
            "image": "touchscreen-hmi",
            "featuredSpecs": [
              "size",
              "resolution",
              "communication"
            ],
            "products": []
          },
          {
            "key": "panel-mount-hmis",
            "slug": "panel-mount-hmis",
            "title": "Title",
            "description": "Description",
            "image": "panel-mount-hmi",
            "featuredSpecs": [
              "size",
              "resolution",
              "mounting"
            ],
            "products": [
              {
                "id": "hmi-panel-mount",
                "slug": "hmi-panel-mount--mount",
                "image": "hmi",
                "title": "HMI-PANEL-MOUNT Panel Mount HMI",
                "description": "Panel Mount HMI with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "Panel Mount HMI",
                  "resolution": "1280 x 800"
                }
              }
            ]
          },
          {
            "key": "mobile-hmis",
            "slug": "mobile-hmis",
            "title": "Title",
            "description": "Description",
            "image": "mobile-hmi",
            "featuredSpecs": [
              "size",
              "battery",
              "connectivity"
            ],
            "products": [
              {
                "id": "hmi-mobile",
                "slug": "hmi-mobile-mobile",
                "image": "hmi",
                "title": "HMI-MOBILE Mobile HMI",
                "description": "Mobile HMI with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "Mobile HMI",
                  "protection": "IP65",
                  "battery": "8 Hour Operation"
                }
              }
            ]
          },
          {
            "key": "miscellaneous",
            "slug": "miscellaneous-hmi",
            "title": "Other hmi",
            "description": "Additional hmi products for specialized industrial applications.",
            "image": "miscellaneous",
            "featuredSpecs": [
              "manufacturer",
              "model",
              "type"
            ],
            "products": [
              {
                "id": "hmi-operator-interface-station",
                "slug": "hmi-operator-interface-station-tation",
                "image": "hmi",
                "title": "HMI-OPERATOR-INTERFACE-STATION Operator Station",
                "description": "Operator Station with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "Operator Station",
                  "processor": "Intel Core i5",
                  "os": "Windows 10 IoT"
                }
              },
              {
                "id": "hmi-web-based-client",
                "slug": "hmi-web-based-client-client",
                "image": "hmi",
                "title": "HMI-WEB-BASED-CLIENT",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "platform": "HTML5 web browser",
                  "responsive": "Automatic screen adaptation",
                  "securityFeatures": "SSL/TLS encryption",
                  "multiUser": "Unlimited concurrent users",
                  "cloudReady": "Cloud deployment capable"
                }
              },
              {
                "id": "hmi-industrial-pc-based",
                "slug": "hmi-industrial-pc-based--based",
                "image": "hmi",
                "title": "HMI-INDUSTRIAL-PC-BASED",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "processor": "Intel Core i7-10700T",
                  "memory": "16GB DDR4 RAM",
                  "storage": "512GB NVMe SSD",
                  "display": "19 to 27 inch industrial monitors",
                  "operatingTemp": "-10°C to +60°C"
                }
              },
              {
                "id": "hmi-portable-handheld",
                "slug": "hmi-portable-handheld-ndheld",
                "image": "hmi",
                "title": "HMI-PORTABLE-HANDHELD",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "displaySize": "5.5 inch color touchscreen",
                  "processor": "ARM Cortex-A53 1.8GHz",
                  "protectionRating": "IP65 ruggedized"
                }
              }
            ]
          }
        ]
      }
    ]
  },
  "mechanical-pumps-spares": {
    "key": "mechanical-pumps-spares",
    "title": "Mechanical Pumps & Spares",
    "description": "Advanced mechanical pumps spares for industrial applications",
    "subcategories": [
      {
        "key": "centrifugal-pumps",
        "title": "Centrifugal",
        "description": "Professional centrifugal pumps for industrial applications",
        "productGroups": [
          {
            "key": "single-stage-centrifugal",
            "slug": "single-stage-centrifugal",
            "title": "Title",
            "description": "Description",
            "image": "single-stage-centrifugal",
            "featuredSpecs": [
              "flow",
              "head",
              "power"
            ],
            "products": [
              {
                "id": "centrifugal-pump-end-suction",
                "slug": "centrifugal-pump-end-suction-uction",
                "image": "centrifugal-pumps",
                "title": "CENTRIFUGAL-PUMP-END-SUCTION End Suction",
                "description": "End Suction with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "End Suction",
                  "flow": "10-500 m³/h",
                  "head": "10-120 m",
                  "power": "0.5-75 kW",
                  "material": "Cast Iron/SS316"
                }
              },
              {
                "id": "centrifugal-pump-multi-stage",
                "slug": "centrifugal-pump-multi-stage--stage",
                "image": "centrifugal-pumps",
                "title": "CENTRIFUGAL-PUMP-MULTI-STAGE Multi-stage",
                "description": "Multi-stage with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "Multi-stage",
                  "flow": "5-200 m³/h",
                  "head": "50-500 m",
                  "stages": "2-15 Stages",
                  "efficiency": "up to 85%"
                }
              },
              {
                "id": "centrifugal-pump-chemical-process",
                "slug": "centrifugal-pump-chemical-process-rocess",
                "image": "centrifugal-pumps",
                "title": "CENTRIFUGAL-PUMP-CHEMICAL-PROCESS Chemical Process",
                "description": "Chemical Process with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "Chemical Process",
                  "flow": "5-1000 m³/h",
                  "head": "20-200 m",
                  "sealType": "Mechanical Seal"
                }
              },
              {
                "id": "centrifugal-pump-split-case-double-suction",
                "slug": "centrifugal-pump-split-case-double-suction-uction",
                "image": "centrifugal-pumps",
                "title": "CENTRIFUGAL-PUMP-SPLIT-CASE-DOUBLE-SUCTION",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "flowRange": "100 to 15000 GPM",
                  "headRange": "Up to 800 feet",
                  "suctionType": "Double suction",
                  "pressureRating": "150 to 300 PSI",
                  "temperatureRange": "32°F to +250°F"
                }
              },
              {
                "id": "centrifugal-pump-vertical-turbine",
                "slug": "centrifugal-pump-vertical-turbine-urbine",
                "image": "centrifugal-pumps",
                "title": "CENTRIFUGAL-PUMP-VERTICAL-TURBINE",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "flowRange": "25 to 10000 GPM",
                  "headRange": "Up to 1500 feet",
                  "shaftMaterial": "Stainless Steel",
                  "temperatureRange": "32°F to +200°F"
                }
              },
              {
                "id": "centrifugal-pump-close-coupled",
                "slug": "centrifugal-pump-close-coupled-oupled",
                "image": "centrifugal-pumps",
                "title": "CENTRIFUGAL-PUMP-CLOSE-COUPLED",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "flowRange": "5 to 500 GPM",
                  "headRange": "Up to 300 feet",
                  "mounting": "Close-coupled to motor",
                  "pressureRating": "125 to 250 PSI",
                  "temperatureRange": "-20°F to +180°F"
                }
              }
            ]
          },
          {
            "key": "multi-stage-centrifugal",
            "slug": "multi-stage-centrifugal",
            "title": "Title",
            "description": "Description",
            "image": "multi-stage-centrifugal",
            "featuredSpecs": [
              "flow",
              "head",
              "stages"
            ],
            "products": []
          },
          {
            "key": "vertical-centrifugal",
            "slug": "vertical-centrifugal",
            "title": "Title",
            "description": "Description",
            "image": "vertical-centrifugal",
            "featuredSpecs": [
              "flow",
              "head",
              "installation"
            ],
            "products": []
          }
        ]
      },
      {
        "key": "diaphragm-pumps",
        "title": "Diaphragm",
        "description": "Professional diaphragm pumps for industrial applications",
        "productGroups": [
          {
            "key": "air-operated-diaphragm",
            "slug": "air-operated-diaphragm",
            "title": "Title",
            "description": "Description",
            "image": "air-operated-diaphragm",
            "featuredSpecs": [
              "flow",
              "pressure",
              "material"
            ],
            "products": [
              {
                "id": "diaphragm-pump-air-operated",
                "slug": "diaphragm-pump-air-operated-erated",
                "image": "diaphragm-pumps",
                "title": "DIAPHRAGM-PUMP-AIR-OPERATED Air Operated",
                "description": "Air Operated with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "Air Operated",
                  "flow": "1-200 L/min",
                  "pressure": "0.2-8.5 bar",
                  "viscosity": "up to 1000 cP"
                }
              },
              {
                "id": "diaphragm-pump-electric-metering",
                "slug": "diaphragm-pump-electric-metering-tering",
                "image": "diaphragm-pumps",
                "title": "DIAPHRAGM-PUMP-ELECTRIC-METERING Electric Metering",
                "description": "Electric Metering with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±1% accuracy"
                ],
                "specs": {
                  "type": "Electric Metering",
                  "flow": "0.1-50 L/h",
                  "pressure": "up to 25 bar",
                  "accuracy": "±1%"
                }
              },
              {
                "id": "diaphragm-pump-hydraulic-high-pressure",
                "slug": "diaphragm-pump-hydraulic-high-pressure-essure",
                "image": "diaphragm-pumps",
                "title": "DIAPHRAGM-PUMP-HYDRAULIC-HIGH-PRESSURE Hydraulic HP",
                "description": "Hydraulic HP with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "Hydraulic HP",
                  "flow": "10-500 L/h",
                  "pressure": "up to 700 bar",
                  "power": "5-50 kW",
                  "applications": "High Pressure Cleaning"
                }
              }
            ]
          },
          {
            "key": "electric-diaphragm",
            "slug": "electric-diaphragm",
            "title": "Title",
            "description": "Description",
            "image": "electric-diaphragm",
            "featuredSpecs": [
              "flow",
              "pressure",
              "power"
            ],
            "products": []
          },
          {
            "key": "hydraulic-diaphragm",
            "slug": "hydraulic-diaphragm",
            "title": "Title",
            "description": "Description",
            "image": "hydraulic-diaphragm",
            "featuredSpecs": [
              "flow",
              "pressure",
              "hydraulic"
            ],
            "products": []
          }
        ]
      },
      {
        "key": "gear-pumps",
        "title": "Gear",
        "description": "Professional gear pumps for industrial applications",
        "productGroups": [
          {
            "key": "external-gear-pumps",
            "slug": "external-gear-pumps",
            "title": "Title",
            "description": "Description",
            "image": "external-gear-pump",
            "featuredSpecs": [
              "flow",
              "pressure",
              "viscosity"
            ],
            "products": [
              {
                "id": "gear-pump-external-positive-displacement",
                "slug": "gear-pump-external-positive-displacement-cement",
                "image": "gear-pumps",
                "title": "GEAR-PUMP-EXTERNAL-POSITIVE-DISPLACEMENT External Gear",
                "description": "External Gear with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Operating temperature: -40°C to +200°C"
                ],
                "specs": {
                  "type": "External Gear",
                  "flow": "0.5-500 L/min",
                  "pressure": "up to 250 bar",
                  "temperature": "-40°C to +200°C"
                }
              },
              {
                "id": "gear-pump-internal-smooth-flow",
                "slug": "gear-pump-internal-smooth-flow-h-flow",
                "image": "gear-pumps",
                "title": "GEAR-PUMP-INTERNAL-SMOOTH-FLOW Internal Gear",
                "description": "Internal Gear with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "Internal Gear",
                  "flow": "1-300 L/min",
                  "pressure": "up to 100 bar",
                  "noise": "Low Noise Design"
                }
              },
              {
                "id": "gear-pump-magnetic-drive-sealless",
                "slug": "gear-pump-magnetic-drive-sealless-alless",
                "image": "gear-pumps",
                "title": "GEAR-PUMP-MAGNETIC-DRIVE-SEALLESS Magnetic Drive",
                "description": "Magnetic Drive with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "Magnetic Drive",
                  "flow": "0.2-200 L/min",
                  "pressure": "up to 16 bar",
                  "containment": "Zero Leakage"
                }
              }
            ]
          },
          {
            "key": "internal-gear-pumps",
            "slug": "internal-gear-pumps",
            "title": "Title",
            "description": "Description",
            "image": "internal-gear-pump",
            "featuredSpecs": [
              "flow",
              "pressure",
              "viscosity"
            ],
            "products": []
          },
          {
            "key": "magnetic-gear-pumps",
            "slug": "magnetic-gear-pumps",
            "title": "Title",
            "description": "Description",
            "image": "magnetic-gear-pump",
            "featuredSpecs": [
              "flow",
              "pressure",
              "sealing"
            ],
            "products": []
          }
        ]
      },
      {
        "key": "pump-parts-spares",
        "title": "Pump",
        "description": "Professional pump parts spares for industrial applications",
        "productGroups": [
          {
            "key": "impellers-casings",
            "slug": "impellers-casings",
            "title": "Title",
            "description": "Description",
            "image": "impeller-casing",
            "featuredSpecs": [
              "material",
              "size",
              "compatibility"
            ],
            "products": []
          },
          {
            "key": "seals-gaskets",
            "slug": "seals-gaskets",
            "title": "Title",
            "description": "Description",
            "image": "seal-gasket",
            "featuredSpecs": [
              "material",
              "temperature",
              "pressure"
            ],
            "products": []
          },
          {
            "key": "bearings-couplings",
            "slug": "bearings-couplings",
            "title": "Title",
            "description": "Description",
            "image": "bearing-coupling",
            "featuredSpecs": [
              "type",
              "load",
              "speed"
            ],
            "products": []
          },
          {
            "key": "miscellaneous",
            "slug": "miscellaneous-pump-parts-spares",
            "title": "Other pump parts spares",
            "description": "Additional pump parts spares products for specialized industrial applications.",
            "image": "miscellaneous",
            "featuredSpecs": [
              "manufacturer",
              "model",
              "type"
            ],
            "products": [
              {
                "id": "pump-spare-impeller-bronze",
                "slug": "pump-spare-impeller-bronze-bronze",
                "image": "pump-parts-spares",
                "title": "PUMP-SPARE-IMPELLER-BRONZE",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "material": "Bronze C95400",
                  "design": "Closed impeller",
                  "diameter": "4 to 24 inches",
                  "keyway": "Standard keyway",
                  "balancing": "Dynamically balanced",
                  "finish": "Machined finish"
                }
              },
              {
                "id": "pump-spare-mechanical-seal-cartridge",
                "slug": "pump-spare-mechanical-seal-cartridge-tridge",
                "image": "pump-parts-spares",
                "title": "PUMP-SPARE-MECHANICAL-SEAL-CARTRIDGE Cartridge mechanical seal",
                "description": "Cartridge mechanical seal with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Operating temperature: -40°F to +400°F"
                ],
                "specs": {
                  "type": "Cartridge mechanical seal",
                  "faces": "Carbon vs ceramic",
                  "spring": "Multiple coil springs",
                  "temperature": "-40°F to +400°F",
                  "pressure": "Up to 300 PSI"
                }
              },
              {
                "id": "pump-spare-wear-ring-stainless",
                "slug": "pump-spare-wear-ring-stainless-inless",
                "image": "pump-parts-spares",
                "title": "PUMP-SPARE-WEAR-RING-STAINLESS",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "material": "316 Stainless Steel",
                  "hardness": "HRC 28-32",
                  "clearance": "0.008 to 0.030 inch",
                  "finish": "Ground and polished",
                  "sizes": "2 to 30 inch OD",
                  "thickness": "1/8 to 1 inch"
                }
              },
              {
                "id": "pump-spare-shaft-416-stainless",
                "slug": "pump-spare-shaft-416-stainless-inless",
                "image": "pump-parts-spares",
                "title": "PUMP-SPARE-SHAFT-416-STAINLESS",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "material": "416 Stainless Steel",
                  "hardness": "HRC 28-32",
                  "diameter": "3/4 to 8 inches",
                  "length": "12 to 120 inches",
                  "keyway": "Standard or metric",
                  "surface": "Turned and polished"
                }
              },
              {
                "id": "pump-spare-bearing-frame-cast-iron",
                "slug": "pump-spare-bearing-frame-cast-iron-t-iron",
                "image": "pump-parts-spares",
                "title": "PUMP-SPARE-BEARING-FRAME-CAST-IRON",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "material": "Gray cast iron ASTM A48",
                  "bearingType": "Ball or roller bearings",
                  "lubrication": "Oil bath or grease",
                  "mounting": "Foot or flange mounted",
                  "size": "2 to 14 inch shaft",
                  "finish": "Machined and painted"
                }
              },
              {
                "id": "pump-spare-gasket-kit-complete",
                "slug": "pump-spare-gasket-kit-complete-mplete",
                "image": "pump-parts-spares",
                "title": "PUMP-SPARE-GASKET-KIT-COMPLETE",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Operating temperature: -65°F to +400°F"
                ],
                "specs": {
                  "temperature": "-65°F to +400°F",
                  "pressure": "Up to 600 PSI",
                  "kit": "Complete gasket and O-ring set",
                  "compatibility": "Standard ANSI pumps",
                  "shelf": "5 year shelf life"
                }
              }
            ]
          }
        ]
      }
    ]
  },
  "solar-products": {
    "key": "solar-products",
    "title": "Solar Products",
    "description": "Advanced solar products for industrial applications",
    "subcategories": [
      {
        "key": "solar-panels",
        "title": "Solar",
        "description": "Professional solar panels for industrial applications",
        "productGroups": [
          {
            "key": "monocrystalline-panels",
            "slug": "monocrystalline-panels",
            "title": "Title",
            "description": "Description",
            "image": "monocrystalline-panel",
            "featuredSpecs": [
              "power",
              "efficiency",
              "voltage"
            ],
            "products": [
              {
                "id": "solar-panel-monocrystalline-450w",
                "slug": "solar-panel-monocrystalline-450w-e-450w",
                "image": "solar-panels",
                "title": "SOLAR-PANEL-MONOCRYSTALLINE-450W",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "41.5V operating voltage"
                ],
                "specs": {
                  "power": "450W",
                  "efficiency": "22.1%",
                  "voltage": "41.5V",
                  "current": "10.84A",
                  "dimensions": "2094x1038x35mm",
                  "weight": "24kg",
                  "warranty": "25 Years",
                  "cellType": "Monocrystalline PERC"
                }
              }
            ]
          },
          {
            "key": "polycrystalline-panels",
            "slug": "polycrystalline-panels",
            "title": "Title",
            "description": "Description",
            "image": "polycrystalline-panel",
            "featuredSpecs": [
              "power",
              "efficiency",
              "voltage"
            ],
            "products": [
              {
                "id": "solar-panel-polycrystalline-330w",
                "slug": "solar-panel-polycrystalline-330w-e-330w",
                "image": "solar-panels",
                "title": "SOLAR-PANEL-POLYCRYSTALLINE-330W",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "37.8V operating voltage"
                ],
                "specs": {
                  "power": "330W",
                  "efficiency": "17.2%",
                  "voltage": "37.8V",
                  "current": "8.73A",
                  "dimensions": "1956x992x40mm",
                  "weight": "22kg",
                  "warranty": "20 Years",
                  "cellType": "Polycrystalline"
                }
              }
            ]
          },
          {
            "key": "thin-film-panels",
            "slug": "thin-film-panels",
            "title": "Title",
            "description": "Description",
            "image": "thin-film-panel",
            "featuredSpecs": [
              "power",
              "efficiency",
              "technology"
            ],
            "products": []
          },
          {
            "key": "miscellaneous",
            "slug": "miscellaneous-solar-panels",
            "title": "Other solar panels",
            "description": "Additional solar panels products for specialized industrial applications.",
            "image": "miscellaneous",
            "featuredSpecs": [
              "manufacturer",
              "model",
              "type"
            ],
            "products": [
              {
                "id": "solar-panel-bifacial-500w",
                "slug": "solar-panel-bifacial-500w-l-500w",
                "image": "solar-panels",
                "title": "SOLAR-PANEL-BIFACIAL-500W",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "41.7V operating voltage"
                ],
                "specs": {
                  "power": "500W",
                  "efficiency": "21.0%",
                  "voltage": "41.7V",
                  "current": "12.0A",
                  "dimensions": "2108x1048x35mm",
                  "weight": "25kg",
                  "warranty": "30 Years",
                  "cellType": "Bifacial PERC"
                }
              },
              {
                "id": "solar-panel-flexible-100w",
                "slug": "solar-panel-flexible-100w-e-100w",
                "image": "solar-panels",
                "title": "SOLAR-PANEL-FLEXIBLE-100W",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "18.2V operating voltage"
                ],
                "specs": {
                  "power": "100W",
                  "efficiency": "22.5%",
                  "voltage": "18.2V",
                  "current": "5.49A",
                  "dimensions": "1480x670x2.5mm",
                  "weight": "3.2kg",
                  "warranty": "10 Years",
                  "cellType": "Flexible Monocrystalline"
                }
              },
              {
                "id": "solar-panel-commercial-550w",
                "slug": "solar-panel-commercial-550w-l-550w",
                "image": "solar-panels",
                "title": "SOLAR-PANEL-COMMERCIAL-550W",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "41.9V operating voltage"
                ],
                "specs": {
                  "power": "550W",
                  "efficiency": "21.7%",
                  "voltage": "41.9V",
                  "current": "13.13A",
                  "dimensions": "2279x1134x35mm",
                  "weight": "28kg",
                  "warranty": "25 Years",
                  "cellType": "Monocrystalline Half-Cell"
                }
              },
              {
                "id": "solar-panel-portable-200w",
                "slug": "solar-panel-portable-200w-e-200w",
                "image": "solar-panels",
                "title": "SOLAR-PANEL-PORTABLE-200W",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "20.4V operating voltage"
                ],
                "specs": {
                  "power": "200W",
                  "efficiency": "23.2%",
                  "voltage": "20.4V",
                  "current": "9.8A",
                  "dimensions": "540x1480x25mm",
                  "weight": "6.8kg",
                  "warranty": "15 Years",
                  "cellType": "Foldable Monocrystalline"
                }
              }
            ]
          }
        ]
      },
      {
        "key": "solar-inverters",
        "title": "Solar",
        "description": "Professional solar inverters for industrial applications",
        "productGroups": [
          {
            "key": "string-inverters",
            "slug": "string-inverters",
            "title": "Title",
            "description": "Description",
            "image": "string-inverter",
            "featuredSpecs": [
              "power",
              "efficiency",
              "mppt"
            ],
            "products": [
              {
                "id": "solar-inverter-string-8kw",
                "slug": "solar-inverter-string-8kw-ng-8kw",
                "image": "solar-inverters",
                "title": "SOLAR-INVERTER-STRING-8KW",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "power": "8000W",
                  "efficiency": "97.8%",
                  "inputVoltage": "150-600V DC",
                  "outputVoltage": "230V AC",
                  "maxInputCurrent": "16A",
                  "displayType": "LCD with WiFi Monitoring",
                  "warranty": "12 Years"
                }
              }
            ]
          },
          {
            "key": "micro-inverters",
            "slug": "micro-inverters",
            "title": "Title",
            "description": "Description",
            "image": "micro-inverter",
            "featuredSpecs": [
              "power",
              "efficiency",
              "monitoring"
            ],
            "products": []
          },
          {
            "key": "power-optimizers",
            "slug": "power-optimizers",
            "title": "Title",
            "description": "Description",
            "image": "power-optimizer",
            "featuredSpecs": [
              "power",
              "efficiency",
              "monitoring"
            ],
            "products": []
          },
          {
            "key": "miscellaneous",
            "slug": "miscellaneous-solar-inverters",
            "title": "Other solar inverters",
            "description": "Additional solar inverters products for specialized industrial applications.",
            "image": "miscellaneous",
            "featuredSpecs": [
              "manufacturer",
              "model",
              "type"
            ],
            "products": [
              {
                "id": "solar-inverter-grid-tie-5kw",
                "slug": "solar-inverter-grid-tie-5kw-ie-5kw",
                "image": "solar-inverters",
                "title": "SOLAR-INVERTER-GRID-TIE-5KW",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "power": "5000W",
                  "efficiency": "97.6%",
                  "inputVoltage": "120-500V DC",
                  "outputVoltage": "230V AC",
                  "maxInputCurrent": "12.5A",
                  "displayType": "LCD with WiFi",
                  "warranty": "10 Years"
                }
              },
              {
                "id": "solar-inverter-hybrid-3kw",
                "slug": "solar-inverter-hybrid-3kw-id-3kw",
                "image": "solar-inverters",
                "title": "SOLAR-INVERTER-HYBRID-3KW",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "power": "3000W",
                  "efficiency": "96.8%",
                  "inputVoltage": "120-450V DC",
                  "outputVoltage": "230V AC",
                  "batteryVoltage": "48V DC",
                  "displayType": "OLED with App Control",
                  "warranty": "5 Years"
                }
              },
              {
                "id": "solar-inverter-offgrid-2kw",
                "slug": "solar-inverter-offgrid-2kw-id-2kw",
                "image": "solar-inverters",
                "title": "SOLAR-INVERTER-OFFGRID-2KW",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "power": "2000W",
                  "efficiency": "95.2%",
                  "inputVoltage": "100-400V DC",
                  "outputVoltage": "230V AC",
                  "batteryVoltage": "24V DC",
                  "displayType": "LED Indicators",
                  "warranty": "3 Years"
                }
              },
              {
                "id": "solar-inverter-microinverter-300w",
                "slug": "solar-inverter-microinverter-300w-r-300w",
                "image": "solar-inverters",
                "title": "SOLAR-INVERTER-MICROINVERTER-300W",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "power": "300W",
                  "efficiency": "96.5%",
                  "inputVoltage": "16-48V DC",
                  "outputVoltage": "230V AC",
                  "maxInputCurrent": "11A",
                  "displayType": "Status LEDs",
                  "warranty": "25 Years"
                }
              },
              {
                "id": "solar-inverter-commercial-10kw",
                "slug": "solar-inverter-commercial-10kw-l-10kw",
                "image": "solar-inverters",
                "title": "SOLAR-INVERTER-COMMERCIAL-10KW",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "power": "10000W",
                  "efficiency": "98.2%",
                  "inputVoltage": "200-800V DC",
                  "outputVoltage": "400V AC 3-Phase",
                  "maxInputCurrent": "22A",
                  "displayType": "Touchscreen with Ethernet",
                  "warranty": "15 Years"
                }
              }
            ]
          }
        ]
      }
    ]
  },
  "safety-protective-devices": {
    "key": "safety-protective-devices",
    "title": "Safety & Protective Devices",
    "description": "Advanced safety protective devices for industrial applications",
    "subcategories": [
      {
        "key": "surge-protectors",
        "title": "Surge",
        "description": "Professional surge protectors for industrial applications",
        "productGroups": [
          {
            "key": "ac-surge-protectors",
            "slug": "ac-surge-protectors",
            "title": "Title",
            "description": "Description",
            "image": "ac-surge-protector",
            "featuredSpecs": [
              "voltage",
              "current",
              "energy"
            ],
            "products": [
              {
                "id": "surge-protector-ac-type1",
                "slug": "surge-protector-ac-type1--type1",
                "image": "surge-protectors",
                "title": "SURGE-PROTECTOR-AC-TYPE1 Type 1 (Class B)",
                "description": "Type 1 (Class B) with advanced features for reliable performance in industrial applications.",
                "features": [
                  "230/400V AC operating voltage"
                ],
                "specs": {
                  "type": "Type 1 (Class B)",
                  "voltage": "230/400V AC",
                  "maxDischargeCurrents": "100kA (8/20μs)",
                  "protectionLevel": "Up ≤ 2.5kV",
                  "responseTime": "< 25ns",
                  "operatingTemp": "-40°C to +85°C",
                  "warranty": "5 Years"
                }
              },
              {
                "id": "surge-protector-dc-solar",
                "slug": "surge-protector-dc-solar--solar",
                "image": "surge-protectors",
                "title": "SURGE-PROTECTOR-DC-SOLAR DC Type 2 for Solar",
                "description": "DC Type 2 for Solar with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "DC Type 2 for Solar",
                  "maxDischargeCurrents": "40kA (8/20μs)",
                  "protectionLevel": "Up ≤ 2.0kV",
                  "responseTime": "< 1μs",
                  "operatingTemp": "-40°C to +85°C",
                  "warranty": "10 Years"
                }
              },
              {
                "id": "surge-protector-type2-distribution",
                "slug": "surge-protector-type2-distribution-bution",
                "image": "surge-protectors",
                "title": "SURGE-PROTECTOR-TYPE2-DISTRIBUTION Type 2 (Class C)",
                "description": "Type 2 (Class C) with advanced features for reliable performance in industrial applications.",
                "features": [
                  "230/400V AC TN/TT operating voltage"
                ],
                "specs": {
                  "type": "Type 2 (Class C)",
                  "voltage": "230/400V AC TN/TT",
                  "maxDischargeCurrents": "40kA (8/20μs)",
                  "protectionLevel": "Up ≤ 1.5kV",
                  "responseTime": "< 25ns",
                  "operatingTemp": "-40°C to +80°C",
                  "warranty": "5 Years"
                }
              },
              {
                "id": "surge-protector-signal-data",
                "slug": "surge-protector-signal-data-l-data",
                "image": "surge-protectors",
                "title": "SURGE-PROTECTOR-SIGNAL-DATA Signal/Data Line Protection",
                "description": "Signal/Data Line Protection with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "Signal/Data Line Protection",
                  "maxDischargeCurrents": "10kA (8/20μs)",
                  "protectionLevel": "Up ≤ 6V",
                  "responseTime": "< 1ns",
                  "bandwidth": "DC to 100MHz",
                  "warranty": "3 Years"
                }
              },
              {
                "id": "surge-protector-ethernet-poe",
                "slug": "surge-protector-ethernet-poe-et-poe",
                "image": "surge-protectors",
                "title": "SURGE-PROTECTOR-ETHERNET-POE Ethernet with PoE Protection",
                "description": "Ethernet with PoE Protection with advanced features for reliable performance in industrial applications.",
                "features": [
                  "48V DC (PoE+) operating voltage"
                ],
                "specs": {
                  "type": "Ethernet with PoE Protection",
                  "voltage": "48V DC (PoE+)",
                  "maxDischargeCurrents": "5kA (8/20μs)",
                  "dataRate": "10/100/1000 Mbps",
                  "responseTime": "< 1ns",
                  "connectors": "RJ45 shielded",
                  "warranty": "5 Years"
                }
              },
              {
                "id": "surge-protector-telecom-rj11",
                "slug": "surge-protector-telecom-rj11-m-rj11",
                "image": "surge-protectors",
                "title": "SURGE-PROTECTOR-TELECOM-RJ11 Telecom Line Protection",
                "description": "Telecom Line Protection with advanced features for reliable performance in industrial applications.",
                "features": [
                  "60V DC operating operating voltage"
                ],
                "specs": {
                  "type": "Telecom Line Protection",
                  "voltage": "60V DC operating",
                  "maxDischargeCurrents": "10kA (8/20μs)",
                  "protectionLevel": "Up ≤ 6V",
                  "responseTime": "< 1ns",
                  "connectors": "RJ11/RJ12/RJ45",
                  "warranty": "3 Years"
                }
              }
            ]
          },
          {
            "key": "dc-surge-protectors",
            "slug": "dc-surge-protectors",
            "title": "Title",
            "description": "Description",
            "image": "dc-surge-protector",
            "featuredSpecs": [
              "voltage",
              "current",
              "energy"
            ],
            "products": []
          },
          {
            "key": "signal-surge-protectors",
            "slug": "signal-surge-protectors",
            "title": "Title",
            "description": "Description",
            "image": "signal-surge-protector",
            "featuredSpecs": [
              "signal",
              "protection",
              "frequency"
            ],
            "products": []
          }
        ]
      },
      {
        "key": "safety-relays-switches",
        "title": "Safety",
        "description": "Professional safety relays switches for industrial applications",
        "productGroups": [
          {
            "key": "safety-relays",
            "slug": "safety-relays",
            "title": "Title",
            "description": "Description",
            "image": "safety-relay",
            "featuredSpecs": [
              "safety",
              "contacts",
              "monitoring"
            ],
            "products": [
              {
                "id": "safety-relay-emergency-stop-dual-channel",
                "slug": "safety-relay-emergency-stop-dual-channel-hannel",
                "image": "safety-relays",
                "title": "SAFETY-RELAY-EMERGENCY-STOP-DUAL-CHANNEL Emergency Stop Safety Relay",
                "description": "Emergency Stop Safety Relay with advanced features for reliable performance in industrial applications.",
                "features": [
                  "24V DC / 230V AC operating voltage"
                ],
                "specs": {
                  "type": "Emergency Stop Safety Relay",
                  "channels": "2 Normally Open + 2 Normally Closed",
                  "voltage": "24V DC / 230V AC",
                  "contacts": "4NO + 4NC safety contacts",
                  "response": "<3ms safety response time",
                  "warranty": "5 Years"
                }
              },
              {
                "id": "safety-relay-light-curtain-interface",
                "slug": "safety-relay-light-curtain-interface-erface",
                "image": "safety-relays",
                "title": "SAFETY-RELAY-LIGHT-CURTAIN-INTERFACE Light Curtain Safety Relay",
                "description": "Light Curtain Safety Relay with advanced features for reliable performance in industrial applications.",
                "features": [
                  "24V DC operating voltage"
                ],
                "specs": {
                  "type": "Light Curtain Safety Relay",
                  "inputs": "OSSD (Output Signal Switching Device)",
                  "voltage": "24V DC",
                  "contacts": "2NO + 2NC safety contacts",
                  "muting": "Lamp and muting function",
                  "warranty": "3 Years"
                }
              },
              {
                "id": "safety-relay-gate-switch-monitor",
                "slug": "safety-relay-gate-switch-monitor-onitor",
                "image": "safety-relays",
                "title": "SAFETY-RELAY-GATE-SWITCH-MONITOR Gate Switch Safety Monitor",
                "description": "Gate Switch Safety Monitor with advanced features for reliable performance in industrial applications.",
                "features": [
                  "24V DC operating voltage"
                ],
                "specs": {
                  "type": "Gate Switch Safety Monitor",
                  "inputs": "2 Safety Switches",
                  "voltage": "24V DC",
                  "contacts": "2NO + 2NC + 1NC auxiliary",
                  "feedback": "LED status indication",
                  "warranty": "5 Years"
                }
              },
              {
                "id": "safety-relay-two-hand-control",
                "slug": "safety-relay-two-hand-control-ontrol",
                "image": "safety-relays",
                "title": "SAFETY-RELAY-TWO-HAND-CONTROL Two-Hand Control Safety Relay",
                "description": "Two-Hand Control Safety Relay with advanced features for reliable performance in industrial applications.",
                "features": [
                  "24V DC / 115V AC operating voltage"
                ],
                "specs": {
                  "type": "Two-Hand Control Safety Relay",
                  "operation": "Type IIIC simultaneous operation",
                  "voltage": "24V DC / 115V AC",
                  "timing": "0.5s synchronization window",
                  "contacts": "3NO + 1NC safety contacts",
                  "warranty": "7 Years"
                }
              },
              {
                "id": "safety-relay-speed-monitor",
                "slug": "safety-relay-speed-monitor-onitor",
                "image": "safety-relays",
                "title": "SAFETY-RELAY-SPEED-MONITOR Speed Monitoring Safety Relay",
                "description": "Speed Monitoring Safety Relay with advanced features for reliable performance in industrial applications.",
                "features": [
                  "24V DC operating voltage"
                ],
                "specs": {
                  "type": "Speed Monitoring Safety Relay",
                  "monitoring": "Under/Over Speed Detection",
                  "voltage": "24V DC",
                  "frequency": "0.1Hz to 20kHz",
                  "contacts": "2NO + 2NC safety contacts",
                  "warranty": "5 Years"
                }
              },
              {
                "id": "safety-relay-configurable-logic",
                "slug": "safety-relay-configurable-logic--logic",
                "image": "safety-relays",
                "title": "SAFETY-RELAY-CONFIGURABLE-LOGIC Configurable Safety Logic Module",
                "description": "Configurable Safety Logic Module with advanced features for reliable performance in industrial applications.",
                "features": [
                  "24V DC operating voltage"
                ],
                "specs": {
                  "type": "Configurable Safety Logic Module",
                  "inputs": "16 Safety Inputs",
                  "outputs": "8 Safety Outputs",
                  "voltage": "24V DC",
                  "programming": "Ladder Logic via PC Software",
                  "warranty": "10 Years"
                }
              }
            ]
          },
          {
            "key": "emergency-stops",
            "slug": "emergency-stops",
            "title": "Title",
            "description": "Description",
            "image": "emergency-stop",
            "featuredSpecs": [
              "contacts",
              "operation",
              "standards"
            ],
            "products": []
          },
          {
            "key": "safety-switches",
            "slug": "safety-switches",
            "title": "Title",
            "description": "Description",
            "image": "safety-switch",
            "featuredSpecs": [
              "safety",
              "operation",
              "environment"
            ],
            "products": []
          }
        ]
      },
      {
        "key": "grounding-systems",
        "title": "Grounding",
        "description": "Professional grounding systems for industrial applications",
        "productGroups": [
          {
            "key": "equipment-grounding",
            "slug": "equipment-grounding",
            "title": "Title",
            "description": "Description",
            "image": "equipment-grounding",
            "featuredSpecs": [
              "material",
              "resistance",
              "application"
            ],
            "products": [
              {
                "id": "grounding-rod-copper-clad-8ft",
                "slug": "grounding-rod-copper-clad-8ft-ad-8ft",
                "image": "grounding-systems",
                "title": "GROUNDING-ROD-COPPER-CLAD-8FT",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "material": "Copper Clad Steel",
                  "length": "8 feet (2.4m)",
                  "diameter": "5/8 inch (16mm)",
                  "coating": "99.9% Pure Copper",
                  "resistance": "<25 Ohm typical",
                  "corrosion": "50+ year lifespan",
                  "warranty": "25 Years"
                }
              },
              {
                "id": "grounding-clamp-bronze-heavy-duty",
                "slug": "grounding-clamp-bronze-heavy-duty-y-duty",
                "image": "grounding-systems",
                "title": "GROUNDING-CLAMP-BRONZE-HEAVY-DUTY",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "material": "Silicon Bronze",
                  "conductor": "6 AWG to 2/0 AWG",
                  "rod": "1/2 to 3/4 inch diameter",
                  "torque": "30-35 ft-lbs",
                  "resistance": "<50 milliohms",
                  "corrosion": "Marine grade protection",
                  "warranty": "10 Years"
                }
              },
              {
                "id": "grounding-conductor-bare-copper",
                "slug": "grounding-conductor-bare-copper-copper",
                "image": "grounding-systems",
                "title": "GROUNDING-CONDUCTOR-BARE-COPPER",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Operating temperature: -40°C to +90°C"
                ],
                "specs": {
                  "material": "99.9% Bare Copper",
                  "size": "#4 AWG Stranded",
                  "length": "500 feet per reel",
                  "conductivity": "101% IACS",
                  "temperature": "-40°C to +90°C",
                  "ampacity": "85A at 30°C",
                  "warranty": "Lifetime"
                }
              },
              {
                "id": "grounding-grid-mat-mesh",
                "slug": "grounding-grid-mat-mesh-t-mesh",
                "image": "grounding-systems",
                "title": "GROUNDING-GRID-MAT-MESH",
                "description": "Product with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "material": "Copper Mesh Grid",
                  "size": "4x4 feet sections",
                  "wire": "#6 AWG bare copper",
                  "spacing": "6 inch grid pattern",
                  "resistance": "<5 Ohm per section",
                  "connection": "Cadweld connections",
                  "warranty": "20 Years"
                }
              },
              {
                "id": "grounding-enhancement-compound",
                "slug": "grounding-enhancement-compound-mpound",
                "image": "grounding-systems",
                "title": "GROUNDING-ENHANCEMENT-COMPOUND Clay-based Enhancement Material",
                "description": "Clay-based Enhancement Material with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Operating temperature: -40°F to +180°F"
                ],
                "specs": {
                  "type": "Clay-based Enhancement Material",
                  "resistivity": "0.12 Ohm-meter",
                  "coverage": "50 lbs treats 3 cubic feet",
                  "longevity": "Permanent installation",
                  "environment": "All soil conditions",
                  "temperature": "-40°F to +180°F",
                  "warranty": "30 Years"
                }
              },
              {
                "id": "grounding-test-kit-digital",
                "slug": "grounding-test-kit-digital-igital",
                "image": "grounding-systems",
                "title": "GROUNDING-TEST-KIT-DIGITAL Digital Ground Resistance Tester",
                "description": "Digital Ground Resistance Tester with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±2% reading accuracy"
                ],
                "specs": {
                  "type": "Digital Ground Resistance Tester",
                  "methods": "3-Pole and 4-Pole Testing",
                  "range": "0.01 Ohm to 20k Ohm",
                  "accuracy": "±2% reading",
                  "display": "Large LCD with backlight",
                  "memory": "200 test result storage",
                  "warranty": "3 Years"
                }
              }
            ]
          },
          {
            "key": "system-grounding",
            "slug": "system-grounding",
            "title": "Title",
            "description": "Description",
            "image": "system-grounding",
            "featuredSpecs": [
              "material",
              "resistance",
              "configuration"
            ],
            "products": []
          },
          {
            "key": "lightning-protection",
            "slug": "lightning-protection",
            "title": "Title",
            "description": "Description",
            "image": "lightning-protection",
            "featuredSpecs": [
              "current",
              "material",
              "height"
            ],
            "products": []
          }
        ]
      },
      {
        "key": "intrinsically-safe-equipment",
        "title": "Intrinsically",
        "description": "Professional intrinsically safe equipment for industrial applications",
        "productGroups": [
          {
            "key": "explosion-proof-equipment",
            "slug": "explosion-proof-equipment",
            "title": "Title",
            "description": "Description",
            "image": "explosion-proof",
            "featuredSpecs": [
              "certification",
              "class",
              "temperature"
            ],
            "products": []
          },
          {
            "key": "intrinsically-safe-barriers",
            "slug": "intrinsically-safe-barriers",
            "title": "Title",
            "description": "Description",
            "image": "is-barrier",
            "featuredSpecs": [
              "channels",
              "power",
              "certification"
            ],
            "products": [
              {
                "id": "intrinsic-safe-barrier-isolator",
                "slug": "intrinsic-safe-barrier-isolator-olator",
                "image": "intrinsically-safe-equipment",
                "title": "INTRINSIC-SAFE-BARRIER-ISOLATOR Galvanic Isolation Barrier",
                "description": "Galvanic Isolation Barrier with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "Galvanic Isolation Barrier",
                  "channels": "Single Channel",
                  "input": "4-20mA Current Loop",
                  "output": "4-20mA Isolated",
                  "power": "Loop Powered",
                  "isolation": "2500V AC/DC",
                  "warranty": "5 Years"
                }
              },
              {
                "id": "intrinsic-safe-power-supply-24v",
                "slug": "intrinsic-safe-power-supply-24v-ly-24v",
                "image": "intrinsically-safe-equipment",
                "title": "INTRINSIC-SAFE-POWER-SUPPLY-24V Intrinsically Safe Power Supply",
                "description": "Intrinsically Safe Power Supply with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "Intrinsically Safe Power Supply",
                  "output": "24V DC / 1.5A",
                  "efficiency": "85%",
                  "isolation": "3000V input/output",
                  "mounting": "DIN rail",
                  "warranty": "3 Years"
                }
              },
              {
                "id": "intrinsic-safe-temperature-transmitter",
                "slug": "intrinsic-safe-temperature-transmitter-mitter",
                "image": "intrinsically-safe-equipment",
                "title": "INTRINSIC-SAFE-TEMPERATURE-TRANSMITTER Intrinsically Safe RTD Transmitter",
                "description": "Intrinsically Safe RTD Transmitter with advanced features for reliable performance in industrial applications.",
                "features": [
                  "±±0.1°C accuracy"
                ],
                "specs": {
                  "type": "Intrinsically Safe RTD Transmitter",
                  "output": "4-20mA + HART",
                  "range": "-200°C to +850°C",
                  "accuracy": "±0.1°C",
                  "housing": "Explosion proof",
                  "warranty": "5 Years"
                }
              },
              {
                "id": "intrinsic-safe-junction-box",
                "slug": "intrinsic-safe-junction-box-on-box",
                "image": "intrinsically-safe-equipment",
                "title": "INTRINSIC-SAFE-JUNCTION-BOX Explosion Proof Junction Box",
                "description": "Explosion Proof Junction Box with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Operating temperature: -40°C to +80°C"
                ],
                "specs": {
                  "type": "Explosion Proof Junction Box",
                  "material": "Aluminum Alloy",
                  "entries": "4x M20 cable glands",
                  "terminals": "12 position terminal block",
                  "rating": "IP66/67",
                  "temperature": "-40°C to +80°C",
                  "warranty": "10 Years"
                }
              },
              {
                "id": "intrinsic-safe-handheld-communicator",
                "slug": "intrinsic-safe-handheld-communicator-icator",
                "image": "intrinsically-safe-equipment",
                "title": "INTRINSIC-SAFE-HANDHELD-COMMUNICATOR Intrinsically Safe HART Communicator",
                "description": "Intrinsically Safe HART Communicator with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "Intrinsically Safe HART Communicator",
                  "display": "5 inch color touchscreen",
                  "warranty": "2 Years"
                }
              },
              {
                "id": "intrinsic-safe-led-beacon-light",
                "slug": "intrinsic-safe-led-beacon-light--light",
                "image": "intrinsically-safe-equipment",
                "title": "INTRINSIC-SAFE-LED-BEACON-LIGHT Intrinsically Safe LED Beacon",
                "description": "Intrinsically Safe LED Beacon with advanced features for reliable performance in industrial applications.",
                "features": [
                  "Industrial grade construction",
                  "Reliable performance",
                  "Easy installation"
                ],
                "specs": {
                  "type": "Intrinsically Safe LED Beacon",
                  "light": "High intensity LED array",
                  "power": "24V DC / 0.5A",
                  "visibility": "5 mile visibility",
                  "mounting": "Universal bracket",
                  "warranty": "7 Years"
                }
              }
            ]
          },
          {
            "key": "is-field-devices",
            "slug": "is-field-devices",
            "title": "Title",
            "description": "Description",
            "image": "is-field-device",
            "featuredSpecs": [
              "function",
              "power",
              "certification"
            ],
            "products": []
          }
        ]
      }
    ]
  }
};

// Utility Functions
export const getProductBySlug = (slug: string): Product | undefined => {
  for (const category of Object.values(productCatalog)) {
    for (const subcategory of category.subcategories) {
      for (const productGroup of subcategory.productGroups) {
        const product = productGroup.products.find(p => p.slug === slug);
        if (product) return product;
      }
    }
  }
  return undefined;
};

export const getProductById = (id: string): Product | undefined => {
  for (const category of Object.values(productCatalog)) {
    for (const subcategory of category.subcategories) {
      for (const productGroup of subcategory.productGroups) {
        const product = productGroup.products.find(p => p.id === id);
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
    for (const productGroup of subcategory.productGroups) {
      products.push(...productGroup.products);
    }
  }
  return products;
};

export const getProductsBySubcategory = (categoryKey: string, subcategoryKey: string): Product[] => {
  const category = productCatalog[categoryKey];
  if (!category) return [];
  
  const subcategory = category.subcategories.find(sub => sub.key === subcategoryKey);
  if (!subcategory) return [];
  
  const products: Product[] = [];
  for (const productGroup of subcategory.productGroups) {
    products.push(...productGroup.products);
  }
  return products;
};

export const getProductGroupBySlug = (
  categoryKeyOrSubcategorySlug: string, 
  subcategoryKeyOrGroupSlug: string, 
  groupSlug?: string
): ProductGroup | undefined => {
  // Handle 2-parameter version (subcategorySlug, groupSlug)
  if (!groupSlug) {
    // Map subcategory slug to key and search all categories
    const subcategoryKey = mapSubcategorySlugToKey(categoryKeyOrSubcategorySlug);
    for (const category of Object.values(productCatalog)) {
      const subcategory = category.subcategories.find(sub => sub.key === subcategoryKey);
      if (subcategory) {
        return subcategory.productGroups.find(group => group.slug === subcategoryKeyOrGroupSlug);
      }
    }
    return undefined;
  }
  
  // Handle 3-parameter version (categoryKey, subcategoryKey, groupSlug)
  const category = productCatalog[categoryKeyOrSubcategorySlug];
  if (!category) return undefined;
  
  const subcategoryKey = mapSubcategorySlugToKey(subcategoryKeyOrGroupSlug);
  const subcategory = category.subcategories.find(sub => sub.key === subcategoryKey);
  if (!subcategory) return undefined;
  
  return subcategory.productGroups.find(group => group.slug === groupSlug);
};

export const getAllProductSlugs = (): string[] => {
  const slugs: string[] = [];
  for (const category of Object.values(productCatalog)) {
    for (const subcategory of category.subcategories) {
      for (const productGroup of subcategory.productGroups) {
        for (const product of productGroup.products) {
          slugs.push(product.slug);
        }
      }
    }
  }
  return slugs;
};

export const getAllCategorySlugs = (): string[] => {
  return Object.keys(productCatalog);
};

export const getAllSubcategorySlugs = (): Array<{category: string, subcategory: string}> => {
  const slugs: Array<{category: string, subcategory: string}> = [];
  for (const [categoryKey, category] of Object.entries(productCatalog)) {
    for (const subcategory of category.subcategories) {
      slugs.push({category: categoryKey, subcategory: subcategory.key});
    }
  }
  return slugs;
};

export const getAllProductGroupSlugs = (): Array<{category: string, subcategory: string, group: string}> => {
  const slugs: Array<{category: string, subcategory: string, group: string}> = [];
  for (const [categoryKey, category] of Object.entries(productCatalog)) {
    for (const subcategory of category.subcategories) {
      for (const productGroup of subcategory.productGroups) {
        slugs.push({
          category: categoryKey, 
          subcategory: subcategory.key, 
          group: productGroup.slug
        });
      }
    }
  }
  return slugs;
};

// Additional missing functions needed by the application

export const getProductDetailBySlug = (slug: string, t: any, groupSlug?: string) => {
  const product = getProductBySlug(slug);
  if (!product) return null;
  
  // Find the category and subcategory for this product
  for (const [categoryKey, category] of Object.entries(productCatalog)) {
    for (const subcategory of category.subcategories) {
      for (const productGroup of subcategory.productGroups) {
        if (productGroup.products.some(p => p.slug === slug)) {
          return {
            // Product fields expected by the component
            title: product.title,
            shortDescription: product.description,
            fullDescription: product.description,
            image: product.image,
            categoryName: category.title,
            categoryPath: `/products/subcategory/${subcategory.key}`,
            backLabel: `Back to ${productGroup.title}`,
            
            // Features and benefits
            keyBenefits: product.features || [],
            specifications: Object.entries(product.specs || {}).map(([key, value]) => ({
              label: key,
              value: value
            })),
            applications: [], // Not available in current data structure
            industries: [], // Not available in current data structure
            certifications: [], // Not available in current data structure
            
            // SEO data
            seo: {
              title: `${product.title} | Powerton Engineering`,
              description: product.description,
              keywords: `${product.title}, ${category.title}, ${subcategory.title}`,
              canonicalUrl: `/products/detail/${slug}`
            },
            
            // Original data for reference
            product,
            category,
            subcategory,
            productGroup,
            categoryKey,
            subcategoryKey: subcategory.key,
            groupKey: productGroup.key
          };
        }
      }
    }
  }
  return null;
};

export const getProductsByGroup = (groupKey: string): Product[] => {
  for (const category of Object.values(productCatalog)) {
    for (const subcategory of category.subcategories) {
      const productGroup = subcategory.productGroups.find(group => group.key === groupKey);
      if (productGroup) {
        return productGroup.products;
      }
    }
  }
  return [];
};

// Mapping between subcategory slugs (from URL) and subcategory keys (from productCatalog)
const subcategorySlugToKeyMap: { [slug: string]: string } = {
  "sensors": "sensors-transducers",
  "transmitters": "sensors-transducers", 
  "switches": "switches-indicators",
  "valves": "valves-actuators",
  "analyzers": "sensors-transducers",
  "cables-wires": "cables-wires",
  "connectors-terminals": "connectors-terminals", 
  "circuit-breakers-fuses": "circuit-breakers-fuses",
  "power-supplies": "power-supplies",
  "enclosures": "enclosures",
  "heating-elements": "heating-elements",
  "multimeters": "measurement-instruments",
  "power-quality-analyzers": "measurement-instruments",
  "calibration": "measurement-instruments",
  "plcs": "plcs",
  "scada": "scada",
  "dcs": "dcs", 
  "hmi": "hmi",
  "surge-protectors": "surge-protectors",
  "safety-relays-switches": "safety-relays-switches",
  "intrinsically-safe-equipment": "intrinsically-safe-equipment",
  "centrifugal-pumps": "centrifugal-pumps",
  "diaphragm-pumps": "diaphragm-pumps",
  "gear-pumps": "gear-pumps",
  "pump-parts-spares": "pump-parts-spares",
  "hand-tools": "hand-tools",
  "power-tools": "power-tools", 
  "cutting-tools": "cutting-tools",
  "lifting-equipment": "lifting-equipment",
  "safety-equipment": "safety-equipment",
  "bldc-ceiling-fan": "bldc-ceiling-fan",
  "bldc-cooler-exhaust-motor": "bldc-cooler-exhaust-motor", 
  "bldc-submersible-surface-pump": "bldc-submersible-surface-pump",
  "bldc-table-fan-wall-fan-motor": "bldc-table-fan-wall-fan-motor"
};

// Centralized function to map subcategory slug to key
export const mapSubcategorySlugToKey = (slugOrKey: string): string => {
  return subcategorySlugToKeyMap[slugOrKey] || slugOrKey;
};

export const getGroupsForSubcategory = (subcategorySlugOrKey: string): ProductGroup[] => {
  const subcategoryKey = mapSubcategorySlugToKey(subcategorySlugOrKey);
  
  for (const category of Object.values(productCatalog)) {
    const subcategory = category.subcategories.find(sub => sub.key === subcategoryKey);
    if (subcategory) {
      return subcategory.productGroups;
    }
  }
  return [];
};

export const getProductsForSubcategoryPage = (subcategorySlugOrKey: string): Product[] => {
  const subcategoryKey = mapSubcategorySlugToKey(subcategorySlugOrKey);
  for (const category of Object.values(productCatalog)) {
    const subcategory = category.subcategories.find(sub => sub.key === subcategoryKey);
    if (subcategory) {
      const products: Product[] = [];
      for (const productGroup of subcategory.productGroups) {
        products.push(...productGroup.products);
      }
      return products;
    }
  }
  return [];
};