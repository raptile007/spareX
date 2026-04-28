import type { backendInterface, BikePart } from "../backend";
import { StockStatus } from "../backend";

const sampleParts: BikePart[] = [
  {
    id: "ktm-001",
    name: "KTM Duke 390 Front Brake Disc",
    brand: "KTM",
    category: "Brakes",
    price: BigInt(3850),
    stock: StockStatus.InStock,
    distance: "1.2 km away",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    description:
      "Genuine KTM Duke 390 front brake disc rotor. High-carbon steel construction for fade-free braking performance. Fits 2013–2023 models.",
    sellerName: "Raj KTM Spares",
    sellerPhone: "+91-98765-11001",
    sellerAddress: "12, MG Road, Koramangala, Bengaluru – 560034",
  },
  {
    id: "ktm-002",
    name: "KTM RC 200 Rear Sprocket Kit",
    brand: "KTM",
    category: "Chain",
    price: BigInt(2100),
    stock: StockStatus.Low,
    distance: "3.4 km away",
    imageUrl:
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=300&fit=crop",
    description:
      "OEM-spec rear sprocket and chain kit for KTM RC 200. Includes 42T sprocket + 520 O-ring chain.",
    sellerName: "Raj KTM Spares",
    sellerPhone: "+91-98765-11001",
    sellerAddress: "12, MG Road, Koramangala, Bengaluru – 560034",
  },
  {
    id: "honda-001",
    name: "Honda CB Shine Brake Shoe Set",
    brand: "Honda",
    category: "Brakes",
    price: BigInt(680),
    stock: StockStatus.InStock,
    distance: "0.8 km away",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    description:
      "Genuine Honda CB Shine front and rear drum brake shoe set. Consistent braking in city and highway conditions.",
    sellerName: "Honda Genuine Parts Store",
    sellerPhone: "+91-90012-33445",
    sellerAddress: "34, Church Street, Sadashivanagar, Bengaluru – 560080",
  },
  {
    id: "honda-002",
    name: "Honda Activa 6G Engine Air Filter",
    brand: "Honda",
    category: "Engine",
    price: BigInt(320),
    stock: StockStatus.InStock,
    distance: "0.8 km away",
    imageUrl:
      "https://images.unsplash.com/photo-1558618047-f4e6e2d0b6e0?w=400&h=300&fit=crop",
    description:
      "OEM Honda Activa 6G air filter element. Prevents dust and debris entering the carburetor.",
    sellerName: "Honda Genuine Parts Store",
    sellerPhone: "+91-90012-33445",
    sellerAddress: "34, Church Street, Sadashivanagar, Bengaluru – 560080",
  },
  {
    id: "bajaj-001",
    name: "Bajaj Pulsar 150 Front Disc Brake Pad",
    brand: "Bajaj",
    category: "Brakes",
    price: BigInt(560),
    stock: StockStatus.InStock,
    distance: "1.8 km away",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    description:
      "Genuine Bajaj Pulsar 150 front semi-metallic brake pad set. High thermal tolerance with consistent stopping power.",
    sellerName: "Bajaj Authorized Spares",
    sellerPhone: "+91-97002-55566",
    sellerAddress: "88, Residency Road, Richmond Town, Bengaluru – 560025",
  },
  {
    id: "yamaha-001",
    name: "Yamaha R15 V4 Brembo Brake Caliper",
    brand: "Yamaha",
    category: "Brakes",
    price: BigInt(6500),
    stock: StockStatus.InStock,
    distance: "2.5 km away",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    description:
      "Genuine Yamaha R15 V4 front Brembo-sourced 2-pot brake caliper. Anodized aluminum body.",
    sellerName: "Yamaha Performance Parts",
    sellerPhone: "+91-96660-77788",
    sellerAddress: "101, Indiranagar 100ft Road, Bengaluru – 560038",
  },
];

function filterParts(
  parts: BikePart[],
  q: string,
  brand: string,
  category: string
): BikePart[] {
  return parts.filter((p) => {
    const matchesQ =
      !q ||
      p.name.toLowerCase().includes(q.toLowerCase()) ||
      p.description.toLowerCase().includes(q.toLowerCase());
    const matchesBrand =
      !brand || brand === "All" || p.brand === brand;
    const matchesCategory =
      !category || category === "All" || p.category === category;
    return matchesQ && matchesBrand && matchesCategory;
  });
}

export const mockBackend: backendInterface = {
  getAllParts: async () => sampleParts,
  filterByBrand: async (brand: string) =>
    filterParts(sampleParts, "", brand, ""),
  filterByCategory: async (category: string) =>
    filterParts(sampleParts, "", "", category),
  getFilteredParts: async (q: string, brand: string, category: string) =>
    filterParts(sampleParts, q, brand, category),
  getPartById: async (id: string) =>
    sampleParts.find((p) => p.id === id) ?? null,
  searchParts: async (q: string) => filterParts(sampleParts, q, "", ""),
};
