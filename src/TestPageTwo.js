import _ from 'lodash';
const React = require('react');
const ReactDOM = require('react-dom');





class Nav extends React.Component {

  constructor () {
    super();

    this.state = {
      categories: [
        { title: 'First Category', id: 0 },
        { title: 'Second Category', id: 1 },
        { title: 'Third Category', id: 2 }
      ],
      items: [
        { title: 'Item 1', id: 0, category: { id: 0 } },
        { title: 'Item 2', id: 1, category: { id: 0 } },
        { title: 'Item 3', id: 2, category: { id: 0 } },
        { title: 'Item 4', id: 3, category: { id: 1 } },
        { title: 'Item 5', id: 4, category: { id: 1 } },
        { title: 'Item 6', id: 5, category: { id: 2 } },
        { title: 'Item 7', id: 6, category: { id: 2 } }
      ],
      selectedCategoryId: null
    };

    this.onSelectCategory = this.onSelectCategory.bind(this);
  }

  onSelectCategory(id) {
    this.setState({
      selectedCategoryId: id
    });
  }

  render() {
    const { categories, items, selectedCategoryId } = this.state;
    const deafultCategory = _.first(categories);
    const selectedCategory = _.find(categories, i => i.id === selectedCategoryId) || deafultCategory;
    return (
      <div>
        <CategoryFilter categories={categories} onSelectCategory={this.onSelectCategory} />
        <ItemList items={items} selectedCategory={selectedCategory} />
      </div>
    );
  }
}

var CategoryFilter = ({ categories, onSelectCategory}) => {
  const links = categories.map(i => (
    <div key={i.id}>
      <a href="#" onClick={() => onSelectCategory(i.id)}>
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

var ItemList = ({items, selectedCategory}) => {
  const currentItems = items
    .filter(i => i.category.id === selectedCategory.id)
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


export default Nav
