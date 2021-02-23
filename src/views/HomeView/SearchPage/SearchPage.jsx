import React, { useContext, useEffect } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import VinylApiService from '../../../services/api.service';
import { AlbumContext } from '../../../context/AlbumProvider';

import MainFooter from '../MainFooter/MainFooter';
import NavBar from '../../SharedComponents/NavBar/NavBar';
import SearchBody from '../SearchBody/SearchBody';
import SearchBar from '../../SharedComponents/SearchBar/SearchBar';
import TablePage from '../TablePage/TablePage';
import AlbumPage from '../../AlbumView/AlbumPage/AlbumPage';

import './SearchPage.css';

// This will work as the main container for the searchpage.
const SearchPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [albums, setAlbums, filteredAlbums] = useContext(AlbumContext);

  const { path } = useRouteMatch();

  useEffect(() => {
    const getAlbums = async () => {
      const dbAlbums = await VinylApiService.getDataAsync();
      await setAlbums(dbAlbums);
    };
    getAlbums();
  }, []);

  return (
    <div className="search-page-container">
      <div className="search-page-navbar">
        <NavBar />
      </div>
      <div className="search-page-body">
        <Switch>
          <Route exact path={`${path}`}>
            <SearchBody album={filteredAlbums()} />
          </Route>
          <Route exact path="/add-album">
            <TablePage />
          </Route>
          <Route exact path="/album/:id">
            <AlbumPage />
          </Route>
        </Switch>
      </div>
      <div className="search-page-searchbar">
        <SearchBar />
      </div>
      <div className="search-page-footer">
        <MainFooter />
      </div>
    </div>
  );
};

export default SearchPage;
