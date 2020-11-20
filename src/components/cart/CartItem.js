import React from 'react'

function CartItem() {
    return (
        <form className="cart__item">
            <div className="cart__item__left">
                9" NEW YORK CRUST PIZZA PHO
            </div>
            <div className="cart__item__right">
                <p>150k</p>
                <button type="submit">
                    Bỏ chọn
                </button>
            </div>
        </form>
    )
}

export default CartItem
