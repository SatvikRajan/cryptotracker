import React from 'react';

const SelectButton = ({ children, selected, onClick }) => {
  const buttonStyle = {
    textAlign: 'center',
    border: "1px solid gold",
    borderRadius: 5,
    padding: 10,
    paddingLeft: 5,
    fontFamily: "Montserrat",
    cursor: "pointer",
    backgroundColor: selected ? "gold" : "",
    color: selected ? "black" : "",
    fontWeight: selected ? 700 : 500,
    width: "25%",
  };

  const hoverStyle = {
    backgroundColor: "gold",
    color: "black",
  };

  return (
    <span
      onClick={onClick}
      style={{
        ...buttonStyle,
        ...(selected ? hoverStyle : {}),
      }}
    >
      {children}
    </span>
  );
};

export default SelectButton;
