import React, { createContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import TokenService from '../services/token.service';
import UserService from '../services/user.service';

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {
  const existingToken = TokenService.getToken();

  const [token, setToken] = useState(existingToken);
  const [currentUser] = useState({});

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };

  const SignInHandler = async (email, password) => {
    if (!token) {
      const userToken = await UserService.login(email, password);
      setToken(userToken);
      history.replace(from);
    }
  };

  const SignOutHandler = () => {
    TokenService.removeToken();
    setToken(null);
  };

  return (
    <UserContext.Provider value={[
      currentUser,
      token,
      SignInHandler,
      SignOutHandler,
    ]}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
