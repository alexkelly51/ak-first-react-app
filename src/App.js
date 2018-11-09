import React, { Component } from 'react';
import './App.css';
import HelloWorldList from './HelloWorldList';
// import PersonList from './PersonList';
import CatNav from './CatNav'
import ProductNav from './ProductNav'
import TestPage from './TestPage'
import TestPageTwo from './TestPageTwo'
import TestPageThree from './TestPageThree'
import TestPageFive from './TestPageFive'


const App = () => {
  return (
    <div className="App">
      <h1> Gousto Store Cupboard</h1>
      <h2>Click on a category</h2>
      <TestPageFive />


    </div>
  );
};

export default App;

