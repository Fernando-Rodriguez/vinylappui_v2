import React, { createContext, useState } from "react";
import { debounce1 } from "../services/utilities";
import ApiService from "../services/api.service";

export const AlbumContext = createContext();

export const AlbumProvider = (props) => {
  const [albums, setAlbums] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedAlbum, setSelectedAlbum] = useState([]);

  const addAlbumHandler = async (album) => {
    //await ApiService.postDataAsync(album);
    setAlbums([...albums, album]);
  };

  const deleteAlbumHandler = async (id) => {
    //await ApiService.deleteDataAsync(id);

    const filteredAlbums = albums.filter((album) => {
      if (album.id !== id) {
        return album;
      }
    });
    setAlbums(filteredAlbums);
  };

  const updateAlbumHandler = async (id, changes) => {
    const newList = albums.map((album, index) => {
      if (album.id === id) {
        album.album = changes.album;
        album.artist = changes.artist;
        album.rating = changes.rating;
      }
      return album;
    });

    console.log(newList);
    setAlbums(newList);
  };

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
        selectedAlbum,
        setSelectedAlbum,
        addAlbumHandler,
        deleteAlbumHandler,
        updateAlbumHandler,
        filteredAlbums,
        setSearch,
      ]}
    >
      {props.children}
    </AlbumContext.Provider>
  );
};

export default AlbumProvider;
