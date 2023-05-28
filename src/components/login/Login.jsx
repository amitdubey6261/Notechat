import React from 'react'

import './login.css';

import img from '../../assets/images/img1.png';

import LoginRegisterHead from './LoginRegisterHead';

const Login = () => {
    return (
        <div className='Login-wrapper'>
            <div className="login-content">
                <div className='login-head'>
                    <LoginRegisterHead />
                </div>
                <input className='inp-fields' placeholder='email' type="email" name="" id="email" />
                <input className='inp-fields' placeholder='password' type="password" name="" id="password" />
                <span className='forget-pass'>Forgot Password</span>
                <button className='login-btn'><span>login</span></button>
            </div>
            <div className="login-image"><img className='login-image-img' src={img} alt="" /></div>
            <div className="close-button">X</div>
        </div>
    )
}

export default Login