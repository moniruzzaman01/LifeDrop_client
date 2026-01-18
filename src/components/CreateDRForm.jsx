import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState, useContext } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import { useForm, Controller } from "react-hook-form";
import { ChevronDownIcon } from "lucide-react";
import { BLOOD_GROUPS, DIVISIONS, DISTRICTS, UPAZILAS } from "@/lib/constant";
import { toast } from "sonner";
import axiosInstance from "@/hooks/useAxios";
import { AuthContext } from "@/context/auth/context";
import { drSchema } from "../validators/DR-validator";
import { zodResolver } from "@hookform/resolvers/zod";

export default function CreateDRForm() {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [selectedDivision, setSelectedDivision] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  const {
    reset,
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(drSchema),
    defaultValues: {
      division: "",
      district: "",
      upazila: "",
    },
  });

  const onSubmit = async (values) => {
    try {
      values["requester"] = user._id;
      values.age = Number(values.age);
      await axiosInstance.post("/dr/create", values);
      toast.success("Donation request created successfully");
      reset();
    } catch (error) {
      toast.error("Something went wrong with error: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className=" space-y-1">
          <Label>Patient Name</Label>
          <Input
            {...register("patientName", {
              required: "Patient name is required",
              minLength: 2,
              maxLength: 50,
            })}
            placeholder="John doe"
          />
          {errors.patientName && (
            <p className="text-xs text-destructive">
              {errors.patientName.message}
            </p>
          )}
        </div>
        <div className=" space-y-1">
          <Label>Age</Label>
          <Input
            type="number"
            {...register("age", {
              required: "Age is required",
              min: 0,
              max: 120,
            })}
            placeholder="22"
          />
          {errors.age && (
            <p className="text-xs text-destructive">{errors.age.message}</p>
          )}
        </div>
      </div>
      <div className=" space-y-1">
        <Label>Hospital Name</Label>
        <Input
          {...register("hospitalName", {
            required: "Hospital name is required",
            minLength: 2,
            maxLength: 50,
          })}
          placeholder="MZS International hospital Ltd."
        />
        {errors.hospitalName && (
          <p className="text-xs text-destructive">
            {errors.hospitalName.message}
          </p>
        )}
      </div>
      <div className=" space-y-1">
        <Label>Reason for Blood Donation</Label>
        <Textarea
          {...register("reasonOfDonation", {
            required: "Reason of donation is required",
            min: 10,
          })}
          placeholder="Patient needs urgent blood due to surgery..."
        />
        {errors.reasonOfDonation && (
          <p className="text-xs text-destructive">
            {errors.reasonOfDonation.message}
          </p>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className=" space-y-1">
          <Label>Division</Label>
          <Controller
            name="division"
            control={control}
            render={({ field }) => (
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  setSelectedDivision(value);
                  setSelectedDistrict(null);
                }}
              >
                <SelectTrigger className="w-full cursor-pointer">
                  <SelectValue placeholder="Select Division" />
                </SelectTrigger>
                <SelectContent>
                  {DIVISIONS.map((d) => (
                    <SelectItem key={d} value={d}>
                      {d}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.division && (
            <p className="text-xs text-destructive">
              {errors.division.message}
            </p>
          )}
        </div>
        <div className=" space-y-1">
          <Label>District</Label>
          <Controller
            name="district"
            control={control}
            render={({ field }) => (
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  setSelectedDistrict(value);
                }}
              >
                <SelectTrigger className="w-full cursor-pointer">
                  <SelectValue placeholder="Select District" />
                </SelectTrigger>
                <SelectContent>
                  {selectedDivision &&
                    DISTRICTS[selectedDivision]?.map((d) => (
                      <SelectItem key={d} value={d}>
                        {d}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.district && (
            <p className="text-xs text-destructive">
              {errors.district.message}
            </p>
          )}
        </div>
        <div className=" space-y-1">
          <Label>Upazila</Label>
          <Controller
            name="upazila"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange}>
                <SelectTrigger className="w-full cursor-pointer">
                  <SelectValue placeholder="Select Upazila" />
                </SelectTrigger>
                <SelectContent>
                  {selectedDistrict &&
                    UPAZILAS[selectedDistrict]?.map((u) => (
                      <SelectItem key={u} value={u}>
                        {u}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.upazila && (
            <p className="text-xs text-destructive">{errors.upazila.message}</p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className=" space-y-1">
          <Label>Blood Group</Label>
          <Controller
            name="bloodGroup"
            control={control}
            render={({ field }) => (
              <Select onValueChange={field.onChange}>
                <SelectTrigger className="w-full cursor-pointer">
                  <SelectValue placeholder="Select Blood Group" />
                </SelectTrigger>
                <SelectContent>
                  {BLOOD_GROUPS.map((bg) => (
                    <SelectItem key={bg} value={bg}>
                      {bg}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.bloodGroup && (
            <p className="text-xs text-destructive">
              {errors.bloodGroup.message}
            </p>
          )}
        </div>
        <div className=" space-y-1">
          <Label>Donation Date</Label>
          <Controller
            name="date"
            control={control}
            render={({ field }) => (
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="justify-between font-normal text-zinc-500 dark:text-zinc-400 hover:text-zinc-500 cursor-pointer w-full"
                  >
                    {field.value
                      ? new Date(field.value).toLocaleDateString()
                      : "Select Date"}
                    <ChevronDownIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto overflow-hidden p-0"
                  align="start"
                >
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={(date) => {
                      field.onChange(date);
                      setOpen(false);
                    }}
                    captionLayout="dropdown"
                  />
                </PopoverContent>
              </Popover>
            )}
          />
          {errors.date && (
            <p className="text-xs text-destructive">{errors.date.message}</p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className=" space-y-1">
          <Label>Donation Time</Label>
          <Input
            {...register("time", { required: "Time is required" })}
            placeholder="Rahim Uddin"
            type="time"
          />
          {errors.time && (
            <p className="text-xs text-destructive">{errors.time.message}</p>
          )}
        </div>
        <div className=" space-y-1">
          <Label>Phone Number</Label>
          <Input
            {...register("phone", { required: "Phone Number is required" })}
            placeholder="+88017 1234 5678"
          />
          {errors.phone && (
            <p className="text-xs text-destructive">{errors.phone.message}</p>
          )}
        </div>
      </div>
      <Button
        type="submit"
        className="w-full py-6 text-lg font-semibold cursor-pointer"
      >
        Create DR
      </Button>
    </form>
  );
}
