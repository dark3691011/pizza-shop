import React from 'react';
import './Checkout.css';
import {Link} from 'react-router-dom';

function Checkout() {
    return (
        <div className="checkout__container">
            <div className="go__back">
                <Link to="/category">
                        Trở lại danh sách hàng
                </Link>
            </div>
            <div className="checkout">
                <div className="checkout__detail">
                    <h2>CHI TIẾT THANH TOÁN</h2>
                    <div className="checkout__item">
                        <label htmlFor="name">Tên người nhận</label>
                        <input type="text" placeholder="Nhập tên người nhận"/>
                    </div>
                    <div className="checkout__item">
                        <label htmlFor="address">Địa chỉ</label>
                        <input type="text" placeholder="Nhập địa chỉ"/>
                    </div>
                    <div className="checkout__item">
                        <label htmlFor="phone">Số điện thoại</label>
                        <input type="text" placeholder="Nhập số điện thoại"/>
                    </div>
                    <div className="total">
                        <p>Tổng cộng</p>
                        <p>79000đ</p>
                    </div>
                </div>
                <div className="btn__checkout">
                    <button type="submit">XÁC NHẬN THANH TOÁN</button>
                </div>
            </div>
        </div>
    )
}

export default Checkout
