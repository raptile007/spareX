import { MapPin } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export function MapSection() {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    once: true,
  });

  return (
    <section
      id="map"
      ref={ref}
      className={`
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      <div className="mb-5">
        <div className="flex items-center gap-2 mb-1">
          <MapPin size={18} className="text-accent" aria-hidden="true" />
          <h2 className="font-display font-semibold text-xl text-foreground">
            Nearby Shops
          </h2>
        </div>
        <p className="text-sm text-muted-foreground ml-6">
          Find parts at stores near you
        </p>
      </div>

      <div
        className="rounded-xl overflow-hidden border border-border shadow-[0_2px_12px_rgba(0,0,0,0.07)]"
        style={{ height: "400px" }}
        data-ocid="map.section"
      >
        <iframe
          title="Nearby bike parts shops in Delhi"
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          src="https://www.openstreetmap.org/export/embed.html?bbox=77.1674%2C28.5945%2C77.2674%2C28.6945&layer=mapnik&marker=28.6445%2C77.2174"
          style={{ border: "none" }}
          loading="lazy"
        />
      </div>

      <p className="text-xs text-muted-foreground mt-2 text-center">
        Map data ©{" "}
        <a
          href="https://www.openstreetmap.org/copyright"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-foreground transition-colors"
        >
          OpenStreetMap
        </a>{" "}
        contributors
      </p>
    </section>
  );
}
