import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserProvider';
import './NavBar.css';

const NavBar = () => {

    const [token, SignInHandler, SignOutHandler] = useContext(UserContext);

    const clickHandler = () => {
        SignOutHandler();
    }

    return(
        <div className="navbar-container">
            <div className="navbar-img">
                <img className="navbar-image-item" src="/" />
            </div>
            <h3>Welcome, ! </h3>
            <div className="navbar-links">
                <Link to="/" className="navbar-links-item"><i class="fas fa-home iconItem"></i>Home</Link>
                <Link to="/1234" className="navbar-links-item"><i class="fas fa-search iconItem"></i>Search</Link>
                <div className="navbar-links-item" onClick={clickHandler}><i class="fas fa-sign-out-alt iconItem"></i>Logout</div>
            </div>
            <div className="navbar-bar"/>
        </div>
    );
}

export default NavBar;