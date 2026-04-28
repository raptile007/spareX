import { useActor } from "@caffeineai/core-infrastructure";
import { useQuery } from "@tanstack/react-query";
import { createActor } from "../backend";
import { mockBackend } from "../mocks/backend";
import type { BikePart, FilterState } from "../types";

export function useFilteredParts(filters: FilterState) {
  const { actor, isFetching } = useActor(createActor);
  const { query, brand, category } = filters;

  const normalizedBrand = brand === "All" ? "" : brand;
  const normalizedCategory = category === "All" ? "" : category;

  return useQuery<BikePart[]>({
    queryKey: ["parts", "filtered", query, normalizedBrand, normalizedCategory],
    queryFn: async () => {
      if (!actor) {
        return mockBackend.getFilteredParts(
          query,
          normalizedBrand,
          normalizedCategory,
        );
      }
      try {
        return await actor.getFilteredParts(
          query,
          normalizedBrand,
          normalizedCategory,
        );
      } catch {
        return mockBackend.getFilteredParts(
          query,
          normalizedBrand,
          normalizedCategory,
        );
      }
    },
    // Always run — use mock when actor is unavailable
    enabled: !isFetching,
  });
}
