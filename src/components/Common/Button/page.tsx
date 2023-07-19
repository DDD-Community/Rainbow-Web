// import React, { ReactNode } from "react";
// import PropTypes, { Requireable } from "prop-types";
// import { twMerge as tailwindMerge } from "tailwind-merge";
// import { themePropTypesChecker } from "@/src/utils/customProptypes";
// import "./Button";

// type ButtonColor = "primary";
// export type ClassNameType = string | null | undefined | 0 | false;
// export const twMerge = (...classLists: ClassNameType[]) => tailwindMerge(classLists);

// export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
//   color: ButtonColor;
//   disabled?: boolean;
//   width?: string;
//   children: ReactNode;
// };

// const colors: Record<ButtonColor, string> = {
//   primary: "bg-black text-white"
// };

// export function Button(color, disabled = false, width = "w-full", className, children, ...props) {
//   const buttonColor = colors[color];
//   return (
//     <button {...props} disabled={disabled} className={twmerge(buttonColor, width, className)}>
//       {children}
//     </button>
//   );
// }

// export default Button;
