/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './TextInput.css';

const TextInput = ({ placeholder, onChangeHandler, ...rest }) => (
  <div clasName="custom-text-input-container">
    <input
      {...rest}
      type="text"
      className="custom-text-input"
      onChange={(e) => onChangeHandler(e.target.value)}
      placeholder={placeholder}
    />
  </div>
);

export default TextInput;
