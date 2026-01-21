import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Clock, CheckCircle, Shield } from "lucide-react";

const WHY_DONATE_CARDS = [
  {
    title: "Saves 3 Lives",
    description: "Each blood donation can save up to three lives in need.",
    icon: <Heart className="h-6 w-6 text-red-500" />,
  },
  {
    title: "Safe & Painless",
    description: "Our trained staff ensures a safe and comfortable donation.",
    icon: <Shield className="h-6 w-6 text-red-500" />,
  },
  {
    title: "Quick Process",
    description: "It takes only 10-15 minutes to donate blood.",
    icon: <Clock className="h-6 w-6 text-red-500" />,
  },
  {
    title: "Free Health Check",
    description: "All donors receive a free basic health check-up.",
    icon: <CheckCircle className="h-6 w-6 text-red-500" />,
  },
];

export default function WhyDonateBlood() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 py-6">
      {/* Optional subtle background SVG */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 400" fill="none">
          <path
            d="M0 200 C150 100 650 300 800 200 L800 400 L0 400 Z"
            fill="rgb(220 38 38)"
          />
        </svg>
      </div>
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-foreground mb-4">
          Why Donate Blood?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Educating and reassuring donors helps build trust. Learn why donating
          blood is safe, quick, and life-saving.
        </p>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {WHY_DONATE_CARDS.map((card, idx) => (
          <Card
            key={idx}
            className="border shadow-sm hover:shadow-lg transition"
          >
            <CardHeader className="flex items-center gap-3 pb-2">
              {card.icon}
              <CardTitle className="text-lg font-semibold text-foreground">
                {card.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {card.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
