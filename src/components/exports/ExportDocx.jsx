import React from "react";
import { saveAs } from "file-saver";
import { Document, Packer, Paragraph, Table, TableRow, TableCell, TextRun } from "docx";

const ExportDocx = ({ selectedRows }) => {
  const handleExport = async () => {
    const headers = Object.keys(selectedRows[0]);

    const tableRows = [
      new TableRow({
        children: headers.map(
          (h) =>
            new TableCell({
              children: [new Paragraph({ children: [new TextRun({ text: h, bold: true })] })],
            })
        ),
      }),
      ...selectedRows.map(
        (row) =>
          new TableRow({
            children: Object.values(row).map(
              (val) =>
                new TableCell({
                  children: [new Paragraph(String(val))],
                })
            ),
          })
      ),
    ];

    const doc = new Document({
      sections: [{ children: [new Table({ rows: tableRows })] }],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, "export.docx");
  };

  return <button onClick={handleExport}>Export Word</button>;
};

export default ExportDocx;
