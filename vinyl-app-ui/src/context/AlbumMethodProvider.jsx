import React, { createContext, useContext } from 'react';
import { AlbumContext } from './AlbumProvider';
import AlbumModel from '../models/albumModel';
import albumApi from '../services/ApiEndpoints/AlbumApi.service';

export const AlbumMethodContext = createContext();

// eslint-disable-next-line react/prop-types
const AlbumMethodProvider = ({ children }) => {
  const {
    albums,
    setAlbums,
    setRefreshKey,
    refreshKey,
  } = useContext(AlbumContext);

  const addAlbumHandler = async (album) => {
    if (album !== null) {
      const newAlbum = new AlbumModel(
        album.user,
        album.album,
        album.artist,
        album.imageUrl,
        album.rating,
      );
      await albumApi.post(newAlbum);
      setRefreshKey(!refreshKey);
    }
  };

  const deleteAlbumHandler = async (id) => {
    if (id === null) return;
    const filteredAlbums = albums.filter((album) => album.idString !== id);
    setAlbums(filteredAlbums);
  };

  const updateAlbumHandler = async (changes) => {
    await albumApi.put(changes);
    const newList = albums.map((album) => {
      if (album.idString === changes.id) {
        const newAlbum = album;
        newAlbum.album = changes.album;
        newAlbum.artist = changes.artist;
        newAlbum.rating = changes.rating;
        return newAlbum;
      }
      return album;
    });
    setAlbums(newList);
  };

  return (
    <AlbumMethodContext.Provider value={{
      addAlbumHandler,
      deleteAlbumHandler,
      updateAlbumHandler,
    }}
    >
      {children}
    </AlbumMethodContext.Provider>
  );
};

export default AlbumMethodProvider;
