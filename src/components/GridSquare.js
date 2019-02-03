import React, { Component } from "react";

class GridSquare extends Component {
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
      <button
        className={
          "pad " + (this.state.on ? "on " + this.props.inst + "Color" : null)
        }
        data-instrument={this.props.inst}
        onClick={this.toggleOnClass}
      />
    );
  }
}

export default GridSquare;
