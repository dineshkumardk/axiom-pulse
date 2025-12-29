export function TableSkeleton() {
  return (
    <div className="animate-pulse rounded-lg border p-4">
      <div className="h-6 bg-gray-200 rounded w-1/3 mb-4" />

      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex gap-4 mb-3">
          <div className="h-4 bg-gray-200 rounded w-1/4" />
          <div className="h-4 bg-gray-200 rounded w-1/6" />
          <div className="h-4 bg-gray-200 rounded w-1/6" />
          <div className="h-4 bg-gray-200 rounded w-1/6" />
          <div className="h-4 bg-gray-200 rounded w-1/6" />
        </div>
      ))}
    </div>
  );
}