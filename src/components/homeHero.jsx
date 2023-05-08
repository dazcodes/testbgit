import React, { Component } from "react";

export default class HomeHero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prodsInCart: 2,
    };
  }

  specificNum = () => {
    this.setState({ prodsInCart: 34 });
  };
  increaseByOne = () => {
    this.setState({ prodsInCart: this.state.prodsInCart + 1 });
  };

  decreaseByOne = () => {
    this.setState({ prodsInCart: this.state.prodsInCart - 1 });
  };

  increaseByTwo = () => {
    this.setState({ prodsInCart: this.state.prodsInCart + 4 });
  };

  render() {
    return (
      <div className="container">
        <button onClick={this.decreaseByOne}>-</button>
        {this.state.prodsInCart}
        <button onClick={this.increaseByOne}>+</button>
        <div>
          <button onClick={this.increaseByTwo}> +4</button>
        </div>
      </div>
    );
  }
}
