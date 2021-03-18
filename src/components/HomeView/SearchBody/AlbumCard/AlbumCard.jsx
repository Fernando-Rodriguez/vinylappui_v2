import React from 'react';
import MoreInfo from '../MoreInfo/MoreInfo';
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
    >
      <div className="card-front">
        <div className="card-background">
          <img
            src={album.imageUrl}
            alt="album artwork"
          />
          <div className="card-info">
            <div className="card-album">{album.album}</div>
            <div className="card-artist">{album.artist}</div>
          </div>
        </div>
      </div>
      <div
        className="card-back"
        role="button"
        tabIndex="0"
        onKeyDown={onKeyDownHandler}
        onClick={() => clickHandler(album.id)}
      >
        <MoreInfo album={album} />
      </div>
    </div>
  );
};

export default AlbumCard;
