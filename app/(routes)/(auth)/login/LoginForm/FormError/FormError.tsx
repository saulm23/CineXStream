import React from "react";
import { FormErrorProps } from "./FormError.types";
import { TriangleAlert } from "lucide-react";
const FormError = (props: FormErrorProps) => {
  const { message } = props;
  if (!message) return null;
  return<div className="bg-destructive/50 p-3 rounded-md flex items-center gap x-2">
    <TriangleAlert/>
    <p>{message} </p>
  </div> 
};

export default FormError;
