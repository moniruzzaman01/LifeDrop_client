import {
  Droplet,
  Users,
  Activity,
  PlusCircle,
  HeartHandshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import StatCard from "../components/StatCard";

export default function Landing() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-primary">
          Welcome to Life Drop 🩸
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Manage donors, track blood requests, and help save lives — all from
          one place.
        </p>
      </div>
      <div>
        <Button className=" cursor-pointer">
          <PlusCircle className="size-4" />
          Create Donation Request
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <StatCard title="Total Donors" value="1,248" icon={Users} />
        <StatCard title="Active Requests" value="32" icon={HeartHandshake} />
        <StatCard title="Successful Donations" value="879" icon={Droplet} />
        <StatCard title="Pending Requests" value="14" icon={Activity} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="border-primary/30">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              Community Pulse
            </h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span>
                  A new donor joined from <strong>Dhaka</strong>, ready to save
                  lives
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span>
                  Emergency blood need successfully supported in
                  <strong> Chattogram</strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span>Volunteers coordinated a timely donation response</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              Why It Matters
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Every unit of blood can save up to <strong>three lives</strong>.
              This platform connects compassion with action — turning
              willingness into real-world impact.
            </p>
            <p className="text-sm italic text-primary">
              “Someone out there is alive today because a donor said yes.”
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 space-y-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              Social Responsibility
            </h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Protect donor privacy and dignity</li>
              <li>Ensure verified and ethical donation flow</li>
              <li>Promote voluntary, unpaid blood donation</li>
              <li>Build trust between donors and recipients</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
