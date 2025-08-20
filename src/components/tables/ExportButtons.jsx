// components/exports/ExportButtons.jsx
import React from "react";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import { Document, Packer, Paragraph, Table, TableRow, TableCell, TextRun } from "docx";
import { jsPDF } from 'jspdf';
import { autoTable } from 'jspdf-autotable';

const ExportButtons = ({ selectedFlatRows, filenameBase = "selected_rows" }) => {
  const selectedRows = (selectedFlatRows || []).map(r => r.original);
  if (!selectedRows.length) return null;

  const headers = Object.keys(selectedRows[0] || {});

  // CSV via ExcelJS
  const exportCsv = async () => {
    const wb = new ExcelJS.Workbook();
    const ws = wb.addWorksheet("Selected");
    ws.addRow(headers);
    selectedRows.forEach(r => ws.addRow(headers.map(h => r[h])));
    const buffer = await wb.csv.writeBuffer();
    saveAs(new Blob([buffer], { type: "text/csv;charset=utf-8;" }), `${filenameBase}.csv`);
  };

  // XLSX via ExcelJS
  const exportExcel = async () => {
    const wb = new ExcelJS.Workbook();
    const ws = wb.addWorksheet("Selected");
    ws.addRow(headers);
    selectedRows.forEach(r => ws.addRow(headers.map(h => r[h])));
    const buffer = await wb.xlsx.writeBuffer();
    saveAs(
      new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      }),
      `${filenameBase}.xlsx`
    );
  };

  // DOCX table via docx
  const exportDocx = async () => {
    const headerRow = new TableRow({
      children: headers.map(h =>
        new TableCell({
          children: [new Paragraph({ children: [new TextRun({ text: h, bold: true })] })],
        })
      ),
    });

    const dataRows = selectedRows.map(r =>
      new TableRow({
        children: headers.map(h =>
          new TableCell({ children: [new Paragraph(String(r[h] ?? ""))] })
        ),
      })
    );

    const doc = new Document({ sections: [{ children: [new Table({ rows: [headerRow, ...dataRows] })] }] });
    const blob = await Packer.toBlob(doc);
    saveAs(blob, `${filenameBase}.docx`);
  };

  // PDF via jsPDF + autotable
  const exportPdf = () => {
    const doc = new jsPDF();
    const body = selectedRows.map(r => headers.map(h => r[h]));

    autoTable(doc, { head: [headers], body });
    doc.save(`${filenameBase}.pdf`);
  };

  return (
    <div className="flex gap-2">
      <button onClick={exportCsv}>Export CSV</button>
      <button onClick={exportExcel}>Export Excel</button>
      <button onClick={exportDocx}>Export Word</button>
      <button onClick={exportPdf}>Export PDF</button>
    </div>
  );
};

export default ExportButtons;
