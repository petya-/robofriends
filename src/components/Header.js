import React, { Component } from "react";
import { render } from "@testing-library/react";

class Header extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <h1 className="f1">RoboFriends</h1>;
  }
}

export default Header;
