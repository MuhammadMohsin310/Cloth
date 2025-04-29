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
import { loginSchema } from "../validations/formSchema";
import { toast } from "react-toastify";
import { useDispatch, } from "react-redux";
import { closeLoginDialog,openSignUpDialog } from "@/features/dialog/dialogSlice";




export function LoginForm() {
  const dispatch = useDispatch();
 const {
       register,
       handleSubmit,
       reset,
       formState: { errors,  },
     } = useForm({
       resolver:zodResolver(loginSchema)
     });
 
      const onSubmit = async (data) => {
         
         try {
           const response = await axios.post("/auth/login", data);
           console.log("signned up :",data);
           reset()
            toast.success(" loggined successfully!");
            dispatch(closeLoginDialog())
          
         } catch (error) {
           console.error("Failed:", error);
           toast.error("Failed to register. Please try again.");
         }
       };
   return (
     <div className={cn("flex flex-col gap-6")}>
     
       <div>
         <div className="pb-6  flex flex-col gap-1">
           <div className="text-3xl font-bold">Login</div>
           <CardDescription>
             Enter your email below to login to your account
           </CardDescription>
         </div>
         <div>
           <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
             <div className="flex flex-col gap-6">
            
               <div className="grid gap-2">
                 <Label htmlFor="email">Email</Label>
                 <Input
                     {...register("email")}
                   placeholder="m@example.com"
                 
                 />
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
                 <Input   {...register("password")} type="password"  />
                 {errors.password && (
                   <p className="text-red-500 text-sm">{errors.password.message}</p>
                 )}
               </div>
               <Button type="submit" className="w-full bg-gray-200">
                Login
               </Button>
               <Button variant="outline" className="w-full">
                 Login with Google
               </Button>
             </div>
             <div className="mt-4 text-center text-sm">
             Don't have an account? ?{" "}
               <a onClick={(e)=>{
                e.preventDefault()
                dispatch(openSignUpDialog())  
                dispatch(closeLoginDialog())
               }} href="#" className="underline underline-offset-4">
                 Sign Up
               </a>
             </div>
           </form>
         </div>
       </div>
     </div>)
}
