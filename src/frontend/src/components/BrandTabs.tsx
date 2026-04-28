import type { Brand } from "../types";
import { BRANDS } from "../types";

interface BrandTabsProps {
  selected: Brand;
  onChange: (brand: Brand) => void;
}

export function BrandTabs({ selected, onChange }: BrandTabsProps) {
  return (
    <div
      className="flex items-center gap-1.5 overflow-x-auto scrollbar-hide"
      role="tablist"
      aria-label="Filter by brand"
    >
      {BRANDS.map((brand) => {
        const isActive = selected === brand;
        return (
          <button
            key={brand}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(brand)}
            className={`
              px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap
              transition-all duration-200 ease-out active:scale-[0.97]
              border
              ${
                isActive
                  ? "bg-accent text-accent-foreground border-accent shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
                  : "bg-card text-muted-foreground border-border hover:border-accent/40 hover:text-foreground hover:bg-muted/60"
              }
            `}
            data-ocid={`brand.tab.${brand.toLowerCase()}`}
          >
            {brand}
          </button>
        );
      })}
    </div>
  );
}
