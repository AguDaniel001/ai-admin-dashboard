import React from "react";
import clsx from "clsx";

const sizes = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  md: "text-md",
  lg: "text-lg sm:text-xl md:text-2xl",
  xl: "text-xl sm:text-2xl md:text-3xl",
  "2xl": "text-2xl sm:text-3xl md:text-4xl",
  "3xl": "text-3xl sm:text-4xl md:text-5xl",
};

const weights = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const colors = {
  default: "text-[var(--title)]",
  muted: "text-[var(--text-muted)]",
  brand: "text-[var(--brand)]",
  success: "text-[var(--success)]",
  white: "text-white",
  black: "text-black",
};

const leading = {
  none: "leading-none",
  tight: "leading-tight",
  snug: "leading-snug",
  normal: "leading-normal",
  relaxed: "leading-relaxed",
  loose: "leading-loose",
};

export default function Text({
  tag: Tag = "p",
  size = "sm",
  weight = "normal",
  color = "default",
  lineHeight = "normal",
  className,
  children,
  ...props
}) {
  return (
    <Tag
      className={clsx(
        sizes[size],
        weights[weight],
        colors[color],
        leading[lineHeight],
        "text-left",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
