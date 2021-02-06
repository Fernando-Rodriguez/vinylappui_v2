import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";
import SearchPage from '../SearchPage/SearchPage';
import UserProvider from '../../context/UserProvider';
import AlbumProvider from '../../context/AlbumProvider';
import PrivateRoute from '../routes/PrivateRoute';
import Login from '../Login/Login';

const App = () => { 
  return (
    <div className="App">
       <Router >
        <UserProvider>
         <AlbumProvider>
            <Switch>
              <Route path='/login'>
                <Login />
              </Route>
              <PrivateRoute path='/' exact>
                  <SearchPage />          
              </PrivateRoute>
              <PrivateRoute path='/search' exact>
                <div>this'll be stuff</div>
              </PrivateRoute>
            </Switch>
          </AlbumProvider>
          </UserProvider>
      </Router>
    </div>
  );
}

export default App;
