import React from 'react';
import './CategoryItem.css';

function CategoryItem({name, description, image, price}) {

    return (
        <div className="category__item">
            <div className="category__item__detail">
                <div className="category__item__image">
                    <img alt="" src={image} />
                </div>
                <div className="category__item__name">
                    <p>{name}</p>
                </div>
                <div className="category__item__name">
                    <p>{price} VND</p>
                </div>
                <div className="category__item__description">
                    <p>{description}</p>
                </div>
                <div className="category__item__button">
                    <p>THÊM VÀO ĐƠN HÀNG</p>
                </div>
            </div>            
        </div>
    )
}

export default CategoryItem
