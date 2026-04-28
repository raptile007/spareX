import { MapPin, Phone, Store, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { StockStatus } from "../types";
import type { BikePart } from "../types";

interface ProductModalProps {
  part: BikePart;
  onClose: () => void;
}

function StockLabel({ stock }: { stock: StockStatus }) {
  if (stock === StockStatus.InStock)
    return (
      <span className="stock-badge-in inline-flex items-center gap-1 text-sm font-medium border px-2.5 py-1 rounded-full">
        <span
          className="w-1.5 h-1.5 rounded-full inline-block"
          style={{ backgroundColor: "var(--stock-in-color)" }}
        />
        In Stock
      </span>
    );
  if (stock === StockStatus.Low)
    return (
      <span className="stock-badge-low inline-flex items-center gap-1 text-sm font-medium border px-2.5 py-1 rounded-full">
        <span
          className="w-1.5 h-1.5 rounded-full inline-block"
          style={{ backgroundColor: "var(--stock-low-color)" }}
        />
        Low Stock
      </span>
    );
  return (
    <span className="stock-badge-out inline-flex items-center gap-1 text-sm font-medium border px-2.5 py-1 rounded-full">
      <span
        className="w-1.5 h-1.5 rounded-full inline-block"
        style={{ backgroundColor: "var(--stock-out-color)" }}
      />
      Out of Stock
    </span>
  );
}

export function ProductModal({ part, onClose }: ProductModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const sellerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    // Move focus to close button when modal opens for keyboard users
    const timer = setTimeout(() => closeButtonRef.current?.focus(), 50);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  function handleCheckAvailability() {
    sellerRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    sellerRef.current?.setAttribute("tabindex", "-1");
    sellerRef.current?.focus({ preventScroll: true });
  }

  return (
    <dialog
      open
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-transparent w-full h-full max-w-none max-h-none m-0"
      aria-label={`Details for ${part.name}`}
      data-ocid="product.dialog"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-foreground/20 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
        onKeyDown={(e) => e.key === "Enter" && onClose()}
        role="button"
        tabIndex={0}
        aria-label="Close modal"
      />

      {/* Modal */}
      <div
        className="
          relative bg-card rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,0.15)]
          w-full max-w-lg max-h-[90vh] overflow-y-auto
          animate-in fade-in slide-in-from-bottom-4 duration-300
          border border-border
        "
      >
        {/* Close button — focus managed via useEffect for keyboard users */}
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-background/80 text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-150 active:scale-[0.94]"
          aria-label="Close modal"
          data-ocid="product.close_button"
        >
          <X size={18} />
        </button>

        {/* Image */}
        <div className="h-56 sm:h-64 bg-muted rounded-t-2xl overflow-hidden">
          <img
            src={part.imageUrl}
            alt={part.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Header */}
          <div className="space-y-2">
            <div className="flex items-start justify-between gap-2">
              <h2 className="font-display font-bold text-xl text-foreground leading-snug flex-1">
                {part.name}
              </h2>
              <span className="text-xs font-medium text-muted-foreground bg-secondary border border-border px-2.5 py-1 rounded-full shrink-0">
                {part.brand}
              </span>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <p className="font-display font-bold text-2xl text-accent">
                ₹{part.price.toLocaleString("en-IN")}
              </p>
              <StockLabel stock={part.stock} />
            </div>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin size={13} className="text-accent/70" aria-hidden="true" />
              <span>{part.distance}</span>
            </div>
          </div>

          {/* Description */}
          {part.description && (
            <div className="pt-1">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                Description
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                {part.description}
              </p>
            </div>
          )}

          {/* Seller card */}
          <div
            ref={sellerRef}
            className="bg-muted/50 border border-border rounded-xl p-4 space-y-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          >
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              Seller
            </h3>
            <div className="flex items-center gap-2 text-sm text-foreground font-medium">
              <Store
                size={15}
                className="text-primary shrink-0"
                aria-hidden="true"
              />
              <span>{part.sellerName}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone
                size={14}
                className="text-primary shrink-0"
                aria-hidden="true"
              />
              <span>{part.sellerPhone}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin
                size={14}
                className="text-primary shrink-0"
                aria-hidden="true"
              />
              <span>{part.sellerAddress}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-1">
            <button
              type="button"
              onClick={handleCheckAvailability}
              className="flex-1 bg-primary text-primary-foreground py-3 rounded-xl text-sm font-semibold hover:bg-primary/90 active:scale-[0.98] transition-all duration-150 shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
              data-ocid="product.primary_button"
            >
              Check Availability
            </button>
            <a
              href={`tel:${part.sellerPhone}`}
              className="flex-1 text-center bg-accent text-accent-foreground py-3 rounded-xl text-sm font-semibold hover:bg-accent/90 active:scale-[0.98] transition-all duration-150 shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
              data-ocid="product.secondary_button"
            >
              Contact Seller
            </a>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-full py-2.5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-xl hover:bg-muted transition-all duration-150 active:scale-[0.98]"
            data-ocid="product.cancel_button"
          >
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
}
