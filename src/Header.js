import React, { useEffect, useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StorageIcon from '@material-ui/icons/Storage';
import { IsAuth } from './helper/auth';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './store/action/index';

function Header(props) {
  const navStyle = {
    color: 'white',
    textDecoration: 'none',
    marginLeft: '20px',
    fontWeight: 'bold',
    hover: 'cursor',
  };
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const onLogout = () => {
    localStorage.removeItem('token');
    dispatch(actions.changeToken(''));
  };

  return (
    <div className='header'>
      <div className='header__left'>
        <Link to='/'>
          <img
            alt=''
            src='https://dominos.vn/Data/Sites/1/media/default2/img/logo.png'
          />
        </Link>
      </div>
      <div className='header__right'>
        {token !== '' ? (
          <div className='login__status'>
            <Link to='/user-info'><AccountCircleIcon /></Link>
            <Link to='/login' onClick={() => onLogout()}>
              <h4>ĐĂNG XUẤT</h4>
            </Link>
          </div>
        ) : (
          <div className='login__status'>
            <Link style={navStyle} to='/register'>
              <h4>ĐĂNG KÝ</h4>
            </Link>
            <Link style={navStyle} to='/login'>
              <h4>ĐĂNG NHẬP</h4>
            </Link>
          </div>
        )}

        {localStorage.getItem('role') === 'admin' ? (
          <div className='header__right__plus'>
            <Link style={navStyle} to='/product-management'>
              QLSP
            </Link>
            <Link style={navStyle} to='/menu-management'>
              QLMN
            </Link>
          </div>
        ) : (
          <div className='header__right__plus'>
            {/* <div className='header__option'>
              <FacebookIcon />
            </div>
            <div className='header__option'>
              <InstagramIcon />
            </div>
            <h4>THEO DÕI ĐƠN HÀNG</h4> */}
            <div className='header__option'>
              <ShoppingCartIcon />
            </div>
            {/* <div className='header__option'>
              <StorageIcon />
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
