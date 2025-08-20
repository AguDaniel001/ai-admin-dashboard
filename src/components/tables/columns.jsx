import { format } from "date-fns";

// Centralized reusable formatters
const formatDate = (value) => (value ? format(new Date(value), "dd/MM/yyyy") : "");
const formatPhone = (value) => (value ? String(value) : "—");

export const COLUMNS = [
  {
    Header: "ID",
    accessor: "id",
    disableSortBy: true,
  },
  {
    Header: "First Name",
    accessor: "first_name",
  },
  {
    Header: "Last Name",
    accessor: "last_name",
  },
  {
    Header: "Date of Birth",
    accessor: "date_of_birth",
    Cell: ({ value }) => formatDate(value),
  },
  {
    Header: "Country",
    accessor: "country",
  },
  {
    Header: "Phone",
    accessor: "phone",
    Cell: ({ value }) => formatPhone(value),
  },
];
