import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Pencil, Save, X, Phone, User } from "lucide-react";
import useAuth from "../hooks/useAuth";
import { DISTRICTS, DIVISIONS, UPAZILAS } from "../lib/constant";
import { toast } from "sonner";
import axiosInstance from "../hooks/useAxios";

export default function MyProfile() {
  const { user, setUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [selectedDivision, setSelectedDivision] = useState(user.division);
  const [selectedDistrict, setSelectedDistrict] = useState(user.district);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: user,
  });

  const onSubmit = async (values) => {
    try {
      await axiosInstance.post(`/users/update/${user._id}`, values);
      setUser(values);
      toast.success("User info updated successfully!!!");
    } catch (error) {
      toast.error("Something went wrong with error: " + error.message);
    }
    setIsEditing(false);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      <Card>
        <CardContent className="flex flex-col md:flex-row items-center gap-6 p-6">
          <Avatar className="h-24 w-24">
            <AvatarImage src={user?.avatar || ""} />
            <AvatarFallback className="bg-primary/10 text-primary">
              <User className="h-12 w-12" />
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 text-center md:text-left space-y-1">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold text-foreground capitalize">
                {user?.name}
              </h2>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="text-muted-foreground hover:text-primary transition cursor-pointer"
              >
                {isEditing ? <X size={16} /> : <Pencil size={16} />}
              </button>
            </div>
            <p className="text-sm text-muted-foreground">{user?.email}</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
              <Badge variant="secondary" className="capitalize">
                {user?.role}
              </Badge>
              <Badge className="bg-primary/10 border-primary/30 text-primary font-bold">
                {user?.bloodGroup}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User size={18} /> Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <Label>Full Name</Label>
                <Input
                  disabled={!isEditing}
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
              <div className="space-y-1">
                <Label>Email Address</Label>
                <Input disabled readOnly value={user.email} />
              </div>
              <div className="space-y-1">
                <Label>Blood Group</Label>
                <Input disabled readOnly value={user.bloodGroup} />
              </div>
              <div className="space-y-1">
                <Label>Date of Birth</Label>
                <Input
                  disabled
                  readOnly
                  value={
                    user?.DOB
                      ? new Date(user.DOB).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })
                      : ""
                  }
                />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone size={18} /> Contact & Location
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <Label>Phone Number</Label>
                <Input
                  type="tel"
                  disabled={!isEditing}
                  {...register("phone", { required: true })}
                  placeholder="+88017 1234 5678"
                />
              </div>
              <div className="space-y-1">
                <Label>Division</Label>
                <Controller
                  name="division"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Select
                      disabled={!isEditing}
                      onValueChange={(division) => {
                        field.onChange(division);
                        setSelectedDivision(division);
                      }}
                    >
                      <SelectTrigger className="w-full cursor-pointer">
                        <SelectValue placeholder={field.value} />
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
                      disabled={!isEditing}
                      onValueChange={(district) => {
                        field.onChange(district);
                        setSelectedDistrict(district);
                      }}
                    >
                      <SelectTrigger className="w-full cursor-pointer">
                        <SelectValue placeholder={field.value} />
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
                    <Select
                      disabled={!isEditing}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger className="w-full cursor-pointer">
                        <SelectValue placeholder={field.value} />
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
            </CardContent>
          </Card>
        </div>
        {isEditing && (
          <div className="flex justify-end mt-6">
            <Button type="submit" className="gap-2 px-8 cursor-pointer">
              <Save size={16} />
              Update
            </Button>
          </div>
        )}
      </form>
    </section>
  );
}
