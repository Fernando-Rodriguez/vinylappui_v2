/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { AlbumContext } from '../../../context/AlbumProvider';
import MainFooter from '../MainFooter/MainFooter';
import NavBar from '../NavBar/NavBar';
import SearchBody from '../SearchBody/SearchBody';
import SearchBar from '../SearchBar/SearchBar';
import TablePage from '../TablePage/TablePage';

import './HomeContainer.css';
import useAlbums from '../../../hooks/useAlbums';

// This will work as the main container for the searchpage.
const HomeContainer = () => {
  const albums = useAlbums();
  const { path } = useRouteMatch();
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
            <SearchBody album={albums} />
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

export default HomeContainer;
