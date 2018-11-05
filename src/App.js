import React, { Component } from 'react';
import './App.css';
import HelloWorldList from './HelloWorldList';
// import PersonList from './PersonList';
import CatNav from './CatNav'


const App = () => {
  return (
    <div className="App">
      <HelloWorldList />
      <CatNav />
    </div>
  );
};

export default App;


