import React, { Component } from 'react';


export default class ComponentB extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
    console.log(
      `ComponentB build at ${new Date().getMilliseconds()} ms`
    );

    this.makeError = this.makeError.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log(
      `ComponentB Will Receive Props at ${new Date().getMilliseconds()} ms`
    );
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(`ComponentB Will Update at ${new Date().getMilliseconds()} ms`);
  }

  componentWillMount() {
    console.log(`ComponentB Will Mount  at ${new Date().getMilliseconds()} ms` );
  }

  componentWillUnmount() {
    console.log(`ComponentB Will Umount  at ${new Date().getMilliseconds()} ms`);
  }

  makeError() {
    console.log(
      `ComponentB Set hasError to True at  at ${new Date().getMilliseconds()} ms`
    );
    this.setState({ hasError: true });
  }

  render() {
    console.log(`ComponentB Rendering at ${new Date().getMilliseconds()} ms`);
    if (this.state.hasError) {
      throw new Error('I crashed!');
    }
    return (
      <b>
        {this.props.someProps} <br />
        <small>Check the console</small>
        <br />
        <button onClick={this.makeError}> Trigger error</button>
      </b>
    );
  }

  componentDidMount() {
    console.log(`ComponentB Did Mount at ${new Date().getMilliseconds()} ms`);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      `ComponentB Should Update : Returning true at ${new Date().getMilliseconds()} ms`
    );
    return true;
  }

  componentDidUpdate() {
    console.log(`ComponentB Did Update  at ${new Date().getMilliseconds()} ms`);
  }
}