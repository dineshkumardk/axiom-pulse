import { useQuery } from "@tanstack/react-query";
import { fetchTokens } from "@/lib/api";
import { Token } from "@/types/token";

export function useTokens() {
  return useQuery<Token[]>({
    queryKey: ["tokens"],
    queryFn: fetchTokens,
  });
}