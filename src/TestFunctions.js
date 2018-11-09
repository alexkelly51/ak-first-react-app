import _ from 'lodash';
import React from 'react';
import './TestPageSix.css';
import axios from 'axios';

let ItemList = ({items, selectedCategory}) => {
  const currentItems = items
    .filter(item => item.categories.find(itemCategory => itemCategory.id === selectedCategory));
  return (
    <div>
      {_.size(currentItems) === 0 ? (
        <div>
          <h3> No Items </h3>
        </div>
      ) : (
        <div >
          {_.map(currentItems, item => (
      <div key={item.id} >
         { item.title }
      </div>

          ))}
        </div>
      )}
    </div>
  );
};

export default ItemList

