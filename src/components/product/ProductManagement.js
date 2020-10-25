import React,{useState, useEffect} from 'react';
import '../../config'
import './ProductManagement.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CreateProduct from './CreateProduct';

function ProductManagement() {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        axios.get(`${global.config.server.link}/product?page=0&rows=0`)
        .then (res => {
            setProductList(res.data.pagingData);
        })
    }

    return (localStorage.getItem("role")==="admin") ? (
        <div className="product__management">
            <CreateProduct/>
            <table id="product__management__table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TÊN SẢN PHẨM</th>
                        <th>LOẠI</th>
                        <th>HÌNH ẢNH</th>
                        <th>THAO TÁC</th>
                    </tr>
                </thead>
                <tbody>
                    {productList.map(item => (
                        <tr key={item.id}>
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
                                <Link to={`/update-product/${item.id}`}>
                                    <EditIcon/>                            
                                </Link>
                            </td>
                        </tr>
                    ))}                       
                </tbody>                
            </table>
        </div>
    ) : (
        <div>
        {
            window.location.pathname = '/'
        }
        </div>
    )
}

export default ProductManagement
