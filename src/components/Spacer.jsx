import React from "react";

export default function Spacer({ height = "1rem", width = "100%", display = "block" }) {
  return <div style={{ height, width, display }} className="" />;
}