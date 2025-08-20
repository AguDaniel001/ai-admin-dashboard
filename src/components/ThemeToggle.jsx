import React, { useState, useEffect } from "react";
import { BsMoon, BsSun } from 'react-icons/bs';
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
        className="text-[var(--text)] hover:text-[var(--title)] hover:!bg-transparent !bg-transparent"
      >
        {theme === "light" ? <BsMoon /> : <BsSun />}
      </Button>

    </div>
  );
}

export default ThemeToggle;
