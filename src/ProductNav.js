import React, { Component } from 'react';
import axios from 'axios';
import './ProductNav.css';

export default class ProductNav extends React.Component {
  constructor(props){
    super(props)
   this.state = {
    products: []
  };
}

  componentDidMount() {
    axios.get(`https://api.gousto.co.uk/products/v2.0/products?includes[]=categories&includes[]=attri`)
      .then(res => {
        const allData = res.data;
        // console.log(allData.data[0].title);
        const products = allData.data;
        // console.log(titles);
        this.setState({ products });
      })
  }

  render() {
    return (
      <div className="productsList">
        { this.state.products.map(product => <p className="productItem" key={product.id}><strong>{product.title}</strong> - {product.description}</p>) }
      </div>
    )
  }
}
