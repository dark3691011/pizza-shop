import React,{useState} from 'react';
import './Login.css';

function Login({Login, error}) {
    const [details, setDetails] = useState({email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return (
        <div className="login">
            <form onSubmit={submitHandler}>
                <h1>ĐĂNG NHẬP</h1>
                {(error !== "") ? (<div className="error">{error}</div>) : ""}
                <h4>Thông tin đăng nhập</h4>
                <div className="login__form__group">
                    <label htmlFor="email">EMAIL</label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                </div>
                <div className="login__form__group">
                    <label htmlFor="password">MẬT KHẨU</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                <button type="submit">ĐĂNG NHẬP</button>
            </form>
        </div>
    )
}

export default Login
