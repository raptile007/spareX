import { Search, X } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative flex items-center">
        <Search
          className="absolute left-4 text-muted-foreground pointer-events-none"
          size={20}
          aria-hidden="true"
        />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search for parts, models, or brands..."
          className="
            w-full pl-12 pr-10 py-4 text-base
            bg-card text-foreground placeholder:text-muted-foreground
            border border-border rounded-2xl
            shadow-[0_2px_12px_rgba(0,0,0,0.07)]
            outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40
            transition-all duration-200 ease-out
          "
          data-ocid="search.search_input"
          aria-label="Search bike parts"
        />
        {value && (
          <button
            type="button"
            onClick={() => onChange("")}
            className="absolute right-4 text-muted-foreground hover:text-foreground transition-colors duration-150 active:scale-[0.92]"
            aria-label="Clear search"
            data-ocid="search.clear_button"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
}
