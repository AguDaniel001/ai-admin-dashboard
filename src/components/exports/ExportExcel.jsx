import React from "react";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";

const ExportExcel = ({ selectedRows }) => {
  const handleExport = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Sheet1");

    worksheet.addRow(Object.keys(selectedRows[0]));
    selectedRows.forEach((row) => worksheet.addRow(Object.values(row)));

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(blob, "export.xlsx");
  };

  return <button onClick={handleExport}>Export Excel</button>;
};

export default ExportExcel;
