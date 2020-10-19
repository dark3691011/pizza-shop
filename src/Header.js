import React from 'react';
import './Header.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import StorageIcon from '@material-ui/icons/Storage';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <a href="./"><img alt="" src="https://dominos.vn/Data/Sites/1/media/default2/img/logo.png"/></a>               
            </div>
            <div className="header__right">
                <div className="header__option">                    
                    <AccountCircleIcon/>
                </div>
                <h4>ĐĂNG KÝ</h4>
                <p>/</p>
                <h4>ĐĂNG NHẬP</h4>
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
        </div>
    )
}

export default Header
