import React from 'react';
import './CustomButton.css';

const CustomButton = (
  {
    clickHandler,
    children,
    theme,
    customStyle,
  },
) => (
  <button
    type="button"
    className={`button-container ${customStyle} ${theme}`}
    onClick={clickHandler}
  >
    {children}
  </button>
);

export default CustomButton;
