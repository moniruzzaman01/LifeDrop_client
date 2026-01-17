import { ArrowUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import DonationRequestModal from "./DonationRequestModal";

export default function DonationRequest({ request }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-4xl font-extrabold text-primary text-center">
          {request.bloodGroup}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-1 text-sm text-muted-foreground">
        <p>
          <span className="font-semibold text-foreground">Recipient:</span>{" "}
          {request.patientName}
        </p>
        <p>
          <span className="font-semibold text-foreground">Location:</span>{" "}
          {request.upazila}, {request.district}
        </p>
        <p>
          <span className="font-semibold text-foreground">Date:</span>{" "}
          {request.date.split("T")[0]}
        </p>
        <p>
          <span className="font-semibold text-foreground">Time:</span>{" "}
          {request.time}
        </p>
      </CardContent>
      <CardFooter className="pt-2 flex justify-center">
        <Dialog>
          <DialogTrigger className="flex items-center gap-2 px-3 py-1 rounded-md bg-primary text-primary-foreground hover:bg-primary-hover transition font-medium text-sm capitalize cursor-pointer">
            more <ArrowUp size={16} />
          </DialogTrigger>
          <DonationRequestModal request={request} />
        </Dialog>
        {/* <Link
              to={`/donation-requests/${request.id}`}
              className="flex items-center gap-2 px-3 py-1 rounded-md bg-primary text-primary-foreground hover:bg-primary-hover transition font-medium text-sm capitalize"
            >
              more <ArrowRight size={16} />
            </Link> */}
      </CardFooter>
    </Card>
  );
}
