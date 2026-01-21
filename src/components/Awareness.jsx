import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Droplet, HeartHandshake } from "lucide-react";
import { Link } from "react-router";

const HERO_CONTENT = [
  {
    title: "Donate Blood, Save Lives",
    subtitle:
      "One small act of kindness can give someone another chance at life.",
  },
  {
    title: "Your Blood Can Be Someone’s Hope",
    subtitle:
      "Thousands of patients need blood every day. Be the reason they survive.",
  },
  {
    title: "Be a Hero Without a Cape",
    subtitle:
      "Join our blood donation community and make a real difference today.",
  },
];

export default function Awareness() {
  const randomIndex = useMemo(
    () => Math.floor(Math.random() * HERO_CONTENT.length),
    [],
  );

  const { title, subtitle } = HERO_CONTENT[randomIndex];

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-background to-background" />
      <svg
        className="absolute right-0 top-0 h-full w-[50%] opacity-10"
        viewBox="0 0 600 600"
        fill="none"
      >
        <path
          d="M300 50C380 50 500 140 500 260C500 380 300 550 300 550C300 550 100 380 100 260C100 140 220 50 300 50Z"
          fill="rgb(220 38 38)"
        />
      </svg>

      {/* 🔴 Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight transition-all duration-500">
            <span className="text-primary">{title.split(",")[0]},</span>
            <br />
            {title.split(",")[1]}
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl transition-all duration-500">
            {subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link to="/create-donation-request">
              <Button size="lg" className="gap-2 px-8 cursor-pointer">
                <Droplet size={18} />
                Request Blood
              </Button>
            </Link>

            <Link to="/registration">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 px-8 border-primary text-primary hover:text-primary cursor-pointer"
              >
                <HeartHandshake size={18} />
                Become a Donor
              </Button>
            </Link>
          </div>
        </div>

        {/* Visual / Stats */}
        <div className="hidden md:flex justify-center">
          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg space-y-4 text-center">
            <p className="text-sm text-muted-foreground">Trusted Community</p>
            <h2 className="text-3xl font-bold text-primary">1000+</h2>
            <p className="text-sm text-muted-foreground">
              Lives impacted through blood donation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
