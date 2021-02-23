import React, { createContext, useContext, useState } from 'react';
import { SearchContext } from './SearchContext';

export const AlbumContext = createContext();

// eslint-disable-next-line react/prop-types
const AlbumProvider = ({ children }) => {
  const [search] = useContext(SearchContext);
  const [albums, setAlbums] = useState([]);

  const filteredAlbums = () => {
    if (search) {
      const list = albums.filter((album) => {
        const inputToLower = search.toLowerCase();
        return (
          album.artist.toLowerCase().includes(inputToLower)
          || album.album.toLowerCase().includes(inputToLower)
        );
      });
      return list;
    }
    return albums;
  };

  return (
    <AlbumContext.Provider
      value={[
        albums,
        setAlbums,
        filteredAlbums,
      ]}
    >
      {children}
    </AlbumContext.Provider>
  );
};

export default AlbumProvider;
