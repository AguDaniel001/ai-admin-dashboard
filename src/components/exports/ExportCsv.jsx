import React from "react";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";

const ExportCsv = ({ selectedRows }) => {
  const handleExport = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Sheet1");

    worksheet.addRow(Object.keys(selectedRows[0]));
    selectedRows.forEach((row) => worksheet.addRow(Object.values(row)));

    const buffer = await workbook.csv.writeBuffer();
    const blob = new Blob([buffer], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "export.csv");
  };

  return <button onClick={handleExport}>Export CSV</button>;
};

export default ExportCsv;
