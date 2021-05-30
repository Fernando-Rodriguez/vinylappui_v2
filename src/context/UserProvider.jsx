/* eslint-disable no-console */
import React, { createContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import UserModel from '../models/userModel';
import tokenApi from '../services/ApiEndpoints/TokenApi.service';
import userApi from '../services/ApiEndpoints/UserApi.service';
import UserStore from '../services/UserStore/userStore';

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const pullUser = UserStore.loadUser();
    if (pullUser) return pullUser;
    return null;
  });
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };

  const SignInHandler = async (email, password) => {
    await tokenApi.post({
      userName: email,
      userSecret: password,
    });
    const user = await userApi.getCurrentUser();
    const newCurrentUser = new UserModel(
      user.userName,
      user.userId,
    );
    UserStore.saveUser(newCurrentUser);
    setCurrentUser(newCurrentUser);
    history.replace(from);
  };

  const SignOutHandler = async () => {
    await tokenApi.logout();
    history.replace('/login');
    setCurrentUser(null);
  };

  const UserCreation = async (email, password) => {
    await userApi.post({
      userName: email,
      userSecret: password,
    });
  };

  return (
    <UserContext.Provider value={{
      currentUser,
      SignInHandler,
      SignOutHandler,
      UserCreation,
    }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
