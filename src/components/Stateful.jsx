import React from "react";

class Stateful extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noOfProd: 1,
    };
  }
  render() {
    return (
      <>
        <div>React state</div>
        <div>The total number of products in cart is {this.state.noOfProd}</div>
      </>
    );
  }
}

export default Stateful;
