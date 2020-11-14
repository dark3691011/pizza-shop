import React,{useState, useEffect} from 'react';
import axios from 'axios';
import './UserInfo.css';
import { config } from '../../config';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';

function UserInfo() {
    const [user, setUser] = useState({});

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

    return (
        <div className="user__info__container">
            <div className="user__info">
                <div className="user__info__item">
                    <label htmlFor="name">Tên</label>
                    <p>{user.name}</p>
                </div>
                <div className="user__info__item">
                    <label htmlFor="address">ĐỊA CHỈ</label>
                    <p>{user.address}</p>
                </div>
                <div className="user__info__item">
                    <label htmlFor="phone">SỐ ĐIỆN THOẠI</label>
                    <p>{user.phone}</p>
                </div>
                <div className="user__info__item">
                    <label htmlFor="email">EMAIL</label>
                    <p>{user.email}</p>
                </div>
                <Link to='/edit-user-info'>
                    <div className="btn__edit__user__info">
                        <EditIcon />
                    </div>
                </Link>
                <Link to='/edit-password'>
                    <div className="btn__edit__user__pass">
                        ĐỔI MẬT KHẨU
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default UserInfo
