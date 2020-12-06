import React, { useEffect, useState } from 'react';
import './Header.css';
import logo from './image/logo.png';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StorageIcon from '@material-ui/icons/Storage';
import { IsAuth } from './helper/auth';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './store/action/index';
import ProductModal from './components/product/product-modal/product-modal';

function Header(props) {
  const navStyle = {
    color: 'white',
    textDecoration: 'none',
    marginLeft: '20px',
    fontWeight: 'bold',
    hover: 'cursor',
  };
  const [modal, setModal] = useState({
    data: null,
    isOpen: false,
  });
  const [cartAmount, setCartAmount] = useState(0);
  const token = useSelector((state) => state.auth.token);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const onLogout = () => {
    localStorage.removeItem('token');
    dispatch(actions.changeToken(''));
  };

  useEffect(() => {
    let sum = 0;
    for (const item of cart) {
      sum += item.amt;
    }
    setCartAmount(sum);
  }, [cart]);

  const openModal = (isOpen, data) => {
    const tempModal = { ...modal };
    tempModal.isOpen = isOpen;
    tempModal.data = data;
    setModal(tempModal);
  };

  return (
    <div className='header'>
      <div className='header__left'>
        <Link to='/'>
          <img alt='' src={logo} />
        </Link>
      </div>
      <div className='header__right'>
        {token !== '' ? (
          <div className='login__status'>
            <Link to='/user-info'>
              <AccountCircleIcon />
            </Link>
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
            <div className='header__option' onClick={() => openModal(true, { name: 'abc' })}>
              <div>{cartAmount}</div>
              <ShoppingCartIcon />
            </div>
            {/* <div className='header__option'>
              <StorageIcon />
            </div> */}
          </div>
        )}
      </div>
      <ProductModal modal={modal} setModal={setModal} />
    </div>
  );
}

export default Header;
