import React, { Component } from "react";
import GridSquare from "./GridSquare.js";

class GridSquareColumn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false
    };
    this.toggleOnClass = this.toggleOnClass.bind(this);
  }

  toggleOnClass() {
    const currentState = this.state.on;
    this.setState({ on: !currentState });
  }

  render() {
    return (
      <div className={"col " + this.props.colType}>
        <GridSquare inst="crash" />
        <GridSquare inst="ride" />
        <GridSquare inst="hatOpen" />
        <GridSquare inst="hatClosed" />
        <GridSquare inst="tom" />
        <GridSquare inst="snare" />
        <GridSquare inst="clap" />
        <GridSquare inst="kick" />
      </div>
    );
  }
}

export default GridSquareColumn;
