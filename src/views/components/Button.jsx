import React, { Children } from 'react';
import './Button';

const Button = ({buttonContent, clickHandler, children}) => {
    return(
        <div className="button-container">
            <button
                className="custom-button"
                onClick={clickHandler}>
                {children}
            </button>
        </div>  
    );
};

export default Button;