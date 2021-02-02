import React, { useEffect, useContext } from 'react';
import { AlbumContext } from '../../context/AlbumProvider';
import AlbumCard from './AlbumCard/AlbumCard';
import ApiService from '../../services/api.service';
import './SearchBody.css';

// This will hold the album cards
const SearchBody = () => {

    const [album, setAlbums] = useContext(AlbumContext);

    useEffect(() => {

        const getAlbums = async () => {
            const albumsJson = await ApiService.getAlAlbums();
            setAlbums(albumsJson);
        }

        getAlbums();

    }, []);

    if(album.owned_Albums === undefined){
        return(
            <div>oops</div>
        );
    }
    else{
        return(
            <div className="searchbody-container">
                {album.owned_Albums.map((dBalbum) => {
                    return <AlbumCard album={dBalbum} />
                })}
            </div>
        );
    }
};

export default SearchBody;