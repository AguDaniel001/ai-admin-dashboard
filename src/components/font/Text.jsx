// src/components/Text.jsx
import React from "react";
import clsx from "clsx";

const sizes = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-2xl",
  "2xl": "text-3xl",
  "3xl": "text-4xl",
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

export default function Text({
  tag: Tag = "p",
  size = "sm",
  weight = "normal",
  color = "default",
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
        "leading-snu text-left",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
