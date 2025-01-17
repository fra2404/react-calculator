import React from "react";
import PropTypes from "prop-types";
import "./ToggleSwitch.css";

const ToggleSwitch = ({ checked, onChange }) => {
  return (
    <label className="toggle-switch" aria-label="Toggle Switch">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="slider"></span>
    </label>
  );
};
ToggleSwitch.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ToggleSwitch;
