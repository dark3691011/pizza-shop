import React from 'react';
import './CreateProduct.css';

function CreateProduct() {
    return (
        <div className="create__product">
            <form>
                <p>TÊN</p>
                <input type="text"/>
                <p>LOẠI</p>
                <input type="text"/>
                <p>HÌNH ẢNH</p>
                <input type="text"/>
                <p>GIÁ</p>
                <input type="text"/>
                <button type="submit">THÊM SẢN PHẨM</button>
            </form>
        </div>
    )
}

export default CreateProduct
