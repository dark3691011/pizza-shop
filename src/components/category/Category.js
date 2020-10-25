import React, {useState, useEffect}  from 'react';
import '../../config';
import CategoryItem from './CategoryItem';
import './Category.css';
// import ButtonTop from './ButtonTop';
import axios from 'axios';

function Category({ match }) {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        axios.get(`${global.config.server.link}/product?page=0&rows=0&categoryId=${match.params.id}`)
        .then (res => {
            setProductList(res.data.pagingData);
        })
    };

    return (
        <div className="category">
            {/* <div className="category__header">
                <ButtonTop name="PIZZA"/>
                <ButtonTop name="MÓN ĂN KÈM"/>
                <ButtonTop name="GIẢI KHÁT"/>
                <ButtonTop name="TRÁNG MIỆNG"/>
                <ButtonTop name="KHUYẾN MÃI"/>
            </div> */}
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
