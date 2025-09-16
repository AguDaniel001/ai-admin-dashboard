import React, { useState, useEffect } from "react";
import { BsMoon, BsSun } from 'react-icons/bs';
import { LuSun, LuSunDim } from 'react-icons/lu';
import { FaRegMoon } from 'react-icons/fa';
import { FiMoon, FiSun } from 'react-icons/fi';
import Button from './Button'

function ThemeToggle() {

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <div>
      <Button
        onClick={toggleTheme}
        className=" icon "
      >
        {theme === "light" ? <FiMoon /> : <FiSun/>}
      </Button>

    </div>
  );
}

export default ThemeToggle;
