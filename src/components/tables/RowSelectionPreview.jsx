import React from "react";

const RowSelectionPreview = ({ selectedFlatRows }) => {
  return (
    <pre>
      <code>
        {JSON.stringify(
          { selectedRows: selectedFlatRows.map((row) => row.original) },
          null,
          2
        )}
      </code>
    </pre>
  );
};

export default RowSelectionPreview;
