import React from "react";

export default class Lifecycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      name: "User(Default)",
      adminLoggedIn: false,
      num: 8,
    };
  }
  componentDidMount() {
    // actions occurs when the component is mounted
    // alert("component is being mounted");
    this.setState({ showModal: true });
  }

  //This gets updated whenever any component is updated
  //where there is an update on the page/ component it triggers an alert
  // this means ! not

  //   componentDidUpdate() {
  //     alert("Component is being updated");
  //   }
  updateName = () => {
    this.setState({ name: "Micheal" });
  };

  //   The component will unmount will get triggered when the component is about to get taken off
  // when the component is taken off the component will unmount gets triggered
  componentWillUnmount() {}

  render() {
    return (
      <div>
        Lifecycle
        <div
          //This is an if statement this is false then then the modal will show
          className={`custom-modal shadow-lg ${
            !this.state.showModal && "d-none"
          } `}
        >
          Show when the page is mounted
          <div>{this.state.name}</div>
          <p>Change your name to remove the modal</p>
          <button onClick={this.updateName}>Change Name</button>
        </div>
        {this.state.adminLoggedIn ? <Admin /> : <User />}
        {/* <button onClick= {() => alert("hello")}> Click to show alert</button> */}
        <button on onClick={() => this.setState({ adminLoggedIn: true })}>
          chnage to admin{" "}
        </button>
      </div>
    );
  }
}

class User extends React.Component {
  componentWillUnmount() {
    alert("I am being removed");
  }

  render() {
    return <div className="user">Hello User</div>;
  }
}

class Admin extends React.Component {
  render() {
    return <div className="admin"> I have admin rights</div>;
  }
}
