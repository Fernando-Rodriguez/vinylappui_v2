import React from 'react';
import './AlbumCard.css';

const AlbumCard = ({ album, clickHandler }) => {
  const onKeyDownHandler = (e) => {
    if (e.key === 'Enter') {
      clickHandler(album.id);
    }
  };

  return (
    <div
      className="card-container"
      tabIndex="0"
      role="button"
      onClick={() => clickHandler(album.id)}
      onKeyDown={onKeyDownHandler}
    >
      <div className="card-background">
        <img src={album.imageUrl} alt="album artwork" />
        <div className="card-info">
          <div className="card-album">{album.album}</div>
          <div className="card-artist">{album.artist}</div>
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;
