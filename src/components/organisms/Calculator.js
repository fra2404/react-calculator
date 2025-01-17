import React, { useState } from "react";
import Row from "../molecules/Row";
import CustomButton from "../atoms/Button/CustomButton";
import "../../App.css";

const Calculator = () => {
  const [rows, setRows] = useState([
    { id: Date.now(), sign: "+", value: 0, enabled: true },
  ]);

  const handleAddRow = () => {
    setRows([...rows, { id: Date.now(), sign: "+", value: 0, enabled: true }]);
  };

  const handleRemoveRow = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleToggleRow = (id) => {
    setRows(
      rows.map((row) =>
        row.id === id ? { ...row, enabled: !row.enabled } : row
      )
    );
  };

  const handleChangeRow = (id, field, newValue) => {
    setRows(
      rows.map((row) => (row.id === id ? { ...row, [field]: newValue } : row))
    );
  };

  const calculateSum = () => {
    return rows.reduce((sum, row) => {
      if (row.enabled) {
        const value = parseFloat(row.value) || 0;
        return row.sign === "+" ? sum + value : sum - value;
      }
      return sum;
    }, 0);
  };

  return (
    <div className="calculator">
      {rows.map((row) => (
        <Row
          key={row.id}
          {...row}
          onToggle={handleToggleRow}
          onChange={handleChangeRow}
          onRemove={handleRemoveRow}
        />
      ))}
      <div className="sticky-footer">
        <CustomButton className="add-button" onClick={handleAddRow}>
          Add Row
        </CustomButton>
        <div className="result">Result: {calculateSum()}</div>
      </div>
    </div>
  );
};

export default Calculator;
