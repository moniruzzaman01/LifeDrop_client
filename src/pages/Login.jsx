import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { use } from "react";
import { AuthContext } from "../context/auth/context";
import BgArt from "../components/BgArt";
import { useNavigate } from "react-router";
import axiosInstance from "../hooks/useAxios";

export default function Login() {
  const { loginUser } = use(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (values) => {
    try {
      await loginUser(values.email, values.password);
      await axiosInstance(`/users/${values.email}`);
      toast.success("Login successful!!!");
      navigate("/");
    } catch (error) {
      toast.error("Something went wrong with error: " + error.message);
    }
  };

  return (
    <div className="relative overflow-hidden">
      <BgArt />
      <div className="min-h-screen bg-background flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md bg-card border border-border rounded-2xl p-8 space-y-8 shadow-lg">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-primary">Welcome Back</h1>
            <p className="text-muted-foreground">
              Login to continue saving lives 🩸
            </p>
          </div>
          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email */}
            <div className="space-y-1">
              <Label>Email Address</Label>
              <Input
                type="email"
                placeholder="john@doe.com"
                {...register("email", {
                  required: "Email is required",
                })}
              />
              {errors.email && (
                <p className="text-sm text-destructive">
                  {errors.email.message}
                </p>
              )}
            </div>
            {/* Password */}
            <div className="space-y-1">
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="••••••••"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              {errors.password && (
                <p className="text-sm text-destructive">
                  {errors.password.message}
                </p>
              )}
            </div>
            {/* Submit */}
            <Button
              disabled={isSubmitting}
              type="submit"
              className={`w-full py-6 text-lg font-semibold ${isSubmitting ? " cursor-not-allowed" : " cursor-pointer"}`}
            >
              {isSubmitting ? "Submitting..." : "Login"}
            </Button>
          </form>
          {/* Footer */}
          <div className="text-center space-y-2">
            <p className="text-xs text-muted-foreground">
              Don&apos;t have an account?
            </p>
            <a
              href="/registration"
              className="text-sm font-medium text-primary hover:underline"
            >
              Register as a Donor
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
