import { Frame, Map, PieChart } from "lucide-react";
import { NavProjects } from "@/dashboard/components/nav-projects";
import { NavUser } from "@/dashboard/components/NavUser";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain } from "./NavMain";
import { Link } from "react-router";

const data = {
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <Link
          to="/"
          className=" flex items-baseline gap-1 cursor-pointer hover:bg-secondary transition duration-300 rounded-lg"
        >
          <div className=" flex items-center size-8 justify-center rounded-lg">
            🩸
          </div>
          <div className="grid flex-1 text-left text-sm group-data-[collapsible=icon]:hidden">
            <span className=" font-bold uppercase text-primary tracking-wider">
              Life Drop
            </span>
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <NavMain />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
