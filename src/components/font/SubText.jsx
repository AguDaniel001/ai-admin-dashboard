import React from "react";
import Text from "./Text";

export default function SubText({ children, ...props }) {
  return (
    <Text tag="p" size="xs" weight="semibold" color="muted" {...props}>
      {children}
    </Text>
  );
}
