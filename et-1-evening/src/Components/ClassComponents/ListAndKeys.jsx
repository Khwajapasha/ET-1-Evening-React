import React, { Component } from "react";
class ListAndKeys extends Component {
  render() {
    return (
      <>
        <div
          style={{
            border: "2px solid red",
            width: "10rem",
            display: "inline-block",
          }}
        >
          <img
            src={this.props.img}
            alt="React Logo"
            style={{ width: "8rem", height: "8rem" }}
          />
          <p>{this.props.dec}</p>
          <i>Price: {this.props.price}</i>
          <br />
          <button>Show More</button>
        </div>
      </>
    );
  }
}

export default ListAndKeys;
