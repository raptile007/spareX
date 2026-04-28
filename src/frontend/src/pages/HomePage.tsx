import { useCallback, useEffect, useState } from "react";
import { BrandTabs } from "../components/BrandTabs";
import { CategoryChips } from "../components/CategoryChips";
import { MapSection } from "../components/MapSection";
import { ProductCard } from "../components/ProductCard";
import { ProductModal } from "../components/ProductModal";
import { SearchBar } from "../components/SearchBar";
import { useFilteredParts } from "../hooks/useFilteredParts";
import type { BikePart, Brand, Category, FilterState } from "../types";

const DEFAULT_FILTERS: FilterState = {
  query: "",
  brand: "All",
  category: "All",
};

export function HomePage() {
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);
  const [selectedPart, setSelectedPart] = useState<BikePart | null>(null);
  const [gridVisible, setGridVisible] = useState(true);

  const { data: parts, isLoading } = useFilteredParts(filters);
  const results = parts ?? [];

  // Animate grid on filter change
  const updateFilter = useCallback(
    <K extends keyof FilterState>(key: K, value: FilterState[K]) => {
      setGridVisible(false);
      setTimeout(() => {
        setFilters((prev) => ({ ...prev, [key]: value }));
        setGridVisible(true);
      }, 150);
    },
    [],
  );

  const handleSearch = useCallback(
    (q: string) => updateFilter("query", q),
    [updateFilter],
  );
  const handleBrand = useCallback(
    (b: Brand) => updateFilter("brand", b),
    [updateFilter],
  );
  const handleCategory = useCallback(
    (c: Category) => updateFilter("category", c),
    [updateFilter],
  );

  // Sync URL search params
  useEffect(() => {
    const url = new URL(window.location.href);
    if (filters.query) url.searchParams.set("q", filters.query);
    else url.searchParams.delete("q");
    if (filters.brand !== "All") url.searchParams.set("brand", filters.brand);
    else url.searchParams.delete("brand");
    if (filters.category !== "All")
      url.searchParams.set("cat", filters.category);
    else url.searchParams.delete("cat");
    window.history.replaceState({}, "", url.toString());
  }, [filters]);

  // Restore from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q") ?? "";
    const brand = (params.get("brand") ?? "All") as Brand;
    const category = (params.get("cat") ?? "All") as Category;
    if (q || brand !== "All" || category !== "All") {
      setFilters({ query: q, brand, category });
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero/Search Section */}
      <section
        id="search"
        className="bg-card border-b border-border py-14 px-4 fade-in"
        data-ocid="search.section"
      >
        <div className="container mx-auto max-w-3xl text-center space-y-6">
          <div className="space-y-2">
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground tracking-tight">
              Find Bike Parts Near You
            </h1>
            <p className="text-muted-foreground text-base">
              Search across 1000+ parts from verified sellers near you
            </p>
          </div>

          <SearchBar value={filters.query} onChange={handleSearch} />

          {/* Brand quick-filter pills below search bar */}
          <div className="flex justify-center pt-1">
            <BrandTabs
              selected={filters.brand as Brand}
              onChange={handleBrand}
            />
          </div>
        </div>
      </section>

      {/* Filters + Product Grid */}
      <section
        id="products"
        className="bg-background py-10 px-4"
        data-ocid="products.section"
      >
        <div className="container mx-auto max-w-6xl space-y-6">
          {/* Category chips */}
          <CategoryChips
            selected={filters.category as Category}
            onChange={handleCategory}
          />

          {/* Results count */}
          <p
            className="text-sm text-muted-foreground font-medium"
            data-ocid="products.results_count"
          >
            {isLoading
              ? "Loading parts..."
              : `Showing ${results.length} part${results.length !== 1 ? "s" : ""}`}
          </p>

          {/* Product Grid */}
          <div
            className="transition-opacity duration-200 ease-out"
            style={{ opacity: gridVisible ? 1 : 0.3 }}
            data-ocid="products.list"
          >
            {isLoading ? (
              <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                data-ocid="products.loading_state"
              >
                {(["s1", "s2", "s3", "s4", "s5", "s6"] as const).map((k) => (
                  <div
                    key={k}
                    className="bg-card rounded-xl border border-border h-80 animate-pulse"
                  />
                ))}
              </div>
            ) : results.length === 0 ? (
              <div
                className="flex flex-col items-center justify-center py-20 text-center space-y-3"
                data-ocid="products.empty_state"
              >
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-3xl">
                  🔍
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground">
                  No parts found
                </h3>
                <p className="text-sm text-muted-foreground max-w-xs">
                  Try adjusting your search or filters. Remove a filter to
                  broaden your results.
                </p>
                <button
                  type="button"
                  onClick={() => setFilters(DEFAULT_FILTERS)}
                  className="mt-2 px-5 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-full hover:bg-primary/90 active:scale-[0.97] transition-all duration-150"
                  data-ocid="products.clear_filters_button"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {results.map((part, index) => (
                  <ProductCard
                    key={part.id}
                    part={part}
                    index={index}
                    onClick={setSelectedPart}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section
        className="bg-muted/30 border-t border-border py-10 px-4"
        data-ocid="map.section"
      >
        <div className="container mx-auto max-w-6xl">
          <MapSection />
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedPart && (
        <ProductModal
          part={selectedPart}
          onClose={() => setSelectedPart(null)}
        />
      )}
    </div>
  );
}
