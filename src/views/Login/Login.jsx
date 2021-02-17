import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/UserProvider';
import TextInput from '../components/TextInput';
import './Login.css';

const Login = () => {

    const [token, SignInHandler, SignOutHandler] = useContext(UserContext);
    const [userInput, setUserInput] = useState("");
    const [passInput, setPassInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const LoginThing =  async() => {
        setIsLoading(true);
        await SignInHandler(userInput, passInput);
    }

    const onUserChangeHandler = (value) => {
        setUserInput(value);
    }

    const onPassChange = (value) => {
        setPassInput(value);
    }

    const LoginSection = () => {
        return(
            <div className="input-items">
                <h2>Login!</h2>
                <TextInput 
                    onChangeHandler={onUserChangeHandler}
                    placeholder="enter username" />
                <TextInput 
                    onChangeHandler={onPassChange}
                    placeholder="enter password" />
                <button onClick={LoginThing} >Sign In</button>
            </div>
        );
    };

    const LoadingSection = () => {
        return(
            <div className="input-items">
                <h1>Loading...</h1>
            </div>
        );
    };

    return(
        <div className="login-container">
            <div className="side-bar-container">
                <img src="" alt=""/>
            </div>
            <div className="login-input-container">
                {LoginSection()}
            </div>
            {isLoading && LoadingSection()}
        </div>
    );
}

export default Login;