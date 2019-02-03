import React, { Component } from "react";
import InstrumentLabelContainer from "./InstrumentLabelContainer.js";
import BeatGrid from "./BeatGrid.js";
import InstrumentVolumeContainer from "./InstrumentVolumeContainer.js";

class BeatContainer extends Component {
  render() {
    return (
      <div id="beatContainer">
        <InstrumentLabelContainer />
        <BeatGrid />
        <InstrumentVolumeContainer />
      </div>
    );
  }
}

export default BeatContainer;
