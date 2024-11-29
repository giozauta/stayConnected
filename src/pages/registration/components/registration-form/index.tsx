import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {RegisterDataType} from "../../types";
import {registerFormSchema} from "./shema.ts";
import  {zodResolver}  from "@hookform/resolvers/zod";
import { Link } from 'react-router-dom';

const RegistrationForm:React.FC = () => {
    const {control,handleSubmit,formState: { errors },}  = useForm<RegisterDataType>({
       resolver:zodResolver(registerFormSchema),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
        }
    });



    const onSubmit = (values:RegisterDataType ) => {
        if(values.password !== values.confirmPassword){
            alert("Passwords do not match");
            return;
        }
        alert(
            "register successfully"
        )
    }
    
  return (
    <form onSubmit={handleSubmit(onSubmit)} >
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Controller
                  name="email"
        
                  control={control}
                  render={({ field }) => (
                    <Input id="email" type="email" placeholder="Email" {...field} />
                  )}
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Controller
                  name="password"
                 
                  control={control}
                  render={({ field }) => (
                    <Input id="password" type="password" placeholder="Password" {...field} />
                  )}
                />
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Controller
                  name="confirmPassword"

                  control={control}
                  render={({ field }) => (
                    <Input id="confirmPassword" type="password" placeholder="Confirm Password" {...field} />
                  )}
                />
                 {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
              </div>
              <div className="flex justify-between">
                <Button variant="outline" type='submit'>Register</Button>
                <Button variant="link" ><Link to="/login">Sign In</Link></Button>
              </div>
        </div>
     </form>
  )
}

export default RegistrationForm;
