import React, { useEffect, useRef } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./calendar.css";

function RangePicker({ dateRange, setDateRange, setShowCalendar }) {
  const ref = useRef();

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowCalendar(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setShowCalendar]);

  // CALENDAR CHANGE
  const handleChange = (item) => {
    const selection = item.selection;
    setDateRange([selection]);

  };

  return (
    <div
      ref={ref}
      className="absolute z-20 right-10 top-18 custom-date-range shadow-lg"
    >
      <DateRange
        editableDateInputs={true}
        onChange={handleChange}
        moveRangeOnFirstSelection={false}
        ranges={dateRange}
      />
    </div>
  );
}

export default RangePicker;
