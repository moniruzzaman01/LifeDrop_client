import { ChevronRight, CircleUserRound, Droplets } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router";
const itemsGroup = [
  {
    title: "Users",
    icon: CircleUserRound,
    subItems: [
      {
        title: "Admins",
        url: "users?role=admin",
      },
      {
        title: "Volunteers",
        url: "users?role=volunteer",
      },
      {
        title: "Active Users",
        url: "users?status=active",
      },
      {
        title: "Blocked Users",
        url: "users?status=blocked",
      },
    ],
  },
];
const items = [
  {
    title: "Drs",
    icon: Droplets,
    to: "donation-requests",
  },
];

export function NavMain() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Important Links</SidebarGroupLabel>
      <SidebarMenu>
        {itemsGroup.map((item) => (
          <Collapsible key={item.title} asChild className="group/collapsible">
            <SidebarMenuItem>
              <CollapsibleTrigger
                className="cursor-pointer transition duration-300"
                asChild
              >
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.subItems?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <Link to={subItem.url}>
                          <span>{subItem.title}</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
        <SidebarMenuItem>
          {items.map((item, idx) => (
            <SidebarMenuButton
              className="cursor-pointer transition duration-300"
              key={idx}
              asChild
            >
              <Link to={item.to}>
                {<item.icon />}
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          ))}
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}
