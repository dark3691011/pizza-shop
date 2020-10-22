import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className="login">
            <form>
                <h1>ĐĂNG NHẬP</h1>
                <h4>Thông tin đăng nhập</h4>
                <div className="login__form__group">
                    <label htmlFor="email">EMAIL</label>
                    <input type="text" name="email" id="email"/>
                </div>
                <div className="login__form__group">
                    <label htmlFor="password">MẬT KHẨU</label>
                    <input type="text" name="password" id="password"/>
                </div>
                <button type="submit">ĐĂNG NHẬP</button>
            </form>
        </div>
    )
}

export default Login
