import React from 'react';
import './SearchBar.css';

const SearchBar = ({searchbarHandler}) => {

    return(
        <div className="searchbar-container">
            <div className="search-input">
                <input 
                    className="searchbar-input" 
                    type="text"
                    onChange={(e) => {
                        searchbarHandler(e.target.value);
                    }}
                />
            </div>
        </div>
    );
};

export default SearchBar;