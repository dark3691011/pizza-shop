import React from 'react';
import './CartItem.css';

function CartItem() {
    return (
        <div className="cart__item">
            <div className="cart__item__left">
                <div>9" NEW YORK CRUST PIZZA PHO</div>
                <div className="topping">
                    <div>Cheesex2</div>
                    <div>Phoo mai x2</div>    
                </div> 
            </div>
            <div className="quantity">
                <div className="remove">-</div>
                <input type="text" value="3"/>
                <div className="add">+</div>
            </div>
            <div className="cart__item__right">
                <p>150k</p>
            </div>
        </div>
    )
}

export default CartItem
