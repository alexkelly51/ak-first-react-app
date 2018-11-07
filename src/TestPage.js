import React, { Component } from 'react';
import axios from 'axios';
import './CatNav.css';

export default class TestPage extends React.Component {
  constructor(props){
    super(props)
    this.boxClick = this.boxClick.bind(this);
    this.state = {
      categories: [],
      bgColor: ""
    };
  }


  boxClick = (e) => {
    this.setState({
      bgColor: "red"
    })
  }

  render() {
    return (
      <div className="categoriesList">
        { this.state.categories.map(category =>
          <div key={category.id} style={{backgroundColor: this.state.bgColor}} onClick={this.boxClick}>
              <p className= "categoryItem" onClick={ () => this.activeClass} key={category.id}>{category.title}</p>
          </div>
          ) }
      </div>
    )
  };


  componentDidMount() {
    axios.get(`https://api.gousto.co.uk/products/v2.0/categories`)
      .then(res => {
        const allData = res.data;
        // console.log(allData.data[0].title);
        const categories = allData.data;
        // console.log(titles);
        this.setState({ categories });
      })
  };

}






// onClick ={myFunction}
// myFunction = className ? is this if true : is this if false
// toggle between true and false

//onClick shoukd be in the div and then call a function which looks at previous state and changes it from true to false and toggles and depending on if true or false it will return the class




// api
// category list
// select a category and highlight
// display products
// search bar
// search functionality of bar
