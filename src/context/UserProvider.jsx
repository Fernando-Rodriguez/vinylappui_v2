import React, { createContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import TokenService from '../services/token.service';
import UserService from '../services/user.service';
export const UserContext = createContext();

export const UserProvider = (props) => {

    const existingToken = TokenService.getToken();
    const [token, setToken] = useState(existingToken);

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const SignInHandler = async (email, password) => {
        if(!token){
            const userToken = await UserService.login(email, password);
            await setToken(userToken);
            history.replace(from);
        }
    };

    const SignOutHandler = () => {
        TokenService.removeToken();
        setToken(null);
    }

    return(
        <UserContext.Provider value={[token, SignInHandler, SignOutHandler]}>
            {props.children}
        </UserContext.Provider>
    );
}
export default UserProvider;