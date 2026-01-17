import { Skeleton } from "@/components/ui/skeleton";

export default function DonationRequestsSkeleton() {
  const placeholderCards = Array(6).fill(0);
  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex items-baseline justify-between mb-6">
        <Skeleton className="h-8 w-64 rounded" />
        <Skeleton className="h-5 w-28 rounded" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {placeholderCards.map((_, idx) => (
          <div key={idx} className="border rounded-lg p-4 space-y-4">
            {/* Blood Group */}
            <Skeleton className="h-12 w-full rounded bg-primary/30" />
            {/* Patient Details */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-3/4 rounded" />
              <Skeleton className="h-4 w-2/3 rounded" />
              <Skeleton className="h-4 w-1/2 rounded" />
              <Skeleton className="h-4 w-1/2 rounded" />
            </div>
            {/* Button */}
            <Skeleton className="h-8 w-24 rounded mx-auto" />
          </div>
        ))}
      </div>
    </section>
  );
}
