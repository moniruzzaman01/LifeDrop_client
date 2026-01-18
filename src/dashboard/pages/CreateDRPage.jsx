import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplet, Phone, MapPin, CalendarDays } from "lucide-react";
import CreateDRForm from "../../components/CreateDRForm";
import BgArt from "../../components/BgArt";

export default function CreateDRPage() {
  return (
    <section className="min-h-screen bg-background py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-1 border border-red-200 bg-linear-to-br from-red-50 to-white dark:from-red-950 dark:to-background">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-600">
              <Droplet className="h-6 w-6" />
              Emergency Blood Request
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-sm text-muted-foreground">
            <p>
              Every donation request is critical. Please provide accurate
              information so donors can respond quickly.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-red-500" />
                <span>Date & time matter</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-red-500" />
                <span>Correct location helps donors</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-red-500" />
                <span>Active phone number required</span>
              </div>
            </div>
            <div className="rounded-lg border border-red-200 bg-red-100/50 dark:bg-red-950/40 p-4 text-red-700 dark:text-red-300">
              <p className="font-medium">🩸 Tip</p>
              <p className="text-xs mt-1">
                Double-check blood group and hospital details before submitting.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2 shadow-lg relative overflow-x-hidden">
          <BgArt />
          <CardHeader>
            <CardTitle className="text-2xl text-primary">
              Create Donation Request
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CreateDRForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
