import { Card, CardContent } from "@/components/ui/card";

export default function StatCard({ title, value, icon: Icon }) {
  return (
    <Card>
      <CardContent className="p-5 flex items-center gap-4">
        <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="size-6" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </CardContent>
    </Card>
  );
}
