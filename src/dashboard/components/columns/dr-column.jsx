import { ArrowUpDown, Check, Eye, MoreHorizontal, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { STATUS_STYLES } from "../../../lib/constant";

export const drColumns = [
  {
    accessorKey: "patientName",
    header: ({ column }) => {
      return (
        <div className=" flex items-center gap-2">
          Patient Name
          <ArrowUpDown
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className=" h-4 w-4 cursor-pointer"
          />
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("patientName")}</div>
    ),
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
    cell: ({ row }) => <div>{row.getValue("division")}</div>,
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <div className=" flex items-center gap-2">
          Donation Date
          <ArrowUpDown
            className=" h-4 w-4 cursor-pointer"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          />
        </div>
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue("date"));

      return (
        <div>
          {date.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const value = row.getValue("status");

      return (
        <div
          className={`capitalize inline px-3 py-0.5 rounded-full  ${
            STATUS_STYLES[value] || "bg-gray-100 text-gray-800"
          }`}
        >
          {value}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <div className=" flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer capitalize" asChild>
              <MoreHorizontal className=" rotate-90 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer capitalize">
                <Check /> done
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer capitalize">
                <X /> remove
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer capitalize">
                <Eye /> know more
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
