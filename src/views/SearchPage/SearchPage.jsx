import React, { useContext } from 'react';
import MainFooter from '../MainFooter/MainFooter';
import NavBar from '../NavBar/NavBar';
import SearchBody from '../SearchBody/SearchBody';
import { UserContext } from '../../context/UserProvider';
import AlbumProvider from '../../context/AlbumProvider';
import './SearchPage.css';

// This will work as the main container for the searchpage.
const SearchPage = () => {

    return(
        <AlbumProvider>
            <div className="search-page-container">
                <div className="search-page-navbar">
                    <NavBar />
                </div>
                <div className="search-page-body">
                    <SearchBody />
                </div>
                <div className="search-page-searchbar">
                </div>
                <div className="search-page-footer">
                    <MainFooter />
                </div>
            </div>
        </AlbumProvider>
    );
}

export default SearchPage;