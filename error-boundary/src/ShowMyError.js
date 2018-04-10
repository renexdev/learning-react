import React, { Component } from 'react';

export default class ShowMyError extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    console.log(
      `Component did catch working at ${new Date().getMilliseconds()} ms `
    );
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h1>
            Error.toString(): {this.state.error.toString()}
          </h1>
          
          <label>error.info.componentStack</label>
          {this.state.info &&
            this.state.info.componentStack.split("\n").map(i => {
              return (
                <div style={{textAlign: "left", maxWidth: "400px", margin: "0 auto"}} key={i}>
                  {i}
                </div>
              );
            })}
        </div>
      );
    }
    return this.props.children;
  }
}