"use client";

import { useState } from "react";
import { useTokens } from "@/hooks/useTokens";
import { useSortedTokens } from "@/hooks/useSortedTokens";
import { useFilteredTokens } from "@/hooks/useFilteredTokens";
import { TokenTabs } from "@/components/molecules/TokenTabs";
import { TokenTable } from "@/components/organisms/TokenTable";
import { TableSkeleton } from "@/components/ui/TableSkeleton";
import { useLivePrices } from "@/hooks/useLivePrices";

type Tab = "all" | "new" | "final" | "migrated";

export default function PulsePage() {
  const { data, isLoading, error } = useTokens();
  const [activeTab, setActiveTab] = useState<Tab>("all");

  // Live updates
  useLivePrices();

  const filteredTokens = useFilteredTokens(data ?? [], activeTab);
  const { sortedTokens, toggleSort } = useSortedTokens(filteredTokens);

  if (isLoading) return <TableSkeleton />;
  if (error) return <p className="p-6">Error loading tokens</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Axiom Pulse</h1>

      <TokenTabs active={activeTab} onChange={setActiveTab} />

      <TokenTable tokens={sortedTokens} onSort={toggleSort} />
    </div>
  );
}