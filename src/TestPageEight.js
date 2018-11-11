import _ from 'lodash';
import React from 'react';
import './TestPageSix.css';
import ItemListTwo from './TestFunctionTwo'
import CategoryFilter from './TestFunctionsCategory'
import axios from 'axios';



class TestPageEight extends React.Component {

  constructor () {
    super();

    this.state = {
      categories: [],
      items: [],
      selectedCategoryId: null,
      selectedItemId: null
    };

    this.onSelectCategory = this.onSelectCategory.bind(this);
    this.onSelectItem = this.onSelectItem.bind(this);
  }

  onSelectCategory(id) {
  this.setState({
      selectedCategoryId: id,
    });
  }

  onSelectItem(id) {
    this.setState({
      selectedItemId: id
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
    const { categories, items, selectedCategoryId, selectedItemId, active, itemActive} = this.state;
    const defaultCategory = _.first(categories);
    const selectedCategory = _.find(categories, i => i.id === selectedCategoryId) || defaultCategory;
    const defaultItem = _.first(items);
    const selectedItem = _.find(items, i => i.id === selectedItemId) || defaultItem;
    console.log(selectedItem)
    console.log(selectedItemId)

    return (
      <div>
        <CategoryFilter categories={categories} onSelectCategory={this.onSelectCategory} selectedCategory={selectedCategoryId}/>
        <ItemListTwo items={items} onSelectItem={this.onSelectItem}
        selectedCategory={selectedCategoryId} selectedItem={selectedItemId}  />
      </div>
    );
  }
}


export default TestPageEight

