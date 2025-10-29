// Product images with timestamps for automatic popup management
// When you add new product images, set dateAdded to the current date
// The popup will automatically show the 6 newest images
// If no images are newer than 30 days, the popup won't appear

// Import all product images
import krohneOptiflux6300 from "@assets/products-images/krohne-optiflux-6300-flow-meter.jpg";
import krohneOptiflux2300 from "@assets/products-images/krohne-optiflux-2300-flow-meter.jpg";
import pressureTransmitter1 from "@assets/products-images/pressure-transmitter-1.jpg";
import pressureTransmitter2 from "@assets/products-images/pressure-transmitter-2.jpg";
import pressureTransmitter3 from "@assets/products-images/pressure-transmitter-3.jpg";
import circuitBoardPcb from "@assets/products-images/circuit-board-pcb.jpg";
import circuitBoardFront from "@assets/products-images/circuit-board-front.jpg";
import circuitBoardBack from "@assets/products-images/circuit-board-back.jpg";
import rosemountDisplay from "@assets/products-images/rosemount-digital-display.jpg";
import samsonComponent from "@assets/products-images/samson-control-component.jpg";
import honeywellTransmitter from "@assets/products-images/honeywell-transmitter.jpg";
import butterflyValve from "@assets/products-images/butterfly-valve.jpg";
import controlBoxesInventory from "@assets/products-images/control-boxes-inventory.jpg";
import krohneFlowMeterFront from "@assets/products-images/krohne-flow-meter-front.jpg";
import krohneFlowMetersSet from "@assets/products-images/krohne-flow-meters-set.jpg";
import wrappedSensorsInventory from "@assets/products-images/wrapped-sensors-inventory.jpg";

export interface ProductImage {
  id: string;
  title: string;
  image: string;
  category: string;
  dateAdded: string; // ISO date string (YYYY-MM-DD)
}

// All product images - newest first for easy management
export const productImages: ProductImage[] = [
  // ====== ADD NEW PRODUCTS HERE (NEWEST FIRST) ======
  // Example: 
  // Import the image first:
  // import newProduct from "@assets/products-images/new-product.jpg";
  // Then add to the array:
  // {
  //   id: "new-product-1",
  //   title: "New Product Name",
  //   image: newProduct,
  //   category: "Category Name",
  //   dateAdded: "2025-10-28" // Set to today's date when adding
  // },
  
  // ====== EXISTING PRODUCTS (Added October 28, 2025) ======
  {
    id: "krohne-optiflux-6300",
    title: "KROHNE OPTIFLUX 6300 Electromagnetic Flow Meter",
    image: krohneOptiflux6300,
    category: "Flow Measurement",
    dateAdded: "2025-10-29"
  },
  {
    id: "krohne-optiflux-2300",
    title: "KROHNE OPTIFLUX 2300 C Flow Meter",
    image: krohneOptiflux2300,
    category: "Flow Measurement",
    dateAdded: "2025-10-29"
  },
  {
    id: "pressure-transmitter-1",
    title: "Industrial Pressure Transmitter",
    image: pressureTransmitter1,
    category: "Pressure Measurement",
    dateAdded: "2025-10-29"
  },
  {
    id: "pressure-transmitter-2",
    title: "High-Precision Pressure Transmitter",
    image: pressureTransmitter2,
    category: "Pressure Measurement",
    dateAdded: "2025-10-29"
  },
  {
    id: "pressure-transmitter-3",
    title: "Smart Pressure Transmitter with Display",
    image: pressureTransmitter3,
    category: "Pressure Measurement",
    dateAdded: "2025-10-29"
  },
  {
    id: "circuit-board-pcb",
    title: "Industrial PCB Control Board",
    image: circuitBoardPcb,
    category: "Control Systems",
    dateAdded: "2025-10-29"
  },
  {
    id: "circuit-board-front",
    title: "Advanced Circuit Board Assembly",
    image: circuitBoardFront,
    category: "Control Systems",
    dateAdded: "2025-10-28"
  },
  {
    id: "circuit-board-back",
    title: "Circuit Board Back Assembly",
    image: circuitBoardBack,
    category: "Control Systems",
    dateAdded: "2025-10-28"
  },
  {
    id: "rosemount-display",
    title: "ROSEMOUNT Digital Display Unit",
    image: rosemountDisplay,
    category: "Display Units",
    dateAdded: "2025-10-28"
  },
  {
    id: "samson-component",
    title: "SAMSON Control Valve Component",
    image: samsonComponent,
    category: "Valve Components",
    dateAdded: "2025-10-28"
  },
  {
    id: "honeywell-transmitter",
    title: "Honeywell STG74L Smart Transmitter",
    image: honeywellTransmitter,
    category: "Transmitters",
    dateAdded: "2025-10-28"
  },
  {
    id: "butterfly-valve",
    title: "Industrial Butterfly Valve",
    image: butterflyValve,
    category: "Valves",
    dateAdded: "2025-10-28"
  },
  {
    id: "control-boxes-inventory",
    title: "Electrical Control Box Inventory",
    image: controlBoxesInventory,
    category: "Control Panels",
    dateAdded: "2025-10-28"
  },
  {
    id: "krohne-flow-meter-front",
    title: "KROHNE Flow Meter Front View",
    image: krohneFlowMeterFront,
    category: "Flow Measurement",
    dateAdded: "2025-10-28"
  },
  {
    id: "krohne-flow-meters-set",
    title: "KROHNE Flow Meters Set",
    image: krohneFlowMetersSet,
    category: "Flow Measurement",
    dateAdded: "2025-10-28"
  },
  {
    id: "wrapped-sensors-inventory",
    title: "Protected Sensors Inventory",
    image: wrappedSensorsInventory,
    category: "Instrumentation",
    dateAdded: "2025-10-28"
  },
];

// Helper function to get newest products for popup (within last 30 days)
export function getNewestProducts(maxCount: number = 6): ProductImage[] {
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  
  // Filter products added in the last 30 days
  const recentProducts = productImages.filter(product => {
    const productDate = new Date(product.dateAdded);
    return productDate >= thirtyDaysAgo;
  });
  
  // Sort by date (newest first) and return top N
  return recentProducts
    .sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime())
    .slice(0, maxCount);
}

// Helper function to check if popup should be shown
export function shouldShowPopup(): boolean {
  const newestProducts = getNewestProducts(1);
  return newestProducts.length > 0;
}

// Helper function to get all products for gallery (sorted by newest first)
export function getAllProductsForGallery(): ProductImage[] {
  return [...productImages].sort((a, b) => 
    new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
  );
}
