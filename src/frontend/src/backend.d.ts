import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface BikePart {
    id: string;
    sellerPhone: string;
    name: string;
    description: string;
    distance: string;
    sellerName: string;
    stock: StockStatus;
    imageUrl: string;
    category: string;
    brand: string;
    price: bigint;
    sellerAddress: string;
}
export enum StockStatus {
    Low = "Low",
    OutOfStock = "OutOfStock",
    InStock = "InStock"
}
export interface backendInterface {
    filterByBrand(brand: string): Promise<Array<BikePart>>;
    filterByCategory(category: string): Promise<Array<BikePart>>;
    getAllParts(): Promise<Array<BikePart>>;
    getFilteredParts(q: string, brand: string, category: string): Promise<Array<BikePart>>;
    getPartById(id: string): Promise<BikePart | null>;
    searchParts(q: string): Promise<Array<BikePart>>;
}
