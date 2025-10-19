import { useState } from "react";
import { setPrimaryColor, getPrimaryColor } from "../hooks/colorChange";

export default function ColorPicker() {
  const [color, setColor] = useState(getPrimaryColor());

  const handleChange = (e) => {
    const newColor = e.target.value;
    setColor(newColor);
    setPrimaryColor(newColor);
  };

  return (
    <div className="flex w-full  gap-5 align-center ">
      <label>Brand Color</label>
      <input
        type="color"
        value={color}
        onChange={handleChange}
        className="cursor-pointer w-10 h-6"
      />
    </div>
  );
}
