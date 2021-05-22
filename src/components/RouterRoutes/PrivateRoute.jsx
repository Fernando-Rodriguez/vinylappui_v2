/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserProvider';

const PrivateRoute = ({ children, ...rest }) => {
  const {
    currentUser,
    GetCurrentUser,
  } = useContext(UserContext);

  useEffect(() => {
    const AttemptToGetUser = async () => {
      if (currentUser == null) {
        try {
          await GetCurrentUser();
          return currentUser;
        } catch (e) {
          // eslint-disable-next-line no-console
          console.log(e);
          return null;
        }
      }
      return currentUser;
    };
    AttemptToGetUser();
  }, [currentUser]);

  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={({ location }) => (currentUser ? (children) : (
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
