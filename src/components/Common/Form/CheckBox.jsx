import React from 'react'

const CheckBox = ({ label, name, onValueChange, checked, width }) => {
  return (
    <div style={getCheckBoxContainerStyle(width)}>
      <input
        type="checkbox"
        style={getCheckBoxStyle()}
        onChange={onValueChange}
        checked={checked}
        name={name}
        id={name}
      />
      <label style={getCheckBoxLabelStyle()} htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

const getCheckBoxContainerStyle = (width) => {
  return {
    display: "inline-flex",
    alignItems: "center",
    marginBottom: "1rem",
    width: width ? width : "auto",
  };
};

const getCheckBoxStyle = () => {
  return {
    marginRight: "0.5rem",
  };
};

const getCheckBoxLabelStyle = () => {
  return {
    fontSize: "0.9rem",
  };
};

export default CheckBox