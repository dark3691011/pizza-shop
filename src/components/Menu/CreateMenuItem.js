import React,{useState} from 'react';
import axios from 'axios';

function CreateMenuItem() {
    const [details, setDetails] = useState({});

    const createItem = details => {
        axios.post("ec2-13-229-108-245.ap-southeast-1.compute.amazonaws.com:8080/api/category",{
            name: details.name
        })
        .then(res =>{
            console.log(res);
        });
    }

    const submitHandle = e => {
        e.preventDefault();

        createItem(details);
    }

    return (
        <div className="create__menu__item">
            <form onSubmit={submitHandle} id="create__menu__item__form">
                <div className="form__group">
                    <label htmlFor="name">Tên loại</label>
                    <input type="text" id="name" name="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
                </div>
                <button type="submit">Thêm</button>
            </form>
        </div>
    )
}

export default CreateMenuItem
