import React from 'react';
import './CategoryItem.css';

function CategoryItem() {
    return (
        <div className="category__item">
            <div className="category__item__detail">
                <div className="category__item__image">
                    <img alt="" src="https://dominos.vn/Data/Sites/1/Product/829/pizzamin-sea.png" />
                </div>
                <div className="category__item__name">
                    <p>PIZZA PHỞ</p>
                </div>
                <div className="category__item__description">
                    <p>Pizza chuẩn Mỹ, đậm vị quốc dân với thịt bò, bò viên, con các nó lắm thứ vãilone</p>
                </div>
                <div className="category__item__button">
                    <p>THÊM VÀO ĐƠN HÀNG</p>
                </div>
            </div>            
        </div>
    )
}

export default CategoryItem
