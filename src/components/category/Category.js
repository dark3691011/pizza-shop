import React, { useState, useEffect } from 'react';
import '../../config';
import CategoryItem from './CategoryItem';
import './Category.css';
// import ButtonTop from './ButtonTop';
import axios from 'axios';
import { config } from '../../config';

function Category({ match }) {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      let cateParams = '';
      if (match.params.id) cateParams = `&categoryId=${match.params.id}`;
      const response = await axios.get(
        `${config.server.link}/product?page=0&rows=2${cateParams}`,
      );
      setProductList(response.data.pagingData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='category'>
      {/* <div className="category__header">
                <ButtonTop name="PIZZA"/>
                <ButtonTop name="MÓN ĂN KÈM"/>
                <ButtonTop name="GIẢI KHÁT"/>
                <ButtonTop name="TRÁNG MIỆNG"/>
                <ButtonTop name="KHUYẾN MÃI"/>
            </div> */}
      <div className='category__list'>
        <div className='category__list__left'>
          {productList.map((item) => (
            <CategoryItem
              key={item.id}
              name={item.name}
              description={item.description}
              image={item.img}
              price={item.price}
            />
          ))}
          <CategoryItem
            key="1"
            name="PIZZA"
            description="Vừa có gà phô mai lại có thêm thịt heo muối mặn mặn ăn không biết ngán. Bàn tiệc đa dạng topping, sao không thử?!"
            image="https://dominos.vn/Data/Sites/1/Product/830/pizza-pho.png"
            price="500000"
          />
          <CategoryItem
            key="1"
            name="PIZZA"
            description="Vừa có gà phô mai lại có thêm thịt heo muối mặn mặn ăn không biết ngán. Bàn tiệc đa dạng topping, sao không thử?!"
            image="https://dominos.vn/Data/Sites/1/Product/830/pizza-pho.png"
            price="500000"
          />
          <CategoryItem
            key="1"
            name="PIZZA"
            description="Vừa có gà phô mai lại có thêm thịt heo muối mặn mặn ăn không biết ngán. Bàn tiệc đa dạng topping, sao không thử?!"
            image="https://dominos.vn/Data/Sites/1/Product/830/pizza-pho.png"
            price="500000"
          />
          <CategoryItem
            key="1"
            name="PIZZA"
            description="Vừa có gà phô mai lại có thêm thịt heo muối mặn mặn ăn không biết ngán. Bàn tiệc đa dạng topping, sao không thử?!"
            image="https://dominos.vn/Data/Sites/1/Product/830/pizza-pho.png"
            price="500000"
          />
        </div>
        <div className='category__list__right'></div>
      </div>
    </div>
  );
}

export default Category;
