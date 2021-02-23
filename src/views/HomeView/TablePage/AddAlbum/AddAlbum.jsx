/* eslint-disable no-console */
import React, { useContext, useState } from 'react';
import { AlbumMethodContext } from '../../../../context/AlbumMethodProvider';
import './AddAlbum.css';

const AddAlbum = () => {
  const [artistName, setArtistName] = useState('');
  const [albumName, setAlbumName] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [addAlbumHandler] = useContext(AlbumMethodContext);

  const buttonHandler = async () => {
    await addAlbumHandler({
      artist: artistName,
      album: albumName,
      user: 'Frod080',
    });
    console.log(`${artistName} ${albumName}`);
    setArtistName('');
    setAlbumName('');
  };

  return (
    <div className="add-container">
      <div className="add-input-container">
        <input
          type="text"
          placeholder="Artist Name"
          value={artistName}
          onChange={(e) => setArtistName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Album Name"
          value={albumName}
          onChange={(e) => setAlbumName(e.target.value)}
        />
        <button type="button" onClick={buttonHandler}>Add Album!</button>
      </div>
    </div>
  );
};

export default AddAlbum;
