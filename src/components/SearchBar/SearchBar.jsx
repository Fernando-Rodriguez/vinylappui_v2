/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { AlbumContext } from '../../context/AlbumProvider';
import { SearchContext } from '../../context/SearchContext';
import debounce1 from '../../services/utilities';
import DropDown from '../SharedComponents/DropDown';
import './SearchBar.css';

const SearchBar = () => {
  const [search, setSearch] = useContext(SearchContext);

  const [
    albums,
    setAlbums,
    filteredAlbums,
    RefreshAlbums,
    groups,
    GroupSelected,
  ] = useContext(AlbumContext);

  const [dropDownValue, setDropDownValue] = useState();

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
      <DropDown dropDownListArray={groups} />
    </div>
  );
};

export default SearchBar;
