import React from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import CustomInput from "../atoms/Input/CustomInput";
import ToggleSwitch from "../atoms/ToggleSwitch/ToggleSwitch";

const Row = ({ id, sign, value, enabled, onToggle, onChange, onRemove }) => (
  <div className="row">
    <CustomInput
      type="select"
      value={sign}
      onChange={(e) => onChange(id, "sign", e.target.value)}
      options={[
        { value: "+", label: "+" },
        { value: "-", label: "-" },
      ]}
    />
    <CustomInput
      type="number"
      value={value}
      onChange={(e) => onChange(id, "value", e.target.value)}
      disabled={!enabled}
    />
    <ToggleSwitch checked={enabled} onChange={() => onToggle(id)} />
    <button
      className="icon"
      onClick={() => onRemove(id)}
      aria-label="Remove"
      style={{
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer",
      }}
    >
      <FaTimes style={{ color: "red" }} />
    </button>
  </div>
);
Row.propTypes = {
  id: PropTypes.string.isRequired,
  sign: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  enabled: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Row;
