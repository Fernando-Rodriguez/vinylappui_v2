import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserProvider';

const PrivateRoute = ({ children, ...rest }) => {

    const [token] = useContext(UserContext);

    return (
        <Route
        {...rest}
        render={({ location }) => token ? (children) : (
            <Redirect
                to={{
                pathname: "/login",
                state: { from: location }}}
            />)
        }/>
    );
}

export default PrivateRoute;
