import React, { Component } from "react";

export default class Loading extends Component {
  render() {
    return (
      <div className="text-center my-5">
        <div
          className="spinner-border text-center my-5"
          style={{
            width: "12rem",
            height: "12rem",
          }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
}
