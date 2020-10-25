import React from 'react';
import {Link} from 'react-router-dom';
import './MenuItem.css';

function MenuItem({id, name, image}) {
    const navStyle = {       
        padding: '10px',
        display: 'flex',
        flex: '100%',
        justifyContent: 'center',
        textDecoration: 'none',
        color: 'white',
        fontSize: 'large',
        fontWeight: 'bold',
    }

    return (
        <div className="menu__item" style={{backgroundImage: `url(${image})`}}>
            <div className="menu__item__name">
                <p>{name}</p>
            </div>
            <div className="menu__item__button">
                <Link to={`/category/${id}`} style={navStyle} > XEM THÊM </Link>
            </div>
        </div>
    )
}

export default MenuItem
