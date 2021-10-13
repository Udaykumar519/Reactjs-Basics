import React, { Component } from "react";

class UserGreeting extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    if (this.state.isLoggedIn) {
      return <div>Welcome Uday</div>;
    } else {
      return <div>Welcome Guest</div>;
    }
  }
}

export default UserGreeting;