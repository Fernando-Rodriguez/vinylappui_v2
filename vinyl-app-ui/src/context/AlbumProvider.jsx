/* eslint-disable no-console */
import React, {
  createContext,
  // useContext,
  // useEffect,
  useState,
} from 'react';
// import { SearchContext } from './SearchContext';
import groupApi from '../services/ApiEndpoints/GroupApi.service';
import albumApi from '../services/ApiEndpoints/AlbumApi.service';

export const AlbumContext = createContext();

// eslint-disable-next-line react/prop-types
const AlbumProvider = ({ children }) => {
  const [albums, setAlbums] = useState([]);
  // const [coreAlbums, setCoreAlbums] = useState([]);
  const [groups, setGroups] = useState([{
    groupId: 'all',
    groupName: 'My Albums',
  }]);
  const [currentGroup, setCurrentGroup] = useState({
    groupId: 'all',
    groupName: 'My Albums',
  });
  const [refreshKey, setRefreshKey] = useState(false);

  console.log(currentGroup);
  const RefreshAlbums = async () => {
    const dbAlbums = await albumApi.getAll();
    const dbGroup = await groupApi.getAll();
    setAlbums(dbAlbums.owned_Albums);
    // setCoreAlbums(dbAlbums.owned_Albums);
    setGroups(dbGroup);
  };

  // const updateGroups = () => {
  //   if (currentGroup.groupId !== 'all' || '') {
  //     const filteredGroup = groups.filter((group) => group.groupId === currentGroup.groupId);
  //     console.log(filteredGroup);
  //     const addGroupAlbums = filteredGroup[0].groupAlbums;
  //     const newAlbumList = [...coreAlbums, ...addGroupAlbums];
  //     setAlbums(newAlbumList);
  //   } else {
  //     setAlbums(coreAlbums);
  //   }
  // };

  // useEffect(() => {
  //   updateGroups();
  // }, [currentGroup]);

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
        RefreshAlbums,
      }}
    >
      {children}
    </AlbumContext.Provider>
  );
};

export default AlbumProvider;
