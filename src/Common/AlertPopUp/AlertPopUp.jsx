import React from 'react';
import './AlertPopUp.scss';

export const AlertPopUp = ({message, state}) => {
    return (
        <div className={`notification-container ${state}-container`}>
            {message}
        </div>
    )
}