import React, { useState } from 'react'
import { Form, FormHeader, InputContainer, LoginContainer, LoginButton } from './Login.styled';

const Login = () => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
    return (
        <LoginContainer>
          <FormHeader>
            <h2>Login</h2>
            <p>Get access to your Orders, Wishlist and Recommendations</p>
          </FormHeader>
          <Form >
            <InputContainer>
              <label htmlFor="email">Email<span aria-hidden="true" >*</span></label>
              <input
                aria-label="email"
                aria-required={true}
                aria-describedby="emailError"
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                onBlur={() =>
                  !email ? setEmailError("Email is required") : ((!/\S+@\S+\.\S+/.test(email)) ? setEmailError("Email is invalid") : setEmailError(""))
                }
              />
              {emailError && (
                <div role="alert" className='error-msg'>
                  <small id="emailError">{emailError}</small>
                </div>
              )}
            </InputContainer>
            <InputContainer>
              <label htmlFor="password">Password:<span aria-hidden="true" >*</span></label>
              <input
                aria-label="password"
                aria-required={true}
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                onBlur={() =>
                  !password ? setPasswordError("Password is required") : (
          (password.length < 6 ||
          !/\d/.test(password) ||
          !/[a-zA-Z]/.test(password) ||
          /\s/.test(password) ? setPasswordError("Password must be at least 6 characters long and contain a number, alphabet, and cannot have spaces") : setPasswordError(''))
        ) 
                }
              />
              {passwordError && (
                <div role="alert" className='error-msg'>
                  <small>{passwordError}</small>
                </div>
              )}
            </InputContainer>
            <LoginButton type="submit">Login</LoginButton>
          </Form>
        </LoginContainer>
      );
    }
    
    export default Login
    