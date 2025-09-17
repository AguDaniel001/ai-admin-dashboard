import React from "react";
import clsx from "clsx";

const baseStyles =
  "inline-block  text-sm rounded-lg font-medium transition duration-300 ease-in-out h-[2rem] px-[0.8rem] border-0 hover:bg-[var(--bg-primary)]/80 hover:brightness-120 cursor-pointer hover:text-[var(--text)]/80  ";

const variants = {
  primary: "bg-white text-black hover:bg-brand-dark focus:ring-brand",
  outline:
    "border text-[var(--text)] bg-[var(--bg-primary)] border-1 border-[var(--border-outline)] focus:bg-[var(--bg-primary)] hover:bg-[var(--bg-primary-dark)] ",
  secondary:
    "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
  none:
    " border-0  text-[var(--text-muted)] hover:bg-[var(--bg-primary-dark)]",
};

const sizes = {
  sm: "text-[12px] !h-7 rounded-md ",
  md: "text-base ",
  lg: "text-lg ",
};

export default function Button({
  variant = "outline",
  size = "md",
  className,
  children,
  ...props
}) {
  return (
    <button
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
