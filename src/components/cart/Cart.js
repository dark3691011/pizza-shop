import React from 'react';
import CartItem from './CartItem';

function Cart() {
    return (
        <div className="cart">
            <div className="cart_detail">
                <h2>CHI TIẾT ĐƠN HÀNG</h2>
                <CartItem/>
                <div className="total">
                    <p>Tổng cộng</p>
                    <p>79000đ</p>
                </div>
            </div>
            <div className="btn__cart">
                THANH TOÁN
            </div>
        </div>
    )
}

export default Cart
