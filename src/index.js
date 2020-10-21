import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Category from './components/category/Category';
import Login from './components/user/Login';
import Register from './components/user/Register';
import ProductManagement from './components/product/ProductManagement';

ReactDOM.render(
  <Router>
    <Header/>
    <Route path ="/" exact component ={App}/>
    <Route path ="/category" component ={Category}/>
    <Route path ="/login" component ={Login}/>
    <Route path ="/register" component ={Register}/>
    <Route path ="/product-management" component={ProductManagement} />
    <Footer/>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
