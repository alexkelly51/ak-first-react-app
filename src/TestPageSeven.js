import _ from 'lodash';
import React from 'react';
import './TestPageSix.css';
import ItemList from './TestFunctions'
import CategoryFilter from './TestFunctionsCategory'
import axios from 'axios';



class TestPageSeven extends React.Component {

  constructor () {
    super();

    this.state = {
      categories: [],
      items: [],
      selectedCategoryId: null,
      active: false
    };

    this.onSelectCategory = this.onSelectCategory.bind(this);
    this.activate = this.activate.bind(this)
  }

  onSelectCategory(id) {
  this.setState({
      selectedCategoryId: id,
    });
  }

  activate(id) {
    const currentState = this.state.active;
    this.setState({
      active: !currentState
    });
  }

  componentWillMount() {
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
    const { categories, items, selectedCategoryId, active} = this.state;
    const defaultCategory = _.first(categories);
    const selectedCategory = _.find(categories, i => i.id === selectedCategoryId) || defaultCategory;
    console.log(selectedCategoryId)
    console.log(active)
    return (
      <div>
        <CategoryFilter categories={categories} onSelectCategory={this.onSelectCategory} activate={this.activate} selectedCategory={selectedCategoryId}/>
        <ItemList items={items} selectedCategory={selectedCategoryId} />
      </div>
    );
  }
}


export default TestPageSeven









