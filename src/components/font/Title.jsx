// src/components/Title.jsx
import React from "react";
import Text from "./Text";

export default function Title({ children, ...props }) {
  return (
    <Text tag="h1" size="2xl" weight="bold" {...props}>
      {children}
    </Text>
  );
}
