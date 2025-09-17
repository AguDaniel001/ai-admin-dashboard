import React from "react";
import Text from "./Text";

export default function Subtitle({
  level = 2, // semantic default
  size = "lg", 
  weight = "semibold",
  color = "default",
  children,
  ...props
}) {
  const Tag = `h${level}`;
  return (
    <Text tag={Tag} size={size} weight={weight} color={color} {...props}>
      {children}
    </Text>
  );
}
