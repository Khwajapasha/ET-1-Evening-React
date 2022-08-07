import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.Increment}>Increment</button>
        <button onClick={this.props.Decrement}>Decrement</button>
      </div>
    );
  }
}
export default Counter;
