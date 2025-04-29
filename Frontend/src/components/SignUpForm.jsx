import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "../services/axiosInstance";
import { signUpSchema } from "../validations/formSchema";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import {
  closeSignUpDialog,
  openLoginDialog,
} from "@/features/dialog/dialogSlice";

export function SignUpForm() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors,  },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/auth/register", data);
      console.log("signned up :", data);
      reset();
      toast.success(" registered successfully!");
      dispatch(closeSignUpDialog());
    } catch (error) {
      console.error("Failed:", error);
      toast.error("Failed to register. Please try again.");
    }
  };
  return (
    <div className={cn("flex flex-col gap-6")}>
      <div>
        <div className="pb-6  flex flex-col gap-1">
          <div className="text-3xl font-bold">Signup</div>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Username</Label>
                <Input
                  className={cn("outline-none")}
                  placeholder="Username"
                  {...register("username")}
                />
                {errors.username && (
                  <p className="text-red-500 text-sm">
                    {errors.username.message}
                  </p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input {...register("email")} placeholder="m@example.com" />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input {...register("password")} type="password" />
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <Button type="submit" className="w-full bg-gray-200">
                Signup
              </Button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Already logined ?{" "}
              <a
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(closeSignUpDialog());
                  dispatch(openLoginDialog());
                }}
                href="#"
                className="underline underline-offset-4"
              >
                Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
