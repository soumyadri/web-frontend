import React from 'react';
import './AlertPopUp.scss';

export const AlertPopUp = ({message, state}) => {
    return (
        <div className={`${state}-container`}>
            {message}
        </div>
    )
}