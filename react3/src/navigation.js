import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <div className="nav-button">
        <button onClick={() => this.props.dataNumDecrease()}>{"< Previous"}</button>

        <div>
          <button>{"Edit"}</button>
          <button>{"Delete"}</button>
          <button>{"New"}</button>
        </div>

        <button onClick={() => this.props.dataNumAdd()}>{"Next >"}</button>
      </div>
    );
  }
}

export default Navigation;
