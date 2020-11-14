import React,{useState, useEffect} from 'react';
import axios from 'axios';
import './EditUserInfo.css';
import { config } from '../../config';
import { Redirect } from 'react-router-dom';

function EditUserInfo() {
    const [user, setUser] = useState({
        "email": "",
        "name": "",
        "phone": "",
        "address": ""
    });

    useEffect(() => {
        fetchUser();
    },[])

    const fetchUser = async => {
        // try{
        //     const response = await axios.get(`${config.server.link}/self`,{headers : {
        //         "Content-Type": "application/json",
        //         "Authorization": "Bearer " + localStorage.getItem("token")
        //     }});
        //     console.log(response);
        //     //setUserList(response.data.pagingData);
        // } catch(error){
        //     console.log(error);
        // }

        axios.get(`${config.server.link}/self`,{headers : {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        }})
        .then(res =>{
            setUser(res.data);
        });
    }

    const updateInfo = async =>{
        // try{
        //     const response = await axios.get(`${config.server.link}/self/edit`,{
        //         "email": user.email,
        //         "name": user.name,
        //         "phone": user.phone,
        //         "address": user.address
        //     },{headers : {
        //         "Content-Type": "application/json",
        //         "Authorization": "Bearer " + localStorage.getItem("token")
        //     }});
        //     console.log(response);
        // } catch(error){
        //     console.log(error);
        // }

        axios.put(`${config.server.link}/self/edit`,{
            "email": user.email,
            "name": user.name,
            "phone": user.phone,
            "address": user.address
        },{headers : {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        }})
        .then(res =>{
            console.log("Update success");
            return <Redirect to='/user-info' />;
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();

        updateInfo();
    }
    return (
        <div className="edit__user__info__container">
            <form className="edit__user__info" onSubmit={handleSubmit}>
                <div className="edit__user__info__item">
                    <label htmlFor="name">Tên</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        onChange={(e) =>setUser({ ...user, name: e.target.value })}
                        value={user.name}
                    />
                </div>
                <div className="edit__user__info__item">
                    <label htmlFor="address">ĐỊA CHỈ</label>
                    <input 
                        type="text" 
                        name="address" 
                        id="address" 
                        onChange={(e) =>setUser({ ...user, address: e.target.value })}
                        value={user.address}
                    />
                </div>
                <div className="edit__user__info__item">
                    <label htmlFor="phone">SỐ ĐIỆN THOẠI</label>
                    <input 
                        type="text" 
                        name="phone" 
                        id="phone" 
                        onChange={(e) =>setUser({ ...user, name: e.target.value })}
                        value={user.phone}
                    />
                </div>
                <div className="edit__user__info__item">
                    <label htmlFor="email">EMAIL</label>
                    <input 
                        type="text" 
                        name="email" 
                        id="email" 
                        onChange={(e) =>setUser({ ...user, email: e.target.value })}
                        value={user.email}
                    />
                </div>
                <button type="submit">CẬP NHẬT</button>
            </form>
        </div>
    )
}

export default EditUserInfo
