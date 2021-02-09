import React, { useContext, useEffect, useState } from 'react';

import MainFooter from '../MainFooter/MainFooter';
import NavBar from '../NavBar/NavBar';
import SearchBody from '../SearchBody/SearchBody';
import SearchBar from '../SearchBar/SearchBar';

import VinylApiService from '../../services/vinylApiService';

import { AlbumContext } from '../../context/AlbumProvider';
import { UserContext } from '../../context/UserProvider';

import { debounce1 } from '../../services/utilities';

import './SearchPage.css';

// This will work as the main container for the searchpage.
const SearchPage = () => {

    const [album, setAlbums] = useContext(AlbumContext);
    const [token] = useContext(UserContext);
    const [input, setInput] = useState("");

    useEffect(() => {
        const getAlbums = async () => {
            //const albumsJson = await ApiService.getAlAlbums(token);
            const albums = await VinylApiService.getDataAsync();
            setAlbums(albums);
        }
        getAlbums();
    }, []);

    const debouncedInputHandler = debounce1((values) => {
        setInput(values);
    }, 500);

    const filterAlbums = () => {
        if(input){
            const list = album.filter((album) => {

                const inputToLower = input.toLowerCase();

                if( album.artist.toLowerCase().includes(inputToLower) || 
                    album.album.toLowerCase().includes(inputToLower)) {
                    return album;
                }
                else{
                    return null;
                }
            })
            return list;
        }
    }

    return(
        <div className="search-page-container">
            <div className="search-page-navbar">
                <NavBar />
            </div>
            <div className="search-page-body">
                <SearchBody album={input ? filterAlbums() : album}/>
            </div>
            <div className="search-page-searchbar">
                <SearchBar searchbarHandler={debouncedInputHandler}/>
            </div>
            <div className="search-page-footer">
                <MainFooter />
            </div>
        </div>
    );
};

export default SearchPage;