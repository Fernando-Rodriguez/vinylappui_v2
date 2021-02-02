import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {

    const initUser = {
        isLoggedIn: false,
        userName: "Fernando",
        userImg: "https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"  
    }

    const [user, setUser] = useState(initUser);

    return(
        <UserContext.Provider value={[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserProvider;