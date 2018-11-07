const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');

// These should probably be imported from a constants.js file
const CATEGORIES_ENDPOINT = 'https://api.gousto.co.uk/products/v2.0/categories';
const PRODUCTS_ENDPOINT = 'https://api.gousto.co.uk/products/v2.0/products?includes[]=categories&includes[]=attributes&sort=position&image_sizes[]=365&image_sizes[]=400&period_id=120';

class NavContainer extends React.Component({
  // All your state lives in your topmost container and is
  // passed down to any component that needs it
  getInitialState() {
    return {
      categories: [],
      items: [],
      selectedCategoryId: null
    }
  },

  // Generic method that's used to set a selectedCategoryId
  // Can now be passed into any component that needs to select a category
  // without needing to worry about dealing with events and whatnot
  selectCategory(category) {
    this.setState({
      selectedCategoryId: category
    });
  },

  componentDidMount() {
    this.serverRequest = axios.all([
      axios.get(CATEGORIES_ENDPOINT),
      axios.get(PRODUCTS_ENDPOINT)
    ])
    .then(axios.spread((categoriesResponse, itemsResponse) => {
      console.log('Categories', categoriesResponse.data.data);
      console.log('Item', itemsResponse.data.data);

      // This `this` should work due to ES6 arrow functions
      this.setState({
        categories: categoriesResponse.data.data,
        items : itemsResponse.data.data
      });
    }));
  },

  componentWillUnmount() {
    this.serverRequest.abort();
  },

  render() {
    // ABD: Always Be Destructuring
    const {
      categories,
      items,
      selectedCategoryId
    } = this.state;

    return (
      <div className="navigation">
        <h1>
          Store Cupboard
        </h1>

        <NavigationCategoryList
          categories={categories}
          // Pass the select function into the category list
          // so the category items can call it when clicked
          selectCategory={this.selectCategory} />

        <NavigationSubCategoryList
          items={items}
          // Pass the selected category into the list of items
          // to be used for filtering the list
          selectedCategoryId={selectedCategoryId} />
      </div>
    );
  }
});
