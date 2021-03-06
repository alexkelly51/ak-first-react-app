import _ from 'lodash';
import React from 'react';
import './TestPageSeven.css';
import axios from 'axios';

let ItemList = ({items, selectedCategory}) => {
  const currentItems = items
    .filter(item => item.categories.find(itemCategory => itemCategory.id === selectedCategory));


  return (
    <div className="itemsList ">
      {_.size(currentItems) === 0 ? (
        <div className="noItems">
          <h3> No Items </h3>
        </div>
      ) : (
        <div>
          {_.map(currentItems, item => (
            <ItemDescriptions
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            // onSelect={() => this.selectedItem}
            // active={false}
            />
          ))
      }
        </div>
      )}
    </div>
  );
};

export default ItemList


let ItemDescriptions = ({id, title, description, onSelect, active}) => (
  <div onClick={onSelect}>
    <div className= "item" active={active}>
      {title}
    </div>

    {active && <div>{description}</div>}
  </div>
);


