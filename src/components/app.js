import React, { Component } from "react";
import Login from "./login"

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Login />

        <div style={{ color: "red" }}>
          Warning: this is the experimental template, pardon the bugs
        </div>
      </div>
    );
  }
}
