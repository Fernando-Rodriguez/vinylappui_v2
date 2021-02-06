import React, { useEffect, useContext } from 'react';
import { AlbumContext } from '../../context/AlbumProvider';
import AlbumCard from './AlbumCard/AlbumCard';
import './SearchBody.css';

// This will hold the album cards
const SearchBody = ({ album }) => {

    if(album === undefined){
        return(
            <div>oops</div>
        );
    }
    else{
        return(
            <div className="searchbody-container">
                {album.map((dBalbum, index) => {
                    return <AlbumCard album={dBalbum} key={index} />
                })}
            </div>
        );
    }
};

export default SearchBody;