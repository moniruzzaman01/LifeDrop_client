import { Input } from "@/components/ui/input";

export default function TableSearch({ table, placeholder = "", field = "" }) {
  return (
    <Input
      placeholder={placeholder}
      value={table.getColumn(field)?.getFilterValue() ?? ""}
      onChange={(event) =>
        table.getColumn(field)?.setFilterValue(event.target.value)
      }
      className="max-w-sm"
    />
  );
}
