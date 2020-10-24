import React,{useState, useEffect} from 'react';
import './ProductManagement.css';
import axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CreateProduct from './CreateProduct';

function ProductManagement() {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        axios.get("http://ec2-13-229-108-245.ap-southeast-1.compute.amazonaws.com:8080/api/product?page=0&rows=0")
        .then (res => {
            setProductList(res.data.pagingData);
        })
    }, []);

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
                {productList.map(item => (
                    <tr>
                        <td>
                            <p>{item.id}</p>
                        </td>
                        <td>
                            <p>{item.name}</p>
                        </td>
                        <td>
                            <p>{item.categoryName}</p>
                        </td>
                        <td>
                            <img alt="" src={item.img} />
                        </td>
                        <td>
                            <DeleteIcon/>
                            <EditIcon/>
                        </td>
                    </tr>
                ))}                
            </table>
        </div>
    )
}

export default ProductManagement
