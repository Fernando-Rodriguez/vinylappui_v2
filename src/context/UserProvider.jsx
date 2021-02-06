import React, { createContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import ApiService from '../services/api.service';
export const UserContext = createContext();

export const UserProvider = (props) => {

    const existingToken = localStorage.getItem("token");
    const [token, setToken] = useState(existingToken);

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const SignInHandler = async (email, password) => {

        if(!token){

            const newToken = await ApiService.getToken(email, password);

            localStorage.setItem("token", newToken);
            await setToken(newToken);
            history.replace(from);
        }
    };

    const SignOutHandler = () => {
        localStorage.removeItem("token");
        setToken(null);
    }

    return(
        <UserContext.Provider value={[token, SignInHandler, SignOutHandler]}>
            {props.children}
        </UserContext.Provider>
    );
}
export default UserProvider;