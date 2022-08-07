import React, { Component } from "react";
import Navigation from "./Navigation";
import Counter from "./Counter";
import Toggling from "./Toggling";
import ListAndKeys from "./ListAndKeys";
class Home extends Component {
  constructor() {
    super();
    this.state = {
      // States for navigation components
      link1: "Products",
      link2: "Services",
      link3: "Reach US",
      // State for counter
      counter: 0,
      //State for Toggling
      isHidden: true,

      courseData: [
        {
          id: 1,
          courseImage:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
          courseDescription: "Web Development Course",
          price: 3205,
        },
        {
          id: 2,
          courseImage:
            "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
          courseDescription: "Add Functionality on your page",
          price: 2000,
        },
        {
          id: 3,
          courseImage:
            "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
          courseDescription: "Thanks Khwaja",
          price: 2500,
        },
      ],
    };
  }
  Increment = () => {
    if (this.state.counter <= 9) {
      this.setState({ counter: this.state.counter + 1 });
    } else {
      alert("Maximum Number Reached");
    }
  };
  Decrement = () => {
    if (this.state.counter >= 1) {
      this.setState({ counter: this.state.counter - 1 });
    } else {
      alert("Minimum Number Reached");
    }
  };
  handleToggle = () => {
    this.setState({ isHidden: !this.state.isHidden });
  };
  render() {
    return (
      <main>
        {/* <Navigation
          link1={this.state.link1}
          link2={this.state.link2}
          link3={this.state.link3}
        />
        <h1>{this.state.counter}</h1>
        <Counter Increment={this.Increment} Decrement={this.Decrement} />
        <Toggling
          isHidden={this.state.isHidden}
          handleToggle={this.handleToggle}
        /> */}

        {this.state.courseData.map((item) => {
          console.log("item====>", item);
          return (
            <div key={item.id}>
              <ListAndKeys
                img={item.courseImage}
                dec={item.courseDescription}
                price={item.price}
              />
            </div>
          );
        })}
      </main>
    );
  }
}
export default Home;
