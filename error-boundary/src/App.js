import React, { Component } from 'react';
import ShowMyError from "./ShowMyError"
import ComponentA from "./ComponentA"
import ComponentB from "./ComponentB"
import Broken from "./Broken"

export default  class App extends Component {
  render() {
    const styles = {
      fontFamily: "sans-serif",
      textAlign: "center"
    };
    return (
      <div style={styles}>
        <Hello name="Error Boundary" />
        <h2>Sample 1</h2>
        <ShowMyError>
          <ComponentA />
        </ShowMyError>
        <ShowMyError>
          <ComponentB someProps={'I\'m a prop of Component B'} />
        </ShowMyError>
        <h2>Sample 2</h2>
        <ShowMyError>
            <Broken />
          </ShowMyError>
      </div>
    );
  }
}
// <h2>Start clicking to see some {"\u2728"}magic{"\u2728"}</h2>
const Hello = ({ name }) => <h1>Hello {name}!</h1>;

