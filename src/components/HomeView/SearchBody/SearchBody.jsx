import React from 'react';
import { useHistory } from 'react-router-dom';
import AlbumCard from './AlbumCard/AlbumCard';
import './SearchBody.css';

const SearchBody = ({ album }) => {
  const history = useHistory();

  const clickHandler = (id) => {
    history.push(`/album/${id}`);
  };

  if (album === undefined || album === null) {
    return (
      <div>No albums to show...</div>
    );
  }

  return (
    <div className="searchbody-container">
      {album.map((dBalbum) => (
        <AlbumCard
          className="searchbody-cell"
          album={dBalbum}
          key={dBalbum.id}
          clickHandler={clickHandler}
        />
      ))}
    </div>
  );
};

export default SearchBody;
