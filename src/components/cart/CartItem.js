import React from 'react';
import './CartItem.css';

function CartItem() {
    return (
        <div className="cart__item">
            <div className="cart__item__left">
                9" NEW YORK CRUST PIZZA PHO
            </div>
            <div className="cart__item__right">
                <p>150k</p>
                <button type="submit">
                    Bỏ chọn
                </button>
            </div>
        </div>
    )
}

export default CartItem
