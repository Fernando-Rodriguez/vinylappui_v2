import React, { createContext, useContext, useState } from "react";
import { SearchContext } from './SearchContext';

export const AlbumContext = createContext();

export const AlbumProvider = (props) => {

  const [search] = useContext(SearchContext);

  const [albums, setAlbums] = useState([]);

  const filteredAlbums = () => {
    const filterAlbums = () => {
      if (search) {
        const list = albums.filter((album) => {
          const inputToLower = search.toLowerCase();
          if (
            album.artist.toLowerCase().includes(inputToLower) ||
            album.album.toLowerCase().includes(inputToLower)
          ) {
            return album;
          } else {
            return null;
          }
        });
        return list;
      }
    };

    if (search !== "") {
      return filterAlbums();
    } else {
      return albums;
    }
  };

  return (
    <AlbumContext.Provider
      value={[
        albums,
        setAlbums,
        filteredAlbums,
      ]}
    >
      {props.children}
    </AlbumContext.Provider>
  );
};

export default AlbumProvider;
