import { Link } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../store/action/index';
import CartItem from '../CartItem';

const customStyles = {
  content: {
    
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width: '70%',
    backgroundColor: '#D7D8DF',
  },
};

function CartModal(props) {
  const { modal, setModal } = props;
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const addToCart = (data) => {
    const tempCart = [...cart];
    const itemExisted = tempCart.find((item) => item.name === data.name);
    if (itemExisted) {
      itemExisted.amt++;
    } else {
      tempCart.push({ name: data.name, amt: 1 });
    }
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
        <div className="cart">
            <div className="cart__detail">
                <h2>CHI TIẾT ĐƠN HÀNG</h2>
                <CartItem/>
                <CartItem/>
                <div className="total">
                    <p>Tổng cộng</p>
                    <p>79000đ</p>
                </div>
            </div>
            <div className="btn__cart">
                <p>THANH TOÁN</p>
            </div>
        </div>
      )}
    </Modal>
  );
}

export default CartModal;
