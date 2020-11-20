import React from 'react';
import CartItem from './CartItem';
import './Cart.css';
import {Link} from 'react-router-dom';

function Cart() {
    return (
        <div className="cart__container">
            <div className="go__back">
                <Link to="/category">
                        Trở lại danh sách hàng
                </Link>
            </div>
            <div className="cart">
                <div className="cart__detail">
                    <h2>CHI TIẾT ĐƠN HÀNG</h2>
                    <CartItem/>
                    <CartItem/>
                    <div className="total">
                        <p>Tổng cộng</p>
                        <p>79000đ</p>
                    </div>
                </div>
                <div className="btn__cart">
                    <p>THANH TOÁN</p>
                </div>
            </div>
        </div>
    )
}

export default Cart
