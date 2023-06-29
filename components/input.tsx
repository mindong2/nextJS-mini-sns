import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputType {
  label: string;
  name: string;
  register: UseFormRegisterReturn;
  errorMessage?: String;
  type: string;
  [key: string]: any;
}

const Input = ({ label, name, register, errorMessage, type, ...rest }: InputType) => {
  return (
    <div>
      <label className="text-lg text-gray-500" htmlFor={name}>
        {label}
      </label>
      <input {...register} id={name} {...rest} className="w-full outline-none focus:ring-inset focus:ring-2 focus:ring-blue-600 px-2 py-1 mt-2 rounded-[4px] text-[#333]" type={type} />
      <p>{errorMessage}</p>
    </div>
  );
};

export default Input;
