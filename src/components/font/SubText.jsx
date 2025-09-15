import React from "react";
import Text from "./Text";

export default function SubText({
  tag = "p",
  size = "xs",
  weight = "semibold", 
  color = "muted",
  children,
  ...props
}) {
  return (
    <Text tag={tag} size={size} weight={weight} color={color} {...props}>
      {children}
    </Text>
  );
}
