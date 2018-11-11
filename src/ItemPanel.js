import _ from 'lodash';
import React from 'react';
import './TestPageSix.css';
import axios from 'axios';


export default class ItemPanel extends React.Component
  {
  constructor () {
    super();

    this.state = {
      selectedProductId: []
    };
    this.onSelectProducts = this.onSelectProducts.bind(this);
  }

  onSelectProducts(id) {
  // const currentState = this.state.active;
  this.setState({
      selectedProductId: id
    });
  }

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
        <div>
          {_.map(currentItems, item => (
            <ItemDescriptions
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            onSelect={() => this.selectedProductId}
            active={false}
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
    <div data-testid="panel-title" active={active}>
      {title}
    </div>

    {active && <div data-testid="panel-desc">{description}</div>}
  </div>
);
