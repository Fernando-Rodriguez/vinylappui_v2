/* eslint-disable no-console */
import React, { createContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import UserModel from '../models/userModel';
import tokenApi from '../services/ApiEndpoints/TokenApi.service';
import userApi from '../services/ApiEndpoints/UserApi.service';

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(new UserModel());

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };

  const GetCurrentUser = async () => {
    console.log('getting user');
    const user = await userApi.getCurrentUser();
    const newCurrentUser = new UserModel(
      user.userName,
      user.userId,
    );
    setCurrentUser(newCurrentUser);
  };

  const SignInHandler = async (email, password) => {
    await tokenApi.post({
      userName: email,
      userSecret: password,
    });
    await GetCurrentUser();
    history.replace(from);
  };

  const SignOutHandler = async () => {
    await tokenApi.logout();
    history.replace('/login');
    setCurrentUser(new UserModel());
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
      GetCurrentUser,
    }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
