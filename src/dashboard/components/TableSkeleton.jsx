import { Skeleton } from "@/components/ui/skeleton";

export function TableSkeleton({ columns = 5, rows = 6 }) {
  return (
    <div className="w-full animate-pulse">
      <div className="flex items-center py-4 gap-3">
        <Skeleton className="h-10 w-60" />
      </div>
      <div className="overflow-hidden rounded-md border">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              {Array.from({ length: columns }).map((_, i) => (
                <th key={i} className="px-4 py-3">
                  <Skeleton className="h-4 w-24" />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: rows }).map((_, rowIndex) => (
              <tr key={rowIndex} className="border-b last:border-b-0">
                {Array.from({ length: columns }).map((_, colIndex) => (
                  <td key={colIndex} className="px-4 py-3">
                    <Skeleton className="h-4 w-full" />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between py-4">
        <Skeleton className="h-4 w-48" />
        <div className="flex gap-2">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-20" />
        </div>
      </div>
    </div>
  );
}
