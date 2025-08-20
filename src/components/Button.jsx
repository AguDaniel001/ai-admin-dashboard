import React from "react";
import clsx from "clsx";

const baseStyles =
  "inline-block  text-sm rounded-lg font-medium transition duration-100 ease-in-out h-[2.2rem] px-[0.8rem] border-0 hover:bg-[var(--background-primary)]/90 ";

const variants = {
  primary: "bg-white text-black hover:bg-brand-dark focus:ring-brand",
  outline:
    "border text-[var(--text)] bg-[var(--background-primary)] border-1 border-[var(--border-outline)] focus:bg-[var(--background-primary)]",
  secondary:
    "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
};

const sizes = {
  sm: "text-sm ",
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
