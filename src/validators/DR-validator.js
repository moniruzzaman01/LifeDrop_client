import { z } from "zod";
import { BLOOD_GROUPS, DIVISIONS } from "../lib/constant";

export const drSchema = z.object({
  bloodGroup: z.enum([...BLOOD_GROUPS], "Blood group is required"),
  patientName: z.string().min(1, "Patient name is required").trim(),
  age: z.preprocess((val) => {
    if (val === "" || val === undefined || val === null) {
      return undefined;
    }
    return Number(val);
  }, z.number("Age is required").int("Age must be an integer").min(1, "Age cannot be zero/negative").max(120, "Age cannot be more than 120")),
  reasonOfDonation: z
    .string()
    .min(10, "Reason must be at least 10 characters")
    .trim(),
  division: z.string().min(2, "Division is required"),
  district: z.string().min(2, "District is required"),
  upazila: z.string().min(2, "Upazila is required"),
  date: z.coerce.date("Date is required"),
  time: z.string().min(1, "Time is required"),
  phone: z
    .string()
    .min(1, "Phone number required")
    .regex(/^01[3-9]\d{8}$/, "Invalid Bangladeshi phone number"),
  hospitalName: z.string().min(1, "Hospital name is required").trim(),
});
