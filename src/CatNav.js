import React, { Component } from 'react';
import axios from 'axios';

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
        const mice = res.data;
        console.log(mice.data[0].title);
        const titles = mice.data;
        console.log(titles);
        this.setState({ titles });
      })
  }

  render() {
    return (
      <ul>
        { this.state.titles.map(category => <li key={category.id}>{category.title}</li>) }
      </ul>
    )
  }
}

