import _ from 'lodash';
import React, { Component } from 'react';
import './CatNav.css';
import axios from 'axios';
const ReactDOM = require('react-dom');


class TestPageThree extends React.Component {

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
    axios.get(`https://api.gousto.co.uk/products/v2.0/categories`)
      .then(res => {
        const allData = res.data;
        // console.log(allData.data[7].id);
        const categories = allData.data;
        // console.log(categories);
        this.setState({ categories: categories });
      });
    axios.get(`https://api.gousto.co.uk/products/v2.0/products?includes[]=categories&includes[]=attri`)
      .then(res => {
        const allDataItems = res.data;
        // console.log(allData.data[0].title);
        const items = allDataItems.data;
        // console.log(items[0].categories[0].id);
        console.log(items)
        this.setState({ items: items });
      })
  }


  render() {
    const { categories, items, selectedCategoryId } = this.state;
    const deafultCategory = _.first(categories);
    const selectedCategory = _.find(categories, i => i.id === selectedCategoryId) || deafultCategory;
    console.log(selectedCategory)
    console.log(selectedCategoryId)
    console.log(categories)
    console.log(items)
    return (
      <div>
        <CategoryFilter categories={categories} onSelectCategory={this.onSelectCategory} />
        <ItemList items={items} selectedCategory={selectedCategory} />
      </div>
    );
  }
}


let CategoryFilter = ({ categories, onSelectCategory}) => {
  const links = categories.map(i => (
    <div key={i.id}>
      <a href={i.id} onClick={() => onSelectCategory(i.id)}>
        { i.title }
      </a>
    </div>
  ));
  return (
    <div>
      { links }
    </div>
  )
};

let ItemList = ({items, selectedCategory}) => {
  const currentItems = items
    // .filter(i => {
    //   i.categories.map(category => {
    //     return category.id === selectedCategory;
    //   })})
    .map(i => (
      <div key={i.id}>
        { i.title }
      </div>
    ));
  return (
    <div>
      { currentItems }
    </div>
  );
};

export default TestPageThree

// .filter(i => i.category.id === selectedCategory.id)


    // .filter(i => {
    //   i.categories.some(category => {
    //     category.id === selectedCategoryId;
    //   })
