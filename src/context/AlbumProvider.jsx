import React, { createContext, useContext, useState } from 'react';
import VinylApiService from '../services/api.service';
import { SearchContext } from './SearchContext';

export const AlbumContext = createContext();

// eslint-disable-next-line react/prop-types
const AlbumProvider = ({ children }) => {
  const [search] = useContext(SearchContext);
  const [albums, setAlbums] = useState([]);

  // CORE ALBUMS DOES NOT GET MUTATED - EVER ------
  const [coreAlbums, setCoreAlbums] = useState([]);
  // DO NOT TOUCH ---------------------------------

  const [groups, setGroups] = useState([]);
  const [currentGroup, setCurrentGroup] = useState('');

  const RefreshAlbums = async () => {
    const dbAlbums = await VinylApiService.getDataAsync();
    const dbGroup = VinylApiService.getGroupData();
    setAlbums(dbAlbums);
    setCoreAlbums(dbAlbums);
    setGroups(dbGroup);
  };

  const GroupSelected = async (id) => {
    setCurrentGroup(id);
    const filteredGroup = groups.filter((group) => group.groupId === id);
    const addGroupAlbums = filteredGroup[0].groupAlbums;
    const newAlbumList = [...coreAlbums, ...addGroupAlbums];
    setAlbums(newAlbumList);
  };

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
        RefreshAlbums,
        groups,
        GroupSelected,
        currentGroup,
      ]}
    >
      {children}
    </AlbumContext.Provider>
  );
};

export default AlbumProvider;
