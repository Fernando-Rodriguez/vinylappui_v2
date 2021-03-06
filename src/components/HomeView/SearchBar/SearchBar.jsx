/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { SearchContext } from '../../../context/SearchContext';
import debounce1 from '../../../services/Utilities/Debouncer';
import DropDown from '../DropDown/DropDown';
import './SearchBar.css';

const SearchBar = () => {
  const [search, setSearch] = useContext(SearchContext);

  const debouncedInputHandler = debounce1((values) => {
    setSearch(values);
  }, 500);

  return (
    <div className="searchbar-container">
      <div className="search-input">
        <input
          className="searchbar-input"
          type="text"
          placeholder="Search Albums Here"
          onChange={(e) => {
            debouncedInputHandler(e.target.value);
          }}
        />
      </div>
      <DropDown />
    </div>
  );
};

export default SearchBar;
