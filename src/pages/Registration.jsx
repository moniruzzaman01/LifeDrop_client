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
import { use, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { useForm, Controller } from "react-hook-form";
import { ChevronDownIcon } from "lucide-react";
import { BLOOD_GROUPS, DISTRICTS, DIVISIONS, UPAZILAS } from "../lib/constant";
import { toast } from "sonner";
import { AuthContext } from "../context/auth/context";
import axiosInstance from "../hooks/useAxios";
import BgArt from "../components/BgArt";

export default function Registration() {
  const [open, setOpen] = useState(false);
  const { createUser } = use(AuthContext);
  const [selectedDivision, setSelectedDivision] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });
  const onSubmit = async (values) => {
    try {
      await Promise.all([
        createUser(values.email, values.password),
        axiosInstance.post("/users/create", values),
      ]);
      toast.success("User created successfully!!!");
    } catch (error) {
      toast.error("Something went wrong with error: " + error.message);
    }
  };

  return (
    <div className="relative overflow-hidden">
      <BgArt />
      <div className="min-h-screen bg-background flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-2xl bg-card border border-border rounded-2xl p-8 space-y-8 shadow-lg">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-primary">
              Become a Blood Donor
            </h1>
            <p className="text-muted-foreground">
              Register yourself and help save lives
            </p>
          </div>
          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div className="space-y-1">
              <Label>Full Name</Label>
              <Input
                {...register("name", {
                  required: "Name is required",
                  minLength: 2,
                  maxLength: 50,
                })}
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="text-sm text-destructive">
                  {errors.name.message}
                </p>
              )}
            </div>
            {/* Email */}
            <div className="space-y-1">
              <Label>Email Address</Label>
              <Input
                type="email"
                {...register("email", { required: "Email is required" })}
                placeholder="john@doe.com"
              />
            </div>
            {/* Avatar */}
            <div className="space-y-1">
              <Label>Avatar URL</Label>
              <Input
                type="url"
                {...register("avatar")}
                placeholder="https://example.com/avatar.jpg"
              />
            </div>
            {/* Password and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label>Password</Label>
                <Input
                  type="password"
                  placeholder="••••••••••"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must have at least 6 characters",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-sm text-destructive">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="space-y-1">
                <Label>Phone Number</Label>
                <Input
                  type="tel"
                  {...register("phone", { required: true })}
                  placeholder="+88017 1234 5678"
                />
              </div>
            </div>
            {/* Location */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-1">
                <Label>Division</Label>
                <Controller
                  name="division"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select
                      onValueChange={(division) => {
                        field.onChange(division);
                        setSelectedDivision(division);
                      }}
                    >
                      <SelectTrigger className="w-full cursor-pointer">
                        <SelectValue placeholder="Select Division" />
                      </SelectTrigger>
                      <SelectContent>
                        {DIVISIONS.map((division) => (
                          <SelectItem key={division} value={division}>
                            {division}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <div className="space-y-1">
                <Label>District</Label>
                <Controller
                  name="district"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select
                      onValueChange={(district) => {
                        field.onChange(district);
                        setSelectedDistrict(district);
                      }}
                    >
                      <SelectTrigger className="w-full cursor-pointer">
                        <SelectValue placeholder="Select District" />
                      </SelectTrigger>
                      <SelectContent>
                        {selectedDivision &&
                          DISTRICTS[selectedDivision].map((district) => (
                            <SelectItem key={district} value={district}>
                              {district}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <div className="space-y-1">
                <Label>Upazila</Label>
                <Controller
                  name="upazila"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger className="w-full cursor-pointer">
                        <SelectValue placeholder="Select Upazila" />
                      </SelectTrigger>
                      <SelectContent>
                        {selectedDistrict &&
                          UPAZILAS[selectedDistrict].map((upazila) => (
                            <SelectItem key={upazila} value={upazila}>
                              {upazila}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
            </div>
            {/* Blood Group + DOB */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label>Blood Group</Label>
                <Controller
                  name="bloodGroup"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger className="w-full cursor-pointer">
                        <SelectValue placeholder="Select Blood Group" />
                      </SelectTrigger>
                      <SelectContent>
                        {BLOOD_GROUPS.map((group) => (
                          <SelectItem key={group} value={group}>
                            {group}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <div className="space-y-1">
                <div className="flex flex-col gap-1">
                  <Label htmlFor="date">Date Of Birth</Label>
                  <Controller
                    name="DOB"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="justify-between font-normal text-zinc-500 dark:text-zinc-400 hover:text-zinc-500 cursor-pointer"
                          >
                            {field.value
                              ? new Date(field.value).toLocaleDateString()
                              : "Select date"}
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
                </div>
              </div>
            </div>
            {/* Submit */}
            <Button
              type="submit"
              className="w-full py-6 text-lg font-semibold cursor-pointer"
            >
              Register as Donor
            </Button>
          </form>

          {/* Footer */}
          <div className="text-center space-y-2">
            <p className="text-xs text-muted-foreground">Have an account?</p>
            <a
              href="/login"
              className="text-sm font-medium text-primary hover:underline"
            >
              Go Back To Save Life
            </a>
          </div>
          <p className="text-xs text-muted-foreground text-center">
            Your data will only be used for blood donation purposes.
          </p>
        </div>
      </div>
    </div>
  );
}
