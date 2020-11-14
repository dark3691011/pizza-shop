import React,{useState, useEffect} from 'react';
import './UserManagement.css';
import axios from 'axios';
import { config } from '../../config';
import jwt_decode from 'jwt-decode';

function UserManagement() {
    const [userList, setUserList] = useState({});

    useEffect(() =>{
        fetchUsers();
    },[])

    const fetchUsers = async => {
        // try{
        //     const response = await axios.get(`${config.server.link}/users/?page=1&rows=2`,{headers : {
        //         "Content-Type": "application/json",
        //         "Authorization": "Bearer " + localStorage.getItem("token")
        //     }});
        //     console.log(response);
        //     setUserList(response.data.pagingData);
        // } catch(error){
        //     console.log(error);
        // }
        
        axios.get(`${config.server.link}/users/?page=1&rows=2`,{headers : {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        }})
        .then(res => {
            console.log(res.data.pagingData);
            setUserList(res.data.pagingData);
        });
    }

    return (
        <div className="user__management">
            <table id="user__management__table">
                <thead onClick={console.log(userList)}>
                    <tr>
                        <th>ID</th>
                        <th>TÊN</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                        <th>ADDRESS</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {userList.map((item) => (
                        <tr key={item.id}>
                            <td>
                                <p>{item.id}</p>
                            </td>
                            <td>
                                <p>{item.name}</p>
                            </td>
                            <td>
                                <p>{item.email}</p>
                            </td>
                            <td>
                                <p>{item.phone}</p>
                            </td>
                            <td>
                                <p>{item.address}</p>
                            </td>
                        </tr>
                    ))}                        */}
                </tbody>                
            </table>
        </div>
    )
}

export default UserManagement
