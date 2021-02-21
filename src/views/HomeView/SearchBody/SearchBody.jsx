import React from 'react';
import { useHistory } from 'react-router-dom';
import AlbumCard from './AlbumCard/AlbumCard';
import './SearchBody.css';

// This will hold the album cards
const SearchBody = ({ album }) => {

    const history = useHistory();

    const clickHandler = (id) => {
        history.push(`/album/${id}`);
    }

    if(album === undefined || null){
        return(
            <div>oops</div>
        );
    }
    else{
        return(
            <div className="searchbody-container">
                {album.map((dBalbum, index) => {
                    return <AlbumCard 
                                album={dBalbum} 
                                key={index} 
                                clickHandler={clickHandler}/>
                })}
            </div>
        );
    }
};

export default SearchBody;