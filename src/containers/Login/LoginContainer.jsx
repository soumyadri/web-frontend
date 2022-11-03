import React from 'react';
import { Header } from '../../Common/Header/Header';
import { Login } from '../../Common/Login/Login';
import './LoginContainer.scss';

export const LoginContainer = () => {
    return (
        <div className="login-container">
            <Header />
            <Login />
        </div>
    )
};