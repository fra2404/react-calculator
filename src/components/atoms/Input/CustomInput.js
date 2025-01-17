import React from "react";
import PropTypes from "prop-types";
import "./CustomInput.css";

const CustomInput = ({ type, value, onChange, options }) => {
  if (type === "select") {
    return (
      <select className="custom-input" value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }

  return (
    <input
      className="custom-input"
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};
CustomInput.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};

export default CustomInput;
