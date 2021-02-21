import React from 'react';
import './AlbumCard.css';

const AlbumCard = ({ album, clickHandler }) => {
    return(
        <div className="card-container" onClick={() => clickHandler(album.id)}>
            <div className="card-background">
                <img src={album.imageUrl} alt="album image"/>
                <div className="card-info">
                    <div className="card-album">{album.album}</div>
                    <div className="card-artist">{album.artist}</div>
                </div>
            </div>
        </div>
    );
};

export default AlbumCard;