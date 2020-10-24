import React, {useState, useEffect} from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import LoginComponent from './components/user/Login';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function App() {
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

  const Login = details => {
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

  const Logout = () => {
    localStorage.setItem("email", "");
    setUser({ email : localStorage.getItem("email")});
    console.log(localStorage.getItem("email"))
    console.log("Logout");
  }

  return (
    <Router>
      <div className="app">
        <Header email={user.email} Logout={Logout}/>

        {(user.email !== "") ?(
          <Menu />
        ) : (
          <LoginComponent Login={Login} error={error}/>
        )}

        <Route path="/" exact component={Menu} />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
