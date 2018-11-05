import React, { Component } from 'react';
import './HelloWorld.css';

// const HelloWorld = props => {
//   return (<div className="HelloWorld">Hello {props.name}!</div>);
// };

class HelloWorld extends Component {
  render() {
    return (
      <div className="HelloWorld">
        {this.state.greeting} {this.props.name}!
        <br/>
        <button className="frenchify" onClick={this.frenchify}>Frenchify!</button>
        <br/>
        <button className="remove" onClick={this.removeGreeting}>Remove Me!</button>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = { greeting: 'Hello' };
    this.frenchify = this.frenchify.bind(this);
    this.removeGreeting = this.removeGreeting.bind(this);
  }

  frenchify() {
    this.setState({ greeting: 'Bonjour' });
  }

  removeGreeting() {
    this.props.removeGreeting(this.props.name);
  }
}

export default HelloWorld;

