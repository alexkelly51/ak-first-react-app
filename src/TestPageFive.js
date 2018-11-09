import _ from 'lodash';
import React, { Component } from 'react';
import './TestPageFour.css';
import axios from 'axios';



class TestPageFive extends React.Component {

  constructor () {
    super();

    this.state = {
      categories: [],
      items: [],
      selectedCategoryId: null
    };

    this.onSelectCategory = this.onSelectCategory.bind(this);
  }

  onSelectCategory(id) {
  this.setState({
      selectedCategoryId: id
    });
  }

  componentWillMount() {
    const {categories, items} = this.state
    axios.get(`https://api.gousto.co.uk/products/v2.0/categories`)
      .then(res => {
        const allData = res.data;
        const categories = _.sortBy(allData.data, 'title');
        this.setState({ categories: categories });
      });
    axios.get(`https://api.gousto.co.uk/products/v2.0/products?includes[]=categories&includes[]=attri`)
      .then(res => {
        const allDataItems = res.data;
        const items = _.sortBy(allDataItems.data, 'title');
        this.setState({ items: items });
      })
  }


  render() {
    const { categories, items, selectedCategoryId } = this.state;
    const defaultCategory = _.first(categories);
    const selectedCategory = _.find(categories, i => i.id === selectedCategoryId) || defaultCategory;
    console.log(selectedCategory)
    console.log(selectedCategoryId)
    console.log(categories)
    console.log(items)
    return (
      <div>
        <CategoryFilter categories={categories} onSelectCategory={this.onSelectCategory} />
        <ItemList items={items} selectedCategory={selectedCategoryId} />
      </div>
    );
  }
}


let CategoryFilter = ({ categories, onSelectCategory}) => {
  const links = categories.map(i => (
    <div key={i.id} className="categoryItem" >
      <a href="#" onClick={() => onSelectCategory(i.id)}>
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


export default TestPageFive


    // .size(items === 0 ? (
    //     <div>
    //       "No items"
    //     </div>
    //   ) : (






