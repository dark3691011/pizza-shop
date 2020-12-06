import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../store/action/index';
import './product-modal.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#D7D8DF',
  },
};

function ProductModal(props) {
  const { modal, setModal } = props;
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const addToCart = (data) => {  
    const tempModal = {...modal}  
    const tempCart = [...cart];
    const itemExisted = tempCart.find((item) => item.name === data.name);
    if (itemExisted) {
      itemExisted.amt++;
    } else {
      tempCart.push({ name: data.name, amt: 1 });
    }
    tempModal.isOpen = false;
    setModal(tempModal)
    dispatch(actions.updateCart(tempCart));
  };

  return (
    <Modal
      isOpen={modal.isOpen}
      //   onAfterOpen={afterOpenModal}
      onRequestClose={() => setModal({ isOpen: false, data: null })}
      style={customStyles}
    >
      {modal.data && (
        // <div onClick={() => addToCart(modal.data)}>{modal.data.name}</div>
          <div className="product__detail">
              <div className="detail__left">
                  <div className="description__product">
                      <img src='https://dominos.vn/Data/Sites/1/Product/830/pizza-pho.png'/>
                      <h3>PIZZA PHỞ</h3>
                      <p> Pizza Phở giữ hương vị nguyên bản của món Phở truyền thống Việt Nam với nguyên liệu đặc trưng: thịt bò thái lát, bò viên, ngò gai, rau quế và hành tây, nước dùng thơm béo được nấu cô đặc tạo nên vị quê hương ai đi xa cũng nhớ. 
                      Nguyên liệu của Phở được đặt trên đế bánh tươi, quyện cùng lớp phô mai Mozzarella thơm béo.</p>
                  </div>
                  <div className="image__product">
                      <h1>500000 ₫</h1>
                  </div>
              </div>
              <div className="detail__right">
                  <div className="detail__item">
                      <h4>Cỡ bánh</h4>
                      <div className="radio__detail">
                          <input type="radio" id="size-m" name="size" value="size-m"/>
                          <label htmlFor="size-m">Cỡ nhỏ</label>
                      </div>
                      <div className="radio__detail">
                          <input type="radio" id="size-l" name="size" value="size-l"/>
                          <label htmlFor="size-l">Cỡ lớn</label>
                      </div>
                  </div>
                  <div className="detail__item">
                      <h4>Đế bánh</h4>
                      <div className="radio__detail">
                          <input type="radio" id="base-m" name="base" value="size-m"/>
                          <label htmlFor="base-m">Cỡ nhỏ</label>
                      </div>
                      <div className="radio__detail">
                          <input type="radio" id="base-l" name="base" value="size-l"/>
                          <label htmlFor="base-l">Cỡ lớn</label>
                      </div>
                  </div>
                  <div className="detail__item">
                      <h4>Tùy chọn thêm</h4>
                      <div className="radio__detail">
                          <input type="radio" id="no_topping" name="topping" value="no_topping"/>
                          <label htmlFor="no_topping">Không thêm</label>
                      </div>
                      <div className="radio__detail">
                          <input type="radio" id="topping-m" name="topping" value="size-m"/>
                          <label htmlFor="topping-m">Thêm ít</label>
                      </div>
                      <div className="radio__detail">
                          <input type="radio" id="topping-l" name="topping" value="size-l"/>
                          <label htmlFor="topping-l">Thêm nhiều</label>
                      </div>
                  </div>
                  <button onClick={() => addToCart(modal.data)}>Đặt bánh</button>
              </div>
              <ul class="ratings">
                  <li class="star"></li>
                  <li class="star"></li>
                  <li class="star"></li>
                  <li class="star"></li>
                  <li class="star"></li>
              </ul>
          </div>
      )}
    </Modal>
  );
}

export default ProductModal;
