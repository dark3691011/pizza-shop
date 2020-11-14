import React,{useState} from 'react';
import axios from 'axios';
import './EditPassword.css';
import { config } from '../../config';
import { Redirect } from 'react-router-dom';

function EditPassword() {
    const [pass, setPass] = useState({});

    const changePassword = async => {
        axios.put(`${config.server.link}/password`,{
            "password": pass.password,
            "newPassword": pass.newPassword
        },{headers : {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        }})
        .then(res =>{
            console.log("Update success");
            return <Redirect to='/login' />;
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        changePassword();
    }

    return (
        <div className="edit__password__container">
            <form className="edit__password" onSubmit={handleSubmit}>
                <div className="edit__password__item">
                    <label htmlFor="password">MẬT KHẨU</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        onChange={(e) =>setPass({ ...pass, password: e.target.value })}
                    />
                </div>
                <div className="edit__password__item">
                    <label htmlFor="new-password">MẬT KHẨU MỚI</label>
                    <input 
                        type="password" 
                        name="new-password" 
                        id="new-password" 
                        onChange={(e) =>setPass({ ...pass, newPassword: e.target.value })}
                    />
                </div>
                <button type="submit">CẬP NHẬT</button>
            </form>
        </div>
    )
}

export default EditPassword
