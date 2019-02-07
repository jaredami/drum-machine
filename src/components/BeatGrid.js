import React, { Component } from "react";
import GridSquareColumn from "./GridSquareColumn.js";

class BeatGrid extends Component {
  render() {
    const columnArrDark = Array(4).fill(
      <GridSquareColumn colType="col-dark" />
    );
    const columnArrLight = Array(4).fill(
      <GridSquareColumn colType="col-light" />
    );

    return (
      <div id="beat-grid">
        {columnArrDark}
        {columnArrLight}
        {columnArrDark}
        {columnArrLight}
      </div>
    );
  }
}

export default BeatGrid;
