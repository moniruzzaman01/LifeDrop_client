import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import CreateDRForm from "./CreateDRForm";
import { PlusCircle } from "lucide-react";
import BgArt from "./BgArt";

export default function CreateDR() {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center gap-2 px-3 py-1 rounded-md bg-primary text-primary-foreground hover:bg-primary-hover transition font-medium text-sm capitalize cursor-pointer">
        <PlusCircle className="size-4" />
        Create DR
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl w-full rounded-2xl bg-card border border-border p-6 max-h-[85vh] overflow-y-scroll overflow-x-hidden no-scrollbar">
        <BgArt />
        <DialogHeader>
          <div className="text-center">
            <DialogTitle className="text-3xl font-bold text-primary">
              Create Donation Request
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Request blood and let donors save a life
            </DialogDescription>
          </div>
        </DialogHeader>
        <div className="p-6">
          <CreateDRForm />
        </div>
        <DialogFooter>
          <p className=" w-full text-center text-xs text-muted-foreground">
            Your request will be visible on the donation requests page.
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
