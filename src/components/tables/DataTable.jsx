import React, { useMemo, useEffect } from "react";
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
import { BsArrowBarUp } from "react-icons/bs";
import { CgCalendar } from 'react-icons/cg';
import { LuFileDown } from 'react-icons/lu';
import { IoMdSwitch } from 'react-icons/io';
import { HiOutlineRefresh } from "react-icons/hi";
import { RiSearch2Line } from "react-icons/ri";
import { format, isWithinInterval, isAfter, isBefore } from "date-fns";

import RangePicker from "../calendar/RangePicker";
import ExportButtons from "./ExportButtons";

export const DataTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  // Persisted state
  const [savedState, setSavedState] = useStickyState(
    { pageIndex: 0, pageSize: 10, globalFilter: "", hiddenColumns: [] },
    "dataTableState"
  );

  // Date range
  const [dateRange, setDateRange] = useStickyState([
    { startDate: null, endDate: null, key: "selection" },
  ]);

  // ✅ Toggle hooks
  const columnToggle = useToggle({ closeOnOutside: true });
  const calendarToggle = useToggle({ closeOnOutside: true });
  const exportToggle = useToggle({ closeOnOutside: true });

  // Filter by date
  const filteredData = useMemo(() => {
    const start = dateRange[0].startDate;
    const end = dateRange[0].endDate;

    if (!start && !end) return data;

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
    { columns, data: filteredData, initialState: savedState },
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

  useEffect(() => {
    setSavedState({ pageIndex, pageSize, globalFilter, hiddenColumns });
  }, [pageIndex, pageSize, globalFilter, hiddenColumns, setSavedState]);

  return (
    <>
      {/* Column Toggle */}
      {columnToggle.isOpen && (
        <div ref={columnToggle.ref}>
          <ColumnToggle
            allColumns={allColumns}
            getToggleHideAllColumnsProps={getToggleHideAllColumnsProps}
          />
        </div>
      )}

      {/* Page Header */}
      <div className="flex justify-between max-md:flex-col max-md:gap-3">
        <Title>Leads</Title>

        {/* Search */}
        <div className="icon-card flex gap-2 items-center bg-[var(--bg-secondary)] max-lg:px-2.5">
          <Icon className="text-[var(--text-muted)]">
            <RiSearch2Line />
          </Icon>
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        </div>

        {/* Actions */}
        <div className="flex gap-2 items-center">
          {/* Column Toggle Button */}
          <Button
            className="button-icon text-[var(--text-muted)]"
            onClick={columnToggle.toggle}
          >
            <Icon>
              <IoMdSwitch />
            </Icon>
          </Button>

          {/* Calendar */}
          <div ref={calendarToggle.ref} className="flex relative">
            <Button
              className="button-icon flex! gap-3 items-center rounded-r-none text-[var(--text-muted)]"
              onClick={calendarToggle.toggle}
            >
              <Icon className="text-[var(--text-muted)]">
                <CgCalendar />
              </Icon>
              <Text>
                {dateRange[0].startDate && dateRange[0].endDate
                  ? `${format(dateRange[0].startDate, "dd MMM yyyy")} - ${format(
                      dateRange[0].endDate,
                      "dd MMM yyyy"
                    )}`
                  : "Select Date"}
              </Text>
            </Button>

            {calendarToggle.isOpen && (
              <RangePicker
                dateRange={dateRange}
                setDateRange={setDateRange}
                setShowCalendar={calendarToggle.close}
              />
            )}

            <Button
              className="button-icon text-[var(--text-muted)] rounded-l-none"
              onClick={() =>
                setDateRange([{ startDate: null, endDate: null, key: "selection" }])
              }
            >
              <Icon>
                <HiOutlineRefresh />
              </Icon>
            </Button>
          </div>
        </div>
      </div>

      <Spacer height="1.8rem" />

      {/* Table Header with Export */}
      <div className="bg-[var(--bg-primary)] flex justify-between items-center rounded-t-2xl px-5 h-[3.5rem]">
        <Subtitle>All Customers</Subtitle>

        <div ref={exportToggle.ref} className="relative">
          <Button variant="none" onClick={exportToggle.toggle}>
            <Icon className="icon">
              <LuFileDown />
            </Icon>
          </Button>
          {exportToggle.isOpen && (
            <div className="absolute right-0">
              <ExportButtons selectedFlatRows={selectedFlatRows} />
            </div>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-scroll">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted && <BsArrowBarUp className="inline" />}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {page.length ? (
              page.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
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

      <div className="bg-[var(--bg-primary)] h-[0.8rem] rounded-b-2xl"></div>
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
