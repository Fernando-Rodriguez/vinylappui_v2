import React, { createContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import VinylApiService from '../services/api.service';
import TokenService from '../services/token.service';
import UserService from '../services/user.service';

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {
  const existingToken = TokenService.getToken();

  const [token, setToken] = useState(() => {
    if (existingToken) {
      return existingToken;
    }
    return null;
  });
  const [currentUser, setCurrentUser] = useState({});

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };

  const SetUser = async () => {
    const user = await VinylApiService.getUserInfo();
    await setCurrentUser(user);
  };

  const SignInHandler = async (email, password) => {
    if (!token) {
      const userToken = await UserService.login(email, password);
      await setToken(userToken);
      await SetUser();

      history.replace(from);
    }
  };

  const SignOutHandler = () => {
    TokenService.removeToken();
    setToken(null);
  };

  const UserCreation = async (email, password) => {
    await UserService.createUser(email, password);
  };

  return (
    <UserContext.Provider value={[
      currentUser,
      token,
      SignInHandler,
      SignOutHandler,
      SetUser,
      UserCreation,
    ]}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
