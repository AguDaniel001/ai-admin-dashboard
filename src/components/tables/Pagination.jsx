import React from "react";
import Button from "../Button"
import Spacer from "../Spacer";
import SubText from "../font/SubText";
const Pagination = ({
  pageIndex,
  pageOptions,
  gotoPage,
  pageSize,
  setPageSize,
  previousPage,
  nextPage,
  canPreviousPage,
  canNextPage,
  pageCount,
}) => {
  return (
    <div className="flex justify-between items-end max-xl:flex-col-reverse max-xl:gap-4">
      
      <div className="flex gap-3  ">

        <SubText size="sm" className="!font-medium " >
           Showing <span className="text-[var(--text)] font-bold ">{pageIndex + 1}</span> to <span className="text-[var(--text)] font-bold">{pageOptions.length}</span> of <span className="text-[var(--text)] font-bold">200</span > results
        </SubText>
        <SubText size="sm">
            Go to page:{" "}
          <input
            className="border border-[var(--border-outline)] text-[var(--text)] font-bold w-15 px-1 rounded outline-0 "
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
            
          />
        </SubText>

        
      </div>

      <div>
        <select
          className="icon-card focus:outline-none text-[var(--text)] font-medium text-sm "
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[5, 10, 25, 50].map((size) => (
            <option key={size} value={size}>
              Show {size} rows
            </option>
          ))}
        </select>
        <Spacer display="inline-block" width="1rem"/>

        <Button onClick={() => gotoPage(0)} disabled={!canPreviousPage} variant='outline'>{"<<"}</Button>
        <Spacer display="inline-block" width="0.5rem"/>
        <Button onClick={previousPage} disabled={!canPreviousPage} variant='outline'>Previous</Button>

        <Spacer display="inline-block" width="1rem"/>

        <Button onClick={nextPage} disabled={!canNextPage} variant='outline'>Next</Button>
        <Spacer display="inline-block" width="0.5rem"/>
        <Button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} variant='outline'>{">>"}</Button>
      </div>
      
      
    </div>
  );
};

export default Pagination;
