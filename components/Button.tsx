import React, { ReactNode } from "react";

type buttonPropType = {
  classs: String;
  children: ReactNode;
};

const Button = ({ classs, children }: buttonPropType) => {
  return (
    <button
      type="button"
      className={`flex items-center gap-1 w-full text-left px-4 py-3  rounded-md hover:bg-[#2B2C2F] ${classs}`}
    >
      {children}
    </button>
  );
};

export default Button;
