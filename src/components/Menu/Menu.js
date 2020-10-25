import React, {useState, useEffect} from 'react';
import '../../config';
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
        console.log(global.config.server.link);
        fetchItems();
    }, []);

    const fetchItems = async () => {
        axios.get(`${global.config.server.link}/category`)
        .then(res => {
            setMenuItem(res.data);
            console.log(res.data);
        });
    }

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
