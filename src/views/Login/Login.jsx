import React, { useContext } from 'react';
import {
    useHistory,
    useLocation
} from 'react-router-dom';
import { UserContext } from '../../context/UserProvider';

const Login = () => {

    const [user, setUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

      const Logout = () => {

        const updatedUser = {
            isLoggedIn: true,
            userName: user.userName,
            userImg: user.userImg,
        }

        setUser(
            updatedUser
        );

        history.replace(from);
    }

    return(
        <div>
            <button onClick={Logout}>click</button>
        </div>
    );
}

export default Login;