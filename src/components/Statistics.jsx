import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Heart, Hospital } from "lucide-react";

const STATISTICS = [
  {
    title: "Total Donations",
    value: 1240,
    icon: <Heart className="h-6 w-6 text-red-500" />,
    description: "Lives saved through blood donation",
  },
  {
    title: "Active Donors",
    value: 560,
    icon: <Users className="h-6 w-6 text-red-500" />,
    description: "People committed to saving lives",
  },
  {
    title: "Requests Fulfilled",
    value: 980,
    icon: <Hospital className="h-6 w-6 text-red-500" />,
    description: "Blood requests successfully completed",
  },
];

export default function Statistics() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-foreground mb-4">Our Impact</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Every donation counts. See how your contribution helps save lives.
        </p>
      </div>
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {STATISTICS.map((stat, idx) => (
          <Card
            key={idx}
            className="border shadow-sm hover:shadow-lg transition p-6 flex flex-col items-center text-center"
          >
            <div className="mb-4">{stat.icon}</div>
            <CardTitle className="text-3xl font-extrabold text-foreground">
              {stat.value.toLocaleString()}
            </CardTitle>
            <p className="text-lg font-medium text-foreground mt-1">
              {stat.title}
            </p>
            <CardContent className="text-sm text-muted-foreground mt-2">
              {stat.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
