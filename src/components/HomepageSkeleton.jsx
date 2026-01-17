import { Skeleton } from "@/components/ui/skeleton";

export default function HomepageSkeleton() {
  return (
    <>
      <TopbarSkeleton />
      <NavbarSkeleton />
      <DonationRequestsSkeleton />
    </>
  );
}
function TopbarSkeleton() {
  return (
    <div className="w-full border-b bg-card text-card-foreground">
      <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 text-xs">
        {/* Left text skeleton */}
        <div className="hidden sm:block">
          <Skeleton className="h-3 w-32 rounded bg-muted animate-pulse" />
        </div>
        {/* Center time skeleton */}
        <div className="font-medium text-muted-foreground flex items-center gap-2">
          <Skeleton className="h-3 w-30 rounded bg-muted animate-pulse" />
          <Skeleton className="h-3 w-3 rounded-full bg-primary animate-pulse" />
        </div>
        {/* Right icons and username skeleton */}
        <div className="flex items-center gap-3">
          {/* Icons */}
          <Skeleton className="h-4 w-4 rounded bg-muted animate-pulse" />
          <Skeleton className="h-4 w-4 rounded bg-muted animate-pulse" />
          <Skeleton className="h-4 w-4 rounded bg-muted animate-pulse" />
          {/* Username */}
          <Skeleton className="ml-2 hidden md:block h-3 w-16 rounded bg-muted animate-pulse" />
        </div>
      </div>
    </div>
  );
}
function NavbarSkeleton() {
  return (
    <div className="overflow-hidden">
      <nav className="bg-card border-b border-border">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-16 justify-between items-center">
            {/* Logo skeleton */}
            <div className="flex items-center">
              <Skeleton className="h-6 w-24 rounded" />
            </div>
            {/* Desktop Links skeleton */}
            <div className="hidden md:flex space-x-6 items-center">
              {/* Links */}
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <Skeleton key={i} className="h-4 w-16 rounded" />
                ))}
              {/* Avatar/User skeleton */}
              <div className="ml-4 flex items-center gap-2">
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-4 w-20 rounded" />
              </div>
            </div>
            {/* Mobile menu button skeleton */}
            <div className="md:hidden flex items-center">
              <Skeleton className="h-6 w-6 rounded" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
function DonationRequestsSkeleton() {
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
