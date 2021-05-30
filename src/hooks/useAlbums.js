import { useEffect, useContext, useState } from 'react';
import { AlbumContext } from '../context/AlbumProvider';
import { SearchContext } from '../context/SearchContext';

const useFilteredAlbums = () => {
  const {
    albums,
    groups,
    currentGroup,
  } = useContext(AlbumContext);

  const [search] = useContext(SearchContext);
  // const [filteredAlbums, setFilteredAlbums] = useState(albums);
  const [localAlbums, setLocalAlbums] = useState(albums);

  useEffect(() => {
    setLocalAlbums(albums);
    if (currentGroup.groupId !== 'all' || '') {
      const filteredGroup = groups.filter((group) => group.groupId === currentGroup.groupId);
      const addGroupAlbums = filteredGroup[0].groupAlbums;
      const newAlbumList = [...albums, ...addGroupAlbums];
      setLocalAlbums(newAlbumList);
    }
    if (search !== '') {
      const list = localAlbums.filter((album) => {
        const inputToLower = search.toLowerCase();
        return (
          album.artist.toLowerCase().includes(inputToLower)
          || album.album.toLowerCase().includes(inputToLower)
        );
      });
      setLocalAlbums(list);
    }
  }, [currentGroup, search]);

  return localAlbums;
};

export default useFilteredAlbums;
