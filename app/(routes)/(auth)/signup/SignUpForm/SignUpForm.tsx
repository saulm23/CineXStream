"use client";
import {z} from 'zod';
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import{formSchema} from "./SignUpForm.form"

const SignUpForm = () => {
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password:"",
      repeatpassword:"",
    },
  });
  const onSubmit =(values: z.infer<typeof formSchema>)=> {
  
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              
              <FormControl>
                <Input placeholder="Correo Electronico" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              
              <FormControl>
                <Input placeholder="Contrasena" {...field}
                type="password" />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              
              <FormControl>
                <Input placeholder="Repite tu Contrasena" {...field} 
                type="password"/>
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
     
        <Button className="w-full bg-black text-white py-3 rounded-md" type="submit">Registrarse</Button>
      </form>
    </Form>
  );
};

export default SignUpForm;
