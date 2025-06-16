"use client";
import {z} from 'zod';
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import FormError from "./FormError/FormError";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import{formSchema} from "./LoginForm.form"

const LoginForm = () => {
  const [error, setError] = useState<string | undefined>("illmatic");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password:"",
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
                <Input placeholder="Contrasena" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
      <FormError message={error} />
        <Button className="w-full bg-black text-white py-3 rounded-md" type="submit">Iniciar Sesion</Button>
      </form>
    </Form>
  );
};

export default LoginForm;
