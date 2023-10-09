import React, { Component } from "react";

export default class Loading extends Component {
  render() {
    return (
      <div className="text-center">
        <div
          className="spinner-border text-center"
          style={{ width: "5rem", height: "5rem", margin: "auto" }}
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
}
