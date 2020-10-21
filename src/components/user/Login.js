import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className="login">
            <form>
                <h1>ĐĂNG NHẬP</h1>
                <h4>Thông tin đăng nhập</h4>
                <p>EMAIL</p>
                <input type="text"/>
                <p>MẬT KHẨU</p>
                <input type="text"/>
                <button type="submit">ĐĂNG NHẬP</button>
            </form>
        </div>
    )
}

export default Login
