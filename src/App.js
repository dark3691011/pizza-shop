import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Menu from './components/menu/Menu';
import Category from './category/Category';

function App() {
  return (
    <div className="app">
      <Header/>
      {/* <Menu/> */}
      <Category/>
      <Footer/>
    </div>
  );
}

export default App;
