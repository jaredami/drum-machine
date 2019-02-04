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

  getStyle = () => {
    return {
      transform: this.state.on ? "scale(0.9)" : "scale(1)"
    };
  };

  render() {
    return (
      <button
        className={
          "pad " + (this.state.on ? "on " + this.props.inst + "Color" : null)
        }
        data-instrument={this.props.inst}
        onClick={this.toggleOnClass}
        style={this.getStyle()}
      />
    );
  }
}

export default GridSquare;
