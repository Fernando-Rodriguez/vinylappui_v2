/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../context/UserProvider';
import VinylApiService from '../../../services/api.service';
import './AlbumPage.css';

const AlbumPage = () => {
  const { id } = useParams();

  const [album, setAlbum] = useState({});
  const [currentUser] = useContext(UserContext);

  useEffect(() => {
    const getData = async () => {
      const result = await VinylApiService.searchDataAsync(currentUser.userId, id);
      setAlbum(result);
    };
    getData();
  }, []);

  const albumDisplay = (
    <div className="album-display-container">
      <div className="album-display-img-container">
        <img src={album.imageUrl} alt="album artwork" />
      </div>
      <div className="album-display-artist">{album.artist}</div>
      <div className="album-display-album">{album.album}</div>
    </div>
  );

  const loadingDisplay = (<div>Loading...</div>);

  return (
    <div>
      {album ? albumDisplay : loadingDisplay }
    </div>
  );
};

export default AlbumPage;
