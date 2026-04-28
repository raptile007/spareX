import type { Category } from "../types";
import { CATEGORIES } from "../types";

interface CategoryChipsProps {
  selected: Category;
  onChange: (category: Category) => void;
}

export function CategoryChips({ selected, onChange }: CategoryChipsProps) {
  return (
    <fieldset className="flex items-center gap-2 flex-wrap border-none p-0 m-0">
      <legend className="sr-only">Filter by category</legend>
      {CATEGORIES.map((cat) => {
        const isActive = selected === cat;
        return (
          <button
            key={cat}
            type="button"
            onClick={() => onChange(cat)}
            aria-pressed={isActive}
            className={`
              px-4 py-1.5 rounded-full text-sm font-medium
              transition-all duration-200 ease-out active:scale-[0.96]
              border
              ${
                isActive
                  ? "bg-primary text-primary-foreground border-primary shadow-[0_1px_6px_rgba(0,0,0,0.14)]"
                  : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
              }
            `}
            data-ocid={`category.chip.${cat.toLowerCase()}`}
          >
            {cat}
          </button>
        );
      })}
    </fieldset>
  );
}
