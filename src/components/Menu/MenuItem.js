import React from 'react';
import './MenuItem.css';

function MenuItem({id, name, image}) {
    return (
        <div className="menu__item" style={{backgroundImage: `url(${image})`}}>
            <div className="menu__item__name">
                <p>{name}</p>
            </div>
            <div className="menu__item__button">
                <p>XEM THÊM</p>
            </div>
        </div>
    )
}

export default MenuItem
