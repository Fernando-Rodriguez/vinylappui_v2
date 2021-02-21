import React from 'react';
import './TextInput.css';

const TextInput = ({placeholder, onChangeHandler, ...rest}) => {
    return (
        <div clasName="custom-text-input-container">
            <input 
                {...rest}
                type="text" 
                className="custom-text-input" 
                onChange={(e) => onChangeHandler(e.target.value)}
                placeholder={placeholder} />
        </div>
    );
};

export default TextInput;