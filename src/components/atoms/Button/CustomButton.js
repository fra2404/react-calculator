import React from "react";
import PropTypes from "prop-types";
import "./CustomButton.css";

const CustomButton = ({ onClick, children }) => (
  <button className="custom-button" onClick={onClick}>
    {children}
  </button>
);
CustomButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default CustomButton;
