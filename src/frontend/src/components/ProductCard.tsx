import { MapPin } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { StockStatus } from "../types";
import type { BikePart } from "../types";

interface ProductCardProps {
  part: BikePart;
  index: number;
  onClick: (part: BikePart) => void;
}

function getStockBadge(stock: StockStatus) {
  if (stock === StockStatus.InStock) {
    return (
      <span className="stock-badge-in text-xs font-medium border px-2 py-0.5 rounded-full">
        In Stock
      </span>
    );
  }
  if (stock === StockStatus.Low) {
    return (
      <span className="stock-badge-low text-xs font-medium border px-2 py-0.5 rounded-full">
        Low Stock
      </span>
    );
  }
  return (
    <span className="stock-badge-out text-xs font-medium border px-2 py-0.5 rounded-full">
      Out of Stock
    </span>
  );
}

export function ProductCard({ part, index, onClick }: ProductCardProps) {
  const { ref, isVisible } = useIntersectionObserver<HTMLButtonElement>({
    threshold: 0.08,
    once: true,
  });

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => onClick(part)}
      aria-label={`View details for ${part.name}`}
      data-ocid={`product.item.${index + 1}`}
      className={`
        group bg-card rounded-xl border border-border cursor-pointer text-left w-full
        shadow-[0_2px_8px_rgba(0,0,0,0.06)]
        hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:-translate-y-1
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        transition-[opacity,transform,box-shadow] duration-300 ease-out
      `}
      style={{
        transitionDelay: isVisible ? `${(index % 6) * 60}ms` : "0ms",
      }}
    >
      <div className="relative overflow-hidden rounded-t-xl h-48 bg-muted">
        <img
          src={part.imageUrl}
          alt={part.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute top-3 right-3">
          {getStockBadge(part.stock)}
        </div>
      </div>

      <div className="p-4 space-y-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display font-semibold text-[15px] text-foreground leading-snug line-clamp-2 flex-1">
            {part.name}
          </h3>
          <span className="text-xs font-medium text-muted-foreground bg-secondary border border-border px-2 py-0.5 rounded-full whitespace-nowrap shrink-0">
            {part.brand}
          </span>
        </div>

        <p className="font-display font-bold text-lg text-accent">
          ₹{part.price.toLocaleString("en-IN")}
        </p>

        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin
            size={13}
            className="shrink-0 text-accent/70"
            aria-hidden="true"
          />
          <span>{part.distance}</span>
        </div>
      </div>
    </button>
  );
}
