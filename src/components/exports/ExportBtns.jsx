import React from "react";
import ExportCsv from "./ExportCsv";
import ExportExcel from "./ExportExcel";
import ExportDocx from "./ExportDocx";
import ExportPdf from "./ExportPdf";

const ExportButtons = ({ selectedRows }) => {
  if (!selectedRows || selectedRows.length === 0) return null;

  return (
    <div style={{ display: "flex", gap: "8px", margin: "12px 0" }}>
      <ExportCsv selectedRows={selectedRows} />
      <ExportExcel selectedRows={selectedRows} />
      <ExportDocx selectedRows={selectedRows} />
      <ExportPdf selectedRows={selectedRows} />
    </div>
  );
};

export default ExportButtons;
