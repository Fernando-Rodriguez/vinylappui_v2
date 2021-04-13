/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { AlbumContext } from '../../../context/AlbumProvider';
import { UserContext } from '../../../context/UserProvider';

import MainFooter from '../MainFooter/MainFooter';
import NavBar from '../../NavBar/NavBar';
import SearchBody from '../SearchBody/SearchBody';
import SearchBar from '../../SearchBar/SearchBar';
import TablePage from '../../TablePage/TablePage';

import './SearchPage.css';

// This will work as the main container for the searchpage.
const SearchPage = () => {
  const [
    albums,
    setAlbums,
    filteredAlbums,
    RefreshAlbums,
  ] = useContext(AlbumContext);
  const [
    currentUser,
    token,
    SignInHandler,
    SignOutHandler,
    SetUser,
  ] = useContext(UserContext);

  const { path } = useRouteMatch();

  useEffect(() => {
    const getAlbums = async () => {
      await RefreshAlbums();
      if (!currentUser.userName) {
        SetUser();
      }
    };
    getAlbums();
  }, []);

  return (
    <div className="search-page-container">
      <div className="search-page-navbar">
        <NavBar />
      </div>
      <div className="search-page-searchbar">
        <SearchBar />
      </div>
      <div className="search-page-body">
        <Switch>
          <Route exact path={`${path}`}>
            <SearchBody album={filteredAlbums()} />
          </Route>
          <Route exact path="/add-album">
            <TablePage />
          </Route>
        </Switch>
      </div>
      <div className="search-page-footer">
        <MainFooter />
      </div>
    </div>
  );
};

export default SearchPage;
