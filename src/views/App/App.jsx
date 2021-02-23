import './App.css';
import React, { useEffect } from 'react';
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
import PrivateRoute from '../SharedComponents/RouterRoutes/PrivateRoute';
import Login from '../LoginView/Login';
import VinylApiService from '../../services/api.service';
// import TokenService from '../../services/token.service';

const App = () => {
  useEffect(() => {
    VinylApiService.init();
    VinylApiService.setApiHeaders();
    // return () => {
    //   VinylApiService.removeApiHeaders();
    //   TokenService.removeToken();
    // };
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
