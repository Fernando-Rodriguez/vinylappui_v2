import React, { useContext, useEffect, useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import MainFooter from "../MainFooter/MainFooter";
import NavBar from "../NavBar/NavBar";
import SearchBody from "../SearchBody/SearchBody";
import SearchBar from "../SearchBar/SearchBar";

import VinylApiService from "../../services/vinylApiService";

import { AlbumContext } from "../../context/AlbumProvider";
import { UserContext } from "../../context/UserProvider";

import { debounce1 } from "../../services/utilities";

import "./SearchPage.css";
import TablePage from "../TablePage/TablePage";

// This will work as the main container for the searchpage.
const SearchPage = () => {
  const [
    albums,
    setAlbums,
    selectedAlbum,
    setSelectedAlbum,
    addAlbumHandler,
    deleteAlbumHandler,
    updateAlbumHandler,
    filteredAlbums,
    setSearch,
  ] = useContext(AlbumContext);

  const [token] = useContext(UserContext);

  let { path, url } = useRouteMatch();

  useEffect(() => {
    const getAlbums = async () => {
      //const albumsJson = await ApiService.getAlAlbums(token);
      const albums = await VinylApiService.getDataAsync();
      setAlbums(albums);
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
          <Route exact path={`/add-album`}>
            <TablePage />
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
