import React, { useContext } from 'react';
import { AlbumContext } from '../../context/AlbumProvider';
import {debounce1} from '../../services/utilities';
import './SearchBar.css';

const SearchBar = () => {

    const [
        albums,
        setAlbums,
        selectedAlbum,
        setSelectedAlbum,
        addAlbumHandler,
        deleteAlbumHandler,
        updateAlbumHandler,
        filteredAlbums,
        setSearch,
      ] = useContext(AlbumContext);
    
    const debouncedInputHandler = debounce1((values) => {
        setSearch(values);
    }, 500);

    return(
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
        </div>
    );
};

export default SearchBar;