import React, { createContext, useState } from "react";
import ApiService from "../services/api.service";

export const AlbumContext = createContext();

export const AlbumProvider = (props) => {
  const [albums, setAlbums] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedAlbum, setSelectedAlbum] = useState([]);

  const addAlbumHandler = async (album) => {
    if(album !== null){
      try{
        //await ApiService.postDataAsync(album);
        setAlbums([...albums, album]);
      }
      catch(err){
        console.log(err.ToString());
      }
    }
  };

  const deleteAlbumHandler = async (id) => {

    if(id !== null){
      try{
        //await ApiService.deleteDataAsync(id);
        const filteredAlbums = albums.filter((album) => {
          if (album.id !== id) {
            return album;
          }
        });
        setAlbums(filteredAlbums);
      }
      catch(err){
        console.log(err.ToString());
      }
    }

    
  };

  const updateAlbumHandler = async (userId, id, changes) => {

    try{
      const result = await ApiService.updateDataAsync(userId, id, changes);

      const newList = albums.map((album) => {
        if (album.id === id) {
          album.album = changes.album;
          album.artist = changes.artist;
          album.rating = changes.rating;
        }
        return album;
      });
      setAlbums(newList);   
    }
    catch(err){
      console.log(err.toString());
    }
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
