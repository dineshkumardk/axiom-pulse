"use client";

type Tab = "all" | "new" | "final" | "migrated";

interface Props {
  active: Tab;
  onChange: (tab: Tab) => void;
}

const tabs: { key: Tab; label: string }[] = [
  { key: "all", label: "All" },
  { key: "new", label: "New Pairs" },
  { key: "final", label: "Final Stretch" },
  { key: "migrated", label: "Migrated" },
];

export function TokenTabs({ active, onChange }: Props) {
  return (
    <div className="flex gap-2 mb-4">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={`px-4 py-2 text-sm rounded-md border transition ${
            active === tab.key
              ? "bg-black text-white"
              : "bg-white text-gray-600 hover:bg-gray-100"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}