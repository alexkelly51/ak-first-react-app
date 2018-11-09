import _ from 'lodash';
import React from 'react';
import './TestPageSix.css';
import axios from 'axios';

let CategoryFilter = ({ categories, onSelectCategory}) => {
  const links = categories.map(i => (
    <div  key={i.id} className="categoryItem" >
      <a href={i.id} onClick={() => onSelectCategory(i.id)}>
        { i.title }
      </a>
    </div>
  ));
  return (
    <div className="categoriesList">
      { links }
    </div>
  )
};

export default CategoryFilter


