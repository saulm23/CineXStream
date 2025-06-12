import { z } from "zod";
export const formSchema = z.object({
  email: z.string().min(2, {message: "Email invalido"}),
  password: z.string().min(2, {message: "Contrasena invalida"}),
  
});