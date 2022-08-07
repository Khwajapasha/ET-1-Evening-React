import React, { Component } from "react";
import "./Navigation.css";
class Navigation extends Component {
  render() {
    return (
      <nav>
        <a href="/#">{this.props.link1}</a>
        <a href="/#">{this.props.link2}</a>
        <a href="/#">{this.props.link3}</a>
      </nav>
    );
  }
}
export default Navigation;
