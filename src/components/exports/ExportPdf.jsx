import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

const ExportPdf = ({ selectedRows }) => {
  const handleExport = () => {
    const doc = new jsPDF();
    const headers = [Object.keys(selectedRows[0])];
    const body = selectedRows.map((row) => Object.values(row));

    doc.autoTable({ head: headers, body: body });
    doc.save("export.pdf");
  };

  return <button onClick={handleExport}>Export PDF</button>;
};

export default ExportPdf;
