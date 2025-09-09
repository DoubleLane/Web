import { useQuery } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useDocumentationQueries() {
  const { actor, isFetching } = useActor();

  return useQuery<Array<[string, string]>>({
    queryKey: ["documentation"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllSections();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useDocumentationSection(section: string) {
  const { actor, isFetching } = useActor();

  return useQuery<string | null>({
    queryKey: ["documentation", section],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getSection(section);
    },
    enabled: !!actor && !isFetching && !!section,
  });
}
