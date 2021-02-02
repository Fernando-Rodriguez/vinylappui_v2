import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserProvider';
import './NavBar.css';

const NavBar = () => {

    const [user, setUser] = useContext(UserContext);

    const LogOutUser = () => {
        setUser(
            user.isLoggedIn = false
        )
    };

    return(
        <div className="navbar-container">
            <div className="navbar-img">
                <img className="navbar-image-item" src={user.userImg ? user.userImg : ""} />
            </div>
            <h3>Welcome, {user.userName ? user.userName : ""}! </h3>
            <div className="navbar-links">
                <Link to="/search" className="navbar-links-item"><i class="fas fa-home iconItem"></i>Home</Link>
                <Link to="/1234" className="navbar-links-item"><i class="fas fa-search iconItem"></i>Search</Link>
                <div onClick={LogOutUser} className="navbar-links-item"><i class="fas fa-sign-out-alt iconItem"></i>Logout</div>
            </div>
            <div className="navbar-bar"/>
        </div>
    );
}

export default NavBar;