import { StockStatus } from "./backend.d";
import type { BikePart } from "./backend.d";

export { StockStatus };
export type { BikePart };

export interface FilterState {
  query: string;
  brand: string;
  category: string;
}

export const BRANDS = ["All", "KTM", "Honda", "Bajaj", "Yamaha"] as const;
export type Brand = (typeof BRANDS)[number];

export const CATEGORIES = [
  "All",
  "Brakes",
  "Engine",
  "Chain",
  "Tyres",
  "Accessories",
] as const;
export type Category = (typeof CATEGORIES)[number];
