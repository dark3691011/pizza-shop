import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { config } from '../../config';
import './Login.css';
import * as actions from '../../store/action/index';

function Login() {
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [details, setDetails] = useState({ email: '', password: '' });

  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const login = async () => {
    try {
      const request = {
        requiredEntry: details.email,
        password: details.password,
      };
      const response = await Axios.post(
        config.server.link + '/auth/login',
        request,
      );
      localStorage.setItem('token', response.data.token);
      dispatch(actions.changeToken(response.data.token));
    } catch (error) {
      setError('Thông tin đăng nhập không hợp lệ');
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    login();
  };

  if (token !== '') return <Redirect to='/category' />;
  return (
    <div className='login'>
      <form onSubmit={submitHandler} id='login__form'>
        <h1>ĐĂNG NHẬP</h1>
        {error !== '' ? <div className='error'>{error}</div> : ''}
        <h4>Thông tin đăng nhập</h4>
        <div className='login__form__group'>
          <label htmlFor='email'>EMAIL</label>
          <input
            type='email'
            name='email'
            id='email'
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <div className='login__form__group'>
          <label htmlFor='password'>MẬT KHẨU</label>
          <input
            type='password'
            name='password'
            id='password'
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <button type='submit'>ĐĂNG NHẬP</button>
      </form>
    </div>
  );
}

export default Login;
