"use client";

import { Token } from "@/types/token";

export function useFilteredTokens(
  tokens: Token[],
  category: "all" | "new" | "final" | "migrated"
) {
  if (category === "all") return tokens;
  return tokens.filter((token) => token.category === category);
}