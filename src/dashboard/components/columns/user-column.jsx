import {
  ArrowUpDown,
  HandFist,
  MoreHorizontal,
  Pencil,
  Trash,
  User,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const userColumns = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <div className=" flex items-center gap-2">
          Name
          <ArrowUpDown
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className=" h-4 w-4 cursor-pointer"
          />
        </div>
      );
    },
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "bloodGroup",
    header: ({ column }) => {
      return (
        <div className=" flex items-center gap-2">
          Blood Group
          <ArrowUpDown
            className=" h-4 w-4 cursor-pointer"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          />
        </div>
      );
    },
    cell: ({ row }) => <div>{row.getValue("bloodGroup")}</div>,
  },
  {
    accessorKey: "division",
    header: ({ column }) => {
      return (
        <div className=" flex items-center gap-2">
          Division
          <ArrowUpDown
            className=" h-4 w-4 cursor-pointer"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          />
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("division")}</div>
    ),
  },
  {
    accessorKey: "phone",
    header: "Mobile",
    cell: ({ row }) => <div>{row.getValue("phone")}</div>,
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => <div className="capitalize">{row.getValue("role")}</div>,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <div className=" flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer" asChild>
              <MoreHorizontal className=" rotate-90 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {/* <DropdownMenuItem className="cursor-pointer"
                onClick={() => navigator.clipboard.writeText(payment.id)}
              >
                Copy payment ID
              </DropdownMenuItem> */}
              <DropdownMenuItem className="cursor-pointer">
                <Pencil /> Edit
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Trash /> Delete
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <User /> Make Admin
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <HandFist /> Make Volunteer
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
