import React,{useState} from 'react';
import '../../config';
import './CreateProduct.css';
import axios from 'axios';

function CreateProduct() {
    const [product,setProduct] = useState({});

    const createProduct = product => {
        axios.post(`${global.config.server.link}/product`,{
            product
        })
        .then(res =>{
            console.log("Tạo thành công")
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        createProduct(product);
    }

    return (
        <div className="create__product">
            <form onSubmit={handleSubmit} id="create__product__form">
                <div className="form__group" id="create__product__form">
                    <label htmlFor="name">TÊN</label>
                    <input type="text" name="name" id="name" onChange={e => setProduct({...product,name: e.target.value})} value={product.name}/>
                </div>
                <div className="form__group">
                    <label htmlFor="image">HÌNH ẢNH</label>
                    <input type="text" name="image" id="image" onChange={e => setProduct({...product,img: e.target.value})} value={product.img}/>                    
                </div>
                <div className="form__group">
                    <label htmlFor="price">GIÁ</label>
                    <input type="text" name="price" id="price" onChange={e => setProduct({...product,price: e.target.value})} value={product.price}/>                    
                </div>
                <div className="form__group">
                    <label htmlFor="description">MÔ TẢ</label>
                    <input type="text" name="description" id="description" onChange={e => setProduct({...product,description: e.target.value})} value={product.description}/>                   
                </div>
                <div className="form__group">
                    <label htmlFor="type">LOẠI</label>
                    <input type="text" name="type" id="type" onChange={e => setProduct({...product,categoryName: e.target.value})} value={product.categoryName}/>                   
                </div>
                <div className="form__group">
                    <label htmlFor="size">SIZE</label>
                    <input type="text" name="size" id="size" onChange={e => setProduct({...product,size: e.target.value})} value={product.size}/>                   
                </div>
                <button type="submit">THÊM SẢN PHẨM</button>
            </form>
        </div>
    )
}

export default CreateProduct
