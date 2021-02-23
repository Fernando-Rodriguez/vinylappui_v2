/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../../../context/UserProvider';

const PrivateRoute = ({ children, ...rest }) => {
  const [
    currentUser,
    token,
    SignInHandler,
    SignOutHandler,
  ] = useContext(UserContext);

  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={({ location }) => (token ? (children) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location },
          }}
        />
      ))}
    />
  );
};

export default PrivateRoute;
