import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import StorageIcon from '@material-ui/icons/Storage';

function Header({email, Logout}) {
    const navStyle = {
        color: 'white',
        'text-decoration': 'none',
        'margin-left' : '20px',
        'font-weight' : 'bold',
        'hover' : 'cursor'
    };

    return (
        <div className="header">
            <div className="header__left">
                <Link to="/"><img alt="" src="https://dominos.vn/Data/Sites/1/media/default2/img/logo.png"/></Link>               
            </div>
            <div className="header__right">
                {(email !== "") ?(
                    <div className="login__status">                    
                        <AccountCircleIcon/>
                        <a href="./">{email}</a>
                        <a href="./" onClick={Logout}><h4>ĐĂNG SUẤT</h4></a>
                    </div>
                ) : (
                    <div className="login__status">
                        <Link style={navStyle} to="/register"><h4>ĐĂNG KÝ</h4></Link>
                        <Link style={navStyle} to="/login"><h4>ĐĂNG NHẬP</h4></Link>
                    </div>
                )}
                {(localStorage.getItem("role") === "admin") ?(
                    <div className="header__right__plus">
                        <Link style={navStyle} to="/product-management">QLSP</Link>
                    </div>
                ) : (
                    <div className="header__right__plus">
                        <div className="header__option">
                            <FacebookIcon/>
                        </div>
                        <div className="header__option">
                            <InstagramIcon/>
                        </div>
                        <h4>THEO DÕI ĐƠN HÀNG</h4>
                        <div className="header__option">
                            <ShoppingBasketIcon/>
                        </div>
                        <div className="header__option">
                            <StorageIcon/>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header
