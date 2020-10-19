import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Category from './components/category/Category';
import Header from './Header';
import Footer from './Footer';

ReactDOM.render(
  <Router>
    <Header/>
    <Route path ="/" exact component ={App}/>
    <Route path ="/category" component ={Category}/>
    <Footer/>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
