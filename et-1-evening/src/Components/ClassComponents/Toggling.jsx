import React, { Component } from "react";

class Toggling extends Component {
  render() {
    return (
      <div>
        <p>{this.props.item.add}</p>
        <button onClick={this.props.handleToggle}>Show</button>
        {this.props.isHidden && <h1>Lorem ipsum dolor sit amet.</h1>}
      </div>
    );
  }
}
export default Toggling;
