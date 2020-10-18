import React, {useState, useEffect} from 'react';
import './Menu.css';
import MenuItem from './MenuItem';
import db from '../../firebase';

function Menu() {
    const [menuItem,setMenuItem] = useState([]);

    useEffect(() => {
        db.collection('menu-item').onSnapshot(snapshot =>{
            setMenuItem(snapshot.docs.map(doc =>({
                id: doc.id,
                data: doc.data()
            })))
        });
    }, []);

    return (
        <div className="menu">
            {menuItem.map(item => (
                <MenuItem key={item.id} id={item.id} name={item.data.name} image={item.data.image} />
            ))}
        </div>
    )
}

export default Menu
