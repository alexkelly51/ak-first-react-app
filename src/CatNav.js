import React, { Component } from 'react';
import axios from 'axios';
import './CatNav.css';

export default class CatNav extends React.Component {
  constructor(props){
    super(props)
   this.state = {
    titles: []
  };
}

  componentDidMount() {
    axios.get(`https://api.gousto.co.uk/products/v2.0/categories`)
      .then(res => {
        const allData = res.data;
        // console.log(allData.data[0].title);
        const titles = allData.data;
        // console.log(titles);
        this.setState({ titles });
      })
  }

  render() {
    return (
      <div className="categoriesList">
        { this.state.titles.map(category => <p className="categoryItem" key={category.id}>{category.title}</p>) }
      </div>
    )
  }
}

