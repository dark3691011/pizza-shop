import React from 'react';
import './ProductManagement.css';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CreateProduct from './CreateProduct';

function ProductManagement() {
    return (
        <div className="product__management">
            <CreateProduct/>
            <table id="product__management__table">
                <tr>
                    <th>ID</th>
                    <th>TÊN SẢN PHẨM</th>
                    <th>LOẠI</th>
                    <th>HÌNH ẢNH</th>
                    <th>THAO TÁC</th>
                </tr>
                <tr>
                    <td>
                        <p>1</p>
                    </td>
                    <td>
                        <p>Pizza thịt chó</p>
                    </td>
                    <td>
                        <p>Pizza</p>
                    </td>
                    <td>
                        <img src="https://dominos.vn/Data/Sites/1/Product/829/pizzamin-sea.png" />
                    </td>
                    <td>
                        <DeleteIcon/>
                        <EditIcon/>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default ProductManagement
