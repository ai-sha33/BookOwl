// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";

// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input"
// import { Card } from "@/components/ui/card";
// import { EyeOff, EyeOffIcon, Heart } from "lucide-react";

// // Define form schema with Zod
// const formSchema = z.object({
//   username: z
//     .string()
//     .min(2, { message: "Username must be at least 5 characters." }),
//   password: z
//     .string()
//     .min(6, "Password must be at least 6 characters")
//     .regex(/[A-Z]/, "Password must include at least one uppercase letter")
//     .regex(/[a-z]/, "Password must include at least one lowercase letter")
//     .regex(/[0-9]/, "Password must include at least one number"),
// });

// export default function LoginPage() {
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       username: "",
//       password: "",
//     },
//   });

//   function onSubmit(values: z.infer<typeof formSchema>) {
//     console.log("Submitted values:", values);
//   }

//   return (
    
//     <div className="w-full flex justify-center  bg-[rgb(246,220,201)]">
//      <Card className="flex items-center w-[30%] bg-[rgb(238,218,200)] ">

//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6  w-full">
//             <h1 className="text-2xl font-bold italic"> Welcome Back </h1>
//             <h2 className="text-center font-bond  ">Log in to continue</h2>

//             {/* Username Field */}
//             <FormField
//               control={form.control}
//               name="username"
//               render={({ field }) => (
//                 <FormItem>
//                   {/* <FormLabel>Username</FormLabel> */}
//                   <FormControl>
//                   <input type="text"  placeholder="Enter your username" {...field}
//                  className=" px-4 py-2  text-[#c2918b] rounded-full "
// />

//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             {/* Password Field */}
//             <FormField
//               control={form.control}
//               name="password"
//               render={({ field }) => (
//                 <FormItem>
//                   {/* <FormLabel>Password</FormLabel> */}
//                   <FormControl>
//                     <Input
//                       type="password"
//                       placeholder="Enter your password"
//                       className=" px-4 py-2  text-[#c2918b]   rounded-full"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             {/* Submit Button */}
//             <Button className="bg-[#5d768a] rounded-full  w-[150px]"  type="submit">
//               Login
//             </Button>
//             <p>
//       <a 
//         href="/forgot-password" 
//         className="text- text-[#5d768a] hover:underline "  >
//         Forgot Password?
//       </a>
//     </p>
//     <p className="text-center"> Login with</p>
//           </form>
//         </Form>
//       </Card>
//     </div>
//   );
// }
