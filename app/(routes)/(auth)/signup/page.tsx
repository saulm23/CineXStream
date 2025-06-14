import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "lucide-react";
import React from "react";
import SignUpForm from "./SignUpForm/SignUpForm";

const signup = () => {
  return (
    <>
      <SignUpForm />

      <div className="mt-6 flex gap-1">
        <p className="text-white opacity-70">¿Ya tienes una cuenta?</p>
        <Link
          href="/login"
          className="text-white font-semibold hover:underline"
        >
          Inicia Sesion
        </Link>
      </div>
    </>
  );
};

export default signup;
