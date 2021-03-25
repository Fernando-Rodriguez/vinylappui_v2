import React from 'react';
import './CustomButton.css';

const CustomButton = ({ clickHandler, children }) => (
  <button
    type="button"
    className="button-container"
    onClick={clickHandler}
  >
    {children}
  </button>
);

export default CustomButton;
