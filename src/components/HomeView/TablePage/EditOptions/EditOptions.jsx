/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { AlbumMethodContext } from '../../../../context/AlbumMethodProvider';
import { UserContext } from '../../../../context/UserProvider';
import './EditOptions.css';

const EditOptions = ({ album, openHandler }) => {
  const [artistName, setArtist] = useState(album.artist);
  const [albumName, setAlbum] = useState(album.album);
  const [ratingItem, setRating] = useState(album.rating);
  // eslint-disable-next-line no-unused-vars
  const { updateAlbumHandler } = useContext(AlbumMethodContext);

  const { currentUser } = useContext(UserContext);

  const albumChangeHandler = async (id) => {
    const { userName, userId } = currentUser;

    const newAlbum = {
      user: userName,
      album: albumName,
      artist: artistName,
      rating: parseInt(ratingItem, 10),
    };

    await updateAlbumHandler(userId, id, newAlbum);

    openHandler();
  };

  const handleArtistChange = (e) => {
    setArtist(e.target.value);
  };

  const handleAlbumChange = (e) => {
    setAlbum(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  return (
    <div className="edit-full">
      <div className="main-container">
        <input
          placeholder={album.artist}
          type="text"
          value={artistName}
          onChange={handleArtistChange}
        />
        <input
          placeholder={album.album}
          type="text"
          value={albumName}
          onChange={handleAlbumChange}
        />
        <input
          placeholder={album.rating}
          type="text"
          value={ratingItem}
          onChange={handleRatingChange}
        />
        <div className="edit-img-container">
          <img src={album.imageUrl} alt="Album Artwork" />
        </div>
        <button type="button" onClick={() => albumChangeHandler(album.id)}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditOptions;
