/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/UserProvider';
import TextInput from '../SharedComponents/components/TextInput';
import './Login.css';

const Login = () => {
  // eslint-disable-next-line no-unused-vars
  const [
    currentUser,
    token,
    SignInHandler,
    SignOutHandler,
  ] = useContext(UserContext);
  const [userInput, setUserInput] = useState('');
  const [passInput, setPassInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const LoginThing = async () => {
    setIsLoading(true);
    await SignInHandler(userInput, passInput);
  };

  const onUserChangeHandler = (value) => {
    setUserInput(value);
  };

  const onPassChange = (value) => {
    setPassInput(value);
  };

  const LoginSection = () => (
    <div className="input-items">
      <h2>Login!</h2>
      <TextInput
        onChangeHandler={onUserChangeHandler}
        placeholder="enter username"
      />
      <TextInput
        onChangeHandler={onPassChange}
        placeholder="enter password"
      />
      <button type="button" onClick={LoginThing}>Sign In</button>
    </div>
  );

  const LoadingSection = () => (
    <div className="input-items">
      <h1>Loading...</h1>
    </div>
  );

  return (
    <div className="login-container">
      <div className="side-bar-container">
        <img src="" alt="" />
      </div>
      <div className="login-input-container">
        {LoginSection()}
      </div>
      {isLoading && LoadingSection()}
    </div>
  );
};

export default Login;
