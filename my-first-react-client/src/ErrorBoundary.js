import React, { Component } from 'react';
//import React, { Component, Fragment } from 'react';
import Home from "./Home";
import './App.css';

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  componentDidCatch() {     
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError){
      return <h1>Something went wrong.</h1>;
    }

    return  this.props.children
  }
}

export default App;
