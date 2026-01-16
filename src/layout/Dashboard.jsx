import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/dashboard/components/AppSidebar";
import { Link, Outlet, useLocation, useSearchParams } from "react-router";
import { Fragment, use } from "react";
import { ThemeContext } from "../context/theme/context";
import { AuthContext } from "../context/auth/context";
import DashboardSkeleton from "@/dashboard/components/DashboardSkeleton";
import BgArt from "../components/BgArt";

export default function Dashboard() {
  const { toggleTheme } = use(ThemeContext);
  const { globalLoading } = use(AuthContext);
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const segments = pathname.split("/").filter(Boolean);
  const role = searchParams.get("role");
  const status = searchParams.get("status");

  if (globalLoading) {
    return <DashboardSkeleton />;
  }

  return (
    <SidebarProvider>
      <div
        onClick={toggleTheme}
        className="flex justify-center cursor-pointer absolute top-0 right-0 z-50"
      >
        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold">
          🩸
        </div>
      </div>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 border-b">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                {segments.map((segment, idx) => {
                  const lastIdx = segments.length - 1;
                  return (
                    <Fragment key={idx}>
                      <BreadcrumbItem className="hidden md:block capitalize">
                        <Link to={segment == "dashboard" ? "" : segment}>
                          {segment}
                        </Link>
                      </BreadcrumbItem>
                      {lastIdx !== idx && (
                        <BreadcrumbSeparator className="hidden md:block" />
                      )}
                    </Fragment>
                  );
                })}
                {role && (
                  <>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem className="hidden md:block capitalize">
                      <Link to={`?role=${role}`}>{role}</Link>
                    </BreadcrumbItem>
                  </>
                )}
                {status && (
                  <>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem className="hidden md:block capitalize">
                      <Link to={`?sdfsd=${status}`}>{status}</Link>
                    </BreadcrumbItem>
                  </>
                )}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="relative p-6 overflow-hidden">
          <BgArt />
          <div className="min-h-[87vh]">
            <Outlet />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
