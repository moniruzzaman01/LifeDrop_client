import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function DonationRequestModal({ request }) {
  return (
    <DialogContent className="sm:max-w-lg w-full rounded-2xl bg-card border border-border p-6">
      <DialogHeader>
        <div className="flex justify-between items-center mb-4">
          <DialogTitle className="text-2xl font-bold text-foreground">
            {request.patientName}
          </DialogTitle>
        </div>
        <DialogDescription className="text-sm text-muted-foreground mb-4">
          Detailed information about this urgent blood request.
        </DialogDescription>
      </DialogHeader>
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="text-3xl font-extrabold text-primary">
            {request.bloodGroup}
          </span>
          <span className="text-muted-foreground font-medium">Blood Group</span>
        </div>
        <p>
          <span className="font-semibold text-foreground">Age:</span>{" "}
          {request.age} years
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
        <p className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-primary" />
          <span className="font-semibold text-foreground">Contact:</span>{" "}
          {request.phone}
        </p>
        <div>
          <span className="font-semibold text-foreground">Reason:</span>{" "}
          <span className="text-muted-foreground text-sm mt-1">
            {request.reasonOfDonation}
          </span>
        </div>
        {/* Donor Info */}
        {/* {request.donor && (
          <p>
            <span className="font-semibold text-foreground">
              Assigned Donor:
            </span>{" "}
            {request.donor}
          </p>
        )} */}
      </div>
      <DialogFooter className="mt-6 flex justify-end">
        <DialogClose asChild>
          <Button className="bg-primary text-primary-foreground hover:bg-primary-hover cursor-pointer">
            Close
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
}
