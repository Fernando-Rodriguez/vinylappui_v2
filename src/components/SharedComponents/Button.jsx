import React from 'react';
import './Button.css';

const Button = ({ clickHandler, children }) => (
  <div className="button-container">
    <button
      type="button"
      className="custom-button"
      onClick={clickHandler}
    >
      {children}
    </button>
  </div>
);

export default Button;
