import React from "react";
import Text from "./Text";

export default function Title({
  level = 1,
  size = "3xl",
  weight = "bold",
  children,
  ...props
}) {
  const Tag = `h${level}`; // h1, h2, h3...
  return (
    <Text tag={Tag} size={size} weight={weight} {...props}>
      {children}
    </Text>
  );
}
