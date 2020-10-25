import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Menu from './components/menu/Menu';
import Login from './components/user/Login';
import Register from './components/user/Register';
import Category from './components/category/Category';
import ProductManagement from './components/product/ProductManagement';
import MenuManagement from './components/menu/MenuManagement';
import UpdateProduct from './components/product/UpdateProduct';

function App() {

  useEffect(() => {
    setUser({ email : localStorage.getItem("email")});
    console.log(localStorage.getItem("email"));
  },[])


  const[user, setUser] = useState({email: "", role: ""});

  const Logout = () => {
    localStorage.setItem("email", "");
    localStorage.setItem("role", "");
    console.log(localStorage.getItem("email"))
    console.log("Logout");
  }

  return (
    <Router>
      <div className="app">
        <Header email={user.email} Logout={Logout}/>

        <Switch>
          <Route path="/" exact component={Menu} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register}/>
          <Route path="/category" exact component={Category}/>
          <Route path="/category/:id" component={Category}/>
          <Route path="/product-management" component={ProductManagement} />
          <Route path="/menu-management" component={MenuManagement} />
          <Route path="/update-product/:id" component={UpdateProduct} />
        </Switch>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
