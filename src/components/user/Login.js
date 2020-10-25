import React,{useState, useEffect} from 'react';
import './Login.css';

function Login() {
    const adminUser = {
        email: "admin@admin.com",
        password: "admin123",
        role: "admin"
    }
    
    const normalUser = {
        email: "user@user.com",
        password: "user123",
        role: "user"
    }
    
    useEffect(() => {
        setUser({ email : localStorage.getItem("email")});
    },[])


    const[user, setUser] = useState({email: ""});
    const [error, setError] = useState("");

    const login = details => {
        console.log(details);
        if(details.email === adminUser.email && details.password === adminUser.password){
            console.log("Logged in");
            localStorage.setItem("email", adminUser.email);
            localStorage.setItem("role", adminUser.role);
            setUser({ email : localStorage.getItem("email")});
        }
        else if(details.email === normalUser.email && details.password === normalUser.password){
            console.log("Logged in");
            localStorage.setItem("email", normalUser.email);
            localStorage.setItem("role", normalUser.role);
            setUser({ email : localStorage.getItem("email")});
        } else {
            setError("Sai thông tin đăng nhập!");
        }
    }

    const [details, setDetails] = useState({email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        login(details);
    }

    return (user.email === "") ? (
        <div className="login">
            <form onSubmit={submitHandler} id="login__form">
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
    ) : (
        <div>
        {
            window.location.pathname = '/'
        }
        </div>
    )
}

export default Login
