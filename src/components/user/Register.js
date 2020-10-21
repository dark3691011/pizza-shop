import React from 'react';
import './Register.css';

function Register() {
    return (
        <div className="register">
            <form>
                <h1>ĐĂNG KÝ TÀI KHOẢN</h1>
                <h4>Thông tin đăng nhập</h4>
                <p>EMAIL</p>
                <input type="text"/>
                <p>MẬT KHẨU</p>
                <input type="text"/>
                <p>XÁC NHẬN MẬT KHẨU</p>
                <input type="text"/>
                <p>ĐIỆN THOẠI</p>
                <input type="text"/>
                <p>TÊN</p>
                <input type="text"/>
                <button type="submit">TẠO TÀI KHOẢN</button>
            </form>
        </div>
    )
}

export default Register
