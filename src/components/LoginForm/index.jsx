import React, { useState } from 'react'

const LoginForm = ({ loginFormSubmit }) => {

    const [state, setState] = useState({
        emailId: '',
        password: '',
    })
    const handleChange = (e) => {
        const inputFieldName = e.target.name;
        const value = e.target.value;
        setState({
            ...state,
            [inputFieldName]: value,
        });
    }

    const submitLoginForm = () => {
        loginFormSubmit(emailId, password);
    }

    const { emailId, password } = state;
    return (
        <div className='login-form-container'>
            <p>LOGIN FORM</p>
            <input className='input-field ' type='text' name='emailId' value={emailId} onChange={handleChange} placeholder={'Email'} />
            <input className='input-field' type='password' name='password' value={password} onChange={handleChange} placeholder={'Password'} />
            <button className='login-button' onClick={submitLoginForm}> LOGIN </button>
        </div>
    )
}

export default LoginForm;