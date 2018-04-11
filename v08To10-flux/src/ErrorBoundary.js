import React, { Component } from 'react';
//import React, { Component, Fragment } from 'react';
import './App.css';

export default class ErrorBoundary extends Component {
  
  state = { error: false, errorInfo: null };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    console.log(
      `Component did catch working at ${new Date().getMilliseconds()} ms`
    );
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return <h2>Something went wrong.</h2>;
    }
    return this.props.children;
  }
}
