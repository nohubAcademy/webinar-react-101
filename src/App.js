import React, { useState } from 'react';
import './App.css';

import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignupForm';

function App() {
  
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL; // Enter your Backend URL
  const [state, setState] = useState({
    authMode: 'login',
    isAuthenticated: false,
  });

  const toggleAuthMode = () => {
    setState({
      ...state,
      authMode: (authMode === 'login') ? 'signup' : 'login',
    })
  }


  const loginFormSubmit = (emailId, password) => {
    if (!emailId || !password) {
      alert("Email or password cannot be empty");
    } else {
      const url = BACKEND_URL + "/api/v1/auth";
      const reqObj = {
        emailId: emailId,
        password
      }
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqObj)
      }).then(res => res.json())
        .then(res => {
          if(res.success) {
            setState({
              ...state,
              isAuthenticated: true,
            });
          }
        }).catch(err => {
          alert('Some error occured');

        })
    }
  }

  const signupFormSubmit = (firstname, lastname, password, emailId, tAndCAccepted, phone) => {
    if (!firstname || !lastname || !password || !emailId || !tAndCAccepted || !phone) {
      alert("firstname or or lastname or password or email cannot be empty");
    } else {
      const url = BACKEND_URL + "/api/v1/user";
      const reqObj = {
        firstname,
        lastname,
        password,
        emailId,
        tAndCAccepted,
        phone
      }
      fetch(url, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqObj)
      }).then(res => res.json())
        .then(res => {
          if(res.success) {
            setState({
              ...state,
              isAuthenticated: true,
            });
          }
        }).catch(err => {
          alert('Some error occured');
        })
    }
  }

  const { authMode, isAuthenticated } = state;

  if(isAuthenticated) {
    return <h1> Welcome to NoHub</h1>
  }
  return (
    <div className={`container  ${authMode === 'signup' && "bg-green"}`}>
      <div className="left-box">
        <div className="content-holder">
          <h2>Hello</h2>
          <p>
            {
              (authMode === 'login')
                ? 'To create a new account click here'
                : 'To Login click here'
            }
          </p>
          <button onClick={toggleAuthMode} className={authMode + '-btn'}>
            {
              (authMode === 'login')
                ? 'Sign up'
                : 'Login'
            }
          </button>
        </div>
      </div>
      <div className='form-container'>
        {
          (authMode === 'login')
            ? <LoginForm loginFormSubmit={loginFormSubmit} />
            : <SignUpForm signupFormSubmit={signupFormSubmit} />
        }
      </div>
    </div>
  );
}

export default App;
