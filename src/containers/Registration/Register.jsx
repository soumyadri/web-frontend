import React from 'react';
import { Header } from '../../Common/Header/Header';
import { Registration } from '../../Common/Login/Registration';
import './Register.scss';

export const Register = () => {
    return (
        <div className="register-container">
            <Header />
            <Registration />
        </div>
    )
};