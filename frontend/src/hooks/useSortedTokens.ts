"use client";

import { useMemo, useState } from "react";
import { Token } from "@/types/token";

export type SortKey = keyof Token;
export type SortDirection = "asc" | "desc";

export function useSortedTokens(tokens: Token[]) {
  const [sortKey, setSortKey] = useState<SortKey>("marketCap");
  const [direction, setDirection] = useState<SortDirection>("desc");

  const sortedTokens = useMemo(() => {
    return [...tokens].sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];

      if (typeof aVal === "number" && typeof bVal === "number") {
        return direction === "asc" ? aVal - bVal : bVal - aVal;
      }

      return 0;
    });
  }, [tokens, sortKey, direction]);

  function toggleSort(key: SortKey) {
    if (key === sortKey) {
      setDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setDirection("desc");
    }
  }

  return {
    sortedTokens,
    sortKey,
    direction,
    toggleSort,
  };
}