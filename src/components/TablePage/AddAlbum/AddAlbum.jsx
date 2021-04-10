/* eslint-disable no-console */
import React, { useContext, useState } from 'react';
import { AlbumMethodContext } from '../../../context/AlbumMethodProvider';
import { UserContext } from '../../../context/UserProvider';
import CustomButton from '../../SharedComponents/CustomButton';
import './AddAlbum.css';

const AddAlbum = () => {
  const [artistName, setArtistName] = useState('');
  const [albumName, setAlbumName] = useState('');
  const [currentUser] = useContext(UserContext);
  // eslint-disable-next-line no-unused-vars
  const [addAlbumHandler] = useContext(AlbumMethodContext);

  const buttonHandler = async () => {
    await addAlbumHandler({
      artist: artistName,
      album: albumName,
      user: currentUser.userName,
    });
    console.log(`${artistName} ${albumName}`);
    setArtistName('');
    setAlbumName('');
  };

  return (
    <div className="add-container">
      <div className="add-input-field">
        <input
          className="add-input-actual"
          type="text"
          placeholder="Artist Name"
          value={artistName}
          onChange={(e) => setArtistName(e.target.value)}
        />
      </div>
      <div className="add-input-field">
        <input
          className="add-input-actual"
          type="text"
          placeholder="Album Name"
          value={albumName}
          onChange={(e) => setAlbumName(e.target.value)}
        />
      </div>
      <CustomButton
        customStyle="med-button"
        clickHandler={() => buttonHandler()}
      >
        Save New Album!
        <i className="margined far fa-plus-square" />
      </CustomButton>
    </div>
  );
};

export default AddAlbum;
