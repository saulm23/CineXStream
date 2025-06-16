import React from "react";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import LoginForm from "./LoginForm/LoginForm";
const LoginPage = () => {
  return (
    <div>
     
      <LoginForm />
      <Link href="/" className="text-white opacity-80 hover:underline">
        ¿Has olvidado tu contraseña?
      </Link>

      <div className="flex items-center space-x-2 mt-4">
        <Checkbox id="remember" className="border-white" />
        <label
          htmlFor="remember"
          className="text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Recuérdame
        </label>
      </div>

      <div className="mt-6 flex gap-1">
        <p className="text-white opacity-70">¿No tienes una cuenta?</p>
        <Link
          href="/signup"
          className="text-white font-semibold hover:underline"
        >
          Regístrate
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
