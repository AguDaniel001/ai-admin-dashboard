import React from "react";
import Text from "./Text";

export default function Subtitle({ children, ...props }) {
  return (
    <Text tag="h2" size="base" weight="semibold" color="default" {...props}>
      {children}
    </Text>
  );
}
