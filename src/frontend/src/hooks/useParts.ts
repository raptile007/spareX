import { useActor } from "@caffeineai/core-infrastructure";
import { useQuery } from "@tanstack/react-query";
import { createActor } from "../backend";
import { mockBackend } from "../mocks/backend";
import type { BikePart } from "../types";

export function useParts() {
  const { actor, isFetching } = useActor(createActor);

  return useQuery<BikePart[]>({
    queryKey: ["parts", "all"],
    queryFn: async () => {
      if (!actor) return mockBackend.getAllParts();
      try {
        return await actor.getAllParts();
      } catch {
        return mockBackend.getAllParts();
      }
    },
    // Always run — use mock when actor is unavailable
    enabled: !isFetching,
  });
}
