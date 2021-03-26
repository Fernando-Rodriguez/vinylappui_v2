/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/UserProvider';
import CustomButton from '../SharedComponents/CustomButton';
import './Login.css';

const Login = () => {
  const [
    currentUser,
    token,
    SignInHandler,
    SignOutHandler,
  ] = useContext(UserContext);

  const [userInput, setUserInput] = useState('');
  const [passInput, setPassInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const LoginUser = async () => {
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
    <div className="input-items-container">
      <div className="input-items">
        <h1>Welcome to the Vinyl App</h1>
        <h2>Sign In Here</h2>
        <div className="input-field-container">
          <input
            className="login-input"
            onChange={(e) => onUserChangeHandler(e.target.value)}
            placeholder="enter username"
          />
        </div>
        <div className="input-field-container">

          <input
            className="login-input"
            onChange={(e) => onPassChange(e.target.value)}
            placeholder="enter password"
            type="password"
          />
        </div>
        {/* <button type="button" onClick={LoginUser}>Sign In</button> */}
        <CustomButton
          clickHandler={LoginUser}
          theme="light"
        >
          Sign In
        </CustomButton>
      </div>
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
        {isLoading ? LoadingSection() : LoginSection()}
      </div>
    </div>
  );
};

export default Login;
