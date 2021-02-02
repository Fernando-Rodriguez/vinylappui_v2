import './App.css';
import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  BrowserRouter
} from "react-router-dom";
import SearchPage from '../SearchPage/SearchPage';
import UserProvider, { UserContext } from '../../context/UserProvider';
import Login from '../Login/Login';

function PrivateRoute({ children, ...rest }) {

  const [user, setUser] = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.isLoggedIn ? (children) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }}}
          />
        )
      }
    />
  );
}

function App() {
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter >
          <Switch>
            <Route path='/login'>
              <Login />
            </Route>
            <PrivateRoute path='/' exact>
                <SearchPage />          
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
