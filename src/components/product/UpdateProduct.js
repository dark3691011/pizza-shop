import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { config } from '../../config';

function UpdateProduct({ match }) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const fetchItem = (async) => {
    axios
      .get(`${config.server.link}/product/${match.params.id}`)
      .then((res) => {
        setProduct(res.data);
        console.log(res.data);
      });
  };

  const updateProduct = (product) => {
    axios
      .put(`${config.server.link}/product/${match.params.id}`, {
        name: product.name,
      })
      .then((res) => {
        console.log('update thành công');
      });
  };

  const submitHandle = (e) => {
    e.preventDefault();

    updateProduct(product);
  };

  return (
    <div className='update__product'>
      <form onSubmit={submitHandle} id='update__product__form'>
        <div className='form__group'>
          <label htmlFor='name'>Tên loại</label>
          <input
            type='text'
            id='name'
            name='name'
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            value={product.name}
          />
        </div>
        <button type='submit'>Cập nhật</button>
      </form>
    </div>
  );
}

export default UpdateProduct;
