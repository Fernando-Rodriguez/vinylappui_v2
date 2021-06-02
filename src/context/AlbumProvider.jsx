/* eslint-disable no-console */
import React, {
  createContext,
  useState,
} from 'react';
import groupApi from '../services/ApiEndpoints/GroupApi.service';
import albumApi from '../services/ApiEndpoints/AlbumApi.service';

export const AlbumContext = createContext();

// eslint-disable-next-line react/prop-types
const AlbumProvider = ({ children }) => {
  const [albums, setAlbums] = useState([]);
  const [groups, setGroups] = useState([{
    groupId: 'all',
    groupName: 'My Albums',
  }]);
  const [currentGroup, setCurrentGroup] = useState({
    groupId: 'all',
    groupName: 'My Albums',
  });
  const [refreshKey, setRefreshKey] = useState(false);

  const RefreshAlbums = async () => {
    const dbAlbums = await albumApi.getAll();
    const dbGroup = await groupApi.getAll();
    setAlbums(dbAlbums.owned_Albums);
    setGroups(dbGroup);
  };

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
