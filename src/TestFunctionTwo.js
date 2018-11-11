import _ from 'lodash';
import React from 'react';
import './TestPageSeven.css';
import './TestFunctionTwo.css';
import axios from 'axios';

let ItemListTwo = ({items, onSelectItem, selectedCategory, itemActivate, selectedItem}) => {
  // console.log(selectedItem)
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
          {currentItems.map(item => (
            <ItemDescriptionsTwo
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            onSelect={() => onSelectItem(item.id)}
            active={selectedItem === item.id ? "show" : "hide"}
            headerActive={selectedItem === item.id ? "bold" : "notBold"}
            />
          ))
      }
        </div>
      )}
    </div>
  );
};

export default ItemListTwo


let ItemDescriptionsTwo = ({id, title, description, onSelect, active, headerActive}) => (
  <div onClick={onSelect}>
    <div className={headerActive}>
      <p className={headerActive}>{title}</p>
    </div>
  <div className={active}>{description}</div>
  </div>
);
