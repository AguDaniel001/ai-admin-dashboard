import React, { useMemo, useState, useEffect } from "react";
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  usePagination,
  useColumnOrder,
  useRowSelect,
} from "react-table";
import { useStickyState } from "./useStickyState";
import { useToggle } from "../../hooks/useToggle";

import { COLUMNS } from "./columns";
import MOCK_DATA from "./MOCK_DATA.json";
import { Checkbox } from "./Checkbox";
import GlobalFilter from "./GlobalFilter";
import ColumnToggle from "./ColumnToggle";
import Pagination from "./Pagination";
import Spacer from "../Spacer";
import Title from "../font/Title";
import Subtitle from "../font/SubTitle";
import Icon from "../font/Icon";
import Button from "../Button";
import Text from "../font/Text";
import { BsArrowBarUp, BsCalendar2, BsSearch, BsToggles, BsToggles2,   } from "react-icons/bs";
import { FaDownload, FaRedoAlt, FaRegCalendar } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { MdSettings } from "react-icons/md";
import { BiRefresh } from 'react-icons/bi';
import { HiOutlineRefresh } from 'react-icons/hi';
import { FiSearch } from 'react-icons/fi';
import { RiSearch2Line } from 'react-icons/ri';
import { format, isWithinInterval, isAfter, isBefore } from "date-fns";

import RangePicker from "../calendar/RangePicker";
import ExportButtons from "./ExportButtons";

export const DataTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const { isOpen, toggle, ref } = useToggle(false);

  // Persisted state hooks
  const [savedState, setSavedState] = useStickyState(
    {
      pageIndex: 0,
      pageSize: 10,
      globalFilter: "",
      hiddenColumns: [],
    },
    "dataTableState"
  );

  // Date range state
  const [dateRange, setDateRange] = useStickyState([
    {
      startDate: null,
      endDate: null,
      key: "selection",
    },
  ]);

  const [showCalendar, setShowCalendar] = useState(false);

  // Filter data using date-fns
  const filteredData = useMemo(() => {
    const start = dateRange[0].startDate;
    const end = dateRange[0].endDate;

    if (!start && !end) return data; // when reset, all data shows

    return data.filter((row) => {
      const rowDate = new Date(row.date_of_birth);

      if (start && !end)
        return isAfter(rowDate, start) || rowDate.getTime() === start.getTime();
      if (!start && end)
        return isBefore(rowDate, end) || rowDate.getTime() === end.getTime();
      if (start && end) return isWithinInterval(rowDate, { start, end });

      return true;
    });
  }, [data, dateRange]);

  


  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    state,
    prepareRow,
    allColumns,
    getToggleHideAllColumnsProps,
    setGlobalFilter,
    selectedFlatRows, 
  } = useTable(
    {
      columns,
      data: filteredData, // ✅ filtered data goes here
      initialState: savedState,
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useColumnOrder,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <Checkbox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />,
        },
        ...columns,
      ]);
    }
  );

  const { globalFilter, pageIndex, pageSize, hiddenColumns } = state;

  // Keep localStorage in sync when table state changes
  useEffect(() => {
    setSavedState({
      pageIndex,
      pageSize,
      globalFilter,
      hiddenColumns,
    });
  }, [pageIndex, pageSize, globalFilter, hiddenColumns, setSavedState]);

  const [showToggle, setShowToggle] = useState(false);

  return (
    <>
      {/* Column Toggle */}
      {showToggle && (
        <ColumnToggle
          allColumns={allColumns}
          getToggleHideAllColumnsProps={getToggleHideAllColumnsProps}
        />
      )}


      {/* Page Header */}
      <div className="flex justify-between max-md:justify-start max-md:flex-col max-md:gap-3 ">
        <div>
          <Title>Leads</Title>
        </div>

        {/* Search */}
        <div className="icon-card  flex gap-2 items-center bg-[var(--bg-secondary)] max-lg:px-2.5 ">
          <Icon className="text-[var(--text-muted)]" ><RiSearch2Line /></Icon>
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        </div>

        {/* Actions */}
        <div className="flex gap-2 items-center">
          
          <Button
            className="button-icon text-[var(--text-muted)]"
            onClick={() => setShowToggle(!showToggle)}
          >
            <Icon><BsToggles2 /></Icon>
          </Button>
          

          <div className=" flex relative">
            <Button
              className="button-icon flex! gap-3 items-center rounded-r-none text-[var(--text-muted)]"
              onClick={(e) => {
                e.stopPropagation(); 
                setShowCalendar((prev) => !prev);
              }}
            >
              <Icon className="text-[var(--text-muted)]" ><BsCalendar2 /></Icon>
              <Text>
                {dateRange[0].startDate && dateRange[0].endDate
                  ? `${format(dateRange[0].startDate, "dd MMM yyyy")} - ${format(
                      dateRange[0].endDate,
                      "dd MMM yyyy"
                    )}`
                  : "Select Date"}
              </Text>
            </Button>

            

            {showCalendar && (
              <RangePicker
                dateRange={dateRange}
                setDateRange={setDateRange}
                setShowCalendar={setShowCalendar}
              />
            )}
            <Button
              className="button-icon text-[var(--text-muted)] rounded-l-none "
              onClick={() =>
                setDateRange([
                  {
                    startDate: null,
                    endDate: null,
                    key: "selection",
                  },
                ])
              }
            >
              <Icon><HiOutlineRefresh /></Icon>
            </Button>
          </div>
        </div>
      </div>

      <Spacer height="1.8rem" />
      
      <div className="  bg-[var(--bg-primary)] flex justify-between items-center rounded-t-2xl px-5 h-[3.5rem]">
        <Subtitle>All Customers</Subtitle>
        <Button className="" variant="none" onClick={toggle}>
          <Icon><FaDownload /></Icon> 
        </Button>
        {isOpen && (
            <ExportButtons selectedFlatRows={selectedFlatRows} />
        )}

      </div>

      {/* Table */}
      <div className=" overflow-x-scroll " >
        <table {...getTableProps()} >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}  >
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted ? (
                        <BsArrowBarUp className="inline" />
                      ) : (
                        ""
                      )}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}  >
            {page.length ? (
              page.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}  >
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    ))}
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={columns.length}>No records found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className=" bg-[var(--bg-primary)] flex items-center rounded-b-2xl px-2 h-[0.8rem]"></div> 
      <Spacer height="1.5rem" />

      {/* Pagination */}
      <Pagination
        pageIndex={pageIndex}
        pageOptions={pageOptions}
        gotoPage={gotoPage}
        pageSize={pageSize}
        setPageSize={setPageSize}
        previousPage={previousPage}
        nextPage={nextPage}
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        pageCount={pageCount}
      />
    </>
  );
};
