import { Skeleton } from "@/components/ui/skeleton";

export default function HomepageSkeleton() {
  return (
    <>
      <TopbarSkeleton />
      <NavbarSkeleton />
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
