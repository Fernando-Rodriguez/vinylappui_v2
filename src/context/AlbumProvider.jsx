/* eslint-disable no-console */
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
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
  const [refreshKey, setRefreshKey] = useState(false);

  // const RefreshAlbums = async () => {
  //   try {
  //     const dbAlbums = await VinylApiService.getDataAsync();
  //     const dbGroup = await VinylApiService.getGroupData();
  //     console.log(dbGroup);
  //     setAlbums(dbAlbums);
  //     setCoreAlbums(dbAlbums);
  //     setGroups(dbGroup);
  //   } catch (err) {
  //     console.log(err.toString());
  //   }
  // };

  useEffect(() => {
    const RefreshAlbums = async () => {
      try {
        const dbAlbums = await VinylApiService.getDataAsync();
        const dbGroup = await VinylApiService.getGroupData();
        console.log(dbGroup);
        setAlbums(dbAlbums);
        setCoreAlbums(dbAlbums);
        setGroups(dbGroup);
      } catch (err) {
        console.log(err.toString());
      }
    };
    RefreshAlbums();
  }, [refreshKey]);

  useEffect(() => {
    try {
      if (currentGroup.groupId === 'all') {
        setAlbums(coreAlbums);
      } else {
        const filteredGroup = groups.filter((group) => group.groupId === currentGroup.groupId);
        const addGroupAlbums = filteredGroup[0].groupAlbums;
        const newAlbumList = [...coreAlbums, ...addGroupAlbums];
        setAlbums(newAlbumList);
      }
    } catch (err) {
      console.log(err.toString());
    }
  }, [currentGroup]);

  useEffect(() => {
    if (search !== '') {
      const list = albums.filter((album) => {
        const inputToLower = search.toLowerCase();
        return (
          album.artist.toLowerCase().includes(inputToLower)
          || album.album.toLowerCase().includes(inputToLower)
        );
      });
      setAlbums(list);
    }
    return () => setAlbums(coreAlbums);
  }, [search]);

  return (
    <AlbumContext.Provider
      value={{
        albums,
        setAlbums,
        groups,
        setCurrentGroup,
        currentGroup,
        setRefreshKey,
        refreshKey,
      }}
    >
      {children}
    </AlbumContext.Provider>
  );
};

export default AlbumProvider;
