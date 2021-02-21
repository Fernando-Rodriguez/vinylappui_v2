import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserProvider';
import './NavBar.css';

const NavBar = () => {

    const [token, SignInHandler, SignOutHandler] = useContext(UserContext);
    const imageIURL = "https://images.pexels.com/photos/1616470/pexels-photo-1616470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

    const clickHandler = () => {
        SignOutHandler();
    }

    return(
        <div className="navbar-container">
            <div className="navbar-img">
                <img className="navbar-image-item" src={imageIURL} />
            </div>
            <h3>Welcome, ! </h3>
            <div className="navbar-links">
                <Link to="/" className="navbar-links-item"><i className="fas fa-home iconItem"></i>Home</Link>
                <Link to="/add-album" className="navbar-links-item"><i className="far fa-plus-square iconItem"></i>Add</Link>
                <div className="navbar-links-item" onClick={clickHandler}><i class="fas fa-sign-out-alt iconItem"></i>Logout</div>
            </div>
            <div className="navbar-bar"/>
        </div>
    );
}

export default NavBar;