import React,{useState} from 'react';
import '../../config';
import './Register.css';
import axios from 'axios';

function Register() {
    const [user,setUser] = useState({});
    const [error, setError] = useState("");

    const register = user => {
        if(user.password !== user.re_password){
            setError("Nhập lại mật khẩu không chính xác");
        }
        else{
            axios.post(`${global.config.server.link}/auth/register`,{
                "email": user.email,
                "name": user.name,
                "phone": user.phone,
                "password": user.password,
                "address": user.address
            })
            .then(res =>{
                console.log("Đăng ký thành công");
                window.location.pathname = './';
            })
        }
    }

    const handleSubmit = e =>{
        e.preventDefault();


        register(user);
    }
    return (
        <div className="register">
            <form onSubmit={handleSubmit} id="register__form">
                {(error!=="") ? (<div>{error}</div>) : ""}
                <h1>ĐĂNG KÝ TÀI KHOẢN</h1>
                <h4>Thông tin đăng nhập</h4>
                <div className="register__form__group">
                    <label htmlFor="email">EMAIL</label>
                    <input type="email" id="email" name="email" onChange={e => setUser({...user, email: e.target.value})} value={user.email}/>
                </div>
                <div className="register__form__group">
                    <label htmlFor="password">MẬT KHẨU</label>
                    <input type="password" id="password" name="password" onChange={e => setUser({...user, password: e.target.value})} value={user.password}/>
                </div>
                <div className="register__form__group">
                    <label htmlFor="re_password">XÁC NHẬN MẬT KHẨU</label>
                    <input type="password" id="re_password" name="re_password" onChange={e => setUser({...user, re_password: e.target.value})} value={user.re_password}/>                    
                </div>
                <div className="register__form__group">
                    <label htmlFor="phone">ĐIỆN THOẠI</label>
                    <input type="phone" id="phone" name="phone" onChange={e => setUser({...user, phone: e.target.value})} value={user.phone}/>                    
                </div>
                <div className="register__form__group">
                    <label htmlFor="name">TÊN</label>
                    <input type="text" id="name" name="name" onChange={e => setUser({...user, name: e.target.value})} value={user.name}/>                    
                </div>
                <div className="register__form__group">
                    <label htmlFor="address">ĐỊA CHỈ</label>
                    <input type="text" id="address" name="addres" onChange={e => setUser({...user, address: e.target.value})} value={user.address}/>                    
                </div>
                <button type="submit">TẠO TÀI KHOẢN</button>
            </form>
        </div>
    )
}

export default Register
