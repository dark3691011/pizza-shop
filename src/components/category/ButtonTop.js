import React from 'react';
import './ButtonTop.css';

function ButtonTop({name}) {
    return (
        <div className="button__top">
            <div className="button__top__main">
                <p>{name}</p>
            </div>
        </div>
    )
}

export default ButtonTop
