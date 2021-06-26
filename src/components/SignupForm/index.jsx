import React, { useState } from 'react'

const SignupForm = ({ signupFormSubmit }) => {

    const [state, setState] = useState({
        firstname: '',
        lastname: '',
        password: '',
        phone: '',
        tAndCAccepted: false,
    });

    const handleChange = (e) => {
        const inputFieldName = e.target.name;
        const value = e.target.value;
        setState({
            ...state,
            [inputFieldName]: value,
        });
    }

    const toggleTnC = () => {
        setState({
            ...state,
            tAndCAccepted: !tAndCAccepted,
        })
    }
    const submitSignupForm = () => {
        signupFormSubmit(firstname, lastname, password, emailId, tAndCAccepted, phone)
    }
    const { firstname, lastname, password, emailId, tAndCAccepted, phone } = state;

    return (
        <div className='signup-form-container'>
            <p >SIGN UP FORM</p>
            <input className='input-field' type='text' name='firstname' value={firstname} onChange={handleChange} placeholder={'Firstname'} />
            <input className='input-field' type='text' name='lastname' value={lastname} onChange={handleChange} placeholder={'Lastname'} />
            <input className='input-field' type='email' name='emailId' value={emailId} onChange={handleChange} placeholder={'Email'} />
            <input className='input-field' type='text' name='phone' value={phone} onChange={handleChange} placeholder={'Phone'} />
            <input className='input-field' type='password' name='password' value={password} onChange={handleChange} placeholder={'Password'} />
            <span className="checkbox-field" >
                <input type="checkbox" name="tAndCAccepted" checked={tAndCAccepted} onChange={toggleTnC} />
                I accept terms and conditions
            </span>
            <button className='sign-up-button' onClick={submitSignupForm}> SIGN UP </button>
        </div>
    )
}

export default SignupForm;