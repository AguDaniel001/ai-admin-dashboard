import { useState, useCallback, useEffect, useRef } from "react";

export function useToggle(initialValue = false) {
  const [isOpen, setIsOpen] = useState(initialValue);
  const ref = useRef(null);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const setTrue = useCallback(() => setIsOpen(true), []);
  const setFalse = useCallback(() => setIsOpen(false), []);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return { isOpen, toggle, setTrue, setFalse, ref };
}
