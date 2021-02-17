import React, { useContext, useEffect, useState } from 'react';
import VinylApiService from '../../services/api.service';
import { useParams } from 'react-router-dom';
import "./AlbumPage.css";

const AlbumPage = () => {

    const userId = "5f90c145b5a8ec412e4307f4";
    let { id } = useParams();

    const [album, setAlbum] = useState();

    useEffect(() => {
        const getData = async () => {
            const result = await VinylApiService.searchDataAsync(userId, id);
            setAlbum(result);
        }
        getData();
    }, []);

    const albumDisplay = () => {
        return(
            <div className="album-display-container">
                <div className="album-display-img-container"><img src={album.imageUrl} /></div>
                <div className="album-display-artist">{album.artist}</div>
                <div className="album-display-album">{album.album}</div>
            </div>
        );
    };

    const loadingDisplay = () => {
        return(
            <div>
                Loading...
            </div>
        );
    };

    return(
        <div>
            {album ? albumDisplay() : loadingDisplay() }
        </div>
    );
};

export default AlbumPage;