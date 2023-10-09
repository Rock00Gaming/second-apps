import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
  c = "Alok is creating";
  render() {
    return <div>I am Creating my first class based component{this.c}</div>;
  }
}
