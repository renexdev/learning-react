import React, { Component } from 'react';


export default class ComponentA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reRendered: 'false'
    };
    console.log(`ComponentA build at ${new Date().getMilliseconds()} ms`);
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(`ComponentA Will Update at ${new Date().getMilliseconds()} ms`);
  }

  componentWillMount() {
    console.log(`ComponentA Will Mount at ${new Date().getMilliseconds()} ms`);
  }

  componentWillUnmount() {
    console.log(`ComponentA Will Umount at ${new Date().getMilliseconds()} ms`);
  }

  render() {
    console.log(`ComponentA Rendering at ${new Date().getMilliseconds()} ms`);
    return <b>
    I'm Component A
    <br />
    </b>;
  }

  componentDidMount() {
    console.log(`ComponentA Did Mount at ${new Date().getMilliseconds()} ms`);
    console.log('---- Changing state in component A ----');
    this.setState({ reRendered: 'true' });
  }

  componentDidUpdate() {
    console.log(`ComponentA Did Update at ${new Date().getMilliseconds()} ms`);
  }
}