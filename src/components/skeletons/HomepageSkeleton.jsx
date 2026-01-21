import { Skeleton } from "@/components/ui/skeleton";
import DonationRequestsSkeleton from "./DonationRequestsSkeleton";

export default function HomepageSkeleton() {
  return (
    <>
      <TopbarSkeleton />
      <NavbarSkeleton />
      <AwarenessSkeleton />
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
function AwarenessSkeleton() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient & SVG shapes */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-background to-background" />
      <svg
        className="absolute right-0 top-0 h-full w-[50%] opacity-10"
        viewBox="0 0 600 600"
        fill="none"
      >
        <path
          d="M300 50C380 50 500 140 500 260C500 380 300 550 300 550C300 550 100 380 100 260C100 140 220 50 300 50Z"
          fill="rgb(220 38 38)"
        />
      </svg>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Skeleton */}
        <div className="space-y-6">
          {/* Heading */}
          <Skeleton className="h-12 w-3/4 rounded" />
          <Skeleton className="h-12 w-2/3 rounded" />

          {/* Subtitle */}
          <Skeleton className="h-5 w-5/6 rounded" />
          <Skeleton className="h-5 w-4/6 rounded" />

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Skeleton className="h-12 w-40 rounded" />
            <Skeleton className="h-12 w-44 rounded" />
          </div>
        </div>

        {/* Stats Card Skeleton */}
        <div className="hidden md:flex justify-center">
          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg space-y-4 text-center w-full max-w-sm">
            <Skeleton className="h-4 w-3/4 mx-auto rounded" />
            <Skeleton className="h-10 w-1/2 mx-auto rounded" />
            <Skeleton className="h-4 w-5/6 mx-auto rounded" />
          </div>
        </div>
      </div>
    </section>
  );
}
