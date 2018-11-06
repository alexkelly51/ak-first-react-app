import React, { Component } from 'react';
import './App.css';
import HelloWorldList from './HelloWorldList';
// import PersonList from './PersonList';
import CatNav from './CatNav'
import ProductNav from './ProductNav'


const App = () => {
  return (
    <div className="App">
      <HelloWorldList />
      <CatNav />
      <ProductNav />
    </div>
  );
};

export default App;


