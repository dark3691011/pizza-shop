import React,{useState, useEffect} from 'react';
import './Login.css';

function Login() {
    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
    }
    
    const normalUser = {
        email: "user@user.com",
        password: "user123"
    }
    
    useEffect(() => {
        setUser({ email : localStorage.getItem("email")});
    },[])


    const[user, setUser] = useState({email: ""});
    const [error, setError] = useState("");

    const LoginFunction = details => {
        console.log(details);
        if(details.email === adminUser.email && details.password === adminUser.password){
            console.log("Logged in");
            localStorage.setItem("email", adminUser.email);
            setUser({ email : localStorage.getItem("email")});
        }
        else if(details.email === normalUser.email && details.password === normalUser.password){
            console.log("Logged in");
            localStorage.setItem("email", normalUser.email);
            setUser({ email : localStorage.getItem("email")});
        } else {
            setError("Sai thông tin đăng nhập!");
        }
    }

    // const Logout = () => {
    //     localStorage.setItem("email", "");
    //     setUser({ email : localStorage.getItem("email")});
    //     console.log(localStorage.getItem("email"))
    //     console.log("Logout");
    // }

      
    const [details, setDetails] = useState({email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        LoginFunction(details);
    }

    return (user.email === "") ? (
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
    ) : (
        <div>
        {
            window.location.pathname = '/'
        }
        </div>
    )
}

export default Login
