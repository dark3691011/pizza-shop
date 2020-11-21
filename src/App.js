import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Menu from './components/Menu/Menu';
import Login from './components/user/Login';
import Register from './components/user/Register';
import Category from './components/category/Category';
import ProductDetail from './components/category/ProductDetail';
import ProductManagement from './components/product/ProductManagement';
import MenuManagement from './components/Menu/MenuManagement';
import UpdateProduct from './components/product/UpdateProduct';
import { useDispatch, useSelector } from 'react-redux';
import jwt_decode from 'jwt-decode';
import * as actions from './store/action/index';
import UserManagement from './components/user/UserManagement';
import UserInfo from './components/user/UserInfo';
import EditUserInfo from './components/user/EditUserInfo';
import EditPassword from './components/user/EditPassword';
import Cart from './components/cart/Cart';
import Checkout from './components/CheckOut/Checkout';

function App() {
  useEffect(() => {}, []);

  const [user, setUser] = useState({ isAuth: false, role: '' });
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    const tempUser = { ...user };
    if (token !== '') {
      tempUser.isAuth = true;
      tempUser.role = jwt_decode(token).roles[0].authority;
    } else {
      const tempToken = localStorage.getItem('token');
      if (tempToken) dispatch(actions.changeToken(tempToken));
      else {
        tempUser.isAuth = false;
        tempUser.role = '';
      }
    }
    setUser(tempUser);
  }, [token]);

  return (
    <Router>
      <div className='app'>
        <Header />

        <Switch>
          <Route path='/' exact component={Menu} />
          {!user.isAuth && [
            <Route path='/login' component={Login} />,
            <Route path='/register' component={Register} />,
          ]}

          {user.isAuth && [
            <Route path='/user-info' component={UserInfo}/>,
            <Route path='/edit-user-info' component={EditUserInfo}/>,
            <Route path='/edit-password' component={EditPassword}/>
          ]}

          <Route path='/category' exact component={Category} />
          <Route path='/category/:id' component={Category} />
          <Route path='/product-detail' component={ProductDetail} />
          <Route path='/cart' component={Cart}/>
          <Route path='/checkout' component={Checkout}/>
          {user &&
            user.role === 'ADMIN' && [
              <Route path='/product-management' component={ProductManagement}/>,
              <Route path='/user-management' component={UserManagement} />,
              <Route path='/menu-management' component={MenuManagement} />,
              <Route path='/update-product/:id' component={UpdateProduct} />,
            ]}
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
