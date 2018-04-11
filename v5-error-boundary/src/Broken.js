import React, { Component } from 'react';

export default class Broken extends Component {
  constructor(props) {
    super(props);
    this.state = { throw: false, count: 0 };
  }

  render() {
    if (this.state.throw) {
      throw new Error("YOLOLO");
    }

    return (
      <div>
        <button
          onClick={e => {
            this.setState({ throw: true });
          }}
        >
          Trigger error
        </button>
        
        <button onClick={e => {
          this.setState(({ count }) => ({
            count: count + 1
          }));
        }}>Count</button>

        <div>
          {"All good here. Count: "}{this.state.count}
        </div>
      </div>
    );
  }
}