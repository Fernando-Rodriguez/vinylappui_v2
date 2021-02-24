import React from 'react';
import { useHistory } from 'react-router-dom';
import AlbumCard from './AlbumCard/AlbumCard';
import './SearchBody.css';

// This will hold the album cards
const SearchBody = ({ album }) => {
  const history = useHistory();

  const clickHandler = (id) => {
    history.push(`/album/${id}`);
  };

  if (album === undefined || album === null) {
    return (
      <div>oops</div>
    );
  }

  return (
    <div className="searchbody-container">
      {album.map((dBalbum) => (
        <AlbumCard
          album={dBalbum}
          key={dBalbum.id}
          clickHandler={clickHandler}
        />
      ))}
    </div>
  );
};

export default SearchBody;
