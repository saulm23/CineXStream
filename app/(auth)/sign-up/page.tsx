import Button from "@/components1/Button";
import InputField from "@/components1/InputText";
import React from "react";

const signup = () => {
  return (
    <div className="mt-24 bg-black/50 py-10 px-6 md:mt-0 md:max-w-sm md_px-14">
      <form>
        <h1 className="text-3xl font-semi-bold">Signup</h1>
        <InputField
          type="email"
          name="email"
          placeholder="Correo electrónico"
        />
        <InputField
          type="password"
          name="password"
          placeholder="Contraseña"
          className="mt-4"
        />
        <Button text="SignUp" href="/" className="bg-[#333] bg-[#51360]" />
      </form>
      <h1> Ya tienes una cuenta?</h1>
    </div>
  );
};

export default signup;
