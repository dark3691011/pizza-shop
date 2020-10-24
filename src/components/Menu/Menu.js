import React, {useState, useEffect} from 'react';
import './Menu.css';
import MenuItem from './MenuItem';
import axios from 'axios';
// import db from '../../firebase';

function Menu() {
    const [menuItem,setMenuItem] = useState([]);

    // useEffect(() => {
    //     db.collection('menu-item').onSnapshot(snapshot =>{
    //         setMenuItem(snapshot.docs.map(doc =>({
    //             id: doc.id,
    //             data: doc.data()
    //         })))
    //     });
    // }, []);

    useEffect(() => {
        axios.get("http://ec2-13-229-108-245.ap-southeast-1.compute.amazonaws.com:8080/api/category")
        .then(res => {
            setMenuItem(res.data);
            console.log(res.data);
        });
    }, []);

    return (
        <div className="menu">
            {menuItem.map(item => (
                // <MenuItem key={item.id} id={item.id} name={item.data.name} image={item.data.image} />
                
                <MenuItem key={item.id} id={item.id} name={item.name} />
            ))}
        </div>
    )
}

export default Menu
