import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface TextAreaType {
  label: string;
  name: string;
  register: UseFormRegisterReturn;
  errorMessage?: String;
  [key: string]: any;
}

const TextArea = ({ label, name, register, errorMessage, type, ...rest }: TextAreaType) => {
  return (
    <div>
      <label className="text-lg text-gray-500" htmlFor="post">
        {label}
      </label>
      <textarea {...register} id={name} {...rest} className="w-full outline-none focus:ring-inset focus:ring-2 focus:ring-blue-600 px-2 py-1 mt-2 rounded-[4px] text-[#333] resize-none" rows={4} />
    </div>
  );
};

export default TextArea;
