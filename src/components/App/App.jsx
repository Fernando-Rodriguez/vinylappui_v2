/* eslint-disable no-unused-vars */
import './App.css';
import React, { useContext, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import SearchPage from '../HomeView/SearchPage/SearchPage';
import UserProvider from '../../context/UserProvider';
import AlbumProvider from '../../context/AlbumProvider';
import AlbumMethodProvider from '../../context/AlbumMethodProvider';
import SearchProvider from '../../context/SearchContext';
import PrivateRoute from '../HomeView/RouterRoutes/PrivateRoute';
import Login from '../LoginView/Login';
import VinylApiService from '../../services/api.service';

const App = () => {
  useEffect(() => {
    VinylApiService.init();
    VinylApiService.setApiHeaders();
  }, []);

  return (
    <div className="App">
      <Router>
        <UserProvider>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <SearchProvider>
              <AlbumProvider>
                <AlbumMethodProvider>
                  <PrivateRoute path="/">
                    <SearchPage />
                  </PrivateRoute>
                </AlbumMethodProvider>
              </AlbumProvider>
            </SearchProvider>
          </Switch>
        </UserProvider>
      </Router>
    </div>
  );
};

export default App;
