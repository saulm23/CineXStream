"use client";

import Button1 from "@/components1/Button";
import InputField from "@/components1/InputText";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import google from "../../../public/google.svg";
import { Button } from "@/components/ui/button";
const Login = () => {
  return (
    <div>
      <div className="w-full max-w-xs bg-black/70 backdrop-blur-lg rounded-xl px-6 py-8 shadow-md">
        <h1 className="text-2xl font-semibold text-white text-center mb-6">
          Iniciar Sesion
        </h1>

        <form className="space-y-4">
          <InputField
            type="email"
            name="email"
            placeholder="Correo electrónico"
          />
          <InputField
            type="password"
            name="password"
            placeholder="Contraseña"
          />
          <Button1
            text="Iniciar Sesion"
            href="/"
            className="bg-purple-700 hover:bg-purple-800 transition-colors w-full"
          />
        </form>

        <div className="text-center mt-4 text-sm text-gray-300">
          ¿No tienes una cuenta?{" "}
          <Link href="/sign-up" className="text-purple-400 hover:underline">
            ¡Registrate!
          </Link>
        </div>
        <div className="flex justify-center">
          <Button variant="outline" size="icon">
            <Image src={google} alt="google" className="w-6 h-6"/>

          
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
