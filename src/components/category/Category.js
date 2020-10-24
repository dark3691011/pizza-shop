import React, {useState, useEffect}  from 'react'
import CategoryItem from './CategoryItem';
import './Category.css';
import ButtonTop from './ButtonTop';
import axios from 'axios';

function Category() {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        axios.get("http://ec2-13-229-108-245.ap-southeast-1.compute.amazonaws.com:8080/api/product?page=0&rows=0&categoryId=5f7f47e7b81e7f2e21a031de")
        .then (res => {
            setProductList(res.data.pagingData);
        })
    }, []);

    return (
        <div className="category">
            <div className="category__header">
                <ButtonTop name="PIZZA"/>
                <ButtonTop name="MÓN ĂN KÈM"/>
                <ButtonTop name="GIẢI KHÁT"/>
                <ButtonTop name="TRÁNG MIỆNG"/>
                <ButtonTop name="KHUYẾN MÃI"/>
            </div>
            <div className="category__list">
                <div className="category__list__left">
                    {productList.map(item => (
                        <CategoryItem key={item.id} name={item.name} description={item.description} image={item.img} price={item.price}/>
                    ))}
                </div>
                <div className="category__list__right">
                </div>
            </div>
        </div>
    )
}

export default Category
