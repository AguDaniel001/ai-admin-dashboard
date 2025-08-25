import React from "react";

const ColumnToggle = ({ allColumns, getToggleHideAllColumnsProps }) => {
  return (
    <div className="text-left relative">
      <div className="absolute bg-[var(--bg-primary)] icon-card text-[var(--text)] text-sm right-40 top-11 box-shadow  ">
        <input className=" accent-[var(--color-primary)] mt-0" 
          type="checkbox" {...getToggleHideAllColumnsProps()} />
           {" "}Toggle All
        {allColumns.map((col) => (
          <div  key={col.id}>
            <label >
              <input className=" accent-[var(--color-primary)] mt-3  " type="checkbox" {...col.getToggleHiddenProps()} />{" "}
              {col.Header}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColumnToggle;
