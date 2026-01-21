import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export default function FAQ() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-3 text-primary">
          <HelpCircle className="h-6 w-6" />
          <span className="uppercase tracking-wide text-sm font-semibold">
            Frequently Asked Questions
          </span>
        </div>
        <h2 className="text-4xl font-bold text-foreground mb-4">
          Everything You Need to Know About Blood Donation
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          We understand donating blood can raise questions. Here are clear,
          honest answers to help you feel confident and informed.
        </p>
      </div>
      {/* FAQ Accordion */}
      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border rounded-lg px-4">
            <AccordionTrigger>Who can donate blood?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Most healthy individuals aged between 18 and 60 years, weighing at
              least 50kg, can donate blood. You should be free from major
              illnesses and infections at the time of donation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border rounded-lg px-4">
            <AccordionTrigger>Is blood donation safe?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Yes, blood donation is completely safe. Sterile, single-use
              needles and equipment are used for every donor, eliminating any
              risk of infection.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border rounded-lg px-4">
            <AccordionTrigger>How often can I donate blood?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              You can donate whole blood every 3 months. This allows your body
              enough time to replenish blood cells and maintain good health.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="border rounded-lg px-4">
            <AccordionTrigger>Does donating blood hurt?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              You may feel a brief pinch when the needle is inserted, but the
              process is generally painless and takes only a few minutes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5" className="border rounded-lg px-4">
            <AccordionTrigger>
              How long does the donation process take?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              The entire process takes around 10–15 minutes, including
              registration, screening, donation, and short rest time.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6" className="border rounded-lg px-4">
            <AccordionTrigger>
              What documents are required to donate blood?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              A valid photo ID (such as National ID or Student ID) is usually
              required to verify your identity before donation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7" className="border rounded-lg px-4">
            <AccordionTrigger>
              Are there any health benefits for donors?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Yes. Donors receive a basic health check including blood pressure,
              hemoglobin level, and pulse rate. Regular donation may also help
              maintain healthy iron levels.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8" className="border rounded-lg px-4">
            <AccordionTrigger>
              What should I do before and after donating blood?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Before donating, eat a light meal and stay hydrated. After
              donation, rest briefly, drink fluids, and avoid heavy physical
              activity for the rest of the day.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
