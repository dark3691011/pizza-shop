import React from 'react'

function ProductDetail() {
    return (
        <div className="product__detail">
            <div className="detail__left">
                <img alt="" src="" />
            </div>
            <div className="detail__right">
                <h4>Thông tin chi tiết</h4>
                <h3 id="name" name="name">PIZZA ABC</h3>
                <div className="detail__item">
                    <label htmlFor="description">MÔ TẢ</label>
                    <p>rgserdfgvsdfgvsdf</p>
                </div>
                <div className="detail__item">
                    <label htmlFor="type">LOẠI</label>
                    <p>asdas</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
