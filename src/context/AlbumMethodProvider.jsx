import React, { createContext, useContext } from 'react';
import { AlbumContext } from './AlbumProvider';
import ApiService from '../services/api.service';

export const AlbumMethodContext = createContext();

// eslint-disable-next-line react/prop-types
const AlbumMethodProvider = ({ children }) => {
  const [albums, setAlbums] = useContext(AlbumContext);

  const addAlbumHandler = async (album) => {
    if (album !== null) {
      try {
        // await ApiService.postDataAsync(album);
        setAlbums([...albums, album]);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err.ToString());
      }
    }
  };
  const deleteAlbumHandler = async (id) => {
    if (id !== null) {
      try {
        // await ApiService.deleteDataAsync(id);
        const filteredAlbums = albums.filter((album) => {
          if (album.id !== id) {
            return album;
          }
          return null;
        });
        setAlbums(filteredAlbums);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err.ToString());
      }
    }
  };
  const updateAlbumHandler = async (userId, id, changes) => {
    await ApiService.updateDataAsync(userId, id, changes);
    const newList = albums.map((album) => {
      const newAlbum = {};

      if (album.id === id) {
        newAlbum.album = changes.album;
        newAlbum.artist = changes.artist;
        newAlbum.rating = changes.rating;
      }
      return newAlbum;
    });
    setAlbums(newList);
  };

  return (
    <AlbumMethodContext.Provider value={[
      addAlbumHandler,
      deleteAlbumHandler,
      updateAlbumHandler]}
    >
      {children}
    </AlbumMethodContext.Provider>
  );
};

export default AlbumMethodProvider;