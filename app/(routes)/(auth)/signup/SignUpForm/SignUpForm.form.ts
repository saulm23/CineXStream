import { z } from "zod";
export const formSchema = z.object({
  email: z.string().min(2, {message: "Email invalido"}),

  password: z.string().min(2, {message: "Contrasena invalida"}),
  repeatpassword: z.string(),

}).refine((data) => data.password === data.repeatpassword,{
    message: "Las contrasenas no coinciden",
    path:["repeatpassword"],
});
