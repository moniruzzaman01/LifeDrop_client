import { Skeleton } from "@/components/ui/skeleton";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Loader } from "lucide-react";

export default function DashboardSkeleton() {
  return (
    <SidebarProvider>
      <aside className="w-70 h-screen border-r p-4 hidden md:flex flex-col">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Skeleton className="h-8 w-8 rounded-lg" />
            <Skeleton className="h-4 w-24" />
          </div>
          <div className="space-y-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-10 w-full rounded-md" />
            ))}
          </div>
          <div className="space-y-3 mt-10">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-10 w-full rounded-md" />
            ))}
          </div>
        </div>
        <div className="mt-auto pt-4">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" className="gap-3">
                <Skeleton className="h-8 w-8 rounded-lg" />
                <div className="grid flex-1 gap-1">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-3 w-32" />
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>
      </aside>
      <SidebarInset>
        <header className="flex h-16 items-center gap-4 px-4 border-b">
          <Skeleton className="h-8 w-8 rounded-md" />
          <Skeleton className="h-4 w-40" />
        </header>
        <div className="flex flex-1 items-center justify-center">
          <Loader className="animate-spin duration-500" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
