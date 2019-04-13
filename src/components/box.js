import React, { Component } from "react";
import "../App.css";

class Box extends Component {
  render() {
    return (
      <div className="box">
        <div className="img">
          <img src={this.props.source} alt="logo" />
        </div>
        <h4>{this.props.name}</h4>
        <p>{this.props.des}</p>
      </div>
    );
  }
}

export default Box;
