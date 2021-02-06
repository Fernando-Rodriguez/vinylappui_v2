import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/UserProvider';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import './Login.css';

const Login = () => {

    const [token, SignInHandler, SignOutHandler] = useContext(UserContext);
    const [userInput, setUserInput] = useState();
    const [passInput, setPassInput] = useState();

    const LoginThing =  async() => {
        await SignInHandler(userInput, passInput);
        setPassInput("");
        setUserInput("");
    }

    const onUserChangeHandler = (value) => {
        setUserInput(value);
    }

    const onPassChange = (value) => {
        setPassInput(value);
    }

    return(
        <div className="login-container">
            <div className="side-bar-container">
                <img src="" alt=""/>
            </div>
            <div className="login-input-container">
                <TextInput 
                    onChangeHandler={onUserChangeHandler}
                    placeholder="enter username" />
                <TextInput 
                    onChangeHandler={onPassChange}
                    placeholder="enter password" />
                <Button clickHandler={LoginThing} >Sign In</Button>
            </div>
        </div>
    );
}

export default Login;