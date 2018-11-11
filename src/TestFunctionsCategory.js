import _ from 'lodash';
import React from 'react';
import './TestPageSeven.css';
import axios from 'axios';

let CategoryFilter = ({ categories, onSelectCategory, activate, selectedCategory}) => {
  console.log(onSelectCategory)
  console.log(activate)
  console.log(selectedCategory)
  const links = categories.map(i => (
    <div key={i.id} className="categoryItem" onClick={() => onSelectCategory(i.id)}>
      <a key={i.id} href="#" onClick={() => activate((i.id)) } className={selectedCategory === i.id ? "textBold" : "textNotBold"}>
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

